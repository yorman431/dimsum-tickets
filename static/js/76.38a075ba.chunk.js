(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[76],{199:function(e,a,t){"use strict";t.r(a);var l=t(99),n=t(0),c=t.n(n),o=t(763),s=t(600),i=t(319);a.default=Object(n.memo)(()=>{const e=Object(n.useState)({value:""}),a=Object(l.a)(e,2),t=a[0],u=a[1],r=Object(n.useState)({label:"HIDE",show:!0}),b=Object(l.a)(r,2),x=b[0],h=b[1],m={allowDecimal:!0,allowNegative:!0,decimalLimit:2,includeThousandsSeparator:!0,integerLimit:9,prefix:""};return c.a.createElement("div",{style:{width:"200px"}},c.a.createElement("button",{onClick:function(e){e.preventDefault();const a=!x.show,t=x.show?"SHOW":"HIDE";h({label:t,show:a})}},x.label),x.show?c.a.createElement(o.a,{clearable:!0,feedbackMessage:"$xx,xxx,xxx.xx",floatingLabel:!0,inputComponent:s.a,labelText:"Number",mask:e=>i.a.NUMBER(m)(e),maxLenght:9,onChange:e=>u({value:e.target.value}),placeholder:"$ 00.000",value:t.value}):null)})}}]);
//# sourceMappingURL=76.38a075ba.chunk.js.map