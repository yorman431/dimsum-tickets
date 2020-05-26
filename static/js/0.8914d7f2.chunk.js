(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{328:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),r=n(0),o=n.n(r),i=n(2),l=n.n(i),s=n(9),c=n(90),u=n(335),d=n(343),p=Object(s.a)("div")("input-addon-wrapper"),v=Object(s.a)("span")("input-addon-wrapper","addon",(function(e){var t=e.left,n=e.right,r=e.variant;return Object(a.g)({left:t,right:n},r,r)})),f=function(e){Object(a.h)(n,e);var t=Object(a.i)(n);function n(){return Object(a.j)(this,n),t.call(this)}return Object(a.l)(n,[{key:"getLeftAddon",value:function(e){return this.renderAddonComponent(!0,e)}},{key:"getRightAddon",value:function(e){return this.renderAddonComponent(!1,e)}},{key:"renderAddonComponent",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;if(!t)return null;if(Array.isArray(t)&&!t.filter((function(e){return e})).length)return null;var n=this.props.containerProps,r=e?{left:!0}:{right:!0};return o.a.createElement(v,Object(a.d)({classProps:r},n),t.map((function(e,t){return e&&o.a.cloneElement(e,Object(a.e)(Object(a.e)({},e.props),{},{key:t}))})))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.innerRef,r=e.rightComponents,i=e.leftComponents,l=e.children,s=e.variant,c=e.containerProps,u=o.a.Children.only(l),d=u.props,v=d.hasError,f=d.readOnly,h=d.disabled,b=this.getRightAddon(Object(a.c)(r)),m=this.getLeftAddon(Object(a.c)(i));return o.a.createElement(p,Object(a.d)({className:t,classProps:{hasError:v,readOnly:f,disabled:h,variant:s},innerRef:n},c),m,u,b)}}]),n}(r.Component);Object(a.g)(f,"defaultProps",{rightComponents:[],leftComponents:[],containerProps:{}});var h=Object(s.a)("input")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),b=Object(s.a)("div")("input","tooltip-ref"),m=Object(s.a)("div")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),g=Object(s.a)(c.d)("input","clearable"),O=function(e){return e},y=function(){return null},E=function(e){Object(a.h)(n,e);var t=Object(a.i)(n);function n(e){var r;return Object(a.j)(this,n),r=t.call(this,e),Object(a.g)(Object(a.k)(r),"state",{width:-1,active:!1,showTooltip:!1}),Object(a.g)(Object(a.k)(r),"handleBlur",(function(e){(0,r.props.onBlur)(e),r.setState({active:!1})})),Object(a.g)(Object(a.k)(r),"handleFocus",(function(e){(0,r.props.onFocus)(e),r.setState({active:!0})})),Object(a.g)(Object(a.k)(r),"handleMouseEnter",(function(){r.setState({showTooltip:!0})})),Object(a.g)(Object(a.k)(r),"handleMouseLeave",(function(){r.setState({showTooltip:!1})})),Object(a.g)(Object(a.k)(r),"setWidth",(function(){var e=r.refTooltip.current.getBoundingClientRect();r.setState({width:e.width})})),r.ref=o.a.createRef(),r.refTooltip=o.a.createRef(),r.handleClear=r.handleClear.bind(Object(a.k)(r)),r}return Object(a.l)(n,[{key:"componentDidMount",value:function(){this.setWidth(),window.addEventListener("resize",this.setWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setWidth)}},{key:"handleClear",value:function(){var e=this.props,t=e.onClear,n=e.onChange;e.clearable&&t?t():n({target:{value:""}}),(this.ref||{}).current&&this.ref.current.focus()}},{key:"renderClearableComponent",value:function(){var e=this.props,t=e.clearable,n=e.value,a=e.disabled;return a?null:t&&n?o.a.createElement(g,{buttonType:"text","data-testid":"ds-input_clearable-btn",disabled:a,icon:o.a.createElement(u.a,null),onClick:this.handleClear}):null}},{key:"render",value:function(){var e=this.props,t=e.role,n=e.id,r=e.isShowElipsisActive,i=e.autoFocus,l=e.className,s=e.name,c=e.innerRef,u=e.maxLength,p=e.minLength,v=e.placeholder,g=e.leftComponent,y=e.rightComponent,E=e.disableTooltip,j=e.readOnly,C=e.disabled,x=e.value,w=e.onClick,T=e.onChange,R=e.onKeyDown,P=e.onKeyUp,k=e.onFocus,A=e.onBlur,$=e.onPaste,L=e.required,N=e.type,S=e.customInputType,F=e.min,I=e.max,M=e.clearable,z=e.onMouseLeave,q=e.onMouseOut,B=e.style,W=e.containerProps,_=e.tabIndex,D=Object(a.a)(e,["role","id","isShowElipsisActive","autoFocus","className","name","innerRef","maxLength","minLength","placeholder","leftComponent","rightComponent","disableTooltip","readOnly","disabled","value","onClick","onChange","onKeyDown","onKeyUp","onFocus","onBlur","onPaste","required","type","customInputType","min","max","clearable","onMouseLeave","onMouseOut","style","containerProps","tabIndex"]),U=this.state,H=U.width,K=U.active,V=U.showTooltip,Z=[this.renderClearableComponent(),y].filter(O),J=[g].filter(O),G=Object(a.e)({"aria-label":D["aria-label"],"aria-placeholder":v,"aria-required":L,"aria-multiline":!1,"aria-autocomplete":"none","data-testid":D["data-testid"],role:t,id:n,ref:this.ref,className:l,autoFocus:i,disabled:C||j,innerRef:c,maxLength:u,minLength:p,name:s,onBlur:A,onChange:T,onClick:w,onFocus:k,onKeyDown:R,onKeyUp:P,onPaste:$,onMouseLeave:z,disableTooltip:E,onMouseOut:q,placeholder:v,required:L,type:N,value:x,min:F,max:I,style:B,tabIndex:_},W),Q=o.a.createElement(b,{ref:this.refTooltip,style:{width:"100%"}},S?o.a.createElement(m,Object(a.d)({},W,{clearable:M,value:x}),S(Object(a.e)({},G))):o.a.createElement(h,Object(a.d)({},G,{autocomplete:"off",clearable:M,onBlur:this.handleBlur,onFocus:this.handleFocus,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,value:x})));return function(e,t){return 8*String(t).length>e}(H,x)&&!K&&V&&H&&r&&(Q=o.a.createElement(d.a,{isOpen:E,title:String(x),zIndex:11,triggerComponent:o.a.createElement(b,{style:{width:"100%"}},Q)})),Z.length||J.length||M?o.a.createElement(f,Object(a.d)({className:l,leftComponents:J,rightComponents:Z},W),Q):Q}}]),n}(r.Component);Object(a.g)(E,"defaultProps",{onBlur:y,onFocus:y}),E.propTypes={className:l.a.string,customInputType:l.a.func,id:l.a.oneOfType([l.a.string,l.a.number]),isShowElipsisActive:l.a.bool,max:l.a.oneOfType([l.a.string,l.a.number]),min:l.a.oneOfType([l.a.string,l.a.number]),name:l.a.string,onBlur:l.a.func,onChange:l.a.func,onClick:l.a.func,onFocus:l.a.func,onKeyDown:l.a.func,onKeyUp:l.a.func,onMouseLeave:l.a.func,onMouseOut:l.a.func,onPaste:l.a.func,placeholder:l.a.string,required:l.a.bool,role:l.a.string,style:l.a.object,tabIndex:l.a.oneOfType([l.a.string,l.a.number]),value:function(e,t,n){if(e.isShowElipsisActive&&"string"!==typeof e[t])return new Error("Invalid prop `".concat(t,"` of type `").concat(Object(a.n)(e[t]),"` supplied to")+" `".concat(n,"`. Prop `value` should be of type `string` if prop `isShowElipsisActive` is set to `true`.")+" Either set `isShowElipsisActive` to `false`, or properly format your `value` prop to `string`.")}};t.b=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.id,i=e.autoFocus,l=void 0!==i&&i,s=e.disabled,c=void 0!==s&&s,u=e.className,d=void 0===u?"":u,p=e.clearable,v=void 0!==p&&p,f=e.name,h=void 0===f?"":f,b=e.maxLength,m=void 0===b?255:b,g=e.minLength,O=void 0===g?0:g,y=e.fluidWidth,j=void 0!==y&&y,C=e.disableTooltip,x=void 0===C||C,w=e.placeholder,T=e.value,R=void 0===T?"":T,P=e.hasError,k=void 0!==P&&P,A=e.readOnly,$=void 0!==A&&A,L=e.innerRef,N=void 0===L?null:L,S=e.type,F=void 0===S?"text":S,I=e.min,M=void 0===I?void 0:I,z=e.max,q=void 0===z?void 0:z,B=e.leftComponent,W=void 0===B?null:B,_=e.rightComponent,D=void 0===_?null:_,U=e.required,H=void 0!==U&&U,K=e.customInputType,V=void 0===K?null:K,Z=e.variant,J=e.isShowElipsisActive,G=void 0===J||J,Q=Object(a.a)(e,["containerProps","id","autoFocus","disabled","className","clearable","name","maxLength","minLength","fluidWidth","disableTooltip","placeholder","value","hasError","readOnly","innerRef","type","min","max","leftComponent","rightComponent","required","customInputType","variant","isShowElipsisActive"]);return o.a.createElement(E,Object(a.d)({},Q,{"aria-label":Q["aria-label"],autoFocus:l,className:d,clearable:v,containerProps:n,customInputType:V,"data-testid":Q["data-testid"]||"ds-input_main-component",disabled:c,disableTooltip:x,fluidWidth:j,hasError:k,id:r,innerRef:N,isShowElipsisActive:G,leftComponent:W,max:q,maxLength:m,min:M,minLength:O,name:h,placeholder:w,readOnly:$,required:H,rightComponent:D,type:F,value:R,variant:Z}))}},335:function(e,t,n){"use strict";n(23),n(0),n(9);var a=n(21),r=Object(a.a)({paths:["M15 10.5c0 3.038-2.462 5.5-5.5 5.5S4 13.538 4 10.5 6.462 5 9.5 5 15 7.462 15 10.5zm-2.672-2.121l-.707-.707L9.5 9.793 7.379 7.672l-.707.707L8.793 10.5l-2.121 2.121.707.707L9.5 11.207l2.121 2.121.707-.707-2.121-2.121 2.121-2.121z"],height:20,width:20});t.a=r},337:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n(0),o=n.n(r),i=n(2),l=n.n(i),s=n(328),c=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.autoFocus,i=void 0!==r&&r,l=e.disabled,c=void 0!==l&&l,u=e.maxLength,d=void 0===u?255:u,p=e.minLength,v=void 0===p?0:p,f=e.fluidWidth,h=void 0!==f&&f,b=e.placeholder,m=e.value,g=void 0===m?"":m,O=e.hasError,y=void 0!==O&&O,E=e.readOnly,j=void 0!==E&&E,C=e.innerRef,x=void 0===C?null:C,w=e.type,T=void 0===w?"text":w,R=e.min,P=void 0===R?void 0:R,k=e.max,A=void 0===k?void 0:k,$=e.clearable,L=void 0!==$&&$,N=e.leftComponent,S=void 0===N?null:N,F=e.rightComponent,I=void 0===F?null:F,M=e.required,z=void 0!==M&&M,q=e.variant,B=Object(a.a)(e,["containerProps","autoFocus","disabled","maxLength","minLength","fluidWidth","placeholder","value","hasError","readOnly","innerRef","type","min","max","clearable","leftComponent","rightComponent","required","variant"]);return o.a.createElement(s.b,Object(a.d)({},B,{"aria-label":B["aria-label"]||"Text Box",autoFocus:i,clearable:L,containerProps:n,disabled:c,fluidWidth:h,hasError:y,innerRef:x,leftComponent:S,max:A,maxLength:d,min:P,minLength:v,placeholder:b,readOnly:j,required:z,rightComponent:I,role:"textbox",type:T,value:g,variant:q}))};c.propTypes={containerProps:l.a.shape({}),autoFocus:l.a.bool,disabled:l.a.bool,maxLength:l.a.number,minLength:l.a.number,fluidWidth:l.a.bool,placeholder:l.a.string,value:l.a.string,hasError:l.a.bool,readOnly:l.a.bool,min:l.a.number,max:l.a.number,clearable:l.a.bool,leftComponent:l.a.element,rightComponent:l.a.element,required:l.a.bool,variant:l.a.string}},342:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(2),l=n.n(i),s=n(9),c=n(55),u=n(95),d=n.n(u),p=n(350),v=(n(183),n(382),n(436)),f=n(348),h=n(401),b=n(370),m=Object(s.a)("span")("form-item","feedback"),g=function(e){var t=e.text,n=e.hasError;return t?o.a.createElement(m,{classProps:n},t):null};function O(){var e=Object(a.f)(["\n  display: flex;\n  align-items: center;\n"]);return O=function(){return e},e}function y(){var e=Object(a.f)(["\n  padding-right: 0.32rem;\n  flex: 1;\n"]);return y=function(){return e},e}function E(){var e=Object(a.f)(["\n  height: 2.16rem;\n  align-items: center;\n  display: flex;\n  ","\n  \n"]);return E=function(){return e},e}var j=c.a.div(E(),(function(e){return e.label&&!e.withFeedback?"\n      padding-top: 1.2rem;\n      ":e.label||e.withFeedback?void 0:"\n      padding-top: 1rem;\n      "})),C=c.a.div(y()),x=c.a.div(O()),w=Object(s.a)("div")("form-item",null,(function(e){var t=e.leftLabel,n=e.variant;return Object(a.g)({"with-left-label":t},n,n)})),T=Object(s.a)("div")("".concat("form-item","-content")),R="variant-default",P="variant-focus",k="variant-active",A="variant-disabled",$="variant-read-only",L="variant-optional",N=function(e){var t=e.leftLabel,n=void 0!==t&&t,i=e.floatingLabel,l=void 0!==i&&i,s=e.name,c=e.id,u=e.value,b=e.inputComponent,m=void 0===b?f.a:b,O=e.labelComponent,y=void 0===O?v.a:O,E=e.feedbackComponent,P=void 0===E?g:E,k=e.labelText,A=e.truncateText,$=e.hasError,L=void 0!==$&&$,N=e.validationState,S=e.validationMessage,F=void 0===S?"":S,I=e.feedbackMessage,M=void 0===I?"":I,z=e.readOnly,q=e.focused,B=void 0!==q&&q,W=e.type,_=e.autoFocus,D=void 0===_?function(){}:_,U=e.disabled,H=void 0!==U&&U,K=e.onChange,V=void 0===K?function(){}:K,Z=e.onBlur,J=void 0===Z?function(){}:Z,G=e.onFocus,Q=void 0===G?function(){}:G,X=e.onPaste,Y=void 0===X?function(){}:X,ee=e.onKeyUp,te=void 0===ee?function(){}:ee,ne=e.extraInputProps,ae=void 0===ne?{}:ne,re=e.extraContent,oe=e.leftAddon,ie=void 0===oe?null:oe,le=e.rightAddon,se=void 0===le?null:le,ce=e.required,ue=void 0!==ce&&ce,de=e.optional,pe=void 0!==de&&de,ve=e.mask,fe=e.useSubfix,he=void 0===fe?"":fe,be=e.suffix,me=void 0===be?"":be,ge=e.variant,Oe=void 0===ge?R:ge,ye=e.containerProps,Ee=void 0===ye?{}:ye,je=Object(a.a)(e,["leftLabel","floatingLabel","name","id","value","inputComponent","labelComponent","feedbackComponent","labelText","truncateText","hasError","validationState","validationMessage","feedbackMessage","readOnly","focused","type","autoFocus","disabled","onChange","onBlur","onFocus","onPaste","onKeyUp","extraInputProps","extraContent","leftAddon","rightAddon","required","optional","mask","useSubfix","suffix","variant","containerProps"]),Ce="UNSAFE"===l,xe=Object(a.e)(Object(a.e)({},ae),{},{disabled:H,hasError:L||"error"===N,id:c,name:s,type:W,autofocus:D,onBlur:J,onChange:V,onFocus:Q,onPaste:Y,onKeyUp:te,readOnly:z,value:u,mask:ve,useSubfix:he,variant:Oe,required:ue},je),we=function(e){return ie||se?o.a.createElement(p.a,{leftAddon:ie,rightAddon:se,variant:Oe},e):e},Te=o.a.createElement(h.a,Object(a.d)({},xe,{extraInputProps:ae,focused:B,inputComponent:m,labelComponent:y,labelText:k,optional:pe,required:ue,variant:Oe})),Re=Ce?we(Te):o.a.createElement(r.Fragment,null,o.a.createElement(y,{htmlFor:c||s,label:k,optional:pe,required:ue,truncateText:A}),we(d()(m,xe)));return me?o.a.createElement(w,Object(a.d)({classProps:{disabled:H,readOnly:z,hasError:L,leftLabel:n,variant:Oe}},Ee),o.a.createElement(x,{className:"suffix-wrapper"},o.a.createElement(C,{className:"suffix-input-wrapper"},o.a.createElement(T,null,Re,re),o.a.createElement(P,{hasError:L,text:N||L?F:M})),o.a.createElement(j,{className:"suffix-label",label:!!k,withFeedback:Boolean(F||M)},me))):o.a.createElement(w,Object(a.d)({classProps:{disabled:H,readOnly:z,hasError:L,leftLabel:n,variant:Oe}},Ee),o.a.createElement(T,null,Re,re),o.a.createElement(P,{hasError:L,text:N||L?F:M}))};N.propTypes={containerProps:l.a.shape({}),leftLabel:l.a.bool,floatingLabel:l.a.bool,name:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number,l.a.object]),inputComponent:l.a.element,labelComponent:l.a.element,feedbackComponent:l.a.node,labelText:l.a.oneOfType([l.a.string,l.a.element]),hasError:l.a.bool,validationState:l.a.oneOf(["success","error","warning"]),validationMessage:l.a.string,feedbackMessage:l.a.string,readOnly:l.a.bool,focused:l.a.bool,type:l.a.string,autoFocus:l.a.func,disabled:l.a.bool,onChange:l.a.func,onBlur:l.a.func,extraInputProps:l.a.element,extraContent:l.a.element,leftAddon:l.a.element,rightAddon:l.a.element,required:l.a.bool,optional:l.a.bool,mask:l.a.oneOfType([l.a.oneOf(b.b),l.a.string]),useSubfix:l.a.string,suffix:l.a.string,variant:l.a.oneOf([R,P,k,A,$,L])},t.a=N},343:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(2),l=n.n(i),s=n(9),c=n(15),u=n(95),d=n.n(u),p=n(360),v=n(31),f=n(56),h="tooltip",b=Object(s.a)("div")("tooltip"),m=Object(s.a)("span")("tooltip","text"),g=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.innerRef,i=e.placement,l=void 0===i?c.b.TOP:i,u=e.title,v=void 0===u?"":u,f=e.delayClose,g=void 0===f?p.a:f,O=e.delayOpen,y=void 0===O?p.b:O,E=e.interactionType,j=void 0===E?c.a.HOVER:E,C=e.triggerComponent,x=void 0===C?null:C,w=e.className,T=void 0===w?"":w,R=e.isOpen,P=void 0===R?void 0:R,k=e.onOpen,A=void 0===k?function(){return null}:k,$=e.springAnimationComponent,L=void 0===$?void 0:$,N=e.tooltipType,S=void 0===N?h:N,F=e.showArrow,I=void 0===F||F,M=e.zIndex,z=Object(a.a)(e,["containerProps","innerRef","placement","title","delayClose","delayOpen","interactionType","triggerComponent","className","isOpen","onOpen","springAnimationComponent","tooltipType","showArrow","zIndex"]),q=Object(s.b)("tooltip").cssClassName,B=v;return"string"===typeof v&&(B=o.a.createElement(m,null,v)),o.a.createElement(c.c,{blockName:q,contentComponent:o.a.createElement(b,Object(a.d)({},n,z,{className:"tooltip-container--".concat(S," ").concat(T),innerRef:r}),B),delayClose:g,delayOpen:y,interactionType:j,isOpen:P,onOpen:A,placement:l,showArrow:S===h&&I,springAnimationComponent:L,triggerComponent:d()(x),zIndex:M})};g.propTypes={containerProps:l.a.shape({}),placement:l.a.oneOf(f.b),title:l.a.string,delayClose:l.a.string,delayOpen:l.a.string,interactionType:l.a.oneOf(v.b),triggerComponent:l.a.element,isOpen:l.a.bool,onOpen:l.a.func,springAnimationComponent:l.a.element,showArrow:l.a.bool},t.a=g},348:function(e,t,n){"use strict";n(1),n(0),n(2),n(328);var a=n(337);n.d(t,"a",(function(){return a.a}))},350:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(2),l=n.n(i),s=n(9),c=Object(s.a)("div")("input-addon-group"),u=Object(s.a)("span")("input-addon-group","addon"),d=function(e){Object(a.h)(n,e);var t=Object(a.i)(n);function n(){var e;Object(a.j)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),Object(a.g)(Object(a.k)(e),"state",{}),e}return Object(a.l)(n,[{key:"render",value:function(){var e=this.props,t=e.leftAddon,n=e.rightAddon,r=e.children,i=e.className,l=e.containerProps,s=r&&r.type&&r.type.name?r.type.name.toLowerCase():"default";return o.a.createElement(c,Object(a.d)({className:"".concat(i," ").concat("input-addon-group","--").concat(s)},l),t&&o.a.createElement(u,null,t),r,n&&o.a.createElement(u,null,n))}}]),n}(r.Component);Object(a.g)(d,"defaultProps",{});var p=function(e){var t=e.containerProps,n=void 0===t?{}:t,a=e.innerRef,r=void 0===a?null:a,i=e.className,l=void 0===i?"":i,s=e.style,c=void 0===s?{}:s,u=e.leftAddon,p=void 0===u?null:u,v=e.rightAddon,f=void 0===v?null:v,h=e.children;return o.a.createElement(d,{ref:r,className:l,containerProps:n,leftAddon:p,rightAddon:f,style:c},h)};p.propTypes={containerProps:l.a.shape({}),innerRef:l.a.func,className:l.a.string,style:l.a.objectOf(l.a.string),leftAddon:l.a.element,rightAddon:l.a.element,children:l.a.element},t.a=p},360:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var a=200,r=300},370:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var a=n(1),r=/-/,o=/\D+/g,i=/\d/,l=function(e){return e.split("").map((function(e){return i.test(e)?i:e}))},s=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};var c=/-/,u=/\D+/g,d=/\d/,p=function(e){return e.split("").map((function(e){return d.test(e)?d:e}))},v=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};var f={DATE:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],DATE_TIME:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/," ",/[0-2]/,/[0-9]/,":",/[0-5]/,/[0-9]/],PHONE:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],PHONE_INTENATIONAL:["+","1"," ","(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],SSN:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],US_ZIP_CODE:[/\d/,/\d/,/\d/,/\d/,/\d/],NUMBER:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"$":t,c=e.suffix,u=void 0===c?"":c,d=e.includeThousandsSeparator,p=void 0===d||d,v=e.thousandsSeparatorSymbol,f=void 0===v?",":v,h=e.allowDecimal,b=void 0!==h&&h,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,E=e.requireDecimal,j=void 0!==E&&E,C=e.allowNegative,x=void 0!==C&&C,w=e.allowLeadingZeroes,T=void 0!==w&&w,R=e.integerLimit,P=void 0===R?null:R,k=n&&n.length||0,A=u&&u.length||0,$=f&&f.length||0;function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===x)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([i]).concat(u.split(""));if(e===g&&b)return n.split("").concat(["0",g,i]).concat(u.split(""));var c="-"===e[0]&&x;c&&(e=e.toString().substr(1));var d,v,h,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*A)===u&&(e=e.slice(0,-1*A)),O&&(b||j)?(d=e.slice(e.slice(0,k)===n?k:0,m),v=e.slice(m+1,t),v=l(v.replace(o,""))):d=e.slice(0,k)===n?e.slice(k):e,P&&"number"===Object(a.n)(P)){var E="."===f?"[.]":"".concat(f),C=(d.match(new RegExp(E,"g"))||[]).length;d=d.slice(0,P+C*$)}return d=d.replace(o,""),T||(d=d.replace(/^0+(0$|[^0])/,"$1")),d=p?s(d,f):d,h=l(d),(O&&b||!0===j)&&(e[m-1]!==g&&h.push("[]"),h.push(g,"[]"),v&&("number"===Object(a.n)(y)&&(v=v.slice(0,y)),h=h.concat(v)),!0===j&&e[m-1]===g&&h.push(i)),k>0&&(h=n.split("").concat(h)),c&&(h.length===k&&h.push(i),h=[r].concat(h)),u.length>0&&(h=h.concat(u.split(""))),h}return L.instanceOf="createNumberMask",L},PERCENT:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"":t,r=e.suffix,o=void 0===r?"%":r,i=e.includeThousandsSeparator,l=void 0===i||i,s=e.thousandsSeparatorSymbol,f=void 0===s?",":s,h=e.allowDecimal,b=void 0!==h&&h,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,E=e.requireDecimal,j=void 0!==E&&E,C=e.allowNegative,x=void 0!==C&&C,w=e.allowLeadingZeroes,T=void 0!==w&&w,R=e.integerLimit,P=void 0===R?null:R,k=n&&n.length||0,A=o&&o.length||0,$=f&&f.length||0;function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===x)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([d]).concat(o.split(""));if(e===g&&b)return n.split("").concat(["0",g,d]).concat(o.split(""));var r="-"===e[0]&&x;r&&(e=e.toString().substr(1));var i,s,h,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*A)===o&&(e=e.slice(0,-1*A)),O&&(b||j)?(i=e.slice(e.slice(0,k)===n?k:0,m),s=e.slice(m+1,t),s=p(s.replace(u,""))):i=e.slice(0,k)===n?e.slice(k):e,P&&"number"===Object(a.n)(P)){var E="."===f?"[.]":"".concat(f),C=(i.match(new RegExp(E,"g"))||[]).length;i=i.slice(0,P+C*$)}return i=i.replace(u,""),T||(i=i.replace(/^0+(0$|[^0])/,"$1")),i=l?v(i,f):i,h=p(i),(O&&b||!0===j)&&(e[m-1]!==g&&h.push("[]"),h.push(g,"[]"),s&&("number"===Object(a.n)(y)&&(s=s.slice(0,y)),h=h.concat(s)),!0===j&&e[m-1]===g&&h.push(d)),k>0&&(h=n.split("").concat(h)),r&&(h.length===k&&h.push(d),h=[c].concat(h)),o.length>0&&(h=h.concat(o.split(""))),h}return L.instanceOf="createPercentMask",L}},h=[f.DATE,f.DATE_TIME,f.PHONE,f.PHONE_INTENATIONAL,f.SSN,f.US_ZIP_CODE,f.NUMBER,f.PERCENT]},382:function(e,t,n){"use strict";n(0),n(9);var a=n(383);n.d(t,"a",(function(){return a.a}))},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(9),i=Object(o.b)("form-required-mark").cssClassName,l=function(e){var t=e.required,n=void 0!==t&&t,a=e.optional;return n||void 0!==a&&a?n?r.a.createElement("span",{className:"".concat(i)},"\u25cf"):r.a.createElement("span",{className:"".concat(i," optional-mark")},"\u26ac"):null}},401:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=(n(2),n(9)),l=n(95),s=n.n(l),c=n(437),u=n(402),d=(n(183),n(328),n(382),n(383)),p=n(436),v=n(337);var f="labeled-outline",h=Object(i.a)("div")(f,null,(function(e){return{"has-value":e.isOpen}})),b=Object(i.a)("label")(f,"label"),m=Object(i.a)("div")(f,"idle"),g=Object(i.a)("div")(f,"outline"),O=Object(i.a)("path")(f,"outline__path"),y=function(e){Object(a.h)(n,e);var t=Object(a.i)(n);function n(e){var r;return Object(a.j)(this,n),r=t.call(this,e),Object(a.g)(Object(a.k)(r),"resizeObserver",new u.ResizeObserver((function(){return r.updatePath()}))),Object(a.g)(Object(a.k)(r),"prevSizes",{}),r.wrapperRef=o.a.createRef(),r.outlinePathRef=o.a.createRef(),r.outlineIdleRef=o.a.createRef(),r.labelRef=o.a.createRef(),r.updatePath=r.updatePath.bind(Object(a.k)(r)),r}return Object(a.l)(n,[{key:"componentDidMount",value:function(){this.resizeObserver.observe(this.wrapperRef.current)}},{key:"componentDidUpdate",value:function(){(function(e,t){var n=e.width,a=e.height,r=e.labelWidth;return n!==t.width||(a!==t.height||r!==t.labelWidth)})(this.sizes,this.prevSizes)&&this.updatePath()}},{key:"componentWillUnmount",value:function(){this.resizeObserver.unobserve(this.wrapperRef.current)}},{key:"getValue",value:function(e){var t=this.props.valueAccessor;return t?t(e):e&&e.target?e.target.value:e}},{key:"updatePath",value:function(){var e=function(e){var t=e.labelWidth,n=void 0===t?50:t,a=e.width,r=void 0===a?200:a,o=e.height,i=void 0===o?35:o,l=e.radiusStyle,s=e.hasRightRadius,c=void 0===s||s,u=e.hasLeftRadius,d=void 0===u||u,p=n,v=parseFloat(l),f=v+1.3,h=p+8,b=0,m=0,g=0,O=v;return c||(b+=v,g=2*v),d||(b+=v,m=2*v),(!d&&c||c&&d)&&(O=0),"M"+(f+4+h)+",0.5h"+(r-2*f-h-4+O)+((c?"a"+v+","+v+" 0 0 1 "+v+","+v:"")+"v"+(i-(2*f-(g+1.5)))+(c?"a"+v+","+v+" 0 0 1 "+-v+","+v:"")+"h"+(2*f-r-b)+(d?"a"+v+","+v+" 0 0 1 "+-v+","+-v:"")+"v"+(2*f-(m+1.5)-i)+(d?"a"+v+","+v+" 0 0 1 "+v+","+-v:""))+"h4"}(this.sizes);this.prevSizes=this.sizes,this.outlinePathRef.current.setAttribute("d",e)}},{key:"render",value:function(){var e=this.props,t=e.ariaLabel,n=e.hasError,r=e.readOnly,i=e.disabled,l=e.inputComponent,u=e.labelText,p=e.onBlur,v=e.onFocus,f=e.innerRef,y=e.extraInputProps,E=e.required,j=e.value,C=e.onChange,x=e.mask,w=e.useSubfix,T=e.optional,R=Object(a.e)({ariaLabel:t,className:"floating-label-input-controller",disabled:i,hasError:n,onBlur:p,onChange:C,onFocus:v,readOnly:r,value:j,innerRef:f,mask:x,useSubfix:w},y),P=s()(l,R),k=this.isOpened;return o.a.createElement(h,{classProps:{hasError:n,isOpen:k,readOnly:r,disabled:i},innerRef:this.wrapperRef,onBlur:function(){return null},onFocus:function(){return null},onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver},P,o.a.createElement(b,{classProps:{isOpen:k},innerRef:this.labelRef},o.a.createElement(c.a,{maxWidth:"100%",text:u}),o.a.createElement(d.a,{optional:T,required:E})),o.a.createElement(g,null,o.a.createElement("svg",null,o.a.createElement(O,{innerRef:this.outlinePathRef}))),o.a.createElement(m,{innerRef:this.outlineIdleRef}))}},{key:"sizes",get:function(){var e=this.labelRef.current,t=this.wrapperRef.current,n=this.outlineIdleRef.current,a=window.getComputedStyle(n),r=a.getPropertyValue("border-top-left-radius"),o=a.getPropertyValue("border-top-right-radius"),i=0!==parseFloat(r),l=0!==parseFloat(o);return{labelWidth:.9*e.offsetWidth,width:t.offsetWidth,height:t.offsetHeight,radiusStyle:r,hasLeftRadius:i,hasRightRadius:l}}},{key:"isOpened",get:function(){var e=this.props,t=e.focused,n=e.isOpen,a=e.value;return t||(Array.isArray(a)?!!a.length:!!a)||n}}]),n}(r.Component);Object(a.g)(y,"defaultProps",{onChange:function(){return null}});var E=function(){};t.a=function(e){e.containerProps;var t=e.arialLabel,n=void 0===t?"":t,a=e.innerRef,r=void 0===a?E:a,i=e.className,l=void 0===i?"":i,s=e.extraInputProps,c=void 0===s?{}:s,u=e.inputComponent,d=void 0===u?v.a:u,f=e.value,h=void 0===f?"":f,b=e.labelComponent,m=void 0===b?p.a:b,g=e.labelText,O=void 0===g?null:g,j=e.onChange,C=void 0===j?E:j,x=e.onBlur,w=void 0===x?E:x,T=e.onFocus,R=void 0===T?E:T,P=e.isOpen,k=void 0!==P&&P,A=e.hasError,$=void 0!==A&&A,L=e.readOnly,N=void 0!==L&&L,S=e.disabled,F=void 0!==S&&S,I=e.required,M=void 0!==I&&I,z=e.optional,q=void 0!==z&&z,B=e.mask,W=void 0===B?null:B,_=e.useSubfix,D=void 0===_?"":_;return o.a.createElement(y,{arialLabel:n,className:l,disabled:F,extraInputProps:c,hasError:$,innerRef:r,inputComponent:d,isOpen:k,labelComponent:m,labelText:O,mask:W,onBlur:w,onChange:C,onFocus:R,optional:q,readOnly:N,required:M,useSubfix:D,value:h})}},402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(779),r=n(780),o=[],i=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e,o.push(this)}return e.prototype.observe=function(e){var t=l("observe",e);if(t)throw TypeError(t);s(this.$$observationTargets,e)>0||(this.$$observationTargets.push(new a.ResizeObservation(e)),f())},e.prototype.unobserve=function(e){var t=l("unobserve",e);if(t)throw TypeError(t);var n=s(this.$$observationTargets,e);n<0||(this.$$observationTargets.splice(n,1),b())},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[]},e}();function l(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t instanceof window.Element?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function s(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1}t.ResizeObserver=i;var c,u=function(e){o.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(n){n.isActive()&&(p(n.target)>e?t.$$activeTargets.push(n):t.$$skippedTargets.push(n))}))}))},d=function(){var e=1/0;return o.forEach((function(t){if(t.$$activeTargets.length){var n=[];t.$$activeTargets.forEach((function(t){var a=new r.ResizeObserverEntry(t.target);n.push(a),t.$$broadcastWidth=a.contentRect.width,t.$$broadcastHeight=a.contentRect.height;var o=p(t.target);o<e&&(e=o)})),t.$$callback(n,t),t.$$activeTargets=[]}})),e},p=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},v=function(){var e=0;for(u(e);o.some((function(e){return!!e.$$activeTargets.length}));)e=d(),u(e);o.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},f=function(){c||h()},h=function e(){c=window.requestAnimationFrame((function(){v(),e()}))},b=function(){c&&!o.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(c),c=void 0)};t.install=function(){return window.ResizeObserver=i}},436:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(9),i=n(183),l=n(382),s=Object(o.a)("span")("em-ds-label","text"),c=function(e){var t=e.children,n=e.label,a=e.htmlFor,o=e.required,c=e.optional,u=e.truncateText,d=void 0===u||u;return r.a.createElement("label",{className:"em-ds-label",htmlFor:a},d?r.a.createElement(i.c,{value:t||n}):r.a.createElement(s,null,n),r.a.createElement(l.a,{optional:c,required:o}))}},437:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),r=n(0),o=n.n(r),i=n(9),l=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.className,l=void 0===r?"":r,s=e.style,c=void 0===s?{}:s,u=e.text,d=void 0===u?"":u,p=e.maxCharacters,v=void 0===p?0:p,f=e.maxWidth,h=void 0===f?"100%":f,b=e.textEllipsis,m=void 0!==b&&b,g=e.textAlignment,O=void 0===g?"left":g,y=e.wordBreak,E=void 0===y||y,j=Object(i.b)("text-wrapperRef",l,{textEllipsis:m,textAlignment:O,wordBreak:E}),C=j.cssClassName,x=j.classNameElement,w=d;return m?w=v>0?w.substring(0,v):w:v>0&&(w=d.split(" ").reduce((function(e,t){var n=e.length-1;return e[n].length+t.length>v&&(n+=1),e[n]="".concat(e[n]||""," ").concat(t),e}),[""]).map((function(e,t){return o.a.createElement("span",{key:t,className:x("line")},e)}))),o.a.createElement("span",Object(a.d)({},n,{className:C,style:Object(a.e)({maxWidth:v<1?h:null},c)}),m?o.a.createElement("span",{className:x("ellipsis-wrapperRef")},w):w)}},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var n=window.getComputedStyle(e);return Object.freeze({height:parseFloat(n.height||"0"),left:parseFloat(n.paddingLeft||"0"),top:parseFloat(n.paddingTop||"0"),width:parseFloat(n.width||"0")})}},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(563),r=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=a.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=r},780:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(563),r=function(e){this.target=e,this.contentRect=a.ContentRect(e)};t.ResizeObserverEntry=r}}]);
//# sourceMappingURL=0.8914d7f2.chunk.js.map