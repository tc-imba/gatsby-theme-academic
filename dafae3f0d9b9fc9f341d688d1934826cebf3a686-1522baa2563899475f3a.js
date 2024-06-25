/*! For license information please see dafae3f0d9b9fc9f341d688d1934826cebf3a686-1522baa2563899475f3a.js.LICENSE.txt */
(self.webpackChunkexample=self.webpackChunkexample||[]).push([[490],{19275:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(77554),a=n(47223),l=n(23205),c=n(27378),o=n(90382),i=n.n(o),u=n(56565),s=n(48798),f=n(21185),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){var t,n=e.prefixCls,l=e.className,o=e.checked,u=e.onChange,s=e.onClick,m=p(e,["prefixCls","className","checked","onChange","onClick"]),v=(0,c.useContext(f.E_).getPrefixCls)("tag",n),g=i()(v,(t={},(0,r.Z)(t,"".concat(v,"-checkable"),!0),(0,r.Z)(t,"".concat(v,"-checkable-checked"),o),t),l);return c.createElement("span",(0,a.Z)({},m,{className:g,onClick:function(e){null==u||u(!o),null==s||s(e)}}))},v=n(95389),g=n(31147),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},h=new RegExp("^(".concat(v.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(v.E.join("|"),")$")),E=function(e,t){var n,o=e.prefixCls,p=e.className,m=e.style,v=e.children,E=e.icon,y=e.color,b=e.onClose,Z=e.closeIcon,C=e.closable,O=void 0!==C&&C,k=d(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=c.useContext(f.E_),w=j.getPrefixCls,N=j.direction,P=c.useState(!0),S=(0,l.Z)(P,2),_=S[0],I=S[1];c.useEffect((function(){"visible"in k&&I(k.visible)}),[k.visible]);var F=function(){return!!y&&(h.test(y)||x.test(y))},M=(0,a.Z)({backgroundColor:y&&!F()?y:void 0},m),U=F(),T=w("tag",o),D=i()(T,(n={},(0,r.Z)(n,"".concat(T,"-").concat(y),U),(0,r.Z)(n,"".concat(T,"-has-color"),y&&!U),(0,r.Z)(n,"".concat(T,"-hidden"),!_),(0,r.Z)(n,"".concat(T,"-rtl"),"rtl"===N),n),p),H=function(e){e.stopPropagation(),null==b||b(e),e.defaultPrevented||"visible"in k||I(!1)},R="onClick"in k||v&&"a"===v.type,$=(0,u.Z)(k,["visible"]),L=E||null,A=L?c.createElement(c.Fragment,null,L,c.createElement("span",null,v)):v,z=c.createElement("span",(0,a.Z)({},$,{ref:t,className:D,style:M}),A,O?Z?c.createElement("span",{className:"".concat(T,"-close-icon"),onClick:H},Z):c.createElement(s.Z,{className:"".concat(T,"-close-icon"),onClick:H}):null);return R?c.createElement(g.Z,null,z):z},y=c.forwardRef(E);y.displayName="Tag",y.CheckableTag=m;var b=y},31697:function(e,t,n){"use strict";n(74805)},86199:function(e,t,n){"use strict";var r=n(69345);e.exports=function(e){return!r(e)}},83981:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},51290:function(e){e.exports=function(e,t,n,r){for(var a=-1,l=null==e?0:e.length;++a<l;){var c=e[a];t(r,c,n(c),e)}return r}},12439:function(e,t,n){var r=n(94105);e.exports=function(e,t,n,a){return r(e,(function(e,r,l){t(a,e,n(e),l)})),a}},61872:function(e,t,n){var r=n(8047);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},94105:function(e,t,n){var r=n(51766),a=n(23719)(r);e.exports=a},86905:function(e,t,n){var r=n(57599)();e.exports=r},51766:function(e,t,n){var r=n(86905),a=n(77856);e.exports=function(e,t){return e&&r(e,t,a)}},16026:function(e,t,n){var r=n(51290),a=n(12439),l=n(32146),c=n(99362);e.exports=function(e,t){return function(n,o){var i=c(n)?r:a,u=t?t():{};return i(n,e,l(o,2),u)}}},23719:function(e,t,n){var r=n(86351);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var l=n.length,c=t?l:-1,o=Object(n);(t?c--:++c<l)&&!1!==a(o[c],c,o););return n}}},57599:function(e){e.exports=function(e){return function(t,n,r){for(var a=-1,l=Object(t),c=r(t),o=c.length;o--;){var i=c[e?o:++a];if(!1===n(l[i],i,l))break}return t}}},8047:function(e,t,n){var r=n(61929),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},75906:function(e,t,n){var r=n(61872),a=n(16026)((function(e,t,n){r(e,n,t)}));e.exports=a},81811:function(e,t,n){var r=n(61872),a=n(51766),l=n(32146);e.exports=function(e,t){var n={};return t=l(t,3),a(e,(function(e,a,l){r(n,a,t(e,a,l))})),n}},80170:function(e,t,n){"use strict";n(54924);var r=n(10187),a=(n(31697),n(19275)),l=n(27378),c=n(68941),o=n(98730),i=n.n(o);t.Z=function(e){var t=(0,c.$)(),n=e.tag,o=n.color||"",u=n.name||"",s=u?i().generateFullUrl(t,"/tags/"+u):"#";return l.createElement(r.Z,{xs:!0},l.createElement(a.Z,{color:o},l.createElement("a",{href:s},"#"+u)))}},57325:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});n(50425);var r=n(86946),a=(n(37172),n(16348)),l=(n(37179),n(77934)),c=(n(54924),n(10187)),o=(n(30043),n(21007)),i=n(83981),u=n.n(i),s=n(54622),f=n(86199),p=n.n(f),m=n(27378),v=n(68941),g=n(98730),d=n.n(g),h=n(80170),x="researchCard-module--divider--3HLDC",E=function(e){var t=e.data.node,n=e.tagsMap,i=t.fields.slug.links,f=t.frontmatter,g=f.title,E=f.authors,y=f.excerpt,b=f.path,Z=f.date,C=f.tags,O=f.venue,k=f.cover,j=k?k.childImageSharp.fluid:null,w=(0,v.$)(),N=d().resolvePageUrl(b),P=[];Z&&(P=P.concat([m.createElement(c.Z,{xs:!0},m.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},d().formatDate(Z))),m.createElement(l.Z,{type:"vertical",className:x})])),O&&(P=P.concat([m.createElement(c.Z,{xs:!0},m.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},O)),m.createElement(l.Z,{type:"vertical",className:x})])),C?P=P.concat(C.map((function(e){return n[e]?m.createElement(h.Z,{tag:n[e]}):null}))):P.length>0&&P.pop();var S=d().parseMarkDown(d().trimExcerpt(y),!0);return m.createElement(a.Z,{className:u()("researchCard-module--researchCard--2F5KI","cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0},m.createElement(r.Z,{gutter:[8,0],align:"middle"},m.createElement(c.Z,{xs:24,sm:24,md:24,lg:12,xl:16},m.createElement(a.Z.Meta,{title:m.createElement("span",{className:"researchCard-module--title--2Hy6R"},m.createElement("a",{href:d().generateFullUrl(w,N)},g)),style:{marginBottom:"4px"}}),m.createElement(r.Z,{align:"middle",gutter:[8,4]},E?E.map((function(e,t){var n=d().parseMarkDown(e,!0);return t>=0&&t!==E.length-1&&(n+=","),m.createElement(c.Z,{xs:!0},m.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))})):null),m.createElement(r.Z,{align:"middle",gutter:[0,4]},P),m.createElement("a",{href:d().generateFullUrl(w,N)},m.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:S}})),m.createElement(r.Z,{gutter:[8,8]},i?i.map((function(e){var t="#";return e.url&&(t=p()(e.url)?d().generateFullUrl(w,e.url):e.url),m.createElement(c.Z,{xs:!0},m.createElement(o.Z,{href:t,target:"_blank",size:"small"},e.name))})):null)),m.createElement(c.Z,{xs:24,sm:24,md:24,lg:12,xl:8},m.createElement("a",{href:d().generateFullUrl(w,N)},m.createElement(s.Z,{fluid:j})))))}}}]);
//# sourceMappingURL=dafae3f0d9b9fc9f341d688d1934826cebf3a686-1522baa2563899475f3a.js.map