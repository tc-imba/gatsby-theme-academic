(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/Rmd":function(e,a,t){e.exports={tagCard:"tags-module--tagCard--2sNqZ",tagImg:"tags-module--tagImg--21WVr",pd20px:"tags-module--pd20px--1m4en"}},a0iv:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return v}));t("M7k7");var n=t("Ol7k"),r=(t("Jmwx"),t("BMrR")),l=(t("rO+z"),t("kPKH")),c=t("q1tI"),o=t.n(c),s=t("U4IR"),m=t("JkAW"),i=t("kuUC"),d=t("Wbzz"),g=t("obyI"),u=t.n(g),p=t("Rt21"),E=t.n(p),f=t("/Rmd"),k=t.n(f),h=function(e){var a=e.img,t=e.name,n=e.description,r=e.color,l=u.a.pages.tags;return o.a.createElement(d.Link,{className:k.a.tagCard,to:E.a.resolvePageUrl(l,t)},o.a.createElement("div",{className:k.a.tagCard},o.a.createElement("div",{className:k.a.tagImg,style:{backgroundImage:"url("+a+")"}}),o.a.createElement("div",{className:k.a.pd20px},o.a.createElement("div",{className:"textCenter"},o.a.createElement("h4",{style:{color:""+r}},"#",t)),o.a.createElement("p",null,n))))},v="2200702262";a.default=function(e){var a=e.data,t=a.allFile.edges,c=a.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.tags})).reduce((function(e,a){return e.concat(a)}));c.filter((function(e,a){return a===c.indexOf(e)})).sort();var d=u.a.tags;return o.a.createElement(n.a,{className:"outerPadding"},o.a.createElement(n.a,{className:"container"},o.a.createElement(s.a,null),o.a.createElement(m.a,{title:"Tags",description:"This page consists of various Tags on various technologies that I'll be using to write blogs. You can check the blogs related to the tags by clicking on any of the tags below.",path:"tags"}),o.a.createElement(i.b,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"marginTopTitle"},o.a.createElement("h1",{className:"titleSeparate"},"#Tags")),o.a.createElement(r.a,{gutter:[30,20]},t.map((function(e){return o.a.createElement(l.a,{key:e.node.name,xs:24,sm:24,md:12,lg:8},o.a.createElement(h,{img:e.node.childImageSharp.fluid.src,name:e.node.name,description:d[e.node.name].description,color:d[e.node.name].color}))})))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-jsx-7cd3dcde9516002d2551.js.map