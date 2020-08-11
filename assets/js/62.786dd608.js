(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{640:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-and-using-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-and-using-contracts"}},[e._v("#")]),e._v(" Deploying and Using Contracts")]),e._v(" "),a("p",[e._v("Once you have a CosmWasm-enabled blockchain, you can deploy a custom contract. This is similar in principle to ethereum, but there are a number of differences in the details. Since most people are familiar with that flow, let us look at some of the main similarities and differences:")]),e._v(" "),a("h2",{attrs:{id:"comparison-with-solidity-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-with-solidity-contracts"}},[e._v("#")]),e._v(" Comparison with Solidity Contracts")]),e._v(" "),a("p",[e._v("First of all, the deploy-execute process consists of 3 steps rather than 2. While Ethereum was built around the concept of many unique contracts, each possibly custom-made for any bilateral agreement, the reality seems to show that writing a bug-free contract is harder than originally thought, and a majority are copies of standard templates like OpenZepellin. With that in mind, and conscious of the overhead of uploading and validating wasm code, we define the following 3 phases of a contract:")]),e._v(" "),a("ul",[a("li",[e._v("Upload Code - Upload some optimized wasm code, no state nor contract address (example Standard ERC20 contract)")]),e._v(" "),a("li",[e._v("Instantiate Contract - Instantiate a code reference with some initial state, creates new address (example set token name, max issuance, etc for "),a("em",[e._v("my")]),e._v(" ERC20 token)")]),e._v(" "),a("li",[e._v("Execute Contract - This may support many different calls, but they are all unprivileged usage of a previously instantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract)")])]),e._v(" "),a("p",[e._v("Just like ethereum, contract instantiation and execution is metered and requires gas. Furthermore, both instantiation and execution allow the signer to send some tokens to the contract along with the message. Two key differences are that sending tokens directly to a contract, eg. via "),a("code",[e._v("SendMsg")]),e._v(", while possible, "),a("em",[e._v("does not trigger any contract code")]),e._v(". This is a clear design decision to reduce possible attack vectors. It doesn't make anything impossible,  but requires all execution of the contract to be "),a("em",[e._v("explicitly requested")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"avoiding-reentrancy-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-reentrancy-attacks"}},[e._v("#")]),e._v(" Avoiding Reentrancy Attacks")]),e._v(" "),a("p",[e._v("Another big difference is that we avoid all reentrancy attacks by design. This point deserves an article by itself, but in short "),a("a",{attrs:{href:"https://consensys.github.io/smart-contract-best-practices/known_attacks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a large class of exploits in Ethereum is based on this trick"),a("OutboundLink")],1),e._v(". The idea is that in the middle of execution of a function on Contract A, it calls a second contract (explicitly or implicitly via send).  This transfers control to contract B, which can now execute code, and call into Contract A again.  Now there are two copies of Contract A running, and unless you are very, very careful about managing state before executing any remote contract or make very strict gas limits in sub-calls, this can trigger undefined behavior in Contract A, and a clever hacker can reentrancy this as a basis for exploits, such as the DAO hack.")]),e._v(" "),a("p",[e._v("Cosmwasm avoids this completely by preventing any contract from calling another one directly. Clearly we want to allow composition, but inline function calls to malicious code creates a security nightmare. The approach taken with CosmWasm is to allow any contract to "),a("em",[e._v("return")]),e._v(" a list of messages "),a("em",[e._v("to be executed in the same transaction")]),e._v('. This means that a contract can request a send to happen after it is finished (eg. release escrow), or call into other contract. If the future messages fail, then the entire transaction reverts, including updates to the contract\'s state. This allows to atomic composition and quite a few security guarantees, with the only real downside that you cannot view the results of executing another contract, rather you can just do "revert on error".')]),e._v(" "),a("p",[e._v("Sometimes we will need information from another contract, and with the 0.8 release, we added synchronous queries to other contracts or underlying Cosmos SDK modules. These Queries only have access to a read-only database snapshot and be unable to modify state or send messages to other modules, thus avoiding any possible reentrancy concerns.")]),e._v(" "),a("h2",{attrs:{id:"resource-limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-limits"}},[e._v("#")]),e._v(" Resource Limits")]),e._v(" "),a("p",[e._v("Beyond exploits (such as the reentrancy attack), another attack vector for smart contracts is denial of service attacks. A malicious actor could upload a contract that ran an infinite loop to halt the chain or write tons of data to fill up the disk. Web Assembly provides a tight sandbox with no default access to the OS, so we only need to worry about providing tight resource limits for the smart contracts. All developers should be aware of these limits.")]),e._v(" "),a("p",[a("em",[e._v("Memory Usage")]),e._v(" - When instantiating a Wasm VM, it is provided by 32MB of RAM by default. This is to store the byte code as well as all memory used by running the process (stack and heap). This should be plenty large for almost any contract, but maybe some complex zero knowledge circuits would hit limits there. It is also small enough to ensure that contracts have minimal impact of memory usage of the blockchain.")]),e._v(" "),a("p",[a("em",[e._v("CPU Usage")]),e._v(" - The "),a("a",{attrs:{href:"https://github.com/wasmerio/wasmer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wasmer Runtime"),a("OutboundLink")],1),e._v(" that we use, has ability to inject metering logic into the wasm code. It calculates prices for various operations and charges and checks limits before every jump statement (loop, function call, etc), to produce a deterministic gas price regardless of cpu speed, platform, etc. Before executing a contract, a wasm gas limit is set based on remaining cosmos sdk gas, and gas deducted at the end of the contract (there is a constant multiplier to convert, currently 100 wasm gas to 1 sdk gas). This puts a hard limit on any CPU computations as you must pay for the cycles used.")]),e._v(" "),a("p",[a("em",[e._v("Disk Usage")]),e._v(" - All disk access is via reads and writes on the KVStore. The Cosmos SDK already "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/4ffabb65a5c07dbb7010da397535d10927d298c1/store/types/gas.go#L154-L162",target:"_blank",rel:"noopener noreferrer"}},[e._v("enforces gas payments for KVStore access"),a("OutboundLink")],1),e._v(". Since all disk access in the contracts is made via callbacks into the SDK, this is charged there. If one were to integrate CosmWasm in another runtime, you would have to make sure to charge for access there as well.")]),e._v(" "),a("h2",{attrs:{id:"lessons-learned-from-ethereum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lessons-learned-from-ethereum"}},[e._v("#")]),e._v(" Lessons Learned from Ethereum")]),e._v(" "),a("p",[e._v("Ethereum is the grandfather of all blockchain smart contract platforms and has far more usage and real world experience than any other platform. We cannot discount this knowledge, but instead learn from their successes and failures to produce a more robust smart contract platform.")]),e._v(" "),a("p",[e._v("They have compiled a list of "),a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("all known ethereum attack vectors"),a("OutboundLink")],1),e._v(" along with mitigation strategies. We shall compare Cosmwasm against this list to see how much of this applies here. Many of these attack vectors are closed by design. A number remain and a section is planned on avoiding the remaining such issues.")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#reentrancy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reentrancy"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("In cosmwasm, we return messages to execute other contracts, in the same atomic operation, but "),a("em",[e._v("after")]),e._v(" the contract has finished. This is based on the actor model and avoid the possibility of reentrancy attacks - there is never volatile state when a contract is called.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#ouflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arithmetic under/overflows"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("Rust allows you to simply set "),a("code",[e._v("overflow-checks = true")]),e._v(" in the "),a("a",{attrs:{href:"https://doc.rust-lang.org/cargo/reference/manifest.html#the-profile-sections",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cargo manifest"),a("OutboundLink")],1),e._v(" to abort the program if any overflow is detected. No way to opt-out of safe math.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#ether",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unexpected Ether"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/times.png",alt:"OPEN"}}),e._v(" "),a("em",[e._v("Bad design pattern")])])]),e._v(" "),a("p",[e._v("This involves a contract depending on complete control of it's balance. A design pattern that should be avoided in any contract system. In CosmWasm, contracts are not called when tokens are sent to them, but they can query their current balance when they are called. You can note that the "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples/blob/escrow-0.4.0/escrow/src/contract.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample escrow contract"),a("OutboundLink")],1),e._v(" doesn't record how much was sent to it during initialization, but rather "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples/blob/escrow-0.4.0/escrow/src/contract.rs#L83-L92",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases the current balance"),a("OutboundLink")],1),e._v(" when a paying out or refunding the amount. This ensures no tokens get stuck.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#delegatecall",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delegate Call"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("We don't have such Delegate Call logic in CosmWasm. You can import modules, but they are linked together at compile time, which allows them to be tested as a whole, and no subtle entry points inside of a contract's logic.")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#visibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Default Visibilities"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("Rather than auto-generating entry points for every function/method in your code (and worse yet, assuming public if not specified), the developer must clearly define a list of messages to be handled and dispatch them to the proper functions. It is impossible to accidentally expose a function this way.")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#entropy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entropy Illusion"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/times.png",alt:"OPEN"}}),e._v(" "),a("em",[e._v("Planned Fix")])])]),e._v(" "),a("p",[e._v("The block hashes (and last digits of timestamps) are even more easily manipulated by block proposers in Tendermint, than with miners in Ethereum. They should definitely not be used for randomness. There is work planned to provide a secure random beacon, and expose this secure source of entropy to smart contracts.")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#contract-reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("External Contract Referencing"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"MITIGATED"}}),e._v(" "),a("em",[e._v("Planned Mitigation")])])]),e._v(" "),a("p",[e._v("If you call a contract with a given "),a("code",[e._v("HandleMsg")]),e._v(", this just requires the contract has the specified API, but says nothing of the code there. I could upload malicious code with the same API as a desired contract (or a superset of the API), and ask you to call it - either directly or from a contract. This can be used to steal funds, and in fact we "),a("a",{attrs:{href:"./editing-escrow-contract"}},[e._v("demo this in the tutorial")]),e._v(".")]),e._v(" "),a("p",[e._v("There are two mitigations here. The first is that in CosmWasm, you don't need to call out to solidity libraries at runtime to deal with size limits, but are encouraged to link all the needed code into one wasm blob. This alone removes most usage of the external contract references.")]),e._v(" "),a("p",[e._v("The other mitigation is allowing users to quickly find verified rust source behind the wasm contract on the chain. This approach is "),a("a",{attrs:{href:"https://medium.com/coinmonks/how-to-verify-and-publish-on-etherscan-52cf25312945#bc72",target:"_blank",rel:"noopener noreferrer"}},[e._v("used by etherscan"),a("OutboundLink")],1),e._v(", where developers can publish the original source code, and it will compile the code. If the same bytecode is on chain, we know can prove it came from this rust source. We have built the deterministic build system for rust wasm, and\nhave "),a("a",{attrs:{href:"https://medium.com/confio/dont-trust-cosmwasm-verify-db1caac2d335",target:"_blank",rel:"noopener noreferrer"}},[e._v("simple tooling to validate the original source code"),a("OutboundLink")],1),e._v(".\nWe also "),a("a",{attrs:{href:"https://demonet.wasm.glass/codes",target:"_blank",rel:"noopener noreferrer"}},[e._v("released a code explorer"),a("OutboundLink")],1),e._v(" that allows you to browse contracts and locally\nverify the source code in one command.")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#short-address",target:"_blank",rel:"noopener noreferrer"}},[e._v("Short Address/Parameter Attack"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("This is an exploit that takes advantage of the RLP encoding mechanism and fixed 32-byte stack size. It does not apply to our type-checking json parser.")]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#unchecked-calls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unchecked CALL Return Values"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("CosmWasm does not allow calling other contracts directly, but rather returning message to later be dispatched by a router. The router will check the result of all messages, and if "),a("strong",[e._v("any")]),e._v(" message in the chain returns an error, the entire transaction is aborted, and state changed rolled back. This allows you to safely focus on the success case when scheduling calls to other contracts, knowing all state will be rolled back if it does not go as planned.")]),e._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#race-conditions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Race Conditions/Front Running"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/times.png",alt:"OPEN"}})])]),e._v(" "),a("p",[e._v("This is a general problem with all blockchains. The signed message is gossiped among all nodes before a block is formed. A key miner/validator could create another transaction and insert it before yours (maybe delaying yours). This is often not an issue, but shows up quite a bit in distributed exchanges. If there is a standing sell order at 90 and I place a buy order at 100, it would normally just match at 90. However, a miner could insert two transactions between, one to buy at 90, then other to sell at 100, then delay your transaction to the end. You would end up accepting their offer at 100 and they would make a profit of 10 tokens just for doing arbitrage.")]),e._v(" "),a("p",[e._v("This is also an issue in high-frequency trading and any system that relies on ordering between clients to determine the outcome, just more pronounced in blockchain as the delays are on the order of seconds, not microseconds. For most applications this is not an issue, and for decentralized exchanges, there are designs with eg. batch auctions that eliminate the potential of front running.")]),e._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#dos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Denial of Service"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/times.png",alt:"OPEN"}}),e._v(" "),a("em",[e._v("limited circumstances")])])]),e._v(" "),a("p",[e._v("The idea is that if the contract relies on some external user-defined input, it could be set up in a way that it would run out of gas processing it. Many of the cases there should not effect CosmWasm, especially as wasm runs much faster and cpu gas limits allow huge amounts of processing in one transaction (including ed25519 signature verification in wasm without a precompile). However, looping over an user-controlled number of keys in the storage will run out of gas quickly.")]),e._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#block-timestamp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Block Timestamp Manipulation"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("Tendermint provides "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#time-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("BFT Timestamps"),a("OutboundLink")],1),e._v(" in all the blockchain headers. This means that you need a majority of the validators to collude to manipulate the timestamp, and it can be as trusted as the blockchain itself. (That same majority could halt the chain or work on a fork)")]),e._v(" "),a("ol",{attrs:{start:"13"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#constructors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Constructors with Care"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("This is an idiosyncrasy of the solidity language with constructor naming. It is highly unlikely you would ever rename "),a("code",[e._v("init")]),e._v(" in cosmwasm, and if you did, it would fail to compile rather than producing a backdoor.")]),e._v(" "),a("ol",{attrs:{start:"14"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uninitialised Storage Pointers"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("CosmWasm doesn't automatically fill in variables, you must explicitly load them from storage. And rust does not allow uninitialized variables anywhere (unless you start writing "),a("code",[e._v("unsafe")]),e._v(" blocks, and make a special call to access uninitialized memory... but then you are asking for trouble). Making storage explicit rather than implicit removes this class of failures.")]),e._v(" "),a("ol",{attrs:{start:"15"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#precision",target:"_blank",rel:"noopener noreferrer"}},[e._v("Floating Points and Precision"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("Both Solidity and CosmWasm have no support for floating point operations, due to possible non-determinism in rounding (which is CPU dependent). Solidity has no alternative to do integer math and many devs hand-roll integer approximations to decimal numbers, which may introduce rounding errors.")]),e._v(" "),a("p",[e._v("In CosmWasm, You can import any rust package, and simply pick an appropriate package and use it internally. Like "),a("a",{attrs:{href:"https://docs.rs/rust_decimal/1.0.3/rust_decimal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust_decimal"),a("OutboundLink")],1),e._v(', "a Decimal implementation written in pure Rust suitable for financial calculations that require significant integral and fractional digits with no round-off errors.". Or '),a("a",{attrs:{href:"https://docs.rs/fixed/0.5.0/fixed/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fixed"),a("OutboundLink")],1),e._v(" to provide fixed-point decimal math. It supports up to 128-bit numbers, which is enough for 18 digits before the decimal and 18 afterwards, which should be enough for any use case.")]),e._v(" "),a("ol",{attrs:{start:"16"}},[a("li",[a("a",{attrs:{href:"https://github.com/sigp/solidity-security-blog#tx-origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tx.Origin Authentication"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:"/img/check.png",alt:"SAFE"}})])]),e._v(" "),a("p",[e._v("CosmWasm doesn't expose "),a("code",[e._v("tx.origin")]),e._v(", but only the contract or user directly calling the contract as "),a("code",[e._v("params.message.signer")]),e._v(". This means it is impossible to rely on the wrong authentication, as there is only one value to compare.")])])}),[],!1,null,null,null);t.default=r.exports}}]);