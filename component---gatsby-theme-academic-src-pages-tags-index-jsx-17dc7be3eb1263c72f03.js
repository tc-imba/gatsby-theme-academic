(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Dh2Y:function(e,a,t){var n=t("YaJL");e.exports=function(e,a,t){"__proto__"==a&&n?n(e,a,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[a]=t}},LM5a:function(e,a,t){var n=t("hTzf"),r=t("rlnt"),o=t("tDyL"),c=t("PqlX");e.exports=function(e,a){return function(t,l){var s=c(t)?n:r,i=a?a():{};return s(t,e,o(l,2),i)}}},YaJL:function(e,a,t){var n=t("LSEb"),r=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(a){}}();e.exports=r},dcdg:function(e,a,t){e.exports={tagCard:"tags-module--tagCard--qzAz7",tagImg:"tags-module--tagImg--30Lku",pd20px:"tags-module--pd20px--1x5fQ"}},hTzf:function(e,a){e.exports=function(e,a,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;){var c=e[r];a(n,c,t(c),e)}return n}},qzKo:function(e,a,t){"use strict";t.r(a);t("xvge");var n=t("dZF8"),r=(t("0o3k"),t("fkL1")),o=(t("eeRk"),t("GCqQ")),c=t("r6LF"),l=t.n(c),s=t("mXGw"),i=t.n(s),u=t("oLFX"),m=t("19Ux"),d=t("e349"),g=t("Wbzz"),f=t("hKNu"),p=t.n(f),v=t("dcdg"),h=t.n(v),E=t("XgAN"),b=function(e){var a=e.img,t=e.name,n=e.description,r=e.color,o=Object(E.a)().pages.tags;return i.a.createElement(g.Link,{className:h.a.tagCard,to:p.a.resolvePageUrl(o,t)},i.a.createElement("div",{className:h.a.tagCard},i.a.createElement("div",{className:h.a.tagImg,style:{backgroundImage:"url("+a+")"}}),i.a.createElement("div",{className:h.a.pd20px},i.a.createElement("div",{className:"textCenter"},i.a.createElement("h4",{style:{color:""+r}},"#",t)),i.a.createElement("p",null,n))))},x=t("k7S2");a.default=function(e){var a=e.data,t=a.allFile.edges,c=a.allMdx.edges.map((function(e){return e.node.frontmatter.tags})).reduce((function(e,a){return e.concat(a)}));c.filter((function(e,a){return a===c.indexOf(e)})).sort();var s=Object(E.a)(),g=l()(s.tags,"id");return i.a.createElement(n.a,{className:"outerPadding"},i.a.createElement(n.a,{className:"container"},i.a.createElement(u.a,null),i.a.createElement(m.a,{title:"Tags",description:"This page consists of various Tags on various technologies that I'll be using to write blogs. You can check the blogs related to the tags by clicking on any of the tags below.",path:"tags"}),i.a.createElement(d.b,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"marginTopTitle"},i.a.createElement("h1",{className:"titleSeparate"},"#Tags")),i.a.createElement(r.a,{gutter:[30,20]},t.map((function(e){return i.a.createElement(o.a,{key:e.node.name,xs:24,sm:24,md:12,lg:8},i.a.createElement(b,{img:e.node.childImageSharp.fluid.src,name:e.node.name,description:g[e.node.name].description,color:g[e.node.name].color}))}))),i.a.createElement(x.a,null)))))}},r6LF:function(e,a,t){var n=t("Dh2Y"),r=t("LM5a")((function(e,a,t){n(e,t,a)}));e.exports=r},rlnt:function(e,a,t){var n=t("T0uz");e.exports=function(e,a,t,r){return n(e,(function(e,n,o){a(r,e,t(e),o)})),r}}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-pages-tags-index-jsx-17dc7be3eb1263c72f03.js.map