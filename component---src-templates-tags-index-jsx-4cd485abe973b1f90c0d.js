(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"4QF9":function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return b}));t("M7k7");var n=t("Ol7k"),r=(t("Jmwx"),t("BMrR")),l=(t("rO+z"),t("kPKH")),o=t("QVEU"),s=t.n(o),m=t("noZS"),c=t.n(m),d=t("k4Da"),u=t.n(d),i=t("q1tI"),g=t.n(i),p=t("JkAW"),E=t("U4IR"),f=t("EosS"),v=t("kuUC"),h=t("Rt21"),k=t.n(h),C=t("OBNy"),x=t.n(C),y=t("/xht"),b="1077615184";a.default=function(e){var a=e.data,t=e.pageContext.tag,o=a.allMarkdownRemark.edges,m=u()(o,(function(e){return"posts"===e.node.fields.parsed.type})),d=u()(o,(function(e){return"research"===e.node.fields.parsed.type})),i=a.allTag?a.allTag.edges:[],h=c()(s()(i,(function(e){return e.node.name})),"node"),C=h[t],b=C?C.path:"#",w=C?C.description:"";return g.a.createElement(n.a,{className:"outerPadding"},g.a.createElement(n.a,{className:"container"},g.a.createElement(E.a,null),g.a.createElement(p.a,{title:t,description:"All post about "+t+". "+w+" ",path:k.a.resolvePageUrl(b,C),keywords:[t]}),g.a.createElement(v.b,null,g.a.createElement("div",{className:"marginTopTitle "+x.a.tagsList},g.a.createElement("h1",{className:"titleSeparate"},"#",t),g.a.createElement("h4",{className:"textCenter"},w)),d.length>0?[g.a.createElement("h2",null,"Research"),g.a.createElement(r.a,{gutter:[20,20]},d.map((function(e,a){return g.a.createElement(l.a,{key:a,xs:24,sm:24,md:24,lg:24},g.a.createElement(y.a,{data:e,tagsMap:h}))})))]:null,m.length>0?[g.a.createElement("h2",null,"Posts"),g.a.createElement(r.a,{gutter:[20,20]},m.map((function(e,a){return g.a.createElement(l.a,{key:a,xs:24,sm:24,md:12,lg:8},g.a.createElement(f.a,{data:e,tagsMap:h}))})))]:null)))}},EosS:function(e,a,t){"use strict";t("Jmwx");var n=t("BMrR"),r=(t("EpIQ"),t("bx4M")),l=t("q1tI"),o=t.n(l),s=t("wd/R"),m=t.n(s),c=(t("Wbzz"),t("YwZP")),d=t("aFl2"),u=t.n(d),i=t("y6Qd"),g=t("Rt21"),p=t.n(g);a.a=function(e){var a=e.data.node,t=e.tagsMap;p.a.generateOmittedPostInfo(a);var l=a.frontmatter,s=p.a.resolvePageUrl(l.path);return o.a.createElement(r.a,{className:u.a.postCard,bodyStyle:{padding:"0.8rem"},hoverable:!0,cover:o.a.createElement("div",null,o.a.createElement("span",{className:u.a.dateHolder},l?m()(l.date).format("MMM Do YYYY"):""),o.a.createElement("div",{className:u.a.postCardImg,style:{backgroundImage:"url("+(l&&l.cover?l.cover.childImageSharp.fluid.src:"")+")"}})),onClick:function(e){"a"!==e.target.tagName.toLowerCase()&&s&&Object(c.navigate)(s)}},o.a.createElement(r.a.Meta,{title:l?l.title:"",style:{marginBottom:"1rem"}}),o.a.createElement(n.a,{align:"middle",gutter:[0,8]},l.tags.map((function(e){return t[e]?o.a.createElement(i.a,{tag:t[e]}):null}))),o.a.createElement("p",{style:{marginTop:"1rem"}},l?l.excerpt:""))}},OBNy:function(e,a,t){e.exports={tagsList:"tags-module--tagsList--39vLn",bannerImgContainer:"tags-module--bannerImgContainer--24LjU",bannerImg:"tags-module--bannerImg--xzH6c"}},aFl2:function(e,a,t){e.exports={postCard:"postCard-module--postCard--3vov_",postCardImg:"postCard-module--postCardImg--yRYws",dateHolder:"postCard-module--dateHolder--k3h7B"}},k4Da:function(e,a,t){var n=t("LXxW"),r=t("n3Sm"),l=t("ut/Y"),o=t("Z0cm");e.exports=function(e,a){return(o(e)?n:r)(e,l(a,3))}},n3Sm:function(e,a,t){var n=t("SKAX");e.exports=function(e,a){var t=[];return n(e,(function(e,n,r){a(e,n,r)&&t.push(e)})),t}}}]);
//# sourceMappingURL=component---src-templates-tags-index-jsx-4cd485abe973b1f90c0d.js.map