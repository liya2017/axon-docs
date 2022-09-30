# About Axon

Axon is a multi-chain framework that handles thousands of TPS. Built on top of the Common Knowledge Base (CKB), layer 1 of the Nervos Network, Axon enables seamless communication across blockchain networks with its native cross-chain function. It is developer-friendly and highly scalable, connecting your projects with the most thriving blockchain ecosystems nowadays.



## Why Build With Axon?

Axon was created to help web3 builders quickly transform their ideas into reality. Whatever you’re building, whether it’s GameFi, DeFi, or NFT, your project should be scalable and cost-effective to deploy.



### High TPS

Axon uses a new Byzantine Fault Tolerance (BFT) based consensus algorithm called Overload consensus (further reading: https://github.com/nervosnetwork/overlord). It decouples transaction sequence from state consensus, so that execution and consensus process can be carried out simultaneously.

This parallel execution supports over 3000 TPS (Transaction Per Second) across hundreds of nodes, with a transaction delay of less than a few seconds.



### Easy-to-Deploy

Axon provides a full-fledged toolkit that enables web 3 developers to start building right away without having to understand the fundamentals. Designed with a different approach than Relayers, Axon automates off-chain communication, thereby significantly reducing deployment costs.

The hands-on tutorial *Zero to Axon with Axon-cli* teaches you how to build a chain from scratch in less than 15 minutes.



### Highly Interoperable

Axon will soon be fully compatible with Inter-Blockchain Communication (IBC)—the gateway to the Cosmos ecosystem, and later with all EVM-based blockchains. In addition to these top two thriving networks, Axon will be continually onboarding more protocols.



### Here’s how we do it

- CKB-VM
- Overload Consensus
- P2P Network
- Mempool



**CKB-VM**

CKB Virtual Machine (CKB-VM) is the software implementation of the RISC-V instruction set used as a scripting VM. CKB-VM can call contracts on CKB, allowing protocols to be upgraded along with the contracts without hard-coding. With a variety of algorithms precompiled, CKB-VM greatly lowers the barrier of writing EVM-compatible contracts.

- Explore more

  https://github.com/nervosnetwork/ckb-vm



**Overload Consensus**

Overload is a BFT consensus algorithm that supports over 3000 TPS across hundreds of nodes, with a transaction delay of less than a few seconds. By decoupling transaction sequence from state consensus, Overload consensus enables execution and consensus process to run in parallel.

- Explore more

  https://github.com/nervosnetwork/overlord



**P2P Network**

The network of Axon is developed on top of Tentacle, a multi-layered P2P protocol stack, where each layer functions in a relatively independent manner. This design provides maximum flexibility for developers and reduces the complexity of development.

- Explore more

  https://blog.cryptape.com/tentacle-the-network-layer-of-ckb



**Mempool**

Mempool is Axon's memory pool that performs several validations before transactions are allowed access to the pool. When a large number of transactions arrive, they are divided into four queues in the mempool to prevent TPS from exceeding the upper limit of the block intervals.



# II For DApp Devs



## *Zero to Axon with Axon-cli*

Axon-cli is an all-in-one client that enables operating Axon fast and easy. It contains initialization, DevOps, and cross-chain requests, among other functions.

*Zero to Axon with Axon-cli* is a hands-on tutorial. In less than 15 minutes, you can build a chain from scratch and learn how to start and manage a node with just one command.



### Install Axon-cli From GitHub

1. Start by cloning the Axon-cli GitHub repo from [GitHub](https://github.com/axonweb3/axon-devops/tree/main/axon-cli)

$ `git clone git@github.com:axonweb3/axon-cli.git`

2. Enter into axon-cli directory

$ `cd axon-cli`

3. Config docker

Before starting docker containers, you have to enable TCP port for docker (0.0.0.0:2375 in this case).

- On Mac OS, run:

$ `docker run -it -d --name=socat -p 2375:2375 -v /var/run/docker.sock:/var/run/docker.sock bobrik/socat TCP4-LISTEN:2375,fork,reuseaddr UNIX-CONNECT:/var/run/docker.sock`

- On Linux:

1. Create daemon.json file in /etc/docker:

```
{"hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]}
```

2. Add /etc/systemd/system/docker.service.d/override.conf

```
[Service]  ExecStart=  ExecStart=/usr/bin/dockerd
```

3. Reload the system daemon

$ `systemctl daemon-reload`

4. Restart docker

$ `systemctl restart docker.service`

5. Config data directory

$ `cp -r devtools ~/.axon/`



### Build Axon-cli Binary

Under the axon-cli directory, run the following command:

$ `cargo build --release`

Now your basic Axon-cli development environment is ready.



### Run Axon-cli

Enter the axon-cli interface by run the following command:

$ `../target/release/axon-cli`

Quit axon-cli interface by command `ctrl C`.



### Run Command Lines

There are 5 commands:

- `axon start`

You can start one (by default) or four docker nodes. For example, to start four nodes by `axon start --number=4`. You can specify the axon directory as well by adding a parameter like `-d=/root/test`.

- `axon stop`

Stop the four docker nodes just started.

- `axon rm`

Remove the four docker containers just created.

- `axon del`

Delete specific chain data by adding parameter `--data-dir`. Otherwise, it will delete the directory indicated by the command `axon start`.

For instance, when the start command is `axon start -d=devtools/chain`,  `axon del` will be the same as `axon del -d=evtools/chain` .

- `axon bm —data-dir your-path`

`bm` refers to benchmark. Start benchmark, so that transactions will be sent to the nodes. You must specify benchmark directory `--data-dir` , such as `axon bm --data-dir=/home/user/git/axon-devops/benchmark/benchmark`.



### Check Status

Check status by running the following commands:

1. **Check the liveness of nodes**

> $ `docker ps`

![liveness status](/Users/sss/Downloads/liveness status.png)



2. **Check the logs**

> $ `docker logs axon4 | grep height`

Return:

![logs status](/Users/sss/Downloads/logs status.png)

Logs contain useful information, such as block height (472 in this case), which will increase over time.



3. **Check network connection between nodes**

Install tools:

```
$ `docker exec -it axon1 /bin/bash`
$ `apt install net-tools`
$ `apt install iputils-ping`
```

> root@6f816d8be4b7:/app# ping axon2PING axon2 (172.18.0.2) 56(84) bytes of data.64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=1 ttl=64 time=0.298 ms64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=2 ttl=64 time=0.074 ms

or `netstat -tnp | grep axon` that shows 3 other nodes like following:

> root@6f816d8be4b7:/app# netstat -tnp | grep axontcp 0 0 172.18.0.3:8001 172.18.0.2:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.5:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.4:8001 ESTABLISHED 1/./axon



4. **Start benchmark**

Use `axon bm` command to start benchmark and run `docker logs bm` to check its status.

For example:

```
 $ `docker logs bm`
```

/////////////////////////////////////////////////////

 benchmark time: 60000 msendpoint: <http://172.17.0.1:8000>

 /////////////////////////////////////////////////////

waiting...preparing...

deploying contract: ERC20contract ERC20 deployed to 0xF67Bc4E50d1df92b0E4C61794A4517AF6a995CB2

preparedbenchmark case 0: ./benchmark

/////////////////////////////////////////////////////

benchmark time: 64650.558417998254 mstransaction count: 7200TPS: 111.3679475658724 mstransfer rate: 98.83

/////////////////////////////////////////////////////



5**. Start `apm`**

`apm` refers to Application Performance Management. Use `apm start` and `apm stop` commands to start and stop apm features respectively.



**Step 1 Customize config files**

1. Config **axon_node**: In file `apm/deploy/hosts`, change the `axon_node` IP to your own IP. In my case, it is `172.19.86.210`.

   For example, in file `…/apm/deploy/hosts`, write : `[axon_node]  172.19.86.210`

   

2. Config **monitor_dir**:
    In file `apm/deploy/roles/monitor/vars/main.yaml`, replace `monitor_dir` with your local directory. All monitor related files will be moved here, and the data will be stored under `monitor_dir/data`. Notice that `~` can not be used here. 

   For example, in file `…/main.yaml`, write  : `monitor_dir: /users/root/axon-cli/apm/deploy/monitor_dir`

   

3. Config **monitor_agent_dir**:
    In file `apm/deploy/roles/agent/vars/main.yaml`, set `monitor_agent_dir` to your directory. All agent related files will be moved here, and the data will be stored under `monitor_agent_dir/data`. Notice that `~` can not be used here. 

   For example , in file `…/main.yaml`, write : `monitor_agent_dir: /users/root/axon-cli/apm/deploy/monitor_dir`

   

4. Config **log_path**: In file `apm/deploy/roles/agent/vars/main.yaml`, set `log_path`. At present there is no need to modify `monitor_address` and `es_address`. Notice that `~` can not be used here. 

   For example , in file `…/main.yaml`, write : `log_path: /users/root/axon-cli/apm/deploy/monitor_log`

   

**Step 2 Start a node**

Start a node by `apm start -p=/home/user/git/axon-cli/apm`, or stop it by `apm stop`.

To clean the data, use: `apm clean -p=/home/user/git/axon-cli/apm`.

`apm start` may take a few minutes to complete due to heavy background processes.



After the setting up the right config and successfully starting `apm`, you can access the data-visualization platform Grafana by visiting `localhost:8600` in your browser.

Now you can see the `axon-node` Dashboard displayed as below. Grafana provides time range control which is 7 days by default. Click on the time units on the top navbar to change the range. (I select **Last 1 hour** as shown below.)

![dash1 last 1 hour](/Users/sss/Downloads/dash1 last 1 hour.png)

![dash2](/Users/sss/Downloads/dash2.png)

You can also view the benchmark in the Dashboard `axon-benchmark` displayed as below.

![dash3 benchmark](/Users/sss/Downloads/dash3 benchmark.png)



## Related Topics

### Axon & CKB

Axon repository on GitHub : https://github.com/axonweb3/axon

CKB docs and technical reference: https://docs.nervos.org/



### Deploy EVM DApps

Learn how to get started with EVM and deploy Solidity-based smart contracts in Hardhat environment.

Solidity : https://docs.soliditylang.org/

Hardhat : https://hardhat.org/