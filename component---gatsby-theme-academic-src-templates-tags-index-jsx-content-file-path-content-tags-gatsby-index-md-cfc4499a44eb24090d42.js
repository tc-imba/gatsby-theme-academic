(self.webpackChunkexample=self.webpackChunkexample||[]).push([[476],{35318:function(e,t,r){"use strict";r.d(t,{ah:function(){return u}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),i=u(r),f=a,d=i["".concat(s,".").concat(f)]||i[f]||m[f]||l;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));p.displayName="MDXCreateElement"},31537:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(60042),a=r.n(n),l=r(66178),c=r(27378),o=r(62551),s=r(73066),u=r(9098),m=r(83891),p=r(45086);var i=e=>{const{data:{node:t},tagsMap:r}=e,{frontmatter:{cover:n},fields:{slug:{title:i,excerpt:f,path:d,date:g,tags:E}}}=t,y=n?(0,l.c)(n):null,b=(0,u.$W)(),h=m.Z.resolvePageUrl(d),v=m.Z.parseMarkDown(m.Z.trimExcerpt(f),!0);return c.createElement(o.Z,{className:a()("postCard-module--postCard--f8fa2","cursor-default"),style:{padding:"0"},bordered:!0},c.createElement("div",null,c.createElement("a",{href:m.Z.generateFullUrl(b,h)},y?c.createElement(l.G,{image:y}):c.createElement("div",{className:"postCard-module--postCardImg--68a1f"})),c.createElement("span",{className:"postCard-module--dateHolder--bb825"},g?m.Z.formatDate(g):"")),c.createElement("div",{style:{padding:"0.8rem"}},c.createElement("h5",null,c.createElement("a",{href:m.Z.generateFullUrl(b,h)},i)),c.createElement(s.Z,{wrap:!0,style:{margin:"-4px"}},E.map((e=>r[e]?c.createElement(p.Z,{key:`tag-${e}`,tag:r[e]}):null))),c.createElement("a",{href:m.Z.generateFullUrl(b,h)},c.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:v}}))))}},80907:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(83864),a=r.n(n),l=r(25389),c=r.n(l),o=r(69238),s=r.n(o),u=r(35318),m=r(27378);function p(e){const t=Object.assign({p:"p"},(0,u.ah)(),e.components);return m.createElement(t.p,null,"A framework built over ReactJS to generate static page web application.")}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?m.createElement(t,e,m.createElement(p,e)):p(e)},f=r(33672),d=r(81578),g=(r(69123),r(64768),r(31537)),E=r(84309),y=r(66739),b=r(83891),h=r(26320);const v=e=>{let{data:t,pageContext:r}=e;const n=r.tag,l=t.allMdx.edges,o=s()(l,(e=>"posts"===e.node.frontmatter.type)),u=s()(l,(e=>"research"===e.node.frontmatter.type)),p=t.allTag?t.allTag.edges:[],i=c()(a()(p,(e=>e.node.name)),"node"),v=i[n],O=v?v.path:"#",x=v?v.description:"";return m.createElement(m.Fragment,null,m.createElement(y.Z,{title:n,description:`All post about ${n}. ${x} `,path:b.Z.resolvePageUrl(O,v),keywords:[n]}),m.createElement("div",{className:`marginTopTitle ${h.Ll}`},m.createElement("h1",{className:"titleSeparate"},"#",n),m.createElement("h4",{className:"textCenter"},x)),u.length>0?m.createElement(m.Fragment,null,m.createElement("h2",null,"Research"),m.createElement(f.Z,{gutter:[20,20],type:"flex"},u.map(((e,t)=>m.createElement(d.Z,{key:t,xs:24,sm:24,md:24,lg:24},m.createElement(E.Z,{data:e,tagsMap:i})))))):null,o.length>0?m.createElement(m.Fragment,null,m.createElement("h2",null,"Posts"),m.createElement(f.Z,{gutter:[20,20],type:"flex"},o.map(((e,t)=>m.createElement(d.Z,{key:t,xs:24,sm:24,md:12,lg:8},m.createElement(g.Z,{data:e,tagsMap:i})))))):null)};function O(e){return m.createElement(v,e,m.createElement(i,e))}},98129:function(e,t,r){var n=r(52033);e.exports=function(e,t){var r=[];return n(e,(function(e,n,a){t(e,n,a)&&r.push(e)})),r}},69238:function(e,t,r){var n=r(10263),a=r(98129),l=r(89278),c=r(19785);e.exports=function(e,t){return(c(e)?n:a)(e,l(t,3))}},26320:function(e,t,r){"use strict";r.d(t,{Ll:function(){return n}});var n="tags-module--tagsList--5a41a"}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-templates-tags-index-jsx-content-file-path-content-tags-gatsby-index-md-cfc4499a44eb24090d42.js.map