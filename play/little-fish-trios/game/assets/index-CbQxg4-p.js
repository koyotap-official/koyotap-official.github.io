(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Yi=7,fr=6;function Ul(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function va(n,e){const t=n.slice();for(let i=t.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}function bi(n){const e=Array(fr).fill(0);for(const t of n)e[t]=e[t]+1;return e}function Ti(n){return{bubbles:n.bubbles.map(e=>({id:e.id,fish:e.fish.slice()})),tray:n.tray.slice(),collected:n.collected.slice(),moves:n.moves,status:n.status,solution:n.solution.slice()}}function Nl(n,e,t){const i=bi(n),r=bi(e),s=[];let o=e.length;for(let a=0;a<n.length;a++){const l=[];for(let u=0;u<fr;u++){if(!i[u])continue;const h=r[u]+1,p=o+(h===3?-2:1),d=h===2||r.some((g,v)=>v!==u&&g===2);(p<=5||p===6&&d)&&l.push(u)}if(!l.length)throw new Error("Fish conservation cannot produce a safe stream");const c=l[Math.floor(t()*l.length)];i[c]=i[c]-1,r[c]=r[c]+1,r[c]===3?(r[c]=0,o-=2):o++,s.push(c)}return s}function Fl(n,e,t){const i=Math.min(e.length,n.length),r=va(e,t),s=[];let o=0;for(let l=0;l<i;l++){const c=n.length-o,u=i-l,h=Math.max(1,c-(u-1)*3),p=Math.min(3,c-(u-1)),d=h+Math.floor(t()*(p-h+1));s.push({id:r[l],fish:n.slice(o,o+d)}),o+=d}const a=s.map(l=>l.id);for(const l of r.slice(i))s.push({id:l,fish:[]});return{bubbles:va(s,t),solution:a}}function rs(n){const e=Number.isFinite(n)?Math.max(1,Math.min(1e6,Math.floor(n))):1,t=(e-1)%30,i=t<8?4:t<18?5:6,r=Ul(Math.imul(e,2654435761)^5435135),s=Array.from({length:i},(u,h)=>Array(6).fill(h)).flat(),o=[0,0,0,1,1,1,2,2,2,0,1,0,1,0,1,2,2,2,3,3,3,3,3,3],a=t===0?o:Nl(s,[],r);let c=Fl(a,Array.from({length:12},(u,h)=>`b${h}`),r);if(t===0){const u=[2,2,3,1,2,3,1,2,3,1,2,2];let h=0;const p=u.map((d,g)=>{const v={id:`b${g}`,fish:o.slice(h,h+d)};return h+=d,v});c={bubbles:p,solution:p.map(d=>d.id)}}return{level:e,total:s.length,...c,tray:[],collected:Array(fr).fill(0),moves:0,status:"playing",history:[]}}function Ol(n,e){const t=n.slice(),i=n.lastIndexOf(e),r=i<0?n.length:i+1,s=n.slice();s.splice(r,0,e);const o=s.flatMap((u,h)=>u===e?[h]:[]),a=o.length>=3?o.slice(-3):[],l=new Set(a),c=s.filter((u,h)=>!l.has(h));return{insertIndex:r,trayBefore:t,trayWithFish:s,matchedIndices:a,trayAfter:c}}function Gc(n,e,t){const i=n.bubbles.find(h=>h.id===e);if(n.status!=="playing"||!i?.fish.length||t!==null&&(!Number.isInteger(t)||t<0||t>=i.fish.length))return{state:n,event:{type:"invalid",fish:[],matched:[],steps:[]}};const r={...n,...Ti(n),history:[...n.history.slice(-99),Ti(n)]},s=r.bubbles.find(h=>h.id===e),o=[],a=[],l=[],c=t===null?s.fish.length:1;r.moves++;for(let h=0;h<c;h++){const p=t??h,d=s.fish.splice(t??0,1)[0];o.push(d);const g=Ol(r.tray,d);if(r.tray=g.trayAfter.slice(),g.matchedIndices.length&&(r.collected[d]=r.collected[d]+3,a.push(d)),l.push({kind:d,sourceIndex:p,...g,collectedAfter:r.collected.slice()}),r.tray.length>=Yi){r.status="lost";break}}!r.tray.length&&r.bubbles.every(h=>!h.fish.length)&&(r.status="won");const u=r.status==="won"?"win":r.status==="lost"?"lose":a.length?"match":"move";return{state:r,event:{type:u,fish:o,matched:a,steps:l}}}function Wc(n,e,t){return Gc(n,e,t)}function Xc(n){const e=n.history[n.history.length-1];return e?{...n,...Ti(e),history:n.history.slice(0,-1)}:n}function qc(n){if(n.status!=="playing")return n;const e=n.tray.length===6&&bi(n.tray).every(l=>l<=1),t=e?[]:n.tray.slice(),i=[...n.bubbles.flatMap(l=>l.fish),...e?n.tray:[]];if(!i.length)return n;const r=Math.imul(n.level,19491001)^Math.imul(n.moves+1,1234567)^n.history.length,s=Ul(r),o=Nl(i,t,s),a=Fl(o,n.bubbles.map(l=>l.id),s);return{...n,...a,tray:t,moves:n.moves+1,history:[...n.history.slice(-99),Ti(n)]}}function Yc(n){if(n.status!=="playing")return null;const e=bi(n.tray);let t=null,i=-1;for(const r of n.bubbles)for(let s=0;s<r.fish.length;s++){const o=r.fish[s],a=e[o];a<=i||Ol(n.tray,o).trayAfter.length>=Yi||(t={bubbleId:r.id,fishIndex:s},i=a)}return t}function tr(n,e,t){return typeof n=="number"&&Number.isInteger(n)&&n>=e&&n<=t}function Js(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function xa(n,e){return Array.isArray(n)&&n.length<=e&&n.every(t=>tr(t,0,fr-1))}function Ma(n,e){if(!Js(n)||!Array.isArray(n.bubbles)||n.bubbles.length<1||n.bubbles.length>12||!xa(n.tray,Yi)||bi(n.tray).some(s=>s>2)||!Array.isArray(n.collected)||n.collected.length!==fr||!n.collected.every(s=>tr(s,0,36)&&s%3===0)||!tr(n.moves,0,1e7)||!["playing","won","lost"].includes(String(n.status)))return!1;const t=new Set,i=n.tray.slice();for(const s of n.bubbles){if(!Js(s)||typeof s.id!="string"||!s.id.length||s.id.length>48||t.has(s.id)||!xa(s.fish,3))return!1;t.add(s.id),i.push(...s.fish)}return!Array.isArray(n.solution)||n.solution.length>12||!n.solution.every(s=>typeof s=="string"&&t.has(s))||new Set(n.solution).size!==n.solution.length||bi(i).some((s,o)=>(s+n.collected[o])%3!==0)||i.length+n.collected.reduce((s,o)=>s+o,0)!==e?!1:n.status==="won"?i.length===0:n.status==="lost"?n.tray.length===Yi:n.status==="playing"&&n.tray.length<Yi&&i.length>0}function $c(n){if(!Js(n)||!tr(n.level,1,1e6)||!tr(n.total,3,36)||n.total%3!==0)return null;const e=n.total;return!Ma(n,e)||!Array.isArray(n.history)||n.history.length>100||!n.history.every(t=>Ma(t,e))?null:{level:n.level,total:e,...Ti(n),history:n.history.map(t=>Ti(t))}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="180",Zc=0,Sa=1,Jc=2,Bl=1,Kc=2,xn=3,In=0,zt=1,on=2,Pn=0,Si=1,ya=2,Ea=3,ba=4,jc=5,qn=100,Qc=101,eu=102,tu=103,nu=104,iu=200,ru=201,su=202,ou=203,Ks=204,js=205,au=206,lu=207,cu=208,uu=209,hu=210,fu=211,du=212,pu=213,mu=214,Qs=0,eo=1,to=2,Ai=3,no=4,io=5,ro=6,so=7,zl=0,gu=1,_u=2,Ln=0,vu=1,xu=2,Mu=3,Su=4,yu=5,Eu=6,bu=7,kl=300,wi=301,Ri=302,oo=303,ao=304,ss=306,lo=1e3,Zn=1001,co=1002,en=1003,Tu=1004,yr=1005,an=1006,fs=1007,Jn=1008,un=1009,Hl=1010,Vl=1011,nr=1012,Zo=1013,Kn=1014,Mn=1015,dr=1016,Jo=1017,Ko=1018,ir=1020,Gl=35902,Wl=35899,Xl=1021,ql=1022,Qt=1023,rr=1026,sr=1027,Yl=1028,jo=1029,$l=1030,Qo=1031,ea=1033,Jr=33776,Kr=33777,jr=33778,Qr=33779,uo=35840,ho=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,vo=37808,xo=37809,Mo=37810,So=37811,yo=37812,Eo=37813,bo=37814,To=37815,Ao=37816,wo=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Do=36492,Io=36494,Uo=36495,No=36283,Fo=36284,Oo=36285,Bo=36286,Au=3200,wu=3201,Zl=0,Ru=1,Cn="",Ft="srgb",Ci="srgb-linear",ts="linear",lt="srgb",ii=7680,Ta=519,Cu=512,Pu=513,Lu=514,Jl=515,Du=516,Iu=517,Uu=518,Nu=519,Aa=35044,wa="300 es",ln=2e3,ns=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const $i=Math.PI/180,or=180/Math.PI;function ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function ta(n,e){return(n%e+e)%e}function Fu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ou(n,e,t){return n!==e?(t-n)/(e-n):0}function Zi(n,e,t){return(1-t)*n+t*e}function Bu(n,e,t,i){return Zi(n,e,1-Math.exp(-t*i))}function zu(n,e=1){return e-Math.abs(ta(n,e*2)-e)}function ku(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gu(n,e){return n+Math.random()*(e-n)}function Wu(n){return n*(.5-Math.random())}function Xu(n){n!==void 0&&(Ra=n);let e=Ra+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qu(n){return n*$i}function Yu(n){return n*or}function $u(n){return(n&n-1)===0&&n!==0}function Zu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ku(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),p=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ds={DEG2RAD:$i,RAD2DEG:or,generateUUID:ei,clamp:Qe,euclideanModulo:ta,mapLinear:Fu,inverseLerp:Ou,lerp:Zi,damp:Bu,pingpong:zu,smoothstep:ku,smootherstep:Hu,randInt:Vu,randFloat:Gu,randFloatSpread:Wu,seededRandom:Xu,degToRad:qu,radToDeg:Yu,isPowerOfTwo:$u,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Ku,normalize:Dt,denormalize:vi};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const p=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==p||c!==d||u!==g){let m=1-a;const f=l*p+c*d+u*g+h*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const I=Math.sqrt(b),L=Math.atan2(I,f*T);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const S=a*T;if(l=l*m+p*S,c=c*m+d*S,u=u*m+g*S,h=h*m+v*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-a*d,e[t+2]=c*g+u*d+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),p=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ps.copy(this).projectOnVector(e),this.sub(ps)}reflect(e){return this.sub(ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new F,Ca=new pr;class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],v=r[0],m=r[3],f=r[6],T=r[1],b=r[4],S=r[7],I=r[2],L=r[5],C=r[8];return s[0]=o*v+a*T+l*I,s[3]=o*m+a*b+l*L,s[6]=o*f+a*S+l*C,s[1]=c*v+u*T+h*I,s[4]=c*m+u*b+h*L,s[7]=c*f+u*S+h*C,s[2]=p*v+d*T+g*I,s[5]=p*m+d*b+g*L,s[8]=p*f+d*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,d=c*s-o*l,g=t*h+i*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=p*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ms.makeScale(e,t)),this}rotate(e){return this.premultiply(ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ms=new Ye;function Kl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ju(){const n=ar("canvas");return n.style.display="block",n}const Pa={};function lr(n){n in Pa||(Pa[n]=!0,console.warn(n))}function Qu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const La=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Da=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eh(){const n={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ci]:{primaries:e,whitePoint:i,transfer:ts,toXYZ:La,fromXYZ:Da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:La,fromXYZ:Da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const st=eh();function Sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ri;class th{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ri===void 0&&(ri=ar("canvas")),ri.width=e.width,ri.height=e.height;const r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ri}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Sn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sn(t[i]/255)*255):t[i]=Sn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nh=0;class na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gs(r[o].image)):s.push(gs(r[o]))}else s=gs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?th.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ih=0;const _s=new F;class Ut extends Ii{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Zn,r=Zn,s=an,o=Jn,a=Qt,l=un,c=Ut.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ei(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_s).x}get height(){return this.source.getSize(_s).y}get depth(){return this.source.getSize(_s).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=kl;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(d+1)/2,I=(f+1)/2,L=(u+p)/4,C=(h+v)/4,O=(g+m)/4;return b>S&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=L/i,s=C/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=L/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(p-u)/T,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ut(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends rh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jl extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sh extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(s,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),br.subVectors(this.max,Bi),si.subVectors(e.a,Bi),oi.subVectors(e.b,Bi),ai.subVectors(e.c,Bi),En.subVectors(oi,si),bn.subVectors(ai,oi),On.subVectors(si,ai);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-On.z,On.y,En.z,0,-En.x,bn.z,0,-bn.x,On.z,0,-On.x,-En.y,En.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!vs(t,si,oi,ai,br)||(t=[1,0,0,0,1,0,0,0,1],!vs(t,si,oi,ai,br))?!1:(Tr.crossVectors(En,bn),t=[Tr.x,Tr.y,Tr.z],vs(t,si,oi,ai,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new F,new F,new F,new F,new F,new F,new F,new F],$t=new F,Er=new mr,si=new F,oi=new F,ai=new F,En=new F,bn=new F,On=new F,Bi=new F,br=new F,Tr=new F,Bn=new F;function vs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bn.fromArray(n,s);const a=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=i.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oh=new mr,zi=new F,xs=new F;class ia{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(xs)),this.expandByPoint(zi.copy(e.center).sub(xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new F,Ms=new F,Ar=new F,Tn=new F,Ss=new F,wr=new F,ys=new F;class ah{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ms.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Ms);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=Tn.dot(this.direction),l=-Tn.dot(Ar),c=Tn.lengthSq(),u=Math.abs(1-o*o);let h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=s*u,h>=0)if(p>=-g)if(p<=g){const v=1/u;h*=v,p*=v,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ms).addScaledVector(Ar,p),d}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,s){Ss.subVectors(t,e),wr.subVectors(i,e),ys.crossVectors(Ss,wr);let o=this.direction.dot(ys),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const l=a*this.direction.dot(wr.crossVectors(Tn,wr));if(l<0)return null;const c=a*this.direction.dot(Ss.cross(Tn));if(c<0||l+c>o)return null;const u=-a*Tn.dot(ys);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,h,p,d,g,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,p,d,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,h,p,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+v,t[1]=l*h,t[5]=v*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-v*h}else if(e.order==="XZY"){const p=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),An.crossVectors(i,Vt),An.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),An.crossVectors(i,Vt)),An.normalize(),Rr.crossVectors(Vt,An),r[0]=An.x,r[4]=Rr.x,r[8]=Vt.x,r[1]=An.y,r[5]=Rr.y,r[9]=Vt.y,r[2]=An.z,r[6]=Rr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],T=i[3],b=i[7],S=i[11],I=i[15],L=r[0],C=r[4],O=r[8],y=r[12],M=r[1],D=r[5],V=r[9],W=r[13],j=r[2],$=r[6],K=r[10],re=r[14],Z=r[3],fe=r[7],_e=r[11],Se=r[15];return s[0]=o*L+a*M+l*j+c*Z,s[4]=o*C+a*D+l*$+c*fe,s[8]=o*O+a*V+l*K+c*_e,s[12]=o*y+a*W+l*re+c*Se,s[1]=u*L+h*M+p*j+d*Z,s[5]=u*C+h*D+p*$+d*fe,s[9]=u*O+h*V+p*K+d*_e,s[13]=u*y+h*W+p*re+d*Se,s[2]=g*L+v*M+m*j+f*Z,s[6]=g*C+v*D+m*$+f*fe,s[10]=g*O+v*V+m*K+f*_e,s[14]=g*y+v*W+m*re+f*Se,s[3]=T*L+b*M+S*j+I*Z,s[7]=T*C+b*D+S*$+I*fe,s[11]=T*O+b*V+S*K+I*_e,s[15]=T*y+b*W+S*re+I*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*p+i*c*p+r*a*d-i*l*d)+v*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=h*m*c-v*p*c+v*l*d-a*m*d-h*l*f+a*p*f,b=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,S=u*v*c-g*h*c+g*a*d-o*v*d-u*a*f+o*h*f,I=g*h*l-u*v*l-g*a*p+o*v*p+u*a*m-o*h*m,L=t*T+i*b+r*S+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=T*C,e[1]=(v*p*s-h*m*s-v*r*d+i*m*d+h*r*f-i*p*f)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*f+i*l*f)*C,e[3]=(h*l*s-a*p*s-h*r*c+i*p*c+a*r*d-i*l*d)*C,e[4]=b*C,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*C,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*d+t*l*d)*C,e[8]=S*C,e[9]=(g*h*s-u*v*s-g*i*d+t*v*d+u*i*f-t*h*f)*C,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*C,e[12]=I*C,e[13]=(u*v*r-g*h*r+g*i*p-t*v*p-u*i*m+t*h*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,d=s*u,g=s*h,v=o*u,m=o*h,f=a*h,T=l*c,b=l*u,S=l*h,I=i.x,L=i.y,C=i.z;return r[0]=(1-(v+f))*I,r[1]=(d+S)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(d-S)*L,r[5]=(1-(p+f))*L,r[6]=(m+T)*L,r[7]=0,r[8]=(g+b)*C,r[9]=(m-T)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=li.set(r[0],r[1],r[2]).length();const o=li.set(r[4],r[5],r[6]).length(),a=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/o,h=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ln,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===ln)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ns)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ln,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),p=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===ln)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===ns)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const li=new F,Zt=new Mt,lh=new F(0,0,0),ch=new F(1,1,1),An=new F,Rr=new F,Vt=new F,Ia=new Mt,Ua=new pr;class hn{constructor(e=0,t=0,i=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ia,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uh=0;const Na=new F,ci=new pr,mn=new Mt,Cr=new F,ki=new F,hh=new F,fh=new pr,Fa=new F(1,0,0),Oa=new F(0,1,0),Ba=new F(0,0,1),za={type:"added"},dh={type:"removed"},ui={type:"childadded",child:null},Es={type:"childremoved",child:null};class Rt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new F,t=new hn,i=new pr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,t){return Na.copy(e).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ki,Cr,this.up):mn.lookAt(Cr,ki,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(mn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(za),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh),Es.child=e,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(za),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new F,gn=new F,bs=new F,_n=new F,hi=new F,fi=new F,ka=new F,Ts=new F,As=new F,ws=new F,Rs=new xt,Cs=new xt,Ps=new xt;class jt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),gn.subVectors(i,t),bs.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(gn),l=Jt.dot(bs),c=gn.dot(gn),u=gn.dot(bs),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Rs.setScalar(0),Cs.setScalar(0),Ps.setScalar(0),Rs.fromBufferAttribute(e,t),Cs.fromBufferAttribute(e,i),Ps.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rs,s.x),o.addScaledVector(Cs,s.y),o.addScaledVector(Ps,s.z),o}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),gn.subVectors(e,t),Jt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Jt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hi.subVectors(r,i),fi.subVectors(s,i),Ts.subVectors(e,i);const l=hi.dot(Ts),c=fi.dot(Ts);if(l<=0&&c<=0)return t.copy(i);As.subVectors(e,r);const u=hi.dot(As),h=fi.dot(As);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hi,o);ws.subVectors(e,s);const d=hi.dot(ws),g=fi.dot(ws);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ka.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(ka,a);const f=1/(m+v+p);return o=v*f,a=p*f,t.copy(i).addScaledVector(hi,o).addScaledVector(fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ls(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=ta(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ls(o,s,e+1/3),this.g=Ls(o,s,e),this.b=Ls(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=ec[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return st.workingToColorSpace(Pt.copy(this),e),Math.round(Qe(Pt.r*255,0,255))*65536+Math.round(Qe(Pt.g*255,0,255))*256+Math.round(Qe(Pt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ft){st.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Pr);const i=Zi(wn.h,Pr.h,t),r=Zi(wn.s,Pr.s,t),s=Zi(wn.l,Pr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new it;it.NAMES=ec;let ph=0;class gr extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Si,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=js,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==js&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rn extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,Lr=new Ee;let mh=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Aa,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class tc extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nc extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gh=0;const Yt=new Mt,Ds=new Rt,di=new F,Gt=new mr,Hi=new mr,bt=new F;class tn extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?nc:tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Gt.min,Hi.min),Gt.expandByPoint(bt),bt.addVectors(Gt.max,Hi.max),Gt.expandByPoint(bt)):(Gt.expandByPoint(Hi.min),Gt.expandByPoint(Hi.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(e,c),bt.add(di)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new F,l[O]=new F;const c=new F,u=new F,h=new F,p=new Ee,d=new Ee,g=new Ee,v=new F,m=new F;function f(O,y,M){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,O),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(v),a[y].add(v),a[M].add(v),l[O].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,y=T.length;O<y;++O){const M=T[O],D=M.start,V=M.count;for(let W=D,j=D+V;W<j;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new F,S=new F,I=new F,L=new F;function C(O){I.fromBufferAttribute(r,O),L.copy(I);const y=a[O];b.copy(y),b.sub(I.multiplyScalar(I.dot(y))).normalize(),S.crossVectors(L,y);const D=S.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,y=T.length;O<y;++O){const M=T[O],D=M.start,V=M.count;for(let W=D,j=D+V;W<j;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new cn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=e(p,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new Mt,zn=new ah,Dr=new ia,Va=new F,Ir=new F,Ur=new F,Nr=new F,Is=new F,Fr=new F,Ga=new F,Or=new F;class ut extends Rt{constructor(e=new tn,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Is.fromBufferAttribute(h,e),o?Fr.addScaledVector(Is,u):Fr.addScaledVector(Is.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Dr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Dr,Va)===null||zn.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(Ha.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Ha),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,I=b;S<I;S+=3){const L=a.getX(S),C=a.getX(S+1),O=a.getX(S+2);r=Br(this,f,e,i,c,u,h,L,C,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const T=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=Br(this,o,e,i,c,u,h,T,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,I=b;S<I;S+=3){const L=S,C=S+1,O=S+2;r=Br(this,f,e,i,c,u,h,L,C,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const T=m,b=m+1,S=m+2;r=Br(this,o,e,i,c,u,h,T,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function _h(n,e,t,i,r,s,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===In,a),l===null)return null;Or.copy(a),Or.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:n}}function Br(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ir),n.getVertexPosition(l,Ur),n.getVertexPosition(c,Nr);const u=_h(n,e,t,i,Ir,Ur,Nr,Ga);if(u){const h=new F;jt.getBarycoord(Ga,Ir,Ur,Nr,h),r&&(u.uv=jt.getInterpolatedAttribute(r,a,l,c,h,new Ee)),s&&(u.uv1=jt.getInterpolatedAttribute(s,a,l,c,h,new Ee)),o&&(u.normal=jt.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new F,materialIndex:0};jt.getNormal(Ir,Ur,Nr,p.normal),u.face=p,u.barycoord=h}return u}class Ui extends tn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(v,m,f,T,b,S,I,L,C,O,y){const M=S/C,D=I/O,V=S/2,W=I/2,j=L/2,$=C+1,K=O+1;let re=0,Z=0;const fe=new F;for(let _e=0;_e<K;_e++){const Se=_e*D-W;for(let He=0;He<$;He++){const Je=He*M-V;fe[v]=Je*T,fe[m]=Se*b,fe[f]=j,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[f]=L>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(He/C),h.push(1-_e/O),re+=1}}for(let _e=0;_e<O;_e++)for(let Se=0;Se<C;Se++){const He=p+Se+$*_e,Je=p+Se+$*(_e+1),Ke=p+(Se+1)+$*(_e+1),Ze=p+(Se+1)+$*_e;l.push(He,Je,Ze),l.push(Je,Ke,Ze),Z+=6}a.addGroup(d,Z,y),d+=Z,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Pi(n[t]);for(const r in i)e[r]=i[r]}return e}function vh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ic(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const xh={clone:Pi,merge:It};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new F,Wa=new Ee,Xa=new Ee;class Kt extends rc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Wa,Xa),t.subVectors(Xa,Wa)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class yh extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Kt(pi,mi,e,t);s.layers=this.layers,this.add(s);const o=new Kt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Kt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sc extends Ut{constructor(e=[],t=wi,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Pn});s.uniforms.tEquirect.value=t;const o=new ut(r,s),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=an),new yh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Wt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bh={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Th extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ns=new F,Ah=new F,wh=new Ye;class Wn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ns.subVectors(i,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ns),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wh.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ia,Rh=new Ee(.5,.5),zr=new F;class ra{constructor(e=new Wn,t=new Wn,i=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ln,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],p=s[6],d=s[7],g=s[8],v=s[9],m=s[10],f=s[11],T=s[12],b=s[13],S=s[14],I=s[15];if(r[0].setComponents(c-o,d-u,f-g,I-T).normalize(),r[1].setComponents(c+o,d+u,f+g,I+T).normalize(),r[2].setComponents(c+a,d+h,f+v,I+b).normalize(),r[3].setComponents(c-a,d-h,f-v,I-b).normalize(),i)r[4].setComponents(l,p,m,S).normalize(),r[5].setComponents(c-l,d-p,f-m,I-S).normalize();else if(r[4].setComponents(c-l,d-p,f-m,I-S).normalize(),t===ln)r[5].setComponents(c+l,d+p,f+m,I+S).normalize();else if(t===ns)r[5].setComponents(l,p,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=Rh.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends Ut{constructor(e,t,i=Kn,r,s,o,a=en,l=en,c,u=rr,h=1){if(u!==rr&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ac extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sa extends tn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new F,u=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const d=i+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ee:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new Mt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Qe(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oa extends fn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ch extends oa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function aa(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const kr=new F,Fs=new aa,Os=new aa,Bs=new aa;class Ph extends fn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(kr.subVectors(r[0],r[1]).add(r[0]),c=kr);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(kr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Fs.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,v,m),Os.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,v,m),Bs.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Fs.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),Os.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Bs.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return i.set(Fs.calc(l),Os.calc(l),Bs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qa(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Lh(n,e){const t=1-n;return t*t*e}function Dh(n,e){return 2*(1-n)*n*e}function Ih(n,e){return n*n*e}function Ji(n,e,t,i){return Lh(n,e)+Dh(n,t)+Ih(n,i)}function Uh(n,e){const t=1-n;return t*t*t*e}function Nh(n,e){const t=1-n;return 3*t*t*n*e}function Fh(n,e){return 3*(1-n)*n*n*e}function Oh(n,e){return n*n*n*e}function Ki(n,e,t,i,r){return Uh(n,e)+Nh(n,t)+Fh(n,i)+Oh(n,r)}class lc extends fn{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ki(e,r.x,s.x,o.x,a.x),Ki(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bh extends fn{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ki(e,r.x,s.x,o.x,a.x),Ki(e,r.y,s.y,o.y,a.y),Ki(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cc extends fn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zh extends fn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends fn{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends fn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y),Ji(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hc extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(qa(a,l.x,c.x,u.x,h.x),qa(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}var zo=Object.freeze({__proto__:null,ArcCurve:Ch,CatmullRomCurve3:Ph,CubicBezierCurve:lc,CubicBezierCurve3:Bh,EllipseCurve:oa,LineCurve:cc,LineCurve3:zh,QuadraticBezierCurve:uc,QuadraticBezierCurve3:kh,SplineCurve:hc});class Hh extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new zo[r.type]().fromJSON(r))}return this}}class Ya extends Hh{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new cc(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new uc(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new lc(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new oa(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fc extends Ya{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ya().fromJSON(r))}return this}}function Vh(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=dc(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Yh(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let p=t;p<r;p+=t){const d=n[p],g=n[p+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return cr(s,o,t,a,l,c,0),o}function dc(n,e,t,i,r){let s;if(r===sf(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=$a(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=$a(o/i|0,n[o],n[o+1],s);return s&&Li(s,s.next)&&(hr(s),s=s.next),s}function Qn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Li(t,t.next)||gt(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function cr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&jh(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Wh(n,i,r,s):Gh(n)){e.push(l.i,n.i,c.i),hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Xh(Qn(n),e),cr(n,e,t,i,r,s,2)):o===2&&qh(n,e,t,i,r,s):cr(Qn(n),e,t,i,r,s,1);break}}}function Gh(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),p=Math.max(r,s,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=d&&Gi(r,a,s,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wh(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,p=o.y,d=Math.min(a,l,c),g=Math.min(u,h,p),v=Math.max(a,l,c),m=Math.max(u,h,p),f=ko(d,g,e,t,i),T=ko(v,m,e,t,i);let b=n.prevZ,S=n.nextZ;for(;b&&b.z>=f&&S&&S.z<=T;){if(b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&Gi(a,u,l,h,c,p,b.x,b.y)&&gt(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Gi(a,u,l,h,c,p,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=f;){if(b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&Gi(a,u,l,h,c,p,b.x,b.y)&&gt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=T;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Gi(a,u,l,h,c,p,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Xh(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Li(i,r)&&mc(i,t,t.next,r)&&ur(i,r)&&ur(r,i)&&(e.push(i.i,t.i,r.i),hr(t),hr(t.next),t=n=r),t=t.next}while(t!==n);return Qn(t)}function qh(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tf(o,a)){let l=gc(o,a);o=Qn(o,o.next),l=Qn(l,l.next),cr(o,e,t,i,r,s,0),cr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Yh(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=dc(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ef(c))}r.sort($h);for(let s=0;s<r.length;s++)t=Zh(r[s],t);return t}function $h(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Zh(n,e){const t=Jh(n,e);if(!t)return e;const i=gc(t,n);return Qn(i,i.next),Qn(t,t.next)}function Jh(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Li(n,t))return t;do{if(Li(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&pc(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);ur(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Kh(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Kh(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function jh(n,e,t,i){let r=n;do r.z===0&&(r.z=ko(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Qh(r)}function Qh(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function ko(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ef(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pc(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Gi(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&pc(n,e,t,i,r,s,o,a)}function tf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nf(n,e)&&(ur(n,e)&&ur(e,n)&&rf(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Li(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Li(n,e){return n.x===e.x&&n.y===e.y}function mc(n,e,t,i){const r=Vr(gt(n,e,t)),s=Vr(gt(n,e,i)),o=Vr(gt(t,i,n)),a=Vr(gt(t,i,e));return!!(r!==s&&o!==a||r===0&&Hr(n,t,e)||s===0&&Hr(n,i,e)||o===0&&Hr(t,n,i)||a===0&&Hr(t,e,i))}function Hr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vr(n){return n>0?1:n<0?-1:0}function nf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ur(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function rf(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gc(n,e){const t=Ho(n.i,n.x,n.y),i=Ho(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function $a(n,e,t,i){const r=Ho(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ho(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sf(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class of{static triangulate(e,t,i=2){return Vh(e,t,i)}}class xi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Za(e),Ja(i,e);let o=e.length;t.forEach(Za);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ja(i,t[l]);const a=of.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Za(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ja(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class la extends tn{constructor(e=new fc([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:af;let b,S=!1,I,L,C,O;f&&(b=f.getSpacedPoints(u),S=!0,p=!1,I=f.computeFrenetFrames(u,!1),L=new F,C=new F,O=new F),p||(m=0,d=0,g=0,v=0);const y=a.extractPoints(c);let M=y.shape;const D=y.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let ae=0,ie=D.length;ae<ie;ae++){const ee=D[ae];xi.isClockWise(ee)&&(D[ae]=ee.reverse())}}function W(ae){const ee=10000000000000001e-36;let te=ae[0];for(let de=1;de<=ae.length;de++){const le=de%ae.length,pe=ae[le],Ge=pe.x-te.x,ze=pe.y-te.y,E=Ge*Ge+ze*ze,_=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(te.x),Math.abs(te.y)),k=ee*_*_;if(E<=k){ae.splice(le,1),de--;continue}te=pe}}W(M),D.forEach(W);const j=D.length,$=M;for(let ae=0;ae<j;ae++){const ie=D[ae];M=M.concat(ie)}function K(ae,ie,ee){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ie,ee)}const re=M.length;function Z(ae,ie,ee){let te,de,le;const pe=ae.x-ie.x,Ge=ae.y-ie.y,ze=ee.x-ae.x,E=ee.y-ae.y,_=pe*pe+Ge*Ge,k=pe*E-Ge*ze;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(_),se=Math.sqrt(ze*ze+E*E),J=ie.x-Ge/Y,Re=ie.y+pe/Y,he=ee.x-E/se,Ce=ee.y+ze/se,Ae=((he-J)*E-(Ce-Re)*ze)/(pe*E-Ge*ze);te=J+pe*Ae-ae.x,de=Re+Ge*Ae-ae.y;const ce=te*te+de*de;if(ce<=2)return new Ee(te,de);le=Math.sqrt(ce/2)}else{let Y=!1;pe>Number.EPSILON?ze>Number.EPSILON&&(Y=!0):pe<-Number.EPSILON?ze<-Number.EPSILON&&(Y=!0):Math.sign(Ge)===Math.sign(E)&&(Y=!0),Y?(te=-Ge,de=pe,le=Math.sqrt(_)):(te=pe,de=Ge,le=Math.sqrt(_/2))}return new Ee(te/le,de/le)}const fe=[];for(let ae=0,ie=$.length,ee=ie-1,te=ae+1;ae<ie;ae++,ee++,te++)ee===ie&&(ee=0),te===ie&&(te=0),fe[ae]=Z($[ae],$[ee],$[te]);const _e=[];let Se,He=fe.concat();for(let ae=0,ie=j;ae<ie;ae++){const ee=D[ae];Se=[];for(let te=0,de=ee.length,le=de-1,pe=te+1;te<de;te++,le++,pe++)le===de&&(le=0),pe===de&&(pe=0),Se[te]=Z(ee[te],ee[le],ee[pe]);_e.push(Se),He=He.concat(Se)}let Je;if(m===0)Je=xi.triangulateShape($,D);else{const ae=[],ie=[];for(let ee=0;ee<m;ee++){const te=ee/m,de=d*Math.cos(te*Math.PI/2),le=g*Math.sin(te*Math.PI/2)+v;for(let pe=0,Ge=$.length;pe<Ge;pe++){const ze=K($[pe],fe[pe],le);Pe(ze.x,ze.y,-de),te===0&&ae.push(ze)}for(let pe=0,Ge=j;pe<Ge;pe++){const ze=D[pe];Se=_e[pe];const E=[];for(let _=0,k=ze.length;_<k;_++){const Y=K(ze[_],Se[_],le);Pe(Y.x,Y.y,-de),te===0&&E.push(Y)}te===0&&ie.push(E)}}Je=xi.triangulateShape(ae,ie)}const Ke=Je.length,Ze=g+v;for(let ae=0;ae<re;ae++){const ie=p?K(M[ae],He[ae],Ze):M[ae];S?(C.copy(I.normals[0]).multiplyScalar(ie.x),L.copy(I.binormals[0]).multiplyScalar(ie.y),O.copy(b[0]).add(C).add(L),Pe(O.x,O.y,O.z)):Pe(ie.x,ie.y,0)}for(let ae=1;ae<=u;ae++)for(let ie=0;ie<re;ie++){const ee=p?K(M[ie],He[ie],Ze):M[ie];S?(C.copy(I.normals[ae]).multiplyScalar(ee.x),L.copy(I.binormals[ae]).multiplyScalar(ee.y),O.copy(b[ae]).add(C).add(L),Pe(O.x,O.y,O.z)):Pe(ee.x,ee.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){const ie=ae/m,ee=d*Math.cos(ie*Math.PI/2),te=g*Math.sin(ie*Math.PI/2)+v;for(let de=0,le=$.length;de<le;de++){const pe=K($[de],fe[de],te);Pe(pe.x,pe.y,h+ee)}for(let de=0,le=D.length;de<le;de++){const pe=D[de];Se=_e[de];for(let Ge=0,ze=pe.length;Ge<ze;Ge++){const E=K(pe[Ge],Se[Ge],te);S?Pe(E.x,E.y+b[u-1].y,b[u-1].x+ee):Pe(E.x,E.y,h+ee)}}}Q(),oe();function Q(){const ae=r.length/3;if(p){let ie=0,ee=re*ie;for(let te=0;te<Ke;te++){const de=Je[te];Te(de[2]+ee,de[1]+ee,de[0]+ee)}ie=u+m*2,ee=re*ie;for(let te=0;te<Ke;te++){const de=Je[te];Te(de[0]+ee,de[1]+ee,de[2]+ee)}}else{for(let ie=0;ie<Ke;ie++){const ee=Je[ie];Te(ee[2],ee[1],ee[0])}for(let ie=0;ie<Ke;ie++){const ee=Je[ie];Te(ee[0]+re*u,ee[1]+re*u,ee[2]+re*u)}}i.addGroup(ae,r.length/3-ae,0)}function oe(){const ae=r.length/3;let ie=0;ve($,ie),ie+=$.length;for(let ee=0,te=D.length;ee<te;ee++){const de=D[ee];ve(de,ie),ie+=de.length}i.addGroup(ae,r.length/3-ae,1)}function ve(ae,ie){let ee=ae.length;for(;--ee>=0;){const te=ee;let de=ee-1;de<0&&(de=ae.length-1);for(let le=0,pe=u+m*2;le<pe;le++){const Ge=re*le,ze=re*(le+1),E=ie+te+Ge,_=ie+de+Ge,k=ie+de+ze,Y=ie+te+ze;We(E,_,k,Y)}}}function Pe(ae,ie,ee){l.push(ae),l.push(ie),l.push(ee)}function Te(ae,ie,ee){ot(ae),ot(ie),ot(ee);const te=r.length/3,de=T.generateTopUV(i,r,te-3,te-2,te-1);w(de[0]),w(de[1]),w(de[2])}function We(ae,ie,ee,te){ot(ae),ot(ie),ot(te),ot(ie),ot(ee),ot(te);const de=r.length/3,le=T.generateSideWallUV(i,r,de-6,de-3,de-2,de-1);w(le[0]),w(le[1]),w(le[3]),w(le[1]),w(le[2]),w(le[3])}function ot(ae){r.push(l[ae*3+0]),r.push(l[ae*3+1]),r.push(l[ae*3+2])}function w(ae){s.push(ae.x),s.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lf(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zo[r.type]().fromJSON(r)),new la(i,e.options)}}const af={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ee(s,o),new Ee(a,l),new Ee(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],p=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-h),new Ee(p,1-g),new Ee(v,1-f)]:[new Ee(a,1-l),new Ee(u,1-h),new Ee(d,1-g),new Ee(m,1-f)]}};function lf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _r extends tn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const T=f*p-o;for(let b=0;b<c;b++){const S=b*h-s;g.push(S,-T,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const b=T+c*f,S=T+c*(f+1),I=T+1+c*(f+1),L=T+1+c*f;d.push(b,S,L),d.push(S,I,L)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class os extends tn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,p=new F,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const T=[],b=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const L=I/t;h.x=-e*Math.cos(r+L*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(r+L*s)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(L+S,1-b),T.push(c++)}u.push(T)}for(let f=0;f<i;f++)for(let T=0;T<t;T++){const b=u[f][T+1],S=u[f][T],I=u[f+1][T],L=u[f+1][T+1];(f!==0||o>0)&&d.push(b,S,L),(f!==i-1||l<Math.PI)&&d.push(S,I,L)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends tn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new F,h=new F,p=new F;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,f=(r+1)*(d-1)+g,T=(r+1)*d+g;o.push(v,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class cf extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uf extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hf extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ff{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const df=new ff;class ca{constructor(e){this.manager=e!==void 0?e:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ca.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi=new WeakMap;class pf extends ca{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=gi.get(o);h===void 0&&(h=[],gi.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=ar("img");function l(){u(),t&&t(this);const h=gi.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onLoad&&d.onLoad(this)}gi.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),zs.remove(`image:${e}`);const p=gi.get(this)||[];for(let d=0;d<p.length;d++){const g=p[d];g.onError&&g.onError(h)}gi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zs.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class mf extends ca{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,o=new pf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class _c extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gf extends _c{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ks=new Mt,Ka=new F,ja=new F;class _f{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ua extends rc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vf extends _f{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qa extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xf extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function el(n,e,t,i){const r=Mf(i);switch(t){case Xl:return n*e;case Yl:return n*e/r.components*r.byteLength;case jo:return n*e/r.components*r.byteLength;case $l:return n*e*2/r.components*r.byteLength;case Qo:return n*e*2/r.components*r.byteLength;case ql:return n*e*3/r.components*r.byteLength;case Qt:return n*e*4/r.components*r.byteLength;case ea:return n*e*4/r.components*r.byteLength;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:case po:return Math.max(n,16)*Math.max(e,8)/4;case uo:case fo:return Math.max(n,8)*Math.max(e,8)/2;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Do:case Io:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case No:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oo:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mf(n){switch(n){case un:case Hl:return{byteLength:1,components:1};case nr:case Vl:case dr:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case Kn:case Zo:case Mn:return{byteLength:4,components:1};case Gl:case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sf(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
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
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,zp=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
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
}`,Wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Yp=`#define TOON
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
}`,$p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zp=`uniform float size;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qp=`uniform float rotation;
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
}`,em=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:yf,alphahash_pars_fragment:Ef,alphamap_fragment:bf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:wf,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:Df,beginnormal_vertex:If,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:kf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Gf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:$f,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Kf,colorspace_fragment:jf,colorspace_pars_fragment:Qf,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:rd,fog_vertex:sd,fog_pars_vertex:od,fog_fragment:ad,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_pars_fragment:ud,lights_lambert_fragment:hd,lights_lambert_pars_fragment:fd,lights_pars_begin:dd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:yd,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:wd,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:Bd,normal_fragment_begin:zd,normal_fragment_maps:kd,normal_pars_fragment:Hd,normal_pars_vertex:Vd,normal_vertex:Gd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:$d,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Kd,project_vertex:jd,dithering_fragment:Qd,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:rp,shadowmap_vertex:sp,shadowmask_pars_fragment:op,skinbase_vertex:ap,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:up,specularmap_fragment:hp,specularmap_pars_fragment:fp,tonemapping_fragment:dp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:vp,uv_vertex:xp,worldpos_vertex:Mp,background_vert:Sp,background_frag:yp,backgroundCube_vert:Ep,backgroundCube_frag:bp,cube_vert:Tp,cube_frag:Ap,depth_vert:wp,depth_frag:Rp,distanceRGBA_vert:Cp,distanceRGBA_frag:Pp,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Ip,linedashed_frag:Up,meshbasic_vert:Np,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:Bp,meshmatcap_vert:zp,meshmatcap_frag:kp,meshnormal_vert:Hp,meshnormal_frag:Vp,meshphong_vert:Gp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:qp,meshtoon_vert:Yp,meshtoon_frag:$p,points_vert:Zp,points_frag:Jp,shadow_vert:Kp,shadow_frag:jp,sprite_vert:Qp,sprite_frag:em},xe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},sn={basic:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:It([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:It([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:It([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:It([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:It([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:It([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:It([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:It([xe.lights,xe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};sn.physical={uniforms:It([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Gr={r:0,b:0,g:0},Hn=new hn,tm=new Mt;function nm(n,e,t,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,h=null,p=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function v(b){let S=!1;const I=g(b);I===null?f(a,l):I&&I.isColor&&(f(I,1),S=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const I=g(S);I&&(I.isCubeTexture||I.mapping===ss)?(u===void 0&&(u=new ut(new Ui(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Pi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hn.copy(S.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Hn)),u.material.toneMapped=st.getTransfer(I.colorSpace)!==lt,(h!==I||p!==I.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,p=I.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ut(new _r(2,2),new yn({name:"BackgroundMaterial",uniforms:Pi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=st.getTransfer(I.colorSpace)!==lt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||p!==I.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,p=I.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(Gr,ic(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:v,addToRenderList:m,dispose:T}}function im(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(M,D,V,W,j){let $=!1;const K=h(W,V,D);s!==K&&(s=K,c(s.object)),$=d(M,W,V,j),$&&g(M,W,V,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(M,D,V,W),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,D,V){const W=V.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let $=j[D.id];$===void 0&&($={},j[D.id]=$);let K=$[W];return K===void 0&&(K=p(l()),$[W]=K),K}function p(M){const D=[],V=[],W=[];for(let j=0;j<t;j++)D[j]=0,V[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:W,object:M,attributes:{},index:null}}function d(M,D,V,W){const j=s.attributes,$=D.attributes;let K=0;const re=V.getAttributes();for(const Z in re)if(re[Z].location>=0){const _e=j[Z];let Se=$[Z];if(Se===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function g(M,D,V,W){const j={},$=D.attributes;let K=0;const re=V.getAttributes();for(const Z in re)if(re[Z].location>=0){let _e=$[Z];_e===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),j[Z]=Se,K++}s.attributes=j,s.attributesNum=K,s.index=W}function v(){const M=s.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const V=s.newAttributes,W=s.enabledAttributes,j=s.attributeDivisors;V[M]=1,W[M]===0&&(n.enableVertexAttribArray(M),W[M]=1),j[M]!==D&&(n.vertexAttribDivisor(M,D),j[M]=D)}function T(){const M=s.newAttributes,D=s.enabledAttributes;for(let V=0,W=D.length;V<W;V++)D[V]!==M[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function b(M,D,V,W,j,$,K){K===!0?n.vertexAttribIPointer(M,D,V,j,$):n.vertexAttribPointer(M,D,V,W,j,$)}function S(M,D,V,W){v();const j=W.attributes,$=V.getAttributes(),K=D.defaultAttributeValues;for(const re in $){const Z=$[re];if(Z.location>=0){let fe=j[re];if(fe===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const _e=fe.normalized,Se=fe.itemSize,He=e.get(fe);if(He===void 0)continue;const Je=He.buffer,Ke=He.type,Ze=He.bytesPerElement,Q=Ke===n.INT||Ke===n.UNSIGNED_INT||fe.gpuType===Zo;if(fe.isInterleavedBufferAttribute){const oe=fe.data,ve=oe.stride,Pe=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let Te=0;Te<Z.locationSize;Te++)f(Z.location+Te,oe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<Z.locationSize;Te++)m(Z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Te=0;Te<Z.locationSize;Te++)b(Z.location+Te,Se/Z.locationSize,Ke,_e,ve*Ze,(Pe+Se/Z.locationSize*Te)*Ze,Q)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)f(Z.location+oe,fe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<Z.locationSize;oe++)m(Z.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let oe=0;oe<Z.locationSize;oe++)b(Z.location+oe,Se/Z.locationSize,Ke,_e,Se*Ze,Se/Z.locationSize*oe*Ze,Q)}}else if(K!==void 0){const _e=K[re];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(Z.location,_e);break;case 3:n.vertexAttrib3fv(Z.location,_e);break;case 4:n.vertexAttrib4fv(Z.location,_e);break;default:n.vertexAttrib1fv(Z.location,_e)}}}}T()}function I(){O();for(const M in i){const D=i[M];for(const V in D){const W=D[V];for(const j in W)u(W[j].object),delete W[j];delete D[V]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const V in D){const W=D[V];for(const j in W)u(W[j].object),delete W[j];delete D[V]}delete i[M.id]}function C(M){for(const D in i){const V=i[D];if(V[M.id]===void 0)continue;const W=V[M.id];for(const j in W)u(W[j].object),delete W[j];delete V[M.id]}}function O(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function rm(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const O=C===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!O)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:L}}function om(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,b=T*4;let S=f.clippingState||null;l.value=S,S=u(g,p,b,d);for(let I=0;I!==b;++I)S[I]=t[I];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=d+v*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=d;b!==v;++b,S+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function am(n){let e=new WeakMap;function t(o,a){return a===oo?o.mapping=wi:a===ao&&(o.mapping=Ri),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oo||a===ao)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Eh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Mi=4,tl=[.125,.215,.35,.446,.526,.582],Yn=20,Hs=new ua,nl=new it;let Vs=null,Gs=0,Ws=0,Xs=!1;const Xn=(1+Math.sqrt(5))/2,_i=1/Xn,il=[new F(-Xn,_i,0),new F(Xn,_i,0),new F(-_i,0,Xn),new F(_i,0,Xn),new F(0,Xn,-_i),new F(0,Xn,_i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],lm=new F;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=lm}=s;Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:dr,format:Qt,colorSpace:Ci,depthBuffer:!1},r=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(s)),this._blurMaterial=um(s,e,t)}return r}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,r,s){const l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(nl),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new rn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new ut(new Ui,v);let f=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,f=!0):(v.color.copy(nl),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const I=this._cubeSize;Wr(r,S*I,b>2?I:0,I,I),h.setRenderTarget(r),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wi||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=il[(r-s-1)%il.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Yn-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let T=0;for(let C=0;C<Yn;++C){const O=C/v,y=Math.exp(-O*O/2);f.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const S=this._sizeLods[r],I=3*S*(r>b-Mi?r-b+Mi:0),L=4*(this._cubeSize-S);Wr(t,I,L,3*S,2*S),l.setRenderTarget(t),l.render(h,Hs)}}function cm(n){const e=[],t=[],i=[];let r=n;const s=n-Mi+1+tl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Mi?l=tl[o-n+Mi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*d),b=new Float32Array(m*g*d),S=new Float32Array(f*g*d);for(let L=0;L<d;L++){const C=L%3*2/3-1,O=L>2?0:-1,y=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];T.set(y,v*g*L),b.set(p,m*g*L);const M=[L,L,L,L,L,L];S.set(M,f*g*L)}const I=new tn;I.setAttribute("position",new cn(T,v)),I.setAttribute("uv",new cn(b,m)),I.setAttribute("faceIndex",new cn(S,f)),e.push(I),r>Mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sl(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=ss,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function um(n,e,t){const i=new Float32Array(Yn),r=new F(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ol(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function al(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oo||l===ao,u=l===wi||l===Ri;if(c||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new rl(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new rl(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&lr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dm(n,e,t,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const d in p)e.update(p[d],n.ARRAY_BUFFER)}function c(h){const p=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let b=0,S=T.length;b<S;b+=3){const I=T[b+0],L=T[b+1],C=T[b+2];p.push(I,L,L,C,C,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const I=b+0,L=b+1,C=b+2;p.push(I,L,L,C,C,I)}}else return;const m=new(Kl(p)?nc:tc)(p,1);m.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pm(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,s,p*o),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,p*o,g),t.update(d,i,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function h(p,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,p,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=d[T]*v[T];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gm(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let M=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*L*4*h),O=new jl(C,I,L,h);O.type=Mn,O.needsUpdate=!0;const y=S*4;for(let D=0;D<h;D++){const V=f[D],W=T[D],j=b[D],$=I*L*4*D;for(let K=0;K<V.count;K++){const re=K*y;g===!0&&(r.fromBufferAttribute(V,K),C[$+re+0]=r.x,C[$+re+1]=r.y,C[$+re+2]=r.z,C[$+re+3]=0),v===!0&&(r.fromBufferAttribute(W,K),C[$+re+4]=r.x,C[$+re+5]=r.y,C[$+re+6]=r.z,C[$+re+7]=0),m===!0&&(r.fromBufferAttribute(j,K),C[$+re+8]=r.x,C[$+re+9]=r.y,C[$+re+10]=r.z,C[$+re+11]=j.itemSize===4?r.w:1)}}p={count:h,texture:O,size:new Ee(I,L)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function _m(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const xc=new Ut,ll=new oc(1,1),Mc=new jl,Sc=new sh,yc=new sc,cl=[],ul=[],hl=new Float32Array(16),fl=new Float32Array(9),dl=new Float32Array(4);function Ni(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cl[r];if(s===void 0&&(s=new Float32Array(r),cl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function as(n,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function ym(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;dl.set(i),n.uniformMatrix2fv(this.addr,!1,dl),Et(t,i)}}function Em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;fl.set(i),n.uniformMatrix3fv(this.addr,!1,fl),Et(t,i)}}function bm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;hl.set(i),n.uniformMatrix4fv(this.addr,!1,hl),Et(t,i)}}function Tm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Cm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Im(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ll.compareFunction=Jl,s=ll):s=xc,t.setTexture2D(e||s,r)}function Um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sc,r)}function Nm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yc,r)}function Fm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mc,r)}function Om(n){switch(n){case 5126:return vm;case 35664:return xm;case 35665:return Mm;case 35666:return Sm;case 35674:return ym;case 35675:return Em;case 35676:return bm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return wm;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Lm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}function Bm(n,e){n.uniform1fv(this.addr,e)}function zm(n,e){const t=Ni(e,this.size,2);n.uniform2fv(this.addr,t)}function km(n,e){const t=Ni(e,this.size,3);n.uniform3fv(this.addr,t)}function Hm(n,e){const t=Ni(e,this.size,4);n.uniform4fv(this.addr,t)}function Vm(n,e){const t=Ni(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gm(n,e){const t=Ni(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wm(n,e){const t=Ni(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xm(n,e){n.uniform1iv(this.addr,e)}function qm(n,e){n.uniform2iv(this.addr,e)}function Ym(n,e){n.uniform3iv(this.addr,e)}function $m(n,e){n.uniform4iv(this.addr,e)}function Zm(n,e){n.uniform1uiv(this.addr,e)}function Jm(n,e){n.uniform2uiv(this.addr,e)}function Km(n,e){n.uniform3uiv(this.addr,e)}function jm(n,e){n.uniform4uiv(this.addr,e)}function Qm(n,e,t){const i=this.cache,r=e.length,s=as(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xc,s[o])}function eg(n,e,t){const i=this.cache,r=e.length,s=as(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sc,s[o])}function tg(n,e,t){const i=this.cache,r=e.length,s=as(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yc,s[o])}function ng(n,e,t){const i=this.cache,r=e.length,s=as(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mc,s[o])}function ig(n){switch(n){case 5126:return Bm;case 35664:return zm;case 35665:return km;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Zm;case 36294:return Jm;case 36295:return Km;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}class rg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}}class sg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ig(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function pl(n,e){n.seq.push(e),n.map[e.id]=e}function ag(n,e,t){const i=n.name,r=i.length;for(qs.lastIndex=0;;){const s=qs.exec(i),o=qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pl(t,c===void 0?new rg(a,n,e):new sg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new og(a),pl(t,h)),t=h}}}class es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ag(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ml(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lg=37297;let cg=0;function ug(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const gl=new Ye;function hg(n){st._getMatrix(gl,st.workingColorSpace,n);const e=`mat3( ${gl.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ts:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _l(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ug(n.getShaderSource(e),a)}else return s}function fg(n,e){const t=hg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dg(n,e){let t;switch(e){case vu:t="Linear";break;case xu:t="Reinhard";break;case Mu:t="Cineon";break;case Su:t="ACESFilmic";break;case Eu:t="AgX";break;case bu:t="Neutral";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new F;function pg(){st.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function gg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _g(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wi(n){return n!==""}function vl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(n){return n.replace(vg,Mg)}const xg=new Map;function Mg(n,e){let t=$e[e];if(t===void 0){const i=xg.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(n){return n.replace(Sg,yg)}function yg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function bg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wi:case Ri:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Ag(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case gu:e="ENVMAP_BLENDING_MIX";break;case _u:e="ENVMAP_BLENDING_ADD";break}return e}function wg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Rg(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Eg(t),c=bg(t),u=Tg(t),h=Ag(t),p=wg(t),d=mg(t),g=gg(s),v=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),f.length>0&&(f+=`
`)):(m=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),f=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ln?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,fg("linearToOutputTexel",t.outputColorSpace),pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Vo(o),o=vl(o,t),o=xl(o,t),a=Vo(a),a=vl(a,t),a=xl(a,t),o=Ml(o),a=Ml(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+o,S=T+f+a,I=ml(r,r.VERTEX_SHADER,b),L=ml(r,r.FRAGMENT_SHADER,S);r.attachShader(v,I),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(D){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(I)||"",j=r.getShaderInfoLog(L)||"",$=V.trim(),K=W.trim(),re=j.trim();let Z=!0,fe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,L);else{const _e=_l(r,I,"vertex"),Se=_l(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+_e+`
`+Se)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||re==="")&&(fe=!1);fe&&(D.diagnostics={runnable:Z,programLog:$,vertexShader:{log:K,prefix:m},fragmentShader:{log:re,prefix:f}})}r.deleteShader(I),r.deleteShader(L),O=new es(r,v),y=_g(r,v)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,lg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let Cg=0;class Pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lg(e),t.set(e,i)),i}}class Lg{constructor(e){this.id=Cg++,this.code=e,this.usedTimes=0}}function Dg(n,e,t,i,r,s,o){const a=new Ql,l=new Pg,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,V,W){const j=V.fog,$=W.geometry,K=y.isMeshStandardMaterial?V.environment:null,re=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),Z=re&&re.mapping===ss?re.image.height:null,fe=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=_e!==void 0?_e.length:0;let He=0;$.morphAttributes.position!==void 0&&(He=1),$.morphAttributes.normal!==void 0&&(He=2),$.morphAttributes.color!==void 0&&(He=3);let Je,Ke,Ze,Q;if(fe){const me=sn[fe];Je=me.vertexShader,Ke=me.fragmentShader}else Je=y.vertexShader,Ke=y.fragmentShader,l.update(y),Ze=l.getVertexShaderID(y),Q=l.getFragmentShaderID(y);const oe=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Pe=W.isInstancedMesh===!0,Te=W.isBatchedMesh===!0,We=!!y.map,ot=!!y.matcap,w=!!re,ae=!!y.aoMap,ie=!!y.lightMap,ee=!!y.bumpMap,te=!!y.normalMap,de=!!y.displacementMap,le=!!y.emissiveMap,pe=!!y.metalnessMap,Ge=!!y.roughnessMap,ze=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,k=y.iridescence>0,Y=y.sheen>0,se=y.transmission>0,J=ze&&!!y.anisotropyMap,Re=E&&!!y.clearcoatMap,he=E&&!!y.clearcoatNormalMap,Ce=E&&!!y.clearcoatRoughnessMap,Ae=k&&!!y.iridescenceMap,ce=k&&!!y.iridescenceThicknessMap,Me=Y&&!!y.sheenColorMap,Ne=Y&&!!y.sheenRoughnessMap,De=!!y.specularMap,ge=!!y.specularColorMap,Xe=!!y.specularIntensityMap,U=se&&!!y.transmissionMap,A=se&&!!y.thicknessMap,N=!!y.gradientMap,G=!!y.alphaMap,P=y.alphaTest>0,R=!!y.alphaHash,H=!!y.extensions;let ne=Ln;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ne=n.toneMapping);const ye={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:Ke,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Te,batchingColor:Te&&W._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&W.instanceColor!==null,instancingMorph:Pe&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ci,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:ot,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:ie,bumpMap:ee,normalMap:te,displacementMap:p&&de,emissiveMap:le,normalMapObjectSpace:te&&y.normalMapType===Ru,normalMapTangentSpace:te&&y.normalMapType===Zl,metalnessMap:pe,roughnessMap:Ge,anisotropy:ze,anisotropyMap:J,clearcoat:E,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:k,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:Y,sheenColorMap:Me,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:ge,specularIntensityMap:Xe,transmission:se,transmissionMap:U,thicknessMap:A,gradientMap:N,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:G,alphaTest:P,alphaHash:R,combine:y.combine,mapUv:We&&v(y.map.channel),aoMapUv:ae&&v(y.aoMap.channel),lightMapUv:ie&&v(y.lightMap.channel),bumpMapUv:ee&&v(y.bumpMap.channel),normalMapUv:te&&v(y.normalMap.channel),displacementMapUv:de&&v(y.displacementMap.channel),emissiveMapUv:le&&v(y.emissiveMap.channel),metalnessMapUv:pe&&v(y.metalnessMap.channel),roughnessMapUv:Ge&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:Re&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(y.sheenRoughnessMap.channel),specularMapUv:De&&v(y.specularMap.channel),specularColorMapUv:ge&&v(y.specularColorMap.channel),specularIntensityMapUv:Xe&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:A&&v(y.thicknessMap.channel),alphaMapUv:G&&v(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(te||ze),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(We||G),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:W.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:H&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(H&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(M,y),b(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=g[y.type];let D;if(M){const V=sn[M];D=xh.clone(V.uniforms)}else D=y.uniforms;return D}function I(y,M){let D;for(let V=0,W=u.length;V<W;V++){const j=u[V];if(j.cacheKey===M){D=j,++D.usedTimes;break}}return D===void 0&&(D=new Rg(n,M,y,s),u.push(D)),D}function L(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:I,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:O}}function Ig(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function El(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,p,d,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||Ug),i.length>1&&i.sort(p||yl),r.length>1&&r.sort(p||yl)}function u(){for(let h=e,p=n.length;h<p;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ng(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new El,n.set(i,[o])):r>=s.length?(o=new El,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Og(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bg=0;function zg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kg(n){const e=new Fg,t=Og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Mt,o=new Mt;function a(c){let u=0,h=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,T=0,b=0,S=0,I=0,L=0,C=0;c.sort(zg);for(let y=0,M=c.length;y<M;y++){const D=c[y],V=D.color,W=D.intensity,j=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*W,h+=V.g*W,p+=V.b*W;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],W);C++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const re=D.shadow,Z=t.get(D);Z.shadowIntensity=re.intensity,Z.shadowBias=re.bias,Z.shadowNormalBias=re.normalBias,Z.shadowRadius=re.radius,Z.shadowMapSize=re.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=D.shadow.matrix,T++}i.directional[d]=K,d++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(V).multiplyScalar(W),K.distance=j,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[v]=K;const re=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,re.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[v]=re.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=re.intensity,Z.shadowBias=re.bias,Z.shadowNormalBias=re.normalBias,Z.shadowRadius=re.radius,Z.shadowMapSize=re.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=$,S++}v++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(V).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const re=D.shadow,Z=t.get(D);Z.shadowIntensity=re.intensity,Z.shadowBias=re.bias,Z.shadowNormalBias=re.normalBias,Z.shadowRadius=re.radius,Z.shadowMapSize=re.mapSize,Z.shadowCameraNear=re.camera.near,Z.shadowCameraFar=re.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(W),K.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[f]=K,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==T||O.numPointShadows!==b||O.numSpotShadows!==S||O.numSpotMaps!==I||O.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,O.directionalLength=d,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=T,O.numPointShadows=b,O.numSpotShadows=S,O.numSpotMaps=I,O.numLightProbes=C,i.version=Bg++)}function l(c,u){let h=0,p=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function bl(n){const e=new kg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hg(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bl(n),e.set(r,[a])):s>=o.length?(a=new bl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wg(n,e,t){let i=new ra;const r=new Ee,s=new Ee,o=new xt,a=new uf({depthPacking:wu}),l=new hf,c={},u=t.maxTextureSize,h={[In]:zt,[zt]:In,[on]:on},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Vg,fragmentShader:Gg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let f=this.type;this.render=function(L,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Pn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=f!==xn&&this.type===xn,j=f===xn&&this.type!==xn;for(let $=0,K=L.length;$<K;$++){const re=L[$],Z=re.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const fe=Z.getFrameExtents();if(r.multiply(fe),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,Z.mapSize.y=s.y)),Z.map===null||W===!0||j===!0){const Se=this.type!==xn?{minFilter:en,magFilter:en}:{};Z.map!==null&&Z.map.dispose(),Z.map=new jn(r.x,r.y,Se),Z.map.texture.name=re.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const _e=Z.getViewportCount();for(let Se=0;Se<_e;Se++){const He=Z.getViewport(Se);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),V.viewport(o),Z.updateMatrices(re,Se),i=Z.getFrustum(),S(C,O,Z.camera,re,this.type)}Z.isPointLightShadow!==!0&&this.type===xn&&T(Z,O),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,D)};function T(L,C){const O=e.update(v);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new jn(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,O,p,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,O,d,v,null)}function b(L,C,O,y){let M=null;const D=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)M=D;else if(M=O.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=M.uuid,W=C.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let $=j[W];$===void 0&&($=M.clone(),j[W]=$,C.addEventListener("dispose",I)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,y===xn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=O}return M}function S(L,C,O,y,M){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===xn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const W=e.update(L),j=L.material;if(Array.isArray(j)){const $=W.groups;for(let K=0,re=$.length;K<re;K++){const Z=$[K],fe=j[Z.materialIndex];if(fe&&fe.visible){const _e=b(L,fe,y,M);L.onBeforeShadow(n,L,C,O,W,_e,Z),n.renderBufferDirect(O,null,W,_e,L,Z),L.onAfterShadow(n,L,C,O,W,_e,Z)}}}else if(j.visible){const $=b(L,j,y,M);L.onBeforeShadow(n,L,C,O,W,$,null),n.renderBufferDirect(O,null,W,$,L,null),L.onAfterShadow(n,L,C,O,W,$,null)}}const V=L.children;for(let W=0,j=V.length;W<j;W++)S(V[W],C,O,y,M)}function I(L){L.target.removeEventListener("dispose",I);for(const O in c){const y=c[O],M=L.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Xg={[Qs]:eo,[to]:ro,[no]:so,[Ai]:io,[eo]:Qs,[ro]:to,[so]:no,[io]:Ai};function qg(n,e){function t(){let U=!1;const A=new xt;let N=null;const G=new xt(0,0,0,0);return{setMask:function(P){N!==P&&!U&&(n.colorMask(P,P,P,P),N=P)},setLocked:function(P){U=P},setClear:function(P,R,H,ne,ye){ye===!0&&(P*=ne,R*=ne,H*=ne),A.set(P,R,H,ne),G.equals(A)===!1&&(n.clearColor(P,R,H,ne),G.copy(A))},reset:function(){U=!1,N=null,G.set(-1,0,0,0)}}}function i(){let U=!1,A=!1,N=null,G=null,P=null;return{setReversed:function(R){if(A!==R){const H=e.get("EXT_clip_control");R?H.clipControlEXT(H.LOWER_LEFT_EXT,H.ZERO_TO_ONE_EXT):H.clipControlEXT(H.LOWER_LEFT_EXT,H.NEGATIVE_ONE_TO_ONE_EXT),A=R;const ne=P;P=null,this.setClear(ne)}},getReversed:function(){return A},setTest:function(R){R?oe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(R){N!==R&&!U&&(n.depthMask(R),N=R)},setFunc:function(R){if(A&&(R=Xg[R]),G!==R){switch(R){case Qs:n.depthFunc(n.NEVER);break;case eo:n.depthFunc(n.ALWAYS);break;case to:n.depthFunc(n.LESS);break;case Ai:n.depthFunc(n.LEQUAL);break;case no:n.depthFunc(n.EQUAL);break;case io:n.depthFunc(n.GEQUAL);break;case ro:n.depthFunc(n.GREATER);break;case so:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=R}},setLocked:function(R){U=R},setClear:function(R){P!==R&&(A&&(R=1-R),n.clearDepth(R),P=R)},reset:function(){U=!1,N=null,G=null,P=null,A=!1}}}function r(){let U=!1,A=null,N=null,G=null,P=null,R=null,H=null,ne=null,ye=null;return{setTest:function(me){U||(me?oe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(me){A!==me&&!U&&(n.stencilMask(me),A=me)},setFunc:function(me,Ie,et){(N!==me||G!==Ie||P!==et)&&(n.stencilFunc(me,Ie,et),N=me,G=Ie,P=et)},setOp:function(me,Ie,et){(R!==me||H!==Ie||ne!==et)&&(n.stencilOp(me,Ie,et),R=me,H=Ie,ne=et)},setLocked:function(me){U=me},setClear:function(me){ye!==me&&(n.clearStencil(me),ye=me)},reset:function(){U=!1,A=null,N=null,G=null,P=null,R=null,H=null,ne=null,ye=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,T=null,b=null,S=null,I=null,L=null,C=new it(0,0,0),O=0,y=!1,M=null,D=null,V=null,W=null,j=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,re=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=re>=2);let fe=null,_e={};const Se=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new xt().fromArray(Se),Ke=new xt().fromArray(He);function Ze(U,A,N,G){const P=new Uint8Array(4),R=n.createTexture();n.bindTexture(U,R),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let H=0;H<N;H++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(A,0,n.RGBA,1,1,G,0,n.RGBA,n.UNSIGNED_BYTE,P):n.texImage2D(A+H,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,P);return R}const Q={};Q[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Ai),ee(!1),te(Sa),oe(n.CULL_FACE),ae(Pn);function oe(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ve(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Pe(U,A){return h[U]!==A?(n.bindFramebuffer(U,A),h[U]=A,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=A),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=A),!0):!1}function Te(U,A){let N=d,G=!1;if(U){N=p.get(A),N===void 0&&(N=[],p.set(A,N));const P=U.textures;if(N.length!==P.length||N[0]!==n.COLOR_ATTACHMENT0){for(let R=0,H=P.length;R<H;R++)N[R]=n.COLOR_ATTACHMENT0+R;N.length=P.length,G=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,G=!0);G&&n.drawBuffers(N)}function We(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ot={[qn]:n.FUNC_ADD,[Qc]:n.FUNC_SUBTRACT,[eu]:n.FUNC_REVERSE_SUBTRACT};ot[tu]=n.MIN,ot[nu]=n.MAX;const w={[iu]:n.ZERO,[ru]:n.ONE,[su]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[hu]:n.SRC_ALPHA_SATURATE,[cu]:n.DST_COLOR,[au]:n.DST_ALPHA,[ou]:n.ONE_MINUS_SRC_COLOR,[js]:n.ONE_MINUS_SRC_ALPHA,[uu]:n.ONE_MINUS_DST_COLOR,[lu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[du]:n.ONE_MINUS_CONSTANT_COLOR,[pu]:n.CONSTANT_ALPHA,[mu]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(U,A,N,G,P,R,H,ne,ye,me){if(U===Pn){v===!0&&(ve(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),U!==jc){if(U!==m||me!==y){if((f!==qn||S!==qn)&&(n.blendEquation(n.FUNC_ADD),f=qn,S=qn),me)switch(U){case Si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFunc(n.ONE,n.ONE);break;case Ea:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ea:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ba:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,b=null,I=null,L=null,C.set(0,0,0),O=0,m=U,y=me}return}P=P||A,R=R||N,H=H||G,(A!==f||P!==S)&&(n.blendEquationSeparate(ot[A],ot[P]),f=A,S=P),(N!==T||G!==b||R!==I||H!==L)&&(n.blendFuncSeparate(w[N],w[G],w[R],w[H]),T=N,b=G,I=R,L=H),(ne.equals(C)===!1||ye!==O)&&(n.blendColor(ne.r,ne.g,ne.b,ye),C.copy(ne),O=ye),m=U,y=!1}function ie(U,A){U.side===on?ve(n.CULL_FACE):oe(n.CULL_FACE);let N=U.side===zt;A&&(N=!N),ee(N),U.blending===Si&&U.transparent===!1?ae(Pn):ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const G=U.stencilWrite;a.setTest(G),G&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function te(U){U!==Zc?(oe(n.CULL_FACE),U!==D&&(U===Sa?n.cullFace(n.BACK):U===Jc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),D=U}function de(U){U!==V&&(K&&n.lineWidth(U),V=U)}function le(U,A,N){U?(oe(n.POLYGON_OFFSET_FILL),(W!==A||j!==N)&&(n.polygonOffset(A,N),W=A,j=N)):ve(n.POLYGON_OFFSET_FILL)}function pe(U){U?oe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=n.TEXTURE0+$-1),fe!==U&&(n.activeTexture(U),fe=U)}function ze(U,A,N){N===void 0&&(fe===null?N=n.TEXTURE0+$-1:N=fe);let G=_e[N];G===void 0&&(G={type:void 0,texture:void 0},_e[N]=G),(G.type!==U||G.texture!==A)&&(fe!==N&&(n.activeTexture(N),fe=N),n.bindTexture(U,A||Q[U]),G.type=U,G.texture=A)}function E(){const U=_e[fe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Ne(U){Ke.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function De(U,A){let N=c.get(A);N===void 0&&(N=new WeakMap,c.set(A,N));let G=N.get(U);G===void 0&&(G=n.getUniformBlockIndex(A,U.name),N.set(U,G))}function ge(U,A){const G=c.get(A).get(U);l.get(A)!==G&&(n.uniformBlockBinding(A,G,U.__bindingPointIndex),l.set(A,G))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,_e={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,T=null,b=null,S=null,I=null,L=null,C=new it(0,0,0),O=0,y=!1,M=null,D=null,V=null,W=null,j=null,Je.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:ve,bindFramebuffer:Pe,drawBuffers:Te,useProgram:We,setBlending:ae,setMaterial:ie,setFlipSided:ee,setCullFace:te,setLineWidth:de,setPolygonOffset:le,setScissorTest:pe,activeTexture:Ge,bindTexture:ze,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:Ae,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:he,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:J,compressedTexSubImage3D:Re,scissor:Me,viewport:Ne,reset:Xe}}function Yg(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return d?new OffscreenCanvas(E,_):ar("canvas")}function v(E,_,k){let Y=1;const se=ze(E);if((se.width>k||se.height>k)&&(Y=k/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Y*se.width),Re=Math.floor(Y*se.height);h===void 0&&(h=g(J,Re));const he=_?g(J,Re):h;return he.width=J,he.height=Re,he.getContext("2d").drawImage(E,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+Re+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,_,k,Y,se=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=_;if(_===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),_===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){const Re=se?ts:st.getTransfer(Y);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Re===lt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(E,_){let k;return E?_===null||_===Kn||_===ir?k=n.DEPTH24_STENCIL8:_===Mn?k=n.DEPTH32F_STENCIL8:_===nr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===ir?k=n.DEPTH_COMPONENT24:_===Mn?k=n.DEPTH_COMPONENT32F:_===nr&&(k=n.DEPTH_COMPONENT16),k}function I(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function L(E){const _=E.target;_.removeEventListener("dispose",L),O(_),_.isVideoTexture&&u.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),M(_)}function O(E){const _=i.get(E);if(_.__webglInit===void 0)return;const k=E.source,Y=p.get(k);if(Y){const se=Y[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(E),Object.keys(Y).length===0&&p.delete(k)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const k=E.source,Y=p.get(k);delete Y[_.__cacheKey],o.memory.textures--}function M(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let se=0;se<_.__webglFramebuffer[Y].length;se++)n.deleteFramebuffer(_.__webglFramebuffer[Y][se]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=E.textures;for(let Y=0,se=k.length;Y<se;Y++){const J=i.get(k[Y]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[Y])}i.remove(E)}let D=0;function V(){D=0}function W(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function j(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const k=i.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,E,_);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function K(E,_){const k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Q(k,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function re(E,_){const k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Q(k,E,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function Z(E,_){const k=i.get(E);if(E.version>0&&k.__version!==E.version){oe(k,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const fe={[lo]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[co]:n.MIRRORED_REPEAT},_e={[en]:n.NEAREST,[Tu]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[fs]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},Se={[Cu]:n.NEVER,[Nu]:n.ALWAYS,[Pu]:n.LESS,[Jl]:n.LEQUAL,[Lu]:n.EQUAL,[Uu]:n.GEQUAL,[Du]:n.GREATER,[Iu]:n.NOTEQUAL};function He(E,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===fs||_.magFilter===yr||_.magFilter===Jn||_.minFilter===an||_.minFilter===fs||_.minFilter===yr||_.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,fe[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,fe[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,fe[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==yr&&_.minFilter!==Jn||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",L));const Y=_.source;let se=p.get(Y);se===void 0&&(se={},p.set(Y,se));const J=j(_);if(J!==E.__cacheKey){se[J]===void 0&&(se[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[J].usedTimes++;const Re=se[E.__cacheKey];Re!==void 0&&(se[E.__cacheKey].usedTimes--,Re.usedTimes===0&&y(_)),E.__cacheKey=J,E.__webglTexture=se[J].texture}return k}function Ke(E,_,k){return Math.floor(Math.floor(E/k)/_)}function Ze(E,_,k,Y){const J=E.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{J.sort((ce,Me)=>ce.start-Me.start);let Re=0;for(let ce=1;ce<J.length;ce++){const Me=J[Re],Ne=J[ce],De=Me.start+Me.count,ge=Ke(Ne.start,_.width,4),Xe=Ke(Me.start,_.width,4);Ne.start<=De+1&&ge===Xe&&Ke(Ne.start+Ne.count-1,_.width,4)===ge?Me.count=Math.max(Me.count,Ne.start+Ne.count-Me.start):(++Re,J[Re]=Ne)}J.length=Re+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ce=0,Me=J.length;ce<Me;ce++){const Ne=J[ce],De=Math.floor(Ne.start/4),ge=Math.ceil(Ne.count/4),Xe=De%_.width,U=Math.floor(De/_.width),A=ge,N=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Xe,U,A,N,k,Y,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Q(E,_,k){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const se=Je(E,_),J=_.source;t.bindTexture(Y,E.__webglTexture,n.TEXTURE0+k);const Re=i.get(J);if(J.version!==Re.__version||se===!0){t.activeTexture(n.TEXTURE0+k);const he=st.getPrimaries(st.workingColorSpace),Ce=_.colorSpace===Cn?null:st.getPrimaries(_.colorSpace),Ae=_.colorSpace===Cn||he===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=v(_.image,!1,r.maxTextureSize);ce=Ge(_,ce);const Me=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let De=b(_.internalFormat,Me,Ne,_.colorSpace,_.isVideoTexture);He(Y,_);let ge;const Xe=_.mipmaps,U=_.isVideoTexture!==!0,A=Re.__version===void 0||se===!0,N=J.dataReady,G=I(_,ce);if(_.isDepthTexture)De=S(_.format===sr,_.type),A&&(U?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Me,Ne,null));else if(_.isDataTexture)if(Xe.length>0){U&&A&&t.texStorage2D(n.TEXTURE_2D,G,De,Xe[0].width,Xe[0].height);for(let P=0,R=Xe.length;P<R;P++)ge=Xe[P],U?N&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,ge.width,ge.height,Me,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,P,De,ge.width,ge.height,0,Me,Ne,ge.data);_.generateMipmaps=!1}else U?(A&&t.texStorage2D(n.TEXTURE_2D,G,De,ce.width,ce.height),N&&Ze(_,ce,Me,Ne)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Me,Ne,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&A&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,De,Xe[0].width,Xe[0].height,ce.depth);for(let P=0,R=Xe.length;P<R;P++)if(ge=Xe[P],_.format!==Qt)if(Me!==null)if(U){if(N)if(_.layerUpdates.size>0){const H=el(ge.width,ge.height,_.format,_.type);for(const ne of _.layerUpdates){const ye=ge.data.subarray(ne*H/ge.data.BYTES_PER_ELEMENT,(ne+1)*H/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,ne,ge.width,ge.height,1,Me,ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,ce.depth,Me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,P,De,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,ce.depth,Me,Ne,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,P,De,ge.width,ge.height,ce.depth,0,Me,Ne,ge.data)}else{U&&A&&t.texStorage2D(n.TEXTURE_2D,G,De,Xe[0].width,Xe[0].height);for(let P=0,R=Xe.length;P<R;P++)ge=Xe[P],_.format!==Qt?Me!==null?U?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,P,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,P,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?N&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,ge.width,ge.height,Me,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,P,De,ge.width,ge.height,0,Me,Ne,ge.data)}else if(_.isDataArrayTexture)if(U){if(A&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,De,ce.width,ce.height,ce.depth),N)if(_.layerUpdates.size>0){const P=el(ce.width,ce.height,_.format,_.type);for(const R of _.layerUpdates){const H=ce.data.subarray(R*P/ce.data.BYTES_PER_ELEMENT,(R+1)*P/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,R,ce.width,ce.height,1,Me,Ne,H)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,Ne,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,Me,Ne,ce.data);else if(_.isData3DTexture)U?(A&&t.texStorage3D(n.TEXTURE_3D,G,De,ce.width,ce.height,ce.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,Ne,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,Me,Ne,ce.data);else if(_.isFramebufferTexture){if(A)if(U)t.texStorage2D(n.TEXTURE_2D,G,De,ce.width,ce.height);else{let P=ce.width,R=ce.height;for(let H=0;H<G;H++)t.texImage2D(n.TEXTURE_2D,H,De,P,R,0,Me,Ne,null),P>>=1,R>>=1}}else if(Xe.length>0){if(U&&A){const P=ze(Xe[0]);t.texStorage2D(n.TEXTURE_2D,G,De,P.width,P.height)}for(let P=0,R=Xe.length;P<R;P++)ge=Xe[P],U?N&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,Me,Ne,ge):t.texImage2D(n.TEXTURE_2D,P,De,Me,Ne,ge);_.generateMipmaps=!1}else if(U){if(A){const P=ze(ce);t.texStorage2D(n.TEXTURE_2D,G,De,P.width,P.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ne,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,Me,Ne,ce);m(_)&&f(Y),Re.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function oe(E,_,k){if(_.image.length!==6)return;const Y=Je(E,_),se=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);const J=i.get(se);if(se.version!==J.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);const Re=st.getPrimaries(st.workingColorSpace),he=_.colorSpace===Cn?null:st.getPrimaries(_.colorSpace),Ce=_.colorSpace===Cn||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let R=0;R<6;R++)!Ae&&!ce?Me[R]=v(_.image[R],!0,r.maxCubemapSize):Me[R]=ce?_.image[R].image:_.image[R],Me[R]=Ge(_,Me[R]);const Ne=Me[0],De=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),Xe=b(_.internalFormat,De,ge,_.colorSpace),U=_.isVideoTexture!==!0,A=J.__version===void 0||Y===!0,N=se.dataReady;let G=I(_,Ne);He(n.TEXTURE_CUBE_MAP,_);let P;if(Ae){U&&A&&t.texStorage2D(n.TEXTURE_CUBE_MAP,G,Xe,Ne.width,Ne.height);for(let R=0;R<6;R++){P=Me[R].mipmaps;for(let H=0;H<P.length;H++){const ne=P[H];_.format!==Qt?De!==null?U?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H,0,0,ne.width,ne.height,De,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H,Xe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H,0,0,ne.width,ne.height,De,ge,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H,Xe,ne.width,ne.height,0,De,ge,ne.data)}}}else{if(P=_.mipmaps,U&&A){P.length>0&&G++;const R=ze(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,G,Xe,R.width,R.height)}for(let R=0;R<6;R++)if(ce){U?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Me[R].width,Me[R].height,De,ge,Me[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Xe,Me[R].width,Me[R].height,0,De,ge,Me[R].data);for(let H=0;H<P.length;H++){const ye=P[H].image[R].image;U?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H+1,0,0,ye.width,ye.height,De,ge,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H+1,Xe,ye.width,ye.height,0,De,ge,ye.data)}}else{U?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,De,ge,Me[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Xe,De,ge,Me[R]);for(let H=0;H<P.length;H++){const ne=P[H];U?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H+1,0,0,De,ge,ne.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,H+1,Xe,De,ge,ne.image[R])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),J.__version=se.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ve(E,_,k,Y,se,J){const Re=s.convert(k.format,k.colorSpace),he=s.convert(k.type),Ce=b(k.internalFormat,Re,he,k.colorSpace),Ae=i.get(_),ce=i.get(k);if(ce.__renderTarget=_,!Ae.__hasExternalTextures){const Me=Math.max(1,_.width>>J),Ne=Math.max(1,_.height>>J);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Ce,Me,Ne,_.depth,0,Re,he,null):t.texImage2D(se,J,Ce,Me,Ne,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),le(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,se,ce.__webglTexture,0,de(_)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,se,ce.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,J=S(_.stencilBuffer,se),Re=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=de(_);le(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,J,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,E)}else{const Y=_.textures;for(let se=0;se<Y.length;se++){const J=Y[se],Re=s.convert(J.format,J.colorSpace),he=s.convert(J.type),Ce=b(J.internalFormat,Re,he,J.colorSpace),Ae=de(_);k&&le(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ce,_.width,_.height):le(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const se=Y.__webglTexture,J=de(_);if(_.depthTexture.format===rr)le(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(_.depthTexture.format===sr)le(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function We(E){const _=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=E.texture.mipmaps;Y&&Y.length>0?Te(_.__webglFramebuffer[0],E):Te(_.__webglFramebuffer,E)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),Pe(_.__webglDepthbuffer[Y],E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Pe(_.__webglDepthbuffer,E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(E,_,k){const Y=i.get(E);_!==void 0&&ve(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&We(E)}function w(E){const _=E.texture,k=i.get(E),Y=i.get(_);E.addEventListener("dispose",C);const se=E.textures,J=E.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)k.__webglFramebuffer[he][Ce]=n.createFramebuffer()}else k.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)k.__webglFramebuffer[he]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,Ce=se.length;he<Ce;he++){const Ae=i.get(se[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&le(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ce=se[he];k.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const Ae=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),Me=b(Ce.internalFormat,Ae,ce,Ce.colorSpace,E.isXRRenderTarget===!0),Ne=de(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,k.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ve(k.__webglFramebuffer[he][Ce],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce);else ve(k.__webglFramebuffer[he],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,Ce=se.length;he<Ce;he++){const Ae=se[he],ce=i.get(Ae);let Me=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ce.__webglTexture),He(Me,Ae),ve(k.__webglFramebuffer,E,Ae,n.COLOR_ATTACHMENT0+he,Me,0),m(Ae)&&f(Me)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),He(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ve(k.__webglFramebuffer[Ce],E,_,n.COLOR_ATTACHMENT0,he,Ce);else ve(k.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,he,0);m(_)&&f(he),t.unbindTexture()}E.depthBuffer&&We(E)}function ae(E){const _=E.textures;for(let k=0,Y=_.length;k<Y;k++){const se=_[k];if(m(se)){const J=T(E),Re=i.get(se).__webglTexture;t.bindTexture(J,Re),f(J),t.unbindTexture()}}}const ie=[],ee=[];function te(E){if(E.samples>0){if(le(E)===!1){const _=E.textures,k=E.width,Y=E.height;let se=n.COLOR_BUFFER_BIT;const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(E),he=_.length>1;if(he)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ce=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,se,n.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(n.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ie.push(J),ee.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ce=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function de(E){return Math.min(r.maxSamples,E.samples)}function le(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pe(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Ge(E,_){const k=E.colorSpace,Y=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Ci&&k!==Cn&&(st.getTransfer(k)===lt?(Y!==Qt||se!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function ze(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=w,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=le}function $g(n,e){function t(i,r=Cn){let s;const o=st.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===Jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hl)return n.BYTE;if(i===Vl)return n.SHORT;if(i===nr)return n.UNSIGNED_SHORT;if(i===Zo)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===Xl)return n.ALPHA;if(i===ql)return n.RGB;if(i===Qt)return n.RGBA;if(i===rr)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===$l)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===ea)return n.RGBA_INTEGER;if(i===Jr||i===Kr||i===jr||i===Qr)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uo||i===ho||i===fo||i===po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mo||i===go||i===_o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mo||i===go)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_o)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vo||i===xo||i===Mo||i===So||i===yo||i===Eo||i===bo||i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Lo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===To)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ao)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ro)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Co)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Po)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===Io||i===Uo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Do)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===No||i===Fo||i===Oo||i===Bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===No)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
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

}`;class Kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:Zg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jg extends Ii{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Kg,f={},T=t.getContextAttributes();let b=null,S=null;const I=[],L=[],C=new Ee;let O=null;const y=new Kt;y.viewport=new xt;const M=new Kt;M.viewport=new xt;const D=[y,M],V=new xf;let W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=I[Q];return oe===void 0&&(oe=new Us,I[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=I[Q];return oe===void 0&&(oe=new Us,I[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=I[Q];return oe===void 0&&(oe=new Us,I[Q]=oe),oe.getHandSpace()};function $(Q){const oe=L.indexOf(Q.inputSource);if(oe===-1)return;const ve=I[oe];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||o),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<I.length;Q++){const oe=L[Q];oe!==null&&(L[Q]=null,I[Q].disconnect(oe))}W=null,j=null,m.reset();for(const Q in f)delete f[Q];e.setRenderTarget(b),d=null,p=null,h=null,r=null,S=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",K),r.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,Te=null;T.depth&&(Te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?sr:rr,Pe=T.stencil?ir:Kn);const We={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(We),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new jn(p.textureWidth,p.textureHeight,{format:Qt,type:un,depthTexture:new oc(p.textureWidth,p.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new jn(d.framebufferWidth,d.framebufferHeight,{format:Qt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let oe=0;oe<Q.removed.length;oe++){const ve=Q.removed[oe],Pe=L.indexOf(ve);Pe>=0&&(L[Pe]=null,I[Pe].disconnect(ve))}for(let oe=0;oe<Q.added.length;oe++){const ve=Q.added[oe];let Pe=L.indexOf(ve);if(Pe===-1){for(let We=0;We<I.length;We++)if(We>=L.length){L.push(ve),Pe=We;break}else if(L[We]===null){L[We]=ve,Pe=We;break}if(Pe===-1)break}const Te=I[Pe];Te&&Te.connect(ve)}}const Z=new F,fe=new F;function _e(Q,oe,ve){Z.setFromMatrixPosition(oe.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const Pe=Z.distanceTo(fe),Te=oe.projectionMatrix.elements,We=ve.projectionMatrix.elements,ot=Te[14]/(Te[10]-1),w=Te[14]/(Te[10]+1),ae=(Te[9]+1)/Te[5],ie=(Te[9]-1)/Te[5],ee=(Te[8]-1)/Te[0],te=(We[8]+1)/We[0],de=ot*ee,le=ot*te,pe=Pe/(-ee+te),Ge=pe*-ee;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ(pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ze=ot+pe,E=w+pe,_=de-Ge,k=le+(Pe-Ge),Y=ae*w/E*ze,se=ie*w/E*ze;Q.projectionMatrix.makePerspective(_,k,Y,se,ze,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Se(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let oe=Q.near,ve=Q.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),V.near=M.near=y.near=oe,V.far=M.far=y.far=ve,(W!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,j=V.far),V.layers.mask=Q.layers.mask|6,y.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const Pe=Q.parent,Te=V.cameras;Se(V,Pe);for(let We=0;We<Te.length;We++)Se(Te[We],Pe);Te.length===2?_e(V,y,M):V.projectionMatrix.copy(y.projectionMatrix),He(Q,V,Pe)};function He(Q,oe,ve){ve===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=or*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return f[Q]};let Je=null;function Ke(Q,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Pe=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Pe=!0);for(let w=0;w<ve.length;w++){const ae=ve[w];let ie=null;if(d!==null)ie=d.getViewport(ae);else{const te=h.getViewSubImage(p,ae);ie=te.viewport,w===0&&(e.setRenderTargetTextures(S,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(S))}let ee=D[w];ee===void 0&&(ee=new Kt,ee.layers.enable(w),ee.viewport=new xt,D[w]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),w===0&&(V.matrix.copy(ee.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pe===!0&&V.cameras.push(ee)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const w=h.getDepthInformation(ve[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let w=0;w<ve.length;w++){const ae=ve[w].camera;if(ae){let ie=f[ae];ie||(ie=new ac,f[ae]=ie);const ee=h.getCameraImage(ae);ie.sourceTexture=ee}}}}for(let ve=0;ve<I.length;ve++){const Pe=L[ve],Te=I[ve];Pe!==null&&Te!==void 0&&Te.update(Pe,oe,c||o)}Je&&Je(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ze=new vc;Ze.setAnimationLoop(Ke),this.setAnimationLoop=function(Q){Je=Q},this.dispose=function(){}}}const Vn=new hn,Qg=new Mt;function e_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ic(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Vn.copy(S),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Vn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function t_(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;i.uniformBlockBinding(T,S)}function c(T,b){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(T,I);const L=e.render.frame;s[T.id]!==L&&(p(T),s[T.id]=L)}function u(T){const b=h();T.__bindingPointIndex=b;const S=n.createBuffer(),I=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const b=r[T.id],S=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,C=S.length;L<C;L++){const O=Array.isArray(S[L])?S[L]:[S[L]];for(let y=0,M=O.length;y<M;y++){const D=O[y];if(d(D,L,y,I)===!0){const V=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let $=0;$<W.length;$++){const K=W[$],re=v(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,V+j,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,j),j+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,b,S,I){const L=T.value,C=b+"_"+S;if(I[C]===void 0)return typeof L=="number"||typeof L=="boolean"?I[C]=L:I[C]=L.clone(),!0;{const O=I[C];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return I[C]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function g(T){const b=T.uniforms;let S=0;const I=16;for(let C=0,O=b.length;C<O;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,D=y.length;M<D;M++){const V=y[M],W=Array.isArray(V.value)?V.value:[V.value];for(let j=0,$=W.length;j<$;j++){const K=W[j],re=v(K),Z=S%I,fe=Z%re.boundary,_e=Z+fe;S+=fe,_e!==0&&I-_e<re.storage&&(S+=I-_e),V.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=re.storage}}}const L=S%I;return L>0&&(S+=I-L),T.__size=S,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class n_{constructor(e={}){const{canvas:t=ju(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Ft;let L=0,C=0,O=null,y=-1,M=null;const D=new xt,V=new xt;let W=null;const j=new it(0);let $=0,K=t.width,re=t.height,Z=1,fe=null,_e=null;const Se=new xt(0,0,K,re),He=new xt(0,0,K,re);let Je=!1;const Ke=new ra;let Ze=!1,Q=!1;const oe=new Mt,ve=new F,Pe=new xt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ot(){return O===null?Z:1}let w=i;function ae(x,B){return t.getContext(x,B)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",P,!1),w===null){const B="webgl2";if(w=ae(B,x),w===null)throw ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ie,ee,te,de,le,pe,Ge,ze,E,_,k,Y,se,J,Re,he,Ce,Ae,ce,Me,Ne,De,ge,Xe;function U(){ie=new fm(w),ie.init(),De=new $g(w,ie),ee=new sm(w,ie,e,De),te=new qg(w,ie),ee.reversedDepthBuffer&&p&&te.buffers.depth.setReversed(!0),de=new mm(w),le=new Ig,pe=new Yg(w,ie,te,le,ee,De,de),Ge=new am(S),ze=new hm(S),E=new Sf(w),ge=new im(w,E),_=new dm(w,E,de,ge),k=new _m(w,_,E,de),ce=new gm(w,ee,pe),he=new om(le),Y=new Dg(S,Ge,ze,ie,ee,ge,he),se=new e_(S,le),J=new Ng,Re=new Hg(ie),Ae=new nm(S,Ge,ze,te,k,d,l),Ce=new Wg(S,k,ee),Xe=new t_(w,de,ee,te),Me=new rm(w,ie,de),Ne=new pm(w,ie,de),de.programs=Y.programs,S.capabilities=ee,S.extensions=ie,S.properties=le,S.renderLists=J,S.shadowMap=Ce,S.state=te,S.info=de}U();const A=new jg(S,w);this.xr=A,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=ie.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ie.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize(K,re,!1))},this.getSize=function(x){return x.set(K,re)},this.setSize=function(x,B,X=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,re=B,t.width=Math.floor(x*Z),t.height=Math.floor(B*Z),X===!0&&(t.style.width=x+"px",t.style.height=B+"px"),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(K*Z,re*Z).floor()},this.setDrawingBufferSize=function(x,B,X){K=x,re=B,Z=X,t.width=Math.floor(x*X),t.height=Math.floor(B*X),this.setViewport(0,0,x,B)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,B,X,q){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,B,X,q),te.viewport(D.copy(Se).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,B,X,q){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,B,X,q),te.scissor(V.copy(He).multiplyScalar(Z).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){te.setScissorTest(Je=x)},this.setOpaqueSort=function(x){fe=x},this.setTransparentSort=function(x){_e=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,X=!0){let q=0;if(x){let z=!1;if(O!==null){const ue=O.texture.format;z=ue===ea||ue===Qo||ue===jo}if(z){const ue=O.texture.type,be=ue===un||ue===Kn||ue===nr||ue===ir||ue===Jo||ue===Ko,Le=Ae.getClearColor(),we=Ae.getClearAlpha(),Be=Le.r,ke=Le.g,Ue=Le.b;be?(g[0]=Be,g[1]=ke,g[2]=Ue,g[3]=we,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Be,v[1]=ke,v[2]=Ue,v[3]=we,w.clearBufferiv(w.COLOR,0,v))}else q|=w.COLOR_BUFFER_BIT}B&&(q|=w.DEPTH_BUFFER_BIT),X&&(q|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",P,!1),Ae.dispose(),J.dispose(),Re.dispose(),le.dispose(),Ge.dispose(),ze.dispose(),k.dispose(),ge.dispose(),Xe.dispose(),Y.dispose(),A.dispose(),A.removeEventListener("sessionstart",et),A.removeEventListener("sessionend",Oe),Ve.stop()};function N(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=de.autoReset,B=Ce.enabled,X=Ce.autoUpdate,q=Ce.needsUpdate,z=Ce.type;U(),de.autoReset=x,Ce.enabled=B,Ce.autoUpdate=X,Ce.needsUpdate=q,Ce.type=z}function P(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function R(x){const B=x.target;B.removeEventListener("dispose",R),H(B)}function H(x){ne(x),le.remove(x)}function ne(x){const B=le.get(x).programs;B!==void 0&&(B.forEach(function(X){Y.releaseProgram(X)}),x.isShaderMaterial&&Y.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,X,q,z,ue){B===null&&(B=Te);const be=z.isMesh&&z.matrixWorld.determinant()<0,Le=Oc(x,B,X,q,z);te.setMaterial(q,be);let we=X.index,Be=1;if(q.wireframe===!0){if(we=_.getWireframeAttribute(X),we===void 0)return;Be=2}const ke=X.drawRange,Ue=X.attributes.position;let nt=ke.start*Be,at=(ke.start+ke.count)*Be;ue!==null&&(nt=Math.max(nt,ue.start*Be),at=Math.min(at,(ue.start+ue.count)*Be)),we!==null?(nt=Math.max(nt,0),at=Math.min(at,we.count)):Ue!=null&&(nt=Math.max(nt,0),at=Math.min(at,Ue.count));const vt=at-nt;if(vt<0||vt===1/0)return;ge.setup(z,q,Le,X,we);let ht,ct=Me;if(we!==null&&(ht=E.get(we),ct=Ne,ct.setIndex(ht)),z.isMesh)q.wireframe===!0?(te.setLineWidth(q.wireframeLinewidth*ot()),ct.setMode(w.LINES)):ct.setMode(w.TRIANGLES);else if(z.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),te.setLineWidth(Fe*ot()),z.isLineSegments?ct.setMode(w.LINES):z.isLineLoop?ct.setMode(w.LINE_LOOP):ct.setMode(w.LINE_STRIP)}else z.isPoints?ct.setMode(w.POINTS):z.isSprite&&ct.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,pt=z._multiDrawCounts,rt=z._multiDrawCount,kt=we?E.get(we).bytesPerElement:1,ni=le.get(q).currentProgram.getUniforms();for(let Ht=0;Ht<rt;Ht++)ni.setValue(w,"_gl_DrawID",Ht),ct.render(Fe[Ht]/kt,pt[Ht])}else if(z.isInstancedMesh)ct.renderInstances(nt,vt,z.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,Fe);ct.renderInstances(nt,vt,pt)}else ct.render(nt,vt)};function ye(x,B,X){x.transparent===!0&&x.side===on&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,Sr(x,B,X),x.side=In,x.needsUpdate=!0,Sr(x,B,X),x.side=on):Sr(x,B,X)}this.compile=function(x,B,X=null){X===null&&(X=x),f=Re.get(X),f.init(B),b.push(f),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),x!==X&&x.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const q=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const Le=ue[be];ye(Le,X,z),q.add(Le)}else ye(ue,X,z),q.add(ue)}),f=b.pop(),q},this.compileAsync=function(x,B,X=null){const q=this.compile(x,B,X);return new Promise(z=>{function ue(){if(q.forEach(function(be){le.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){z(x);return}setTimeout(ue,10)}ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let me=null;function Ie(x){me&&me(x)}function et(){Ve.stop()}function Oe(){Ve.start()}const Ve=new vc;Ve.setAnimationLoop(Ie),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(x){me=x,A.setAnimationLoop(x),x===null?Ve.stop():Ve.start()},A.addEventListener("sessionstart",et),A.addEventListener("sessionend",Oe),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(B),B=A.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,B,O),f=Re.get(x,b.length),f.init(B),b.push(f),oe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ke.setFromProjectionMatrix(oe,ln,B.reversedDepth),Q=this.localClippingEnabled,Ze=he.init(this.clippingPlanes,Q),m=J.get(x,T.length),m.init(),T.push(m),A.enabled===!0&&A.isPresenting===!0){const ue=S.xr.getDepthSensingMesh();ue!==null&&ft(ue,B,-1/0,S.sortObjects)}ft(x,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(fe,_e),We=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,We&&Ae.addToRenderList(m,x),this.info.render.frame++,Ze===!0&&he.beginShadows();const X=f.state.shadowsArray;Ce.render(X,x,B),Ze===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ue=B.cameras;if(z.length>0)for(let be=0,Le=ue.length;be<Le;be++){const we=ue[be];_t(q,z,x,we)}We&&Ae.render(x);for(let be=0,Le=ue.length;be<Le;be++){const we=ue[be];dt(m,x,we,we.viewport)}}else z.length>0&&_t(q,z,x,B),We&&Ae.render(x),dt(m,x,B);O!==null&&C===0&&(pe.updateMultisampleRenderTarget(O),pe.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(S,x,B),ge.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],Ze===!0&&he.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ft(x,B,X,q){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ke.intersectsSprite(x)){q&&Pe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(oe);const be=k.update(x),Le=x.material;Le.visible&&m.push(x,be,Le,X,Pe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ke.intersectsObject(x))){const be=k.update(x),Le=x.material;if(q&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pe.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Pe.copy(be.boundingSphere.center)),Pe.applyMatrix4(x.matrixWorld).applyMatrix4(oe)),Array.isArray(Le)){const we=be.groups;for(let Be=0,ke=we.length;Be<ke;Be++){const Ue=we[Be],nt=Le[Ue.materialIndex];nt&&nt.visible&&m.push(x,be,nt,X,Pe.z,Ue)}}else Le.visible&&m.push(x,be,Le,X,Pe.z,null)}}const ue=x.children;for(let be=0,Le=ue.length;be<Le;be++)ft(ue[be],B,X,q)}function dt(x,B,X,q){const z=x.opaque,ue=x.transmissive,be=x.transparent;f.setupLightsView(X),Ze===!0&&he.setGlobalState(S.clippingPlanes,X),q&&te.viewport(D.copy(q)),z.length>0&&ti(z,B,X),ue.length>0&&ti(ue,B,X),be.length>0&&ti(be,B,X),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function _t(x,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new jn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?dr:un,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ue=f.state.transmissionRenderTarget[q.id],be=q.viewport||D;ue.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const Le=S.getRenderTarget(),we=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(j),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),We&&Ae.render(X);const ke=S.toneMapping;S.toneMapping=Ln;const Ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Ze===!0&&he.setGlobalState(S.clippingPlanes,q),ti(x,X,q),pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue),ie.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let at=0,vt=B.length;at<vt;at++){const ht=B[at],ct=ht.object,Fe=ht.geometry,pt=ht.material,rt=ht.group;if(pt.side===on&&ct.layers.test(q.layers)){const kt=pt.side;pt.side=zt,pt.needsUpdate=!0,ma(ct,X,q,Fe,pt,rt),pt.side=kt,pt.needsUpdate=!0,nt=!0}}nt===!0&&(pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue))}S.setRenderTarget(Le,we,Be),S.setClearColor(j,$),Ue!==void 0&&(q.viewport=Ue),S.toneMapping=ke}function ti(x,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ue=x.length;z<ue;z++){const be=x[z],Le=be.object,we=be.geometry,Be=be.group;let ke=be.material;ke.allowOverride===!0&&q!==null&&(ke=q),Le.layers.test(X.layers)&&ma(Le,B,X,we,ke,Be)}}function ma(x,B,X,q,z,ue){x.onBeforeRender(S,B,X,q,z,ue),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(S,B,X,q,x,ue),z.transparent===!0&&z.side===on&&z.forceSinglePass===!1?(z.side=zt,z.needsUpdate=!0,S.renderBufferDirect(X,B,q,z,x,ue),z.side=In,z.needsUpdate=!0,S.renderBufferDirect(X,B,q,z,x,ue),z.side=on):S.renderBufferDirect(X,B,q,z,x,ue),x.onAfterRender(S,B,X,q,z,ue)}function Sr(x,B,X){B.isScene!==!0&&(B=Te);const q=le.get(x),z=f.state.lights,ue=f.state.shadowsArray,be=z.state.version,Le=Y.getParameters(x,z.state,ue,B,X),we=Y.getProgramCacheKey(Le);let Be=q.programs;q.environment=x.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(x.isMeshStandardMaterial?ze:Ge).get(x.envMap||q.environment),q.envMapRotation=q.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,Be===void 0&&(x.addEventListener("dispose",R),Be=new Map,q.programs=Be);let ke=Be.get(we);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===be)return _a(x,Le),ke}else Le.uniforms=Y.getUniforms(x),x.onBeforeCompile(Le,S),ke=Y.acquireProgram(Le,we),Be.set(we,ke),q.uniforms=Le.uniforms;const Ue=q.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ue.clippingPlanes=he.uniform),_a(x,Le),q.needsLights=zc(x),q.lightsStateVersion=be,q.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function ga(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=es.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function _a(x,B){const X=le.get(x);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Oc(x,B,X,q,z){B.isScene!==!0&&(B=Te),pe.resetTextureUnits();const ue=B.fog,be=q.isMeshStandardMaterial?B.environment:null,Le=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ci,we=(q.isMeshStandardMaterial?ze:Ge).get(q.envMap||be),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let vt=Ln;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=S.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=ht!==void 0?ht.length:0,Fe=le.get(q),pt=f.state.lights;if(Ze===!0&&(Q===!0||x!==M)){const Lt=x===M&&q.id===y;he.setState(q,x,Lt)}let rt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==pt.state.version||Fe.outputColorSpace!==Le||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==we||q.fog===!0&&Fe.fog!==ue||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==he.numPlanes||Fe.numIntersection!==he.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==ke||Fe.morphTargets!==Ue||Fe.morphNormals!==nt||Fe.morphColors!==at||Fe.toneMapping!==vt||Fe.morphTargetsCount!==ct)&&(rt=!0):(rt=!0,Fe.__version=q.version);let kt=Fe.currentProgram;rt===!0&&(kt=Sr(q,B,z));let ni=!1,Ht=!1,Oi=!1;const mt=kt.getUniforms(),Xt=Fe.uniforms;if(te.useProgram(kt.program)&&(ni=!0,Ht=!0,Oi=!0),q.id!==y&&(y=q.id,Ht=!0),ni||M!==x){te.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),mt.setValue(w,"projectionMatrix",x.projectionMatrix),mt.setValue(w,"viewMatrix",x.matrixWorldInverse);const Nt=mt.map.cameraPosition;Nt!==void 0&&Nt.setValue(w,ve.setFromMatrixPosition(x.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ht=!0,Oi=!0)}if(z.isSkinnedMesh){mt.setOptional(w,z,"bindMatrix"),mt.setOptional(w,z,"bindMatrixInverse");const Lt=z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(w,"boneTexture",Lt.boneTexture,pe))}z.isBatchedMesh&&(mt.setOptional(w,z,"batchingTexture"),mt.setValue(w,"batchingTexture",z._matricesTexture,pe),mt.setOptional(w,z,"batchingIdTexture"),mt.setValue(w,"batchingIdTexture",z._indirectTexture,pe),mt.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&mt.setValue(w,"batchingColorTexture",z._colorsTexture,pe));const qt=X.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ce.update(z,X,kt),(Ht||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,mt.setValue(w,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Xt.envMap.value=we,Xt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Ht&&(mt.setValue(w,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Bc(Xt,Oi),ue&&q.fog===!0&&se.refreshFogUniforms(Xt,ue),se.refreshMaterialUniforms(Xt,q,Z,re,f.state.transmissionRenderTarget[x.id]),es.upload(w,ga(Fe),Xt,pe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(es.upload(w,ga(Fe),Xt,pe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(w,"center",z.center),mt.setValue(w,"modelViewMatrix",z.modelViewMatrix),mt.setValue(w,"normalMatrix",z.normalMatrix),mt.setValue(w,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Lt=q.uniformsGroups;for(let Nt=0,hs=Lt.length;Nt<hs;Nt++){const Fn=Lt[Nt];Xe.update(Fn,kt),Xe.bind(Fn,kt)}}return kt}function Bc(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function zc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,B,X){const q=le.get(x);q.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),le.get(x.texture).__webglTexture=B,le.get(x.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const X=le.get(x);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const kc=w.createFramebuffer();this.setRenderTarget=function(x,B=0,X=0){O=x,L=B,C=X;let q=!0,z=null,ue=!1,be=!1;if(x){const we=le.get(x);if(we.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(w.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)pe.setupRenderTarget(x);else if(we.__hasExternalTextures)pe.rebindTextures(x,le.get(x.texture).__webglTexture,le.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&le.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(x)}}const Be=x.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const ke=le.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?z=ke[B][X]:z=ke[B],ue=!0):x.samples>0&&pe.useMultisampledRTT(x)===!1?z=le.get(x).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[X]:z=ke,D.copy(x.viewport),V.copy(x.scissor),W=x.scissorTest}else D.copy(Se).multiplyScalar(Z).floor(),V.copy(He).multiplyScalar(Z).floor(),W=Je;if(X!==0&&(z=kc),te.bindFramebuffer(w.FRAMEBUFFER,z)&&q&&te.drawBuffers(x,z),te.viewport(D),te.scissor(V),te.setScissorTest(W),ue){const we=le.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(be){const we=B;for(let Be=0;Be<x.textures.length;Be++){const ke=le.get(x.textures[Be]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Be,ke.__webglTexture,X,we)}}else if(x!==null&&X!==0){const we=le.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,we.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(x,B,X,q,z,ue,be,Le=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=le.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){te.bindFramebuffer(w.FRAMEBUFFER,we);try{const Be=x.textures[Le],ke=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-q&&X>=0&&X<=x.height-z&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),w.readPixels(B,X,q,z,De.convert(ke),De.convert(Ue),ue))}finally{const Be=O!==null?le.get(O).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(x,B,X,q,z,ue,be,Le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=le.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(B>=0&&B<=x.width-q&&X>=0&&X<=x.height-z){te.bindFramebuffer(w.FRAMEBUFFER,we);const Be=x.textures[Le],ke=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,nt),w.bufferData(w.PIXEL_PACK_BUFFER,ue.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),w.readPixels(B,X,q,z,De.convert(ke),De.convert(Ue),0);const at=O!==null?le.get(O).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,at);const vt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Qu(w,vt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,nt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ue),w.deleteBuffer(nt),w.deleteSync(vt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,X=0){const q=Math.pow(2,-X),z=Math.floor(x.image.width*q),ue=Math.floor(x.image.height*q),be=B!==null?B.x:0,Le=B!==null?B.y:0;pe.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,X,0,0,be,Le,z,ue),te.unbindTexture()};const Hc=w.createFramebuffer(),Vc=w.createFramebuffer();this.copyTextureToTexture=function(x,B,X=null,q=null,z=0,ue=null){ue===null&&(z!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=z,z=0):ue=0);let be,Le,we,Be,ke,Ue,nt,at,vt;const ht=x.isCompressedTexture?x.mipmaps[ue]:x.image;if(X!==null)be=X.max.x-X.min.x,Le=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ke=X.min.y,Ue=X.isBox3?X.min.z:0;else{const qt=Math.pow(2,-z);be=Math.floor(ht.width*qt),Le=Math.floor(ht.height*qt),x.isDataArrayTexture?we=ht.depth:x.isData3DTexture?we=Math.floor(ht.depth*qt):we=1,Be=0,ke=0,Ue=0}q!==null?(nt=q.x,at=q.y,vt=q.z):(nt=0,at=0,vt=0);const ct=De.convert(B.format),Fe=De.convert(B.type);let pt;B.isData3DTexture?(pe.setTexture3D(B,0),pt=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(pe.setTexture2DArray(B,0),pt=w.TEXTURE_2D_ARRAY):(pe.setTexture2D(B,0),pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const rt=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(w.UNPACK_SKIP_PIXELS),Ht=w.getParameter(w.UNPACK_SKIP_ROWS),Oi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ht.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ht.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ue);const mt=x.isDataArrayTexture||x.isData3DTexture,Xt=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const qt=le.get(x),Lt=le.get(B),Nt=le.get(qt.__renderTarget),hs=le.get(Lt.__renderTarget);te.bindFramebuffer(w.READ_FRAMEBUFFER,Nt.__webglFramebuffer),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Fn=0;Fn<we;Fn++)mt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(x).__webglTexture,z,Ue+Fn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(B).__webglTexture,ue,vt+Fn)),w.blitFramebuffer(Be,ke,be,Le,nt,at,be,Le,w.DEPTH_BUFFER_BIT,w.NEAREST);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||le.has(x)){const qt=le.get(x),Lt=le.get(B);te.bindFramebuffer(w.READ_FRAMEBUFFER,Hc),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,Vc);for(let Nt=0;Nt<we;Nt++)mt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,qt.__webglTexture,z,Ue+Nt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,qt.__webglTexture,z),Xt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Lt.__webglTexture,ue,vt+Nt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Lt.__webglTexture,ue),z!==0?w.blitFramebuffer(Be,ke,be,Le,nt,at,be,Le,w.COLOR_BUFFER_BIT,w.NEAREST):Xt?w.copyTexSubImage3D(pt,ue,nt,at,vt+Nt,Be,ke,be,Le):w.copyTexSubImage2D(pt,ue,nt,at,Be,ke,be,Le);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Xt?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(pt,ue,nt,at,vt,be,Le,we,ct,Fe,ht.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(pt,ue,nt,at,vt,be,Le,we,ct,ht.data):w.texSubImage3D(pt,ue,nt,at,vt,be,Le,we,ct,Fe,ht):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ue,nt,at,be,Le,ct,Fe,ht.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ue,nt,at,ht.width,ht.height,ct,ht.data):w.texSubImage2D(w.TEXTURE_2D,ue,nt,at,be,Le,ct,Fe,ht);w.pixelStorei(w.UNPACK_ROW_LENGTH,rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ht),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Oi),ue===0&&B.generateMipmaps&&w.generateMipmap(pt),te.unbindTexture()},this.initRenderTarget=function(x){le.get(x).__webglFramebuffer===void 0&&pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?pe.setTextureCube(x,0):x.isData3DTexture?pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?pe.setTexture2DArray(x,0):pe.setTexture2D(x,0),te.unbindTexture()},this.resetState=function(){L=0,C=0,O=null,te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const i_=["./art/fish-v3/fish0.webp","./art/fish-v3/fish1.webp","./art/fish-v3/fish2.webp","./art/fish-v3/fish3.webp","./art/fish-v3/fish4.webp","./art/fish-v3/fish5.webp"],Ec=new _r(1,1);Ec.userData.shared=!0;const r_=new mf,bc=new Map,Go=[],Tc=[];function Ac(){Go.length||i_.forEach((n,e)=>{const t=new rn({transparent:!0,alphaTest:.04,depthWrite:!0,side:on,toneMapped:!1});t.visible=!1,t.userData.shared=!0,Go.push(t),Tc.push(new Promise((i,r)=>{r_.load(n,s=>{s.colorSpace=Ft,s.anisotropy=2,t.map=s,t.visible=!0,t.needsUpdate=!0;const o=s.image,a=document.createElement("canvas");a.width=o.naturalWidth,a.height=o.naturalHeight;const l=a.getContext("2d",{willReadFrequently:!0});if(!l){r(new Error("Fish alpha mask unavailable"));return}l.drawImage(o,0,0),bc.set(e,{data:l.getImageData(0,0,a.width,a.height).data,width:a.width,height:a.height}),i()},void 0,()=>r(new Error(`Fish image ${e} unavailable`)))}))})}function s_(){return Ac(),Promise.all(Tc).then(()=>{})}function qr(n){Ac();const e=Number.isInteger(n)&&n>=0&&n<6?n:0,t=new Wt,i=new ut(Ec,Go[e]);return i.name="generated-fish",t.add(i),t.userData.species=e,t.userData.kind=e,Object.defineProperty(t.userData,"image",{value:i,configurable:!0}),t}function Vi(n,e,t=1){const i=n.userData.image;if(!i)return;const r=e*2.8+n.userData.species*1.7;i.rotation.z=t===0?0:Math.sin(r)*.026;const s=t===0?0:Math.sin(r*1.3)*.012;i.scale.set(1+s,1-s*.5,1)}function o_(n,e){const t=n.userData.image,i=bc.get(n.userData.species);if(!t||!i||!n.visible)return!1;const r=t.worldToLocal(e.clone());if(r.x<-.5||r.x>.5||r.y<-.5||r.y>.5)return!1;const s=Math.min(i.width-1,Math.max(0,Math.floor((r.x+.5)*i.width))),o=Math.min(i.height-1,Math.max(0,Math.floor((.5-r.y)*i.height)));return i.data[(o*i.width+s)*4+3]>35}const vn=1/120,a_=.25,l_=12,c_=-92,Yr=100,Tl=.008,Al=(n,e,t)=>Math.max(e,Math.min(t,n)),Gn=(n,e)=>Number.isFinite(n)?n:e;function wl(n){if(![n.left,n.right,n.top,n.bottom].every(Number.isFinite)||n.right<=n.left||n.bottom<=n.top)throw new RangeError("Bubble bounds must be finite with positive width and height");return{...n}}function Rl(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)/4294967296*Math.PI*2}function u_(n){let e=wl(n);const t=new Map,i=new Map;let r=0,s=0;function o(u){const h=Math.min(e.right-e.left,e.bottom-e.top)/2;return Math.min(h,Math.max(.01,Gn(u,24)))}function a(u){u.radius=o(u.radius);const h=u.radius;u.x=Gn(u.x,(e.left+e.right)/2),u.y=Gn(u.y,e.bottom-h),u.vx=Al(Gn(u.vx,0),-Yr,Yr),u.vy=Al(Gn(u.vy,0),-Yr,Yr);const p=e.left+h,d=e.right-h,g=e.top+h,v=e.bottom-h;u.x<p?(u.x=p,u.vx<0&&(u.vx*=-.055)):u.x>d&&(u.x=d,u.vx>0&&(u.vx*=-.055)),u.y<g?(u.y=g,u.vy<0&&(u.vy*=-.055)):u.y>v&&(u.y=v,u.vy>0&&(u.vy*=-.055))}function l(u,h){const p=h.x-u.x,d=h.y-u.y,g=u.radius+h.radius,v=p*p+d*d;if(v>=(g-Tl)**2)return;let m=Math.sqrt(v),f,T;if(m>1e-5)f=p/m,T=d/m;else{const O=Rl(`${u.id}|${h.id}`);f=Math.cos(O),T=Math.sin(O),m=0}const b=1/(u.radius*u.radius),S=1/(h.radius*h.radius),I=b+S,L=(g-m-Tl)/I;u.x-=f*L*b,u.y-=T*L*b,h.x+=f*L*S,h.y+=T*L*S;const C=(h.vx-u.vx)*f+(h.vy-u.vy)*T;if(C<0){const O=-1.055*C/I;u.vx-=f*O*b,u.vy-=T*O*b,h.vx+=f*O*S,h.vy+=T*O*S}}function c(){s+=vn;const u=[...t.values()],h=Math.exp(-1.55*vn),p=Math.exp(-1.05*vn);for(const d of u){a(d);const g=i.get(d.id)??0,v=Math.sin(s*.55+g)*5.5+Math.sin(d.y*.014+s*.3)*1.5;d.vx=(d.vx+v*vn)*p,d.vy=(d.vy+c_*vn)*h,d.x+=d.vx*vn,d.y+=d.vy*vn}for(let d=0;d<l_;d++){for(let g=0;g<u.length;g++)for(let v=g+1;v<u.length;v++)l(u[g],u[v]);for(const g of u)a(g)}}return{bodies:t,add(u){if(!u.id)throw new RangeError("A bubble must have a nonempty id");const h={...u,vx:Gn(u.vx,0),vy:Gn(u.vy,0)};return a(h),t.set(h.id,h),i.set(h.id,Rl(h.id)),h},remove(u){t.delete(u),i.delete(u)},setRadius(u,h){const p=t.get(u);p&&(p.radius=o(h),a(p))},setBounds(u){e=wl(u);for(const h of t.values())a(h)},step(u){if(!Number.isFinite(u)||u<=0)return;r+=Math.min(a_,u);let h=0;for(;r+1e-10>=vn&&h<30;)c(),r=Math.max(0,r-vn),h++},clear(){t.clear(),i.clear(),r=0,s=0}}}const Tt={pop:100,flight:360,settle:100,match:120,collect:330,recoil:220,shift:75},Ys=()=>matchMedia("(prefers-reduced-motion: reduce)").matches||!1,$n=new os(1,24,16);$n.userData.shared=!0;const wc=new os(1,8,6);wc.userData.shared=!0;const $s=new Map;function Xi(n){if(!$s.has(n)){const e=new cf({color:n,roughness:.3,metalness:.05});e.userData.shared=!0,$s.set(n,e)}return $s.get(n)}function $r(n,e,t,i,r,s,o,a){const l=new ut($n,Xi(e));return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l}function Cl(n,e,t,i){const r=-n/2,s=-e/2,o=t,a=new fc;return a.moveTo(r+o,s),a.lineTo(r+n-o,s),a.quadraticCurveTo(r+n,s,r+n,s+o),a.lineTo(r+n,s+e-o),a.quadraticCurveTo(r+n,s+e,r+n-o,s+e),a.lineTo(r+o,s+e),a.quadraticCurveTo(r,s+e,r,s+e-o),a.lineTo(r,s+o),a.quadraticCurveTo(r,s,r+o,s),new la(a,{depth:i,bevelEnabled:!0,bevelSize:Math.min(2,o*.25),bevelThickness:2,bevelSegments:3,steps:1})}function Pl(n=5619711,e=1){return new yn({transparent:!0,depthWrite:!1,uniforms:{tint:{value:new it(n)},alpha:{value:e},glow:{value:0}},vertexShader:"varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 n;varying vec3 v;uniform vec3 tint;uniform float alpha;uniform float glow;void main(){vec3 N=normalize(n);float facing=abs(dot(N,normalize(v)));float edge=pow(1.-facing,1.8);float sharp=pow(1.-facing,5.);float shine=pow(max(0.,dot(N,normalize(vec3(-.48,.63,.61)))),42.);float lower=pow(max(0.,dot(N,normalize(vec3(.38,-.76,.5)))),18.);vec3 ir=mix(vec3(.12,.74,1.),vec3(.88,.35,1.),.5+.5*sin(atan(N.y,N.x)*2.5));vec3 col=mix(tint,ir,edge*.58)+shine*.9+lower*.30+sharp*.45;gl_FragColor=vec4(col,alpha*(.025+edge*.51+sharp*.24+shine*.87+lower*.13+glow*.22));}"})}function nn(n){n.traverse(e=>{if(e instanceof ut){e.geometry.userData.shared||e.geometry.dispose();for(const t of Array.isArray(e.material)?e.material:[e.material])t.userData.shared||t.dispose()}})}const h_=n=>n*n*(3-2*n),Zr=n=>1-Math.pow(1-n,3);function f_(n,e,t){const i=new n_({alpha:!0,antialias:!0,powerPreference:"low-power"});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=Ft,i.domElement.setAttribute("aria-hidden","true"),n.prepend(i.domElement);const r=new Th,s=new ua(-200,200,400,-400,.1,3e3);s.position.z=1e3,r.add(new gf(16777215,4538733,1.5));const o=new Qa(16774364,2);o.position.set(-250,400,650),r.add(o);const a=new Qa(8903935,.8);a.position.set(350,60,300),r.add(a);const l=new Wt,c=new Wt,u=new Wt;r.add(c,l,u);const h=new Map,p=new Map,d=u_({left:0,right:400,top:0,bottom:800}),g=new Set;let v=[],m,f=0,T=0,b=!0,S="",I=0,L=0,C=0,O=0,y=0,M=0,D=3,V=[],W=[],j=[],$,K,re="",Z=-1,fe=0,_e=[],Se=[],He=0,Je=!1;const Ke=document.createElement("div");Ke.className="tray-slots",Ke.setAttribute("aria-hidden","true"),n.append(Ke);const Ze=document.createElement("div");Ze.className="shelf-cards",Ze.setAttribute("aria-hidden","true"),n.append(Ze);const Q=document.createElement("div");Q.className="fish-targets",n.append(Q);const oe=new ResizeObserver(()=>{b=!0});oe.observe(n);const ve=(A,N,G=0)=>new F(A-f/2,T/2-N,G),Pe=A=>ve(O+C*(A+.5),L,130);function Te(A,N,G,P=0){W.push({start:performance.now()+P,duration:A,update:N,done:G})}function We(A,N){V.push({at:performance.now()+A,run:N}),V.sort((G,P)=>G.at-P.at)}function ot(A,N,G){const P=A.position.clone();Te(G,R=>A.position.lerpVectors(P,N,Zr(R)))}function w(A,N,G=.16,P=180){Te(P,R=>A.scale.setScalar(N*(1+Math.sin(R*Math.PI)*G)),()=>A.scale.setScalar(N))}function ae(){for(const A of[...u.children])u.remove(A),nn(A);j=[],W=[],V=[]}function ie(){const A=$;$=void 0,K=void 0,ae();for(const N of g)r.remove(N),nn(N);g.clear();for(const N of p.values())N.group.scale.setScalar(1),N.card.classList.remove("matching");for(const N of Ke.children)N.classList.remove("matching");A?.(!1)}function ee(A){Q.querySelectorAll("button").forEach(N=>N.disabled=!Je||!A||m?.status!=="playing")}function te(A){return A.collected.flatMap((N,G)=>N>0||A.tray.includes(G)||A.bubbles.some(P=>P.fish.includes(G))?[G]:[])}function de(A,N,G,P){const R=new Wt;R.position.copy(ve(N,G)),c.add(R);const H=new ut($n,Pl(6542335,.83));H.scale.set(P,P*.88,P*.62),H.position.z=5,R.add(H);const ne=new ut(new ji(P*.73,2.4,10,48),Xi(7921407));ne.rotation.x=1.22,ne.position.set(0,P*.77,22),R.add(ne);const ye=new ut(new ji(P*.73,.7,8,48),new rn({color:15400959}));ye.rotation.x=1.22,ye.position.set(0,P*.81,24),R.add(ye);const me=new ut(new sa(P*.84,40),new rn({color:49151,transparent:!0,opacity:.24,depthWrite:!1}));me.rotation.x=-1.15,me.position.set(0,P*.43,0),R.add(me);const Ie=new ut($n,new rn({color:1544182,transparent:!0,opacity:.14,depthWrite:!1}));Ie.scale.set(P*.91,P*.68,P*.45),Ie.position.set(0,-P*.1,-10),R.add(Ie),$r(R,15847040,0,-P*.65,7,P*.7,P*.11,P*.36),$r(R,15184475,0,-P*.7,8,P*.61,P*.065,P*.29);for(let dt=0;dt<3;dt++){const _t=$r(R,[7593271,10544204,4704589][dt],P*(-.56+dt*.09),P*(-.35+dt*.03),11,P*.045,P*(.23-dt*.025),P*.025);_t.rotation.z=(dt-1)*.35}$r(R,12620234,P*.44,-P*.53,16,P*.11,P*.075,P*.09);const et=new Wt;et.position.z=15,R.add(et);const Oe=document.createElement("div");Oe.className="target-card",Ze.append(Oe);const Ve=document.createElement("strong");Ve.className="target-count",Oe.append(Ve);const ft=qr(A);return c.add(ft),{group:R,contents:et,portrait:ft,base:R.position.clone(),kind:A,radius:P,count:Ve,card:Oe,shown:-1}}function le(A,N){Se=A.slice(),_e=N.slice(),n.dataset.visualTray=N.join(","),n.dataset.visualCollected=A.join(",");for(const G of p.values()){const P=m?m.bubbles.reduce((Ie,et)=>Ie+et.fish.filter(Oe=>Oe===G.kind).length,0)+m.tray.filter(Ie=>Ie===G.kind).length+(m.collected[G.kind]??0):0,R=A[G.kind]??0,H=N.filter(Ie=>Ie===G.kind).length,ne=P>0&&R>=P;if(G.count.textContent=ne?"✓":`${H}/3`,G.card.classList.toggle("complete",ne),G.card.dataset.kind=String(G.kind),G.shown===R)continue;G.shown=R,nn(G.contents),G.contents.clear();const ye=Math.min(3,R),me=G.radius;for(let Ie=0;Ie<ye;Ie++){const et=qr(G.kind);et.scale.setScalar(me*(ye===1?.98:.65)),et.position.set((Ie-(ye-1)/2)*me*.42,(Ie%2?.11:-.18)*me,12+Ie*3),et.userData.jarBase=et.position.clone(),G.contents.add(et)}}}function pe(A){nn(c),c.clear(),Ze.replaceChildren(),Ke.replaceChildren(),p.clear();const N=te(A),G=N.length,P=Math.min(f,T*.69),R=Math.min(f/G*.45,P*.105),H=R+9,ne=H+R*.81,ye=new ut(Cl(f*.97,11,4,18),Xi(13339465));ye.position.copy(ve(f/2,ne,0)),c.add(ye);const me=new ut(Cl(f*.96,3,1,19),Xi(16369528));me.position.copy(ve(f/2,ne-4,2)),c.add(me);for(let Ve=0;Ve<5;Ve++){const ft=new ut(new Ui(f*.11,.6,1),Xi(12024640));ft.position.copy(ve(f*(.13+Ve*.18),ne+2,21)),c.add(ft)}const Ie=ne+10,et=Math.min(60,P*.153),Oe=f/G*.86;for(const[Ve,ft]of N.entries()){const dt=f/G*(Ve+.5),_t=de(ft,dt,H,R);p.set(ft,_t),_t.card.style.cssText=`left:${dt-Oe/2}px;top:${Ie}px;width:${Oe}px;height:${et}px;--count-size:${Math.max(12,Math.min(19,Oe*.25))}px`,_t.portrait.position.copy(ve(dt+Oe*.03,Ie+et*.4,60)),_t.portrait.scale.setScalar(Oe*.66)}C=f*.94/7,O=f*.03,L=Ie+et+13+C*.44;for(let Ve=0;Ve<7;Ve++){const ft=document.createElement("div");ft.className="tray-slot",ft.style.cssText=`left:${O+C*Ve+2}px;top:${L-C*.43}px;width:${C-4}px;height:${C*.86}px`,Ke.append(ft)}y=L+C*.48+25,M=T-8,D=(M-y)/f<.92?4:3,d.setBounds({left:2,right:f-2,top:y,bottom:Math.max(y+10,M)}),n.style.setProperty("--instruction-y",`${L+C*.49+5}px`),le(Se.length?Se:A.collected,_e)}function Ge(A,N,G){const P=D,R=Math.ceil(N/P),H=Math.floor(A/P),ne=A%P,ye=(M-y)/R,me=f*.97/P,Ie=Math.min(me*.49,ye*.505)*(G===1?.79:G>=3?1.025:1)*(1+Math.sin(A*2.12)*.035),et=P===3?([-.015,.02,-.012,.01][H%4]??0)*f:0,Oe=f*.015+me*(ne+.5)+et+Math.sin(A*4.3)*Math.min(4,Ie*.05),Ve=y+ye*(H+.5)+Math.sin(A*2.5)*Math.min(8,Ie*.1);return{x:Math.max(Ie+1,Math.min(f-Ie-1,Oe)),y:Ve,radius:Ie}}function ze(A,N,G,P){const{x:R,y:H,radius:ne}=Ge(G,P,N.length),ye=new Wt;ye.position.copy(ve(R,H)),l.add(ye),d.add({id:A,x:R,y:H,radius:ne});const me=new ut($n,Pl());me.scale.setScalar(ne),me.position.z=5,ye.add(me);const Ie=new Wt;Ie.scale.setScalar(ne),ye.add(Ie);const et=new ut($n,new rn({color:15858943,transparent:!0,opacity:.88,depthWrite:!1}));et.scale.set(.065,.205,.025),et.rotation.z=-.7,et.position.set(-.56,.55,.67),Ie.add(et);const Oe=new ut($n,new rn({color:12974847,transparent:!0,opacity:.8,depthWrite:!1}));Oe.scale.setScalar(.04),Oe.position.set(.64,-.56,.62),Ie.add(Oe);const Ve=N.map(dt=>{const _t=qr(dt);return ye.add(_t),_t}),ft={group:ye,shell:me,fish:Ve,base:ye.position.clone(),id:A,signature:N.join(","),radius:ne,maxRadius:ne/(N.length===1?.79:N.length>=3?1.025:1),targets:[],glints:Ie};return E(ft,!1),_(ft),ft}function E(A,N){const G=A.fish.length,P=A.radius,R=G===1?[[0,0]]:G===2?[[-.28,.27],[.28,-.27]]:[[-.28,.33],[.31,.02],[-.23,-.33]];A.fish.forEach((H,ne)=>{const ye=R[ne],me=new F(ye[0]*P,ye[1]*P,22+ne*5),Ie=P*(G===1?1.65:G===2?1.25:1.08);if(N){const et=H.position.clone(),Oe=H.scale.x;Te(180,Ve=>{H.position.lerpVectors(et,me,Zr(Ve)),H.scale.setScalar(ds.lerp(Oe,Ie,Zr(Ve)))})}else H.position.copy(me),H.scale.setScalar(Ie);H.userData.size=Ie,H.rotation.z=ne%2?.04:-.035})}function _(A){A.targets.forEach(N=>N.remove()),A.targets=A.fish.map((N,G)=>{const P=document.createElement("button");return P.className="fish-hit",P.dataset.bubble=A.id,P.dataset.fishIndex=String(G),P.dataset.kind=String(N.userData.kind),P.setAttribute("aria-label",t(A.id,N.userData.kind,G)),P.onclick=R=>{R.detail===0&&!P.disabled&&e(A.id,G)},Q.append(P),P})}function k(A){l.remove(A.group),nn(A.group),A.targets.forEach(N=>N.remove()),d.remove(A.id),h.delete(A.id)}function Y(A,N=!1){const G=new Set(A.bubbles.filter(R=>R.fish.length).map(R=>R.id)),P=new Map([...d.bodies].map(([R,H])=>[R,{...H}]));for(const[R,H]of h)(N||!G.has(R))&&k(H);A.bubbles.forEach((R,H)=>{if(!R.fish.length)return;let ne=h.get(R.id);if(ne&&ne.signature!==R.fish.join(",")&&(k(ne),ne=void 0),!ne){ne=ze(R.id,R.fish,H,A.bubbles.length),h.set(R.id,ne);const ye=P.get(R.id);ye&&!N&&d.add({...ye,radius:ne.radius})}ne.targets.forEach((ye,me)=>ye.setAttribute("aria-label",t(R.id,R.fish[me],me)))}),se()}function se(){for(const A of h.values()){const N=d.bodies.get(A.id);N&&(A.group.position.copy(ve(N.x,N.y)),A.base.copy(A.group.position)),A.group.updateMatrixWorld(!0),A.fish.forEach((G,P)=>{const R=G.getWorldPosition(new F),H=A.targets[P],ne=Math.max(48,G.scale.x*.86);H&&(H.style.left=`${R.x+f/2-ne/2}px`,H.style.top=`${T/2-R.y-ne/2}px`,H.style.width=`${ne}px`,H.style.height=`${ne}px`,H.style.zIndex=String(Math.round(R.z)),H.dataset.x=(R.x+f/2).toFixed(2),H.dataset.y=(T/2-R.y).toFixed(2),H.dataset.radius=A.radius.toFixed(2))})}n.dataset.bubbleCount=String(d.bodies.size),n.dataset.fishCount=String([...h.values()].reduce((A,N)=>A+N.fish.length,0)),n.dataset.bodies=JSON.stringify([...d.bodies.values()].map(({id:A,x:N,y:G,radius:P})=>({id:A,x:Math.round(N*10)/10,y:Math.round(G*10)/10,r:Math.round(P*10)/10})))}let J;function Re(A){if(J=void 0,!Je||$||K||m?.status!=="playing"||A.button!==0)return;const N=n.getBoundingClientRect(),G=A.clientX-N.left,P=A.clientY-N.top;r.updateMatrixWorld(!0);const H=[...h.values()].flatMap(ne=>ne.fish.map((ye,me)=>({b:ne,f:ye,index:me,z:ye.getWorldPosition(new F).z}))).sort((ne,ye)=>ye.z-ne.z).find(ne=>o_(ne.f,ve(G,P,ne.z)));H&&(J={id:H.b.id,index:H.index,x:A.clientX,y:A.clientY,pointer:A.pointerId},A.preventDefault())}function he(A){const N=J;J=void 0,N&&N.pointer===A.pointerId&&Math.hypot(A.clientX-N.x,A.clientY-N.y)<14&&(A.preventDefault(),e(N.id,N.index))}n.addEventListener("pointerdown",Re),n.addEventListener("pointerup",he),n.addEventListener("pointercancel",()=>{J=void 0});function Ce(A){for(const N of v)r.remove(N),nn(N);v=[],A.forEach((N,G)=>{const P=qr(N);P.userData.kind=N,P.userData.size=C*.96,P.position.copy(Pe(G)),P.scale.setScalar(C*.96),r.add(P),v.push(P)})}function Ae(A){const N=!!$||!!K;ie(),m=A,_e=A.tray.slice(),Se=A.collected.slice();const G=n.getBoundingClientRect(),P=G.width,R=G.height,H=Math.abs(f-P)>.5||Math.abs(T-R)>.5;if(f=P,T=R,f<1||T<1)return;i.setSize(f,T,!1),s.left=-f/2,s.right=f/2,s.top=T/2,s.bottom=-T/2,s.updateProjectionMatrix();const ne=te(A).join(",");(H||S!==ne)&&(pe(A),S=ne),Y(A,H||N),Ys()&&(d.step(.1),se()),Ce(A.tray),le(A.collected,A.tray),ee(!0),b=!1,n.dataset.motion="idle"}function ce(A,N,G=11857407){for(let P=0;P<N;P++){const R=new ut(wc,new rn({color:P%3===0?16777215:G,transparent:!0,opacity:1,depthWrite:!1})),H=1.5+Math.random()*2;R.scale.setScalar(H),R.position.copy(A),R.position.z=230,u.add(R);const ne=P/N*Math.PI*2;j.push({mesh:R,velocity:new F(Math.cos(ne)*(40+Math.random()*70),Math.sin(ne)*(40+Math.random()*70)+20,0),life:.48,duration:.48,initial:H})}}function Me(A,N,G=12906495){const P=new ut(new ji(1,.018,6,48),new rn({color:G,transparent:!0,opacity:.8,depthWrite:!1}));P.position.copy(A),P.position.z=205,u.add(P),Te(250,R=>{P.scale.setScalar(N*(.75+R*.65)),P.material.opacity=(1-R)*.75},()=>{u.remove(P),nn(P)})}function Ne(A,N,G,P,R){const H=A.position.clone(),ne=A.scale.x,ye=A.rotation.z;A.userData.flying=!0,g.add(A),Te(P,me=>{const Ie=h_(me);A.position.lerpVectors(H,N,Ie),A.position.x+=Math.sin(me*Math.PI)*Math.min(24,Math.abs(N.x-H.x)*.15)*(H.x<N.x?-1:1),A.position.y+=Math.sin(me*Math.PI)*28,A.position.z=180+Math.sin(me*Math.PI)*35,A.scale.setScalar(ds.lerp(ne,G,Ie)),A.rotation.z=ye*(1-Ie)+Math.sin(me*Math.PI)*.17*(N.x>H.x?1:-1)},()=>{A.position.copy(N),A.scale.setScalar(G),A.rotation.z=0,A.userData.flying=!1,A.userData.size=G,g.delete(A),R?.()})}function De(A,N,G,P){const R=h.get(A),H=N.steps[0];if(!m||!R||!H||N.steps.length!==1)return Promise.resolve(!1);const ne=R.fish[H.sourceIndex];if(!ne)return Promise.resolve(!1);const ye=G.bubbles.find(Oe=>Oe.id===A)?.fish.length===0;if(Ys())return P.cue(ye?"pop":"button"),Ae(G),P.progress(G.tray,G.collected),N.matched.length&&P.cue("match"),Promise.resolve(!0);if(ie(),K=G,ee(!1),re="",fe=0,r.updateMatrixWorld(!0),r.attach(ne),ne.position.z=180,ne.userData.kind=H.kind,R.fish.splice(H.sourceIndex,1),R.signature=G.bubbles.find(Oe=>Oe.id===A)?.fish.join(",")??"",_(R),ee(!1),ye)n.dataset.motion="pop",P.cue("pop"),ce(R.base,12),Me(R.base,R.radius),d.remove(A),Te(Tt.pop,Oe=>{R.shell.scale.setScalar(R.radius*(1+Oe*.16)),R.shell.material.uniforms.alpha.value=1-Oe;for(const Ve of R.glints.children)Ve instanceof ut&&(Ve.material.opacity=(1-Oe)*.85)},()=>k(R));else{P.cue("button");const Oe=R.maxRadius*(R.fish.length===1?.79:1),Ve=R.radius;Te(180,ft=>{R.radius=ds.lerp(Ve,Oe,Zr(ft)),R.shell.scale.setScalar(R.radius),R.glints.scale.setScalar(R.radius),d.setRadius(A,R.radius)},()=>E(R,!0))}n.dataset.motion="swim",Ne(ne,Pe(H.insertIndex),C*.96,Tt.flight);const me=Tt.flight+2;let Ie=me;We(me-Tt.shift,()=>{v.forEach((Oe,Ve)=>ot(Oe,Pe(Ve>=H.insertIndex?Ve+1:Ve),Tt.shift))}),We(me+1,()=>{v.splice(H.insertIndex,0,ne),ne.position.copy(Pe(H.insertIndex)),ne.scale.setScalar(C*.96),ne.userData.size=C*.96,n.dataset.motion="land",w(ne,C*.96,.16,Tt.settle),P.cue("land",0),le(Se,H.trayWithFish),P.progress(H.trayWithFish,Se)}),H.matchedIndices.length?(We(me+Tt.settle,()=>{n.dataset.motion="match",P.cue("match"),H.matchedIndices.forEach(Oe=>{const Ve=v[Oe];w(Ve,C*.96,.25,Tt.match),Me(Ve.position,C*.41,16770429),ce(Ve.position,5,16768089)}),H.matchedIndices.forEach(Oe=>Ke.children[Oe]?.classList.add("matching")),p.get(H.kind)?.card.classList.add("matching")}),We(me+Tt.settle+Tt.match,()=>{n.dataset.motion="collect";const Oe=p.get(H.kind),Ve=new Set(H.matchedIndices),ft=v.filter((dt,_t)=>Ve.has(_t));v=v.filter((dt,_t)=>!Ve.has(_t));for(const[dt,_t]of ft.entries()){const ti=(Oe?.base??ve(f/2,40)).clone().add(new F((dt-1)*(Oe?.radius??30)*.35,-8,100));Ne(_t,ti,(Oe?.radius??30)*.65,Tt.collect,()=>{r.remove(_t),nn(_t)})}v.forEach((dt,_t)=>ot(dt,Pe(_t),Tt.shift)),le(Se,H.trayAfter),P.progress(H.trayAfter,Se);for(const dt of Ke.children)dt.classList.remove("matching")}),Ie=me+Tt.settle+Tt.match+Tt.collect+2,We(Ie,()=>{const Oe=p.get(H.kind);n.dataset.motion="jar",P.cue("collect"),le(H.collectedAfter,H.trayAfter),P.progress(H.trayAfter,H.collectedAfter),Oe&&(Oe.card.classList.remove("matching"),w(Oe.group,1,.07,Tt.recoil),ce(Oe.base,14,16768114))})):Ie=me+Tt.settle;const et=Ie+Tt.recoil;return new Promise(Oe=>{$=Oe,We(et,()=>{const Ve=$;$=void 0,K=void 0,m=G,_e=G.tray.slice(),Se=G.collected.slice(),Y(G),le(G.collected,G.tray),ee(!0),n.dataset.motion="idle",Ve?.(!0)})})}function ge(){if(K){const A=K,N=$;$=void 0,Ae(A),n.dataset.motion="idle",N?.(!0)}}function Xe(A){const N=Math.min(Math.max(0,(A-I)/1e3),.04);for(I=A,b&&m&&(K&&ge(),Ae(m));V.length&&V[0].at<=A;)V.shift().run();const G=W;W=[];for(const R of G){const H=Math.min(1,Math.max(0,(A-R.start)/R.duration));R.update(H),H>=1?R.done?.():W.push(R)}const P=Ys();!P&&!document.hidden&&d.step(N),se();for(const[R,H]of[...h.values()].entries()){const ne=H.id===re&&A<fe;H.fish.forEach((ye,me)=>{H.targets[me]?.classList.toggle("hinted",ne&&me===Z),ye.parent===H.group&&Vi(ye,A*.001+R+me,P?0:.65)})}for(const R of v)Vi(R,A*.001,P?0:R.userData.flying?2:.45);for(const R of p.values())Vi(R.portrait,A*.001+R.kind,P?0:.35),R.contents.children.forEach((H,ne)=>{const ye=H;Vi(ye,A*.001+ne,P?0:.55);const me=ye.userData.jarBase;ye.position.y=me.y+(P?0:Math.sin(A*.0015+ne)*1.1)});r.children.forEach(R=>{R instanceof Wt&&R.userData.flying&&Vi(R,A*.001,P?0:2.5)});for(let R=j.length-1;R>=0;R--){const H=j[R];H.life-=N,H.mesh.position.addScaledVector(H.velocity,N),H.velocity.y-=N*80,H.mesh.scale.setScalar(H.initial*(.5+.5*H.life/H.duration)),H.mesh.material.opacity=Math.max(0,H.life/H.duration),H.life<=0&&(u.remove(H.mesh),nn(H.mesh),j.splice(R,1))}n.dataset.travelling=String(g.size),document.hidden||(i.render(r,s),He&&(n.dataset.frameMs=String(Math.round(A-He))),He=A)}const U=s_().then(()=>{Je=!0,ee(!K)});return i.setAnimationLoop(Xe),{ready:U,render:Ae,playMove:De,finish:ge,hint(A,N){re=A,Z=N,fe=performance.now()+4500},layout(){b=!0},destroy(){ie(),oe.disconnect(),n.removeEventListener("pointerdown",Re),n.removeEventListener("pointerup",he),i.setAnimationLoop(null),nn(r),i.dispose()}}}const Rc=[{code:"en",label:"English"},{code:"fr",label:"Français"},{code:"it",label:"Italiano"},{code:"de",label:"Deutsch"},{code:"es",label:"Español"},{code:"tr",label:"Türkçe"},{code:"zh",label:"简体中文"},{code:"ja",label:"日本語"},{code:"ko",label:"한국어"},{code:"pt-BR",label:"Português (Brasil)"},{code:"ru",label:"Русский"}],d_={level:"Level {n}",rescued:"{n} / {total}",goal:"Match 3 fish",tutorial:"Tap a fish. Match 3 of a kind.",tray:"Waiting area",empty:"Choose a fish",undo:"Undo",hint:"Hint",shuffle:"Shuffle",restart:"Restart",settings:"Settings",music:"Music",sound:"Sound",language:"Language",resume:"Keep playing",won:"Reef restored!",wonSub:"Every little fish found a home.",next:"Next level",lost:"The dock is full",lostSub:"Try another order, or shuffle the reef.",retry:"Try again",choose:"Choose a level",collection:"Your aquarium",progress:"Rescued",moves:"Moves",noUndo:"No moves to undo yet",noHint:"Try a shuffle to open a new path",hintToast:"Choose the glowing fish",shuffleToast:"A fresh current!",matchToast:"A happy little trio!",pause:"Take a breath",credits:"Credits",confirmRestart:"Start this level again?",cancel:"Cancel",fish0:"Clownfish",fish1:"Pufferfish",fish2:"Angelfish",fish3:"Blue tang",fish4:"Seahorse",fish5:"Pink fish",bubbleLabel:"Bubble {n}: {fish}",fishLabel:"Fish {n}: {fish}",filled:"Used {n} of 7 slots",completed:"Completed",levelSelect:"Levels",back:"Back",musicCredit:"Music by MintoDog • CC0",on:"On",off:"Off",rotate:"Turn your phone upright"},p_={en:d_,fr:{rotate:"Tournez votre téléphone à la verticale",level:"Niveau {n}",rescued:"{n} / {total}",goal:"Réunissez 3 poissons",tutorial:"Touchez un poisson. Réunissez-en 3 identiques.",tray:"Zone d’attente",empty:"Choisissez un poisson",undo:"Annuler",hint:"Indice",shuffle:"Mélanger",restart:"Recommencer",settings:"Réglages",music:"Musique",sound:"Sons",language:"Langue",resume:"Continuer",won:"Récif restauré !",wonSub:"Tous les poissons ont trouvé leur maison.",next:"Niveau suivant",lost:"Le quai est plein",lostSub:"Essayez un autre ordre ou mélangez le récif.",retry:"Réessayer",choose:"Choisir un niveau",collection:"Votre aquarium",progress:"Sauvés",moves:"Coups",noUndo:"Aucun coup à annuler",noHint:"Mélangez pour ouvrir un nouveau chemin",hintToast:"Choisissez le poisson lumineux",shuffleToast:"Un courant nouveau !",matchToast:"Un joyeux petit trio !",pause:"Faites une pause",credits:"Crédits",confirmRestart:"Recommencer ce niveau ?",cancel:"Annuler",fish0:"Poisson-clown",fish1:"Poisson-globe",fish2:"Poisson-ange",fish3:"Chirurgien bleu",fish4:"Hippocampe",fish5:"Poisson rose",bubbleLabel:"Bulle {n} : {fish}",filled:"{n} cases occupées sur 7",fishLabel:"Poisson {n} : {fish}",completed:"Terminé",levelSelect:"Niveaux",back:"Retour",musicCredit:"Musique de MintoDog • CC0",on:"Oui",off:"Non"},it:{rotate:"Ruota il telefono in verticale",level:"Livello {n}",rescued:"{n} / {total}",goal:"Abbina 3 pesci",tutorial:"Tocca un pesce. Abbina 3 pesci uguali.",tray:"Area d’attesa",empty:"Scegli un pesce",undo:"Annulla",hint:"Aiuto",shuffle:"Mescola",restart:"Ricomincia",settings:"Impostazioni",music:"Musica",sound:"Suoni",language:"Lingua",resume:"Continua",won:"Barriera restaurata!",wonSub:"Ogni pesciolino ha trovato una casa.",next:"Livello seguente",lost:"Il molo è pieno",lostSub:"Prova un altro ordine o mescola i pesci.",retry:"Riprova",choose:"Scegli un livello",collection:"Il tuo acquario",progress:"Salvati",moves:"Mosse",noUndo:"Nessuna mossa da annullare",noHint:"Mescola per aprire un nuovo percorso",hintToast:"Scegli il pesce luminoso",shuffleToast:"Una nuova corrente!",matchToast:"Un trio felice!",pause:"Fai una pausa",credits:"Crediti",confirmRestart:"Ricominciare questo livello?",cancel:"Annulla",fish0:"Pesce pagliaccio",fish1:"Pesce palla",fish2:"Pesce angelo",fish3:"Pesce chirurgo blu",fish4:"Cavalluccio marino",fish5:"Pesce rosa",bubbleLabel:"Bolla {n}: {fish}",filled:"{n} spazi occupati su 7",fishLabel:"Pesce {n}: {fish}",completed:"Completato",levelSelect:"Livelli",back:"Indietro",musicCredit:"Musica di MintoDog • CC0",on:"Sì",off:"No"},de:{rotate:"Halte dein Handy hochkant",level:"Level {n}",rescued:"{n} / {total}",goal:"Finde 3 gleiche Fische",tutorial:"Tippe einen Fisch an. Finde 3 gleiche Fische.",tray:"Wartebereich",empty:"Wähle einen Fisch",undo:"Zurück",hint:"Tipp",shuffle:"Mischen",restart:"Neustart",settings:"Einstellungen",music:"Musik",sound:"Ton",language:"Sprache",resume:"Weiterspielen",won:"Riff gerettet!",wonSub:"Jeder kleine Fisch hat ein Zuhause.",next:"Nächstes Level",lost:"Der Steg ist voll",lostSub:"Versuche eine andere Reihenfolge oder mische neu.",retry:"Noch einmal",choose:"Level wählen",collection:"Dein Aquarium",progress:"Gerettet",moves:"Züge",noUndo:"Noch kein Zug zum Zurücknehmen",noHint:"Mische neu, um einen Weg zu öffnen",hintToast:"Wähle den leuchtenden Fisch",shuffleToast:"Eine neue Strömung!",matchToast:"Ein fröhliches Trio!",pause:"Atme kurz durch",credits:"Mitwirkende",confirmRestart:"Dieses Level neu starten?",cancel:"Abbrechen",fish0:"Clownfisch",fish1:"Kugelfisch",fish2:"Kaiserfisch",fish3:"Paletten-Doktorfisch",fish4:"Seepferdchen",fish5:"Rosa Fisch",bubbleLabel:"Blase {n}: {fish}",filled:"{n} von 7 Plätzen belegt",fishLabel:"Fisch {n}: {fish}",completed:"Geschafft",levelSelect:"Level",back:"Zurück",musicCredit:"Musik von MintoDog • CC0",on:"An",off:"Aus"},es:{rotate:"Pon el teléfono en vertical",level:"Nivel {n}",rescued:"{n} / {total}",goal:"Junta 3 peces",tutorial:"Toca un pez. Junta 3 peces iguales.",tray:"Zona de espera",empty:"Elige un pez",undo:"Deshacer",hint:"Pista",shuffle:"Mezclar",restart:"Reiniciar",settings:"Ajustes",music:"Música",sound:"Sonido",language:"Idioma",resume:"Seguir jugando",won:"¡Arrecife restaurado!",wonSub:"Todos los pececitos encontraron un hogar.",next:"Siguiente nivel",lost:"El muelle está lleno",lostSub:"Prueba otro orden o mezcla el arrecife.",retry:"Reintentar",choose:"Elige un nivel",collection:"Tu acuario",progress:"Rescatados",moves:"Movimientos",noUndo:"Aún no hay nada que deshacer",noHint:"Mezcla para abrir un nuevo camino",hintToast:"Elige el pez brillante",shuffleToast:"¡Una nueva corriente!",matchToast:"¡Un trío feliz!",pause:"Tómate un respiro",credits:"Créditos",confirmRestart:"¿Reiniciar este nivel?",cancel:"Cancelar",fish0:"Pez payaso",fish1:"Pez globo",fish2:"Pez ángel",fish3:"Pez cirujano azul",fish4:"Caballito de mar",fish5:"Pez rosa",bubbleLabel:"Burbuja {n}: {fish}",filled:"{n} de 7 espacios ocupados",fishLabel:"Pez {n}: {fish}",completed:"Completado",levelSelect:"Niveles",back:"Volver",musicCredit:"Música de MintoDog • CC0",on:"Sí",off:"No"},tr:{rotate:"Telefonunu dik tut",level:"Bölüm {n}",rescued:"{n} / {total}",goal:"3 aynı balığı eşleştir",tutorial:"Bir balığa dokun. 3 aynı balığı eşleştir.",tray:"Bekleme alanı",empty:"Bir balık seç",undo:"Geri al",hint:"İpucu",shuffle:"Karıştır",restart:"Yeniden",settings:"Ayarlar",music:"Müzik",sound:"Ses",language:"Dil",resume:"Devam et",won:"Resif kurtuldu!",wonSub:"Her küçük balık bir yuva buldu.",next:"Sonraki bölüm",lost:"İskele doldu",lostSub:"Başka bir sıra dene veya resifi karıştır.",retry:"Tekrar dene",choose:"Bölüm seç",collection:"Akvaryumun",progress:"Kurtarılan",moves:"Hamle",noUndo:"Geri alınacak hamle yok",noHint:"Yeni bir yol açmak için karıştır",hintToast:"Parlayan balığı seç",shuffleToast:"Yeni bir akıntı!",matchToast:"Mutlu bir üçlü!",pause:"Bir nefes al",credits:"Emeği geçenler",confirmRestart:"Bu bölüm yeniden başlasın mı?",cancel:"Vazgeç",fish0:"Palyaço balığı",fish1:"Balon balığı",fish2:"Melek balığı",fish3:"Mavi cerrah balığı",fish4:"Denizatı",fish5:"Pembe balık",bubbleLabel:"Baloncuk {n}: {fish}",filled:"7 yerden {n} tanesi dolu",fishLabel:"Balık {n}: {fish}",completed:"Tamamlandı",levelSelect:"Bölümler",back:"Geri",musicCredit:"Müzik: MintoDog • CC0",on:"Açık",off:"Kapalı"},zh:{rotate:"请竖屏游玩",level:"第{n}关",rescued:"{n} / {total}",goal:"凑齐3条相同的鱼",tutorial:"点击小鱼，凑齐3条相同的鱼。",tray:"等候区",empty:"选一条鱼",undo:"撤销",hint:"提示",shuffle:"重排",restart:"重来",settings:"设置",music:"音乐",sound:"音效",language:"语言",resume:"继续游戏",won:"珊瑚礁恢复啦！",wonSub:"每条小鱼都找到了家。",next:"下一关",lost:"码头满了",lostSub:"换个顺序试试，或重新排列气泡。",retry:"再试一次",choose:"选择关卡",collection:"你的水族箱",progress:"已救出",moves:"步数",noUndo:"还没有可撤销的操作",noHint:"试试重排，寻找新的出路",hintToast:"选择发光的小鱼",shuffleToast:"新的洋流来啦！",matchToast:"快乐的小鱼三人组！",pause:"休息一下",credits:"制作名单",confirmRestart:"重新开始这一关？",cancel:"取消",fish0:"小丑鱼",fish1:"河豚",fish2:"神仙鱼",fish3:"蓝吊鱼",fish4:"海马",fish5:"粉色鱼",bubbleLabel:"气泡{n}：{fish}",filled:"7个位置已用{n}个",fishLabel:"鱼{n}：{fish}",completed:"已完成",levelSelect:"关卡",back:"返回",musicCredit:"音乐：MintoDog • CC0",on:"开",off:"关"},ja:{rotate:"スマートフォンを縦にしてください",level:"レベル {n}",rescued:"{n} / {total}",goal:"同じ魚を3匹そろえよう",tutorial:"魚をタップ。同じ魚を3匹そろえよう。",tray:"待機スペース",empty:"魚をえらぼう",undo:"もどす",hint:"ヒント",shuffle:"シャッフル",restart:"やり直す",settings:"設定",music:"音楽",sound:"効果音",language:"言語",resume:"つづける",won:"サンゴの海が元どおり！",wonSub:"みんな、おうちに帰れたよ。",next:"次のレベル",lost:"待機スペースがいっぱい",lostSub:"順番を変えるか、シャッフルしてみよう。",retry:"もう一度",choose:"レベルをえらぶ",collection:"あなたの水族館",progress:"救出",moves:"手数",noUndo:"まだもどせる操作がありません",noHint:"シャッフルで新しい道を探そう",hintToast:"光っている魚をえらぼう",shuffleToast:"新しい流れがきたよ！",matchToast:"なかよし3匹、そろった！",pause:"ひとやすみ",credits:"クレジット",confirmRestart:"このレベルをやり直す？",cancel:"キャンセル",fish0:"クマノミ",fish1:"フグ",fish2:"エンゼルフィッシュ",fish3:"ナンヨウハギ",fish4:"タツノオトシゴ",fish5:"ピンクの魚",bubbleLabel:"泡 {n}：{fish}",filled:"7枠中{n}枠使用",fishLabel:"魚 {n}：{fish}",completed:"クリア",levelSelect:"レベル",back:"もどる",musicCredit:"音楽：MintoDog • CC0",on:"オン",off:"オフ"},ko:{rotate:"휴대폰을 세로로 돌려 주세요",level:"레벨 {n}",rescued:"{n} / {total}",goal:"같은 물고기 3마리를 모아요",tutorial:"물고기를 누르고 같은 물고기 3마리를 모아요.",tray:"대기 공간",empty:"물고기를 골라요",undo:"되돌리기",hint:"힌트",shuffle:"섞기",restart:"다시 시작",settings:"설정",music:"음악",sound:"효과음",language:"언어",resume:"계속하기",won:"산호초가 되살아났어요!",wonSub:"모든 물고기가 집을 찾았어요.",next:"다음 레벨",lost:"대기 공간이 가득 찼어요",lostSub:"순서를 바꾸거나 방울을 섞어 보세요.",retry:"다시 도전",choose:"레벨 선택",collection:"나의 수족관",progress:"구조",moves:"이동",noUndo:"아직 되돌릴 수 없어요",noHint:"섞어서 새로운 길을 찾아보세요",hintToast:"빛나는 물고기를 골라요",shuffleToast:"새로운 물결이에요!",matchToast:"사이좋은 세 마리!",pause:"잠깐 쉬어요",credits:"만든 사람들",confirmRestart:"이 레벨을 다시 시작할까요?",cancel:"취소",fish0:"흰동가리",fish1:"복어",fish2:"엔젤피시",fish3:"블루탱",fish4:"해마",fish5:"분홍 물고기",bubbleLabel:"방울 {n}: {fish}",filled:"7칸 중 {n}칸 사용",fishLabel:"물고기 {n}: {fish}",completed:"완료",levelSelect:"레벨",back:"뒤로",musicCredit:"음악: MintoDog • CC0",on:"켜기",off:"끄기"},"pt-BR":{rotate:"Vire o celular na vertical",level:"Fase {n}",rescued:"{n} / {total}",goal:"Junte 3 peixes",tutorial:"Toque num peixe. Junte 3 peixes iguais.",tray:"Área de espera",empty:"Escolha um peixe",undo:"Desfazer",hint:"Dica",shuffle:"Misturar",restart:"Reiniciar",settings:"Ajustes",music:"Música",sound:"Som",language:"Idioma",resume:"Continuar",won:"Recife restaurado!",wonSub:"Cada peixinho encontrou um lar.",next:"Próxima fase",lost:"O píer está cheio",lostSub:"Tente outra ordem ou misture o recife.",retry:"Tentar de novo",choose:"Escolha uma fase",collection:"Seu aquário",progress:"Resgatados",moves:"Jogadas",noUndo:"Nenhuma jogada para desfazer",noHint:"Misture para abrir um novo caminho",hintToast:"Escolha o peixe brilhante",shuffleToast:"Uma nova corrente!",matchToast:"Um trio feliz!",pause:"Respire um pouco",credits:"Créditos",confirmRestart:"Reiniciar esta fase?",cancel:"Cancelar",fish0:"Peixe-palhaço",fish1:"Baiacu",fish2:"Peixe-anjo",fish3:"Cirurgião-patela",fish4:"Cavalo-marinho",fish5:"Peixe rosa",bubbleLabel:"Bolha {n}: {fish}",filled:"{n} de 7 espaços usados",fishLabel:"Peixe {n}: {fish}",completed:"Concluído",levelSelect:"Fases",back:"Voltar",musicCredit:"Música de MintoDog • CC0",on:"Sim",off:"Não"},ru:{rotate:"Поверните телефон вертикально",level:"Уровень {n}",rescued:"{n} / {total}",goal:"Собери 3 одинаковых рыбок",tutorial:"Нажми на рыбку. Собери 3 одинаковых рыбок.",tray:"Зона ожидания",empty:"Выбери рыбку",undo:"Отменить",hint:"Подсказка",shuffle:"Смешать",restart:"Заново",settings:"Настройки",music:"Музыка",sound:"Звуки",language:"Язык",resume:"Продолжить",won:"Риф восстановлен!",wonSub:"Все рыбки нашли свой дом.",next:"Дальше",lost:"Причал заполнен",lostSub:"Попробуй другой порядок или перемешай рыбок.",retry:"Ещё раз",choose:"Выбери уровень",collection:"Твой аквариум",progress:"Спасено",moves:"Ходы",noUndo:"Пока нечего отменять",noHint:"Перемешай рыбок, чтобы открыть новый путь",hintToast:"Выбери светящуюся рыбку",shuffleToast:"Новое течение!",matchToast:"Весёлая троица!",pause:"Передохни",credits:"Авторы",confirmRestart:"Начать этот уровень заново?",cancel:"Отмена",fish0:"Рыба-клоун",fish1:"Иглобрюх",fish2:"Рыба-ангел",fish3:"Голубой хирург",fish4:"Морской конёк",fish5:"Розовая рыбка",bubbleLabel:"Пузырь {n}: {fish}",filled:"Занято {n} из 7 мест",fishLabel:"Рыбка {n}: {fish}",completed:"Пройдено",levelSelect:"Уровни",back:"Назад",musicCredit:"Музыка: MintoDog • CC0",on:"Вкл.",off:"Выкл."}};function m_(n){if(!n)return;const e=n.trim().toLowerCase().replace(/_/g,"-").split("-")[0];return e==="pt"?"pt-BR":Rc.find(({code:t})=>t.toLowerCase()===e)?.code}function g_(){const n=[];typeof location<"u"&&n.push(new URLSearchParams(location.search).get("lang"));try{typeof localStorage<"u"&&n.push(localStorage.getItem("reef-pop-lang"))}catch{}typeof navigator<"u"&&n.push(...navigator.languages??[],navigator.language),typeof document<"u"&&n.push(document.documentElement.lang);const e=n.map(m_).find(t=>t!==void 0)??"en";return typeof document<"u"&&(document.documentElement.lang=e),e}function __(n,e,t={}){return p_[e][n].replace(/\{(\w+)\}/g,(i,r)=>Object.prototype.hasOwnProperty.call(t,r)?String(t[r]):i)}const Ll=n=>{try{return localStorage.getItem(n)!=="off"}catch{return!0}},Zs={pop:{file:"./audio/recreation-v2/pop.mp3",volume:.25,minInterval:.07},land:{file:"./audio/recreation-v2/land.mp3",volume:.16,minInterval:.04},match:{file:"./audio/recreation-v2/match.mp3",volume:.34,minInterval:.095},collect:{file:"./audio/recreation-v2/collect.mp3",volume:.22,minInterval:.08},win:{file:"./audio/recreation-v2/win.mp3",volume:.29,minInterval:.8},button:{file:"./audio/recreation-v2/button.mp3",volume:.16,minInterval:.07}},Dl=(n,e,t,i)=>n!==void 0&&Number.isFinite(n)?Math.min(i,Math.max(t,n)):e;class v_{constructor(){this.music=Ll("reef-pop-music"),this.sound=Ll("reef-pop-sound"),this.context=null,this.effects=null,this.unlocked=!1,this.loading=null,this.buffers=new Map,this.pending=new Map,this.voices=new Set,this.lastPlayed=new Map,this.track=new Audio("./audio/reef-music.mp3"),this.track.loop=!0,this.track.volume=.12,this.track.preload="none",document.addEventListener("visibilitychange",()=>{document.hidden?(this.track.pause(),this.stopEffects(),this.effects&&(this.effects.gain.value=0),this.context?.state==="running"&&this.context.suspend().catch(()=>{})):(this.effects&&(this.effects.gain.value=this.sound?1:0),this.unlocked&&this.context?.state==="suspended"&&this.context.resume().catch(()=>{}),this.start())})}load(){return this.loading?this.loading:(this.track.hidden=!0,this.track.dataset.role="background-music",this.track.isConnected||document.body.append(this.track),this.track.preload="metadata",this.track.load(),this.loading=Promise.allSettled(Object.keys(Zs).map(async e=>{try{const t=await fetch(Zs[e].file);if(!t.ok)throw new Error(`HTTP ${t.status}`);this.pending.set(e,await t.arrayBuffer()),await this.decodePending()}catch{console.warn(`[Audio] cue=${e} load=unavailable`)}})).then(()=>{}),this.loading)}unlock(){if(this.unlocked=!0,!this.context){const e=window.AudioContext??window.webkitAudioContext;if(e)try{this.context=new e,this.effects=this.context.createGain(),this.effects.gain.value=this.sound&&!document.hidden?1:0,this.effects.connect(this.context.destination),this.decodePending()}catch{}}!document.hidden&&this.context?.state==="suspended"&&this.context.resume().catch(()=>{}),this.start()}async decodePending(){const e=this.context;if(!e)return;const t=[...this.pending].map(async([i,r])=>{this.pending.delete(i);try{this.buffers.set(i,await e.decodeAudioData(r))}catch{console.warn(`[Audio] cue=${i} decode=unavailable`)}});await Promise.allSettled(t)}start(){this.unlocked&&this.music&&!document.hidden&&this.track.paused&&this.track.play().catch(()=>{})}save(e,t){try{localStorage.setItem(e,t?"on":"off")}catch{}}setMusic(e){this.music=e,this.save("reef-pop-music",e),e?this.unlock():this.track.pause()}setSound(e){this.sound=e,this.save("reef-pop-sound",e),this.effects&&(this.effects.gain.value=e&&!document.hidden?1:0),e?this.play("button"):this.stopEffects()}stopEffects(){for(const e of this.voices){try{e.stop()}catch{}e.disconnect()}this.voices.clear()}play(e,t={}){const i=this.context;if(!this.unlocked||!this.sound||document.hidden||!i||!this.effects||i.state!=="running")return;const r=e==="tap"?"pop":e,s=this.buffers.get(r);if(!s)return;const o=i.currentTime,a=Zs[r];if(o-(this.lastPlayed.get(r)??-1/0)<a.minInterval||this.voices.size>=12)return;this.lastPlayed.set(r,o);const l=i.createBufferSource(),c=i.createGain();l.buffer=s,l.playbackRate.value=Dl(t.rate,1,.55,2),c.gain.value=a.volume*Dl(t.volume,1,0,1.5),l.connect(c),c.connect(this.effects),this.voices.add(l),l.onended=()=>{this.voices.delete(l),l.disconnect(),c.disconnect()},l.start(o),console.debug(`[Audio] cue=${e} file=recreation-v2/${e}.mp3 voices=${this.voices.size}`)}}class x_{sdk(){const e=window.PokiSDK;if(!e)throw new Error("PokiSDK is not on the page. This build is meant to run on Poki. For local runs choose the inert signals EXPLICITLY (see createSignals).");return e}async init(){await this.sdk().init()}gameLoadingStart(){this.sdk().gameLoadingStart()}gameLoadingFinished(){this.sdk().gameLoadingFinished()}gameplayStart(){this.sdk().gameplayStart()}gameplayStop(){this.sdk().gameplayStop()}async commercialBreak(){await this.sdk().commercialBreak()}async rewardedBreak(){return this.sdk().rewardedBreak()}}class M_{constructor(){this.seen=[]}note(e){this.seen.push(e),console.warn(`[inert poki] ${e}() — this build sends NO ad or engagement signal.`)}async init(){this.note("init")}gameLoadingStart(){this.note("gameLoadingStart")}gameLoadingFinished(){this.note("gameLoadingFinished")}gameplayStart(){this.note("gameplayStart")}gameplayStop(){this.note("gameplayStop")}async commercialBreak(){this.note("commercialBreak")}async rewardedBreak(){return this.note("rewardedBreak"),!1}}function S_(n="poki"){return n==="inert"?new M_:new x_}function y_(){try{return"f729fb9"}catch{return"dev"}}const E_={Boot:4,Life:60,Ad:40,Game:400,Act:120,Perf:30,Err:20,Sum:60},b_=120;function T_(n){return n==null?"na":typeof n=="number"?Number.isFinite(n)?Number.isInteger(n)?String(n):String(Math.round(n*100)/100):"na":typeof n=="boolean"?n?"1":"0":String(n).replace(/\s+/g,"_").slice(0,64)}function A_(n,e,t){let i=`[${n}] t=${Math.round(e)}`;if(t)for(const r in t){const s=t[r];s!==void 0&&(i+=` ${r}=${T_(s)}`)}return i}function w_(n,e,t){const i=e-t.windowMs;let r=0,s=e;for(let o=n.length-1;o>=0;o--){const a=n[o];if(a===void 0||a<i)break;r++,s=a}return{burst:r>=t.minInputs,n:r,spanMs:Math.max(1,Math.round(e-s))}}function R_(n){const e=n.log??(y=>console.log(y)),t=n.now??(typeof performance<"u"?()=>performance.now():()=>Date.now()),i=t(),r={...E_,...n.limits??{}},s=n.maxLines??1200,o=(n.summaryEverySec??30)*1e3,a=n.burst===null?null:{windowMs:1500,minInputs:8,cooldownMs:3e3,...n.burst??{}},l={},c={},u={};let h=0,p=0,d=!1,g=!1;const v=()=>Math.round(t()-i);function m(y,M,D=!1){if(d)return;const V=l[y]??0,W=r[y]??100;if(h>=s||!D&&V>=W){p++,c[`dropped_${y}`]=(c[`dropped_${y}`]??0)+1;return}l[y]=V+1,h++;try{e(A_(y,v(),M))}catch{}}function f(y,M=1){c[y]=(c[y]??0)+M}function T(y,M){Number.isFinite(M)&&(u[y]=M)}function b(y="tick"){const M={reason:y,lines:h,dropped:p};for(const V in c)M[V]=c[V];for(const V in u)M[V]=u[V];m("Sum",M,y==="visibility_hidden"||y==="pagehide"||y==="dispose")}const S=[],I=[];let L=-1/0,C=!1;if(n.autoInstrument!==!1&&typeof window<"u"){const y=()=>{const W=t()-i;if(f("inputs"),C||(C=!0,m("Life",{stage:"first_input"})),!a)return;I.push(W),I.length>64&&I.splice(0,I.length-64);const j=w_(I,W,a);j.burst&&W-L>=a.cooldownMs&&(L=W,f("bursts"),m("Act",{kind:"burst",n:j.n,span_ms:j.spanMs,rate_per_s:j.n/j.spanMs*1e3}))};window.addEventListener("pointerdown",y,{capture:!0,passive:!0}),S.push(()=>window.removeEventListener("pointerdown",y,{capture:!0}));const M=()=>{g||(b("pagehide"),g=!0)};window.addEventListener("pagehide",M),S.push(()=>window.removeEventListener("pagehide",M));const D=W=>{f("errors"),m("Err",{kind:"error",msg:W.message,at:`${W.filename}:${W.lineno}`})};window.addEventListener("error",D),S.push(()=>window.removeEventListener("error",D));const V=W=>{f("rejections");const j=W.reason;m("Err",{kind:"rejection",msg:typeof j=="string"?j:j?.message??"unknown"})};window.addEventListener("unhandledrejection",V),S.push(()=>window.removeEventListener("unhandledrejection",V))}if(n.autoInstrument!==!1&&typeof document<"u"){const y=()=>{const M=document.hidden;f(M?"hidden":"visible"),m("Life",{stage:M?"hidden":"visible"}),M&&!g?(b("visibility_hidden"),g=!0):M||(g=!1)};document.addEventListener("visibilitychange",y),S.push(()=>document.removeEventListener("visibilitychange",y))}if(n.watchFrames!==!1&&typeof requestAnimationFrame=="function"){let y=t(),M=0;const D=()=>{if(d)return;const V=t(),W=V-y;y=V,W>=b_&&(f("long_frames"),T("worst_frame_ms",Math.max(u.worst_frame_ms??0,Math.round(W))),m("Perf",{kind:"long_frame",ms:Math.round(W)})),M=requestAnimationFrame(D)};M=requestAnimationFrame(D),S.push(()=>cancelAnimationFrame(M))}let O=null;return o>0&&typeof setInterval=="function"&&(O=setInterval(()=>b("tick"),o),S.push(()=>{O!==null&&clearInterval(O)})),m("Boot",{build:n.build,w:typeof window<"u"?window.innerWidth:void 0,h:typeof window<"u"?window.innerHeight:void 0,dpr:typeof window<"u"?window.devicePixelRatio:void 0,touch:typeof navigator<"u"?(navigator.maxTouchPoints??0)>0:void 0,lang:typeof navigator<"u"?navigator.language:void 0}),{event:m,count:f,set:T,flush:b,t:v,stats:()=>({lines:h,dropped:p,byTag:{...l},counters:{...c},gauges:{...u}}),dispose:()=>{if(!d){g||b("dispose"),d=!0;for(const y of S)try{y()}catch{}}}}}function C_(){return{embedded:window.parent!==window,origin:window.location.origin,postMessage:(n,e)=>window.parent.postMessage(n,e)}}function P_(n=C_()){let e=!1,t=!1;const i=(r,s={})=>{n.embedded&&n.postMessage({type:"koyotap:game",gameId:"little-fish-trios",event:r,...s},n.origin)};return{ready(){e||(e=!0,i("ready"))},firstAction(){!e||t||(t=!0,i("first_action"))},roundEnd(r,s,o){t&&i("round_end",{level:r,round:r,score:s,duration_ms:Math.max(0,Math.round(o))})}}}let Qi=g_();const tt=(n,e)=>__(n,Qi,e),Cc=n=>{try{return localStorage.getItem(n)}catch{return null}},Wo=(n,e)=>{try{localStorage.setItem(n,e)}catch{}};new URLSearchParams(location.search);let qe=rs(1),Ei=Math.max(1,Math.min(9999,Number(Cc("reef-pop-unlocked"))||1));try{qe=$c(JSON.parse(Cc("reef-pop-save")??"null"))??qe}catch{}let Un="",er=!1,qi=0,ls=!1,Pc=!1;const At=new v_,fa=R_({build:y_()}),Dn=S_("inert"),L_=Dn.init(),Xo=P_();let da=performance.now();const Il={gear:'<path d="m9.5 3 .6 2.2a7 7 0 0 1 3.8 0L14.5 3l3 1.7-.6 2.2a7 7 0 0 1 1.9 3L21 11v3l-2.2.6a7 7 0 0 1-1.9 3l.6 2.2-3 1.7-.6-2.2a7 7 0 0 1-3.8 0l-.6 2.2-3-1.7.6-2.2a7 7 0 0 1-1.9-3L3 14v-3l2.2-.6a7 7 0 0 1 1.9-3l-.6-2.2Z"/><circle cx="12" cy="12.5" r="3"/>',undo:'<path d="M9 5 3 10l6 5M4 10h10a6 6 0 0 1 0 12"/>',hint:'<path d="M8 16c0-3-3-4-3-8a7 7 0 0 1 14 0c0 4-3 5-3 8Zm1 4h6m-5 3h4M12 2v2M2 8H0m24 0h-2"/>',shuffle:'<path d="M3 5h3c5 0 7 14 12 14h3m-4-4 4 4-4 4M3 19h3c2.5 0 4-3 5-6m2-3c1-3 3-5 5-5h3m-4-4 4 4-4 4"/>',restart:'<path d="M4 9a9 9 0 1 1 1 10M4 3v6h6"/>',arrow:'<path d="m9 5 7 7-7 7"/>',fish:'<path d="M19 12c-3 8-13 8-16 0 3-8 13-8 16 0Zm0 0 4-5v10Z"/><circle cx="7" cy="11" r=".5"/>',check:'<path d="m5 12 4 4L20 5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',star:'<path d="m12 2 3 6.2 6.8 1-4.9 4.8 1.2 6.8-6.1-3.2-6.1 3.2 1.2-6.8L2.2 9.2l6.8-1Z"/>'},Ot=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Il[n]??Il.fish}</svg>`;document.body.innerHTML=`<div id="game" class="game">
 <div class="brand"><div class="brand-mark">${Ot("fish")}</div><h1>LITTLE FISH<span>TRIOS</span></h1><div class="brand-line"></div></div>
 <section class="hud"><div class="topline"><button id="levels" class="level-pill"></button><div class="progress-head"><span id="progress-label" class="sr-only"></span>${Ot("fish")}<strong id="progress-number"></strong></div><button id="settings" class="icon-button" aria-label=""></button></div><div class="progress-track"><div id="progress-fill"></div></div><div class="rail-note"><span class="tiny-fish">${Ot("fish")}</span><span id="rail-goal"></span></div></section>
 <main class="play-panel"><div class="water-glow"></div><div id="field" class="playfield"><div class="instruction" id="instruction"></div><div id="tray-info" class="sr-only" aria-live="polite"></div></div><div id="toast" class="toast" role="status"></div></main>
 <nav class="actions"><button id="undo" class="action"><span>${Ot("undo")}</span><b></b></button><button id="hint" class="action"><span>${Ot("hint")}</span><b></b></button><button id="shuffle" class="action"><span>${Ot("shuffle")}</span><b></b></button></nav>
 <div class="meta"><button id="restart" class="quiet-button">${Ot("restart")}<span></span></button><span class="small-brand">KOYOTAP</span></div>
 </div><div id="modal-root"></div><div class="portrait-hint" role="status"><div class="rotate-phone" aria-hidden="true">↶</div><p id="rotate-copy"></p></div>`;const je=n=>document.getElementById(n),Di=f_(je("field"),D_,(n,e,t)=>tt("fishLabel",{n:t+1,fish:tt(`fish${e}`)}));function vr(){Wo("reef-pop-save",JSON.stringify(qe)),Wo("reef-pop-unlocked",String(Ei))}function Lc(){document.documentElement.lang=Qi,document.title="Little Fish Trios",je("rotate-copy").textContent=tt("rotate"),je("levels").innerHTML=`<span>${tt("level",{n:qe.level})}</span>${Ot("arrow")}`,je("settings").innerHTML=Ot("gear"),je("settings").setAttribute("aria-label",tt("settings")),je("progress-label").textContent=tt("progress"),je("rail-goal").textContent=tt("goal");for(const e of["undo","hint","shuffle"])je(e).querySelector("b").textContent=tt(e);je("restart").querySelector("span").textContent=tt("restart"),je("instruction").textContent=qe.level===1&&qe.moves===0?tt("tutorial"):"";const n=qe.collected.reduce((e,t)=>e+t,0);je("progress-number").textContent=tt("rescued",{n,total:qe.total}),je("progress-fill").style.width=`${n/qe.total*100}%`,je("tray-info").textContent=tt("filled",{n:qe.tray.length}),je("field").setAttribute("aria-label",tt("tray")),je("game").classList.toggle("danger",qe.tray.length>=5),je("undo").disabled=!qe.history.length}function cs(){Lc(),Di.render(qe),vr()}let qo;function is(n){je("toast").textContent=tt(n),je("toast").classList.add("shown"),clearTimeout(qo),qo=setTimeout(()=>{je("toast").classList.remove("shown"),je("toast").textContent=""},2100)}async function D_(n,e){if(!Pc||er||Un||qe.status!=="playing")return;const t=Wc(qe,n,e);if(t.event.type==="invalid")return;Xo.firstAction();const i=++qi;er=!0,qe=t.state,vr(),fa.event("Act",{kind:"fish",id:n,index:e,matched:t.event.matched.length,level:qe.level}),je("instruction").textContent="",je("undo").disabled=!qe.history.length,qe.status!=="playing"&&Xo.roundEnd(qe.level,qe.collected.reduce((s,o)=>s+o,0),performance.now()-da),ls=qe.status!=="playing";const r=await Di.playMove(n,t.event,qe,{cue:(s,o=0)=>At.play(s,{rate:s==="land"?1+o*.08:1}),progress:(s,o)=>{if(qi!==i)return;const a=o.reduce((l,c)=>l+c,0);je("progress-number").textContent=tt("rescued",{n:a,total:qe.total}),je("progress-fill").style.width=`${a/qe.total*100}%`,je("tray-info").textContent=tt("filled",{n:s.length}),je("game").classList.toggle("danger",s.length>=5)}});qi===i&&(er=!1,Lc(),r&&qe.status!=="playing"&&setTimeout(()=>{qi===i&&!Un&&pa()},220))}function xr(n){qi++,er=!1,ls=!1,qe=n,da=performance.now(),clearTimeout(qo),je("toast").classList.remove("shown"),je("toast").textContent="",Nn(),cs()}function Dc(){if(!qe.history.length){is("noUndo");return}At.play("button"),xr(Xc(qe))}function Ic(){At.play("button"),xr(qc(qe)),is("shuffleToast")}function I_(){const n=Yc(qe);At.play("button"),n?(Di.hint(n.bubbleId,n.fishIndex),is("hintToast")):is("noHint")}function Fi(n,e){je(n).onclick=()=>{At.unlock(),e()}}Fi("undo",Dc);Fi("hint",I_);Fi("shuffle",Ic);Fi("settings",()=>Nc());Fi("levels",()=>Yo());Fi("restart",()=>Fc());let Uc=null;function Mr(n){Un||(Uc=document.activeElement),Un="open",Dn.gameplayStop(),je("modal-root").innerHTML=`<div class="scrim"><section class="modal" role="dialog" aria-modal="true">${n}</section></div>`,je("modal-root").querySelector("button")?.focus()}function Nn(){Un="",je("modal-root").replaceChildren(),Dn.gameplayStart(),Uc?.focus(),ls&&!er&&pa()}function Bt(n,e){je("modal-root").querySelector(n).onclick=()=>{At.unlock(),At.play("button"),e()}}function us(){return`<button class="modal-close icon-button" id="modal-close" aria-label="${tt("back")}">${Ot("close")}</button>`}function Nc(){At.play("button"),Mr(`${us()}<div class="modal-eyebrow">LITTLE FISH TRIOS</div><h2>${tt("settings")}</h2>
 <label class="setting-row"><span>${tt("music")}</span><input id="music-toggle" type="checkbox" role="switch" ${At.music?"checked":""}></label>
 <label class="setting-row"><span>${tt("sound")}</span><input id="sfx-toggle" type="checkbox" role="switch" ${At.sound?"checked":""}></label>
 <label class="setting-row language-row" for="lang"><span>${tt("language")}</span><select id="lang">${Rc.map(n=>`<option value="${n.code}" ${Qi===n.code?"selected":""}>${n.label}</option>`).join("")}</select></label>
 <button id="continue" class="primary-button">${tt("resume")}</button><button id="settings-restart" class="text-button">${tt("restart")}</button><div class="credits"><strong>${tt("credits")}</strong><span>Cozy Puzzle In-Game 2</span><span>${tt("musicCredit")}</span></div>`),Bt("#modal-close",Nn),Bt("#continue",Nn),Bt("#settings-restart",Fc),je("music-toggle").onchange=n=>{At.setMusic(n.target.checked)},je("sfx-toggle").onchange=n=>{At.setSound(n.target.checked)},je("lang").onchange=n=>{Qi=n.target.value,Wo("reef-pop-lang",Qi),cs(),Nc()}}function pa(){if(qe.status==="playing")return;ls=!1;const n=qe.status==="won";n&&(Ei=Math.max(Ei,qe.level+1),vr(),At.play("win")),Mr(`${us()}<div class="result-icon ${n?"win":"fail"}">${Ot(n?"star":"fish")}</div><h2>${tt(n?"won":"lost")}</h2><p>${tt(n?"wonSub":"lostSub")}</p><div class="result-stats"><span>${tt("level",{n:qe.level})}</span><span>${tt("moves")} <b>${qe.moves}</b></span></div>
 <button id="result-primary" class="primary-button">${tt(n?"next":"retry")}${Ot(n?"arrow":"restart")}</button>${n?"":`<div class="result-secondary"><button id="result-undo" class="secondary-button">${tt("undo")}</button><button id="result-shuffle" class="secondary-button">${tt("shuffle")}</button></div>`}`),Bt("#modal-close",Nn),Bt("#result-primary",()=>xr(rs(n?qe.level+1:qe.level))),n||(Bt("#result-undo",Dc),Bt("#result-shuffle",Ic))}function Fc(){At.play("button"),Mr(`${us()}<div class="result-icon">${Ot("restart")}</div><h2>${tt("confirmRestart")}</h2><button id="yes-restart" class="primary-button">${tt("restart")}</button><button id="cancel-restart" class="text-button">${tt("cancel")}</button>`),Bt("#modal-close",Nn),Bt("#cancel-restart",Nn),Bt("#yes-restart",()=>xr(rs(qe.level)))}function Yo(n=Math.floor((qe.level-1)/20)){At.play("button");const e=n*20+1;Mr(`${us()}<div class="modal-eyebrow">LITTLE FISH TRIOS</div><h2>${tt("choose")}</h2><div class="level-grid">${Array.from({length:20},(t,i)=>{const r=e+i;return`<button class="level-tile ${r===qe.level?"current":""}" data-level="${r}" ${r>Ei?"disabled":""}>${r}${r<Ei?`<i>${Ot("check")}</i>`:""}</button>`}).join("")}</div><div class="level-nav"><button id="prev-levels" class="secondary-button" ${n===0?"disabled":""}>←</button><span>${e} – ${e+19}</span><button id="next-levels" class="secondary-button" ${Ei<e+20?"disabled":""}>→</button></div>`),Bt("#modal-close",Nn),Bt("#prev-levels",()=>Yo(n-1)),Bt("#next-levels",()=>Yo(n+1)),je("modal-root").querySelectorAll("[data-level]").forEach(t=>t.onclick=()=>xr(rs(Number(t.dataset.level))))}document.addEventListener("keydown",n=>{if(n.key==="Escape"&&Un){Nn();return}if(n.key==="Tab"&&Un){const e=[...je("modal-root").querySelectorAll("button:not(:disabled),input,select")],t=e[0],i=e[e.length-1];n.shiftKey&&document.activeElement===t?(i?.focus(),n.preventDefault()):!n.shiftKey&&document.activeElement===i&&(t?.focus(),n.preventDefault())}});document.addEventListener("pointerdown",()=>At.unlock(),{once:!0});document.addEventListener("keydown",()=>At.unlock(),{once:!0});document.addEventListener("visibilitychange",()=>{document.hidden?(Di.finish(),vr(),Dn.gameplayStop()):(Di.layout(),Un||Dn.gameplayStart())});window.addEventListener("pagehide",vr);cs();const U_=Di.ready.then(async()=>(cs(),await new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(()=>n()))),Pc=!0,da=performance.now(),Xo.ready(),qe.status!=="playing"&&setTimeout(pa,450),!0)).catch(n=>(console.error("Required fish images could not be loaded.",n),fa.event("Err",{kind:"required_assets"}),Mr(`<div class="result-icon fail" aria-hidden="true">!</div><button id="retry-assets" class="primary-button">${tt("retry")}</button>`),Bt("#retry-assets",()=>location.reload()),!1));L_.then(async()=>{Dn.gameLoadingStart(),await U_&&(Dn.gameLoadingFinished(),Dn.gameplayStart(),fa.event("Life",{stage:"gameplay_start"}),N_())});async function N_(){await At.load()}
