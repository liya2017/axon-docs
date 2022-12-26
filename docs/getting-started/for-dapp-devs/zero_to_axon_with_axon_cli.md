---
title: Zero to Axon with Axon-cli
hide_title: true
sidebar_position: 1
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Zero to Axon with Axon-cli

Axon-cli is an all-in-one client that makes operating Axon fast and easy. It contains initialization, DevOps, and cross-chain requests, among other functions.

**Zero to Axon with Axon-cli** is a hands-on tutorial. In less than 15 minutes, you can build a chain from scratch and learn how to start and manage a node with just one command.

### Requirement

Axon-cli heavily relies on `docker`, make sure that you have installed it. To run `apm`, `ansible-playbook` is also required.

### Install Axon-cli From GitHub

Start by cloning Axon-cli from the [GitHub repo](https://github.com/axonweb3/axon-cli) by command:


```bash
git clone https://github.com/axonweb3/axon-cli.git
```

Enter into Axon-cli directory


```bash
cd axon-cli
```

Under the Axon-cli directory, run the following command to build binary:

```bash
cargo build --release
```

Now your basic Axon-cli development environment is ready. Enter the Axon-cli interface by running the following command:


```bash
./target/release/axon-cli
```

To quit Axon-cli, use `Ctrl` + `C`.

### Managing Axon nodes

Before starting, we have to generate key pairs for nodes, by running:

```bash
axon keygen
```

To start multiple nodes, use `-n` argument to specify nodes number:

```bash
axon keygen -n <NUMBER OF NODE>
```

Then, we need to generate config files from these key paris:

```bash
axon config-gen
```

Now, we can start nodes:

```bash
axon start
```

See `axon help` for more usage.

### Application performance monitoring (APM)

Start APM monitor and agent(s) by running:

```bash
apm monitor start
apm monitor agent
```

You might need to input your user password.

After setting up, you can access the APM platform Grafana by visiting [localhost:8600](http://localhost:8600) in your browser.

Now you can see the `axon-node` Dashboard is displayed as below. Grafana provides time range control which is 7 days by default. Click on the time units on the top navbar to change the range. (The **Last 1 hour** is selected here as shown below.)

<img alt="dash1 last 1 hour" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash1 last 1 hour.png")}  width="100%"/>

<img alt="dash2" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash2.png")}  width="100%"/>

You can also view the benchmark in the Dashboard `axon-benchmark` displayed as below.

<img alt="dash3 benchmark" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash3 benchmark.png")}  width="100%"/>

### Benchmark

Use `benchmark start` and `benchmark stop` control the benchmark status.

### Related Topics

#### Axon & CKB

Axon repository on GitHub : https://github.com/axonweb3/axon

CKB docs and technical reference: https://docs.nervos.org/

#### Deploy EVM DApps

Learn how to get started with EVM and deploy Solidity-based smart contracts in Hardhat environment.

Solidity : https://docs.soliditylang.org/

Hardhat : https://hardhat.org/
