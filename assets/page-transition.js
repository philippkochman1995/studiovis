(()=>{var I1=Object.create;var A_=Object.defineProperty;var O1=Object.getOwnPropertyDescriptor;var P1=Object.getOwnPropertyNames;var B1=Object.getPrototypeOf,F1=Object.prototype.hasOwnProperty;var ns=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var z1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of P1(t))!F1.call(e,s)&&s!==n&&A_(e,s,{get:()=>t[s],enumerable:!(i=O1(t,s))||i.enumerable});return e};var Ya=(e,t,n)=>(n=e!=null?I1(B1(e)):{},z1(t||!e||!e.__esModule?A_(n,"default",{value:e,enumerable:!0}):n,e));var B_=ns(qt=>{"use strict";var Kd=Symbol.for("react.transitional.element"),H1=Symbol.for("react.portal"),V1=Symbol.for("react.fragment"),G1=Symbol.for("react.strict_mode"),k1=Symbol.for("react.profiler"),W1=Symbol.for("react.consumer"),X1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),Y1=Symbol.for("react.suspense"),Z1=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),J1=Symbol.for("react.activity"),w_=Symbol.iterator;function K1(e){return e===null||typeof e!="object"?null:(e=w_&&e[w_]||e["@@iterator"],typeof e=="function"?e:null)}var L_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N_=Object.assign,I_={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=I_,this.updater=n||L_}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O_(){}O_.prototype=Ir.prototype;function Qd(e,t,n){this.props=e,this.context=t,this.refs=I_,this.updater=n||L_}var jd=Qd.prototype=new O_;jd.constructor=Qd;N_(jd,Ir.prototype);jd.isPureReactComponent=!0;var C_=Array.isArray;function Jd(){}var Pe={H:null,A:null,T:null,S:null},P_=Object.prototype.hasOwnProperty;function $d(e,t,n){var i=n.ref;return{$$typeof:Kd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Q1(e,t){return $d(e.type,t,e.props)}function tp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kd}function j1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var R_=/\/+/g;function Zd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?j1(""+e.key):t.toString(36)}function $1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Jd,Jd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Nr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Kd:case H1:r=!0;break;case U_:return r=e._init,Nr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Zd(e,0):i,C_(s)?(n="",r!=null&&(n=r.replace(R_,"$&/")+"/"),Nr(s,t,n,"",function(c){return c})):s!=null&&(tp(s)&&(s=Q1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(R_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(C_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Zd(i,l),r+=Nr(i,t,n,a,s);else if(l=K1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Zd(i,l++),r+=Nr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Nr($1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function gu(e,t,n){if(e==null)return e;var i=[],s=0;return Nr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function tE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},eE={map:gu,forEach:function(e,t,n){gu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gu(e,function(){t++}),t},toArray:function(e){return gu(e,function(t){return t})||[]},only:function(e){if(!tp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};qt.Activity=J1;qt.Children=eE;qt.Component=Ir;qt.Fragment=V1;qt.Profiler=k1;qt.PureComponent=Qd;qt.StrictMode=G1;qt.Suspense=Y1;qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;qt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Pe.H.useMemoCache(e)}};qt.cache=function(e){return function(){return e.apply(null,arguments)}};qt.cacheSignal=function(){return null};qt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=N_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!P_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return $d(e.type,s,i)};qt.createContext=function(e){return e={$$typeof:X1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:W1,_context:e},e};qt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)P_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return $d(e,a,s)};qt.createRef=function(){return{current:null}};qt.forwardRef=function(e){return{$$typeof:q1,render:e}};qt.isValidElement=tp;qt.lazy=function(e){return{$$typeof:U_,_payload:{_status:-1,_result:e},_init:tE}};qt.memo=function(e,t){return{$$typeof:Z1,type:e,compare:t===void 0?null:t}};qt.startTransition=function(e){var t=Pe.T,n={};Pe.T=n;try{var i=e(),s=Pe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Jd,D_)}catch(a){D_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Pe.T=t}};qt.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};qt.use=function(e){return Pe.H.use(e)};qt.useActionState=function(e,t,n){return Pe.H.useActionState(e,t,n)};qt.useCallback=function(e,t){return Pe.H.useCallback(e,t)};qt.useContext=function(e){return Pe.H.useContext(e)};qt.useDebugValue=function(){};qt.useDeferredValue=function(e,t){return Pe.H.useDeferredValue(e,t)};qt.useEffect=function(e,t){return Pe.H.useEffect(e,t)};qt.useEffectEvent=function(e){return Pe.H.useEffectEvent(e)};qt.useId=function(){return Pe.H.useId()};qt.useImperativeHandle=function(e,t,n){return Pe.H.useImperativeHandle(e,t,n)};qt.useInsertionEffect=function(e,t){return Pe.H.useInsertionEffect(e,t)};qt.useLayoutEffect=function(e,t){return Pe.H.useLayoutEffect(e,t)};qt.useMemo=function(e,t){return Pe.H.useMemo(e,t)};qt.useOptimistic=function(e,t){return Pe.H.useOptimistic(e,t)};qt.useReducer=function(e,t,n){return Pe.H.useReducer(e,t,n)};qt.useRef=function(e){return Pe.H.useRef(e)};qt.useState=function(e){return Pe.H.useState(e)};qt.useSyncExternalStore=function(e,t,n){return Pe.H.useSyncExternalStore(e,t,n)};qt.useTransition=function(){return Pe.H.useTransition()};qt.version="19.2.8"});var Tl=ns((hU,F_)=>{"use strict";F_.exports=B_()});var Z_=ns(Ge=>{"use strict";function sp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<_u(s,t))e[i]=t,e[n]=s,n=i;else break t}}function is(e){return e.length===0?null:e[0]}function vu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>_u(o,n))l<s&&0>_u(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>_u(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function _u(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(z_=performance,Ge.unstable_now=function(){return z_.now()}):(ep=Date,H_=ep.now(),Ge.unstable_now=function(){return ep.now()-H_});var z_,ep,H_,Es=[],ia=[],nE=1,bi=null,Un=3,ap=!1,Al=!1,wl=!1,rp=!1,k_=typeof setTimeout=="function"?setTimeout:null,W_=typeof clearTimeout=="function"?clearTimeout:null,V_=typeof setImmediate<"u"?setImmediate:null;function yu(e){for(var t=is(ia);t!==null;){if(t.callback===null)vu(ia);else if(t.startTime<=e)vu(ia),t.sortIndex=t.expirationTime,sp(Es,t);else break;t=is(ia)}}function op(e){if(wl=!1,yu(e),!Al)if(is(Es)!==null)Al=!0,Pr||(Pr=!0,Or());else{var t=is(ia);t!==null&&lp(op,t.startTime-e)}}var Pr=!1,Cl=-1,X_=5,q_=-1;function Y_(){return rp?!0:!(Ge.unstable_now()-q_<X_)}function np(){if(rp=!1,Pr){var e=Ge.unstable_now();q_=e;var t=!0;try{t:{Al=!1,wl&&(wl=!1,W_(Cl),Cl=-1),ap=!0;var n=Un;try{e:{for(yu(e),bi=is(Es);bi!==null&&!(bi.expirationTime>e&&Y_());){var i=bi.callback;if(typeof i=="function"){bi.callback=null,Un=bi.priorityLevel;var s=i(bi.expirationTime<=e);if(e=Ge.unstable_now(),typeof s=="function"){bi.callback=s,yu(e),t=!0;break e}bi===is(Es)&&vu(Es),yu(e)}else vu(Es);bi=is(Es)}if(bi!==null)t=!0;else{var a=is(ia);a!==null&&lp(op,a.startTime-e),t=!1}}break t}finally{bi=null,Un=n,ap=!1}t=void 0}}finally{t?Or():Pr=!1}}}var Or;typeof V_=="function"?Or=function(){V_(np)}:typeof MessageChannel<"u"?(ip=new MessageChannel,G_=ip.port2,ip.port1.onmessage=np,Or=function(){G_.postMessage(null)}):Or=function(){k_(np,0)};var ip,G_;function lp(e,t){Cl=k_(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X_=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Un};Ge.unstable_next=function(e){switch(Un){case 1:case 2:case 3:var t=3;break;default:t=Un}var n=Un;Un=t;try{return e()}finally{Un=n}};Ge.unstable_requestPaint=function(){rp=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Un;Un=e;try{return t()}finally{Un=n}};Ge.unstable_scheduleCallback=function(e,t,n){var i=Ge.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:nE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,sp(ia,e),is(Es)===null&&e===is(ia)&&(wl?(W_(Cl),Cl=-1):wl=!0,lp(op,n-i))):(e.sortIndex=s,sp(Es,e),Al||ap||(Al=!0,Pr||(Pr=!0,Or()))),e};Ge.unstable_shouldYield=Y_;Ge.unstable_wrapCallback=function(e){var t=Un;return function(){var n=Un;Un=t;try{return e.apply(this,arguments)}finally{Un=n}}}});var K_=ns((dU,J_)=>{"use strict";J_.exports=Z_()});var j_=ns(Wn=>{"use strict";var iE=Tl();function Q_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sa(){}var kn={d:{f:sa,r:function(){throw Error(Q_(522))},D:sa,C:sa,L:sa,m:sa,X:sa,S:sa,M:sa},p:0,findDOMNode:null},sE=Symbol.for("react.portal");function aE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sE,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Rl=iE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=kn;Wn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Q_(299));return aE(e,t,null,n)};Wn.flushSync=function(e){var t=Rl.T,n=kn.p;try{if(Rl.T=null,kn.p=2,e)return e()}finally{Rl.T=t,kn.p=n,kn.d.f()}};Wn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,kn.d.C(e,t))};Wn.prefetchDNS=function(e){typeof e=="string"&&kn.d.D(e)};Wn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=xu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?kn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&kn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Wn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=xu(t.as,t.crossOrigin);kn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&kn.d.M(e)};Wn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=xu(n,t.crossOrigin);kn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Wn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=xu(t.as,t.crossOrigin);kn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else kn.d.m(e)};Wn.requestFormReset=function(e){kn.d.r(e)};Wn.unstable_batchedUpdates=function(e,t){return e(t)};Wn.useFormState=function(e,t,n){return Rl.H.useFormState(e,t,n)};Wn.useFormStatus=function(){return Rl.H.useHostTransitionStatus()};Wn.version="19.2.8"});var ey=ns((mU,ty)=>{"use strict";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(e){console.error(e)}}$_(),ty.exports=j_()});var dM=ns(Xh=>{"use strict";var un=K_(),wv=Tl(),rE=ey();function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ny(e){if(mc(e)!==e)throw Error(nt(188))}function oE(e){var t=e.alternate;if(!t){if(t=mc(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return ny(s),e;if(a===i)return ny(s),t;a=a.sibling}throw Error(nt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function Uv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Uv(e),t!==null)return t;e=e.sibling}return null}var ze=Object.assign,lE=Symbol.for("react.element"),Su=Symbol.for("react.transitional.element"),Bl=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Nv=Symbol.for("react.consumer"),Ls=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Wp=Symbol.for("react.suspense_list"),Fm=Symbol.for("react.memo"),aa=Symbol.for("react.lazy"),Xp=Symbol.for("react.activity"),cE=Symbol.for("react.memo_cache_sentinel"),iy=Symbol.iterator;function Dl(e){return e===null||typeof e!="object"?null:(e=iy&&e[iy]||e["@@iterator"],typeof e=="function"?e:null)}var uE=Symbol.for("react.client.reference");function qp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===uE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Gp:return"Profiler";case Lv:return"StrictMode";case kp:return"Suspense";case Wp:return"SuspenseList";case Xp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Bl:return"Portal";case Ls:return e.displayName||"Context";case Nv:return(e._context.displayName||"Context")+".Consumer";case Bm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fm:return t=e.displayName||null,t!==null?t:qp(e.type)||"Memo";case aa:t=e._payload,e=e._init;try{return qp(e(t))}catch{}}return null}var Fl=Array.isArray,Bt=wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se=rE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$a={pending:!1,data:null,method:null,action:null},Yp=[],kr=-1;function ls(e){return{current:e}}function gn(e){0>kr||(e.current=Yp[kr],Yp[kr]=null,kr--)}function Oe(e,t){kr++,Yp[kr]=e.current,e.current=t}var os=ls(null),ec=ls(null),ga=ls(null),th=ls(null);function eh(e,t){switch(Oe(ga,t),Oe(ec,e),Oe(os,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?uv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=uv(t),e=$S(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gn(os),Oe(os,e)}function oo(){gn(os),gn(ec),gn(ga)}function Zp(e){e.memoizedState!==null&&Oe(th,e);var t=os.current,n=$S(t,e.type);t!==n&&(Oe(ec,e),Oe(os,n))}function nh(e){ec.current===e&&(gn(os),gn(ec)),th.current===e&&(gn(th),fc._currentValue=$a)}var cp,sy;function Ja(e){if(cp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cp=t&&t[1]||"",sy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cp+e+sy}var up=!1;function hp(e,t){if(!e||up)return"";up=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{up=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ja(n):""}function hE(e,t){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==t&&t!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return hp(e.type,!1);case 11:return hp(e.type.render,!1);case 1:return hp(e.type,!0);case 31:return Ja("Activity");default:return""}}function ay(e){try{var t="",n=null;do t+=hE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Jp=Object.prototype.hasOwnProperty,zm=un.unstable_scheduleCallback,fp=un.unstable_cancelCallback,fE=un.unstable_shouldYield,dE=un.unstable_requestPaint,ui=un.unstable_now,pE=un.unstable_getCurrentPriorityLevel,Iv=un.unstable_ImmediatePriority,Ov=un.unstable_UserBlockingPriority,ih=un.unstable_NormalPriority,mE=un.unstable_LowPriority,Pv=un.unstable_IdlePriority,gE=un.log,_E=un.unstable_setDisableYieldValue,gc=null,hi=null;function ha(e){if(typeof gE=="function"&&_E(e),hi&&typeof hi.setStrictMode=="function")try{hi.setStrictMode(gc,e)}catch{}}var fi=Math.clz32?Math.clz32:xE,yE=Math.log,vE=Math.LN2;function xE(e){return e>>>=0,e===0?32:31-(yE(e)/vE|0)|0}var Mu=256,bu=262144,Eu=4194304;function Ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ka(i):(r&=o,r!==0?s=Ka(r):n||(n=o&~e,n!==0&&(s=Ka(n))))):(o=i&~a,o!==0?s=Ka(o):r!==0?s=Ka(r):n||(n=i&~e,n!==0&&(s=Ka(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function _c(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function SE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(){var e=Eu;return Eu<<=1,(Eu&62914560)===0&&(Eu=4194304),e}function dp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ME(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-fi(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Fv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Fv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-fi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function zv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-fi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Hv(e,t){var n=t&-t;return n=(n&42)!==0?1:Hm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Hm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vv(){var e=Se.p;return e!==0?e:(e=window.event,e===void 0?32:uM(e.type))}function ry(e,t){var n=Se.p;try{return Se.p=e,t()}finally{Se.p=n}}var Ra=Math.random().toString(36).slice(2),bn="__reactFiber$"+Ra,ei="__reactProps$"+Ra,vo="__reactContainer$"+Ra,Kp="__reactEvents$"+Ra,bE="__reactListeners$"+Ra,EE="__reactHandles$"+Ra,oy="__reactResources$"+Ra,vc="__reactMarker$"+Ra;function Gm(e){delete e[bn],delete e[ei],delete e[Kp],delete e[bE],delete e[EE]}function Wr(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vo]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mv(e);e!==null;){if(n=e[bn])return n;e=mv(e)}return t}e=n,n=e.parentNode}return null}function xo(e){if(e=e[bn]||e[vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function to(e){var t=e[oy];return t||(t=e[oy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function mn(e){e[vc]=!0}var Gv=new Set,kv={};function cr(e,t){lo(e,t),lo(e+"Capture",t)}function lo(e,t){for(kv[e]=t,e=0;e<t.length;e++)Gv.add(t[e])}var TE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ly={},cy={};function AE(e){return Jp.call(cy,e)?!0:Jp.call(ly,e)?!1:TE.test(e)?cy[e]=!0:(ly[e]=!0,!1)}function zu(e,t,n){if(AE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Tu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ts(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qp(e){if(!e._valueTracker){var t=Wv(e)?"checked":"value";e._valueTracker=wE(e,t,""+e[t])}}function Xv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Wv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function sh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var CE=/[\n"\\]/g;function Ci(e){return e.replace(CE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ti(t)):e.value!==""+Ti(t)&&(e.value=""+Ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?$p(e,r,Ti(t)):n!=null?$p(e,r,Ti(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Ti(o):e.removeAttribute("name")}function qv(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Qp(e);return}n=n!=null?""+Ti(n):"",t=t!=null?""+Ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Qp(e)}function $p(e,t,n){t==="number"&&sh(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function eo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ti(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yv(e,t,n){if(t!=null&&(t=""+Ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ti(n):""}function Zv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if(Fl(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Qp(e)}function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var RE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||RE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jv(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&uy(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&uy(e,a,t[a])}function km(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var DE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),UE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hu(e){return UE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ns(){}var tm=null;function Wm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,no=null;function hy(e){var t=xo(e);if(t&&(e=t.stateNode)){var n=e[ei]||null;t:switch(e=t.stateNode,t.type){case"input":if(jp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ci(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ei]||null;if(!s)throw Error(nt(90));jp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Xv(i)}break t;case"textarea":Yv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&eo(e,!!n.multiple,t,!1)}}}var pp=!1;function Kv(e,t,n){if(pp)return e(t,n);pp=!0;try{var i=e(t);return i}finally{if(pp=!1,(Xr!==null||no!==null)&&(Vh(),Xr&&(t=Xr,e=no,no=Xr=null,hy(t),e)))for(t=0;t<e.length;t++)hy(e[t])}}function nc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ei]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var Fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=!1;if(Fs)try{Br={},Object.defineProperty(Br,"passive",{get:function(){em=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{em=!1}var Br,fa=null,Xm=null,Vu=null;function Qv(){if(Vu)return Vu;var e,t=Xm,n=t.length,i,s="value"in fa?fa.value:fa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Vu=s.slice(e,1<i?1-i:void 0)}function Gu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Au(){return!0}function fy(){return!1}function ni(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Au:fy,this.isPropagationStopped=fy,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Au)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Au)},persist:function(){},isPersistent:Au}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=ni(ur),xc=ze({},ur,{view:0,detail:0}),LE=ni(xc),mp,gp,Ul,Uh=ze({},xc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(mp=e.screenX-Ul.screenX,gp=e.screenY-Ul.screenY):gp=mp=0,Ul=e),mp)},movementY:function(e){return"movementY"in e?e.movementY:gp}}),dy=ni(Uh),NE=ze({},Uh,{dataTransfer:0}),IE=ni(NE),OE=ze({},xc,{relatedTarget:0}),_p=ni(OE),PE=ze({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),BE=ni(PE),FE=ze({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zE=ni(FE),HE=ze({},ur,{data:0}),py=ni(HE),VE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kE[e])?!!t[e]:!1}function qm(){return WE}var XE=ze({},xc,{key:function(e){if(e.key){var t=VE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(e){return e.type==="keypress"?Gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qE=ni(XE),YE=ze({},Uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=ni(YE),ZE=ze({},xc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),JE=ni(ZE),KE=ze({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),QE=ni(KE),jE=ze({},Uh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$E=ni(jE),tT=ze({},ur,{newState:0,oldState:0}),eT=ni(tT),nT=[9,13,27,32],Ym=Fs&&"CompositionEvent"in window,Gl=null;Fs&&"documentMode"in document&&(Gl=document.documentMode);var iT=Fs&&"TextEvent"in window&&!Gl,jv=Fs&&(!Ym||Gl&&8<Gl&&11>=Gl),gy=" ",_y=!1;function $v(e,t){switch(e){case"keyup":return nT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function sT(e,t){switch(e){case"compositionend":return tx(t);case"keypress":return t.which!==32?null:(_y=!0,gy);case"textInput":return e=t.data,e===gy&&_y?null:e;default:return null}}function aT(e,t){if(qr)return e==="compositionend"||!Ym&&$v(e,t)?(e=Qv(),Vu=Xm=fa=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jv&&t.locale!=="ko"?null:t.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rT[e.type]:t==="textarea"}function ex(e,t,n,i){Xr?no?no.push(i):no=[i]:Xr=i,t=Mh(t,"onChange"),0<t.length&&(n=new Dh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var kl=null,ic=null;function oT(e){KS(e,0)}function Lh(e){var t=zl(e);if(Xv(t))return e}function vy(e,t){if(e==="change")return t}var nx=!1;Fs&&(Fs?(Cu="oninput"in document,Cu||(yp=document.createElement("div"),yp.setAttribute("oninput","return;"),Cu=typeof yp.oninput=="function"),wu=Cu):wu=!1,nx=wu&&(!document.documentMode||9<document.documentMode));var wu,Cu,yp;function xy(){kl&&(kl.detachEvent("onpropertychange",ix),ic=kl=null)}function ix(e){if(e.propertyName==="value"&&Lh(ic)){var t=[];ex(t,ic,e,Wm(e)),Kv(oT,t)}}function lT(e,t,n){e==="focusin"?(xy(),kl=t,ic=n,kl.attachEvent("onpropertychange",ix)):e==="focusout"&&xy()}function cT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lh(ic)}function uT(e,t){if(e==="click")return Lh(t)}function hT(e,t){if(e==="input"||e==="change")return Lh(t)}function fT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pi=typeof Object.is=="function"?Object.is:fT;function sc(e,t){if(pi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Jp.call(t,s)||!pi(e[s],t[s]))return!1}return!0}function Sy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function My(e,t){var n=Sy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Sy(n)}}function sx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ax(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sh(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sh(e.document)}return t}function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dT=Fs&&"documentMode"in document&&11>=document.documentMode,Yr=null,nm=null,Wl=null,im=!1;function by(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;im||Yr==null||Yr!==sh(i)||(i=Yr,"selectionStart"in i&&Zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wl&&sc(Wl,i)||(Wl=i,i=Mh(nm,"onSelect"),0<i.length&&(t=new Dh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Yr)))}function Za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},vp={},rx={};Fs&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function hr(e){if(vp[e])return vp[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rx)return vp[e]=t[n];return e}var ox=hr("animationend"),lx=hr("animationiteration"),cx=hr("animationstart"),pT=hr("transitionrun"),mT=hr("transitionstart"),gT=hr("transitioncancel"),ux=hr("transitionend"),hx=new Map,sm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sm.push("scrollEnd");function ki(e,t){hx.set(e,t),cr(t,[e])}var ah=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],Jr=0,Jm=0;function Nh(){for(var e=Jr,t=Jm=Jr=0;t<e;){var n=Ei[t];Ei[t++]=null;var i=Ei[t];Ei[t++]=null;var s=Ei[t];Ei[t++]=null;var a=Ei[t];if(Ei[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&fx(n,s,a)}}function Ih(e,t,n,i){Ei[Jr++]=e,Ei[Jr++]=t,Ei[Jr++]=n,Ei[Jr++]=i,Jm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Km(e,t,n,i){return Ih(e,t,n,i),rh(e)}function fr(e,t){return Ih(e,null,null,t),rh(e)}function fx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-fi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function rh(e){if(50<$l)throw $l=0,Tm=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Kr={};function _T(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,i){return new _T(e,t,n,i)}function Qm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Os(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ku(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Qm(e)&&(r=1);else if(typeof e=="string")r=xA(e,n,os.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Xp:return e=li(31,n,t,s),e.elementType=Xp,e.lanes=a,e;case Gr:return tr(n.children,s,a,t);case Lv:r=8,s|=24;break;case Gp:return e=li(12,n,t,s|2),e.elementType=Gp,e.lanes=a,e;case kp:return e=li(13,n,t,s),e.elementType=kp,e.lanes=a,e;case Wp:return e=li(19,n,t,s),e.elementType=Wp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:r=10;break t;case Nv:r=9;break t;case Bm:r=11;break t;case Fm:r=14;break t;case aa:r=16,i=null;break t}r=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=li(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function tr(e,t,n,i){return e=li(7,e,i,t),e.lanes=n,e}function xp(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function px(e){var t=li(18,null,null,0);return t.stateNode=e,t}function Sp(e,t,n){return t=li(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ey=new WeakMap;function Ri(e,t){if(typeof e=="object"&&e!==null){var n=Ey.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ay(t)},Ey.set(e,t),t)}return{value:e,source:t,stack:ay(t)}}var Qr=[],jr=0,oh=null,ac=0,Ai=[],wi=0,Ta=null,ss=1,as="";function Ds(e,t){Qr[jr++]=ac,Qr[jr++]=oh,oh=e,ac=t}function mx(e,t,n){Ai[wi++]=ss,Ai[wi++]=as,Ai[wi++]=Ta,Ta=e;var i=ss;e=as;var s=32-fi(i)-1;i&=~(1<<s),n+=1;var a=32-fi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ss=1<<32-fi(t)+s|n<<s|i,as=a+e}else ss=1<<a|n<<s|i,as=e}function jm(e){e.return!==null&&(Ds(e,1),mx(e,1,0))}function $m(e){for(;e===oh;)oh=Qr[--jr],Qr[jr]=null,ac=Qr[--jr],Qr[jr]=null;for(;e===Ta;)Ta=Ai[--wi],Ai[wi]=null,as=Ai[--wi],Ai[wi]=null,ss=Ai[--wi],Ai[wi]=null}function gx(e,t){Ai[wi++]=ss,Ai[wi++]=as,Ai[wi++]=Ta,ss=t.id,as=t.overflow,Ta=e}var En=null,Fe=null,ge=!1,_a=null,Di=!1,am=Error(nt(519));function Aa(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rc(Ri(t,e)),am}function Ty(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[bn]=e,t[ei]=i,n){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(n=0;n<uc.length;n++)re(uc[n],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),qv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Zv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||jS(t.textContent,n)?(i.popover!=null&&(re("beforetoggle",t),re("toggle",t)),i.onScroll!=null&&re("scroll",t),i.onScrollEnd!=null&&re("scrollend",t),i.onClick!=null&&(t.onclick=Ns),t=!0):t=!1,t||Aa(e,!0)}function Ay(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:En=En.return}}function Fr(e){if(e!==En)return!1;if(!ge)return Ay(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Dm(e.type,e.memoizedProps)),n=!n),n&&Fe&&Aa(e),Ay(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Fe=pv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Fe=pv(e)}else t===27?(t=Fe,Da(e.type)?(e=Im,Im=null,Fe=e):Fe=t):Fe=En?Li(e.stateNode.nextSibling):null;return!0}function sr(){Fe=En=null,ge=!1}function Mp(){var e=_a;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),_a=null),e}function rc(e){_a===null?_a=[e]:_a.push(e)}var rm=ls(null),dr=null,Is=null;function oa(e,t,n){Oe(rm,t._currentValue),t._currentValue=n}function Ps(e){e._currentValue=rm.current,gn(rm)}function om(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function lm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),om(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(nt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),om(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function So(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(nt(387));if(r=r.memoizedProps,r!==null){var o=s.type;pi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===th.current){if(r=s.alternate,r===null)throw Error(nt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(fc):e=[fc])}s=s.return}e!==null&&lm(t,e,n,i),t.flags|=262144}function lh(e){for(e=e.firstContext;e!==null;){if(!pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){dr=e,Is=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return _x(dr,e)}function Ru(e,t){return dr===null&&ar(e),_x(e,t)}function _x(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Is===null){if(e===null)throw Error(nt(308));Is=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Is=Is.next=t;return n}var yT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},vT=un.unstable_scheduleCallback,xT=un.unstable_NormalPriority,sn={$$typeof:Ls,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tg(){return{controller:new yT,data:new Map,refCount:0}}function Sc(e){e.refCount--,e.refCount===0&&vT(xT,function(){e.controller.abort()})}var Xl=null,cm=0,uo=0,io=null;function ST(e,t){if(Xl===null){var n=Xl=[];cm=0,uo=Tg(),io={status:"pending",value:void 0,then:function(i){n.push(i)}}}return cm++,t.then(wy,wy),t}function wy(){if(--cm===0&&Xl!==null){io!==null&&(io.status="fulfilled");var e=Xl;Xl=null,uo=0,io=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function MT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Cy=Bt.S;Bt.S=function(e,t){US=ui(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ST(e,t),Cy!==null&&Cy(e,t)};var er=ls(null);function eg(){var e=er.current;return e!==null?e:Ie.pooledCache}function Wu(e,t){t===null?Oe(er,er.current):Oe(er,t.pool)}function yx(){var e=eg();return e===null?null:{parent:sn._currentValue,pool:e}}var Mo=Error(nt(460)),ng=Error(nt(474)),Oh=Error(nt(542)),ch={then:function(){}};function Ry(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ns,Ns),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uy(e),e;default:if(typeof t.status=="string")t.then(Ns,Ns);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uy(e),e}throw nr=t,Mo}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(nr=n,Mo):n}}var nr=null;function Dy(){if(nr===null)throw Error(nt(459));var e=nr;return nr=null,e}function Uy(e){if(e===Mo||e===Oh)throw Error(nt(483))}var so=null,oc=0;function Du(e){var t=oc;return oc+=1,so===null&&(so=[]),vx(so,e,t)}function Ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Uu(e,t){throw t.$$typeof===lE?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xx(e){function t(h,_){if(e){var M=h.deletions;M===null?(h.deletions=[_],h.flags|=16):M.push(_)}}function n(h,_){if(!e)return null;for(;_!==null;)t(h,_),_=_.sibling;return null}function i(h){for(var _=new Map;h!==null;)h.key!==null?_.set(h.key,h):_.set(h.index,h),h=h.sibling;return _}function s(h,_){return h=Os(h,_),h.index=0,h.sibling=null,h}function a(h,_,M){return h.index=M,e?(M=h.alternate,M!==null?(M=M.index,M<_?(h.flags|=67108866,_):M):(h.flags|=67108866,_)):(h.flags|=1048576,_)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,_,M,v){return _===null||_.tag!==6?(_=xp(M,h.mode,v),_.return=h,_):(_=s(_,M),_.return=h,_)}function l(h,_,M,v){var E=M.type;return E===Gr?f(h,_,M.props.children,v,M.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===aa&&Qa(E)===_.type)?(_=s(_,M.props),Ll(_,M),_.return=h,_):(_=ku(M.type,M.key,M.props,null,h.mode,v),Ll(_,M),_.return=h,_)}function c(h,_,M,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Sp(M,h.mode,v),_.return=h,_):(_=s(_,M.children||[]),_.return=h,_)}function f(h,_,M,v,E){return _===null||_.tag!==7?(_=tr(M,h.mode,v,E),_.return=h,_):(_=s(_,M),_.return=h,_)}function p(h,_,M){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=xp(""+_,h.mode,M),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Su:return M=ku(_.type,_.key,_.props,null,h.mode,M),Ll(M,_),M.return=h,M;case Bl:return _=Sp(_,h.mode,M),_.return=h,_;case aa:return _=Qa(_),p(h,_,M)}if(Fl(_)||Dl(_))return _=tr(_,h.mode,M,null),_.return=h,_;if(typeof _.then=="function")return p(h,Du(_),M);if(_.$$typeof===Ls)return p(h,Ru(h,_),M);Uu(h,_)}return null}function u(h,_,M,v){var E=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return E!==null?null:o(h,_,""+M,v);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Su:return M.key===E?l(h,_,M,v):null;case Bl:return M.key===E?c(h,_,M,v):null;case aa:return M=Qa(M),u(h,_,M,v)}if(Fl(M)||Dl(M))return E!==null?null:f(h,_,M,v,null);if(typeof M.then=="function")return u(h,_,Du(M),v);if(M.$$typeof===Ls)return u(h,_,Ru(h,M),v);Uu(h,M)}return null}function d(h,_,M,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return h=h.get(M)||null,o(_,h,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Su:return h=h.get(v.key===null?M:v.key)||null,l(_,h,v,E);case Bl:return h=h.get(v.key===null?M:v.key)||null,c(_,h,v,E);case aa:return v=Qa(v),d(h,_,M,v,E)}if(Fl(v)||Dl(v))return h=h.get(M)||null,f(_,h,v,E,null);if(typeof v.then=="function")return d(h,_,M,Du(v),E);if(v.$$typeof===Ls)return d(h,_,M,Ru(_,v),E);Uu(_,v)}return null}function y(h,_,M,v){for(var E=null,T=null,C=_,x=_=0,A=null;C!==null&&x<M.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var R=u(h,C,M[x],v);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(h,C),_=a(R,_,x),T===null?E=R:T.sibling=R,T=R,C=A}if(x===M.length)return n(h,C),ge&&Ds(h,x),E;if(C===null){for(;x<M.length;x++)C=p(h,M[x],v),C!==null&&(_=a(C,_,x),T===null?E=C:T.sibling=C,T=C);return ge&&Ds(h,x),E}for(C=i(C);x<M.length;x++)A=d(C,h,x,M[x],v),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?x:A.key),_=a(A,_,x),T===null?E=A:T.sibling=A,T=A);return e&&C.forEach(function(D){return t(h,D)}),ge&&Ds(h,x),E}function b(h,_,M,v){if(M==null)throw Error(nt(151));for(var E=null,T=null,C=_,x=_=0,A=null,R=M.next();C!==null&&!R.done;x++,R=M.next()){C.index>x?(A=C,C=null):A=C.sibling;var D=u(h,C,R.value,v);if(D===null){C===null&&(C=A);break}e&&C&&D.alternate===null&&t(h,C),_=a(D,_,x),T===null?E=D:T.sibling=D,T=D,C=A}if(R.done)return n(h,C),ge&&Ds(h,x),E;if(C===null){for(;!R.done;x++,R=M.next())R=p(h,R.value,v),R!==null&&(_=a(R,_,x),T===null?E=R:T.sibling=R,T=R);return ge&&Ds(h,x),E}for(C=i(C);!R.done;x++,R=M.next())R=d(C,h,x,R.value,v),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?x:R.key),_=a(R,_,x),T===null?E=R:T.sibling=R,T=R);return e&&C.forEach(function(P){return t(h,P)}),ge&&Ds(h,x),E}function m(h,_,M,v){if(typeof M=="object"&&M!==null&&M.type===Gr&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Su:t:{for(var E=M.key;_!==null;){if(_.key===E){if(E=M.type,E===Gr){if(_.tag===7){n(h,_.sibling),v=s(_,M.props.children),v.return=h,h=v;break t}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===aa&&Qa(E)===_.type){n(h,_.sibling),v=s(_,M.props),Ll(v,M),v.return=h,h=v;break t}n(h,_);break}else t(h,_);_=_.sibling}M.type===Gr?(v=tr(M.props.children,h.mode,v,M.key),v.return=h,h=v):(v=ku(M.type,M.key,M.props,null,h.mode,v),Ll(v,M),v.return=h,h=v)}return r(h);case Bl:t:{for(E=M.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){n(h,_.sibling),v=s(_,M.children||[]),v.return=h,h=v;break t}else{n(h,_);break}else t(h,_);_=_.sibling}v=Sp(M,h.mode,v),v.return=h,h=v}return r(h);case aa:return M=Qa(M),m(h,_,M,v)}if(Fl(M))return y(h,_,M,v);if(Dl(M)){if(E=Dl(M),typeof E!="function")throw Error(nt(150));return M=E.call(M),b(h,_,M,v)}if(typeof M.then=="function")return m(h,_,Du(M),v);if(M.$$typeof===Ls)return m(h,_,Ru(h,M),v);Uu(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,_!==null&&_.tag===6?(n(h,_.sibling),v=s(_,M),v.return=h,h=v):(n(h,_),v=xp(M,h.mode,v),v.return=h,h=v),r(h)):n(h,_)}return function(h,_,M,v){try{oc=0;var E=m(h,_,M,v);return so=null,E}catch(C){if(C===Mo||C===Oh)throw C;var T=li(29,C,null,h.mode);return T.lanes=v,T.return=h,T}}}var rr=xx(!0),Sx=xx(!1),ra=!1;function ig(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function um(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(xe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=rh(e),fx(e,null,n),t}return Ih(e,i,t,n),rh(e)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zv(e,n)}}function bp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hm=!1;function Yl(){if(hm){var e=io;if(e!==null)throw e}}function Zl(e,t,n,i){hm=!1;var s=e.updateQueue;ra=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ue&u)===u:(i&u)===u){u!==0&&u===uo&&(hm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var y=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(m,p,u);break t}p=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,u=typeof y=="function"?y.call(m,p,u):y,u==null)break t;p=ze({},p,u);break t;case 2:ra=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Ca|=r,e.lanes=r,e.memoizedState=p}}function Mx(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function bx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mx(n[e],t)}var ho=ls(null),uh=ls(0);function Ly(e,t){e=Gs,Oe(uh,e),Oe(ho,t),Gs=e|t.baseLanes}function fm(){Oe(uh,Gs),Oe(ho,ho.current)}function sg(){Gs=uh.current,gn(ho),gn(uh)}var mi=ls(null),Ui=null;function la(e){var t=e.alternate;Oe(je,je.current&1),Oe(mi,e),Ui===null&&(t===null||ho.current!==null||t.memoizedState!==null)&&(Ui=e)}function dm(e){Oe(je,je.current),Oe(mi,e),Ui===null&&(Ui=e)}function Ex(e){e.tag===22?(Oe(je,je.current),Oe(mi,e),Ui===null&&(Ui=e)):ca(e)}function ca(){Oe(je,je.current),Oe(mi,mi.current)}function oi(e){gn(mi),Ui===e&&(Ui=null),gn(je)}var je=ls(0);function hh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lm(n)||Nm(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zs=0,Jt=null,Le=null,en=null,fh=!1,ao=!1,or=!1,dh=0,lc=0,ro=null,bT=0;function Ke(){throw Error(nt(321))}function ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pi(e[n],t[n]))return!1;return!0}function rg(e,t,n,i,s,a){return zs=a,Jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bt.H=e===null||e.memoizedState===null?eS:_g,or=!1,a=n(i,s),or=!1,ao&&(a=Ax(t,n,i,s)),Tx(e),a}function Tx(e){Bt.H=cc;var t=Le!==null&&Le.next!==null;if(zs=0,en=Le=Jt=null,fh=!1,lc=0,ro=null,t)throw Error(nt(300));e===null||an||(e=e.dependencies,e!==null&&lh(e)&&(an=!0))}function Ax(e,t,n,i){Jt=e;var s=0;do{if(ao&&(ro=null),lc=0,ao=!1,25<=s)throw Error(nt(301));if(s+=1,en=Le=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Bt.H=nS,a=t(n,i)}while(ao);return a}function ET(){var e=Bt.H,t=e.useState()[0];return t=typeof t.then=="function"?Mc(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Jt.flags|=1024),t}function og(){var e=dh!==0;return dh=0,e}function lg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cg(e){if(fh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fh=!1}zs=0,en=Le=Jt=null,ao=!1,lc=dh=0,ro=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Jt.memoizedState=en=e:en=en.next=e,en}function $e(){if(Le===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=en===null?Jt.memoizedState:en.next;if(t!==null)en=t,Le=e;else{if(e===null)throw Jt.alternate===null?Error(nt(467)):Error(nt(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},en===null?Jt.memoizedState=en=e:en=en.next=e}return en}function Ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mc(e){var t=lc;return lc+=1,ro===null&&(ro=[]),e=vx(ro,e,t),t=Jt,(en===null?t.memoizedState:en.next)===null&&(t=t.alternate,Bt.H=t===null||t.memoizedState===null?eS:_g),e}function Bh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mc(e);if(e.$$typeof===Ls)return Tn(e)}throw Error(nt(438,String(e)))}function ug(e){var t=null,n=Jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ph(),Jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=cE;return t.index++,n}function Hs(e,t){return typeof t=="function"?t(e):t}function Xu(e){var t=$e();return hg(t,Le,e)}function hg(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ue&p)===p:(zs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===uo&&(f=!0);else if((zs&u)===u){c=c.next,u===uo&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Jt.lanes|=u,Ca|=u;p=c.action,or&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Jt.lanes|=p,Ca|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!pi(a,e.memoizedState)&&(an=!0,f&&(n=io,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ep(e){var t=$e(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);pi(a,t.memoizedState)||(an=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function wx(e,t,n){var i=Jt,s=$e(),a=ge;if(a){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var r=!pi((Le||s).memoizedState,n);if(r&&(s.memoizedState=n,an=!0),s=s.queue,fg(Dx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||en!==null&&en.memoizedState.tag&1){if(i.flags|=2048,fo(9,{destroy:void 0},Rx.bind(null,i,s,n,t),null),Ie===null)throw Error(nt(349));a||(zs&127)!==0||Cx(i,t,n)}return n}function Cx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Jt.updateQueue,t===null?(t=Ph(),Jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rx(e,t,n,i){t.value=n,t.getSnapshot=i,Ux(t)&&Lx(e)}function Dx(e,t,n){return n(function(){Ux(t)&&Lx(e)})}function Ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pi(e,n)}catch{return!0}}function Lx(e){var t=fr(e,2);t!==null&&ti(t,e,2)}function pm(e){var t=Xn();if(typeof e=="function"){var n=e;if(e=n(),or){ha(!0);try{n()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:e},t}function Nx(e,t,n,i){return e.baseState=n,hg(e,Le,typeof i=="function"?i:Hs)}function TT(e,t,n,i,s){if(zh(e))throw Error(nt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Bt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Ix(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ix(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Bt.T,r={};Bt.T=r;try{var o=n(s,i),l=Bt.S;l!==null&&l(r,o),Ny(e,t,o)}catch(c){mm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Bt.T=a}}else try{a=n(s,i),Ny(e,t,a)}catch(c){mm(e,t,c)}}function Ny(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Iy(e,t,i)},function(i){return mm(e,t,i)}):Iy(e,t,n)}function Iy(e,t,n){t.status="fulfilled",t.value=n,Ox(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ix(e,n)))}function mm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ox(t),t=t.next;while(t!==i)}e.action=null}function Ox(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Px(e,t){return t}function Oy(e,t){if(ge){var n=Ie.formState;if(n!==null){t:{var i=Jt;if(ge){if(Fe){e:{for(var s=Fe,a=Di;s.nodeType!==8;){if(!a){s=null;break e}if(s=Li(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Fe=Li(s.nextSibling),i=s.data==="F!";break t}}Aa(i)}i=!1}i&&(t=n[0])}}return n=Xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Px,lastRenderedState:t},n.queue=i,n=jx.bind(null,Jt,i),i.dispatch=n,i=pm(!1),a=gg.bind(null,Jt,!1,i.queue),i=Xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=TT.bind(null,Jt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Py(e){var t=$e();return Bx(t,Le,e)}function Bx(e,t,n){if(t=hg(e,t,Px)[0],e=Xu(Hs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Mc(t)}catch(r){throw r===Mo?Oh:r}else i=t;t=$e();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Jt.flags|=2048,fo(9,{destroy:void 0},AT.bind(null,s,n),null)),[i,a,e]}function AT(e,t){e.action=t}function By(e){var t=$e(),n=Le;if(n!==null)return Bx(t,n,e);$e(),t=t.memoizedState,n=$e();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Jt.updateQueue,t===null&&(t=Ph(),Jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fx(){return $e().memoizedState}function qu(e,t,n,i){var s=Xn();Jt.flags|=e,s.memoizedState=fo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Fh(e,t,n,i){var s=$e();i=i===void 0?null:i;var a=s.memoizedState.inst;Le!==null&&i!==null&&ag(i,Le.memoizedState.deps)?s.memoizedState=fo(t,a,n,i):(Jt.flags|=e,s.memoizedState=fo(1|t,a,n,i))}function Fy(e,t){qu(8390656,8,e,t)}function fg(e,t){Fh(2048,8,e,t)}function wT(e){Jt.flags|=4;var t=Jt.updateQueue;if(t===null)t=Ph(),Jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zx(e){var t=$e().memoizedState;return wT({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function Hx(e,t){return Fh(4,2,e,t)}function Vx(e,t){return Fh(4,4,e,t)}function Gx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kx(e,t,n){n=n!=null?n.concat([e]):null,Fh(4,4,Gx.bind(null,t,e),n)}function dg(){}function Wx(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ag(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Xx(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ag(t,i[1]))return i[0];if(i=e(),or){ha(!0);try{e()}finally{ha(!1)}}return n.memoizedState=[i,t],i}function pg(e,t,n){return n===void 0||(zs&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=NS(),Jt.lanes|=e,Ca|=e,n)}function qx(e,t,n,i){return pi(n,t)?n:ho.current!==null?(e=pg(e,n,i),pi(e,t)||(an=!0),e):(zs&42)===0||(zs&1073741824)!==0&&(ue&261930)===0?(an=!0,e.memoizedState=n):(e=NS(),Jt.lanes|=e,Ca|=e,t)}function Yx(e,t,n,i,s){var a=Se.p;Se.p=a!==0&&8>a?a:8;var r=Bt.T,o={};Bt.T=o,gg(e,!1,t,n);try{var l=s(),c=Bt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=MT(l,i);Jl(e,t,f,di(e))}else Jl(e,t,i,di(e))}catch(p){Jl(e,t,{then:function(){},status:"rejected",reason:p},di())}finally{Se.p=a,r!==null&&o.types!==null&&(r.types=o.types),Bt.T=r}}function CT(){}function gm(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var s=Zx(e).queue;Yx(e,s,t,$a,n===null?CT:function(){return Jx(e),n(i)})}function Zx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$a,baseState:$a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:$a},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jx(e){var t=Zx(e);t.next===null&&(t=e.alternate.memoizedState),Jl(e,t.next.queue,{},di())}function mg(){return Tn(fc)}function Kx(){return $e().memoizedState}function Qx(){return $e().memoizedState}function RT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=di();e=ya(n);var i=va(t,e,n);i!==null&&(ti(i,t,n),ql(i,t,n)),t={cache:tg()},e.payload=t;return}t=t.return}}function DT(e,t,n){var i=di();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e)?$x(t,n):(n=Km(e,t,n,i),n!==null&&(ti(n,e,i),tS(n,t,i)))}function jx(e,t,n){var i=di();Jl(e,t,n,i)}function Jl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))$x(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,pi(o,r))return Ih(e,t,s,0),Ie===null&&Nh(),!1}catch{}if(n=Km(e,t,s,i),n!==null)return ti(n,e,i),tS(n,t,i),!0}return!1}function gg(e,t,n,i){if(i={lane:2,revertLane:Tg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},zh(e)){if(t)throw Error(nt(479))}else t=Km(e,n,i,2),t!==null&&ti(t,e,2)}function zh(e){var t=e.alternate;return e===Jt||t!==null&&t===Jt}function $x(e,t){ao=fh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zv(e,n)}}var cc={readContext:Tn,use:Bh,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};cc.useEffectEvent=Ke;var eS={readContext:Tn,use:Bh,useCallback:function(e,t){return Xn().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:Fy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qu(4194308,4,Gx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qu(4194308,4,e,t)},useInsertionEffect:function(e,t){qu(4,2,e,t)},useMemo:function(e,t){var n=Xn();t=t===void 0?null:t;var i=e();if(or){ha(!0);try{e()}finally{ha(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Xn();if(n!==void 0){var s=n(t);if(or){ha(!0);try{n(t)}finally{ha(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=DT.bind(null,Jt,e),[i.memoizedState,e]},useRef:function(e){var t=Xn();return e={current:e},t.memoizedState=e},useState:function(e){e=pm(e);var t=e.queue,n=jx.bind(null,Jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dg,useDeferredValue:function(e,t){var n=Xn();return pg(n,e,t)},useTransition:function(){var e=pm(!1);return e=Yx.bind(null,Jt,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Jt,s=Xn();if(ge){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),Ie===null)throw Error(nt(349));(ue&127)!==0||Cx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Fy(Dx.bind(null,i,a,e),[e]),i.flags|=2048,fo(9,{destroy:void 0},Rx.bind(null,i,a,n,t),null),n},useId:function(){var e=Xn(),t=Ie.identifierPrefix;if(ge){var n=as,i=ss;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=dh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=bT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mg,useFormState:Oy,useActionState:Oy,useOptimistic:function(e){var t=Xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gg.bind(null,Jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ug,useCacheRefresh:function(){return Xn().memoizedState=RT.bind(null,Jt)},useEffectEvent:function(e){var t=Xn(),n={impl:e};return t.memoizedState=n,function(){if((xe&2)!==0)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},_g={readContext:Tn,use:Bh,useCallback:Wx,useContext:Tn,useEffect:fg,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:Xx,useReducer:Xu,useRef:Fx,useState:function(){return Xu(Hs)},useDebugValue:dg,useDeferredValue:function(e,t){var n=$e();return qx(n,Le.memoizedState,e,t)},useTransition:function(){var e=Xu(Hs)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Mc(e),t]},useSyncExternalStore:wx,useId:Kx,useHostTransitionStatus:mg,useFormState:Py,useActionState:Py,useOptimistic:function(e,t){var n=$e();return Nx(n,Le,e,t)},useMemoCache:ug,useCacheRefresh:Qx};_g.useEffectEvent=zx;var nS={readContext:Tn,use:Bh,useCallback:Wx,useContext:Tn,useEffect:fg,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:Xx,useReducer:Ep,useRef:Fx,useState:function(){return Ep(Hs)},useDebugValue:dg,useDeferredValue:function(e,t){var n=$e();return Le===null?pg(n,e,t):qx(n,Le.memoizedState,e,t)},useTransition:function(){var e=Ep(Hs)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Mc(e),t]},useSyncExternalStore:wx,useId:Kx,useHostTransitionStatus:mg,useFormState:By,useActionState:By,useOptimistic:function(e,t){var n=$e();return Le!==null?Nx(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ug,useCacheRefresh:Qx};nS.useEffectEvent=zx;function Tp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _m={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=di(),s=ya(i);s.payload=t,n!=null&&(s.callback=n),t=va(e,s,i),t!==null&&(ti(t,e,i),ql(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=di(),s=ya(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=va(e,s,i),t!==null&&(ti(t,e,i),ql(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=di(),i=ya(n);i.tag=2,t!=null&&(i.callback=t),t=va(e,i,n),t!==null&&(ti(t,e,n),ql(t,e,n))}};function zy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!sc(n,i)||!sc(s,a):!0}function Hy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_m.enqueueReplaceState(t,t.state,null)}function lr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ze({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function iS(e){ah(e)}function sS(e){console.error(e)}function aS(e){ah(e)}function ph(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Vy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function ym(e,t,n){return n=ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ph(e,t)},n}function rS(e){return e=ya(e),e.tag=3,e}function oS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Vy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Vy(t,n,i),typeof s!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function UT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&So(t,n,s,!0),n=mi.current,n!==null){switch(n.tag){case 31:case 13:return Ui===null?vh():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===ch?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Pp(e,i,s)),!1;case 22:return n.flags|=65536,i===ch?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Pp(e,i,s)),!1}throw Error(nt(435,n.tag))}return Pp(e,i,s),vh(),!1}if(ge)return t=mi.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==am&&(e=Error(nt(422),{cause:i}),rc(Ri(e,n)))):(i!==am&&(t=Error(nt(423),{cause:i}),rc(Ri(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ri(i,n),s=ym(e.stateNode,i,s),bp(e,s),Qe!==4&&(Qe=2)),!1;var a=Error(nt(520),{cause:i});if(a=Ri(a,n),jl===null?jl=[a]:jl.push(a),Qe!==4&&(Qe=2),t===null)return!0;i=Ri(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=ym(n.stateNode,i,e),bp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(xa===null||!xa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=rS(s),oS(s,e,n,i),bp(n,s),!1}n=n.return}while(n!==null);return!1}var yg=Error(nt(461)),an=!1;function Mn(e,t,n,i){t.child=e===null?Sx(t,null,n,i):rr(t,e.child,n,i)}function Gy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ar(t),i=rg(e,t,n,r,a,s),o=og(),e!==null&&!an?(lg(e,t,s),Vs(e,t,s)):(ge&&o&&jm(t),t.flags|=1,Mn(e,t,i,s),t.child)}function ky(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Qm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lS(e,t,a,i,s)):(e=ku(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!vg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:sc,n(r,i)&&e.ref===t.ref)return Vs(e,t,s)}return t.flags|=1,e=Os(a,i),e.ref=t.ref,e.return=t,t.child=e}function lS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(sc(a,i)&&e.ref===t.ref)if(an=!1,t.pendingProps=i=a,vg(e,s))(e.flags&131072)!==0&&(an=!0);else return t.lanes=e.lanes,Vs(e,t,s)}return vm(e,t,n,i,s)}function cS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Wy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wu(t,a!==null?a.cachePool:null),a!==null?Ly(t,a):fm(),Ex(t);else return i=t.lanes=536870912,Wy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Wu(t,a.cachePool),Ly(t,a),ca(t),t.memoizedState=null):(e!==null&&Wu(t,null),fm(),ca(t));return Mn(e,t,s,n),t.child}function Hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wy(e,t,n,i,s){var a=eg();return a=a===null?null:{parent:sn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Wu(t,null),fm(),Ex(t),e!==null&&So(e,t,i,!0),t.childLanes=s,null}function Yu(e,t){return t=mh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xy(e,t,n){return rr(t,e.child,null,n),e=Yu(t,t.pendingProps),e.flags|=2,oi(t),t.memoizedState=null,e}function LT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(i.mode==="hidden")return e=Yu(t,i),t.lanes=536870912,Hl(null,e);if(dm(t),(e=Fe)?(e=eM(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ss,overflow:as}:null,retryLane:536870912,hydrationErrors:null},n=px(e),n.return=t,t.child=n,En=t,Fe=null)):e=null,e===null)throw Aa(t);return t.lanes=536870912,null}return Yu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(dm(t),s)if(t.flags&256)t.flags&=-257,t=Xy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(an||So(e,t,n,!1),s=(n&e.childLanes)!==0,an||s){if(i=Ie,i!==null&&(r=Hv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,fr(e,r),ti(i,e,r),yg;vh(),t=Xy(e,t,n)}else e=a.treeContext,Fe=Li(r.nextSibling),En=t,ge=!0,_a=null,Di=!1,e!==null&&gx(t,e),t=Yu(t,i),t.flags|=4096;return t}return e=Os(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Zu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vm(e,t,n,i,s){return ar(t),n=rg(e,t,n,i,void 0,s),i=og(),e!==null&&!an?(lg(e,t,s),Vs(e,t,s)):(ge&&i&&jm(t),t.flags|=1,Mn(e,t,n,s),t.child)}function qy(e,t,n,i,s,a){return ar(t),t.updateQueue=null,n=Ax(t,i,n,s),Tx(e),i=og(),e!==null&&!an?(lg(e,t,a),Vs(e,t,a)):(ge&&i&&jm(t),t.flags|=1,Mn(e,t,n,a),t.child)}function Yy(e,t,n,i,s){if(ar(t),t.stateNode===null){var a=Kr,r=n.contextType;typeof r=="object"&&r!==null&&(a=Tn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=_m,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},ig(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Tn(r):Kr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Tp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&_m.enqueueReplaceState(a,a.state,null),Zl(t,i,a,s),Yl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=lr(n,o);a.props=l;var c=a.context,f=n.contextType;r=Kr,typeof f=="object"&&f!==null&&(r=Tn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Hy(t,a,i,r),ra=!1;var u=t.memoizedState;a.state=u,Zl(t,i,a,s),Yl(),c=t.memoizedState,o||u!==c||ra?(typeof p=="function"&&(Tp(t,n,p,i),c=t.memoizedState),(l=ra||zy(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,um(e,t),r=t.memoizedProps,f=lr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Kr,typeof c=="object"&&c!==null&&(l=Tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Hy(t,a,i,l),ra=!1,u=t.memoizedState,a.state=u,Zl(t,i,a,s),Yl();var d=t.memoizedState;r!==p||u!==d||ra||e!==null&&e.dependencies!==null&&lh(e.dependencies)?(typeof o=="function"&&(Tp(t,n,o,i),d=t.memoizedState),(f=ra||zy(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&lh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Zu(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=rr(t,e.child,null,s),t.child=rr(t,null,n,s)):Mn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Vs(e,t,s),e}function Zy(e,t,n,i){return sr(),t.flags|=256,Mn(e,t,n,i),t.child}var Ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wp(e){return{baseLanes:e,cachePool:yx()}}function Cp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ci),e}function uS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(s?la(t):ca(t),(e=Fe)?(e=eM(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ss,overflow:as}:null,retryLane:536870912,hydrationErrors:null},n=px(e),n.return=t,t.child=n,En=t,Fe=null)):e=null,e===null)throw Aa(t);return Nm(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(ca(t),s=t.mode,o=mh({mode:"hidden",children:o},s),i=tr(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=wp(n),i.childLanes=Cp(e,r,n),t.memoizedState=Ap,Hl(null,i)):(la(t),xm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(la(t),t.flags&=-257,t=Rp(e,t,n)):t.memoizedState!==null?(ca(t),t.child=e.child,t.flags|=128,t=null):(ca(t),o=i.fallback,s=t.mode,i=mh({mode:"visible",children:i.children},s),o=tr(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,rr(t,e.child,null,n),i=t.child,i.memoizedState=wp(n),i.childLanes=Cp(e,r,n),t.memoizedState=Ap,t=Hl(null,i));else if(la(t),Nm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(nt(419)),i.stack="",i.digest=r,rc({value:i,source:null,stack:null}),t=Rp(e,t,n)}else if(an||So(e,t,n,!1),r=(n&e.childLanes)!==0,an||r){if(r=Ie,r!==null&&(i=Hv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,fr(e,i),ti(r,e,i),yg;Lm(o)||vh(),t=Rp(e,t,n)}else Lm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Fe=Li(o.nextSibling),En=t,ge=!0,_a=null,Di=!1,e!==null&&gx(t,e),t=xm(t,i.children),t.flags|=4096);return t}return s?(ca(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=Os(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Os(c,o):(o=tr(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Hl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=wp(n):(s=o.cachePool,s!==null?(l=sn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=yx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Cp(e,r,n),t.memoizedState=Ap,Hl(e.child,i)):(la(t),n=e.child,e=n.sibling,n=Os(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function xm(e,t){return t=mh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mh(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Rp(e,t,n){return rr(t,e.child,null,n),e=xm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),om(e.return,t,n)}function Dp(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function hS(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=je.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Oe(je,r),Mn(e,t,i,n),i=ge?ac:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jy(e,n,t);else if(e.tag===19)Jy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&hh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Dp(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Dp(t,!0,n,null,a,i);break;case"together":Dp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Vs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(So(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=Os(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Os(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lh(e)))}function NT(e,t,n){switch(t.tag){case 3:eh(t,t.stateNode.containerInfo),oa(t,sn,e.memoizedState.cache),sr();break;case 27:case 5:Zp(t);break;case 4:eh(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(la(t),t.flags|=128,null):(n&t.child.childLanes)!==0?uS(e,t,n):(la(t),e=Vs(e,t,n),e!==null?e.sibling:null);la(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(So(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return hS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Oe(je,je.current),i)break;return null;case 22:return t.lanes=0,cS(e,t,n,t.pendingProps);case 24:oa(t,sn,e.memoizedState.cache)}return Vs(e,t,n)}function fS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)an=!0;else{if(!vg(e,n)&&(t.flags&128)===0)return an=!1,NT(e,t,n);an=(e.flags&131072)!==0}else an=!1,ge&&(t.flags&1048576)!==0&&mx(t,ac,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e=="function")Qm(e)?(i=lr(e,i),t.tag=1,t=Yy(null,t,e,i,n)):(t.tag=0,t=vm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Bm){t.tag=11,t=Gy(null,t,e,i,n);break t}else if(s===Fm){t.tag=14,t=ky(null,t,e,i,n);break t}}throw t=qp(e)||e,Error(nt(306,t,""))}}return t;case 0:return vm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=lr(i,t.pendingProps),Yy(e,t,i,s,n);case 3:t:{if(eh(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,um(e,t),Zl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,oa(t,sn,i),i!==a.cache&&lm(t,[sn],n,!0),Yl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Zy(e,t,i,n);break t}else if(i!==s){s=Ri(Error(nt(424)),t),rc(s),t=Zy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=Li(e.firstChild),En=t,ge=!0,_a=null,Di=!0,n=Sx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),i===s){t=Vs(e,t,n);break t}Mn(e,t,i,n)}t=t.child}return t;case 26:return Zu(e,t),e===null?(n=_v(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,i=bh(ga.current).createElement(n),i[bn]=t,i[ei]=e,An(i,n,e),mn(i),t.stateNode=i):t.memoizedState=_v(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zp(t),e===null&&ge&&(i=t.stateNode=nM(t.type,t.pendingProps,ga.current),En=t,Di=!0,s=Fe,Da(t.type)?(Im=s,Fe=Li(i.firstChild)):Fe=s),Mn(e,t,t.pendingProps.children,n),Zu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((s=i=Fe)&&(i=oA(i,t.type,t.pendingProps,Di),i!==null?(t.stateNode=i,En=t,Fe=Li(i.firstChild),Di=!1,s=!0):s=!1),s||Aa(t)),Zp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Dm(s,a)?i=null:r!==null&&Dm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=rg(e,t,ET,null,null,n),fc._currentValue=s),Zu(e,t),Mn(e,t,i,n),t.child;case 6:return e===null&&ge&&((e=n=Fe)&&(n=lA(n,t.pendingProps,Di),n!==null?(t.stateNode=n,En=t,Fe=null,e=!0):e=!1),e||Aa(t)),null;case 13:return uS(e,t,n);case 4:return eh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=rr(t,null,i,n):Mn(e,t,i,n),t.child;case 11:return Gy(e,t,t.type,t.pendingProps,n);case 7:return Mn(e,t,t.pendingProps,n),t.child;case 8:return Mn(e,t,t.pendingProps.children,n),t.child;case 12:return Mn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,oa(t,t.type,i.value),Mn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ar(t),s=Tn(s),i=i(s),t.flags|=1,Mn(e,t,i,n),t.child;case 14:return ky(e,t,t.type,t.pendingProps,n);case 15:return lS(e,t,t.type,t.pendingProps,n);case 19:return hS(e,t,n);case 31:return LT(e,t,n);case 22:return cS(e,t,n,t.pendingProps);case 24:return ar(t),i=Tn(sn),e===null?(s=eg(),s===null&&(s=Ie,a=tg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},ig(t),oa(t,sn,s)):((e.lanes&n)!==0&&(um(e,t),Zl(t,null,null,n),Yl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),oa(t,sn,i)):(i=a.cache,oa(t,sn,i),i!==s.cache&&lm(t,[sn],n,!0))),Mn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function As(e){e.flags|=4}function Up(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(PS())e.flags|=8192;else throw nr=ch,ng}else e.flags&=-16777217}function Ky(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!aM(t))if(PS())e.flags|=8192;else throw nr=ch,ng}function Lu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bv():536870912,e.lanes|=t,po|=t)}function Nl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function IT(e,t,n){var i=t.pendingProps;switch($m(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ps(sn),oo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fr(t)?As(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mp())),Be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(As(t),a!==null?(Be(t),Ky(t,a)):(Be(t),Up(t,s,null,i,n))):a?a!==e.memoizedState?(As(t),Be(t),Ky(t,a)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&As(t),Be(t),Up(t,s,e,i,n)),null;case 27:if(nh(t),n=ga.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&As(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Be(t),null}e=os.current,Fr(t)?Ty(t,e):(e=nM(s,i,n),t.stateNode=e,As(t))}return Be(t),null;case 5:if(nh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&As(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Be(t),null}if(a=os.current,Fr(t))Ty(t,a);else{var r=bh(ga.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[bn]=t,a[ei]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(An(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&As(t)}}return Be(t),Up(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&As(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=ga.current,Fr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=En,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[bn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||jS(e.nodeValue,n)),e||Aa(t,!0)}else e=bh(e).createTextNode(i),e[bn]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fr(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[bn]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oi(t),t):(oi(t),null);if((t.flags&128)!==0)throw Error(nt(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Fr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(nt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(nt(317));s[bn]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),s=!1}else s=Mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(oi(t),t):(oi(t),null)}return oi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lu(t,t.updateQueue),Be(t),null);case 4:return oo(),e===null&&Ag(t.stateNode.containerInfo),Be(t),null;case 10:return Ps(t.type),Be(t),null;case 19:if(gn(je),i=t.memoizedState,i===null)return Be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Nl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=hh(e),a!==null){for(t.flags|=128,Nl(i,!1),e=a.updateQueue,t.updateQueue=e,Lu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dx(n,e),n=n.sibling;return Oe(je,je.current&1|2),ge&&Ds(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ui()>_h&&(t.flags|=128,s=!0,Nl(i,!1),t.lanes=4194304)}else{if(!s)if(e=hh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Lu(t,e),Nl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ge)return Be(t),null}else 2*ui()-i.renderingStartTime>_h&&n!==536870912&&(t.flags|=128,s=!0,Nl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ui(),e.sibling=null,n=je.current,Oe(je,s?n&1|2:n&1),ge&&Ds(t,i.treeForkCount),e):(Be(t),null);case 22:case 23:return oi(t),sg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Lu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&gn(er),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ps(sn),Be(t),null;case 25:return null;case 30:return null}throw Error(nt(156,t.tag))}function OT(e,t){switch($m(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ps(sn),oo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nh(t),null;case 31:if(t.memoizedState!==null){if(oi(t),t.alternate===null)throw Error(nt(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return gn(je),null;case 4:return oo(),null;case 10:return Ps(t.type),null;case 22:case 23:return oi(t),sg(),e!==null&&gn(er),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ps(sn),null;case 25:return null;default:return null}}function dS(e,t){switch($m(t),t.tag){case 3:Ps(sn),oo();break;case 26:case 27:case 5:nh(t);break;case 4:oo();break;case 31:t.memoizedState!==null&&oi(t);break;case 13:oi(t);break;case 19:gn(je);break;case 10:Ps(t.type);break;case 22:case 23:oi(t),sg(),e!==null&&gn(er);break;case 24:Ps(sn)}}function bc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ae(t,t.return,o)}}function wa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){Ae(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){Ae(t,t.return,f)}}function pS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bx(t,n)}catch(i){Ae(e,e.return,i)}}}function mS(e,t,n){n.props=lr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Kl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Ae(e,t,s)}}function rs(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ae(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ae(e,t,s)}else n.current=null}function gS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ae(e,e.return,s)}}function Lp(e,t,n){try{var i=e.stateNode;eA(i,e.type,n,t),i[ei]=t}catch(s){Ae(e,e.return,s)}}function _S(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function Np(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_S(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ns));else if(i!==4&&(i===27&&Da(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Sm(e,t,n),e=e.sibling;e!==null;)Sm(e,t,n),e=e.sibling}function gh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Da(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gh(e,t,n),e=e.sibling;e!==null;)gh(e,t,n),e=e.sibling}function yS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);An(t,i,n),t[bn]=e,t[ei]=n}catch(a){Ae(e,e.return,a)}}var Us=!1,nn=!1,Ip=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,pn=null;function PT(e,t){if(e=e.containerInfo,Cm=wh,e=ax(e),Zm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rm={focusedElem:e,selectionRange:n},wh=!1,pn=t;pn!==null;)if(t=pn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pn=e;else for(;pn!==null;){switch(t=pn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var y=lr(n.type,s);e=i.getSnapshotBeforeUpdate(y,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){Ae(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Um(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Um(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(nt(163))}if(e=t.sibling,e!==null){e.return=t.return,pn=e;break}pn=t.return}}function vS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cs(e,n),i&4&&bc(5,n);break;case 1:if(Cs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ae(n,n.return,r)}else{var s=lr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ae(n,n.return,r)}}i&64&&pS(n),i&512&&Kl(n,n.return);break;case 3:if(Cs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bx(e,t)}catch(r){Ae(n,n.return,r)}}break;case 27:t===null&&i&4&&yS(n);case 26:case 5:Cs(e,n),t===null&&i&4&&gS(n),i&512&&Kl(n,n.return);break;case 12:Cs(e,n);break;case 31:Cs(e,n),i&4&&MS(e,n);break;case 13:Cs(e,n),i&4&&bS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=XT.bind(null,n),cA(e,n))));break;case 22:if(i=n.memoizedState!==null||Us,!i){t=t!==null&&t.memoizedState!==null||nn,s=Us;var a=nn;Us=i,(nn=t)&&!a?Rs(e,n,(n.subtreeFlags&8772)!==0):Cs(e,n),Us=s,nn=a}break;case 30:break;default:Cs(e,n)}}function xS(e){var t=e.alternate;t!==null&&(e.alternate=null,xS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,jn=!1;function ws(e,t,n){for(n=n.child;n!==null;)SS(e,t,n),n=n.sibling}function SS(e,t,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 26:nn||rs(n,t),ws(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nn||rs(n,t);var i=ke,s=jn;Da(n.type)&&(ke=n.stateNode,jn=!1),ws(e,t,n),tc(n.stateNode),ke=i,jn=s;break;case 5:nn||rs(n,t);case 6:if(i=ke,s=jn,ke=null,ws(e,t,n),ke=i,jn=s,ke!==null)if(jn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(a){Ae(n,t,a)}else try{ke.removeChild(n.stateNode)}catch(a){Ae(n,t,a)}break;case 18:ke!==null&&(jn?(e=ke,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yo(e)):fv(ke,n.stateNode));break;case 4:i=ke,s=jn,ke=n.stateNode.containerInfo,jn=!0,ws(e,t,n),ke=i,jn=s;break;case 0:case 11:case 14:case 15:wa(2,n,t),nn||wa(4,n,t),ws(e,t,n);break;case 1:nn||(rs(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&mS(n,t,i)),ws(e,t,n);break;case 21:ws(e,t,n);break;case 22:nn=(i=nn)||n.memoizedState!==null,ws(e,t,n),nn=i;break;default:ws(e,t,n)}}function MS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yo(e)}catch(n){Ae(t,t.return,n)}}}function bS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(n){Ae(t,t.return,n)}}function BT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qy),t;default:throw Error(nt(435,e.tag))}}function Nu(e,t){var n=BT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=qT.bind(null,e,i);i.then(s,s)}})}function Kn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Da(o.type)){ke=o.stateNode,jn=!1;break t}break;case 5:ke=o.stateNode,jn=!1;break t;case 3:case 4:ke=o.stateNode.containerInfo,jn=!0;break t}o=o.return}if(ke===null)throw Error(nt(160));SS(a,r,s),ke=null,jn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ES(t,e),t=t.sibling}var Gi=null;function ES(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(t,e),Qn(e),i&4&&(wa(3,e,e.return),bc(3,e),wa(5,e,e.return));break;case 1:Kn(t,e),Qn(e),i&512&&(nn||n===null||rs(n,n.return)),i&64&&Us&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Gi;if(Kn(t,e),Qn(e),i&512&&(nn||n===null||rs(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[vc]||a[bn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),An(a,i,n),a[bn]=e,mn(a),i=a;break t;case"link":var r=vv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),An(a,i,n),s.head.appendChild(a);break;case"meta":if(r=vv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),An(a,i,n),s.head.appendChild(a);break;default:throw Error(nt(468,i))}a[bn]=e,mn(a),i=a}e.stateNode=i}else xv(s,e.type,e.stateNode);else e.stateNode=yv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?xv(s,e.type,e.stateNode):yv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Lp(e,e.memoizedProps,n.memoizedProps)}break;case 27:Kn(t,e),Qn(e),i&512&&(nn||n===null||rs(n,n.return)),n!==null&&i&4&&Lp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Kn(t,e),Qn(e),i&512&&(nn||n===null||rs(n,n.return)),e.flags&32){s=e.stateNode;try{co(s,"")}catch(y){Ae(e,e.return,y)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Lp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Ip=!0);break;case 6:if(Kn(t,e),Qn(e),i&4){if(e.stateNode===null)throw Error(nt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(y){Ae(e,e.return,y)}}break;case 3:if(Qu=null,s=Gi,Gi=Eh(t.containerInfo),Kn(t,e),Gi=s,Qn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(y){Ae(e,e.return,y)}Ip&&(Ip=!1,TS(e));break;case 4:i=Gi,Gi=Eh(e.stateNode.containerInfo),Kn(t,e),Qn(e),Gi=i;break;case 12:Kn(t,e),Qn(e);break;case 31:Kn(t,e),Qn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nu(e,i)));break;case 13:Kn(t,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hh=ui()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nu(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Us,f=nn;if(Us=c||s,nn=f||l,Kn(t,e),nn=f,Us=c,Qn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Us||nn||ja(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(y){Ae(l,l.return,y)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(y){Ae(l,l.return,y)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?dv(d,!0):dv(l.stateNode,!1)}catch(y){Ae(l,l.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Nu(e,n))));break;case 19:Kn(t,e),Qn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nu(e,i)));break;case 30:break;case 21:break;default:Kn(t,e),Qn(e)}}function Qn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_S(i)){n=i;break}i=i.return}if(n==null)throw Error(nt(160));switch(n.tag){case 27:var s=n.stateNode,a=Np(e);gh(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(co(r,""),n.flags&=-33);var o=Np(e);gh(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Np(e);Sm(e,c,l);break;default:throw Error(nt(161))}}catch(f){Ae(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function TS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;TS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vS(e,t.alternate,t),t=t.sibling}function ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wa(4,t,t.return),ja(t);break;case 1:rs(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mS(t,t.return,n),ja(t);break;case 27:tc(t.stateNode);case 26:case 5:rs(t,t.return),ja(t);break;case 22:t.memoizedState===null&&ja(t);break;case 30:ja(t);break;default:ja(t)}e=e.sibling}}function Rs(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Rs(s,a,n),bc(4,a);break;case 1:if(Rs(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){Ae(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Mx(l[s],o)}catch(c){Ae(i,i.return,c)}}n&&r&64&&pS(a),Kl(a,a.return);break;case 27:yS(a);case 26:case 5:Rs(s,a,n),n&&i===null&&r&4&&gS(a),Kl(a,a.return);break;case 12:Rs(s,a,n);break;case 31:Rs(s,a,n),n&&r&4&&MS(s,a);break;case 13:Rs(s,a,n),n&&r&4&&bS(s,a);break;case 22:a.memoizedState===null&&Rs(s,a,n),Kl(a,a.return);break;case 30:break;default:Rs(s,a,n)}t=t.sibling}}function xg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sc(n))}function Sg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sc(e))}function Vi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)AS(e,t,n,i),t=t.sibling}function AS(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Vi(e,t,n,i),s&2048&&bc(9,t);break;case 1:Vi(e,t,n,i);break;case 3:Vi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sc(e)));break;case 12:if(s&2048){Vi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ae(t,t.return,l)}}else Vi(e,t,n,i);break;case 31:Vi(e,t,n,i);break;case 13:Vi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Vi(e,t,n,i):Ql(e,t):a._visibility&2?Vi(e,t,n,i):(a._visibility|=2,Hr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&xg(r,t);break;case 24:Vi(e,t,n,i),s&2048&&Sg(t.alternate,t);break;default:Vi(e,t,n,i)}}function Hr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Hr(a,r,o,l,s),bc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Hr(a,r,o,l,s):Ql(a,r):(f._visibility|=2,Hr(a,r,o,l,s)),s&&c&2048&&xg(r.alternate,r);break;case 24:Hr(a,r,o,l,s),s&&c&2048&&Sg(r.alternate,r);break;default:Hr(a,r,o,l,s)}t=t.sibling}}function Ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ql(n,i),s&2048&&xg(i.alternate,i);break;case 24:Ql(n,i),s&2048&&Sg(i.alternate,i);break;default:Ql(n,i)}t=t.sibling}}var Vl=8192;function zr(e,t,n){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)wS(e,t,n),e=e.sibling}function wS(e,t,n){switch(e.tag){case 26:zr(e,t,n),e.flags&Vl&&e.memoizedState!==null&&SA(n,Gi,e.memoizedState,e.memoizedProps);break;case 5:zr(e,t,n);break;case 3:case 4:var i=Gi;Gi=Eh(e.stateNode.containerInfo),zr(e,t,n),Gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Vl,Vl=16777216,zr(e,t,n),Vl=i):zr(e,t,n));break;default:zr(e,t,n)}}function CS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];pn=i,DS(i,e)}CS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)RS(e),e=e.sibling}function RS(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Il(e);break;default:Il(e)}}function Ju(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];pn=i,DS(i,e)}CS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wa(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function DS(e,t){for(;pn!==null;){var n=pn;switch(n.tag){case 0:case 11:case 15:wa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,pn=i;else t:for(n=e;pn!==null;){i=pn;var s=i.sibling,a=i.return;if(xS(i),i===n){pn=null;break t}if(s!==null){s.return=a,pn=s;break t}pn=a}}}var FT={getCacheForType:function(e){var t=Tn(sn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Tn(sn).controller.signal}},zT=typeof WeakMap=="function"?WeakMap:Map,xe=0,Ie=null,oe=null,ue=0,Te=0,ri=null,da=!1,bo=!1,Mg=!1,Gs=0,Qe=0,Ca=0,ir=0,bg=0,ci=0,po=0,jl=null,$n=null,Mm=!1,Hh=0,US=0,_h=1/0,yh=null,xa=null,cn=0,Sa=null,mo=null,Bs=0,bm=0,Em=null,LS=null,$l=0,Tm=null;function di(){return(xe&2)!==0&&ue!==0?ue&-ue:Bt.T!==null?Tg():Vv()}function NS(){if(ci===0)if((ue&536870912)===0||ge){var e=bu;bu<<=1,(bu&3932160)===0&&(bu=262144),ci=e}else ci=536870912;return e=mi.current,e!==null&&(e.flags|=32),ci}function ti(e,t,n){(e===Ie&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(go(e,0),pa(e,ue,ci,!1)),yc(e,n),((xe&2)===0||e!==Ie)&&(e===Ie&&((xe&2)===0&&(ir|=n),Qe===4&&pa(e,ue,ci,!1)),cs(e))}function IS(e,t,n){if((xe&6)!==0)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_c(e,t),s=i?GT(e,t):Op(e,t,!0),a=i;do{if(s===0){bo&&!i&&pa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!HT(n)){s=Op(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=jl;var l=o.current.memoizedState.isDehydrated;if(l&&(go(o,r).flags|=256),r=Op(o,r,!1),r!==2){if(Mg&&!l){o.errorRecoveryDisabledLanes|=a,ir|=a,s=4;break t}a=$n,$n=s,a!==null&&($n===null?$n=a:$n.push.apply($n,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){go(e,0),pa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t)break;case 6:pa(i,t,ci,!da);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(s=Hh+300-ui(),10<s)){if(pa(i,t,ci,!da),Rh(i,0,!0)!==0)break t;Bs=t,i.timeoutHandle=tM(jy.bind(null,i,n,$n,yh,Mm,t,ci,ir,po,da,a,"Throttled",-0,0),s);break t}jy(i,n,$n,yh,Mm,t,ci,ir,po,da,a,null,-0,0)}}break}while(!0);cs(e)}function jy(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ns},wS(t,a,p);var y=(a&62914560)===a?Hh-ui():(a&4194048)===a?US-ui():0;if(y=MA(p,y),y!==null){Bs=a,e.cancelPendingCommit=y(tv.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),pa(e,a,r,!c);return}}tv(e,t,a,n,i,s,r,o,l)}function HT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!pi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,n,i){t&=~bg,t&=~ir,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-fi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Fv(e,n,t)}function Vh(){return(xe&6)===0?(Ec(0,!1),!1):!0}function Eg(){if(oe!==null){if(Te===0)var e=oe.return;else e=oe,Is=dr=null,cg(e),so=null,oc=0,e=oe;for(;e!==null;)dS(e.alternate,e),e=e.return;oe=null}}function go(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Bs=0,Eg(),Ie=e,oe=n=Os(e.current,null),ue=t,Te=0,ri=null,da=!1,bo=_c(e,t),Mg=!1,po=ci=bg=ir=Ca=Qe=0,$n=jl=null,Mm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-fi(i),a=1<<s;t|=e[s],i&=~a}return Gs=t,Nh(),n}function OS(e,t){Jt=null,Bt.H=cc,t===Mo||t===Oh?(t=Dy(),Te=3):t===ng?(t=Dy(),Te=4):Te=t===yg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ri=t,oe===null&&(Qe=1,ph(e,Ri(t,e.current)))}function PS(){var e=mi.current;return e===null?!0:(ue&4194048)===ue?Ui===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Ui:!1}function BS(){var e=Bt.H;return Bt.H=cc,e===null?cc:e}function FS(){var e=Bt.A;return Bt.A=FT,e}function vh(){Qe=4,da||(ue&4194048)!==ue&&mi.current!==null||(bo=!0),(Ca&134217727)===0&&(ir&134217727)===0||Ie===null||pa(Ie,ue,ci,!1)}function Op(e,t,n){var i=xe;xe|=2;var s=BS(),a=FS();(Ie!==e||ue!==t)&&(yh=null,go(e,t)),t=!1;var r=Qe;t:do try{if(Te!==0&&oe!==null){var o=oe,l=ri;switch(Te){case 8:Eg(),r=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(t=!0);var c=Te;if(Te=0,ri=null,$r(e,o,l,c),n&&bo){r=0;break t}break;default:c=Te,Te=0,ri=null,$r(e,o,l,c)}}VT(),r=Qe;break}catch(f){OS(e,f)}while(!0);return t&&e.shellSuspendCounter++,Is=dr=null,xe=i,Bt.H=s,Bt.A=a,oe===null&&(Ie=null,ue=0,Nh()),r}function VT(){for(;oe!==null;)zS(oe)}function GT(e,t){var n=xe;xe|=2;var i=BS(),s=FS();Ie!==e||ue!==t?(yh=null,_h=ui()+500,go(e,t)):bo=_c(e,t);t:do try{if(Te!==0&&oe!==null){t=oe;var a=ri;e:switch(Te){case 1:Te=0,ri=null,$r(e,t,a,1);break;case 2:case 9:if(Ry(a)){Te=0,ri=null,$y(t);break}t=function(){Te!==2&&Te!==9||Ie!==e||(Te=7),cs(e)},a.then(t,t);break t;case 3:Te=7;break t;case 4:Te=5;break t;case 7:Ry(a)?(Te=0,ri=null,$y(t)):(Te=0,ri=null,$r(e,t,a,7));break;case 5:var r=null;switch(oe.tag){case 26:r=oe.memoizedState;case 5:case 27:var o=oe;if(r?aM(r):o.stateNode.complete){Te=0,ri=null;var l=o.sibling;if(l!==null)oe=l;else{var c=o.return;c!==null?(oe=c,Gh(c)):oe=null}break e}}Te=0,ri=null,$r(e,t,a,5);break;case 6:Te=0,ri=null,$r(e,t,a,6);break;case 8:Eg(),Qe=6;break t;default:throw Error(nt(462))}}kT();break}catch(f){OS(e,f)}while(!0);return Is=dr=null,Bt.H=i,Bt.A=s,xe=n,oe!==null?0:(Ie=null,ue=0,Nh(),Qe)}function kT(){for(;oe!==null&&!fE();)zS(oe)}function zS(e){var t=fS(e.alternate,e,Gs);e.memoizedProps=e.pendingProps,t===null?Gh(e):oe=t}function $y(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qy(n,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=qy(n,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:cg(t);default:dS(n,t),t=oe=dx(t,Gs),t=fS(n,t,Gs)}e.memoizedProps=e.pendingProps,t===null?Gh(e):oe=t}function $r(e,t,n,i){Is=dr=null,cg(t),so=null,oc=0;var s=t.return;try{if(UT(e,s,t,n,ue)){Qe=1,ph(e,Ri(n,e.current)),oe=null;return}}catch(a){if(s!==null)throw oe=s,a;Qe=1,ph(e,Ri(n,e.current)),oe=null;return}t.flags&32768?(ge||i===1?e=!0:bo||(ue&536870912)!==0?e=!1:(da=e=!0,(i===2||i===9||i===3||i===6)&&(i=mi.current,i!==null&&i.tag===13&&(i.flags|=16384))),HS(t,e)):Gh(t)}function Gh(e){var t=e;do{if((t.flags&32768)!==0){HS(t,da);return}e=t.return;var n=IT(t.alternate,t,Gs);if(n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);Qe===0&&(Qe=5)}function HS(e,t){do{var n=OT(e.alternate,e);if(n!==null){n.flags&=32767,oe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=n}while(e!==null);Qe=6,oe=null}function tv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do kh();while(cn!==0);if((xe&6)!==0)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));if(a=t.lanes|t.childLanes,a|=Jm,ME(e,n,a,r,o,l),e===Ie&&(oe=Ie=null,ue=0),mo=t,Sa=e,Bs=n,bm=a,Em=s,LS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,YT(ih,function(){return XS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Bt.T,Bt.T=null,s=Se.p,Se.p=2,r=xe,xe|=4;try{PT(e,t,n)}finally{xe=r,Se.p=s,Bt.T=i}}cn=1,VS(),GS(),kS()}}function VS(){if(cn===1){cn=0;var e=Sa,t=mo,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Bt.T,Bt.T=null;var i=Se.p;Se.p=2;var s=xe;xe|=4;try{ES(t,e);var a=Rm,r=ax(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&sx(o.ownerDocument.documentElement,o)){if(l!==null&&Zm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),y=o.textContent.length,b=Math.min(l.start,y),m=l.end===void 0?b:Math.min(l.end,y);!d.extend&&b>m&&(r=m,m=b,b=r);var h=My(o,b),_=My(o,m);if(h&&_&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var M=p.createRange();M.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(M),d.extend(_.node,_.offset)):(M.setEnd(_.node,_.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}wh=!!Cm,Rm=Cm=null}finally{xe=s,Se.p=i,Bt.T=n}}e.current=t,cn=2}}function GS(){if(cn===2){cn=0;var e=Sa,t=mo,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Bt.T,Bt.T=null;var i=Se.p;Se.p=2;var s=xe;xe|=4;try{vS(e,t.alternate,t)}finally{xe=s,Se.p=i,Bt.T=n}}cn=3}}function kS(){if(cn===4||cn===3){cn=0,dE();var e=Sa,t=mo,n=Bs,i=LS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?cn=5:(cn=0,mo=Sa=null,WS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(xa=null),Vm(n),t=t.stateNode,hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Bt.T,s=Se.p,Se.p=2,Bt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Bt.T=t,Se.p=s}}(Bs&3)!==0&&kh(),cs(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Tm?$l++:($l=0,Tm=e):$l=0,Ec(0,!1)}}function WS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sc(t)))}function kh(){return VS(),GS(),kS(),XS()}function XS(){if(cn!==5)return!1;var e=Sa,t=bm;bm=0;var n=Vm(Bs),i=Bt.T,s=Se.p;try{Se.p=32>n?32:n,Bt.T=null,n=Em,Em=null;var a=Sa,r=Bs;if(cn=0,mo=Sa=null,Bs=0,(xe&6)!==0)throw Error(nt(331));var o=xe;if(xe|=4,RS(a.current),AS(a,a.current,r,n),xe=o,Ec(0,!1),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(gc,a)}catch{}return!0}finally{Se.p=s,Bt.T=i,WS(e,t)}}function ev(e,t,n){t=Ri(n,t),t=ym(e.stateNode,t,2),e=va(e,t,2),e!==null&&(yc(e,2),cs(e))}function Ae(e,t,n){if(e.tag===3)ev(e,e,n);else for(;t!==null;){if(t.tag===3){ev(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xa===null||!xa.has(i))){e=Ri(n,e),n=rS(2),i=va(t,n,2),i!==null&&(oS(n,i,t,e),yc(i,2),cs(i));break}}t=t.return}}function Pp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new zT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Mg=!0,s.add(n),e=WT.bind(null,e,t,n),t.then(e,e))}function WT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(ue&n)===n&&(Qe===4||Qe===3&&(ue&62914560)===ue&&300>ui()-Hh?(xe&2)===0&&go(e,0):bg|=n,po===ue&&(po=0)),cs(e)}function qS(e,t){t===0&&(t=Bv()),e=fr(e,t),e!==null&&(yc(e,t),cs(e))}function XT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qS(e,n)}function qT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),qS(e,n)}function YT(e,t){return zm(e,t)}var xh=null,Vr=null,Am=!1,Sh=!1,Bp=!1,ma=0;function cs(e){e!==Vr&&e.next===null&&(Vr===null?xh=Vr=e:Vr=Vr.next=e),Sh=!0,Am||(Am=!0,JT())}function Ec(e,t){if(!Bp&&Sh){Bp=!0;do for(var n=!1,i=xh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-fi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,nv(i,a))}else a=ue,a=Rh(i,i===Ie?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||_c(i,a)||(n=!0,nv(i,a));i=i.next}while(n);Bp=!1}}function ZT(){YS()}function YS(){Sh=Am=!1;var e=0;ma!==0&&iA()&&(e=ma);for(var t=ui(),n=null,i=xh;i!==null;){var s=i.next,a=ZS(i,t);a===0?(i.next=null,n===null?xh=s:n.next=s,s===null&&(Vr=n)):(n=i,(e!==0||(a&3)!==0)&&(Sh=!0)),i=s}cn!==0&&cn!==5||Ec(e,!1),ma!==0&&(ma=0)}function ZS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-fi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=SE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ie,n=ue,n=Rh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&fp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_c(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&fp(i),Vm(n)){case 2:case 8:n=Ov;break;case 32:n=ih;break;case 268435456:n=Pv;break;default:n=ih}return i=JS.bind(null,e),n=zm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&fp(i),e.callbackPriority=2,e.callbackNode=null,2}function JS(e,t){if(cn!==0&&cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kh()&&e.callbackNode!==n)return null;var i=ue;return i=Rh(e,e===Ie?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(IS(e,i,t),ZS(e,ui()),e.callbackNode!=null&&e.callbackNode===n?JS.bind(null,e):null)}function nv(e,t){if(kh())return null;IS(e,t,!0)}function JT(){aA(function(){(xe&6)!==0?zm(Iv,ZT):YS()})}function Tg(){if(ma===0){var e=uo;e===0&&(e=Mu,Mu<<=1,(Mu&261888)===0&&(Mu=256)),ma=e}return ma}function iv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hu(""+e)}function sv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function KT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=iv((s[ei]||null).action),r=i.submitter;r&&(t=(t=r[ei]||null)?iv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Dh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ma!==0){var l=r?sv(s,r):new FormData(s);gm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?sv(s,r):new FormData(s),gm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Iu=0;Iu<sm.length;Iu++)Ou=sm[Iu],av=Ou.toLowerCase(),rv=Ou[0].toUpperCase()+Ou.slice(1),ki(av,"on"+rv);var Ou,av,rv,Iu;ki(ox,"onAnimationEnd");ki(lx,"onAnimationIteration");ki(cx,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(pT,"onTransitionRun");ki(mT,"onTransitionStart");ki(gT,"onTransitionCancel");ki(ux,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uc));function KS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){ah(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){ah(f)}s.currentTarget=null,a=l}}}}function re(e,t){var n=t[Kp];n===void 0&&(n=t[Kp]=new Set);var i=e+"__bubble";n.has(i)||(QS(t,e,2,!1),n.add(i))}function Fp(e,t,n){var i=0;t&&(i|=4),QS(n,e,i,t)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Ag(e){if(!e[Pu]){e[Pu]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(QT.has(n)||Fp(n,!1,e),Fp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pu]||(t[Pu]=!0,Fp("selectionchange",!1,t))}}function QS(e,t,n,i){switch(uM(t)){case 2:var s=TA;break;case 8:s=AA;break;default:s=Dg}n=s.bind(null,t,n,e),s=void 0,!em||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function zp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Wr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Kv(function(){var c=a,f=Wm(n),p=[];t:{var u=hx.get(e);if(u!==void 0){var d=Dh,y=e;switch(e){case"keypress":if(Gu(n)===0)break t;case"keydown":case"keyup":d=qE;break;case"focusin":y="focus",d=_p;break;case"focusout":y="blur",d=_p;break;case"beforeblur":case"afterblur":d=_p;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=dy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=IE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=JE;break;case ox:case lx:case cx:d=BE;break;case ux:d=QE;break;case"scroll":case"scrollend":d=LE;break;case"wheel":d=$E;break;case"copy":case"cut":case"paste":d=zE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=my;break;case"toggle":case"beforetoggle":d=eT}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var _=c,M;_!==null;){var v=_;if(M=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||M===null||h===null||(v=nc(_,h),v!=null&&b.push(hc(_,v,M))),m)break;_=_.return}0<b.length&&(u=new d(u,y,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==tm&&(y=n.relatedTarget||n.fromElement)&&(Wr(y)||y[vo]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(y=n.relatedTarget||n.toElement,d=c,y=y?Wr(y):null,y!==null&&(m=mc(y),b=y.tag,y!==m||b!==5&&b!==27&&b!==6)&&(y=null)):(d=null,y=c),d!==y)){if(b=dy,v="onMouseLeave",h="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(b=my,v="onPointerLeave",h="onPointerEnter",_="pointer"),m=d==null?u:zl(d),M=y==null?u:zl(y),u=new b(v,_+"leave",d,n,f),u.target=m,u.relatedTarget=M,v=null,Wr(f)===c&&(b=new b(h,_+"enter",y,n,f),b.target=M,b.relatedTarget=m,v=b),m=v,d&&y)e:{for(b=jT,h=d,_=y,M=0,v=h;v;v=b(v))M++;v=0;for(var E=_;E;E=b(E))v++;for(;0<M-v;)h=b(h),M--;for(;0<v-M;)_=b(_),v--;for(;M--;){if(h===_||_!==null&&h===_.alternate){b=h;break e}h=b(h),_=b(_)}b=null}else b=null;d!==null&&ov(p,u,d,b,!1),y!==null&&m!==null&&ov(p,m,y,b,!0)}}t:{if(u=c?zl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=vy;else if(yy(u))if(nx)T=hT;else{T=cT;var C=lT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&km(c.elementType)&&(T=vy):T=uT;if(T&&(T=T(e,c))){ex(p,T,n,f);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&$p(u,"number",u.value)}switch(C=c?zl(c):window,e){case"focusin":(yy(C)||C.contentEditable==="true")&&(Yr=C,nm=c,Wl=null);break;case"focusout":Wl=nm=Yr=null;break;case"mousedown":im=!0;break;case"contextmenu":case"mouseup":case"dragend":im=!1,by(p,n,f);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":by(p,n,f)}var x;if(Ym)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else qr?$v(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(jv&&n.locale!=="ko"&&(qr||A!=="onCompositionStart"?A==="onCompositionEnd"&&qr&&(x=Qv()):(fa=f,Xm="value"in fa?fa.value:fa.textContent,qr=!0)),C=Mh(c,A),0<C.length&&(A=new py(A,e,null,n,f),p.push({event:A,listeners:C}),x?A.data=x:(x=tx(n),x!==null&&(A.data=x)))),(x=iT?sT(e,n):aT(e,n))&&(A=Mh(c,"onBeforeInput"),0<A.length&&(C=new py("onBeforeInput","beforeinput",null,n,f),p.push({event:C,listeners:A}),C.data=x)),KT(p,e,c,n,f)}KS(p,t)})}function hc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=nc(e,n),s!=null&&i.unshift(hc(e,s,a)),s=nc(e,t),s!=null&&i.push(hc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function jT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ov(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=nc(n,a),c!=null&&r.unshift(hc(n,c,l))):s||(c=nc(n,a),c!=null&&r.push(hc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var $T=/\r\n?/g,tA=/\u0000|\uFFFD/g;function lv(e){return(typeof e=="string"?e:""+e).replace($T,`
`).replace(tA,"")}function jS(e,t){return t=lv(t),lv(e)===t}function Ue(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||co(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&co(e,""+i);break;case"className":Tu(e,"class",i);break;case"tabIndex":Tu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tu(e,n,i);break;case"style":Jv(e,i,a);break;case"data":if(t!=="object"){Tu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",s.name,s,null),Ue(e,t,"formEncType",s.formEncType,s,null),Ue(e,t,"formMethod",s.formMethod,s,null),Ue(e,t,"formTarget",s.formTarget,s,null)):(Ue(e,t,"encType",s.encType,s,null),Ue(e,t,"method",s.method,s,null),Ue(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ns);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(nt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Hu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":re("beforetoggle",e),re("toggle",e),zu(e,"popover",i);break;case"xlinkActuate":Ts(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ts(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ts(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ts(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ts(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ts(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":zu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=DE.get(n)||n,zu(e,n,i))}}function wm(e,t,n,i,s,a){switch(n){case"style":Jv(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(nt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?co(e,i):(typeof i=="number"||typeof i=="bigint")&&co(e,""+i);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[ei]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):zu(e,n,i)}}}function An(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:Ue(e,t,a,r,n,null)}}s&&Ue(e,t,"srcSet",n.srcSet,n,null),i&&Ue(e,t,"src",n.src,n,null);return;case"input":re("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(nt(137,t));break;default:Ue(e,t,i,f,n,null)}}qv(e,a,o,l,c,r,s,!1);return;case"select":re("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ue(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?eo(e,!!i,t,!1):n!=null&&eo(e,!!i,n,!0);return;case"textarea":re("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:Ue(e,t,r,o,n,null)}Zv(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ue(e,t,l,i,n,null));return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(i=0;i<uc.length;i++)re(uc[i],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:Ue(e,t,c,i,n,null)}return;default:if(km(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&wm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ue(e,t,o,i,n,null))}function eA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Ue(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:d!==p&&Ue(e,t,u,d,i,p)}}jp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||Ue(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Ue(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?eo(e,!!n,u,!1):!!i!=!!n&&(t!=null?eo(e,!!n,t,!0):eo(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ue(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(nt(91));break;default:s!==a&&Ue(e,t,r,s,i,a)}Yv(e,u,d);return;case"option":for(var y in n)u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y)&&(y==="selected"?e.selected=!1:Ue(e,t,y,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":Ue(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Ue(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:Ue(e,t,c,u,i,d)}return;default:if(km(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&wm(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||wm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&Ue(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Ue(e,t,p,u,i,d)}function cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&cv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&cv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cm=null,Rm=null;function bh(e){return e.nodeType===9?e:e.ownerDocument}function uv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $S(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Dm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hp=null;function iA(){var e=window.event;return e&&e.type==="popstate"?e===Hp?!1:(Hp=e,!0):(Hp=null,!1)}var tM=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,aA=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(e){return hv.resolve(null).then(e).catch(rA)}:tM;function rA(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function fv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),yo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")tc(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,tc(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[vc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&tc(e.ownerDocument.body);n=s}while(n);yo(t)}function dv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Um(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Um(n),Gm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function oA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[vc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function lA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Li(e.nextSibling),e===null))return null;return e}function eM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Li(e.nextSibling),e===null))return null;return e}function Lm(e){return e.data==="$?"||e.data==="$~"}function Nm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Im=null;function pv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Li(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function nM(e,t,n){switch(t=bh(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function tc(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gm(e)}var Ni=new Map,gv=new Set;function Eh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ks=Se.d;Se.d={f:uA,r:hA,D:fA,C:dA,L:pA,m:mA,X:_A,S:gA,M:yA};function uA(){var e=ks.f(),t=Vh();return e||t}function hA(e){var t=xo(e);t!==null&&t.tag===5&&t.type==="form"?Jx(t):ks.r(e)}var Eo=typeof document>"u"?null:document;function iM(e,t,n){var i=Eo;if(i&&typeof t=="string"&&t){var s=Ci(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),gv.has(s)||(gv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),An(t,"link",e),mn(t),i.head.appendChild(t)))}}function fA(e){ks.D(e),iM("dns-prefetch",e,null)}function dA(e,t){ks.C(e,t),iM("preconnect",e,t)}function pA(e,t,n){ks.L(e,t,n);var i=Eo;if(i&&e&&t){var s='link[rel="preload"][as="'+Ci(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ci(n.imageSizes)+'"]')):s+='[href="'+Ci(e)+'"]';var a=s;switch(t){case"style":a=_o(e);break;case"script":a=To(e)}Ni.has(a)||(e=ze({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ni.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Tc(a))||t==="script"&&i.querySelector(Ac(a))||(t=i.createElement("link"),An(t,"link",e),mn(t),i.head.appendChild(t)))}}function mA(e,t){ks.m(e,t);var n=Eo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ci(i)+'"][href="'+Ci(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=To(e)}if(!Ni.has(a)&&(e=ze({rel:"modulepreload",href:e},t),Ni.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ac(a)))return}i=n.createElement("link"),An(i,"link",e),mn(i),n.head.appendChild(i)}}}function gA(e,t,n){ks.S(e,t,n);var i=Eo;if(i&&e){var s=to(i).hoistableStyles,a=_o(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Tc(a)))o.loading=5;else{e=ze({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ni.get(a))&&wg(e,n);var l=r=i.createElement("link");mn(l),An(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ku(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function _A(e,t){ks.X(e,t);var n=Eo;if(n&&e){var i=to(n).hoistableScripts,s=To(e),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(e=ze({src:e,async:!0},t),(t=Ni.get(s))&&Cg(e,t),a=n.createElement("script"),mn(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function yA(e,t){ks.M(e,t);var n=Eo;if(n&&e){var i=to(n).hoistableScripts,s=To(e),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(e=ze({src:e,async:!0,type:"module"},t),(t=Ni.get(s))&&Cg(e,t),a=n.createElement("script"),mn(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function _v(e,t,n,i){var s=(s=ga.current)?Eh(s):null;if(!s)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=_o(n.href),n=to(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=_o(n.href);var a=to(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Tc(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ni.set(e,n),a||vA(s,e,n,r.state))),t&&i===null)throw Error(nt(528,""));return r}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=To(n),n=to(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function _o(e){return'href="'+Ci(e)+'"'}function Tc(e){return'link[rel="stylesheet"]['+e+"]"}function sM(e){return ze({},e,{"data-precedence":e.precedence,precedence:null})}function vA(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),An(t,"link",n),mn(t),e.head.appendChild(t))}function To(e){return'[src="'+Ci(e)+'"]'}function Ac(e){return"script[async]"+e}function yv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ci(n.href)+'"]');if(i)return t.instance=i,mn(i),i;var s=ze({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),mn(i),An(i,"style",s),Ku(i,n.precedence,e),t.instance=i;case"stylesheet":s=_o(n.href);var a=e.querySelector(Tc(s));if(a)return t.state.loading|=4,t.instance=a,mn(a),a;i=sM(n),(s=Ni.get(s))&&wg(i,s),a=(e.ownerDocument||e).createElement("link"),mn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),t.state.loading|=4,Ku(a,n.precedence,e),t.instance=a;case"script":return a=To(n.src),(s=e.querySelector(Ac(a)))?(t.instance=s,mn(s),s):(i=n,(s=Ni.get(a))&&(i=ze({},n),Cg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),mn(s),An(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ku(i,n.precedence,e));return t.instance}function Ku(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qu=null;function vv(e,t,n){if(Qu===null){var i=new Map,s=Qu=new Map;s.set(n,i)}else s=Qu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[vc]||a[bn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function xv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function xA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function aM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function SA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=_o(i.href),a=t.querySelector(Tc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Th.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,mn(a);return}a=t.ownerDocument||t,i=sM(i),(s=Ni.get(s))&&wg(i,s),a=a.createElement("link"),mn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Th.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vp=0;function MA(e,t){return e.stylesheets&&e.count===0&&ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ju(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Vp===0&&(Vp=62500*nA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ju(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Vp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Th(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ju(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ah=null;function ju(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ah=new Map,t.forEach(bA,e),Ah=null,Th.call(e))}function bA(e,t){if(!(t.state.loading&4)){var n=Ah.get(e);if(n)var i=n.get(null);else{n=new Map,Ah.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Th.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var fc={$$typeof:Ls,Provider:null,Consumer:null,_currentValue:$a,_currentValue2:$a,_threadCount:0};function EA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dp(0),this.hiddenUpdates=dp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function rM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new EA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=tg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},ig(a),e}function oM(e){return e?(e=Kr,e):Kr}function lM(e,t,n,i,s,a){s=oM(s),i.context===null?i.context=s:i.pendingContext=s,i=ya(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=va(e,i,t),n!==null&&(ti(n,e,t),ql(n,e,t))}function Sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rg(e,t){Sv(e,t),(e=e.alternate)&&Sv(e,t)}function cM(e){if(e.tag===13||e.tag===31){var t=fr(e,67108864);t!==null&&ti(t,e,67108864),Rg(e,67108864)}}function Mv(e){if(e.tag===13||e.tag===31){var t=di();t=Hm(t);var n=fr(e,t);n!==null&&ti(n,e,t),Rg(e,t)}}var wh=!0;function TA(e,t,n,i){var s=Bt.T;Bt.T=null;var a=Se.p;try{Se.p=2,Dg(e,t,n,i)}finally{Se.p=a,Bt.T=s}}function AA(e,t,n,i){var s=Bt.T;Bt.T=null;var a=Se.p;try{Se.p=8,Dg(e,t,n,i)}finally{Se.p=a,Bt.T=s}}function Dg(e,t,n,i){if(wh){var s=Om(i);if(s===null)zp(e,t,i,Ch,n),bv(e,i);else if(CA(s,e,t,n,i))i.stopPropagation();else if(bv(e,i),t&4&&-1<wA.indexOf(e)){for(;s!==null;){var a=xo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ka(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-fi(r);o.entanglements[1]|=l,r&=~l}cs(a),(xe&6)===0&&(_h=ui()+500,Ec(0,!1))}}break;case 31:case 13:o=fr(a,2),o!==null&&ti(o,a,2),Vh(),Rg(a,2)}if(a=Om(i),a===null&&zp(e,t,i,Ch,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else zp(e,t,i,null,n)}}function Om(e){return e=Wm(e),Ug(e)}var Ch=null;function Ug(e){if(Ch=null,e=Wr(e),e!==null){var t=mc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Rv(t),e!==null)return e;e=null}else if(n===31){if(e=Dv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ch=e,null}function uM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pE()){case Iv:return 2;case Ov:return 8;case ih:case mE:return 32;case Pv:return 268435456;default:return 32}default:return 32}}var Pm=!1,Ma=null,ba=null,Ea=null,dc=new Map,pc=new Map,ua=[],wA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":dc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(t.pointerId)}}function Ol(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=xo(t),t!==null&&cM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function CA(e,t,n,i,s){switch(t){case"focusin":return Ma=Ol(Ma,e,t,n,i,s),!0;case"dragenter":return ba=Ol(ba,e,t,n,i,s),!0;case"mouseover":return Ea=Ol(Ea,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return dc.set(a,Ol(dc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,pc.set(a,Ol(pc.get(a)||null,e,t,n,i,s)),!0}return!1}function hM(e){var t=Wr(e.target);if(t!==null){var n=mc(t);if(n!==null){if(t=n.tag,t===13){if(t=Rv(n),t!==null){e.blockedOn=t,ry(e.priority,function(){Mv(n)});return}}else if(t===31){if(t=Dv(n),t!==null){e.blockedOn=t,ry(e.priority,function(){Mv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Om(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);tm=i,n.target.dispatchEvent(i),tm=null}else return t=xo(n),t!==null&&cM(t),e.blockedOn=n,!1;t.shift()}return!0}function Ev(e,t,n){$u(e)&&n.delete(t)}function RA(){Pm=!1,Ma!==null&&$u(Ma)&&(Ma=null),ba!==null&&$u(ba)&&(ba=null),Ea!==null&&$u(Ea)&&(Ea=null),dc.forEach(Ev),pc.forEach(Ev)}function Bu(e,t){e.blockedOn===t&&(e.blockedOn=null,Pm||(Pm=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,RA)))}var Fu=null;function Tv(e){Fu!==e&&(Fu=e,un.unstable_scheduleCallback(un.unstable_NormalPriority,function(){Fu===e&&(Fu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ug(i||n)===null)continue;break}var a=xo(n);a!==null&&(e.splice(t,3),t-=3,gm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function yo(e){function t(l){return Bu(l,e)}Ma!==null&&Bu(Ma,e),ba!==null&&Bu(ba,e),Ea!==null&&Bu(Ea,e),dc.forEach(t),pc.forEach(t);for(var n=0;n<ua.length;n++){var i=ua[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)hM(n),n.blockedOn===null&&ua.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ei]||null;if(typeof a=="function")r||Tv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ei]||null)o=r.formAction;else if(Ug(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Tv(n)}}}function fM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Lg(e){this._internalRoot=e}Wh.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=di();lM(n,i,e,t,null,null)};Wh.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lM(e.current,2,null,e,null,null),Vh(),t[vo]=null}};function Wh(e){this._internalRoot=e}Wh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ua.length&&t!==0&&t<ua[n].priority;n++);ua.splice(n,0,e),n===0&&hM(e)}};var Av=wv.version;if(Av!=="19.2.8")throw Error(nt(527,Av,"19.2.8"));Se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=oE(t),e=e!==null?Uv(e):null,e=e===null?null:e.stateNode,e};var DA={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Bt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Pl.isDisabled&&Pl.supportsFiber))try{gc=Pl.inject(DA),hi=Pl}catch{}var Pl;Xh.createRoot=function(e,t){if(!Cv(e))throw Error(nt(299));var n=!1,i="",s=iS,a=sS,r=aS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=rM(e,1,!1,null,null,n,i,null,s,a,r,fM),e[vo]=t.current,Ag(e),new Lg(t)};Xh.hydrateRoot=function(e,t,n){if(!Cv(e))throw Error(nt(299));var i=!1,s="",a=iS,r=sS,o=aS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=rM(e,1,!0,t,n??null,i,s,l,a,r,o,fM),t.context=oM(null),n=t.current,i=di(),i=Hm(i),s=ya(i),s.callback=null,va(n,s,i),n=i,t.current.lanes=n,yc(t,n),cs(t),e[vo]=t.current,Ag(e),new Wh(t)};Xh.version="19.2.8"});var gM=ns((_U,mM)=>{"use strict";function pM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pM)}catch(e){console.error(e)}}pM(),mM.exports=dM()});var E1=ns(kd=>{"use strict";var tU=Symbol.for("react.transitional.element"),eU=Symbol.for("react.fragment");function b1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:tU,type:e,key:i,ref:t!==void 0?t:null,props:n}}kd.Fragment=eU;kd.jsx=b1;kd.jsxs=b1});var fu=ns((DO,T1)=>{"use strict";T1.exports=E1()});var OO=Ya(Tl()),D1=Ya(gM());function _M(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),i=n.createElement("base"),s=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(s),t&&(i.href=t),s.href=e,s.href}var yM=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function Wi(e){let t=[];for(let n=0,i=e.length;n<i;n++)t.push(e[n]);return t}var Ao=null;function Yh(e={}){return Ao||(e.includeStyleProperties?(Ao=e.includeStyleProperties,Ao):(Ao=Wi(window.getComputedStyle(document.documentElement)),Ao))}function qh(e,t){let i=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return i?parseFloat(i.replace("px","")):0}function UA(e){let t=qh(e,"border-left-width"),n=qh(e,"border-right-width");return e.clientWidth+t+n}function LA(e){let t=qh(e,"border-top-width"),n=qh(e,"border-bottom-width");return e.clientHeight+t+n}function Ng(e,t={}){let n=t.width||UA(e),i=t.height||LA(e);return{width:n,height:i}}function vM(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var gi=16384;function xM(e){(e.width>gi||e.height>gi)&&(e.width>gi&&e.height>gi?e.width>e.height?(e.height*=gi/e.width,e.width=gi):(e.width*=gi/e.height,e.height=gi):e.width>gi?(e.height*=gi/e.width,e.width=gi):(e.width*=gi/e.height,e.height=gi))}function wo(e){return new Promise((t,n)=>{let i=new Image;i.onload=()=>{i.decode().then(()=>{requestAnimationFrame(()=>t(i))})},i.onerror=n,i.crossOrigin="anonymous",i.decoding="async",i.src=e})}async function NA(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function SM(e,t,n){let i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),a=document.createElementNS(i,"foreignObject");return s.setAttribute("width",`${t}`),s.setAttribute("height",`${n}`),s.setAttribute("viewBox",`0 0 ${t} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),s.appendChild(a),a.appendChild(e),NA(s)}var Ln=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||Ln(n,t)};function IA(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function OA(e,t){return Yh(t).map(n=>{let i=e.getPropertyValue(n),s=e.getPropertyPriority(n);return`${n}: ${i}${s?" !important":""};`}).join(" ")}function PA(e,t,n,i){let s=`.${e}:${t}`,a=n.cssText?IA(n):OA(n,i);return document.createTextNode(`${s}{${a}}`)}function MM(e,t,n,i){let s=window.getComputedStyle(e,n),a=s.getPropertyValue("content");if(a===""||a==="none")return;let r=yM();try{t.className=`${t.className} ${r}`}catch{return}let o=document.createElement("style");o.appendChild(PA(r,n,s,i)),t.appendChild(o)}function bM(e,t,n){MM(e,t,":before",n),MM(e,t,":after",n)}var EM="application/font-woff",TM="image/jpeg",BA={woff:EM,woff2:EM,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:TM,jpeg:TM,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function FA(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function Co(e){let t=FA(e).toLowerCase();return BA[t]||""}function zA(e){return e.split(/,/)[1]}function wc(e){return e.search(/^(data:)/)!==-1}function Og(e,t){return`data:${t};base64,${e}`}async function Pg(e,t,n){let i=await fetch(e,t);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);let s=await i.blob();return new Promise((a,r)=>{let o=new FileReader;o.onerror=r,o.onloadend=()=>{try{a(n({res:i,result:o.result}))}catch(l){r(l)}},o.readAsDataURL(s)})}var Ig={};function HA(e,t,n){let i=e.replace(/\?.*/,"");return n&&(i=e),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),t?`[${t}]${i}`:i}async function Ro(e,t,n){let i=HA(e,t,n.includeQueryParams);if(Ig[i]!=null)return Ig[i];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let s;try{let a=await Pg(e,n.fetchRequestInit,({res:r,result:o})=>(t||(t=r.headers.get("Content-Type")||""),zA(o)));s=Og(a,t)}catch(a){s=n.imagePlaceholder||"";let r=`Failed to fetch resource: ${e}`;a&&(r=typeof a=="string"?a:a.message),r&&console.warn(r)}return Ig[i]=s,s}async function VA(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):wo(t)}async function GA(e,t){if(e.currentSrc){let a=document.createElement("canvas"),r=a.getContext("2d");a.width=e.clientWidth,a.height=e.clientHeight,r?.drawImage(e,0,0,a.width,a.height);let o=a.toDataURL();return wo(o)}let n=e.poster,i=Co(n),s=await Ro(n,i,t);return wo(s)}async function kA(e,t){var n;try{if(!((n=e?.contentDocument)===null||n===void 0)&&n.body)return await Cc(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function WA(e,t){return Ln(e,HTMLCanvasElement)?VA(e):Ln(e,HTMLVideoElement)?GA(e,t):Ln(e,HTMLIFrameElement)?kA(e,t):e.cloneNode(AM(e))}var XA=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",AM=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function qA(e,t,n){var i,s;if(AM(t))return t;let a=[];return XA(e)&&e.assignedNodes?a=Wi(e.assignedNodes()):Ln(e,HTMLIFrameElement)&&(!((i=e.contentDocument)===null||i===void 0)&&i.body)?a=Wi(e.contentDocument.body.childNodes):a=Wi(((s=e.shadowRoot)!==null&&s!==void 0?s:e).childNodes),a.length===0||Ln(e,HTMLVideoElement)||await a.reduce((r,o)=>r.then(()=>Cc(o,n)).then(l=>{l&&t.appendChild(l)}),Promise.resolve()),t}function YA(e,t,n){let i=t.style;if(!i)return;let s=window.getComputedStyle(e);s.cssText?(i.cssText=s.cssText,i.transformOrigin=s.transformOrigin):Yh(n).forEach(a=>{let r=s.getPropertyValue(a);a==="font-size"&&r.endsWith("px")&&(r=`${Math.floor(parseFloat(r.substring(0,r.length-2)))-.1}px`),Ln(e,HTMLIFrameElement)&&a==="display"&&r==="inline"&&(r="block"),a==="d"&&t.getAttribute("d")&&(r=`path(${t.getAttribute("d")})`),i.setProperty(a,r,s.getPropertyPriority(a))})}function ZA(e,t){Ln(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Ln(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function JA(e,t){if(Ln(e,HTMLSelectElement)){let i=Array.from(t.children).find(s=>e.value===s.getAttribute("value"));i&&i.setAttribute("selected","")}}function KA(e,t,n){return Ln(t,Element)&&(YA(e,t,n),bM(e,t,n),ZA(e,t),JA(e,t)),t}async function QA(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;let i={};for(let a=0;a<n.length;a++){let o=n[a].getAttribute("xlink:href");if(o){let l=e.querySelector(o),c=document.querySelector(o);!l&&c&&!i[o]&&(i[o]=await Cc(c,t,!0))}}let s=Object.values(i);if(s.length){let a="http://www.w3.org/1999/xhtml",r=document.createElementNS(a,"svg");r.setAttribute("xmlns",a),r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.style.display="none";let o=document.createElementNS(a,"defs");r.appendChild(o);for(let l=0;l<s.length;l++)o.appendChild(s[l]);e.appendChild(r)}return e}async function Cc(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(i=>WA(i,t)).then(i=>qA(e,i,t)).then(i=>KA(e,i,t)).then(i=>QA(i,t))}var wM=/url\((['"]?)([^'"]+?)\1\)/g,jA=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,$A=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function tw(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function ew(e){let t=[];return e.replace(wM,(n,i,s)=>(t.push(s),n)),t.filter(n=>!wc(n))}async function nw(e,t,n,i,s){try{let a=n?_M(t,n):t,r=Co(t),o;if(s){let l=await s(a);o=Og(l,r)}else o=await Ro(a,r,i);return e.replace(tw(t),`$1${o}$3`)}catch{}return e}function iw(e,{preferredFontFormat:t}){return t?e.replace($A,n=>{for(;;){let[i,,s]=jA.exec(n)||[];if(!s)return"";if(s===t)return`src: ${i};`}}):e}function Bg(e){return e.search(wM)!==-1}async function Zh(e,t,n){if(!Bg(e))return e;let i=iw(e,n);return ew(i).reduce((a,r)=>a.then(o=>nw(o,r,t,n)),Promise.resolve(i))}async function Do(e,t,n){var i;let s=(i=t.style)===null||i===void 0?void 0:i.getPropertyValue(e);if(s){let a=await Zh(s,null,n);return t.style.setProperty(e,a,t.style.getPropertyPriority(e)),!0}return!1}async function sw(e,t){await Do("background",e,t)||await Do("background-image",e,t),await Do("mask",e,t)||await Do("-webkit-mask",e,t)||await Do("mask-image",e,t)||await Do("-webkit-mask-image",e,t)}async function aw(e,t){let n=Ln(e,HTMLImageElement);if(!(n&&!wc(e.src))&&!(Ln(e,SVGImageElement)&&!wc(e.href.baseVal)))return;let i=n?e.src:e.href.baseVal,s=await Ro(i,Co(i),t);await new Promise((a,r)=>{e.onload=a,e.onerror=t.onImageErrorHandler?(...l)=>{try{a(t.onImageErrorHandler(...l))}catch(c){r(c)}}:r;let o=e;o.decode&&(o.decode=a),o.loading==="lazy"&&(o.loading="eager"),n?(e.srcset="",e.src=s):e.href.baseVal=s})}async function rw(e,t){let i=Wi(e.childNodes).map(s=>Fg(s,t));await Promise.all(i).then(()=>e)}async function Fg(e,t){Ln(e,Element)&&(await sw(e,t),await aw(e,t),await rw(e,t))}function CM(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let i=t.style;return i!=null&&Object.keys(i).forEach(s=>{n[s]=i[s]}),e}var RM={};async function DM(e){let t=RM[e];if(t!=null)return t;let i=await(await fetch(e)).text();return t={url:e,cssText:i},RM[e]=t,t}async function UM(e,t){let n=e.cssText,i=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async r=>{let o=r.replace(i,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),Pg(o,t.fetchRequestInit,({result:l})=>(n=n.replace(r,`url(${l})`),[r,l]))});return Promise.all(a).then(()=>n)}function LM(e){if(e==null)return[];let t=[],n=/(\/\*[\s\S]*?\*\/)/gi,i=e.replace(n,""),s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let l=s.exec(i);if(l===null)break;t.push(l[0])}i=i.replace(s,"");let a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,r="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(r,"gi");for(;;){let l=a.exec(i);if(l===null){if(l=o.exec(i),l===null)break;a.lastIndex=o.lastIndex}else o.lastIndex=a.lastIndex;t.push(l[0])}return t}async function ow(e,t){let n=[],i=[];return e.forEach(s=>{if("cssRules"in s)try{Wi(s.cssRules||[]).forEach((a,r)=>{if(a.type===CSSRule.IMPORT_RULE){let o=r+1,l=a.href,c=DM(l).then(f=>UM(f,t)).then(f=>LM(f).forEach(p=>{try{s.insertRule(p,p.startsWith("@import")?o+=1:s.cssRules.length)}catch(u){console.error("Error inserting rule from remote css",{rule:p,error:u})}})).catch(f=>{console.error("Error loading remote css",f.toString())});i.push(c)}})}catch(a){let r=e.find(o=>o.href==null)||document.styleSheets[0];s.href!=null&&i.push(DM(s.href).then(o=>UM(o,t)).then(o=>LM(o).forEach(l=>{r.insertRule(l,r.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",a)}}),Promise.all(i).then(()=>(e.forEach(s=>{if("cssRules"in s)try{Wi(s.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${s.href}`,a)}}),n))}function lw(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Bg(t.style.getPropertyValue("src")))}async function cw(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let n=Wi(e.ownerDocument.styleSheets),i=await ow(n,t);return lw(i)}function NM(e){return e.trim().replace(/["']/g,"")}function uw(e){let t=new Set;function n(i){(i.style.fontFamily||getComputedStyle(i).fontFamily).split(",").forEach(a=>{t.add(NM(a))}),Array.from(i.children).forEach(a=>{a instanceof HTMLElement&&n(a)})}return n(e),t}async function IM(e,t){let n=await cw(e,t),i=uw(e);return(await Promise.all(n.filter(a=>i.has(NM(a.style.fontFamily))).map(a=>{let r=a.parentStyleSheet?a.parentStyleSheet.href:null;return Zh(a.cssText,r,t)}))).join(`
`)}async function OM(e,t){let n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await IM(e,t);if(n){let i=document.createElement("style"),s=document.createTextNode(n);i.appendChild(s),e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i)}}async function hw(e,t={}){let{width:n,height:i}=Ng(e,t),s=await Cc(e,t,!0);return await OM(s,t),await Fg(s,t),CM(s,t),await SM(s,n,i)}async function fw(e,t={}){let{width:n,height:i}=Ng(e,t),s=await hw(e,t),a=await wo(s),r=document.createElement("canvas"),o=r.getContext("2d"),l=t.pixelRatio||vM(),c=t.canvasWidth||n,f=t.canvasHeight||i;return r.width=c*l,r.height=f*l,t.skipAutoScale||xM(r),r.style.width=`${c}`,r.style.height=`${f}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(a,0,0,r.width,r.height),r}async function PM(e,t={}){return(await fw(e,t)).toDataURL()}var ai=Ya(Tl());var lb=0,p0=1,cb=2;var tu=1,qf=2,ul=3,gs=0,wn=1,Bi=2,_s=0,hl=1,m0=2,g0=3,_0=4,ub=5;var xr=100,hb=101,fb=102,db=103,pb=104,mb=200,gb=201,_b=202,yb=203,y0=204,v0=205,vb=206,xb=207,Sb=208,Mb=209,bb=210,Eb=211,Tb=212,Ab=213,wb=214,yf=0,vf=1,xf=2,Yo=3,Sf=4,Mf=5,bf=6,Ef=7,x0=0,Cb=1,Rb=2,Ji=0,S0=1,M0=2,b0=3,E0=4,T0=5,A0=6,w0=7;var C0=300,Va=301,Sr=302,Yf=303,Zf=304,eu=306,Zo=1e3,fs=1001,Tf=1002,yn=1003,Db=1004;var nu=1005;var on=1006,Jf=1007;var Ga=1008;var si=1009,R0=1010,D0=1011,fl=1012,Kf=1013,Ki=1014,Qi=1015,ji=1016,Qf=1017,jf=1018,dl=1020,U0=35902,L0=35899,N0=1021,I0=1022,Fi=1023,ds=1026,ka=1027,O0=1028,$f=1029,Wa=1030,td=1031;var ed=1033,iu=33776,su=33777,au=33778,ru=33779,nd=35840,id=35841,sd=35842,ad=35843,rd=36196,od=37492,ld=37496,cd=37488,ud=37489,ou=37490,hd=37491,fd=37808,dd=37809,pd=37810,md=37811,gd=37812,_d=37813,yd=37814,vd=37815,xd=37816,Sd=37817,Md=37818,bd=37819,Ed=37820,Td=37821,Ad=36492,wd=36494,Cd=36495,Rd=36283,Dd=36284,lu=36285,Ud=36286;var Oc=2300,Af=2301,mf=2302,r0=2303,o0=2400,l0=2401,c0=2402;var Ub=3200,P0=3201;var Ld=0,Lb=1,$s="",On="srgb",Pc="srgb-linear",Bc="linear",be="srgb";var gf=7680;var Nb=519,Ib=512,Ob=513,Pb=514,Nd=515,Bb=516,Fb=517,Id=518,zb=519,Hb=35044,Od=35048;var B0="300 es",Zi=2e3,Jo=2001;function dw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ko(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Vb(){let e=Ko("canvas");return e.style.display="block",e}var BM={},Qo=null;function F0(...e){let t="THREE."+e.shift();Qo?Qo("log",t,...e):console.log(t,...e)}function Gb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=Gb(e);let t="THREE."+e.shift();if(Qo)Qo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=Gb(e);let t="THREE."+e.shift();if(Qo)Qo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function yr(...e){let t=e.join(" ");t in BM||(BM[t]=!0,Nt(...e))}function kb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Wb={[yf]:vf,[xf]:bf,[Sf]:Ef,[Yo]:Mf,[vf]:yf,[bf]:xf,[Ef]:Sf,[Mf]:Yo},ps=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],FM=1234567,Nc=Math.PI/180,jo=180/Math.PI;function pl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[e&255]+Nn[e>>8&255]+Nn[e>>16&255]+Nn[e>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function fe(e,t,n){return Math.max(t,Math.min(n,e))}function z0(e,t){return(e%t+t)%t}function mw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function gw(e,t,n){return e!==t?(n-e)/(t-e):0}function Ic(e,t,n){return(1-n)*e+n*t}function _w(e,t,n,i){return Ic(e,t,1-Math.exp(-n*i))}function yw(e,t=1){return t-Math.abs(z0(e,t*2)-t)}function vw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function xw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Sw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mw(e,t){return e+Math.random()*(t-e)}function bw(e){return e*(.5-Math.random())}function Ew(e){e!==void 0&&(FM=e);let t=FM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tw(e){return e*Nc}function Aw(e){return e*jo}function ww(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Cw(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Rw(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Dw(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),y=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*y,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*y,o*c);break;case"ZYZ":e.set(l*y,l*d,o*f,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xa={DEG2RAD:Nc,RAD2DEG:jo,generateUUID:pl,clamp:fe,euclideanModulo:z0,mapLinear:mw,inverseLerp:gw,lerp:Ic,damp:_w,pingpong:yw,smoothstep:vw,smootherstep:xw,randInt:Sw,randFloat:Mw,randFloatSpread:bw,seededRandom:Ew,degToRad:Tw,radToDeg:Aw,isPowerOfTwo:ww,ceilPowerOfTwo:Cw,floorPowerOfTwo:Rw,setQuaternionFromProperEuler:Dw,normalize:qn,denormalize:Xo},le=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ms=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],y=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==y){let m=l*u+c*d+f*y+p*b;m<0&&(u=-u,d=-d,y=-y,b=-b,m=-m);let h=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);h=Math.sin(h*_)/M,o=Math.sin(o*_)/M,l=l*h+u*o,c=c*h+d*o,f=f*h+y*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+y*o,p=p*h+b*o;let _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],y=a[r+3];return t[n]=o*y+f*p+l*d-c*u,t[n+1]=l*y+f*u+c*p-o*d,t[n+2]=c*y+f*d+o*u-l*p,t[n+3]=f*y-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),y=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*y,this._y=c*d*p-u*f*y,this._z=c*f*y+u*d*p,this._w=c*f*p-u*d*y;break;case"YXZ":this._x=u*f*p+c*d*y,this._y=c*d*p-u*f*y,this._z=c*f*y-u*d*p,this._w=c*f*p+u*d*y;break;case"ZXY":this._x=u*f*p-c*d*y,this._y=c*d*p+u*f*y,this._z=c*f*y+u*d*p,this._w=c*f*p-u*d*y;break;case"ZYX":this._x=u*f*p-c*d*y,this._y=c*d*p+u*f*y,this._z=c*f*y-u*d*p,this._w=c*f*p+u*d*y;break;case"YZX":this._x=u*f*p+c*d*y,this._y=c*d*p+u*f*y,this._z=c*f*y-u*d*p,this._w=c*f*p-u*d*y;break;case"XZY":this._x=u*f*p-c*d*y,this._y=c*d*p-u*f*y,this._z=c*f*y+u*d*p,this._w=c*f*p+u*d*y;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(zM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(zM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zg.copy(this).projectOnVector(t),this.sub(zg)}reflect(t){return this.sub(zg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zg=new G,zM=new ms,Wt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],y=i[8],b=s[0],m=s[3],h=s[6],_=s[1],M=s[4],v=s[7],E=s[2],T=s[5],C=s[8];return a[0]=r*b+o*_+l*E,a[3]=r*m+o*M+l*T,a[6]=r*h+o*v+l*C,a[1]=c*b+f*_+p*E,a[4]=c*m+f*M+p*T,a[7]=c*h+f*v+p*C,a[2]=u*b+d*_+y*E,a[5]=u*m+d*M+y*T,a[8]=u*h+d*v+y*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,y=n*p+i*u+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hg.makeScale(t,n)),this}rotate(t){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hg.makeRotation(-t)),this}translate(t,n){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hg=new Wt,HM=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),VM=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uw(){let e={enabled:!0,workingColorSpace:Pc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===be&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===be&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$s?Bc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Pc]:{primaries:t,whitePoint:i,transfer:Bc,toXYZ:HM,fromXYZ:VM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:be,toXYZ:HM,fromXYZ:VM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}var he=Uw();function Ks(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Uo,wf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Uo===void 0&&(Uo=Ko("canvas")),Uo.width=t.width,Uo.height=t.height;let s=Uo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Uo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ko("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ks(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lw=0,$o=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=pl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Vg(s[r].image)):a.push(Vg(s[r]))}else a=Vg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Vg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?wf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Nw=0,Gg=new G,Yn=class e extends ps{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=fs,s=fs,a=on,r=Ga,o=Fi,l=si,c=e.DEFAULT_ANISOTROPY,f=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=pl(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gg).x}get height(){return this.source.getSize(Gg).y}get depth(){return this.source.getSize(Gg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==C0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case Tf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case Tf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=C0;Yn.DEFAULT_ANISOTROPY=1;var Xe=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],y=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(y+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,v=(d+1)/2,E=(h+1)/2,T=(f+u)/4,C=(p+b)/4,x=(y+m)/4;return M>v&&M>E?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=T/i,a=C/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=T/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=C/a,s=x/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-y)*(m-y)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(m-y)/_,this.y=(p-b)/_,this.z=(u-f)/_,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this.w=fe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this.w=fe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cf=class extends ps{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Yn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new $o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Cf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Fc=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rf=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var We=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,y,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,y,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,y,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=y,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Lo.setFromMatrixColumn(t,0).length(),a=1/Lo.setFromMatrixColumn(t,1).length(),r=1/Lo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,y=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+y*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=y+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,y=c*f,b=c*p;n[0]=u+b*o,n[4]=y*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-y,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,y=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=y+d*o,n[1]=d+y*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,y=o*f,b=o*p;n[0]=l*f,n[4]=y*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-y,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,y=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=y*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+y,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,y=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-y,n[2]=y*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iw,t,Ow)}lookAt(t,n,i){let s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Ua.crossVectors(i,_i),Ua.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Ua.crossVectors(i,_i)),Ua.normalize(),Jh.crossVectors(_i,Ua),s[0]=Ua.x,s[4]=Jh.x,s[8]=_i.x,s[1]=Ua.y,s[5]=Jh.y,s[9]=_i.y,s[2]=Ua.z,s[6]=Jh.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],y=i[2],b=i[6],m=i[10],h=i[14],_=i[3],M=i[7],v=i[11],E=i[15],T=s[0],C=s[4],x=s[8],A=s[12],R=s[1],D=s[5],P=s[9],H=s[13],U=s[2],N=s[6],W=s[10],X=s[14],j=s[3],V=s[7],Q=s[11],tt=s[15];return a[0]=r*T+o*R+l*U+c*j,a[4]=r*C+o*D+l*N+c*V,a[8]=r*x+o*P+l*W+c*Q,a[12]=r*A+o*H+l*X+c*tt,a[1]=f*T+p*R+u*U+d*j,a[5]=f*C+p*D+u*N+d*V,a[9]=f*x+p*P+u*W+d*Q,a[13]=f*A+p*H+u*X+d*tt,a[2]=y*T+b*R+m*U+h*j,a[6]=y*C+b*D+m*N+h*V,a[10]=y*x+b*P+m*W+h*Q,a[14]=y*A+b*H+m*X+h*tt,a[3]=_*T+M*R+v*U+E*j,a[7]=_*C+M*D+v*N+E*V,a[11]=_*x+M*P+v*W+E*Q,a[15]=_*A+M*H+v*X+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],y=t[3],b=t[7],m=t[11],h=t[15],_=l*d-c*u,M=o*d-c*p,v=o*u-l*p,E=r*d-c*f,T=r*u-l*f,C=r*p-o*f;return n*(b*_-m*M+h*v)-i*(y*_-m*E+h*T)+s*(y*M-b*E+h*C)-a*(y*v-b*T+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],y=t[12],b=t[13],m=t[14],h=t[15],_=n*o-i*r,M=n*l-s*r,v=n*c-a*r,E=i*l-s*o,T=i*c-a*o,C=s*c-a*l,x=f*b-p*y,A=f*m-u*y,R=f*h-d*y,D=p*m-u*b,P=p*h-d*b,H=u*h-d*m,U=_*H-M*P+v*D+E*R-T*A+C*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return t[0]=(o*H-l*P+c*D)*N,t[1]=(s*P-i*H-a*D)*N,t[2]=(b*C-m*T+h*E)*N,t[3]=(u*T-p*C-d*E)*N,t[4]=(l*R-r*H-c*A)*N,t[5]=(n*H-s*R+a*A)*N,t[6]=(m*v-y*C-h*M)*N,t[7]=(f*C-u*v+d*M)*N,t[8]=(r*P-o*R+c*x)*N,t[9]=(i*R-n*P-a*x)*N,t[10]=(y*T-b*v+h*_)*N,t[11]=(p*v-f*T-d*_)*N,t[12]=(o*A-r*D-l*x)*N,t[13]=(n*D-i*A+s*x)*N,t[14]=(b*M-y*E-m*_)*N,t[15]=(f*E-p*M+u*_)*N,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,y=a*p,b=r*f,m=r*p,h=o*p,_=l*c,M=l*f,v=l*p,E=i.x,T=i.y,C=i.z;return s[0]=(1-(b+h))*E,s[1]=(d+v)*E,s[2]=(y-M)*E,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+h))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(y+M)*C,s[9]=(m-_)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Lo.set(s[0],s[1],s[2]).length(),o=Lo.set(s[4],s[5],s[6]).length(),l=Lo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Xi.copy(this);let c=1/r,f=1/o,p=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=f,Xi.elements[5]*=f,Xi.elements[6]*=f,Xi.elements[8]*=p,Xi.elements[9]*=p,Xi.elements[10]*=p,n.setFromRotationMatrix(Xi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Zi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),y,b;if(l)y=a/(r-a),b=r*a/(r-a);else if(o===Zi)y=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Jo)y=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Zi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),y,b;if(l)y=1/(r-a),b=r/(r-a);else if(o===Zi)y=-2/(r-a),b=-(r+a)/(r-a);else if(o===Jo)y=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Lo=new G,Xi=new We,Iw=new G(0,0,0),Ow=new G(1,1,1),Ua=new G,Jh=new G,_i=new G,GM=new We,kM=new ms,Qs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-fe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return GM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(GM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return kM.setFromEuler(this),this.setFromQuaternion(kM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qs.DEFAULT_ORDER="XYZ";var tl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pw=0,WM=new G,No=new ms,Ws=new We,Kh=new G,Rc=new G,Bw=new G,Fw=new ms,XM=new G(1,0,0),qM=new G(0,1,0),YM=new G(0,0,1),ZM={type:"added"},zw={type:"removed"},Io={type:"childadded",child:null},kg={type:"childremoved",child:null},Fn=class e extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Qs,i=new ms,s=new G(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Wt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return No.setFromAxisAngle(t,n),this.quaternion.multiply(No),this}rotateOnWorldAxis(t,n){return No.setFromAxisAngle(t,n),this.quaternion.premultiply(No),this}rotateX(t){return this.rotateOnAxis(XM,t)}rotateY(t){return this.rotateOnAxis(qM,t)}rotateZ(t){return this.rotateOnAxis(YM,t)}translateOnAxis(t,n){return WM.copy(t).applyQuaternion(this.quaternion),this.position.add(WM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(XM,t)}translateY(t){return this.translateOnAxis(qM,t)}translateZ(t){return this.translateOnAxis(YM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Kh.copy(t):Kh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(Rc,Kh,this.up):Ws.lookAt(Kh,Rc,this.up),this.quaternion.setFromRotationMatrix(Ws),s&&(Ws.extractRotation(s.matrixWorld),No.setFromRotationMatrix(Ws),this.quaternion.premultiply(No.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ZM),Io.child=t,this.dispatchEvent(Io),Io.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zw),kg.child=t,this.dispatchEvent(kg),kg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ZM),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rc,t,Bw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rc,Fw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),y=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),y.length>0&&(i.nodes=y)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new G(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Js=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hw={type:"move"},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,y=.005;c.inputState.pinching&&u>d+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Xb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},Qh={h:0,s:0,l:0};function Wg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ae=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=he.workingColorSpace){return this.r=t,this.g=n,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=he.workingColorSpace){if(t=z0(t,1),n=fe(n,0,1),i=fe(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Wg(r,a,t+1/3),this.g=Wg(r,a,t),this.b=Wg(r,a,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,n=On){function i(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){let i=Xb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return he.workingToColorSpace(In.copy(this),t),Math.round(fe(In.r*255,0,255))*65536+Math.round(fe(In.g*255,0,255))*256+Math.round(fe(In.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=he.workingColorSpace){he.workingToColorSpace(In.copy(this),n);let i=In.r,s=In.g,a=In.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=he.workingColorSpace){return he.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=On){he.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,s=In.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(La),this.setHSL(La.h+t,La.s+n,La.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(La),t.getHSL(Qh);let i=Ic(La.h,Qh.h,n),s=Ic(La.s,Qh.s,n),a=Ic(La.l,Qh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new ae;ae.NAMES=Xb;var zc=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qs,this.environmentIntensity=1,this.environmentRotation=new Qs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},qi=new G,Xs=new G,Xg=new G,qs=new G,Oo=new G,Po=new G,JM=new G,qg=new G,Yg=new G,Zg=new G,Jg=new Xe,Kg=new Xe,Qg=new Xe,hs=class e{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),qi.subVectors(t,n),s.cross(qi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){qi.subVectors(s,n),Xs.subVectors(i,n),Xg.subVectors(t,n);let r=qi.dot(qi),o=qi.dot(Xs),l=qi.dot(Xg),c=Xs.dot(Xs),f=Xs.dot(Xg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,y=(r*f-o*l)*u;return a.set(1-d-y,y,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,qs)===null?!1:qs.x>=0&&qs.y>=0&&qs.x+qs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,qs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,qs.x),l.addScaledVector(r,qs.y),l.addScaledVector(o,qs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Jg.setScalar(0),Kg.setScalar(0),Qg.setScalar(0),Jg.fromBufferAttribute(t,n),Kg.fromBufferAttribute(t,i),Qg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Jg,a.x),r.addScaledVector(Kg,a.y),r.addScaledVector(Qg,a.z),r}static isFrontFacing(t,n,i,s){return qi.subVectors(i,n),Xs.subVectors(t,n),qi.cross(Xs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),qi.cross(Xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Oo.subVectors(s,i),Po.subVectors(a,i),qg.subVectors(t,i);let l=Oo.dot(qg),c=Po.dot(qg);if(l<=0&&c<=0)return n.copy(i);Yg.subVectors(t,s);let f=Oo.dot(Yg),p=Po.dot(Yg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Oo,r);Zg.subVectors(t,a);let d=Oo.dot(Zg),y=Po.dot(Zg);if(y>=0&&d<=y)return n.copy(a);let b=d*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Po,o);let m=f*y-d*p;if(m<=0&&p-f>=0&&d-y>=0)return JM.subVectors(a,s),o=(p-f)/(p-f+(d-y)),n.copy(s).addScaledVector(JM,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Oo,r).addScaledVector(Po,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pa=class{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Yi):Yi.fromBufferAttribute(a,r),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jh.copy(i.boundingBox)),jh.applyMatrix4(t.matrixWorld),this.union(jh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dc),$h.subVectors(this.max,Dc),Bo.subVectors(t.a,Dc),Fo.subVectors(t.b,Dc),zo.subVectors(t.c,Dc),Na.subVectors(Fo,Bo),Ia.subVectors(zo,Fo),pr.subVectors(Bo,zo);let n=[0,-Na.z,Na.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Na.z,0,-Na.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Na.y,Na.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!jg(n,Bo,Fo,zo,$h)||(n=[1,0,0,0,1,0,0,0,1],!jg(n,Bo,Fo,zo,$h))?!1:(tf.crossVectors(Na,Ia),n=[tf.x,tf.y,tf.z],jg(n,Bo,Fo,zo,$h))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ys),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ys=[new G,new G,new G,new G,new G,new G,new G,new G],Yi=new G,jh=new Pa,Bo=new G,Fo=new G,zo=new G,Na=new G,Ia=new G,pr=new G,Dc=new G,$h=new G,tf=new G,mr=new G;function jg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){mr.fromArray(e,a);let o=s.x*Math.abs(mr.x)+s.y*Math.abs(mr.y)+s.z*Math.abs(mr.z),l=t.dot(mr),c=n.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var rn=new G,ef=new le,Vw=0,Bn=class extends ps{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Hb,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ef.fromBufferAttribute(this,n),ef.applyMatrix3(t),this.setXY(n,ef.x,ef.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Xo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array),a=qn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hc=class extends Bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Vc=class extends Bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Oi=class extends Bn{constructor(t,n,i){super(new Float32Array(t),n,i)}},Gw=new Pa,Uc=new G,$g=new G,nl=class{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Gw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uc.subVectors(t,this.center);let n=Uc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Uc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($g.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uc.copy(t.center).add($g)),this.expandByPoint(Uc.copy(t.center).sub($g))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kw=0,Ii=new We,t0=new Fn,Ho=new G,yi=new Pa,Lc=new Pa,_n=new G,Pi=class e extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dw(t)?Vc:Hc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Wt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,n,i){return Ii.makeTranslation(t,n,i),this.applyMatrix4(Ii),this}scale(t,n,i){return Ii.makeScale(t,n,i),this.applyMatrix4(Ii),this}lookAt(t){return t0.lookAt(t),t0.updateMatrix(),this.applyMatrix4(t0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Oi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Lc.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(yi.min,Lc.min),yi.expandByPoint(_n),_n.addVectors(yi.max,Lc.max),yi.expandByPoint(_n)):(yi.expandByPoint(Lc.min),yi.expandByPoint(Lc.max))}yi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)_n.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(_n));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)_n.fromBufferAttribute(o,c),l&&(Ho.fromBufferAttribute(t,c),_n.add(Ho)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new G,l[x]=new G;let c=new G,f=new G,p=new G,u=new le,d=new le,y=new le,b=new G,m=new G;function h(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,A),y.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),y.sub(u);let D=1/(d.x*y.y-y.x*d.y);isFinite(D)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(p,-d.y).multiplyScalar(D),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-y.x).multiplyScalar(D),o[x].add(b),o[A].add(b),o[R].add(b),l[x].add(m),l[A].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,A=_.length;x<A;++x){let R=_[x],D=R.start,P=R.count;for(let H=D,U=D+P;H<U;H+=3)h(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let M=new G,v=new G,E=new G,T=new G;function C(x){E.fromBufferAttribute(s,x),T.copy(E);let A=o[x];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(T,A);let D=v.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,D)}for(let x=0,A=_.length;x<A;++x){let R=_[x],D=R.start,P=R.count;for(let H=D,U=D+P;H<U;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new G,a=new G,r=new G,o=new G,l=new G,c=new G,f=new G,p=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let y=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,y=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[y++]=c[d++]}return new Bn(u,f,p)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var e0=new G,Ww=new G,Xw=new Wt,vi=class{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=e0.subVectors(i,n).cross(Ww.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(e0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Xw.getNormalMatrix(t),s=this.coplanarPoint(e0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qw=0,js=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=hl,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=y0,this.blendDst=v0,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gf,this.stencilZFail=gf,this.stencilZPass=gf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new vi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zs=new G,n0=new G,nf=new G,sf=new G,Gc=class{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Zs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Zs.copy(this.origin).addScaledVector(this.direction,n),Zs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){n0.copy(t).add(n).multiplyScalar(.5),nf.copy(n).sub(t).normalize(),sf.copy(this.origin).sub(n0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(nf),o=sf.dot(this.direction),l=-sf.dot(nf),c=sf.lengthSq(),f=Math.abs(1-r*r),p,u,d,y;if(f>0)if(p=r*l-o,u=r*o-l,y=a*f,p>=0)if(u>=-y)if(u<=y){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-y?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=y?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(n0).addScaledVector(nf,u),d}intersectSphere(t,n){if(t.radius<0)return null;Zs.subVectors(t.center,this.origin);let i=Zs.dot(this.direction),s=Zs.dot(Zs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Zs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,y=n.x-r.x,b=n.y-r.y,m=n.z-r.z,h=i.x-r.x,_=i.y-r.y,M=i.z-r.z,v=Math.abs(l),E=Math.abs(c),T=Math.abs(f),C,x,A,R,D,P,H,U,N,W,X,j;if(v>=E&&v>=T?(A=l,P=p,N=y,j=h,l>=0?(C=c,x=f,R=u,D=d,H=b,U=m,W=_,X=M):(C=f,x=c,R=d,D=u,H=m,U=b,W=M,X=_)):E>=T?(A=c,P=u,N=b,j=_,c>=0?(C=f,x=l,R=d,D=p,H=m,U=y,W=M,X=h):(C=l,x=f,R=p,D=d,H=y,U=m,W=h,X=M)):(A=f,P=d,N=m,j=M,f>=0?(C=l,x=c,R=p,D=u,H=y,U=b,W=h,X=_):(C=c,x=l,R=u,D=p,H=b,U=y,W=_,X=h)),A===0)return null;let V=C/A,Q=x/A,tt=1/A,St=R-V*P,vt=D-Q*P,Pt=H-V*N,Ft=U-Q*N,Kt=W-V*j,J=X-Q*j,et=Kt*Ft-J*Pt,ot=St*J-vt*Kt,It=Pt*vt-Ft*St;if(s){if(et<0||ot<0||It<0)return null}else if((et<0||ot<0||It<0)&&(et>0||ot>0||It>0))return null;let ft=et+ot+It;if(ft===0)return null;let zt=tt*(et*P+ot*N+It*j);return(ft>0?zt<0:zt>0)?null:this.at(zt/ft,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kc=class extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},KM=new We,gr=new Gc,af=new nl,QM=new G,rf=new G,of=new G,lf=new G,i0=new G,cf=new G,jM=new G,uf=new G,zn=class extends Fn{constructor(t=new Pi,n=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){cf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(i0.fromBufferAttribute(p,t),r?cf.addScaledVector(i0,f):cf.addScaledVector(i0.sub(n),f))}n.add(cf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),af.copy(i.boundingSphere),af.applyMatrix4(a),gr.copy(t.ray).recast(t.near),!(af.containsPoint(gr.origin)===!1&&(gr.intersectSphere(af,QM)===null||gr.origin.distanceToSquared(QM)>(t.far-t.near)**2))&&(KM.copy(a).invert(),gr.copy(t.ray).applyMatrix4(KM),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,gr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,b=u.length;y<b;y++){let m=u[y],h=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){let T=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=hf(this,h,t,i,c,f,p,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let y=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=y,h=b;m<h;m+=3){let _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=hf(this,r,t,i,c,f,p,_,M,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,b=u.length;y<b;y++){let m=u[y],h=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){let T=v,C=v+1,x=v+2;s=hf(this,h,t,i,c,f,p,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let y=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=y,h=b;m<h;m+=3){let _=m,M=m+1,v=m+2;s=hf(this,r,t,i,c,f,p,_,M,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Yw(e,t,n,i,s,a,r,o){let l;if(t.side===wn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===gs,o),l===null)return null;uf.copy(o),uf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(uf);return c<n.near||c>n.far?null:{distance:c,point:uf.clone(),object:e}}function hf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,rf),e.getVertexPosition(l,of),e.getVertexPosition(c,lf);let f=Yw(e,t,n,i,rf,of,lf,jM);if(f){let p=new G;hs.getBarycoord(jM,rf,of,lf,p),s&&(f.uv=hs.getInterpolatedAttribute(s,o,l,c,p,new le)),a&&(f.uv1=hs.getInterpolatedAttribute(a,o,l,c,p,new le)),r&&(f.normal=hs.getInterpolatedAttribute(r,o,l,c,p,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new G,materialIndex:0};hs.getNormal(rf,of,lf,u.normal),f.face=u,f.barycoord=p}return f}var il=class extends Yn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=yn,f=yn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=new nl,Zw=new le(.5,.5),ff=new G,sl=class{constructor(t=new vi,n=new vi,i=new vi,s=new vi,a=new vi,r=new vi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Zi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],y=a[8],b=a[9],m=a[10],h=a[11],_=a[12],M=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-y,E-_).normalize(),s[1].setComponents(c+r,d+f,h+y,E+_).normalize(),s[2].setComponents(c+o,d+p,h+b,E+M).normalize(),s[3].setComponents(c-o,d-p,h-b,E-M).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,h-m,E-v).normalize();else if(s[4].setComponents(c-l,d-u,h-m,E-v).normalize(),n===Zi)s[5].setComponents(c+l,d+u,h+m,E+v).normalize();else if(n===Jo)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let n=Zw.distanceTo(t.center);return _r.radius=.7071067811865476+n,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ff.x=s.normal.x>0?t.max.x:t.min.x,ff.y=s.normal.y>0?t.max.y:t.min.y,ff.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ff)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wc=class extends Yn{constructor(t=[],n=Va,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ba=class extends Yn{constructor(t,n,i=Ki,s,a,r,o=yn,l=yn,c,f=ds,p=1){if(f!==ds&&f!==ka)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Df=class extends Ba{constructor(t,n=Ki,i=Va,s,a,r=yn,o=yn,l,c=ds){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xc=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},al=class e extends Pi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;y("z","y","x",-1,-1,i,n,t,r,a,0),y("z","y","x",1,-1,i,n,-t,r,a,1),y("x","z","y",1,1,t,i,n,s,r,2),y("x","z","y",1,-1,t,i,-n,s,r,3),y("x","y","z",1,-1,t,n,i,s,a,4),y("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(f,3)),this.setAttribute("uv",new Oi(p,2));function y(b,m,h,_,M,v,E,T,C,x,A){let R=v/C,D=E/x,P=v/2,H=E/2,U=T/2,N=C+1,W=x+1,X=0,j=0,V=new G;for(let Q=0;Q<W;Q++){let tt=Q*D-H;for(let St=0;St<N;St++){let vt=St*R-P;V[b]=vt*_,V[m]=tt*M,V[h]=U,c.push(V.x,V.y,V.z),V[b]=0,V[m]=0,V[h]=T>0?1:-1,f.push(V.x,V.y,V.z),p.push(St/C),p.push(1-Q/x),X+=1}}for(let Q=0;Q<x;Q++)for(let tt=0;tt<C;tt++){let St=u+tt+N*Q,vt=u+tt+N*(Q+1),Pt=u+(tt+1)+N*(Q+1),Ft=u+(tt+1)+N*Q;l.push(St,vt,Ft),l.push(vt,Pt,Ft),j+=6}o.addGroup(d,j,A),d+=j,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vr=class e extends Pi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],y=[],b=[],m=[];for(let h=0;h<f;h++){let _=h*u-r;for(let M=0;M<c;M++){let v=M*p-a;y.push(v,-_,0),b.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){let M=_+c*h,v=_+c*(h+1),E=_+1+c*(h+1),T=_+1+c*h;d.push(M,v,T),d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new Oi(y,3)),this.setAttribute("normal",new Oi(b,3)),this.setAttribute("uv",new Oi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var qc=class extends js{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ae(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Mr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if($M(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if($M(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Hn(e){let t={};for(let n=0;n<e.length;n++){let i=Mr(e[n]);for(let s in i)t[s]=i[s]}return t}function $M(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Jw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function H0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var qb={clone:Mr,merge:Hn},Kw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xi=class extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kw,this.fragmentShader=Qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Jw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new We().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uf=class extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rl=class extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ol=class extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lf=class extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function s0(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Fa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:o0,endingEnd:o0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case l0:a=t,o=2*n-i;break;case c0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case l0:r=t,l=2*i-n;break;case c0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,y=(i-n)/(s-n),b=y*y,m=b*y,h=-u*m+2*u*b-u*y,_=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*y+1,M=(-1-d)*m+(1.5+d)*b+.5*y,v=d*m-d*b;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+_*r[c+E]+M*r[l+E]+v*r[p+E];return a}},If=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Of=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pf=class extends Fa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let y=(i-n)/(s-n),b=1-y;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*y;return a}let u=o*2,d=t-1;for(let y=0;y!==o;++y){let b=r[c+y],m=r[l+y],h=d*u+y*2,_=p[h],M=p[h+1],v=t*u+y*2,E=f[v],T=f[v+1],C=$w(i,n,_,E,s);a[y]=Yb(C,b,M,T,m)}return a}};function Yb(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function jw(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function $w(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=Yb(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=jw(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Si=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(n,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),s0(t.settings)&&(i.settings={inTangents:Vo(t.settings.inTangents,Array),outTangents:Vo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Of(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new If(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Pf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Oc:n=this.InterpolantFactoryMethodDiscrete;break;case Af:n=this.InterpolantFactoryMethodLinear;break;case mf:n=this.InterpolantFactoryMethodSmooth;break;case r0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oc;case this.InterpolantFactoryMethodLinear:return Af;case this.InterpolantFactoryMethodSmooth:return mf;case this.InterpolantFactoryMethodBezier:return r0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;s0(this.settings)&&(tb(this.settings.inTangents,t),tb(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&pw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let y=0;y!==i;++y){let b=n[p+y];if(b!==n[u+y]||b!==n[d+y]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s0(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Af;var za=class extends Si{constructor(t,n,i){super(t,n,i)}};za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Oc;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;var Bf=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Bf.prototype.ValueTypeName="color";var Ff=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Ff.prototype.ValueTypeName="number";var zf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ms.slerpFlat(a,0,r,c-o,r,c,l);return a}},Yc=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new zf(this.times,this.values,this.getValueSize(),t)}};Yc.prototype.ValueTypeName="quaternion";Yc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Si{constructor(t,n,i){super(t,n,i)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Oc;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Hf=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Hf.prototype.ValueTypeName="vector";var _f={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(eb(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!eb(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function eb(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],y=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zb=new Vf,ll=class{constructor(t){this.manager=t!==void 0?t:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Go=new WeakMap,Gf=class extends ll{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=_f.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=Go.get(r);p===void 0&&(p=[],Go.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=Ko("img");function l(){f(),n&&n(this);let p=Go.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}Go.delete(this),a.manager.itemEnd(t)}function c(p){f(),s&&s(p),_f.remove(`image:${t}`);let u=Go.get(this)||[];for(let d=0;d<u.length;d++){let y=u[d];y.onError&&y.onError(p)}Go.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_f.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var Zc=class extends ll{constructor(t){super(t)}load(t,n,i,s){let a=new Yn,r=new Gf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Jc=class extends Fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Kc=class extends Jc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},a0=new We,nb=new G,ib=new G,kf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;nb.setFromMatrixPosition(t.matrixWorld),n.position.copy(nb),ib.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ib),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){a0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(a0,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Jo||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(a0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},df=new G,pf=new ms,us=new G,Qc=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(df,pf,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(df,pf,us.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(df,pf,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(df,pf,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oa=new G,sb=new le,ab=new le,Pn=class extends Qc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,n){return this.getViewBounds(t,sb,ab),n.subVectors(ab,sb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var cl=class extends Qc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},u0=class extends kf{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jc=class extends Jc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new u0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var ko=-90,Wo=1,Wf=class extends Fn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(ko,Wo,t,n);s.layers=this.layers,this.add(s);let a=new Pn(ko,Wo,t,n);a.layers=this.layers,this.add(a);let r=new Pn(ko,Wo,t,n);r.layers=this.layers,this.add(r);let o=new Pn(ko,Wo,t,n);o.layers=this.layers,this.add(o);let l=new Pn(ko,Wo,t,n);l.layers=this.layers,this.add(l);let c=new Pn(ko,Wo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Xf=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var V0="\\[\\]\\.:\\/",tC=new RegExp("["+V0+"]","g"),G0="[^"+V0+"]",eC="[^"+V0.replace("\\.","")+"]",nC=/((?:WC+[\/:])*)/.source.replace("WC",G0),iC=/(WCOD+)?/.source.replace("WCOD",eC),sC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",G0),aC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",G0),rC=new RegExp("^"+nC+iC+sC+aC+"$"),oC=["material","materials","bones","map"],h0=class{constructor(t,n,i){let s=i||He.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},He=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tC,"")}static parseTrackName(t){let n=rC.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);oC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=h0;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JU=new Float32Array(1);var rb=new We,$c=class{constructor(t,n,i=0,s=1/0){this.ray=new Gc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return rb.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rb),this}intersectObject(t,n=!0,i=[]){return f0(t,this,i,n),i.sort(ob),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)f0(t[s],this,i,n);return i.sort(ob),i}};function ob(e,t){return e.distance-t.distance}function f0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)f0(a[r],t,n,!0)}}var d0=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function k0(e,t,n,i){let s=lC(i);switch(n){case N0:return e*t;case O0:return e*t/s.components*s.byteLength;case $f:return e*t/s.components*s.byteLength;case Wa:return e*t*2/s.components*s.byteLength;case td:return e*t*2/s.components*s.byteLength;case I0:return e*t*3/s.components*s.byteLength;case Fi:return e*t*4/s.components*s.byteLength;case ed:return e*t*4/s.components*s.byteLength;case iu:case su:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case au:case ru:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case id:case ad:return Math.max(e,16)*Math.max(t,8)/4;case nd:case sd:return Math.max(e,8)*Math.max(t,8)/2;case rd:case od:case cd:case ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ld:case ou:case hd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _d:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Td:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ad:case wd:case Cd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Rd:case Dd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case lu:case Ud:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lC(e){switch(e){case si:case R0:return{byteLength:1,components:1};case fl:case D0:case ji:return{byteLength:2,components:1};case Qf:case jf:return{byteLength:2,components:4};case Ki:case Kf:case Qi:return{byteLength:4,components:1};case U0:case L0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function g1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function uC(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,y)=>d.start-y.start);let u=0;for(let d=1;d<p.length;d++){let y=p[u],b=p[d];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,y=p.length;d<y;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var hC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_C=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,BC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VC="gl_FragColor = linearToOutputTexel( gl_FragColor );",GC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$C=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ER=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$R=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:hC,alphahash_pars_fragment:fC,alphamap_fragment:dC,alphamap_pars_fragment:pC,alphatest_fragment:mC,alphatest_pars_fragment:gC,aomap_fragment:_C,aomap_pars_fragment:yC,batching_pars_vertex:vC,batching_vertex:xC,begin_vertex:SC,beginnormal_vertex:MC,bsdfs:bC,iridescence_fragment:EC,bumpmap_pars_fragment:TC,clipping_planes_fragment:AC,clipping_planes_pars_fragment:wC,clipping_planes_pars_vertex:CC,clipping_planes_vertex:RC,color_fragment:DC,color_pars_fragment:UC,color_pars_vertex:LC,color_vertex:NC,common:IC,cube_uv_reflection_fragment:OC,defaultnormal_vertex:PC,displacementmap_pars_vertex:BC,displacementmap_vertex:FC,emissivemap_fragment:zC,emissivemap_pars_fragment:HC,colorspace_fragment:VC,colorspace_pars_fragment:GC,envmap_fragment:kC,envmap_common_pars_fragment:WC,envmap_pars_fragment:XC,envmap_pars_vertex:qC,envmap_physical_pars_fragment:iR,envmap_vertex:YC,fog_vertex:ZC,fog_pars_vertex:JC,fog_fragment:KC,fog_pars_fragment:QC,gradientmap_pars_fragment:jC,lightmap_pars_fragment:$C,lights_lambert_fragment:tR,lights_lambert_pars_fragment:eR,lights_pars_begin:nR,lights_toon_fragment:sR,lights_toon_pars_fragment:aR,lights_phong_fragment:rR,lights_phong_pars_fragment:oR,lights_physical_fragment:lR,lights_physical_pars_fragment:cR,lights_fragment_begin:uR,lights_fragment_maps:hR,lights_fragment_end:fR,lightprobes_pars_fragment:dR,logdepthbuf_fragment:pR,logdepthbuf_pars_fragment:mR,logdepthbuf_pars_vertex:gR,logdepthbuf_vertex:_R,map_fragment:yR,map_pars_fragment:vR,map_particle_fragment:xR,map_particle_pars_fragment:SR,metalnessmap_fragment:MR,metalnessmap_pars_fragment:bR,morphinstance_vertex:ER,morphcolor_vertex:TR,morphnormal_vertex:AR,morphtarget_pars_vertex:wR,morphtarget_vertex:CR,normal_fragment_begin:RR,normal_fragment_maps:DR,normal_pars_fragment:UR,normal_pars_vertex:LR,normal_vertex:NR,normalmap_pars_fragment:IR,clearcoat_normal_fragment_begin:OR,clearcoat_normal_fragment_maps:PR,clearcoat_pars_fragment:BR,iridescence_pars_fragment:FR,opaque_fragment:zR,packing:HR,premultiplied_alpha_fragment:VR,project_vertex:GR,dithering_fragment:kR,dithering_pars_fragment:WR,roughnessmap_fragment:XR,roughnessmap_pars_fragment:qR,shadowmap_pars_fragment:YR,shadowmap_pars_vertex:ZR,shadowmap_vertex:JR,shadowmask_pars_fragment:KR,skinbase_vertex:QR,skinning_pars_vertex:jR,skinning_vertex:$R,skinnormal_vertex:t3,specularmap_fragment:e3,specularmap_pars_fragment:n3,tonemapping_fragment:i3,tonemapping_pars_fragment:s3,transmission_fragment:a3,transmission_pars_fragment:r3,uv_pars_fragment:o3,uv_pars_vertex:l3,uv_vertex:c3,worldpos_vertex:u3,background_vert:h3,background_frag:f3,backgroundCube_vert:d3,backgroundCube_frag:p3,cube_vert:m3,cube_frag:g3,depth_vert:_3,depth_frag:y3,distance_vert:v3,distance_frag:x3,equirect_vert:S3,equirect_frag:M3,linedashed_vert:b3,linedashed_frag:E3,meshbasic_vert:T3,meshbasic_frag:A3,meshlambert_vert:w3,meshlambert_frag:C3,meshmatcap_vert:R3,meshmatcap_frag:D3,meshnormal_vert:U3,meshnormal_frag:L3,meshphong_vert:N3,meshphong_frag:I3,meshphysical_vert:O3,meshphysical_frag:P3,meshtoon_vert:B3,meshtoon_frag:F3,points_vert:z3,points_frag:H3,shadow_vert:V3,shadow_frag:G3,sprite_vert:k3,sprite_frag:W3},_t={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},vs={basic:{uniforms:Hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Hn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Hn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ae(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Hn([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Hn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Hn([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Hn([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Hn([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Hn([_t.lights,_t.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vs.physical={uniforms:Hn([vs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Pd={r:0,b:0,g:0},X3=new We,_1=new Wt;_1.set(-1,0,0,0,1,0,0,0,1);function q3(e,t,n,i,s,a){let r=new ae(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function y(_){let M=!1,v=d(_);v===null?m(r,o):v&&v.isColor&&(m(v,1),M=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(_,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===eu)?(c===void 0&&(c=new zn(new al(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Mr(vs.backgroundCube.uniforms),vertexShader:vs.backgroundCube.vertexShader,fragmentShader:vs.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X3.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_1),c.material.toneMapped=he.getTransfer(v.colorSpace)!==be,(f!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new zn(new vr(2,2),new xi({name:"BackgroundMaterial",uniforms:Mr(vs.background.uniforms),vertexShader:vs.background.vertexShader,fragmentShader:vs.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Pd,H0(e)),n.buffers.color.setClear(Pd.r,Pd.g,Pd.b,M,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:y,addToRenderList:b,dispose:h}}function Y3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,P,H,U,N){let W=!1,X=p(D,U,H,P);a!==X&&(a=X,c(a.object)),W=d(D,U,H,N),W&&y(D,U,H,N),N!==null&&t.update(N,e.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,v(D,P,H,U),N!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,P,H,U){let N=U.wireframe===!0,W=i[P.id];W===void 0&&(W={},i[P.id]=W);let X=D.isInstancedMesh===!0?D.id:0,j=W[X];j===void 0&&(j={},W[X]=j);let V=j[H.id];V===void 0&&(V={},j[H.id]=V);let Q=V[N];return Q===void 0&&(Q=u(l()),V[N]=Q),Q}function u(D){let P=[],H=[],U=[];for(let N=0;N<n;N++)P[N]=0,H[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:U,object:D,attributes:{},index:null}}function d(D,P,H,U){let N=a.attributes,W=P.attributes,X=0,j=H.getAttributes();for(let V in j)if(j[V].location>=0){let tt=N[V],St=W[V];if(St===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),tt===void 0||tt.attribute!==St||St&&tt.data!==St.data)return!0;X++}return a.attributesNum!==X||a.index!==U}function y(D,P,H,U){let N={},W=P.attributes,X=0,j=H.getAttributes();for(let V in j)if(j[V].location>=0){let tt=W[V];tt===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let St={};St.attribute=tt,tt&&tt.data&&(St.data=tt.data),N[V]=St,X++}a.attributes=N,a.attributesNum=X,a.index=U}function b(){let D=a.newAttributes;for(let P=0,H=D.length;P<H;P++)D[P]=0}function m(D){h(D,0)}function h(D,P){let H=a.newAttributes,U=a.enabledAttributes,N=a.attributeDivisors;H[D]=1,U[D]===0&&(e.enableVertexAttribArray(D),U[D]=1),N[D]!==P&&(e.vertexAttribDivisor(D,P),N[D]=P)}function _(){let D=a.newAttributes,P=a.enabledAttributes;for(let H=0,U=P.length;H<U;H++)P[H]!==D[H]&&(e.disableVertexAttribArray(H),P[H]=0)}function M(D,P,H,U,N,W,X){X===!0?e.vertexAttribIPointer(D,P,H,N,W):e.vertexAttribPointer(D,P,H,U,N,W)}function v(D,P,H,U){b();let N=U.attributes,W=H.getAttributes(),X=P.defaultAttributeValues;for(let j in W){let V=W[j];if(V.location>=0){let Q=N[j];if(Q===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let tt=Q.normalized,St=Q.itemSize,vt=t.get(Q);if(vt===void 0)continue;let Pt=vt.buffer,Ft=vt.type,Kt=vt.bytesPerElement,J=Ft===e.INT||Ft===e.UNSIGNED_INT||Q.gpuType===Kf;if(Q.isInterleavedBufferAttribute){let et=Q.data,ot=et.stride,It=Q.offset;if(et.isInstancedInterleavedBuffer){for(let ft=0;ft<V.locationSize;ft++)h(V.location+ft,et.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let ft=0;ft<V.locationSize;ft++)M(V.location+ft,St/V.locationSize,Ft,tt,ot*Kt,(It+St/V.locationSize*ft)*Kt,J)}else{if(Q.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)h(V.location+et,Q.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let et=0;et<V.locationSize;et++)M(V.location+et,St/V.locationSize,Ft,tt,St*Kt,St/V.locationSize*et*Kt,J)}}else if(X!==void 0){let tt=X[j];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(V.location,tt);break;case 3:e.vertexAttrib3fv(V.location,tt);break;case 4:e.vertexAttrib4fv(V.location,tt);break;default:e.vertexAttrib1fv(V.location,tt)}}}}_()}function E(){A();for(let D in i){let P=i[D];for(let H in P){let U=P[H];for(let N in U){let W=U[N];for(let X in W)f(W[X].object),delete W[X];delete U[N]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let P=i[D.id];for(let H in P){let U=P[H];for(let N in U){let W=U[N];for(let X in W)f(W[X].object),delete W[X];delete U[N]}}delete i[D.id]}function C(D){for(let P in i){let H=i[P];for(let U in H){let N=H[U];if(N[D.id]===void 0)continue;let W=N[D.id];for(let X in W)f(W[X].object),delete W[X];delete N[D.id]}}}function x(D){for(let P in i){let H=i[P],U=D.isInstancedMesh===!0?D.id:0,N=H[U];if(N!==void 0){for(let W in N){let X=N[W];for(let j in X)f(X[j].object),delete X[j];delete N[W]}delete H[U],Object.keys(H).length===0&&delete i[P]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Z3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function J3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Fi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&C!==Qi&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Nt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:T}}function K3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new vi,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let y=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||y===null||y.length===0||a&&!m)a?f(null):c();else{let _=a?0:i,M=_*4,v=h.clippingState||null;l.value=v,v=f(y,u,M,d);for(let E=0;E!==M;++E)v[E]=n[E];h.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,y){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,y!==!0||m===null){let h=d+b*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,v=d;M!==b;++M,v+=4)r.copy(p[M]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var gl=4,Q3=6,j3=20,$3=256,cu=new cl,Jb=new ae,W0=null,X0=0,q0=0,Y0=!1,t2=new G,br=new G,Fd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=t2}=a;W0=this._renderer.getRenderTarget(),X0=this._renderer.getActiveCubeFace(),q0=this._renderer.getActiveMipmapLevel(),Y0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(W0,X0,q0),this._renderer.xr.enabled=Y0,t.scissorTest=!1,ml(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Va||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),W0=this._renderer.getRenderTarget(),X0=this._renderer.getActiveCubeFace(),q0=this._renderer.getActiveMipmapLevel(),Y0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:ji,format:Fi,colorSpace:Pc,depthBuffer:!1},s=Kb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e2(a)),this._blurMaterial=i2(a,t,n),this._ggxMaterial=n2(a,t,n)}return s}_compileMaterial(t){let n=new zn(new Pi,t);this._renderer.compile(n,cu)}_sceneToCubeUV(t,n,i,s,a){let l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Jb),p.toneMapping=Ji,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new al,new kc({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,h=!0):(m.color.copy(Jb),h=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[M],a.y,a.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[M]));let E=this._cubeSize;ml(s,v*E,M>2?E:0,E,E),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Va||t.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,cu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:y}=this,b=this._sizeLods[i],m=3*b*(i>y-gl?i-y+gl:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=y-n,ml(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,cu),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=y-i,ml(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,cu)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-gl?s-this._lodMax+gl:0),u=4*(this._cubeSize-f);ml(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,cu)}};function e2(e){let t=[],n=[],i=e,s=e-gl+1+Q3;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,y=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let h=0;h<p;h++){let _=h%3*2/3-1,M=h>2?0:-1,v=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];y.set(v,d*u*h);for(let E=0;E<u;E++){let T=f[E*2]*2-1,C=f[E*2+1]*2-1;h===0?br.set(1,C,T):h===1?br.set(-T,1,-C):h===2?br.set(-T,C,1):h===3?br.set(-1,C,-T):h===4?br.set(-T,-1,C):br.set(T,C,-1),br.toArray(b,(h*u+E)*d)}}let m=new Pi;m.setAttribute("position",new Bn(y,d)),m.setAttribute("outputDirection",new Bn(b,d)),n.push(new zn(m,null)),i>gl&&i--}return{lodMeshes:n,sizeLods:t}}function Kb(e,t,n){let i=new ii(e,t,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function n2(e,t,n){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function i2(e,t,n){return new xi({name:"SphericalGaussianBlur",defines:{SAMPLES:j3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Qb(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function jb(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zd=class extends ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new al(5,5,5),a=new xi({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:_s});a.uniforms.tEquirect.value=n;let r=new zn(s,a),o=n.minFilter;return n.minFilter===Ga&&(n.minFilter=on),new Wf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function s2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Yf||d===Zf)if(t.has(u)){let y=t.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let b=new zd(y.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,y=d===Yf||d===Zf,b=d===Va||d===Sr;if(y||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Fd(e)),m=y?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return y&&_&&_.height>0||b&&_&&l(_)?(i===null&&(i=new Fd(e)),m=y?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Yf?u.mapping=Va:d===Zf&&(u.mapping=Sr),u}function l(u){let d=0,y=6;for(let b=0;b<y;b++)u[b]!==void 0&&d++;return d===y}function c(u){let d=u.target;d.removeEventListener("dispose",c);let y=t.get(d);y!==void 0&&(t.delete(d),y.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let y=n.get(d);y!==void 0&&(n.delete(d),y.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function a2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&yr("WebGLRenderer: "+i+" extension not supported."),s}}}function r2(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let y in u.attributes)t.remove(u.attributes[y]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,y=p.attributes.position,b=0;if(y===void 0)return;if(d!==null){let _=d.array;b=d.version;for(let M=0,v=_.length;M<v;M+=3){let E=_[M+0],T=_[M+1],C=_[M+2];u.push(E,T,T,C,C,E)}}else{let _=y.array;b=y.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let E=M+0,T=M+1,C=M+2;u.push(E,T,T,C,C,E)}}let m=new(y.count>=65535?Vc:Hc)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function o2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function l2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function c2(e,t,n){let i=new WeakMap,s=new Xe;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;d===!0&&(M=1),y===!0&&(M=2),b===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*E*4*p),C=new Fc(T,v,E,p);C.type=Qi,C.needsUpdate=!0;let x=M*4;for(let R=0;R<p;R++){let D=m[R],P=h[R],H=_[R],U=v*E*4*R;for(let N=0;N<D.count;N++){let W=N*x;d===!0&&(s.fromBufferAttribute(D,N),T[U+W+0]=s.x,T[U+W+1]=s.y,T[U+W+2]=s.z,T[U+W+3]=0),y===!0&&(s.fromBufferAttribute(P,N),T[U+W+4]=s.x,T[U+W+5]=s.y,T[U+W+6]=s.z,T[U+W+7]=0),b===!0&&(s.fromBufferAttribute(H,N),T[U+W+8]=s.x,T[U+W+9]=s.y,T[U+W+10]=s.z,T[U+W+11]=H.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new le(v,E)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let y=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function u2(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var h2={[S0]:"LINEAR_TONE_MAPPING",[M0]:"REINHARD_TONE_MAPPING",[b0]:"CINEON_TONE_MAPPING",[E0]:"ACES_FILMIC_TONE_MAPPING",[A0]:"AGX_TONE_MAPPING",[w0]:"NEUTRAL_TONE_MAPPING",[T0]:"CUSTOM_TONE_MAPPING"};function f2(e,t,n,i,s,a){let r=new ii(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pi;c.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Oi([0,2,0,0,2,0],2));let f=new Uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new zn(c,f),u=new cl(-1,1,1,-1,0,1),d=null,y=null,b=!1,m,h=null,_=[],M=!1;this.setSize=function(v,E){r.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){_=v,M=_.length>0&&_[0].isRenderPass===!0;let E=r.width,T=r.height;_.length>0&&o===null&&(o=new ii(E,T,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new ii(E,T,{type:ji,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let x=_[C];x.setSize&&x.setSize(E,T)}},this.begin=function(v,E){if(b||v.toneMapping===Ji&&_.length===0)return!1;if(h=E,E!==null){let T=E.width,C=E.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return M===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Ji,!0},this.hasRenderPass=function(){return M},this.end=function(v,E){v.toneMapping=m,b=!0;let T=r,C=o;for(let x=0;x<_.length;x++){let A=_[x];A.enabled!==!1&&(A.render(v,C,T,E),A.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(d!==v.outputColorSpace||y!==v.toneMapping){d=v.outputColorSpace,y=v.toneMapping,f.defines={},he.getTransfer(d)===be&&(f.defines.SRGB_TRANSFER="");let x=h2[y];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(h),v.render(p,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var y1=new Yn,K0=new Ba(1,1),v1=new Fc,x1=new Rf,S1=new Wc,$b=[],t1=[],e1=new Float32Array(16),n1=new Float32Array(9),i1=new Float32Array(4);function yl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=$b[s];if(a===void 0&&(a=new Float32Array(s),$b[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function hn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Gd(e,t){let n=t1[t];n===void 0&&(n=new Int32Array(t),t1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function d2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function p2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function m2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function g2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function _2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;i1.set(i),e.uniformMatrix2fv(this.addr,!1,i1),fn(n,i)}}function y2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;n1.set(i),e.uniformMatrix3fv(this.addr,!1,n1),fn(n,i)}}function v2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;e1.set(i),e.uniformMatrix4fv(this.addr,!1,e1),fn(n,i)}}function x2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function S2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function M2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function b2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function E2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function w2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function C2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(K0.compareFunction=n.isReversedDepthBuffer()?Id:Nd,a=K0):a=y1,n.setTexture2D(t||a,s)}function R2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||x1,s)}function D2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||S1,s)}function U2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||v1,s)}function L2(e){switch(e){case 5126:return d2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return _2;case 35675:return y2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return b2;case 5125:return E2;case 36294:return T2;case 36295:return A2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return U2}}function N2(e,t){e.uniform1fv(this.addr,t)}function I2(e,t){let n=yl(t,this.size,2);e.uniform2fv(this.addr,n)}function O2(e,t){let n=yl(t,this.size,3);e.uniform3fv(this.addr,n)}function P2(e,t){let n=yl(t,this.size,4);e.uniform4fv(this.addr,n)}function B2(e,t){let n=yl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function F2(e,t){let n=yl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function z2(e,t){let n=yl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function H2(e,t){e.uniform1iv(this.addr,t)}function V2(e,t){e.uniform2iv(this.addr,t)}function G2(e,t){e.uniform3iv(this.addr,t)}function k2(e,t){e.uniform4iv(this.addr,t)}function W2(e,t){e.uniform1uiv(this.addr,t)}function X2(e,t){e.uniform2uiv(this.addr,t)}function q2(e,t){e.uniform3uiv(this.addr,t)}function Y2(e,t){e.uniform4uiv(this.addr,t)}function Z2(e,t,n){let i=this.cache,s=t.length,a=Gd(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=K0:r=y1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function J2(e,t,n){let i=this.cache,s=t.length,a=Gd(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||x1,a[r])}function K2(e,t,n){let i=this.cache,s=t.length,a=Gd(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||S1,a[r])}function Q2(e,t,n){let i=this.cache,s=t.length,a=Gd(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||v1,a[r])}function j2(e){switch(e){case 5126:return N2;case 35664:return I2;case 35665:return O2;case 35666:return P2;case 35674:return B2;case 35675:return F2;case 35676:return z2;case 5124:case 35670:return H2;case 35667:case 35671:return V2;case 35668:case 35672:return G2;case 35669:case 35673:return k2;case 5125:return W2;case 36294:return X2;case 36295:return q2;case 36296:return Y2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return K2;case 36289:case 36303:case 36311:case 36292:return Q2}}var Q0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=L2(n.type)}},j0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j2(n.type)}},$0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Z0=/(\w+)(\])?(\[|\.)?/g;function s1(e,t){e.seq.push(t),e.map[t.id]=t}function $2(e,t,n){let i=e.name,s=i.length;for(Z0.lastIndex=0;;){let a=Z0.exec(i),r=Z0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){s1(n,c===void 0?new Q0(o,e,t):new j0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new $0(o),s1(n,p)),n=p}}}var _l=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);$2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function a1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var tD=37297,eD=0;function nD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var r1=new Wt;function iD(e){he._getMatrix(r1,he.workingColorSpace,e);let t=`mat3( ${r1.elements.map(n=>n.toFixed(4))} )`;switch(he.getTransfer(e)){case Bc:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function o1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+nD(e.getShaderSource(t),o)}else return a}function sD(e,t){let n=iD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var aD={[S0]:"Linear",[M0]:"Reinhard",[b0]:"Cineon",[E0]:"ACESFilmic",[A0]:"AgX",[w0]:"Neutral",[T0]:"Custom"};function rD(e,t){let n=aD[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Bd=new G;function oD(){he.getLuminanceCoefficients(Bd);let e=Bd.x.toFixed(4),t=Bd.y.toFixed(4),n=Bd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hu).join(`
`)}function cD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function uD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function hu(e){return e!==""}function l1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hD=/^[ \t]*#include +<([\w\d./]+)>/gm;function t_(e){return e.replace(hD,dD)}var fD=new Map;function dD(e,t){let n=$t[t];if(n===void 0){let i=fD.get(t);if(i!==void 0)n=$t[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return t_(n)}var pD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u1(e){return e.replace(pD,mD)}function mD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function h1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var gD={[tu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function _D(e){return gD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yD={[Va]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function vD(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":yD[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var xD={[Sr]:"ENVMAP_MODE_REFRACTION"};function SD(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":xD[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MD={[x0]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[Rb]:"ENVMAP_BLENDING_ADD"};function bD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":MD[e.combine]||"ENVMAP_BLENDING_NONE"}function ED(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function TD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=_D(n),c=vD(n),f=SD(n),p=bD(n),u=ED(n),d=lD(n),y=cD(a),b=s.createProgram(),m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(hu).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(hu).join(`
`),h.length>0&&(h+=`
`)):(m=[h1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hu).join(`
`),h=[h1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?$t.tonemapping_pars_fragment:"",n.toneMapping!==Ji?rD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,sD("linearToOutputTexel",n.outputColorSpace),oD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hu).join(`
`)),r=t_(r),r=l1(r,n),r=c1(r,n),o=t_(o),o=l1(o,n),o=c1(o,n),r=u1(r),o=u1(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=_+m+r,v=_+h+o,E=a1(s,s.VERTEX_SHADER,M),T=a1(s,s.FRAGMENT_SHADER,v);s.attachShader(b,E),s.attachShader(b,T),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(D){if(e.debug.checkShaderErrors){let P=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",N=P.trim(),W=H.trim(),X=U.trim(),j=!0,V=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,E,T);else{let Q=o1(s,E,"vertex"),tt=o1(s,T,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+Q+`
`+tt)}else N!==""?Nt("WebGLProgram: Program Info Log:",N):(W===""||X==="")&&(V=!1);V&&(D.diagnostics={runnable:j,programLog:N,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:h}})}s.deleteShader(E),s.deleteShader(T),x=new _l(s,b),A=uD(s,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,tD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eD++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}var AD=0,e_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new n_(t),n.set(t,i)),i}},n_=class{constructor(t){this.id=AD++,this.code=t,this.usedTimes=0}};function wD(e){return e===Wa||e===ou||e===lu}function CD(e,t,n,i,s,a){let r=new tl,o=new e_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,R,D,P,H){let U=D.fog,N=P.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||W,X),V=j&&j.mapping===eu?j.image.height:null,Q=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=tt!==void 0?tt.length:0,vt=0;N.morphAttributes.position!==void 0&&(vt=1),N.morphAttributes.normal!==void 0&&(vt=2),N.morphAttributes.color!==void 0&&(vt=3);let Pt,Ft,Kt,J;if(Q){let ie=vs[Q];Pt=ie.vertexShader,Ft=ie.fragmentShader}else{Pt=x.vertexShader,Ft=x.fragmentShader;let ie=o.getVertexShaderStage(x),ce=o.getFragmentShaderStage(x);o.update(x,ie,ce),Kt=ie.id,J=ce.id}let et=e.getRenderTarget(),ot=e.state.buffers.depth.getReversed(),It=P.isInstancedMesh===!0,ft=P.isBatchedMesh===!0,zt=!!x.map,Rt=!!x.matcap,Yt=!!j,ne=!!x.aoMap,ye=!!x.lightMap,Xt=!!x.bumpMap&&x.wireframe===!1,te=!!x.normalMap,Ht=!!x.displacementMap,Ze=!!x.emissiveMap,de=!!x.metalnessMap,we=!!x.roughnessMap,O=x.anisotropy>0,Ce=x.clearcoat>0,ee=x.dispersion>0,w=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,k=x.transmission>0,Z=O&&!!x.anisotropyMap,rt=Ce&&!!x.clearcoatMap,at=Ce&&!!x.clearcoatNormalMap,K=Ce&&!!x.clearcoatRoughnessMap,Y=g&&!!x.iridescenceMap,ht=g&&!!x.iridescenceThicknessMap,Mt=B&&!!x.sheenColorMap,dt=B&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Dt=!!x.specularColorMap,wt=!!x.specularIntensityMap,Vt=k&&!!x.transmissionMap,L=k&&!!x.thicknessMap,ct=!!x.gradientMap,$=!!x.alphaMap,pt=x.alphaTest>0,gt=!!x.alphaHash,it=!!x.extensions,Ut=Ji;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ut=e.toneMapping);let Tt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:Ft,defines:x.defines,customVertexShaderID:Kt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ft,batchingColor:ft&&P._colorsTexture!==null,instancing:It,instancingColor:It&&P.instanceColor!==null,instancingMorph:It&&P.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Rt,envMap:Yt,envMapMode:Yt&&j.mapping,envMapCubeUVHeight:V,aoMap:ne,lightMap:ye,bumpMap:Xt,normalMap:te,displacementMap:Ht,emissiveMap:Ze,normalMapObjectSpace:te&&x.normalMapType===Lb,normalMapTangentSpace:te&&x.normalMapType===Ld,packedNormalMap:te&&x.normalMapType===Ld&&wD(x.normalMap.format),metalnessMap:de,roughnessMap:we,anisotropy:O,anisotropyMap:Z,clearcoat:Ce,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:ee,retroreflection:w,iridescence:g,iridescenceMap:Y,iridescenceThicknessMap:ht,sheen:B,sheenColorMap:Mt,sheenRoughnessMap:dt,specularMap:ut,specularColorMap:Dt,specularIntensityMap:wt,transmission:k,transmissionMap:Vt,thicknessMap:L,gradientMap:ct,opaque:x.transparent===!1&&x.blending===hl&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:gt,combine:x.combine,mapUv:zt&&y(x.map.channel),aoMapUv:ne&&y(x.aoMap.channel),lightMapUv:ye&&y(x.lightMap.channel),bumpMapUv:Xt&&y(x.bumpMap.channel),normalMapUv:te&&y(x.normalMap.channel),displacementMapUv:Ht&&y(x.displacementMap.channel),emissiveMapUv:Ze&&y(x.emissiveMap.channel),metalnessMapUv:de&&y(x.metalnessMap.channel),roughnessMapUv:we&&y(x.roughnessMap.channel),anisotropyMapUv:Z&&y(x.anisotropyMap.channel),clearcoatMapUv:rt&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&y(x.sheenRoughnessMap.channel),specularMapUv:ut&&y(x.specularMap.channel),specularColorMapUv:Dt&&y(x.specularColorMap.channel),specularIntensityMapUv:wt&&y(x.specularIntensityMap.channel),transmissionMapUv:Vt&&y(x.transmissionMap.channel),thicknessMapUv:L&&y(x.thicknessMap.channel),alphaMapUv:$&&y(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(te||O),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(zt||$),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ot,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:vt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ut,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Ze&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(A,x),_(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function M(x){let A=d[x.type],R;if(A){let D=vs[A];R=qb.clone(D.uniforms)}else R=x.uniforms;return R}function v(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new TD(e,A,x,s),c.push(R),f.set(A,R)),R}function E(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function RD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function DD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function f1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function d1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,y,b,m,h){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:y,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=y,_.materialVariant=r(u),_.groupOrder=b,_.renderOrder=u.renderOrder,_.z=m,_.group=h),t++,_}function l(u,d,y,b,m,h,_){_.reversedDepth===!0&&(m=-m);let M=o(u,d,y,b,m,h);y.transmission>0?i.push(M):y.transparent===!0?s.push(M):n.push(M)}function c(u,d,y,b,m,h){let _=o(u,d,y,b,m,h);y.transmission>0?i.unshift(_):y.transparent===!0?s.unshift(_):n.unshift(_)}function f(u,d){n.length>1&&n.sort(u||DD),i.length>1&&i.sort(d||f1),s.length>1&&s.sort(d||f1)}function p(){for(let u=t,d=e.length;u<d;u++){let y=e[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function UD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new d1,e.set(i,[r])):s>=a.length?(r=new d1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function LD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new ae};break;case"SpotLight":n={position:new G,direction:new G,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function ND(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ID=0;function OD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function PD(e){let t=new LD,n=ND(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,a=new We,r=new We;function o(c){let f=0,p=0,u=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let d=0,y=0,b=0,m=0,h=0,_=0,M=0,v=0,E=0,T=0,C=0,x=0,A=0,R=0;c.sort(OD);for(let P=0,H=c.length;P<H;P++){let U=c[P],N=U.color,W=U.intensity,X=U.distance,j=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Wa?j=U.shadow.map.texture:j=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=N.r*W,p+=N.g*W,u+=N.b*W;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],W);R++}else if(U.isSunLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,tt=n.get(U);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[y]=tt,i.sunShadowMap[y]=j;let St=Q.getViewportCount();for(let vt=0;vt<St;vt++)i.sunShadowMatrix[b+vt]=Q.getMatrix(vt),i.sunShadowCascade[b+vt]=Q._cascadeData[vt];b+=St,y++}i.sun[d]=V,d++}else if(U.isDirectionalLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,tt=n.get(U);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=U.shadow.matrix,E++}i.directional[m]=V,m++}else if(U.isSpotLight){let V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(N).multiplyScalar(W),V.distance=X,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[_]=V;let Q=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,Q.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,U.castShadow){let tt=n.get(U);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[_]=tt,i.spotShadowMap[_]=j,C++}_++}else if(U.isRectAreaLight){let V=t.get(U);V.color.copy(N).multiplyScalar(W),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=V,M++}else if(U.isPointLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){let Q=U.shadow,tt=n.get(U);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[h]=tt,i.pointShadowMap[h]=j,i.pointShadowMatrix[h]=U.shadow.matrix,T++}i.point[h]=V,h++}else if(U.isHemisphereLight){let V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(W),V.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[v]=V,v++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==h||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==y||D.numDirectionalShadows!==E||D.numPointShadows!==T||D.numSpotShadows!==C||D.numSpotMaps!==x||D.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=h,i.hemi.length=v,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=h,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=y,D.numDirectionalShadows=E,D.numPointShadows=T,D.numSpotShadows=C,D.numSpotMaps=x,D.numLightProbes=R,i.version=ID++)}function l(c,f){let p=0,u=0,d=0,y=0,b=0,m=0,h=f.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),p++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(v.isSpotLight){let E=i.spot[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),y++}else if(v.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(v.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(v.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),d++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function p1(e){let t=new PD(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function BD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new p1(e),t.set(s,[o])):a>=r.length?(o=new p1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var FD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HD=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],VD=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],m1=new We,uu=new G,J0=new G;function GD(e,t,n){let i=new sl,s=new le,a=new le,r=new Xe,o=new ol,l=new Lf,c={},f=n.maxTextureSize,p={[gs]:wn,[wn]:gs,[Bi]:Bi},u=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:FD,fragmentShader:zD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let y=new Pi;y.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new zn(y,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let h=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===qf&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tu);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),P=e.state;P.setBlending(_s),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let H=h!==this.type;H&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(N=>N.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,N=T.length;U<N;U++){let W=T[U],X=W.shadow;if(X===void 0){Nt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let j=X.getFrameExtents();s.multiply(j),a.copy(X.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/j.x),s.x=a.x*j.x,X.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/j.y),s.y=a.y*j.y,X.mapSize.y=a.y));let V=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=V,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ul){if(W.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ii(s.x,s.y,{format:Wa,type:ji,minFilter:on,magFilter:on,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Ba(s.x,s.y,Qi),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=ds,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=yn,X.map.depthTexture.magFilter=yn}else W.isPointLight?(X.map=new zd(s.x),X.map.depthTexture=new Df(s.x,Ki)):(X.map=new ii(s.x,s.y),X.map.depthTexture=new Ba(s.x,s.y,Ki)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=ds,this.type===tu?(X.map.depthTexture.compareFunction=V?Id:Nd,X.map.depthTexture.minFilter=on,X.map.depthTexture.magFilter=on):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=yn,X.map.depthTexture.magFilter=yn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,x);for(let tt=0;tt<Q;tt++){let St=X.getCamera(tt);if(W.isPointLight){let vt=X.camera,Pt=X.matrix,Ft=W.distance||vt.far;Ft!==vt.far&&(vt.far=Ft,vt.updateProjectionMatrix()),uu.setFromMatrixPosition(W.matrixWorld),vt.position.copy(uu),J0.copy(vt.position),J0.add(HD[tt]),vt.up.copy(VD[tt]),vt.lookAt(J0),vt.updateMatrixWorld(),Pt.makeTranslation(-uu.x,-uu.y,-uu.z),m1.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(m1,vt.coordinateSystem,vt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,tt),e.clear();else{tt===0&&(e.setRenderTarget(X.map),e.clear());let vt=X.getViewport(tt);r.set(a.x*vt.x,a.y*vt.y,a.x*vt.z,a.y*vt.w),P.viewport(r)}i=X.getFrustum(tt),v(C,x,St,W,this.type)}X.isPointLightShadow!==!0&&this.type===ul&&_(X,x),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(A,R,D)};function _(T,C){let x=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ii(s.x,s.y,{format:Wa,type:ji}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(C,null,x,d,b,null)}function M(T,C,x,A){let R=null,D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=R.uuid,H=C.uuid,U=c[P];U===void 0&&(U={},c[P]=U);let N=U[H];N===void 0&&(N=R.clone(),U[H]=N,C.addEventListener("dispose",E)),R=N}if(R.visible=C.visible,R.wireframe=C.wireframe,A===ul?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=e.properties.get(R);P.light=x}return R}function v(T,C,x,A,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ul)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let H=t.update(T),U=T.material;if(Array.isArray(U)){let N=H.groups;for(let W=0,X=N.length;W<X;W++){let j=N[W],V=U[j.materialIndex];if(V&&V.visible){let Q=M(T,V,A,R);T.onBeforeShadow(e,T,C,x,H,Q,j),e.renderBufferDirect(x,null,H,Q,T,j),T.onAfterShadow(e,T,C,x,H,Q,j)}}}else if(U.visible){let N=M(T,U,A,R);T.onBeforeShadow(e,T,C,x,H,N,null),e.renderBufferDirect(x,null,H,N,T,null),T.onAfterShadow(e,T,C,x,H,N,null)}}let P=T.children;for(let H=0,U=P.length;H<U;H++)v(P[H],C,x,A,R)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function kD(e,t){function n(){let L=!1,ct=new Xe,$=null,pt=new Xe(0,0,0,0);return{setMask:function(gt){$!==gt&&!L&&(e.colorMask(gt,gt,gt,gt),$=gt)},setLocked:function(gt){L=gt},setClear:function(gt,it,Ut,Tt,ie){ie===!0&&(gt*=Tt,it*=Tt,Ut*=Tt),ct.set(gt,it,Ut,Tt),pt.equals(ct)===!1&&(e.clearColor(gt,it,Ut,Tt),pt.copy(ct))},reset:function(){L=!1,$=null,pt.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,$=null,pt=null,gt=null;return{setReversed:function(it){if(ct!==it){let Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ct=it;let Tt=gt;gt=null,this.setClear(Tt)}},getReversed:function(){return ct},setTest:function(it){it?et(e.DEPTH_TEST):ot(e.DEPTH_TEST)},setMask:function(it){$!==it&&!L&&(e.depthMask(it),$=it)},setFunc:function(it){if(ct&&(it=Wb[it]),pt!==it){switch(it){case yf:e.depthFunc(e.NEVER);break;case vf:e.depthFunc(e.ALWAYS);break;case xf:e.depthFunc(e.LESS);break;case Yo:e.depthFunc(e.LEQUAL);break;case Sf:e.depthFunc(e.EQUAL);break;case Mf:e.depthFunc(e.GEQUAL);break;case bf:e.depthFunc(e.GREATER);break;case Ef:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=it}},setLocked:function(it){L=it},setClear:function(it){gt!==it&&(gt=it,ct&&(it=1-it),e.clearDepth(it))},reset:function(){L=!1,$=null,pt=null,gt=null,ct=!1}}}function s(){let L=!1,ct=null,$=null,pt=null,gt=null,it=null,Ut=null,Tt=null,ie=null;return{setTest:function(ce){L||(ce?et(e.STENCIL_TEST):ot(e.STENCIL_TEST))},setMask:function(ce){ct!==ce&&!L&&(e.stencilMask(ce),ct=ce)},setFunc:function(ce,Vn,Cn){($!==ce||pt!==Vn||gt!==Cn)&&(e.stencilFunc(ce,Vn,Cn),$=ce,pt=Vn,gt=Cn)},setOp:function(ce,Vn,Cn){(it!==ce||Ut!==Vn||Tt!==Cn)&&(e.stencilOp(ce,Vn,Cn),it=ce,Ut=Vn,Tt=Cn)},setLocked:function(ce){L=ce},setClear:function(ce){ie!==ce&&(e.clearStencil(ce),ie=ce)},reset:function(){L=!1,ct=null,$=null,pt=null,gt=null,it=null,Ut=null,Tt=null,ie=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,y=[],b=null,m=!1,h=null,_=null,M=null,v=null,E=null,T=null,C=null,x=new ae(0,0,0),A=0,R=!1,D=null,P=null,H=null,U=null,N=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=j>=2);let Q=null,tt={},St=e.getParameter(e.SCISSOR_BOX),vt=e.getParameter(e.VIEWPORT),Pt=new Xe().fromArray(St),Ft=new Xe().fromArray(vt);function Kt(L,ct,$,pt){let gt=new Uint8Array(4),it=e.createTexture();e.bindTexture(L,it),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<$;Ut++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,gt):e.texImage2D(ct+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,gt);return it}let J={};J[e.TEXTURE_2D]=Kt(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=Kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=Kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=Kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(Yo),Xt(!1),te(p0),et(e.CULL_FACE),ne(_s);function et(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function ot(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function It(L,ct){return u[L]!==ct?(e.bindFramebuffer(L,ct),u[L]=ct,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function ft(L,ct){let $=y,pt=!1;if(L){$=d.get(ct),$===void 0&&($=[],d.set(ct,$));let gt=L.textures;if($.length!==gt.length||$[0]!==e.COLOR_ATTACHMENT0){for(let it=0,Ut=gt.length;it<Ut;it++)$[it]=e.COLOR_ATTACHMENT0+it;$.length=gt.length,pt=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,pt=!0);pt&&e.drawBuffers($)}function zt(L){return b!==L?(e.useProgram(L),b=L,!0):!1}let Rt={[xr]:e.FUNC_ADD,[hb]:e.FUNC_SUBTRACT,[fb]:e.FUNC_REVERSE_SUBTRACT};Rt[db]=e.MIN,Rt[pb]=e.MAX;let Yt={[mb]:e.ZERO,[gb]:e.ONE,[_b]:e.SRC_COLOR,[y0]:e.SRC_ALPHA,[bb]:e.SRC_ALPHA_SATURATE,[Sb]:e.DST_COLOR,[vb]:e.DST_ALPHA,[yb]:e.ONE_MINUS_SRC_COLOR,[v0]:e.ONE_MINUS_SRC_ALPHA,[Mb]:e.ONE_MINUS_DST_COLOR,[xb]:e.ONE_MINUS_DST_ALPHA,[Eb]:e.CONSTANT_COLOR,[Tb]:e.ONE_MINUS_CONSTANT_COLOR,[Ab]:e.CONSTANT_ALPHA,[wb]:e.ONE_MINUS_CONSTANT_ALPHA};function ne(L,ct,$,pt,gt,it,Ut,Tt,ie,ce){if(L===_s){m===!0&&(ot(e.BLEND),m=!1);return}if(m===!1&&(et(e.BLEND),m=!0),L!==ub){if(L!==h||ce!==R){if((_!==xr||E!==xr)&&(e.blendEquation(e.FUNC_ADD),_=xr,E=xr),ce)switch(L){case hl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case m0:e.blendFunc(e.ONE,e.ONE);break;case g0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",L);break}else switch(L){case hl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case m0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case g0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",L);break}M=null,v=null,T=null,C=null,x.set(0,0,0),A=0,h=L,R=ce}return}gt=gt||ct,it=it||$,Ut=Ut||pt,(ct!==_||gt!==E)&&(e.blendEquationSeparate(Rt[ct],Rt[gt]),_=ct,E=gt),($!==M||pt!==v||it!==T||Ut!==C)&&(e.blendFuncSeparate(Yt[$],Yt[pt],Yt[it],Yt[Ut]),M=$,v=pt,T=it,C=Ut),(Tt.equals(x)===!1||ie!==A)&&(e.blendColor(Tt.r,Tt.g,Tt.b,ie),x.copy(Tt),A=ie),h=L,R=!1}function ye(L,ct){L.side===Bi?ot(e.CULL_FACE):et(e.CULL_FACE);let $=L.side===wn;ct&&($=!$),Xt($),L.blending===hl&&L.transparent===!1?ne(_s):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):ot(e.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){D!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),D=L)}function te(L){L!==lb?(et(e.CULL_FACE),L!==P&&(L===p0?e.cullFace(e.BACK):L===cb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ot(e.CULL_FACE),P=L}function Ht(L){L!==H&&(X&&e.lineWidth(L),H=L)}function Ze(L,ct,$){L?(et(e.POLYGON_OFFSET_FILL),(U!==ct||N!==$)&&(U=ct,N=$,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,$))):ot(e.POLYGON_OFFSET_FILL)}function de(L){L?et(e.SCISSOR_TEST):ot(e.SCISSOR_TEST)}function we(L){L===void 0&&(L=e.TEXTURE0+W-1),Q!==L&&(e.activeTexture(L),Q=L)}function O(L,ct,$){$===void 0&&(Q===null?$=e.TEXTURE0+W-1:$=Q);let pt=tt[$];pt===void 0&&(pt={type:void 0,texture:void 0},tt[$]=pt),(pt.type!==L||pt.texture!==ct)&&(Q!==$&&(e.activeTexture($),Q=$),e.bindTexture(L,ct||J[L]),pt.type=L,pt.texture=ct)}function Ce(){let L=tt[Q];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ee(){try{e.compressedTexImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function g(){try{e.texSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function B(){try{e.texSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function rt(){try{e.texStorage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function at(){try{e.texStorage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function K(){try{e.texImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Y(){try{e.texImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function ht(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function Mt(L,ct){p[L]!==ct&&(e.pixelStorei(L,ct),p[L]=ct)}function dt(L){Pt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Pt.copy(L))}function ut(L){Ft.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Ft.copy(L))}function Dt(L,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let pt=$.get(L);pt===void 0&&(pt=e.getUniformBlockIndex(ct,L.name),$.set(L,pt))}function wt(L,ct){let pt=c.get(ct).get(L);l.get(ct)!==pt&&(e.uniformBlockBinding(ct,pt,L.__bindingPointIndex),l.set(ct,pt))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},Q=null,tt={},u={},d=new WeakMap,y=[],b=null,m=!1,h=null,_=null,M=null,v=null,E=null,T=null,C=null,x=new ae(0,0,0),A=0,R=!1,D=null,P=null,H=null,U=null,N=null,Pt.set(0,0,e.canvas.width,e.canvas.height),Ft.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:ot,bindFramebuffer:It,drawBuffers:ft,useProgram:zt,setBlending:ne,setMaterial:ye,setFlipSided:Xt,setCullFace:te,setLineWidth:Ht,setPolygonOffset:Ze,setScissorTest:de,activeTexture:we,bindTexture:O,unbindTexture:Ce,compressedTexImage2D:ee,compressedTexImage3D:w,texImage2D:K,texImage3D:Y,pixelStorei:Mt,getParameter:ht,updateUBOMapping:Dt,uniformBlockBinding:wt,texStorage2D:rt,texStorage3D:at,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:dt,viewport:ut,reset:Vt}}function WD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,f=new WeakMap,p=new Set,u,d=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,g){return y?new OffscreenCanvas(w,g):Ko("canvas")}function m(w,g,B){let k=1,Z=ee(w);if((Z.width>B||Z.height>B)&&(k=B/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let rt=Math.floor(k*Z.width),at=Math.floor(k*Z.height);u===void 0&&(u=b(rt,at));let K=g?b(rt,at):u;return K.width=rt,K.height=at,K.getContext("2d").drawImage(w,0,0,rt,at),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+at+")."),K}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function h(w){return w.generateMipmaps}function _(w){e.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(w,g,B,k,Z,rt=!1){if(w!==null){if(e[w]!==void 0)return e[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at;k&&(at=t.get("EXT_texture_norm16"),at||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===e.RED&&(B===e.FLOAT&&(K=e.R32F),B===e.HALF_FLOAT&&(K=e.R16F),B===e.UNSIGNED_BYTE&&(K=e.R8),B===e.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),B===e.SHORT&&at&&(K=at.R16_SNORM_EXT)),g===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.R8UI),B===e.UNSIGNED_SHORT&&(K=e.R16UI),B===e.UNSIGNED_INT&&(K=e.R32UI),B===e.BYTE&&(K=e.R8I),B===e.SHORT&&(K=e.R16I),B===e.INT&&(K=e.R32I)),g===e.RG&&(B===e.FLOAT&&(K=e.RG32F),B===e.HALF_FLOAT&&(K=e.RG16F),B===e.UNSIGNED_BYTE&&(K=e.RG8),B===e.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),B===e.SHORT&&at&&(K=at.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RG8UI),B===e.UNSIGNED_SHORT&&(K=e.RG16UI),B===e.UNSIGNED_INT&&(K=e.RG32UI),B===e.BYTE&&(K=e.RG8I),B===e.SHORT&&(K=e.RG16I),B===e.INT&&(K=e.RG32I)),g===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RGB8UI),B===e.UNSIGNED_SHORT&&(K=e.RGB16UI),B===e.UNSIGNED_INT&&(K=e.RGB32UI),B===e.BYTE&&(K=e.RGB8I),B===e.SHORT&&(K=e.RGB16I),B===e.INT&&(K=e.RGB32I)),g===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),B===e.UNSIGNED_INT&&(K=e.RGBA32UI),B===e.BYTE&&(K=e.RGBA8I),B===e.SHORT&&(K=e.RGBA16I),B===e.INT&&(K=e.RGBA32I)),g===e.RGB&&(B===e.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),B===e.SHORT&&at&&(K=at.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),g===e.RGBA){let Y=rt?Bc:he.getTransfer(Z);B===e.FLOAT&&(K=e.RGBA32F),B===e.HALF_FLOAT&&(K=e.RGBA16F),B===e.UNSIGNED_BYTE&&(K=Y===be?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),B===e.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(w,g){let B;return w?g===null||g===Ki||g===dl?B=e.DEPTH24_STENCIL8:g===Qi?B=e.DEPTH32F_STENCIL8:g===fl&&(B=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ki||g===dl?B=e.DEPTH_COMPONENT24:g===Qi?B=e.DEPTH_COMPONENT32F:g===fl&&(B=e.DEPTH_COMPONENT16),B}function T(w,g){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==yn&&w.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){let g=w.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&p.delete(g)}function x(w){let g=w.target;g.removeEventListener("dispose",x),D(g)}function A(w){let g=i.get(w);if(g.__webglInit===void 0)return;let B=w.source,k=d.get(B);if(k){let Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(w),Object.keys(k).length===0&&d.delete(B)}i.remove(w)}function R(w){let g=i.get(w);e.deleteTexture(g.__webglTexture);let B=w.source,k=d.get(B);delete k[g.__cacheKey],r.memory.textures--}function D(w){let g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)e.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else e.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)e.deleteFramebuffer(g.__webglFramebuffer[k]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=w.textures;for(let k=0,Z=B.length;k<Z;k++){let rt=i.get(B[k]);rt.__webglTexture&&(e.deleteTexture(rt.__webglTexture),r.memory.textures--),i.remove(B[k])}i.remove(w)}let P=0;function H(){P=0}function U(){return P}function N(w){P=w}function W(){let w=P;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function X(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function j(w,g){let B=i.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let k=w.image;if(k===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,w,g);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+g)}function V(w,g){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ot(B,w,g);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+g)}function Q(w,g){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ot(B,w,g);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+g)}function tt(w,g){let B=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){It(B,w,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+g)}let St={[Zo]:e.REPEAT,[fs]:e.CLAMP_TO_EDGE,[Tf]:e.MIRRORED_REPEAT},vt={[yn]:e.NEAREST,[Db]:e.NEAREST_MIPMAP_NEAREST,[nu]:e.NEAREST_MIPMAP_LINEAR,[on]:e.LINEAR,[Jf]:e.LINEAR_MIPMAP_NEAREST,[Ga]:e.LINEAR_MIPMAP_LINEAR},Pt={[Ib]:e.NEVER,[zb]:e.ALWAYS,[Ob]:e.LESS,[Nd]:e.LEQUAL,[Pb]:e.EQUAL,[Id]:e.GEQUAL,[Bb]:e.GREATER,[Fb]:e.NOTEQUAL};function Ft(w,g){if(g.type===Qi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===Jf||g.magFilter===nu||g.magFilter===Ga||g.minFilter===on||g.minFilter===Jf||g.minFilter===nu||g.minFilter===Ga)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,St[g.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,St[g.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,St[g.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,vt[g.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Pt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yn||g.minFilter!==nu&&g.minFilter!==Ga||g.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Kt(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));let k=g.source,Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));let rt=X(g);if(rt!==w.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Z[rt].usedTimes++;let at=Z[w.__cacheKey];at!==void 0&&(Z[w.__cacheKey].usedTimes--,at.usedTimes===0&&R(g)),w.__cacheKey=rt,w.__webglTexture=Z[rt].texture}return B}function J(w,g,B){return Math.floor(Math.floor(w/B)/g)}function et(w,g,B,k){let rt=w.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,B,k,g.data);else{rt.sort((Mt,dt)=>Mt.start-dt.start);let at=0;for(let Mt=1;Mt<rt.length;Mt++){let dt=rt[at],ut=rt[Mt],Dt=dt.start+dt.count,wt=J(ut.start,g.width,4),Vt=J(dt.start,g.width,4);ut.start<=Dt+1&&wt===Vt&&J(ut.start+ut.count-1,g.width,4)===wt?dt.count=Math.max(dt.count,ut.start+ut.count-dt.start):(++at,rt[at]=ut)}rt.length=at+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let Mt=0,dt=rt.length;Mt<dt;Mt++){let ut=rt[Mt],Dt=Math.floor(ut.start/4),wt=Math.ceil(ut.count/4),Vt=Dt%g.width,L=Math.floor(Dt/g.width),ct=wt,$=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Vt,L,ct,$,B,k,g.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function ot(w,g,B){let k=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=e.TEXTURE_3D);let Z=Kt(w,g),rt=g.source;n.bindTexture(k,w.__webglTexture,e.TEXTURE0+B);let at=i.get(rt);if(rt.version!==at.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let $=he.getPrimaries(he.workingColorSpace),pt=g.colorSpace===$s?null:he.getPrimaries(g.colorSpace),gt=g.colorSpace===$s||$===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let Y=m(g.image,!1,s.maxTextureSize);Y=Ce(g,Y);let ht=a.convert(g.format,g.colorSpace),Mt=a.convert(g.type),dt=v(g.internalFormat,ht,Mt,g.normalized,g.colorSpace,g.isVideoTexture);Ft(k,g);let ut,Dt=g.mipmaps,wt=g.isVideoTexture!==!0,Vt=at.__version===void 0||Z===!0,L=rt.dataReady,ct=T(g,Y);if(g.isDepthTexture)dt=E(g.format===ka,g.type),Vt&&(wt?n.texStorage2D(e.TEXTURE_2D,1,dt,Y.width,Y.height):n.texImage2D(e.TEXTURE_2D,0,dt,Y.width,Y.height,0,ht,Mt,null));else if(g.isDataTexture)if(Dt.length>0){wt&&Vt&&n.texStorage2D(e.TEXTURE_2D,ct,dt,Dt[0].width,Dt[0].height);for(let $=0,pt=Dt.length;$<pt;$++)ut=Dt[$],wt?L&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut.width,ut.height,ht,Mt,ut.data):n.texImage2D(e.TEXTURE_2D,$,dt,ut.width,ut.height,0,ht,Mt,ut.data);g.generateMipmaps=!1}else wt?(Vt&&n.texStorage2D(e.TEXTURE_2D,ct,dt,Y.width,Y.height),L&&et(g,Y,ht,Mt)):n.texImage2D(e.TEXTURE_2D,0,dt,Y.width,Y.height,0,ht,Mt,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){wt&&Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,dt,Dt[0].width,Dt[0].height,Y.depth);for(let $=0,pt=Dt.length;$<pt;$++)if(ut=Dt[$],g.format!==Fi)if(ht!==null)if(wt){if(L)if(g.layerUpdates.size>0){let gt=k0(ut.width,ut.height,g.format,g.type);for(let it of g.layerUpdates){let Ut=ut.data.subarray(it*gt/ut.data.BYTES_PER_ELEMENT,(it+1)*gt/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,it,ut.width,ut.height,1,ht,Ut)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ut.width,ut.height,Y.depth,ht,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,dt,ut.width,ut.height,Y.depth,0,ut.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ut.width,ut.height,Y.depth,ht,Mt,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,dt,ut.width,ut.height,Y.depth,0,ht,Mt,ut.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{wt&&Vt&&n.texStorage2D(e.TEXTURE_2D,ct,dt,Dt[0].width,Dt[0].height);for(let $=0,pt=Dt.length;$<pt;$++)ut=Dt[$],g.format!==Fi?ht!==null?wt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,ut.width,ut.height,ht,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,$,dt,ut.width,ut.height,0,ut.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?L&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut.width,ut.height,ht,Mt,ut.data):n.texImage2D(e.TEXTURE_2D,$,dt,ut.width,ut.height,0,ht,Mt,ut.data)}else if(g.isDataArrayTexture)if(wt){if(Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,dt,Y.width,Y.height,Y.depth),L)if(g.layerUpdates.size>0){let $=k0(Y.width,Y.height,g.format,g.type);for(let pt of g.layerUpdates){let gt=Y.data.subarray(pt*$/Y.data.BYTES_PER_ELEMENT,(pt+1)*$/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pt,Y.width,Y.height,1,ht,Mt,gt)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ht,Mt,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,dt,Y.width,Y.height,Y.depth,0,ht,Mt,Y.data);else if(g.isData3DTexture)wt?(Vt&&n.texStorage3D(e.TEXTURE_3D,ct,dt,Y.width,Y.height,Y.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ht,Mt,Y.data)):n.texImage3D(e.TEXTURE_3D,0,dt,Y.width,Y.height,Y.depth,0,ht,Mt,Y.data);else if(g.isFramebufferTexture){if(Vt)if(wt)n.texStorage2D(e.TEXTURE_2D,ct,dt,Y.width,Y.height);else{let $=Y.width,pt=Y.height;for(let gt=0;gt<ct;gt++)n.texImage2D(e.TEXTURE_2D,gt,dt,$,pt,0,ht,Mt,null),$>>=1,pt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Y.parentNode!==$){$.appendChild(Y),p.add(g),$.onpaint=pt=>{let gt=pt.changedElements;for(let it of p)gt.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Y);else{let gt=e.RGBA,it=e.RGBA,Ut=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,gt,it,Ut,Y)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(wt&&Vt){let $=ee(Dt[0]);n.texStorage2D(e.TEXTURE_2D,ct,dt,$.width,$.height)}for(let $=0,pt=Dt.length;$<pt;$++)ut=Dt[$],wt?L&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ht,Mt,ut):n.texImage2D(e.TEXTURE_2D,$,dt,ht,Mt,ut);g.generateMipmaps=!1}else if(wt){if(Vt){let $=ee(Y);n.texStorage2D(e.TEXTURE_2D,ct,dt,$.width,$.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,Mt,Y)}else n.texImage2D(e.TEXTURE_2D,0,dt,ht,Mt,Y);h(g)&&_(k),at.__version=rt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function It(w,g,B){if(g.image.length!==6)return;let k=Kt(w,g),Z=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let rt=i.get(Z);if(Z.version!==rt.__version||k===!0){n.activeTexture(e.TEXTURE0+B);let at=he.getPrimaries(he.workingColorSpace),K=g.colorSpace===$s?null:he.getPrimaries(g.colorSpace),Y=g.colorSpace===$s||at===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ht=g.isCompressedTexture||g.image[0].isCompressedTexture,Mt=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ht&&!Mt?dt[it]=m(g.image[it],!0,s.maxCubemapSize):dt[it]=Mt?g.image[it].image:g.image[it],dt[it]=Ce(g,dt[it]);let ut=dt[0],Dt=a.convert(g.format,g.colorSpace),wt=a.convert(g.type),Vt=v(g.internalFormat,Dt,wt,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,ct=rt.__version===void 0||k===!0,$=Z.dataReady,pt=T(g,ut);Ft(e.TEXTURE_CUBE_MAP,g);let gt;if(ht){L&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Vt,ut.width,ut.height);for(let it=0;it<6;it++){gt=dt[it].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){let Tt=gt[Ut];g.format!==Fi?Dt!==null?L?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Tt.width,Tt.height,Dt,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Vt,Tt.width,Tt.height,0,Tt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Tt.width,Tt.height,Dt,wt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Vt,Tt.width,Tt.height,0,Dt,wt,Tt.data)}}}else{if(gt=g.mipmaps,L&&ct){gt.length>0&&pt++;let it=ee(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(Mt){L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Dt,wt,dt[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,dt[it].width,dt[it].height,0,Dt,wt,dt[it].data);for(let Ut=0;Ut<gt.length;Ut++){let ie=gt[Ut].image[it].image;L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,ie.width,ie.height,Dt,wt,ie.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Vt,ie.width,ie.height,0,Dt,wt,ie.data)}}else{L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,wt,dt[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,Dt,wt,dt[it]);for(let Ut=0;Ut<gt.length;Ut++){let Tt=gt[Ut];L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Dt,wt,Tt.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Vt,Dt,wt,Tt.image[it])}}}h(g)&&_(e.TEXTURE_CUBE_MAP),rt.__version=Z.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ft(w,g,B,k,Z,rt){let at=a.convert(B.format,B.colorSpace),K=a.convert(B.type),Y=v(B.internalFormat,at,K,B.normalized,B.colorSpace),ht=i.get(g),Mt=i.get(B);if(Mt.__renderTarget=g,!ht.__hasExternalTextures){let dt=Math.max(1,g.width>>rt),ut=Math.max(1,g.height>>rt);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,rt,Y,dt,ut,g.depth,0,at,K,null):n.texImage2D(Z,rt,Y,dt,ut,0,at,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),we(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Z,Mt.__webglTexture,0,de(g)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Z,Mt.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function zt(w,g,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),g.depthBuffer){let k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,rt=E(g.stencilBuffer,Z),at=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;we(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(g),rt,g.width,g.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(g),rt,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,rt,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,w)}else{let k=g.textures;for(let Z=0;Z<k.length;Z++){let rt=k[Z],at=a.convert(rt.format,rt.colorSpace),K=a.convert(rt.type),Y=v(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);we(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(g),Y,g.width,g.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(g),Y,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,Y,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Rt(w,g,B){let k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,g.depthTexture);let ht=a.convert(g.depthTexture.format),Mt=a.convert(g.depthTexture.type),dt;g.depthTexture.format===ds?dt=e.DEPTH_COMPONENT24:g.depthTexture.format===ka&&(dt=e.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,dt,g.width,g.height,0,ht,Mt,null)}}else j(g.depthTexture,0);let rt=Z.__webglTexture,at=de(g),K=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,Y=g.depthTexture.format===ka?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===ds)we(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,K,rt,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,Y,K,rt,0);else if(g.depthTexture.format===ka)we(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,K,rt,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,Y,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(w){let g=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Rt(g.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?Rt(g.__webglFramebuffer[0],w,0):Rt(g.__webglFramebuffer,w,0)}else if(B){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=e.createRenderbuffer(),zt(g.__webglDepthbuffer[k],w,!1);else{let Z=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,rt)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),zt(g.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,rt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(w,g,B){let k=i.get(w);g!==void 0&&ft(k.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Yt(w)}function ye(w){let g=w.texture,B=i.get(w),k=i.get(g);w.addEventListener("dispose",x);let Z=w.textures,rt=w.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=g.version,r.memory.textures++),rt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Y=0;Y<g.mipmaps.length;Y++)B.__webglFramebuffer[K][Y]=e.createFramebuffer()}else B.__webglFramebuffer[K]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)B.__webglFramebuffer[K]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(at)for(let K=0,Y=Z.length;K<Y;K++){let ht=i.get(Z[K]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&we(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let Y=Z[K];B.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ht=a.convert(Y.format,Y.colorSpace),Mt=a.convert(Y.type),dt=v(Y.internalFormat,ht,Mt,Y.normalized,Y.colorSpace,w.isXRRenderTarget===!0),ut=de(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,dt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,B.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)ft(B.__webglFramebuffer[K][Y],w,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Y);else ft(B.__webglFramebuffer[K],w,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(g)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let K=0,Y=Z.length;K<Y;K++){let ht=Z[K],Mt=i.get(ht),dt=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,Mt.__webglTexture),Ft(dt,ht),ft(B.__webglFramebuffer,w,ht,e.COLOR_ATTACHMENT0+K,dt,0),h(ht)&&_(dt)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,k.__webglTexture),Ft(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)ft(B.__webglFramebuffer[Y],w,g,e.COLOR_ATTACHMENT0,K,Y);else ft(B.__webglFramebuffer,w,g,e.COLOR_ATTACHMENT0,K,0);h(g)&&_(K),n.unbindTexture()}w.depthBuffer&&Yt(w)}function Xt(w){let g=w.textures;for(let B=0,k=g.length;B<k;B++){let Z=g[B];if(h(Z)){let rt=M(w),at=i.get(Z).__webglTexture;n.bindTexture(rt,at),_(rt),n.unbindTexture()}}}let te=[],Ht=[];function Ze(w){if(w.samples>0){if(we(w)===!1){let g=w.textures,B=w.width,k=w.height,Z=e.COLOR_BUFFER_BIT,rt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(w),K=g.length>1;if(K)for(let ht=0;ht<g.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Y=w.texture.mipmaps;Y&&Y.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let Mt=i.get(g[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Mt,0)}e.blitFramebuffer(0,0,B,k,0,0,B,k,Z,e.NEAREST),l===!0&&(te.length=0,Ht.length=0,te.push(e.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(te.push(rt),Ht.push(rt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let ht=0;ht<g.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let Mt=i.get(g[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function de(w){return Math.min(s.maxSamples,w.samples)}function we(w){let g=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(w){let g=r.render.frame;f.get(w)!==g&&(f.set(w,g),w.update())}function Ce(w,g){let B=w.colorSpace,k=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Pc&&B!==$s&&(he.getTransfer(B)===be?(k!==Fi||Z!==si)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",B)),g}function ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=ne,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XD(e,t){function n(i,s=$s){let a,r=he.getTransfer(s);if(i===si)return e.UNSIGNED_BYTE;if(i===Qf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===R0)return e.BYTE;if(i===D0)return e.SHORT;if(i===fl)return e.UNSIGNED_SHORT;if(i===Kf)return e.INT;if(i===Ki)return e.UNSIGNED_INT;if(i===Qi)return e.FLOAT;if(i===ji)return e.HALF_FLOAT;if(i===N0)return e.ALPHA;if(i===I0)return e.RGB;if(i===Fi)return e.RGBA;if(i===ds)return e.DEPTH_COMPONENT;if(i===ka)return e.DEPTH_STENCIL;if(i===O0)return e.RED;if(i===$f)return e.RED_INTEGER;if(i===Wa)return e.RG;if(i===td)return e.RG_INTEGER;if(i===ed)return e.RGBA_INTEGER;if(i===iu||i===su||i===au||i===ru)if(r===be)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===au)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===sd||i===ad)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===od||i===ld||i===cd||i===ud||i===ou||i===hd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rd||i===od)return r===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ld)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===cd)return a.COMPRESSED_R11_EAC;if(i===ud)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ou)return a.COMPRESSED_RG11_EAC;if(i===hd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===yd||i===vd||i===xd||i===Sd||i===Md||i===bd||i===Ed||i===Td)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===fd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===md)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_d)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return r===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ad||i===wd||i===Cd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ad)return r===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===Dd||i===lu||i===Ud)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Rd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Dd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ud)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var qD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,i_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Xc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new xi({vertexShader:qD,fragmentShader:YD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},s_=class extends ps{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,y=null,b=typeof XRWebGLBinding<"u",m=new i_,h={},_=n.getContextAttributes(),M=null,v=null,E=[],T=[],C=new le,x=null,A=null,R=new Pn;R.viewport=new Xe;let D=new Pn;D.viewport=new Xe;let P=[R,D],H=new Xf,U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=E[J];return et===void 0&&(et=new el,E[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=E[J];return et===void 0&&(et=new el,E[J]=et),et.getGripSpace()},this.getHand=function(J){let et=E[J];return et===void 0&&(et=new el,E[J]=et),et.getHandSpace()};function W(J){let et=T.indexOf(J.inputSource);if(et===-1)return;let ot=E[et];ot!==void 0&&(ot.update(J.inputSource,J.frame,c||r),ot.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let J=0;J<E.length;J++){let et=T[J];et!==null&&(T[J]=null,E[J].disconnect(et))}U=null,N=null,m.reset();for(let J in h)delete h[J];if(t.setRenderTarget(M),d=null,u=null,p=null,s=null,v=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,It=null,ft=null;_.depth&&(ft=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ot=_.stencil?ka:ds,It=_.stencil?dl:Ki);let zt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ii(u.textureWidth,u.textureHeight,{format:Fi,type:si,depthTexture:new Ba(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ii(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:si,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let et=0;et<J.removed.length;et++){let ot=J.removed[et],It=T.indexOf(ot);It>=0&&(T[It]=null,E[It].disconnect(ot))}for(let et=0;et<J.added.length;et++){let ot=J.added[et],It=T.indexOf(ot);if(It===-1){for(let zt=0;zt<E.length;zt++)if(zt>=T.length){T.push(ot),It=zt;break}else if(T[zt]===null){T[zt]=ot,It=zt;break}if(It===-1)break}let ft=E[It];ft&&ft.connect(ot)}}let V=new G,Q=new G;function tt(J,et,ot){V.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);let It=V.distanceTo(Q),ft=et.projectionMatrix.elements,zt=ot.projectionMatrix.elements,Rt=ft[14]/(ft[10]-1),Yt=ft[14]/(ft[10]+1),ne=(ft[9]+1)/ft[5],ye=(ft[9]-1)/ft[5],Xt=(ft[8]-1)/ft[0],te=(zt[8]+1)/zt[0],Ht=Rt*Xt,Ze=Rt*te,de=It/(-Xt+te),we=de*-Xt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(we),J.translateZ(de),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let O=Rt+de,Ce=Yt+de,ee=Ht-we,w=Ze+(It-we),g=ne*Yt/Ce*O,B=ye*Yt/Ce*O;J.projectionMatrix.makePerspective(ee,w,g,B,O,Ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,ot=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),H.near=D.near=R.near=et,H.far=D.far=R.far=ot,(U!==H.near||N!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,N=H.far),H.layers.mask=J.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let It=J.parent,ft=H.cameras;St(H,It);for(let zt=0;zt<ft.length;zt++)St(ft[zt],It);ft.length===2?tt(H,R,D):H.projectionMatrix.copy(R.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),vt(J,H,It)};function vt(J,et,ot){ot===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=jo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(J){return h[J]};let Pt=null;function Ft(J,et){if(f=et.getViewerPose(c||r),y=et,f!==null){let ot=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let It=!1;ot.length!==H.cameras.length&&(H.cameras.length=0,It=!0);for(let Yt=0;Yt<ot.length;Yt++){let ne=ot[Yt],ye=null;if(d!==null)ye=d.getViewport(ne);else{let te=p.getViewSubImage(u,ne);ye=te.viewport,Yt===0&&(t.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(v))}let Xt=P[Yt];Xt===void 0&&(Xt=new Pn,Xt.layers.enable(Yt),Xt.viewport=new Xe,P[Yt]=Xt),Xt.matrix.fromArray(ne.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ne.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ye.x,ye.y,ye.width,ye.height),Yt===0&&(H.matrix.copy(Xt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),It===!0&&H.cameras.push(Xt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Yt=p.getDepthInformation(ot[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(ft&&ft.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Yt=0;Yt<ot.length;Yt++){let ne=ot[Yt].camera;if(ne){let ye=h[ne];ye||(ye=new Xc,h[ne]=ye);let Xt=p.getCameraImage(ne);ye.sourceTexture=Xt}}}}for(let ot=0;ot<E.length;ot++){let It=T[ot],ft=E[ot];It!==null&&ft!==void 0&&ft.update(It,et,c||r)}Pt&&Pt(J,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),y=null}let Kt=new g1;Kt.setAnimationLoop(Ft),this.setAnimationLoop=function(J){Pt=J},this.dispose=function(){}}},ZD=new We,M1=new Wt;M1.set(-1,0,0,0,1,0,0,0,1);function JD(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,H0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,_,M,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,v)):h.isMeshMatcapMaterial?(a(m,h),y(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===wn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===wn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let _=t.get(h),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(ZD.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(M1),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let _=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KD(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let T=E.program;i.uniformBlockBinding(v,T)}function c(v,E){let T=s[v.id];T===void 0&&(m(v),T=f(v),s[v.id]=T,v.addEventListener("dispose",_));let C=E.program;i.updateUBOMapping(v,C);let x=t.render.frame;a[v.id]!==x&&(u(v),a[v.id]=x)}function f(v){let E=p();v.__bindingPointIndex=E;let T=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],T=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let D=0,P=R.length;D<P;D++)d(R[D],x,D,C);else d(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,E,T,C){if(b(v,E,T,C)===!0){let x=v.__offset,A=v.value;if(Array.isArray(A)){let R=0;for(let D=0;D<A.length;D++){let P=A[D],H=h(P);y(P,v.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(A,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function y(v,E,T){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,T)}function b(v,E,T,C){let x=v.value,A=E+"_"+T;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{let R=C[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let E=v.uniforms,T=0,C=16;for(let A=0,R=E.length;A<R;A++){let D=Array.isArray(E[A])?E[A]:[E[A]];for(let P=0,H=D.length;P<H;P++){let U=D[P],N=Array.isArray(U.value)?U.value:[U.value];for(let W=0,X=N.length;W<X;W++){let j=N[W],V=h(j),Q=T%C,tt=Q%V.boundary,St=Q+tt;T+=tt,St!==0&&C-St<V.storage&&(T+=C-St),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=V.storage}}}let x=T%C;return x>0&&(T+=C-x),v.__size=T,v.__cache={},this}function h(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),E}function _(v){let E=v.target;E.removeEventListener("dispose",_);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function M(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var QD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ys=null;function jD(){return ys===null&&(ys=new il(QD,16,16,Wa,ji),ys.name="DFG_LUT",ys.minFilter=on,ys.magFilter=on,ys.wrapS=fs,ys.wrapT=fs,ys.generateMipmaps=!1,ys.needsUpdate=!0),ys}var Hd=class{constructor(t={}){let{canvas:n=Vb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=si}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=r;let b=d,m=new Set([ed,td,$f]),h=new Set([si,Ki,fl,dl,Qf,jf]),_=new Uint32Array(4),M=new Int32Array(4),v=new G,E=null,T=null,C=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,P=null,H=null,U=null,N=null;this._outputColorSpace=On;let W=0,X=0,j=null,V=-1,Q=null,tt=new Xe,St=new Xe,vt=null,Pt=new ae(0),Ft=0,Kt=n.width,J=n.height,et=1,ot=null,It=null,ft=new Xe(0,0,Kt,J),zt=new Xe(0,0,Kt,J),Rt=!1,Yt=new sl,ne=!1,ye=!1,Xt=new We,te=new G,Ht=new Xe,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function we(){return j===null?et:1}let O=i;function Ce(S,I){return n.getContext(S,I)}let ee,w,g,B,k,Z,rt,at,K,Y,ht,Mt,dt,ut,Dt,wt,Vt,L,ct,$,pt,gt,it;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",Vn,!1),O===null){let I="webgl2";if(O=Ce(I,S),O===null)throw Ce(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(S){throw n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),Ot("WebGLRenderer: "+S.message),S}function Ut(){ee=new a2(O),ee.init(),pt=new XD(O,ee),w=new J3(O,ee,t,pt),g=new kD(O,ee),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),H=O.createFramebuffer(),U=O.createFramebuffer(),N=O.createFramebuffer(),B=new l2(O),k=new RD,Z=new WD(O,ee,g,k,w,pt,B),rt=new s2(R),at=new uC(O),gt=new Y3(O,at),K=new r2(O,at,B,gt),Y=new u2(O,K,at,gt,B),L=new c2(O,w,Z),Dt=new K3(k),ht=new CD(R,rt,ee,w,gt,Dt),Mt=new JD(R,k),dt=new UD,ut=new BD(ee),Vt=new q3(R,rt,g,Y,y,l),wt=new GD(R,Y,w),it=new KD(O,B,w,g),ct=new Z3(O,ee,B),$=new o2(O,ee,B),B.programs=ht.programs,R.capabilities=w,R.extensions=ee,R.properties=k,R.renderLists=dt,R.shadowMap=wt,R.state=g,R.info=B}b!==si&&(A=new f2(b,n.width,n.height,o,s,a));let Tt=new s_(R,O);this.xr=Tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(Kt,J,!1))},this.getSize=function(S){return S.set(Kt,J)},this.setSize=function(S,I,q=!0){if(Tt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=S,J=I,n.width=Math.floor(S*et),n.height=Math.floor(I*et),q===!0&&(n.style.width=S+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Kt*et,J*et).floor()},this.setDrawingBufferSize=function(S,I,q){Kt=S,J=I,et=q,n.width=Math.floor(S*q),n.height=Math.floor(I*q),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(b===si){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(ft)},this.setViewport=function(S,I,q,z){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,I,q,z),g.viewport(tt.copy(ft).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,I,q,z){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,I,q,z),g.scissor(St.copy(zt).multiplyScalar(et).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(S){g.setScissorTest(Rt=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,q=!0){let z=0;if(S){let F=!1;if(j!==null){let lt=j.texture.format;F=m.has(lt)}if(F){let lt=j.texture.type,xt=h.has(lt),mt=Vt.getClearColor(),At=Vt.getClearAlpha(),Ct=mt.r,Gt=mt.g,Zt=mt.b;xt?(_[0]=Ct,_[1]=Gt,_[2]=Zt,_[3]=At,O.clearBufferuiv(O.COLOR,0,_)):(M[0]=Ct,M[1]=Gt,M[2]=Zt,M[3]=At,O.clearBufferiv(O.COLOR,0,M))}else z|=O.COLOR_BUFFER_BIT}I&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),Vt.dispose(),dt.dispose(),ut.dispose(),k.dispose(),rt.dispose(),Y.dispose(),gt.dispose(),it.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",xs),Tt.removeEventListener("sessionend",dn),vn.stop()};function ie(S){S.preventDefault(),F0("WebGLRenderer: Context Lost."),D=!0}function ce(){F0("WebGLRenderer: Context Restored."),D=!1;let S=B.autoReset,I=wt.enabled,q=wt.autoUpdate,z=wt.needsUpdate,F=wt.type;Ut(),B.autoReset=S,wt.enabled=I,wt.autoUpdate=q,wt.needsUpdate=z,wt.type=F}function Vn(S){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Cn(S){let I=S.target;I.removeEventListener("dispose",Cn),$i(I)}function $i(S){Xd(S),k.remove(S)}function Xd(S){let I=k.get(S).programs;I!==void 0&&(I.forEach(function(q){ht.releaseProgram(q)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,q,z,F,lt){I===null&&(I=Ze);let xt=F.isMesh&&F.matrixWorld.determinantAffine()<0,mt=Ml(S,I,q,z,F);g.setMaterial(z,xt);let At=q.index,Ct=1;if(z.wireframe===!0){if(At=K.getWireframeAttribute(q),At===void 0)return;Ct=2}let Gt=q.drawRange,Zt=q.attributes.position,bt=Gt.start*Ct,Qt=(Gt.start+Gt.count)*Ct;lt!==null&&(bt=Math.max(bt,lt.start*Ct),Qt=Math.min(Qt,(lt.start+lt.count)*Ct)),At!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,At.count)):Zt!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Zt.count));let Me=Qt-bt;if(Me<0||Me===1/0)return;gt.setup(F,z,mt,q,At);let pe,me=ct;if(At!==null&&(pe=at.get(At),me=$,me.setIndex(pe)),F.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*we()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(F.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),g.setLineWidth(qe*we()),F.isLineSegments?me.setMode(O.LINES):F.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else F.isPoints?me.setMode(O.POINTS):F.isSprite&&me.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let qe=F._multiDrawStarts,yt=F._multiDrawCounts,tn=F._multiDrawCount,se=At?at.get(At).bytesPerElement:1,Sn=k.get(z).currentProgram.getUniforms();for(let Dn=0;Dn<tn;Dn++)Sn.setValue(O,"_gl_DrawID",Dn),me.render(qe[Dn]/se,yt[Dn])}else if(F.isInstancedMesh)me.renderInstances(bt,Me,F.count);else if(q.isInstancedBufferGeometry){let qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,qe);me.renderInstances(bt,Me,yt)}else me.render(bt,Me)};function ln(S,I,q,z){P!==null&&S.isNodeMaterial&&P.setObject(z,S),ne===!0&&Dt.setState(S,q,!1),S.transparent===!0&&S.side===Bi&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,ea(S,I,z),S.side=gs,S.needsUpdate=!0,ea(S,I,z),S.side=Bi):ea(S,I,z)}this.compile=function(S,I,q=null){q===null&&(q=S),P!==null&&P.renderStart(S,I,q),T=ut.get(q),T.init(I),x.push(T),q.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),S!==q&&S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ye=this.localClippingEnabled,ne=Dt.init(this.clippingPlanes,ye),ne===!0&&Dt.setGlobalState(this.clippingPlanes,I),P!==null&&wt.render(T.state.shadowsArray,q,I);let z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let lt=F.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){let mt=lt[xt];ln(mt,q,I,F),z.add(mt)}else ln(lt,q,I,F),z.add(lt)}),T=x.pop(),P!==null&&P.renderEnd(),z},this.compileAsync=function(S,I,q=null){let z=this.compile(S,I,q);return new Promise(F=>{function lt(){if(z.forEach(function(xt){let At=k.get(xt).currentProgram;(At===void 0||At.isReady())&&z.delete(xt)}),z.size===0){F(S);return}setTimeout(lt,10)}ee.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Er=null;function du(S){Er&&Er(S)}function xs(){vn.stop()}function dn(){vn.start()}let vn=new g1;vn.setAnimationLoop(du),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(S){Er=S,Tt.setAnimationLoop(S),S===null?vn.stop():vn.start()},Tt.addEventListener("sessionstart",xs),Tt.addEventListener("sessionend",dn),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(S,I);let q=Tt.enabled===!0&&Tt.isPresenting===!0,z=A!==null&&(j===null||q)&&A.begin(R,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(I),I=Tt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,j),T=ut.get(S,x.length),T.init(I),T.state.textureUnits=Z.getTextureUnits(),x.push(T),Xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(Xt,Zi,I.reversedDepth),ye=this.localClippingEnabled,ne=Dt.init(this.clippingPlanes,ye),E=dt.get(S,C.length),E.init(),C.push(E),Tt.enabled===!0&&Tt.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&xn(xt,I,-1/0,R.sortObjects)}xn(S,I,0,R.sortObjects),E.finish(),P!==null&&P.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(ot,It),de=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,de&&Vt.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Dt.beginShadows();let F=T.state.shadowsArray;if(wt.render(F,S,I),ne===!0&&Dt.endShadows(),(z&&A.hasRenderPass())===!1){let xt=E.opaque,mt=E.transmissive;if(T.setupLights(),I.isArrayCamera){let At=I.cameras;if(mt.length>0)for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Zt=At[Ct];ta(xt,mt,S,Zt)}de&&Vt.render(S);for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Zt=At[Ct];Rn(E,S,Zt,Zt.viewport)}}else mt.length>0&&ta(xt,mt,S,I),de&&Vt.render(S),Rn(E,S,I)}j!==null&&X===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),z&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),gt.resetDefaultState(),V=-1,Q=null,x.pop(),x.length>0?(T=x[x.length-1],Z.setTextureUnits(T.state.textureUnits),ne===!0&&Dt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,P!==null&&P.renderEnd()};function xn(S,I,q,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Yt)){z&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Xt);let xt=Y.update(S),mt=S.material;mt.visible&&E.push(S,xt,mt,q,Ht.z,null,I)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Yt))){let xt=Y.update(S),mt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(Xt)),Array.isArray(mt)){let At=xt.groups;for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Zt=At[Ct],bt=mt[Zt.materialIndex];bt&&bt.visible&&E.push(S,xt,bt,q,Ht.z,Zt,I)}}else mt.visible&&E.push(S,xt,mt,q,Ht.z,null,I)}}let lt=S.children;for(let xt=0,mt=lt.length;xt<mt;xt++)xn(lt[xt],I,q,z)}function Rn(S,I,q,z){let{opaque:F,transmissive:lt,transparent:xt}=S;T.setupLightsView(q),ne===!0&&Dt.setGlobalState(R.clippingPlanes,q),z&&g.viewport(tt.copy(z)),F.length>0&&ts(F,I,q),lt.length>0&&ts(lt,I,q),xt.length>0&&ts(xt,I,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ta(S,I,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let bt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:bt?ji:si,minFilter:Ga,samples:Math.max(4,w.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let lt=T.state.transmissionRenderTarget[z.id],xt=z.viewport||tt;lt.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let mt=R.getRenderTarget(),At=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(lt),R.getClearColor(Pt),Ft=R.getClearAlpha(),Ft<1&&R.setClearColor(16777215,.5),R.clear(),de&&Vt.render(q);let Gt=R.toneMapping;R.toneMapping=Ji;let Zt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ne===!0&&Dt.setGlobalState(R.clippingPlanes,z),ts(S,q,z),Z.updateMultisampleRenderTarget(lt),Z.updateRenderTargetMipmap(lt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,Me=I.length;Qt<Me;Qt++){let pe=I[Qt],{object:me,geometry:qe,material:yt,group:tn}=pe;if(yt.side===Bi&&me.layers.test(z.layers)){let se=yt.side;yt.side=wn,yt.needsUpdate=!0,Tr(me,q,z,qe,yt,tn),yt.side=se,yt.needsUpdate=!0,bt=!0}}bt===!0&&(Z.updateMultisampleRenderTarget(lt),Z.updateRenderTargetMipmap(lt))}R.setRenderTarget(mt,At,Ct),R.setClearColor(Pt,Ft),Zt!==void 0&&(z.viewport=Zt),R.toneMapping=Gt}function ts(S,I,q){let z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,lt=S.length;F<lt;F++){let xt=S[F],{object:mt,geometry:At,group:Ct}=xt,Gt=xt.material;Gt.allowOverride===!0&&z!==null&&(Gt=z),mt.layers.test(q.layers)&&Tr(mt,I,q,At,Gt,Ct)}}function Tr(S,I,q,z,F,lt){P!==null&&F.isNodeMaterial&&P.setObject(S,F),S.onBeforeRender(R,I,q,z,F,lt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(R,I,q,z,S,lt),F.transparent===!0&&F.side===Bi&&F.forceSinglePass===!1?(F.side=wn,F.needsUpdate=!0,R.renderBufferDirect(q,I,z,F,S,lt),F.side=gs,F.needsUpdate=!0,R.renderBufferDirect(q,I,z,F,S,lt),F.side=Bi):R.renderBufferDirect(q,I,z,F,S,lt),S.onAfterRender(R,I,q,z,F,lt)}function ea(S,I,q){I.isScene!==!0&&(I=Ze);let z=k.get(S),F=T.state.lights,lt=T.state.shadowsArray,xt=F.state.version,mt=ht.getParameters(S,F.state,lt,I,q,T.state.lightProbeGridArray),At=ht.getProgramCacheKey(mt),Ct=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let Gt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=rt.get(S.envMap||z.environment,Gt),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Cn),Ct=new Map,z.programs=Ct);let Zt=Ct.get(At);if(Zt!==void 0){if(z.currentProgram===Zt&&z.lightsStateVersion===xt)return Sl(S,mt),Zt}else mt.uniforms=ht.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,q,mt),S.onBeforeCompile(mt,R),Zt=ht.acquireProgram(mt,At),Ct.set(At,Zt),z.uniforms=mt.uniforms;let bt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=Dt.uniform),Sl(S,mt),z.needsLights=Ar(S),z.lightsStateVersion=xt,z.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.sunLights.value=F.state.sun,bt.sunLightShadows.value=F.state.sunShadow,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.sunShadowMatrix.value=F.state.sunShadowMatrix,bt.sunShadowCascade.value=F.state.sunShadowCascade,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Zt,z.uniformsList=null,Zt}function xl(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=_l.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Sl(S,I){let q=k.get(S);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function na(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let q=0,z=S.length;q<z;q++){let F=S[q];if(F.texture!==null&&F.boundingBox.containsPoint(v))return F}return null}function Ml(S,I,q,z,F){I.isScene!==!0&&(I=Ze),Z.resetTextureUnits();let lt=I.fog,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,mt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:he.workingColorSpace,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ct=rt.get(z.envMap||xt,At),Gt=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,Me=!!q.morphAttributes.color,pe=Ji;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(pe=R.toneMapping);let me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qe=me!==void 0?me.length:0,yt=k.get(z),tn=T.state.lights;if(ne===!0&&(ye===!0||S!==Q)){let Ee=S===Q&&z.id===V;Dt.setState(z,S,Ee)}let se=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==tn.state.version||yt.outputColorSpace!==mt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==Ct||z.fog===!0&&yt.fog!==lt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Dt.numPlanes||yt.numIntersection!==Dt.numIntersection)||yt.vertexAlphas!==Gt||yt.vertexTangents!==Zt||yt.morphTargets!==bt||yt.morphNormals!==Qt||yt.morphColors!==Me||yt.toneMapping!==pe||yt.morphTargetsCount!==qe||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,yt.__version=z.version);let Sn=yt.currentProgram;se===!0&&(Sn=ea(z,I,F),P&&z.isNodeMaterial&&P.onUpdateProgram(z,Sn,yt));let Dn=!1,zi=!1,Ms=!1,_e=Sn.getUniforms(),Re=yt.uniforms;if(g.useProgram(Sn.program)&&(Dn=!0,zi=!0,Ms=!0),z.id!==V&&(V=z.id,zi=!0),yt.needsLights){let Ee=na(T.state.lightProbeGridArray,F);yt.lightProbeGrid!==Ee&&(yt.lightProbeGrid=Ee,zi=!0)}if(Dn||Q!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(O,"projectionMatrix",S.projectionMatrix),_e.setValue(O,"viewMatrix",S.matrixWorldInverse);let Zn=_e.map.cameraPosition;Zn!==void 0&&Zn.setValue(O,te.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,zi=!0,Ms=!0)}if(yt.needsLights&&(tn.state.sunShadowMap.length>0&&_e.setValue(O,"sunShadowMap",tn.state.sunShadowMap,Z),tn.state.directionalShadowMap.length>0&&_e.setValue(O,"directionalShadowMap",tn.state.directionalShadowMap,Z),tn.state.spotShadowMap.length>0&&_e.setValue(O,"spotShadowMap",tn.state.spotShadowMap,Z),tn.state.pointShadowMap.length>0&&_e.setValue(O,"pointShadowMap",tn.state.pointShadowMap,Z)),F.isSkinnedMesh){_e.setOptional(O,F,"bindMatrix"),_e.setOptional(O,F,"bindMatrixInverse");let Ee=F.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),_e.setValue(O,"boneTexture",Ee.boneTexture,Z))}F.isBatchedMesh&&(_e.setOptional(O,F,"batchingTexture"),_e.setValue(O,"batchingTexture",F._matricesTexture,Z),_e.setOptional(O,F,"batchingIdTexture"),_e.setValue(O,"batchingIdTexture",F._indirectTexture,Z),_e.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(O,"batchingColorTexture",F._colorsTexture,Z));let Hi=q.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&L.update(F,q,Sn),(zi||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,_e.setValue(O,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Re.envMapIntensity.value=I.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=jD()),zi){if(_e.setValue(O,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&Ss(Re,Ms),lt&&z.fog===!0&&Mt.refreshFogUniforms(Re,lt),Mt.refreshMaterialUniforms(Re,z,et,J,T.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.lightProbeGrid){let Ee=yt.lightProbeGrid;Re.probesSH.value=Ee.texture,Re.probesMin.value.copy(Ee.boundingBox.min),Re.probesMax.value.copy(Ee.boundingBox.max),Re.probesResolution.value.copy(Ee.resolution)}_l.upload(O,xl(yt),Re,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_l.upload(O,xl(yt),Re,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(O,"center",F.center),_e.setValue(O,"modelViewMatrix",F.modelViewMatrix),_e.setValue(O,"normalMatrix",F.normalMatrix),_e.setValue(O,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let Ee=z.uniformsGroups;for(let Zn=0,es=Ee.length;Zn<es;Zn++){let El=Ee[Zn];it.update(El,Sn),it.bind(El,Sn)}}return Sn}function Ss(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Ar(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,I,q){let z=k.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=I,k.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){let q=k.get(S);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,q=0){j=S,W=I,X=q;let z=null,F=!1,lt=!1;if(S){let mt=k.get(S);if(mt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),tt.copy(S.viewport),St.copy(S.scissor),vt=S.scissorTest,g.viewport(tt),g.scissor(St),g.setScissorTest(vt),V=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(mt.__hasExternalTextures)Z.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Gt=S.depthTexture;if(mt.__boundDepthTexture!==Gt){if(Gt!==null&&k.has(Gt)&&(S.width!==Gt.image.width||S.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);let Ct=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?z=Ct[I][q]:z=Ct[I],F=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?z=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[q]:z=Ct,tt.copy(S.viewport),St.copy(S.scissor),vt=S.scissorTest}else tt.copy(ft).multiplyScalar(et).floor(),St.copy(zt).multiplyScalar(et).floor(),vt=Rt;if(q!==0&&(z=H),g.bindFramebuffer(O.FRAMEBUFFER,z)&&g.drawBuffers(S,z),g.viewport(tt),g.scissor(St),g.setScissorTest(vt),F){let mt=k.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,q)}else if(lt){let mt=I;for(let At=0;At<S.textures.length;At++){let Ct=k.get(S.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Ct.__webglTexture,q,mt)}}else if(S!==null&&q!==0){let mt=k.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,q)}V=-1};function bl(S){let I=k.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=w.textureFormatReadable(S.format),I.__typeReadable=w.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,q,z,F,lt,xt,mt=0){if(!(S&&S.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){g.bindFramebuffer(O.FRAMEBUFFER,At);try{let Ct=S.textures[mt],Gt=Ct.format,Zt=Ct.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);let bt=bl(Ct);if(bt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&q>=0&&q<=S.height-F&&O.readPixels(I,q,z,F,pt.convert(Gt),pt.convert(Zt),lt)}finally{let Ct=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,I,q,z,F,lt,xt,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At)if(I>=0&&I<=S.width-z&&q>=0&&q<=S.height-F){g.bindFramebuffer(O.FRAMEBUFFER,At);let Ct=S.textures[mt],Gt=Ct.format,Zt=Ct.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);let bt=bl(Ct);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,lt.byteLength,O.STREAM_READ),O.readPixels(I,q,z,F,pt.convert(Gt),pt.convert(Zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Me=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Me);let pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await kb(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,lt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qt),O.deleteSync(pe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,q=0){let z=Math.pow(2,-q),F=Math.floor(S.image.width*z),lt=Math.floor(S.image.height*z),xt=I!==null?I.x:0,mt=I!==null?I.y:0;Z.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,mt,F,lt),g.unbindTexture()},this.copyTextureToTexture=function(S,I,q=null,z=null,F=0,lt=0){let xt,mt,At,Ct,Gt,Zt,bt,Qt,Me,pe=S.isCompressedTexture?S.mipmaps[lt]:S.image;if(q!==null)xt=q.max.x-q.min.x,mt=q.max.y-q.min.y,At=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Gt=q.min.y,Zt=q.isBox3?q.min.z:0;else{let Re=Math.pow(2,-F);xt=Math.floor(pe.width*Re),mt=Math.floor(pe.height*Re),S.isDataArrayTexture?At=pe.depth:S.isData3DTexture?At=Math.floor(pe.depth*Re):At=1,Ct=0,Gt=0,Zt=0}z!==null?(bt=z.x,Qt=z.y,Me=z.z):(bt=0,Qt=0,Me=0);let me=pt.convert(I.format),qe=pt.convert(I.type),yt;I.isData3DTexture?(Z.setTexture3D(I,0),yt=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Z.setTexture2DArray(I,0),yt=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(I,0),yt=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);let tn=g.getParameter(O.UNPACK_ROW_LENGTH),se=g.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=g.getParameter(O.UNPACK_SKIP_PIXELS),Dn=g.getParameter(O.UNPACK_SKIP_ROWS),zi=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,pe.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),g.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Zt);let Ms=S.isDataArrayTexture||S.isData3DTexture,_e=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){let Re=k.get(S),Hi=k.get(I),Ee=k.get(Re.__renderTarget),Zn=k.get(Hi.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,Ee.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let es=0;es<At;es++)Ms&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(S).__webglTexture,F,Zt+es),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(I).__webglTexture,lt,Me+es)),O.blitFramebuffer(Ct,Gt,xt,mt,bt,Qt,xt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||k.has(S)){let Re=k.get(S),Hi=k.get(I);g.bindFramebuffer(O.READ_FRAMEBUFFER,U),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let Ee=0;Ee<At;Ee++)Ms?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,F,Zt+Ee):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,F),_e?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Hi.__webglTexture,lt,Me+Ee):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Hi.__webglTexture,lt),F!==0?O.blitFramebuffer(Ct,Gt,xt,mt,bt,Qt,xt,mt,O.COLOR_BUFFER_BIT,O.NEAREST):_e?O.copyTexSubImage3D(yt,lt,bt,Qt,Me+Ee,Ct,Gt,xt,mt):O.copyTexSubImage2D(yt,lt,bt,Qt,Ct,Gt,xt,mt);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(yt,lt,bt,Qt,Me,xt,mt,At,me,qe,pe.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,lt,bt,Qt,Me,xt,mt,At,me,pe.data):O.texSubImage3D(yt,lt,bt,Qt,Me,xt,mt,At,me,qe,pe):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,lt,bt,Qt,xt,mt,me,qe,pe.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,lt,bt,Qt,pe.width,pe.height,me,pe.data):O.texSubImage2D(O.TEXTURE_2D,lt,bt,Qt,xt,mt,me,qe,pe);g.pixelStorei(O.UNPACK_ROW_LENGTH,tn),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),g.pixelStorei(O.UNPACK_SKIP_ROWS,Dn),g.pixelStorei(O.UNPACK_SKIP_IMAGES,zi),lt===0&&I.generateMipmaps&&O.generateMipmap(yt),g.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){W=0,X=0,j=null,g.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),n.unpackColorSpace=he._getUnpackColorSpace()}};var qa=Ya(fu()),vl=(e=0)=>({value:e,target:e,velocity:0}),Ye=(e,t,n)=>Math.min(n,Math.max(t,e)),Ve=(e,t)=>Number.isFinite(e)?e:t;function a_(e,t,n,i){if(i||n<=0)return e.value=e.target,e.velocity=0,!1;let s=8/Math.max(.06,n),a=e.value-e.target,r=e.velocity+s*a,o=Math.exp(-s*t);return e.value=e.target+(a+r*t)*o,e.velocity=(e.velocity-s*r*t)*o,Math.abs(e.value-e.target)<1e-4&&Math.abs(e.velocity)<.001?(e.value=e.target,e.velocity=0,!1):!0}function A1(e){let t=e|0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function nU(e,t,n,i,s,a,r){let o=e.length/3,l=Float64Array.from(e),c=Float64Array.from(e),f=Float64Array.from(e),p=[],u=[],d=new Map,y=A1(r),b=Array.from({length:i},()=>{let D=y()*Math.PI*2;return{x:Math.cos(D),y:Math.sin(D),phase:y()*Math.PI*2,weight:y()*.6+.4}});for(let D=0;D<t.length;D+=3)for(let P=0;P<3;P++){let H=t[D+P],U=t[D+(P+1)%3],N=t[D+(P+2)%3],W=Math.min(H,U)*o+Math.max(H,U),X=d.get(W);if(X){let j=X.opposite*3,V=N*3,Q=Math.hypot(e[j]-e[V],e[j+1]-e[V+1]),tt=(e[j]+e[V])*.5,St=(e[j+1]+e[V+1])*.5,vt=0;for(let Pt of b){let Ft=Math.abs(Math.sin((tt*Pt.x+St*Pt.y)/n*4+Pt.phase));vt=Math.max(vt,Math.exp(-Ft*Ft*80)*Pt.weight)}u.push(j,V,Q,.12+(1-vt)*.75)}else{d.set(W,{a:H,b:U,opposite:N});let j=Math.hypot(e[H*3]-e[U*3],e[H*3+1]-e[U*3+1]);p.push(H*3,U*3,j)}}let m=Math.sqrt(n*n/o),h=n*.008,_=[e.slice()],M=64,v=3,E=M*v,T=0;for(let D=0;D<e.length;D+=3)T=Math.max(T,Math.hypot(e[D]/.94,e[D+1]/1.02));T*=1.02;function C(D,P,H,U){for(let N=0;N<D.length;N+=P){let W=U?D.length-P-N:N,X=D[W],j=D[W+1],V=l[j]-l[X],Q=l[j+1]-l[X+1],tt=l[j+2]-l[X+2],St=Math.sqrt(V*V+Q*Q+tt*tt);if(St<1e-6)continue;let vt=P===4?D[W+3]:1,Pt=(1-D[W+2]/St)*.5*H*vt;l[X]+=V*Pt,l[j]-=V*Pt,l[X+1]+=Q*Pt,l[j+1]-=Q*Pt,l[X+2]+=tt*Pt,l[j+2]-=tt*Pt}}function x(){let D=h*2;for(let P=0;P<t.length;P+=3){let H=t[P]*3,U=t[P+1]*3,N=t[P+2]*3,W=l[H],X=l[H+1],j=l[H+2],V=l[U]-W,Q=l[U+1]-X,tt=l[U+2]-j,St=l[N]-W,vt=l[N+1]-X,Pt=l[N+2]-j,Ft=Q*Pt-tt*vt,Kt=tt*St-V*Pt,J=V*vt-Q*St,et=Math.hypot(Ft,Kt,J);if(et<1e-7)continue;Ft/=et,Kt/=et,J/=et;let ot=Math.min(W,l[U],l[N])-D,It=Math.max(W,l[U],l[N])+D,ft=Math.min(X,l[U+1],l[N+1])-D,zt=Math.max(X,l[U+1],l[N+1])+D,Rt=Math.min(j,l[U+2],l[N+2])-D,Yt=Math.max(j,l[U+2],l[N+2])+D,ne=V*V+Q*Q+tt*tt,ye=St*St+vt*vt+Pt*Pt,Xt=V*St+Q*vt+tt*Pt,te=ne*ye-Xt*Xt;if(!(te<1e-10))for(let Ht=0;Ht<l.length;Ht+=3){if(Ht===H||Ht===U||Ht===N||l[Ht]<ot||l[Ht]>It||l[Ht+1]<ft||l[Ht+1]>zt||l[Ht+2]<Rt||l[Ht+2]>Yt)continue;let Ze=e[Ht]-(e[H]+e[U]+e[N])/3,de=e[Ht+1]-(e[H+1]+e[U+1]+e[N+1])/3;if(Ze*Ze+de*de<m*m*6)continue;let we=l[Ht]-W,O=l[Ht+1]-X,Ce=l[Ht+2]-j,ee=we*Ft+O*Kt+Ce*J,g=(f[Ht]-f[H])*Ft+(f[Ht+1]-f[H+1])*Kt+(f[Ht+2]-f[H+2])*J>=0?1:-1;if(ee*g>=h||Math.abs(ee)>D)continue;let B=we*V+O*Q+Ce*tt,k=we*St+O*vt+Ce*Pt,Z=(ye*B-Xt*k)/te,rt=(ne*k-Xt*B)/te;if(Z<0||rt<0||Z+rt>1)continue;let at=1-Z-rt,K=(h*g-ee)/(1+at*at+Z*Z+rt*rt);for(let Y=0;Y<3;Y++){let Mt=(Y===0?Ft:Y===1?Kt:J)*K;l[Ht+Y]+=Mt,l[H+Y]-=Mt*at,l[U+Y]-=Mt*Z,l[N+Y]-=Mt*rt}}}}for(let D=1;D<=E;D++){let P=D/E,H=P*P*(3-2*P),U=T*(1-H)+n*(.19-a*.025)*H;f.set(l);for(let N=0;N<l.length;N+=3){let W=e[N]/n,X=e[N+1]/n,j=0;for(let V of b)j+=Math.sin((W*V.x+X*V.y)*5+V.phase)*V.weight;for(let V=0;V<3;V++){let Q=(l[N+V]-c[N+V])*.55;c[N+V]=l[N+V],l[N+V]+=Ye(Q,-m*.15,m*.15)}l[N+2]+=j/i*n*7e-4*Math.sin(P*Math.PI)}for(let N=0;N<18;N++){C(u,4,.45*(1-s*.4),N%2===0);for(let W=0;W<l.length;W+=3){let X=l[W]/.94,j=l[W+1]/1.02,V=l[W+2]/.86,Q=Math.hypot(X,j,V);if(Q>U){let tt=(1-U/Q)*.55;l[W]-=l[W]*tt,l[W+1]-=l[W+1]*tt,l[W+2]-=l[W+2]*tt}}C(p,3,1,N%2!==0),(N===8||N===17)&&x()}for(let N=0;N<u.length;N+=4){let W=u[N],X=u[N+1],j=Math.hypot(l[W]-l[X],l[W+1]-l[X+1],l[W+2]-l[X+2]);j<u[N+2]*.86&&(u[N+2]+=(j-u[N+2])*.12)}D%v===0&&_.push(Float32Array.from(l))}let A=Float64Array.from(l);for(let D=1;D<=80;D++){let P=D/80,H=P*P*(3-2*P);for(let U=0;U<12;U++){for(let N=0;N<l.length;N++){let W=A[N]+(e[N]-A[N])*H;l[N]+=(W-l[N])*(N%3===2?.04:.22)}C(u,4,.7,U%2===0),C(p,3,1,U%2!==0)}}let R=Float32Array.from(l);return{samples:_,creased:R}}var iU=({src:e,alt:t="Crumplable image",backSrc:n="",width:i=320,height:s=400,sceneHeight:a=560,imageFit:r="cover",releaseBehavior:o="restore",crumpleAmount:l=.85,crumpleDuration:c=.55,releaseDuration:f=.4,foldCount:p=6,foldSharpness:u=.6,wrinkleDepth:d=.65,creaseStrength:y=.18,paperColor:b="#f4f0e8",roughness:m=.92,paperTexture:h=.08,lightIntensity:_=1.8,lightAngle:M=-35,shadow:v=!0,shadowOpacity:E=.08,draggable:T=!0,dragRotation:C=10,dragRadius:x=180,returnToOrigin:A=!0,rotation:R=0,seed:D=7,detail:P=64,disabled:H=!1,resetKey:U=0,autoCrumple:N=!1,onReady:W,onStateChange:X,onError:j,className:V="",style:Q})=>{let tt=(0,ai.useRef)(null),St=(0,ai.useRef)(null),vt=(0,ai.useRef)(null),Pt=(0,ai.useRef)(null),Ft=(0,ai.useRef)(null),Kt=(0,ai.useRef)(null),[J,et]=(0,ai.useState)("loading"),ot=(0,ai.useRef)({releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:f,creaseStrength:y,draggable:T,dragRotation:C,dragRadius:x,returnToOrigin:A,disabled:H,autoCrumple:N,onReady:W,onStateChange:X,onError:j});ot.current={releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:f,creaseStrength:y,draggable:T,dragRotation:C,dragRadius:x,returnToOrigin:A,disabled:H,autoCrumple:N,onReady:W,onStateChange:X,onError:j},(0,ai.useEffect)(()=>{let ft=St.current,zt=vt.current,Rt=Pt.current;if(!ft||!zt||!Rt)return;et("loading"),Rt.disabled=!0,Rt.dataset.held="false",Rt.setAttribute("aria-pressed","false");let Yt=ft.getBoundingClientRect(),ne=Math.max(1,Ve(i,320)),ye=Math.max(1,Ve(s,400)),Xt=Math.min(1,Math.max(1,Yt.width-48)/ne,Math.max(1,Yt.height-48)/ye);ft.style.setProperty("--pc-image-width",`${ne*Xt}px`),ft.style.setProperty("--pc-image-height",`${ye*Xt}px`);let te;try{te=new Hd({canvas:zt,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch(st){et("error"),ot.current.onError?.(st instanceof Error?st:new Error("WebGL is unavailable."));return}let Ht=Math.max(1,Ve(i,320)),Ze=Math.max(1,Ve(s,400)),de=Ze/Ht,we=Math.min(1,de),O=Math.round(Ye(Ve(P,64)/4,8,24)),Ce=Math.max(8,Math.round(O/Math.max(1,de))),ee=Math.max(8,Math.round(O*Math.min(1,de))),w=A1(Ve(D,7)),g=Ye(Ve(u,.6),0,1),B=Math.round(Ye(Ve(p,6),3,16)),k=Ye(Ve(d,.65),0,2),Z=(Ce+1)*(ee+1),rt=new Float32Array(Z*3),at=new Float32Array(Z*3),K=new Float32Array(Z*2),Y=[];for(let st=0;st<=ee;st++)for(let Et=0;Et<=Ce;Et++){let jt=st*(Ce+1)+Et,kt=(Et+(Et>0&&Et<Ce?(w()-.5)*.5:0))/Ce,Ne=(st+(st>0&&st<ee?(w()-.5)*.5:0))/ee,ve=kt-.5,De=(Ne-.5)*de;if(rt[jt*3]=ve,rt[jt*3+1]=De,K[jt*2]=kt,K[jt*2+1]=Ne,Et<Ce&&st<ee){let Lt=jt,Je=jt+1,Gn=jt+Ce+1,Jn=Gn+1;w()>.5?Y.push(Lt,Je,Jn,Lt,Jn,Gn):Y.push(Lt,Je,Gn,Je,Jn,Gn)}}let ht=JSON.stringify([Ht,Ze,O,B,g,k,D]);tt.current?.key!==ht&&(tt.current={key:ht,value:nU(rt,Y,we,B,g,k,Ve(D,7))});let Mt=tt.current.value,dt=new Float32Array(Y.length*3),ut=new Float32Array(Y.length*3),Dt=new Float32Array(Y.length*2),wt=new Float32Array(Y.length),Vt=Array.from({length:Z},()=>[]);for(let st=0;st<Y.length;st++)Dt[st*2]=K[Y[st]*2],Dt[st*2+1]=K[Y[st]*2+1],Vt[Y[st]].push(Math.floor(st/3)*3);let L=new Pi;L.setAttribute("position",new Bn(dt,3).setUsage(Od)),L.setAttribute("normal",new Bn(ut,3).setUsage(Od)),L.setAttribute("uv",new Bn(Dt,2));let ct=new Uint8Array(16384*4);for(let st=0;st<ct.length;st+=4){let Et=100+Math.floor(w()*155);ct[st]=ct[st+1]=ct[st+2]=Et,ct[st+3]=255}let $=new il(ct,128,128);$.wrapS=$.wrapT=Zo,$.repeat.set(5,5*de),$.magFilter=on,$.minFilter=on,$.needsUpdate=!0;let pt={roughness:Ye(Ve(m,.92),0,1),metalness:0,bumpMap:$,bumpScale:Ye(Ve(h,.08),0,1)*.32,alphaTest:.04,alphaToCoverage:!0,flatShading:!1},gt=new rl({...pt,side:gs}),it=new rl({...pt,side:wn,color:n?"#ffffff":b}),Ut={value:0};for(let st of[gt,it])st.onBeforeCompile=Et=>{Et.uniforms.paperLighting=Ut,Et.fragmentShader=`uniform float paperLighting;
`+Et.fragmentShader,Et.fragmentShader=Et.fragmentShader.replace("#include <map_fragment>",`
          #include <map_fragment>
          #ifdef USE_MAP
            if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
            ${st===it&&!n?"diffuseColor.rgb = diffuse;":""}
          #endif
        `),Et.fragmentShader=Et.fragmentShader.replace("#include <opaque_fragment>",`
          outgoingLight = mix(diffuseColor.rgb, outgoingLight, paperLighting);
          #include <opaque_fragment>
        `)},st.customProgramCacheKey=()=>`paper-${st===it&&!n?"stock":"print"}`;let Tt=new ol({depthPacking:P0,alphaTest:.04,side:Bi});Tt.onBeforeCompile=st=>{st.fragmentShader=st.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        #ifdef USE_MAP
          if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
        #endif
      `)};let ie=new Js,ce=new zn(L,gt),Vn=new zn(L,it);ce.castShadow=v,ce.receiveShadow=v,Vn.receiveShadow=v,ce.customDepthMaterial=Tt,ie.add(ce,Vn);let Cn=new zc;Cn.add(ie);let $i=new Pn(35,1,.1,1e4),Xd=new Kc(16777215,10789040,1.35);Cn.add(Xd);let ln=new jc(16775920,Math.max(0,Ve(_,1.8)));ln.castShadow=v,ln.shadow.mapSize.set(1024,1024),ln.shadow.bias=-2e-4,ln.shadow.normalBias=.6,ln.shadow.radius=3,Cn.add(ln,ln.target);let Er=new vr(1,1),du=new qc({opacity:Ye(Ve(E,.08),0,1),depthWrite:!1}),xs=new zn(Er,du);xs.receiveShadow=!0,xs.visible=v,Cn.add(xs),te.setClearColor(0,0),te.outputColorSpace=On,te.shadowMap.enabled=v,te.shadowMap.type=qf;let dn=vl(),vn=vl(),xn=vl(),Rn=vl(),ta=vl(),ts=vl(),Tr=[dn,vn,xn,Rn,ta,ts],ea=new $c,xl=new le,Sl=new vi(new G(0,0,1),0),na=new G,Ml=new G,Ss=new G,Ar=new G,bl=new G,S=new G,I=new G(1,0,0),q=[Math.floor(Z/2),0,0],z=1,F=1,lt=Ht,xt=0,mt=0,At=0,Ct=0,Gt=0,Zt=0,bt=0,Qt=!1,Me=!1,pe=null,me=0,qe=!1,yt=!1,tn=!0,se=!1,Sn=0,Dn=0,zi="flat",Ms=new Set,_e=window.matchMedia("(prefers-reduced-motion: reduce)"),Re=_e.matches,Hi=-1,Ee=-1,Zn=Xa.degToRad(Ve(R,0));function es(st){st!==zi&&(zi=st,ot.current.onStateChange?.(st))}function El(){if(dn.value===Hi&&vn.value===Ee)return;Hi=dn.value,Ee=vn.value;let st=Ye(dn.value,0,1),Et=st*(Mt.samples.length-1),jt=Math.floor(Et),kt=Math.min(jt+1,Mt.samples.length-1),Ne=Et-jt,ve=Mt.samples[jt],De=Mt.samples[kt];for(let Lt=0;Lt<at.length;Lt++)at[Lt]=ve[Lt]+(De[Lt]-ve[Lt])*Ne,at[Lt]+=(Mt.creased[Lt]-rt[Lt])*vn.value*(1-st);for(let Lt=0;Lt<Y.length;Lt+=3){let Je=Y[Lt]*3,Gn=Y[Lt+1]*3,Jn=Y[Lt+2]*3,Rr=at[Gn]-at[Je],Dr=at[Gn+1]-at[Je+1],Ur=at[Gn+2]-at[Je+2],bs=at[Jn]-at[Je],mu=at[Jn+1]-at[Je+1],Lr=at[Jn+2]-at[Je+2],b_=Dr*Lr-Ur*mu,E_=Ur*bs-Rr*Lr,T_=Rr*mu-Dr*bs,Yd=Math.hypot(b_,E_,T_)||1;wt[Lt]=b_/Yd,wt[Lt+1]=E_/Yd,wt[Lt+2]=T_/Yd}for(let Lt=0;Lt<Y.length;Lt++){let Je=Y[Lt]*3,Gn=Math.floor(Lt/3)*3,Jn=0,Rr=0,Dr=0;for(let bs of Vt[Y[Lt]]){let mu=wt[Gn]*wt[bs]+wt[Gn+1]*wt[bs+1]+wt[Gn+2]*wt[bs+2],Lr=Xa.smoothstep(mu,.88-(1-g)*.18,.98);Jn+=wt[bs]*Lr,Rr+=wt[bs+1]*Lr,Dr+=wt[bs+2]*Lr}let Ur=Math.hypot(Jn,Rr,Dr)||1;dt[Lt*3]=at[Je],dt[Lt*3+1]=at[Je+1],dt[Lt*3+2]=at[Je+2],ut[Lt*3]=Jn/Ur,ut[Lt*3+1]=Rr/Ur,ut[Lt*3+2]=Dr/Ur}L.attributes.position.needsUpdate=!0,L.attributes.normal.needsUpdate=!0,L.computeBoundingSphere(),L.computeBoundingBox(),Ut.value=Xa.smoothstep(st+vn.value,0,.4)}function L1(){let st=L.boundingBox;if(!st)return;let Et=1/0,jt=1/0,kt=-1/0,Ne=-1/0;for(let ve=0;ve<8;ve++){Ss.set(ve&1?st.max.x:st.min.x,ve&2?st.max.y:st.min.y,ve&4?st.max.z:st.min.z),Ss.applyMatrix4(ie.matrixWorld).project($i);let De=(Ss.x+1)*z/2,Lt=(1-Ss.y)*F/2;Et=Math.min(Et,De),kt=Math.max(kt,De),jt=Math.min(jt,Lt),Ne=Math.max(Ne,Lt)}Rt.style.transform=`translate3d(${Et}px, ${jt}px, 0)`,Rt.style.width=`${Math.max(24,kt-Et)}px`,Rt.style.height=`${Math.max(24,Ne-jt)}px`}function r_(st,Et){xl.set(st/z*2-1,1-Et/F*2),ea.setFromCamera(xl,$i)}function N1(st){if(Sn=0,qe||!yt||se||!tn||document.hidden)return;let Et=Dn?Math.min(.04,(st-Dn)/1e3):1/60;Dn=st;let jt=ot.current,kt=!1,Ne=Qt?Ve(jt.crumpleDuration,.55):Ve(jt.releaseDuration,.4);for(let De of Tr)kt=a_(De,Et,De===dn||De===vn?Ne:.42,Re||Me)||kt;if(me=Math.max(me,dn.value),El(),ie.rotation.set(ta.value,ts.value,Zn),Qt&&!Me&&jt.draggable){let De=L.attributes.position;na.set(0,0,0);for(let Lt=0;Lt<3;Lt++)Ar.fromBufferAttribute(De,q[Lt]),na.addScaledVector(Ar,I.getComponent(Lt));na.multiplyScalar(lt).applyEuler(ie.rotation),Sl.constant=-na.z,r_(xt,mt),ea.ray.intersectPlane(Sl,Ml)&&(xn.value=xn.target=Ml.x-na.x,Rn.value=Rn.target=Ml.y-na.y,xn.velocity=Rn.velocity=0)}ie.position.set(xn.value,Rn.value,0),ie.updateMatrixWorld(!0);let ve=L.boundingBox;if(ve){let De=1/0;for(let Lt=0;Lt<8;Lt++)Ss.set(Lt&1?ve.max.x:ve.min.x,Lt&2?ve.max.y:ve.min.y,Lt&4?ve.max.z:ve.min.z),Ss.applyMatrix4(ie.matrixWorld),De=Math.min(De,Ss.z);xs.position.z=De-lt*we*.08}te.render(Cn,$i),L1(),kt&&Mi()}function Mi(){!Sn&&!qe&&yt&&tn&&!document.hidden&&!se&&(Sn=requestAnimationFrame(N1))}function o_(){let st=ft.getBoundingClientRect();z=Math.max(1,st.width),F=Math.max(1,st.height),lt=Ht*Math.min(1,Math.max(1,z-48)/Ht,Math.max(1,F-48)/Ze),ie.scale.setScalar(lt),$i.aspect=z/F,$i.position.z=F/(2*Math.tan(Xa.degToRad($i.fov/2))),$i.updateProjectionMatrix(),$i.updateMatrixWorld(),te.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),te.setSize(z,F,!1);let Et=Math.max(z,F),jt=Xa.degToRad(Ve(M,-35));if(ln.position.set(Math.sin(jt)*Et,Math.cos(jt)*Et,Et*4),ln.shadow.camera.left=ln.shadow.camera.bottom=-Et,ln.shadow.camera.right=ln.shadow.camera.top=Et,ln.shadow.camera.near=1,ln.shadow.camera.far=Et*6,ln.shadow.camera.updateProjectionMatrix(),xs.position.z=-lt*we*.12,xs.scale.set(z*4,F*4,1),ft.style.setProperty("--pc-image-width",`${lt}px`),ft.style.setProperty("--pc-image-height",`${lt*de}px`),!Qt){let kt=Math.max(0,(z-lt)/2-16),Ne=Math.max(0,(F-lt*de)/2-16);xn.value=xn.target=Ye(xn.value,-kt,kt),Rn.value=Rn.target=Ye(Rn.value,-Ne,Ne)}Mi()}function wr(st=!1){if(!Qt)return;let Et=ot.current;Qt=!1,Rt.setAttribute("aria-pressed","false"),Rt.dataset.held="false";let jt=pe;if(pe=null,jt!==null&&Rt.hasPointerCapture(jt)&&Rt.releasePointerCapture(jt),Et.releaseBehavior==="stay"?(dn.target=dn.value,dn.velocity=0):(dn.target=0,vn.target=Et.releaseBehavior==="creased"?Math.max(vn.value,me*Ye(Ve(Et.creaseStrength,.18),0,1)):0),ta.target=ts.target=0,Et.returnToOrigin&&Et.releaseBehavior!=="stay")xn.target=Rn.target=0;else{let kt=L.boundingBox,Ne=Et.releaseBehavior==="stay"&&kt?kt.max.x-kt.min.x:1,ve=Et.releaseBehavior==="stay"&&kt?kt.max.y-kt.min.y:de,De=(Math.abs(Math.cos(Zn))*Ne+Math.abs(Math.sin(Zn))*ve)*lt/2,Lt=(Math.abs(Math.sin(Zn))*Ne+Math.abs(Math.cos(Zn))*ve)*lt/2,Je=Math.min(Math.max(0,Ve(Et.dragRadius,180)),Math.max(0,z/2-De-16)),Gn=Math.min(Math.max(0,Ve(Et.dragRadius,180)),Math.max(0,F/2-Lt-16)),Jn=!Re&&!Me&&performance.now()-Gt<90?.06:0;xn.target=Ye(xn.value+Zt*Jn,-Je,Je),Rn.target=Ye(Rn.value-bt*Jn,-Gn,Gn)}if(st||Me||Re)for(let kt of Tr)a_(kt,0,0,!0);Me=!1,es(Et.releaseBehavior==="stay"&&dn.target>.001?"crumpled":vn.target>.001?"creased":"flat"),Mi()}function l_(){wr(!0);for(let st of Tr)st.target=st.value=st.velocity=0;me=0,es("flat"),Mi()}Ft.current=l_,Kt.current=()=>wr(!0);function qd(){Qt=!0,me=dn.value,dn.target=Ye(Ve(ot.current.crumpleAmount,.85),0,1),Rt.setAttribute("aria-pressed","true"),Rt.dataset.held="true",es("holding"),Mi()}function c_(st){if(!yt||ot.current.disabled||Qt||st.button!==0||!st.isPrimary)return;let Et=ft.getBoundingClientRect();xt=At=st.clientX-Et.left,mt=Ct=st.clientY-Et.top,r_(xt,mt),ie.updateMatrixWorld(!0);let jt=ea.intersectObjects([ce,Vn],!1)[0];if(!jt?.face)return;st.preventDefault(),Rt.dataset.pointer="true",Rt.focus({preventScroll:!0});let{face:kt}=jt;q=[kt.a,kt.b,kt.c];let Ne=L.attributes.position;Ar.fromBufferAttribute(Ne,kt.a),bl.fromBufferAttribute(Ne,kt.b),S.fromBufferAttribute(Ne,kt.c),hs.getBarycoord(ie.worldToLocal(jt.point.clone()),Ar,bl,S,I),Me=!1,pe=st.pointerId,Zt=bt=0,Gt=performance.now(),Rt.setPointerCapture(st.pointerId),qd()}function u_(st){if(!Qt||st.pointerId!==pe||!ot.current.draggable)return;let Et=ft.getBoundingClientRect(),jt=performance.now(),kt=st.clientX-Et.left,Ne=st.clientY-Et.top,ve=Math.max(.008,(jt-Gt)/1e3);Zt=(kt-At)/ve,bt=(Ne-Ct)/ve,At=kt,Ct=Ne,Gt=jt,xt=Ye(kt,12,z-12),mt=Ye(Ne,12,F-12);let De=Re?0:Xa.degToRad(Ye(Ve(ot.current.dragRotation,10),0,60));ta.target=Ye(bt/1800,-1,1)*De,ts.target=Ye(Zt/1800,-1,1)*De,Mi()}function pu(st){st.pointerId===pe&&wr()}function h_(st){st.pointerId===pe&&wr(!0)}function Cr(){wr(!0)}function f_(){Rt.dataset.pointer="false",Cr()}function d_(st){if(!(ot.current.disabled||!yt)){if(Rt.dataset.pointer="false",st.key==="Escape"){st.preventDefault(),l_();return}if(st.key===" "||st.key==="Enter"){if(st.preventDefault(),st.repeat||Qt)return;Me=!0,qd(),a_(dn,0,0,!0),me=Math.max(me,dn.value)}else if(Qt&&Me&&ot.current.draggable&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(st.key)){st.preventDefault();let Et=st.shiftKey?30:12,jt=Math.max(0,Ve(ot.current.dragRadius,180));xn.target=Ye(xn.target+(st.key==="ArrowRight"?Et:st.key==="ArrowLeft"?-Et:0),-Math.min(jt,z/3),Math.min(jt,z/3)),Rn.target=Ye(Rn.target+(st.key==="ArrowUp"?Et:st.key==="ArrowDown"?-Et:0),-Math.min(jt,F/3),Math.min(jt,F/3)),Mi()}}}function p_(st){Me&&(st.key===" "||st.key==="Enter")&&(st.preventDefault(),wr(!0))}function m_(){Dn=0,document.hidden?Cr():Mi()}function g_(){Re=_e.matches,Re&&(ta.target=ts.target=0),Mi()}function __(st){st.preventDefault(),se=!0,Cr(),Rt.disabled=!0,et("error"),ot.current.onError?.(new Error("The WebGL context was lost."))}function y_(){se=!1,yt&&(et("ready"),Rt.disabled=ot.current.disabled,Mi())}Rt.addEventListener("pointerdown",c_),Rt.addEventListener("pointermove",u_),Rt.addEventListener("pointerup",pu),Rt.addEventListener("pointercancel",h_),Rt.addEventListener("lostpointercapture",pu),Rt.addEventListener("keydown",d_),Rt.addEventListener("keyup",p_),Rt.addEventListener("blur",f_),window.addEventListener("blur",Cr),document.addEventListener("visibilitychange",m_),_e.addEventListener("change",g_),zt.addEventListener("webglcontextlost",__),zt.addEventListener("webglcontextrestored",y_);let v_=new ResizeObserver(o_);v_.observe(ft);let x_=new IntersectionObserver(st=>{tn=st[0].isIntersecting,Dn=0,tn?Mi():Cr()});x_.observe(ft),El(),o_();let S_=new Zc;S_.setCrossOrigin("anonymous");function M_(st){return new Promise((Et,jt)=>{S_.load(st,kt=>{if(qe){kt.dispose(),Et(kt);return}Ms.add(kt),kt.colorSpace=On,kt.anisotropy=Math.min(8,te.capabilities.getMaxAnisotropy());let Ne=kt.image,ve=Ne.width/Ne.height,De=Ht/Ze,Lt=1,Je=1;r==="cover"?ve>De?Lt=De/ve:Je=ve/De:ve>De?Je=ve/De:Lt=De/ve,kt.repeat.set(Lt,Je),kt.offset.set((1-Lt)/2,(1-Je)/2),Et(kt)},void 0,()=>jt(new Error(`Unable to load paper image: ${st}. Remote images must allow CORS.`)))})}return e?Promise.all([M_(e),n?M_(n):Promise.resolve(null)]).then(([st,Et])=>{qe||(Et&&(Et.repeat.x*=-1,Et.offset.x=1-Et.offset.x),gt.map=st,it.map=Et||st,Tt.map=st,gt.needsUpdate=it.needsUpdate=Tt.needsUpdate=!0,yt=!0,et("ready"),Rt.disabled=ot.current.disabled,ot.current.onReady?.(),ot.current.autoCrumple&&qd(),Mi())}).catch(st=>{qe||(et("error"),ot.current.onError?.(st))}):(et("error"),ot.current.onError?.(new Error("PaperCrumple requires an image src."))),()=>{qe=!0,cancelAnimationFrame(Sn),pe!==null&&Rt.hasPointerCapture(pe)&&Rt.releasePointerCapture(pe),Ft.current=Kt.current=null,v_.disconnect(),x_.disconnect(),Rt.removeEventListener("pointerdown",c_),Rt.removeEventListener("pointermove",u_),Rt.removeEventListener("pointerup",pu),Rt.removeEventListener("pointercancel",h_),Rt.removeEventListener("lostpointercapture",pu),Rt.removeEventListener("keydown",d_),Rt.removeEventListener("keyup",p_),Rt.removeEventListener("blur",f_),window.removeEventListener("blur",Cr),document.removeEventListener("visibilitychange",m_),_e.removeEventListener("change",g_),zt.removeEventListener("webglcontextlost",__),zt.removeEventListener("webglcontextrestored",y_),L.dispose(),Er.dispose(),gt.dispose(),it.dispose(),Tt.dispose(),du.dispose(),$.dispose(),Ms.forEach(st=>st.dispose()),ln.shadow.dispose(),te.dispose()}},[e,n,i,s,r,p,u,d,b,m,h,_,M,v,E,R,D,P]),(0,ai.useEffect)(()=>{Ft.current?.()},[U]),(0,ai.useEffect)(()=>{H&&Kt.current?.()},[H]);let It=v?`drop-shadow(0 6px 10px rgb(0 0 0 / ${Ye(Ve(E,.08),0,1)}))`:void 0;return(0,qa.jsxs)("div",{ref:St,className:`paper-crumple ${V}`,style:{height:a,...Q},"data-status":J,children:[(0,qa.jsx)("canvas",{ref:vt,className:"paper-crumple-canvas","aria-hidden":"true",style:{visibility:J==="ready"?"visible":"hidden",filter:It}}),J!=="ready"&&(0,qa.jsx)("img",{className:"paper-crumple-fallback",src:e||void 0,alt:t,draggable:!1,style:{objectFit:r,transform:`translate(-50%, -50%) rotate(${R}deg)`,filter:It}}),(0,qa.jsx)("button",{ref:Pt,type:"button",className:"paper-crumple-hit",disabled:H||J!=="ready","aria-label":`${t}. Hold to crumple and drag. Keyboard: hold Space or Enter, arrow keys to move, Escape to reset.`,"aria-pressed":"false",style:{visibility:J==="ready"?"visible":"hidden"}}),(0,qa.jsx)("span",{className:"paper-crumple-focus","aria-hidden":"true"}),(0,qa.jsx)("span",{className:"paper-crumple-sr",role:"status",children:J==="loading"?"Loading interactive paper.":J==="error"?"Interactive paper unavailable. Showing the original image.":""})]})},w1=iU;var U1=Ya(fu()),Wd=document.querySelector("main"),sU=document.querySelector(".site-header"),aU=window.matchMedia("(prefers-reduced-motion: reduce)"),C1=!1,rU=e=>new Promise(t=>window.setTimeout(t,e));async function oU(e){let t=Math.ceil(window.innerWidth),n=Math.ceil(window.innerHeight-e),i=Wd.getBoundingClientRect(),s=document.createElement("div");s.className="page-crumple-capture",Object.assign(s.style,{position:"fixed",left:"-100000px",top:"0",width:`${t}px`,height:`${n}px`,overflow:"hidden",background:"#fafafa",pointerEvents:"none"});let a=Wd.cloneNode(!0);a.style.width=`${i.width}px`,a.style.marginLeft=`${i.left}px`,a.style.marginRight="0",a.style.transform=`translateY(${i.top-e}px)`,a.querySelector(".project-slider")?.classList.remove("gallery-active"),a.querySelectorAll('img[loading="lazy"]').forEach(r=>{r.loading="eager"}),s.append(a),document.body.append(s);try{return await PM(s,{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,1.5),backgroundColor:"#fafafa",skipFonts:!0,style:{position:"relative",left:"0",top:"0"}})}finally{s.remove()}}function lU(e,t){let n=document.createElement("div");n.className="page-crumple-backdrop",n.style.top=`${t}px`;let i=document.createElement("iframe");i.title="",i.setAttribute("aria-hidden","true"),i.setAttribute("sandbox","allow-same-origin"),i.tabIndex=-1,i.style.top=`${-t}px`,i.style.height=`calc(100% + ${t}px)`;let s=new Promise(a=>{i.addEventListener("load",a,{once:!0}),i.addEventListener("error",a,{once:!0})});return i.src=e.href,n.append(i),document.body.append(n),s}function R1(e,t){document.body.classList.add("page-crumple-active"),document.body.style.setProperty("--page-crumple-top",`${t}px`),Wd.classList.add("page-crumple-css-fallback"),window.setTimeout(()=>location.assign(e.href),850)}document.addEventListener("click",async e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;let t=e.target.closest("a[href]");if(!t||t.target||t.hasAttribute("download")||t.hasAttribute("data-glightbox")||!t.matches(".primary-button, .secondary-button, .choice-card, .wordmark"))return;let n=t.getAttribute("href");if(!n||n.startsWith("#"))return;let i=new URL(n,location.href);if(!(location.protocol==="file:"?i.protocol==="file:":i.origin===location.origin)||i.href===location.href||(e.preventDefault(),C1))return;if(C1=!0,aU.matches||!Wd){location.assign(i.href);return}let a=Math.max(0,Math.ceil(sU?.getBoundingClientRect().bottom||0)),r=lU(i,a),o=await oU(a).catch(()=>null);if(await Promise.race([r,rU(1e3)]),!o||!document.createElement("canvas").getContext("webgl2")){R1(i,a);return}let l=document.createElement("div");l.className="page-crumple-overlay",l.style.top=`${a}px`,document.body.append(l);let c=(0,D1.createRoot)(l),f=!1,p=()=>location.assign(i.href),u=()=>{f||(f=!0,l.remove(),R1(i,a))};c.render((0,U1.jsx)(w1,{src:o,alt:"Aktuelle Seite",width:Math.ceil(window.innerWidth),height:Math.ceil(window.innerHeight-a),sceneHeight:Math.ceil(window.innerHeight-a),imageFit:"cover",crumpleAmount:.98,crumpleDuration:.42,foldCount:8,foldSharpness:.8,wrinkleDepth:.9,shadowOpacity:.18,draggable:!1,autoCrumple:!0,onReady:()=>{f||(f=!0,document.body.classList.add("page-crumple-active"),window.setTimeout(()=>l.classList.add("is-falling"),470),window.setTimeout(p,1300))},onError:u})),window.setTimeout(()=>{f||u()},2400)});})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
