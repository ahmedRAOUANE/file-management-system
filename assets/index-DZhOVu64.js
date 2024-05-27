function vI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},Ru={},K_={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),EI=Symbol.for("react.portal"),TI=Symbol.for("react.fragment"),II=Symbol.for("react.strict_mode"),SI=Symbol.for("react.profiler"),RI=Symbol.for("react.provider"),AI=Symbol.for("react.context"),CI=Symbol.for("react.forward_ref"),PI=Symbol.for("react.suspense"),kI=Symbol.for("react.memo"),NI=Symbol.for("react.lazy"),$m=Symbol.iterator;function xI(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,X_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||G_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y_(){}Y_.prototype=hs.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||G_}var vf=_f.prototype=new Y_;vf.constructor=_f;Q_(vf,hs.prototype);vf.isPureReactComponent=!0;var jm=Array.isArray,J_=Object.prototype.hasOwnProperty,wf={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:wf.current}}function DI(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function OI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OI(""+t.key):e.toString(36)}function ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case EI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lc(o,0):r,jm(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),ol(i,e,n,"",function(u){return u})):i!=null&&(Ef(i)&&(i=DI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Lc(s,a);o+=ol(s,e,n,l,i)}else if(l=xI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Lc(s,a++),o+=ol(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},al={transition:null},VI={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:al,ReactCurrentOwner:wf};function tv(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=hs;H.Fragment=TI;H.Profiler=SI;H.PureComponent=_f;H.StrictMode=II;H.Suspense=PI;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;H.act=tv;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)J_.call(e,l)&&!Z_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:AI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RI,_context:t},t.Consumer=t};H.createElement=ev;H.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:CI,render:t}};H.isValidElement=Ef;H.lazy=function(t){return{$$typeof:NI,_payload:{_status:-1,_result:t},_init:LI}};H.memo=function(t,e){return{$$typeof:kI,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};H.unstable_act=tv;H.useCallback=function(t,e){return rt.current.useCallback(t,e)};H.useContext=function(t){return rt.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};H.useEffect=function(t,e){return rt.current.useEffect(t,e)};H.useId=function(){return rt.current.useId()};H.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return rt.current.useMemo(t,e)};H.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};H.useRef=function(t){return rt.current.useRef(t)};H.useState=function(t){return rt.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return rt.current.useTransition()};H.version="18.3.1";K_.exports=H;var C=K_.exports;const Tf=wI(C),xh=vI({__proto__:null,default:Tf},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MI=C,bI=Symbol.for("react.element"),FI=Symbol.for("react.fragment"),UI=Object.prototype.hasOwnProperty,$I=MI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jI={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UI.call(e,r)&&!jI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bI,type:t,key:s,ref:o,props:i,_owner:$I.current}}Ru.Fragment=FI;Ru.jsx=nv;Ru.jsxs=nv;q_.exports=Ru;var w=q_.exports;function Oe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var BI=typeof Symbol=="function"&&Symbol.observable||"@@observable",zm=BI,Vc=()=>Math.random().toString(36).substring(7).split("").join("."),zI={INIT:`@@redux/INIT${Vc()}`,REPLACE:`@@redux/REPLACE${Vc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Vc()}`},Al=zI;function If(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function rv(t,e,n){if(typeof t!="function")throw new Error(Oe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Oe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Oe(1));return n(rv)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((v,m)=>{o.set(m,v)}))}function c(){if(l)throw new Error(Oe(3));return i}function h(v){if(typeof v!="function")throw new Error(Oe(4));if(l)throw new Error(Oe(5));let m=!0;u();const p=a++;return o.set(p,v),function(){if(m){if(l)throw new Error(Oe(6));m=!1,u(),o.delete(p),s=null}}}function d(v){if(!If(v))throw new Error(Oe(7));if(typeof v.type>"u")throw new Error(Oe(8));if(typeof v.type!="string")throw new Error(Oe(17));if(l)throw new Error(Oe(9));try{l=!0,i=r(i,v)}finally{l=!1}return(s=o).forEach(p=>{p()}),v}function f(v){if(typeof v!="function")throw new Error(Oe(10));r=v,d({type:Al.REPLACE})}function y(){const v=h;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Oe(11));function p(){const E=m;E.next&&E.next(c())}return p(),{unsubscribe:v(p)}},[zm](){return this}}}return d({type:Al.INIT}),{dispatch:d,subscribe:h,getState:c,replaceReducer:f,[zm]:y}}function HI(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Al.INIT})>"u")throw new Error(Oe(12));if(typeof n(void 0,{type:Al.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Oe(13))})}function WI(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{HI(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const h=r[c],d=n[h],f=o[h],y=d(f,a);if(typeof y>"u")throw a&&a.type,new Error(Oe(14));u[h]=y,l=l||y!==f}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Cl(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function qI(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Oe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Cl(...a)(i.dispatch),{...i,dispatch:s}}}function KI(t){return If(t)&&"type"in t&&typeof t.type=="string"}var iv=Symbol.for("immer-nothing"),Hm=Symbol.for("immer-draftable"),Et=Symbol.for("immer-state");function Ft(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Hi=Object.getPrototypeOf;function ur(t){return!!t&&!!t[Et]}function Sn(t){var e;return t?sv(t)||Array.isArray(t)||!!t[Hm]||!!((e=t.constructor)!=null&&e[Hm])||Cu(t)||Pu(t):!1}var GI=Object.prototype.constructor.toString();function sv(t){if(!t||typeof t!="object")return!1;const e=Hi(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===GI}function Pl(t,e){Au(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Au(t){const e=t[Et];return e?e.type_:Array.isArray(t)?1:Cu(t)?2:Pu(t)?3:0}function Dh(t,e){return Au(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ov(t,e,n){const r=Au(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function QI(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Cu(t){return t instanceof Map}function Pu(t){return t instanceof Set}function Ar(t){return t.copy_||t.base_}function Oh(t,e){if(Cu(t))return new Map(t);if(Pu(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=sv(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Et];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Hi(t),r)}else{const r=Hi(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Sf(t,e=!1){return ku(t)||ur(t)||!Sn(t)||(Au(t)>1&&(t.set=t.add=t.clear=t.delete=XI),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Sf(r,!0))),t}function XI(){Ft(2)}function ku(t){return Object.isFrozen(t)}var YI={};function $r(t){const e=YI[t];return e||Ft(0,t),e}var ho;function av(){return ho}function JI(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Wm(t,e){e&&($r("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Lh(t){Vh(t),t.drafts_.forEach(ZI),t.drafts_=null}function Vh(t){t===ho&&(ho=t.parent_)}function qm(t){return ho=JI(ho,t)}function ZI(t){const e=t[Et];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Km(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Et].modified_&&(Lh(e),Ft(4)),Sn(t)&&(t=kl(e,t),e.parent_||Nl(e,t)),e.patches_&&$r("Patches").generateReplacementPatches_(n[Et].base_,t,e.patches_,e.inversePatches_)):t=kl(e,n,[]),Lh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==iv?t:void 0}function kl(t,e,n){if(ku(e))return e;const r=e[Et];if(!r)return Pl(e,(i,s)=>Gm(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Nl(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Pl(s,(a,l)=>Gm(t,r,i,a,l,n,o)),Nl(t,i,!1),n&&t.patches_&&$r("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Gm(t,e,n,r,i,s,o){if(ur(i)){const a=s&&e&&e.type_!==3&&!Dh(e.assigned_,r)?s.concat(r):void 0,l=kl(t,i,a);if(ov(n,r,l),ur(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Sn(i)&&!ku(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;kl(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Nl(t,i)}}function Nl(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Sf(e,n)}function eS(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:av(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Rf;n&&(i=[r],s=fo);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Rf={get(t,e){if(e===Et)return t;const n=Ar(t);if(!Dh(n,e))return tS(t,n,e);const r=n[e];return t.finalized_||!Sn(r)?r:r===Mc(t.base_,e)?(bc(t),t.copy_[e]=bh(r,t)):r},has(t,e){return e in Ar(t)},ownKeys(t){return Reflect.ownKeys(Ar(t))},set(t,e,n){const r=lv(Ar(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Mc(Ar(t),e),s=i==null?void 0:i[Et];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(QI(n,i)&&(n!==void 0||Dh(t.base_,e)))return!0;bc(t),Mh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Mc(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,bc(t),Mh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ar(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Ft(11)},getPrototypeOf(t){return Hi(t.base_)},setPrototypeOf(){Ft(12)}},fo={};Pl(Rf,(t,e)=>{fo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});fo.deleteProperty=function(t,e){return fo.set.call(this,t,e,void 0)};fo.set=function(t,e,n){return Rf.set.call(this,t[0],e,n,t[0])};function Mc(t,e){const n=t[Et];return(n?Ar(n):t)[e]}function tS(t,e,n){var i;const r=lv(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function lv(t,e){if(!(e in t))return;let n=Hi(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Hi(n)}}function Mh(t){t.modified_||(t.modified_=!0,t.parent_&&Mh(t.parent_))}function bc(t){t.copy_||(t.copy_=Oh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var nS=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Ft(6),r!==void 0&&typeof r!="function"&&Ft(7);let i;if(Sn(e)){const s=qm(this),o=bh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Lh(s):Vh(s)}return Wm(s,r),Km(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===iv&&(i=void 0),this.autoFreeze_&&Sf(i,!0),r){const s=[],o=[];$r("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Ft(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Sn(t)||Ft(8),ur(t)&&(t=uv(t));const e=qm(this),n=bh(t,void 0);return n[Et].isManual_=!0,Vh(e),n}finishDraft(t,e){const n=t&&t[Et];(!n||!n.isManual_)&&Ft(9);const{scope_:r}=n;return Wm(r,e),Km(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=$r("Patches").applyPatches_;return ur(t)?r(t,e):this.produce(t,i=>r(i,e))}};function bh(t,e){const n=Cu(t)?$r("MapSet").proxyMap_(t,e):Pu(t)?$r("MapSet").proxySet_(t,e):eS(t,e);return(e?e.scope_:av()).drafts_.push(n),n}function uv(t){return ur(t)||Ft(10,t),cv(t)}function cv(t){if(!Sn(t)||ku(t))return t;const e=t[Et];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Oh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Oh(t,!0);return Pl(n,(r,i)=>{ov(n,r,cv(i))}),e&&(e.finalized_=!1),n}var Tt=new nS,hv=Tt.produce;Tt.produceWithPatches.bind(Tt);Tt.setAutoFreeze.bind(Tt);Tt.setUseStrictShallowCopy.bind(Tt);Tt.applyPatches.bind(Tt);Tt.createDraft.bind(Tt);Tt.finishDraft.bind(Tt);function rS(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function iS(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function sS(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var Qm=t=>Array.isArray(t)?t:[t];function oS(t){const e=Array.isArray(t[0])?t[0]:t;return sS(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function aS(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var lS=class{constructor(t){this.value=t}deref(){return this.value}},uS=typeof WeakRef<"u"?WeakRef:lS,cS=0,Xm=1;function Pa(){return{s:cS,v:void 0,o:null,p:null}}function Af(t,e={}){let n=Pa();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var h;let a=n;const{length:l}=arguments;for(let d=0,f=l;d<f;d++){const y=arguments[d];if(typeof y=="function"||typeof y=="object"&&y!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const v=_.get(y);v===void 0?(a=Pa(),_.set(y,a)):a=v}else{let _=a.p;_===null&&(a.p=_=new Map);const v=_.get(y);v===void 0?(a=Pa(),_.set(y,a)):a=v}}const u=a;let c;if(a.s===Xm?c=a.v:(c=t.apply(null,arguments),s++),u.s=Xm,r){const d=((h=i==null?void 0:i.deref)==null?void 0:h.call(i))??i;d!=null&&r(d,c)&&(c=d,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new uS(c):c}return u.v=c,c}return o.clearCache=()=>{n=Pa(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function dv(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),rS(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:h,memoizeOptions:d=[],argsMemoize:f=Af,argsMemoizeOptions:y=[],devModeChecks:_={}}=c,v=Qm(d),m=Qm(y),p=oS(i),g=h(function(){return s++,u.apply(null,arguments)},...v),E=f(function(){o++;const A=aS(p,arguments);return a=g.apply(null,A),a},...m);return Object.assign(E,{resultFunc:u,memoizedResultFunc:g,dependencies:p,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:h,argsMemoize:f})};return Object.assign(r,{withTypes:()=>r}),r}var hS=dv(Af),dS=Object.assign((t,e=hS)=>{iS(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>dS});function fv(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var fS=fv(),pS=fv,mS=(...t)=>{const e=dv(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(ur(o)?uv(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};mS(Af);var gS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Cl:Cl.apply(null,arguments)};function Wi(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(lt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>KI(r)&&r.type===t,n}var pv=class Ms extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ms.prototype)}static get[Symbol.species](){return Ms}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ms(...e[0].concat(this)):new Ms(...e.concat(this))}};function Ym(t){return Sn(t)?hv(t,()=>{}):t}function Jm(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(lt(10));const r=n.insert(e,t);return t.set(e,r),r}function yS(t){return typeof t=="boolean"}var _S=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new pv;return n&&(yS(n)?o.push(fS):o.push(pS(n.extraArgument))),o},vS="RTK_autoBatch",mv=t=>e=>{setTimeout(e,t)},wS=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:mv(10),ES=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?wS:t.type==="callback"?t.queueNotification:mv(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const h=()=>i&&c(),d=r.subscribe(h);return a.add(c),()=>{d(),a.delete(c)}},dispatch(c){var h;try{return i=!((h=c==null?void 0:c.meta)!=null&&h[vS]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},TS=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new pv(t);return r&&i.push(ES(typeof r=="object"?r:void 0)),i},IS=!0;function SS(t){const e=_S(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(If(n))a=WI(n);else throw new Error(lt(1));let l;typeof r=="function"?l=r(e):l=e();let u=Cl;i&&(u=gS({trace:!IS,...typeof i=="object"&&i}));const c=qI(...l),h=TS(c);let d=typeof o=="function"?o(h):h();const f=u(...d);return rv(a,s,f)}function gv(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(lt(28));if(a in e)throw new Error(lt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function RS(t){return typeof t=="function"}function AS(t,e){let[n,r,i]=gv(e),s;if(RS(t))s=()=>Ym(t());else{const a=Ym(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,h)=>{if(h)if(ur(c)){const f=h(c,l);return f===void 0?c:f}else{if(Sn(c))return hv(c,d=>h(d,l));{const d=h(c,l);if(d===void 0){if(c===null)return c;throw new Error(lt(9))}return d}}return c},a)}return o.getInitialState=s,o}var CS="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",PS=(t=21)=>{let e="",n=t;for(;n--;)e+=CS[Math.random()*64|0];return e},kS=Symbol.for("rtk-slice-createasyncthunk");function NS(t,e){return`${t}/${e}`}function xS({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[kS];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(lt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(OS()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,E){const T=typeof g=="string"?g:g.type;if(!T)throw new Error(lt(12));if(T in u.sliceCaseReducersByType)throw new Error(lt(13));return u.sliceCaseReducersByType[T]=E,c},addMatcher(g,E){return u.sliceMatchers.push({matcher:g,reducer:E}),c},exposeAction(g,E){return u.actionCreators[g]=E,c},exposeCaseReducer(g,E){return u.sliceCaseReducersByName[g]=E,c}};l.forEach(g=>{const E=a[g],T={reducerName:g,type:NS(s,g),createNotation:typeof i.reducers=="function"};VS(E)?bS(T,E,c,e):LS(T,E,c)});function h(){const[g={},E=[],T=void 0]=typeof i.extraReducers=="function"?gv(i.extraReducers):[i.extraReducers],A={...g,...u.sliceCaseReducersByType};return AS(i.initialState,P=>{for(let k in A)P.addCase(k,A[k]);for(let k of u.sliceMatchers)P.addMatcher(k.matcher,k.reducer);for(let k of E)P.addMatcher(k.matcher,k.reducer);T&&P.addDefaultCase(T)})}const d=g=>g,f=new Map;let y;function _(g,E){return y||(y=h()),y(g,E)}function v(){return y||(y=h()),y.getInitialState()}function m(g,E=!1){function T(P){let k=P[g];return typeof k>"u"&&E&&(k=v()),k}function A(P=d){const k=Jm(f,E,{insert:()=>new WeakMap});return Jm(k,P,{insert:()=>{const X={};for(const[j,ft]of Object.entries(i.selectors??{}))X[j]=DS(ft,P,v,E);return X}})}return{reducerPath:g,getSelectors:A,get selectors(){return A(T)},selectSlice:T}}const p={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:v,...m(o),injectInto(g,{reducerPath:E,...T}={}){const A=E??o;return g.inject({reducerPath:A,reducer:_},T),{...p,...m(A,!0)}}};return p}}function DS(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var ti=xS();function OS(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function LS({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!MS(r))throw new Error(lt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Wi(t,o):Wi(t))}function VS(t){return t._reducerDefinitionType==="asyncThunk"}function MS(t){return t._reducerDefinitionType==="reducerWithPrepare"}function bS({type:t,reducerName:e},n,r,i){if(!i)throw new Error(lt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,h=i(t,s,c);r.exposeAction(e,h),o&&r.addCase(h.fulfilled,o),a&&r.addCase(h.pending,a),l&&r.addCase(h.rejected,l),u&&r.addMatcher(h.settled,u),r.exposeCaseReducer(e,{fulfilled:o||ka,pending:a||ka,rejected:l||ka,settled:u||ka})}function ka(){}var FS=(t,e)=>{if(typeof t!="function")throw new Error(lt(32))},Cf="listenerMiddleware",US=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Wi(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(lt(21));return FS(s),{predicate:i,type:e,effect:s}},$S=Object.assign(t=>{const{type:e,predicate:n,effect:r}=US(t);return{id:PS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(lt(22))}}},{withTypes:()=>$S}),jS=Object.assign(Wi(`${Cf}/add`),{withTypes:()=>jS});Wi(`${Cf}/removeAll`);var BS=Object.assign(Wi(`${Cf}/remove`),{withTypes:()=>BS});function lt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const yv=ti({name:"user",initialState:{user:null},reducers:{setUser:(t,{payload:e})=>{t.user=e}}}),{setUser:_v}=yv.actions,zS=yv.reducer,vv=ti({name:"loader",initialState:{isLoading:!0},reducers:{setIsLoading:(t,{payload:e})=>{t.isLoading=e}}}),{setIsLoading:wn}=vv.actions,HS=vv.reducer,wv=ti({name:"error",initialState:{error:null},reducers:{setError:(t,{payload:e})=>{t.error=e}}}),{setError:Bt}=wv.actions,WS=wv.reducer,Ev=ti({name:"window",initialState:{window:null,isOpen:!1},reducers:{setIsOpen:(t,{payload:e})=>{t.isOpen=e},setwindow:(t,{payload:e})=>{t.window=e}}}),{setIsOpen:Tv,setwindow:Iv}=Ev.actions,qS=Ev.reducer,Sv=ti({name:"content",initialState:{content:[]},reducers:{setContent:(t,{payload:e})=>{t.content=e}}}),{setContent:En}=Sv.actions,KS=Sv.reducer,Rv=ti({name:"path",initialState:{path:[{name:"root",fieldID:"0"}],lastVisited:null},reducers:{setPath:(t,{payload:e})=>{t.path=e},setLastVisited:(t,{payload:e})=>{t.lastVisited=e}}}),{setPath:Gs,setLastVisited:GS}=Rv.actions,QS=Rv.reducer,Av=ti({name:"selected",initialState:{selectedFiles:[],isSelecting:!1},reducers:{setSelectedFiles:(t,{payload:e})=>{t.selectedFiles=e},setIsSelecting:(t,{payload:e})=>{t.isSelecting=e}}}),{setSelectedFiles:Zm,setIsSelecting:bs}=Av.actions,XS=Av.reducer,YS=SS({reducer:{userSlice:zS,loaderSlice:HS,errorSlice:WS,windowSlice:qS,contentSlice:KS,pathSlice:QS,selectedSlice:XS}});var Cv={exports:{}},Pv={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=C;function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ZS=typeof Object.is=="function"?Object.is:JS,eR=Qo.useSyncExternalStore,tR=Qo.useRef,nR=Qo.useEffect,rR=Qo.useMemo,iR=Qo.useDebugValue;Pv.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=tR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=rR(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var y=o.value;if(i(y,f))return h=y}return h=f}if(y=h,ZS(c,f))return y;var _=r(f);return i!==void 0&&i(y,_)?y:(c=f,h=_)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=eR(t,s[0],s[1]);return nR(function(){o.hasValue=!0,o.value=a},[a]),iR(a),a};Cv.exports=Pv;var sR=Cv.exports,mt="default"in xh?Tf:xh,eg=Symbol.for("react-redux-context"),tg=typeof globalThis<"u"?globalThis:{};function oR(){if(!mt.createContext)return{};const t=tg[eg]??(tg[eg]=new Map);let e=t.get(mt.createContext);return e||(e=mt.createContext(null),t.set(mt.createContext,e)),e}var cr=oR(),aR=()=>{throw new Error("uSES not initialized!")};function Pf(t=cr){return function(){return mt.useContext(t)}}var kv=Pf(),Nv=aR,lR=t=>{Nv=t},uR=(t,e)=>t===e;function cR(t=cr){const e=t===cr?kv:Pf(t),n=(r,i={})=>{const{equalityFn:s=uR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:h}=e();mt.useRef(!0);const d=mt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,o.stabilityCheck]),f=Nv(l.addNestedSub,a.getState,u||a.getState,d,s);return mt.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Z=cR();function hR(t){t()}function dR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){hR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var ng={notify(){},get:()=>[]};function fR(t,e){let n,r=ng,i=0,s=!1;function o(_){c();const v=r.subscribe(_);let m=!1;return()=>{m||(m=!0,v(),h())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=t.subscribe(l),r=dR())}function h(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=ng)}function d(){s||(s=!0,c())}function f(){s&&(s=!1,h())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return y}var pR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mR=typeof navigator<"u"&&navigator.product==="ReactNative",gR=pR||mR?mt.useLayoutEffect:mt.useEffect;function yR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=mt.useMemo(()=>{const u=fR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=mt.useMemo(()=>t.getState(),[t]);gR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||cr;return mt.createElement(l.Provider,{value:o},n)}var _R=yR;function xv(t=cr){const e=t===cr?kv:Pf(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var vR=xv();function wR(t=cr){const e=t===cr?vR:xv(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var dt=wR();lR(sR.useSyncExternalStoreWithSelector);var Fh={},Dv={exports:{}},Rt={},Ov={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var z=D.length;D.push(B);e:for(;0<z;){var ge=z-1>>>1,Ae=D[ge];if(0<i(Ae,B))D[ge]=B,D[z]=Ae,z=ge;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],z=D.pop();if(z!==B){D[0]=z;e:for(var ge=0,Ae=D.length,Ra=Ae>>>1;ge<Ra;){var Sr=2*(ge+1)-1,Oc=D[Sr],Rr=Sr+1,Aa=D[Rr];if(0>i(Oc,z))Rr<Ae&&0>i(Aa,Oc)?(D[ge]=Aa,D[Rr]=z,ge=Rr):(D[ge]=Oc,D[Sr]=z,ge=Sr);else if(Rr<Ae&&0>i(Aa,z))D[ge]=Aa,D[Rr]=z,ge=Rr;else break e}}return B}function i(D,B){var z=D.sortIndex-B.sortIndex;return z!==0?z:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(D){if(_=!1,g(D),!y)if(n(l)!==null)y=!0,xc(T);else{var B=n(u);B!==null&&Dc(E,B.startTime-D)}}function T(D,B){y=!1,_&&(_=!1,m(k),k=-1),f=!0;var z=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!ft());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Ae=ge(h.expirationTime<=B);B=t.unstable_now(),typeof Ae=="function"?h.callback=Ae:h===n(l)&&r(l),g(B)}else r(l);h=n(l)}if(h!==null)var Ra=!0;else{var Sr=n(u);Sr!==null&&Dc(E,Sr.startTime-B),Ra=!1}return Ra}finally{h=null,d=z,f=!1}}var A=!1,P=null,k=-1,X=5,j=-1;function ft(){return!(t.unstable_now()-j<X)}function Ts(){if(P!==null){var D=t.unstable_now();j=D;var B=!0;try{B=P(!0,D)}finally{B?Is():(A=!1,P=null)}}else A=!1}var Is;if(typeof p=="function")Is=function(){p(Ts)};else if(typeof MessageChannel<"u"){var Um=new MessageChannel,_I=Um.port2;Um.port1.onmessage=Ts,Is=function(){_I.postMessage(null)}}else Is=function(){v(Ts,0)};function xc(D){P=D,A||(A=!0,Is())}function Dc(D,B){k=v(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,xc(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(D,B,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=z+Ae,D={id:c++,callback:B,priorityLevel:D,startTime:z,expirationTime:Ae,sortIndex:-1},z>ge?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(_?(m(k),k=-1):_=!0,Dc(E,z-ge))):(D.sortIndex=Ae,e(l,D),y||f||(y=!0,xc(T))),D},t.unstable_shouldYield=ft,t.unstable_wrapCallback=function(D){var B=d;return function(){var z=d;d=B;try{return D.apply(this,arguments)}finally{d=z}}}})(Lv);Ov.exports=Lv;var ER=Ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TR=C,It=ER;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vv=new Set,po={};function ni(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(po[t]=e,t=0;t<e.length;t++)Vv.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,IR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function SR(t){return Uh.call(ig,t)?!0:Uh.call(rg,t)?!1:IR.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function RR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AR(t,e,n,r){if(e===null||typeof e>"u"||RR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var kf=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kf,Nf);je[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kf,Nf);je[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kf,Nf);je[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AR(e,n,i,r)&&(n=null),r||i===null?SR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=TR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),yi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Fv=Symbol.for("react.offscreen"),sg=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Fc;function Fs(t){if(Fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+t}var Uc=!1;function $c(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function CR(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case yi:return"Portal";case $h:return"Profiler";case Df:return"StrictMode";case jh:return"Suspense";case Bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bv:return(t.displayName||"Context")+".Consumer";case Mv:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function PR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kR(t){var e=Uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=kR(t))}function $v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hh(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jv(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function Wh(t,e){jv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&qh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qh(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Us(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Bv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,Hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NR=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){NR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function Wv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xR=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(xR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jh=null,Di=null,Oi=null;function cg(t){if(t=Jo(t)){if(typeof Jh!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Lu(e),Jh(t.stateNode,t.type,e))}}function Kv(t){Di?Oi?Oi.push(t):Oi=[t]:Di=t}function Gv(){if(Di){var t=Di,e=Oi;if(Oi=Di=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function Qv(t,e){return t(e)}function Xv(){}var jc=!1;function Yv(t,e,n){if(jc)return t(e,n);jc=!0;try{return Qv(t,e,n)}finally{jc=!1,(Di!==null||Oi!==null)&&(Xv(),Gv())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Zh=!1;if(Rn)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Zh=!1}function DR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xs=!1,Dl=null,Ol=!1,ed=null,OR={onError:function(t){Xs=!0,Dl=t}};function LR(t,e,n,r,i,s,o,a,l){Xs=!1,Dl=null,DR.apply(OR,arguments)}function VR(t,e,n,r,i,s,o,a,l){if(LR.apply(this,arguments),Xs){if(Xs){var u=Dl;Xs=!1,Dl=null}else throw Error(R(198));Ol||(Ol=!0,ed=u)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hg(t){if(ri(t)!==t)throw Error(R(188))}function MR(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hg(i),t;if(s===r)return hg(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Zv(t){return t=MR(t),t!==null?e0(t):null}function e0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e0(t);if(e!==null)return e;t=t.sibling}return null}var t0=It.unstable_scheduleCallback,dg=It.unstable_cancelCallback,bR=It.unstable_shouldYield,FR=It.unstable_requestPaint,ye=It.unstable_now,UR=It.unstable_getCurrentPriorityLevel,Mf=It.unstable_ImmediatePriority,n0=It.unstable_UserBlockingPriority,Ll=It.unstable_NormalPriority,$R=It.unstable_LowPriority,r0=It.unstable_IdlePriority,Nu=null,Zt=null;function jR(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:HR,BR=Math.log,zR=Math.LN2;function HR(t){return t>>>=0,t===0?32:31-(BR(t)/zR|0)|0}var Oa=64,La=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$s(a):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function WR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=WR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i0(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function KR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function s0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var o0,Ff,a0,l0,u0,nd=!1,Va=[],Yn=null,Jn=null,Zn=null,yo=new Map,_o=new Map,Un=[],GR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QR(t,e,n,r,i){switch(e){case"focusin":return Yn=As(Yn,t,e,n,r,i),!0;case"dragenter":return Jn=As(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=As(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,As(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,As(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function c0(t){var e=Nr(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=Jv(n),e!==null){t.blockedOn=e,u0(t.priority,function(){a0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yh=r,n.target.dispatchEvent(r),Yh=null}else return e=Jo(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){ll(t)&&n.delete(e)}function XR(){nd=!1,Yn!==null&&ll(Yn)&&(Yn=null),Jn!==null&&ll(Jn)&&(Jn=null),Zn!==null&&ll(Zn)&&(Zn=null),yo.forEach(pg),_o.forEach(pg)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,XR)))}function vo(t){function e(i){return Cs(i,t)}if(0<Va.length){Cs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&Cs(Yn,t),Jn!==null&&Cs(Jn,t),Zn!==null&&Cs(Zn,t),yo.forEach(e),_o.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&Un.shift()}var Li=On.ReactCurrentBatchConfig,Ml=!0;function YR(t,e,n,r){var i=Y,s=Li.transition;Li.transition=null;try{Y=1,Uf(t,e,n,r)}finally{Y=i,Li.transition=s}}function JR(t,e,n,r){var i=Y,s=Li.transition;Li.transition=null;try{Y=4,Uf(t,e,n,r)}finally{Y=i,Li.transition=s}}function Uf(t,e,n,r){if(Ml){var i=rd(t,e,n,r);if(i===null)Jc(t,e,r,bl,n),fg(t,r);else if(QR(i,t,e,n,r))r.stopPropagation();else if(fg(t,r),e&4&&-1<GR.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&o0(s),s=rd(t,e,n,r),s===null&&Jc(t,e,r,bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var bl=null;function rd(t,e,n,r){if(bl=null,t=Vf(r),t=Nr(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function h0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UR()){case Mf:return 1;case n0:return 4;case Ll:case $R:return 16;case r0:return 536870912;default:return 16}default:return 16}}var qn=null,$f=null,ul=null;function d0(){if(ul)return ul;var t,e=$f,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ul=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function mg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:mg,this.isPropagationStopped=mg,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=At(ds),Yo=le({},ds,{view:0,detail:0}),ZR=At(Yo),zc,Hc,Ps,xu=le({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(zc=t.screenX-Ps.screenX,Hc=t.screenY-Ps.screenY):Hc=zc=0,Ps=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),gg=At(xu),eA=le({},xu,{dataTransfer:0}),tA=At(eA),nA=le({},Yo,{relatedTarget:0}),Wc=At(nA),rA=le({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),iA=At(rA),sA=le({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oA=At(sA),aA=le({},ds,{data:0}),yg=At(aA),lA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cA[t])?!!e[t]:!1}function Bf(){return hA}var dA=le({},Yo,{key:function(t){if(t.key){var e=lA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fA=At(dA),pA=le({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=At(pA),mA=le({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),gA=At(mA),yA=le({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),_A=At(yA),vA=le({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wA=At(vA),EA=[9,13,27,32],zf=Rn&&"CompositionEvent"in window,Ys=null;Rn&&"documentMode"in document&&(Ys=document.documentMode);var TA=Rn&&"TextEvent"in window&&!Ys,f0=Rn&&(!zf||Ys&&8<Ys&&11>=Ys),vg=" ",wg=!1;function p0(t,e){switch(t){case"keyup":return EA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function IA(t,e){switch(t){case"compositionend":return m0(e);case"keypress":return e.which!==32?null:(wg=!0,vg);case"textInput":return t=e.data,t===vg&&wg?null:t;default:return null}}function SA(t,e){if(vi)return t==="compositionend"||!zf&&p0(t,e)?(t=d0(),ul=$f=qn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f0&&e.locale!=="ko"?null:e.data;default:return null}}var RA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RA[t.type]:e==="textarea"}function g0(t,e,n,r){Kv(r),e=Fl(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,wo=null;function AA(t){C0(t,0)}function Du(t){var e=Ti(t);if($v(e))return t}function CA(t,e){if(t==="change")return e}var y0=!1;if(Rn){var qc;if(Rn){var Kc="oninput"in document;if(!Kc){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Kc=typeof Tg.oninput=="function"}qc=Kc}else qc=!1;y0=qc&&(!document.documentMode||9<document.documentMode)}function Ig(){Js&&(Js.detachEvent("onpropertychange",_0),wo=Js=null)}function _0(t){if(t.propertyName==="value"&&Du(wo)){var e=[];g0(e,wo,t,Vf(t)),Yv(AA,e)}}function PA(t,e,n){t==="focusin"?(Ig(),Js=e,wo=n,Js.attachEvent("onpropertychange",_0)):t==="focusout"&&Ig()}function kA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(wo)}function NA(t,e){if(t==="click")return Du(e)}function xA(t,e){if(t==="input"||t==="change")return Du(e)}function DA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:DA;function Eo(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uh.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w0(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OA(t){var e=w0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LA=Rn&&"documentMode"in document&&11>=document.documentMode,wi=null,id=null,Zs=null,sd=!1;function Ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||wi==null||wi!==xl(r)||(r=wi,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&Eo(Zs,r)||(Zs=r,r=Fl(id,"onSelect"),0<r.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Gc={},E0={};Rn&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Ou(t){if(Gc[t])return Gc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E0)return Gc[t]=e[n];return t}var T0=Ou("animationend"),I0=Ou("animationiteration"),S0=Ou("animationstart"),R0=Ou("transitionend"),A0=new Map,Cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){A0.set(t,e),ni(e,[t])}for(var Qc=0;Qc<Cg.length;Qc++){var Xc=Cg[Qc],VA=Xc.toLowerCase(),MA=Xc[0].toUpperCase()+Xc.slice(1);yr(VA,"on"+MA)}yr(T0,"onAnimationEnd");yr(I0,"onAnimationIteration");yr(S0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(R0,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VR(r,e,void 0,t),t.currentTarget=null}function C0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pg(i,a,u),s=l}}}if(Ol)throw t=ed,Ol=!1,ed=null,t}function ne(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var r=t+"__bubble";n.has(r)||(P0(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),P0(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Fa]){t[Fa]=!0,Vv.forEach(function(n){n!=="selectionchange"&&(bA.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,Yc("selectionchange",!1,e))}}function P0(t,e,n,r){switch(h0(e)){case 1:var i=YR;break;case 4:i=JR;break;default:i=Uf}n=i.bind(null,e,n,t),i=void 0,!Zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Yv(function(){var u=s,c=Vf(n),h=[];e:{var d=A0.get(t);if(d!==void 0){var f=jf,y=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":f=fA;break;case"focusin":y="focus",f=Wc;break;case"focusout":y="blur",f=Wc;break;case"beforeblur":case"afterblur":f=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=tA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=gA;break;case T0:case I0:case S0:f=iA;break;case R0:f=_A;break;case"scroll":f=ZR;break;case"wheel":f=wA;break;case"copy":case"cut":case"paste":f=oA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=_g}var _=(e&4)!==0,v=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=go(p,m),E!=null&&_.push(Io(p,E,g)))),v)break;p=p.return}0<_.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Yh&&(y=n.relatedTarget||n.fromElement)&&(Nr(y)||y[An]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Nr(y):null,y!==null&&(v=ri(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=gg,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=_g,E="onPointerLeave",m="onPointerEnter",p="pointer"),v=f==null?d:Ti(f),g=y==null?d:Ti(y),d=new _(E,p+"leave",f,n,c),d.target=v,d.relatedTarget=g,E=null,Nr(c)===u&&(_=new _(m,p+"enter",y,n,c),_.target=g,_.relatedTarget=v,E=_),v=E,f&&y)t:{for(_=f,m=y,p=0,g=_;g;g=di(g))p++;for(g=0,E=m;E;E=di(E))g++;for(;0<p-g;)_=di(_),p--;for(;0<g-p;)m=di(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=di(_),m=di(m)}_=null}else _=null;f!==null&&kg(h,d,f,_,!1),y!==null&&v!==null&&kg(h,v,y,_,!0)}}e:{if(d=u?Ti(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var T=CA;else if(Eg(d))if(y0)T=xA;else{T=kA;var A=PA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=NA);if(T&&(T=T(t,u))){g0(h,T,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&qh(d,"number",d.value)}switch(A=u?Ti(u):window,t){case"focusin":(Eg(A)||A.contentEditable==="true")&&(wi=A,id=u,Zs=null);break;case"focusout":Zs=id=wi=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Ag(h,n,c);break;case"selectionchange":if(LA)break;case"keydown":case"keyup":Ag(h,n,c)}var P;if(zf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else vi?p0(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(f0&&n.locale!=="ko"&&(vi||k!=="onCompositionStart"?k==="onCompositionEnd"&&vi&&(P=d0()):(qn=c,$f="value"in qn?qn.value:qn.textContent,vi=!0)),A=Fl(u,k),0<A.length&&(k=new yg(k,t,null,n,c),h.push({event:k,listeners:A}),P?k.data=P:(P=m0(n),P!==null&&(k.data=P)))),(P=TA?IA(t,n):SA(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(c=new yg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}C0(h,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(Io(t,s,i)),s=go(t,e),s!=null&&r.push(Io(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=go(n,s),l!=null&&o.unshift(Io(n,l,a))):i||(l=go(n,s),l!=null&&o.push(Io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FA=/\r\n?/g,UA=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(FA,`
`).replace(UA,"")}function Ua(t,e,n){if(e=Ng(e),Ng(t)!==e&&n)throw Error(R(425))}function Ul(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,$A=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,jA=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(BA)}:ud;function BA(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Gt="__reactFiber$"+fs,So="__reactProps$"+fs,An="__reactContainer$"+fs,cd="__reactEvents$"+fs,zA="__reactListeners$"+fs,HA="__reactHandles$"+fs;function Nr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dg(t);t!==null;){if(n=t[Gt])return n;t=Dg(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[Gt]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Lu(t){return t[So]||null}var hd=[],Ii=-1;function _r(t){return{current:t}}function ie(t){0>Ii||(t.current=hd[Ii],hd[Ii]=null,Ii--)}function ee(t,e){Ii++,hd[Ii]=t.current,t.current=e}var dr={},Ye=_r(dr),ut=_r(!1),jr=dr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function $l(){ie(ut),ie(Ye)}function Og(t,e,n){if(Ye.current!==dr)throw Error(R(168));ee(Ye,e),ee(ut,n)}function k0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,PR(t)||"Unknown",i));return le({},n,r)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,jr=Ye.current,ee(Ye,t),ee(ut,ut.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=k0(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,ie(ut),ie(Ye),ee(Ye,t)):ie(ut),ee(ut,n)}var fn=null,Vu=!1,eh=!1;function N0(t){fn===null?fn=[t]:fn.push(t)}function WA(t){Vu=!0,N0(t)}function vr(){if(!eh&&fn!==null){eh=!0;var t=0,e=Y;try{var n=fn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Vu=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),t0(Mf,vr),i}finally{Y=e,eh=!1}}return null}var Si=[],Ri=0,Bl=null,zl=0,Ct=[],Pt=0,Br=null,pn=1,mn="";function Cr(t,e){Si[Ri++]=zl,Si[Ri++]=Bl,Bl=t,zl=e}function x0(t,e,n){Ct[Pt++]=pn,Ct[Pt++]=mn,Ct[Pt++]=Br,Br=t;var r=pn;t=mn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-$t(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function Wf(t){t.return!==null&&(Cr(t,1),x0(t,1,0))}function qf(t){for(;t===Bl;)Bl=Si[--Ri],Si[Ri]=null,zl=Si[--Ri],Si[Ri]=null;for(;t===Br;)Br=Ct[--Pt],Ct[Pt]=null,mn=Ct[--Pt],Ct[Pt]=null,pn=Ct[--Pt],Ct[Pt]=null}var vt=null,gt=null,se=!1,bt=null;function D0(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,gt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,gt=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(se){var e=gt;if(e){var n=e;if(!Vg(t,e)){if(dd(t))throw Error(R(418));e=er(n.nextSibling);var r=vt;e&&Vg(t,e)?D0(r,n):(t.flags=t.flags&-4097|2,se=!1,vt=t)}}else{if(dd(t))throw Error(R(418));t.flags=t.flags&-4097|2,se=!1,vt=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function $a(t){if(t!==vt)return!1;if(!se)return Mg(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=gt)){if(dd(t))throw O0(),Error(R(418));for(;e;)D0(t,e),e=er(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=vt?er(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=gt;t;)t=er(t.nextSibling)}function Gi(){gt=vt=null,se=!1}function Kf(t){bt===null?bt=[t]:bt.push(t)}var qA=On.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bg(t){var e=t._init;return e(t._payload)}function L0(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=ir(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=ah(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var T=g.type;return T===_i?c(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&bg(T)===p.type)?(E=i(p,g.props),E.ref=ks(m,p,g),E.return=m,E):(E=yl(g.type,g.key,g.props,null,m.mode,E),E.ref=ks(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=lh(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,E,T){return p===null||p.tag!==7?(p=br(g,m.mode,E,T),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ah(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Na:return g=yl(p.type,p.key,p.props,null,m.mode,g),g.ref=ks(m,null,p),g.return=m,g;case yi:return p=lh(p,m.mode,g),p.return=m,p;case bn:var E=p._init;return h(m,E(p._payload),g)}if(Us(p)||Ss(p))return p=br(p,m.mode,g,null),p.return=m,p;ja(m,p)}return null}function d(m,p,g,E){var T=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:return g.key===T?l(m,p,g,E):null;case yi:return g.key===T?u(m,p,g,E):null;case bn:return T=g._init,d(m,p,T(g._payload),E)}if(Us(g)||Ss(g))return T!==null?null:c(m,p,g,E,null);ja(m,g)}return null}function f(m,p,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Na:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,T);case yi:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,T);case bn:var A=E._init;return f(m,p,g,A(E._payload),T)}if(Us(E)||Ss(E))return m=m.get(g)||null,c(p,m,E,T,null);ja(p,E)}return null}function y(m,p,g,E){for(var T=null,A=null,P=p,k=p=0,X=null;P!==null&&k<g.length;k++){P.index>k?(X=P,P=null):X=P.sibling;var j=d(m,P,g[k],E);if(j===null){P===null&&(P=X);break}t&&P&&j.alternate===null&&e(m,P),p=s(j,p,k),A===null?T=j:A.sibling=j,A=j,P=X}if(k===g.length)return n(m,P),se&&Cr(m,k),T;if(P===null){for(;k<g.length;k++)P=h(m,g[k],E),P!==null&&(p=s(P,p,k),A===null?T=P:A.sibling=P,A=P);return se&&Cr(m,k),T}for(P=r(m,P);k<g.length;k++)X=f(P,m,k,g[k],E),X!==null&&(t&&X.alternate!==null&&P.delete(X.key===null?k:X.key),p=s(X,p,k),A===null?T=X:A.sibling=X,A=X);return t&&P.forEach(function(ft){return e(m,ft)}),se&&Cr(m,k),T}function _(m,p,g,E){var T=Ss(g);if(typeof T!="function")throw Error(R(150));if(g=T.call(g),g==null)throw Error(R(151));for(var A=T=null,P=p,k=p=0,X=null,j=g.next();P!==null&&!j.done;k++,j=g.next()){P.index>k?(X=P,P=null):X=P.sibling;var ft=d(m,P,j.value,E);if(ft===null){P===null&&(P=X);break}t&&P&&ft.alternate===null&&e(m,P),p=s(ft,p,k),A===null?T=ft:A.sibling=ft,A=ft,P=X}if(j.done)return n(m,P),se&&Cr(m,k),T;if(P===null){for(;!j.done;k++,j=g.next())j=h(m,j.value,E),j!==null&&(p=s(j,p,k),A===null?T=j:A.sibling=j,A=j);return se&&Cr(m,k),T}for(P=r(m,P);!j.done;k++,j=g.next())j=f(P,m,k,j.value,E),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?k:j.key),p=s(j,p,k),A===null?T=j:A.sibling=j,A=j);return t&&P.forEach(function(Ts){return e(m,Ts)}),se&&Cr(m,k),T}function v(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===_i&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:e:{for(var T=g.key,A=p;A!==null;){if(A.key===T){if(T=g.type,T===_i){if(A.tag===7){n(m,A.sibling),p=i(A,g.props.children),p.return=m,m=p;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&bg(T)===A.type){n(m,A.sibling),p=i(A,g.props),p.ref=ks(m,A,g),p.return=m,m=p;break e}n(m,A);break}else e(m,A);A=A.sibling}g.type===_i?(p=br(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=yl(g.type,g.key,g.props,null,m.mode,E),E.ref=ks(m,p,g),E.return=m,m=E)}return o(m);case yi:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=lh(g,m.mode,E),p.return=m,m=p}return o(m);case bn:return A=g._init,v(m,p,A(g._payload),E)}if(Us(g))return y(m,p,g,E);if(Ss(g))return _(m,p,g,E);ja(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=ah(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return v}var Qi=L0(!0),V0=L0(!1),Hl=_r(null),Wl=null,Ai=null,Gf=null;function Qf(){Gf=Ai=Wl=null}function Xf(t){var e=Hl.current;ie(Hl),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){Wl=t,Gf=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Wl===null)throw Error(R(308));Ai=t,Wl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var xr=null;function Yf(t){xr===null?xr=[t]:xr.push(t)}function M0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,Yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=le({},h,d);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=h}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Zo={},en=_r(Zo),Ro=_r(Zo),Ao=_r(Zo);function Dr(t){if(t===Zo)throw Error(R(174));return t}function Zf(t,e){switch(ee(Ao,e),ee(Ro,t),ee(en,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gh(e,t)}ie(en),ee(en,e)}function Xi(){ie(en),ie(Ro),ie(Ao)}function F0(t){Dr(Ao.current);var e=Dr(en.current),n=Gh(e,t.type);e!==n&&(ee(Ro,t),ee(en,n))}function ep(t){Ro.current===t&&(ie(en),ie(Ro))}var oe=_r(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var th=[];function tp(){for(var t=0;t<th.length;t++)th[t]._workInProgressVersionPrimary=null;th.length=0}var dl=On.ReactCurrentDispatcher,nh=On.ReactCurrentBatchConfig,zr=0,ae=null,Te=null,Pe=null,Gl=!1,eo=!1,Co=0,KA=0;function ze(){throw Error(R(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function rp(t,e,n,r,i,s){if(zr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?YA:JA,t=n(r,i),eo){s=0;do{if(eo=!1,Co=0,25<=s)throw Error(R(301));s+=1,Pe=Te=null,e.updateQueue=null,dl.current=ZA,t=n(r,i)}while(eo)}if(dl.current=Ql,e=Te!==null&&Te.next!==null,zr=0,Pe=Te=ae=null,Gl=!1,e)throw Error(R(300));return t}function ip(){var t=Co!==0;return Co=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ae.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Ot(){if(Te===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Pe===null?ae.memoizedState:Pe.next;if(e!==null)Pe=e,Te=t;else{if(t===null)throw Error(R(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?ae.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Po(t,e){return typeof e=="function"?e(t):e}function rh(t){var e=Ot(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ih(t){var e=Ot(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function U0(){}function $0(t,e){var n=ae,r=Ot(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,sp(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,ko(9,B0.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(R(349));zr&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,H0(e)&&W0(t)}function z0(t,e,n){return n(function(){H0(e)&&W0(t)})}function H0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function W0(t){var e=Cn(t,1);e!==null&&jt(e,t,1,-1)}function $g(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=XA.bind(null,ae,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q0(){return Ot().memoizedState}function fl(t,e,n,r){var i=Kt();ae.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function Mu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&np(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}ae.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function jg(t,e){return fl(8390656,8,t,e)}function sp(t,e){return Mu(2048,8,t,e)}function K0(t,e){return Mu(4,2,t,e)}function G0(t,e){return Mu(4,4,t,e)}function Q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,Q0.bind(null,e,t),n)}function op(){}function Y0(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Z0(t,e,n){return zr&21?(zt(n,e)||(n=i0(),ae.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function GA(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=nh.transition;nh.transition={};try{t(!1),e()}finally{Y=n,nh.transition=r}}function ew(){return Ot().memoizedState}function QA(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tw(t))nw(e,n);else if(n=M0(t,e,n,r),n!==null){var i=nt();jt(n,t,r,i),rw(n,e,r)}}function XA(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tw(t))nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=e.interleaved;l===null?(i.next=i,Yf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=M0(t,e,i,r),n!==null&&(i=nt(),jt(n,t,r,i),rw(n,e,r))}}function tw(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function nw(t,e){eo=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}var Ql={readContext:Dt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},YA={readContext:Dt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,Q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QA.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:$g,useDebugValue:op,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=$g(!1),e=t[0];return t=GA.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Kt();if(se){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ke===null)throw Error(R(349));zr&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jg(z0.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,B0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=ke.identifierPrefix;if(se){var n=mn,r=pn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JA={readContext:Dt,useCallback:Y0,useContext:Dt,useEffect:sp,useImperativeHandle:X0,useInsertionEffect:K0,useLayoutEffect:G0,useMemo:J0,useReducer:rh,useRef:q0,useState:function(){return rh(Po)},useDebugValue:op,useDeferredValue:function(t){var e=Ot();return Z0(e,Te.memoizedState,t)},useTransition:function(){var t=rh(Po)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:$0,useId:ew,unstable_isNewReconciler:!1},ZA={readContext:Dt,useCallback:Y0,useContext:Dt,useEffect:sp,useImperativeHandle:X0,useInsertionEffect:K0,useLayoutEffect:G0,useMemo:J0,useReducer:ih,useRef:q0,useState:function(){return ih(Po)},useDebugValue:op,useDeferredValue:function(t){var e=Ot();return Te===null?e.memoizedState=t:Z0(e,Te.memoizedState,t)},useTransition:function(){var t=ih(Po)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:$0,useId:ew,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=rr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(jt(e,t,i,r),hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=rr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(jt(e,t,i,r),hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=rr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(jt(e,t,r,n),hl(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function iw(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=ct(e)?jr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=ct(e)?jr:Ye.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bu.enqueueReplaceState(i,i.state,null),ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yi(t,e){try{var n="",r=e;do n+=CR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eC=typeof WeakMap=="function"?WeakMap:Map;function sw(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yl||(Yl=!0,Cd=r),yd(t,e)},n}function ow(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pC.bind(null,t,e,n),e.then(t,t))}function Wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var tC=On.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?V0(e,null,n,r):Qi(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return Vi(e,i),r=rp(t,e,n,r,s,i),n=ip(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(se&&n&&Wf(e),e.flags|=1,et(t,e,r,i),e.child)}function Gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,aw(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function aw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return _d(t,e,n,r,i)}function lw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Pi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Pi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Pi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Pi,pt),pt|=r;return et(t,e,i,n),e.child}function uw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,r,i){var s=ct(n)?jr:Ye.current;return s=Ki(e,s),Vi(e,i),n=rp(t,e,n,r,s,i),r=ip(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(se&&r&&Wf(e),e.flags|=1,et(t,e,n,i),e.child)}function Qg(t,e,n,r,i){if(ct(n)){var s=!0;jl(e)}else s=!1;if(Vi(e,i),e.stateNode===null)pl(t,e),iw(e,n,r),gd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ct(n)?jr:Ye.current,u=Ki(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zg(e,o,r,u),Fn=!1;var d=e.memoizedState;o.state=d,ql(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ut.current||Fn?(typeof c=="function"&&(md(e,n,c,r),l=e.memoizedState),(a=Fn||Bg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ct(n)?jr:Ye.current,l=Ki(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&zg(e,o,r,l),Fn=!1,d=e.memoizedState,o.state=d,ql(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ut.current||Fn?(typeof f=="function"&&(md(e,n,f,r),y=e.memoizedState),(u=Fn||Bg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vd(t,e,n,r,s,i)}function vd(t,e,n,r,i,s){uw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lg(e,n,!1),Pn(t,e,s);r=e.stateNode,tC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,s),e.child=Qi(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&Lg(e,n,!0),e.child}function cw(t){var e=t.stateNode;e.pendingContext?Og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Og(t,e.context,!1),Zf(t,e.containerInfo)}function Xg(t,e,n,r,i){return Gi(),Kf(i),e.flags|=256,et(t,e,n,r),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function hw(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(oe,i&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$u(o,r,0,null),t=br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ed(n),e.memoizedState=wd,t):ap(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wd,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ap(t,e){return e=$u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,r){return r!==null&&Kf(r),Qi(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sh(Error(R(422))),Ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$u({mode:"visible",children:r.children},i,0,null),s=br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qi(e,t.child,null,o),e.child.memoizedState=Ed(o),e.memoizedState=wd,s);if(!(e.mode&1))return Ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=sh(s,r,void 0),Ba(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),jt(r,t,i,-1))}return fp(),r=sh(Error(R(421))),Ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=er(i.nextSibling),vt=e,se=!0,bt=null,t!==null&&(Ct[Pt++]=pn,Ct[Pt++]=mn,Ct[Pt++]=Br,pn=t.id,mn=t.overflow,Br=e),e=ap(e,r.children),e.flags|=4096,e)}function Yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pd(t.return,e,n)}function oh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,n,e);else if(t.tag===19)Yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oh(e,!0,n,null,s);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rC(t,e,n){switch(e.tag){case 3:cw(e),Gi();break;case 5:F0(e);break;case 1:ct(e.type)&&jl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?hw(t,e,n):(ee(oe,oe.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,lw(t,e,n)}return Pn(t,e,n)}var fw,Td,pw,mw;fw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};pw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(en.current);var s=null;switch(n){case"input":i=Hh(t,i),r=Hh(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Kh(t,i),r=Kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ul)}Qh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iC(t,e,n){var r=e.pendingProps;switch(qf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return ct(e.type)&&$l(),He(e),null;case 3:return r=e.stateNode,Xi(),ie(ut),ie(Ye),tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Nd(bt),bt=null))),Td(t,e),He(e),null;case 5:ep(e);var i=Dr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)pw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return He(e),null}if(t=Dr(en.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gt]=e,r[So]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)ne(js[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":og(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":lg(r,s),ne("invalid",r)}Qh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,a,t),i=["children",""+a]):po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":xa(r),ag(r,s,!0);break;case"textarea":xa(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gt]=e,t[So]=r,fw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xh(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)ne(js[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":og(t,r),i=Hh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":lg(t,r),i=Kh(t,r),ne("invalid",t);break;default:i=r}Qh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mo(t,l):typeof l=="number"&&mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&xf(t,s,l,o))}switch(n){case"input":xa(t),ag(t,r,!1);break;case"textarea":xa(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)mw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Dr(Ao.current),Dr(en.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return He(e),null;case 13:if(ie(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&gt!==null&&e.mode&1&&!(e.flags&128))O0(),Gi(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Gt]=e}else Gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else bt!==null&&(Nd(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Se===0&&(Se=3):fp())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Xi(),Td(t,e),t===null&&To(e.stateNode.containerInfo),He(e),null;case 10:return Xf(e.type._context),He(e),null;case 17:return ct(e.type)&&$l(),He(e),null;case 19:if(ie(oe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Ji&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return He(e),null}else 2*ye()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return dp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function sC(t,e){switch(qf(e),e.tag){case 1:return ct(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),ie(ut),ie(Ye),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(ie(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(oe),null;case 4:return Xi(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var za=!1,Ke=!1,oC=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Id(t,e,n){try{n()}catch(r){he(t,e,r)}}var Jg=!1;function aC(t,e){if(od=Ml,t=w0(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Ml=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vt(e.type,_),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){he(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=Jg,Jg=!1,y}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Id(e,n,s)}i=i.next}while(i!==r)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gw(t){var e=t.alternate;e!==null&&(t.alternate=null,gw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[So],delete e[cd],delete e[zA],delete e[HA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yw(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(r!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Le=null,Mt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)_w(t,e,n),n=n.sibling}function _w(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:Ke||Ci(n,e);case 6:var r=Le,i=Mt;Le=null,Vn(t,e,n),Le=r,Mt=i,Le!==null&&(Mt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Mt?(t=Le,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),vo(t)):Zc(Le,n.stateNode));break;case 4:r=Le,i=Mt,Le=n.stateNode.containerInfo,Mt=!0,Vn(t,e,n),Le=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Ke&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Vn(t,e,n),Ke=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oC),e.forEach(function(r){var i=gC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Mt=!1;break e;case 3:Le=a.stateNode.containerInfo,Mt=!0;break e;case 4:Le=a.stateNode.containerInfo,Mt=!0;break e}a=a.return}if(Le===null)throw Error(R(160));_w(s,o,i),Le=null,Mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vw(e,t),e=e.sibling}function vw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),qt(t),r&4){try{to(3,t,t.return),Fu(3,t)}catch(_){he(t,t.return,_)}try{to(5,t,t.return)}catch(_){he(t,t.return,_)}}break;case 1:Lt(e,t),qt(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Lt(e,t),qt(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(_){he(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jv(i,s),Xh(a,o);var u=Xh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?qv(i,h):c==="dangerouslySetInnerHTML"?Hv(i,h):c==="children"?mo(i,h):xf(i,c,h,u)}switch(a){case"input":Wh(i,s);break;case"textarea":Bv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xi(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[So]=s}catch(_){he(t,t.return,_)}}break;case 6:if(Lt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){he(t,t.return,_)}}break;case 3:if(Lt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(_){he(t,t.return,_)}break;case 4:Lt(e,t),qt(t);break;case 13:Lt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cp=ye())),r&4&&ey(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Lt(e,t),Ke=u):Lt(e,t),qt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,f=d.child,d.tag){case 0:case 11:case 14:case 15:to(4,d,d.return);break;case 1:Ci(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){he(r,n,_)}}break;case 5:Ci(d,d.return);break;case 22:if(d.memoizedState!==null){ny(h);continue}}f!==null?(f.return=d,x=f):ny(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wv("display",o))}catch(_){he(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){he(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Lt(e,t),qt(t),r&4&&ey(t);break;case 21:break;default:Lt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yw(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=Zg(t);Ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zg(t);Rd(t,a,o);break;default:throw Error(R(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lC(t,e,n){x=t,ww(t)}function ww(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=za;var u=Ke;if(za=o,(Ke=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?ry(i):l!==null?(l.return=o,x=l):ry(i);for(;s!==null;)x=s,ww(s),s=s.sibling;x=i,za=a,Ke=u}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):ty(t)}}function ty(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||Fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&vo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ke||e.flags&512&&Sd(e)}catch(d){he(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function ny(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function ry(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){he(e,i,l)}}var s=e.return;try{Sd(e)}catch(l){he(e,s,l)}break;case 5:var o=e.return;try{Sd(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var uC=Math.ceil,Xl=On.ReactCurrentDispatcher,lp=On.ReactCurrentOwner,xt=On.ReactCurrentBatchConfig,G=0,ke=null,we=null,Fe=0,pt=0,Pi=_r(0),Se=0,No=null,Hr=0,Uu=0,up=0,no=null,st=null,cp=0,Ji=1/0,dn=null,Yl=!1,Cd=null,nr=null,Ha=!1,Kn=null,Jl=0,ro=0,Pd=null,ml=-1,gl=0;function nt(){return G&6?ye():ml!==-1?ml:ml=ye()}function rr(t){return t.mode&1?G&2&&Fe!==0?Fe&-Fe:qA.transition!==null?(gl===0&&(gl=i0()),gl):(t=Y,t!==0||(t=window.event,t=t===void 0?16:h0(t.type)),t):1}function jt(t,e,n,r){if(50<ro)throw ro=0,Pd=null,Error(R(185));Xo(t,n,r),(!(G&2)||t!==ke)&&(t===ke&&(!(G&2)&&(Uu|=n),Se===4&&$n(t,Fe)),ht(t,r),n===1&&G===0&&!(e.mode&1)&&(Ji=ye()+500,Vu&&vr()))}function ht(t,e){var n=t.callbackNode;qR(t,e);var r=Vl(t,t===ke?Fe:0);if(r===0)n!==null&&dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dg(n),e===1)t.tag===0?WA(iy.bind(null,t)):N0(iy.bind(null,t)),jA(function(){!(G&6)&&vr()}),n=null;else{switch(s0(r)){case 1:n=Mf;break;case 4:n=n0;break;case 16:n=Ll;break;case 536870912:n=r0;break;default:n=Ll}n=Pw(n,Ew.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ew(t,e){if(ml=-1,gl=0,G&6)throw Error(R(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=Vl(t,t===ke?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=G;G|=2;var s=Iw();(ke!==t||Fe!==e)&&(dn=null,Ji=ye()+500,Mr(t,e));do try{dC();break}catch(a){Tw(t,a)}while(!0);Qf(),Xl.current=s,G=i,we!==null?e=0:(ke=null,Fe=0,e=Se)}if(e!==0){if(e===2&&(i=td(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=No,Mr(t,0),$n(t,r),ht(t,ye()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!cC(i)&&(e=Zl(t,r),e===2&&(s=td(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=No,Mr(t,0),$n(t,r),ht(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Pr(t,st,dn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=cp+500-ye(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ud(Pr.bind(null,t,st,dn),e);break}Pr(t,st,dn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uC(r/1960))-r,10<r){t.timeoutHandle=ud(Pr.bind(null,t,st,dn),r);break}Pr(t,st,dn);break;case 5:Pr(t,st,dn);break;default:throw Error(R(329))}}}return ht(t,ye()),t.callbackNode===n?Ew.bind(null,t):null}function kd(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=st,st=n,e!==null&&Nd(e)),t}function Nd(t){st===null?st=t:st.push.apply(st,t)}function cC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~up,e&=~Uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(G&6)throw Error(R(327));Mi();var e=Vl(t,0);if(!(e&1))return ht(t,ye()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=td(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=No,Mr(t,0),$n(t,e),ht(t,ye()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,st,dn),ht(t,ye()),null}function hp(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Ji=ye()+500,Vu&&vr())}}function Wr(t){Kn!==null&&Kn.tag===0&&!(G&6)&&Mi();var e=G;G|=1;var n=xt.transition,r=Y;try{if(xt.transition=null,Y=1,t)return t()}finally{Y=r,xt.transition=n,G=e,!(G&6)&&vr()}}function dp(){pt=Pi.current,ie(Pi)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$A(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:Xi(),ie(ut),ie(Ye),tp();break;case 5:ep(r);break;case 4:Xi();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:Xf(r.type._context);break;case 22:case 23:dp()}n=n.return}if(ke=t,we=t=ir(t.current,null),Fe=pt=e,Se=0,No=null,up=Uu=Hr=0,st=no=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xr=null}return t}function Tw(t,e){do{var n=we;try{if(Qf(),dl.current=Ql,Gl){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(zr=0,Pe=Te=ae=null,eo=!1,Co=0,lp.current=null,n===null||n.return===null){Se=1,No=e,we=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Wg(o);if(f!==null){f.flags&=-257,qg(f,o,a,s,e),f.mode&1&&Hg(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Hg(s,u,e),fp();break e}l=Error(R(426))}}else if(se&&a.mode&1){var v=Wg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),qg(v,o,a,s,e),Kf(Yi(l,a));break e}}s=l=Yi(l,a),Se!==4&&(Se=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=sw(s,l,e);Fg(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nr===null||!nr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=ow(s,a,e);Fg(s,E);break e}}s=s.return}while(s!==null)}Rw(n)}catch(T){e=T,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Iw(){var t=Xl.current;return Xl.current=Ql,t===null?Ql:t}function fp(){(Se===0||Se===3||Se===2)&&(Se=4),ke===null||!(Hr&268435455)&&!(Uu&268435455)||$n(ke,Fe)}function Zl(t,e){var n=G;G|=2;var r=Iw();(ke!==t||Fe!==e)&&(dn=null,Mr(t,e));do try{hC();break}catch(i){Tw(t,i)}while(!0);if(Qf(),G=n,Xl.current=r,we!==null)throw Error(R(261));return ke=null,Fe=0,Se}function hC(){for(;we!==null;)Sw(we)}function dC(){for(;we!==null&&!bR();)Sw(we)}function Sw(t){var e=Cw(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?Rw(t):we=e,lp.current=null}function Rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sC(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,we=null;return}}else if(n=iC(n,e,pt),n!==null){we=n;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Se===0&&(Se=5)}function Pr(t,e,n){var r=Y,i=xt.transition;try{xt.transition=null,Y=1,fC(t,e,n,r)}finally{xt.transition=i,Y=r}return null}function fC(t,e,n,r){do Mi();while(Kn!==null);if(G&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KR(t,s),t===ke&&(we=ke=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Pw(Ll,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=Y;Y=1;var a=G;G|=4,lp.current=null,aC(t,n),vw(n,t),OA(ad),Ml=!!od,ad=od=null,t.current=n,lC(n),FR(),G=a,Y=o,xt.transition=s}else t.current=n;if(Ha&&(Ha=!1,Kn=t,Jl=i),s=t.pendingLanes,s===0&&(nr=null),jR(n.stateNode),ht(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yl)throw Yl=!1,t=Cd,Cd=null,t;return Jl&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===Pd?ro++:(ro=0,Pd=t):ro=0,vr(),null}function Mi(){if(Kn!==null){var t=s0(Jl),e=xt.transition,n=Y;try{if(xt.transition=null,Y=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Jl=0,G&6)throw Error(R(331));var i=G;for(G|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:to(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,f=c.return;if(gw(c),c===u){x=null;break}if(d!==null){d.return=f,x=d;break}x=f}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(T){he(a,a.return,T)}if(a===o){x=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,x=E;break e}x=a.return}}if(G=i,vr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Nu,t)}catch{}r=!0}return r}finally{Y=n,xt.transition=e}}return!1}function sy(t,e,n){e=Yi(n,e),e=sw(t,e,1),t=tr(t,e,1),e=nt(),t!==null&&(Xo(t,1,e),ht(t,e))}function he(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Yi(n,t),t=ow(e,t,1),e=tr(e,t,1),t=nt(),e!==null&&(Xo(e,1,t),ht(e,t));break}}e=e.return}}function pC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Fe&n)===n&&(Se===4||Se===3&&(Fe&130023424)===Fe&&500>ye()-cp?Mr(t,0):up|=n),ht(t,e)}function Aw(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=nt();t=Cn(t,e),t!==null&&(Xo(t,e,n),ht(t,n))}function mC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Aw(t,n)}function gC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Aw(t,n)}var Cw;Cw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,rC(t,e,n);at=!!(t.flags&131072)}else at=!1,se&&e.flags&1048576&&x0(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var i=Ki(e,Ye.current);Vi(e,n),i=rp(null,e,r,t,i,n);var s=ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jf(e),i.updater=bu,e.stateNode=i,i._reactInternals=e,gd(e,r,t,n),e=vd(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Wf(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_C(r),t=Vt(r,t),i){case 0:e=_d(null,e,r,t,n);break e;case 1:e=Qg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Gg(null,e,r,Vt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),_d(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Qg(t,e,r,i,n);case 3:e:{if(cw(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,b0(t,e),ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(R(423)),e),e=Xg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(R(424)),e),e=Xg(t,e,r,n,i);break e}else for(gt=er(e.stateNode.containerInfo.firstChild),vt=e,se=!0,bt=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){e=Pn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return F0(e),t===null&&fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ld(r,i)?o=null:s!==null&&ld(r,s)&&(e.flags|=32),uw(t,e),et(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return hw(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Kg(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Hl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!ut.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vi(e,n),i=Dt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Gg(t,e,r,i,n);case 15:return aw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),pl(t,e),e.tag=1,ct(r)?(t=!0,jl(e)):t=!1,Vi(e,n),iw(e,r,i),gd(e,r,i,n),vd(null,e,r,!0,t,n);case 19:return dw(t,e,n);case 22:return lw(t,e,n)}throw Error(R(156,e.tag))};function Pw(t,e){return t0(t,e)}function yC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new yC(t,e,n,r)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _C(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===Lf)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return br(n.children,i,s,e);case Df:o=8,i|=8;break;case $h:return t=Nt(12,n,e,i|2),t.elementType=$h,t.lanes=s,t;case jh:return t=Nt(13,n,e,i),t.elementType=jh,t.lanes=s,t;case Bh:return t=Nt(19,n,e,i),t.elementType=Bh,t.lanes=s,t;case Fv:return $u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mv:o=10;break e;case bv:o=9;break e;case Of:o=11;break e;case Lf:o=14;break e;case bn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function br(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function $u(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Fv,t.lanes=n,t.stateNode={isHidden:!1},t}function ah(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function lh(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,r,i,s,o,a,l){return t=new vC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),t}function wC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kw(t){if(!t)return dr;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(ct(n))return k0(t,n,e)}return e}function Nw(t,e,n,r,i,s,o,a,l){return t=mp(n,r,!0,t,i,s,o,a,l),t.context=kw(null),n=t.current,r=nt(),i=rr(n),s=Tn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Xo(t,i,r),ht(t,r),t}function ju(t,e,n,r){var i=e.current,s=nt(),o=rr(i);return n=kw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(jt(t,i,o,s),hl(t,i,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function EC(){return null}var xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}Bu.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));ju(t,e,null,null)};Bu.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){ju(null,t,null,null)}),e[An]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=l0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&c0(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function TC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=eu(o);s.call(u)}}var o=Nw(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[An]=o.current,To(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=eu(l);a.call(u)}}var l=mp(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=l,t[An]=l.current,To(t.nodeType===8?t.parentNode:t),Wr(function(){ju(e,l,n,r)}),l}function Hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=eu(o);a.call(l)}}ju(e,o,t,i)}else o=TC(n,e,t,i,r);return eu(o)}o0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(bf(e,n|1),ht(e,ye()),!(G&6)&&(Ji=ye()+500,vr()))}break;case 13:Wr(function(){var r=Cn(t,1);if(r!==null){var i=nt();jt(r,t,1,i)}}),gp(t,1)}};Ff=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=nt();jt(e,t,134217728,n)}gp(t,134217728)}};a0=function(t){if(t.tag===13){var e=rr(t),n=Cn(t,e);if(n!==null){var r=nt();jt(n,t,e,r)}gp(t,e)}};l0=function(){return Y};u0=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Jh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(R(90));$v(r),Wh(r,i)}}}break;case"textarea":Bv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};Qv=hp;Xv=Wr;var IC={usingClientEntryPoint:!1,Events:[Jo,Ti,Lu,Kv,Gv,hp]},xs={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SC={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zv(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Nu=Wa.inject(SC),Zt=Wa}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(e))throw Error(R(200));return wC(t,e,null,n)};Rt.createRoot=function(t,e){if(!_p(t))throw Error(R(299));var n=!1,r="",i=xw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,To(t.nodeType===8?t.parentNode:t),new yp(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Zv(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Wr(t)};Rt.hydrate=function(t,e,n){if(!zu(e))throw Error(R(200));return Hu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!_p(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nw(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,To(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bu(e)};Rt.render=function(t,e,n){if(!zu(e))throw Error(R(200));return Hu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!zu(t))throw Error(R(40));return t._reactRootContainer?(Wr(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};Rt.unstable_batchedUpdates=hp;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zu(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Hu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Dw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dw)}catch(t){console.error(t)}}Dw(),Dv.exports=Rt;var RC=Dv.exports,ly=RC;Fh.createRoot=ly.createRoot,Fh.hydrateRoot=ly.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xo.apply(this,arguments)}var Gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gn||(Gn={}));const uy="popstate";function AC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ii(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),xd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:tu(s))}function r(i,s){vp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return PC(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CC(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function xd(t,e,n,r){return n===void 0&&(n=null),xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ii(e):e,{state:n,key:e&&e.key||r||CC()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ii(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(xo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Gn.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:m})}function d(v,m){a=Gn.Push;let p=xd(_.location,v,m);n&&n(p,v),u=c()+1;let g=cy(p,u),E=_.createHref(p);try{o.pushState(g,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function f(v,m){a=Gn.Replace;let p=xd(_.location,v,m);n&&n(p,v),u=c();let g=cy(p,u),E=_.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:tu(v);return p=p.replace(/ $/,"%20"),Ee(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,h),l=v,()=>{i.removeEventListener(uy,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let m=y(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(v){return o.go(v)}};return _}var hy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hy||(hy={}));function kC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ii(e):e,i=wp(r.pathname||"/",n);if(i==null)return null;let s=Ow(t);NC(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=BC(i);o=UC(s[a],l)}return o}function Ow(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ow(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:bC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Lw(s.path))i(s,o,l)}),e}function Lw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Lw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xC=/^:[\w-]+$/,DC=3,OC=2,LC=1,VC=10,MC=-2,dy=t=>t==="*";function bC(t,e){let n=t.split("/"),r=n.length;return n.some(dy)&&(r+=MC),e&&(r+=OC),n.filter(i=>!dy(i)).reduce((i,s)=>i+(xC.test(s)?DC:s===""?LC:VC),r)}function FC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$C({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:sr([i,c.pathname]),pathnameBase:qC(sr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=sr([i,c.pathnameBase]))}return s}function $C(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[h];return f&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function jC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ii(t):t;return{pathname:n?n.startsWith("/")?n:HC(n,e):e,search:KC(r),hash:GC(i)}}function HC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vw(t,e){let n=WC(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ii(t):(i=xo({},t),Ee(!i.pathname||!i.pathname.includes("?"),uh("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),uh("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=zC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),qC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bw=["post","put","patch","delete"];new Set(bw);const XC=["get",...bw];new Set(XC);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Do.apply(this,arguments)}const Ep=C.createContext(null),YC=C.createContext(null),si=C.createContext(null),Wu=C.createContext(null),oi=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Fw=C.createContext(null);function JC(t,e){let{relative:n}=e===void 0?{}:e;ea()||Ee(!1);let{basename:r,navigator:i}=C.useContext(si),{hash:s,pathname:o,search:a}=$w(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ea(){return C.useContext(Wu)!=null}function qu(){return ea()||Ee(!1),C.useContext(Wu).location}function Uw(t){C.useContext(si).static||C.useLayoutEffect(t)}function ZC(){let{isDataRoute:t}=C.useContext(oi);return t?dP():eP()}function eP(){ea()||Ee(!1);let t=C.useContext(Ep),{basename:e,future:n,navigator:r}=C.useContext(si),{matches:i}=C.useContext(oi),{pathname:s}=qu(),o=JSON.stringify(Vw(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Uw(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Mw(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:sr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function $w(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(si),{matches:i}=C.useContext(oi),{pathname:s}=qu(),o=JSON.stringify(Vw(i,r.v7_relativeSplatPath));return C.useMemo(()=>Mw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function tP(t,e){return nP(t,e)}function nP(t,e,n,r){ea()||Ee(!1);let{navigator:i}=C.useContext(si),{matches:s}=C.useContext(oi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=qu(),c;if(e){var h;let v=typeof e=="string"?ii(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||Ee(!1),c=v}else c=u;let d=c.pathname||"/",f=d;if(l!=="/"){let v=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=kC(t,{pathname:f}),_=aP(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:sr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:sr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&_?C.createElement(Wu.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gn.Pop}},_):_}function rP(){let t=hP(),e=QC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const iP=C.createElement(rP,null);class sP extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(oi.Provider,{value:this.props.routeContext},C.createElement(Fw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oP(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(oi.Provider,{value:e},r)}function aP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||Ee(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:f}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let f,y=!1,_=null,v=null;n&&(f=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||iP,l&&(u<0&&d===0?(y=!0,v=null):u===d&&(y=!0,v=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),p=()=>{let g;return f?g=_:y?g=v:h.route.Component?g=C.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,C.createElement(oP,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?C.createElement(sP,{location:n.location,revalidation:n.revalidation,component:_,error:f,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var jw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(jw||{}),nu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nu||{});function lP(t){let e=C.useContext(Ep);return e||Ee(!1),e}function uP(t){let e=C.useContext(YC);return e||Ee(!1),e}function cP(t){let e=C.useContext(oi);return e||Ee(!1),e}function Bw(t){let e=cP(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function hP(){var t;let e=C.useContext(Fw),n=uP(nu.UseRouteError),r=Bw(nu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function dP(){let{router:t}=lP(jw.UseNavigateStable),e=Bw(nu.UseNavigateStable),n=C.useRef(!1);return Uw(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Do({fromRouteId:e},s)))},[t,e])}function _l(t){Ee(!1)}function fP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gn.Pop,navigator:s,static:o=!1,future:a}=t;ea()&&Ee(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:Do({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ii(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:y="default"}=r,_=C.useMemo(()=>{let v=wp(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:f,key:y},navigationType:i}},[l,c,h,d,f,y,i]);return _==null?null:C.createElement(si.Provider,{value:u},C.createElement(Wu.Provider,{children:n,value:_}))}function pP(t){let{children:e,location:n}=t;return tP(Dd(e),n)}new Promise(()=>{});function Dd(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Dd(r.props.children,s));return}r.type!==_l&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Dd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Od.apply(this,arguments)}function mP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function gP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yP(t,e){return t.button===0&&(!e||e==="_self")&&!gP(t)}const _P=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vP="6";try{window.__reactRouterVersion=vP}catch{}const wP="startTransition",fy=xh[wP];function EP(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=AC({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(h=>{u&&fy?fy(()=>l(h)):l(h)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(fP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const TP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SP=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=mP(e,_P),{basename:f}=C.useContext(si),y,_=!1;if(typeof u=="string"&&IP.test(u)&&(y=u,TP))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),T=wp(E.pathname,f);E.origin===g.origin&&T!=null?u=T+E.search+E.hash:_=!0}catch{}let v=JC(u,{relative:i}),m=RP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(g){r&&r(g),g.defaultPrevented||m(g)}return C.createElement("a",Od({},d,{href:y||v,onClick:_||s?r:p,ref:n,target:l}))});var py;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(py||(py={}));var my;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(my||(my={}));function RP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=ZC(),u=qu(),c=$w(t,{relative:o});return C.useCallback(h=>{if(yP(h,n)){h.preventDefault();let d=r!==void 0?r:tu(u)===tu(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new CP;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PP=function(t){const e=zw(t);return Hw.encodeByteArray(e,!0)},ru=function(t){return PP(t).replace(/\./g,"")},Ww=function(t){try{return Hw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=()=>kP().__FIREBASE_DEFAULTS__,xP=()=>{if(typeof process>"u"||typeof gy>"u")return;const t=gy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},Ku=()=>{try{return NP()||xP()||DP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qw=t=>{var e,n;return(n=(e=Ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kw=t=>{const e=qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gw=()=>{var t;return(t=Ku())===null||t===void 0?void 0:t.config},Qw=t=>{var e;return(e=Ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function VP(){var t;const e=(t=Ku())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FP(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UP(){return!VP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $P(){try{return typeof indexedDB=="object"}catch{return!1}}function jP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BP,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function zP(t,e){return t.replace(HP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HP=/\{\$([^}]+)}/g;function WP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yy(s)&&yy(o)){if(!Zi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qP(t,e){const n=new KP(t,e);return n.subscribe.bind(n)}class KP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ch),i.error===void 0&&(i.error=ch),i.complete===void 0&&(i.complete=ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YP(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XP(t){return t===kr?void 0:t}function YP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const ZP={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},ek=q.INFO,tk={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tp{constructor(e){this.name=e,this._logLevel=ek,this._logHandler=nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const rk=(t,e)=>e.some(n=>t instanceof n);let _y,vy;function ik(){return _y||(_y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return vy||(vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yw=new WeakMap,Ld=new WeakMap,Jw=new WeakMap,hh=new WeakMap,Ip=new WeakMap;function ok(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yw.set(n,t)}).catch(()=>{}),Ip.set(e,t),e}function ak(t){if(Ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ld.set(t,e)}let Vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lk(t){Vd=t(Vd)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return Jw.set(r,e.sort?e.sort():[e]),or(r)}:sk().includes(t)?function(...e){return t.apply(dh(this),e),or(Yw.get(this))}:function(...e){return or(t.apply(dh(this),e))}}function ck(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&ak(t),rk(t,ik())?new Proxy(t,Vd):t)}function or(t){if(t instanceof IDBRequest)return ok(t);if(hh.has(t))return hh.get(t);const e=ck(t);return e!==t&&(hh.set(t,e),Ip.set(e,t)),e}const dh=t=>Ip.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dk=["get","getKey","getAll","getAllKeys","count"],fk=["put","add","delete","clear"],fh=new Map;function wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fh.set(e,s),s}lk(t=>({...t,get:(e,n,r)=>wy(e,n)||t.get(e,n,r),has:(e,n)=>!!wy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Ey="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Tp("@firebase/app"),gk="@firebase/app-compat",yk="@firebase/analytics-compat",_k="@firebase/analytics",vk="@firebase/app-check-compat",wk="@firebase/app-check",Ek="@firebase/auth",Tk="@firebase/auth-compat",Ik="@firebase/database",Sk="@firebase/database-compat",Rk="@firebase/functions",Ak="@firebase/functions-compat",Ck="@firebase/installations",Pk="@firebase/installations-compat",kk="@firebase/messaging",Nk="@firebase/messaging-compat",xk="@firebase/performance",Dk="@firebase/performance-compat",Ok="@firebase/remote-config",Lk="@firebase/remote-config-compat",Vk="@firebase/storage",Mk="@firebase/storage-compat",bk="@firebase/firestore",Fk="@firebase/firestore-compat",Uk="firebase",$k="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="[DEFAULT]",jk={[Md]:"fire-core",[gk]:"fire-core-compat",[_k]:"fire-analytics",[yk]:"fire-analytics-compat",[wk]:"fire-app-check",[vk]:"fire-app-check-compat",[Ek]:"fire-auth",[Tk]:"fire-auth-compat",[Ik]:"fire-rtdb",[Sk]:"fire-rtdb-compat",[Rk]:"fire-fn",[Ak]:"fire-fn-compat",[Ck]:"fire-iid",[Pk]:"fire-iid-compat",[kk]:"fire-fcm",[Nk]:"fire-fcm-compat",[xk]:"fire-perf",[Dk]:"fire-perf-compat",[Ok]:"fire-rc",[Lk]:"fire-rc-compat",[Vk]:"fire-gcs",[Mk]:"fire-gcs-compat",[bk]:"fire-fst",[Fk]:"fire-fst-compat","fire-js":"fire-js",[Uk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map,Bk=new Map,Fd=new Map;function Ty(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(Fd.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,t);for(const n of iu.values())Ty(n,t);for(const n of Bk.values())Ty(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new ta("app","Firebase",zk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=$k;function Zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=Gw()),!n)throw ar.create("no-options");const s=iu.get(i);if(s){if(Zi(n,s.options)&&Zi(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new JP(i);for(const l of Fd.values())o.addComponent(l);const a=new Hk(n,r,o);return iu.set(i,a),a}function Sp(t=bd){const e=iu.get(t);if(!e&&t===bd&&Gw())return Zw();if(!e)throw ar.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=jk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}Kr(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-heartbeat-database",qk=1,Oo="firebase-heartbeat-store";let ph=null;function eE(){return ph||(ph=hk(Wk,qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),ph}async function Kk(t){try{const n=(await eE()).transaction(Oo),r=await n.objectStore(Oo).get(tE(t));return await n.done,r}catch(e){if(e instanceof cn)qr.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(n.message)}}}async function Iy(t,e){try{const r=(await eE()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,tE(t)),await r.done}catch(n){if(n instanceof cn)qr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function tE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=1024,Qk=30*24*60*60*1e3;class Xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sy(),{heartbeatsToSend:r,unsentEntries:i}=Yk(this._heartbeatsCache.heartbeats),s=ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sy(){return new Date().toISOString().substring(0,10)}function Yk(t,e=Gk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ry(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $P()?jP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ry(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t){Kr(new fr("platform-logger",e=>new pk(e),"PRIVATE")),Kr(new fr("heartbeat",e=>new Xk(e),"PRIVATE")),tn(Md,Ey,t),tn(Md,Ey,"esm2017"),tn("fire-js","")}Zk("");function Rp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eN=nE,rE=new ta("auth","Firebase",nE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Tp("@firebase/auth");function tN(t,...e){su.logLevel<=q.WARN&&su.warn(`Auth (${ai}): ${t}`,...e)}function vl(t,...e){su.logLevel<=q.ERROR&&su.error(`Auth (${ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Ap(t,...e)}function nn(t,...e){return Ap(t,...e)}function iE(t,e,n){const r=Object.assign(Object.assign({},eN()),{[e]:n});return new ta("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return iE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ap(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rE.create(t,...e)}function M(t,e,...n){if(!t)throw Ap(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function kn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nN(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nN()||MP()||"connection"in navigator)?navigator.onLine:!0}function iN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=LP()||bP()}get(){return rN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new ra(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,i={}){return oE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sE.fetch()(aE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function oE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sN),e);try{const i=new lN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iE(t,c,u);Ht(t,c)}}catch(i){if(i instanceof cn)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function ia(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cp(t.config,i):`${t.config.apiScheme}://${i}`}function aN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),oN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function Cy(t){return t!==void 0&&t.enterprise!==void 0}class uN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cN(t,e){return Ln(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function lE(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dN(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=Pp(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(mh(i.auth_time)),issuedAtTime:io(mh(i.iat)),expirationTime:io(mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function Pp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(vl("Failed to decode base64 JWT payload"),null)}catch(i){return vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Py(t){const e=Pp(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&fN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await es(t,lE(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uE(s.providerUserInfo):[],a=gN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $d(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function mN(t){const e=ue(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uE(t){return t.map(e=>{var{providerId:n}=e,r=Rp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){const n=await oE(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _N(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Py(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $d(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dN(this,e)}reload(){return mN(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await es(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:A,stsTokenManager:P}=n;M(g&&P,e,"internal-error");const k=bi.fromJSON(this.name,P);M(typeof g=="string",e,"internal-error"),Mn(h,e.name),Mn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),Mn(f,e.name),Mn(y,e.name),Mn(_,e.name),Mn(v,e.name),Mn(m,e.name),Mn(p,e.name);const X=new yn({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:k,createdAt:m,lastLoginAt:p});return A&&Array.isArray(A)&&(X.providerData=A.map(j=>Object.assign({},j))),v&&(X._redirectEventId=v),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bi;a.updateFromIdToken(r);const l=new yn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $d(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;function _n(t){kn(t instanceof Function,"Expected a class definition");let e=ky.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ky.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Ny=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wl(this.userKey,i.apiKey,s),this.fullPersistenceKey=wl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(_n(Ny),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(Ny);const o=wl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=yn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mE(e))return"Blackberry";if(gE(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||dE(e))&&!e.includes("edge/"))return"Chrome";if(pE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hE(t=Be()){return/firefox\//i.test(t)}function kp(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dE(t=Be()){return/crios\//i.test(t)}function fE(t=Be()){return/iemobile/i.test(t)}function pE(t=Be()){return/android/i.test(t)}function mE(t=Be()){return/blackberry/i.test(t)}function gE(t=Be()){return/webos/i.test(t)}function Qu(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vN(t=Be()){var e;return Qu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wN(){return FP()&&document.documentMode===10}function yE(t=Be()){return Qu(t)||pE(t)||gE(t)||mE(t)||/windows phone/i.test(t)||fE(t)}function EN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e=[]){let n;switch(t){case"Browser":n=xy(Be());break;case"Worker":n=`${xy(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=6;class RN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lE(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(In(this));const n=e?ue(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IN(this),n=new RN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _N(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return ue(t)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=qP(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CN(t){Xu=t}function vE(t){return Xu.loadJS(t)}function PN(){return Xu.recaptchaEnterpriseScript}function kN(){return Xu.gapiScript}function NN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xN="recaptcha-enterprise",DN="NO_RECAPTCHA";class ON{constructor(e){this.type=xN,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new uN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Cy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(DN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Cy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PN();l.length!==0&&(l+=a),vE(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Oy(t,e,n,r=!1){const i=new ON(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Oy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Oy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zi(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function VN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MN(t,e,n){const r=li(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=wE(e),{host:o,port:a}=bN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FN()}function wE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=wE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ly(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ly(o)}}}function Ly(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function UN(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return ia(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function BN(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Np{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,n,"signInWithPassword",$N);case"emailLink":return jN(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,r,"signUpPassword",UN);case"emailLink":return BN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return ia(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="http://localhost";class Gr extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:zN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WN(t){const e=Bs(zs(t)).link,n=e?Bs(zs(e)).deep_link_id:null,r=Bs(zs(t)).deep_link_id;return(r?Bs(zs(r)).link:null)||r||n||e||t}class xp{constructor(e){var n,r,i,s,o,a;const l=Bs(zs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HN((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WN(e);try{return new xp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xp.parseLink(n);return M(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends EE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends sa{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends sa{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends sa{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){return ia(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yn._fromIdTokenResponse(e,r,i),o=Vy(r);return new Qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vy(r);return new Qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function TE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function KN(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await es(t,TE(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Pp(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r="signIn",i=await TE(t,r,e),s=await Qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QN(t,e){return IE(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XN(t,e,n){if(Xt(t.app))return Promise.reject(In(t));const r=li(t),o=await jd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&SE(t),l}),a=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function YN(t,e,n){return Xt(t.app)?Promise.reject(In(t)):QN(ue(t),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&SE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ue(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await es(r,JN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ex(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function tx(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function nx(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function rx(t){return ue(t).signOut()}const lu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){const t=Be();return kp(t)||Qu(t)}const sx=1e3,ox=10;class AE extends RE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ix()&&EN(),this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ox):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AE.type="LOCAL";const ax=AE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends RE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CE.type="SESSION";const PE=CE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function cx(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function hx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fx(){return kE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebaseLocalStorageDb",px=1,uu="firebaseLocalStorage",xE="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ju(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function mx(){const t=indexedDB.deleteDatabase(NE);return new oa(t).toPromise()}function Bd(){const t=indexedDB.open(NE,px);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await mx(),e(await Bd()))})})}async function My(t,e,n){const r=Ju(t,!0).put({[xE]:e,value:n});return new oa(r).toPromise()}async function gx(t,e){const n=Ju(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function by(t,e){const n=Ju(t,!0).delete(e);return new oa(n).toPromise()}const yx=800,_x=3;class DE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_x)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(fx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hx(),!this.activeServiceWorker)return;this.sender=new ux(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await My(e,lu,"1"),await by(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>My(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>by(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ju(i,!1).getAll();return new oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DE.type="LOCAL";const vx=DE;new ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e){return e?_n(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ex(t){return IE(t.auth,new Op(t),t.bypassAuthState)}function Tx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),GN(n,new Op(t),t.bypassAuthState)}async function Ix(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),KN(n,new Op(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ex;case"linkViaPopup":case"linkViaRedirect":return Ix;case"reauthViaPopup":case"reauthViaRedirect":return Tx;default:Ht(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new ra(2e3,1e4);class ki extends OE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Dp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sx.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="pendingRedirect",El=new Map;class Ax extends OE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await Cx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cx(t,e){const n=Nx(e),r=kx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Px(t,e){El.set(t._key(),e)}function kx(t){return _n(t._redirectPersistence)}function Nx(t){return wl(Rx,t.config.apiKey,t.name)}async function xx(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r=li(t),i=wx(r,e),o=await new Ax(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=10*60*1e3;class Ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bx=/^https?/;async function Fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vx(t);for(const n of e)try{if(Ux(n))return}catch{}Ht(t,"unauthorized-domain")}function Ux(t){const e=Ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bx.test(n))return!1;if(Mx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=new ra(3e4,6e4);function Uy(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jx(t){return new Promise((e,n)=>{var r,i,s;function o(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),n(nn(t,"network-request-failed"))},timeout:$x.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=NN("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},vE(`${kN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function Bx(t){return Tl=Tl||jx(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new ra(5e3,15e3),Hx="__/auth/iframe",Wx="emulator/auth/iframe",qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gx(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cp(e,Wx):`https://${t.config.authDomain}/${Hx}`,r={apiKey:e.apiKey,appName:t.name,v:ai},i=Kx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${na(r).slice(1)}`}async function Qx(t){const e=await Bx(t),n=rn().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Gx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},zx.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yx=500,Jx=600,Zx="_blank",eD="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tD(t,e,n,r=Yx,i=Jx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Xx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=dE(u)?Zx:n),hE(u)&&(e=e||eD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(vN(u)&&a!=="_self")return nD(e||"",a),new $y(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new $y(h)}function nD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="__/auth/handler",iD="emulator/auth/handler",sD=encodeURIComponent("fac");async function jy(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:i};if(e instanceof EE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof sa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${sD}=${encodeURIComponent(l)}`:"";return`${oD(t)}?${na(a).slice(1)}${u}`}function oD({config:t}){return t.emulator?Cp(t,iD):`https://${t.authDomain}/${rD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class aD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PE,this._completeRedirectFn=xx,this._overrideRedirectResult=Px}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jy(e,n,r,Ud(),i);return tD(e,o,Dp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jy(e,n,r,Ud(),i);return cx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Qx(e),r=new Ox(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gh,{type:gh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gh];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yE()||kp()||Qu()}}const lD=aD;var By="@firebase/auth",zy="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hD(t){Kr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_E(t)},u=new AN(r,i,s,l);return VN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new fr("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new uD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(By,zy,cD(t)),tn(By,zy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=5*60,fD=Qw("authIdTokenMaxAge")||dD;let Hy=null;const pD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fD)return;const i=n==null?void 0:n.token;Hy!==i&&(Hy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mD(t=Sp()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LN(t,{popupRedirectResolver:lD,persistence:[vx,ax,PE]}),r=Qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pD(s.toString());tx(n,o,()=>o(n.currentUser)),ex(n,a=>o(a))}}const i=qw("auth");return i&&MN(n,`http://${i}`),n}function gD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hD("Browser");var yD="firebase",_D="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(yD,_D,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebasestorage.googleapis.com",ME="storageBucket",vD=2*60*1e3,wD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends cn{constructor(e,n,r=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function yh(t){return"storage/"+t}function Lp(){const t="An unknown error occurred, please check the error payload for server response.";return new me(fe.UNKNOWN,t)}function ED(t){return new me(fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TD(t){return new me(fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ID(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(fe.UNAUTHENTICATED,t)}function SD(){return new me(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RD(t){return new me(fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function AD(){return new me(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CD(){return new me(fe.CANCELED,"User canceled the upload/download.")}function PD(t){return new me(fe.INVALID_URL,"Invalid URL '"+t+"'.")}function kD(t){return new me(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ND(){return new me(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ME+"' property when initializing the app?")}function xD(){return new me(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DD(){return new me(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OD(t){return new me(fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zd(t){return new me(fe.INVALID_ARGUMENT,t)}function bE(){return new me(fe.APP_DELETED,"The Firebase app was deleted.")}function LD(t){return new me(fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function so(t,e){return new me(fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ds(t){throw new me(fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(r.path==="")return r;throw kD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===VE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${v}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:f,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const T=g[E],A=T.regex.exec(e);if(A){const P=A[T.indices.bucket];let k=A[T.indices.path];k||(k=""),r=new yt(P,k),T.postModify(r);break}}if(r==null)throw PD(e);return r}}class VD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...v){u||(u=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){s&&clearTimeout(s)}function f(v,...m){if(u){d();return}if(v){d(),c.call(null,v,...m);return}if(l()||o){d(),c.call(null,v,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function _(v){y||(y=!0,d(),!u&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function bD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){return t!==void 0}function UD(t){return typeof t=="object"&&!Array.isArray(t)}function Vp(t){return typeof t=="string"||t instanceof String}function Wy(t){return Mp()&&t instanceof Blob}function Mp(){return typeof Blob<"u"}function qy(t,e,n,r){if(r<e)throw zd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fr||(Fr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ka(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fr.NO_ERROR,l=s.getStatus();if(!a||$D(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Fr.ABORT;r(!1,new Ka(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ka(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Lp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?bE():CD();o(l)}else{const l=AD();o(l)}};this.canceled_?n(!1,new Ka(!1,null,!0)):this.backoffId_=MD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function BD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function WD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qD(t,e,n,r,i,s,o=!0){const a=FE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return HD(u,e),BD(u,n),zD(u,s),WD(u,r),new jD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GD(...t){const e=KD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mp())return new Blob(t);throw new me(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){if(typeof atob>"u")throw OD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _h{constructor(e,n){this.data=e,this.contentType=n||null}}function UE(t,e){switch(t){case Ut.RAW:return new _h($E(e));case Ut.BASE64:case Ut.BASE64URL:return new _h(jE(t,e));case Ut.DATA_URL:return new _h(JD(e),ZD(e))}throw Lp()}function $E(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function YD(t){let e;try{e=decodeURIComponent(t)}catch{throw so(Ut.DATA_URL,"Malformed data URL.")}return $E(e)}function jE(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw so(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw so(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XD(e)}catch(i){throw i.message.includes("polyfill")?i:so(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw so(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function JD(t){const e=new BE(t);return e.base64?jE(Ut.BASE64,e.rest):YD(e.rest)}function ZD(t){return new BE(t).contentType}function eO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){let r=0,i="";Wy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wy(this.data_)){const r=this.data_,i=QD(r,e,n);return i===null?null:new Wn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wn(r,!0)}}static getBlob(...e){if(Mp()){const n=e.map(r=>r instanceof Wn?r.data_:r);return new Wn(GD.apply(null,n))}else{const n=e.map(o=>Vp(o)?UE(Ut.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){let e;try{e=JSON.parse(t)}catch{return null}return UD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function HE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t,e){return e}class Ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||rO}}let Ga=null;function iO(t){return!Vp(t)||t.length<2?t:HE(t)}function WE(){if(Ga)return Ga;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(s,o){return iO(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,t.push(i),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Ga=t,Ga}function sO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function oO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return sO(r,t),r}function qE(t,e,n){const r=zE(e);return r===null?null:oO(t,r,n)}function aO(t,e,n,r){const i=zE(e);if(i===null||!Vp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Zu(d,n,r),y=FE({alt:"media",token:u});return f+y})[0]}function lO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bp{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){if(!t)throw Lp()}function uO(t,e){function n(r,i){const s=qE(t,i,e);return KE(s!==null),s}return n}function cO(t,e){function n(r,i){const s=qE(t,i,e);return KE(s!==null),aO(s,i,t.host,t._protocol)}return n}function GE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=SD():i=ID():n.getStatus()===402?i=TD(t.bucket):n.getStatus()===403?i=RD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function QE(t){const e=GE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ED(t.path)),s.serverResponse=i.serverResponse,s}return n}function hO(t,e,n){const r=e.fullServerUrl(),i=Zu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new bp(i,s,cO(t,n),o);return a.errorHandler=QE(e),a}function dO(t,e){const n=e.fullServerUrl(),r=Zu(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new bp(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=QE(e),a}function fO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=fO(null,e)),r}function mO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=pO(e,r,i),c=lO(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Wn.getBlob(h,r,d);if(f===null)throw xD();const y={name:u.fullPath},_=Zu(s,t.host,t._protocol),v="POST",m=t.maxUploadRetryTime,p=new bp(_,v,uO(t,n),m);return p.urlParams=y,p.headers=o,p.body=f.uploadData(),p.errorHandler=GE(e),p}class gO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ds("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ds("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ds("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ds("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ds("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yO extends gO{initXhr(){this.xhr_.responseType="text"}}function Fp(){return new yO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xr(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HE(this._location.path)}get storage(){return this._service}get parent(){const e=tO(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new Xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LD(e)}}function XE(t,e,n){t._throwIfRoot("uploadBytes");const r=mO(t.storage,t._location,WE(),new Wn(e,!0),n);return t.storage.makeRequestWithTokens(r,Fp).then(i=>({metadata:i,ref:t}))}function _O(t,e,n=Ut.RAW,r){t._throwIfRoot("uploadString");const i=UE(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),XE(t,i.data,s)}function vO(t){t._throwIfRoot("getDownloadURL");const e=hO(t.storage,t._location,WE());return t.storage.makeRequestWithTokens(e,Fp).then(n=>{if(n===null)throw DD();return n})}function wO(t){t._throwIfRoot("deleteObject");const e=dO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fp)}function EO(t,e){const n=nO(t._location.path,e),r=new yt(t._location.bucket,n);return new Xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){return/^[A-Za-z]+:\/\//.test(t)}function IO(t,e){return new Xr(t,e)}function YE(t,e){if(t instanceof Up){const n=t;if(n._bucket==null)throw ND();const r=new Xr(n,n._bucket);return e!=null?YE(r,e):r}else return e!==void 0?EO(t,e):t}function SO(t,e){if(e&&TO(e)){if(t instanceof Up)return IO(t,e);throw zd("To use ref(service, url), the first argument must be a Storage instance.")}else return YE(t,e)}function Ky(t,e){const n=e==null?void 0:e[ME];return n==null?null:yt.makeFromBucketSpec(n,t)}function RO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xw(i,t.app.options.projectId))}class Up{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=VE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vD,this._maxUploadRetryTime=wD,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new VD(bE());{const o=qD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gy="@firebase/storage",Qy="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="storage";function AO(t,e,n){return t=ue(t),XE(t,e,n)}function CO(t,e,n,r){return t=ue(t),_O(t,e,n,r)}function Xy(t){return t=ue(t),vO(t)}function PO(t){return t=ue(t),wO(t)}function Hd(t,e){return t=ue(t),SO(t,e)}function Wd(t=Sp(),e){t=ue(t);const r=Gu(t,JE).getImmediate({identifier:e}),i=Kw("storage");return i&&kO(r,...i),r}function kO(t,e,n,r={}){RO(t,e,n,r)}function NO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Up(n,r,i,e,ai)}function xO(){Kr(new fr(JE,NO,"PUBLIC").setMultipleInstances(!0)),tn(Gy,Qy,""),tn(Gy,Qy,"esm2017")}xO();var DO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,$p=$p||{},b=DO||self;function ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OO(t){return Object.prototype.hasOwnProperty.call(t,vh)&&t[vh]||(t[vh]=++LO)}var vh="closure_uid_"+(1e9*Math.random()>>>0),LO=0;function VO(t,e,n){return t.call.apply(t.bind,arguments)}function MO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=VO:Qe=MO,Qe.apply(null,arguments)}function Qa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Er(){this.s=this.s,this.o=this.o}var bO=0;Er.prototype.s=!1;Er.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bO!=0)&&OO(this)};Er.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ZE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ec(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var FO=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};b.addEventListener("test",n,e),b.removeEventListener("test",n,e)}catch{}return t}();function Vo(t){return/^[\s\xa0]*$/.test(t)}function nc(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return nc().indexOf(t)!=-1}function Bp(t){return Bp[" "](t),t}Bp[" "]=function(){};function UO(t,e){var n=D2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $O=Qt("Opera"),ts=Qt("Trident")||Qt("MSIE"),e1=Qt("Edge"),qd=e1||ts,t1=Qt("Gecko")&&!(nc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),jO=nc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function n1(){var t=b.document;return t?t.documentMode:void 0}var Kd;e:{var wh="",Eh=function(){var t=nc();if(t1)return/rv:([^\);]+)(\)|;)/.exec(t);if(e1)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jO)return/WebKit\/(\S+)/.exec(t);if($O)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Eh&&(wh=Eh?Eh[1]:""),ts){var Th=n1();if(Th!=null&&Th>parseFloat(wh)){Kd=String(Th);break e}}Kd=wh}var Gd;if(b.document&&ts){var Jy=n1();Gd=Jy||parseInt(Kd,10)||void 0}else Gd=void 0;var BO=Gd;function Mo(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(t1){e:{try{Bp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mo.$.h.call(this)}}xe(Mo,Xe);var zO={2:"touch",3:"pen",4:"mouse"};Mo.prototype.h=function(){Mo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rc="closure_listenable_"+(1e6*Math.random()|0),HO=0;function WO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++HO,this.fa=this.ia=!1}function ic(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function r1(t){const e={};for(const n in t)e[n]=t[n];return e}const Zy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function i1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Zy.length;s++)n=Zy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function sc(t){this.src=t,this.g={},this.h=0}sc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new WO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Qd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ZE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ic(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Hp="closure_lm_"+(1e6*Math.random()|0),Ih={};function s1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)s1(t,e[s],n,r,i);return null}return n=l1(n),t&&t[rc]?t.O(e,n,tc(r)?!!r.capture:!!r,i):KO(t,e,n,!1,r,i)}function KO(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=tc(i)?!!i.capture:!!i,a=qp(t);if(a||(t[Hp]=a=new sc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(a1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GO(){function t(n){return e.call(t.src,t.listener,n)}const e=QO;return t}function o1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)o1(t,e[s],n,r,i);else r=tc(r)?!!r.capture:!!r,n=l1(n),t&&t[rc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xd(s,n,r,i),-1<n&&(ic(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xd(e,n,r,i)),(n=-1<t?e[t]:null)&&Wp(n))}function Wp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[rc])Qd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(a1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qp(e))?(Qd(n,t),n.h==0&&(n.src=null,e[Hp]=null)):ic(t)}}}function a1(t){return t in Ih?Ih[t]:Ih[t]="on"+t}function QO(t,e){if(t.fa)t=!0;else{e=new Mo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wp(t),t=n.call(r,e)}return t}function qp(t){return t=t[Hp],t instanceof sc?t:null}var Sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function l1(t){return typeof t=="function"?t:(t[Sh]||(t[Sh]=function(e){return t.handleEvent(e)}),t[Sh])}function Ne(){Er.call(this),this.i=new sc(this),this.S=this,this.J=null}xe(Ne,Er);Ne.prototype[rc]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){o1(this,t,e,n,r)};function Ue(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),i1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xa(o,r,!0,e)&&i}if(o=e.g=t,i=Xa(o,r,!0,e)&&i,i=Xa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Xa(o,r,!1,e)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ic(n[r]);delete t.g[e],t.h--}}this.J=null};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kp=b.JSON.stringify;class XO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function YO(){var t=Gp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JO{constructor(){this.h=this.g=null}add(e,n){const r=u1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var u1=new XO(()=>new ZO,t=>t.reset());class ZO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function t2(t){b.setTimeout(()=>{throw t},0)}let bo,Fo=!1,Gp=new JO,c1=()=>{const t=b.Promise.resolve(void 0);bo=()=>{t.then(n2)}};var n2=()=>{for(var t;t=YO();){try{t.h.call(t.g)}catch(n){t2(n)}var e=u1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fo=!1};function oc(t,e){Ne.call(this),this.h=t||1,this.g=e||b,this.j=Qe(this.qb,this),this.l=Date.now()}xe(oc,Ne);N=oc.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(Qp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){oc.$.N.call(this),Qp(this),delete this.g};function Xp(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function h1(t){t.g=Xp(()=>{t.g=null,t.i&&(t.i=!1,h1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class r2 extends Er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:h1(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Er.call(this),this.h=t,this.g={}}xe(Uo,Er);var e_=[];function d1(t,e,n,r){Array.isArray(n)||(n&&(e_[0]=n.toString()),n=e_);for(var i=0;i<n.length;i++){var s=s1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function f1(t){zp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wp(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),f1(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ac(){this.g=!0}ac.prototype.Ea=function(){this.g=!1};function i2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function s2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+a2(t,n)+(r?" "+r:"")})}function o2(t,e){t.info(function(){return"TIMEOUT: "+e})}ac.prototype.info=function(){};function a2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kp(n)}catch{return e}}var ui={},t_=null;function lc(){return t_=t_||new Ne}ui.Ta="serverreachability";function p1(t){Xe.call(this,ui.Ta,t)}xe(p1,Xe);function $o(t){const e=lc();Ue(e,new p1(e))}ui.STAT_EVENT="statevent";function m1(t,e){Xe.call(this,ui.STAT_EVENT,t),this.stat=e}xe(m1,Xe);function tt(t){const e=lc();Ue(e,new m1(e,t))}ui.Ua="timingevent";function g1(t,e){Xe.call(this,ui.Ua,t),this.size=e}xe(g1,Xe);function aa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var uc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},y1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yp(){}Yp.prototype.h=null;function n_(t){return t.h||(t.h=t.i())}function _1(){}var la={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jp(){Xe.call(this,"d")}xe(Jp,Xe);function Zp(){Xe.call(this,"c")}xe(Zp,Xe);var Yd;function cc(){}xe(cc,Yp);cc.prototype.g=function(){return new XMLHttpRequest};cc.prototype.i=function(){return{}};Yd=new cc;function ua(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=l2,t=qd?125:void 0,this.V=new oc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new v1}function v1(){this.i=null,this.g="",this.h=!1}var l2=45e3,w1={},Jd={};N=ua.prototype;N.setTimeout=function(t){this.P=t};function Zd(t,e,n){t.L=1,t.A=dc(Nn(e)),t.u=n,t.S=!0,E1(t,null)}function E1(t,e){t.G=Date.now(),ca(t),t.B=Nn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),k1(n.i,"t",r),t.o=0,n=t.l.J,t.h=new v1,t.g=X1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new r2(Qe(t.Pa,t,t.g),t.O)),d1(t.U,t.g,"readystatechange",t.nb),e=t.I?r1(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),$o(),i2(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Yt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=Yt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||qd||this.g&&(this.h.h||this.g.ja()||o_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?$o(3):$o(2)),hc(this);var n=this.g.da();this.ca=n;t:if(T1(this)){var r=o_(this.g);t="";var i=r.length,s=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),oo(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,s2(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ef(this,n);else{this.i=!1,this.s=3,tt(12),Or(this),oo(this);break e}}this.S?(I1(this,c,o),qd&&this.i&&c==3&&(d1(this.U,this.V,"tick",this.mb),this.V.start())):(Ni(this.j,this.m,o,null),ef(this,o)),c==4&&Or(this),this.i&&!this.J&&(c==4?q1(this.l,this):(this.i=!1,ca(this)))}else k2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Or(this),oo(this)}}}catch{}finally{}};function T1(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function I1(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=u2(t,n),i==Jd){e==4&&(t.s=4,tt(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==w1){t.s=4,tt(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),ef(t,i);T1(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sm(e),e.M=!0,tt(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),Or(t),oo(t))}N.mb=function(){if(this.g){var t=Yt(this.g),e=this.g.ja();this.o<e.length&&(hc(this),I1(this,t,e),this.i&&t!=4&&ca(this))}};function u2(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Jd:(n=Number(e.substring(n,r)),isNaN(n)?w1:(r+=1,r+n>e.length?Jd:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,Or(this)};function ca(t){t.Y=Date.now()+t.P,S1(t,t.P)}function S1(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=aa(Qe(t.lb,t),e)}function hc(t){t.C&&(b.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(o2(this.j,this.B),this.L!=2&&($o(),tt(17)),Or(this),this.s=2,oo(this)):S1(this,this.Y-t)};function oo(t){t.l.H==0||t.J||q1(t.l,t)}function Or(t){hc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qp(t.V),f1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ef(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tf(n.i,t))){if(!t.K&&tf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)du(n),mc(n);else break e;im(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=aa(Qe(n.ib,n),6e3));if(1>=D1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lr(n,11)}else if((t.K||n.g==t)&&du(n),!Vo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(em(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,re(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Q1(r,r.J?r.pa:null,r.Y),o.K){O1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(hc(a),ca(a)),r.g=o}else H1(r);0<n.j.length&&gc(n)}else u[0]!="stop"&&u[0]!="close"||Lr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lr(n,7):rm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}$o(4)}catch{}}function c2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function h2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function R1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=h2(t),r=c2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var A1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ur(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ur){this.h=t.h,cu(this,t.j),this.s=t.s,this.g=t.g,hu(this,t.m),this.l=t.l;var e=t.i,n=new jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),r_(this,n),this.o=t.o}else t&&(e=String(t).match(A1))?(this.h=!1,cu(this,e[1]||"",!0),this.s=Hs(e[2]||""),this.g=Hs(e[3]||"",!0),hu(this,e[4]),this.l=Hs(e[5]||"",!0),r_(this,e[6]||"",!0),this.o=Hs(e[7]||"")):(this.h=!1,this.i=new jo(null,this.h))}Ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ws(e,i_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ws(e,i_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ws(n,n.charAt(0)=="/"?m2:p2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ws(n,y2)),t.join("")};function Nn(t){return new Ur(t)}function cu(t,e,n){t.j=n?Hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function r_(t,e,n){e instanceof jo?(t.i=e,_2(t.i,t.h)):(n||(e=Ws(e,g2)),t.i=new jo(e,t.h))}function re(t,e,n){t.i.set(e,n)}function dc(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ws(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,f2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function f2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var i_=/[#\/\?@]/g,p2=/[#\?:]/g,m2=/[#\?]/g,g2=/[#\?@]/g,y2=/#/g;function jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&d2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=jo.prototype;N.add=function(t,e){Tr(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function C1(t,e){Tr(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function P1(t,e){return Tr(t),e=ms(t,e),t.g.has(e)}N.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){Tr(this);let e=[];if(typeof t=="string")P1(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Tr(this),this.i=null,t=ms(this,t),P1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function k1(t,e,n){C1(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),jp(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _2(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(C1(this,r),k1(this,i,n))},t)),t.j=e}var v2=class{constructor(t,e){this.g=t,this.map=e}};function N1(t){this.l=t||w2,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w2=10;function x1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function D1(t){return t.h?1:t.g?t.g.size:0}function tf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function em(t,e){t.g?t.g.add(e):t.h=e}function O1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}N1.prototype.cancel=function(){if(this.i=L1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jp(t.i)}var E2=class{stringify(t){return b.JSON.stringify(t,void 0)}parse(t){return b.JSON.parse(t,void 0)}};function T2(){this.g=new E2}function I2(t,e,n){const r=n||"";try{R1(t,function(i,s){let o=i;tc(i)&&(o=Kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function S2(t,e){const n=new ac;if(b.Image){const r=new Image;r.onload=Qa(Ya,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qa(Ya,n,r,"TestLoadImage: error",!1,e),r.onabort=Qa(Ya,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qa(Ya,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ya(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ha(t){this.l=t.ec||null,this.j=t.ob||!1}xe(ha,Yp);ha.prototype.g=function(){return new fc(this.l,this.j)};ha.prototype.i=function(t){return function(){return t}}({});function fc(t,e){Ne.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(fc,Ne);var tm=0;N=fc.prototype;N.open=function(t,e){if(this.readyState!=tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bo(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||b).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=tm};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;V1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function V1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?da(this):Bo(this),this.readyState==3&&V1(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,da(this))};N.Ya=function(t){this.g&&(this.response=t,da(this))};N.ka=function(){this.g&&da(this)};function da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bo(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var R2=b.JSON.parse;function pe(t){Ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=M1,this.L=this.M=!1}xe(pe,Ne);var M1="",A2=/^https?$/i,C2=["POST","PUT"];N=pe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yd.g(),this.C=this.u?n_(this.u):n_(Yd),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){s_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&t instanceof b.FormData,!(0<=ZE(C2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{U1(this),0<this.B&&((this.L=P2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=Xp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){s_(this,s)}};function P2(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof $p<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function s_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,b1(t),pc(t)}function b1(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),pc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pc(this,!0)),pe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?F1(this):this.kb())};N.kb=function(){F1(this)};function F1(t){if(t.h&&typeof $p<"u"&&(!t.C[1]||Yt(t)!=4||t.da()!=2)){if(t.v&&Yt(t)==4)Xp(t.La,0,t);else if(Ue(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(A1)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!A2.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var s=2<Yt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",b1(t)}}finally{pc(t)}}}}function pc(t,e){if(t.g){U1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function U1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Yt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),R2(e)}};function o_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case M1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function k2(t){const e={};t=(t.g&&2<=Yt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Vo(t[r]))continue;var n=e2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}qO(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $1(t){let e="";return zp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function j1(t){this.Ga=0,this.j=[],this.l=new ac,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Os("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Os("baseRetryDelayMs",5e3,t),this.hb=Os("retryDelaySeedMs",1e4,t),this.eb=Os("forwardChannelMaxRetries",2,t),this.xa=Os("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new N1(t&&t.concurrentRequestLimit),this.Ja=new T2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=j1.prototype;N.ra=8;N.H=1;function rm(t){if(B1(t),t.H==3){var e=t.W++,n=Nn(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),fa(t,n),e=new ua(t,t.l,e),e.L=2,e.A=dc(Nn(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&b.Image&&(new Image().src=e.A,n=!0),n||(e.g=X1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ca(e)}G1(t)}function mc(t){t.g&&(sm(t),t.g.cancel(),t.g=null)}function B1(t){mc(t),t.u&&(b.clearTimeout(t.u),t.u=null),du(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function gc(t){if(!x1(t.i)&&!t.m){t.m=!0;var e=t.Na;bo||c1(),Fo||(bo(),Fo=!0),Gp.add(e,t),t.C=0}}function N2(t,e){return D1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=aa(Qe(t.Na,t,e),K1(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ua(this,this.l,t);let s=this.s;if(this.U&&(s?(s=r1(s),i1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=z1(this,i,e),n=Nn(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),fa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($1(s)))+"&"+e:this.o&&nm(n,this.o,s)),em(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,Zd(i,n,null)):Zd(i,n,e),this.H=2}}else this.H==3&&(t?a_(this,t):this.j.length==0||x1(this.i)||a_(this))};function a_(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),fa(t,r),t.o&&t.s&&nm(r,t.o,t.s),n=new ua(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=z1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),em(t.i,n),Zd(n,r,e)}function fa(t,e){t.na&&zp(t.na,function(n,r){re(e,r,n)}),t.h&&R1({},function(n,r){re(e,r,n)})}function z1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{I2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function H1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bo||c1(),Fo||(bo(),Fo=!0),Gp.add(e,t),t.A=0}}function im(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=aa(Qe(t.Ma,t),K1(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,W1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=aa(Qe(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),mc(this),W1(this))};function sm(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function W1(t){t.g=new ua(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),fa(t,e),t.o&&t.s&&nm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=dc(Nn(e)),n.u=null,n.S=!0,E1(n,t)}N.ib=function(){this.v!=null&&(this.v=null,mc(this),im(this),tt(19))};function du(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function q1(t,e){var n=null;if(t.g==e){du(t),sm(t),t.g=null;var r=2}else if(tf(t.i,e))n=e.F,O1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=lc(),Ue(r,new g1(r,n)),gc(t)}else H1(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&N2(t,e)||r==2&&im(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Lr(t,5);break;case 4:Lr(t,10);break;case 3:Lr(t,6);break;default:Lr(t,2)}}}function K1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Lr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Qe(t.pb,t);n||(n=new Ur("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||cu(n,"https"),dc(n)),S2(n.toString(),r)}else tt(2);t.H=0,t.h&&t.h.za(e),G1(t),B1(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function G1(t){if(t.H=0,t.ma=[],t.h){const e=L1(t.i);(e.length!=0||t.j.length!=0)&&(Yy(t.ma,e),Yy(t.ma,t.j),t.i.i.length=0,jp(t.j),t.j.length=0),t.h.ya()}}function Q1(t,e,n){var r=n instanceof Ur?Nn(n):new Ur(n);if(r.g!="")e&&(r.g=e+"."+r.g),hu(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ur(null);r&&cu(s,r),e&&(s.g=e),i&&hu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),fa(t,r),r}function X1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new pe(new ha({ob:n})):new pe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Y1(){}N=Y1.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function fu(){if(ts&&!(10<=Number(BO)))throw Error("Environmental error: no available transport.")}fu.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Ne.call(this),this.g=new j1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}xe(St,Ne);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Q1(t,null,t.Y),gc(t)};St.prototype.close=function(){rm(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kp(t),t=n);e.j.push(new v2(e.fb++,t)),e.H==3&&gc(e)};St.prototype.N=function(){this.g.h=null,delete this.j,rm(this.g),delete this.g,St.$.N.call(this)};function J1(t){Jp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(J1,Jp);function Z1(){Zp.call(this),this.status=1}xe(Z1,Zp);function gs(t){this.g=t}xe(gs,Y1);gs.prototype.Ba=function(){Ue(this.g,"a")};gs.prototype.Aa=function(t){Ue(this.g,new J1(t))};gs.prototype.za=function(t){Ue(this.g,new Z1)};gs.prototype.ya=function(){Ue(this.g,"b")};function x2(){this.blockSize=-1}function Wt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xe(Wt,x2);Wt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Rh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Rh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Rh(this,r),i=0;break}}this.h=i,this.i+=e};Wt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function J(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var D2={};function om(t){return-128<=t&&128>t?UO(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return $i;if(0>t)return Me(Jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=nf;return new J(e,0)}function eT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(eT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),r=$i,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jt(Math.pow(e,s)),r=r.R(s).add(Jt(o))):(r=r.R(n),r=r.add(Jt(o)))}return r}var nf=4294967296,$i=om(0),rf=om(1),l_=om(16777216);N=J.prototype;N.ea=function(){if(kt(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:nf+r)*e,e*=nf}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(kt(this))return"-"+Me(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,r="";;){var i=mu(n,e).g;n=pu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}N.X=function(t){return t=pu(this,t),kt(t)?-1:vn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new J(n,~t.h).add(rf)}N.abs=function(){return kt(this)?Me(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new J(n,n[n.length-1]&-2147483648?-1:0)};function pu(t,e){return t.add(Me(e))}N.R=function(t){if(vn(this)||vn(t))return $i;if(kt(this))return kt(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(kt(t))return Me(this.R(Me(t)));if(0>this.X(l_)&&0>t.X(l_))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ja(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ja(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ja(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ja(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new J(n,0)};function Ja(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ls(t,e){this.g=t,this.h=e}function mu(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Ls($i,$i);if(kt(t))return e=mu(Me(t),e),new Ls(Me(e.g),Me(e.h));if(kt(e))return e=mu(t,Me(e)),new Ls(Me(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=rf,r=e;0>=r.X(t);)n=u_(n),r=u_(r);var i=fi(n,1),s=fi(r,1);for(r=fi(r,2),n=fi(n,2);!vn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=fi(r,1),n=fi(n,1)}return e=pu(t,i.R(e)),new Ls(i,e)}for(i=$i;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jt(n),o=s.R(e);kt(o)||0<o.X(t);)n-=r,s=Jt(n),o=s.R(e);vn(s)&&(s=rf),i=i.add(s),t=pu(t,o)}return new Ls(i,t)}N.gb=function(t){return mu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new J(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new J(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new J(n,this.h^t.h)};function u_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new J(n,t.h)}function fi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new J(i,t.h)}fu.prototype.createWebChannel=fu.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;uc.NO_ERROR=0;uc.TIMEOUT=8;uc.HTTP_ERROR=6;y1.COMPLETE="complete";_1.EventType=la;la.OPEN="a";la.CLOSE="b";la.ERROR="c";la.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;Wt.prototype.digest=Wt.prototype.l;Wt.prototype.reset=Wt.prototype.reset;Wt.prototype.update=Wt.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=Jt;J.fromString=eT;var O2=function(){return new fu},L2=function(){return lc()},Ah=uc,V2=y1,M2=ui,c_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},b2=ha,Za=_1,F2=pe,U2=Wt,ji=J;const h_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Tp("@firebase/firestore");function Vs(){return Yr.logLevel}function O(t,...e){if(Yr.logLevel<=q.DEBUG){const n=e.map(am);Yr.debug(`Firestore (${ys}): ${t}`,...n)}}function xn(t,...e){if(Yr.logLevel<=q.ERROR){const n=e.map(am);Yr.error(`Firestore (${ys}): ${t}`,...n)}}function ns(t,...e){if(Yr.logLevel<=q.WARN){const n=e.map(am);Yr.warn(`Firestore (${ys}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function te(t,e){t||F()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class j2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class B2{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new tT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new qe(e)}}class z2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class H2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new z2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.R=n.token,new W2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=K2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new Re(0,0))}static max(){return new U(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends zo{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const G2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends zo{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return G2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(de.fromString(e))}static fromName(e){return new V(de.fromString(e).popFirst(5))}static empty(){return new V(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new de(e.slice()))}}function Q2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new pr(i,V.empty(),e)}function X2(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(U.min(),V.empty(),-1)}static max(){return new pr(U.max(),V.empty(),-1)}}function Y2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==J2)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}lm.oe=-1;function yc(t){return t==null}function gu(t){return t===0&&1/t==-1/0}function tL(t){return typeof t=="number"&&Number.isInteger(t)&&!gu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}}class el{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f_(this.data.getIterator())}getIteratorFrom(e){return new f_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class f_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new _t([])}unionWith(e){let n=new $e(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iT("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const nL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(te(!!t),typeof t=="string"){let e=0;const n=nL.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return um(e)?cm(e):e}function Ho(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:iL(t)?9007199254740991:10:F()}function ln(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),a=mr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),a=ve(s.doubleValue);return o===a?gu(o)===gu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(d_(o)!==d_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ln(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function qo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ve(s.integerValue||s.doubleValue),l=ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return p_(t.timestampValue,e.timestampValue);case 4:return p_(Ho(t),Ho(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Jr(s),l=Jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(ve(s.latitude),ve(o.latitude));return a!==0?a:Q(ve(s.longitude),ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=is(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tl.mapValue&&o===tl.mapValue)return 0;if(s===tl.mapValue)return 1;if(o===tl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const f=is(a[l[h]],u[c[h]]);if(f!==0)return f}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function p_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=mr(t),r=mr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function ss(t){return sf(t)}function sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sf(n.fields[o])}`;return i+"}"}(t.mapValue):F()}function of(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ao(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(ao(this.value))}}function sT(t){const e=[];return ci(t.fields,(n,r)=>{const i=new be([n]);if(Il(r)){const s=sT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,U.min(),U.min(),U.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,U.min(),U.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,U.min(),U.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.position=e,this.inclusive=n}}function y_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function __(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n="asc"){this.field=e,this.dir=n}}function sL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{}class Ie extends oT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aL(e,n,r):n==="array-contains"?new cL(e,r):n==="in"?new hL(e,r):n==="not-in"?new dL(e,r):n==="array-contains-any"?new fL(e,r):new Ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lL(e,r):new uL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aT(t){return t.op==="and"}function lT(t){return oL(t)&&aT(t)}function oL(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function af(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(lT(t))return t.filters.map(e=>af(e)).join(",");{const e=t.filters.map(n=>af(n)).join(",");return`${t.op}(${e})`}}function uT(t,e){return t instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&uT(o,i.filters[a]),!0):!1}(t,e):void F()}function cT(t){return t instanceof Ie?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(cT).join(" ,")+"}"}(t):"Filter"}class aL extends Ie{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class lL extends Ie{constructor(e,n){super(e,"in",n),this.keys=hT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uL extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=hT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class cL extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&qo(n.arrayValue,this.value)}}class hL extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qo(this.value.arrayValue,n)}}class dL extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qo(this.value.arrayValue,n)}}class fL extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pL(t,e,n,r,i,s,o)}function dm(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ue=n}return e.ue}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!__(t.startAt,e.startAt)&&__(t.endAt,e.endAt)}function lf(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mL(t,e,n,r,i,s,o,a){return new _c(t,e,n,r,i,s,o,a)}function pm(t){return new _c(t)}function w_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gL(t){return t.collectionGroup!==null}function lo(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $e(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _u(s,r))}),n.has(be.keyField().canonicalString())||e.ce.push(new _u(be.keyField(),r))}return e.ce}function sn(t){const e=$(t);return e.le||(e.le=yL(e,lo(t))),e.le}function yL(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _u(i.field,s)});const n=t.endAt?new yu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yu(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uf(t,e,n){return new _c(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return fm(sn(t),sn(e))&&t.limitType===e.limitType}function dT(t){return`${dm(sn(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cT(i)).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ss(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,lo(r),i))}(t,e)}function _L(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=vL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vL(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?is(l,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=new ce(V.comparator);function Dn(){return wL}const pT=new ce(V.comparator);function qs(...t){let e=pT;for(const n of t)e=e.insert(n.key,n);return e}function mT(t){let e=pT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return uo()}function gT(){return uo()}function uo(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const EL=new ce(V.comparator),TL=new $e(V.comparator);function W(...t){let e=TL;for(const n of t)e=e.add(n);return e}const IL=new $e(Q);function SL(){return IL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gu(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function RL(t,e){return tL(e)?_T(e):yT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function AL(t,e,n){return t instanceof vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&um(s)&&(s=cm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof os?wT(t,e):t instanceof as?ET(t,e):function(i,s){const o=vT(i,s),a=E_(o)+E_(i.Pe);return of(o)&&of(i.Pe)?_T(a):yT(i.serializer,a)}(t,e)}function CL(t,e,n){return t instanceof os?wT(t,e):t instanceof as?ET(t,e):n}function vT(t,e){return t instanceof wu?function(r){return of(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vu extends Ec{}class os extends Ec{constructor(e){super(),this.elements=e}}function wT(t,e){const n=TT(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class as extends Ec{constructor(e){super(),this.elements=e}}function ET(t,e){let n=TT(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class wu extends Ec{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function E_(t){return ve(t.integerValue||t.doubleValue)}function TT(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.field=e,this.transform=n}}function PL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof os&&i instanceof os||r instanceof as&&i instanceof as?rs(r.elements,i.elements,ln):r instanceof wu&&i instanceof wu?ln(r.Pe,i.Pe):r instanceof vu&&i instanceof vu}(t.transform,e.transform)}class kL{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tc{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AT(t.key,on.none()):new ga(t.key,t.data,on.none());{const n=t.data,r=ot.empty();let i=new $e(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new _t(i.toArray()),on.none())}}function NL(t,e,n){t instanceof ga?function(i,s,o){const a=i.value.clone(),l=I_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!Sl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=I_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(RT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof ga?function(s,o,a,l){if(!Sl(s.precondition,o))return a;const u=s.value.clone(),c=S_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,a,l){if(!Sl(s.precondition,o))return a;const u=S_(s.fieldTransforms,l,o),c=o.data;return c.setAll(RT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Sl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function xL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vT(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function T_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rs(r,i,(s,o)=>PL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends Tc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Tc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CL(o,a,n[i]))}return r}function S_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AL(s,o,e))}return r}class AT extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DL extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ST(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>T_(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>T_(n,r))}}class mm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){te(e.mutations.length===r.length);let i=function(){return EL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,K;function ML(t){switch(t){default:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function CT(t){if(t===void 0)return xn("GRPC error has no .code"),S.UNKNOWN;switch(t){case _e.OK:return S.OK;case _e.CANCELLED:return S.CANCELLED;case _e.UNKNOWN:return S.UNKNOWN;case _e.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case _e.INTERNAL:return S.INTERNAL;case _e.UNAVAILABLE:return S.UNAVAILABLE;case _e.UNAUTHENTICATED:return S.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case _e.NOT_FOUND:return S.NOT_FOUND;case _e.ALREADY_EXISTS:return S.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return S.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case _e.ABORTED:return S.ABORTED;case _e.OUT_OF_RANGE:return S.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return S.UNIMPLEMENTED;case _e.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(K=_e||(_e={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=new ji([4294967295,4294967295],0);function R_(t){const e=bL().encode(t),n=new U2;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ji([n,r],0),new ji([i,s],0)]}class gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ji.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ji.fromNumber(r)));return i.compare(FL)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=R_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=R_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ic(U.min(),i,new ce(Q),Dn(),W())}}class ya{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ya(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PT{constructor(e,n){this.targetId=e,this.me=n}}class kT{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class C_{constructor(){this.fe=0,this.ge=k_(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=W(),n=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new ya(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=k_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=P_(),this.Qe=new ce(Q)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(lf(s))if(r===0){const o=new V(s.path);this.Ue(n,o,Ge.newNoDocument(o,U.min()))}else te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(l){if(l instanceof iT)return ns("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gm(o,i,s)}catch(l){return ns(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&lf(a.target)){const l=new V(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ge.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=W();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ic(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=P_(),this.Qe=new ce(Q),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new C_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(Q),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new C_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function P_(){return new ce(V.comparator)}function k_(){return new ce(V.comparator)}const $L={asc:"ASCENDING",desc:"DESCENDING"},jL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BL={and:"AND",or:"OR"};class zL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cf(t,e){return t.useProto3Json||yc(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HL(t,e){return Eu(t,e.toTimestamp())}function an(t){return te(!!t),U.fromTimestamp(function(n){const r=mr(n);return new Re(r.seconds,r.nanos)}(t))}function ym(t,e){return hf(t,e).canonicalString()}function hf(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xT(t){const e=de.fromString(t);return te(MT(e)),e}function df(t,e){return ym(t.databaseId,e.path)}function Ch(t,e){const n=xT(e);if(n.get(1)!==t.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(OT(n))}function DT(t,e){return ym(t.databaseId,e)}function WL(t){const e=xT(t);return e.length===4?de.emptyPath():OT(e)}function ff(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OT(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function N_(t,e,n){return{name:df(t,e),fields:n.value.mapValue.fields}}function qL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(te(c===void 0||typeof c=="string"),Je.fromBase64String(c||"")):(te(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:CT(u.code);return new L(c,u.message||"")}(o);n=new kT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):U.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Rl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ch(t,r.document),s=r.readTime?an(r.readTime):U.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Rl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ch(t,r.document),s=r.removedTargetIds||[];n=new Rl([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VL(i,s),a=r.targetId;n=new PT(a,o)}}return n}function KL(t,e){let n;if(e instanceof ga)n={update:N_(t,e.key,e.value)};else if(e instanceof AT)n={delete:df(t,e.key)};else if(e instanceof Ir)n={update:N_(t,e.key,e.data),updateMask:nV(e.fieldMask)};else{if(!(e instanceof DL))return F();n={verify:df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof as)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(t,e.precondition)),n}function GL(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(U.min())&&(o=an(s)),new kL(o,i.transformResults||[])}(n,e))):[]}function QL(t,e){return{documents:[DT(t,e.path)]}}function XL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DT(t,i);const s=function(u){if(u.length!==0)return VT(un.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:mi(d.field),direction:ZL(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=cf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function YL(t){let e=WL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=LT(h);return d instanceof un&&lT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new _u(gi(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,yc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new yu(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new yu(f,d)}(n.endAt)),mL(e,i,o,s,a,"F",l,u)}function JL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gi(n.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gi(n.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(n){return Ie.create(gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>LT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(t):F()}function ZL(t){return $L[t]}function eV(t){return jL[t]}function tV(t){return BL[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return be.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof Ie?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:eV(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>VT(i));return r.length===1?r[0]:{compositeFilter:{op:tV(n.op),filters:r}}}(t):F()}function nV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e){this.ut=e}}function iV(t){const e=YL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.on=new oV}addToCollectionParentIndex(e,n){return this.on.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(pr.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class oV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ls(0)}static Nn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&co(r.mutation,i,_t.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dn();const o=uo(),a=function(){return uo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ir)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),co(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new lV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=uo();let i=new ce((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||_t.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=gT();c.forEach(d=>{if(!s.has(d)){const f=ST(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Vr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:mT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(h,d){return new _c(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ge.newInvalidDocument(c)))});let a=qs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&co(c.mutation,u,_t.empty(),Re.now()),wc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return I.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:iV(i.bundledQuery),readTime:an(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.overlays=new ce(V.comparator),this.lr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Vr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Vr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LL(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.hr=new $e(Ce.Pr),this.Ir=new $e(Ce.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ce(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ce(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new de([])),r=new Ce(n,e),i=new Ce(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new de([])),r=new Ce(n,e),i=new Ce(n,e+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ce(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||Q(e.gr,n.gr)}static Tr(e,n){return Q(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new $e(Ce.Pr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ce(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ce(n,0),i=new Ce(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(Q);return n.forEach(i=>{const s=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),I.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ce(new V(s),0);let a=new $e(Q);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),I.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return I.forEach(n.mutations,i=>{const s=new Ce(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ce(n,0),i=this.yr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e){this.Cr=e,this.docs=function(){return new ce(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Y2(X2(c),r)<=0||(i.has(c.key)||wc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}vr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pV(this)}getSize(e){return I.resolve(this.size)}}class pV extends aV{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e){this.persistence=e,this.Fr=new _s(n=>dm(n),fm),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Mr=0,this.Or=new _m,this.targetCount=0,this.Nr=ls.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),I.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.kn(n),I.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n){this.Lr={},this.overlays={},this.Br=new lm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new mV(this),this.indexManager=new sV,this.remoteDocumentCache=function(i){return new fV(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new rV(n),this.Kr=new cV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new dV(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new yV(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class yV extends Z2{constructor(e){super(),this.currentSequenceNumber=e}}class vm{constructor(e){this.persistence=e,this.Gr=new _m,this.zr=null}static jr(e){return new vm(e)}get Hr(){if(this.zr)return this.zr;throw F()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),I.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return I.or([()=>I.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return UP()?8:eL(Be())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _V;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Vs()<=q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),I.resolve()):(Vs()<=q.DEBUG&&O("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Vs()<=q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):I.resolve())}zi(e,n){if(w_(n))return I.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=uf(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,uf(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return w_(n)||i.isEqual(U.min())?I.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?I.resolve(null):(Vs()<=q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.Xi(e,o,n,Q2(i,-1)).next(a=>a))})}Yi(e,n){let r=new $e(fT(e));return n.forEach((i,s)=>{wc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Vs()<=q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",pi(n)),this.Gi.getDocumentsMatchingQuery(e,n,pr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ce(Q),this.ns=new _s(s=>dm(s),fm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uV(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function EV(t,e,n,r){return new wV(t,e,n,r)}async function bT(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function TV(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=I.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);te(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FT(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function IV(t,e){const n=$(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,v,m){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let l=Dn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(SV(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(U.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function SV(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function RV(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AV(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function pf(t,e,n){const r=$(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ma(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function x_(t,e,n){const r=$(t);let i=U.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=$(l),d=h.ns.get(c);return d!==void 0?I.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:W())).next(a=>(CV(r,_L(e),a),{documents:a,ls:s})))}function CV(t,e,n){let r=t.rs.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class D_{constructor(){this.activeTargetIds=SL()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PV{constructor(){this.eo=new D_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl=null;function Ph(){return nl===null?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class DV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=Ph(),l=this.Co(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(u,s,o),this.Fo(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=NV[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,i){const s=Ph();return new Promise((o,a)=>{const l=new F2;l.setWithCredentials(!0),l.listenOnce(V2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ah.NO_ERROR:const c=l.getResponseJson();O(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ah.TIMEOUT:O(We,`RPC '${e}' ${s} timed out`),a(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ah.HTTP_ERROR:const h=l.getStatus();if(O(We,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(f.status);a(new L(y,f.message))}else a(new L(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(We,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(We,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}xo(e,n,r){const i=Ph(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=O2(),a=L2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new b2({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(We,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new xV({co:v=>{f?O(We,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(O(We,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(We,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),_=(v,m,p)=>{v.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Za.EventType.OPEN,()=>{f||(O(We,`RPC '${e}' stream ${i} transport opened.`),y.Vo())}),_(h,Za.EventType.CLOSE,()=>{f||(f=!0,O(We,`RPC '${e}' stream ${i} transport closed`),y.fo())}),_(h,Za.EventType.ERROR,v=>{f||(f=!0,ns(We,`RPC '${e}' stream ${i} transport errored:`,v),y.fo(new L(S.UNAVAILABLE,"The operation could not be completed")))}),_(h,Za.EventType.MESSAGE,v=>{var m;if(!f){const p=v.data[0];te(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){O(We,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let A=function(X){const j=_e[X];if(j!==void 0)return CT(j)}(T),P=E.message;A===void 0&&(A=S.INTERNAL,P="Unknown error status: "+T+" with message "+E.message),f=!0,y.fo(new L(A,P)),h.close()}else O(We,`RPC '${e}' stream ${i} received:`,p),y.po(p)}}),_(a,M2.STAT_EVENT,v=>{v.stat===c_.PROXY?O(We,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===c_.NOPROXY&&O(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.mo()},0),y}}function kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new zL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new UT(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{e(()=>{const i=new L(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OV extends $T{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=qL(this.serializer,e),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?an(o.readTime):U.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=ff(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=lf(l)?{documents:QL(s,l)}:{query:XL(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NT(s,o.resumeToken);const u=cf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=Eu(s,o.snapshotVersion.toTimestamp());const u=cf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=JL(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=ff(this.serializer),n.removeTarget=e,this.r_(n)}}class LV extends $T{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=GL(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.d_(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=ff(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KL(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(e,hf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(S.UNKNOWN,s.toString())})}Mo(e,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,hf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(S.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class MV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(xn(n),this.y_=!1):O("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{hi(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=$(l);u.M_.add(4),await _a(u),u.N_.set("Unknown"),u.M_.delete(4),await Rc(u)}(this))})}),this.N_=new MV(r,i)}}async function Rc(t){if(hi(t))for(const e of t.x_)await e(!0)}async function _a(t){for(const e of t.x_)await e(!1)}function jT(t,e){const n=$(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Sm(n)?Im(n):vs(n).Zo()&&Tm(n,e))}function Em(t,e){const n=$(t),r=vs(n);n.F_.delete(e),r.Zo()&&BT(n,e),n.F_.size===0&&(r.Zo()?r.t_():hi(n)&&n.N_.set("Unknown"))}function Tm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).h_(e)}function BT(t,e){t.L_.xe(e),vs(t).P_(e)}function Im(t){t.L_=new UL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.N_.w_()}function Sm(t){return hi(t)&&!vs(t).Yo()&&t.F_.size>0}function hi(t){return $(t).M_.size===0}function zT(t){t.L_=void 0}async function FV(t){t.N_.set("Online")}async function UV(t){t.F_.forEach((e,n)=>{Tm(t,e)})}async function $V(t,e){zT(t),Sm(t)?(t.N_.D_(e),Im(t)):t.N_.set("Unknown")}async function jV(t,e,n){if(t.N_.set("Online"),e instanceof kT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof Rl?t.L_.Ke(e):e instanceof PT?t.L_.He(e):t.L_.We(e),!n.isEqual(U.min()))try{const r=await FT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),BT(s,l);const h=new Qn(c.target,l,u,c.sequenceNumber);Tm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!ma(e))throw e;t.M_.add(1),await _a(t),t.N_.set("Offline"),n||(n=()=>FT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Rc(t)})}function HT(t,e){return e().catch(n=>Tu(t,n,e))}async function Ac(t){const e=$(t),n=gr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;BV(e);)try{const i=await RV(e.localStore,r);if(i===null){e.v_.length===0&&n.t_();break}r=i.batchId,zV(e,i)}catch(i){await Tu(e,i)}WT(e)&&qT(e)}function BV(t){return hi(t)&&t.v_.length<10}function zV(t,e){t.v_.push(e);const n=gr(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function WT(t){return hi(t)&&!gr(t).Yo()&&t.v_.length>0}function qT(t){gr(t).start()}async function HV(t){gr(t).R_()}async function WV(t){const e=gr(t);for(const n of t.v_)e.E_(n.mutations)}async function qV(t,e,n){const r=t.v_.shift(),i=mm.from(r,e,n);await HT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ac(t)}async function KV(t,e){e&&gr(t).T_&&await async function(r,i){if(function(o){return ML(o)&&o!==S.ABORTED}(i.code)){const s=r.v_.shift();gr(r).e_(),await HT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ac(r)}}(t,e),WT(t)&&qT(t)}async function L_(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=hi(n);n.M_.add(3),await _a(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Rc(n)}async function GV(t,e){const n=$(t);e?(n.M_.delete(2),await Rc(n)):e||(n.M_.add(2),await _a(n),n.N_.set("Unknown"))}function vs(t){return t.B_||(t.B_=function(n,r,i){const s=$(n);return s.m_(),new OV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:FV.bind(null,t),Io:UV.bind(null,t),Eo:$V.bind(null,t),l_:jV.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Sm(t)?Im(t):t.N_.set("Unknown")):(await t.B_.stop(),zT(t))})),t.B_}function gr(t){return t.k_||(t.k_=function(n,r,i){const s=$(n);return s.m_(),new LV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:HV.bind(null,t),Eo:KV.bind(null,t),A_:WV.bind(null,t),d_:qV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Ac(t)):(await t.k_.stop(),t.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ma(t))return new L(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.q_=new ce(V.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):F():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class XV{constructor(){this.queries=new _s(e=>dT(e),vc),this.onlineState="Unknown",this.z_=new Set}}async function YV(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new QV,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Am(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Cm(n)}async function JV(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZV(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Cm(n)}function eM(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Cm(t){t.z_.forEach(e=>{e.next()})}var mf,M_;(M_=mf||(mf={})).J_="default",M_.Cache="cache";class tM{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.key=e}}class GT{constructor(e){this.key=e}}class nM{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=W(),this.mutatedKeys=W(),this.Ia=fT(e),this.Ta=new Bi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new V_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=wc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),v=!0):this.Ra(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this.Ia(f,l)>0||u&&this.Ia(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(f,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return _(f)-_(y)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new us(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new V_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=W(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new GT(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new KT(r))}),n}pa(e){this.la=e.ls,this.Pa=W();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return us.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class rM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iM{constructor(e){this.key=e,this.wa=!1}}class sM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new _s(a=>dT(a),vc),this.Da=new Map,this.Ca=new Set,this.va=new ce(V.comparator),this.Fa=new Map,this.Ma=new _m,this.xa={},this.Oa=new Map,this.Na=ls.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function oM(t,e,n=!0){const r=eI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await QT(r,e,n,!0),i}async function aM(t,e){const n=eI(t);await QT(n,e,!0,!1)}async function QT(t,e,n,r){const i=await AV(t.localStore,sn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await lM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&jT(t.remoteStore,i),a}async function lM(t,e,n,r,i){t.Ba=(h,d,f)=>async function(_,v,m,p){let g=v.view.da(m);g.Zi&&(g=await x_(_.localStore,v.query,!1).then(({documents:P})=>v.view.da(P,g)));const E=p&&p.targetChanges.get(v.targetId),T=p&&p.targetMismatches.get(v.targetId)!=null,A=v.view.applyChanges(g,_.isPrimaryClient,E,T);return F_(_,v.targetId,A.fa),A.snapshot}(t,h,d,f);const s=await x_(t.localStore,e,!0),o=new nM(e,s.ls),a=o.da(s.documents),l=ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);F_(t,n,u.fa);const c=new rM(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function uM(t,e,n){const r=$(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!vc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Em(r.remoteStore,i.targetId),gf(r,i.targetId)}).catch(pa)):(gf(r,i.targetId),await pf(r.localStore,i.targetId,!0))}async function cM(t,e){const n=$(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Em(n.remoteStore,r.targetId))}async function hM(t,e,n){const r=_M(t);try{const i=await function(o,a){const l=$(o),u=Re.now(),c=a.reduce((f,y)=>f.add(y.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Dn(),_=W();return l.ss.getEntries(f,c).next(v=>{y=v,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const m=[];for(const p of a){const g=xL(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new Ir(p.key,g,sT(g.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(v=>{d=v;const m=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,m)})}).then(()=>({batchId:d.batchId,changes:mT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ce(Q)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await va(r,i.changes),await Ac(r.remoteStore)}catch(i){const s=Am(i,"Failed to persist write");n.reject(s)}}async function XT(t,e){const n=$(t);try{const r=await IV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?te(o.wa):i.removedDocuments.size>0&&(te(o.wa),o.wa=!1))}),await va(n,r,e)}catch(r){await pa(r)}}function b_(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.U_)d.j_(a)&&(u=!0)}),u&&Cm(l)}(r.eventManager,e),i.length&&r.Sa.l_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dM(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ce(V.comparator);o=o.insert(s,Ge.newNoDocument(s,U.min()));const a=W().add(s),l=new Ic(U.min(),new Map,new ce(Q),o,a);await XT(r,l),r.va=r.va.remove(s),r.Fa.delete(e),Pm(r)}else await pf(r.localStore,e,!1).then(()=>gf(r,e,n)).catch(pa)}async function fM(t,e){const n=$(t),r=e.batch.batchId;try{const i=await TV(n.localStore,e);JT(n,r,null),YT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await pa(i)}}async function pM(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(te(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);JT(r,e,n),YT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await pa(i)}}function YT(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function JT(t,e,n){const r=$(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||ZT(t,r)})}function ZT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Em(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Pm(t))}function F_(t,e,n){for(const r of n)r instanceof KT?(t.Ma.addReference(r.key,e),mM(t,r)):r instanceof GT?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||ZT(t,r.key)):F()}function mM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Pm(t))}function Pm(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new V(de.fromString(e)),r=t.Na.next();t.Fa.set(r,new iM(n)),t.va=t.va.insert(n,r),jT(t.remoteStore,new Qn(sn(pm(n.path)),r,"TargetPurposeLimboResolution",lm.oe))}}async function va(t,e,n){const r=$(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,u){const c=$(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(u,d=>I.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>I.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ma(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function gM(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await bT(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new L(S.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r._s)}}function yM(t,e){const n=$(t),r=n.Fa.get(e);if(r&&r.wa)return W().add(r.key);{let i=W();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function eI(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dM.bind(null,e),e.Sa.l_=ZV.bind(null,e.eventManager),e.Sa.ka=eM.bind(null,e.eventManager),e}function _M(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pM.bind(null,e),e}class U_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return EV(this.persistence,new vV,e.initialUser,this.serializer)}createPersistence(e){return new gV(vm.jr,this.serializer)}createSharedClientState(e){return new PV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>b_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gM.bind(null,this.syncEngine),await GV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XV}()}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=function(s){return new DV(s)}(e.databaseInfo);return function(s,o,a,l){return new VV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>b_(this.syncEngine,n,0),function(){return O_.D()?new O_:new kV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new sM(i,s,o,a,l,u);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=$(r);O("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await _a(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=nT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IM(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>L_(e.remoteStore,i)),t._onlineComponents=e}function TM(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function IM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TM(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Nh(t,new U_)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Nh(t,new U_);return t._offlineComponents}async function tI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await $_(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await $_(t,new vM))),t._onlineComponents}function SM(t){return tI(t).then(e=>e.syncEngine)}async function RM(t){const e=await tI(t),n=e.eventManager;return n.onListen=oM.bind(null,e.syncEngine),n.onUnlisten=uM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cM.bind(null,e.syncEngine),n}function AM(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new wM({next:d=>{o.enqueueAndForget(()=>JV(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new L(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new L(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new tM(pm(a.path),c,{includeMetadataChanges:!0,ra:!0});return YV(s,h)}(await RM(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t,e,n){if(!n)throw new L(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PM(t,e,n,r){if(e===!0&&r===!0)throw new L(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function B_(t){if(!V.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function km(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=km(t);throw new L(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $2;switch(r.type){case"firstParty":return new H2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j_.get(n);r&&(O("ComponentProvider","Removing Datastore"),j_.delete(n),r.terminate())}(this),Promise.resolve()}}function kM(t,e,n,r={}){var i;const s=(t=ei(t,Nm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=Xw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new j2(new tT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xm(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ko(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Ko extends xm{constructor(e,n,r){super(e,n,pm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new V(e))}withConverter(e){return new Ko(this.firestore,e,this._path)}}function wa(t,e,...n){if(t=ue(t),arguments.length===1&&(e=nT.newId()),CM("doc","path",e),t instanceof Nm){const r=de.fromString(e,...n);return B_(r),new wt(t,null,new V(r))}{if(!(t instanceof wt||t instanceof Ko))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return B_(r),new wt(t.firestore,t instanceof Ko?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new UT(this,"async_queue_retry"),this.hu=()=>{const n=kh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=kh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new lr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!ma(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Rm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Cc extends Nm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new NM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iI(this),this._firestoreClient.terminate()}}function xM(t,e){const n=typeof t=="object"?t:Sp(),r=typeof t=="string"?t:"(default)",i=Gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Kw("firestore");s&&kM(i,...s)}return i}function rI(t){return t._firestoreClient||iI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new rL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new EM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(Je.fromBase64String(e))}catch(n){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=/^__.*__$/;class OM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}class sI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class kc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Iu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(oI(this.fu)&&DM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class LM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}Fu(e,n,r,i=!1){return new kc({fu:e,methodName:n,vu:r,path:be.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aI(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new LM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VM(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Vm("Data must be an object, but it was:",o,r);const a=uI(r,o);let l,u;if(s.merge)l=new _t(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=yf(e,h,n);if(!o.contains(d))throw new L(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hI(c,d)||c.push(d)}l=new _t(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new OM(new ot(a),l,u)}class Ta extends Ea{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}function lI(t,e,n){return new kc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Om extends Ea{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=lI(this,e,!0),r=this.Mu.map(s=>ws(s,n)),i=new os(r);return new IT(e.path,i)}isEqual(e){return e instanceof Om&&Zi(this.Mu,e.Mu)}}class Lm extends Ea{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=lI(this,e,!0),r=this.Mu.map(s=>ws(s,n)),i=new as(r);return new IT(e.path,i)}isEqual(e){return e instanceof Lm&&Zi(this.Mu,e.Mu)}}function MM(t,e,n,r){const i=t.Fu(1,e,n);Vm("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();ci(r,(l,u)=>{const c=Mm(e,l,n);u=ue(u);const h=i.Su(c);if(u instanceof Ta)s.push(c);else{const d=ws(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new _t(s);return new sI(o,a,i.fieldTransforms)}function bM(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[yf(e,r,n)],l=[i];if(s.length%2!=0)throw new L(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(yf(e,s[d])),l.push(s[d+1]);const u=[],c=ot.empty();for(let d=a.length-1;d>=0;--d)if(!hI(u,a[d])){const f=a[d];let y=l[d];y=ue(y);const _=o.Su(f);if(y instanceof Ta)u.push(f);else{const v=ws(y,_);v!=null&&(u.push(f),c.set(f,v))}}const h=new _t(u);return new sI(c,h,o.fieldTransforms)}function ws(t,e){if(cI(t=ue(t)))return Vm("Unsupported field value:",e,t),uI(t,e);if(t instanceof Ea)return function(r,i){if(!oI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ws(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:NT(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ym(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${km(r)}`)}(t,e)}function uI(t,e){const n={};return rT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=ws(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Dm||t instanceof cs||t instanceof wt||t instanceof Ea)}function Vm(t,e,n){if(!cI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=km(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function yf(t,e,n){if((e=ue(e))instanceof Pc)return e._internalPath;if(typeof e=="string")return Mm(t,e);throw Iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const FM=new RegExp("[~\\*/\\[\\]]");function Mm(t,e,n){if(e.search(FM)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pc(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(S.INVALID_ARGUMENT,a+t+l)}function hI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UM extends dI{data(){return super.data()}}function fI(t,e){return typeof e=="string"?Mm(t,e):e instanceof Pc?e._internalPath:e._delegate._internalPath}class $M{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dm(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=mr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);te(MT(r));const i=new Wo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pI extends dI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zM extends pI{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){t=ei(t,wt);const e=ei(t.firestore,Cc);return AM(rI(e),t._key).then(n=>qM(e,t,n))}class HM extends $M{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function WM(t,e,n){t=ei(t,wt);const r=ei(t.firestore,Cc),i=jM(t.converter,e);return mI(r,[VM(aI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function Su(t,e,n,...r){t=ei(t,wt);const i=ei(t.firestore,Cc),s=aI(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof Pc?bM(s,"updateDoc",t._key,e,n,r):MM(s,"updateDoc",t._key,e),mI(i,[o.toMutation(t._key,on.exists(!0))])}function mI(t,e){return function(r,i){const s=new lr;return r.asyncQueue.enqueueAndForget(async()=>hM(await SM(r),i,s)),s.promise}(rI(t),e)}function qM(t,e,n){const r=n.docs.get(e._key),i=new HM(t);return new pI(t,i,e._key,r,new BM(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(){return new Ta("deleteField")}function GM(...t){return new Om("arrayUnion",t)}function QM(...t){return new Lm("arrayRemove",t)}(function(e,n=!0){(function(i){ys=i})(ai),Kr(new fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Cc(new B2(r.getProvider("auth-internal")),new q2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(h_,"4.6.1",e),tn(h_,"4.6.1","esm2017")})();const XM={apiKey:"AIzaSyBXyS0dWiap6I7cCEilsjiTO50V40ApRYM",authDomain:"file-management-system-7dd5c.firebaseapp.com",projectId:"file-management-system-7dd5c",storageBucket:"file-management-system-7dd5c.appspot.com",messagingSenderId:"441349483213",appId:"1:441349483213:web:c382f01a7e1ce947ab1784",measurementId:"G-LY07SXTC0J"},YM=Zw(XM),Nc=mD(),Sa=xM(YM),JM=Wd();let rl;const ZM=new Uint8Array(16);function eb(){if(!rl&&(rl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!rl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return rl(ZM)}const De=[];for(let t=0;t<256;++t)De.push((t+256).toString(16).slice(1));function tb(t,e=0){return De[t[e+0]]+De[t[e+1]]+De[t[e+2]]+De[t[e+3]]+"-"+De[t[e+4]]+De[t[e+5]]+"-"+De[t[e+6]]+De[t[e+7]]+"-"+De[t[e+8]]+De[t[e+9]]+"-"+De[t[e+10]]+De[t[e+11]]+De[t[e+12]]+De[t[e+13]]+De[t[e+14]]+De[t[e+15]]}const nb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),H_={randomUUID:nb};function Xn(t,e,n){if(H_.randomUUID&&!e&&!t)return H_.randomUUID();t=t||{};const r=t.random||(t.rng||eb)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,tb(r)}const rb=()=>{const t=dt();return C.useCallback(async n=>{try{const r={fieldID:"0",name:"root",properties:{createdAt:Date.now()},content:[{name:"music",type:"folder",fieldID:`${n.uid}_${Xn()}`},{name:"videos",type:"folder",fieldID:`${n.uid}_${Xn()}`},{name:"picturs",type:"folder",fieldID:`${n.uid}_${Xn()}`},{name:"others",type:"folder",fieldID:`${n.uid}_${Xn()}`}]},i=wa(Sa,"folders",n.uid);(await Ia(i)).exists()||await WM(i,{[r.fieldID]:r})}catch(r){console.log("Error generating root!, ",r),t(Bt(r))}},[t])},bm=()=>{const t=dt();return C.useCallback(async(n,r)=>{try{const i=wa(Sa,r.collName,n.uid),s=await Ia(i);if(s.exists()){const o=s.data()[r.fieldID];if(o){const a=o.content;for(const l of a)if(!s.data()[l.fieldID]){const u={...l,properties:{createdAt:Date.now(),size:0,itemsIn:0},content:[]};await Su(i,{[l.fieldID]:u})}}}}catch(i){console.log("Error generating fields: ",i),t(Bt(i))}},[t])},gI=()=>{const t=dt();return C.useCallback(async(n,r)=>{try{const i=wa(Sa,r.collName,n.uid),s=await Ia(i);if(s.exists()){const o=s.data()[r.fieldID];o&&Array.isArray(o.content)&&await Su(i,{[`${r.fieldID}.content`]:GM(r.content)})}}catch(i){console.log("Error updating content prop!",i),t(Bt(i))}},[t])},Es=()=>{const t=Z(r=>r.pathSlice.path),e=dt();return C.useCallback(async(r,i,s)=>{if(t.length!==0)try{const o=wa(Sa,i.collName,r.uid),a=await Ia(o);if(a.exists()){const l=a.data()[i.fieldID];l.fieldID===i.fieldID&&e(s(l))}}catch(o){console.log("Error getting field: ",o),e(Bt(o))}},[e,t.length])},ib=()=>{const t=Z(n=>n.userSlice.user);return async(n,r)=>{const i=wa(Sa,"folders",t.uid),s=await Ia(i);if(s.exists()){const o=s.data()[r];for(const a of n)if(await Su(i,{[`${o.fieldID}.content`]:QM(a)}),await Su(i,{[a.fieldID]:KM()}),a.type==="file"){const l=Hd(JM,a.url);PO(l)}}}},hn=()=>{const t=dt();return(n,r)=>{t(Tv(n)),t(Iv(r))}},sb=()=>Z(e=>e.loaderSlice.isLoading)&&w.jsx("div",{className:"loader-container box center-x center-y",children:w.jsx("div",{className:"loader"})}),ob=()=>w.jsx("div",{children:"NotFound"}),ab="_overlay_1908s_1",lb="_body_1908s_19",ub="_userNavContainer_1908s_37",cb="_userNav_1908s_37",hb="_moreOptionsContainer_1908s_69",db="_moreOptions_1908s_69",fb="_createFolderContainer_1908s_109",pb="_createFolder_1908s_109",mb="_createFileContainer_1908s_117",gb="_createFile_1908s_117",il={overlay:ab,body:lb,userNavContainer:ub,userNav:cb,moreOptionsContainer:hb,moreOptions:db,createFolderContainer:fb,createFolder:pb,createFileContainer:mb,createFile:gb},yb=()=>{const t=Z(r=>r.contentSlice.content),e=hn(),n=r=>new Date(r).toLocaleString();return w.jsxs("div",{className:"box column full-width ai-start",children:[w.jsx("h2",{className:"full-width",children:`${t.name} ${t.type?t.type:""} Properties`}),w.jsxs("div",{className:"propertiesContainer box column full-width ai-start",children:[w.jsxs("h3",{children:["name: ",`${t.name}(${t.type?t.type:"root"})`]}),w.jsxs("h3",{children:["type: ",t.properties.type?t.properties.type:t.type?t.type:"root"]}),w.jsxs("h3",{children:["created at: ",t.properties.createdAt?n(t.properties.createdAt):"N/A"]})]}),w.jsx("button",{onClick:()=>e(!1,""),children:"done"})]})},_b=()=>{const t=Z(y=>y.userSlice.user),e=Z(y=>y.pathSlice.path),n=dt(),r=C.useRef(),i=C.useRef(),s=C.useRef(),o=bm(),a=hn(),l=gI(),u=Es(),c=e.length-1,h=async y=>{y.preventDefault();const _=r.current.value,v=i.current.value,m=`text/${_.split(".").pop()}`,g=new Blob([v],{type:m}).size,E={name:_,contentType:m,type:m,size:g},T=Wd(),A=Hd(T,`files/${t.uid}/${Xn()}_${_}`);try{const P=await CO(A,v,"raw",E),k=await Xy(P.ref);await f(E,k),a()}catch(P){console.log("Error creating file: ",P),n(Bt(P))}},d=async()=>{const y=s.current.files;for(const _ of y){const v=Wd(),m=Hd(v,`files/${t.uid}/${Xn()}_${_.name}`);try{const p=await AO(m,_),g=await Xy(p.ref);f(_,g),a(!1,"")}catch(p){console.log("Error uploading file: ",p),n(Bt(p))}}},f=async(y,_)=>{const v={collName:"folders",fieldName:e[c].name,fieldID:e[c].fieldID},m={...v,content:{fieldID:`${t.uid}_${Xn()}`,name:y.name,url:_,type:"file"}},p={...v,content:{...m,extension:y.name.split(".").pop(),type:"file",properties:{size:y.size,createdAt:Date.now(),type:y.type}}};await l(t,m),await o(t,p),await u(t,p,En)};return w.jsxs(w.Fragment,{children:[w.jsx("h2",{className:"full-width",children:"create file"}),w.jsxs("form",{onSubmit:h,className:"box column full-width ai-start",children:[w.jsx("input",{autoFocus:!0,ref:r,required:!0,type:"text",name:"folder name",id:"folderName",placeholder:"folder name"}),w.jsx("textarea",{ref:i,name:"content",id:"content",placeholder:"content here",className:"full-width"}),w.jsxs("div",{className:"box full-width",children:[w.jsxs("button",{type:"button",className:"secodary box",children:[w.jsx("label",{htmlFor:"file",children:"upload file"}),w.jsx("input",{onChange:d,ref:s,type:"file",name:"file",id:"file",multiple:!0,className:"hidden"})]}),w.jsx("button",{type:"submit",className:"primary",children:"create"})]})]})]})},vb=()=>{const t=Z(i=>i.userSlice.user),e=dt(),n=hn(),r=async()=>{try{e(wn(!0)),await rx(Nc),e(_v(null)),e(En([])),e(Gs({name:"root",fieldID:"0"})),n(!1,"")}catch(i){e(Bt(i))}finally{e(wn(!1))}};return w.jsxs("ul",{className:"box column full-width",children:[w.jsx("li",{className:"link btn full-width",children:w.jsx(SP,{children:t&&t.username})}),w.jsx("li",{className:"btn full-width",onClick:r,children:"logout"})]})},Fm=({className:t})=>{const e=hn();return w.jsxs("ul",{className:t,children:[w.jsx("li",{className:"btn full-width",onClick:()=>e(!0,"createFolder"),children:"create folder"}),w.jsx("li",{className:"btn full-width",onClick:()=>e(!0,"createFile"),children:"create file"})]})},wb=()=>{const t=Z(e=>e.selectedSlice.selectedFiles);return w.jsxs(w.Fragment,{children:[w.jsx("li",{className:"link btn full-width",children:"open"}),t[0].type==="file"&&w.jsx("li",{className:"link btn full-width",children:"Edite"}),w.jsx("li",{className:"link btn full-width",children:"rename"}),w.jsx(yI,{fileList:t})]})},Eb=()=>{const t=dt(),e=hn(),n=()=>{t(bs(!0)),e(!1,"")};return w.jsx("li",{className:"link btn full-width",onClick:n,children:"select"})},yI=({fileList:t})=>{const e=Z(u=>u.userSlice.user),n=Z(u=>u.pathSlice.path),r=n.length-1,i=n[r].fieldID,s=ib(),o=Es(),a=hn(),l=async(u,c)=>{const h={collName:"folders",fieldID:i};await s(u,c),await o(e,h,En),a(!1,"")};return w.jsx("li",{className:"link btn full-width",onClick:()=>l(t,i),children:"delete"})},Tb=()=>{const t=Z(r=>r.selectedSlice.selectedFiles),e=Z(r=>r.selectedSlice.isSelecting),n=hn();return w.jsxs("ul",{className:"box column full-width",children:[w.jsx(Fm,{className:"box column full-width text-start hide-in-large"}),t.length===0&&e===!1?w.jsx(Eb,{}):null,t.length===1&&w.jsx(wb,{}),t.length>1&&w.jsx(yI,{fileList:t}),w.jsx("li",{className:"btn full-width",onClick:()=>n(!0,"properties"),children:"properties"})]})},Ib=()=>{const t=Z(u=>u.userSlice.user),e=Z(u=>u.pathSlice.path),n=dt(),r=C.useRef(),i=bm(),s=gI(),o=Es(),a=e.length-1,l=async u=>{u.preventDefault();const c={collName:"folders",fieldName:e[a].name,fieldID:e[a].fieldID,content:{name:r.current.value,type:"folder",fieldID:`${t.uid}_${Xn()}`}};await s(t,c),await i(t,c),n(Tv(!1)),n(Iv("")),await o(t,c,En)};return w.jsxs(w.Fragment,{children:[w.jsx("h2",{className:"full-width",children:"create folder"}),w.jsxs("form",{onSubmit:l,className:"box column full-width ai-start",children:[w.jsx("input",{autoFocus:!0,ref:r,required:!0,type:"text",name:"folder name",id:"folderName",placeholder:"folder name"}),w.jsx("button",{type:"submit",className:"primary",children:"create"})]})]})},Sb=()=>{switch(Z(e=>e.windowSlice.window)){case"userNav":return w.jsx(vb,{});case"createFolder":return w.jsx(Ib,{});case"createFile":return w.jsx(_b,{});case"navList":return w.jsx(Fm,{className:"box column full-width"});case"moreOptions":return w.jsx(Tb,{});case"properties":return w.jsx(yb,{});default:return null}},Rb=()=>{const t=Z(i=>i.windowSlice.isOpen),e=Z(i=>i.windowSlice.window),n=hn(),r=`${e}Container`;return t&&w.jsx("div",{className:`${il.overlay} ${il[r]} full-width box center-x center-y`,onClick:()=>n(!1,""),children:w.jsx("div",{className:`${il.body} ${il[e]} box column paper`,onClick:i=>i.stopPropagation(),children:w.jsx(Sb,{})})})},Ab=()=>w.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"InsertDriveFileIcon",title:"InsertDriveFile",children:w.jsx("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"})}),Cb=()=>w.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"FolderIcon",title:"Folder",children:w.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})}),Pb=()=>w.jsx("svg",{style:{width:"40px",fill:"white"},"aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"MenuIcon",children:w.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})}),kb=()=>w.jsx("svg",{style:{width:"30px",fill:"white"},focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ArrowForwardIcon",title:"ArrowForward",children:w.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})}),Nb=()=>w.jsx("svg",{style:{width:"30px",fill:"white"},focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ArrowBackIcon",title:"ArrowBack",children:w.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})}),xb=()=>w.jsx("svg",{style:{width:"50px",fill:"white"},focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"AddBoxIcon",children:w.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"})}),Db=()=>w.jsx("svg",{style:{width:"40px",fill:"white"},focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"AccountCircleIcon",children:w.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})}),Ob=()=>w.jsx("svg",{style:{width:"40px",fill:"white"},focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"MoreVertIcon",children:w.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})}),zi=({name:t})=>{switch(t){case"file":return w.jsx(Ab,{});case"folder":return w.jsx(Cb,{});case"list":return w.jsx(Pb,{});case"forward":return w.jsx(kb,{});case"backward":return w.jsx(Nb,{});case"plus":return w.jsx(xb,{});case"user":return w.jsx(Db,{});case"more":return w.jsx(Ob,{});default:return null}},Lb=({src:t})=>w.jsx("div",{className:"icon",children:t?w.jsx("img",{src:t,alt:"user image"}):w.jsx(zi,{name:"user"})}),Vb=()=>{const t=hn();return w.jsx("header",{children:w.jsxs("div",{className:"box",children:[w.jsx("h2",{children:"FMS"}),w.jsx("button",{className:"box icon",onClick:()=>t(!0,"userNav"),children:w.jsx(Lb,{})})]})})},Mb="_header_4pzv0_1",bb="_navURL_4pzv0_15",Fb="_pathContainer_4pzv0_35",Ub="_actions_4pzv0_75",sl={header:Mb,navURL:bb,pathContainer:Fb,actions:Ub},$b=()=>{const t=Z(f=>f.userSlice.user),e=Z(f=>f.pathSlice.path),n=Z(f=>f.pathSlice.lastVisited),r=e.length-1,i=dt(),s=Es(),o=hn(),a=C.useMemo(()=>e[r]?{collName:"folders",fieldName:e[r].name,fieldID:e[r].fieldID,path:e.map(f=>f.name)}:null,[e,r]),l=f=>{const y=f.target.parentNode;f.target.placeholder="type path or file name",y.classList.remove("shrink"),y.classList.add("grow"),y.classList.remove("no-shadow")},u=f=>{const y=f.target.parentNode;f.target.placeholder="",y.classList.add("shrink"),y.classList.remove("grow"),y.classList.add("no-shadow")};C.useEffect(()=>{if(a&&t)try{(async()=>{await s(t,a,En)})()}catch(f){i(Bt(f))}},[t,s,a,i]);const c=f=>{e.length!==0&&i(Gs(e.slice(0,f+1)))},h=async()=>{e.length>1&&i(Gs(e.slice(0,e.length-1))),s(t,a,En)},d=()=>{s(t,a,En),n!==""&&!e.some(f=>f.name===n.name)&&i(Gs([...e,n]))};return w.jsxs("div",{className:`${sl.header} box full-width nowrap`,children:[w.jsxs("div",{className:"box hide-in-small nowrap",children:[w.jsx("button",{className:"icon",onClick:h,children:w.jsx(zi,{name:"backward"})}),w.jsx("button",{className:"icon",onClick:d,children:w.jsx(zi,{name:"forward"})})]}),w.jsxs("div",{className:`${sl.navURL} box jc-start paper no-shadow nowrap`,children:[w.jsx("div",{className:`box ${sl.pathContainer}`,children:e&&e.map((f,y)=>w.jsxs("span",{onClick:()=>c(y),className:"btn icon",children:[f.name,"/"]},y))}),w.jsx("input",{type:"text",onFocus:l,onBlur:u})]}),w.jsx("div",{className:"box nowrap",children:w.jsxs("div",{className:"box nowrap",children:[w.jsx(Fm,{className:`${sl.actions} box hide-in-small`}),w.jsx("button",{className:"icon",style:{width:"40px"},onClick:()=>o(!0,"moreOptions"),children:w.jsx(zi,{name:"more"})})]})})]})},jb="_container_tcomn_1",Bb="_folderContainer_tcomn_3",W_={container:jb,folderContainer:Bb},zb=()=>{const t=Z(f=>f.userSlice.user),e=Z(f=>f.contentSlice.content),n=Z(f=>f.pathSlice.path),r=Z(f=>f.errorSlice.error),i=Z(f=>f.selectedSlice.selectedFiles),s=Z(f=>f.selectedSlice.isSelecting),o=n.length-1,a=dt(),l=Es(),u=e.content?e.content:[],c=C.useMemo(()=>n[o]?{collName:"folders",fieldName:n[o].name,fieldID:n[o].fieldID,path:n.map(f=>f.name)}:null,[n,o]);C.useEffect(()=>{c&&t&&(async()=>await l(t,c,En))()},[t,l,c]);const h=f=>{f.type==="folder"?(a(Gs([...n,f])),a(GS(f)),a(Zm([])),a(bs(!1))):f.type==="file"&&window.open(f.url,"_blank")},d=f=>{const _=i.some(v=>v.fieldID===f.fieldID)?i.filter(v=>v.fieldID!==f.fieldID):[...i,f];a(Zm(_)),a(bs(!0)),_.length>0?a(bs(!0)):a(bs(!1))};return w.jsx("div",{className:`${W_.container} full-p column box`,children:r?w.jsx(w.Fragment,{children:w.jsx("p",{children:"something went wrong!, try again.."})}):w.jsx("div",{className:`${W_.folderContainer} box full-width ai-start`,children:w.jsx("main",{className:"box jc-start full-width",children:u.length>0?u.map((f,y)=>w.jsxs("div",{onClick:()=>h(f),style:{width:"80px",height:"130px",position:"relative"},className:"icon btn column box",children:[f.type==="folder"?w.jsx(zi,{name:"folder"}):w.jsx(zi,{name:"file"}),w.jsx("span",{style:{width:"100%",overflow:"hidden",flex:"1",padding:"0 10px"},children:f.name}),w.jsx("input",{checked:i.some(_=>_.fieldID===f.fieldID),onChange:()=>d(f),onClick:_=>_.stopPropagation(),className:`btn icon ${s?"":"hidden"}`,type:"checkbox",name:"checbox"})]},y)):w.jsx("p",{children:"this folder is empty"})})})})},Hb=()=>w.jsxs("div",{children:[w.jsx(Vb,{}),w.jsx($b,{}),w.jsx(zb,{})]}),Wb=()=>{const t=C.useRef(),e=C.useRef(),n=dt(),r=async i=>{i.preventDefault();const s={email:t.current.value,password:e.current.value};console.log("login credencials: ",s);try{n(wn(!0)),await YN(Nc,s.email,s.password)}catch(o){n(Bt(o))}finally{n(wn(!1))}};return w.jsxs(w.Fragment,{children:[w.jsx("h2",{children:"Login"}),w.jsxs("form",{className:"box column ",onSubmit:r,children:[w.jsx("input",{ref:t,type:"email",required:!0,placeholder:"email"}),w.jsx("input",{ref:e,type:"password",required:!0,placeholder:"password"}),w.jsx("input",{type:"submit",required:!0,value:"Login",className:"full-width"})]})]})},qb=()=>{const t=C.useRef(),e=C.useRef(),n=C.useRef(),r=dt(),i=async s=>{s.preventDefault();const o={email:t.current.value,username:e.current.value,password:n.current.value};console.log("signup credencials: ",o);try{r(wn(!0)),await XN(Nc,o.email,o.password).then(a=>{ZN(a.user,{displayName:o.username})})}catch(a){r(Bt(a))}finally{r(wn(!1))}};return w.jsxs(w.Fragment,{children:[w.jsx("h2",{children:"signup"}),w.jsxs("form",{className:"box column ",onSubmit:i,children:[w.jsx("input",{ref:t,type:"email",required:!0,placeholder:"email"}),w.jsx("input",{ref:e,type:"text",required:!0,placeholder:"username"}),w.jsx("input",{ref:n,type:"password",required:!0,placeholder:"password"}),w.jsx("input",{type:"submit",required:!0,value:"Signup",className:"full-width"})]})]})},Kb=()=>{const[t,e]=C.useState(0),n=r=>{e(r)};return w.jsx("div",{className:"box center-x center-y full-height container",children:w.jsxs("div",{className:"box",children:[w.jsx("div",{className:"box column",children:w.jsx("h2",{children:"file management system"})}),w.jsx("div",{className:"box column",children:t===0?w.jsxs(w.Fragment,{children:[w.jsx(Wb,{}),w.jsxs("p",{children:["don‘t have an accout, ",w.jsx("button",{className:"icon",onClick:()=>n(1),children:"create account"})]})]}):w.jsxs(w.Fragment,{children:[w.jsx(qb,{}),w.jsxs("p",{children:["allready have an account, ",w.jsx("button",{className:"icon",onClick:()=>n(0),children:"login"})]})]})})]})})};function Gb(){const t=Z(s=>s.userSlice.user),e=dt(),n=bm(),r=rb(),i=Es();return C.useEffect(()=>{const s=nx(Nc,async o=>{if(e(wn(!0)),o)try{e(_v({uid:o.uid,username:o.displayName,email:o.email,photoURL:o.photoURL})),await r(o);const a={collName:"folders",fieldName:"root",fieldID:"0"};await n(o,a),await i(o,a,En)}catch(a){e(Bt(a.message))}finally{e(wn(!1))}else e(wn(!1))});return()=>s()},[e,r,n]),w.jsxs(w.Fragment,{children:[w.jsx(sb,{}),w.jsxs(pP,{children:[t?w.jsx(_l,{path:"/",element:w.jsx(Hb,{})}):w.jsx(_l,{path:"/",element:w.jsx(Kb,{})}),w.jsx(_l,{path:"*",element:w.jsx(ob,{})})]}),w.jsx(Rb,{})]})}Fh.createRoot(document.getElementById("root")).render(w.jsx(Tf.StrictMode,{children:w.jsx(_R,{store:YS,children:w.jsx(EP,{children:w.jsx(Gb,{})})})}));
