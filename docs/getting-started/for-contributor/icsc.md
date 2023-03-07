---
title: Image Cell System Contract
hide_title: true
sidebar_position: 6
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Image Cell System Contract

Common Knowledge Base (CKB) is the base layer of Nervos, a multi-layered blockchain network; Axon is a 100% EVM-compatible, high-performance layer 2 framework built on top of CKB. CKB [cells](https://docs.nervos.org/docs/reference/cell/) serve as the basic units for data storage, including smart contracts. Being able to access CKB cells could significantly improve Axon's interoperability.

So, how to access CKB cells on Axon? One option is to connect to CKB every time to locate cells. However, this approach is not optimal as it decreases throughput due to network latency and the time-consuming cell indexing process. Instead, Axon maintains a system contract [^1] to store the required CKB cells only, so that applications on Axon can access CKB cells through this contract. Since it functions similarly to creating an image of CKB cells, this contract is named **Image Cell System Contract**, or **ICSC** for short.

As an EVM-compatible chain, Axon utilizes the [EVM MPT](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/), a Modified Merkle Patricia Trie, to provide a persistent data structure for storing all (key, value) bindings. Additionally, ICSC has built a separate MPT, known as ICSC MPT, to save the space in the EVM MPT. Simply leave the root of ICSC MPT in the EVM MPT.

## Developer Tutorial: Accessing CKB Cells Stored in ICSC

Axon application developers can access CKB cells already stored in ICSC by using a precompiled contract located at address 0xf0. The usage is as follows.

```solidity
// The address 0xf0 implements the function of getting cell.
// `CellProvider` can be renamed, but `getCell` cannot.
interface CellProvider {
    function getCell(bytes32 txHash, uint32 index) external returns (Cell memory cell);
}

contract CellProviderContract {
    function testGetCell(bytes32 txHash, uint32 index) public {
        Cell memory cell = CellProvider(address(0xf0)).getCell(txHash, index);
        ...
    }
}
```

For more details, please see [here](https://github.com/felicityin/axon-get-cell/blob/main/contracts/CellProviderContract.sol).

## Synchronizing CKB Cells To Axon: A Flow Overview

This section provides an overview of how CKB cells are synchronized to Axon, as shown by the red arrow in the following graph.

<img src={useBaseUrl("img/for-contributors/sync cells flow.png")}/>

*Synchronizing CKB Cells to Axon*

As shown above, the entire process consists of three major components.:

- [Cell Emitter](https://github.com/axonweb3/emitter): responsible for sending cells from CKB to Forcerelay and further, to Axon’s chain.
- [Forcerelay](https://github.com/synapseweb3/relayer)[^2]: takes care of the entire message relay, including relaying the requests from Cell Emitter to Axon and listening to Axon.
- Image Cell System Contract (ICSC): a stateful contract that stores the required cells relayed from CKB.

The workflow can be summarized as follows:

1. Application registers the required cell format with Cell Emitter (1.1) and the chain URL with Forcerelay (1.2).
2. Cell Emitter gets cells that match the registered format from the CKB indexer.
3. Cell Emitter requests Forcerelay to relay cells.
4. Forcerelay packages cells provided by Cell Emitter into a transaction and sends it to Axon ICSC.
5. ICSC decodes transaction data to extract CKB cells and stores them into the ICSC MPT (which will be discussed in the next section).
6. Finally, application contracts can get cells from ICSC MPT (as mentioned in the previous section).

This article focuses on the storage of CKB cells in Axon, that is ICSC, and will not delve into the specifics of Cell Emitter and Forcerelay.

## ICSC Workflow Explained

 ICSC has a 3-step process for storing the cells relayed from CKB:

1. Receive transactions sent by Forcerelay
2. Decode transaction data
3. Store the decoded transaction data to ICSC MPT, and the root of ICSC MPT to EVM MPT

### Receive Transactions

The Forcerelay sends ETH transactions to Axon, which packs CKB cells.

To view the transaction details, let's examine the [definition](https://github.com/axonweb3/axon/blob/main/core/executor/src/system_contract/image_cell/contract/contracts/ImageCell.sol) of ICSC.

```solidity
contract ImageCell {
    function update(
        CkbType.OutPoint[] calldata inputs,
        CkbType.CellInfo[] calldata outputs
    ) public view {}

    function rollback(
        CkbType.OutPoint[] calldata inputs,
        CkbType.OutPoint[] calldata outputs
    ) public view {}
}
```

- `update()` : update the ICSC MPT with data relayed from CKB, including block headers and cells.
    - `inputs` : cells consumed in CKB, also need to be marked as consumed in the ICSC MPT.
    - `outputs` : cells created in CKB, also need to be saved in the ICSC MPT.
- `rollback()` : the reverse process of `update()`
    - `inputs`: cells that have been reverted to an unconsumed state in CKB, also need to be marked as unconsumed in the ICSC MPT.
    - `outputs` : cells that have been reverted to an uncreated state in CKB, also need to be removed from the ICSC MPT.

As mentioned earlier, ICSC has built a separate MPT to save space in the EVM MPT. This requires ICSC to be implemented as a system contract, because only system contracts can have storage space independent of the EVM MPT. Unlike general contracts, system contracts can only be written in Rust. Therefore, the contract `ImageCell` mentioned above must be implemented in Rust, rather than Solidity.  

The `ImageCell` is only used for generating Rust bindings to parse transaction data. This will be explained further in the next section.

### Decode Transaction Data
After receiving the transactions sent by the Forcerelay, ICSC needs to decode the transaction data. As mentioned in the previous section, ICSC is implemented in Rust, so the transaction data needs to be decoded into [Rust structs](https://doc.rust-lang.org/std/keyword.struct.html). You can use either the [`abigen`](https://docs.rs/ethers-contract/0.2.2/ethers_contract/macro.abigen.html) macro or the [`Abigen` builder](https://docs.rs/ethers-contract/0.2.2/ethers_contract/struct.Abigen.html) to generate type-safe bindings to the contract `ImageCell`. 

1. Generate Ethereum contract ABI (Application Binary Interface) using [hardhat](https://hardhat.org/hardhat-runner/docs/guides/compile-contracts) or [solc](https://docs.soliditylang.org/en/latest/installing-solidity.html). 
Take [hardhat](https://hardhat.org/hardhat-runner/docs/guides/compile-contracts) as the example, after compiling the contracts, an ABI will be generated automatically and saved in the file `artifacts/contracts/ImageCell.sol/ImageCell.json`. Open the file and find the key `abi`, whose value is what we need.
2. Generate type-safe bindings from Ethereum contract ABI using the [`abigen`](https://docs.rs/ethers-contract/0.2.2/ethers_contract/macro.abigen.html) macro, or the [`Abigen` builder](https://docs.rs/ethers-contract/0.2.2/ethers_contract/struct.Abigen.html).

With the Rust binding to contract `ImageCell`, we can decode transaction data, as shown in the following example:

```rust
fn exec_<B: Backend + ApplyBackend>(&self, backend: &mut B, tx: &SignedTransaction) -> TxResp {
    let tx = &tx.transaction.unsigned;
    let tx_data = tx.data();

    match image_cell_abi::ImageCellCalls::decode(tx_data) {}
    ...
}
 ```
 ### Store Transaction Data

Finally, we need to store the decoded transaction data into ICSC MPT, which includes cells.

The data storage format for CKB cell is as follows:

| Key | Value |
| --- | --- |
| OutPoint (36 Bytes) | CellInfo (Bytes) |
- key: 32 bytes tx hash + 4 bytes output index (u32 as little endian bytes)
- value: CellInfo

```rust
struct CellInfo {
    pub cell_output:     Bytes, // ckb_types::packed::CellOutput
    pub cell_data:       Bytes,
    pub created_number:  u64,
    pub consumed_number: Option<u64>,
}
```

Once the decoded transaction data is stored in the ICSC MPT, a new MPT root will be generated automatically. This root is then stored in the ICSC account, providing a tamper-evident record of the transaction data.

### Footnotes

[^1]: Axon contains two types of contracts: general contracts and system contracts. The main difference is that system contracts are written in Rust only. Compared with general contracts, system contracts can invoke more system resources, such as storage. Besides, system contracts are not necessarily stored in EVM MPT, since they have their own storage space.
[^2]: Forcerelay is a decentralized and trustless Relayer which is compatible with Inter-Blockchain Communication (IBC) protocol. It is responsible for all message transmission within the CKB ecosystem.
