(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{658:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"serialization-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serialization-formats"}},[e._v("#")]),e._v(" Serialization Formats")]),e._v(" "),a("p",[e._v("One of the driving forces in developing CosmWasm, besides security by design, was to include a very nice Developer UX. Key to this is the ability to inspect and debug messages sent on the blockchain, and parse results without needing complex libraries. Also not requiring downloading custom schemas and ABIs just to make a method call.")]),e._v(" "),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),a("p",[e._v("The natural solution was to use JSON everywhere. It is self-describing, human-readable, and used in APIs everywhere. It does have some downsides, such as handling numbers over 2^53 (just use strings), no clear distinction between strings and base64-encoded binary, and no hard-coded schema. We auto-generate "),a("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),a("OutboundLink")],1),e._v(" descriptors for the "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples/tree/master/escrow/schema",target:"_blank",rel:"noopener noreferrer"}},[e._v("public API of contracts"),a("OutboundLink")],1),e._v(", which can be used to inspect the supported API and optionally used in client side tooling for auto-validation of messages.")]),e._v(" "),a("p",[e._v("The feedback when developing and debugging with this has been positive, and we are quite happy with the Developer UX with this. It is too early to tell if the message size and free-form schema will become a hinderance in production. However, please note that contracts define their own parsing logic for messages, the codec is not enforced by the framework. We provide first-class support for json through "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/master/src/serde.rs",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cosmwasm::serde")]),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-template",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cosmwasm-template")]),a("OutboundLink")],1),e._v(", but anyone can swap this out - provided they provide client support for the format.")]),e._v(" "),a("p",[e._v("It is helpful to have consistency to aid client development, as well as contract-contract calls.")]),e._v(" "),a("h2",{attrs:{id:"protobuf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),a("p",[e._v("Protobuf is a well-known and widely-supported binary format. It gives a stricter schema guarantees than JSON and more compact format. We considered using this optionally for encoding message, and "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/pull/55",target:"_blank",rel:"noopener noreferrer"}},[e._v("even did a spike on it"),a("OutboundLink")],1),e._v(". It led to larger wasm code and more gas usage, and only provided some moderate space savings in the size of the transaction. This ideas has since been placed in the icebox. However, as we kept adding features\nto our JSON lib to support better serialization of strings, binary data and serde tags, this may now be more competitive. We will revisit this when adding\nProtobuf support to wasmd as part of the 0.39 upgrade.")]),e._v(" "),a("h2",{attrs:{id:"cap-n-proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap-n-proto"}},[e._v("#")]),e._v(" Cap'n Proto")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://capnproto.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cap'n Proto"),a("OutboundLink")],1),e._v(" is a super-lean encoding format with zero-copy reads, and no parsing needed. This has been "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/issues/78",target:"_blank",rel:"noopener noreferrer"}},[e._v("suggested for use in CosmWasm"),a("OutboundLink")],1),e._v(" as an optional addition. This may be considered as an opt-in format for contracts desiring such efficiency or strict schema, or possibly just used for encoding internal data structures ("),a("code",[e._v("Params")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),a("p",[e._v("Much thanks to "),a("a",{attrs:{href:"https://github.com/jtremback",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jehan Tremback"),a("OutboundLink")],1),e._v(", who insisted on a universal, human-readable format for all messages.")])])}),[],!1,null,null,null);t.default=r.exports}}]);