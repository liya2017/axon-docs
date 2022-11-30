---
title: Storage
hide_title: true
sidebar_position: 3
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Storage Module

Axon’s storage module works as a bridge between Axon and its database interface, handling the data I/O of other Axon modules.

Located at the bottom of Axon's architecture, the storage module serves as the block and state databases, as depicted below:

<img src={useBaseUrl("img/for-contributors/Fig1 overall architecture.png")}/>

<p class="axon-anno">Figure 1. A high-level view of Axon’s overall architecture and the location of the storage module</p>

The purpose of this article is to introduce the basics of Axon's storage module and how the decoupling mechanism works. Some implementation details and code examples will be given as well.

## Data Decoupling

Axon storage module ([GitHub repo](https://github.com/axonweb3/axon/tree/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/core/storage)) is used to store persistent data.

<img src={useBaseUrl("img/for-contributors/Fig2 storage module design.png")}/>

<p class="axon-anno">Figure 2. The design of Axon’s storage module and other related components</p>

Storage module connects memory or databases through the adapter pattern, as shown in the diagram above. This adapter plays a central role in data decoupling. First, it decouples Axon from other databases. When new databases are added, you only need to implement their corresponding traits. As soon as they are abstracted into a trait, other Axon modules can interact with Axon's database. 

Axon’s adapter pattern can also decouple the storage module from other modules inside Axon. The decoupling enables a module to use data by creating an adapter instance based on the previous abstract trait, so that other modules can process the data through this instance. This is how the decoupling of the storage module is implemented. 

Find traits in: `protocol/src/traits/storage.rs`; find the implementation in `core/storage/src/lib.rs`.

## File Structure

The storage folder (location:`core/storage/src`) contains the folder adapter and four files: cache.rs, libs.rs, hash_key.rs, schema.rs.

<img src={useBaseUrl("img/for-contributors/Fig. file structure.png")} width="30%"/>

### Folder adapter

There are three files in the folder adapters: memory.rs , rocks.rs, mod.rs.

- **mod.rs** is the entry of the adapter module.
- **memory.rs** is used to access in-memory data.
- **rocks.rs** is used to access the rocksdb database.

All added concrete databases should implement the StorageAdapter trait. For instance, to support leveldb, a new file named leveldb.rs should be created first. Then the trait StorageAdapter should be implemented for leveldb in leveldb.rs.

### cache.rs

It defines the data structure used to implement the cache function. 

### libs.rs

It is used to manage the implementation of traits related to data reading and writing in other modules.

### hash_key.rs

It is used to generate the hash type of the database key.

### schema.rs

It is used to manage the formatting of database entries.

## Code Explained

Let’s look at some code. Here I take a relatively simple module — IBC as an example to illustrate how the storage module works by defining and implementing the trait.

### Define Storage Trait

All traits should be written in the folder `protocol/src/traits/` ; the traits related to data I/O are defined in `protocol/src/traits/storage.rs`.

In this example, we define the trait [`IbcCrossChainStorage`](https://github.com/axonweb3/axon/blob/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/protocol/src/traits/storage.rs#L212) as follows:

```rust
pub trait IbcCrossChainStorage {
    fn get_client_type(&self, client_id: &ClientId) -> ProtocolResult<Option<ClientType>>;

    fn get_client_state(&self, client_id: &ClientId) -> ProtocolResult<Option<AnyClientState>>;

    // ...other functions
}
```

### Implement Storage Trait

After defining the storage trait of the module IBC, we implement the [`IbcCrossChainStorage`](https://github.com/axonweb3/axon/blob/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/core/storage/src/lib.rs#L659) trait in storage module.

```rust
impl<Adapter: StorageAdapter> IbcCrossChainStorage for ImplStorage<Adapter> {
    fn get_client_type(&self, client_id: &ClientId) -> ProtocolResult<Option<ClientType>> {
        Ok(self
            .adapter
            .get::<ClientTypeSchema>(IbcWrapper(ClientTypePath(client_id.clone())))?
            .map(|res| res.0))
    }

    fn get_client_state(&self, client_id: &ClientId) -> ProtocolResult<Option<AnyClientState>> {
        Ok(self
            .adapter
            .get::<ClientStateSchema>(IbcWrapper(ClientStatePath(client_id.clone())))?
            .map(|res| res.0))
    }
    // ...other implements
}
```
