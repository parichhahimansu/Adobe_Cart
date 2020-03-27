(this["webpackJsonpadobe-cart"]=this["webpackJsonpadobe-cart"]||[]).push([[0],{107:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(10),l=a.n(c),o=a(18),s=a(30),m=a(28),u=a(14),d=a(142),p=a(143),f=a(144),b=a(150),E=a(112),h=a(145),v=a(71),y=a.n(v),g=a(70),I=a.n(g),N=a(149),O=a(146),j=a(23),w=a(24),T=a(25),C=a(26),k=a(152),_=function(e,t){return{type:"FILTERED_ITEMS",newValue:e,payload:t}},S=function(e){Object(C.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState({value:t})},n.handleApply=function(){var e=n.state.value,t=n.props.items.filter((function(t){if(t.price<e[1]&&t.price>e[0])return t}));n.props.filteredItems(e,t)},n.state={value:[150,700]},n}return Object(w.a)(a,[{key:"render",value:function(){var e,t,a,n=this;return this.props.items.length&&(a=[{value:e=this.props.items.reduce((function(e,t){return Math.min(e,t.price)}),this.props.items[0].price),label:e},{value:t=this.props.items.reduce((function(e,t){return Math.max(e,t.price)}),this.props.items[0].price),label:t}]),i.a.createElement("div",null,i.a.createElement(k.a,{min:e,max:t,value:this.state.value,onChange:this.handleChange,valueLabelDisplay:"auto","aria-labelledby":"range-slider",marks:a}),i.a.createElement("div",{className:"apply-btn"},i.a.createElement("button",{className:"waves-effect waves-light btn blue",onClick:function(){n.handleApply()}},"Apply")))}}]),a}(r.Component),A=Object(u.b)((function(e){return{items:e.items}}),(function(e){return{filteredItems:function(t,a){e(_(t,a))}}}))(S),R=a(13),x=a(68),D=a.n(x),P=a(151),M=Object(d.a)((function(e){return{search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(R.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(m.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(m.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),Q=Object(u.b)((function(e){return{items:e.items,originalItems:e.originalItems}}),(function(e){return{searchItems:function(t,a,n){e(function(e,t,a){return{type:"SEARCH_STRING",searchString:e,payload:t,originalItems:a}}(t,a,n))}}}))((function(e){var t,a,n=M();return i.a.createElement("div",{className:n.search},i.a.createElement("div",{className:n.searchIcon},i.a.createElement(D.a,null)),i.a.createElement(P.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onChange:function(n){if(n.target.value){t=[];var r=[];r=e.originalItems&&e.originalItems.length>0?e.originalItems:e.items,a=n.target.value;var i=new RegExp(a,"i");t=r.filter((function(e){return i.test(e.name)}))}},onKeyPress:function(n){"Enter"===n.key&&(n.preventDefault(),function(){var n=e.originalItems&&e.originalItems.length>0?e.originalItems:e.items;e.searchItems(a,t,n)}())}}))})),q=Object(d.a)((function(e){return{grow:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}})),B=Object(u.b)((function(e){return{addedItems:e.addedItems}}))((function(e){var t=q(),a=Object(s.f)(),n=e.addedItems.length?e.addedItems.length:"0";return i.a.createElement("div",{className:t.grow},i.a.createElement(p.a,{position:"fixed",className:t.appBar},i.a.createElement(f.a,{className:"toolbar"},i.a.createElement(b.a,{edge:"start",color:"inherit"},i.a.createElement(o.b,{to:"/Adobe_Cart"},i.a.createElement(I.a,null))),i.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},i.a.createElement(o.b,{to:"/Adobe_Cart"},"Adobe Cart")),i.a.createElement(Q,null),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.sectionDesktop},i.a.createElement(b.a,null,i.a.createElement(h.a,{badgeContent:n,color:"secondary"},i.a.createElement(o.b,{to:"/cart"},i.a.createElement(y.a,null))))))),i.a.createElement(N.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},i.a.createElement("div",{className:t.toolbar}),i.a.createElement(O.a,null),"/cart"!==a.pathname?i.a.createElement("div",{className:"slider-box"},i.a.createElement(E.a,{id:"non-linear-slider",gutterBottom:!0},"Price Range"),i.a.createElement(A,null)):null))})),L=function(e){Object(C.a)(a,e);var t=Object(T.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"summary-box"},this.props.total?i.a.createElement("div",{className:"collection"},i.a.createElement("li",{className:"collection-item"},i.a.createElement("div",{className:"cart_det"},i.a.createElement("b",null,"Items: ",this.props.addedItems.length,"\xa0\xa0\xa0 "),i.a.createElement("b",null,"Total: ",this.props.total,"$")),i.a.createElement("div",{className:"cart_btn"},i.a.createElement("button",{className:"waves-effect waves-light btn"},i.a.createElement(o.b,{to:"/cart"},"Go to Cart"))))):null)}}]),a}(r.Component),V=Object(u.b)((function(e){return{addedItems:e.addedItems,total:e.total}}))(L),G=a(147),U=a(148),$=a(89),Y=function(e){Object(C.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.addToCart(t)},e.manipulateItems=function(t){t.map((function(e){e.discountPrice=e.price/100*e.discount,e.newPrice=e.price-e.discountPrice})),e.props.getItems(t)},e.handleSort=function(t){"asc"===t?e.props.items.sort((function(e,t){return e.price<t.price?1:-1})):"dsc"===t?e.props.items.sort((function(e,t){return e.price>t.price?1:-1})):e.props.items.sort((function(e,t){return e.discount<t.discount?1:-1})),e.props.sortItems(t,e.props.items)},e.handleChange=function(t,a){e.setState({value:a})},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){n=this,$.get("https://api.myjson.com/bins/qzuzi").then((function(e){n.manipulateItems(e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this;this.props.items.length?e=this.props.items.map((function(e){var a="0";return t.props.addedItems.map((function(t){e.id===t.id&&(a=t.quantity)})),i.a.createElement("div",{className:"card",key:e.id},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:e.img_url,alt:e.name}),i.a.createElement("span",{className:"card-title"},e.name)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",e.newPrice,"$")),i.a.createElement("p",null,i.a.createElement("b",null,e.price," ")),i.a.createElement("p",null,i.a.createElement("b",null,e.discount," % Off "))),i.a.createElement("div",{className:"card-action"},i.a.createElement("div",{className:"price-det"},i.a.createElement("b",null,"Quantity: ",a)),i.a.createElement("div",{className:"add-btn"},i.a.createElement("button",{className:"waves-effect waves-light btn red",onClick:function(){t.handleClick(e.id)}},"Add"))))})):e=i.a.createElement("div",{className:"loader-class"},i.a.createElement(G.a,null));return i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement(V,null),i.a.createElement("div",{className:"sort-box"},i.a.createElement(E.a,{id:"sort-by",gutterBottom:!0},"Sort By"),i.a.createElement(U.a,{color:"primary",underline:"hover",onClick:function(){return t.handleSort("asc")}},"Price -- High To Low"),i.a.createElement(U.a,{color:"primary",underline:"hover",onClick:function(){return t.handleSort("dsc")}},"Price -- Low To High"),i.a.createElement(U.a,{color:"primary",underline:"hover",onClick:function(){return t.handleSort("dcn")}},"Discount"))),i.a.createElement("div",{className:"box"},e))}}]),a}(r.Component),z=Object(u.b)((function(e){return{items:e.items,addedItems:e.addedItems,total:e.total,sortType:e.sortType,newValue:e.newValue}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))},getItems:function(t){e(function(e){return{type:"GET_ITEMS",payload:e}}(t))},sortItems:function(t,a){e(function(e,t){return{type:"SORT_ITEMS",sortType:e,payload:t}}(t,a))},filteredItems:function(t,a){e(_(t,a))}}}))(Y),H=function(e){Object(C.a)(a,e);var t=Object(T.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){var e=this.props.addedItems.map((function(e){return e.discountPrice*(e.quantity?e.quantity:1)})).reduce((function(e,t){return e+t})),t=this.props.total-e;return i.a.createElement("div",{className:"collection"},i.a.createElement("li",{className:"collection-item"},i.a.createElement("b",null,"Price details")),i.a.createElement("li",{className:"collection-item"},i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",this.props.total,"$"),"\xa0\xa0\xa0\xa0"),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("b",null,"Discount: ",e,"$"))),i.a.createElement("li",{className:"collection-item"},i.a.createElement("b",null,"Total: ",t,"$")))}}]),a}(r.Component),F=Object(u.b)((function(e){return{addedItems:e.addedItems,total:e.total}}))(H),J=function(e){Object(C.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleRemove=function(t){e.props.removeItem(t)},e.handleAddQuantity=function(t){e.props.addQuantity(t)},e.handleSubtractQuantity=function(t){e.props.subtractQuantity(t)},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map((function(t){return i.a.createElement("li",{className:"collection-item avatar",key:t.id},i.a.createElement("div",{className:"item-img"},i.a.createElement("img",{src:t.img_url,alt:t.name,className:""})),i.a.createElement("div",{className:"item-desc"},i.a.createElement("span",{className:"title"},t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")),i.a.createElement("p",null,i.a.createElement("b",null,"Quantity: ",t.quantity)),i.a.createElement("div",{className:"add-remove"},i.a.createElement(o.b,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleAddQuantity(t.id)}},"arrow_drop_up")),i.a.createElement(o.b,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleSubtractQuantity(t.id)}},"arrow_drop_down"))),i.a.createElement("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){e.handleRemove(t.id)}},"Remove")))})):i.a.createElement("p",null," Nothing. ");return i.a.createElement("div",{className:"container"},this.props.items.length?i.a.createElement("div",{className:"cart"},i.a.createElement("h5",null,"You have ordered:"),i.a.createElement("ul",{className:"collection"},t),i.a.createElement(F,null)):i.a.createElement("h5",null,"No items added to Cart"))}}]),a}(r.Component),K=Object(u.b)((function(e){return{items:e.addedItems}}),(function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}}))(J),W=function(e){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(B,null),i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/Adobe_Cart",component:z}),i.a.createElement(s.a,{path:"/cart",component:K}))))},X=(a(107),a(72)),Z=a(22),ee={items:[],addedItems:[],originalItems:[],total:0,sortType:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;if("GET_ITEMS"===t.type)return Object(Z.a)({},e,{items:t.payload});if("SORT_ITEMS"===t.type)return Object(Z.a)({},e,{items:t.payload,sortType:t.sortType});if("FILTERED_ITEMS"===t.type)return Object(Z.a)({},e,{items:t.payload,newValue:t.newValue});if("SEARCH_STRING"===t.type)return Object(Z.a)({},e,{items:t.payload,newValue:t.searchString,originalItems:t.originalItems});if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,Object(Z.a)({},e,{total:e.total+a.price});a.quantity=1;var r=e.total+a.price;return Object(Z.a)({},e,{addedItems:[].concat(Object(X.a)(e.addedItems),[a]),total:r})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find((function(e){return t.id===e.id})),c=e.addedItems.filter((function(e){return t.id!==e.id})),l=e.total-i.price*i.quantity;return Object(Z.a)({},e,{addedItems:c,total:l})}if("ADD_QUANTITY"===t.type){var o=e.items.find((function(e){return e.id===t.id}));o.quantity+=1;var s=e.total+o.price;return Object(Z.a)({},e,{total:s})}if("SUB_QUANTITY"===t.type){var m=e.items.find((function(e){return e.id===t.id}));if(1===m.quantity){var u=e.addedItems.filter((function(e){return e.id!==t.id})),d=e.total-m.price;return Object(Z.a)({},e,{addedItems:u,total:d})}m.quantity-=1;var p=e.total-m.price;return Object(Z.a)({},e,{total:p})}return e},ae=a(43),ne=(a(108),Object(ae.b)(te));l.a.render(i.a.createElement(u.a,{store:ne},i.a.createElement(W,null)),document.getElementById("root"))},78:function(e,t,a){e.exports=a(109)}},[[78,1,2]]]);
//# sourceMappingURL=main.9cd45d3e.chunk.js.map