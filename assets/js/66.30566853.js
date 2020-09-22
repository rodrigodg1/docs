(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{644:function(d,c,b){"use strict";b.r(c);var t=b(0),l=Object(t.a)({},(function(){var d=this,c=d.$createElement,b=d._self._c||c;return b("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[b("h1",{attrs:{id:"uploading-and-interacting"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#uploading-and-interacting"}},[d._v("#")]),d._v(" Uploading and Interacting")]),d._v(" "),b("p",[d._v("We have the binary ready. Now it is time to see some wasm action. You can use "),b("a",{attrs:{href:"#GO-CLI"}},[d._v("Go CLI")]),d._v(" or\n"),b("a",{attrs:{href:"#Node-Console"}},[d._v("Node Console")]),d._v(" as you wish.")]),d._v(" "),b("h2",{attrs:{id:"go-cli"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#go-cli"}},[d._v("#")]),d._v(" GO CLI")]),d._v(" "),b("p",[d._v("We generated a wasm binary executable in the previous chapter. Let's put it into use. Now, we will\nupload the code to the blockchain. Afterwards, you can download the bytecode to verify it is proper:")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBzZWUgaG93IG1hbnkgY29kZXMgd2UgaGF2ZSBub3cKY29yYWwgcXVlcnkgd2FzbSBsaXN0LWNvZGUKCiMgZ2FzIGlzIGh1Z2UgZHVlIHRvIHdhc20gc2l6ZS4uLiBidXQgYXV0by16aXBwaW5nIHJlZHVjZWQgdGhpcyBmcm9tIDEuOE0gdG8gYXJvdW5kIDYwMGsKIyB5b3UgY2FuIHNlZSB0aGUgY29kZSBpbiB0aGUgcmVzdWx0ClJFUz0kKGNvcmFsIHR4IHdhc20gc3RvcmUgY29udHJhY3Qud2FzbSAtLWZyb20gZnJlZCAtLWdhcyA5MDAwMDAgLXkpCgojIHlvdSBjYW4gYWxzbyBnZXQgdGhlIGNvZGUgdGhpcyB3YXkKQ09ERV9JRD0kKGVjaG8gJFJFUyB8IGpxIC1yICcubG9nc1swXS5ldmVudHNbMF0uYXR0cmlidXRlc1stMV0udmFsdWUnKQoKIyBubyBjb250cmFjdHMgeWV0LCB0aGlzIHNob3VsZCByZXR1cm4gYG51bGxgCmNvcmFsIHF1ZXJ5IHdhc20gbGlzdC1jb250cmFjdC1ieS1jb2RlICRDT0RFX0lECgojIHlvdSBjYW4gYWxzbyBkb3dubG9hZCB0aGUgd2FzbSBmcm9tIHRoZSBjaGFpbiBhbmQgY2hlY2sgdGhhdCB0aGUgZGlmZiBiZXR3ZWVuIHRoZW0gaXMgZW1wdHkKY29yYWwgcXVlcnkgd2FzbSBjb2RlICRDT0RFX0lEIGRvd25sb2FkLndhc20KZGlmZiBjb250cmFjdC53YXNtIGRvd25sb2FkLndhc20K"}}),d._v(" "),b("h3",{attrs:{id:"instantiating-the-contract"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-the-contract"}},[d._v("#")]),d._v(" Instantiating the Contract")]),d._v(" "),b("p",[d._v("We can now create an instance of this wasm contract. Here the verifier will fund an escrow, that\nwill allow fred to control payout and upon release, the funds go to bob.")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBpbnN0YW50aWF0ZSBjb250cmFjdCBhbmQgdmVyaWZ5CklOSVQ9JChqcSAtbiAtLWFyZyBmcmVkICQoY29yYWwga2V5cyBzaG93IC1hIGZyZWQpIC0tYXJnIGJvYiAkKGNvcmFsIGtleXMgc2hvdyAtYSBib2IpICd7JnF1b3Q7YXJiaXRlciZxdW90OzokZnJlZCwmcXVvdDtyZWNpcGllbnQmcXVvdDs6JGJvYn0nKQpjb3JhbCB0eCB3YXNtIGluc3RhbnRpYXRlICRDT0RFX0lEICZxdW90OyRJTklUJnF1b3Q7IFwKICAgIC0tZnJvbSBmcmVkIC0tYW1vdW50PTUwMDAwdWNvc20gIC0tbGFiZWwgJnF1b3Q7ZXNjcm93IDEmcXVvdDsgXAogICAgLS1nYXMtcHJpY2VzPSZxdW90OzAuMDI1dXNoZWxsJnF1b3Q7IC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgLS1nYXMtYWRqdXN0bWVudD0mcXVvdDsxLjImcXVvdDsgLXkKCiMgY2hlY2sgdGhlIGNvbnRyYWN0IHN0YXRlIChhbmQgYWNjb3VudCBiYWxhbmNlKQpjb3JhbCBxdWVyeSB3YXNtIGxpc3QtY29udHJhY3QtYnktY29kZSAkQ09ERV9JRApDT05UUkFDVD0kKGNvcmFsIHF1ZXJ5IHdhc20gbGlzdC1jb250cmFjdC1ieS1jb2RlICRDT0RFX0lEIHwganEgLXIgJy5bMF0uYWRkcmVzcycpCmVjaG8gJENPTlRSQUNUCgojIHdlIHNob3VsZCBzZWUgdGhpcyBjb250cmFjdCB3aXRoIDUwMDAwdWNvc20KY29yYWwgcXVlcnkgd2FzbSBjb250cmFjdCAkQ09OVFJBQ1QKY29yYWwgcXVlcnkgYWNjb3VudCAkQ09OVFJBQ1QKCiMgeW91IGNhbiBkdW1wIGVudGlyZSBjb250cmFjdCBzdGF0ZQpjb3JhbCBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIGFsbCAkQ09OVFJBQ1QKCiMgbm90ZSB0aGF0IHdlIHByZWZpeCB0aGUga2V5ICZxdW90O2NvbmZpZyZxdW90OyB3aXRoIHR3byBieXRlcyBpbmRpY2F0aW5nIGl0J3MgbGVuZ3RoCiMgZWNobyAtbiBjb25maWcgfCB4eGQgLXBzCiMgZ2l2ZXMgNjM2ZjZlNjY2OTY3CiMgdGh1cyB3ZSBoYXZlIGEga2V5IDAwMDY2MzZmNmU2NjY5NjcKCiMgeW91IGNhbiBhbHNvIHF1ZXJ5IG9uZSBrZXkgZGlyZWN0bHkKY29yYWwgcXVlcnkgd2FzbSBjb250cmFjdC1zdGF0ZSByYXcgJENPTlRSQUNUIDAwMDY2MzZmNmU2NjY5NjcgLS1oZXgKCiMgTm90ZSB0aGF0IGtleXMgYXJlIGhleCBlbmNvZGVkLCBhbmQgdmFsIGlzIGJhc2U2NCBlbmNvZGVkLgojIFRvIHZpZXcgdGhlIHJldHVybmVkIGRhdGEgKGFzc3VtaW5nIGl0IGlzIGFzY2lpKSwgdHJ5IHNvbWV0aGluZyBsaWtlOgojIChOb3RlIHRoYXQgaW4gbWFueSBjYXNlcyB0aGUgYmluYXJ5IGRhdGEgcmV0dXJuZWQgaXMgbm9uIGluIGFzY2lpIGZvcm1hdCwgdGh1cyB0aGUgZW5jb2RpbmcpCmNvcmFsIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgYWxsICRDT05UUkFDVCB8IGpxIC1yICcuWzBdLmtleScgfCB4eGQgLXIgLXBzCmNvcmFsIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgYWxsICRDT05UUkFDVCB8IGpxIC1yICcuWzBdLnZhbCcgfCBiYXNlNjQgLWQKCiMgb3IgdHJ5IGEgJnF1b3Q7c21hcnQgcXVlcnkmcXVvdDssIGV4ZWN1dGluZyBhZ2FpbnN0IHRoZSBjb250cmFjdApjb3JhbCBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIHNtYXJ0ICRDT05UUkFDVCAne30nCiMgKHNpbmNlIHdlIGRpZG4ndCBpbXBsZW1lbnQgYW55IHZhbGlkIFF1ZXJ5TXNnLCB3ZSBqdXN0IGdldCBhIHBhcnNlIGVycm9yIGJhY2spCg=="}}),d._v(" "),b("p",[d._v("Once we have the funds in the escrow, let us try to release them. First, failing to do so with a key\nthat is not the verifier, then using the proper key to release.")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBleGVjdXRlIGZhaWxzIGlmIHdyb25nIHBlcnNvbgpBUFBST1ZFPSd7JnF1b3Q7YXBwcm92ZSZxdW90Ozp7JnF1b3Q7cXVhbnRpdHkmcXVvdDs6W3smcXVvdDthbW91bnQmcXVvdDs6JnF1b3Q7NTAwMDAmcXVvdDssJnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7dXNoZWxsJnF1b3Q7fV19fScKY29yYWwgdHggd2FzbSBleGVjdXRlICRDT05UUkFDVCAmcXVvdDskQVBQUk9WRSZxdW90OyBcCiAgICAtLWZyb20gdGhpZWYgXAogICAgLWdhcy1wcmljZXM9JnF1b3Q7MC4wMjV1c2hlbGwmcXVvdDsgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyAtLWdhcy1hZGp1c3RtZW50PSZxdW90OzEuMiZxdW90OyAteQoKIyBsb29raW5nIGF0IHRoZSBsb2dzIHNob3VsZCBzaG93OiAmcXVvdDtleGVjdXRlIHdhc20gY29udHJhY3QgZmFpbGVkOiBVbmF1dGhvcml6ZWQmcXVvdDsKIyBhbmQgYm9iIHNob3VsZCBzdGlsbCBiZSBicm9rZSAoYW5kIGJyb2tlbiBzaG93aW5nIHRoZSBhY2NvdW50IGRvZXMgbm90IGV4aXN0IEVycm9yKQpjb3JhbCBxdWVyeSBhY2NvdW50ICQoY29yYWwga2V5cyBzaG93IGJvYiAtYSkKCiMgYnV0IHN1Y2NlZWRzIHdoZW4gZnJlZCB0cmllcwpjb3JhbCB0eCB3YXNtIGV4ZWN1dGUgJENPTlRSQUNUICZxdW90OyRBUFBST1ZFJnF1b3Q7IFwKICAgIC0tZnJvbSBmcmVkIFwKICAgIC1nYXMtcHJpY2VzPSZxdW90OzAuMDI1dXNoZWxsJnF1b3Q7IC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgLS1nYXMtYWRqdXN0bWVudD0mcXVvdDsxLjImcXVvdDsgLXkKCmNvcmFsIHF1ZXJ5IGFjY291bnQgJChjb3JhbCBrZXlzIHNob3cgYm9iIC1hKQoKIyBjb250cmFjdCBjb2lucyBtdXN0IGJlIGVtcHR5CmNvcmFsIHF1ZXJ5IGFjY291bnQgJENPTlRSQUNUCg=="}}),d._v(" "),b("h2",{attrs:{id:"node-console"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#node-console"}},[d._v("#")]),d._v(" Node Console")]),d._v(" "),b("p",[d._v("If you set up the Node Console / REPL in the "),b("a",{attrs:{href:"./using-the-sdk"}},[d._v("client setup section")]),d._v(", you can use\nthat to deploy and execute your contract. I think you will find that JSON manipulation and parsing\nis a bit nicer in JavaScript than in Shell Script.")]),d._v(" "),b("p",[d._v("First, go to the cli directory and start up your console:")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bnB4IEBjb3NtanMvY2xpIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vdGVzdG5ldHMvbWFzdGVyL2NvcmFsbmV0L2NsaV9oZWxwZXIudHMK"}}),d._v(" "),b("p",[d._v("Now, we make all the keys and initialize clients:")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgZnJlZFNlZWQgPSBsb2FkT3JDcmVhdGVNbmVtb25pYygmcXVvdDtmcmVkLmtleSZxdW90Oyk7CmNvbnN0IHthZGRyZXNzOiBmcmVkQWRkciwgY2xpZW50OiBmcmVkQ2xpZW50fSA9IGF3YWl0IGNvbm5lY3QoZnJlZFNlZWQsIHt9KTsKCi8vIGJvYiBkb2Vzbid0IGhhdmUgYSBjbGllbnQgaGVyZSBhcyB3ZSB3aWxsIG5vdAovLyBzdWJtaXQgYW55IHR4IHdpdGggdGhpcyBhY2NvdW50LCBqdXN0IHF1ZXJ5IGJhbGFuY2UKY29uc3QgYm9iU2VlZCA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCZxdW90O2JvYi5rZXkmcXVvdDspOwpjb25zdCBib2JBZGRyID0gYXdhaXQgbW5lbW9uaWNUb0FkZHJlc3MoJnF1b3Q7Y29yYWwmcXVvdDssIGJvYlNlZWQpOwoKY29uc3QgdGhpZWZTZWVkID0gbG9hZE9yQ3JlYXRlTW5lbW9uaWMoJnF1b3Q7dGhpZWYua2V5JnF1b3Q7KTsKCmNvbnN0IHthZGRyZXNzOiB0aGllZkFkZHIsIGNsaWVudDogdGhpZWZDbGllbnR9ID0gYXdhaXQgY29ubmVjdCh0aGllZlNlZWQsIHt9KTsKCmNvbnNvbGUubG9nKGZyZWRBZGRyLCBib2JBZGRyLCB0aGllZkFkZHIpOwo="}}),d._v(" "),b("p",[d._v("Hit the faucet it needed for fred , so he has tokens to submit transactions:")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"ZnJlZENsaWVudC5nZXRBY2NvdW50KCk7Ci8vIGlmICZxdW90O3VuZGVmaW5lZCZxdW90OywgZG8gdGhlIGZvbGxvd2luZwpoaXRGYXVjZXQoZGVmYXVsdEZhdWNldFVybCwgZnJlZEFkZHIsICZxdW90O1NIRUxMJnF1b3Q7KQpmcmVkQ2xpZW50LmdldEFjY291bnQoKTsKCnRoaWVmQ2xpZW50LmdldEFjY291bnQoKTsKLy8gaWYgJnF1b3Q7dW5kZWZpbmVkJnF1b3Q7LCBkbyB0aGUgZm9sbG93aW5nCmhpdEZhdWNldChkZWZhdWx0RmF1Y2V0VXJsLCB0aGllZkFkZHIsICZxdW90O1NIRUxMJnF1b3Q7KQp0aGllZkNsaWVudC5nZXRBY2NvdW50KCk7CgovLyBjaGVjayBib2JBZGRyIGhhcyBubyBmdW5kcwpmcmVkQ2xpZW50LmdldEFjY291bnQoYm9iQWRkcik7CgovLyBnZXQgdGhlIHdvcmtpbmcgZGlyZWN0b3J5IChuZWVkZWQgbGF0ZXIpCnByb2Nlc3MuY3dkKCkK"}}),d._v(" "),b("h3",{attrs:{id:"uploading-with-js"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#uploading-with-js"}},[d._v("#")]),d._v(" Uploading with JS")]),d._v(" "),b("p",[d._v("Now, we go back to the Node console and upload the contract and instantiate it:")]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3Qgd2FzbSA9IGZzLnJlYWRGaWxlU3luYygnY29udHJhY3Qud2FzbScpOwovLyB5b3UgY2FuIGFkZCBleHRyYSBpbmZvcm1hdGlvbiB0byBjb250cmFjdCBkZXRhaWxzIHN1Y2ggYXMgc291cmNlIGFuZCBidWlsZGVyLgpjb25zdCB1cCA9IGF3YWl0IGZyZWRDbGllbnQudXBsb2FkKHdhc20sIHsgc291cmNlOiAmcXVvdDtodHRwczovL2NyYXRlcy5pby9hcGkvdjEvY3JhdGVzL2N3LWVzY3Jvdy8wLjYuMC9kb3dubG9hZCZxdW90OywgYnVpbGRlcjogJnF1b3Q7Y29zbXdhc20vcnVzdC1vcHRpbWl6ZXI6MC45LjAmcXVvdDt9KTsKCmNvbnNvbGUubG9nKHVwKTsKY29uc3QgeyBjb2RlSWQgfSA9IHVwOwoKY29uc3QgaW5pdE1zZyA9IHthcmJpdGVyOiBmcmVkQWRkciwgcmVjaXBpZW50OiBib2JBZGRyfTsKY29uc3QgeyBjb250cmFjdEFkZHJlc3MgfSA9IGF3YWl0IGZyZWRDbGllbnQuaW5zdGFudGlhdGUoY29kZUlkLCBpbml0TXNnLCAmcXVvdDtFc2Nyb3cgMSZxdW90OywgeyBtZW1vOiAmcXVvdDttZW1vJnF1b3Q7LCB0cmFuc2ZlckFtb3VudDogW3tkZW5vbTogJnF1b3Q7dXNoZWxsJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzUwMDAwJnF1b3Q7fV19KTsKCi8vIGNoZWNrIHRoZSBjb250cmFjdCBpcyBzZXQgdXAgcHJvcGVybHkKY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNzKTsKZnJlZENsaWVudC5nZXRDb250cmFjdChjb250cmFjdEFkZHJlc3MpOwpmcmVkQ2xpZW50LmdldEFjY291bnQoY29udHJhY3RBZGRyZXNzKTsKCi8vIG1ha2UgYSByYXcgcXVlcnkgLSBrZXkgbGVuZ3RoIHByZWZpeGVkICZxdW90O2NvbmZpZyZxdW90Owpjb25zdCBrZXkgPSBuZXcgVWludDhBcnJheShbMCwgNiwgLi4udG9Bc2NpaSgmcXVvdDtjb25maWcmcXVvdDspXSk7CmNvbnN0IHJhdyA9IGF3YWl0IGZyZWRDbGllbnQucXVlcnlDb250cmFjdFJhdyhjb250cmFjdEFkZHJlc3MsIGtleSk7CkpTT04ucGFyc2UoZnJvbVV0ZjgocmF3KSkKLy8gbm90ZSB0aGUgYWRkcmVzc2VzIGFyZSBzdG9yZWQgaW4gYmFzZTY0IGludGVybmFsbHksIG5vdCBiZWNoMzIsIGJ1dCB0aGUgZGF0YSBpcyB0aGVyZS4uLiB0aGlzIGlzIHdoeSB3ZSBvZnRlbiBpbXBsZW1lbnQgc21hcnQgcXVlcmllcyBvbiByZWFsIGNvbnRyYWN0cwo="}}),d._v(" "),b("h3",{attrs:{id:"executing-contract-with-js"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#executing-contract-with-js"}},[d._v("#")]),d._v(" Executing Contract with JS")]),d._v(" "),b("p",[d._v('Once we have properly configured the contract, let\'s show how to use it, both the proper "approve"\ncommand:')]),d._v(" "),b("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYXBwcm92ZSA9IHthcHByb3ZlOiB7cXVhbnRpdHk6IFt7YW1vdW50OiAmcXVvdDs1MDAwMCZxdW90OywgZGVub206ICZxdW90O3VzaGVsbCZxdW90O31dfX07CgovLyB0aGllZiBjYW5ub3QgYXBwcm92ZQp0aGllZkNsaWVudC5leGVjdXRlKGNvbnRyYWN0QWRkcmVzcywgYXBwcm92ZSkKCi8vIGJ1dCBmcmVkIGNhbiAoYW5kIG1vdmVzIG1vbmV5IHRvIGJvYikKZnJlZENsaWVudC5leGVjdXRlKGNvbnRyYWN0QWRkcmVzcywgYXBwcm92ZSk7Ci8vIHZlcmlmeSBib2IgZ290IHRoZSB0b2tlbnMKZnJlZENsaWVudC5nZXRBY2NvdW50KGJvYkFkZHIpOwovLyB2ZXJpZnkgY29udHJhY3QgbG9zdApmcmVkQ2xpZW50LmdldEFjY291bnQoY29udHJhY3RBZGRyZXNzKTsK"}})],1)}),[],!1,null,null,null);c.default=l.exports}}]);