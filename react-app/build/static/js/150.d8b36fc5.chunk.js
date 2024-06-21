/*! For license information please see 150.d8b36fc5.chunk.js.LICENSE.txt */
(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[150],{470:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});var r=n(8168),o=n(8587),i=n(9950),a=n(533),c=n(4061),s=n(9254),u=n(8283),l=n(2235),f=n(863),p=n(8483);function d(e){return(0,p.Ay)("MuiCard",e)}(0,f.A)("MuiCard",["root"]);var m=n(4414);const h=["className","raised"],y=(0,s.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=i.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,l=(0,o.A)(n,h),f=(0,r.A)({},n,{raised:s}),p=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},d,t)})(f);return(0,m.jsx)(y,(0,r.A)({className:(0,a.A)(p.root,i),elevation:s?8:void 0,ref:t,ownerState:f},l))}))},899:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>C});var r=n(8587),o=n(8168),i=n(9950),a=n(533),c=n(8286),s=n(237),u=n(4061),l=n(9254),f=n(8283),p=n(4857);const d=i.createContext();var m=n(863),h=n(8483);function y(e){return(0,h.Ay)("MuiGrid",e)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],g=(0,m.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>"spacing-xs-".concat(e))),...["column-reverse","column","row-reverse","row"].map((e=>"direction-xs-".concat(e))),...["nowrap","wrap-reverse","wrap"].map((e=>"wrap-xs-".concat(e))),...b.map((e=>"grid-xs-".concat(e))),...b.map((e=>"grid-sm-".concat(e))),...b.map((e=>"grid-md-".concat(e))),...b.map((e=>"grid-lg-".concat(e))),...b.map((e=>"grid-xl-".concat(e)))]);var v=n(4414);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function T(e){const t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function A(e){let{breakpoints:t,values:n}=e,r="";Object.keys(n).forEach((e=>{""===r&&0!==n[e]&&(r=e)}));const o=Object.keys(t).sort(((e,n)=>t[e]-t[n]));return o.slice(0,o.indexOf(r))}const S=(0,l.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:o,item:i,spacing:a,wrap:c,zeroMinWidth:s,breakpoints:u}=n;let l=[];r&&(l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]];const r=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&r.push(n["spacing-".concat(t,"-").concat(String(o))])})),r}(a,u,t));const f=[];return u.forEach((e=>{const r=n[e];r&&f.push(t["grid-".concat(e,"-").concat(String(r))])})),[t.root,r&&t.container,i&&t.item,s&&t.zeroMinWidth,...l,"row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==c&&t["wrap-xs-".concat(String(c))],...f]}})((e=>{let{ownerState:t}=e;return(0,o.A)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){let{theme:t,ownerState:n}=e;const r=(0,c.kW)({values:n.direction,breakpoints:t.breakpoints.values});return(0,c.NI)({theme:t},r,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(g.item)]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:n}=e;const{container:r,rowSpacing:o}=n;let i={};if(r&&0!==o){const e=(0,c.kW)({values:o,breakpoints:t.breakpoints.values});let n;"object"===typeof e&&(n=A({breakpoints:t.breakpoints.values,values:e})),i=(0,c.NI)({theme:t},e,((e,r)=>{var o;const i=t.spacing(e);return"0px"!==i?{marginTop:"-".concat(T(i)),["& > .".concat(g.item)]:{paddingTop:T(i)}}:null!=(o=n)&&o.includes(r)?{}:{marginTop:0,["& > .".concat(g.item)]:{paddingTop:0}}}))}return i}),(function(e){let{theme:t,ownerState:n}=e;const{container:r,columnSpacing:o}=n;let i={};if(r&&0!==o){const e=(0,c.kW)({values:o,breakpoints:t.breakpoints.values});let n;"object"===typeof e&&(n=A({breakpoints:t.breakpoints.values,values:e})),i=(0,c.NI)({theme:t},e,((e,r)=>{var o;const i=t.spacing(e);return"0px"!==i?{width:"calc(100% + ".concat(T(i),")"),marginLeft:"-".concat(T(i)),["& > .".concat(g.item)]:{paddingLeft:T(i)}}:null!=(o=n)&&o.includes(r)?{}:{width:"100%",marginLeft:0,["& > .".concat(g.item)]:{paddingLeft:0}}}))}return i}),(function(e){let t,{theme:n,ownerState:r}=e;return n.breakpoints.keys.reduce(((e,i)=>{let a={};if(r[i]&&(t=r[i]),!t)return e;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.kW)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"===typeof s?s[i]:s;if(void 0===u||null===u)return e;const l="".concat(Math.round(t/u*1e8)/1e6,"%");let f={};if(r.container&&r.item&&0!==r.columnSpacing){const e=n.spacing(r.columnSpacing);if("0px"!==e){const t="calc(".concat(l," + ").concat(T(e),")");f={flexBasis:t,maxWidth:t}}}a=(0,o.A)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===n.breakpoints.values[i]?Object.assign(e,a):e[n.breakpoints.up(i)]=a,e}),{})}));const O=e=>{const{classes:t,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:c,breakpoints:s}=e;let l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e="spacing-".concat(t,"-").concat(String(r));n.push(e)}})),n}(i,s));const f=[];s.forEach((t=>{const n=e[t];n&&f.push("grid-".concat(t,"-").concat(String(n)))}));const p={root:["root",n&&"container",o&&"item",c&&"zeroMinWidth",...l,"row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==a&&"wrap-xs-".concat(String(a)),...f]};return(0,u.A)(p,y,t)},k=i.forwardRef((function(e,t){const n=(0,f.A)({props:e,name:"MuiGrid"}),{breakpoints:c}=(0,p.A)(),u=(0,s.A)(n),{className:l,columns:m,columnSpacing:h,component:y="div",container:b=!1,direction:g="row",item:T=!1,rowSpacing:A,spacing:k=0,wrap:C="wrap",zeroMinWidth:x=!1}=u,j=(0,r.A)(u,w),E=A||k,N=h||k,M=i.useContext(d),P=b?m||12:M,L={},I=(0,o.A)({},j);c.keys.forEach((e=>{null!=j[e]&&(L[e]=j[e],delete I[e])}));const R=(0,o.A)({},u,{columns:P,container:b,direction:g,item:T,rowSpacing:E,columnSpacing:N,wrap:C,zeroMinWidth:x,spacing:k},L,{breakpoints:c.keys}),W=O(R);return(0,v.jsx)(d.Provider,{value:P,children:(0,v.jsx)(S,(0,o.A)({ownerState:R,className:(0,a.A)(W.root,l),as:y,ref:t},I))})}));const C=k},2257:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(7457),o=n(9254),i=n(8283);const a=(0,r.A)({createStyledComponent:(0,o.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,i.A)({props:e,name:"MuiStack"})})},7457:(e,t,n)=>{"use strict";n.d(t,{A:()=>S});var r=n(8587),o=n(8168),i=n(9950),a=n(3817),c=n(6455),s=n(8483),u=n(4061),l=n(146),f=n(2161),p=n(237),d=n(2860),m=n(8286),h=n(7937),y=n(4414);const b=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,d.A)(),v=(0,l.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function w(e){return(0,f.A)({props:e,name:"MuiStack",defaultTheme:g})}function T(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,o)=>(e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e)),[])}const A=e=>{let{ownerState:t,theme:n}=e,r=(0,o.A)({display:"flex",flexDirection:"column"},(0,m.NI)({theme:n},(0,m.kW)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,h.LX)(n),o=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),i=(0,m.kW)({values:t.direction,base:o}),a=(0,m.kW)({values:t.spacing,base:o});"object"===typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const r=t>0?i[n[t-1]]:"column";i[e]=r}}));const s=(n,r)=>{return t.useFlexGap?{gap:(0,h._W)(e,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((o=r?i[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]))]:(0,h._W)(e,n)}};var o};r=(0,c.A)(r,(0,m.NI)({theme:n},a,s))}return r=(0,m.iZ)(n.breakpoints,r),r};function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=v,useThemeProps:n=w,componentName:c="MuiStack"}=e,l=t(A);return i.forwardRef((function(e,t){const i=n(e),f=(0,p.A)(i),{component:d="div",direction:m="column",spacing:h=0,divider:g,children:v,className:w,useFlexGap:A=!1}=f,S=(0,r.A)(f,b),O={direction:m,spacing:h,useFlexGap:A},k=(0,u.A)({root:["root"]},(e=>(0,s.Ay)(c,e)),{});return(0,y.jsx)(l,(0,o.A)({as:d,ownerState:O,ref:t,className:(0,a.A)(k.root,w)},S,{children:g?T(v,g):v}))}))}},6470:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(c[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(c[a[l]]=i[a[l]])}}return c}},4901:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!==s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!==s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!==s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],a[u[s]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2772:(e,t,n)=>{"use strict";n.d(t,{m:()=>se});var r=n(1942),o=n.n(r),i=n(1876),a=n.n(i),c=n(4901),s=n.n(c),u=n(9950),l=n(6470),f=n.n(l),p="bodyAttributes",d="htmlAttributes",m="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(h).map((function(e){return h[e]})),"charset"),b="cssText",g="href",v="http-equiv",w="innerHTML",T="itemprop",A="name",S="property",O="rel",k="src",C="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",E="defer",N="encodeSpecialCharacters",M="onChangeClientState",P="titleTemplate",L=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),I=[h.NOSCRIPT,h.SCRIPT,h.STYLE],R="data-react-helmet",W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},D=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=U(e,h.TITLE),n=U(e,P);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=U(e,j);return t||r||void 0},q=function(e){return U(e,M)||function(){}},H=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Y=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Z("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===O&&"canonical"===e[n].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==w&&c!==b&&c!==T||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=f()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},U=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},K=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){K(t)}),0)}}(),V=function(e){return clearTimeout(e)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||K:n.g.requestAnimationFrame||K,X="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:n.g.cancelAnimationFrame||V,Z=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},J=null,Q=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ne(h.BODY,r),ne(h.HTML,o),te(f,p);var d={baseTag:re(h.BASE,n),linkTags:re(h.LINK,i),metaTags:re(h.META,a),noscriptTags:re(h.NOSCRIPT,c),scriptTags:re(h.SCRIPT,u),styleTags:re(h.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),s(e,m,y)},ee=function(e){return Array.isArray(e)?e.join(""):e},te=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ee(e)),ne(h.TITLE,t)},ne=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},re=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"["+R+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},oe=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},ae=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[R]=!0,r),i=ie(n,o);return[u.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=oe(n),i=ee(t);return o?"<"+e+" "+R+'="true" '+o+">"+D(i,r)+"</"+e+">":"<"+e+" "+R+'="true">'+D(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case d:return{toComponent:function(){return ie(t)},toString:function(){return oe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===w||n===b){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===w||e===b)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+D(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===I.indexOf(e);return t+"<"+e+" "+R+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ce=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,m=e.titleAttributes;return{base:ae(h.BASE,t,r),bodyAttributes:ae(p,n,r),htmlAttributes:ae(d,o,r),link:ae(h.LINK,i,r),meta:ae(h.META,a,r),noscript:ae(h.NOSCRIPT,c,r),script:ae(h.SCRIPT,s,r),style:ae(h.STYLE,u,r),title:ae(h.TITLE,{title:f,titleAttributes:m},r)}},se=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!s()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TITLE:return _({},o,((t={})[r.type]=a,t.titleAttributes=_({},i),t));case h.BODY:return _({},o,{bodyAttributes:_({},i)});case h.HTML:return _({},o,{htmlAttributes:_({},i)})}return _({},o,((n={})[r.type]=_({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=z(t,["children"]),o=_({},r);return n&&(o=this.mapChildrenToProps(n,o)),u.createElement(e,o)},B(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(u.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:G([g,C],e),bodyAttributes:H(p,e),defer:U(e,E),encode:U(e,N),htmlAttributes:H(d,e),linkTags:Y(h.LINK,[O,g],e),metaTags:Y(h.META,[A,y,v,S,T],e),noscriptTags:Y(h.NOSCRIPT,[w],e),onChangeClientState:q(e),scriptTags:Y(h.SCRIPT,[k,w],e),styleTags:Y(h.STYLE,[b],e),title:F(e),titleAttributes:H(m,e)}}),(function(e){J&&X(J),e.defer?J=$((function(){Q(e,(function(){J=null}))})):(Q(e),J=null)}),ce)((function(){return null})));se.renderStatic=se.rewind},1876:(e,t,n)=>{"use strict";var r,o=n(9950),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);