(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{347:function(e,t,a){__NEXT_REGISTER_PAGE("/",function(){return e.exports=a(464),{page:e.exports.default}})},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=a(39),s=a(40),l=a(8),m=a.n(l),p=a(1),x=a.n(p),u=a(87),d=a(4),f=a(6),b=a(10);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,a,n,r,i,o){try{var c=e[i](o),s=c.value}catch(e){return void a(e)}c.done?t(s):Promise.resolve(s).then(n,r)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){return new Promise(function(t,a){var n=new Image;n.onload=function(){return t(e)},n.onerror=function(e){return a(e)},n.src=e})},N=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=this,r=(e=w(t)).call.apply(e,[this].concat(o)),a=!r||"object"!==h(r)&&"function"!=typeof r?v(n):r,E(v(v(a)),"state",{mapSrc:"/static/img-map@3x.png",playVideo:!1}),E(v(v(a)),"handleClickPlay",function(){a.setState({playVideo:!0})}),E(v(v(a)),"handleEnd",function(){a.setState({playVideo:!1})}),a}var a,n,i,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentDidMount",value:(o=m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/static/map.gif");case 2:this.setState({mapSrc:"/static/map.gif"});case 3:case"end":return e.stop()}},e,this)}),c=function(){var e=this,t=arguments;return new Promise(function(a,n){var r=o.apply(e,t);function i(e){y(r,a,n,i,c,"next",e)}function c(e){y(r,a,n,i,c,"throw",e)}i(void 0)})},function(){return c.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement(d.a,{bgColor:"#222633",color:"#fff"},r.a.createElement(f.a,null,r.a.createElement("div",{className:"jsx-1553200269 description-container"},r.a.createElement("div",{className:"jsx-1553200269 bg-rect"}),r.a.createElement("div",{className:"jsx-1553200269 bg-rect"}),r.a.createElement("div",{className:"jsx-1553200269 bg-rect"}),r.a.createElement("p",{className:"jsx-1553200269"},b.e.description)),r.a.createElement("div",{className:"jsx-1553200269 media"},this.state.playVideo?r.a.createElement("video",{autoPlay:!0,onEnded:this.handleEnd,src:"https://s3-ap-northeast-1.amazonaws.com/static.poseidon.network/poseidon.mp4",className:"jsx-1553200269 map"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsx-1553200269 play-icon"},r.a.createElement(u.a,{onClick:this.handleClickPlay,color:"#ff9300",size:"60"})),r.a.createElement("img",{alt:"our nodes in the world map",src:this.state.mapSrc,className:"jsx-1553200269 map"}))),r.a.createElement(x.a,{styleId:"1553200269",css:["p.jsx-1553200269{text-align:center;font-size:22px;font-weight:bold;line-height:1.36;height:90px;white-space:pre-line;}",".media.jsx-1553200269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".map.jsx-1553200269{width:100%;margin-bottom:0px;height:100%;max-width:920px;}",".play-icon.jsx-1553200269{position:absolute;cursor:pointer;}",".description-container.jsx-1553200269{position:relative;}",".bg-rect.jsx-1553200269{width:311px;height:6px;opacity:0.3;position:absolute;background-image:linear-gradient(to right,rgba(170,209,204,0),#aad1cc 52%,rgba(170,209,204,0));}",".bg-rect.jsx-1553200269:nth-child(1){top:37px;}",".bg-rect.jsx-1553200269:nth-child(2){top:66px;}",".bg-rect.jsx-1553200269:nth-child(3){top:95px;}","@media only screen and (min-width:600px){p.jsx-1553200269{font-size:26px;margin-bottom:80px;line-height:1.40;}.bg-rect.jsx-1553200269:nth-child(1){top:45px;}.bg-rect.jsx-1553200269:nth-child(2){top:82px;}.bg-rect.jsx-1553200269:nth-child(3){top:118px;}}"]})))}}])&&g(a.prototype,n),i&&g(a,i),t}(),O=function(e){var t=e.value,a=e.unit,n=e.description;return r.a.createElement("div",{className:"jsx-1811938372"},r.a.createElement("p",{className:"jsx-1811938372 value"},t,r.a.createElement("small",{className:"jsx-1811938372"},a)),r.a.createElement("p",{className:"jsx-1811938372 description"},n),r.a.createElement(x.a,{styleId:"1811938372",css:["div.jsx-1811938372{text-align:center;-webkit-flex:50%;-ms-flex:50%;flex:50%;margin-bottom:42px;}",".value.jsx-1811938372{font-size:40px;font-weight:bold;margin:0;margin-bottom:5px;}","small.jsx-1811938372{font-size:20px;font-weight:normal;margin-left:5px;}",".description.jsx-1811938372{font-size:16px;color:#90cfbe;margin:0;}"]}))},S=function(){return r.a.createElement(d.a,{bgColor:"#222633",color:"#fff",padding:"12px 32px 0"},r.a.createElement(f.a,{direction:"row"},b.f.map(function(e){var t=e.value,a=e.unit,n=e.description;return r.a.createElement(O,{key:t,value:t,unit:a,description:n})})))},_=function(){return r.a.createElement(d.a,{bgColor:"#222633",color:"#fff",padding:"0 32px 40px"},r.a.createElement(f.a,null,b.g.map(function(e){var t=e.title,a=e.description;return r.a.createElement(n.Fragment,{key:t},r.a.createElement("p",{className:"jsx-2699257685 title"},t),r.a.createElement("p",{className:"jsx-2699257685 description"},a))}),r.a.createElement(x.a,{styleId:"2699257685",css:[".title.jsx-2699257685{font-size:20px;font-weight:bold;margin:0 0 15px;line-height:1.35;text-align:center;white-space:pre-line;}",".description.jsx-2699257685{font-size:16px;color:#90cfbe;line-height:1.31;margin-bottom:40px;text-align:center;white-space:pre-line;max-width:560px;}","@media only screen and (min-width:600px){.description.jsx-2699257685{line-height:1.6em;}}"]})))},z=function(e){var t=e.imageUri,a=e.title,n=e.description;return r.a.createElement("div",{className:"jsx-2613027103"},r.a.createElement("img",{src:t,alt:"icon",className:"jsx-2613027103"}),r.a.createElement("h3",{className:"jsx-2613027103"},a),r.a.createElement("p",{className:"jsx-2613027103"},n),r.a.createElement(x.a,{styleId:"2613027103",css:["div.jsx-2613027103{-webkit-flex:30%;-ms-flex:30%;flex:30%;}","img.jsx-2613027103{display:block;margin:auto;width:135px;}","h3.jsx-2613027103{color:#222633;font-size:20px;text-align:center;margin-bottom:8px;}","p.jsx-2613027103{font-size:16px;line-height:1.31;line-height:1.31;opacity:0.64;text-align:center;margin-bottom:70px;white-space:pre-line;}"]}))},C=function(){return r.a.createElement(d.a,{bgColor:"#d7f2ee",color:"#222633"},r.a.createElement(f.a,null,r.a.createElement("img",{id:"feature",alt:"POSEIDON NETWORK",src:"/static/img-logotype@2x.png",className:"jsx-3003031778"}),r.a.createElement("div",{className:"jsx-3003031778 item-container"},b.c.map(function(e,t){var a=e.imageUri,n=e.title,i=e.description;return r.a.createElement(z,{key:t,imageUri:a,title:n,description:i})})),r.a.createElement(x.a,{styleId:"3003031778",css:["img.jsx-3003031778{display:block;width:311px;margin-bottom:95px;margin-top:30px;}","@media only screen and (min-width:600px){.item-container.jsx-3003031778{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}"]})))},P=function(e){var t=e.children,a=e.center,n=e.color,i=void 0===n?"#fff":n,o=e.id,c=void 0===o?"":o;return r.a.createElement("h2",{id:c,className:x.a.dynamic([["2484297046",[i,a&&"text-align: center;"]]])},t,r.a.createElement(x.a,{styleId:"2484297046",css:["h2.__jsx-style-dynamic-selector{font-size:24px;color:".concat(i,";").concat(a&&"text-align: center;",";}")],dynamic:[i,a&&"text-align: center;"]}))},I=function(e){var t=e.alt,a=e.logoUri,n=e.link;return r.a.createElement("div",{className:"jsx-1445327346"},r.a.createElement("a",{href:n,target:"_blank",className:"jsx-1445327346"},r.a.createElement("img",{alt:t,src:a,className:"jsx-1445327346"})),r.a.createElement(x.a,{styleId:"1445327346",css:["div.jsx-1445327346{height:24px;-webkit-flex:50%;-ms-flex:50%;flex:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:60px;}","img.jsx-1445327346{height:24px;}"]}))},F=function(){return r.a.createElement(d.a,{bgColor:"#222633",color:"#fff"},r.a.createElement(f.a,null,r.a.createElement(P,{id:"partners",center:!0},"Partners"),r.a.createElement("div",{className:"jsx-1674490829"},b.h.map(function(e,t){var a=e.alt,n=e.logoUri,i=e.link;return r.a.createElement(I,{key:"".concat(t),alt:a,logoUri:n,link:i})})),r.a.createElement(x.a,{styleId:"1674490829",css:["div.jsx-1674490829{margin-top:37px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:400px;}"]})))},T=function(e){var t=e.time,a=e.title,n=e.description,i=e.done,o=e.active,c=e.lastone;return r.a.createElement("div",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" container"},r.a.createElement("div",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" time-wrapper"},r.a.createElement("h3",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" time"},t)),r.a.createElement("div",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" content-wrapper"},r.a.createElement("div",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" content"},r.a.createElement("p",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" title"},a),r.a.createElement("p",{className:x.a.dynamic([["1967713480",[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]]])+" description"},n))),r.a.createElement(x.a,{styleId:"1967713480",css:[".container.__jsx-style-dynamic-selector{padding:0;position:relative;}",".time.__jsx-style-dynamic-selector{font-size:20px;margin:0;}",".time-wrapper.__jsx-style-dynamic-selector::before{position:absolute;left:-10px;top:-10px;content:'';display:inline-block;width:40px;height:40px;-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:50%;background-color:#fff;opacity:".concat(o?.2:0,";}"),".time.__jsx-style-dynamic-selector::before{content:'';display:inline-block;width:20px;height:20px;-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;background-color:#fff;opacity:".concat(i||o?1:.32,";margin-right:22px;}"),".content-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".content-wrapper.__jsx-style-dynamic-selector::before{content:'';display:inline-block;width:4px;background-color:#fff;opacity:".concat(i?1:.32,";margin:-3px 22px 0 8px;").concat(c&&"opacity: 0",";}"),".content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}",".title.__jsx-style-dynamic-selector{font-size:16px;padding:0 0 0 10px;color:#222633;}",".description.__jsx-style-dynamic-selector{line-height:1.31;color:#222633;font-size:16px;opacity:0.64;margin:10px 0 0;padding:0 0 32px 10px;}"],dynamic:[o?.2:0,i||o?1:.32,i?1:.32,c&&"opacity: 0"]}))};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var M=function(){return r.a.createElement(d.a,{bgColor:"#90cfbe",color:"#1c1c1d"},r.a.createElement(f.a,null,r.a.createElement(P,{id:"roadmap",center:!0},"Roadmap"),r.a.createElement("div",{className:"jsx-3913902217 content"},b.i.map(function(e){return r.a.createElement(T,R({key:e.time},e))})),r.a.createElement(x.a,{styleId:"3913902217",css:["h2.jsx-3913902217{margin-bottom:28px;color:#fff;}",".content.jsx-3913902217{max-width:600px;}","@media only screen and (min-width:600px){.content.jsx-3913902217{font-size:26px;margin-bottom:80px;line-height:1.40;width:280px;margin-top:30px;}}"]})))},U=function(e){var t=e.name,a=e.title,n=e.avatar;return r.a.createElement("div",{className:"jsx-4161756331 container"},r.a.createElement("div",{className:"jsx-4161756331 avatar-container"},r.a.createElement("img",{src:n,className:"jsx-4161756331"})),r.a.createElement("div",{className:"jsx-4161756331 content"},r.a.createElement("h6",{className:"jsx-4161756331"},a),r.a.createElement("h5",{className:"jsx-4161756331"},t)),r.a.createElement(x.a,{styleId:"4161756331",css:[".container.jsx-4161756331{width:150px;height:176px;border-radius:4px;box-shadow:0 2px 16px 0 rgba(34,38,51,0.08);background-color:#fff;margin-bottom:16px;}",".avatar-container.jsx-4161756331{width:150px;height:100px;border-radius:4px;background-color:rgba(144,207,190,0.1);}",".content.jsx-4161756331{padding:16px;}","img.jsx-4161756331{width:150px;height:100px;border-radius:4px 4px 0 0;object-fit:contain;}","h5.jsx-4161756331{margin:0;font-size:18px;}","h6.jsx-4161756331{margin:0 0 8px;color:#90cfbe;font-size:11px;}","@media only screen and (min-width:600px){.container.jsx-4161756331{margin-right:17px;}}"]}))},A=function(){return r.a.createElement(d.a,{bgColor:"#222633",color:"#222633"},r.a.createElement(f.a,null,r.a.createElement(P,{id:"team",color:"#fff",center:!0},"TEAM"),r.a.createElement("div",{className:"jsx-1076939306 members"},b.j.map(function(e){var t=e.name,a=e.title,n=e.avatar;return r.a.createElement(U,{key:t,name:t,title:a,avatar:n})})),r.a.createElement(P,{color:"#fff",center:!0},"Tech Core Team"),r.a.createElement("div",{className:"jsx-1076939306 members"},b.k.map(function(e){var t=e.name,a=e.title,n=e.avatar;return r.a.createElement(U,{key:t,name:t,title:a,avatar:n})})),r.a.createElement(P,{color:"#fff",center:!0},"Advisors"),r.a.createElement("div",{className:"jsx-1076939306 members"},b.a.map(function(e){var t=e.name,a=e.title,n=e.avatar;return r.a.createElement(U,{key:t,name:t,title:a,avatar:n})})),r.a.createElement(x.a,{styleId:"1076939306",css:[".members.jsx-1076939306{margin-bottom:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;min-width:317px;}","@media only screen and (min-width:600px){.members.jsx-1076939306{-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;width:100%;}}"]})))};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,a,n,r,i,o){try{var c=e[i](o),s=c.value}catch(e){return void a(e)}c.done?t(s):Promise.resolve(s).then(n,r)}function V(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var X=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=this,r=(e=J(t)).call.apply(e,[this].concat(o)),a=!r||"object"!==B(r)&&"function"!=typeof r?K(n):r,W(K(K(a)),"state",{name:"",email:"",message:"",receiveEmail:!1,isFailed:!1,isSucceed:!1}),W(K(K(a)),"handleChangeInput",function(e){var t=e.target,n=t.name,r=t.value;a.setState(W({},n,r))}),W(K(K(a)),"handleChangeCheckBox",function(e){var t=e.target,n=t.name,r=t.checked;a.setState(W({},n,r))}),W(K(K(a)),"handleSubmit",function(){var e,t=(e=m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("name",a.state.name),n.append("email",a.state.email),n.append("message",a.state.message),n.append("receiveEmail",String(a.state.receiveEmail)),a.setState({isFailed:!1,isSucceed:!1}),e.prev=7,e.next=10,fetch("https://script.google.com/macros/s/AKfycbwVfb9acsqEuPnYZlgRBOUng74nnNd6a4NGmJPCRXtp5HOBTMeJ/exec",{body:n,method:"POST"});case 10:a.setState({name:"",email:"",message:"",receiveEmail:!1,isSucceed:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(7),console.log(e.t0),a.setState({isFailed:!0});case 17:case"end":return e.stop()}},e,this,[[7,13]])}),function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){D(i,n,r,o,c,"next",e)}function c(e){D(i,n,r,o,c,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()),a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"jsx-142217286"},r.a.createElement("label",{htmlFor:"name",className:"jsx-142217286"},"Name"),r.a.createElement("input",{id:"name",name:"name",value:this.state.name,onChange:this.handleChangeInput,className:"jsx-142217286"}),r.a.createElement("label",{htmlFor:"email",className:"jsx-142217286"},"Email"),r.a.createElement("input",{id:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleChangeInput,className:"jsx-142217286"}),r.a.createElement("label",{htmlFor:"your-message",className:"jsx-142217286"},"Your Message"),r.a.createElement("textarea",{id:"your-message",name:"message",value:this.state.message,onChange:this.handleChangeInput,className:"jsx-142217286"}),r.a.createElement("div",{className:"jsx-142217286 check-container"},r.a.createElement("label",{htmlFor:"checkbox",className:"jsx-142217286"},r.a.createElement("input",{id:"checkbox",type:"checkbox",name:"receiveEmail",checked:this.state.receiveEmail,onChange:this.handleChangeCheckBox,className:"jsx-142217286"}),r.a.createElement("span",{className:"jsx-142217286 checkmark"}),"I want to receive occasional e-mail updates from POSEIDON NETWORK")),this.state.isSucceed&&r.a.createElement("p",{className:"jsx-142217286 msg success"},"Sent successfully!"),this.state.isFailed&&r.a.createElement("p",{className:"jsx-142217286 msg error"},"Something went wrong, please try again later."),r.a.createElement("input",{type:"submit",value:"Send",className:"jsx-142217286 submit"}),r.a.createElement(x.a,{styleId:"142217286",css:["label.jsx-142217286{color:#222633;font-size:16px;display:block;margin-bottom:10px;width:276px;}","input.jsx-142217286,textarea.jsx-142217286{border:none;border-radius:4px;border:1px solid #90cfbe;box-shadow:none;background-color:#ffffff;margin-bottom:32px;padding:5px;width:311px;font-size:16px;height:44px;}","input.jsx-142217286:focus,textarea.jsx-142217286:focus{outline:none;}","textarea.jsx-142217286{height:80px;}",".check-container.jsx-142217286{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","#checkbox.jsx-142217286{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}",".checkmark.jsx-142217286{position:absolute;top:0;left:0;width:20px;height:20px;border-radius:4px;border:1px solid #90cfbe;background-color:#fff;}",".check-container.jsx-142217286 input.jsx-142217286:checked~.checkmark.jsx-142217286{background-color:#90cfbe;}",'.checkmark.jsx-142217286:after{content:"";position:absolute;display:none;}',".check-container.jsx-142217286 input.jsx-142217286:checked~.checkmark.jsx-142217286:after{display:block;}",".check-container.jsx-142217286 .checkmark.jsx-142217286:after{left:5px;top:2px;width:3px;height:8px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}",".submit.jsx-142217286{cursor:pointer;width:311px;height:48px;border-radius:24px;border:1px solid #222633;background:transparent;outline:none;margin:30px auto;}",".submit.jsx-142217286:hover{opacity:0.4;}",".msg.jsx-142217286{font-size:13px;font-weight:600;margin-top:3px;position:absolute;}",".success.jsx-142217286{color:#90cfbe;}",".error.jsx-142217286{color:#ef5757;}"]}))}}])&&V(a.prototype,n),i&&V(a,i),t}(),Y=function(){return r.a.createElement(d.a,{bgColor:"#d7f2ee",color:"#222633"},r.a.createElement(P,{id:"contact",color:"#222633",center:!0},b.b.title),r.a.createElement("div",{className:"jsx-4108837546 content"},r.a.createElement("p",{className:"jsx-4108837546 description"},b.b.description),r.a.createElement(X,null)),r.a.createElement(x.a,{styleId:"4108837546",css:[".content.jsx-4108837546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".description.jsx-4108837546{color:#222633;font-size:16px;opacity:0.64;margin-bottom:30px;}"]}))},q=a(58);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Poseidon Network")),r.a.createElement(s.a,null),r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(_,null),r.a.createElement(C,null),r.a.createElement(F,null),r.a.createElement(M,null),r.a.createElement(A,null),r.a.createElement(Y,null),r.a.createElement(q.a,null))}},87:function(e,t,a){"use strict";var n=a(0),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function s(e){return function(t){return n.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return n.createElement(t.tag,o({key:a},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,s=c(e,["attr"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:a,style:o({color:e.color||t.color},t.style,e.style),height:r,width:r}),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(r)}a.d(t,"b",function(){return m}),a.d(t,"a",function(){return p});var m=function(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)};m.displayName="FaSpinner";var p=function(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"}}]})(e)};p.displayName="FaRegPlayCircle"}},[[347,1,0]]]);