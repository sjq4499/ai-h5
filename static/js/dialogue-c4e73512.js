import{_ as f,d as w,z as C,r as p,I as P,aq as b,c as a,F as d,T as m,a as e,e as i,ap as y,o as n,ar as I,V as c,p as L,f as k}from"./index-863a7587.js";import{F as V}from"./index-bb6bba1e.js";import{T as F,_ as S,c as $}from"./send-icon-7a702704.js";const B=w({components:{Tabbar:F},setup(){let s=C([{messageContent:"\u4F60\u597D\uFF01",right:!0},{messageContent:"\u4F60\u597D\uFF01\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"},{messageContent:"\u5982\u4F55\u8FDB\u884C Prompt \u9006\u5411\u5DE5\u7A0B?",right:!0},{messageContent:`Prompt\u9006\u5411\u5DE5\u7A0B\u662F\u6307\u4ECE\u67D0\u4E2A\u4EBA\u5DE5\u667A\u80FD\uFF08AI\uFF09\u6A21\u578B\u7684\u54CD\u5E94\u4E2D\u63A8\u65AD\u51FA\u5B83\u53EF\u80FD\u4F7F\u7528\u7684Prompt\u7684\u8FC7\u7A0B\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u7406\u89E3\u6A21\u578B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u63D0\u9AD8\u6A21\u578B\u7684\u6027\u80FD\u3002\u4E0B\u9762\u662F\u8FDB\u884CPrompt\u9006\u5411\u5DE5\u7A0B\u7684\u4E00\u4E9B\u6B65\u9AA4\uFF1A

        \u6536\u96C6\u6570\u636E\uFF1A\u9996\u5148\uFF0C\u9700\u8981\u6536\u96C6\u6A21\u578B\u751F\u6210\u7684\u4E00\u4E9B\u793A\u4F8B\u6570\u636E\u3002\u8FD9\u4E9B\u6570\u636E\u5E94\u8BE5\u6DB5\u76D6\u4E0D\u540C\u7684\u4E3B\u9898\uFF0C\u95EE\u9898\u548C\u56DE\u7B54\u7C7B\u578B\u3002

        \u751F\u6210Prompt\u5019\u9009\uFF1A\u901A\u8FC7\u68C0\u67E5\u6A21\u578B\u751F\u6210\u7684\u793A\u4F8B\u6570\u636E\uFF0C\u5C1D\u8BD5\u6784\u5EFA\u53EF\u80FD\u88AB\u6A21\u578B\u4F7F\u7528\u7684Prompt\u7684\u5019\u9009\u5217\u8868\u3002

        \u8FDB\u884C\u7B5B\u9009\uFF1A\u5BF9\u5019\u9009Prompt\u8FDB\u884C\u7B5B\u9009\uFF0C\u5E76\u9009\u62E9\u90A3\u4E9B\u6700\u6709\u53EF\u80FD\u88AB\u6A21\u578B\u4F7F\u7528\u7684Prompt\u3002

        \u8FDB\u884C\u6D4B\u8BD5\uFF1A\u4F7F\u7528\u7B5B\u9009\u540E\u7684Prompt\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u89C2\u5BDF\u6A21\u578B\u7684\u54CD\u5E94\u5E76\u68C0\u67E5\u5176\u8D28\u91CF\u3002\u5982\u679C\u6A21\u578B\u7684\u54CD\u5E94\u8D28\u91CF\u4E0D\u4F73\uFF0C\u5219\u53EF\u4EE5\u8FDB\u4E00\u6B65\u8C03\u6574\u548C\u4F18\u5316Prompt\u3002

        \u91CD\u590D\u4EE5\u4E0A\u6B65\u9AA4\uFF1A\u591A\u6B21\u5C1D\u8BD5\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u76F4\u5230\u627E\u5230\u4E00\u4E2A`}]),o=p(""),l=p(!1);return{messageList:s,value:o,showLeft:l,show:()=>{l.value=!0}}}}),_=s=>(L("data-v-403b3244"),s=s(),k(),s),T={class:"main"},z=_(()=>e("div",{class:"send-avatar"},[e("img",{class:"avatar",src:S,alt:""})],-1)),N={class:"send-main"},U={class:"send-content"},q={class:"send-input"},A={class:"send-box"},D=_(()=>e("div",{class:"send-btn"},[e("img",{src:$,alt:""})],-1)),E={class:"m-popup"};function j(s,o,l,u,G,H){const v=P,h=V,g=b;return n(),a("div",T,[(n(!0),a(d,null,m(s.messageList,(t,r)=>(n(),a("div",{class:I(["leave-word-list",{"m-list":t.right}]),key:r},[z,e("div",N,[e("div",U,c(t.messageContent),1)])],2))),128)),e("div",q,[e("div",A,[i(v,{class:"history",name:"wap-nav",onClick:s.show},null,8,["onClick"]),i(h,{class:"input",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),label:"","left-icon":"smile-o",placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427..."},null,8,["modelValue"]),D])]),i(g,{show:s.showLeft,"onUpdate:show":o[1]||(o[1]=t=>s.showLeft=t),position:"left",style:{width:"80%",height:"100%"}},{default:y(()=>[e("div",E,[(n(!0),a(d,null,m(s.messageList,(t,r)=>(n(),a("div",{class:"popup-list",key:r},c(t.messageContent),1))),128))])]),_:1},8,["show"])])}var O=f(B,[["render",j],["__scopeId","data-v-403b3244"]]);export{O as default};
