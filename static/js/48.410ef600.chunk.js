(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[48],{159:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(594),c=n(274);t.default=Object(r.memo)(()=>a.a.createElement(o.a,{withDepth:!1},a.a.createElement(c.a,{"data-testid":"workflow-rules-toggle-rules",labelText:"Activate/Deactivate"}),a.a.createElement(c.a,{"data-testid":"workflow-rules-delete-rules",labelText:"Delete"}),a.a.createElement(c.a,{"data-testid":"workflow-rules-add-rule",labelText:"New Rule"})))},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));n(5),n(4);var r=n(3),a=function(e,t){Object(r.isFunction)(e)?e(t):e&&(e.current=t)};function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){e&&t.forEach((function(t){Object(r.isFunction)(t)?t(e):t&&(t.current=e)}))}}},428:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.a.Children.map(e,(function(e){return e?Object(r.cloneElement)(e,i(i(i({},t),e.props),{},{className:"".concat(e.props.className," toolbar-item")})):e}),null)}},594:function(e,t,n){"use strict";var r=n(2),a=(n(6),n(8)),o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(22),s=n(4),p=n(428),f=n(308),b=n(286),O=Object(l.b)("div")("toolbar",null,(function(e){var t,n=e.withDepth,r=e.alignment,a=e.size;return t={"without-depth":!n},Object(s.a)(t,r,!!r),Object(s.a)(t,a,a),t})),h=function(e){var t=e.containerProps,n=void 0===t?{}:t,i=e.innerRef,u=e.withDepth,l=void 0===u||u,s=e.alignment,h=void 0===s?"right":s,d=e.autoFocusOnMount,j=void 0===d||d,m=e.children,w=void 0===m?[]:m,v=e.size,g=void 0===v?"normal":v,y=Object(a.a)(e,["containerProps","innerRef","withDepth","alignment","autoFocusOnMount","children","size"]),D=Object(o.useRef)(null);return c.a.createElement(f.a,{autoFocusOnMount:j,getContainer:function(){return D.current},keyBindings:{Tab:"next"},orientation:"horizontal"},c.a.createElement(O,Object(r.a)({},n,y,{classProps:{withDepth:l,alignment:h,size:g},innerRef:Object(b.a)(i,D)}),Object(p.a)(w)))};h.propTypes={containerProps:u.a.shape({}),withDepth:u.a.bool,alignment:u.a.oneOf(["right","left"]),size:u.a.oneOf(["normal","compact"])},t.a=h}}]);
//# sourceMappingURL=48.410ef600.chunk.js.map