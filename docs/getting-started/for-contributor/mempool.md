---
title: Mempool
hide_title: true
sidebar_position: 5
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Mempool

Mempool (i.e., memory pool), or transaction pool, is the queue where unconfirmed transactions are temporarily stored for further verification in order to be included in a block. 

This brief introduction to Axon's mempool explains how Axon performs transaction validation, and helps you understand its uniqueness in the design of a high-performance EVM-compatible framework.

## Mandatory Validations

Any transaction on Axon is subject to a series of validations before and after entering into the mempool.

Before mempool, a transaction must undergo the following checks:

1. Balance must be greater than the base fee; 
2. Transaction size must be smaller than 1M bytes;
3. Other parameters including gas price, gas limit, and chain id;
4. Transaction signature validation, to verify the authenticity of the transaction;
5. De-duplicate test, to prevent duplicate transactions and guarantee the correctness of implementation.

After entering the mempool, the following rules are required:

* Transactions with the same sender are packaged strictly according to the order of nonce;
* For transactions with the same sender and the same nonce, the one with higher price will be kept;
* A transaction queue of the same sender can hold a maximum of 64 pending transactions;
* Transactions of different senders are sorted by price, from highest to lowest.

## Challenges From High-Performance, Compatibility, and Nonce

Axon’s mempool, as a high-performance framework, prioritizes high TPS. If we do full validation before packaging, the amount of transactions ready for submission per block will be very low (i.e. low TPS). Thus we made a tradeoff between TPS and revert transaction rate: Axon, in practice, only applies mandatory validations mentioned above before committing transactions. This simplifies validation process and increases the number of submitted transactions per block, at the cost of (slightly higher) possibility of transactions being reverted.

Another challenge is related to nonce. Ethereum mandates incrementing nonces on all transactions. For this reason, Axon must allow transactions that do not follow nonce increments to be temporarily held in the mempool. To minimize the negative impact of the nonce check requirements on performance, we have therefore incorporated the following designs:

* Nonce check caches the current database value that will be cleared when the block is committed, meaning that nonce changes do not occur until the block is committed, in order to reduce the amount of I/O operations. See [flush cache](https://github.com/axonweb3/axon/blob/95e37cac702d14252de61f63393a07ab8a68944a/core/mempool/src/lib.rs#L226-L238).
* A transaction that enters the pool carries the value difference between its nonce and the current nonce, to make the sorting and verification easier. See  [insert nonce difference](https://github.com/axonweb3/axon/blob/main/core/mempool/src/lib.rs#L114-L123).
* Uncommitted nonce in the pool will not be written back into the nonce check, due to poor write-back performance and the possibility of replacing the same nonce.

## Four Transaction Queues To Ensure Smooth Flow Under High TPS
The diagram below sketches the process where a transaction (with its state) passes the nonce check, enters the mempool, and goes through these queues.

<img src={useBaseUrl("img/for-contributors/Mempool fig 1. 4 queues.png")}/> 

These four queues are:

* Mapping Queue: all transactions in the pool are indexed by “hash → tx“ mapping.
* Pending Queue: supports concurrent inserts and handles all the activities associated with adding transactions to the mempool, making this process as fast as possible.
* Sorting Queue: transactions are split and sorted by senders and nonces respectively. Well-sorted transactions are inserted into package queue.
* Packaging Queue: transactions are packaged and ready to be added to the next block.

As there are multiple queues in mempool to process the indexing and the state changes of transactions respectively, the full-lifecycle record of transaction (i.e. the state changes of a transaction from entering the mempool to being submitted or discarded) is needed, allowing Axon to ensure that one transaction is accessed consistently in any queue. Therefore, as soon as a transaction enters the mempool, it will be wrapped up in the form of “tx + state”. 

The full-lifecycle record of transaction - the state changes of a transaction from entering the mempool to being submitted or discarded - is required because there are multiple queues in mempool to process the indexing and the state changes of transactions, respectively. This enables Axon to guarantee that one transaction is accessed consistently in any queue. A transaction will therefore be wrapped up in the form of "tx + state" as soon as it enters the mempool.

## System Mempool For Built-In Contracts

Axon, as a native cross-chain framework, supports not only native Ethereum-like transactions, but also other algorithms, such as [blake2_f, rsa and secp256r1](https://github.com/axonweb3/axon/tree/main/core/executor/src/precompiles), and cross-chain modules. Accordingly, Axon makes some adjustments to the mempool.

In addition to the mempool for general transactions described above, Axon has a pool for built-in contracts called system mempool. This system mempool is embedded in the general mempool and formed by a simple queue without any redundant design.

For any transaction that fits a special address, native contracts or cross-chain, it will be passed into the system pool, in a first-in-first-out queue where only one transaction can be submitted per block cycle. 

The following code shows how to check transaction address in Axon:

`pub enum TransactionAction {
    Call(H160),
    Create,}`

If  `Call(H160)` = `0xffffffffffffffffffffffffffffffffffffff00`, then it is a NativeTokenContract address;

If `Call(H160)` = [`0xb484fd480e598621638f380f404697cd9f58b0f8`](https://github.com/axonweb3/axon/blob/main/devtools/chain/config.toml#L10), then it is the cross-chain address.

The system mempool and general mempool are two mutually independent modules. Packaging and sorting in the system mempool are separated from general transactions.

<img src={useBaseUrl("img/for-contributors/Mempool fig 2. System and general mempool.png")}/> 
