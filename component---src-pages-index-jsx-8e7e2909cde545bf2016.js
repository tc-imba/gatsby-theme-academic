(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/xht":function(e,t,n){"use strict";n("Jmwx");var r=n("BMrR"),o=(n("EpIQ"),n("bx4M")),a=(n("qNb/"),n("PArb")),l=(n("rO+z"),n("kPKH")),i=(n("L/Qf"),n("2/Rp")),c=n("q1tI"),u=n.n(c),f=n("wd/R"),s=n.n(f),d=n("8aPU"),p=n.n(d),y=n("y6Qd"),m=n("Rt21"),b=n.n(m);t.a=function(e){var t=e.data.node,n=e.tagsMap,c=t.fields.parsed,f=t.frontmatter.cover,d=c.title,m=c.authors,g=c.excerpt,h=c.path,v=c.links,O=c.date,E=c.tags,S=c.venue,w=f?f.childImageSharp.fluid:null,j=b.a.resolvePageUrl(h),C=[];return O&&(C=C.concat([u.a.createElement(l.a,{xs:!0},u.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},s()(O).format("MMM Do YYYY"))),u.a.createElement(a.a,{type:"vertical",className:p.a.divider})])),S&&(C=C.concat([u.a.createElement(l.a,{xs:!0},u.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},S)),u.a.createElement(a.a,{type:"vertical",className:p.a.divider})])),E?C=C.concat(E.map((function(e){return n[e]?u.a.createElement(y.a,{tag:n[e]}):null}))):C.length>0&&C.pop(),u.a.createElement(o.a,{className:p.a.researchCard,bodyStyle:{padding:"0.8rem"},hoverable:!0,onClick:function(e){var t=e.target.tagName.toLowerCase();"a"!==t&&"span"!==t&&j&&(window.location.href=j)}},u.a.createElement(r.a,{gutter:[8,0],align:"middle"},u.a.createElement(l.a,{xs:24,sm:24,md:24,lg:15,xl:18},u.a.createElement(o.a.Meta,{title:d,style:{marginBottom:"4px"}}),u.a.createElement(r.a,{align:"middle",gutter:[8,4]},m?m.map((function(e,t){return u.a.createElement(l.a,{xs:!0},u.a.createElement("span",null,e+(t!==m.length-1?",":"")))})):null),u.a.createElement(r.a,{align:"middle",gutter:[0,4]},C),u.a.createElement("p",{style:{marginTop:"1rem"}},g),u.a.createElement(r.a,{gutter:[8,8]},v?v.map((function(e){return u.a.createElement(l.a,{xs:!0},u.a.createElement(i.a,{href:e.url,target:"_blank",size:"small"},e.name))})):null)),u.a.createElement(l.a,{xs:24,sm:24,md:24,lg:9,xl:6},u.a.createElement("div",{className:p.a.postCardImg,style:{backgroundImage:"url("+(w?w.src:"")+")"}}))))}},"0lcf":function(e,t,n){"use strict";n("SchZ"),n("u3En")},"4l3W":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),o=l(n("17x9")),a=l(n("sHtH"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return d(this,t),y(this,m(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"mergeNotificationStyle",value:function(e){return e?f({},a.default.eventType,{color:e,borderColor:e}):a.default.eventType}},{key:"iconStyle",value:function(e){return f({},a.default.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,o=e.icon,l=e.orientation,i=e.iconColor,s=e.style,d=u(e,["title","iconStyle","icon","orientation","iconColor","style"]),p=f({},"right"===l?a.default["event--right"]:a.default["event--left"]);return r.default.createElement("div",{style:f({},a.default.event,{marginBottom:50},s)},r.default.createElement("div",{style:this.mergeNotificationStyle(i)},r.default.createElement("span",{style:this.iconStyle(n)},o)),r.default.createElement("div",c({},d,{style:f({},a.default.blipStyle,p)}),r.default.createElement("div",null,t)),r.default.createElement("div",{style:a.default.eventAfter}))}}])&&p(n.prototype,o),l&&p(n,l),t}(r.Component);g.propTypes={title:o.default.node.isRequired,icon:o.default.node,iconColor:o.default.string,iconStyle:o.default.object,style:o.default.object,orientation:o.default.string},g.defaultProps={iconStyle:{},style:{}};var h=g;t.default=h},"8aPU":function(e,t,n){e.exports={researchCard:"researchCard-module--researchCard--3Km_A",postCardImg:"researchCard-module--postCardImg--1uwtT",mrTp20:"researchCard-module--mrTp20--19vl_",dateHolder:"researchCard-module--dateHolder--EUdSA",divider:"researchCard-module--divider--daba7"}},Dtc0:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return k}));n("M7k7");var r=n("Ol7k"),o=n("q1tI"),a=n.n(o),l=n("U4IR"),i=n("kuUC"),c=n("JkAW"),u=n("obyI"),f=n.n(u),s=function(){var e=f.a.introduction.join("\n");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(c.a,{title:"About",description:e,path:"",keywords:["Rolwin","Reevan","Monteiro","FullStack developer","Javascript","ReactJS","NodeJS","Gatsby"]}),a.a.createElement("h1",{className:"titleSeparate"},"About Me"),f.a.introduction.map((function(e){return a.a.createElement("p",null,e)}))))},d=(n("Jmwx"),n("BMrR")),p=(n("rO+z"),n("kPKH")),y=(n("LXko"),n("VXEj")),m=n("Y9NL"),b=n("IP2g"),g=(n("UVcv"),function(e){return a.a.createElement(m.TimelineEvent,{title:e.title,titleStyle:{fontSize:"12pt",fontWeight:"bold"},subtitle:e.location,subtitleStyle:{fontSize:"13pt",fontWeight:"400"},createdAt:e.date,style:{fontSize:"12pt",fontWeight:"300"},icon:a.a.createElement(b.a,{size:"md",fixedWidth:!0,icon:e.icon||"school"}),iconStyle:{cursor:"default"}})}),h=function(e){return a.a.createElement(y.b.Item,null,a.a.createElement(y.b.Item.Meta,{avatar:a.a.createElement(b.a,{size:"lg",fixedWidth:!0,icon:e.icon}),title:e.title}))},v=f.a.education.slice(0,f.a.education.length-1),O=f.a.education.slice(f.a.education.length-1),E=function(){return a.a.createElement("div",{style:{marginTop:"0.8rem"}},a.a.createElement(d.a,null,a.a.createElement(p.a,{xs:24,sm:24,md:12,lg:15},a.a.createElement("h2",{style:{marginBottom:"0rem"}},"Education"),f.a.education.length>1?a.a.createElement(m.Timeline,{lineStyle:{top:"20px"}},v.map(g)):null,f.a.education.length>0?a.a.createElement(m.Timeline,{lineStyle:{display:"none"},style:{top:"-30px"}},O.map(g)):null),a.a.createElement(p.a,{xs:24,sm:24,md:12,lg:9},a.a.createElement("h2",{style:{marginBottom:"0.8rem"},className:"interests"},"Interests"),a.a.createElement(y.b,{itemLayout:"horizontal",split:!1},f.a.interests.map(h)))))},S=n("QVEU"),w=n.n(S),j=n("noZS"),C=n.n(j),P=n("/xht"),x=function(e){var t=e.data,n=t.allTag?t.allTag.edges:[],r=C()(w()(n,(function(e){return e.node.name})),"node");return a.a.createElement("div",null,a.a.createElement("h2",{style:{marginBottom:"1rem"}},"Selected Research"),a.a.createElement(d.a,{gutter:[20,20]},t.allMarkdownRemark&&t.allMarkdownRemark.edges.map((function(e,t){return a.a.createElement(p.a,{key:t,xs:24,sm:24,md:24,lg:24},a.a.createElement(P.a,{data:e,tagsMap:r}))}))))},k=(t.default=function(e){var t=e.data;return a.a.createElement(r.a,{className:"outerPadding"},a.a.createElement(r.a,{className:"container"},a.a.createElement(l.a,null),a.a.createElement(i.b,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(E,null),a.a.createElement(x,{data:t})))))},"59947989")},JD84:function(e,t,n){var r=n("SKAX");e.exports=function(e,t,n,o){return r(e,(function(e,r,a){t(o,e,n(e),a)})),o}},O0oS:function(e,t,n){var r=n("Cwc5"),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=o},QVEU:function(e,t,n){var r=n("hypo"),o=n("UMY1")((function(e,t,n){r(e,n,t)}));e.exports=o},SlU0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("17x9")),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),a=l(n("sHtH"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=d(t).call(this,e))||"object"!==i(o)&&"function"!=typeof o?y(r):o).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(y(y(n))),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var r=e?u({},a.default.eventType,{color:e,borderColor:e}):a.default.eventType,o=u({},"right"===n?a.default["eventType--right"]:a.default["eventType--left"]);return u({},r,o,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?a.default.cardBody:a.default.message;return e?u({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?a.default.time:u({},a.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=u({},a.default.eventContainer,e);return this.showAsCard()?u({},a.default.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,r=e.collapsible,o="card"===t?u({},a.default.cardTitle,n):{};return r?u({},a.default.toggleEnabled,o):o}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?o.default.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,o.default.createElement("div",{style:a.default.messageAfter})):o.default.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"…")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,l=e.iconStyle,i=e.bubbleStyle,f=e.buttons,s=e.icon,d=e.iconColor,p=e.titleStyle,y=e.subtitleStyle,m=e.orientation,b=e.collapsible,g=e.onClick,h=e.onIconClick,v=e.className,O=u({},"right"===m?a.default["event--right"]:a.default["event--left"]),E=u({},"left"===m?a.default["actionButtons--right"]:a.default["actionButtons--left"]);return o.default.createElement("div",{style:u({},a.default.event,O)},o.default.createElement("div",{style:this.mergeNotificationStyle(d,i,m)},o.default.createElement("span",{style:u({},a.default.materialIcons,l),onClick:h},s)),o.default.createElement("div",c({style:this.containerStyle()},{onClick:g,className:v}),o.default.createElement("div",{style:a.default.eventContainerBefore}),o.default.createElement("div",{style:this.toggleStyle(),onClick:b&&this.toggleContent},t&&o.default.createElement("div",{style:this.timeStyle()},t),o.default.createElement("div",{style:p},n),r&&o.default.createElement("div",{style:u({},a.default.subtitle,y)},r),o.default.createElement("div",{style:u({},a.default.actionButtons,E)},f)),this.props.children&&this.renderChildren()),o.default.createElement("div",{style:a.default.eventAfter}))}}])&&s(n.prototype,r),l&&s(n,l),t}(o.Component);m.propTypes={title:r.default.node.isRequired,subtitle:r.default.node,createdAt:r.default.node,children:r.default.node,buttons:r.default.node,container:r.default.string,icon:r.default.node,iconColor:r.default.string,iconStyle:r.default.object,bubbleStyle:r.default.object,orientation:r.default.string,contentStyle:r.default.object,cardHeaderStyle:r.default.object,style:r.default.object,titleStyle:r.default.object,subtitleStyle:r.default.object,collapsible:r.default.bool,showContent:r.default.bool,className:r.default.string,onClick:r.default.func,onIconClick:r.default.func},m.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1,className:"",onClick:function(){},onIconClick:function(){}};var b=m;t.default=b},UMY1:function(e,t,n){var r=n("oMRN"),o=n("JD84"),a=n("ut/Y"),l=n("Z0cm");e.exports=function(e,t){return function(n,i){var c=l(n)?r:o,u=t?t():{};return c(n,e,a(i,2),u)}}},UVcv:function(e,t,n){},Y9NL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"TimelineEvent",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"TimelineBlip",{enumerable:!0,get:function(){return a.default}});var r=l(n("qCih")),o=l(n("SlU0")),a=l(n("4l3W"));function l(e){return e&&e.__esModule?e:{default:e}}},hypo:function(e,t,n){var r=n("O0oS");e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},mr32:function(e,t,n){"use strict";var r=n("lSNA"),o=n.n(r),a=n("pVnL"),l=n.n(a),i=n("J4zp"),c=n.n(i),u=n("q1tI"),f=n("TSYQ"),s=n.n(f),d=n("BGR+"),p=n("V/uB"),y=n.n(p),m=n("H84U"),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},g=function(e){var t,n=u.useContext(m.b).getPrefixCls,r=e.prefixCls,a=e.className,i=e.checked,c=b(e,["prefixCls","className","checked"]),f=n("tag",r),d=s()(f,(t={},o()(t,"".concat(f,"-checkable"),!0),o()(t,"".concat(f,"-checkable-checked"),i),t),a);return delete c.onChange,u.createElement("span",l()({},c,{className:d,onClick:function(t){var n=e.checked,r=e.onChange,o=e.onClick;r&&r(!n),o&&o(t)}}))},h=n("09Wf"),v=n("g0mS"),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=new RegExp("^(".concat(h.a.join("|"),")(-inverse)?$")),S=new RegExp("^(".concat(h.b.join("|"),")$")),w=function(e,t){var n,r=e.prefixCls,a=e.className,i=e.style,f=e.children,p=e.icon,b=e.color,g=e.onClose,h=e.closeIcon,w=e.closable,j=void 0!==w&&w,C=O(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),P=u.useContext(m.b),x=P.getPrefixCls,k=P.direction,_=u.useState(!0),T=c()(_,2),N=T[0],I=T[1];u.useEffect((function(){"visible"in C&&I(C.visible)}),[C.visible]);var B=function(){return!!b&&(E.test(b)||S.test(b))},M=l()({backgroundColor:b&&!B()?b:void 0},i),A=B(),R=x("tag",r),H=s()(R,(n={},o()(n,"".concat(R,"-").concat(b),A),o()(n,"".concat(R,"-has-color"),b&&!A),o()(n,"".concat(R,"-hidden"),!N),o()(n,"".concat(R,"-rtl"),"rtl"===k),n),a),U=function(e){e.stopPropagation(),g&&g(e),e.defaultPrevented||"visible"in C||I(!1)},q="onClick"in C||f&&"a"===f.type,z=Object(d.a)(C,["visible"]),D=p||null,J=D?u.createElement(u.Fragment,null,D,u.createElement("span",null,f)):f,W=u.createElement("span",l()({},z,{ref:t,className:H,style:M}),J,j?h?u.createElement("div",{className:"".concat(R,"-close-icon"),onClick:U},h):u.createElement(y.a,{className:"".concat(R,"-close-icon"),onClick:U}):null);return q?u.createElement(v.a,null,W):W},j=u.forwardRef(w);j.displayName="Tag",j.CheckableTag=g;t.a=j},noZS:function(e,t,n){var r=n("hypo"),o=n("JC6p"),a=n("ut/Y");e.exports=function(e,t){var n={};return t=a(t,3),o(e,(function(e,o,a){r(n,o,t(e,o,a))})),n}},oMRN:function(e,t){e.exports=function(e,t,n,r){for(var o=-1,a=null==e?0:e.length;++o<a;){var l=e[o];t(r,l,n(l),e)}return r}},qCih:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),o=l(n("17x9")),a=l(n("sHtH"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return d(this,t),y(this,m(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,o=e.children,l=e.lineColor,i=e.lineStyle,f=e.style,d=s(e,["orientation","children","lineColor","lineStyle","style"]),p=r.default.Children.map(o,(function(e){return r.default.cloneElement(e,{orientation:n})})),y=u({},"right"===n?a.default["containerBefore--right"]:a.default["containerBefore--left"]),m=u({},y,i);return m=l?u({},m,{background:l}):m,r.default.createElement("div",null,r.default.createElement("section",c({style:u({},a.default.container,f)},d),r.default.createElement("div",{style:u({},a.default.containerBefore,m)}),p,r.default.createElement("div",{style:a.default.containerAfter})))}}])&&p(n.prototype,o),l&&p(n,l),t}(r.Component);g.propTypes={children:o.default.node.isRequired,orientation:o.default.string,style:o.default.object,lineColor:o.default.string,lineStyle:o.default.object},g.defaultProps={style:{},lineStyle:{}};var h=g;t.default=h},sHtH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:2,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",cursor:"pointer",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}};t.default=r},u3En:function(e,t,n){},y6Qd:function(e,t,n){"use strict";n("rO+z");var r=n("kPKH"),o=(n("0lcf"),n("mr32")),a=n("q1tI"),l=n.n(a);t.a=function(e){var t=e.tag,n=t.color||"",a=t.name||"";return l.a.createElement(r.a,{xs:!0},l.a.createElement(o.a,{color:n},l.a.createElement("a",{href:"/tags/"+a},"#"+a)))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8e7e2909cde545bf2016.js.map