"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[274],{33274:function(e,t,n){n.r(t);var s=n(27378),i=n(9098),o=n(73105);t.default=e=>{const{id:t,file:n}=e,[l,r]=(0,i.Fg)(),c=(0,i.$W)(),d=n?`gist-${t}-${n}`:`gist-${t}`,a=s.useRef(null);return s.useEffect((()=>{const e=a.current;let s=e.document;e.contentDocument?s=e.contentDocument:e.contentWindow&&(s=e.contentWindow.document);const i=n?`gist-${t}-${n}`:`gist-${t}`,r=`<script type="text/javascript" src="${`https://gist.github.com/${t}.js${n?`?file=${n}`:""}`}"><\/script>`,d=o.Z.generateFullUrl(c,"github-gist-dark.css"),u=`<html><head><base target="_parent"><style>*{font-size:12px;} body{margin: 0;} </style></head><body onload="init()">${r}${`<script>function init(){\n      parent.document.getElementById('${i}').style.height=document.body.scrollHeight + 'px';\n      ${"dark"!==l?"":`\n      var styleNode = document.createElement("link");\n      styleNode.setAttribute("rel", "stylesheet");\n      styleNode.setAttribute("href", "${d}");\n      document.body.appendChild(styleNode);\n    `}\n    }<\/script>`}</body></html>`;s.open(),s.writeln(u),s.close()}),[l]),s.createElement("iframe",{title:d,ref:a,width:"100%",frameBorder:0,id:d})}}}]);
//# sourceMappingURL=274-dbcba76cd014840a799c.js.map