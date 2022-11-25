---
title: Send Transactions On Axon Via MetaMask
hide_title: true
sidebar_position: 2
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Send Transactions On Axon Via MetaMask

To proceed with this guide, you must have MetaMask installed. Visit [Metamask](https://metamask.io/) and you will be automatically guided to the relevant store to download the extension or app based on the device and browser you’re using.

This guide provides instructions for sending transactions on Axon via MetaMask after setting up the Axon local node.

## 1 Set Up an Axon Node

### 1.1 Local Setup

[Download Axon](https://github.com/axonweb3/axon), find <b>Install</b> in <b>README</b>, and run the following commands to start the node: 

`cargo run --release -- -c devtools/chain/config.toml -g devtools/chain/genesis_single_node.json` 

Once the node has been successfully set up, you will notice that the block height is increasing, for instance: > Overlord: state go to new height 2171.

### 1.2 Add Axon to MetaMask's Local Network

#### Open Setting


<img alt="open settings" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.1_open_settings.png")}  width="50%"/>

#### Choose Networks

<img alt="choose networks" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.2_choose_networks.png")}  width="50%"/>

#### Add Network

<img alt="Add network" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.3_Add_network.png")}  width="50%"/>

#### Config Axon Network Manually

<img alt="Config Axon Network Manually" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.4_Config_Axon_Network_Manually.png")}  width="80%"/>

On the <b>Networks</b> page, make sure that the <b>New RPC URL</b> and <b>Chain ID</b> are configured according to the following information. Copy and paste the text from the boxes below:

**New RPC URL**

```
 http://localhost:8000
```

**Chain ID**

```
2022
```

If you know Axon well enough, you can modify the <b>RPC URL</b> and <b>Chain ID</b>. They are in `devtools/chain/config.toml` and `devtools/chain/genesis_single_node.json`.

#### Save Axon Network

Once you have filled out all the items above, click <b>Save</b> and you will be notified that the Axon network has been added.

<img alt="Untitled" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled.png")}  width="80%"/>

## 2 Send a Transaction

### 2.1 Add an Account

Add your Axon Genesis account to the local network. MetaMask supports importing accounts via both private keys and keystore files.

Here we use the private key. In Axon’s repository, find `devtools/chain/config.toml` and copy the corresponding content of the privKey. 

For now, it is `0x37aa0f893d05914a4def0460c0a984d3611546cfb26924d7a7ca6e0db9950a2d`.

The account and the balance will be displayed once the account is added. The Genesis account holds 1000,000,000,000,00 AXON configured in `devtools/chain/config.toml`.

<img alt="Untitled 1" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 1.png")}  width="80%"/>

### 2.2 Send a Transaction

Click <b>Send</b> on the balance page and let’s transfer some tokens to another account. Here we are about to transfer 100 AXON to `0xdc796dfc1bb45f21d17be267877c3388d766937b`.

<img alt="Untitled 2" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 2.png")}  width="50%"/>

Click <b>Next</b>.

<img alt="Untitled 3" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 3.png")}  width="50%"/>

Click <b>Confirm</b>. 

<img alt="Untitled 4" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 4.png")}  width="80%"/>

You'll see that the transaction is in <b>Pending</b>. It takes a few seconds for the status to change, then you'll know that the transaction has been successful and the balance is 100 AXON less.

<img alt="Untitled 5" src={useBaseUrl("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 5.png")}  width="80%"/>

