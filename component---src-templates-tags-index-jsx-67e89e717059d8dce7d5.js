(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/xht":function(e,t,a){"use strict";a("Jmwx");var n=a("BMrR"),r=(a("EpIQ"),a("bx4M")),l=(a("qNb/"),a("PArb")),o=(a("rO+z"),a("kPKH")),c=(a("L/Qf"),a("2/Rp")),s=a("q1tI"),i=a.n(s),u=a("9eSz"),m=a.n(u),d=a("yu3D"),p=a.n(d),f=a("TSYQ"),g=a.n(f),E=a("8aPU"),v=a.n(E),h=a("y6Qd"),y=a("Rt21"),b=a.n(y);t.a=function(e){var t=e.data.node,a=e.tagsMap,s=t.fields.parsed,u=t.frontmatter.cover,d=s.title,f=s.authors,E=s.excerpt,y=s.path,x=s.links,C=s.date,k=s.tags,w=s.venue,S=u?u.childImageSharp.fluid:null,N=b.a.resolvePageUrl(y),O=[];return C&&(O=O.concat([i.a.createElement(o.a,{xs:!0},i.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},b.a.formatDate(C))),i.a.createElement(l.a,{type:"vertical",className:v.a.divider})])),w&&(O=O.concat([i.a.createElement(o.a,{xs:!0},i.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},w)),i.a.createElement(l.a,{type:"vertical",className:v.a.divider})])),k?O=O.concat(k.map((function(e){return a[e]?i.a.createElement(h.a,{tag:a[e]}):null}))):O.length>0&&O.pop(),i.a.createElement(r.a,{className:g()(v.a.researchCard,"cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0,onClick:function(e){var t=e.target.tagName.toLowerCase();"a"!==t&&"span"!==t&&N&&(window.location.href=b.a.generateFullUrl(N))}},i.a.createElement(n.a,{gutter:[8,0],align:"middle"},i.a.createElement(o.a,{xs:24,sm:24,md:24,lg:12,xl:16},i.a.createElement(r.a.Meta,{title:i.a.createElement("span",{className:v.a.title},d),style:{marginBottom:"4px"}}),i.a.createElement(n.a,{align:"middle",gutter:[8,4]},f?f.map((function(e,t){var a=b.a.parseMarkDown(e);return t!==f.length-1&&(a+=","),i.a.createElement(o.a,{xs:!0},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))})):null),i.a.createElement(n.a,{align:"middle",gutter:[0,4]},O),i.a.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:b.a.parseMarkDown(E)}}),i.a.createElement(n.a,{gutter:[8,8]},x?x.map((function(e){var t="#";return e.url&&(t=p()(e.url)?b.a.generateFullUrl(e.url):e.url),i.a.createElement(o.a,{xs:!0},i.a.createElement(c.a,{href:t,target:"_blank",size:"small"},e.name))})):null)),i.a.createElement(o.a,{xs:24,sm:24,md:24,lg:12,xl:8},i.a.createElement(m.a,{fluid:S}))))}},"0lcf":function(e,t,a){"use strict";a("SchZ"),a("u3En")},"4QF9":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return k}));a("M7k7");var n=a("Ol7k"),r=(a("Jmwx"),a("BMrR")),l=(a("rO+z"),a("kPKH")),o=a("QVEU"),c=a.n(o),s=a("noZS"),i=a.n(s),u=a("k4Da"),m=a.n(u),d=a("q1tI"),p=a.n(d),f=a("JkAW"),g=a("U4IR"),E=a("EosS"),v=a("kuUC"),h=a("Rt21"),y=a.n(h),b=a("OBNy"),x=a.n(b),C=a("/xht"),k="770360276";t.default=function(e){var t=e.data,a=e.pageContext.tag,o=t.allMarkdownRemark.edges,s=m()(o,(function(e){return"posts"===e.node.fields.parsed.type})),u=m()(o,(function(e){return"research"===e.node.fields.parsed.type})),d=t.allTag?t.allTag.edges:[],h=i()(c()(d,(function(e){return e.node.name})),"node"),b=h[a],k=b?b.path:"#",w=b?b.description:"";return p.a.createElement(n.a,{className:"outerPadding"},p.a.createElement(n.a,{className:"container"},p.a.createElement(g.a,null),p.a.createElement(f.a,{title:a,description:"All post about "+a+". "+w+" ",path:y.a.resolvePageUrl(k,b),keywords:[a]}),p.a.createElement(v.b,null,p.a.createElement("div",{className:"marginTopTitle "+x.a.tagsList},p.a.createElement("h1",{className:"titleSeparate"},"#",a),p.a.createElement("h4",{className:"textCenter"},w)),u.length>0?[p.a.createElement("h2",null,"Research"),p.a.createElement(r.a,{gutter:[20,20]},u.map((function(e,t){return p.a.createElement(l.a,{key:t,xs:24,sm:24,md:24,lg:24},p.a.createElement(C.a,{data:e,tagsMap:h}))})))]:null,s.length>0?[p.a.createElement("h2",null,"Posts"),p.a.createElement(r.a,{gutter:[20,20]},s.map((function(e,t){return p.a.createElement(l.a,{key:t,xs:24,sm:24,md:12,lg:8},p.a.createElement(E.a,{data:e,tagsMap:h}))})))]:null)))}},"8aPU":function(e,t,a){e.exports={researchCard:"researchCard-module--researchCard--3Km_A",postCardImg:"researchCard-module--postCardImg--1uwtT",mrTp20:"researchCard-module--mrTp20--19vl_",dateHolder:"researchCard-module--dateHolder--EUdSA",divider:"researchCard-module--divider--daba7",title:"researchCard-module--title--1i1OC"}},EosS:function(e,t,a){"use strict";a("Jmwx");var n=a("BMrR"),r=(a("EpIQ"),a("bx4M")),l=a("q1tI"),o=a.n(l),c=a("9eSz"),s=a.n(c),i=a("TSYQ"),u=a.n(i),m=a("aFl2"),d=a.n(m),p=a("y6Qd"),f=a("Rt21"),g=a.n(f);t.a=function(e){var t=e.data.node,a=e.tagsMap,l=t.fields.parsed,c=t.frontmatter.cover,i=l.title,m=l.excerpt,f=l.path,E=l.date,v=l.tags,h=c?c.childImageSharp.fluid:null,y=g.a.resolvePageUrl(f);return o.a.createElement(r.a,{className:u()(d.a.postCard,"cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0,cover:o.a.createElement("div",null,h?o.a.createElement(s.a,{fluid:h}):o.a.createElement("div",{className:d.a.postCardImg}),o.a.createElement("span",{className:d.a.dateHolder},E?g.a.formatDate(E):"")),onClick:function(e){"a"!==e.target.tagName.toLowerCase()&&y&&(window.location.href=g.a.generateFullUrl(y))}},o.a.createElement(r.a.Meta,{title:o.a.createElement("span",{className:d.a.title},i),style:{marginBottom:"1rem"}}),o.a.createElement(n.a,{align:"middle",gutter:[0,8]},v?v.map((function(e){return a[e]?o.a.createElement(p.a,{tag:a[e]}):null})):null),o.a.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:g.a.parseMarkDown(m)}}))}},JD84:function(e,t,a){var n=a("SKAX");e.exports=function(e,t,a,r){return n(e,(function(e,n,l){t(r,e,a(e),l)})),r}},O0oS:function(e,t,a){var n=a("Cwc5"),r=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=r},OBNy:function(e,t,a){e.exports={tagsList:"tags-module--tagsList--39vLn",bannerImgContainer:"tags-module--bannerImgContainer--24LjU",bannerImg:"tags-module--bannerImg--xzH6c"}},QVEU:function(e,t,a){var n=a("hypo"),r=a("UMY1")((function(e,t,a){n(e,a,t)}));e.exports=r},UMY1:function(e,t,a){var n=a("oMRN"),r=a("JD84"),l=a("ut/Y"),o=a("Z0cm");e.exports=function(e,t){return function(a,c){var s=o(a)?n:r,i=t?t():{};return s(a,e,l(c,2),i)}}},aFl2:function(e,t,a){e.exports={postCard:"postCard-module--postCard--3vov_",postCardImg:"postCard-module--postCardImg--yRYws",dateHolder:"postCard-module--dateHolder--k3h7B",title:"postCard-module--title--2YuGW"}},hypo:function(e,t,a){var n=a("O0oS");e.exports=function(e,t,a){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}},k4Da:function(e,t,a){var n=a("LXxW"),r=a("n3Sm"),l=a("ut/Y"),o=a("Z0cm");e.exports=function(e,t){return(o(e)?n:r)(e,l(t,3))}},mr32:function(e,t,a){"use strict";var n=a("lSNA"),r=a.n(n),l=a("pVnL"),o=a.n(l),c=a("J4zp"),s=a.n(c),i=a("q1tI"),u=a("TSYQ"),m=a.n(u),d=a("BGR+"),p=a("V/uB"),f=a.n(p),g=a("H84U"),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},v=function(e){var t,a=i.useContext(g.b).getPrefixCls,n=e.prefixCls,l=e.className,c=e.checked,s=E(e,["prefixCls","className","checked"]),u=a("tag",n),d=m()(u,(t={},r()(t,"".concat(u,"-checkable"),!0),r()(t,"".concat(u,"-checkable-checked"),c),t),l);return delete s.onChange,i.createElement("span",o()({},s,{className:d,onClick:function(t){var a=e.checked,n=e.onChange,r=e.onClick;n&&n(!a),r&&r(t)}}))},h=a("09Wf"),y=a("g0mS"),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=new RegExp("^(".concat(h.a.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(h.b.join("|"),")$")),k=function(e,t){var a,n=e.prefixCls,l=e.className,c=e.style,u=e.children,p=e.icon,E=e.color,v=e.onClose,h=e.closeIcon,k=e.closable,w=void 0!==k&&k,S=b(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=i.useContext(g.b),O=N.getPrefixCls,I=N.direction,M=i.useState(!0),P=s()(M,2),R=P[0],U=P[1];i.useEffect((function(){"visible"in S&&U(S.visible)}),[S.visible]);var T=function(){return!!E&&(x.test(E)||C.test(E))},Q=o()({backgroundColor:E&&!T()?E:void 0},c),_=T(),j=O("tag",n),H=m()(j,(a={},r()(a,"".concat(j,"-").concat(E),_),r()(a,"".concat(j,"-has-color"),E&&!_),r()(a,"".concat(j,"-hidden"),!R),r()(a,"".concat(j,"-rtl"),"rtl"===I),a),l),L=function(e){e.stopPropagation(),v&&v(e),e.defaultPrevented||"visible"in S||U(!1)},D="onClick"in S||u&&"a"===u.type,B=Object(d.a)(S,["visible"]),J=p||null,Y=J?i.createElement(i.Fragment,null,J,i.createElement("span",null,u)):u,z=i.createElement("span",o()({},B,{ref:t,className:H,style:Q}),Y,w?h?i.createElement("div",{className:"".concat(j,"-close-icon"),onClick:L},h):i.createElement(f.a,{className:"".concat(j,"-close-icon"),onClick:L}):null);return D?i.createElement(y.a,null,z):z},w=i.forwardRef(k);w.displayName="Tag",w.CheckableTag=v;t.a=w},n3Sm:function(e,t,a){var n=a("SKAX");e.exports=function(e,t){var a=[];return n(e,(function(e,n,r){t(e,n,r)&&a.push(e)})),a}},noZS:function(e,t,a){var n=a("hypo"),r=a("JC6p"),l=a("ut/Y");e.exports=function(e,t){var a={};return t=l(t,3),r(e,(function(e,r,l){n(a,r,t(e,r,l))})),a}},oMRN:function(e,t){e.exports=function(e,t,a,n){for(var r=-1,l=null==e?0:e.length;++r<l;){var o=e[r];t(n,o,a(o),e)}return n}},u3En:function(e,t,a){},y6Qd:function(e,t,a){"use strict";a("rO+z");var n=a("kPKH"),r=(a("0lcf"),a("mr32")),l=a("q1tI"),o=a.n(l),c=a("Rt21"),s=a.n(c);t.a=function(e){var t=e.tag,a=t.color||"",l=t.name||"",c=l?s.a.generateFullUrl("/tags/"+l):"#";return o.a.createElement(n.a,{xs:!0},o.a.createElement(r.a,{color:a},o.a.createElement("a",{href:c},"#"+l)))}},yu3D:function(e,t,a){"use strict";var n=a("QwNe");e.exports=function(e){return!n(e)}}}]);
//# sourceMappingURL=component---src-templates-tags-index-jsx-67e89e717059d8dce7d5.js.map