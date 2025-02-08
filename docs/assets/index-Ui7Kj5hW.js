import{r as Y,p as Be,i as Se,g as V,a as M,o as we,c as x,b as C,u as j,w as Z,d as ce,n as U,e as s,f as k,m as H,h as $e,j as Ce,k as Pe,l as J,q as g,s as S,t as Ae,v as D,x as Q,F as De,y as Ie,z as Te}from"./index-CVNXPTdT.js";const q=Object.assign,ue=typeof window<"u",de=e=>e!==null&&typeof e=="object",z=e=>e!=null,Oe=e=>typeof e=="function",fe=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Fe=()=>ue?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function ee(e,n){const t=n.split(".");let a=e;return t.forEach(i=>{var o;a=de(a)&&(o=a[i])!=null?o:""}),a}const b=[Number,String],T={type:Boolean,default:!0},ge=e=>({type:b,default:e}),m=e=>({type:String,default:e});var ze=typeof window<"u",Le=e=>e===window,ne=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),Re=e=>{const n=j(e);if(Le(n)){const t=n.innerWidth,a=n.innerHeight;return ne(t,a)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():ne(0,0)};function ve(e){const n=M(e,null);if(n){const t=V(),{link:a,unlink:i,internalChildren:o}=n;a(t),we(()=>i(t));const u=x(()=>o.indexOf(t));return{parent:n,index:u}}return{parent:null,index:C(-1)}}function Ne(e){const n=[],t=a=>{Array.isArray(a)&&a.forEach(i=>{var o;Se(i)&&(n.push(i),(o=i.component)!=null&&o.subTree&&(n.push(i.component.subTree),t(i.component.subTree.children)),i.children&&t(i.children))})};return t(e),n}var te=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(a=>n.key!==void 0&&n.key!==null&&a.type===n.type&&a.key===n.key):t};function je(e,n,t){const a=Ne(e.subTree.children);t.sort((o,u)=>te(a,o.vnode)-te(a,u.vnode));const i=t.map(o=>o.proxy);n.sort((o,u)=>{const r=i.indexOf(o),c=i.indexOf(u);return r-c})}function _e(e){const n=Y([]),t=Y([]),a=V();return{children:n,linkChildren:o=>{Be(e,Object.assign({link:c=>{c.proxy&&(t.push(c),n.push(c.proxy),je(a,n,t))},unlink:c=>{const l=t.indexOf(c);n.splice(l,1),t.splice(l,1)},children:n,internalChildren:t},o))}}}var N,W;function Ue(){if(!N&&(N=C(0),W=C(0),ze)){const e=()=>{N.value=window.innerWidth,W.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:N,height:W}}Fe();function Ve(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault()}const{width:We,height:Ye}=Ue();function p(e){if(z(e))return fe(e)?`${e}px`:String(e)}function He(e){if(z(e)){if(Array.isArray(e))return{width:p(e[0]),height:p(e[1])};const n=p(e);return{width:n,height:n}}}function Ke(e){const n={};return e!==void 0&&(n.zIndex=+e),n}const Me=/-(\w)/g,me=e=>e.replace(Me,(n,t)=>t.toUpperCase()),{hasOwnProperty:Ze}=Object.prototype;function qe(e,n,t){const a=n[t];z(a)&&(!Ze.call(e,t)||!de(a)?e[t]=a:e[t]=he(Object(e[t]),a))}function he(e,n){return Object.keys(n).forEach(t=>{qe(e,n,t)}),e}var Ge={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,n)=>`${e}年${n}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const ie=C("zh-CN"),ae=Y({"zh-CN":Ge}),Xe={messages(){return ae[ie.value]},use(e,n){ie.value=e,this.add({[e]:n})},add(e={}){he(ae,e)}};var Je=Xe;function Qe(e){const n=me(e)+".";return(t,...a)=>{const i=Je.messages(),o=ee(i,n+t)||ee(i,t);return Oe(o)?o(...a):o}}function K(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,a)=>t+K(e,a),""):Object.keys(n).reduce((t,a)=>t+(n[a]?K(e,a):""),""):""}function en(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${K(n,t)}`)}function E(e){const n=`van-${e}`;return[n,en(n),Qe(n)]}const G="van-hairline",nn=`${G}--bottom`,tn=`${G}--surround`,oe="van-haptics-feedback";function B(e){return e.install=n=>{const{name:t}=e;t&&(n.component(t,e),n.component(me(`-${t}`),e))},e}const an=Symbol();function on(e){const n=M(an,null);n&&Z(n,t=>{t&&e()})}const rn=(e,n)=>{const t=C(),a=()=>{t.value=Re(e).height};return ce(()=>{U(a);for(let i=1;i<=3;i++)setTimeout(a,100*i)}),on(()=>U(a)),Z([We,Ye],a),t};function sn(e,n){const t=rn(e);return a=>s("div",{class:n("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[a()])}const ln={to:[String,Object],url:String,replace:Boolean};function cn({to:e,url:n,replace:t,$router:a}){e&&a?a[t?"replace":"push"](e):n&&(t?location.replace(n):location.href=n)}function un(){const e=V().proxy;return()=>cn(e)}const[dn,re]=E("badge"),fn={dot:Boolean,max:b,tag:m("div"),color:String,offset:Array,content:b,showZero:T,position:m("top-right")};var gn=k({name:dn,props:fn,setup(e,{slots:n}){const t=()=>{if(n.content)return!0;const{content:r,showZero:c}=e;return z(r)&&r!==""&&(c||r!==0&&r!=="0")},a=()=>{const{dot:r,max:c,content:l}=e;if(!r&&t())return n.content?n.content():z(c)&&fe(l)&&+l>+c?`${c}+`:l},i=r=>r.startsWith("-")?r.replace("-",""):`-${r}`,o=x(()=>{const r={background:e.color};if(e.offset){const[c,l]=e.offset,{position:f}=e,[d,_]=f.split("-");n.default?(typeof l=="number"?r[d]=p(d==="top"?l:-l):r[d]=d==="top"?p(l):i(l),typeof c=="number"?r[_]=p(_==="left"?c:-c):r[_]=_==="left"?p(c):i(c)):(r.marginTop=p(l),r.marginLeft=p(c))}return r}),u=()=>{if(t()||e.dot)return s("div",{class:re([e.position,{dot:e.dot,fixed:!!n.default}]),style:o.value},[a()])};return()=>{if(n.default){const{tag:r}=e;return s(r,{class:re("wrapper")},{default:()=>[n.default(),u()]})}return u()}}});const vn=B(gn),[_n,xt]=E("config-provider"),mn=Symbol(_n),[hn,se]=E("icon"),pn=e=>e==null?void 0:e.includes("/"),bn={dot:Boolean,tag:m("i"),name:String,size:b,badge:b,color:String,badgeProps:Object,classPrefix:String};var yn=k({name:hn,props:bn,setup(e,{slots:n}){const t=M(mn,null),a=x(()=>e.classPrefix||(t==null?void 0:t.iconPrefix)||se());return()=>{const{tag:i,dot:o,name:u,size:r,badge:c,color:l}=e,f=pn(u);return s(vn,H({dot:o,tag:i,class:[a.value,f?"":`${a.value}-${u}`],style:{color:l,fontSize:p(r)},content:c},e.badgeProps),{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n),f&&s("img",{class:se("image"),src:u},null)]}})}}});const I=B(yn),[kn,R]=E("loading"),En=Array(12).fill(null).map((e,n)=>s("i",{class:R("line",String(n+1))},null)),xn=s("svg",{class:R("circular"),viewBox:"25 25 50 50"},[s("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Bn={size:b,type:m("circular"),color:String,vertical:Boolean,textSize:b,textColor:String};var Sn=k({name:kn,props:Bn,setup(e,{slots:n}){const t=x(()=>q({color:e.color},He(e.size))),a=()=>{const o=e.type==="spinner"?En:xn;return s("span",{class:R("spinner",e.type),style:t.value},[n.icon?n.icon():o])},i=()=>{var o;if(n.default)return s("span",{class:R("text"),style:{fontSize:p(e.textSize),color:(o=e.textColor)!=null?o:e.color}},[n.default()])};return()=>{const{type:o,vertical:u}=e;return s("div",{class:R([o,{vertical:u}]),"aria-live":"polite","aria-busy":!0},[a(),i()])}}});const wn=B(Sn),[$n,O]=E("button"),Cn=q({},ln,{tag:m("button"),text:String,icon:String,type:m("default"),size:m("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:m("button"),loadingSize:b,loadingText:String,loadingType:String,iconPosition:m("left")});var Pn=k({name:$n,props:Cn,emits:["click"],setup(e,{emit:n,slots:t}){const a=un(),i=()=>t.loading?t.loading():s(wn,{size:e.loadingSize,type:e.loadingType,class:O("loading")},null),o=()=>{if(e.loading)return i();if(t.icon)return s("div",{class:O("icon")},[t.icon()]);if(e.icon)return s(I,{name:e.icon,class:O("icon"),classPrefix:e.iconPrefix},null)},u=()=>{let l;if(e.loading?l=e.loadingText:l=t.default?t.default():e.text,l)return s("span",{class:O("text")},[l])},r=()=>{const{color:l,plain:f}=e;if(l){const d={color:f?l:"white"};return f||(d.background=l),l.includes("gradient")?d.border=0:d.borderColor=l,d}},c=l=>{e.loading?Ve(l):e.disabled||(n("click",l),a())};return()=>{const{tag:l,type:f,size:d,block:_,round:y,plain:h,square:w,loading:v,disabled:A,hairline:L,nativeType:Ee,iconPosition:X}=e,xe=[O([f,d,{plain:h,block:_,round:y,square:w,loading:v,disabled:A,hairline:L}]),{[tn]:L}];return s(l,{type:Ee,class:xe,style:r(),disabled:A,onClick:c},{default:()=>[s("div",{class:O("content")},[X==="left"&&o(),u(),X==="right"&&o()])]})}}});const An=B(Pn),[Dn,F]=E("image"),In={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:b,height:b,radius:b,lazyLoad:Boolean,iconSize:b,showError:T,errorIcon:m("photo-fail"),iconPrefix:String,showLoading:T,loadingIcon:m("photo"),crossorigin:String,referrerpolicy:String};var Tn=k({name:Dn,props:In,emits:["load","error"],setup(e,{emit:n,slots:t}){const a=C(!1),i=C(!0),o=C(),{$Lazyload:u}=V().proxy,r=x(()=>{const v={width:p(e.width),height:p(e.height)};return z(e.radius)&&(v.overflow="hidden",v.borderRadius=p(e.radius)),v});Z(()=>e.src,()=>{a.value=!1,i.value=!0});const c=v=>{i.value&&(i.value=!1,n("load",v))},l=()=>{const v=new Event("load");Object.defineProperty(v,"target",{value:o.value,enumerable:!0}),c(v)},f=v=>{a.value=!0,i.value=!1,n("error",v)},d=(v,A,L)=>L?L():s(I,{name:v,size:e.iconSize,class:A,classPrefix:e.iconPrefix},null),_=()=>{if(i.value&&e.showLoading)return s("div",{class:F("loading")},[d(e.loadingIcon,F("loading-icon"),t.loading)]);if(a.value&&e.showError)return s("div",{class:F("error")},[d(e.errorIcon,F("error-icon"),t.error)])},y=()=>{if(a.value||!e.src)return;const v={alt:e.alt,class:F("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?Ce(s("img",H({ref:o},v),null),[[Pe("lazy"),e.src]]):s("img",H({ref:o,src:e.src,onLoad:c,onError:f},v),null)},h=({el:v})=>{const A=()=>{v===o.value&&i.value&&l()};o.value?A():U(A)},w=({el:v})=>{v===o.value&&!a.value&&f()};return u&&ue&&(u.$on("loaded",h),u.$on("error",w),$e(()=>{u.$off("loaded",h),u.$off("error",w)})),ce(()=>{U(()=>{var v;(v=o.value)!=null&&v.complete&&!e.lazyLoad&&l()})}),()=>{var v;return s("div",{class:F({round:e.round,block:e.block}),style:r.value},[y(),_(),(v=t.default)==null?void 0:v.call(t)])}}});const On=B(Tn),[pe,Fn]=E("row"),be=Symbol(pe),zn={tag:m("div"),wrap:T,align:String,gutter:{type:[String,Number,Array],default:0},justify:String};var Ln=k({name:pe,props:zn,setup(e,{slots:n}){const{children:t,linkChildren:a}=_e(be),i=x(()=>{const r=[[]];let c=0;return t.forEach((l,f)=>{c+=Number(l.span),c>24?(r.push([f]),c-=24):r[r.length-1].push(f)}),r}),o=x(()=>{let r=0;Array.isArray(e.gutter)?r=Number(e.gutter[0])||0:r=Number(e.gutter);const c=[];return r&&i.value.forEach(l=>{const f=r*(l.length-1)/l.length;l.forEach((d,_)=>{if(_===0)c.push({right:f});else{const y=r-c[d-1].right,h=f-y;c.push({left:y,right:h})}})}),c}),u=x(()=>{const{gutter:r}=e,c=[];if(Array.isArray(r)&&r.length>1){const l=Number(r[1])||0;if(l<=0)return c;i.value.forEach((f,d)=>{d!==i.value.length-1&&f.forEach(()=>{c.push({bottom:l})})})}return c});return a({spaces:o,verticalSpaces:u}),()=>{const{tag:r,wrap:c,align:l,justify:f}=e;return s(r,{class:Fn({[`align-${l}`]:l,[`justify-${f}`]:f,nowrap:!c})},{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n)]}})}}});const[Rn,Nn]=E("col"),jn={tag:m("div"),span:ge(0),offset:b};var Un=k({name:Rn,props:jn,setup(e,{slots:n}){const{parent:t,index:a}=ve(be),i=x(()=>{if(!t)return;const{spaces:o,verticalSpaces:u}=t;let r={};if(o&&o.value&&o.value[a.value]){const{left:l,right:f}=o.value[a.value];r={paddingLeft:l?`${l}px`:null,paddingRight:f?`${f}px`:null}}const{bottom:c}=u.value[a.value]||{};return q(r,{marginBottom:c?`${c}px`:null})});return()=>{const{tag:o,span:u,offset:r}=e;return s(o,{style:i.value,class:Nn({[u]:u,[`offset-${r}`]:r})},{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n)]}})}}});const Vn=B(Un),[Wn,Yn]=E("divider"),Hn={dashed:Boolean,hairline:T,vertical:Boolean,contentPosition:m("center")};var Kn=k({name:Wn,props:Hn,setup(e,{slots:n}){return()=>{var t;return s("div",{role:"separator",class:Yn({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!n.default&&!e.vertical})},[!e.vertical&&((t=n.default)==null?void 0:t.call(n))])}}});const Mn=B(Kn),[Zn,$]=E("nav-bar"),qn={title:String,fixed:Boolean,zIndex:b,border:T,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:T};var Gn=k({name:Zn,props:qn,emits:["clickLeft","clickRight"],setup(e,{emit:n,slots:t}){const a=C(),i=sn(a,$),o=f=>{e.leftDisabled||n("clickLeft",f)},u=f=>{e.rightDisabled||n("clickRight",f)},r=()=>t.left?t.left():[e.leftArrow&&s(I,{class:$("arrow"),name:"arrow-left"},null),e.leftText&&s("span",{class:$("text")},[e.leftText])],c=()=>t.right?t.right():s("span",{class:$("text")},[e.rightText]),l=()=>{const{title:f,fixed:d,border:_,zIndex:y}=e,h=Ke(y),w=e.leftArrow||e.leftText||t.left,v=e.rightText||t.right;return s("div",{ref:a,style:h,class:[$({fixed:d}),{[nn]:_,"van-safe-area-top":e.safeAreaInsetTop}]},[s("div",{class:$("content")},[w&&s("div",{class:[$("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?oe:""],onClick:o},[r()]),s("div",{class:[$("title"),"van-ellipsis"]},[t.title?t.title():f]),v&&s("div",{class:[$("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?oe:""],onClick:u},[c()])])])};return()=>e.fixed&&e.placeholder?i(l):l()}});const Xn=B(Gn),Jn=B(Ln),[ye,le]=E("steps"),Qn={active:ge(0),direction:m("horizontal"),activeIcon:m("checked"),iconPrefix:String,finishIcon:String,activeColor:String,inactiveIcon:String,inactiveColor:String},ke=Symbol(ye);var et=k({name:ye,props:Qn,emits:["clickStep"],setup(e,{emit:n,slots:t}){const{linkChildren:a}=_e(ke);return a({props:e,onClickStep:o=>n("clickStep",o)}),()=>{var o;return s("div",{class:le([e.direction])},[s("div",{class:le("items")},[(o=t.default)==null?void 0:o.call(t)])])}}});const[nt,P]=E("step");var tt=k({name:nt,setup(e,{slots:n}){const{parent:t,index:a}=ve(ke);if(!t)return;const i=t.props,o=()=>{const d=+i.active;return a.value<d?"finish":a.value===d?"process":"waiting"},u=()=>o()==="process",r=x(()=>({background:o()==="finish"?i.activeColor:i.inactiveColor})),c=x(()=>{if(u())return{color:i.activeColor};if(o()==="waiting")return{color:i.inactiveColor}}),l=()=>t.onClickStep(a.value),f=()=>{const{iconPrefix:d,finishIcon:_,activeIcon:y,activeColor:h,inactiveIcon:w}=i;return u()?n["active-icon"]?n["active-icon"]():s(I,{class:P("icon","active"),name:y,color:h,classPrefix:d},null):o()==="finish"&&(_||n["finish-icon"])?n["finish-icon"]?n["finish-icon"]():s(I,{class:P("icon","finish"),name:_,color:h,classPrefix:d},null):n["inactive-icon"]?n["inactive-icon"]():w?s(I,{class:P("icon"),name:w,classPrefix:d},null):s("i",{class:P("circle"),style:r.value},null)};return()=>{var d;const _=o();return s("div",{class:[G,P([i.direction,{[_]:_}])]},[s("div",{class:P("title",{active:u()}),style:c.value,onClick:l},[(d=n.default)==null?void 0:d.call(n)]),s("div",{class:P("circle-container"),onClick:l},[f()]),s("div",{class:P("line"),style:r.value},null)])}}});const it=B(tt),at=B(et),ot="/assets/wechat-x1CXLZcm.jpg",rt="/assets/compare-CuTkAfvU.png",st="/assets/license-DcOYrxOY.jpg",lt={class:"home"},ct={class:"content"},ut={class:"contact"},dt={class:"contact__left"},ft={class:"block"},gt={class:"block__list__item"},vt={class:"block"},_t={class:"block__steps"},mt={class:"block"},ht={class:"block__image"},pt={class:"block"},bt={class:"block__image"},yt=k({__name:"index",setup(e){const n=[{title:"经营异常状态",icon:"warning",id:1},{title:"银行贷款受阻",icon:"gold-coin",id:2},{title:"工商行政处罚",icon:"clear",id:3}];function t(){const a=document.createElement("a");a.href="alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount=0.01&account=15202060667&memo=%E6%9D%A5%E6%BA%90%EF%BC%9A%E8%A1%A5%E6%8A%A5%E7%94%B3%E6%8A%A5",document.body.appendChild(a),a.click(),document.body.removeChild(a)}return(a,i)=>{const o=Xn,u=An,r=On,c=I,l=Vn,f=Jn,d=Mn,_=it,y=at;return Q(),J("div",lt,[s(o,{class:"navbar",title:"企业服务",fixed:"",placeholder:"","safe-area-inset-top":""}),g("div",ct,[g("div",ut,[g("div",dt,[s(u,{plain:"",type:"primary",icon:"phone",url:"tel:15202060667"},{default:S(()=>i[0]||(i[0]=[D(" 客服电话:15202060667(点击拨号) ")])),_:1}),s(u,{plain:"",type:"primary",icon:"wechat"},{default:S(()=>i[1]||(i[1]=[D(" 客服微信:15202060667(右侧扫码) ")])),_:1})]),s(r,{class:"contact__img",width:"100",height:"100",src:j(ot)},null,8,["src"])]),g("div",ft,[i[2]||(i[2]=g("div",{class:"block__title"},"经营异常后果严重，最高罚款10000元",-1)),s(f,{class:"block__list",gutter:"10"},{default:S(()=>[(Q(),J(De,null,Ie(n,h=>s(l,{span:"8",key:h.id},{default:S(()=>[g("div",gt,[s(c,{name:h.icon},null,8,["name"]),g("div",null,Te(h.title),1)])]),_:2},1024)),64))]),_:1}),s(d,{style:{margin:0}}),i[3]||(i[3]=Ae('<div class="block__law" data-v-e1e60f69> 《市场主体登记管理条例实施细则》第七十条明确规定: 市场主体未按照法律、行政法规规定的期限公示或者报送年度报告的，由登记机关列入经营异常名录，可以 <span class="block__law__mark" data-v-e1e60f69> 处1万元以下罚款 </span></div><div class="block__law" data-v-e1e60f69> 《市场主体登记管理条例实施细则》第十八条明确规定: 企业因 <span class="block__law__mark" data-v-e1e60f69> 连续2年 </span> 未按规定报送年度报告被列入经营异常名录未改正，且通过登记的住所或者经营场所无法取得联系的，由县级以上市场监督管理部门 <span class="block__law__mark" data-v-e1e60f69> 吊销营业执照 </span> 。 </div><div class="block__law" data-v-e1e60f69> 根据《企业信息公示暂行条例》第十八条、第二十一条根据，逾期未报工商年报除被列入经营异常外，情节严重的，会被处以 <span class="block__law__mark" data-v-e1e60f69> 罚款、承担赔偿责任，构成犯罪的将被追究刑事责任 </span> 。 </div>',3))]),g("div",vt,[i[9]||(i[9]=g("div",{class:"block__title"},"企业服务办理",-1)),s(y,null,{default:S(()=>[s(_,null,{default:S(()=>i[4]||(i[4]=[D("提交办理")])),_:1}),s(_,null,{default:S(()=>i[5]||(i[5]=[D("联系客服")])),_:1}),s(_,null,{default:S(()=>i[6]||(i[6]=[D("交易完成")])),_:1})]),_:1}),g("div",_t,[i[8]||(i[8]=g("div",{class:"block__steps__top"},[g("span",{class:"block__steps__top__title"},"步骤一："),g("span",null,"提交办理，支付手续费，保留付款截图")],-1)),s(u,{class:"block__steps__submit",type:"primary",icon:"alipay",onClick:t},{default:S(()=>i[7]||(i[7]=[g("span",null,"点此 补报申报",-1),g("span",{class:"block__steps__submit__price"},"￥298.00",-1),g("span",null,"/",-1),g("span",null,"￥58.00",-1)])),_:1})]),i[10]||(i[10]=g("div",{class:"block__steps"},[g("div",{class:"block__steps__top"},[g("span",{class:"block__steps__top__title"},"步骤二："),g("span",null,"联系客服，出示付款和资料，等待办理完成")])],-1))]),i[13]||(i[13]=g("div",{class:"disclaimer"},[g("div",{class:"disclaimer__title"},"特别申明"),g("div",{class:"disclaimer__content"},[D(" 我们仅在获得客户的授权后为客户进行工商、税务等事宜代办。我们非国家工商税务行政管理部门，仅为提高客户工商办理效率，降低客户工商办理难度提供有偿服务，请知悉。 "),g("span",{class:"disclaimer__content__mark"}," 线上线下两个渠道直接向监管部门报送是免费办理 ")])],-1)),g("div",mt,[i[11]||(i[11]=g("div",{class:"block__title"},"选择企业服务，享受快捷代办",-1)),g("div",ht,[s(r,{width:"80%",src:j(rt)},null,8,["src"])])]),g("div",pt,[i[12]||(i[12]=g("div",{class:"block__title"},"选择企业服务，享受专业资质",-1)),g("div",bt,[s(r,{width:"80%",src:j(st)},null,8,["src"])])])]),s(u,{class:"deal",type:"primary",onClick:t},{default:S(()=>i[14]||(i[14]=[D(" 提交办理 ")])),_:1})])}}}),kt=(e,n)=>{const t=e.__vccOpts||e;for(const[a,i]of n)t[a]=i;return t},Bt=kt(yt,[["__scopeId","data-v-e1e60f69"]]);export{Bt as default};
