(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="186",Lu=0,jo=1,Iu=2,cr=1,Du=2,or=3,fi=0,jt=1,sn=2,kn=0,ur=1,el=2,tl=3,nl=4,Uu=5,Bi=100,Nu=101,Fu=102,Ou=103,zu=104,Bu=200,ku=201,Gu=202,Vu=203,Ec=204,Tc=205,Hu=206,Wu=207,Xu=208,qu=209,Yu=210,Ku=211,Zu=212,Ju=213,$u=214,ha=0,da=1,fa=2,gr=3,pa=4,ma=5,ga=6,_a=7,wc=0,Qu=1,ju=2,Cn=0,Cc=1,Rc=2,Pc=3,ho=4,Lc=5,Ic=6,Dc=7,Uc=300,pi=301,Wi=302,As=303,Es=304,fs=306,va=1e3,Bn=1001,xa=1002,Bt=1003,eh=1004,Cr=1005,Ot=1006,Ts=1007,hi=1008,an=1009,Nc=1010,Fc=1011,_r=1012,fo=1013,Rn=1014,xn=1015,Pn=1016,po=1017,mo=1018,vr=1020,Oc=35902,zc=35899,Bc=1021,kc=1022,un=1023,Vn=1026,di=1027,go=1028,_o=1029,mi=1030,vo=1031,xo=1033,jr=33776,es=33777,ts=33778,ns=33779,Ma=35840,Sa=35841,ya=35842,ba=35843,Aa=36196,Ea=37492,Ta=37496,wa=37488,Ca=37489,ss=37490,Ra=37491,Pa=37808,La=37809,Ia=37810,Da=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,za=37816,Ba=37817,ka=37818,Ga=37819,Va=37820,Ha=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,Ka=36284,as=36285,Za=36286,th=3200,Ja=0,nh=1,ei="",Wt="srgb",os="srgb-linear",ls="linear",ft="srgb",ws=7680,ih=519,rh=512,sh=513,ah=514,Mo=515,oh=516,lh=517,So=518,ch=519,uh=35044,hh=35048,il="300 es",wn=2e3,xr=2001;function dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){const i=Mr("canvas");return i.style.display="block",i}const rl={};function sl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Gc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gi(...i){const e=i.join(" ");e in rl||(rl[e]=!0,Ve(...i))}function ph(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const mh={[ha]:da,[fa]:ga,[pa]:_a,[gr]:ma,[da]:ha,[ga]:fa,[_a]:pa,[ma]:gr};class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,$a=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function Rs(i,e,t){return(1-t)*i+t*e}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zo=class zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zo.prototype.isVector2=!0;let Ae=zo;class qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],d=s[a+1],v=s[a+2],y=s[a+3];if(f!==y||l!==u||c!==d||h!==v){let m=l*u+c*d+h*v+f*y;m<0&&(u=-u,d=-d,v=-v,y=-y,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+v*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+v*o,f=f*p+y*o;const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],d=s[a+2],v=s[a+3];return e[t]=o*v+h*f+l*d-c*u,e[t+1]=l*v+h*u+c*f-o*d,e[t+2]=c*v+h*d+o*u-l*f,e[t+3]=h*v-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),u=l(n/2),d=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f-u*d*v;break;case"YXZ":this._x=u*h*f+c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f+u*d*v;break;case"ZXY":this._x=u*h*f-c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f-u*d*v;break;case"ZYX":this._x=u*h*f-c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f+u*d*v;break;case"YZX":this._x=u*h*f+c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f-u*d*v;break;case"XZY":this._x=u*h*f-c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f+u*d*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bo=class Bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bo.prototype.isVector3=!0;let L=Bo;const Ps=new L,al=new qi,ko=class ko{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],v=n[8],y=r[0],m=r[3],p=r[6],M=r[1],w=r[4],x=r[7],b=r[2],E=r[5],C=r[8];return s[0]=a*y+o*M+l*b,s[3]=a*m+o*w+l*E,s[6]=a*p+o*x+l*C,s[1]=c*y+h*M+f*b,s[4]=c*m+h*w+f*E,s[7]=c*p+h*x+f*C,s[2]=u*y+d*M+v*b,s[5]=u*m+d*w+v*E,s[8]=u*p+d*x+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,v=t*f+n*u+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ko.prototype.isMatrix3=!0;let Xe=ko;const Ls=new Xe,ol=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?ls:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:e,whitePoint:n,transfer:ls,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const st=_h();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Mr("canvas")),bi.width=e.width,bi.height=e.height;const r=bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xh=0;class yo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Is(r[a].image)):s.push(Is(r[a]))}else s=Is(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Mh=0;const Ds=new L;class kt extends vi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Bn,r=Bn,s=Ot,a=hi,o=un,l=an,c=kt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ar(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Uc;kt.DEFAULT_ANISOTROPY=1;const Go=class Go{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],v=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(d+1)/2,b=(p+1)/2,E=(h+u)/4,C=(f+y)/4,_=(v+m)/4;return w>x&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=E/n,s=C/n):x>b?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=_/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=C/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Go.prototype.isVector4=!0;let Et=Go;class Sh extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new kt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new yo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vc extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ds=class ds{constructor(e,t,n,r,s,a,o,l,c,h,f,u,d,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,f,u,d,v,y,m)}set(e,t,n,r,s,a,o,l,c,h,f,u,d,v,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ds().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,d=a*f,v=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,v=c*h,y=c*f;t[0]=u+y*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,v=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,v=o*h,y=o*f;t[0]=l*h,t[4]=v*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=v*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+v,t[10]=u-y*f}else if(e.order==="XZY"){const u=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-v,t[2]=v*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,Ah)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),Rr.crossVectors(tn,Zn),r[0]=Zn.x,r[4]=Rr.x,r[8]=tn.x,r[1]=Zn.y,r[5]=Rr.y,r[9]=tn.y,r[2]=Zn.z,r[6]=Rr.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],v=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],x=n[11],b=n[15],E=r[0],C=r[4],_=r[8],A=r[12],R=r[1],F=r[5],O=r[9],G=r[13],U=r[2],H=r[6],K=r[10],J=r[14],ie=r[3],V=r[7],I=r[11],k=r[15];return s[0]=a*E+o*R+l*U+c*ie,s[4]=a*C+o*F+l*H+c*V,s[8]=a*_+o*O+l*K+c*I,s[12]=a*A+o*G+l*J+c*k,s[1]=h*E+f*R+u*U+d*ie,s[5]=h*C+f*F+u*H+d*V,s[9]=h*_+f*O+u*K+d*I,s[13]=h*A+f*G+u*J+d*k,s[2]=v*E+y*R+m*U+p*ie,s[6]=v*C+y*F+m*H+p*V,s[10]=v*_+y*O+m*K+p*I,s[14]=v*A+y*G+m*J+p*k,s[3]=M*E+w*R+x*U+b*ie,s[7]=M*C+w*F+x*H+b*V,s[11]=M*_+w*O+x*K+b*I,s[15]=M*A+w*G+x*J+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],v=e[3],y=e[7],m=e[11],p=e[15],M=l*d-c*u,w=o*d-c*f,x=o*u-l*f,b=a*d-c*h,E=a*u-l*h,C=a*f-o*h;return t*(y*M-m*w+p*x)-n*(v*M-m*b+p*E)+r*(v*w-y*b+p*C)-s*(v*x-y*E+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],v=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-r*a,x=t*c-s*a,b=n*l-r*o,E=n*c-s*o,C=r*c-s*l,_=h*y-f*v,A=h*m-u*v,R=h*p-d*v,F=f*m-u*y,O=f*p-d*y,G=u*p-d*m,U=M*G-w*O+x*F+b*R-E*A+C*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/U;return e[0]=(o*G-l*O+c*F)*H,e[1]=(r*O-n*G-s*F)*H,e[2]=(y*C-m*E+p*b)*H,e[3]=(u*E-f*C-d*b)*H,e[4]=(l*R-a*G-c*A)*H,e[5]=(t*G-r*R+s*A)*H,e[6]=(m*x-v*C-p*w)*H,e[7]=(h*C-u*x+d*w)*H,e[8]=(a*O-o*R+c*_)*H,e[9]=(n*R-t*O-s*_)*H,e[10]=(v*E-y*x+p*M)*H,e[11]=(f*x-h*E-d*M)*H,e[12]=(o*A-a*F-l*_)*H,e[13]=(t*F-n*A+r*_)*H,e[14]=(y*w-v*b-m*M)*H,e[15]=(h*b-f*w+u*M)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,v=s*f,y=a*h,m=a*f,p=o*f,M=l*c,w=l*h,x=l*f,b=n.x,E=n.y,C=n.z;return r[0]=(1-(y+p))*b,r[1]=(d+x)*b,r[2]=(v-w)*b,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(u+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(v+w)*C,r[9]=(m-M)*C,r[10]=(1-(u+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(r[0],r[1],r[2]).length();const o=Ai.set(r[4],r[5],r[6]).length(),l=Ai.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fn.copy(this);const c=1/a,h=1/o,f=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=wn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let v,y;if(l)v=s/(a-s),y=a*s/(a-s);else if(o===wn)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===xr)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=wn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),d=-(n+r)/(n-r);let v,y;if(l)v=1/(a-s),y=a/(a-s);else if(o===wn)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===xr)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ds.prototype.isMatrix4=!0;let _t=ds;const Ai=new L,fn=new _t,bh=new L(0,0,0),Ah=new L(1,1,1),Zn=new L,Rr=new L,tn=new L,cl=new _t,ul=new qi;class ii{constructor(e=0,t=0,n=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eh=0;const hl=new L,Ei=new qi,In=new _t,Pr=new L,Qi=new L,Th=new L,wh=new qi,dl=new L(1,0,0),fl=new L(0,1,0),pl=new L(0,0,1),ml={type:"added"},Ch={type:"removed"},Ti={type:"childadded",child:null},Us={type:"childremoved",child:null};class Lt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new L,t=new ii,n=new qi,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(fl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(fl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Qi,Pr,this.up):In.lookAt(Pr,Qi,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(In),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),Us.child=e,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class At extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rh={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=gh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fs(a,s,e+1/3),this.g=Fs(a,s,e),this.b=Fs(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return st.workingToColorSpace(Ht.copy(this),e),Math.round(tt(Ht.r*255,0,255))*65536+Math.round(tt(Ht.g*255,0,255))*256+Math.round(tt(Ht.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Wt){st.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Lr);const n=Rs(Jn.h,Lr.h,t),r=Rs(Jn.s,Lr.s,t),s=Rs(Jn.l,Lr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new He;He.NAMES=Hc;class Ph extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new L,Dn=new L,Os=new L,Un=new L,wi=new L,Ci=new L,gl=new L,zs=new L,Bs=new L,ks=new L,Gs=new Et,Vs=new Et,Hs=new Et;class vn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Dn.subVectors(n,t),Os.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Dn),l=pn.dot(Os),c=Dn.dot(Dn),h=Dn.dot(Os),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,v=(a*h-o*l)*u;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gs.setScalar(0),Vs.setScalar(0),Hs.setScalar(0),Gs.fromBufferAttribute(e,t),Vs.fromBufferAttribute(e,n),Hs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gs,s.x),a.addScaledVector(Vs,s.y),a.addScaledVector(Hs,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Dn.subVectors(e,t),pn.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,n),Ci.subVectors(s,n),zs.subVectors(e,n);const l=wi.dot(zs),c=Ci.dot(zs);if(l<=0&&c<=0)return t.copy(n);Bs.subVectors(e,r);const h=wi.dot(Bs),f=Ci.dot(Bs);if(h>=0&&f<=h)return t.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(wi,a);ks.subVectors(e,s);const d=wi.dot(ks),v=Ci.dot(ks);if(v>=0&&d<=v)return t.copy(s);const y=d*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ci,o);const m=h*v-d*f;if(m<=0&&f-h>=0&&d-v>=0)return gl.subVectors(s,r),o=(f-h)/(f-h+(d-v)),t.copy(r).addScaledVector(gl,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(wi,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Dr.subVectors(this.max,ji),Ri.subVectors(e.a,ji),Pi.subVectors(e.b,ji),Li.subVectors(e.c,ji),$n.subVectors(Pi,Ri),Qn.subVectors(Li,Pi),ai.subVectors(Ri,Li);let t=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-ai.z,ai.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,ai.z,0,-ai.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-ai.y,ai.x,0];return!Ws(t,Ri,Pi,Li,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,Ri,Pi,Li,Dr))?!1:(Ur.crossVectors($n,Qn),t=[Ur.x,Ur.y,Ur.z],Ws(t,Ri,Pi,Li,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new L,new L,new L,new L,new L,new L,new L,new L],mn=new L,Ir=new xi,Ri=new L,Pi=new L,Li=new L,$n=new L,Qn=new L,ai=new L,ji=new L,Dr=new L,Ur=new L,oi=new L;function Ws(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){oi.fromArray(i,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rt=new L,Nr=new Ae;let Lh=0;class Zt extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ih=new xi,er=new L,Xs=new L;class Yi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ih.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Xs)),this.expandByPoint(er.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Dh=0;const cn=new _t,qs=new Lt,Ii=new L,nn=new xi,tr=new xi,Ft=new L;class wt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(nn.min,tr.min),nn.expandByPoint(Ft),Ft.addVectors(nn.max,tr.max),nn.expandByPoint(Ft)):(nn.expandByPoint(tr.min),nn.expandByPoint(tr.max))}nn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Ft.add(Ii)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,f=new L,u=new Ae,d=new Ae,v=new Ae,y=new L,m=new L;function p(_,A,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,_),d.fromBufferAttribute(s,A),v.fromBufferAttribute(s,R),h.sub(c),f.sub(c),d.sub(u),v.sub(u);const F=1/(d.x*v.y-v.x*d.y);isFinite(F)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(F),o[_].add(y),o[A].add(y),o[R].add(y),l[_].add(m),l[A].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){const R=M[_],F=R.start,O=R.count;for(let G=F,U=F+O;G<U;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new L,x=new L,b=new L,E=new L;function C(_){b.fromBufferAttribute(r,_),E.copy(b);const A=o[_];w.copy(A),w.sub(b.multiplyScalar(b.dot(A))).normalize(),x.crossVectors(E,A);const F=x.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,F)}for(let _=0,A=M.length;_<A;++_){const R=M[_],F=R.start,O=R.count;for(let G=F,U=F+O;G<U;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){const v=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[v++]=c[d++]}return new Zt(u,h,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ys=new L,Uh=new L,Nh=new Xe;class On{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ys.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ys),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nh.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Fh=0;class Ki extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=ur,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new On().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new L,Ks=new L,Fr=new L,Or=new L;class Ao{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ks.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ks);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Or.dot(this.direction),l=-Or.dot(Fr),c=Or.lengthSq(),h=Math.abs(1-a*a);let f,u,d,v;if(h>0)if(f=a*l-o,u=a*o-l,v=s*h,f>=0)if(u>=-v)if(u<=v){const y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ks).addScaledVector(Fr,u),d}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,v=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,x=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let C,_,A,R,F,O,G,U,H,K,J,ie;if(x>=b&&x>=E?(A=l,O=f,H=v,ie=p,l>=0?(C=c,_=h,R=u,F=d,G=y,U=m,K=M,J=w):(C=h,_=c,R=d,F=u,G=m,U=y,K=w,J=M)):b>=E?(A=c,O=u,H=y,ie=M,c>=0?(C=h,_=l,R=d,F=f,G=m,U=v,K=w,J=p):(C=l,_=h,R=f,F=d,G=v,U=m,K=p,J=w)):(A=h,O=d,H=m,ie=w,h>=0?(C=l,_=c,R=f,F=u,G=v,U=y,K=p,J=M):(C=c,_=l,R=u,F=f,G=y,U=v,K=M,J=p)),A===0)return null;const V=C/A,I=_/A,k=1/A,ue=R-V*O,ge=F-I*O,Ge=G-V*H,Pe=U-I*H,Ee=K-V*ie,$=J-I*ie,ne=Ee*Pe-$*Ge,he=ue*$-ge*Ee,Re=Ge*ge-Pe*ue;if(r){if(ne<0||he<0||Re<0)return null}else if((ne<0||he<0||Re<0)&&(ne>0||he>0||Re>0))return null;const Me=ne+he+Re;if(Me===0)return null;const Ie=k*(ne*O+he*H+Re*ie);return(Me>0?Ie<0:Ie>0)?null:this.at(Ie/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ti extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _l=new _t,li=new Ao,zr=new Yi,vl=new L,Br=new L,kr=new L,Gr=new L,Zs=new L,Vr=new L,xl=new L,Hr=new L;class it extends Lt{constructor(e=new wt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Zs.fromBufferAttribute(f,e),a?Vr.addScaledVector(Zs,h):Vr.addScaledVector(Zs.sub(t),h))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(zr.containsPoint(li.origin)===!1&&(li.intersectSphere(zr,vl)===null||li.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(_l.copy(s).invert(),li.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=w;x<b;x+=3){const E=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);r=Wr(this,p,e,n,c,h,f,E,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=v,p=y;m<p;m+=3){const M=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);r=Wr(this,a,e,n,c,h,f,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=w;x<b;x+=3){const E=x,C=x+1,_=x+2;r=Wr(this,p,e,n,c,h,f,E,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=v,p=y;m<p;m+=3){const M=m,w=m+1,x=m+2;r=Wr(this,a,e,n,c,h,f,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Oh(i,e,t,n,r,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===fi,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Wr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,kr),i.getVertexPosition(c,Gr);const h=Oh(i,e,t,n,Br,kr,Gr,xl);if(h){const f=new L;vn.getBarycoord(xl,Br,kr,Gr,f),r&&(h.uv=vn.getInterpolatedAttribute(r,o,l,c,f,new Ae)),s&&(h.uv1=vn.getInterpolatedAttribute(s,o,l,c,f,new Ae)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(Br,kr,Gr,u.normal),h.face=u,h.barycoord=f}return h}class Eo extends kt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Bt,h=Bt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new _t,Sl=new _t,Xr=[],yl=new xi,zh=new _t,nr=new it,ir=new Yi;class qc extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,zh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),yl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ir.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Di),Sl.multiplyMatrices(n,Di),nr.matrixWorld=Sl,nr.raycast(e,Xr);for(let a=0,o=Xr.length;a<o;a++){const l=Xr[a];l.instanceId=s,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(r*this.count),r,this.count,go,xn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ci=new Yi,Bh=new Ae(.5,.5),qr=new L;class To{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,a=new On){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],v=s[8],y=s[9],m=s[10],p=s[11],M=s[12],w=s[13],x=s[14],b=s[15];if(r[0].setComponents(c-a,d-h,p-v,b-M).normalize(),r[1].setComponents(c+a,d+h,p+v,b+M).normalize(),r[2].setComponents(c+o,d+f,p+y,b+w).normalize(),r[3].setComponents(c-o,d-f,p-y,b-w).normalize(),n)r[4].setComponents(l,u,m,x).normalize(),r[5].setComponents(c-l,d-u,p-m,b-x).normalize();else if(r[4].setComponents(c-l,d-u,p-m,b-x).normalize(),t===wn)r[5].setComponents(c+l,d+u,p+m,b+x).normalize();else if(t===xr)r[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=Bh.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yc extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cs=new L,us=new L,bl=new _t,rr=new Ao,Yr=new Yi,Js=new L,Al=new L;class kh extends Lt{constructor(e=new wt,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)cs.fromBufferAttribute(t,r-1),us.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=cs.distanceTo(us);e.setAttribute("lineDistance",new je(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;bl.copy(r).invert(),rr.copy(e.ray).applyMatrix4(bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=d,m=v-1;y<m;y+=c){const p=h.getX(y),M=h.getX(y+1),w=Kr(this,e,rr,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){const y=h.getX(v-1),m=h.getX(d),p=Kr(this,e,rr,l,y,m,v-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let y=d,m=v-1;y<m;y+=c){const p=Kr(this,e,rr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Kr(this,e,rr,l,v-1,d,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(cs.fromBufferAttribute(o,r),us.fromBufferAttribute(o,s),t.distanceSqToSegment(cs,us,Js,Al)>n)return;Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);if(!(c<e.near||c>e.far))return{distance:c,point:Al.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const El=new L,Tl=new L;class Gh extends kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)El.fromBufferAttribute(t,r),Tl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+El.distanceTo(Tl);e.setAttribute("lineDistance",new je(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kc extends kt{constructor(e=[],t=pi,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vh extends kt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sr extends kt{constructor(e,t,n=Rn,r,s,a,o=Bt,l=Bt,c,h=Vn,f=1){if(h!==Vn&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hh extends Sr{constructor(e,t=Rn,n=pi,r,s,a=Bt,o=Bt,l,c=Vn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pt extends wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function v(y,m,p,M,w,x,b,E,C,_,A){const R=x/C,F=b/_,O=x/2,G=b/2,U=E/2,H=C+1,K=_+1;let J=0,ie=0;const V=new L;for(let I=0;I<K;I++){const k=I*F-G;for(let ue=0;ue<H;ue++){const ge=ue*R-O;V[y]=ge*M,V[m]=k*w,V[p]=U,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(ue/C),f.push(1-I/_),J+=1}}for(let I=0;I<_;I++)for(let k=0;k<C;k++){const ue=u+k+H*I,ge=u+k+H*(I+1),Ge=u+(k+1)+H*(I+1),Pe=u+(k+1)+H*I;l.push(ue,ge,Pe),l.push(ge,Ge,Pe),ie+=6}o.addGroup(d,ie,A),d+=ie,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hr extends wt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,v=n*2+s,y=r+1,m=new L,p=new L;for(let M=0;M<=v;M++){let w=0,x=0,b=0,E=0;if(M<=n){const A=M/n,R=A*Math.PI/2;x=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),w=A*f}else if(M<=n+s){const A=(M-n)/s;x=-h+A*t,b=e,E=0,w=f+A*u}else{const A=(M-n-s)/n,R=A*Math.PI/2;x=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),w=f+u+A*f}const C=Math.max(0,Math.min(1,w/d));let _=0;M===0?_=.5/r:M===v&&(_=-.5/r);for(let A=0;A<=r;A++){const R=A/r,F=R*Math.PI*2,O=Math.sin(F),G=Math.cos(F);p.x=-b*G,p.y=x,p.z=b*O,o.push(p.x,p.y,p.z),m.set(-b*G,E,b*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,C)}if(M>0){const A=(M-1)*y;for(let R=0;R<r;R++){const F=A+R,O=A+R+1,G=M*y+R,U=M*y+R+1;a.push(F,O,G),a.push(O,U,G)}}}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class wo extends wt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new L,h=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bt extends wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],d=[];let v=0;const y=[],m=n/2;let p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function M(){const x=new L,b=new L;let E=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const A=[],R=_/s,F=R*(t-e)+e;for(let O=0;O<=r;O++){const G=O/r,U=G*l+o,H=Math.sin(U),K=Math.cos(U);b.x=F*H,b.y=-R*n+m,b.z=F*K,f.push(b.x,b.y,b.z),x.set(H,C,K).normalize(),u.push(x.x,x.y,x.z),d.push(G,1-R),A.push(v++)}y.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const R=y[A][_],F=y[A+1][_],O=y[A+1][_+1],G=y[A][_+1];(e>0||A!==0)&&(h.push(R,F,G),E+=3),(t>0||A!==s-1)&&(h.push(F,O,G),E+=3)}c.addGroup(p,E,0),p+=E}function w(x){const b=v,E=new Ae,C=new L;let _=0;const A=x===!0?e:t,R=x===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),v++;const F=v;for(let O=0;O<=r;O++){const U=O/r*l+o,H=Math.cos(U),K=Math.sin(U);C.x=A*K,C.y=m*R,C.z=A*H,f.push(C.x,C.y,C.z),u.push(0,R,0),E.x=H*.5+.5,E.y=K*.5*R+.5,d.push(E.x,E.y),v++}for(let O=0;O<r;O++){const G=b+O,U=F+O;x===!0?h.push(U,U+1,G):h.push(U+1,U,G),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends bt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ps(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends wt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(s.slice(),3)),this.setAttribute("uv",new je(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new L,x=new L,b=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],w),d(t[E+1],x),d(t[E+2],b),l(w,x,b,M)}function l(M,w,x,b){const E=b+1,C=[];for(let _=0;_<=E;_++){C[_]=[];const A=M.clone().lerp(x,_/E),R=w.clone().lerp(x,_/E),F=E-_;for(let O=0;O<=F;O++)O===0&&_===E?C[_][O]=A:C[_][O]=A.clone().lerp(R,O/F)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){const R=Math.floor(A/2);A%2===0?(u(C[_][R+1]),u(C[_+1][R]),u(C[_][R])):(u(C[_][R+1]),u(C[_+1][R+1]),u(C[_+1][R]))}}function c(M){const w=new L;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(M),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function h(){const M=new L;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];const x=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(x,1-b)}v(),f()}function f(){for(let M=0;M<a.length;M+=6){const w=a[M+0],x=a[M+2],b=a[M+4],E=Math.max(w,x,b),C=Math.min(w,x,b);E>.9&&C<.1&&(w<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function d(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function v(){const M=new L,w=new L,x=new L,b=new L,E=new Ae,C=new Ae,_=new Ae;for(let A=0,R=0;A<s.length;A+=9,R+=6){M.set(s[A+0],s[A+1],s[A+2]),w.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),E.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),b.copy(M).add(w).add(x).divideScalar(3);const F=m(b);y(E,R+0,M,F),y(C,R+2,w,F),y(_,R+4,x,F)}}function y(M,w,x,b){b<0&&M.x===1&&(a[w]=M.x-1),x.x===0&&x.z===0&&(a[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.vertices,e.indices,e.radius,e.detail)}}class Ro extends Co{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ro(e.radius,e.detail)}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,d=(a-h)/u;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,r=[],s=[],a=[],o=new L,l=new _t;for(let d=0;d<=e;d++){const v=d/e;r[d]=this.getTangentAt(v,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(tt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(tt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],d*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends Hn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ae){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wh extends Jc{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,r(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const wl=new L,Cl=new L,$s=new Po,Qs=new Po,js=new Po;class $c extends Hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Cl.subVectors(r[0],r[1]).add(r[0]),c=Cl);const f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),$s.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,v,y,m),Qs.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,v,y,m),js.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,v,y,m)}else this.curveType==="catmullrom"&&($s.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Qs.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),js.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set($s.calc(l),Qs.calc(l),js.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Xh(i,e){const t=1-i;return t*t*e}function qh(i,e){return 2*(1-i)*i*e}function Yh(i,e){return i*i*e}function dr(i,e,t,n){return Xh(i,e)+qh(i,t)+Yh(i,n)}function Kh(i,e){const t=1-i;return t*t*t*e}function Zh(i,e){const t=1-i;return 3*t*t*i*e}function Jh(i,e){return 3*(1-i)*i*i*e}function $h(i,e){return i*i*i*e}function fr(i,e,t,n,r){return Kh(i,e)+Zh(i,t)+Jh(i,n)+$h(i,r)}class Qh extends Hn{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,r.x,s.x,a.x,o.x),fr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jh extends Hn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,r.x,s.x,a.x,o.x),fr(e,r.y,s.y,a.y,o.y),fr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends Hn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends Hn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(e,r.x,s.x,a.x),dr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(e,r.x,s.x,a.x),dr(e,r.y,s.y,a.y),dr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Rl(o,l.x,c.x,h.x,f.x),Rl(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var rd=Object.freeze({__proto__:null,ArcCurve:Wh,CatmullRomCurve3:$c,CubicBezierCurve:Qh,CubicBezierCurve3:jh,EllipseCurve:Jc,LineCurve:ed,LineCurve3:td,QuadraticBezierCurve:nd,QuadraticBezierCurve3:Qc,SplineCurve:id});class Lo extends wt{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=tt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,f=new L,u=new Ae,d=new L,v=new L,y=new L;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(v)}for(let M=0;M<=t;M++){const w=n+M*h*r,x=Math.sin(w),b=Math.cos(w);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*x,f.y=e[E].y,f.z=e[E].x*b,a.push(f.x,f.y,f.z),u.x=M/t,u.y=E/(e.length-1),o.push(u.x,u.y);const C=l[3*E+0]*x,_=l[3*E+1],A=l[3*E+0]*b;c.push(C,_,A)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){const x=w+M*e.length,b=x,E=x+e.length,C=x+e.length+1,_=x+1;s.push(b,E,_),s.push(C,_,E)}this.setIndex(s),this.setAttribute("position",new je(a,3)),this.setAttribute("uv",new je(o,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.points,e.segments,e.phiStart,e.phiLength)}}class gi extends wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=t/l,d=[],v=[],y=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let w=0;w<c;w++){const x=w*f-s;v.push(x,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const w=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;d.push(w,x,E),d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sn extends wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],v=[],y=[],m=[];for(let p=0;p<=n;p++){const M=[],w=p/n,x=a+w*o,b=e*Math.cos(x),E=Math.sqrt(e*e-b*b);let C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const A=_/t,R=r+A*s;f.x=-E*Math.cos(R),f.y=b,f.z=E*Math.sin(R),v.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(A+C,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const w=h[p][M+1],x=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&d.push(w,x,E),(p!==n-1||l<Math.PI)&&d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class on extends wt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],f=[],u=new L,d=new L,v=new L;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=r;p++){const M=p/r*s;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),v.subVectors(d,u).normalize(),h.push(v.x,v.y,v.z),f.push(p/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=r;m++){const p=(r+1)*y+m-1,M=(r+1)*(y-1)+m-1,w=(r+1)*(y-1)+m,x=(r+1)*y+m;l.push(p,M,x),l.push(M,w,x)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Io extends wt{constructor(e=new Qc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new Ae;let h=new L;const f=[],u=[],d=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function y(){for(let w=0;w<t;w++)m(w);m(s===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);const x=a.normals[w],b=a.binormals[w];for(let E=0;E<=r;E++){const C=E/r*Math.PI*2,_=Math.sin(C),A=-Math.cos(C);l.x=A*x.x+_*b.x,l.y=A*x.y+_*b.y,l.z=A*x.z+_*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let x=1;x<=r;x++){const b=(r+1)*(w-1)+(x-1),E=(r+1)*w+(x-1),C=(r+1)*w+x,_=(r+1)*(w-1)+x;v.push(b,E,_),v.push(E,C,_)}}function M(){for(let w=0;w<=t;w++)for(let x=0;x<=r;x++)c.x=w/t,c.y=x/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Io(new rd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Pl(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Pl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=Xi(i[t]);for(const r in n)e[r]=n[r]}return e}function Pl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const ad={clone:Xi,merge:Yt};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"v3":this.uniforms[n].value=new L().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cd extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eu extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ud extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hd extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ea={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ll(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ll(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ll(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dd{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fd=new dd;class Do{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class pd extends Do{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Ui.get(a);f===void 0&&(f=[],Ui.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Mr("img");function l(){h(),t&&t(this);const f=Ui.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ui.delete(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),ea.remove(`image:${e}`);const u=Ui.get(this)||[];for(let d=0;d<u.length;d++){const v=u[d];v.onError&&v.onError(f)}Ui.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ea.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class md extends Do{constructor(e){super(e)}load(e,t,n,r){const s=new kt,a=new pd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class tu extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class gd extends tu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ta=new _t,Il=new L,Dl=new L;class _d{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ta,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zr=new L,Jr=new qi,An=new L;class nu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zr,Jr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new L,Ul=new Ae,Nl=new Ae;class _n extends nu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Nl),t.subVectors(Nl,Ul)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ms extends nu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends _d{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ni=-90,Fi=1;class xd extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const s=new _n(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const a=new _n(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new _n(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new _n(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Md extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ol=new _t;class Sd{constructor(e,t,n=0,r=1/0){this.ray=new Ao(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,n=[]){return Qa(e,this,n,t),n.sort(zl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Qa(e[r],this,n,t);return n.sort(zl),n}}function zl(i,e){return i.distance-e.distance}function Qa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Qa(s[a],e,t,!0)}}const Vo=class Vo{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Vo.prototype.isMatrix2=!0;let Bl=Vo;function kl(i,e,t,n){const r=yd(n);switch(t){case Bc:return i*e;case go:return i*e/r.components*r.byteLength;case _o:return i*e/r.components*r.byteLength;case mi:return i*e*2/r.components*r.byteLength;case vo:return i*e*2/r.components*r.byteLength;case kc:return i*e*3/r.components*r.byteLength;case un:return i*e*4/r.components*r.byteLength;case xo:return i*e*4/r.components*r.byteLength;case jr:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:case ba:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case ya:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ea:case wa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case ss:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case as:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case an:case Nc:return{byteLength:1,components:1};case _r:case Fc:case Pn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Rn:case fo:case xn:return{byteLength:4,components:1};case Oc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<f.length;d++){const v=f[u],y=f[d];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,v=f.length;d<v;d++){const y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,bf=`uniform sampler2D dfgLUT;
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
}`,Af=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Qp=`#define TOON
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
}`,jp=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Ad,alphahash_pars_fragment:Ed,alphamap_fragment:Td,alphamap_pars_fragment:wd,alphatest_fragment:Cd,alphatest_pars_fragment:Rd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Id,batching_vertex:Dd,begin_vertex:Ud,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:zd,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Vd,color_fragment:Hd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:$d,emissivemap_fragment:Qd,emissivemap_pars_fragment:jd,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:sf,envmap_pars_vertex:af,envmap_physical_pars_fragment:_f,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:yf,lights_physical_pars_fragment:bf,lights_fragment_begin:Af,lights_fragment_maps:Ef,lights_fragment_end:Tf,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:zf,morphcolor_vertex:Bf,morphnormal_vertex:kf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Vf,normal_fragment_begin:Hf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Qf,opaque_fragment:jf,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:rp,roughnessmap_fragment:sp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:up,skinbase_vertex:hp,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:vp,transmission_fragment:xp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:yp,uv_vertex:bp,worldpos_vertex:Ap,background_vert:Ep,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Cp,cube_vert:Rp,cube_frag:Pp,depth_vert:Lp,depth_frag:Ip,distance_vert:Dp,distance_frag:Up,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:zp,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:Gp,meshlambert_frag:Vp,meshmatcap_vert:Hp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Kp,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:$p,meshtoon_frag:Qp,points_vert:jp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:rm},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Tn={basic:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Yt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Yt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Yt([Se.points,Se.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Yt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Yt([Se.common,Se.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Yt([Se.sprite,Se.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Yt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Yt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:Yt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const $r={r:0,b:0,g:0},sm=new _t,ru=new Xe;ru.set(-1,0,0,0,1,0,0,0,1);function am(i,e,t,n,r,s){const a=new He(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const x=M.backgroundBlurriness>0;w=e.get(w,x)}return w}function v(M){let w=!1;const x=d(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),w=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,w){const x=d(w);x&&(x.isCubeTexture||x.mapping===fs)?(c===void 0&&(c=new it(new Pt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Xi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=st.getTransfer(x.colorSpace)!==ft,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new it(new gi(2,2),new Ln({name:"BackgroundMaterial",uniforms:Xi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB($r,jc(i)),t.buffers.color.setClear($r.r,$r.g,$r.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:v,addToRenderList:y,dispose:p}}function om(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(F,O,G,U,H){let K=!1;const J=f(F,U,G,O);s!==J&&(s=J,c(s.object)),K=d(F,U,G,H),K&&v(F,U,G,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(F,O,G,U),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,O,G,U){const H=U.wireframe===!0;let K=n[O.id];K===void 0&&(K={},n[O.id]=K);const J=F.isInstancedMesh===!0?F.id:0;let ie=K[J];ie===void 0&&(ie={},K[J]=ie);let V=ie[G.id];V===void 0&&(V={},ie[G.id]=V);let I=V[H];return I===void 0&&(I=u(l()),V[H]=I),I}function u(F){const O=[],G=[],U=[];for(let H=0;H<t;H++)O[H]=0,G[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:U,object:F,attributes:{},index:null}}function d(F,O,G,U){const H=s.attributes,K=O.attributes;let J=0;const ie=G.getAttributes();for(const V in ie)if(ie[V].location>=0){const k=H[V];let ue=K[V];if(ue===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),k===void 0||k.attribute!==ue||ue&&k.data!==ue.data)return!0;J++}return s.attributesNum!==J||s.index!==U}function v(F,O,G,U){const H={},K=O.attributes;let J=0;const ie=G.getAttributes();for(const V in ie)if(ie[V].location>=0){let k=K[V];k===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(k=F.instanceColor));const ue={};ue.attribute=k,k&&k.data&&(ue.data=k.data),H[V]=ue,J++}s.attributes=H,s.attributesNum=J,s.index=U}function y(){const F=s.newAttributes;for(let O=0,G=F.length;O<G;O++)F[O]=0}function m(F){p(F,0)}function p(F,O){const G=s.newAttributes,U=s.enabledAttributes,H=s.attributeDivisors;G[F]=1,U[F]===0&&(i.enableVertexAttribArray(F),U[F]=1),H[F]!==O&&(i.vertexAttribDivisor(F,O),H[F]=O)}function M(){const F=s.newAttributes,O=s.enabledAttributes;for(let G=0,U=O.length;G<U;G++)O[G]!==F[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function w(F,O,G,U,H,K,J){J===!0?i.vertexAttribIPointer(F,O,G,H,K):i.vertexAttribPointer(F,O,G,U,H,K)}function x(F,O,G,U){y();const H=U.attributes,K=G.getAttributes(),J=O.defaultAttributeValues;for(const ie in K){const V=K[ie];if(V.location>=0){let I=H[ie];if(I===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(I=F.instanceColor)),I!==void 0){const k=I.normalized,ue=I.itemSize,ge=e.get(I);if(ge===void 0)continue;const Ge=ge.buffer,Pe=ge.type,Ee=ge.bytesPerElement,$=Pe===i.INT||Pe===i.UNSIGNED_INT||I.gpuType===fo;if(I.isInterleavedBufferAttribute){const ne=I.data,he=ne.stride,Re=I.offset;if(ne.isInstancedInterleavedBuffer){for(let Me=0;Me<V.locationSize;Me++)p(V.location+Me,ne.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<V.locationSize;Me++)m(V.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Me=0;Me<V.locationSize;Me++)w(V.location+Me,ue/V.locationSize,Pe,k,he*Ee,(Re+ue/V.locationSize*Me)*Ee,$)}else{if(I.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,I.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ne=0;ne<V.locationSize;ne++)w(V.location+ne,ue/V.locationSize,Pe,k,ue*Ee,ue/V.locationSize*ne*Ee,$)}}else if(J!==void 0){const k=J[ie];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(V.location,k);break;case 3:i.vertexAttrib3fv(V.location,k);break;case 4:i.vertexAttrib4fv(V.location,k);break;default:i.vertexAttrib1fv(V.location,k)}}}}M()}function b(){A();for(const F in n){const O=n[F];for(const G in O){const U=O[G];for(const H in U){const K=U[H];for(const J in K)h(K[J].object),delete K[J];delete U[H]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;const O=n[F.id];for(const G in O){const U=O[G];for(const H in U){const K=U[H];for(const J in K)h(K[J].object),delete K[J];delete U[H]}}delete n[F.id]}function C(F){for(const O in n){const G=n[O];for(const U in G){const H=G[U];if(H[F.id]===void 0)continue;const K=H[F.id];for(const J in K)h(K[J].object),delete K[J];delete H[F.id]}}}function _(F){for(const O in n){const G=n[O],U=F.isInstancedMesh===!0?F.id:0,H=G[U];if(H!==void 0){for(const K in H){const J=H[K];for(const ie in J)h(J[ie].object),delete J[ie];delete H[K]}delete G[U],Object.keys(G).length===0&&delete n[O]}}}function A(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function lm(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&C!==xn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:b,samples:E}}function um(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new On,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||r;return r=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,w=M*4;let x=p.clippingState||null;l.value=x,x=h(v,u,w,d);for(let b=0;b!==w;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const p=d+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=d;w!==y;++w,x+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ki=4,hm=6,dm=20,fm=256,sr=new ms,Gl=new He;let na=null,ia=0,ra=0,sa=!1;const pm=new L,ui=new L;class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=pm}=s;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Pn,format:un,colorSpace:os,depthBuffer:!1},r=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mm(s)),this._blurMaterial=_m(s,e,t),this._ggxMaterial=gm(s,e,t)}return r}_compileMaterial(e){const t=new it(new wt,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,n,r,s){const l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Gl),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Pt,new ti({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Gl),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const b=this._cubeSize;Oi(r,x*b,w>2?b:0,b,b),f.setRenderTarget(r),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:v}=this,y=this._sizeLods[n],m=3*y*(n>v-ki?n-v+ki:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-t,Oi(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Oi(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(o,sr)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-ki?r-this._lodMax+ki:0),u=4*(this._cubeSize-h);Oi(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,sr)}}function mm(i){const e=[],t=[];let n=i;const r=i-ki+1+hm;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,v=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,w=p>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];v.set(x,d*u*p);for(let b=0;b<u;b++){const E=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?ui.set(1,C,E):p===1?ui.set(-E,1,-C):p===2?ui.set(-E,C,1):p===3?ui.set(-1,C,-E):p===4?ui.set(-E,-1,C):ui.set(E,C,-1),ui.toArray(y,(p*u+b)*d)}}const m=new wt;m.setAttribute("position",new Zt(v,d)),m.setAttribute("outputDirection",new Zt(y,d)),t.push(new it(m,null)),n>ki&&n--}return{lodMeshes:t,sizeLods:e}}function Hl(i,e,t){const n=new Mn(i,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gm(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gs(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _m(i,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gs(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wl(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Xl(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class su extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pt(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:kn});s.uniforms.tEquirect.value=t;const a=new it(r,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=Ot),new xd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function vm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===As||d===Es)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new su(v.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,v=d===As||d===Es,y=d===pi||d===Wi;if(v||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Vl(i)),m=v?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return v&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Vl(i)),m=v?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===As?u.mapping=pi:d===Es&&(u.mapping=Wi),u}function l(u){let d=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&d++;return d===v}function c(u){const d=u.target;d.removeEventListener("dispose",c);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Gi("WebGLRenderer: "+n+" extension not supported."),r}}}function Mm(i,e,t,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,v=f.attributes.position;let y=0;if(v===void 0)return;if(d!==null){const M=d.array;y=d.version;for(let w=0,x=M.length;w<x;w+=3){const b=M[w+0],E=M[w+1],C=M[w+2];u.push(b,E,E,C,C,b)}}else{const M=v.array;y=v.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const b=w+0,E=w+1,C=w+2;u.push(b,E,E,C,C,b)}}const m=new(v.count>=65535?Xc:Wc)(u,1);m.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,s,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bm(i,e,t){const n=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),v===!0&&(w=2),y===!0&&(w=3);let x=o.attributes.position.count*w,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*b*4*f),C=new Vc(E,x,b,f);C.type=xn,C.needsUpdate=!0;const _=w*4;for(let R=0;R<f;R++){const F=m[R],O=p[R],G=M[R],U=x*b*4*R;for(let H=0;H<F.count;H++){const K=H*_;d===!0&&(r.fromBufferAttribute(F,H),E[U+K+0]=r.x,E[U+K+1]=r.y,E[U+K+2]=r.z,E[U+K+3]=0),v===!0&&(r.fromBufferAttribute(O,H),E[U+K+4]=r.x,E[U+K+5]=r.y,E[U+K+6]=r.z,E[U+K+7]=0),y===!0&&(r.fromBufferAttribute(G,H),E[U+K+8]=r.x,E[U+K+9]=r.y,E[U+K+10]=r.z,E[U+K+11]=G.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new Ae(x,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Am(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Em={[Cc]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[ho]:"ACES_FILMIC_TONE_MAPPING",[Ic]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Tm(i,e,t,n,r,s){const a=new Mn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new wt;c.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new je([0,2,0,0,2,0],2));const h=new cd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new it(c,h),u=new ms(-1,1,1,-1,0,1);let d=null,v=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let E=0;E<M.length;E++){const C=M[E];C.setSize&&C.setSize(x,b)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;const b=a.width,E=a.height;M.length>0&&o===null&&(o=new Mn(b,E,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(b,E,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const _=M[C];_.setSize&&_.setSize(b,E)}},this.begin=function(x,b){if(y||x.toneMapping===Cn&&M.length===0)return!1;if(p=b,b!==null){const E=b.width,C=b.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Cn,!0},this.hasRenderPass=function(){return w},this.end=function(x,b){x.toneMapping=m,y=!0;let E=a,C=o;for(let _=0;_<M.length;_++){const A=M[_];A.enabled!==!1&&(A.render(x,C,E,b),A.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==x.outputColorSpace||v!==x.toneMapping){d=x.outputColorSpace,v=x.toneMapping,h.defines={},st.getTransfer(d)===ft&&(h.defines.SRGB_TRANSFER="");const _=Em[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const au=new kt,ja=new Sr(1,1),ou=new Vc,lu=new yh,cu=new Kc,ql=[],Yl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _s(i,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Nt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Nt(t,n)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Nt(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Vm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ja.compareFunction=t.isReversedDepthBuffer()?So:Mo,s=ja):s=au,t.setTexture2D(e||s,r)}function Hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lu,r)}function Wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cu,r)}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ou,r)}function qm(i){switch(i){case 5126:return wm;case 35664:return Cm;case 35665:return Rm;case 35666:return Pm;case 35674:return Lm;case 35675:return Im;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Bm;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function $m(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jm(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eg(i,e){i.uniform1iv(this.addr,e)}function tg(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function ig(i,e){i.uniform4iv(this.addr,e)}function rg(i,e){i.uniform1uiv(this.addr,e)}function sg(i,e){i.uniform2uiv(this.addr,e)}function ag(i,e){i.uniform3uiv(this.addr,e)}function og(i,e){i.uniform4uiv(this.addr,e)}function lg(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ja:a=au;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function cg(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lu,s[a])}function ug(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cu,s[a])}function hg(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ou,s[a])}function dg(i){switch(i){case 5126:return Ym;case 35664:return Km;case 35665:return Zm;case 35666:return Jm;case 35674:return $m;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return hg}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}}class mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function $l(i,e){i.seq.push(e),i.map[e.id]=e}function gg(i,e,t){const n=i.name,r=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$l(t,c===void 0?new fg(o,i,e):new pg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new mg(o),$l(t,f)),t=f}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _g=37297;let vg=0;function xg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jl=new Xe;function Mg(i){st._getMatrix(jl,st.workingColorSpace,i);const e=`mat3( ${jl.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case ls:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xg(i.getShaderSource(e),o)}else return s}function Sg(i,e){const t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yg={[Cc]:"Linear",[Rc]:"Reinhard",[Pc]:"Cineon",[ho]:"ACESFilmic",[Ic]:"AgX",[Dc]:"Neutral",[Lc]:"Custom"};function bg(i,e){const t=yg[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new L;function Ag(){st.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lr(i){return i!==""}function tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Cg,Pg)}const Rg=new Map;function Pg(i,e){let t=Je[e];if(t===void 0){const n=Rg.get(e);if(n!==void 0)t=Je[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return eo(t)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(Lg,Ig)}function Ig(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dg={[cr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function Ug(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ng={[pi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE_UV"};function Fg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ng[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Og={[Wi]:"ENVMAP_MODE_REFRACTION"};function zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bg={[wc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ug(t),c=Fg(t),h=zg(t),f=kg(t),u=Gg(t),d=Eg(t),v=Tg(s),y=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Cn?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),Ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=eo(a),a=tc(a,t),a=nc(a,t),o=eo(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,x=M+p+o,b=Ql(r,r.VERTEX_SHADER,w),E=Ql(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(F){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",G=r.getShaderInfoLog(b)||"",U=r.getShaderInfoLog(E)||"",H=O.trim(),K=G.trim(),J=U.trim();let ie=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,b,E);else{const I=ec(r,b,"vertex"),k=ec(r,E,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+I+`
`+k)}else H!==""?Ve("WebGLProgram: Program Info Log:",H):(K===""||J==="")&&(V=!1);V&&(F.diagnostics={runnable:ie,programLog:H,vertexShader:{log:K,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(b),r.deleteShader(E),_=new is(r,y),A=wg(r,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(y,_g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}let Hg=0;class Wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xg(e),t.set(e,n)),n}}class Xg{constructor(e){this.id=Hg++,this.code=e,this.usedTimes=0}}function qg(i){return i===mi||i===ss||i===as}function Yg(i,e,t,n,r,s){const a=new bo,o=new Wg,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,R,F,O,G){const U=F.fog,H=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||K,J),V=ie&&ie.mapping===fs?ie.image.height:null,I=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=k!==void 0?k.length:0;let ge=0;H.morphAttributes.position!==void 0&&(ge=1),H.morphAttributes.normal!==void 0&&(ge=2),H.morphAttributes.color!==void 0&&(ge=3);let Ge,Pe,Ee,$;if(I){const ut=Tn[I];Ge=ut.vertexShader,Pe=ut.fragmentShader}else{Ge=_.vertexShader,Pe=_.fragmentShader;const ut=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,ut,ot),Ee=ut.id,$=ot.id}const ne=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Ie=!!_.map,Ke=!!_.matcap,Fe=!!ie,Be=!!_.aoMap,We=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,rt=!!_.normalMap,mt=!!_.displacementMap,ve=!!_.emissiveMap,ze=!!_.metalnessMap,Ye=!!_.roughnessMap,D=_.anisotropy>0,se=_.clearcoat>0,ce=_.dispersion>0,T=_.retroreflectivity>0,g=_.iridescence>0,z=_.sheen>0,W=_.transmission>0,Z=D&&!!_.anisotropyMap,le=se&&!!_.clearcoatMap,de=se&&!!_.clearcoatNormalMap,Q=se&&!!_.clearcoatRoughnessMap,ee=g&&!!_.iridescenceMap,fe=g&&!!_.iridescenceThicknessMap,Te=z&&!!_.sheenColorMap,me=z&&!!_.sheenRoughnessMap,N=!!_.specularMap,X=!!_.specularColorMap,re=!!_.specularIntensityMap,_e=W&&!!_.transmissionMap,P=W&&!!_.thicknessMap,oe=!!_.gradientMap,te=!!_.alphaMap,pe=_.alphaTest>0,xe=!!_.alphaHash,ae=!!_.extensions;let Ne=Cn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const Le={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:Ge,fragmentShader:Pe,defines:_.defines,customVertexShaderID:Ee,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:Ke,envMap:Fe,envMapMode:Fe&&ie.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:We,bumpMap:ke,normalMap:rt,displacementMap:mt,emissiveMap:ve,normalMapObjectSpace:rt&&_.normalMapType===nh,normalMapTangentSpace:rt&&_.normalMapType===Ja,packedNormalMap:rt&&_.normalMapType===Ja&&qg(_.normalMap.format),metalnessMap:ze,roughnessMap:Ye,anisotropy:D,anisotropyMap:Z,clearcoat:se,clearcoatMap:le,clearcoatNormalMap:de,clearcoatRoughnessMap:Q,dispersion:ce,retroreflection:T,iridescence:g,iridescenceMap:ee,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Te,sheenRoughnessMap:me,specularMap:N,specularColorMap:X,specularIntensityMap:re,transmission:W,transmissionMap:_e,thicknessMap:P,gradientMap:oe,opaque:_.transparent===!1&&_.blending===ur&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:_.combine,mapUv:Ie&&v(_.map.channel),aoMapUv:Be&&v(_.aoMap.channel),lightMapUv:We&&v(_.lightMap.channel),bumpMapUv:ke&&v(_.bumpMap.channel),normalMapUv:rt&&v(_.normalMap.channel),displacementMapUv:mt&&v(_.displacementMap.channel),emissiveMapUv:ve&&v(_.emissiveMap.channel),metalnessMapUv:ze&&v(_.metalnessMap.channel),roughnessMapUv:Ye&&v(_.roughnessMap.channel),anisotropyMapUv:Z&&v(_.anisotropyMap.channel),clearcoatMapUv:le&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(_.sheenRoughnessMap.channel),specularMapUv:N&&v(_.specularMap.channel),specularColorMapUv:X&&v(_.specularColorMap.channel),specularIntensityMapUv:re&&v(_.specularIntensityMap.channel),transmissionMapUv:_e&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:te&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(rt||D),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ie||te),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ge,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:ve&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const A=d[_.type];let R;if(A){const F=Tn[A];R=ad.clone(F.uniforms)}else R=_.uniforms;return R}function x(_,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new Vg(i,A,_,r),c.push(R),h.set(A,R)),R}function b(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:C}}function Kg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ac(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,y,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:v,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=v,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,d,v,y,m,p,M){M.reversedDepth===!0&&(m=-m);const w=o(u,d,v,y,m,p);v.transmission>0?n.push(w):v.transparent===!0?r.push(w):t.push(w)}function c(u,d,v,y,m,p){const M=o(u,d,v,y,m,p);v.transmission>0?n.unshift(M):v.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||Zg),n.length>1&&n.sort(d||sc),r.length>1&&r.sort(d||sc)}function f(){for(let u=e,d=i.length;u<d;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function Jg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ac,i.set(n,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jg=0;function e0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t0(i){const e=new $g,t=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new _t,a=new _t;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,v=0,y=0,m=0,p=0,M=0,w=0,x=0,b=0,E=0,C=0,_=0,A=0,R=0;c.sort(e0);for(let O=0,G=c.length;O<G;O++){const U=c[O],H=U.color,K=U.intensity,J=U.distance;let ie=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===mi?ie=U.shadow.map.texture:ie=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=H.r*K,f+=H.g*K,u+=H.b*K;else if(U.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(U.sh.coefficients[V],K);R++}else if(U.isSunLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,k=t.get(U);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[v]=k,n.sunShadowMap[v]=ie;const ue=I.getViewportCount();for(let ge=0;ge<ue;ge++)n.sunShadowMatrix[y+ge]=I.getMatrix(ge),n.sunShadowCascade[y+ge]=I._cascadeData[ge];y+=ue,v++}n.sun[d]=V,d++}else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,k=t.get(U);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=V,m++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(H).multiplyScalar(K),V.distance=J,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,n.spot[M]=V;const I=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,I.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[M]=I.matrix,U.castShadow){const k=t.get(U);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=ie,C++}M++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(H).multiplyScalar(K),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=V,w++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){const I=U.shadow,k=t.get(U);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=U.shadow.matrix,E++}n.point[p]=V,p++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(K),V.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[x]=V,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==w||F.hemiLength!==x||F.numSunShadows!==v||F.numDirectionalShadows!==b||F.numPointShadows!==E||F.numSpotShadows!==C||F.numSpotMaps!==_||F.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=w,F.hemiLength=x,F.numSunShadows=v,F.numDirectionalShadows=b,F.numPointShadows=E,F.numSpotShadows=C,F.numSpotMaps=_,F.numLightProbes=R,n.version=jg++)}function l(c,h){let f=0,u=0,d=0,v=0,y=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const x=c[M];if(x.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(x.isSpotLight){const b=n.spot[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function oc(i){const e=new t0(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function n0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new oc(i),e.set(r,[o])):s>=a.length?(o=new oc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`,s0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],a0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],lc=new _t,ar=new L,oa=new L;function o0(i,e,t){let n=new To;const r=new Ae,s=new Ae,a=new Et,o=new ud,l=new hd,c={},h=t.maxTextureSize,f={[fi]:jt,[jt]:fi,[sn]:sn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:i0,fragmentShader:r0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const v=new wt;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new it(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(E,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Du&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const A=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=E.length;U<H;U++){const K=E[U],J=K.shadow;if(J===void 0){Ve("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ie=J.getFrameExtents();r.multiply(ie),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,J.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=V,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===or){if(K.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Mn(r.x,r.y,{format:mi,type:Pn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new Sr(r.x,r.y,xn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Vn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Bt,J.map.depthTexture.magFilter=Bt}else K.isPointLight?(J.map=new su(r.x),J.map.depthTexture=new Hh(r.x,Rn)):(J.map=new Mn(r.x,r.y),J.map.depthTexture=new Sr(r.x,r.y,Rn)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Vn,this.type===cr?(J.map.depthTexture.compareFunction=V?So:Mo,J.map.depthTexture.minFilter=Ot,J.map.depthTexture.magFilter=Ot):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Bt,J.map.depthTexture.magFilter=Bt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y)&&J.map.setSize(r.x,r.y);const I=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,_);for(let k=0;k<I;k++){const ue=J.getCamera(k);if(K.isPointLight){const ge=J.camera,Ge=J.matrix,Pe=K.distance||ge.far;Pe!==ge.far&&(ge.far=Pe,ge.updateProjectionMatrix()),ar.setFromMatrixPosition(K.matrixWorld),ge.position.copy(ar),oa.copy(ge.position),oa.add(s0[k]),ge.up.copy(a0[k]),ge.lookAt(oa),ge.updateMatrixWorld(),Ge.makeTranslation(-ar.x,-ar.y,-ar.z),lc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),J._frustum.setFromProjectionMatrix(lc,ge.coordinateSystem,ge.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,k),i.clear();else{k===0&&(i.setRenderTarget(J.map),i.clear());const ge=J.getViewport(k);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),O.viewport(a)}n=J.getFrustum(k),x(C,_,ue,K,this.type)}J.isPointLightShadow!==!0&&this.type===or&&M(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,R,F)};function M(E,C){const _=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Mn(r.x,r.y,{format:mi,type:Pn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,_,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,_,d,y,null)}function w(E,C,_,A){let R=null;const F=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)R=F;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=R.uuid,G=C.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let H=U[G];H===void 0&&(H=R.clone(),U[G]=H,C.addEventListener("dispose",b)),R=H}if(R.visible=C.visible,R.wireframe=C.wireframe,A===or?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=_}return R}function x(E,C,_,A,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===or)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=e.update(E),U=E.material;if(Array.isArray(U)){const H=G.groups;for(let K=0,J=H.length;K<J;K++){const ie=H[K],V=U[ie.materialIndex];if(V&&V.visible){const I=w(E,V,A,R);E.onBeforeShadow(i,E,C,_,G,I,ie),i.renderBufferDirect(_,null,G,I,E,ie),E.onAfterShadow(i,E,C,_,G,I,ie)}}}else if(U.visible){const H=w(E,U,A,R);E.onBeforeShadow(i,E,C,_,G,H,null),i.renderBufferDirect(_,null,G,H,E,null),E.onAfterShadow(i,E,C,_,G,H,null)}}const O=E.children;for(let G=0,U=O.length;G<U;G++)x(O[G],C,_,A,R)}function b(E){E.target.removeEventListener("dispose",b);for(const _ in c){const A=c[_],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function l0(i,e){function t(){let P=!1;const oe=new Et;let te=null;const pe=new Et(0,0,0,0);return{setMask:function(xe){te!==xe&&!P&&(i.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){P=xe},setClear:function(xe,ae,Ne,Le,ut){ut===!0&&(xe*=Le,ae*=Le,Ne*=Le),oe.set(xe,ae,Ne,Le),pe.equals(oe)===!1&&(i.clearColor(xe,ae,Ne,Le),pe.copy(oe))},reset:function(){P=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let P=!1,oe=!1,te=null,pe=null,xe=null;return{setReversed:function(ae){if(oe!==ae){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),oe=ae;const Le=xe;xe=null,this.setClear(Le)}},getReversed:function(){return oe},setTest:function(ae){ae?ne(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ae){te!==ae&&!P&&(i.depthMask(ae),te=ae)},setFunc:function(ae){if(oe&&(ae=mh[ae]),pe!==ae){switch(ae){case ha:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ae}},setLocked:function(ae){P=ae},setClear:function(ae){xe!==ae&&(xe=ae,oe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){P=!1,te=null,pe=null,xe=null,oe=!1}}}function r(){let P=!1,oe=null,te=null,pe=null,xe=null,ae=null,Ne=null,Le=null,ut=null;return{setTest:function(ot){P||(ot?ne(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!P&&(i.stencilMask(ot),oe=ot)},setFunc:function(ot,en,Jt){(te!==ot||pe!==en||xe!==Jt)&&(i.stencilFunc(ot,en,Jt),te=ot,pe=en,xe=Jt)},setOp:function(ot,en,Jt){(ae!==ot||Ne!==en||Le!==Jt)&&(i.stencilOp(ot,en,Jt),ae=ot,Ne=en,Le=Jt)},setLocked:function(ot){P=ot},setClear:function(ot){ut!==ot&&(i.clearStencil(ot),ut=ot)},reset:function(){P=!1,oe=null,te=null,pe=null,xe=null,ae=null,Ne=null,Le=null,ut=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,v=[],y=null,m=!1,p=null,M=null,w=null,x=null,b=null,E=null,C=null,_=new He(0,0,0),A=0,R=!1,F=null,O=null,G=null,U=null,H=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ie=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=ie>=2);let I=null,k={};const ue=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ge=new Et().fromArray(ue),Pe=new Et().fromArray(ge);function Ee(P,oe,te,pe){const xe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(P,ae),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<te;Ne++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(oe+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ae}const $={};$[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(gr),ke(!1),rt(jo),ne(i.CULL_FACE),Be(kn);function ne(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function he(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Re(P,oe){return u[P]!==oe?(i.bindFramebuffer(P,oe),u[P]=oe,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Me(P,oe){let te=v,pe=!1;if(P){te=d.get(oe),te===void 0&&(te=[],d.set(oe,te));const xe=P.textures;if(te.length!==xe.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ne=xe.length;ae<Ne;ae++)te[ae]=i.COLOR_ATTACHMENT0+ae;te.length=xe.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function Ie(P){return y!==P?(i.useProgram(P),y=P,!0):!1}const Ke={[Bi]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};Ke[Ou]=i.MIN,Ke[zu]=i.MAX;const Fe={[Bu]:i.ZERO,[ku]:i.ONE,[Gu]:i.SRC_COLOR,[Ec]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(P,oe,te,pe,xe,ae,Ne,Le,ut,ot){if(P===kn){m===!0&&(he(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),P!==Uu){if(P!==p||ot!==R){if((M!==Bi||b!==Bi)&&(i.blendEquation(i.FUNC_ADD),M=Bi,b=Bi),ot)switch(P){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",P);break}else switch(P){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",P);break}w=null,x=null,E=null,C=null,_.set(0,0,0),A=0,p=P,R=ot}return}xe=xe||oe,ae=ae||te,Ne=Ne||pe,(oe!==M||xe!==b)&&(i.blendEquationSeparate(Ke[oe],Ke[xe]),M=oe,b=xe),(te!==w||pe!==x||ae!==E||Ne!==C)&&(i.blendFuncSeparate(Fe[te],Fe[pe],Fe[ae],Fe[Ne]),w=te,x=pe,E=ae,C=Ne),(Le.equals(_)===!1||ut!==A)&&(i.blendColor(Le.r,Le.g,Le.b,ut),_.copy(Le),A=ut),p=P,R=!1}function We(P,oe){P.side===sn?he(i.CULL_FACE):ne(i.CULL_FACE);let te=P.side===jt;oe&&(te=!te),ke(te),P.blending===ur&&P.transparent===!1?Be(kn):Be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){F!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),F=P)}function rt(P){P!==Lu?(ne(i.CULL_FACE),P!==O&&(P===jo?i.cullFace(i.BACK):P===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),O=P}function mt(P){P!==G&&(J&&i.lineWidth(P),G=P)}function ve(P,oe,te){P?(ne(i.POLYGON_OFFSET_FILL),(U!==oe||H!==te)&&(U=oe,H=te,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,te))):he(i.POLYGON_OFFSET_FILL)}function ze(P){P?ne(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Ye(P){P===void 0&&(P=i.TEXTURE0+K-1),I!==P&&(i.activeTexture(P),I=P)}function D(P,oe,te){te===void 0&&(I===null?te=i.TEXTURE0+K-1:te=I);let pe=k[te];pe===void 0&&(pe={type:void 0,texture:void 0},k[te]=pe),(pe.type!==P||pe.texture!==oe)&&(I!==te&&(i.activeTexture(te),I=te),i.bindTexture(P,oe||$[P]),pe.type=P,pe.texture=oe)}function se(){const P=k[I];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(P){ct("WebGLState:",P)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(P){ct("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){ct("WebGLState:",P)}}function z(){try{i.texSubImage3D(...arguments)}catch(P){ct("WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){ct("WebGLState:",P)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(P){ct("WebGLState:",P)}}function le(){try{i.texStorage2D(...arguments)}catch(P){ct("WebGLState:",P)}}function de(){try{i.texStorage3D(...arguments)}catch(P){ct("WebGLState:",P)}}function Q(){try{i.texImage2D(...arguments)}catch(P){ct("WebGLState:",P)}}function ee(){try{i.texImage3D(...arguments)}catch(P){ct("WebGLState:",P)}}function fe(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function Te(P,oe){f[P]!==oe&&(i.pixelStorei(P,oe),f[P]=oe)}function me(P){Ge.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ge.copy(P))}function N(P){Pe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Pe.copy(P))}function X(P,oe){let te=c.get(oe);te===void 0&&(te=new WeakMap,c.set(oe,te));let pe=te.get(P);pe===void 0&&(pe=i.getUniformBlockIndex(oe,P.name),te.set(P,pe))}function re(P,oe){const pe=c.get(oe).get(P);l.get(oe)!==pe&&(i.uniformBlockBinding(oe,pe,P.__bindingPointIndex),l.set(oe,pe))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},I=null,k={},u={},d=new WeakMap,v=[],y=null,m=!1,p=null,M=null,w=null,x=null,b=null,E=null,C=null,_=new He(0,0,0),A=0,R=!1,F=null,O=null,G=null,U=null,H=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:he,bindFramebuffer:Re,drawBuffers:Me,useProgram:Ie,setBlending:Be,setMaterial:We,setFlipSided:ke,setCullFace:rt,setLineWidth:mt,setPolygonOffset:ve,setScissorTest:ze,activeTexture:Ye,bindTexture:D,unbindTexture:se,compressedTexImage2D:ce,compressedTexImage3D:T,texImage2D:Q,texImage3D:ee,pixelStorei:Te,getParameter:fe,updateUBOMapping:X,uniformBlockBinding:re,texStorage2D:le,texStorage3D:de,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:me,viewport:N,reset:_e}}function c0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return v?new OffscreenCanvas(T,g):Mr("canvas")}function m(T,g,z){let W=1;const Z=ce(T);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const le=Math.floor(W*Z.width),de=Math.floor(W*Z.height);u===void 0&&(u=y(le,de));const Q=g?y(le,de):u;return Q.width=le,Q.height=de,Q.getContext("2d").drawImage(T,0,0,le,de),Ve("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+de+")."),Q}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,g,z,W,Z,le=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&de&&(Q=de.R16_EXT),z===i.SHORT&&de&&(Q=de.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),g===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&de&&(Q=de.RG16_EXT),z===i.SHORT&&de&&(Q=de.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&de&&(Q=de.RGB16_EXT),z===i.SHORT&&de&&(Q=de.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){const ee=le?ls:st.getTransfer(Z);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=ee===ft?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&de&&(Q=de.RGBA16_EXT),z===i.SHORT&&de&&(Q=de.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(T,g){let z;return T?g===null||g===Rn||g===vr?z=i.DEPTH24_STENCIL8:g===xn?z=i.DEPTH32F_STENCIL8:g===_r&&(z=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Rn||g===vr?z=i.DEPTH_COMPONENT24:g===xn?z=i.DEPTH_COMPONENT32F:g===_r&&(z=i.DEPTH_COMPONENT16),z}function E(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){const g=T.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(T){const g=T.target;g.removeEventListener("dispose",_),F(g)}function A(T){const g=n.get(T);if(g.__webglInit===void 0)return;const z=T.source,W=d.get(z);if(W){const Z=W[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(T),Object.keys(W).length===0&&d.delete(z)}n.remove(T)}function R(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const z=T.source,W=d.get(z);delete W[g.__cacheKey],a.memory.textures--}function F(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Z=0;Z<g.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=T.textures;for(let W=0,Z=z.length;W<Z;W++){const le=n.get(z[W]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(T)}let O=0;function G(){O=0}function U(){return O}function H(T){O=T}function K(){const T=O;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,T}function J(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ie(T,g){const z=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const W=T.image;if(W===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{he(z,T,g);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function V(T,g){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){he(z,T,g);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function I(T,g){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){he(z,T,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function k(T,g){const z=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Re(z,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const ue={[va]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},ge={[Bt]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Ge={[rh]:i.NEVER,[ch]:i.ALWAYS,[sh]:i.LESS,[Mo]:i.LEQUAL,[ah]:i.EQUAL,[So]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function Pe(T,g){if(g.type===xn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===Ts||g.magFilter===Cr||g.magFilter===hi||g.minFilter===Ot||g.minFilter===Ts||g.minFilter===Cr||g.minFilter===hi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ue[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ue[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ue[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Cr&&g.minFilter!==hi||g.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ee(T,g){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));const le=J(g);if(le!==T.__cacheKey){Z[le]===void 0&&(Z[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[le].usedTimes++;const de=Z[T.__cacheKey];de!==void 0&&(Z[T.__cacheKey].usedTimes--,de.usedTimes===0&&R(g)),T.__cacheKey=le,T.__webglTexture=Z[le].texture}return z}function $(T,g,z){return Math.floor(Math.floor(T/z)/g)}function ne(T,g,z,W){const le=T.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,W,g.data);else{le.sort((Te,me)=>Te.start-me.start);let de=0;for(let Te=1;Te<le.length;Te++){const me=le[de],N=le[Te],X=me.start+me.count,re=$(N.start,g.width,4),_e=$(me.start,g.width,4);N.start<=X+1&&re===_e&&$(N.start+N.count-1,g.width,4)===re?me.count=Math.max(me.count,N.start+N.count-me.start):(++de,le[de]=N)}le.length=de+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Te=0,me=le.length;Te<me;Te++){const N=le[Te],X=Math.floor(N.start/4),re=Math.ceil(N.count/4),_e=X%g.width,P=Math.floor(X/g.width),oe=re,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,_e,P,oe,te,z,W,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function he(T,g,z){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const Z=Ee(T,g),le=g.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+z);const de=n.get(le);if(le.version!==de.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const te=st.getPrimaries(st.workingColorSpace),pe=g.colorSpace===ei?null:st.getPrimaries(g.colorSpace),xe=g.colorSpace===ei||te===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,r.maxTextureSize);ee=se(g,ee);const fe=s.convert(g.format,g.colorSpace),Te=s.convert(g.type);let me=x(g.internalFormat,fe,Te,g.normalized,g.colorSpace,g.isVideoTexture);Pe(W,g);let N;const X=g.mipmaps,re=g.isVideoTexture!==!0,_e=de.__version===void 0||Z===!0,P=le.dataReady,oe=E(g,ee);if(g.isDepthTexture)me=b(g.format===di,g.type),_e&&(re?t.texStorage2D(i.TEXTURE_2D,1,me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,fe,Te,null));else if(g.isDataTexture)if(X.length>0){re&&_e&&t.texStorage2D(i.TEXTURE_2D,oe,me,X[0].width,X[0].height);for(let te=0,pe=X.length;te<pe;te++)N=X[te],re?P&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,N.width,N.height,fe,Te,N.data):t.texImage2D(i.TEXTURE_2D,te,me,N.width,N.height,0,fe,Te,N.data);g.generateMipmaps=!1}else re?(_e&&t.texStorage2D(i.TEXTURE_2D,oe,me,ee.width,ee.height),P&&ne(g,ee,fe,Te)):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,fe,Te,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){re&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,me,X[0].width,X[0].height,ee.depth);for(let te=0,pe=X.length;te<pe;te++)if(N=X[te],g.format!==un)if(fe!==null)if(re){if(P)if(g.layerUpdates.size>0){const xe=kl(N.width,N.height,g.format,g.type);for(const ae of g.layerUpdates){const Ne=N.data.subarray(ae*xe/N.data.BYTES_PER_ELEMENT,(ae+1)*xe/N.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ae,N.width,N.height,1,fe,Ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,N.width,N.height,ee.depth,fe,N.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,me,N.width,N.height,ee.depth,0,N.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,N.width,N.height,ee.depth,fe,Te,N.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,me,N.width,N.height,ee.depth,0,fe,Te,N.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{re&&_e&&t.texStorage2D(i.TEXTURE_2D,oe,me,X[0].width,X[0].height);for(let te=0,pe=X.length;te<pe;te++)N=X[te],g.format!==un?fe!==null?re?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,N.width,N.height,fe,N.data):t.compressedTexImage2D(i.TEXTURE_2D,te,me,N.width,N.height,0,N.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?P&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,N.width,N.height,fe,Te,N.data):t.texImage2D(i.TEXTURE_2D,te,me,N.width,N.height,0,fe,Te,N.data)}else if(g.isDataArrayTexture)if(re){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,me,ee.width,ee.height,ee.depth),P)if(g.layerUpdates.size>0){const te=kl(ee.width,ee.height,g.format,g.type);for(const pe of g.layerUpdates){const xe=ee.data.subarray(pe*te/ee.data.BYTES_PER_ELEMENT,(pe+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,fe,Te,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(g.isData3DTexture)re?(_e&&t.texStorage3D(i.TEXTURE_3D,oe,me,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(g.isFramebufferTexture){if(_e)if(re)t.texStorage2D(i.TEXTURE_2D,oe,me,ee.width,ee.height);else{let te=ee.width,pe=ee.height;for(let xe=0;xe<oe;xe++)t.texImage2D(i.TEXTURE_2D,xe,me,te,pe,0,fe,Te,null),te>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),f.add(g),te.onpaint=pe=>{const xe=pe.changedElements;for(const ae of f)xe.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const xe=i.RGBA,ae=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ae,Ne,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(X.length>0){if(re&&_e){const te=ce(X[0]);t.texStorage2D(i.TEXTURE_2D,oe,me,te.width,te.height)}for(let te=0,pe=X.length;te<pe;te++)N=X[te],re?P&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Te,N):t.texImage2D(i.TEXTURE_2D,te,me,fe,Te,N);g.generateMipmaps=!1}else if(re){if(_e){const te=ce(ee);t.texStorage2D(i.TEXTURE_2D,oe,me,te.width,te.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,me,fe,Te,ee);p(g)&&M(W),de.__version=le.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Re(T,g,z){if(g.image.length!==6)return;const W=Ee(T,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const le=n.get(Z);if(Z.version!==le.__version||W===!0){t.activeTexture(i.TEXTURE0+z);const de=st.getPrimaries(st.workingColorSpace),Q=g.colorSpace===ei?null:st.getPrimaries(g.colorSpace),ee=g.colorSpace===ei||de===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!fe&&!Te?me[ae]=m(g.image[ae],!0,r.maxCubemapSize):me[ae]=Te?g.image[ae].image:g.image[ae],me[ae]=se(g,me[ae]);const N=me[0],X=s.convert(g.format,g.colorSpace),re=s.convert(g.type),_e=x(g.internalFormat,X,re,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,oe=le.__version===void 0||W===!0,te=Z.dataReady;let pe=E(g,N);Pe(i.TEXTURE_CUBE_MAP,g);let xe;if(fe){P&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,_e,N.width,N.height);for(let ae=0;ae<6;ae++){xe=me[ae].mipmaps;for(let Ne=0;Ne<xe.length;Ne++){const Le=xe[Ne];g.format!==un?X!==null?P?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Le.width,Le.height,X,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,_e,Le.width,Le.height,0,Le.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Le.width,Le.height,X,re,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,_e,Le.width,Le.height,0,X,re,Le.data)}}}else{if(xe=g.mipmaps,P&&oe){xe.length>0&&pe++;const ae=ce(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,_e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Te){P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,X,re,me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,me[ae].width,me[ae].height,0,X,re,me[ae].data);for(let Ne=0;Ne<xe.length;Ne++){const ut=xe[Ne].image[ae].image;P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,ut.width,ut.height,X,re,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,_e,ut.width,ut.height,0,X,re,ut.data)}}else{P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,X,re,me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,X,re,me[ae]);for(let Ne=0;Ne<xe.length;Ne++){const Le=xe[Ne];P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,X,re,Le.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,_e,X,re,Le.image[ae])}}}p(g)&&M(i.TEXTURE_CUBE_MAP),le.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Me(T,g,z,W,Z,le){const de=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),ee=x(z.internalFormat,de,Q,z.normalized,z.colorSpace),fe=n.get(g),Te=n.get(z);if(Te.__renderTarget=g,!fe.__hasExternalTextures){const me=Math.max(1,g.width>>le),N=Math.max(1,g.height>>le);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,le,ee,me,N,g.depth,0,de,Q,null):t.texImage2D(Z,le,ee,me,N,0,de,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,Te.__webglTexture,0,ze(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,Te.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(T,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const W=g.depthTexture,Z=W&&W.isDepthTexture?W.type:null,le=b(g.stencilBuffer,Z),de=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(g),le,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(g),le,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,le,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,T)}else{const W=g.textures;for(let Z=0;Z<W.length;Z++){const le=W[Z],de=s.convert(le.format,le.colorSpace),Q=s.convert(le.type),ee=x(le.internalFormat,de,Q,le.normalized,le.colorSpace);Ye(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(g),ee,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(T,g,z){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,g.depthTexture);const fe=s.convert(g.depthTexture.format),Te=s.convert(g.depthTexture.type);let me;g.depthTexture.format===Vn?me=i.DEPTH_COMPONENT24:g.depthTexture.format===di&&(me=i.DEPTH24_STENCIL8);for(let N=0;N<6;N++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,me,g.width,g.height,0,fe,Te,null)}}else ie(g.depthTexture,0);const le=Z.__webglTexture,de=ze(g),Q=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ee=g.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,le,0);else if(g.depthTexture.format===di)Ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(T){const g=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Ke(g.__webglFramebuffer[W],T,W);else{const W=T.texture.mipmaps;W&&W.length>0?Ke(g.__webglFramebuffer[0],T,0):Ke(g.__webglFramebuffer,T,0)}else if(z){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ie(g.__webglDepthbuffer[W],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,le)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ie(g.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,g,z){const W=n.get(T);g!==void 0&&Me(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Fe(T)}function We(T){const g=T.texture,z=n.get(T),W=n.get(g);T.addEventListener("dispose",_);const Z=T.textures,le=T.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),le){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ee=0;ee<g.mipmaps.length;ee++)z.__webglFramebuffer[Q][ee]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(de)for(let Q=0,ee=Z.length;Q<ee;Q++){const fe=n.get(Z[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ye(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const ee=Z[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const fe=s.convert(ee.format,ee.colorSpace),Te=s.convert(ee.type),me=x(ee.internalFormat,fe,Te,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),N=ze(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Me(z.__webglFramebuffer[Q][ee],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Me(z.__webglFramebuffer[Q],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let Q=0,ee=Z.length;Q<ee;Q++){const fe=Z[Q],Te=n.get(fe);let me=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Te.__webglTexture),Pe(me,fe),Me(z.__webglFramebuffer,T,fe,i.COLOR_ATTACHMENT0+Q,me,0),p(fe)&&M(me)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),Pe(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Me(z.__webglFramebuffer[ee],T,g,i.COLOR_ATTACHMENT0,Q,ee);else Me(z.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,Q,0);p(g)&&M(Q),t.unbindTexture()}T.depthBuffer&&Fe(T)}function ke(T){const g=T.textures;for(let z=0,W=g.length;z<W;z++){const Z=g[z];if(p(Z)){const le=w(T),de=n.get(Z).__webglTexture;t.bindTexture(le,de),M(le),t.unbindTexture()}}}const rt=[],mt=[];function ve(T){if(T.samples>0){if(Ye(T)===!1){const g=T.textures,z=T.width,W=T.height;let Z=i.COLOR_BUFFER_BIT;const le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(T),Q=g.length>1;if(Q)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=T.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Te=n.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Z,i.NEAREST),l===!0&&(rt.length=0,mt.length=0,rt.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(rt.push(le),mt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Te=n.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ze(T){return Math.min(r.maxSamples,T.samples)}function Ye(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function se(T,g){const z=T.colorSpace,W=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==os&&z!==ei&&(st.getTransfer(z)===ft?(W!==un||Z!==an)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",z)),g}function ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=V,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function u0(i,e){function t(n,r=ei){let s;const a=st.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===kc)return i.RGB;if(n===un)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===jr||n===es||n===ts||n===ns)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ya||n===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ea||n===Ta||n===wa||n===Ca||n===ss||n===Ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ea)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wa)return s.COMPRESSED_R11_EAC;if(n===Ca)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ss)return s.COMPRESSED_RG11_EAC;if(n===Ra)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Va||n===Ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wa)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===Ka||n===as||n===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===as)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class f0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:h0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends vi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,v=null;const y=typeof XRWebGLBinding<"u",m=new f0,p={},M=t.getContextAttributes();let w=null,x=null;const b=[],E=[],C=new Ae;let _=null,A=null;const R=new _n;R.viewport=new Et;const F=new _n;F.viewport=new Et;const O=[R,F],G=new Md;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=b[$];return ne===void 0&&(ne=new Ns,b[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=b[$];return ne===void 0&&(ne=new Ns,b[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=b[$];return ne===void 0&&(ne=new Ns,b[$]=ne),ne.getHandSpace()};function K($){const ne=E.indexOf($.inputSource);if(ne===-1)return;const he=b[ne];he!==void 0&&(he.update($.inputSource,$.frame,c||a),he.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ie);for(let $=0;$<b.length;$++){const ne=E[$];ne!==null&&(E[$]=null,b[$].disconnect(ne))}U=null,H=null,m.reset();for(const $ in p)delete p[$];if(e.setRenderTarget(w),d=null,u=null,f=null,r=null,x=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),A!==null){const $=A.camera;$.fov=A.fov,$.zoom=A.zoom,$.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Re=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=M.stencil?di:Vn,Re=M.stencil?vr:Rn);const Ie={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Mn(u.textureWidth,u.textureHeight,{format:un,type:an,depthTexture:new Sr(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Mn(d.framebufferWidth,d.framebufferHeight,{format:un,type:an,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie($){for(let ne=0;ne<$.removed.length;ne++){const he=$.removed[ne],Re=E.indexOf(he);Re>=0&&(E[Re]=null,b[Re].disconnect(he))}for(let ne=0;ne<$.added.length;ne++){const he=$.added[ne];let Re=E.indexOf(he);if(Re===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=E.length){E.push(he),Re=Ie;break}else if(E[Ie]===null){E[Ie]=he,Re=Ie;break}if(Re===-1)break}const Me=b[Re];Me&&Me.connect(he)}}const V=new L,I=new L;function k($,ne,he){V.setFromMatrixPosition(ne.matrixWorld),I.setFromMatrixPosition(he.matrixWorld);const Re=V.distanceTo(I),Me=ne.projectionMatrix.elements,Ie=he.projectionMatrix.elements,Ke=Me[14]/(Me[10]-1),Fe=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],We=(Me[9]-1)/Me[5],ke=(Me[8]-1)/Me[0],rt=(Ie[8]+1)/Ie[0],mt=Ke*ke,ve=Ke*rt,ze=Re/(-ke+rt),Ye=ze*-ke;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Me[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const D=Ke+ze,se=Fe+ze,ce=mt-Ye,T=ve+(Re-Ye),g=Be*Fe/se*D,z=We*Fe/se*D;$.projectionMatrix.makePerspective(ce,T,g,z,D,se),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,he=$.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(he=m.depthFar)),G.near=F.near=R.near=ne,G.far=F.far=R.far=he,(U!==G.near||H!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,H=G.far),G.layers.mask=$.layers.mask|6,R.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;const Re=$.parent,Me=G.cameras;ue(G,Re);for(let Ie=0;Ie<Me.length;Ie++)ue(Me[Ie],Re);Me.length===2?k(G,R,F):G.projectionMatrix.copy(R.projectionMatrix),A===null&&$.isPerspectiveCamera&&(A={camera:$,fov:$.fov,zoom:$.zoom}),ge($,G,Re)};function ge($,ne,he){he===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$a*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function($){return p[$]};let Ge=null;function Pe($,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){const he=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Re=!1;he.length!==G.cameras.length&&(G.cameras.length=0,Re=!0);for(let Fe=0;Fe<he.length;Fe++){const Be=he[Fe];let We=null;if(d!==null)We=d.getViewport(Be);else{const rt=f.getViewSubImage(u,Be);We=rt.viewport,Fe===0&&(e.setRenderTargetTextures(x,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(x))}let ke=O[Fe];ke===void 0&&(ke=new _n,ke.layers.enable(Fe),ke.viewport=new Et,O[Fe]=ke),ke.matrix.fromArray(Be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(We.x,We.y,We.width,We.height),Fe===0&&(G.matrix.copy(ke.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Re===!0&&G.cameras.push(ke)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const Fe=f.getDepthInformation(he[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Fe=0;Fe<he.length;Fe++){const Be=he[Fe].camera;if(Be){let We=p[Be];We||(We=new Zc,p[Be]=We);const ke=f.getCameraImage(Be);We.sourceTexture=ke}}}}for(let he=0;he<b.length;he++){const Re=E[he],Me=b[he];Re!==null&&Me!==void 0&&Me.update(Re,ne,c||a)}Ge&&Ge($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ee=new iu;Ee.setAnimationLoop(Pe),this.setAnimationLoop=function($){Ge=$},this.dispose=function(){}}}const m0=new _t,uu=new Xe;uu.set(-1,0,0,0,1,0,0,0,1);function g0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const E=b.program;n.uniformBlockBinding(x,E)}function c(x,b){let E=r[x.id];E===void 0&&(m(x),E=h(x),r[x.id]=E,x.addEventListener("dispose",M));const C=b.program;n.updateUBOMapping(x,C);const _=e.render.frame;s[x.id]!==_&&(u(x),s[x.id]=_)}function h(x){const b=f();x.__bindingPointIndex=b;const E=i.createBuffer(),C=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const b=r[x.id],E=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,A=E.length;_<A;_++){const R=E[_];if(Array.isArray(R))for(let F=0,O=R.length;F<O;F++)d(R[F],_,F,C);else d(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,E,C){if(y(x,b,E,C)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let R=0;for(let F=0;F<A.length;F++){const O=A[F],G=p(O);v(O,x.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function v(x,b,E){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,E)}function y(x,b,E,C){const _=x.value,A=b+"_"+E;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const R=C[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){const b=x.uniforms;let E=0;const C=16;for(let A=0,R=b.length;A<R;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,G=F.length;O<G;O++){const U=F[O],H=Array.isArray(U.value)?U.value:[U.value];for(let K=0,J=H.length;K<J;K++){const ie=H[K],V=p(ie),I=E%C,k=I%V.boundary,ue=I+k;E+=k,ue!==0&&C-ue<V.storage&&(E+=C-ue),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=V.storage}}}const _=E%C;return _>0&&(E+=C-_),x.__size=E,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){const b=x.target;b.removeEventListener("dispose",M);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}const v0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function x0(){return En===null&&(En=new Eo(v0,16,16,mi,Pn),En.name="DFG_LUT",En.minFilter=Ot,En.magFilter=Ot,En.wrapS=Bn,En.wrapT=Bn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class M0{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=an}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const y=d,m=new Set([xo,vo,_o]),p=new Set([an,Rn,_r,vr,po,mo]),M=new Uint32Array(4),w=new Int32Array(4),x=new L;let b=null,E=null;const C=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let F=!1,O=null,G=null,U=null,H=null;this._outputColorSpace=Wt;let K=0,J=0,ie=null,V=-1,I=null;const k=new Et,ue=new Et;let ge=null;const Ge=new He(0);let Pe=0,Ee=t.width,$=t.height,ne=1,he=null,Re=null;const Me=new Et(0,0,Ee,$),Ie=new Et(0,0,Ee,$);let Ke=!1;const Fe=new To;let Be=!1,We=!1;const ke=new _t,rt=new L,mt=new Et,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Ye(){return ie===null?ne:1}let D=n;function se(S,B){return t.getContext(S,B)}let ce,T,g,z,W,Z,le,de,Q,ee,fe,Te,me,N,X,re,_e,P,oe,te,pe,xe,ae;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",en,!1),D===null){const B="webgl2";if(D=se(B,S),D===null)throw se(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(S){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",en,!1),ct("WebGLRenderer: "+S.message),S}function Ne(){ce=new xm(D),ce.init(),pe=new u0(D,ce),T=new cm(D,ce,e,pe),g=new l0(D,ce),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),G=D.createFramebuffer(),U=D.createFramebuffer(),H=D.createFramebuffer(),z=new ym(D),W=new Kg,Z=new c0(D,ce,g,W,T,pe,z),le=new vm(R),de=new bd(D),xe=new om(D,de),Q=new Mm(D,de,z,xe),ee=new Am(D,Q,de,xe,z),P=new bm(D,T,Z),X=new um(W),fe=new Yg(R,le,ce,T,xe,X),Te=new g0(R,W),me=new Jg,N=new n0(ce),_e=new am(R,le,g,ee,v,l),re=new o0(R,ee,T),ae=new _0(D,z,T,g),oe=new lm(D,ce,z),te=new Sm(D,ce,z),z.programs=fe.programs,R.capabilities=T,R.extensions=ce,R.properties=W,R.renderLists=me,R.shadowMap=re,R.state=g,R.info=z}y!==an&&(A=new Tm(y,t.width,t.height,o,r,s));const Le=new p0(R,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Ee,$,!1))},this.getSize=function(S){return S.set(Ee,$)},this.setSize=function(S,B,j=!0){if(Le.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=S,$=B,t.width=Math.floor(S*ne),t.height=Math.floor(B*ne),j===!0&&(t.style.width=S+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Ee*ne,$*ne).floor()},this.setDrawingBufferSize=function(S,B,j){Ee=S,$=B,ne=j,t.width=Math.floor(S*j),t.height=Math.floor(B*j),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(y===an){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,B,j,q){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,B,j,q),g.viewport(k.copy(Me).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,B,j,q){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,B,j,q),g.scissor(ue.copy(Ie).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){g.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){Re=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,j=!0){let q=0;if(S){let Y=!1;if(ie!==null){const be=ie.texture.format;Y=m.has(be)}if(Y){const be=ie.texture.type,Ce=p.has(be),ye=_e.getClearColor(),De=_e.getClearAlpha(),Oe=ye.r,Ze=ye.g,nt=ye.b;Ce?(M[0]=Oe,M[1]=Ze,M[2]=nt,M[3]=De,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Oe,w[1]=Ze,w[2]=nt,w[3]=De,D.clearBufferiv(D.COLOR,0,w))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",en,!1),_e.dispose(),me.dispose(),N.dispose(),W.dispose(),le.dispose(),ee.dispose(),xe.dispose(),ae.dispose(),fe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Wo),Le.removeEventListener("sessionend",Xo),si.stop()};function ut(S){S.preventDefault(),sl("WebGLRenderer: Context Lost."),F=!0}function ot(){sl("WebGLRenderer: Context Restored."),F=!1;const S=z.autoReset,B=re.enabled,j=re.autoUpdate,q=re.needsUpdate,Y=re.type;Ne(),z.autoReset=S,re.enabled=B,re.autoUpdate=j,re.needsUpdate=q,re.type=Y}function en(S){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Jt(S){const B=S.target;B.removeEventListener("dispose",Jt),Ss(B)}function Ss(S){Eu(S),W.remove(S)}function Eu(S){const B=W.get(S).programs;B!==void 0&&(B.forEach(function(j){fe.releaseProgram(j)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,j,q,Y,be){B===null&&(B=ve);const Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ye=Cu(S,B,j,q,Y);g.setMaterial(q,Ce);let De=j.index,Oe=1;if(q.wireframe===!0){if(De=Q.getWireframeAttribute(j),De===void 0)return;Oe=2}const Ze=j.drawRange,nt=j.attributes.position;let Ue=Ze.start*Oe,ht=(Ze.start+Ze.count)*Oe;be!==null&&(Ue=Math.max(Ue,be.start*Oe),ht=Math.min(ht,(be.start+be.count)*Oe)),De!==null?(Ue=Math.max(Ue,0),ht=Math.min(ht,De.count)):nt!=null&&(Ue=Math.max(Ue,0),ht=Math.min(ht,nt.count));const Ct=ht-Ue;if(Ct<0||Ct===1/0)return;xe.setup(Y,q,ye,j,De);let St,vt=oe;if(De!==null&&(St=de.get(De),vt=te,vt.setIndex(St)),Y.isMesh)q.wireframe===!0?(g.setLineWidth(q.wireframeLinewidth*Ye()),vt.setMode(D.LINES)):vt.setMode(D.TRIANGLES);else if(Y.isLine){let Gt=q.linewidth;Gt===void 0&&(Gt=1),g.setLineWidth(Gt*Ye()),Y.isLineSegments?vt.setMode(D.LINES):Y.isLineLoop?vt.setMode(D.LINE_LOOP):vt.setMode(D.LINE_STRIP)}else Y.isPoints?vt.setMode(D.POINTS):Y.isSprite&&vt.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,we=Y._multiDrawCounts,qt=Y._multiDrawCount,lt=De?de.get(De).bytesPerElement:1,ln=W.get(q).currentProgram.getUniforms();for(let bn=0;bn<qt;bn++)ln.setValue(D,"_gl_DrawID",bn),vt.render(Gt[bn]/lt,we[bn])}else if(Y.isInstancedMesh)vt.renderInstances(Ue,Ct,Y.count);else if(j.isInstancedBufferGeometry){const Gt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,we=Math.min(j.instanceCount,Gt);vt.renderInstances(Ue,Ct,we)}else vt.render(Ue,Ct)};function Ho(S,B,j,q){O!==null&&S.isNodeMaterial&&O.setObject(q,S),Be===!0&&X.setState(S,j,!1),S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,wr(S,B,q),S.side=fi,S.needsUpdate=!0,wr(S,B,q),S.side=sn):wr(S,B,q)}this.compile=function(S,B,j=null){j===null&&(j=S),O!==null&&O.renderStart(S,B,j),E=N.get(j),E.init(B),_.push(E),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),S!==j&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),We=this.localClippingEnabled,Be=X.init(this.clippingPlanes,We),Be===!0&&X.setGlobalState(this.clippingPlanes,B),O!==null&&re.render(E.state.shadowsArray,j,B);const q=new Set;return S.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const ye=be[Ce];Ho(ye,j,B,Y),q.add(ye)}else Ho(be,j,B,Y),q.add(be)}),E=_.pop(),O!==null&&O.renderEnd(),q},this.compileAsync=function(S,B,j=null){const q=this.compile(S,B,j);return new Promise(Y=>{function be(){if(q.forEach(function(Ce){const De=W.get(Ce).currentProgram;(De===void 0||De.isReady())&&q.delete(Ce)}),q.size===0){Y(S);return}setTimeout(be,10)}ce.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ys=null;function Tu(S){ys&&ys(S)}function Wo(){si.stop()}function Xo(){si.start()}const si=new iu;si.setAnimationLoop(Tu),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(S){ys=S,Le.setAnimationLoop(S),S===null?si.stop():si.start()},Le.addEventListener("sessionstart",Wo),Le.addEventListener("sessionend",Xo),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(S,B);const j=Le.enabled===!0&&Le.isPresenting===!0,q=A!==null&&(ie===null||j)&&A.begin(R,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(B),B=Le.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,B,ie),E=N.get(S,_.length),E.init(B),E.state.textureUnits=Z.getTextureUnits(),_.push(E),ke.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(ke,wn,B.reversedDepth),We=this.localClippingEnabled,Be=X.init(this.clippingPlanes,We),b=me.get(S,C.length),b.init(),C.push(b),Le.enabled===!0&&Le.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&bs(Ce,B,-1/0,R.sortObjects)}bs(S,B,0,R.sortObjects),b.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(he,Re),ze=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ze&&_e.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&X.beginShadows();const Y=E.state.shadowsArray;if(re.render(Y,S,B),Be===!0&&X.endShadows(),(q&&A.hasRenderPass())===!1){const Ce=b.opaque,ye=b.transmissive;if(E.setupLights(),B.isArrayCamera){const De=B.cameras;if(ye.length>0)for(let Oe=0,Ze=De.length;Oe<Ze;Oe++){const nt=De[Oe];Yo(Ce,ye,S,nt)}ze&&_e.render(S);for(let Oe=0,Ze=De.length;Oe<Ze;Oe++){const nt=De[Oe];qo(b,S,nt,nt.viewport)}}else ye.length>0&&Yo(Ce,ye,S,B),ze&&_e.render(S),qo(b,S,B)}ie!==null&&J===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),q&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,B),xe.resetDefaultState(),V=-1,I=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),Be===!0&&X.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function bs(S,B,j,q){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Fe)){q&&mt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ke);const Ce=ee.update(S),ye=S.material;ye.visible&&b.push(S,Ce,ye,j,mt.z,null,B)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Fe))){const Ce=ee.update(S),ye=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),mt.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),mt.copy(Ce.boundingSphere.center)),mt.applyMatrix4(S.matrixWorld).applyMatrix4(ke)),Array.isArray(ye)){const De=Ce.groups;for(let Oe=0,Ze=De.length;Oe<Ze;Oe++){const nt=De[Oe],Ue=ye[nt.materialIndex];Ue&&Ue.visible&&b.push(S,Ce,Ue,j,mt.z,nt,B)}}else ye.visible&&b.push(S,Ce,ye,j,mt.z,null,B)}}const be=S.children;for(let Ce=0,ye=be.length;Ce<ye;Ce++)bs(be[Ce],B,j,q)}function qo(S,B,j,q){const{opaque:Y,transmissive:be,transparent:Ce}=S;E.setupLightsView(j),Be===!0&&X.setGlobalState(R.clippingPlanes,j),q&&g.viewport(k.copy(q)),Y.length>0&&Tr(Y,B,j),be.length>0&&Tr(be,B,j),Ce.length>0&&Tr(Ce,B,j),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Yo(S,B,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const Ue=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Mn(1,1,{generateMipmaps:!0,type:Ue?Pn:an,minFilter:hi,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const be=E.state.transmissionRenderTarget[q.id],Ce=q.viewport||k;be.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const ye=R.getRenderTarget(),De=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(Ge),Pe=R.getClearAlpha(),Pe<1&&R.setClearColor(16777215,.5),R.clear(),ze&&_e.render(j);const Ze=R.toneMapping;R.toneMapping=Cn;const nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Be===!0&&X.setGlobalState(R.clippingPlanes,q),Tr(S,j,q),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ht=0,Ct=B.length;ht<Ct;ht++){const St=B[ht],{object:vt,geometry:Gt,material:we,group:qt}=St;if(we.side===sn&&vt.layers.test(q.layers)){const lt=we.side;we.side=jt,we.needsUpdate=!0,Ko(vt,j,q,Gt,we,qt),we.side=lt,we.needsUpdate=!0,Ue=!0}}Ue===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be))}R.setRenderTarget(ye,De,Oe),R.setClearColor(Ge,Pe),nt!==void 0&&(q.viewport=nt),R.toneMapping=Ze}function Tr(S,B,j){const q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,be=S.length;Y<be;Y++){const Ce=S[Y],{object:ye,geometry:De,group:Oe}=Ce;let Ze=Ce.material;Ze.allowOverride===!0&&q!==null&&(Ze=q),ye.layers.test(j.layers)&&Ko(ye,B,j,De,Ze,Oe)}}function Ko(S,B,j,q,Y,be){O!==null&&Y.isNodeMaterial&&O.setObject(S,Y),S.onBeforeRender(R,B,j,q,Y,be),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(R,B,j,q,S,be),Y.transparent===!0&&Y.side===sn&&Y.forceSinglePass===!1?(Y.side=jt,Y.needsUpdate=!0,R.renderBufferDirect(j,B,q,Y,S,be),Y.side=fi,Y.needsUpdate=!0,R.renderBufferDirect(j,B,q,Y,S,be),Y.side=sn):R.renderBufferDirect(j,B,q,Y,S,be),S.onAfterRender(R,B,j,q,Y,be)}function wr(S,B,j){B.isScene!==!0&&(B=ve);const q=W.get(S),Y=E.state.lights,be=E.state.shadowsArray,Ce=Y.state.version,ye=fe.getParameters(S,Y.state,be,B,j,E.state.lightProbeGridArray),De=fe.getProgramCacheKey(ye);let Oe=q.programs;q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;q.envMap=le.get(S.envMap||q.environment,Ze),q.envMapRotation=q.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Jt),Oe=new Map,q.programs=Oe);let nt=Oe.get(De);if(nt!==void 0){if(q.currentProgram===nt&&q.lightsStateVersion===Ce)return Jo(S,ye),nt}else ye.uniforms=fe.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,j,ye),S.onBeforeCompile(ye,R),nt=fe.acquireProgram(ye,De),Oe.set(De,nt),q.uniforms=ye.uniforms;const Ue=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=X.uniform),Jo(S,ye),q.needsLights=Pu(S),q.lightsStateVersion=Ce,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=nt,q.uniformsList=null,nt}function Zo(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=is.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Jo(S,B){const j=W.get(S);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function wu(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let j=0,q=S.length;j<q;j++){const Y=S[j];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Cu(S,B,j,q,Y){B.isScene!==!0&&(B=ve),Z.resetTextureUnits();const be=B.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,ye=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Oe=le.get(q.envMap||Ce,De),Ze=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,nt=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,Ct=!!j.morphAttributes.color;let St=Cn;q.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=R.toneMapping);const vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Gt=vt!==void 0?vt.length:0,we=W.get(q),qt=E.state.lights;if(Be===!0&&(We===!0||S!==I)){const xt=S===I&&q.id===V;X.setState(q,S,xt)}let lt=!1;q.version===we.__version?(we.needsLights&&we.lightsStateVersion!==qt.state.version||we.outputColorSpace!==ye||Y.isBatchedMesh&&we.batching===!1||!Y.isBatchedMesh&&we.batching===!0||Y.isBatchedMesh&&we.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&we.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&we.instancing===!1||!Y.isInstancedMesh&&we.instancing===!0||Y.isSkinnedMesh&&we.skinning===!1||!Y.isSkinnedMesh&&we.skinning===!0||Y.isInstancedMesh&&we.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&we.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&we.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&we.instancingMorph===!1&&Y.morphTexture!==null||we.envMap!==Oe||q.fog===!0&&we.fog!==be||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==X.numPlanes||we.numIntersection!==X.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==nt||we.morphTargets!==Ue||we.morphNormals!==ht||we.morphColors!==Ct||we.toneMapping!==St||we.morphTargetsCount!==Gt||!!we.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,we.__version=q.version);let ln=we.currentProgram;lt===!0&&(ln=wr(q,B,Y),O&&q.isNodeMaterial&&O.onUpdateProgram(q,ln,we));let bn=!1,qn=!1,Si=!1;const gt=ln.getUniforms(),Tt=we.uniforms;if(g.useProgram(ln.program)&&(bn=!0,qn=!0,Si=!0),q.id!==V&&(V=q.id,qn=!0),we.needsLights){const xt=wu(E.state.lightProbeGridArray,Y);we.lightProbeGrid!==xt&&(we.lightProbeGrid=xt,qn=!0)}if(bn||I!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(D,"projectionMatrix",S.projectionMatrix),gt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Kn=gt.map.cameraPosition;Kn!==void 0&&Kn.setValue(D,rt.setFromMatrixPosition(S.matrixWorld)),T.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),I!==S&&(I=S,qn=!0,Si=!0)}if(we.needsLights&&(qt.state.sunShadowMap.length>0&&gt.setValue(D,"sunShadowMap",qt.state.sunShadowMap,Z),qt.state.directionalShadowMap.length>0&&gt.setValue(D,"directionalShadowMap",qt.state.directionalShadowMap,Z),qt.state.spotShadowMap.length>0&&gt.setValue(D,"spotShadowMap",qt.state.spotShadowMap,Z),qt.state.pointShadowMap.length>0&&gt.setValue(D,"pointShadowMap",qt.state.pointShadowMap,Z)),Y.isSkinnedMesh){gt.setOptional(D,Y,"bindMatrix"),gt.setOptional(D,Y,"bindMatrixInverse");const xt=Y.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue(D,"boneTexture",xt.boneTexture,Z))}Y.isBatchedMesh&&(gt.setOptional(D,Y,"batchingTexture"),gt.setValue(D,"batchingTexture",Y._matricesTexture,Z),gt.setOptional(D,Y,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",Y._indirectTexture,Z),gt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",Y._colorsTexture,Z));const Yn=j.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&P.update(Y,j,ln),(qn||we.receiveShadow!==Y.receiveShadow)&&(we.receiveShadow=Y.receiveShadow,gt.setValue(D,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(Tt.envMapIntensity.value=B.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=x0()),qn){if(gt.setValue(D,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Ru(Tt,Si),be&&q.fog===!0&&Te.refreshFogUniforms(Tt,be),Te.refreshMaterialUniforms(Tt,q,ne,$,E.state.transmissionRenderTarget[S.id]),we.needsLights&&we.lightProbeGrid){const xt=we.lightProbeGrid;Tt.probesSH.value=xt.texture,Tt.probesMin.value.copy(xt.boundingBox.min),Tt.probesMax.value.copy(xt.boundingBox.max),Tt.probesResolution.value.copy(xt.resolution)}is.upload(D,Zo(we),Tt,Z)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(is.upload(D,Zo(we),Tt,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(D,"center",Y.center),gt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(D,"normalMatrix",Y.normalMatrix),gt.setValue(D,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const xt=q.uniformsGroups;for(let Kn=0,yi=xt.length;Kn<yi;Kn++){const Qo=xt[Kn];ae.update(Qo,ln),ae.bind(Qo,ln)}}return ln}function Ru(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,B,j){const q=W.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=B,W.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const j=W.get(S);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,j=0){ie=S,K=B,J=j;let q=null,Y=!1,be=!1;if(S){const ye=W.get(S);if(ye.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglFramebuffer),k.copy(S.viewport),ue.copy(S.scissor),ge=S.scissorTest,g.viewport(k),g.scissor(ue),g.setScissorTest(ge),V=-1;return}else if(ye.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ye.__hasExternalTextures)Z.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ze=S.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&W.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(be=!0);const Oe=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?q=Oe[B][j]:q=Oe[B],Y=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?q=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[j]:q=Oe,k.copy(S.viewport),ue.copy(S.scissor),ge=S.scissorTest}else k.copy(Me).multiplyScalar(ne).floor(),ue.copy(Ie).multiplyScalar(ne).floor(),ge=Ke;if(j!==0&&(q=G),g.bindFramebuffer(D.FRAMEBUFFER,q)&&g.drawBuffers(S,q),g.viewport(k),g.scissor(ue),g.setScissorTest(ge),Y){const ye=W.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,j)}else if(be){const ye=B;for(let De=0;De<S.textures.length;De++){const Oe=W.get(S.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Oe.__webglTexture,j,ye)}}else if(S!==null&&j!==0){const ye=W.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,j)}V=-1};function $o(S){const B=W.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=T.textureFormatReadable(S.format),B.__typeReadable=T.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,j,q,Y,be,Ce,ye=0){if(!(S&&S.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){g.bindFramebuffer(D.FRAMEBUFFER,De);try{const Oe=S.textures[ye],Ze=Oe.format,nt=Oe.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye);const Ue=$o(Oe);if(Ue.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-q&&j>=0&&j<=S.height-Y&&D.readPixels(B,j,q,Y,pe.convert(Ze),pe.convert(nt),be)}finally{const Oe=ie!==null?W.get(ie).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,B,j,q,Y,be,Ce,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(B>=0&&B<=S.width-q&&j>=0&&j<=S.height-Y){g.bindFramebuffer(D.FRAMEBUFFER,De);const Oe=S.textures[ye],Ze=Oe.format,nt=Oe.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye);const Ue=$o(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),D.readPixels(B,j,q,Y,pe.convert(Ze),pe.convert(nt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ct=ie!==null?W.get(ie).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ct);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ph(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ht),D.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,j=0){const q=Math.pow(2,-j),Y=Math.floor(S.image.width*q),be=Math.floor(S.image.height*q),Ce=B!==null?B.x:0,ye=B!==null?B.y:0;Z.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Ce,ye,Y,be),g.unbindTexture()},this.copyTextureToTexture=function(S,B,j=null,q=null,Y=0,be=0){let Ce,ye,De,Oe,Ze,nt,Ue,ht,Ct;const St=S.isCompressedTexture?S.mipmaps[be]:S.image;if(j!==null)Ce=j.max.x-j.min.x,ye=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,Oe=j.min.x,Ze=j.min.y,nt=j.isBox3?j.min.z:0;else{const Tt=Math.pow(2,-Y);Ce=Math.floor(St.width*Tt),ye=Math.floor(St.height*Tt),S.isDataArrayTexture?De=St.depth:S.isData3DTexture?De=Math.floor(St.depth*Tt):De=1,Oe=0,Ze=0,nt=0}q!==null?(Ue=q.x,ht=q.y,Ct=q.z):(Ue=0,ht=0,Ct=0);const vt=pe.convert(B.format),Gt=pe.convert(B.type);let we;B.isData3DTexture?(Z.setTexture3D(B,0),we=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),we=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),we=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const qt=g.getParameter(D.UNPACK_ROW_LENGTH),lt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(D.UNPACK_SKIP_PIXELS),bn=g.getParameter(D.UNPACK_SKIP_ROWS),qn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(D.UNPACK_SKIP_IMAGES,nt);const Si=S.isDataArrayTexture||S.isData3DTexture,gt=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const Tt=W.get(S),Yn=W.get(B),xt=W.get(Tt.__renderTarget),Kn=W.get(Yn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,xt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let yi=0;yi<De;yi++)Si&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(S).__webglTexture,Y,nt+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(B).__webglTexture,be,Ct+yi)),D.blitFramebuffer(Oe,Ze,Ce,ye,Ue,ht,Ce,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||S.isRenderTargetTexture||W.has(S)){const Tt=W.get(S),Yn=W.get(B);g.bindFramebuffer(D.READ_FRAMEBUFFER,U),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let xt=0;xt<De;xt++)Si?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,Y,nt+xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,Y),gt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yn.__webglTexture,be,Ct+xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yn.__webglTexture,be),Y!==0?D.blitFramebuffer(Oe,Ze,Ce,ye,Ue,ht,Ce,ye,D.COLOR_BUFFER_BIT,D.NEAREST):gt?D.copyTexSubImage3D(we,be,Ue,ht,Ct+xt,Oe,Ze,Ce,ye):D.copyTexSubImage2D(we,be,Ue,ht,Oe,Ze,Ce,ye);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(we,be,Ue,ht,Ct,Ce,ye,De,vt,Gt,St.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(we,be,Ue,ht,Ct,Ce,ye,De,vt,St.data):D.texSubImage3D(we,be,Ue,ht,Ct,Ce,ye,De,vt,Gt,St):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,Ue,ht,Ce,ye,vt,Gt,St.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,Ue,ht,St.width,St.height,vt,St.data):D.texSubImage2D(D.TEXTURE_2D,be,Ue,ht,Ce,ye,vt,Gt,St);g.pixelStorei(D.UNPACK_ROW_LENGTH,qt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(D.UNPACK_SKIP_ROWS,bn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,qn),be===0&&B.generateMipmaps&&D.generateMipmap(we),g.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){K=0,J=0,ie=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class S0{constructor(e,t="gift"){this.host=e,this.craftId=t,this.scene=new Ph,this.camera=new ms(-3.4,3.4,4.1,-4.1,.1,40),this.materials=[],this.startedAt=performance.now(),this.atlas=null,this.tiles=[],this.ray=new Sd,this.plane=new On(new L(0,1,0),0),this.target=new L,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.finishTime=-1,this.finishZoom=1,this.finishFocus=0,this.baseZoom=1,this.renderer=new M0({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cr,this.renderer.outputColorSpace=Wt,this.renderer.toneMapping=ho,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.setAttribute("aria-label","3D craft"),this.renderer.domElement.tabIndex=0,e.append(this.renderer.domElement),this.camera.position.set(0,8,8),this.camera.lookAt(0,.1,0),this.scene.add(new gd("#fff8ef","#b3a79d",2.2));const n=new Fl("#fff3dc",3.6);n.position.set(-3,7,4),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-5,n.shadow.camera.right=5,n.shadow.camera.top=5,n.shadow.camera.bottom=-5,n.shadow.bias=-5e-4,n.shadow.normalBias=.025,this.scene.add(n);const r=new Fl("#d8e6ef",1.3);r.position.set(4,3,-2),this.scene.add(r);const s=new it(new wo(5.4,96),this.material("#e5d8c5",0));s.rotation.x=-Math.PI/2,s.position.y=-.12,s.receiveShadow=!0,this.scene.add(s);const a=new it(new bt(2.88,2.94,.06,96),this.material("#efe6d7",0));a.position.set(0,-.07,0),a.receiveShadow=!0,this.scene.add(a);const o=new it(new on(2.87,.015,8,96),this.material("#c5b496"));o.rotation.x=Math.PI/2,o.position.y=-.025,this.scene.add(o),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize()}material(e,t,n=.7){const r=new eu({color:e,roughness:n,metalness:n<.4?.3:0});return r.userData.tile=t,t!==void 0&&this.tiles[t]&&(r.map=this.tiles[t]),this.materials.push(r),r}loadAtlas(e){new md().load(e,t=>{t.colorSpace=Wt,t.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.atlas=t,this.tiles=[0,1,2,3].map(n=>{const r=t.clone();return r.repeat.set(.5,.5),r.offset.set(n%2*.5,n<2?.5:0),r.needsUpdate=!0,r});for(const n of this.materials){const r=n.userData.tile;r!==void 0&&(n.map=this.tiles[r],n.needsUpdate=!0)}},void 0,()=>{console.warn("[Craft] material image unavailable")})}resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight),n=e/t;this.baseZoom=t>e?this.craftId==="candy"?1.25:this.craftId==="stamp"||this.craftId==="dumpling"?1.18:1:1,this.finishTime<0&&(this.camera.zoom=this.baseZoom);const r=Math.max(5.6,6.8/n);this.camera.left=-r*n/2,this.camera.right=r*n/2,this.camera.top=r/2,this.camera.bottom=-r/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}point(e){const t=this.renderer.domElement.getBoundingClientRect(),n=e.pointerType==="mouse"?0:44;return this.ray.setFromCamera(new Ae((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top-n)/t.height)*2+1),this.camera),this.ray.ray.intersectPlane(this.plane,this.target)?{x:this.target.x,z:this.target.z,pressure:e.pressure||.5}:null}finish(e,t=!1){this.finishTime=(performance.now()-this.startedAt)/1e3,this.finishZoom=e==="candy"?t?1.12:2.05:e==="stamp"?1.4:1.6,this.finishFocus=e==="candy"?t?.45:.9:e==="gift"?.4:.1}render(){const e=(performance.now()-this.startedAt)/1e3;if(this.finishTime>=0){const t=e-this.finishTime,n=this.reduced?1:1-Math.pow(1-Math.min(1,t/.7),3);this.camera.zoom=this.baseZoom+(this.finishZoom-this.baseZoom)*n,this.camera.position.x=this.reduced?0:Math.sin(Math.min(t,1.4)*1.8)*.24,this.camera.lookAt(0,.1+(this.finishFocus-.1)*n,0),this.camera.updateProjectionMatrix()}this.renderer.render(this.scene,this.camera)}resetCamera(){this.finishTime=-1,this.camera.zoom=this.baseZoom,this.camera.position.set(0,8,8),this.camera.lookAt(0,.1,0),this.camera.updateProjectionMatrix()}dispose(){this.observer.disconnect(),this.scene.traverse(e=>{e instanceof it&&e.geometry.dispose()}),this.materials.forEach(e=>e.dispose()),this.tiles.forEach(e=>e.dispose()),this.atlas?.dispose(),this.renderer.dispose()}}const vs=["ja","en","fr","it","de","es","tr","zh-CN","ko","pt-BR","ru"],y0=["studio","finish","color","size","again","save","share","score","back","sound","music","saved","shareText","hint","result","resume","credits","choose","developing"],b0={ja:["手しごと研究室","できあがり","色","大きさ","もう一つ作る","写真を保存","Xで見せる","点","戻る","効果音","音楽","保存しました","「{game}」で作りました。{title} / {score}点","触って作ろう","あなたの作品","続きから","音源クレジット","遊ぶ作品を選ぶ","試作版"],en:["Odd Craft Studio","Finish","Color","Size","Make another","Save photo","Share on X","pts","Back","Sounds","Music","Saved","Made in {game}: {title} / {score} pts","Make it your own","Your creation","Continue","Audio credits","Choose a craft","Prototype"],fr:["Atelier insolite","Terminer","Couleur","Taille","Créer encore","Enregistrer","Partager sur X","pts","Retour","Sons","Musique","Enregistré","Créé dans {game} : {title} / {score} pts","À toi de créer","Ta création","Continuer","Crédits audio","Choisir un atelier","Prototype"],it:["Bottega insolita","Finito","Colore","Misura","Crea ancora","Salva foto","Condividi su X","pt","Indietro","Suoni","Musica","Salvato","Creato in {game}: {title} / {score} pt","Crea a modo tuo","La tua creazione","Continua","Crediti audio","Scegli una creazione","Prototipo"],de:["Kuriose Werkstatt","Fertig","Farbe","Größe","Noch eins","Foto speichern","Auf X teilen","Pkt","Zurück","Klänge","Musik","Gespeichert","Erstellt in {game}: {title} / {score} Pkt","Gestalte selbst","Dein Werk","Weiter","Audio-Credits","Handwerk wählen","Prototyp"],es:["Taller curioso","Terminar","Color","Tamaño","Crear otro","Guardar foto","Compartir en X","pts","Volver","Sonidos","Música","Guardado","Hecho en {game}: {title} / {score} pts","Crea a tu manera","Tu creación","Continuar","Créditos de audio","Elige un taller","Prototipo"],tr:["Tuhaf Atölye","Bitir","Renk","Boyut","Yeniden yap","Fotoğrafı kaydet","X’te paylaş","puan","Geri","Sesler","Müzik","Kaydedildi","{game} eserim: {title} / {score} puan","Kendin tasarla","Eserin","Devam et","Ses kaynakları","Bir el işi seç","Prototip"],"zh-CN":["奇妙手作室","完成","颜色","大小","再做一个","保存照片","分享到X","分","返回","音效","音乐","已保存","在《{game}》制作：{title} / {score}分","动手创造","你的作品","继续","音源信息","选择手作","试玩版"],ko:["별난 공방","완성","색상","크기","하나 더 만들기","사진 저장","X에 공유","점","뒤로","효과음","음악","저장했어요","{game} 작품: {title} / {score}점","직접 만들어 봐요","나의 작품","계속하기","음원 출처","작품 선택","시제품"],"pt-BR":["Ateliê curioso","Finalizar","Cor","Tamanho","Criar outro","Salvar foto","Compartilhar no X","pts","Voltar","Sons","Música","Salvo","Feito em {game}: {title} / {score} pts","Crie do seu jeito","Sua criação","Continuar","Créditos de áudio","Escolha uma arte","Protótipo"],ru:["Странная мастерская","Готово","Цвет","Размер","Создать ещё","Сохранить фото","В X","балл.","Назад","Звуки","Музыка","Сохранено","Моя работа в {game}: {title} / {score} балл.","Твори по-своему","Твоя работа","Продолжить","Источники звука","Выбери мастерскую","Прототип"]},to=Object.fromEntries(vs.map(i=>[i,Object.fromEntries(y0.map((e,t)=>[e,b0[i][t]]))])),cc={ja:["もう一度","前回 {before} → 今回 {after}"],en:["Try again","Previous {before} → Now {after}"],fr:["Réessayer","Avant {before} → Maintenant {after}"],it:["Riprova","Prima {before} → Ora {after}"],de:["Erneut versuchen","Vorher {before} → Jetzt {after}"],es:["Reintentar","Antes {before} → Ahora {after}"],tr:["Tekrar dene","Önce {before} → Şimdi {after}"],"zh-CN":["再试一次","上次 {before} → 本次 {after}"],ko:["다시 도전","이전 {before} → 이번 {after}"],"pt-BR":["Tentar de novo","Antes {before} → Agora {after}"],ru:["Попробовать ещё","Было {before} → Сейчас {after}"]};for(const i of vs)to[i].again=cc[i][0],to[i].comparison=cc[i][1];function A0(){const i=new URLSearchParams(location.search).get("lang"),e=n=>n.toLowerCase().startsWith("zh")?"zh-CN":n.toLowerCase().startsWith("pt")?"pt-BR":n.split("-")[0];let t="";try{t=localStorage.getItem("odd-crafts-lang")??""}catch{}for(const n of[i,t,...navigator.languages,document.documentElement.lang,"en"]){if(!n)continue;const r=e(n);if(vs.includes(r))return document.documentElement.lang=r,r}return"en"}function E0(i,e){return(t,n={})=>{let r=t;for(const s of e)if(s[i]?.[t]!==void 0){r=s[i][t];break}return r.replace(/\{(\w+)\}/g,(s,a)=>String(n[a]??`{${a}}`))}}const Uo=1,Er="odd-craft-v2-";function Ji(i,e,t=null){try{localStorage.setItem(Er+i,JSON.stringify({version:Uo,state:e,result:t}))}catch{}}function T0(i){try{const e=localStorage.getItem(Er+i);if(!e)return null;const t=JSON.parse(e),n=t?.result;return t.version!==Uo||!n||typeof n.title!="string"||n.title.length>100||!Number.isFinite(n.score)||n.score<0||n.score>100||!Array.isArray(n.metrics)||n.metrics.length>6||!n.metrics.every(r=>r&&typeof r.label=="string"&&r.label.length<100&&typeof r.value=="number"&&Number.isFinite(r.value)&&(r.unit===void 0||typeof r.unit=="string"&&r.unit.length<10))?null:n}catch{return null}}function w0(i){try{const e=localStorage.getItem(Er+i);if(!e)return null;const t=JSON.parse(e);return t?.version===Uo?t.state:null}catch{return null}}function C0(i,e){if(Number.isFinite(e)&&e>=0&&e<=100)try{localStorage.setItem(Er+"previous-"+i,String(e))}catch{}}function R0(i){try{const e=localStorage.getItem(Er+"previous-"+i);if(e===null)return null;const t=Number(e);return Number.isFinite(t)&&t>=0&&t<=100?t:null}catch{return null}}const Dt=(i,e,t)=>Math.min(t,Math.max(e,i)),rs=()=>({item:0,folds:[0,0,0,0],tape:[],ribbon:!1,color:"#7b9c87",size:.35,damage:[0,0,0,0],anchors:[0,0,0,0],tension:0,finished:!1});function la(i,e){return(i.item===1?.79:i.item===2?.83:.88)-(i.item===0&&e===3?.07:i.item===1&&(e===0||e===1)?.05:i.item===2&&e===2?.09:0)+i.anchors[e]*.1}function P0(i,e,t){if(i.finished||!Number.isInteger(e)||e<0||e>3||!Number.isFinite(t))return!1;const n=Dt(t,0,1),r=i.folds[e],s=Math.max(0,n-la(i,e));return i.tension=Dt(n/la(i,e),0,1.4),n>r&&s>0&&(i.damage[e]=Dt(i.damage[e]+(n-Math.max(r,la(i,e)))*5,0,1)),i.folds[e]=n,Math.abs(n-r)>1e-4}function L0(i,e,t){if(i.finished||!Number.isFinite(e)||e<=0)return!1;let n=!1;for(let r=0;r<4;r++){if(r===t||i.anchors[r]>=.85||i.folds[r]<=.08)continue;const s=i.folds[r];i.folds[r]=Math.max(.08,s-Math.min(e,.1)*(.012+s*.034)*(1-i.anchors[r])),n=n||s!==i.folds[r]}return t<0&&(i.tension=Math.max(0,i.tension-Math.min(e,.1)*.7)),n}function hu(i,e){return Math.abs(i)>Math.abs(e)?i<0?0:1:e<0?2:3}function I0(i,e){if(i.finished||i.tape.length>=50||![e.x,e.z,e.angle,e.length].every(Number.isFinite))return!1;const t=hu(e.x,e.z);if(i.folds[t]<.25)return!1;const n={...e,corner:t,length:Dt(e.length,.12,2)};i.tape.push(n);const r=Dt(n.length/.75,.12,1);return i.anchors[t]=Dt(i.anchors[t]+r*.95,0,1),i.damage[t]=Math.max(0,i.damage[t]-r*.36),!0}function no(i){let e=0;const t=30,n=i.folds.map((r,s)=>r*.7*(1-i.damage[s]*.55));for(let r=0;r<t;r++)for(let s=0;s<t;s++){const a=(r+.5)/t,o=(s+.5)/t;(a<n[0]||1-a<n[1]||o<n[2]||1-o<n[3])&&e++}return Math.round(e/(t*t)*100)}const io=i=>i.tape.reduce((e,t)=>e+t.length*10,0),zi=i=>i.damage.filter(e=>e>.12).length;function D0(i){const e=no(i)/100,t=i.folds.reduce((r,s)=>r+s,0)/4,n=i.anchors.reduce((r,s)=>r+s,0)/4;return Math.round(Dt(e*55+t*25+n*16+(i.ribbon?4:0)-i.damage.reduce((r,s)=>r+s,0)*11-Math.max(0,io(i)-85)/3,0,100))}function U0(i){const e=rs();if(!i||typeof i!="object")return e;const t=i;Number.isInteger(t.item)&&(e.item=Dt(t.item,0,2));const n=r=>Array.isArray(r)&&r.length===4?r.map(s=>typeof s=="number"&&Number.isFinite(s)?Dt(s,0,1):0):[0,0,0,0];if(e.folds=n(t.folds),e.damage=n(t.damage),e.anchors=n(t.anchors),typeof t.color=="string"&&/^#[0-9a-f]{6}$/i.test(t.color)&&(e.color=t.color),typeof t.size=="number"&&Number.isFinite(t.size)&&(e.size=Dt(t.size,.03,1)),Array.isArray(t.tape)&&(e.tape=t.tape.filter(r=>r&&[r.x,r.z,r.angle,r.length].every(Number.isFinite)).slice(0,50).map(r=>({x:Dt(r.x,-2.4,2.4),z:Dt(r.z,-2.4,2.4),angle:Dt(r.angle,-Math.PI*2,Math.PI*2),length:Dt(r.length,.12,2),corner:hu(r.x,r.z)}))),!Array.isArray(t.anchors))for(const r of e.tape)e.anchors[r.corner]=Dt(e.anchors[r.corner]+r.length/.8,0,1);return e.ribbon=t.ribbon===!0,e.finished=t.finished===!0,e}const N0=["gift.title","gift.sub","gift.fold","gift.tape","gift.ribbon","gift.item","gift.hint","gift.cover","gift.length","gift.seal","gift.neat","gift.obvious","gift.mess"],F0={ja:["プレゼント、包めてない。","中身、隠せますか？","包む","テープ","リボン","中身を替える","紙の角から、中身へ引っ張る","上面カバー","テープ","折り込み","包装の名人","中身バレバレの贈り物","テープの錬金術師"],en:["Barely Wrapped","Can you hide what is inside?","Fold","Tape","Ribbon","Change gift","Pull a paper corner over the gift","Top covered","Tape","Folded","Gift-wrapping artisan","Absolutely no surprises","Tape alchemist"],fr:["À peine emballé","Peux-tu cacher le cadeau ?","Plier","Adhésif","Ruban","Changer","Tire un coin sur le cadeau","Dessus couvert","Adhésif","Plis","Artisan du cadeau","Aucune surprise","Alchimiste du scotch"],it:["Quasi incartato","Riesci a nascondere il regalo?","Piega","Nastro","Fiocco","Cambia","Trascina un angolo sul regalo","Copertura","Nastro","Pieghe","Artigiano dei regali","Nessuna sorpresa","Alchimista del nastro"],de:["Kaum verpackt","Kannst du den Inhalt verstecken?","Falten","Kleben","Schleife","Wechseln","Ziehe eine Ecke über das Geschenk","Abgedeckt","Klebeband","Falten","Geschenkprofi","Inhalt schon verraten","Klebeband-Alchemist"],es:["Casi envuelto","¿Puedes ocultar el regalo?","Doblar","Cinta","Lazo","Cambiar","Arrastra una esquina sobre el regalo","Cubierto","Cinta","Pliegues","Artesano del regalo","Sin ninguna sorpresa","Alquimista de la cinta"],tr:["Zor paket","İçindekini saklayabilir misin?","Katla","Bant","Kurdele","Değiştir","Kâğıdın köşesini hediyeye çek","Üst kaplama","Bant","Katlama","Paket ustası","Sürpriz kalmadı","Bant simyacısı"],"zh-CN":["礼物包不住了","能藏住里面的东西吗？","折纸","胶带","丝带","换礼物","把纸角向礼物中心拉","顶部覆盖","胶带","折叠","包装大师","毫无悬念的礼物","胶带炼金师"],ko:["포장이 다 보이네","내용물을 숨길 수 있나요?","접기","테이프","리본","바꾸기","종이 모서리를 선물 쪽으로 당겨요","윗면 덮기","테이프","접힘","포장의 장인","내용이 다 보이는 선물","테이프 연금술사"],"pt-BR":["Quase embrulhado","Dá para esconder o presente?","Dobrar","Fita","Laço","Trocar","Puxe uma ponta sobre o presente","Cobertura","Fita","Dobras","Artesão do embrulho","Sem surpresas","Alquimista da fita"],ru:["Почти упаковано","Сможешь спрятать подарок?","Сложить","Скотч","Бант","Сменить","Тяни угол бумаги на подарок","Покрытие","Скотч","Складки","Мастер упаковки","Никакого сюрприза","Алхимик скотча"]},du=Object.fromEntries(Object.entries(F0).map(([i,e])=>[i,Object.fromEntries(N0.map((t,n)=>[t,e[n]]))])),O0=["gift.risk","gift.tears","gift.held","gift.foldHint","gift.tapeHint","gift.tearHint","gift.ribbonHint","gift.advicePull","gift.adviceHold","gift.adviceNeat"],z0={ja:["引っぱり","破れ","留まった紙","丸い印を引く。戻る紙はテープで留める","折った紙の端に、テープをドラッグ","引きすぎで破れた。テープでその場所を補修","リボンは仕上げ。戻る紙を先に留めよう","次は赤くなる手前で止め、破れた側をやさしく包もう","次は戻ってしまった紙の端をテープで留めよう","同じ中身を、もっと少ないテープで包める？"],en:["Pull","Tears","Held folds","Pull a round grip. Tape keeps the paper folded","Drag tape over the edge of a folded flap","Pulled too far. Patch that tear with tape","Ribbon is decoration. Anchor loose folds first","Next time stop before the grip turns red and pull the torn side gently","Next time tape the flap that sprang back","Same gift, less tape next time?"],fr:["Tension","Déchirures","Plis fixés","Tirez une poignée. Fixez les plis avec du ruban","Glissez du ruban sur le bord replié","Trop tiré. Réparez cette déchirure","Le nœud décore. Fixez les plis d’abord","Arrêtez avant le rouge et tirez doucement du côté déchiré","Fixez le pli qui se rouvre","Le même cadeau avec moins de ruban ?"],it:["Tensione","Strappi","Pieghe ferme","Tira il cerchio. Il nastro trattiene la carta","Trascina il nastro sul bordo piegato","Troppa forza. Ripara lo strappo col nastro","Il fiocco decora. Prima fissa le pieghe","Fermati prima del rosso e tira piano sul lato strappato","Fissa la piega che si riapre","Lo stesso regalo con meno nastro?"],de:["Zug","Risse","Fixiert","Ziehe am Ring. Klebeband hält die Falten","Ziehe Klebeband über einen gefalteten Rand","Zu weit gezogen. Flicke den Riss","Die Schleife schmückt. Fixiere erst lose Falten","Stoppe vor Rot und ziehe an der gerissenen Seite sanfter","Klebe die Falte fest, die zurücksprang","Gleiches Geschenk mit weniger Klebeband?"],es:["Tensión","Roturas","Pliegues fijos","Tira del círculo. La cinta sujeta el papel","Arrastra cinta por el borde doblado","Tiraste demasiado. Repara la rotura","El lazo decora. Fija antes los pliegues","Para antes del rojo y tira más suave del lado roto","Fija el pliegue que volvió a abrirse","¿El mismo regalo con menos cinta?"],tr:["Çekiş","Yırtık","Sabit kat","Halkayı çek. Bant kâğıdı katlı tutar","Katlanan kenara bant sürükle","Çok çektin. Yırtığı bantla onar","Kurdele süstür. Önce katları sabitle","Kırmızıdan önce dur ve yırtılan tarafı nazikçe çek","Geri açılan katı bantla sabitle","Aynı hediye, daha az bant?"],"zh-CN":["拉力","破口","已固定","拉动圆环，用胶带固定回弹的纸","在折起的纸边拖动胶带","拉得太过，给破口贴上胶带","丝带只是装饰，先固定纸边","下次在变红前停下，轻拉破损的一侧","下次先贴住回弹的纸边","下次能用更少胶带包住同一件礼物吗？"],ko:["당기는 힘","찢어진 곳","고정한 면","둥근 손잡이를 당기고 테이프로 고정해요","접힌 종이 끝에 테이프를 드래그해요","너무 당겼어요. 찢어진 곳을 붙여요","리본은 장식이에요. 종이부터 고정해요","다음에는 빨개지기 전에 멈추고 찢어진 쪽을 살살 당겨요","다음에는 되돌아간 종이 끝부터 붙여요","같은 선물을 더 적은 테이프로 포장할까요?"],"pt-BR":["Tensão","Rasgos","Dobras presas","Puxe o círculo. A fita segura a dobra","Arraste fita sobre a borda dobrada","Puxou demais. Remende o rasgo","O laço enfeita. Prenda as dobras antes","Pare antes do vermelho e puxe de leve o lado rasgado","Prenda a dobra que voltou a abrir","O mesmo presente com menos fita?"],ru:["Натяжение","Разрывы","Закреплено","Тяните за кольцо. Скотч удержит сгиб","Ведите скотч по сложенному краю","Слишком сильно. Заклейте разрыв","Бант украшает. Сначала закрепите сгибы","В следующий раз остановитесь до красного и тяните мягче","Заклейте сгиб, который раскрылся","Тот же подарок с меньшим расходом скотча?"]};for(const[i,e]of Object.entries(z0))Object.assign(du[i],Object.fromEntries(O0.map((t,n)=>[t,e[n]])));function B0(i){let e=rs(),t=!1,n=-1,r=null,s=0,a=0,o=null;const l=new At,c=new At,h=new At,f=new At;l.add(c,h,f);const u=[],d=(I,k,ue=.7)=>{const ge=i.material(I,k,ue);return u.push(ge),ge},v=d(e.color,0);v.side=sn;const y=d("#f3e8d5",0),m=d("#65716e",void 0,.25),p=d("#b47e4a",0),M=d("#56876b",2),w=d("#b8694c",3),x=d("#cfa85b",void 0,.32),b=d("#ead3a3",0,.4),E=d("#f2e7c1",0,.3);E.transparent=!0,E.opacity=.75;function C(I,k,ue,ge=0,Ge=0,Pe=0){const Ee=new it(I,k);return Ee.position.set(ge,Ge,Pe),Ee.castShadow=!0,Ee.receiveShadow=!0,ue.add(Ee),Ee}function _(I){I.traverse(k=>{k instanceof it&&k.geometry.dispose()}),I.clear()}function A(){if(_(c),e.item===0){C(new bt(.94,1,.2,64),m,c,0,.3,0),C(new bt(.84,.84,.02,64),d("#343c39"),c,0,.405,0),C(new Pt(.27,.18,1.45),p,c,0,.32,1.5),C(new on(.9,.06,8,64),x,c,0,.42,0).rotation.x=Math.PI/2,C(new Sn(.4,32,16),y,c,-.12,.46,-.1).scale.set(1.5,.12,.95);const k=C(new Sn(.2,24,16),d("#e8ac40"),c,-.2,.51,-.1);k.scale.y=.4}else if(e.item===1){C(new bt(.46,.32,.7,32),w,c,0,.36,0),C(new on(.45,.05,8,32),w,c,0,.71,0).rotation.x=Math.PI/2,C(new hr(.27,.9,8,24),M,c,0,1.1,0);const I=C(new hr(.17,.5,8,16),M,c,-.4,.99,0);I.rotation.z=.8;const k=C(new hr(.15,.45,8,16),M,c,.35,1.25,0);k.rotation.z=-.85;for(let ue=0;ue<25;ue++){const ge=ue*2.4;C(new ps(.018,.11,4),y,c,Math.sin(ge)*.28,.85+ue%6*.15,Math.cos(ge)*.28).rotation.x=ge}}else{C(new Pt(1.2,.18,1.15),p,c,0,.6,0),C(new Pt(1.15,1.1,.17),p,c,0,1.13,-.51);for(const I of[-.47,.47])for(const k of[-.44,.44])C(new bt(.07,.06,.65,10),p,c,I,.27,k);for(const I of[-.4,0,.4])C(new Pt(.08,.9,.05),x,c,I,1.1,-.4)}}const R=[],F=[],O=[-1,-1,-1,-1],G=[];for(let I=0;I<4;I++){const k=new gi(2.25,2.4,12,16);k.rotateX(-Math.PI/2);const ue=new it(k,v);ue.castShadow=!0,ue.receiveShadow=!0,h.add(ue),R.push(ue)}for(const I of R)F.push(Array.from(I.geometry.index.array));for(let I=0;I<4;I++){const k=C(new on(.115,.025,8,24),d("#c1a65e"),h);k.rotation.x=-Math.PI/2,G.push(k)}const U=C(new Pt(2.25,.018,2.25),v,h,0,.015,0);function H(){v.color.set(e.color),U.material=v,R.forEach((I,k)=>{const ue=I.geometry.attributes.position,ge=ue.array,Ge=e.folds[k],Pe=Ge*Math.PI*.92,Ee=k<2?k===0?-1:1:k===2?-1:1,$=e.item===1?1.15:e.item===2?.75:.5;for(let Ie=0;Ie<ue.count;Ie++){const Ke=Ie%13/12*2.25-1.125,Fe=Math.floor(Ie/13)/16*2.4,Be=Fe,We=1.12+Math.cos(Pe)*Be,ke=.025+Math.sin(Pe)*Be+Math.sin(Math.PI*Fe/2.4)*Ge*.12;ge[Ie*3]=k<2?Ee*We:Ke,ge[Ie*3+2]=k<2?Ke:Ee*We,ge[Ie*3+1]=Math.min($+.08,ke)}if(ue.needsUpdate=!0,I.geometry.computeVertexNormals(),Math.abs(e.damage[k]-O[k])>.025){const Ie=e.damage[k],Ke=F[k],Fe=[];for(let Be=0;Be<Ke.length;Be+=3){const We=Ke[Be],ke=We%13/12*2.25-1.125,rt=Math.floor(We/13)/16*2.4;Ie>.08&&rt>.48&&rt<1.6&&Math.abs(ke+Math.sin(rt*13)*.1)<Ie*.55||Fe.push(Ke[Be],Ke[Be+1],Ke[Be+2])}I.geometry.setIndex(Fe),O[k]=Ie}const ne=1.65,he=1.12+Math.cos(Pe)*ne,Re=Math.min($+.1,.04+Math.sin(Pe)*ne);G[k].position.set(k<2?Ee*he:k===2?-.6:.6,Re,k<2?k===0?-.6:.6:Ee*he);const Me=e.anchors[k]>=.85?"#547d65":k===n&&e.tension>.92?"#b75543":"#c1a65e";G[k].material.color.set(Me)})}function K(){_(f);for(const I of[...e.tape,...o?[o]:[]]){const k=C(new Pt(I.length,.025,.14+e.size*.15),E,f,I.x,e.item===1?1.37:e.item===2?.93:.68,I.z);k.rotation.y=I.angle}if(e.ribbon){const I=e.item===1?1.53:e.item===2?1.78:.75;C(new Pt(2.3,.04,.18),b,f,0,I,0),C(new Pt(.18,.04,2.3),b,f,0,I+.02,0);for(const k of[-1,1]){const ue=new $c([new L(0,I+.1,0),new L(k*.55,I+.4,-.1),new L(k*.58,I+.15,.2),new L(0,I+.1,0)]);C(new Io(ue,25,.07,7,!1),b,f)}C(new Sn(.13,16,12),x,f,0,I+.1,0)}}function J(){H(),K(),i.changed()}const V={id:"gift",group:l,title:"gift.title",subtitle:"gift.sub",get hint(){return V.activeTool==="tape"?"gift.tapeHint":V.activeTool==="ribbon"?"gift.ribbonHint":zi(e)>0?"gift.tearHint":"gift.foldHint"},tools:[{id:"fold",label:"gift.fold"},{id:"tape",label:"gift.tape"},{id:"ribbon",label:"gift.ribbon"},{id:"item",label:"gift.item"}],activeTool:"fold",color:e.color,size:e.size,palette:["#7b9c87","#cd8e89","#a1a5c4","#c9a16b","#ede0c5","#8ba5a7"],selectTool(I){if(V.cancelPointer?.(),I==="item"){const k=e;e={...rs(),item:(k.item+1)%3,color:k.color,size:k.size},O.fill(-1),A(),J(),i.cue("place");return}V.activeTool=I,I==="ribbon"&&(e.ribbon=!e.ribbon,J(),i.cue("place"))},setColor(I){e.color=I,V.color=I,J()},setSize(I){e.size=Dt(I,.03,1),V.size=e.size},pointerDown(I){if(!e.finished){if(t=!0,r=I,V.activeTool==="fold"){let k=-1,ue=.75;G.forEach((Pe,Ee)=>{const $=Math.hypot(Pe.position.x-I.x,Pe.position.z-Pe.position.y*8/7.9-I.z);$<ue&&(ue=$,k=Ee)});const ge=Math.abs(I.x),Ge=Math.abs(I.z);n=k>=0?k:Math.max(ge,Ge)<1.2?-1:ge>Ge?I.x<0?0:1:I.z<0?2:3,n>=0&&(s=e.folds[n],a=n<2?I.x:I.z)}else if(V.activeTool==="tape"&&e.tape.length<50){const k=e.item===1?1.37:e.item===2?.93:.68;r={...I,z:I.z+k*8/7.9},Math.abs(r.x)<1.5&&Math.abs(r.z)<1.5&&(o={x:r.x,z:r.z,angle:0,length:.15},K())}}},pointerMove(I){if(!(!t||e.finished)){if(V.activeTool==="fold"&&n>=0){const k=n<2?I.x:I.z,ue=n===0||n===2?-1:1,ge=zi(e);P0(e,n,s+(a-k)*ue/3.45),zi(e)>ge&&i.cue("undo"),H(),i.changed()}else if(V.activeTool==="tape"&&r&&o){const k=e.item===1?1.37:e.item===2?.93:.68,ue={...I,z:I.z+k*8/7.9},ge=ue.x-r.x,Ge=ue.z-r.z;o.length=Dt(Math.hypot(ge,Ge),.15,2),o.angle=-Math.atan2(Ge,ge),o.x=Dt((ue.x+r.x)/2,-1.4,1.4),o.z=Dt((ue.z+r.z)/2,-1.4,1.4),K(),i.changed()}}},pointerUp(){o&&(i.cue(I0(e,o)?"place":"undo"),o=null,K()),t=!1,n=-1,r=null,i.changed()},cancelPointer(){t=!1,n=-1,r=null,o=null,K()},update(I){L0(e,I,t?n:-1)&&(H(),i.changed())},metrics:()=>[{label:"gift.cover",value:no(e),unit:"%"},{label:"gift.tears",value:zi(e)},{label:t&&n>=0?"gift.risk":"gift.held",value:t&&n>=0?Math.round(e.tension*100):e.anchors.filter(I=>I>=.85).length,unit:t&&n>=0?"%":"/4"}],canFinish:()=>e.folds.some(I=>I>.15)||e.tape.length>0,finish(){e.finished=!0;const I=D0(e);return{title:io(e)>180?"gift.mess":I>82?"gift.neat":"gift.obvious",metrics:[{label:"gift.cover",value:no(e),unit:"%"},{label:"gift.tears",value:zi(e)},{label:"gift.length",value:Math.round(io(e)),unit:"cm"}],score:I,advice:zi(e)>0?"gift.advicePull":e.anchors.some(k=>k<.85)?"gift.adviceHold":"gift.adviceNeat"}},reset(){e={...rs(),item:e.item,color:e.color,size:e.size},V.color=e.color,V.size=e.size,V.activeTool="fold",O.fill(-1),A(),J()},snapshot:()=>structuredClone(e),restore(I){e=U0(I),V.color=e.color,V.size=e.size,O.fill(-1),A(),J()},dispose(){for(const I of[c,h,f])_(I);for(const I of u)I.dispose()}};return A(),H(),V}const yt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Qe=65,rn=1.28,It=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Qt=i=>typeof i=="number"&&Number.isFinite(i),hs=i=>typeof i=="string"&&/^#[\da-f]{6}$/i.test(i);function uc(){return{version:1,depth:Array(Qe*Qe).fill(0),ink:Array(Qe*Qe).fill(0),distance:0,impressions:[]}}function hc(i){return Qt(i.x)&&Qt(i.z)&&Math.abs(i.x)<=rn&&Math.abs(i.z)<=rn}function k0(i,e,t,n){if(!Qt(i.x)||!Qt(i.z)||!Qt(e.x)||!Qt(e.z)||!Qt(t))return;const r=It(t,.018,.3),s=e.x-i.x,a=e.z-i.z,o=s*s+a*a,l=rn*2/(Qe-1),c=Math.max(0,Math.floor((Math.min(i.x,e.x)-r+rn)/l)),h=Math.min(Qe-1,Math.ceil((Math.max(i.x,e.x)+r+rn)/l)),f=Math.max(0,Math.floor((Math.min(i.z,e.z)-r+rn)/l)),u=Math.min(Qe-1,Math.ceil((Math.max(i.z,e.z)+r+rn)/l));for(let d=f;d<=u;d++)for(let v=c;v<=h;v++){const y=v*l-rn,m=d*l-rn,p=o>1e-10?It(((y-i.x)*s+(m-i.z)*a)/o):0,M=Math.hypot(y-i.x-s*p,m-i.z-a*p);M<r&&n(d*Qe+v,Math.pow(1-M/r,.52))}}function G0(i,e,t,n,r){if(!hc(e)&&!hc(t)||!Qt(r))return!1;let s=!1;return k0(e,t,n,(a,o)=>{const l=i.depth[a]??0,c=Math.max(l,o*(.43+.57*It(r)));c>l+.001&&(i.depth[a]=c,i.ink[a]=0,s=!0)}),s&&(i.distance+=Math.min(3.65,Math.hypot(t.x-e.x,t.z-e.z))),s}function ro(i){return i.depth.filter(e=>e>.16).length/i.depth.length}function V0(i){let e=!1;return i.ink=i.depth.map(t=>t>.12?(e=!0,1):0),e}const ca=i=>Qt(i)?It(i/1.65):0;function H0(i,e){if(![e.x,e.z,e.angle,e.pressure,e.wobble].every(Qt)||!hs(e.color)||ro(i)<.002||i.impressions.length>=12)return null;const t=It(e.pressure),n=It(e.wobble),r=It(e.angle,-Math.PI,Math.PI),s=It(t/.56),a=It((t-.76)/.24),o=i.depth.map((y,m)=>{if(y<=.12)return 0;const p=m%Qe/(Qe-1)*2-1,M=Math.floor(m/Qe)/(Qe-1)*2-1,w=It(s-.1+(t<.56?.22:.07)*p-n*.35*(1+M*.5));return It((i.ink[m]??0)*Math.min(1,y*1.7)*w)}),l=It(a*.9+n*.65),c=Math.ceil(l*4),h=[...o];if(c>0)for(let y=0;y<o.length;y++){const m=o[y]??0;if(m<.01)continue;const p=y%Qe,M=Math.floor(y/Qe);for(let w=-c;w<=c;w++)for(let x=-c;x<=c;x++){const b=Math.hypot(x,w);if(b===0||b>c)continue;const E=p+x,C=M+w;if(E<0||E>=Qe||C<0||C>=Qe)continue;const _=C*Qe+E;h[_]=Math.max(h[_]??0,m*l*(1-b/(c+1)))}}let f=0,u=0;for(let y=0;y<h.length;y++){const m=h[y]??0;u+=m,(i.depth[y]??0)<=.12&&(f+=m)}const d=u?It(f/u*2.4):0,v={x:It(e.x,-1.5,1.5),z:It(e.z,-1.3,1.3),angle:r,pressure:t,wobble:n,color:e.color,pixels:h,bleed:d};return i.impressions.push(v),i.ink=i.ink.map(y=>y*.61),v}function dc(i){const e=i.depth.filter(h=>h>.16).length,t=i.impressions[i.impressions.length-1],n=t&&e?t.pixels.reduce((h,f,u)=>h+((i.depth[u]??0)>.16?f:0),0)/e:0,r=t?It(1-Math.abs(t.angle)/1.05-Math.hypot(t.x,t.z)*.28-t.wobble*.35):0,s=It(e/75)*It((.7-ro(i))/.3),a=t?.bleed??0,o=t?Math.round(It(n)*(58+r*27+s*15)*(1-a*.78)):0,l=t?a>.26?"stamp.title.blob":n<.35?"stamp.title.ghost":Math.abs(t.angle)>.45?"stamp.title.rebel":n>.78&&r>.78?"stamp.title.master":i.impressions.length>4?"stamp.title.bureaucracy":"stamp.title.signature":"stamp.title.unpressed",c=t?a>.15?"stamp.advice.heavy":t.wobble>.2||r<.72?"stamp.advice.wobble":n<.7?"stamp.advice.short":"stamp.advice.clean":"stamp.advice.carve";return{score:o,title:l,carved:Math.round(ro(i)*100),printed:Math.round(n*100),alignment:Math.round(r*100),bleed:Math.round(a*100),advice:c}}function W0(i){if(!i||typeof i!="object")return null;const e=i,t=Qe*Qe,n=r=>Array.isArray(r)&&r.length===t&&r.every(s=>Qt(s)&&s>=0&&s<=1);if(e.version!==1||!n(e.depth)||!n(e.ink)||!Qt(e.distance)||e.distance<0||e.distance>1e6||!Array.isArray(e.impressions)||e.impressions.length>12)return null;for(const r of e.impressions)if(!r||typeof r!="object"||![r.x,r.z,r.angle,r.pressure,r.wobble].every(Qt)||Math.abs(r.x)>1.5||Math.abs(r.z)>1.3||Math.abs(r.angle)>Math.PI||r.pressure<0||r.pressure>1||r.wobble<0||r.wobble>1||!hs(r.color)||!n(r.pixels)||r.bleed!==void 0&&(!Qt(r.bleed)||r.bleed<0||r.bleed>1))return null;return{version:1,depth:[...e.depth],ink:[...e.ink],distance:e.distance,impressions:e.impressions.map(r=>({...r,pixels:[...r.pixels]}))}}const X0={ja:["ハンコ、クセ強すぎ。","彫った線を、自分の印に。","彫る","朱肉","押す","線をゆっくり彫る。太さで表情が変わる","彫ったところを、何度かなぞってインクを入れる","長押しで下ろす。ゆっくり動かし、離して押印","彫った面","インク","印影","整い","まだ押していない職人","気配だけの認印","斜め上をいく決裁印","印影の名工","承認しすぎの達人","私だけの落款"],en:["A very personal seal","Carve a line. Leave your mark.","Carve","Ink","Press","Carve slowly. Change the size to shape each line.","Brush ink into the grooves. More passes load more ink.","Hold to lower. Move gently, then release to print.","Carved","Ink","Print","Poise","An untested artisan","A ghost of approval","A rebel rubber stamp","Master of impressions","Bureaucracy unleashed","Your own signature"],fr:["Un sceau bien à vous","Gravez un trait. Laissez votre marque.","Graver","Encrer","Presser","Gravez lentement. La taille change le trait.","Repassez sur les creux pour les encrer.","Maintenez pour abaisser. Relâchez pour imprimer.","Gravé","Encre","Empreinte","Aplomb","Artisan sans empreinte","Un fantôme de cachet","Le cachet rebelle","Maître des empreintes","Trop de tampons","Votre signature"],it:["Un timbro tutto tuo","Incidi una linea. Lascia il segno.","Incidi","Inchiostra","Premi","Incidi piano. La misura cambia la linea.","Ripassa i solchi per riempirli di inchiostro.","Tieni per abbassare. Rilascia per stampare.","Inciso","Inchiostro","Impronta","Equilibrio","Artigiano da scoprire","Un fantasma di timbro","Il timbro ribelle","Maestro di impronte","Troppi timbri","La tua firma"],de:["Ein eigenwilliger Stempel","Ritze Linien. Hinterlasse Spuren.","Ritzen","Färben","Drücken","Langsam ritzen. Die Größe ändert den Strich.","Mehrfach über die Rillen fahren, um sie einzufärben.","Halten zum Senken. Zum Stempeln loslassen.","Geritzt","Farbe","Abdruck","Haltung","Noch ohne Abdruck","Ein Hauch von Stempel","Der schräge Stempel","Meister der Abdrücke","Stempelwut","Deine Unterschrift"],es:["Un sello con carácter","Graba una línea. Deja tu huella.","Grabar","Entintar","Estampar","Graba despacio. El tamaño cambia cada trazo.","Repasa las ranuras para cargarlas de tinta.","Mantén para bajar. Suelta para estampar.","Grabado","Tinta","Huella","Aplomo","Artesano sin probar","Un fantasma de sello","El sello rebelde","Maestro de huellas","Demasiados sellos","Tu propia firma"],tr:["Kendine has mühür","Bir çizgi oy. İzini bırak.","Oy","Mürekkeple","Bas","Yavaşça oy. Boyut, çizgiyi değiştirir.","Oyukları birkaç kez boya, mürekkep dolsun.","İndirmek için tut. Basmak için bırak.","Oyulan","Mürekkep","Baskı","Denge","Henüz iz bırakmayan","Hayalet onay","Asi mühür","İzlerin ustası","Fazla onay","Kendi imzan"],"zh-CN":["这印章，太有个性了","刻下线条，留下自己的印记。","刻线","上色","盖章","慢慢刻线，调整粗细改变笔触","反复涂过刻线，让凹槽吸满印泥","按住降下印章，慢慢移动，松开盖下","刻面","印泥","印迹","端正","尚未落印的匠人","若隐若现的印章","不走直路的印章","印迹大师","盖章狂人","专属落款"],ko:["개성 넘치는 도장","선을 새겨 나만의 흔적을.","새기기","잉크","찍기","천천히 새겨요. 크기로 선의 느낌을 바꿔요","새긴 선을 여러 번 칠해 잉크를 채워요","길게 눌러 내리고, 천천히 움직인 뒤 놓아요","새긴 면","잉크","인영","반듯함","아직 찍지 않은 장인","희미한 승인","삐딱한 결재 도장","인영의 명인","승인 과다 달인","나만의 낙관"],"pt-BR":["Um carimbo com atitude","Grave uma linha. Deixe sua marca.","Gravar","Entintar","Carimbar","Grave devagar. O tamanho muda o traço.","Passe várias vezes nos sulcos para carregar a tinta.","Segure para baixar. Solte para carimbar.","Gravado","Tinta","Impressão","Firmeza","Artesão sem teste","Um fantasma de carimbo","O carimbo rebelde","Mestre das impressões","Carimbou demais","Sua assinatura"],ru:["Печать с характером","Вырежьте линию. Оставьте свой след.","Резать","Краска","Оттиск","Режьте медленно. Размер меняет линию.","Проведите по канавкам несколько раз для окраски.","Удерживайте для спуска. Отпустите для оттиска.","Резьба","Краска","Оттиск","Ровность","Мастер без оттиска","Призрачная печать","Бунтарский штамп","Мастер оттисков","Слишком много печатей","Ваша подпись"]},q0=["stamp.title","stamp.subtitle","stamp.tool.carve","stamp.tool.ink","stamp.tool.press","stamp.hint.carve","stamp.hint.ink","stamp.hint.press","stamp.metric.carved","stamp.metric.ink","stamp.metric.print","stamp.metric.poise","stamp.title.unpressed","stamp.title.ghost","stamp.title.rebel","stamp.title.master","stamp.title.bureaucracy","stamp.title.signature"],so=Object.fromEntries(Object.entries(X0).map(([i,e])=>[i,Object.fromEntries(q0.map((t,n)=>[t,e[n]??t]))])),Y0=["stamp.metric.pressure","stamp.metric.bleed","stamp.hint.ready","stamp.hint.short","stamp.hint.sweet","stamp.hint.heavy","stamp.hint.reveal","stamp.advice.carve","stamp.advice.short","stamp.advice.heavy","stamp.advice.wobble","stamp.advice.clean","stamp.title.blob","stamp.tool.new","stamp.paper.title","stamp.paper.body","stamp.paper.line"],K0={ja:["押圧","にじみ","押しすぎるとにじむ。緑で指を離そう","まだ薄い。じわっと押そう","今、離すとくっきり！","押しすぎ！インクが広がる","持ち上げると、あなたの印","まず好きな線を彫ってみよう","次は少し長く押して、緑で離そう","次は少し早く離すと、にじみを減らせる","次は手元を動かさずに押してみよう","次は同じ印面で、もっと狙った場所へ","承認がはみ出した決裁印","新しい印面","重要決裁","今日はもう帰ります","この印で承認"],en:["Pressure","Bleed","Too much pressure bleeds. Release in green.","Still faint. Press a little longer.","Release now for a clear mark!","Too much! The ink is spreading.","Lift to reveal your own mark","Carve a line of your own first.","Next time, hold a little longer and release in green.","Release earlier next time to reduce bleeding.","Next time, keep the handle still as you press.","Try the same design in a more deliberate position.","Approval, overflowing","New plate","IMPORTANT DECISION","I am going home now","APPROVED BY THIS MARK"],fr:["Pression","Bavure","Trop fort, ça bave. Relâchez dans le vert.","Encore pâle. Pressez un peu plus.","Relâchez pour une empreinte nette !","Trop fort ! L’encre s’étale.","Soulevez pour révéler votre marque","Gravez d’abord votre propre trait.","Gardez un peu plus longtemps et relâchez dans le vert.","Relâchez plus tôt pour réduire les bavures.","Gardez la poignée immobile au prochain essai.","Reprenez ce motif à un emplacement mieux choisi.","Approbation débordante","Nouvelle plaque","DÉCISION IMPORTANTE","Je rentre chez moi","APPROUVÉ PAR CETTE MARQUE"],it:["Pressione","Sbavatura","Troppo forte sbava. Rilascia nel verde.","Ancora tenue. Premi un po’ di più.","Rilascia ora per un segno nitido!","Troppo! L’inchiostro si allarga.","Solleva e scopri il tuo segno","Incidi prima una linea tutta tua.","Tieni un po’ più a lungo e rilascia nel verde.","Rilascia prima per ridurre le sbavature.","Tieni ferma l’impugnatura al prossimo tentativo.","Riprova lo stesso disegno in un punto più preciso.","Approvazione traboccante","Nuova lastra","DECISIONE IMPORTANTE","Ora torno a casa","APPROVATO DA QUESTO SEGNO"],de:["Druck","Verlaufen","Zu viel Druck verwischt. Im Grün loslassen.","Noch blass. Etwas länger drücken.","Jetzt loslassen für einen klaren Abdruck!","Zu viel! Die Farbe verläuft.","Anheben und deinen Abdruck sehen","Ritze zuerst deine eigene Linie.","Nächstes Mal etwas länger drücken und im Grün loslassen.","Früher loslassen, damit weniger Farbe verläuft.","Halte den Griff beim nächsten Druck still.","Probiere dasselbe Motiv an einer gezielten Stelle.","Überlaufende Genehmigung","Neue Platte","WICHTIGE ENTSCHEIDUNG","Ich gehe jetzt nach Hause","DURCH DIESES ZEICHEN GENEHMIGT"],es:["Presión","Mancha","Demasiada presión mancha. Suelta en verde.","Aún tenue. Presiona un poco más.","¡Suelta ahora para una marca nítida!","¡Demasiado! La tinta se extiende.","Levanta para descubrir tu marca","Graba primero una línea propia.","Mantén un poco más y suelta en verde.","Suelta antes para reducir las manchas.","Mantén quieto el mango la próxima vez.","Prueba el mismo diseño en un lugar más preciso.","Aprobación desbordada","Placa nueva","DECISIÓN IMPORTANTE","Ya me voy a casa","APROBADO CON ESTA MARCA"],tr:["Basınç","Taşma","Fazla basınç yayar. Yeşilde bırak.","Hâlâ silik. Biraz daha bas.","Net iz için şimdi bırak!","Fazla! Mürekkep yayılıyor.","Kaldır ve kendi izini gör","Önce kendine ait bir çizgi oy.","Biraz daha uzun basıp yeşilde bırak.","Taşmayı azaltmak için daha erken bırak.","Bir sonraki baskıda sapı sabit tut.","Aynı deseni daha bilinçli bir yere bas.","Taşan onay","Yeni plaka","ÖNEMLİ KARAR","Artık eve gidiyorum","BU İZLE ONAYLANDI"],"zh-CN":["压力","晕墨","太用力会晕墨，绿色时松手","还很淡，再轻轻按一会儿","现在松手，印迹更清楚！","太用力了！印泥正在扩散","提起印章，看看你的印迹","先刻一条自己的线吧","下次稍微多按一会儿，在绿色时松手","下次早点松手，减少晕墨","下次盖章时，试着稳住手柄","用同一块印面，试试更合适的位置","批准得溢出来了","新印面","重要决策","我今天先回家了","以此印批准"],ko:["압력","번짐","너무 누르면 번져요. 초록색에서 놓아요","아직 흐려요. 조금 더 눌러요","지금 놓으면 선명해요!","너무 눌렀어요! 잉크가 퍼져요","들어 올려 나의 인영을 봐요","먼저 나만의 선을 새겨요","다음엔 조금 더 누르고 초록색에서 놓아요","다음엔 조금 일찍 놓아 번짐을 줄여요","다음엔 손잡이를 움직이지 않고 눌러요","같은 도안으로 더 원하는 위치에 찍어봐요","승인이 넘쳐버린 도장","새 판","중요 결재","오늘은 이만 퇴근합니다","이 도장으로 승인"],"pt-BR":["Pressão","Borrão","Pressão demais borra. Solte no verde.","Ainda fraco. Aperte mais um pouco.","Solte agora para uma marca nítida!","Demais! A tinta está se espalhando.","Levante e veja sua marca","Grave primeiro uma linha sua.","Segure um pouco mais e solte no verde.","Solte antes para reduzir o borrão.","Mantenha o cabo parado na próxima vez.","Tente o mesmo desenho em um ponto mais preciso.","Aprovação transbordando","Nova placa","DECISÃO IMPORTANTE","Já vou para casa","APROVADO POR ESTA MARCA"],ru:["Нажим","Растекание","Сильный нажим мажет. Отпустите на зелёном.","Ещё бледно. Нажмите чуть дольше.","Отпустите сейчас для чёткого следа!","Слишком сильно! Краска растекается.","Поднимите и увидьте свой оттиск","Сначала вырежьте свою линию.","В следующий раз держите дольше и отпустите на зелёном.","Отпустите раньше, чтобы краска меньше растекалась.","В следующий раз держите ручку неподвижно.","Попробуйте тот же рисунок в более точном месте.","Одобрение через край","Новая пластина","ВАЖНОЕ РЕШЕНИЕ","Я уже иду домой","ОДОБРЕНО ЭТИМ ЗНАКОМ"]};for(const i of Object.keys(so))Y0.forEach((e,t)=>{so[i][e]=K0[i][t]});const fc={ja:"帰宅許可",en:"LEAVE",fr:"CONGÉ",it:"USCITA",de:"FREI",es:"SALIDA",tr:"PAYDOS","zh-CN":"下班许可",ko:"퇴근 허가","pt-BR":"FOLGA",ru:"ДОМОЙ"};function Z0(i){let e=uc();const t=new At,n=new At,r=new At,s=[],a=[];let o=null;const l=new Set;let c=!1,h=null,f=0,u=!1,d=!1,v=0,y=!1,m=!1,p=null,M=0,w=0,x=0,b=0,E=0,C=0,_=0;const A=new wt,R=new Float32Array(Qe*Qe*3),F=new Float32Array(R.length),O=new Float32Array(Qe*Qe*2),G=[];for(let N=0;N<Qe;N++)for(let X=0;X<Qe;X++){const re=N*Qe+X;R[re*3]=(X/(Qe-1)*2-1)*rn,R[re*3+2]=(N/(Qe-1)*2-1)*rn,O[re*2]=X/(Qe-1),O[re*2+1]=N/(Qe-1),N<Qe-1&&X<Qe-1&&G.push(re,re+Qe,re+1,re+1,re+Qe,re+Qe+1)}A.setAttribute("position",new Zt(R,3)),A.setAttribute("color",new Zt(F,3)),A.setAttribute("uv",new Zt(O,2)),A.setIndex(G);const U=i.material("#dfbba1",1,.9);U.vertexColors=!0;const H=new it(A,U);H.receiveShadow=!0,H.castShadow=!0,n.add(H);const K=i.material("#9e5338",1,.72),J=i.material("#ce9a62",1,.52),ie=i.material("#753b24",1,.66),V=(N,X,re,_e,P,oe,te,pe=n)=>{const xe=new it(new Pt(N,X,re),_e);return xe.position.set(P,oe,te),xe.castShadow=!0,xe.receiveShadow=!0,pe.add(xe),xe};V(2.66,.24,2.66,K,0,-.065,0);for(const N of[-1,1])V(2.66,.18,.04,K,0,.13,N*1.31),V(.04,.18,2.66,K,N*1.31,.13,0);for(const N of[-1,1])V(2.76,.075,.07,J,0,.18,N*1.345),V(.07,.075,2.76,J,N*1.345,.18,0);const I=new At,k=new it(new bt(.27,.39,.65,24),ie);k.position.y=-.42,k.castShadow=!0,I.add(k);const ue=new it(new Sn(.42,28,16),ie);ue.scale.set(1,.72,1),ue.position.y=-.85,ue.castShadow=!0,I.add(ue),I.visible=!1,n.add(I);const ge=new it(new bt(.4,.4,.09,28),J);ge.position.y=-.12,I.add(ge),n.position.set(0,.17,-.18),t.add(n);const Ge=i.material("#fff8eb",0,.98),Pe=V(4.35,.025,3.96,Ge,0,-.015,0,t),Ee=V(4.48,.065,4.1,i.material("#d5b29a",0,.96),0,-.06,0,t);Ee.rotation.y=-.035,Pe.receiveShadow=!0;const $=i.material("#e4d5ba",void 0,1);for(const N of[-1,1])V(4.03,.008,.016,$,0,.004,N*1.83,t),V(.016,.008,3.66,$,N*2.015,.004,0,t);const ne=document.createElement("canvas");ne.width=1024,ne.height=1024;const he=ne.getContext("2d");if(he){const N=new Vh(ne);N.colorSpace=Wt,a.push(N);const X=document.querySelector(".stage"),re=fc[document.documentElement.lang]??fc.en,_e=()=>{he.clearRect(0,0,1024,1024),he.textAlign="center",he.fillStyle="#6d6657",he.font="600 256px sans-serif";const te=Math.min(256,256*900/Math.max(1,he.measureText(re).width));he.font=`600 ${te}px sans-serif`;const pe=he.measureText(re),xe=X?.clientWidth??0,ae=X?.clientHeight??0,Ne=xe>0&&ae>0?Math.max(5.6,6.8/(xe/ae)):1/0;(pe.actualBoundingBoxAscent+pe.actualBoundingBoxDescent)/1024*3.93*(7.9/Math.hypot(7.9,8))*ae/Ne>=14&&he.fillText(re,512,260),he.strokeStyle="#a7977b",he.lineWidth=3,he.beginPath(),he.moveTo(76,300),he.lineTo(948,300),he.stroke(),N.needsUpdate=!0};_e(),X&&typeof ResizeObserver<"u"&&(o=new ResizeObserver(_e),o.observe(X));const P=new ti({map:N,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),oe=new it(new gi(4.32,3.93),P);oe.rotation.x=-Math.PI/2,oe.position.y=.009,oe.renderOrder=2,t.add(oe)}t.add(r);const Re=new At;Re.position.y=.026,Re.visible=!1,t.add(Re);const Me=new ti({color:"#a7a38f",transparent:!0,opacity:.55}),Ie=new it(new on(1.53,.015,6,96),Me);Ie.rotation.x=Math.PI/2,Re.add(Ie);const Ke=new ti({color:"#628969",transparent:!0,opacity:.7}),Fe=new it(new on(1.53,.04,6,32,Math.PI*.4),Ke);Fe.rotation.set(Math.PI/2,0,Math.PI*1.12),Re.add(Fe);const Be=new ti({color:"#b49560"}),We=new it(new Sn(.075,12,8),Be);Re.add(We);const ke=new At;ke.position.set(1.97,.05,-1.46);const rt=V(.76,.12,1.02,i.material("#373b3b",void 0,.5),0,0,0,ke);rt.castShadow=!0;const mt=i.material("#b83735",1,.95);V(.59,.055,.84,mt,0,.08,0,ke),t.add(ke);const ve=new At,ze=new eu({color:"#b7c7cb",metalness:.68,roughness:.28}),Ye=new it(new bt(.075,.092,.68,12),ie);Ye.rotation.z=.85,Ye.position.set(.31,.47,.05),ve.add(Ye);const D=new it(new bt(.08,.08,.12,12),J);D.rotation.z=.85,D.position.set(.08,.23,.05),ve.add(D);const se=new it(new ps(.055,.28,6),ze);se.rotation.z=-2.3,se.position.set(.005,.16,.05),ve.add(se),ve.visible=!1,t.add(ve);const ce=new At;t.add(ce);const T=i.material("#ddae91",1,.98),g=new on(.035,.011,4,7,Math.PI*1.6);let z=0;function W(){const N=new He(me.color),X=new He("#e5c6af"),re=new He("#785044"),_e=new He;for(let P=0;P<e.depth.length;P++){const oe=e.depth[P]??0,te=e.ink[P]??0;R[P*3+1]=.225-oe*.145,_e.copy(X).lerp(re,Math.min(.8,oe*.83)).lerp(N,te*.93),F[P*3]=_e.r,F[P*3+1]=_e.g,F[P*3+2]=_e.b}A.attributes.position.needsUpdate=!0,A.attributes.color.needsUpdate=!0,A.computeVertexNormals()}function Z(N){const X=new Uint8Array(Qe*Qe*4),_e=new He(N.color).clone().convertLinearToSRGB();for(let oe=0;oe<N.pixels.length;oe++)X[oe*4]=Math.round(_e.r*255),X[oe*4+1]=Math.round(_e.g*255),X[oe*4+2]=Math.round(_e.b*255),X[oe*4+3]=Math.round((N.pixels[oe]??0)*235);const P=new Eo(X,Qe,Qe,un);return P.colorSpace=Wt,P.magFilter=Ot,P.minFilter=Ot,P.needsUpdate=!0,s.push(P),P}function le(N,X){const re=new ti({map:Z(N),transparent:!0,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-X-1}),_e=new it(new gi(rn*2,rn*2),re);_e.rotation.set(-Math.PI/2,0,-N.angle),_e.position.set(N.x,.015+X*.001,N.z),_e.renderOrder=3+X,r.add(_e)}function de(){for(const N of[...r.children]){const X=N;X.geometry.dispose(),X.material.dispose(),r.remove(N)}s.splice(0).forEach(N=>N.dispose())}function Q(){W(),i.changed()}function ee(N){return{x:N.x,z:N.z+.18+.395}}function fe(N){const X=ee(N),re=h??X;if(me.activeTool==="carve"&&G0(e,re,X,.022+me.size*.17,N.pressure||.5)){if(i.cue("place"),z<44){const _e=new it(g,T);_e.position.set(yt(X.x+1.53,-2.1,2.1),.035,yt(X.z+1.1,-1.7,1.8)),_e.rotation.set(Math.PI/2,z*.73,z*.91),ce.add(_e),z++}Q()}h=X,ve.position.set(X.x,.17,X.z-.18)}function Te(N){const X=e;e=uc(),N&&(e.depth=[...X.depth],e.distance=X.distance),c=!1,h=null,u=!1,d=!1,v=0,p=null,f=0,M=0,w=0,x=0,b=0,E=0,y=!1,m=!1,de(),ce.clear(),z=0,n.visible=!0,me.selectTool(N&&X.depth.some(re=>re>.16)?"press":"carve"),Q()}const me={id:"stamp",group:t,title:"stamp.title",subtitle:"stamp.subtitle",hint:"stamp.hint.carve",tools:[{id:"carve",label:"stamp.tool.carve"},{id:"press",label:"stamp.tool.press"},{id:"new",label:"stamp.tool.new"}],activeTool:"carve",color:"#b83735",size:.28,palette:["#b83735","#24364b","#466d62","#654b85","#d19432","#292c32"],selectTool(N){if(this.tools.some(X=>X.id===N)&&!(u||d)){if(N==="new"){Te(!1);return}this.cancelPointer?.(),this.activeTool=N,this.hint=N==="press"?"stamp.hint.ready":"stamp.hint.carve",N==="press"&&V0(e),ve.visible=!1,I.visible=N==="press",Re.visible=N==="press",n.rotation.set(N==="press"?Math.PI:0,0,0),n.position.set(N==="press"?M:0,N==="press"?1.45:.17,N==="press"?w:-.18),ke.visible=N!=="press",ce.visible=N!=="press",u=!1,i.cue("tap"),Q()}},setColor(N){!u&&!d&&hs(N)&&(this.color=N,mt.color.set(N),Q())},setSize(N){Number.isFinite(N)&&(this.size=yt(N,.03,1),i.changed())},pointerDown(N){u||d||!Number.isFinite(N.x)||!Number.isFinite(N.z)||this.activeTool==="press"&&(Math.abs(N.x-M)>1.6||N.z<w-3.1||N.z>w+.7)||(c=!0,h=null,f=0,E=0,b=0,y=!1,m=!1,this.activeTool==="press"?(h={x:N.x,z:N.z},C=M,_=w,x=0,n.position.set(M,1.45,w)):(ve.visible=!0,fe(N)),i.changed())},pointerMove(N){if(!(!c||!Number.isFinite(N.x)||!Number.isFinite(N.z)))if(this.activeTool==="press"){const X=(N.x-(h?.x??N.x))*.85,re=(N.z-(h?.z??N.z))*.85,_e=yt(C+X,-.55,.55),P=yt(_+re,-.4,.4);h={x:N.x,z:N.z},C=_e,_=P,E+=Math.hypot(X,re),b=yt(b+Math.hypot(X,re)*2),x=yt(x+X*1.6+re*.7,-.8,.8)}else fe(N)},pointerUp(){if(c&&(c=!1,h=null,ve.visible=!1,this.activeTool==="press")){const N=H0(e,{x:M,z:w,angle:x,pressure:ca(f),wobble:yt(b+E*.09),color:this.color});N&&(le(N,e.impressions.length-1),n.position.y=.255,d=!0,v=0,Re.visible=!1,this.hint="stamp.hint.reveal",i.cue("place"),Q())}},cancelPointer(){c=!1,h=null,f=0,ve.visible=!1,b=0,E=0,!d&&this.activeTool==="press"&&(this.hint="stamp.hint.ready",i.changed())},update(N){if(this.activeTool==="press"){if(d){v+=Math.min(N,.05),n.position.y+=(2.4-n.position.y)*(1-Math.exp(-N*6));return}if(c){f+=Math.min(N,.05),b=Math.max(0,b-N*.17);const X=ca(f);this.hint=X<.56?"stamp.hint.short":X<=.76?"stamp.hint.sweet":"stamp.hint.heavy",Be.color.set(X<.56?"#b49560":X<=.76?"#4d9566":"#be554b"),Re.position.set(M,.026,w),We.position.set(Math.cos(X*Math.PI*2)*1.53,.015,Math.sin(X*Math.PI*2)*1.53),X>=.56&&!y&&(y=!0,i.cue("tap")),X>.76&&!m&&(m=!0,i.cue("undo"));const re=1-Math.exp(-N*8);M+=(C-M)*re,w+=(_-w)*re,n.position.set(M,Math.max(.255,1.45-f*2.8),w),n.rotation.set(Math.PI,x,0),i.changed()}else u||(n.position.y+=(1.45-n.position.y)*(1-Math.exp(-N*6)))}},metrics(){const N=dc(e);return this.activeTool==="press"&&!d&&!u?[{label:"stamp.metric.pressure",value:Math.round(ca(f)*100),unit:"%"},{label:"stamp.metric.poise",value:Math.round((1-yt(b+E*.09))*100),unit:"%"}]:this.activeTool==="carve"?[{label:"stamp.metric.carved",value:N.carved,unit:"%"}]:[{label:"stamp.metric.print",value:N.printed,unit:"%"},{label:"stamp.metric.bleed",value:N.bleed,unit:"%"}]},canFinish(){return e.impressions.length>0},get autoFinish(){return d&&v>=.65},finish(){if(p)return p;this.cancelPointer?.(),u=!0,ve.visible=!1,Re.visible=!1,ke.visible=!1,ce.visible=!1,n.visible=!1;const N=dc(e);return p={title:N.title,score:N.score,advice:N.advice,metrics:[{label:"stamp.metric.print",value:N.printed,unit:"%"},{label:"stamp.metric.bleed",value:N.bleed,unit:"%"},{label:"stamp.metric.poise",value:N.alignment,unit:"%"}]},p},reset(){Te(!0)},snapshot(){return{revision:2,state:JSON.parse(JSON.stringify(e)),tool:this.activeTool,color:this.color,size:this.size,readyToReveal:d}},restore(N){if(!N||typeof N!="object")return;const X=N,re=W0(X.state);re&&(e=re,de(),re.impressions.forEach(le),n.visible=!0,u=!1,p=null,d=!1,c=!1,hs(X.color)&&(this.color=X.color),typeof X.size=="number"&&Number.isFinite(X.size)&&(this.size=yt(X.size,.03,1)),this.selectTool(X.tool==="press"||X.tool==="ink"?"press":"carve"),X.revision===2&&X.readyToReveal===!0&&e.impressions.length&&(d=!0,v=.65,Re.visible=!1,this.hint="stamp.hint.reveal"),mt.color.set(this.color),Q())},dispose(){o?.disconnect(),de();const N=new Set;t.traverse(X=>{X instanceof it&&(N.add(X.geometry),(Array.isArray(X.material)?X.material:[X.material]).forEach(_e=>l.add(_e)))}),N.add(g),N.forEach(X=>X.dispose()),l.forEach(X=>X.dispose()),a.forEach(X=>X.dispose()),t.clear()}};return W(),me}const ni=144,ao=8/7.9,Kt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),pc=i=>typeof i=="string"&&/^#[\da-fA-F]{6}$/.test(i),zn=i=>typeof i=="number"&&Number.isFinite(i),fu=i=>i.sx*i.sy*i.sz,mc=()=>({version:2,color:"#f4b2d3",size:.46,tool:"collect",lobes:[],arc:0,remainder:0,usefulDistance:0,totalDistance:0,pulls:0,finished:!1,shock:0,peakLoad:0,dropped:!1,fallen:[]});function Hi(i){let e=0,t=0,n=0,r=0;const s=new Set(i.fallen);i.lobes.forEach((h,f)=>{if(s.has(f))return;const u=fu(h);e+=u,t+=h.x*u,n+=h.z*u,r+=h.y*u}),t/=e||1,n/=e||1,r/=e||1;const a=Math.hypot(t,n*.85),o=e/4.65,l=.48+Math.sqrt(o)*.68+Math.max(0,r-1.2)*.15,c=a/.6*l+o*.3+i.shock;return{x:t,z:n,lean:a,load:c,angleX:Kt(n*.5,-.35,.35),angleZ:Kt(-t*.5,-.38,.38)}}function oo(i){if(i.finished||i.dropped)return;const e=Hi(i);if(i.peakLoad=Math.max(i.peakLoad,e.load),i.lobes.length<18||e.load<1)return;const t=i.lobes.map((n,r)=>({i:r,height:n.y+Math.hypot(n.x,n.z)*.25})).sort((n,r)=>r.height-n.height);i.fallen=t.slice(0,Math.ceil(t.length*.72)).map(n=>n.i),i.dropped=!0,i.remainder=0}function J0(i,e){if(i.finished||i.dropped||!zn(e)||e<=0||i.shock<.001)return!1;const t=i.shock;return i.shock*=Math.exp(-Math.min(.1,e)*4.5),i.shock<.001&&(i.shock=0),Math.abs(t-i.shock)>1e-4}function $0(i,e,t,n=1/60){if(i.finished||i.dropped||i.tool!=="collect"||i.lobes.length>=ni)return 0;const r=Math.hypot(t.x-e.x,t.z-e.z);if(!zn(r)||r<.005||r>1.1)return 0;i.totalDistance+=r;const s=Math.hypot(t.x,t.z);let a=Math.atan2(t.z,t.x)-Math.atan2(e.z,e.x);a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);const o=Math.abs(a);if(s<.48||s>1.78||o>.65||o<.009)return 0;const l=Kt(1-Math.abs(s-1.1)/1.15,.18,1);i.usefulDistance+=r*l,i.arc+=o,i.remainder+=o*l;const c=r/Kt(zn(n)?n:1/60,.008,.15);i.shock=Kt(i.shock*.78+Math.max(0,c-5.7)*.012*(i.lobes.length/70),0,.65);const h=Math.atan2(t.z,t.x);let f=0;for(;i.remainder>=.07&&i.lobes.length<ni&&!i.dropped;){i.remainder-=.07;const u=i.lobes.length,d=u/ni,v=.17+Math.sqrt(d)*.89,y=.2+i.size*.26,m=Math.sin(u*2.399963)*.13;i.lobes.push({x:Math.cos(h)*v+Math.sin(h)*m,y:.58+Math.sqrt(d)*1.25+Math.sin(u*1.7)*.08,z:Math.sin(h)*v*.72-Math.cos(h)*m*.6,sx:y*(.96+.12*Math.sin(u*1.3)),sy:y*(1.08+.1*Math.cos(u*2.1)),sz:y*.95,color:i.color}),f++,oo(i)}return i.lobes.length>=ni&&(i.remainder=0),oo(i),f}function Q0(i,e){const t=Math.cos(e.angleZ),n=Math.sin(e.angleZ),r=Math.cos(e.angleX),s=Math.sin(e.angleX),a=i.x*t-i.y*n,o=i.x*n+i.y*t,l=o*r-i.z*s,c=o*s+i.z*r;return{x:a,z:c-l*ao}}function j0(i,e,t){if(i.finished||i.dropped||i.tool!=="shape"||!i.lobes.length)return!1;const n=Kt(t.x-e.x,-.22,.22),r=Kt(-(t.z-e.z),-.22,.22);if(!zn(n+r)||Math.hypot(n,r)<.005)return!1;const s=.35+i.size*.85,a=Hi(i);let o=!1;for(const l of i.lobes){const c=Q0(l,a),h=Math.hypot(c.x-e.x,c.z-e.z);if(h>s)continue;const f=(1-h/s)*.72;l.x=Kt(l.x+n*f,-1.4,1.4),l.y=Kt(l.y+r*f,.42,2.2),l.z=Kt(l.z+(t.z-e.z)*f*.14,-.9,.9);const u=1+Math.hypot(n,r)*f,d=Kt(l.sy*u,.1,.75),v=d/l.sy;l.sy=d,l.sx/=Math.sqrt(v),l.sz/=Math.sqrt(v),o=!0}return o&&(i.pulls++,oo(i)),o}function e_(i){i.finished||(i.finished=!0,i.tool="lift")}function gc(i){const e=i.lobes.length,t=new Set(i.fallen);let n=0,r=0;i.lobes.forEach((w,x)=>{const b=1.3333333333333333*Math.PI*fu(w);n+=b,t.has(x)&&(r+=b)});const s=Math.round(n*4.4),a=Math.round(r*4.4),o=Math.max(0,s-a),l=i.totalDistance>0?Kt(i.usefulDistance/i.totalDistance):0,c=Hi(i),h=new Set(i.lobes.map(w=>w.color)).size,f=e?Math.max(...i.lobes.map(w=>w.y+w.sy)):0,u=e?Math.min(...i.lobes.map(w=>w.y-w.sy)):0,d=Kt((n-r)/(85/4.4)),v=Kt(1-c.lean/.95),y=e?Math.round(100*d*(.68*l+.32*v)):0,m=Math.round(Kt(i.dropped?i.peakLoad:c.load,0,1.5)*100),p=i.dropped?"candy.result.dropped":c.load>.8?"candy.result.close":e>=110?"candy.result.cloud":h>=3?"candy.result.color":e>=50?"candy.result.big":"candy.result.small",M=i.dropped||c.load>.68?"candy.advice.balance":e<65?"candy.advice.grow":"candy.advice.shape";return{grams:o,madeGrams:s,lostGrams:a,turns:Math.round(i.arc/(Math.PI*2)*10)/10,colors:h,efficiency:Math.round(l*100),height:Math.round((f-u)*24),lean:c.lean,danger:m,score:y,title:p,advice:M}}function t_(i){if(!i||typeof i!="object")return null;const e=i;if(![1,2].includes(e.version??0)||!pc(e.color)||!zn(e.size)||e.size<.03||e.size>1||!["collect","shape","lift"].includes(String(e.tool))||!Array.isArray(e.lobes)||e.lobes.length>ni||typeof e.finished!="boolean"||[e.arc,e.remainder,e.usefulDistance,e.totalDistance,e.pulls].some(s=>!zn(s)||s<0||s>1e7)||(e.usefulDistance??0)>(e.totalDistance??0)+.001||(e.remainder??0)>.116)return null;const t=[];for(const s of e.lobes){if(!s||typeof s!="object")return null;const a=s;if(!pc(a.color)||![a.x,a.y,a.z,a.sx,a.sy,a.sz].every(zn)||Math.abs(a.x)>1.41||a.y<.4||a.y>2.21||Math.abs(a.z)>.91||a.sx<.001||a.sx>.8||a.sy<.09||a.sy>.8||a.sz<.001||a.sz>.8)return null;t.push({...a})}const n=e.version===1;if(!n&&(!zn(e.shock)||e.shock<0||e.shock>.65||!zn(e.peakLoad)||e.peakLoad<0||e.peakLoad>10||typeof e.dropped!="boolean"||!Array.isArray(e.fallen)))return null;const r=n?[]:e.fallen;return r.length>t.length||new Set(r).size!==r.length||r.some(s=>!Number.isInteger(s)||s<0||s>=t.length)||!n&&(e.dropped?r.length===0:r.length!==0)?null:{version:2,color:e.color,size:e.size,tool:e.tool,lobes:t,arc:e.arc,remainder:e.remainder,usefulDistance:e.usefulDistance,totalDistance:e.totalDistance,pulls:e.pulls,finished:e.finished,shock:n?0:e.shock,peakLoad:n?0:e.peakLoad,dropped:n?!1:e.dropped,fallen:[...r]}}const n_={ja:["わたあめ、育てすぎ。","棒が見えなくなるまで。","ふちに沿って棒を回して、糸を集めよう","わたあめをつまんで、好きな形に引っぱる","持ち上げたら、もう雲。","巻く","形づくる","持ち上げる","飴の量","巻いた数","色数","集めた割合","棒どこいった職人","ふわふわの雲製造所","虹を巻く職人","風に吹かれたわたあめ","ひとくちの甘い雲"],en:["Cotton Candy, Overgrown.","Until the stick disappears.","Circle the bowl rim to gather sugar strands","Pinch and pull the fluff into your own shape","Lift it. You made a cloud.","Spin","Shape","Lift","Sugar","Turns","Colors","Collected","Where Is the Stick?","A Personal Cloud Factory","Rainbow Spinner","Windblown Sugar Cloud","A Bite-Sized Cloud"],fr:["Barbe à papa géante.","Jusqu’à cacher le bâton.","Tournez autour du bord pour récolter les fils","Pincez et étirez pour créer votre forme","Soulevez votre nuage.","Tourner","Modeler","Soulever","Sucre","Tours","Couleurs","Récolté","Où est le bâton ?","Fabrique de nuages","Artisan arc-en-ciel","Nuage dans le vent","Petit nuage sucré"],it:["Zucchero filato gigante.","Finché sparisce lo stecco.","Gira intorno al bordo per raccogliere i fili","Pizzica e tira per creare la tua forma","Solleva la tua nuvola.","Avvolgi","Modella","Solleva","Zucchero","Giri","Colori","Raccolto","Dov’è lo stecco?","Fabbrica di nuvole","Artigiano arcobaleno","Nuvola al vento","Nuvoletta dolce"],de:["Zuckerwatte, zu groß.","Bis der Stab verschwindet.","Fahre am Schüsselrand entlang und sammle Fäden","Zupfe und ziehe die Watte in deine Form","Heb deine Wolke hoch.","Wickeln","Formen","Anheben","Zucker","Runden","Farben","Gesammelt","Wo ist der Stab?","Eigene Wolkenfabrik","Regenbogenwickler","Wolke im Wind","Kleine Zuckerwolke"],es:["Algodón de azúcar gigante.","Hasta esconder el palo.","Rodea el borde para recoger los hilos","Pellizca y estira para darle tu forma","Levanta tu nube.","Girar","Moldear","Levantar","Azúcar","Vueltas","Colores","Recogido","¿Dónde está el palo?","Fábrica de nubes","Artesano del arcoíris","Nube al viento","Una nube de bocado"],tr:["Dev pamuk şeker.","Çubuk görünmeyene kadar.","Lifleri toplamak için kabın kenarında dön","Kendi şeklini vermek için tutup çek","Bulutunu kaldır.","Sar","Şekil ver","Kaldır","Şeker","Tur","Renk","Toplanan","Çubuk nerede?","Bulut fabrikası","Gökkuşağı ustası","Rüzgârlı şeker bulutu","Bir lokmalık bulut"],"zh-CN":["棉花糖，越做越大。","直到看不见棍子。","沿着锅边转动棍子，收集糖丝","捏住棉花糖，拉出喜欢的形状","举起来，已经是一朵云了。","卷糖丝","塑形","举起来","糖量","圈数","颜色","收集率","棍子去哪儿了","私人造云工厂","彩虹卷糖师","被风吹过的糖云","一口甜云"],ko:["솜사탕, 너무 키웠다.","막대가 안 보일 때까지.","그릇 가장자리를 따라 돌려 실을 모으세요","솜사탕을 집어 원하는 모양으로 당기세요","들어 올리면, 이제 구름.","말기","모양","들기","설탕 양","바퀴","색 수","수집률","막대 어디 갔지","나만의 구름 공장","무지개 장인","바람에 날린 설탕 구름","한입 달콤 구름"],"pt-BR":["Algodão-doce gigante.","Até o palito sumir.","Contorne a borda para recolher os fios","Belisque e puxe para criar sua forma","Levante sua nuvem.","Enrolar","Modelar","Levantar","Açúcar","Voltas","Cores","Coletado","Cadê o palito?","Fábrica de nuvens","Artesão do arco-íris","Nuvem ao vento","Uma nuvem de colher"],ru:["Сахарная вата переросла.","Пока не исчезнет палочка.","Ведите вдоль края чаши и собирайте нити","Щипайте и тяните вату, создавая форму","Поднимите своё облако.","Намотать","Придать форму","Поднять","Сахар","Обороты","Цвета","Собрано","Где же палочка?","Фабрика облаков","Мастер радуги","Облако на ветру","Маленькое сладкое облако"]},i_=["title","subtitle","hint.collect","hint.shape","hint.lift","tool.collect","tool.shape","tool.lift","metric.grams","metric.turns","metric.colors","metric.efficiency","result.big","result.cloud","result.color","result.lean","result.small"],pu=Object.fromEntries(Object.entries(n_).map(([i,e])=>[i,Object.fromEntries(i_.map((t,n)=>[`candy.${t}`,e[n]]))])),r_=["subtitle","hint.collect","hint.warning","hint.dropped","metric.load","metric.lost","metric.kept","metric.made","result.dropped","result.close","advice.balance","advice.grow","advice.shape"],s_={ja:["欲張る？ ここで止める？","巻く場所で傾く。重い側の反対へ巻こう","負荷が高い！ 反対側へ巻くか、ここで完成","軸から落ちた！ 残った分で完成","軸の負荷","落とした量","持ち帰り","作った量","欲張りすぎた雲職人","限界ぎりぎりの雲","次は、傾いた側と反対側に巻いて支えよう","今度はもう少し育ててから完成してみよう","次は引っぱる位置を変えて、別の形を作ろう"],en:["Go bigger, or stop here?","Winding adds weight on that side. Build the opposite side.","Heavy load! Wind the other side or finish now.","It slipped off! Finish with what stayed on.","Stick load","Dropped","Kept","Made","An Overambitious Cloud Maker","A Cloud on the Edge","Next time, wind on the opposite side to balance the lean.","Try growing a little more before you finish.","Try pulling a different spot to make a new silhouette."],fr:["Encore plus grand, ou arrêter ?","Le côté où tu tournes s’alourdit. Équilibre en face.","Charge forte ! Tourne de l’autre côté ou termine.","La partie haute est tombée ! Garde le reste.","Charge","Tombé","Gardé","Créé","Un nuage trop ambitieux","Un nuage à la limite","La prochaine fois, alourdis le côté opposé à la pente.","Essaie de le faire grandir un peu avant de terminer.","Tire à un autre endroit pour changer la silhouette."],it:["Ancora più grande, o basta?","Il lato che avvolgi pesa di più. Bilancia quello opposto.","Troppo peso! Avvolgi dall’altro lato o termina.","La parte alta è caduta! Resta quella sullo stecco.","Carico","Caduto","Rimasto","Creato","Nuvole troppo ambiziose","Una nuvola al limite","La prossima volta avvolgi il lato opposto alla pendenza.","Prova a farla crescere un po’ prima di finire.","Tira un altro punto per cambiare la sagoma."],de:["Noch größer oder jetzt aufhören?","Die gewickelte Seite wird schwerer. Gleiche sie aus.","Hohe Last! Auf der Gegenseite wickeln oder beenden.","Abgerutscht! Der Rest bleibt am Stab.","Stablast","Gefallen","Gerettet","Gemacht","Zu ehrgeizige Wolkenkunst","Wolke am Limit","Wickle nächstes Mal auf der Gegenseite der Neigung.","Lass sie vor dem Abschluss etwas weiter wachsen.","Ziehe an einer anderen Stelle für eine neue Form."],es:["¿Más grande o parar aquí?","El lado que enrollas gana peso. Equilibra el opuesto.","¡Mucha carga! Enrolla al otro lado o termina.","¡Se cayó la parte alta! Conservas el resto.","Carga","Caído","Conservado","Creado","Una nube demasiado ambiciosa","Una nube al límite","La próxima vez enrolla en el lado opuesto a la inclinación.","Prueba a hacerla crecer un poco más antes de terminar.","Tira de otro punto para crear una silueta distinta."],tr:["Daha büyük mü, burada bırak mı?","Sardığın taraf ağırlaşır. Karşı tarafı dengele.","Yüksek yük! Karşı tarafa sar ya da şimdi bitir.","Üst kısmı düştü! Çubukta kalan senin.","Çubuk yükü","Düşen","Kalan","Yapılan","Fazla Hırslı Bulut Ustası","Sınırdaki Bulut","Sonraki denemede eğimin karşı tarafına sar.","Bitirmeden önce biraz daha büyütmeyi dene.","Yeni bir şekil için başka bir noktadan çek."],"zh-CN":["继续贪大，还是就此收手？","卷哪边，哪边就重。向倾斜的反方向补糖丝","负荷太高！补另一侧，或现在完成","上半部掉了！留下棒子上的部分","棒上负荷","掉落量","留下的量","制作总量","贪心过头的造云师","摇摇欲坠的糖云","下次往倾斜的反方向卷，让两边平衡","下次可以再做大一点后完成","换个位置拉一拉，做出另一种形状"],ko:["더 키울까, 여기서 멈출까?","감는 쪽이 무거워져요. 반대쪽을 채워요","부하가 높아요! 반대쪽을 감거나 완성해요","윗부분이 떨어졌어요! 남은 만큼 완성해요","막대 부하","떨어진 양","남은 양","만든 양","욕심쟁이 구름 장인","한계에 선 구름","다음에는 기울어진 쪽의 반대쪽을 감아 균형을 잡아요","다음에는 조금 더 키운 뒤 완성해 봐요","다른 곳을 당겨 새로운 모양을 만들어 봐요"],"pt-BR":["Maior ainda ou parar por aqui?","O lado enrolado pesa mais. Equilibre do outro lado.","Muita carga! Enrole no outro lado ou finalize.","A parte de cima caiu! O que ficou é seu.","Carga","Caiu","Ficou","Criado","Uma Nuvem Ambiciosa Demais","Uma Nuvem no Limite","Na próxima, enrole no lado oposto à inclinação.","Tente crescer um pouco mais antes de finalizar.","Puxe outro ponto para criar uma silhueta diferente."],ru:["Ещё больше или хватит?","Сторона намотки тяжелеет. Уравновесьте противоположную.","Большая нагрузка! Намотайте с другой стороны или завершите.","Верхушка упала! На палочке осталась часть.","Нагрузка","Упало","Осталось","Сделано","Слишком смелый создатель облаков","Облако на грани","В следующий раз наматывайте с противоположной стороны наклона.","Попробуйте вырастить побольше перед завершением.","Потяните за другое место, чтобы изменить силуэт."]};for(const[i,e]of Object.entries(s_))r_.forEach((t,n)=>{pu[i][`candy.${t}`]=e[n]});function a_(){const i=new Sn(1,14,10),e=i.getAttribute("position");for(let t=0;t<e.count;t++){const n=e.getX(t),r=e.getY(t),s=e.getZ(t),a=1+.045*Math.sin(n*39+r*23+s*31)+.025*Math.sin(n*71-r*59+s*47);e.setXYZ(t,n*a,r*a,s*a)}return i.computeVertexNormals(),i}function o_(i){let e=mc();const t=new At,n=new At;n.position.y=.43;const r=new At;r.rotation.order="XZY",r.scale.setScalar(.87),r.position.set(.75,.62,.2),t.add(n,r);const s=new Set,a=new Set,o=(ve,ze,Ye,D=0,se=0,ce=0)=>{s.add(ze),a.add(Ye);const T=new it(ze,Ye);return T.position.set(D,se,ce),T.castShadow=!0,T.receiveShadow=!0,ve.add(T),T},l=i.material("#f4e6e9",2,.29),c=i.material("#c17893",void 0,.35),h=i.material("#c0c8ce",void 0,.26);h.metalness=.68;const f=i.material("#e6e8e8",void 0,.4);f.metalness=.42;const u=i.material("#775061",void 0,.4),d=i.material("#d4a86c",0,.74),v=i.material("#fff9f0",void 0,.55);o(n,new bt(1.12,1.2,.72,48),l,0,.08,0),o(n,new bt(1.2,1.2,.055,48),c,0,.435,0);for(const[ve,ze]of[[-.75,-.58],[.75,-.58],[-.75,.58],[.75,.58]])o(n,new bt(.12,.16,.16,12),u,ve,-.35,ze);const y=[new Ae(.16,.48),new Ae(.66,.48),new Ae(1.05,.52),new Ae(1.48,.67),new Ae(1.7,.86),new Ae(1.77,.94),new Ae(1.73,.98),new Ae(1.62,.83),new Ae(1.42,.68),new Ae(.92,.58),new Ae(.18,.55)],m=f.clone();m.side=sn,o(n,new Lo(y,64),m);const p=o(n,new on(1.73,.055,10,64),h,0,.95,0);p.rotation.x=Math.PI/2,o(n,new bt(.39,.44,.19,32),h,0,.59,0);const M=o(n,new bt(.34,.34,.04,32),u,0,.705,0),w=o(n,new on(.3,.018,6,32),h,0,.733,0);w.rotation.x=Math.PI/2;for(let ve=0;ve<12;ve++){const ze=ve*Math.PI/6,Ye=o(M,new Pt(.035,.008,.105),f,Math.cos(ze)*.24,.024,Math.sin(ze)*.24);Ye.rotation.y=-ze}const x=o(n,new bt(.145,.145,.09,24),h,.69,.02,1.03);x.rotation.x=Math.PI/2;const b=o(x,new Pt(.025,.07,.012),c,0,.05,.006);b.rotation.x=Math.PI/2,o(n,new Sn(.035,8,6),i.material("#f0b671",void 0,.38),-.64,.04,1.1);const E=o(r,new bt(.035,.055,2.32,12),d,0,.73,0);E.rotation.z=-.045;const C=a_();s.add(C);const _=i.material("#ffffff",2,.98);a.add(_),_.roughness=.98;const A=new qc(C,_,ni);A.instanceMatrix.setUsage(hh),A.count=0,A.castShadow=!0,A.receiveShadow=!0,A.frustumCulled=!1,r.add(A);const R=ni*14*2,F=new Float32Array(R*3),O=new Float32Array(R*3),G=new wt;s.add(G),G.setAttribute("position",new Zt(F,3)),G.setAttribute("color",new Zt(O,3));const U=new Yc({vertexColors:!0,transparent:!0,opacity:.29,depthWrite:!1});a.add(U);const H=new Gh(G,U);H.frustumCulled=!1,r.add(H);const K=i.material("#d9a7bc",void 0,.85);a.add(K);const J=new on(1.12,.015,5,72,Math.PI*.88);s.add(J);const ie=new it(J,K);ie.rotation.x=Math.PI/2,ie.rotation.z=.22,ie.position.y=.6,n.add(ie);const V=o(t,new bt(1.42,1.49,.13,48),v,0,.08,0);V.visible=!1;const I=new Lt,k=new He,ue=new L,ge=new L;let Ge=!0,Pe=!1,Ee=null,$=!1,ne=.75,he=.2,Re=0,Me=0,Ie=0,Ke=0;const Fe=()=>{Ge=!0,i.changed()},Be=ve=>({x:ve.x,z:ve.z+1.1*ao}),We=ve=>({x:(ve.x-r.position.x)/.87,z:(ve.z-r.position.z+r.position.y*ao)/.87}),ke=()=>{A.count=e.lobes.length;const ve=new Set(e.fallen),ze=yt(Ke/1),Ye=1-Math.pow(1-ze,2);let D=0,se=0;e.fallen.forEach(g=>{const z=e.lobes[g];D+=z.x,se+=z.z});const ce=Math.hypot(D,se)||1;D=D/ce*.7,se=se/ce*.7,r.updateMatrixWorld(!0);let T=0;for(let g=0;g<e.lobes.length;g++){const z=e.lobes[g],W=ve.has(g),Z=W?1-ze*.45:1;I.position.set(z.x,z.y,z.z),W&&(ge.set(D+Math.sin(g*2.4)*.3,1.08+z.sy*.46+g%3*.035,se+Math.cos(g*2.4)*.27),r.worldToLocal(ge),I.position.lerp(ge,Ye)),I.scale.set(z.sx/Math.sqrt(Z),z.sy*Z,z.sz/Math.sqrt(Z)),I.rotation.set(g*.31+(W?ze*1.4:0),g*.47,g*.23+(W?ze*.8:0)),I.updateMatrix(),A.setMatrixAt(g,I.matrix),k.set(z.color),A.setColorAt(g,k);const le=k.clone().lerp(new He("#ffffff"),.35);for(let de=0;de<14;de++){const Q=de*2.399963+g*.19,ee=Math.acos(1-2*(de+.5)/14),fe=Math.sin(ee)*Math.cos(Q),Te=Math.cos(ee),me=Math.sin(ee)*Math.sin(Q),N=.06+.055*Math.sin(de*7+g*3);for(let X=0;X<2;X++){const re=X===0?.94:1.1;ue.set(fe*re+(X?Math.cos(Q+1.1)*N:0),Te*re+(X?N*.65:0),me*re+(X?Math.sin(Q+1.1)*N:0)).applyMatrix4(I.matrix),F[T]=ue.x,F[T+1]=ue.y,F[T+2]=ue.z,O[T]=le.r,O[T+1]=le.g,O[T+2]=le.b,T+=3}}}A.instanceMatrix.needsUpdate=!0,A.instanceColor&&(A.instanceColor.needsUpdate=!0),G.setDrawRange(0,T/3),G.getAttribute("position").needsUpdate=!0,G.getAttribute("color").needsUpdate=!0,Ge=!1},mt={id:"candy",group:t,title:"candy.title",subtitle:"candy.subtitle",get hint(){return e.dropped?"candy.hint.dropped":e.tool==="collect"&&Hi(e).load>.68?"candy.hint.warning":`candy.hint.${e.tool}`},tools:[{id:"collect",label:"candy.tool.collect"},{id:"shape",label:"candy.tool.shape"},{id:"lift",label:"candy.tool.lift"}],get activeTool(){return e.tool},get color(){return e.color},get size(){return e.size},palette:["#f4b2d3","#a0d8e3","#c5b5e8","#ffdb9c","#c8dfa4","#fff4df"],selectTool(ve){!["collect","shape","lift"].includes(ve)||e.finished||(e.tool=ve,Ee=null,Pe=!1,r.rotation.y=0,ve!=="collect"&&(ne=0,he=0),Fe(),i.cue("tap"))},setColor(ve){/^#[\da-fA-F]{6}$/.test(ve)&&(e.color=ve,i.changed())},setSize(ve){Number.isFinite(ve)&&(e.size=yt(ve,.03,1),i.changed())},pointerDown(ve){if(!e.finished&&(Pe=!0,Ee={...ve},Ie=Me,e.tool==="collect")){const ze=Be(ve);ne=yt(ze.x*.62,-1.15,1.15),he=yt(ze.z*.6,-.95,.95)}},pointerMove(ve){if(!Pe||!Ee||e.finished)return;let ze=!1;const Ye=e.dropped;if(e.tool==="collect"){const D=Be(ve);ne=yt(D.x*.62,-1.15,1.15),he=yt(D.z*.6,-.95,.95),ze=$0(e,Be(Ee),D,Math.max(1/60,Me-Ie))>0,M.rotation.y+=Math.hypot(ve.x-Ee.x,ve.z-Ee.z)*1.6}else e.tool==="shape"?ze=j0(e,We(Ee),We(ve)):(r.rotation.y+=(ve.x-Ee.x)*.6,ze=!0);if(Ee={...ve},Ie=Me,!Ye&&e.dropped&&(Pe=!1,Ee=null,Ke=0,ne=r.position.x,he=r.position.z,i.cue("undo"),ze=!0),ze){Fe();const D=typeof performance<"u"?performance.now():Date.now();D-Re>190&&(i.cue("place"),Re=D)}},pointerUp(){Pe=!1,Ee=null,i.changed()},update(ve,ze){if($)return;Me=ze,J0(e,ve)&&i.changed();const Ye=(e.tool==="lift"||e.finished)&&!e.dropped,D=1-Math.exp(-yt(ve,0,.1)*12);r.position.x+=(ne-r.position.x)*D,r.position.z+=(he-r.position.z)*D,r.position.y+=((Ye?.4:.62)-r.position.y)*D;const se=Hi(e.dropped?{...e,fallen:[]}:e);r.rotation.x=se.angleX,r.rotation.z=se.angleZ,e.dropped&&Ke<1.05&&(Ke+=Math.min(.05,ve),Ge=!0),Ge&&ke(),n.visible=!Ye,V.visible=Ye,ie.visible=e.tool==="collect"&&e.lobes.length<ni,e.dropped&&(ie.visible=!1),K.color.set(Hi(e).load>.68?"#d17355":"#d9a7bc"),e.lobes.length>8&&(ie.rotation.z=Math.atan2(-se.z,-se.x)-Math.PI*.44)},metrics:()=>{const ve=gc(e);return[{label:"candy.metric.grams",value:ve.madeGrams,unit:"g"},{label:"candy.metric.load",value:ve.danger,unit:"%"},{label:"candy.metric.colors",value:ve.colors}]},canFinish:()=>e.lobes.length>=8,get autoFinish(){return e.dropped},get finishDelayMs(){return e.dropped?1100:450},finish(){e_(e),Pe=!1,Ee=null,e.dropped||(ne=0,he=0);const ve=gc(e);return Fe(),{title:ve.title,score:ve.score,advice:ve.advice,metrics:[{label:"candy.metric.kept",value:ve.grams,unit:"g"},{label:"candy.metric.lost",value:ve.lostGrams,unit:"g"},{label:"candy.metric.made",value:ve.madeGrams,unit:"g"}]}},reset(){const ve=e.color,ze=e.size;e=mc(),e.color=ve,e.size=ze,Pe=!1,Ee=null,ne=.75,he=.2,Ke=0,r.rotation.set(0,0,0),Fe()},snapshot(){return JSON.parse(JSON.stringify(e))},restore(ve){const ze=t_(ve);ze&&(e=ze,Pe=!1,Ee=null,Ke=e.dropped?1.05:0,ne=e.tool==="collect"?.75:0,he=e.tool==="collect"?.2:0,r.rotation.y=0,Fe())},dispose(){$||($=!0,s.forEach(ve=>ve.dispose()),a.forEach(ve=>ve.dispose()),A.dispose(),t.clear())}};return ke(),mt}const et=48,No=96,yn=1.58,pt=(i,e,t)=>Math.min(t,Math.max(e,i)),gn=i=>typeof i=="number"&&Number.isFinite(i),_c=()=>({version:1,edges:Array.from({length:et},(i,e)=>({x:Math.cos(e/et*Math.PI*2)*yn,z:Math.sin(e/et*Math.PI*2)*yn,y:.16})),filling:[],color:"#f6dca8",stretches:0,pinches:0,cooked:!1,strain:Array(et).fill(0),tears:Array(et).fill(0),cooking:null});function l_(i,e){let t=0,n=1/0;return i.edges.forEach((r,s)=>{const a=Math.hypot(r.x-e.x,r.z-e.z);a<n&&(t=s,n=a)}),{index:t,distance:n}}function xs(i,e){return Math.min(Math.abs(i-e),et-Math.abs(i-e))}function mu(i,e,t){const n=2*yn*Math.sin(Math.PI/et);i.edges.forEach((r,s)=>{const a=i.edges[(s+1)%et],o=Math.hypot(r.x-a.x,r.z-a.z,(r.y-a.y)*.55)/n,l=pt((o-1.55)/2.8,0,1),c=pt((t-.27)/.8,0,1)*Math.max(0,1-xs(s,e)/4);i.strain[s]=pt(Math.max(l,c),0,1),i.strain[s]>.66&&(i.tears[s]=Math.max(i.tears[s],pt((i.strain[s]-.61)*2.5,0,1)))})}function c_(i,e,t,n){if(i.cooked||![e.x,e.z,t.x,t.z,n].every(Number.isFinite))return!1;const r=l_(i,e);if(r.distance>1.1)return!1;const s=pt(t.x-e.x,-.24,.24),a=pt(t.z-e.z,-.24,.24);if(Math.hypot(s,a)<.002)return!1;const o=2+pt(n,.03,1)*7;return i.edges.forEach((l,c)=>{const h=Math.max(0,1-xs(c,r.index)/o);h<=0||(l.x=pt(l.x+s*h*.8,-2.2,2.2),l.z=pt(l.z+a*h*.8,-1.95,1.95))}),i.stretches++,mu(i,r.index,Math.hypot(t.x-e.x,t.z-e.z)),!0}function u_(i,e,t){if(i.cooked||i.filling.length>=No||![e.x,e.z,t].every(Number.isFinite)||Math.hypot(e.x,e.z)>1.3)return!1;const n=i.filling.length,r=.09+pt(t,.03,1)*.14;return i.filling.push({x:e.x,z:e.z,kind:n%4,size:r}),!0}function h_(i,e,t,n){if(i.cooked||!Number.isInteger(e)||e<0||e>=et||![t.x,t.z,n].every(Number.isFinite))return!1;const r=pt(t.x,-2,2),s=pt(t.z,-1.8,1.8),a=2+pt(n,.03,1)*6.5,o=i.edges[e],l=Math.hypot(r-o.x,s-o.z);let c=!1;return i.edges.forEach((h,f)=>{const u=Math.max(0,1-xs(f,e)/a);if(u===0)return;const d=(r-h.x)*u*.24,v=(s-h.z)*u*.24;if(Math.hypot(d,v)<.001)return;h.x+=d,h.z+=v;const y=pt(1-Math.hypot(h.x,h.z)/yn,0,1),m=(f%2===0?.13:.025)*u;h.y=pt(.16+y*1.4+m,.16,1.9),c=!0}),c&&(i.pinches++,mu(i,e,l)),c}function gu(i){return i.reduce((e,t)=>e+pt((yn-Math.hypot(t.x,t.z))/(yn-.24),0,1),0)/et}function Fo(i){return i.filling.reduce((e,t)=>e+(t.size/.16)**3,0)/34}function _u(i){const e=gu(i.edges),t=Fo(i),n=.55+e*.4;let r=0,s=-1/0;i.edges.forEach((d,v)=>{const m=pt((Math.hypot(d.x,d.z)-.24)/(yn-.24),0,1)*.6+i.tears[v]*.9+i.strain[v]*.17;m>s&&(s=m,r=v)});const a=i.edges[r],o=pt((Math.hypot(a.x,a.z)-.24)/(yn-.24),0,1),l=pt(1-o*.6-i.tears[r]*.9-i.strain[r]*.17,.025,1),c=t/n,h=i.filling.length?pt(.15+c*.5,0,2):0,f=i.filling.length?pt((h-l)*1.22+i.tears[r]*.32,0,1):0,u=pt(o*t*.22+f*.74,0,.9);return{weakEdge:r,pressure:h,swell:pt(t*.38,0,.64),split:f,release:u,opening:o}}function lo(i){const e=i.edges,t=gu(e),n=Math.round(t*100),r=Fo(i),s=Math.round(r*100),a=_u(i),o=i.cooking?.escaped.length,l=i.filling.length?Math.round((i.cooked?(o??0)/i.filling.length:a.release)*100):0;let c=0;e.forEach((x,b)=>{const E=e[(b+et-1)%et],C=e[(b+1)%et];x.y>E.y+.025&&x.y>C.y+.025&&c++});const h=Math.round(Math.max(...i.strain)*100),f=Math.round(i.tears.filter(x=>x>.3).length/et*100),u=1-l/100,d=pt(r/.75,0,1),v=t*.65+Math.min(1,c/8)*.13+d*.22,y=i.filling.length===0?0:Math.round(pt(100*v*u-f*.35,0,100)),m=i.cooking?.split??a.split,p=i.filling.length===0?"empty":m>.28||l>35?"burst":n<55?"open":c>=5?"sculpture":"artisan",M=i.cooking?.cause,w=i.filling.length===0?"add":M==="load"||r>1.05?"less":M==="tear"||!i.cooking&&(f>0||h>75)?"gentle":M==="gap"||!i.cooking&&a.opening>.35||n<75?"close":"shape";return{closure:n,filling:s,leak:l,pleats:c,strain:h,torn:f,risk:Math.round(pt(a.release*1.5+a.split*.35,0,1)*100),weakEdge:i.cooking?.weakEdge??a.weakEdge,score:y,title:p,advice:w}}function d_(i){if(i.cooked)return lo(i);const e=_u(i),t=i.edges.map(o=>({...o})),n=e.weakEdge/et*Math.PI*2,s=i.filling.map((o,l)=>({index:l,distance:Math.hypot(o.x-Math.cos(n)*.7,o.z-Math.sin(n)*.7)})).sort((o,l)=>o.distance-l.distance||o.index-l.index).slice(0,Math.floor(i.filling.length*e.release)).map(o=>o.index),a=Fo(i)>1.05?"load":Math.max(...i.tears)>.3?"tear":e.opening>.35?"gap":"none";return i.cooking={weakEdge:e.weakEdge,escaped:s,pressure:e.pressure,swell:e.swell,split:e.split,before:t,cause:a},i.edges.forEach((o,l)=>{const c=Math.max(0,1-xs(l,e.weakEdge)/5.5),h=c*e.split;o.x=pt(o.x+Math.cos(l/et*Math.PI*2)*h*.77,-2.2,2.2),o.z=pt(o.z+Math.sin(l/et*Math.PI*2)*h*.67,-1.95,1.95),o.y=pt(o.y+e.swell*.17-h*.32,.16,1.9),h>.18&&(i.tears[l]=Math.max(i.tears[l],h))}),i.cooked=!0,lo(i)}function f_(i){if(!i||typeof i!="object")return null;const e=i;if(e.version!==1||!Array.isArray(e.edges)||e.edges.length!==et||!Array.isArray(e.filling)||e.filling.length>No||typeof e.color!="string"||!/^#[0-9a-f]{6}$/i.test(e.color)||typeof e.cooked!="boolean"||!gn(e.stretches)||!gn(e.pinches)||!Number.isInteger(e.stretches)||!Number.isInteger(e.pinches)||e.stretches<0||e.pinches<0||e.stretches>1e7||e.pinches>1e7||!e.edges.every(a=>a&&gn(a.x)&&gn(a.z)&&gn(a.y)&&Math.abs(a.x)<=2.21&&Math.abs(a.z)<=1.96&&a.y>=.15&&a.y<=1.91)||!e.filling.every(a=>a&&gn(a.x)&&gn(a.z)&&Math.hypot(a.x,a.z)<=1.31&&gn(a.size)&&a.size>=.09&&a.size<=.24&&Number.isInteger(a.kind)&&a.kind>=0&&a.kind<=3))return null;const t=a=>Array.isArray(a)&&a.length===et&&a.every(o=>gn(o)&&o>=0&&o<=1),n=e.strain===void 0?Array(et).fill(0):e.strain,r=e.tears===void 0?Array(et).fill(0):e.tears;if(!t(n)||!t(r))return null;let s=null;if(e.cooking!==void 0&&e.cooking!==null){const a=e.cooking;if(!e.cooked||!Number.isInteger(a.weakEdge)||a.weakEdge<0||a.weakEdge>=et||!["load","tear","gap","none"].includes(a.cause)||![a.pressure,a.swell,a.split].every(gn)||a.pressure<0||a.pressure>2||a.swell<0||a.swell>.65||a.split<0||a.split>1||!Array.isArray(a.escaped)||new Set(a.escaped).size!==a.escaped.length||a.escaped.some(o=>!Number.isInteger(o)||o<0||o>=e.filling.length)||!Array.isArray(a.before)||a.before.length!==et||a.before.some(o=>!o||![o.x,o.y,o.z].every(gn)||Math.abs(o.x)>2.21||Math.abs(o.z)>1.96||o.y<.15||o.y>1.91))return null;s={...a,escaped:[...a.escaped],before:a.before.map(o=>({...o}))}}return{version:1,edges:e.edges.map(a=>({...a})),filling:e.filling.map(a=>({...a})),color:e.color,stretches:e.stretches,pinches:e.pinches,cooked:e.cooked,strain:[...n],tears:[...r],cooking:s}}const p_=["dumpling.title","dumpling.subtitle","dumpling.stretch","dumpling.fill","dumpling.pinch","dumpling.hintStretch","dumpling.hintFill","dumpling.hintPinch","dumpling.hintCooked","dumpling.closure","dumpling.filling","dumpling.leak","dumpling.pleats","dumpling.empty","dumpling.open","dumpling.burst","dumpling.sculpture","dumpling.artisan"],m_={ja:["餃子、何を包んだ？","皮からつくる、クセのある一皿。","のばす","具をのせる","つまむ","皮のふちを引いて、形をのばす","真ん中に具をのせる。盛りすぎ注意","ふちをつまんで、中央へ引き寄せる","焼き上がり。折り目まで、あなた作。","閉じた割合","具の充実度","はみ出し","ひだ","皮だけの芸術家","口の開いた大作","具の脱走現場","ひだを刻む造形師","手包みの職人"],en:["Was that a dumpling?","A handmade bite with character.","Stretch","Add filling","Pinch","Pull the rim to stretch the skin","Place filling near the center. Easy now.","Grab the rim and pull it inward","Cooked. Every fold is yours.","Sealed","Filling","Spillage","Pleats","The empty sculptor","An open invitation","The great filling escape","Sculptor of pleats","Hand-folding artisan"],fr:["C’était une raviole ?","Une bouchée façonnée à votre façon.","Étirer","Garnir","Pincer","Tirez le bord pour étirer la pâte","Garnissez le centre, sans trop charger","Pincez le bord et tirez vers le centre","C’est cuit. Chaque pli est le vôtre.","Fermeture","Garniture","Débordement","Plis","L’artiste de pâte vide","L’œuvre à ciel ouvert","La grande fuite","Sculpteur de plis","Artisan du pliage"],it:["Era un raviolo?","Un boccone fatto a modo tuo.","Stendi","Farcisci","Pizzica","Tira il bordo per stendere la pasta","Metti il ripieno al centro, senza esagerare","Pizzica il bordo e tiralo verso il centro","Cotto. Ogni piega è tua.","Chiusura","Ripieno","Fuoriuscita","Pieghe","Lo scultore del vuoto","Un’opera aperta","La fuga del ripieno","Scultore di pieghe","Artigiano del raviolo"],de:["War das ein Teigtäschchen?","Ein handgemachter Bissen mit Charakter.","Dehnen","Füllen","Falten","Ziehe am Rand, um den Teig zu dehnen","Lege Füllung in die Mitte. Nicht zu viel!","Greife den Rand und ziehe ihn zur Mitte","Fertig gebraten. Jede Falte ist deine.","Verschlossen","Füllung","Austritt","Falten","Künstler der leeren Hülle","Ein offenes Kunstwerk","Die große Füllungsflucht","Meister der Falten","Handfalt-Künstler"],es:["¿Eso era una empanadilla?","Un bocado hecho a tu manera.","Estirar","Rellenar","Pellizcar","Tira del borde para estirar la masa","Pon relleno en el centro, sin pasarte","Pellizca el borde y llévalo al centro","Ya está. Cada pliegue es tuyo.","Cierre","Relleno","Derrame","Pliegues","El escultor del vacío","Una obra abierta","La fuga del relleno","Escultor de pliegues","Artesano del plegado"],tr:["Bu bir mantı mıydı?","Kendi tarzında el yapımı bir lokma.","Uzat","İç koy","Büz","Hamuru uzatmak için kenarı çek","İçi ortaya koy. Fazlası taşar.","Kenarı tut ve ortaya doğru çek","Pişti. Her kıvrım senin eserin.","Kapanma","İç doluluğu","Taşma","Kıvrımlar","Boş hamurun sanatçısı","Açık bir sanat eseri","İç harcın firarı","Kıvrım heykeltıraşı","El işi mantı ustası"],"zh-CN":["这真的是饺子？","从面皮开始，包出自己的风格。","拉面皮","放馅","捏褶","拉动面皮边缘，改变形状","把馅放在中间，小心别太满","捏住边缘，往中间拉","出锅啦，每道褶子都属于你。","封口","馅料量","露馅","褶子","空心艺术家","敞口的大作","馅料逃跑现场","褶子雕塑师","手工包饺大师"],ko:["이게 만두였다고?","피부터 빚는 개성 있는 한입.","늘리기","속 넣기","오므리기","피의 가장자리를 당겨 모양을 늘려요","가운데에 속을 올려요. 너무 많으면 터져요","가장자리를 잡고 가운데로 당겨요","다 구워졌어요. 주름까지 나만의 작품.","봉합","속의 양","흘러나옴","주름","빈 피의 예술가","활짝 열린 대작","만두소 탈출 현장","주름 조각가","손만두 장인"],"pt-BR":["Isso era um bolinho?","Uma mordida artesanal com personalidade.","Esticar","Rechear","Pinçar","Puxe a borda para esticar a massa","Ponha recheio no centro. Sem exagerar!","Pegue a borda e puxe para o centro","Pronto. Cada dobra é sua.","Fechamento","Recheio","Vazamento","Dobras","O escultor do vazio","Uma obra aberta","A fuga do recheio","Escultor de dobras","Artesão das dobras"],ru:["Это был пельмень?","Слепите кусочек со своим характером.","Растянуть","Начинка","Защипнуть","Тяните край, чтобы растянуть тесто","Кладите начинку в центр. Не переборщите!","Захватите край и тяните к центру","Готово. Каждая складка — ваша.","Закрыто","Начинка","Вытекло","Складки","Скульптор пустоты","Открытый шедевр","Побег начинки","Скульптор складок","Мастер ручной лепки"]},g_=["dumpling.strain","dumpling.risk","dumpling.torn","dumpling.escaped","dumpling.hintTension","dumpling.hintFill","dumpling.hintPinch","dumpling.hintCooking","dumpling.advice.add","dumpling.advice.less","dumpling.advice.gentle","dumpling.advice.close","dumpling.advice.shape"],__={ja:["張り","破れリスク","裂け目","こぼれた具","引きすぎ！広い範囲を少しずつ","長押しで盛る。欲張るほど閉じにくい","ふちを順につまむ。細い所は引きすぎ注意","ふくらんで、弱い継ぎ目が開く…","次は具をのせて、ふちを順につまもう","次は具を少なめに。ふくらむ余地を残そう","次は同じ所を引きすぎず、広く少しずつ","次は開いた側のふちから閉じてみよう","次は具の置き方を変えて、違うふくらみに"],en:["Tension","Burst risk","Tears","Escaped filling","Too much pull! Work gently around the rim","Hold to add filling. More is harder to seal","Pinch around the rim. Do not yank a thin patch","It swells… the weakest seam is opening","Next: add filling, then work around the rim","Next: use less filling and leave room to swell","Next: pull broader patches a little at a time","Next: start closing the side that opened","Next: place filling differently for a new shape"],fr:["Tension","Risque","Déchirures","Garniture sortie","Trop tendu ! Travaillez doucement autour du bord","Maintenez pour garnir. Trop est dur à fermer","Pincez tout le bord sans tirer un point trop fort","Ça gonfle… la couture faible s’ouvre","Ajoutez une garniture, puis pincez tout le bord","Moins de garniture laissera de la place à la vapeur","Tirez de plus grandes zones, un peu à la fois","Commencez par fermer le côté resté ouvert","Répartissez autrement la garniture pour changer la forme"],it:["Tensione","Rischio","Strappi","Ripieno uscito","Troppo tirato! Lavora piano intorno al bordo","Tieni per farcire. Troppo ripieno è difficile da chiudere","Pizzica tutto il bordo senza strappare un punto","Si gonfia… la chiusura debole si apre","Aggiungi ripieno, poi pizzica intorno al bordo","Usa meno ripieno e lascia spazio al vapore","Tira zone più ampie, poco alla volta","Inizia a chiudere dal lato rimasto aperto","Distribuisci il ripieno in modo diverso per una nuova forma"],de:["Spannung","Platzrisiko","Risse","Ausgetreten","Zu stark! Arbeite behutsam am ganzen Rand","Halten zum Füllen. Zu viel lässt sich schwer schließen","Rundum falten. Dünne Stellen nicht stark ziehen","Es schwillt… die schwache Naht öffnet sich","Fülle den Teig, dann falte rund um den Rand","Weniger Füllung lässt Platz zum Aufgehen","Ziehe breitere Stellen in kleinen Schritten","Schließe zuerst die zuvor offene Seite","Verteile die Füllung anders für eine neue Form"],es:["Tensión","Riesgo","Roturas","Relleno fuera","¡Tiras mucho! Trabaja suavemente por todo el borde","Mantén para rellenar. Cuanto más, más cuesta cerrar","Pellizca todo el borde sin estirar un punto fino","Se hincha… la unión más débil se abre","Añade relleno y pellizca alrededor del borde","Usa menos relleno y deja espacio para hincharse","Tira de zonas más amplias, poco a poco","Empieza cerrando el lado que quedó abierto","Reparte el relleno de otra forma para cambiar la figura"],tr:["Gerilim","Patlama riski","Yırtıklar","Dökülen iç","Çok çektin! Kenarı azar azar işle","İç eklemek için tut. Fazlası zor kapanır","Kenarı sırayla büz. İnce yeri çok çekme","Şişiyor… en zayıf dikiş açılıyor","İç koy, sonra kenarı sırayla büz","Daha az iç koy ve şişmesi için yer bırak","Geniş parçaları azar azar çek","Önce açık kalan taraftan kapatmayı dene","İçi farklı yerleştirerek yeni bir şekil yap"],"zh-CN":["张力","破裂风险","裂口","漏出的馅","拉得太猛了！沿边缘一点点捏","长按加馅。越贪心，越难封口","沿边缘依次捏合，别猛拉薄处","鼓起来了……薄弱的封口张开了","下次先加馅，再沿边缘依次捏合","下次少放点馅，留出膨胀空间","下次捏宽一点，分多次轻轻拉","下次先封住刚才张开的那一侧","下次换个位置放馅，做出不同的鼓包"],ko:["당김","터질 위험","찢김","샌 속","너무 당겼어요! 가장자리를 조금씩 다뤄요","길게 눌러 속을 넣어요. 많을수록 닫기 어려워요","가장자리를 차례로 오므려요. 얇은 곳은 살살","부풀어요… 약한 봉합부가 벌어져요","다음엔 속을 넣고 가장자리를 차례로 오므려요","다음엔 속을 줄여 부풀 공간을 남겨요","다음엔 넓은 부분을 조금씩 당겨요","다음엔 벌어진 쪽부터 닫아 봐요","다음엔 속의 위치를 바꿔 다른 모양을 만들어요"],"pt-BR":["Tensão","Risco","Rasgos","Recheio fora","Puxou demais! Trabalhe a borda aos poucos","Segure para rechear. Mais recheio é mais difícil de fechar","Pince toda a borda. Não estique só uma parte fina","Está inchando… a emenda fraca está abrindo","Ponha recheio e pince toda a borda","Use menos recheio e deixe espaço para inchar","Puxe partes mais largas, um pouco de cada vez","Comece fechando o lado que ficou aberto","Distribua o recheio de outro jeito para criar outra forma"],ru:["Натяжение","Риск разрыва","Разрывы","Вытекшая начинка","Слишком сильно! Тяните край понемногу","Держите для начинки. Избыток труднее закрыть","Защипывайте весь край, не тяните тонкое место","Раздувается… слабый шов раскрывается","Добавьте начинку и защипните край по кругу","Положите меньше начинки, оставьте место для пара","Тяните более широкие участки понемногу","Сначала закройте сторону, которая раскрылась","Разложите начинку иначе, чтобы изменить форму"]},v_={ja:"どこまで詰めて、閉じられる？",en:"How much can you fill and still seal?",fr:"Combien peux-tu garnir et encore fermer ?",it:"Quanto ripieno riesci a chiudere?",de:"Wie viel Füllung kannst du einschließen?",es:"¿Cuánto relleno puedes encerrar?",tr:"Ne kadar iç koyup kapatabilirsin?","zh-CN":"放多少馅，还能包得住？",ko:"얼마나 넣고 닫을 수 있나요?","pt-BR":"Quanto recheio você consegue fechar?",ru:"Сколько начинки удастся запечатать?"},x_=Object.fromEntries(Object.entries(m_).map(([i,e])=>[i,{...Object.fromEntries(p_.map((t,n)=>[t,e[n]])),...Object.fromEntries(g_.map((t,n)=>[t,__[i][n]])),"dumpling.subtitle":v_[i]}])),pr=14;function M_(){const i=new wt,e=1+pr*(et+1);i.setAttribute("position",new je(new Float32Array(e*3),3)),i.setAttribute("normal",new je(new Float32Array(e*3),3)),i.setAttribute("color",new je(new Float32Array(e*3),3)),i.setAttribute("uv",new je(new Float32Array(e*2),2));const t=[];for(let n=0;n<et;n++)t.push(0,1+n+1,1+n);for(let n=1;n<pr;n++)for(let r=0;r<et;r++){const s=1+(n-1)*(et+1)+r,a=s+1,o=s+et+1,l=o+1;t.push(s,a,o,a,l,o)}return i.setIndex(t),i}function S_(i){let e=_c();const t=new At,n=new At;t.add(n);const r=new Set,s=new Set,a=(se,ce,T=.8)=>{const g=i.material(se,ce,T);return s.add(g),g},o=(se,ce,T=n)=>{r.add(se);const g=new it(se,ce);return g.castShadow=!0,g.receiveShadow=!0,T.add(g),g},l=o(new bt(2.18,2.23,.14,72),a("#d4ac79",void 0,.76));l.position.y=.015,l.scale.z=.86;const c=o(new on(2.08,.035,8,80),a("#835c3e"));c.rotation.x=-Math.PI/2,c.position.y=.1,c.scale.y=.86;const h=o(new bt(1.65,1.74,.08,64),a("#8e6745"));h.position.y=-.09,h.scale.z=.86;for(let se=-3;se<=3;se++){const ce=o(new Pt(3.65,.009,.012),a("#b18350"));ce.position.set(0,.09,se*.43),ce.scale.x=Math.sqrt(Math.max(.1,1-(se*.43/1.9)**2))}const f=a("#ffffff",3,.8);f.side=sn,f.vertexColors=!0;const u=M_(),d=o(u,f);d.frustumCulled=!1;const v=new Ro(1,0);r.add(v);const y=a("#ffffff",void 0,.83),m=new qc(v,y,No*3);m.count=0,m.castShadow=!0,m.receiveShadow=!0,n.add(m);const p=new Lt,M=new He,w=new He("#cd8b57"),x=["#5c8346","#93aa5e","#c88969","#e6cdb3"],b=new At;t.add(b),b.visible=!1;const E=a("#815c40",void 0,.46),C=a("#bca37c",void 0,.3),_=o(new Pt(.055,.07,1.03),C,b);_.position.set(-.08,.34,.5),_.rotation.z=-.08;const A=o(new Pt(.055,.07,1.03),C,b);A.position.set(.08,.34,.5),A.rotation.z=.08;const R=o(new Pt(.25,.12,.5),E,b);R.position.set(0,.36,1.2);const F=o(new bt(.14,.14,1.15,18),E,b);F.rotation.z=Math.PI/2,F.position.y=.38;const O=o(new Sn(.18,12,8),C,b);O.scale.set(1,.24,1.4),O.position.y=.35;const G=o(new bt(.045,.045,1.05,8),E,b);G.rotation.x=Math.PI/2,G.position.set(0,.37,.68);const U=new At;n.add(U);const H=new ti({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1});s.add(H);for(let se=0;se<5;se++){const ce=o(new Sn(.08,8,6),H,U);ce.position.set(Math.cos(se*2.4)*.5,1.25+se*.09,Math.sin(se*2.4)*.3),ce.scale.set(.65,1.6,.65)}let K="fill",J=.45,ie=!1,V=null,I=-1,k=.16,ue=-1/0,ge={x:0,z:0},Ge=-1,Pe=0,Ee=!1;const $=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let ne=[],he="",Re=!1;const Me=new L,Ie=new L;let Ke=0;function Fe(se=1){const ce=u.getAttribute("position"),T=u.getAttribute("uv"),g=u.getAttribute("color"),z=new He(e.color),W=new He("#a75824"),Z=e.cooking,le=e.cooked?yt(se/.52,0,1):0,de=e.cooked?yt((se-.48)/.42,0,1):0,Q=(Z?.swell??0)*le,ee=e.filling.reduce((X,re)=>X+re.size**3,0)||1,fe=e.filling.reduce((X,re)=>X+re.x*re.size**3,0)/ee*.28,Te=e.filling.reduce((X,re)=>X+re.z*re.size**3,0)/ee*.28;ce.setXYZ(0,fe,.15+Q*.35,Te),T.setXY(0,.5,.5),M.copy(z).lerp(W,e.cooked?se*.3:0),g.setXYZ(0,M.r,M.g,M.b);const me=Ee&&se<.58?ne:e.tears,N=me.map(X=>X>.3?"1":"0").join("");if(N!==he){const X=[];for(let _e=0;_e<et;_e++)X.push(0,1+_e+1,1+_e);for(let _e=1;_e<pr;_e++)for(let P=0;P<et;P++){if(_e>8&&Math.max(me[P]??0,me[(P+1)%et]??0)>.3)continue;const oe=1+(_e-1)*(et+1)+P,te=oe+1,pe=oe+et+1,xe=pe+1;X.push(oe,te,pe,te,xe,pe)}const re=u.getIndex();re.array.set(X),re.needsUpdate=!0,u.setDrawRange(0,X.length),he=N}for(let X=1;X<=pr;X++){const re=X/pr;for(let _e=0;_e<=et;_e++){const P=_e%et,oe=e.edges[P],te=Z?.before[P]??oe,pe={x:te.x+(oe.x-te.x)*de,z:te.z+(oe.z-te.z)*de,y:te.y+(oe.y-te.y)*de},xe=_e/et*Math.PI*2,ae=Math.hypot(pe.x,pe.z),Ne=yt(1-ae/yn,0,1),Le=Math.sin(re*Math.PI)*(Ne*.98+Q*.7),ut=pe.x*re+Math.cos(xe)*Le+fe*(1-re),ot=pe.z*re+Math.sin(xe)*Le+Te*(1-re),en=.15+(pe.y-.15)*Math.pow(re,1.14)+Math.sin(re*Math.PI)*(Ne*.1+Q*.32),Jt=1+(X-1)*(et+1)+_e;ce.setXYZ(Jt,ut,en,ot),T.setXY(Jt,.5+ut/(yn*2),.5+ot/(yn*2));const Ss=e.cooked?yt(.11+(1-re)*.24+Math.sin(xe*3.7+re*15)*.09+(re<.3?.28:0),0,.6)*se:0;M.copy(z).lerp(W,Ss),!e.cooked&&re>.58&&M.lerp(w,e.strain[P]*.48),g.setXYZ(Jt,M.r,M.g,M.b)}}ce.needsUpdate=!0,T.needsUpdate=!0,g.needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function Be(se=1){let ce=0;const T=e.cooking,g=new Set(T?.escaped??[]),z=e.cooked?yt((se-.51)/.44,0,1):0,W=(T?.weakEdge??0)/et*Math.PI*2;e.filling.forEach((Z,le)=>{let de=0;for(let ee=0;ee<le;ee++){const fe=e.filling[ee];Math.hypot(fe.x-Z.x,fe.z-Z.z)<.34&&de++}const Q=.23+Math.min(.82,de*.038);for(let ee=0;ee<3;ee++){const fe=le*2.399+ee*2.094,Te=ee===0?0:Z.size*.55;let me=Z.x+Math.cos(fe)*Te,N=Q+ee*.035,X=Z.z+Math.sin(fe)*Te;if(g.has(le)){const re=(le%7-3)*.09,_e=1.5+le%5*.095;me+=(Math.cos(W+re)*_e-Z.x)*z,X+=(Math.sin(W+re)*_e*.84-Z.z)*z,N+=(.18-N)*z+($?0:Math.sin(z*Math.PI)*(.75+le%3*.17))}else e.cooked&&(N+=(T?.swell??0)*.28*Math.min(1,se/.52));p.position.set(me,N,X),p.rotation.set(le*.71,fe,le*.43),p.scale.set(Z.size*(ee===0?1:.6),Z.size*.65,Z.size*(ee===0?.72:.5)),p.updateMatrix(),m.setMatrixAt(ce,p.matrix),m.setColorAt(ce,M.set(x[(Z.kind+ee)%4])),ce++}}),m.count=ce,m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.computeBoundingSphere()}function We(){const se=K==="pinch",ce=K==="stretch";_.visible=A.visible=R.visible=se,F.visible=ce,O.visible=G.visible=!se&&!ce,b.scale.setScalar(.7+J*.35)}function ke(se="place"){Fe(),Be(),i.changed(),Pe-Ke>.09&&(i.cue(se),Ke=Pe)}function rt(se,ce=!1){const T=Math.hypot(se.x-ge.x,se.z-ge.z)>.075;!ce&&Pe-ue<.13&&!T||u_(e,se,J)&&(ue=Pe,ge={x:se.x,z:se.z},ke())}const mt=8/7.9;function ve(se){let ce=0,T=1/0;return e.edges.forEach((g,z)=>{const W=Math.hypot(g.x-se.x,g.z-g.y*mt-se.z);W<T&&(T=W,ce=z)}),{index:ce,distance:T}}function ze(se,ce){return{x:se.x,z:se.z+ce*mt,pressure:se.pressure}}function Ye(se,ce=.16){Me.set(se.x,ce-.2,se.z),b.visible=!e.cooked}return Fe(),Be(),We(),{id:"dumpling",group:t,title:"dumpling.title",subtitle:"dumpling.subtitle",get hint(){return e.cooked?Ee?"dumpling.hintCooking":"dumpling.hintCooked":Math.max(...e.strain)>.65?"dumpling.hintTension":`dumpling.hint${K==="stretch"?"Stretch":K==="fill"?"Fill":"Pinch"}`},tools:[{id:"stretch",label:"dumpling.stretch"},{id:"fill",label:"dumpling.fill"},{id:"pinch",label:"dumpling.pinch"}],get activeTool(){return K},set activeTool(se){K=se},get color(){return e.color},set color(se){e.color=se},get size(){return J},set size(se){J=se},palette:["#f6dca8","#e8b3a9","#a9c48d","#d5b39c","#ece1ca","#cda3c1"],selectTool(se){["stretch","fill","pinch"].includes(se)&&(K=se,ie=!1,V=null,We(),i.cue("tap"),i.changed())},setColor(se){e.cooked||!/^#[0-9a-f]{6}$/i.test(se)||(e.color=se,Fe(),i.changed())},setSize(se){J=yt(Number.isFinite(se)?se:.45,.03,1),We(),i.changed()},pointerDown(se){if(e.cooked)return;ie=!0;const ce=ve(se);k=K==="fill"?.16:ce.distance<1.1?e.edges[ce.index].y:.16;const T=ze(se,k);V=T,Ye(T,k),Ie.copy(Me),b.position.copy(Ie),K==="fill"?rt(T,!0):K==="pinch"&&(I=ce.distance<.85?ce.index:-1,I>=0&&i.cue("tap"))},pointerMove(se){if(e.cooked)return;const ce=ze(se,ie?k:.16);if(Ye(ce,ie?k:.16),!(!ie||!V)){if(K==="stretch")c_(e,V,ce,J)&&ke();else if(K==="fill")rt(ce);else if(I>=0&&h_(e,I,ce,J)){const T=e.edges[I];Ye({x:T.x,z:T.z,pressure:se.pressure},T.y),ke()}V=ce}},pointerUp(){ie=!1,V=null,I=-1,b.visible=!1},update(se,ce){if(Pe=ce,b.visible&&(Ie.lerp(Me,1-Math.exp(-Math.min(.1,se)*24)),b.position.copy(Ie)),ie&&K==="fill"&&V&&Pe-ue>.12&&rt(V,!0),Ee&&Ge>=0){const T=ce-Ge,g=$?1:yt(T/1.2,0,1);Fe(g),Be(g),H.opacity=$?0:Math.sin(g*Math.PI)*.3,U.position.y=g*.24,!Re&&g>.55&&e.cooking?.escaped.length&&(Re=!0,i.cue("place")),g>=1&&(Ee=!1,H.opacity=0,i.changed())}},metrics(){const se=lo(e);return[{label:"dumpling.closure",value:se.closure,unit:"%"},{label:"dumpling.filling",value:se.filling,unit:"%"},{label:"dumpling.risk",value:se.risk,unit:"%"}]},canFinish(){return e.filling.length>0||e.pinches>0||e.stretches>0},get finishDelayMs(){return Ee&&!$?1250:0},finish(){const se=e.cooked;ne=[...e.tears];const ce=d_(e);return ie=!1,b.visible=!1,Ge=Pe,Ee=!se&&!$,Re=!1,Fe(Ee?0:1),Be(Ee?0:1),i.cue("finish"),i.changed(),{title:`dumpling.${ce.title}`,score:ce.score,advice:`dumpling.advice.${ce.advice}`,metrics:[{label:"dumpling.closure",value:ce.closure,unit:"%"},{label:"dumpling.filling",value:ce.filling,unit:"%"},{label:"dumpling.escaped",value:ce.leak,unit:"%"}]}},reset(){const se=e.color;e=_c(),e.color=se,K="fill",ie=!1,V=null,I=-1,Ge=-1,Ee=!1,H.opacity=0,b.visible=!1,Fe(),Be(),We(),i.changed()},snapshot(){return{state:JSON.parse(JSON.stringify(e)),tool:K,size:J}},restore(se){if(!se||typeof se!="object")return;const ce=se,T=f_(ce.state);T&&(e=T,K=typeof ce.tool=="string"&&["stretch","fill","pinch"].includes(ce.tool)?ce.tool:"stretch",J=typeof ce.size=="number"&&Number.isFinite(ce.size)?yt(ce.size,.03,1):.45,ie=!1,V=null,b.visible=!1,Ge=-1,Ee=!1,H.opacity=0,Fe(),Be(),We(),i.changed())},dispose(){for(const se of r)se.dispose();for(const se of s)se.dispose();t.clear()}}}const y_=""+new URL("music-BMg-2Jlx.mp3",import.meta.url).href,b_="data:audio/mpeg;base64,//uUxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAKAAAMSAAICAgICAgICAgRERERERERERERHx8fHx8fHx8fH0JCQkJCQkJCQkJSUlJSUlJSUlJSfn5+fn5+fn5+fp6enp6enp6enp7KysrKysrKysrK9/f39/f39/f39/////////////8AAAA5TEFNRTMuMTAwAqUAAAAALigAABRGJAX9ggAARgAADEi/gddFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sUxAADwAABpAAAACAAADSAAAAEd3AwN3OO8CAAAIOYPg+sP+UBAEATB8PlwfBA5lz/8oCAIHOD4CGikkmTgPSYJgeYCgeYIBk6lph+BhUCxv+HVvj92zVIsTlFg1rL//sUxCWDwAABpAAAACAAADSAAAAEh4DguSEDNQF1SlE+bGoGq86oG58kIGUgKeovueA0dmFA07j5AxVAw7U3vAxzipAxng9AODQBhNBiBiNBH926oGCYBgGBkCIGGUG4//s0xEsABIwg+BQxgANfQKKLO2AACAcAYQAKAiDhfrX18BQEwGDACwGEgBwGAcA4jgLcBYzV99VCpgMCIAQBgXhb4RUQaJ2CygCQCPq+r6lxcYzAnQslcrkMHYSxNe3t/7/FwDIJlwuIl8k0Tcrol///////////83WbqqwyGg2IxEqzWMlku1WzCAo2DgTv//uUxAoAHI1jc7m9kBm6mytfnrADL7vukIaINGjGDEnWLjLlM3WzCEBm6iSoWvmRPhgC6YSGjIC5zumSrRi9UaA1jQWYMAKefKkh8xs6OJJDIjGWRpuT8UUrA22CSgKEocNJiwYrt54nLIzTWqs0Z+fioEkQmcrkwIFtTMPxO3G7VNvmXgY2EQCVQsLAzY2UJP09uHKTmGGV3L612dVmL5N7G24tKelweZ552MOdpcst5U1NtjDpy29cqVqVwXawwp6e3Y/8MMcf/9ZZbxxs6+zbw1nrLev5nblljn4czz7S/kFP5kgAAEuS0vgCqHSF6RgimoJEJsK6TlcCTAOSOeoTQbTpJWHktbulJIMgahQ9ZqxI9JqamqLr/+Pqac7bqtiEjY85zfhzmpJHWqy1t9XPnai5e67c57UbaYq/3AoL+vhHQgo5z62UMcz/Q99NMb3/BQDAkCCCkGm6I3ICw6hJhfCHGUiISFGKYyNO94vO6xISgTLyHt4Ydjd0k95z//tExBYACkR3U6w8waGrkWgatMAAa2+fUb+3mukkVYMYXDLZUUCjyz1papN9TtORvs0lkXVck5dleVUIAACrMqxO2ODhBiQShUNl/WopmoT0qGQszbhed9xH/LJJOVAyVMs4Yrz5tWvXqqVhqd3gRV1nmP3Nyk9NnMWW5ZEsahcDoMBVwMHhdczQ4iE0D1HyRwY2YRxKxBs1MurXUlKqnKQaOuflawAA//ukxAEAGpFtNzmsAAOOLS13M4ACIAAAIENKQDeeg5AfiWYQ23FS45o4wkAHPQSSMcMM4ZCKwQJHTSZBjiIUPmYZbMF1Figb6XRdonChYbwJAMFRsCMF+3vWNQOSwZa69ErJS5tR1pa/1uzGYlLlXRuPSGnWa9iun0hM1I34oKGplR08N4QO0+/GqKrqlsT8Wsd3d5JrdPY1jemcIAsSqX09LZzqynGe7Wp88ZfF6nL3O1K9y/btz9Nbs53Zmnu3tZU1izlhMY91T///reu58/+91j+Hcv/v6/LPfe3EAgy7//ijf/9JBkICApFItqJMioxGI1EUDN+0ZPQzUpgc0QSs4LAtafZh51xh0bQ2orCvyYBF8HVIpK6fyPp8F9wcZvmava+lo8jBXHcRuZWIEzc/cTAOKUL3cfgaQtFeaPLhK2wB2UwXAcLTQLSIaI5tlaI11uLkMNkfc+UWlBgUxEuGVdl6IwvB/592ZbRxSg5W1nZmYcV2zxKwMO/7jq8o6GCnuiW6ktp6tP2nv4dVXTXYJYz5/sPaflD1NGqlbtXWX75vv593ncc9WxgjwPJD7qY4NfiTTPrd3rk1jldy3Zt2K9sNnP/////oAFkJ/4IWbG9GByYwhcwAFSktSCgy//uExAqAleGBSj2ngAo7pieiurABp2GvymkyrbIWCnNcIaEhENOU3jqUUF1aC1PoUN98sLDq1wKwmR0nSy1Li4wa6qpRXQlJxbVqtVrEzX1uEhzTFtCYlcX4gxenz57W/+dfVn0LLKwoahqtfWq9VpyiShglxZo1awYNa1t61r/9/Fv6wXrCnjmOpmjb1WLbe9Q5IquYpsRo29+sG1t4v8Y+fXHtn1/+tf/2tGCnxQERSKYEAwcljcYxgAYZhMEAOVQGSjUWKgEF/Wwqct+wOIw+vp/HASWQAbrDtDyWnV0SStZm41iTYzOsaBKgifJ5IH6+kZRQAdD8botlJCGLJJFhaSz66bUDVrLtdu1sOqUzc3Lz77a1rbPpy+q5/54dO2v4c7de+mf8Oc2Z1R2onTC9Y3agpRil+/5//8MvAAUAkwg0lEhD7SQSUjdYBNPI//ukxAkAHK1xSfmsAAOOsCXTO5AABg44UUwJ82mEzPogRmDNAI+VjDAizHoDFmniJB5nyIc6ZIXdNpw/CCeECMDBlhSQqURneLHBSBkqjqo10tAcBSa5H4WFUBKVoTlxMCetUDoNYljfqZua/Ccy4G9q8ppdD2e5NDdWnnWwwe7DF39dKX5ZUjdWcRyMQ/G5+9FWbKwRuBeulEFhmktdYZAtLjqkt3Hojd/cs5NupZry6Zu7wq8+rZtdrTcvs4SzCks83+GENWexXOQ1sv////7//r//////+/+FzV7nLexAGZ7////+WUACkASSAAAZg4uYcEKc+t4ZagSd0I8EBYYLAOYeiEBihMDgCAwlmB4GmLQNioGmA4HAEBkBqEJjlBeAHMhYIlTKFTbOCozS2JO1BbdIiy4EHBzJyqWoaZPBTtUY4aOAk0BqrQ1BMZklM3CGpZTz0NKtM5sEKgIwSTMUBtZXQO1De0gn+sRO1WGBS7sfeWWP7N7j1Wt2tlE35/C5j1TGhf2zji3Klrb1Wy33fP5Y7z/mX5wpmZTrAmXX313zL/1vf//8////5O1o0ubm31iUulWF2K6/nP/f73l38ec//////+rVpQBICQSGw0HA2EwAAAADQ3MAgBsN//ukxAoAHJoDO7m6gBN9MCebN7AAMTCJrxqaQQDBWMiYkCFvgwoNYUpWlq4TMjTEAFIAzYgEKQHOAzgYgMtE4L4hs4rUPcJg+Bi4AAZiMAGXiYLARQiQxhOkHAKJgGhjABhQRksZn0Rdi0E6OMiwuUDIYbAxaDQ/AmQAgwGriDG5EBRUw7BwgFArhhwGAOFoggwc8AIEFUiDkwaHECSHEQ01Ismag2DA3wMuBYQHSBcGMt//4gAOYTI4w+QdiYlD///FyEQTJQcCeYGn////Jw6mQci5uaFMrk4g3//////////5fNwBAAAAAIADSSc5UfXmYsS786pBMCEgcShcG/wIomoVZhYIx7/MzKjNjdOVwP81yxMPUjHEdYz1AkE//OShTAlM3LPMLEEtTDiX/8UwjhUogIxCAhQFM0QaZVZMJaO9//gJlCwgrkkCxJAQtbWs+0aQylP///67jBBMLgCMSxVTAUCf1/a1r8e////+YiKs2LWxB41MWWyZaNaGoeq0tm5/////roIQMqAZh4UgBjLfPxpu9NXmX9sfVxyy//////+TZxV/tZSSAX9uUt7mWONXWWX4467/////////9lUWTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVV//sUxA2DwAABpBwAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",vu="odd-crafts-",vc=i=>{try{return localStorage.getItem(vu+i)}catch{return null}},xc=(i,e)=>{try{localStorage.setItem(vu+i,e?"1":"0")}catch{}},A_=[{title:"Cozy Puzzle Title",author:"MintoDog",source:"OpenGameArt",url:"https://opengameart.org/content/cozy-puzzle-title",license:"CC0 1.0"},{title:"Wooden Blocks",author:"NearTheAtmoshphere",source:"Freesound",url:"https://freesound.org/people/NearTheAtmoshphere/sounds/676457/",license:"CC0 1.0"}];class E_{constructor(){this.music=vc("music")==="1",this.sounds=vc("sounds")!=="0",this.ctx=null,this.musicGain=null,this.sfxGain=null,this.musicBuffer=null,this.tapBuffer=null,this.musicLoading=null,this.tapLoading=null,this.musicSource=null,this.musicStartedAt=0,this.musicOffset=0,this.disposed=!1,this.abort=new AbortController,this.voices=new Set,this.pendingCue=null,this.lastCueAt=-1/0,this.onVisibility=()=>{this.apply()},typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibility)}async unlock(){if(!(this.disposed||typeof window>"u"))try{if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const n=new t;this.ctx=n,this.musicGain=n.createGain(),this.musicGain.gain.value=.11,this.musicGain.connect(n.destination),this.sfxGain=n.createGain(),this.sfxGain.gain.value=.18,this.sfxGain.connect(n.destination)}if(this.ctx.state==="suspended"&&await this.ctx.resume(),this.disposed)return;this.apply();const e=[];this.sounds&&e.push(this.loadTap()),this.music&&e.push(this.loadMusic()),await Promise.all(e),this.disposed||this.apply()}catch{}}sync(){xc("music",this.music),xc("sounds",this.sounds),this.sounds||(this.pendingCue=null),this.apply(),this.ctx?.state==="running"&&(this.music&&this.loadMusic(),this.sounds&&this.loadTap())}cue(e){if(this.disposed||!this.sounds||this.hidden())return;const t=performance.now();if(t-this.lastCueAt<55)return;if(!this.ctx||this.ctx.state!=="running"||!this.tapBuffer||!this.sfxGain){this.pendingCue={kind:e,at:t};return}this.lastCueAt=t;const n=this.ctx.createBufferSource();n.buffer=this.tapBuffer;const r=this.ctx.createGain();if(r.gain.value={tap:.46,place:.85,undo:.52,finish:1}[e],n.connect(r),r.connect(this.sfxGain),this.voices.add(n),n.onended=()=>{this.voices.delete(n),n.disconnect(),r.disconnect()},this.voices.size>6){const s=this.voices.values().next().value;if(s)try{s.stop()}catch{}}n.start()}dispose(){this.disposed||(this.disposed=!0,this.abort.abort(),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibility),this.pendingCue=null,this.stopMusic(),this.stopVoices(),this.musicGain?.disconnect(),this.sfxGain?.disconnect(),this.ctx&&this.ctx.close().catch(()=>{}),this.ctx=null)}hidden(){return typeof document<"u"&&document.hidden}apply(){if(!this.ctx||this.disposed)return;const e=!this.hidden();this.musicGain&&(this.musicGain.gain.value=e&&this.music?.11:0),this.sfxGain&&(this.sfxGain.gain.value=e&&this.sounds?.18:0),(!e||!this.sounds)&&this.stopVoices(),!e||!this.music?this.stopMusic():this.startMusic()}async decode(e){const t=this.ctx;if(!t||this.disposed)return null;try{const n=await fetch(e,{signal:this.abort.signal});if(!n.ok)return null;const r=await n.arrayBuffer();if(this.disposed)return null;const s=await t.decodeAudioData(r);return this.disposed?null:s}catch{return null}}loadTap(){return this.tapLoading||(this.tapLoading=this.decode(b_).then(e=>{this.tapBuffer=e;const t=this.pendingCue;this.pendingCue=null,e&&t&&performance.now()-t.at<350&&this.cue(t.kind)})),this.tapLoading}loadMusic(){return this.musicLoading||(this.musicLoading=this.decode(y_).then(e=>{this.musicBuffer=e,this.apply()})),this.musicLoading}startMusic(){const e=this.ctx,t=this.musicBuffer;if(!e||e.state!=="running"||!t||!this.musicGain||this.musicSource)return;const n=e.createBufferSource();n.buffer=t,n.loop=!0,n.connect(this.musicGain);const r=this.musicOffset%t.duration;this.musicStartedAt=e.currentTime-r,this.musicSource=n,n.onended=()=>{n.disconnect()},n.start(0,r)}stopMusic(){const e=this.musicSource;if(e){this.ctx&&this.musicBuffer&&(this.musicOffset=Math.max(0,this.ctx.currentTime-this.musicStartedAt)%this.musicBuffer.duration),this.musicSource=null;try{e.stop()}catch{}}}stopVoices(){for(const e of this.voices)try{e.stop()}catch{}this.voices.clear()}}const xu={gift:"gift-wrap",stamp:"quirky-stamp",candy:"cotton-candy",dumpling:"wild-dumpling"},Oo={gift:B0,stamp:Z0,candy:o_,dumpling:S_},T_=new URLSearchParams(location.search),Mc=T_.get("game")??Object.entries(xu).find(([,i])=>location.pathname.includes("/"+i+"/"))?.[0]??"gift",Mt=Mc in Oo?Mc:"gift",Mi=A0(),$e=E0(Mi,[to,du,so,pu,x_]),Mu=matchMedia("(prefers-reduced-motion: reduce)").matches,Xt=new E_;document.title=$e(Mt+".title");const ri=document.createElement("main");ri.className="workshop "+Mt;document.body.replaceChildren(ri);ri.innerHTML=`<header class="masthead"><button class="menu-button" aria-label="${$e("choose")}"><span></span><span></span></button><div class="brand">ODD CRAFTS <span>NO. ${["gift","stamp","candy","dumpling"].indexOf(Mt)+1}</span></div><button class="audio-button" aria-label="${$e("sound")}" aria-pressed="${Xt.sounds}">♪</button></header><section class="heading"><p class="eyebrow">${$e("studio")}</p><h1>${$e(Mt+".title")}</h1><p class="subtitle"></p></section><section class="stage-shell"><div class="stage"></div><div class="live-metrics" aria-live="polite"></div><div class="gesture-dot" hidden></div><p class="hint"></p></section><section class="tray"><div class="tools" role="toolbar"></div><div class="controls"><div class="palette-field"><span class="field-label">${$e("color")}</span><div class="palette"></div><label class="custom-color"><input type="color" aria-label="${$e("color")}"/><span>＋</span></label></div><label class="range-field"><span class="field-label">${$e("size")}</span><input type="range" min="3" max="100" value="35" aria-label="${$e("size")}"/><span class="brush-preview"></span></label></div><button class="finish primary" disabled>${$e("finish")}<span>↗</span></button></section><div class="result" hidden><div class="result-head"><p class="eyebrow">${$e("result")}</p><h2></h2><div class="result-score"><strong>0</strong><span>/ 100 ${$e("score")}</span></div></div><div class="result-metrics"></div><div class="result-actions"><button class="save primary">${$e("save")} ↓</button><button class="share">${$e("share")} ↗</button><button class="again">${$e("again")}</button></div></div><dialog class="menu"><div class="menu-head"><h2>${$e("choose")}</h2><button class="close-menu" aria-label="${$e("back")}">×</button></div><nav></nav><label class="music-option"><input type="checkbox" ${Xt.music?"checked":""}/>${$e("music")}</label><select aria-label="Language">${vs.map(i=>`<option value="${i}" ${Mi===i?"selected":""}>${{ja:"日本語",en:"English",fr:"Français",it:"Italiano",de:"Deutsch",es:"Español",tr:"Türkçe","zh-CN":"简体中文",ko:"한국어","pt-BR":"Português",ru:"Русский"}[i]}</option>`).join("")}</select><details><summary>${$e("credits")}</summary>${A_.map(i=>`<p>${i.title} — ${i.author}<br>${i.license} · <a href="${i.url}" target="_blank" rel="noopener">${i.source}</a></p>`).join("")}</details><p class="prototype-note">${$e("developing")}</p></dialog><p class="toast" role="status" hidden></p>`;function qe(i){return ri.querySelector(i)}const w_=qe(".stage"),Wn=new S0(w_,Mt),hn=Wn.renderer.domElement;let zt=null,at=null,_i=null,dn=!1,Sc=0,yc=0;const C_={changed(){dn=!0},cue(i){Xt.cue(i)},material:(i,e,t)=>Wn.material(i,e,t)};zt=Oo[Mt](C_);Wn.scene.add(zt.group);const bc=w0(Mt);bc&&zt.restore(bc);const dt=zt,yr=document.createElement("p");yr.className="retry-advice";yr.hidden=!0;qe(".result-actions").before(yr);const br=document.createElement("p");br.className="comparison";br.hidden=!0;qe(".result-score").after(br);hn.setAttribute("aria-label",$e(dt.title)+" — "+$e(dt.hint));qe(".subtitle").textContent=$e(dt.subtitle);const R_=new URL(""+new URL("material-atlas-v1-CKNyBZEa.png",import.meta.url).href,import.meta.url).href;Wn.loadAtlas(R_);const P_=["⌁","▰","⌘","↻"];function Xn(){if(!zt)return;qe(".hint").textContent=$e(zt.hint),qe(".finish").disabled=!zt.canFinish(),qe(".live-metrics").replaceChildren(...zt.metrics().slice(0,3).map(e=>{const t=document.createElement("div"),n=document.createElement("span"),r=document.createElement("strong");return n.textContent=$e(e.label),r.textContent=Intl.NumberFormat(Mi,{maximumFractionDigits:1}).format(e.value)+(e.unit??""),t.append(n,r),t})),qe(".tools").querySelectorAll("button").forEach(e=>{const t=e.dataset.tool===zt.activeTool;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))}),qe("input[type=color]").value=zt.color,qe("input[type=range]").value=String(Math.round(zt.size*100)),qe(".brush-preview").style.setProperty("--brush",`${4+zt.size*17}px`);const i=Mt==="gift"?zt.activeTool==="tape":Mt==="stamp"?zt.activeTool==="carve":Mt==="candy"?zt.activeTool!=="lift":!0;qe(".range-field").hidden=!i,qe(".controls").classList.toggle("no-size",!i),qe(".palette").querySelectorAll("button").forEach(e=>{e.classList.toggle("selected",e.dataset.color===zt.color),e.setAttribute("aria-pressed",String(e.dataset.color===zt.color))})}dt.tools.forEach((i,e)=>{const t=document.createElement("button");t.dataset.tool=i.id;const n=document.createElement("span");n.className="tool-icon",n.textContent=P_[e]??"·";const r=document.createElement("span");r.textContent=$e(i.label),t.append(n,r),t.onclick=()=>{at||(Xt.unlock(),dt.selectTool(i.id),Xn(),dn=!0)},qe(".tools").append(t)});dt.palette.forEach(i=>{const e=document.createElement("button");e.style.setProperty("--swatch",i),e.dataset.color=i,e.ariaLabel=$e("color")+" "+i,e.onclick=()=>{dt.setColor(i),Xn(),Xt.cue("tap"),dn=!0},qe(".palette").append(e)});qe("input[type=color]").oninput=i=>{dt.setColor(i.target.value),dn=!0,Xn()};qe("input[type=range]").oninput=i=>{dt.setSize(Number(i.target.value)/100),dn=!0,Xn()};const mr=qe(".gesture-dot"),Su=i=>{const e=Wn.point(i);if(e){const t=qe(".stage-shell").getBoundingClientRect();mr.hidden=i.pointerType==="mouse",mr.style.left=i.clientX-t.left+"px",mr.style.top=i.clientY-t.top-(i.pointerType==="mouse"?0:44)+"px"}return e};hn.onpointerdown=i=>{if(at||_i!==null)return;i.preventDefault(),_i=i.pointerId,hn.setPointerCapture(i.pointerId),Xt.unlock();const e=Su(i);e&&dt.pointerDown(e),dn=!0,Xn(),console.info("[Game] kind=craft_start game="+Mt)};hn.onpointermove=i=>{if(i.pointerId!==_i||at)return;i.preventDefault();const e=Su(i);e&&dt.pointerMove(e),dn=!0};function L_(i){i.pointerId===_i&&(dt.pointerUp(),hn.hasPointerCapture(i.pointerId)&&hn.releasePointerCapture(i.pointerId),_i=null,mr.hidden=!0,dn=!0,Xn(),Ji(Mt,dt.snapshot(),at))}function Ms(){_i!==null&&(dt.cancelPointer?dt.cancelPointer():dt.pointerUp(),_i=null,mr.hidden=!0,dn=!0)}hn.onpointerup=L_;hn.onpointercancel=Ms;hn.onlostpointercapture=Ms;function I_(){if(!at)return;const i=at;qe(".result h2").textContent=$e(at.title),qe(".result-metrics").replaceChildren(...at.metrics.map(n=>{const r=document.createElement("p"),s=document.createElement("span"),a=document.createElement("strong");return s.textContent=$e(n.label),a.textContent=Intl.NumberFormat(Mi,{maximumFractionDigits:1}).format(n.value)+(n.unit??""),r.append(s,a),r}));const e=performance.now();function t(n){if(at!==i)return;const r=Mu?1:Math.min(1,(n-e)/650);qe(".result-score strong").textContent=String(Math.round(i.score*(1-Math.pow(1-r,3)))),r<1&&requestAnimationFrame(t)}requestAnimationFrame(t)}function co(){if(!at)return;Wn.finish(Mt,Mt==="candy"&&at.metrics.some(e=>e.label==="candy.metric.lost"&&e.value>0)),ri.classList.remove("finishing"),ri.classList.add("completed"),qe(".result").hidden=!1,qe(".tray").hidden=!0,qe(".heading").hidden=!0,yr.hidden=!at.advice,yr.textContent=at.advice?$e(at.advice):"";const i=R0(Mt);br.hidden=i===null,br.textContent=i!==null?$e("comparison",{before:i,after:at.score}):"",I_()}function yu(){if(at||!dt.canFinish())return;Ms(),at=dt.finish(),Ji(Mt,dt.snapshot(),at),Xt.cue("finish");const i=Mu?0:Math.min(1400,dt.finishDelayMs??0);i>0?(ri.classList.add("finishing"),qe(".tray").hidden=!0,setTimeout(()=>co(),i)):co(),console.info("[Game] kind=craft_finish game="+Mt+" score="+at.score)}qe(".finish").onclick=yu;qe(".again").onclick=()=>{at&&C0(Mt,at.score),at=null,dt.reset(),Wn.resetCamera(),ri.classList.remove("completed","finishing"),qe(".result").hidden=!0,qe(".tray").hidden=!1,qe(".heading").hidden=!1,Xn(),Ji(Mt,dt.snapshot()),Xt.cue("tap")};qe(".save").onclick=()=>{if(!at)return;Wn.render();const i=document.createElement("canvas");i.width=1080,i.height=1440;const e=i.getContext("2d");e.fillStyle="#f8f2e7",e.fillRect(0,0,1080,1440),e.fillStyle="#2b3631",e.font="600 34px sans-serif",e.textAlign="center",e.fillText("ODD CRAFTS",540,90),e.font="600 44px sans-serif",e.fillText($e(dt.title),540,164,990);const t=hn.width/hn.height,n=880,r=n*t;e.drawImage(hn,(1080-r)/2,180,r,n),e.font="600 42px sans-serif",e.fillText($e(at.title),540,1135,980),e.font="700 90px sans-serif",e.fillText(String(at.score)+" / 100",540,1250),e.font="26px sans-serif",e.fillText(at.metrics.map(s=>$e(s.label)+": "+s.value+(s.unit??"")).join("   ·   "),540,1340,1e3),i.toBlob(s=>{if(!s)return;const a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=Mt+"-craft.png",o.click(),setTimeout(()=>URL.revokeObjectURL(a),1e4);const l=qe(".toast");l.textContent=$e("saved"),l.hidden=!1,setTimeout(()=>l.hidden=!0,1800)},"image/png")};qe(".share").onclick=()=>{if(!at)return;const i=$e("shareText",{game:$e(dt.title),title:$e(at.title),score:at.score}),e=new URL(location.href);e.search="?lang="+Mi;const t=new URL("https://x.com/intent/tweet");t.searchParams.set("text",i),t.searchParams.set("url",e.href),t.searchParams.set("hashtags","gamedev,indiedev,ゲーム制作,個人開発,ブラウザゲーム"),window.open(t.href,"_blank","noopener,noreferrer")};qe(".audio-button").onclick=()=>{Xt.sounds=!Xt.sounds,Xt.sync(),Xt.unlock(),qe(".audio-button").ariaPressed=String(Xt.sounds)};const bu=qe(".menu");qe(".menu-button").onclick=()=>bu.showModal();qe(".close-menu").onclick=()=>bu.close();qe(".music-option input").onchange=i=>{Xt.music=i.target.checked,Xt.sync(),Xt.unlock()};qe(".menu select").onchange=i=>{const e=i.target.value;try{localStorage.setItem("odd-crafts-lang",e)}catch{}const t=new URL(location.href);t.searchParams.set("lang",e),location.assign(t.href)};Object.keys(Oo).forEach(i=>{const e=document.createElement("a"),t=i,n=new URL(location.href);location.hostname==="localhost"||location.hostname==="127.0.0.1"?n.searchParams.set("game",i):(n.pathname="/browser_play/"+xu[t]+"/",n.search="?lang="+Mi),e.href=n.href,e.textContent=$e(i+".title"),e.classList.toggle("current",i===Mt),qe(".menu nav").append(e)});Xn();let Ac=performance.now();const ua=T0(Mt);ua&&$e(ua.title)!==ua.title&&(at=dt.finish(),co());function Au(i){const e=Math.min(.05,(i-Ac)/1e3);Ac=i,document.hidden||(dt.update(e,i/1e3),!at&&dt.autoFinish&&yu(),Wn.render(),dn&&i-yc>120&&(Xn(),yc=i),dn&&i-Sc>900&&(Ji(Mt,dt.snapshot(),at),dn=!1,Sc=i)),requestAnimationFrame(Au)}requestAnimationFrame(Au);document.addEventListener("visibilitychange",()=>{document.hidden&&(Ms(),Ji(Mt,dt.snapshot(),at))});window.addEventListener("pagehide",()=>{Ji(Mt,dt.snapshot(),at)});console.info("[Game] kind=ready game="+Mt+" lang="+Mi+" build=odd-crafts-v2");
