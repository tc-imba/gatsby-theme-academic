(self.webpackChunkexample=self.webpackChunkexample||[]).push([[308],{66726:function(n,e,t){var i=t(11611),r=t(82846),u=t(91936),o=Math.max,a=Math.min;n.exports=function(n,e,t){var f,l,c,v,d,s,h=0,p=!1,m=!1,w=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(e){var t=f,i=l;return f=l=void 0,h=e,v=n.apply(i,t)}function x(n){var t=n-s;return void 0===s||t>=e||t<0||m&&n-h>=c}function y(){var n=r();if(x(n))return C(n);d=setTimeout(y,function(n){var t=e-(n-s);return m?a(t,c-(n-h)):t}(n))}function C(n){return d=void 0,w&&f?g(n):(f=l=void 0,v)}function b(){var n=r(),t=x(n);if(f=arguments,l=this,s=n,t){if(void 0===d)return function(n){return h=n,d=setTimeout(y,e),p?g(n):v}(s);if(m)return clearTimeout(d),d=setTimeout(y,e),g(s)}return void 0===d&&(d=setTimeout(y,e)),v}return e=u(e)||0,i(t)&&(p=!!t.leading,c=(m="maxWait"in t)?o(u(t.maxWait)||0,e):c,w="trailing"in t?!!t.trailing:w),b.cancel=function(){void 0!==d&&clearTimeout(d),h=0,f=s=l=d=void 0},b.flush=function(){return void 0===d?v:C(r())},b}},82846:function(n,e,t){var i=t(77400);n.exports=function(){return i.Date.now()}},69308:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var i=t(25773),r=t(30808),u=t(27378),o=t(23615),a=t.n(o),f=t(66726),l=t.n(f),c=t(35386),v=t(10945);var d=function(n){var e=(0,u.useRef)(n);e.current=n,(0,u.useEffect)((function(){var n;null===(n=e.current)||void 0===n||n.call(e)}),[])},s=t(75103);function h(n,e,t,i){void 0===i&&(i=!1),(0,u.useEffect)((function(){var r="function"==typeof n?n():n,u=r?(0,s.Z)(r,e,t,i):null;return function(){null==u||u.off()}}),[n,e,t,i])}var p=t(11860),m=t(39615);function w(n,e){var t,i,r,o=(0,u.useState)(null),a=o[0],f=o[1],s=(0,u.useCallback)((function(){if(n.current){var t=(0,c.Z)(n.current);(null==t?void 0:t.height)===(null==a?void 0:a.height)&&(null==t?void 0:t.width)===(null==a?void 0:a.width)&&(null==t?void 0:t.top)===(null==a?void 0:a.top)&&(null==t?void 0:t.left)===(null==a?void 0:a.left)||(f(t),null!==a&&null!==t&&(null==e||e(t)))}}),[n,a,e]);return t=function(){return n.current},i=s,r=(0,u.useRef)(),(0,u.useEffect)((function(){if(!r.current){var n="function"==typeof t?t():t;n&&(r.current=new v.do(i),r.current.observe(n))}return function(){var n;null===(n=r.current)||void 0===n||n.disconnect()}}),[t,i]),d(s),h(window,"resize",s,!1),h(window,"scroll",l()(s,100),!1),a}var g=u.forwardRef((function(n,e){var t,o=n.as,a=void 0===o?"div":o,f=n.classPrefix,l=void 0===f?"affix":f,v=n.className,d=n.children,s=n.container,g=n.top,x=void 0===g?0:g,y=n.onChange,C=n.onOffsetChange,b=(0,r.Z)(n,["as","classPrefix","className","children","container","top","onChange","onOffsetChange"]),E=(0,u.useRef)(null),T=w(E,C),N=function(n){var e=(0,u.useState)(null),t=e[0],i=e[1];return(0,u.useEffect)((function(){var e="function"==typeof n?n():n;i(e?(0,c.Z)(e):null)}),[n]),t}(s),Z=function(n,e,t){var i=t.top,r=t.onChange,o=(0,u.useState)(!1),a=o[0],f=o[1],l=(0,u.useCallback)((function(){if(n){var t=window.scrollY||window.pageYOffset,u=t-(Number(null==n?void 0:n.top)-Number(i))>=0;e&&(u=u&&t<Number(e.top)+Number(e.height)),u!==a&&(f(u),null==r||r(u))}}),[n,i,e,a,r]);return h(window,"scroll",l,!1),a}(T,N,{top:x,onChange:y}),k=(0,p.Z)(l),O=k.withClassPrefix,R=(0,k.merge)(v,((t={})[O()]=Z,t)),P=T||{},S=P.width,z=P.height,M=Z?{width:S,height:z}:void 0,W=Z?{position:"fixed",top:x,width:S,zIndex:10}:void 0;return u.createElement(a,(0,i.Z)({},b,{ref:(0,m.Z)(E,e)}),u.createElement("div",{className:R,style:W},d),Z&&u.createElement("div",{"aria-hidden":!0,style:M}))}));g.displayName="Affix",g.propTypes={top:a().number,onChange:a().func,container:a().oneOfType([a().any,a().func])};var x=g}}]);
//# sourceMappingURL=308-8f0f1786d55949f7d0bd.js.map