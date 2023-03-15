"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[20],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4996);const l={title:"Image Cell System Contract",hide_title:!0,sidebar_position:6},i="Image Cell System Contract",s={unversionedId:"getting-started/for-contributor/icsc",id:"getting-started/for-contributor/icsc",title:"Image Cell System Contract",description:"Common Knowledge Base (CKB) is the base layer of Nervos, a multi-layered blockchain network; Axon is a 100% EVM-compatible, high-performance layer 2 framework built on top of CKB. CKB cells serve as the basic units for data storage, including smart contracts. Being able to access CKB cells could significantly improve Axon's interoperability.",source:"@site/docs/getting-started/for-contributor/icsc.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/icsc",permalink:"/getting-started/for-contributor/icsc",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/icsc.md",tags:[],version:"current",lastUpdatedAt:1678859121,formattedLastUpdatedAt:"Mar 15, 2023",sidebarPosition:6,frontMatter:{title:"Image Cell System Contract",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Mempool",permalink:"/getting-started/for-contributor/mempool"},next:{title:"Network",permalink:"/getting-started/for-contributor/network"}},c={},d=[{value:"Developer Tutorial: Accessing CKB Cells Stored in ICSC",id:"developer-tutorial-accessing-ckb-cells-stored-in-icsc",level:2},{value:"Synchronizing CKB Cells To Axon: A Flow Overview",id:"synchronizing-ckb-cells-to-axon-a-flow-overview",level:2},{value:"ICSC Workflow Explained",id:"icsc-workflow-explained",level:2},{value:"Receive Transactions",id:"receive-transactions",level:3},{value:"Decode Transaction Data",id:"decode-transaction-data",level:3},{value:"Store Transaction Data",id:"store-transaction-data",level:3},{value:"Footnotes",id:"footnotes",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image-cell-system-contract"},"Image Cell System Contract"),(0,r.kt)("p",null,"Common Knowledge Base (CKB) is the base layer of Nervos, a multi-layered blockchain network; Axon is a 100% EVM-compatible, high-performance layer 2 framework built on top of CKB. CKB ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/cell/"},"cells")," serve as the basic units for data storage, including smart contracts. Being able to access CKB cells could significantly improve Axon's interoperability."),(0,r.kt)("p",null,"So, how to access CKB cells on Axon? One option is to connect to CKB every time to locate cells. However, this approach is not optimal as it decreases throughput due to network latency and the time-consuming cell indexing process. Instead, Axon maintains a system contract ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," to store the required CKB cells only, so that applications on Axon can access CKB cells through this contract. Since it functions similarly to creating an image of CKB cells, this contract is named ",(0,r.kt)("strong",{parentName:"p"},"Image Cell System Contract"),", or ",(0,r.kt)("strong",{parentName:"p"},"ICSC")," for short."),(0,r.kt)("p",null,"As an EVM-compatible chain, Axon utilizes the ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/"},"EVM MPT"),", a Modified Merkle Patricia Trie, to provide a persistent data structure for storing all (key, value) bindings. Additionally, ICSC has built a separate MPT, known as ICSC MPT, to save the space in the EVM MPT. Simply leave the root of ICSC MPT in the EVM MPT."),(0,r.kt)("h2",{id:"developer-tutorial-accessing-ckb-cells-stored-in-icsc"},"Developer Tutorial: Accessing CKB Cells Stored in ICSC"),(0,r.kt)("p",null,"Axon application developers can access CKB cells already stored in ICSC by using a precompiled contract located at address 0xf0. The usage is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// The address 0xf0 implements the function of getting cell.\n// `CellProvider` can be renamed, but `getCell` cannot.\ninterface CellProvider {\n    function getCell(bytes32 txHash, uint32 index) external returns (Cell memory cell);\n}\n\ncontract CellProviderContract {\n    function testGetCell(bytes32 txHash, uint32 index) public {\n        Cell memory cell = CellProvider(address(0xf0)).getCell(txHash, index);\n        ...\n    }\n}\n")),(0,r.kt)("p",null,"For more details, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felicityin/axon-get-cell/blob/main/contracts/CellProviderContract.sol"},"here"),"."),(0,r.kt)("h2",{id:"synchronizing-ckb-cells-to-axon-a-flow-overview"},"Synchronizing CKB Cells To Axon: A Flow Overview"),(0,r.kt)("p",null,"This section provides an overview of how CKB cells are synchronized to Axon, as shown by the red arrow in the following graph."),(0,r.kt)("img",{src:(0,o.Z)("img/for-contributors/sync cells flow.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Synchronizing CKB Cells to Axon")),(0,r.kt)("p",null,"As shown above, the entire process consists of three major components.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/axonweb3/emitter"},"Cell Emitter"),": responsible for sending cells from CKB to Forcerelay and further, to Axon\u2019s chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/synapseweb3/relayer"},"Forcerelay"),(0,r.kt)("sup",{parentName:"li",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),": takes care of the entire message relay, including relaying the requests from Cell Emitter to Axon and listening to Axon."),(0,r.kt)("li",{parentName:"ul"},"Image Cell System Contract (ICSC): a stateful contract that stores the required cells relayed from CKB.")),(0,r.kt)("p",null,"The workflow can be summarized as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Application registers the required cell format with Cell Emitter (1.1) and the chain URL with Forcerelay (1.2)."),(0,r.kt)("li",{parentName:"ol"},"Cell Emitter gets cells that match the registered format from the CKB indexer."),(0,r.kt)("li",{parentName:"ol"},"Cell Emitter requests Forcerelay to relay cells."),(0,r.kt)("li",{parentName:"ol"},"Forcerelay packages cells provided by Cell Emitter into a transaction and sends it to Axon ICSC."),(0,r.kt)("li",{parentName:"ol"},"ICSC decodes transaction data to extract CKB cells and stores them into the ICSC MPT (which will be discussed in the next section)."),(0,r.kt)("li",{parentName:"ol"},"Finally, application contracts can get cells from ICSC MPT (as mentioned in the previous section).")),(0,r.kt)("p",null,"This article focuses on the storage of CKB cells in Axon, that is ICSC, and will not delve into the specifics of Cell Emitter and Forcerelay."),(0,r.kt)("h2",{id:"icsc-workflow-explained"},"ICSC Workflow Explained"),(0,r.kt)("p",null," ICSC has a 3-step process for storing the cells relayed from CKB:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Receive transactions sent by Forcerelay"),(0,r.kt)("li",{parentName:"ol"},"Decode transaction data"),(0,r.kt)("li",{parentName:"ol"},"Store the decoded transaction data to ICSC MPT, and the root of ICSC MPT to EVM MPT")),(0,r.kt)("h3",{id:"receive-transactions"},"Receive Transactions"),(0,r.kt)("p",null,"The Forcerelay sends ETH transactions to Axon, which packs CKB cells."),(0,r.kt)("p",null,"To view the transaction details, let's examine the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/main/core/executor/src/system_contract/image_cell/contract/contracts/ImageCell.sol"},"definition")," of ICSC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ImageCell {\n    function update(\n        CkbType.OutPoint[] calldata inputs,\n        CkbType.CellInfo[] calldata outputs\n    ) public view {}\n\n    function rollback(\n        CkbType.OutPoint[] calldata inputs,\n        CkbType.OutPoint[] calldata outputs\n    ) public view {}\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update()")," : update the ICSC MPT with data relayed from CKB, including block headers and cells.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," : cells consumed in CKB, also need to be marked as consumed in the ICSC MPT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs")," : cells created in CKB, also need to be saved in the ICSC MPT."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rollback()")," : the reverse process of ",(0,r.kt)("inlineCode",{parentName:"li"},"update()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),": cells that have been reverted to an unconsumed state in CKB, also need to be marked as unconsumed in the ICSC MPT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs")," : cells that have been reverted to an uncreated state in CKB, also need to be removed from the ICSC MPT.")))),(0,r.kt)("p",null,"As mentioned earlier, ICSC has built a separate MPT to save space in the EVM MPT. This requires ICSC to be implemented as a system contract, because only system contracts can have storage space independent of the EVM MPT. Unlike general contracts, system contracts can only be written in Rust. Therefore, the contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageCell")," mentioned above must be implemented in Rust, rather than Solidity.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageCell")," is only used for generating Rust bindings to parse transaction data. This will be explained further in the next section."),(0,r.kt)("h3",{id:"decode-transaction-data"},"Decode Transaction Data"),(0,r.kt)("p",null,"After receiving the transactions sent by the Forcerelay, ICSC needs to decode the transaction data. As mentioned in the previous section, ICSC is implemented in Rust, so the transaction data needs to be decoded into ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/keyword.struct.html"},"Rust structs"),". You can use either the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ethers-contract/0.2.2/ethers_contract/macro.abigen.html"},(0,r.kt)("inlineCode",{parentName:"a"},"abigen"))," macro or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ethers-contract/0.2.2/ethers_contract/struct.Abigen.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Abigen")," builder")," to generate type-safe bindings to the contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageCell"),". "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate Ethereum contract ABI (Application Binary Interface) using ",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-runner/docs/guides/compile-contracts"},"hardhat")," or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/latest/installing-solidity.html"},"solc"),".\nTake ",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-runner/docs/guides/compile-contracts"},"hardhat")," as the example, after compiling the contracts, an ABI will be generated automatically and saved in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"artifacts/contracts/ImageCell.sol/ImageCell.json"),". Open the file and find the key ",(0,r.kt)("inlineCode",{parentName:"li"},"abi"),", whose value is what we need."),(0,r.kt)("li",{parentName:"ol"},"Generate type-safe bindings from Ethereum contract ABI using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ethers-contract/0.2.2/ethers_contract/macro.abigen.html"},(0,r.kt)("inlineCode",{parentName:"a"},"abigen"))," macro, or the\xa0",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ethers-contract/0.2.2/ethers_contract/struct.Abigen.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Abigen"),"\xa0builder"),".")),(0,r.kt)("p",null,"With the Rust binding to contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageCell"),", we can decode transaction data, as shown in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn exec_<B: Backend + ApplyBackend>(&self, backend: &mut B, tx: &SignedTransaction) -> TxResp {\n    let tx = &tx.transaction.unsigned;\n    let tx_data = tx.data();\n\n    match image_cell_abi::ImageCellCalls::decode(tx_data) {}\n    ...\n}\n")),(0,r.kt)("h3",{id:"store-transaction-data"},"Store Transaction Data"),(0,r.kt)("p",null,"Finally, we need to store the decoded transaction data into ICSC MPT, which includes cells."),(0,r.kt)("p",null,"The data storage format for CKB cell is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OutPoint (36 Bytes)"),(0,r.kt)("td",{parentName:"tr",align:null},"CellInfo (Bytes)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"key: 32 bytes tx hash + 4 bytes output index (u32 as little endian bytes)"),(0,r.kt)("li",{parentName:"ul"},"value: CellInfo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct CellInfo {\n    pub cell_output:     Bytes, // ckb_types::packed::CellOutput\n    pub cell_data:       Bytes,\n    pub created_number:  u64,\n    pub consumed_number: Option<u64>,\n}\n")),(0,r.kt)("p",null,"Once the decoded transaction data is stored in the ICSC MPT, a new MPT root will be generated automatically. This root is then stored in the ICSC account, providing a tamper-evident record of the transaction data."),(0,r.kt)("h3",{id:"footnotes"},"Footnotes"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Axon contains two types of contracts: general contracts and system contracts. The main difference is that system contracts are written in Rust only. Compared with general contracts, system contracts can invoke more system resources, such as storage. Besides, system contracts are not necessarily stored in EVM MPT, since they have their own storage space.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Forcerelay is a decentralized and trustless Relayer which is compatible with Inter-Blockchain Communication (IBC) protocol. It is responsible for all message transmission within the CKB ecosystem.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);