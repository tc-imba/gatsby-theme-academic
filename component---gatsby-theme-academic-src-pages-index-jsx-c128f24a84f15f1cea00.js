"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[689],{8942:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(27378),o=n(9098),l=n(83891),i=n(66739);var a=()=>{const e=(0,o.$W)().introduction.join("\n\n"),t=l.Z.parseMarkDown(e);return r.createElement("div",null,r.createElement("h1",{className:"titleSeparate"},"About Me"),r.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}}))},c=n(40134),u=n(81578),f=n(33672),s=n(11928),d=n(65376),p="homePage-module--homepageSection--769e2";const y=e=>{const t=r.createElement(c.Z,{justify:"space-between"},r.createElement(c.Z.Item,{as:u.Z,md:12,lg:15},r.createElement("h6",null,e.title)),r.createElement(c.Z.Item,{as:u.Z,md:12,lg:9,style:{fontSize:"12pt"}},e.date));return r.createElement(s.BJ,{title:t,style:{paddingBottom:"0.8rem",paddingTop:"0.3rem"},icon:r.createElement(d.Z,{size:e.iconSize||"lg",fixedWidth:!0,icon:e.icon||"award"}),iconStyle:{cursor:"default"},iconColor:"#44566C"})};var b=()=>{const e=(0,o.$W)();return console.log(e.awards),!e.awards||0===e.awards.length||""===e.awards[0].date&&""===e.awards[0].title?null:r.createElement("div",{className:p},r.createElement("h2",{style:{marginBottom:"0rem"}},"Awards & Scholarships"),r.createElement(f.Z,null,r.createElement(u.Z,{xs:24,style:{marginBottom:"-0.5rem"}},r.createElement(s.TY,{lineStyle:{display:"none"},style:{width:"100%"}},e.awards.map(y)))))},m=n(85162);var g=e=>r.createElement(s.BJ,{title:e.title,titleStyle:{fontSize:"11pt",fontWeight:"bold"},subtitle:e.location,subtitleStyle:{fontSize:"12pt",fontWeight:"400"},createdAt:r.createElement("div",{style:{color:"var(--rs-text-secondary)"}},e.date),style:{fontSize:"11pt",fontWeight:"300"},icon:r.createElement(d.Z,{size:"sm",fixedWidth:!0,icon:e.icon||"school"}),iconStyle:{cursor:"default"},iconColor:"#44566C"});const h=e=>r.createElement(m.Z,{icon:e.icon,size:"lg",title:e.title});var v=()=>{const e=(0,o.$W)(),t=e.education.slice(0,e.education.length-1),n=e.education.slice(e.education.length-1);return r.createElement("div",{className:p},r.createElement(f.Z,{type:"flex"},r.createElement(u.Z,{xs:24,sm:24,md:12,lg:15,style:{marginBottom:"-2rem"}},r.createElement("h2",{style:{marginBottom:"0"}},"Education"),e.education.length>1?r.createElement(s.TY,{lineStyle:{top:"20px"},lineColor:"#44566C",style:{width:"100%"}},t.map(g)):null,e.education.length>0?r.createElement(s.TY,{lineStyle:{display:"none"},style:{top:"-30px",width:"100%"}},n.map(g)):null),r.createElement(u.Z,{xs:24,sm:24,md:12,lg:9},r.createElement("h2",{style:{marginBottom:"0.8rem"},className:"interests"},"Interests"),r.createElement("div",null,e.interests.map(h)))))},O=n(83864),S=n.n(O),w=n(25389),j=n.n(w),E=n(2135),C=n(84309);var P=()=>{const e=(0,E.useStaticQuery)("791271472"),t=e.allTag?e.allTag.edges:[],n=j()(S()(t,(e=>e.node.name)),"node");return e.allMdx&&e.allMdx.edges&&e.allMdx.edges.length?r.createElement("div",{className:p},r.createElement("h2",{style:{marginBottom:"1rem"}},"Selected Research"),r.createElement(c.Z,{className:"spacing-grid"},e.allMdx&&e.allMdx.edges.map(((e,t)=>r.createElement(c.Z.Item,{as:u.Z,xs:24,sm:24,md:24,lg:24},r.createElement(C.Z,{data:e,tagsMap:n})))))):r.createElement(r.Fragment,null)},_=()=>r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"About",description:"",path:"",keywords:["NodeJS","Gatsby"]}),r.createElement(a,null),r.createElement(v,null),r.createElement(b,null),r.createElement(P,null))},92268:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),o=i(n(23615)),l=i(n(79259));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,o=e.children,i=e.lineColor,a=e.lineStyle,f=e.style,d=s(e,["orientation","children","lineColor","lineStyle","style"]),p=r.default.Children.map(o,(function(e){return r.default.cloneElement(e,{orientation:n})})),y=u({},"right"===n?l.default["containerBefore--right"]:l.default["containerBefore--left"]),b=u({},y,a);return b=i?u({},b,{background:i}):b,r.default.createElement("div",null,r.default.createElement("section",c({style:u({},l.default.container,f)},d),r.default.createElement("div",{style:u({},l.default.containerBefore,b)}),p,r.default.createElement("div",{style:l.default.containerAfter})))}}])&&d(n.prototype,o),i&&d(n,i),t}(r.Component);m.propTypes={children:o.default.node.isRequired,orientation:o.default.string,style:o.default.object,lineColor:o.default.string,lineStyle:o.default.object},m.defaultProps={style:{},lineStyle:{}};var g=m;t.default=g},99174:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),o=i(n(23615)),l=i(n(79259));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"mergeNotificationStyle",value:function(e){return e?f({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType}},{key:"iconStyle",value:function(e){return f({},l.default.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,o=e.icon,i=e.orientation,a=e.iconColor,s=e.style,d=u(e,["title","iconStyle","icon","orientation","iconColor","style"]),p=f({},"right"===i?l.default["event--right"]:l.default["event--left"]);return r.default.createElement("div",{style:f({},l.default.event,{marginBottom:50},s)},r.default.createElement("div",{style:this.mergeNotificationStyle(a)},r.default.createElement("span",{style:this.iconStyle(n)},o)),r.default.createElement("div",c({},d,{style:f({},l.default.blipStyle,p)}),r.default.createElement("div",null,t)),r.default.createElement("div",{style:l.default.eventAfter}))}}])&&d(n.prototype,o),i&&d(n,i),t}(r.Component);m.propTypes={title:o.default.node.isRequired,icon:o.default.node,iconColor:o.default.string,iconStyle:o.default.object,style:o.default.object,orientation:o.default.string},m.defaultProps={iconStyle:{},style:{}};var g=m;t.default=g},9897:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(23615)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),l=i(n(79259));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?y(e):t}(this,d(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(y(y(n))),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var r=e?u({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType,o=u({},"right"===n?l.default["eventType--right"]:l.default["eventType--left"]);return u({},r,o,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?l.default.cardBody:l.default.message;return e?u({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?l.default.time:u({},l.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=u({},l.default.eventContainer,e);return this.showAsCard()?u({},l.default.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,r=e.collapsible,o="card"===t?u({},l.default.cardTitle,n):{};return r?u({},l.default.toggleEnabled,o):o}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?o.default.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,o.default.createElement("div",{style:l.default.messageAfter})):o.default.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"…")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,i=e.iconStyle,a=e.bubbleStyle,f=e.buttons,s=e.icon,d=e.iconColor,p=e.titleStyle,y=e.subtitleStyle,b=e.orientation,m=e.collapsible,g=e.onClick,h=e.onIconClick,v=e.className,O=u({},"right"===b?l.default["event--right"]:l.default["event--left"]),S=u({},"left"===b?l.default["actionButtons--right"]:l.default["actionButtons--left"]);return o.default.createElement("div",{style:u({},l.default.event,O)},o.default.createElement("div",{style:this.mergeNotificationStyle(d,a,b)},o.default.createElement("span",{style:u({},l.default.materialIcons,i),onClick:h},s)),o.default.createElement("div",c({style:this.containerStyle()},{onClick:g,className:v}),o.default.createElement("div",{style:l.default.eventContainerBefore}),o.default.createElement("div",{style:this.toggleStyle(),onClick:m&&this.toggleContent},t&&o.default.createElement("div",{style:this.timeStyle()},t),o.default.createElement("div",{style:p},n),r&&o.default.createElement("div",{style:u({},l.default.subtitle,y)},r),o.default.createElement("div",{style:u({},l.default.actionButtons,S)},f)),this.props.children&&this.renderChildren()),o.default.createElement("div",{style:l.default.eventAfter}))}}])&&s(n.prototype,r),i&&s(n,i),t}(o.Component);b.propTypes={title:r.default.node.isRequired,subtitle:r.default.node,createdAt:r.default.node,children:r.default.node,buttons:r.default.node,container:r.default.string,icon:r.default.node,iconColor:r.default.string,iconStyle:r.default.object,bubbleStyle:r.default.object,orientation:r.default.string,contentStyle:r.default.object,cardHeaderStyle:r.default.object,style:r.default.object,titleStyle:r.default.object,subtitleStyle:r.default.object,collapsible:r.default.bool,showContent:r.default.bool,className:r.default.string,onClick:r.default.func,onIconClick:r.default.func},b.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1,className:"",onClick:function(){},onIconClick:function(){}};var m=b;t.default=m},11928:function(e,t,n){Object.defineProperty(t,"TY",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"BJ",{enumerable:!0,get:function(){return o.default}});var r=i(n(92268)),o=i(n(9897)),l=i(n(99174));function i(e){return e&&e.__esModule?e:{default:e}}},79259:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:2,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",cursor:"pointer",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}};t.default=n}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-pages-index-jsx-c128f24a84f15f1cea00.js.map