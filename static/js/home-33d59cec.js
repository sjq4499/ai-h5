import{T as Pe,_ as Ge}from"./send-icon-39fbec9e.js";import{W as _e,X as ze,Y as Je,r as R,Z as Qe,$ as et,a0 as Oe,a1 as Ee,a2 as Le,h as Y,d as H,a3 as Ne,z as ne,C,a4 as De,j as re,a5 as tt,E as P,J as Ce,e as h,n as F,m as se,y as M,a6 as ce,a7 as te,w as q,t as V,k as ke,a8 as nt,a9 as at,aa as Me,D as G,ab as Ve,ac as it,ad as ot,G as Te,ae as Fe,af as He,ag as ee,H as W,L as Ue,ah as ge,ai as me,M as $e,aj as lt,s as st,ak as Re,O as We,al as xe,am as ct,A as Ye,i as rt,N as ut,an as dt,ao as vt,_ as ft,I as ht,c as be,a as U,ap as gt,F as mt,T as bt,U as wt,o as we,V as Be,u as yt}from"./index-88482f36.js";import{u as Ie,r as _t,a as kt,f as je,F as xt}from"./index-a3628a2c.js";import{g as Ct,a as Tt}from"./index-869e3983.js";import"./logo-title-8e447786.js";function It(e,a,l){let c=0;const i=e.scrollLeft,t=l===0?1:Math.round(l*1e3/16);function r(){e.scrollLeft+=(a-i)/t,++c<t&&_e(r)}r()}function St(e,a,l,c){let i=ze(e);const t=i<a,r=l===0?1:Math.round(l*1e3/16),m=(a-i)/r;function g(){i+=m,(t&&i>a||!t&&i<a)&&(i=a),Je(e,i),t&&i<a||!t&&i>a?_e(g):c&&_e(c)}g()}function $t(){const e=R([]),a=[];return Qe(()=>{e.value=[]}),[e,c=>(a[c]||(a[c]=i=>{e.value[c]=i}),a[c])]}function Rt(e,a){if(!et||!window.IntersectionObserver)return;const l=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),c=()=>{e.value&&l.observe(e.value)},i=()=>{e.value&&l.unobserve(e.value)};Oe(i),Ee(i),Le(c)}const[Bt,pt]=Y("sticky"),At={zIndex:F,position:se("top"),container:Object,offsetTop:M(0),offsetBottom:M(0)};var Pt=H({name:Bt,props:At,emits:["scroll","change"],setup(e,{emit:a,slots:l}){const c=R(),i=Ne(c),t=ne({fixed:!1,width:0,height:0,transform:0}),r=C(()=>De(e.position==="top"?e.offsetTop:e.offsetBottom)),m=C(()=>{const{fixed:o,height:_,width:T}=t;if(o)return{width:`${T}px`,height:`${_}px`}}),g=C(()=>{if(!t.fixed)return;const o=re(tt(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${r.value}px`});return t.transform&&(o.transform=`translate3d(0, ${t.transform}px, 0)`),o}),s=o=>a("scroll",{scrollTop:o,isFixed:t.fixed}),v=()=>{if(!c.value||ce(c))return;const{container:o,position:_}=e,T=te(c),y=ze(window);if(t.width=T.width,t.height=T.height,_==="top")if(o){const I=te(o),b=I.bottom-r.value-t.height;t.fixed=r.value>T.top&&I.bottom>0,t.transform=b<0?b:0}else t.fixed=r.value>T.top;else{const{clientHeight:I}=document.documentElement;if(o){const b=te(o),z=I-b.top-r.value-t.height;t.fixed=I-r.value<T.bottom&&I>b.top,t.transform=z<0?-z:0}else t.fixed=I-r.value<T.bottom}s(y)};return P(()=>t.fixed,o=>a("change",o)),Ce("scroll",v,{target:i,passive:!0}),Rt(c,v),()=>{var o;return h("div",{ref:c,style:m.value},[h("div",{class:pt({fixed:t.fixed}),style:g.value},[(o=l.default)==null?void 0:o.call(l)])])}}});const zt=q(Pt),[Ot,pe]=Y("tab");var Et=H({name:Ot,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:F,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:V},setup(e,{slots:a}){const l=C(()=>{const i={},{type:t,color:r,disabled:m,isActive:g,activeColor:s,inactiveColor:v}=e;r&&t==="card"&&(i.borderColor=r,m||(g?i.backgroundColor=r:i.color=r));const _=g?s:v;return _&&(i.color=_),i}),c=()=>{const i=h("span",{class:pe("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||ke(e.badge)&&e.badge!==""?h(nt,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[i]}):i};return()=>h("div",{id:e.id,role:"tab",class:[pe([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:l.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[c()])}});const[Xe,oe]=Y("swipe"),Lt={loop:V,width:F,height:F,vertical:Boolean,autoplay:M(0),duration:M(500),touchable:V,lazyRender:Boolean,initialSwipe:M(0),indicatorColor:String,showIndicators:V,stopPropagation:V},Ze=Symbol(Xe);var Nt=H({name:Xe,props:Lt,emits:["change"],setup(e,{emit:a,slots:l}){const c=R(),i=R(),t=ne({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=at(),{children:m,linkChildren:g}=Me(Ze),s=C(()=>m.length),v=C(()=>t[e.vertical?"height":"width"]),o=C(()=>e.vertical?r.deltaY.value:r.deltaX.value),_=C(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-v.value*s.value:0),T=C(()=>v.value?Math.ceil(Math.abs(_.value)/v.value):s.value),y=C(()=>s.value*v.value),I=C(()=>(t.active+s.value)%s.value),b=C(()=>{const d=e.vertical?"vertical":"horizontal";return r.direction.value===d}),z=C(()=>{const d={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${t.offset}px)`};if(v.value){const x=e.vertical?"height":"width",k=e.vertical?"width":"height";d[x]=`${y.value}px`,d[k]=e[k]?`${e[k]}px`:""}return d}),j=d=>{const{active:x}=t;return d?e.loop?ge(x+d,-1,s.value):ge(x+d,0,T.value):x},A=(d,x=0)=>{let k=d*v.value;e.loop||(k=Math.min(k,-_.value));let p=x-k;return e.loop||(p=ge(p,_.value,0)),p},B=({pace:d=0,offset:x=0,emitChange:k})=>{if(s.value<=1)return;const{active:p}=t,n=j(d),u=A(n,x);if(e.loop){if(m[0]&&u!==_.value){const w=u<_.value;m[0].setOffset(w?y.value:0)}if(m[s.value-1]&&u!==0){const w=u>0;m[s.value-1].setOffset(w?-y.value:0)}}t.active=n,t.offset=u,k&&n!==p&&a("change",I.value)},f=()=>{t.swiping=!0,t.active<=-1?B({pace:s.value}):t.active>=s.value&&B({pace:-s.value})},X=()=>{f(),r.reset(),ee(()=>{t.swiping=!1,B({pace:-1,emitChange:!0})})},D=()=>{f(),r.reset(),ee(()=>{t.swiping=!1,B({pace:1,emitChange:!0})})};let L;const Z=()=>clearTimeout(L),N=()=>{Z(),e.autoplay>0&&s.value>1&&(L=setTimeout(()=>{D(),N()},+e.autoplay))},O=(d=+e.initialSwipe)=>{if(!c.value)return;const x=()=>{var k,p;if(!ce(c)){const n={width:c.value.offsetWidth,height:c.value.offsetHeight};t.rect=n,t.width=+((k=e.width)!=null?k:n.width),t.height=+((p=e.height)!=null?p:n.height)}s.value&&(d=Math.min(s.value-1,d),d===-1&&(d=s.value-1)),t.active=d,t.swiping=!0,t.offset=A(d),m.forEach(n=>{n.setOffset(0)}),N()};ce(c)?W().then(x):x()},J=()=>O(t.active);let ae;const ue=d=>{!e.touchable||(r.start(d),ae=Date.now(),Z(),f())},de=d=>{e.touchable&&t.swiping&&(r.move(d),b.value&&(!e.loop&&(t.active===0&&o.value>0||t.active===s.value-1&&o.value<0)||(Ue(d,e.stopPropagation),B({offset:o.value}))))},ie=()=>{if(!e.touchable||!t.swiping)return;const d=Date.now()-ae,x=o.value/d;if((Math.abs(x)>.25||Math.abs(o.value)>v.value/2)&&b.value){const p=e.vertical?r.offsetY.value:r.offsetX.value;let n=0;e.loop?n=p>0?o.value>0?-1:1:0:n=-Math[o.value>0?"ceil":"floor"](o.value/v.value),B({pace:n,emitChange:!0})}else o.value&&B({pace:0});t.swiping=!1,N()},ve=(d,x={})=>{f(),r.reset(),ee(()=>{let k;e.loop&&d===s.value?k=t.active===0?0:d:k=d%s.value,x.immediate?ee(()=>{t.swiping=!1}):t.swiping=!1,B({pace:k-t.active,emitChange:!0})})},fe=(d,x)=>{const k=x===I.value,p=k?{backgroundColor:e.indicatorColor}:void 0;return h("i",{style:p,class:oe("indicator",{active:k})},null)},he=()=>{if(l.indicator)return l.indicator({active:I.value,total:s.value});if(e.showIndicators&&s.value>1)return h("div",{class:oe("indicators",{vertical:e.vertical})},[Array(s.value).fill("").map(fe)])};return G({prev:X,next:D,state:t,resize:J,swipeTo:ve}),g({size:v,props:e,count:s,activeIndicator:I}),P(()=>e.initialSwipe,d=>O(+d)),P(s,()=>O(t.active)),P(()=>e.autoplay,N),P([Ve,it],J),P(ot(),d=>{d==="visible"?N():Z()}),Te(O),Fe(()=>O(t.active)),He(()=>O(t.active)),Oe(Z),Ee(Z),Ce("touchmove",de,{target:i}),()=>{var d;return h("div",{ref:c,class:oe()},[h("div",{ref:i,style:z.value,class:oe("track",{vertical:e.vertical}),onTouchstartPassive:ue,onTouchend:ie,onTouchcancel:ie},[(d=l.default)==null?void 0:d.call(l)]),he()])}}});const Dt=q(Nt),[Mt,Ae]=Y("tabs");var Vt=H({name:Mt,props:{count:me(Number),inited:Boolean,animated:Boolean,duration:me(F),swipeable:Boolean,lazyRender:Boolean,currentIndex:me(Number)},emits:["change"],setup(e,{emit:a,slots:l}){const c=R(),i=m=>a("change",m),t=()=>{var m;const g=(m=l.default)==null?void 0:m.call(l);return e.animated||e.swipeable?h(Dt,{ref:c,loop:!1,class:Ae("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:i},{default:()=>[g]}):g},r=m=>{const g=c.value;g&&g.state.active!==m&&g.swipeTo(m,{immediate:!e.inited})};return P(()=>e.currentIndex,r),Te(()=>{r(e.currentIndex)}),G({swipeRef:c}),()=>h("div",{class:Ae("content",{animated:e.animated||e.swipeable})},[t()])}});const[Ke,le]=Y("tabs"),Ft={type:se("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:M(0),duration:M(.3),animated:Boolean,ellipsis:V,swipeable:Boolean,scrollspy:Boolean,offsetTop:M(0),background:String,lazyRender:V,lineWidth:F,lineHeight:F,beforeChange:Function,swipeThreshold:M(5),titleActiveColor:String,titleInactiveColor:String},qe=Symbol(Ke);var Ht=H({name:Ke,props:Ft,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:l}){let c,i,t;const r=R(),m=R(),g=R(),s=R(),v=Ie(),o=Ne(r),[_,T]=$t(),{children:y,linkChildren:I}=Me(qe),b=ne({inited:!1,position:"",lineStyle:{},currentIndex:-1}),z=C(()=>y.length>e.swipeThreshold||!e.ellipsis||e.shrink),j=C(()=>({borderColor:e.color,background:e.background})),A=(n,u)=>{var w;return(w=n.name)!=null?w:u},B=C(()=>{const n=y[b.currentIndex];if(n)return A(n,b.currentIndex)}),f=C(()=>De(e.offsetTop)),X=C(()=>e.sticky?f.value+c:0),D=n=>{const u=m.value,w=_.value;if(!z.value||!u||!w||!w[b.currentIndex])return;const $=w[b.currentIndex].$el,S=$.offsetLeft-(u.offsetWidth-$.offsetWidth)/2;It(u,S,n?0:+e.duration)},L=()=>{const n=b.inited;W(()=>{const u=_.value;if(!u||!u[b.currentIndex]||e.type!=="line"||ce(r.value))return;const w=u[b.currentIndex].$el,{lineWidth:$,lineHeight:S}=e,E=w.offsetLeft+w.offsetWidth/2,K={width:$e($),backgroundColor:e.color,transform:`translateX(${E}px) translateX(-50%)`};if(n&&(K.transitionDuration=`${e.duration}s`),ke(S)){const Se=$e(S);K.height=Se,K.borderRadius=Se}b.lineStyle=K})},Z=n=>{const u=n<b.currentIndex?-1:1;for(;n>=0&&n<y.length;){if(!y[n].disabled)return n;n+=u}},N=(n,u)=>{const w=Z(n);if(!ke(w))return;const $=y[w],S=A($,w),E=b.currentIndex!==null;b.currentIndex!==w&&(b.currentIndex=w,u||D(),L()),S!==e.active&&(a("update:active",S),E&&a("change",S,$.title)),t&&!e.scrollspy&&st(Math.ceil(Re(r.value)-f.value))},O=(n,u)=>{const w=y.find((S,E)=>A(S,E)===n),$=w?y.indexOf(w):0;N($,u)},J=(n=!1)=>{if(e.scrollspy){const u=y[b.currentIndex].$el;if(u&&o.value){const w=Re(u,o.value)-X.value;i=!0,St(o.value,w,n?0:+e.duration,()=>{i=!1})}}},ae=(n,u,w)=>{const{title:$,disabled:S}=y[u],E=A(y[u],u);S||(ct(e.beforeChange,{args:[E],done:()=>{N(u),J()}}),_t(n)),a("clickTab",{name:E,title:$,event:w,disabled:S})},ue=n=>{t=n.isFixed,a("scroll",n)},de=n=>{W(()=>{O(n),J(!0)})},ie=()=>{for(let n=0;n<y.length;n++){const{top:u}=te(y[n].$el);if(u>X.value)return n===0?0:n-1}return y.length-1},ve=()=>{if(e.scrollspy&&!i){const n=ie();N(n)}},fe=()=>y.map((n,u)=>h(Et,We({key:n.id,id:`${v}-${u}`,ref:T(u),type:e.type,color:e.color,style:n.titleStyle,class:n.titleClass,shrink:e.shrink,isActive:u===b.currentIndex,controls:n.id,scrollable:z.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:w=>ae(n,u,w)},xe(n,["dot","badge","title","disabled","showZeroBadge"])),{title:n.$slots.title})),he=()=>{if(e.type==="line"&&y.length)return h("div",{class:le("line"),style:b.lineStyle},null)},d=()=>{var n,u,w;const{type:$,border:S,sticky:E}=e,K=[h("div",{ref:E?void 0:g,class:[le("wrap"),{[lt]:$==="line"&&S}]},[h("div",{ref:m,role:"tablist",class:le("nav",[$,{shrink:e.shrink,complete:z.value}]),style:j.value,"aria-orientation":"horizontal"},[(n=l["nav-left"])==null?void 0:n.call(l),fe(),he(),(u=l["nav-right"])==null?void 0:u.call(l)])]),(w=l["nav-bottom"])==null?void 0:w.call(l)];return E?h("div",{ref:g},[K]):K};P([()=>e.color,Ve],L),P(()=>e.active,n=>{n!==B.value&&O(n)}),P(()=>y.length,()=>{b.inited&&(O(e.active),L(),W(()=>{D(!0)}))});const x=()=>{O(e.active,!0),W(()=>{b.inited=!0,g.value&&(c=te(g.value).height),D(!0)})},k=(n,u)=>a("rendered",n,u);return G({resize:()=>{L(),W(()=>{var n,u;return(u=(n=s.value)==null?void 0:n.swipeRef.value)==null?void 0:u.resize()})},scrollTo:de}),Fe(L),He(L),Le(x),Ce("scroll",ve,{target:o,passive:!0}),I({id:v,props:e,setLine:L,onRendered:k,currentName:B,scrollIntoView:D}),()=>h("div",{ref:r,class:le([e.type])},[e.sticky?h(zt,{container:r.value,offsetTop:f.value,onScroll:ue},{default:()=>[d()]}):d(),h(Vt,{ref:s,count:y.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:N},{default:()=>{var n;return[(n=l.default)==null?void 0:n.call(l)]}})])}});const Ut=Symbol(),[Wt,Yt]=Y("swipe-item");var jt=H({name:Wt,setup(e,{slots:a}){let l;const c=ne({offset:0,inited:!1,mounted:!1}),{parent:i,index:t}=Ye(Ze);if(!i)return;const r=C(()=>{const s={},{vertical:v}=i.props;return i.size.value&&(s[v?"height":"width"]=`${i.size.value}px`),c.offset&&(s.transform=`translate${v?"Y":"X"}(${c.offset}px)`),s}),m=C(()=>{const{loop:s,lazyRender:v}=i.props;if(!v||l)return!0;if(!c.mounted)return!1;const o=i.activeIndicator.value,_=i.count.value-1,T=o===0&&s?_:o-1,y=o===_&&s?0:o+1;return l=t.value===o||t.value===T||t.value===y,l}),g=s=>{c.offset=s};return Te(()=>{W(()=>{c.mounted=!0})}),G({setOffset:g}),()=>{var s;return h("div",{class:Yt(),style:r.value},[m.value?(s=a.default)==null?void 0:s.call(a):null])}}});const Xt=q(jt),[Zt,ye]=Y("tab"),Kt=re({},kt,{dot:Boolean,name:F,badge:F,title:String,disabled:Boolean,titleClass:rt,titleStyle:[String,Object],showZeroBadge:V});var qt=H({name:Zt,props:Kt,setup(e,{slots:a}){const l=Ie(),c=R(!1),{parent:i,index:t}=Ye(qe);if(!i)return;const r=()=>{var v;return(v=e.name)!=null?v:t.value},m=()=>{c.value=!0,i.props.lazyRender&&W(()=>{i.onRendered(r(),e.title)})},g=C(()=>{const v=r()===i.currentName.value;return v&&!c.value&&m(),v}),s=R(!g.value);return P(g,v=>{v?s.value=!1:ee(()=>{s.value=!0})}),P(()=>e.title,()=>{i.setLine(),i.scrollIntoView()}),ut(Ut,g),()=>{var v;const o=`${i.id}-${t.value}`,{animated:_,swipeable:T,scrollspy:y,lazyRender:I}=i.props;if(!a.default&&!_)return;const b=y||g.value;if(_||T)return h(Xt,{id:l,role:"tabpanel",class:ye("panel-wrapper",{inactive:s.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":o},{default:()=>{var A;return[h("div",{class:ye("panel")},[(A=a.default)==null?void 0:A.call(a)])]}});const j=c.value||y||!I?(v=a.default)==null?void 0:v.call(a):null;return G({id:l}),dt(h("div",{id:l,role:"tabpanel",class:ye("panel"),tabindex:b?0:-1,"aria-labelledby":o},[j]),[[vt,b]])}}});const Gt=q(qt),Jt=q(Ht),[Qt,Q,en]=Y("search"),tn=re({},je,{label:String,shape:se("square"),leftIcon:se("search"),clearable:V,actionText:String,background:String,showAction:Boolean});var nn=H({name:Qt,props:tn,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:l,attrs:c}){const i=Ie(),t=R(),r=()=>{l.action||(a("update:modelValue",""),a("cancel"))},m=f=>{f.keyCode===13&&(Ue(f),a("search",e.modelValue))},g=()=>e.id||`${i}-input`,s=()=>{if(l.label||e.label)return h("label",{class:Q("label"),for:g()},[l.label?l.label():e.label])},v=()=>{if(e.showAction){const f=e.actionText||en("cancel");return h("div",{class:Q("action"),role:"button",tabindex:0,onClick:r},[l.action?l.action():f])}},o=()=>{var f;return(f=t.value)==null?void 0:f.blur()},_=()=>{var f;return(f=t.value)==null?void 0:f.focus()},T=f=>a("blur",f),y=f=>a("focus",f),I=f=>a("clear",f),b=f=>a("clickInput",f),z=f=>a("clickLeftIcon",f),j=f=>a("clickRightIcon",f),A=Object.keys(je),B=()=>{const f=re({},c,xe(e,A),{id:g()}),X=D=>a("update:modelValue",D);return h(xt,We({ref:t,type:"search",class:Q("field"),border:!1,onBlur:T,onFocus:y,onClear:I,onKeypress:m,onClickInput:b,onClickLeftIcon:z,onClickRightIcon:j,"onUpdate:modelValue":X},f),xe(l,["left-icon","right-icon"]))};return G({focus:_,blur:o}),()=>{var f;return h("div",{class:Q({"show-action":e.showAction}),style:{background:e.background}},[(f=l.left)==null?void 0:f.call(l),h("div",{class:Q("content",e.shape)},[s(),B()]),v()])}}});const an=q(nn);const on=H({components:{Tabbar:Pe},setup(){let e=R(""),a=R("");const l=yt();let c=ne([{title:"\u5BF9\u8BDD",comment:"\u5B83\u53EF\u4EE5\u4E0E\u7528\u6237\u8FDB\u884C\u81EA\u7136\u7684\u5BF9\u8BDD\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u89E3\u51B3\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u7B49\u591A\u79CD\u529F\u80FD",icon:"images/icon-6.png",path:"dialogue"},{title:"\u95EE\u7B54  ",comment:"\u5B83\u53EF\u4EE5\u7406\u89E3\u7528\u6237\u7684\u95EE\u9898\uFF0C\u5E76\u6839\u636E\u95EE\u9898\u751F\u6210\u7B54\u6848",icon:"images/icon-5.png",path:"answer"}]);return{value:e,getImageUrl:Ct,active:a,list:c,icon:{active:"https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",inactive:"https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"},goPage:r=>{l.push(r.path)}}}}),ln={class:"main pb84"},sn=wt('<div class="top" data-v-e17c1e00><div class="logo" data-v-e17c1e00>Lambda Ai</div><div class="user" data-v-e17c1e00><div class="name" data-v-e17c1e00>Mr.Wang</div><img class="avatar" src="'+Ge+'" alt="" data-v-e17c1e00></div></div><div class="home_swiper" data-v-e17c1e00><img src="'+Tt+'" alt="" data-v-e17c1e00></div>',2),cn={class:"search"},rn={class:"tab"},un=["onClick"],dn={class:"icon"},vn=["src"],fn={class:"list_box"},hn={class:"title"},gn={class:"comment"},mn={class:"right"};function bn(e,a,l,c,i,t){const r=an,m=Gt,g=Jt,s=ht,v=Pe;return we(),be("div",ln,[sn,U("div",cn,[h(r,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),shape:"round",placeholder:"\u641C\u7D22\u5185\u5BB9\u7C7B\u578B\uFF0C\u5982\u5199\u4F5C\uFF0C\u7ED8\u753B..."},null,8,["modelValue"])]),U("div",rn,[h(g,{active:e.active,"onUpdate:active":a[1]||(a[1]=o=>e.active=o)},{default:gt(()=>[h(m,{title:"\u70ED\u95E8"}),h(m,{title:"\u5199\u4F5C"}),h(m,{title:"\u827A\u672F"}),h(m,{title:"\u5546\u52A1"})]),_:1},8,["active"])]),(we(!0),be(mt,null,bt(e.list,o=>(we(),be("div",{class:"list",key:o.title,onClick:_=>e.goPage(o)},[U("div",dn,[U("img",{src:e.getImageUrl(o.icon),alt:""},null,8,vn)]),U("div",fn,[U("div",hn,Be(o.title),1),U("div",gn,Be(o.comment),1)]),U("div",mn,[h(s,{name:"arrow"})])],8,un))),128)),h(v)])}var Cn=ft(on,[["render",bn],["__scopeId","data-v-e17c1e00"]]);export{Cn as default};