"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[776],{10776:function(t,e,n){n.r(e);var i=n(27378),s=n(68941);e.default=function(t){var e=t.id,n=t.file,r=(0,s.Fg)(),o=r[0],c=(r[1],n?"gist-"+e+"-"+n:"gist-"+e),l=i.useRef(null);return i.useEffect((function(){var t=l.current,i=t.document;t.contentDocument?i=t.contentDocument:t.contentWindow&&(i=t.contentWindow.document);var s='<html><head><base target="_parent"><style>*{font-size:12px;} body{margin: 0;} </style></head><body onload="init()">'+('<script type="text/javascript" src="'+("https://gist.github.com/"+e+".js"+(n?"?file="+n:""))+'"><\/script>')+("<script>function init(){\n      parent.document.getElementById('"+(n?"gist-"+e+"-"+n:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px';\n      "+("dark"!==o?"":'\n      var styleNode = document.createElement("link");\n      styleNode.setAttribute("rel", "stylesheet");\n      styleNode.setAttribute("href", "/github-gist-dark.css");\n      document.body.appendChild(styleNode);\n    ')+"\n    }<\/script>")+"</body></html>";i.open(),i.writeln(s),i.close()}),[o]),i.createElement("iframe",{title:c,ref:l,width:"100%",frameBorder:0,id:c})}}}]);
//# sourceMappingURL=776-7541036e2bd31447a7c0.js.map