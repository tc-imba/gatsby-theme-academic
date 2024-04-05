"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[93],{92412:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(35318),l=n(27378);function s(e){const t=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",p:"p"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h2,{id:"title-1"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#title-1"},l.createElement(t.span,{className:"icon icon-link"})),"Title 1"),"\n",l.createElement(t.h3,{id:"preview"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#preview"},l.createElement(t.span,{className:"icon icon-link"})),"Preview"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/gatsby-theme-academic/files/7e3a575d103edbbe4d7a17bca37621ed/preview.png"},"Preview")),"\n",l.createElement(t.h3,{id:"website"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#website"},l.createElement(t.span,{className:"icon icon-link"})),"Website"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.dota2.com/diretide/?l=english",target:"_blank",rel:"nofollow"},"Dire Tide 2020")),"\n",l.createElement(t.h2,{id:"title-2"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#title-2"},l.createElement(t.span,{className:"icon icon-link"})),"Title 2"),"\n",l.createElement(t.h2,{id:"title-3"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#title-3"},l.createElement(t.span,{className:"icon icon-link"})),"Title 3"),"\n",l.createElement(t.h2,{id:"title-4"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#title-4"},l.createElement(t.span,{className:"icon icon-link"})),"Title 4"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="cpp"><pre class="language-cpp"><code class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello World!"</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)},c=n(54954),i=n(66178),o=n(61320),m=n.n(o),p=n(62551),d=n(95474),u=n(33672),h=n(81578),E=n(65447),g=n(91997),k=n(40478),f=n(40134),y=n(92773),b=n.n(y),w=n(53488),Z=n.n(w),v=n(65279),x=n(77780),T=n(66739),N=n(54491),I=n(9098),S=n(83891),C=n(43312);function P(e){let{data:{mdx:t},children:n}=e;const{fields:{slug:{html:a,nonce:s,htmlEncrypted:r,title:o,excerpt:y,path:w,date:P,commit:B,type:F}},frontmatter:{cover:M},tableOfContents:O}=t,j=m().unix(B).format("MMM Do YYYY"),_=S.Z.formatDate(P),D=M?(0,i.c)(M):null,L=(0,I.$W)(),U=S.Z.generateFullUrl(L,w);console.log(s);const{0:W,1:Y}=(0,l.useState)({locked:""!==s,failed:!1,html:a}),[H,J]=l.useState(!1),[$,G]=l.useState(""),z=()=>{J(!H)},A=e=>{G(e)},R=()=>{if(W.locked)try{const e=Z().decodeUTF8($),t=Z().decodeBase64(s),n=b().hash(e).slice(0,b().secretbox.keyLength),a=Z().decodeBase64(r),l=b().secretbox.open(a,t,n),c=Z().encodeUTF8(l);Y({locked:!1,failed:!1,html:c})}catch(e){Y({locked:!0,failed:!0,html:""})}},q=[];_&&q.push(`Posted: ${_}`),B>0&&_!==j&&q.push(`Edited: ${j}`);const K=(0,l.useContext)(N.ZP),Q=(0,c.useLocation)();(0,l.useEffect)((()=>{K&&K.setState&&Object.getOwnPropertyNames(O).length&&K.setState({tableOfContents:O,pathname:Q.pathname})}),[]);const V=()=>W.locked?l.createElement(p.Z,{description:""},l.createElement(d.Z,{fluid:!0},l.createElement(u.Z,{justify:"center",type:"flex"},l.createElement(h.Z,{xs:24,sm:24,md:24,lg:16,xl:12},W.failed?l.createElement(E.Z,{type:"error"},"Wrong password! Please try again."):l.createElement(E.Z,{type:"info"},"This article is encrypted by xsalsa20-poly1305 algorithm."),l.createElement(g.Z,{style:{marginTop:"1rem"}},l.createElement(k.Z,{type:H?"text":"password",value:$,placeholder:"Enter password to unlock this article.",onPressEnter:R,onChange:A,size:"lg"}),l.createElement(g.Z.Button,{onClick:z},H?l.createElement(C.Z,{icon:"eye"}):l.createElement(C.Z,{icon:"eye-slash"}))))))):l.createElement("article",{className:"markdown-body"},n),X=()=>l.createElement("article",{className:"markdown-body"},n);return l.createElement(l.Fragment,null,l.createElement(T.Z,{title:o,description:y,path:w,keywords:["FullStack developer","Javascript","ReactJS","NodeJS","Gatsby","technology"]}),l.createElement("div",null,l.createElement("div",{className:"marginTopTitle"},l.createElement("h1",{className:"titleSeparate"},o)),l.createElement("div",{style:{color:"var(--rs-text-tertiary)",marginBottom:"1rem"}},q.join(", ")),l.createElement(f.Z,{style:{marginBottom:"1rem"}},l.createElement(f.Z.Item,{as:h.Z,xs:24,sm:24,md:D?12:24,lg:D?16:24},l.createElement(v.Z,{title:"Abstract",style:{height:"100%"}},l.createElement("p",{style:{marginBottom:"0"},dangerouslySetInnerHTML:{__html:S.Z.parseMarkDown(y,!0)}}))),D?l.createElement(f.Z.Item,{as:h.Z,xs:24,sm:24,md:12,lg:8},l.createElement("div",{style:{height:"100%"}},l.createElement(i.G,{image:D,title:o,alt:o}))):null),""===s?l.createElement(X):l.createElement(V)),"posts"===F?l.createElement("div",{style:{marginTop:"2rem"}},l.createElement(x.Z,{pageCanonicalUrl:U,pageId:o})):null)}function B(e){return l.createElement(P,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-templates-post-post-jsx-content-file-path-content-research-diretide-index-md-54b4527f1d099936ebf5.js.map