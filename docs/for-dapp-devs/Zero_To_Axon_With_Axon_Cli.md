---
title: Zero to Axon with Axon-cli
hide_title: true
sidebar_position: 1
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Zero to Axon with Axon-cli

Axon-cli is an all-in-one client that makes operating Axon fast and easy. It contains initialization, DevOps, and cross-chain requests, among other functions.

*Zero to Axon with Axon-cli* is a hands-on tutorial. In less than 15 minutes, you can build a chain from scratch and learn how to start and manage a node with just one command.



### Install Axon-cli From GitHub

1. Start by cloning the Axon-cli GitHub repo from [GitHub](https://github.com/axonweb3/axon-devops/tree/main/axon-cli)

$ `git clone git@github.com:axonweb3/axon-cli.git`

2. Enter into axon-cli directory

$ `cd axon-cli`

3. Config Docker

Before starting Docker containers, you have to enable TCP port for Docker (0.0.0.0:2375 in this case).

- On Mac OS, run:

$ `docker run -it -d --name=socat -p 2375:2375 -v /var/run/docker.sock:/var/run/docker.sock bobrik/socat TCP4-LISTEN:2375,fork,reuseaddr UNIX-CONNECT:/var/run/docker.sock`

- On Linux:

1. Create `daemon.json` file in `/etc/docker`:

```
{"hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]}
```

2. Add `/etc/systemd/system/docker.service.d/override.conf`

```
[Service]  ExecStart=  ExecStart=/usr/bin/dockerd
```

3. Reload the system daemon

$ `systemctl daemon-reload`

4. Restart Docker

$ `systemctl restart docker.service`

5. Config data directory

$ `cp -r devtools ~/.axon/`



### Build Axon-cli Binary

Under the axon-cli directory, run the following command:

$ `cargo build --release`

Now your basic Axon-cli development environment is ready.



### Run Axon-cli

Enter the axon-cli interface by running the following command:

$ `../target/release/axon-cli`

Quit axon-cli interface by `ctrl C`.



### Run Command Lines

There are 5 commands:

- `axon start`

You can start one (by default) or four docker nodes. For example, to start four nodes by `axon start --number=4`. You can specify the axon directory as well by adding a parameter like `-d=/root/test`.

- `axon stop`

Stop the four Docker nodes just started.

- `axon rm`

Remove the four Docker containers just created.

- `axon del`

Delete specific chain data by adding parameter `--data-dir`. Otherwise, it will delete the directory indicated by the command `axon start`.

For instance, when the start command is `axon start -d=devtools/chain`, `axon del` will be the same as `axon del -d=evtools/chain`.

- `axon bm —data-dir your-path`

`bm` refers to benchmark. Start benchmark, so that transactions will be sent to the nodes. You must specify benchmark directory `--data-dir`, such as `axon bm --data-dir=/home/user/git/axon-devops/benchmark/benchmark`.



### Status Check

Check the status by running the following commands:

1. **Check the liveness of nodes**

> $ `docker ps`

```
CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS                                    PORTS                                            NAMES
7087aae0fc3c   wenyuancas/axon:v1   "./axon -c=/app/devt…"   5 seconds ago    Up 5 seconds                              0.0.0.0:8003->8000/tcp, 0.0.0.0:8903->8100/tcp   axon4
509d345dbe92   wenyuancas/axon:v1   "./axon -c=/app/devt…"   13 seconds ago   Up 13 seconds                             0.0.0.0:8002->8000/tcp, 0.0.0.0:8902->8100/tcp   axon3
bcf08ee3df09   wenyuancas/axon:v1   "./axon -c=/app/devt…"   21 seconds ago   Restarting (137) Less than a second ago                                                    axon2
4d81c3373eed   wenyuancas/axon:v1   "./axon -c=/app/devt…"   28 seconds ago   Up 2 seconds                              0.0.0.0:8000->8000/tcp, 0.0.0.0:8900->8100/tcp   axon1
```

2. **Check the logs**

> $ `docker logs axon4 | grep height`

Return:

```
[2022-10-21T09:02:37.961286656+00:00 INFO overlord::state::process] Overlord: "02b77c74eb68af3d4d6cc7884ed6709f1a2a1af0f713382a4438ec2ea3a70d4d7f" become leader, height 1, round 3
[2022-10-21T09:02:37.962387627+00:00 WARN overlord::state::process] Overlord: state receive an outdated status, height 1, self height 1
[2022-10-21T09:02:48.281954825+00:00 INFO overlord::state::process] overlord: start from wal wal info height 1, round 3, step Propose
[2022-10-21T09:02:48.285925397+00:00 INFO overlord::state::process] Overlord: "02b77c74eb68af3d4d6cc7884ed6709f1a2a1af0f713382a4438ec2ea3a70d4d7f" become leader, height 1, round 3
[2022-10-21T09:02:48.286568906+00:00 WARN overlord::state::process] Overlord: state receive an outdated status, height 1, self height 1
```

Logs contain useful information, such as block height (472 in this case), which will increase over time.



3. **Check the network connection between nodes**

Install the tools:

```
$ `docker exec -it axon1 /bin/bash`
$ `apt install net-tools`
$ `apt install iputils-ping`
```

> root@6f816d8be4b7:/app# ping axon2PING axon2 (172.18.0.2) 56(84) bytes of data.64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=1 ttl=64 time=0.298 ms64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=2 ttl=64 time=0.074 ms

or `netstat -tnp | grep axon` that shows 3 other nodes as follows:

> root@6f816d8be4b7:/app# netstat -tnp | grep axontcp 0 0 172.18.0.3:8001 172.18.0.2:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.5:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.4:8001 ESTABLISHED 1/./axon



4. **Start benchmark**

Use `axon bm` command to start benchmark and run `docker logs bm` to check the status.

For example,

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



5. **Start `apm`**

`apm` refers to Application Performance Management. Use the `apm start` and `apm stop` commands to start and stop this feature respectively.



**Step 1 Customize config files**

1. Config **axon_node**: In file `apm/deploy/hosts`, change the `axon_node` IP to your own IP. In my case, it is `172.19.86.210`.

   For example, in file `…/apm/deploy/hosts`, write : `[axon_node]  172.19.86.210`



2. Config **monitor_dir**:
   In file `apm/deploy/roles/monitor/vars/main.yaml`, replace `monitor_dir` with your local directory. All monitor-related files will be moved here, and the data will be stored under `monitor_dir/data`. Notice that `~` can not be used here.

   For example, in file `…/main.yaml`, write  : `monitor_dir: /users/root/axon-cli/apm/deploy/monitor_dir`



3. Config **monitor_agent_dir**:
   In file `apm/deploy/roles/agent/vars/main.yaml`, set `monitor_agent_dir` to your directory. All agent-related files will be moved here, and the data will be stored under `monitor_agent_dir/data`. Notice that `~` can not be used here.

   For example, in file `…/main.yaml`, write : `monitor_agent_dir: /users/root/axon-cli/apm/deploy/monitor_dir`



4. Config **log_path**: In file `apm/deploy/roles/agent/vars/main.yaml`, set `log_path`. At present there is no need to modify `monitor_address` and `es_address`. Notice that `~` can not be used here.

   For example, in file `…/main.yaml`, write : `log_path: /users/root/axon-cli/apm/deploy/monitor_log`



**Step 2 Start a node**

Start a node by `apm start -p=/home/user/git/axon-cli/apm`, or stop it by `apm stop`.

To clean the data, use: `apm clean -p=/home/user/git/axon-cli/apm`.

`apm start` may take a few minutes to complete due to heavy background processes.



After setting up the right config and successfully starting `apm`, you can access the data-visualization platform Grafana by visiting `localhost:8600` in your browser.



Now you can see the `axon-node` Dashboard is displayed as below. Grafana provides time range control which is 7 days by default. Click on the time units on the top navbar to change the range. (I select the **Last 1 hour** as shown below.)

<img alt="dash1 last 1 hour" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash1 last 1 hour.png")}  width="100%"/>

<img alt="dash2" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash2.png")}  width="100%"/>

You can also view the benchmark in the Dashboard `axon-benchmark` displayed as below.

<img alt="dash3 benchmark" src={useBaseUrl("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash3 benchmark.png")}  width="100%"/>



### Related Topics

#### Axon & CKB

Axon repository on GitHub : https://github.com/axonweb3/axon

CKB docs and technical reference: https://docs.nervos.org/



#### Deploy EVM DApps

Learn how to get started with EVM and deploy Solidity-based smart contracts in Hardhat environment.

Solidity : https://docs.soliditylang.org/

Hardhat : https://hardhat.org/
