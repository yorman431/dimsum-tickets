(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[55,82],{139:function(e,c,a){"use strict";a.r(c),a.d(c,"modifiedNodes",(function(){return i})),a.d(c,"getDeepNodes",(function(){return l}));var t=a(7);function n(e,c){if(null==e)return{};var a,t,n=function(e,c){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],c.indexOf(a)>=0||(n[a]=e[a]);return n}(e,c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],c.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=a(281);const d=e=>{let c=e.children,a=void 0===c?[]:c,d=n(e,["children"]);return Object(t.a)({id:Object(r.a)(),name:"".concat(a.length?"Group":"Child"),children:a},d)};c.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}];const i=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 Group",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-2f79670ac3b6",name:"Child 1",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-94628e3320a6",name:"Child 2",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test Task",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}],l=()=>[d({children:[d({children:[]}),d({children:[]}),d({children:[]})]}),d({children:[d({children:[d({children:[d({children:[]}),d({children:[]})]}),d({children:[d({children:[]})]})]}),d({children:[d({children:[d({children:[]}),d({children:[]}),d({children:[]})]}),d({children:[d({children:[]})]})]}),d({children:[]})]})]},214:function(e,c,a){"use strict";a.r(c);var t=a(99),n=a(0),r=a.n(n),d=a(271),i=a(269),l=a(107),f=a(677),s=a(139);c.default=()=>{const e=Object(n.useRef)(null),c=Object(n.useState)(Object(s.getDeepNodes)()),a=Object(t.a)(c,2),b=a[0],h=(a[1],Object(n.useState)({})),u=Object(t.a)(h,2),o=u[0],p=u[1];return r.a.createElement(d.a,{fluid:!0,nameKey:"label",groupIcon:r.a.createElement(l.a,null),itemIcon:r.a.createElement(f.a,null),plugins:[i.a],showChildrenAmount:!0,data:b,selection:o,instanceRef:e,onSelectionChange:e=>{const c=Object.keys(e).reduce((c,a)=>{if("all"===a||!e[a])return c;const t=b.find(e=>e.id===a);return t?(c.push(t),c):c},[]),a=Object.assign({},...c.map(({id:e})=>({[e]:!1})));p(a)},isMultiSelect:!0,disableLeafs:!0})}},677:function(e,c,a){"use strict";a(2),a(0),a(8);var t=a(23),n=Object(t.a)({paths:["M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-14C1 3.673 1.673 3 2.5 3h1c.276 0 .5.224.5.5s-.224.5-.5.5h-1c-.276 0-.5.224-.5.5v14c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-14c0-.276-.224-.5-.5-.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5z","M13.501 5H5.5c-.276 0-.5-.224-.5-.5 0-1.005.453-1.786 1.276-2.197.275-.138.547-.213.764-.254C7.253.885 8.275 0 9.499 0s2.246.885 2.459 2.049c.218.041.489.116.764.254.816.408 1.268 1.178 1.276 2.17.001.009.001.018.001.027 0 .276-.224.5-.5.5h.002zM6.06 4h6.88c-.096-.356-.307-.617-.638-.79-.389-.203-.8-.21-.805-.21-.276 0-.497-.224-.497-.5 0-.827-.673-1.5-1.5-1.5S8 1.673 8 2.5c0 .276-.224.5-.5.5-.001 0-.413.007-.802.21-.331.173-.542.433-.638.79z","M9.5 3c-.132 0-.261-.053-.353-.147S9 2.631 9 2.5s.053-.261.147-.353C9.24 2.054 9.369 2 9.5 2s.261.053.353.147c.093.093.147.222.147.353s-.053.26-.147.353A.504.504 0 0 1 9.5 3zM8 14a.5022.5022 0 0 1-.354-.146l-1.5-1.5c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1.146 1.146 4.146-4.146c.195-.195.512-.195.707 0s.195.512 0 .707l-4.5 4.5a.498.498 0 0 1-.354.146H8z"],height:20,width:20});c.a=n}}]);
//# sourceMappingURL=55.c446af5f.chunk.js.map