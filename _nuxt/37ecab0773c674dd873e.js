(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{817:function(t,e,n){t.exports=n.p+"img/cf51c19.png"},825:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title is-spaced"},[this._v("Welcome to Token "),e("span",[this._v(" MultiSender ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        This Dapp supports the following networks: "),e("br"),this._v("\n        ETH-Mainnet, POA-Network, Ropsten, Rinkeby, Kovan, Görli, xDai\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-hidden-touch"},[e("div",{staticClass:"wrap-image wrap-image--token"},[e("img",{staticClass:"wrap-image__images",attrs:{src:n(817),alt:""}})])])}],o=(n(73),n(27),n(0)),l=(n(72),n(91),n(10)),c=n(71),d={data:function(){return{addressFilterValue:"",infoBox:"Checking the list for possible errors...",fullScreen:!1,fullScreenRestore:{scrollTop:0,scrollLeft:0}}},computed:Object(l.a)({},Object(c.d)("distribution",["rawList","strategy","listErrors","isAlreadyPressed","currentCheck"]),Object(c.d)("metamask",["tokensList"]),Object(c.c)("txStorage",["txsToRender"]),Object(c.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{hasError:function(){return this.listErrors.length>0},hasPendingTx:function(){return this.txsToRender.length>0},addressFilter:{set:function(t){this.addressFilterValue=t},get:function(){return"0x000000000000000000000000000000000000bEEF"===this.addressFilterValue?this.$store.state.metamask.tokensList[0].label:this.addressFilterValue}},tokenSelectLoading:function(){return 0===this.$store.state.metamask.tokensList.length},editor:function(){return this.$refs.listEditor.editor},filteredTokenList:function(){var t=this,e=this.$store.state.metamask.tokensList;if(this.addressFilter){var n=e.filter(function(e){return e.label.toLowerCase().includes(t.addressFilter.toLowerCase())});return n.length||this.$store.dispatch("token/setTokenAddress",{address:this.addressFilter,label:this.addressFilter,symbol:""}),n}return e},strategy:{get:function(){return this.$store.state.distribution.strategy},set:function(t){this.$store.commit("distribution/SET_STRATEGY",t)}},tokenValidationClass:{get:function(){return this.$store.state.token.address.formValidationClass}},decimals:{get:function(){return this.$store.state.token.decimals},set:function(t){this.$store.commit("token/SET_DECIMALS",t)}},rawList:{get:function(){return this.$store.state.distribution.rawList},set:function(t){this.$store.commit("distribution/SET_RAWLIST",t)}}}),mounted:function(){window.indexPageComponent=this},methods:Object(l.a)({},Object(c.b)({checkList:"distribution/checkList"}),{sendButtonAction:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.editor,this.$nuxt.$loading.start(),t.next=4,this.checkList({editor:n});case 4:t.sent||this.$nuxt.$loading.finish();case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),prepopulate:function(){this.$snackbar.open({message:"To get an ERC20 test token click",type:"is-success",position:"is-top",actionText:"Receive",duration:1e4,onAction:function(){window.open("https://peppersec.github.io/erc20faucet/","_blank")}}),this.rawList="0x0039F22efB07A647557C7C5d17854CFD6D489eF3,12\n0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,13.45\n0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d,1.049\n0x64c9525A3c3a65Ea88b06f184F074C2499578A7E,1"},onFullScreen:function(){this.fullScreen=!this.fullScreen;var t=this.editor,e=t.getWrapperElement();this.fullScreen&&(this.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset},e.classList.add("CodeMirror-fullscreen")),this.fullScreen||(e.classList.remove("CodeMirror-fullscreen"),window.scrollTo(this.fullScreenRestore.scrollLeft,this.fullScreenRestore.scrollTop)),t.refresh()},onTokenSelect:function(t){t&&this.$store.dispatch("token/setTokenAddress",{address:t.value,label:t.label,symbol:t.symbol})}}),beforeRouteEnter:function(t,e,n){n(function(t){e.name&&t.$router.go(),t.prevRoute=e})}},f=n(22),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds-desktop is-7-widescreen"},[t._m(0),t._v(" "),n("div",{staticClass:"subtitle"},[n("p",[t._v("\n        Take a look at YouTube video:\n        "),n("nuxt-link",{attrs:{to:"/tutorial"}},[t._v("tutorial")])],1),t._v(" "),n("p",[t._v("Please provide Token Address, CSV file with addresses")]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-four-fifths"},[n("b-field",{attrs:{label:"Token Address"}},[n("b-autocomplete",{attrs:{id:"token-address-input",data:t.filteredTokenList,placeholder:"Select your Token",icon:"magnify","open-on-focus":"",expanded:"",rounded:"",loading:t.tokenSelectLoading},on:{select:t.onTokenSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.option.label)+"\n            ")]}}]),model:{value:t.addressFilter,callback:function(e){t.addressFilter=e},expression:"addressFilter"}})],1)],1),t._v(" "),n("div",{staticClass:"column"},[n("b-field",{attrs:{label:"Decimals"}},[n("b-input",{attrs:{rounded:""},model:{value:t.decimals,callback:function(e){t.decimals=e},expression:"decimals"}})],1)],1)]),t._v(" "),n("b-field",{attrs:{label:"List of Addresses in CSV"}},[n("div",{staticClass:"cm-container"},[n("no-ssr",[n("codemirror",{ref:"listEditor",attrs:{options:{theme:"rubyblue",lineNumbers:!0}},model:{value:t.rawList,callback:function(e){t.rawList=e},expression:"rawList"}}),t._v(" "),n("div",{staticClass:"no-ssr-loading",attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1)]),t._v(" "),n("b-notification",{attrs:{active:t.hasError,closable:!1,type:"is-danger","has-icon":"",role:"alert"},on:{"update:active":function(e){t.hasError=e}}},t._l(t.listErrors,function(e,r){return n("ul",{key:r},[n("li",[t._v("\n          "+t._s(e)+"\n        ")])])}),0),t._v(" "),n("div",{staticClass:"buttons"},[n("b-button",{staticClass:"is-next",attrs:{id:"send-button",type:"is-primary","icon-right":"arrow-right",rounded:"",loading:t.isAlreadyPressed||t.hasPendingTx},on:{click:function(e){return t.sendButtonAction({editor:t.editor})}}},[t._v("\n        Send\n      ")]),t._v(" "),n("b-button",{attrs:{type:"is-success",rounded:""},on:{click:t.prepopulate}},[t._v("\n        Show Example CSV\n      ")]),t._v(" "),n("no-ssr",[n("b-button",{class:{"is-collapsed":t.fullScreen},attrs:{type:"is-fullscreen",rounded:"","icon-left":t.fullScreen?"arrow-collapse":"arrow-expand"},on:{click:t.onFullScreen}})],1)],1),t._v(" "),n("b-message",{attrs:{type:"is-success",active:t.isAlreadyPressed},on:{"update:active":function(e){t.isAlreadyPressed=e}}},[t._v("\n      "+t._s(t.currentCheck.method)+" from "+t._s(t.currentCheck.from)),t.currentCheck.to?n("span",[t._v(" to ")]):t._e(),t._v(" "+t._s(t.currentCheck.to)+"\n    ")]),t._v(" "),n("b-message",{attrs:{type:"is-warning",active:t.hasPendingTx},on:{"update:active":function(e){t.hasPendingTx=e}}},[t._v("\n      There is a pending batch of transactions from your previous multisend... Please wait for it\n      to be mined, so you can receive the remaining balance\n    ")]),t._v(" "),t.txsToRender.length>0?n("div",{staticClass:"token-field"},[n("div",{staticClass:"label"},[t._v("Multisend transactions")]),t._v(" "),n("ol",{staticClass:"txs"},t._l(t.txsToRender,function(e){var r=e.txHash,o=e.status;return n("li",{key:r,staticClass:"txs__item",class:t.txStatusClass(o)},[n("div",{staticClass:"txs__status"}),t._v(" "),n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl("multisendTxs",r),target:"_blank"}},[t._v("\n            "+t._s(t.txHashToRender("multisendTxs",r))+"\n          ")])])}),0)]):t._e()],1),t._v(" "),t._m(2)])},r,!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=37ecab0773c674dd873e.js.map