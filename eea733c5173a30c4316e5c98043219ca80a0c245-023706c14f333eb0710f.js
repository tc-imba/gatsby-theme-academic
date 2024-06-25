/*! For license information please see eea733c5173a30c4316e5c98043219ca80a0c245-023706c14f333eb0710f.js.LICENSE.txt */
(self.webpackChunkexample=self.webpackChunkexample||[]).push([[174],{55235:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},19275:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(77554),a=r(47223),l=r(23205),c=r(27378),o=r(90382),s=r.n(o),i=r(56565),u=r(80785),m=r(21185),p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},f=function(e){var t,r=e.prefixCls,l=e.className,o=e.checked,i=e.onChange,u=e.onClick,f=p(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,c.useContext(m.E_).getPrefixCls)("tag",r),g=s()(d,(t={},(0,n.Z)(t,"".concat(d,"-checkable"),!0),(0,n.Z)(t,"".concat(d,"-checkable-checked"),o),t),l);return c.createElement("span",(0,a.Z)({},f,{className:g,onClick:function(e){null==i||i(!o),null==u||u(e)}}))},d=r(95389),g=r(40608),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},E=new RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(d.E.join("|"),")$")),y=function(e,t){var r,o=e.prefixCls,p=e.className,f=e.style,d=e.children,y=e.icon,Z=e.color,x=e.onClose,b=e.closeIcon,C=e.closable,k=void 0!==C&&C,O=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=c.useContext(m.E_),w=N.getPrefixCls,S=N.direction,P=c.useState(!0),j=(0,l.Z)(P,2),_=j[0],I=j[1];c.useEffect((function(){"visible"in O&&I(O.visible)}),[O.visible]);var M=function(){return!!Z&&(E.test(Z)||h.test(Z))},U=(0,a.Z)({backgroundColor:Z&&!M()?Z:void 0},f),F=M(),T=w("tag",o),D=s()(T,(r={},(0,n.Z)(r,"".concat(T,"-").concat(Z),F),(0,n.Z)(r,"".concat(T,"-has-color"),Z&&!F),(0,n.Z)(r,"".concat(T,"-hidden"),!_),(0,n.Z)(r,"".concat(T,"-rtl"),"rtl"===S),r),p),$=function(e){e.stopPropagation(),null==x||x(e),e.defaultPrevented||"visible"in O||I(!1)},H="onClick"in O||d&&"a"===d.type,R=(0,i.Z)(O,["visible"]),A=y||null,L=A?c.createElement(c.Fragment,null,A,c.createElement("span",null,d)):d,Y=c.createElement("span",(0,a.Z)({},R,{ref:t,className:D,style:U}),L,k?b?c.createElement("span",{className:"".concat(T,"-close-icon"),onClick:$},b):c.createElement(u.Z,{className:"".concat(T,"-close-icon"),onClick:$}):null);return H?c.createElement(g.Z,null,Y):Y},Z=c.forwardRef(y);Z.displayName="Tag",Z.CheckableTag=f;var x=Z},31697:function(e,t,r){"use strict";r(74805)},86199:function(e,t,r){"use strict";var n=r(69345);e.exports=function(e){return!n(e)}},6657:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});r(50425);var n=r(86946),a=(r(37172),r(33941)),l=r(55235),c=r.n(l),o=r(54622),s=r(27378),i=r(23735),u=r(98417),m=r.n(u),p=r(23759),f=function(e){var t=e.data.node,r=e.tagsMap,l=t.frontmatter,u=l.title,f=l.excerpt,d=l.path,g=l.date,v=l.tags,E=l.cover,h=E?E.childImageSharp.fluid:null,y=(0,i.$)(),Z=m().resolvePageUrl(d),x=m().parseMarkDown(m().trimExcerpt(f),!0);return s.createElement(a.Z,{className:c()("postCard-module--postCard--34Apg","cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0,cover:s.createElement("div",null,s.createElement("a",{href:m().generateFullUrl(y,Z)},h?s.createElement(o.Z,{fluid:h}):s.createElement("div",{className:"postCard-module--postCardImg--3iDxl"})),s.createElement("span",{className:"postCard-module--dateHolder--3IZu8"},g?m().formatDate(g):""))},s.createElement(a.Z.Meta,{title:s.createElement("span",{className:"postCard-module--title--2nT7Q"},s.createElement("a",{href:m().generateFullUrl(y,Z)},u)),style:{marginBottom:"1rem"}}),s.createElement(n.Z,{align:"middle",gutter:[0,8]},v?v.map((function(e){return r[e]?s.createElement(p.Z,{key:e,tag:r[e]}):null})):null),s.createElement("a",{href:m().generateFullUrl(y,Z)},s.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:x}})))}},23759:function(e,t,r){"use strict";r(54924);var n=r(10187),a=(r(31697),r(19275)),l=r(27378),c=r(23735),o=r(98417),s=r.n(o);t.Z=function(e){var t=(0,c.$)(),r=e.tag,o=r.color||"",i=r.name||"",u=i?s().generateFullUrl(t,"/tags/"+i):"#";return l.createElement(n.Z,{xs:!0},l.createElement(a.Z,{color:o},l.createElement("a",{href:u},"#"+i)))}},57209:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});r(50425);var n=r(86946),a=(r(37172),r(33941)),l=(r(37179),r(77934)),c=(r(54924),r(10187)),o=(r(30043),r(21007)),s=r(55235),i=r.n(s),u=r(54622),m=r(86199),p=r.n(m),f=r(27378),d=r(23735),g=r(98417),v=r.n(g),E=r(23759),h="researchCard-module--divider---v8Rc",y=function(e){var t=e.data.node,r=e.tagsMap,s=t.frontmatter,m=s.title,g=s.authors,y=s.excerpt,Z=s.path,x=s.date,b=s.tags,C=s.venue,k=s.cover,O=s.links,N=k?k.childImageSharp.fluid:null,w=(0,d.$)(),S=v().resolvePageUrl(Z),P=[];x&&(P=P.concat([f.createElement(c.Z,{xs:!0,key:"date"},f.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},v().formatDate(x))),f.createElement(l.Z,{key:"date-divider",type:"vertical",className:h})])),C&&(P=P.concat([f.createElement(c.Z,{xs:!0,key:"venue"},f.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},C)),f.createElement(l.Z,{key:"venue-divider",type:"vertical",className:h})])),b?P=P.concat(b.map((function(e){return r[e]?f.createElement(E.Z,{key:"tag-"+e,tag:r[e]}):null}))):P.length>0&&P.pop();var j=v().parseMarkDown(v().trimExcerpt(y),!0);return f.createElement(a.Z,{className:i()("researchCard-module--researchCard--3tZIP","cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0},f.createElement(n.Z,{gutter:[8,0],align:"middle"},f.createElement(c.Z,{xs:24,sm:24,md:24,lg:12,xl:16},f.createElement(a.Z.Meta,{title:f.createElement("span",{className:"researchCard-module--title--3SK_y"},f.createElement("a",{href:v().generateFullUrl(w,S)},m)),style:{marginBottom:"4px"}}),f.createElement(n.Z,{align:"middle",gutter:[8,4]},g?g.map((function(e,t){var r=v().parseMarkDown(e,!0);return t>=0&&t!==g.length-1&&(r+=","),f.createElement(c.Z,{key:t,xs:!0},f.createElement("span",{dangerouslySetInnerHTML:{__html:r}}))})):null),f.createElement(n.Z,{align:"middle",gutter:[0,4]},P),f.createElement("a",{href:v().generateFullUrl(w,S)},f.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:j}})),f.createElement(n.Z,{gutter:[8,8]},O?O.map((function(e){var t="#";return e.url&&(t=p()(e.url)?v().generateFullUrl(w,e.url):e.url),f.createElement(c.Z,{xs:!0},f.createElement(o.Z,{href:t,target:"_blank",size:"small"},e.name))})):null)),f.createElement(c.Z,{xs:24,sm:24,md:24,lg:12,xl:8},f.createElement("a",{href:v().generateFullUrl(w,S)},N?f.createElement(u.Z,{fluid:N}):f.createElement("div",{className:"researchCard-module--postCardImg--1gYGY"})))))}},66503:function(e){e.exports=function(e,t,r,n){for(var a=-1,l=null==e?0:e.length;++a<l;){var c=e[a];t(n,c,r(c),e)}return n}},60426:function(e,t,r){var n=r(52033);e.exports=function(e,t,r,a){return n(e,(function(e,n,l){t(a,e,r(e),l)})),a}},88799:function(e,t,r){var n=r(42630);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},34690:function(e,t,r){var n=r(66503),a=r(60426),l=r(89278),c=r(19785);e.exports=function(e,t){return function(r,o){var s=c(r)?n:a,i=t?t():{};return s(r,e,l(o,2),i)}}},42630:function(e,t,r){var n=r(81822),a=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},83864:function(e,t,r){var n=r(88799),a=r(34690)((function(e,t,r){n(e,r,t)}));e.exports=a},25389:function(e,t,r){var n=r(88799),a=r(26194),l=r(89278);e.exports=function(e,t){var r={};return t=l(t,3),a(e,(function(e,a,l){n(r,a,t(e,a,l))})),r}}}]);
//# sourceMappingURL=eea733c5173a30c4316e5c98043219ca80a0c245-023706c14f333eb0710f.js.map