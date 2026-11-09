(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const eh=""+new URL("food-materials-CxPyToPk.jpg",import.meta.url).href,th=""+new URL("odd-materials-DBdrs3_l.jpg",import.meta.url).href,Nc=["boot","toilet","alarmClock","battery","controller","trophy","trafficCone","rubberDuck","cactus","dumbbell","kettle","bowlingPin","handheld","rocket","luckyCat","miniFan","trafficLight","puzzleCube","lightBulb","deskBell"],en={chicken:{rx:.5,ry:.36,rz:.42,mass:1.2,value:160,color:12087352},shrimp:{rx:.9,ry:.22,rz:.28,mass:.7,value:220,color:15899510},egg:{rx:.5,ry:.25,rz:.34,mass:.9,value:100,color:15780432},broccoli:{rx:.4,ry:.5,rz:.4,mass:.45,value:90,color:5213008},sausage:{rx:.3,ry:.45,rz:.3,mass:.65,value:120,color:14050640},rice:{rx:.45,ry:.4,rz:.4,mass:1,value:70,color:16314585},boot:{rx:.57,ry:.32,rz:.31,mass:.9,value:68e3,color:8412487,softness:.3},toilet:{rx:.43,ry:.39,rz:.55,mass:1.8,value:198e3,color:15855333,softness:.02},alarmClock:{rx:.36,ry:.31,rz:.23,mass:.65,value:88e3,color:14380375,softness:.04},battery:{rx:.43,ry:.18,rz:.18,mass:1.2,value:2e4,color:5134688,softness:.015},controller:{rx:.6,ry:.18,rz:.34,mass:.6,value:8e4,color:8622768,softness:.06},trophy:{rx:.3,ry:.35,rz:.27,mass:.8,value:24e5,color:14068303,softness:.03},trafficCone:{rx:.33,ry:.34,rz:.33,mass:.45,value:4e4,color:15829837,softness:.2},rubberDuck:{rx:.39,ry:.28,rz:.35,mass:.35,value:3e4,color:15781453,softness:.68},cactus:{rx:.31,ry:.34,rz:.28,mass:.6,value:68e4,color:7181661,softness:.24},dumbbell:{rx:.69,ry:.24,rz:.25,mass:2,value:12e4,color:6383984,softness:.005},kettle:{rx:.45,ry:.33,rz:.36,mass:1.1,value:38e4,color:9549482,softness:.04},bowlingPin:{rx:.61,ry:.22,rz:.23,mass:.9,value:75e3,color:15854044,softness:.035},handheld:{rx:.44,ry:.16,rz:.31,mass:.6,value:15e4,color:11705529,softness:.04},rocket:{rx:.28,ry:.45,rz:.28,mass:1.3,value:5e6,color:14186340,softness:.025},luckyCat:{rx:.31,ry:.34,rz:.28,mass:.75,value:3e6,color:16115918,softness:.035},miniFan:{rx:.34,ry:.34,rz:.25,mass:.7,value:55e3,color:9088692,softness:.06},trafficLight:{rx:.22,ry:.42,rz:.22,mass:.95,value:9e5,color:5595228,softness:.025},puzzleCube:{rx:.29,ry:.29,rz:.29,mass:.55,value:65e3,color:14787406,softness:.015},lightBulb:{rx:.25,ry:.32,rz:.25,mass:.4,value:24e3,color:15784839,softness:.02},deskBell:{rx:.38,ry:.22,rz:.38,mass:.65,value:24e4,color:12040361,softness:.03}},Ve={halfX:1.8,halfZ:1.3,floorY:.12,rimY:.82},Uc=12,Fr=1/120,Or=Math.PI*2,rr=.018,mt=(n,e,t)=>Math.max(e,Math.min(t,n)),vn=(n,e=0)=>Number.isFinite(n)?n:e,Fc=n=>(vn(n)%Or+Or)%Or;function ya(){return{phase:"pack",foods:[],heldId:null,tool:{x:0,y:1.65,z:.25,tx:0,tz:.25,vx:0,vz:0},lid:0,lidTarget:0,pressure:0,ejections:0,discarded:0,result:null,nextId:1,time:0,closedFor:0,remainder:0,stressedFor:0,ejectCooldown:0,mysteryBag:[]}}function Qt(n){const e=en[n.kind],t=Math.cos(n.angle),i=Math.sin(n.angle),s=mt(n.compression,0,1);return{x:Math.hypot(e.rx*t,e.rz*i)*(1+s*.12),y:e.ry*(1-s*.48),z:Math.hypot(e.rx*i,e.rz*t)*(1+s*.12)}}function Oc(n){const e=Qt(n);return Math.abs(n.x)<=Ve.halfX-e.x*.22&&Math.abs(n.z)<=Ve.halfZ-e.z*.22}function Bc(n){const e=Qt(n);return Math.abs(n.x)>Ve.halfX+e.x*.18||Math.abs(n.z)>Ve.halfZ+e.z*.18}function Sr(n){let e=0;for(let t=n.foods.length-1;t>=0;t--){const i=n.foods[t];i.id===n.heldId||!i.escaped&&!Bc(i)||(n.foods.splice(t,1),e++)}return n.discarded=Math.max(0,vn(n.discarded))+e,n.ejections=Math.max(0,vn(n.ejections))+e,e}function Sa(n,e){if(n.phase!=="pack"||!Object.prototype.hasOwnProperty.call(en,e)||n.foods.length>=Uc)return!1;Qn(n);const t={id:n.nextId++,kind:e,x:n.tool.x,y:Math.max(1.55,n.tool.y),z:n.tool.z,angle:0,vx:0,vy:0,vz:0,angular:0,compression:0,escaped:!1};return n.foods.push(t),n.heldId=t.id,!0}function nh(n){const e=[...Nc];for(let t=e.length-1;t>0;t--){let i=.5;try{i=n()}catch{}const s=Number.isFinite(i)?mt(i,0,1-Number.EPSILON):.5,r=Math.floor(s*(t+1)),o=e[t];e[t]=e[r],e[r]=o}return e}function ih(n,e=Math.random){if(n.phase!=="pack"||n.foods.length>=Uc)return!1;(!Array.isArray(n.mysteryBag)||n.mysteryBag.length===0)&&(n.mysteryBag=nh(e));const t=n.mysteryBag[n.mysteryBag.length-1];if(!t||!Nc.includes(t)||!Sa(n,t))return!1;n.mysteryBag.pop();const i=n.foods[n.foods.length-1];return i.concealed=!0,!0}function sh(n,e){if(n.phase!=="pack")return!1;const t=n.foods.find(i=>i.id===e);return t?(n.heldId!==e&&Qn(n),n.heldId=e,n.tool.x=t.x,n.tool.z=t.z,n.tool.y=Math.max(.9,t.y),n.tool.tx=t.x,n.tool.tz=t.z,n.tool.vx=0,n.tool.vz=0,t.vx=0,t.vy=0,t.vz=0,t.angular=0,!0):!1}function rh(n,e,t){n.phase!=="pack"||!Number.isFinite(e)||!Number.isFinite(t)||(n.tool.tx=mt(e,-2.65,2.65),n.tool.tz=mt(t,-2.1,2.1))}function Qn(n){if(n.phase!=="pack"||n.heldId===null)return!1;const e=n.foods.find(t=>t.id===n.heldId);return n.heldId=null,e?(e.concealed&&(e.concealed=!1),e.vx=mt(n.tool.vx*.52,-4.2,4.2),e.vz=mt(n.tool.vz*.52,-4.2,4.2),e.vy=-.1,e.angular=mt((n.tool.vx-n.tool.vz)*.36,-3,3),Sr(n),!0):!1}function oh(n,e){if(n.phase!=="pack"||n.heldId===null||!Number.isFinite(e))return!1;const t=n.foods.find(i=>i.id===n.heldId);return t?(t.angle=Fc(t.angle+e),!0):!1}function ah(n){if(n.phase!=="pack"||n.foods.length===0)return!1;const e=n.foods.pop();return n.heldId===e.id&&(n.heldId=null),!0}function lh(n){return n.phase!=="pack"||n.foods.length===0||(Qn(n),Sr(n),n.foods.length===0)?!1:(n.phase="press",n.lidTarget=n.lid,n.closedFor=0,n.stressedFor=0,!0)}function ba(n,e){n.phase!=="press"||!Number.isFinite(e)||(n.lidTarget=mt(e,0,1))}function ch(n){n.phase!=="pack"&&(n.phase="pack",n.result=null,n.lidTarget=0,n.closedFor=0,n.stressedFor=0,n.heldId=null,n.pressure=0,n.remainder=0)}function fl(n){let e=1;for(const t of n.foods){if(t.id===n.heldId)continue;const i=Qt(t);if(Math.abs(t.x)-i.x>=Ve.halfX||t.z-i.z>=Ve.halfZ||t.z+i.z<=-1.3)continue;const s=t.y-Ve.rimY-rr;if(s+i.y<=0)continue;const r=t.z+Ve.halfZ;if(r<=i.z+1e-7){e=0;continue}const o=r*r-i.z*i.z,a=Math.max(0,(r*s+Math.sqrt(i.z*i.z*s*s+o*i.y*i.y))/o),l=1-Math.atan(a)*2/Math.PI;e=Math.min(e,mt(vn(l),0,1))}return e}function Ea(n){const e=n.foods.filter(r=>r.id!==n.heldId&&Oc(r)),t=e.reduce((r,o)=>r+en[o.kind].value,0),i=e.reduce((r,o)=>{const a=en[o.kind];return r+4/3*Math.PI*a.rx*a.ry*a.rz},0),s=Ve.halfX*2*Ve.halfZ*2*(Ve.rimY-Ve.floorY);return{value:t,inside:e.length,fill:Math.round(mt(i/s*100,0,100)),colors:Math.min(6,new Set(e.map(r=>r.kind)).size),closure:Math.round(mt(n.lid*100,0,100))}}function zc(n){n.phase==="pack"&&Qn(n);const e=Sr(n);if(n.result&&n.phase==="result"&&e===0)return n.result;const t=Ea(n),i=n.discarded+n.foods.length-t.inside,s=n.foods.reduce((l,c)=>l+c.compression,0)/Math.max(1,n.foods.length),r=mt(Math.log1p(Math.max(0,t.value)/1e3)/Math.log1p(5e6/1e3),0,1)*34,o=t.inside===0?0:Math.round(mt(r+t.closure*.32+t.colors/6*26+t.fill*.08-i*5-s*8,0,100));let a="title.apprentice";return t.inside===0||t.value<250?a="title.hungry":i>=2?a="title.escape":s>.32?a="title.crusher":o>=85&&t.closure>=97?a="title.master":t.colors>=5&&(a="title.colorful"),n.result={score:o,value:t.value,closure:t.closure,colors:t.colors,inside:t.inside,lost:i,titleKey:a},n.phase="result",n.pressure=0,n.heldId=null,n.remainder=0,n.result}function uh(n,e){const t=n.tool,i=n.foods.find(l=>l.id===n.heldId),r=48/(1+(i?i.concealed?1:en[i.kind].mass:.6)*.25),o=8.6;t.vx+=((t.tx-t.x)*r-t.vx*o)*e,t.vz+=((t.tz-t.z)*r-t.vz*o)*e,t.vx=mt(t.vx,-7,7),t.vz=mt(t.vz,-7,7),t.x=mt(t.x+t.vx*e,-2.8,2.8),t.z=mt(t.z+t.vz*e,-2.25,2.25);const a=Math.min(.1,Math.hypot(t.vx,t.vz)*.022)*Math.sin(n.time*8.5);t.y+=(1.65+a-t.y)*Math.min(1,e*8),i&&(i.x=t.x,i.y=t.y,i.z=t.z,i.vx=t.vx,i.vy=0,i.vz=t.vz,i.compression*=Math.exp(-e*5))}function hh(n,e){const t=Qt(n),i=Qt(e),s=t.x+i.x,r=t.y+i.y,o=t.z+i.z,a=e.x-n.x,l=e.y-n.y,c=e.z-n.z,h=Math.sqrt((a/s)**2+(l/r)**2+(c/o)**2);if(h>=1)return;let p=a/(s*s),u=l/(r*r),m=c/(o*o);const g=Math.hypot(p,u,m);g<1e-8?(p=0,u=1,m=0):(p/=g,u/=g,m/=g);const _=Math.sqrt((p/s)**2+(u/r)**2+(m/o)**2),d=Math.min(.35,Math.max(0,(1-h)/Math.max(.01,_)))*.72,f=1/en[n.kind].mass,y=1/en[e.kind].mass,T=f+y;n.x-=p*d*f/T,n.y-=u*d*f/T,n.z-=m*d*f/T,e.x+=p*d*y/T,e.y+=u*d*y/T,e.z+=m*d*y/T;const M=(e.vx-n.vx)*p+(e.vy-n.vy)*u+(e.vz-n.vz)*m;if(M<0){const w=-M*1.12/T;n.vx-=p*w*f,n.vy-=u*w*f,n.vz-=m*w*f,e.vx+=p*w*y,e.vy+=u*w*y,e.vz+=m*w*y,n.angular+=(m*a-p*c)*.07,e.angular-=(m*a-p*c)*.07}Math.abs(u)>.45&&(n.vx*=.96,n.vz*=.96,e.vx*=.96,e.vz*=.96)}function dh(n){const e=Qt(n),t=Math.abs(n.x)<Ve.halfX&&Math.abs(n.z)<Ve.halfZ,i=(t?Ve.floorY:.015)+e.y;if(n.y<i&&(n.y=i,n.vy=n.vy<-.5?-n.vy*.12:0,n.vx*=.93,n.vz*=.93,n.angular*=.94),n.y-e.y<Ve.rimY&&!n.escaped&&t){const s=Ve.halfX-e.x,r=Ve.halfZ-e.z;n.x>s&&(n.x=s,n.vx>0&&(n.vx*=-.24)),n.x<-s&&(n.x=-s,n.vx<0&&(n.vx*=-.24)),n.z>r&&(n.z=r,n.vz>0&&(n.vz*=-.24)),n.z<-r&&(n.z=-r,n.vz<0&&(n.vz*=-.24))}Bc(n)&&(n.escaped=!0),n.x=mt(vn(n.x),-4.3,4.3),n.y=mt(vn(n.y,i),.01,5),n.z=mt(vn(n.z),-3.5,3.5),n.vx=mt(vn(n.vx),-8,8),n.vy=mt(vn(n.vy),-9,8),n.vz=mt(vn(n.vz),-8,8)}function pl(n){for(const e of n.foods){const t=Qt(e);if(e.id===n.heldId||e.y+t.y<=Ve.rimY||Math.abs(e.x)-t.x>=Ve.halfX)continue;const i=e.z+Ve.halfZ;Math.abs(i)>=t.z+rr||(i>=0?(e.z=-1.3+t.z+rr,e.vz=Math.max(.1,e.vz)):(e.z=-1.3-t.z-rr,e.vz=Math.min(-.1,e.vz)))}}function fh(n,e){if(n.phase!=="press"){n.lid+=(0-n.lid)*Math.min(1,e*5),n.lid<.001&&(n.lid=0),n.pressure*=Math.exp(-e*6);for(const _ of n.foods)_.compression*=Math.exp(-e*3.4);return}pl(n);const t=(n.lidTarget-n.lid)*Math.min(1,e*4.7),i=mt(n.lid+t,0,1),s=[];let r=0;const o=(1-i)*Math.PI/2,a=Math.cos(o),l=Math.sin(o);for(const _ of n.foods){const d=Qt(_);if(Math.abs(_.x)-d.x>=Ve.halfX||_.z-d.z>=Ve.halfZ||_.z+d.z<=-1.3){_.compression*=Math.exp(-e*3);continue}const f=(_.y-Ve.rimY)*a-(_.z+Ve.halfZ)*l+Math.hypot(d.y*a,d.z*l),y=Math.max(0,f/Math.max(.18,a));y>0?(s.push({food:_,overlap:y}),r+=y):_.compression*=Math.exp(-e*1.8)}const c=r*3.1,h=fl(n),p=n.lid+(t>0?t/(1+c):t);n.lid=mt(Math.min(p,h),0,1);const u=Math.max(0,n.lidTarget-n.lid),m=n.lidTarget>h+.001,g=mt(r*.85+u*(s.length>0||m?1.5:0)+(m?.18:0),0,1);n.pressure+=(g-n.pressure)*Math.min(1,e*9);for(const _ of s){const d=_.food,f=en[d.kind],y=mt(f.softness??(d.kind==="rice"?.88:d.kind==="broccoli"?.75:d.kind==="chicken"?.44:.62),0,1),T=mt(d.compression+_.overlap/Math.max(.03,f.ry*.96)*.85,0,y);d.compression+=(T-d.compression)*Math.min(1,e*7);const M=Math.min(14,_.overlap*24+u*5)/Math.max(.5,f.mass);d.vy-=M*e,d.vz+=M*e*(.9+.2*(1-n.lid)),d.vx+=(d.x===0?d.id%2?-1:1:Math.sign(d.x))*M*e*.3}if(n.stressedFor=n.pressure>.62&&n.lidTarget>.94?n.stressedFor+e:Math.max(0,n.stressedFor-e*2),n.ejectCooldown=Math.max(0,n.ejectCooldown-e),n.stressedFor>.2&&n.ejectCooldown===0){const _=s.filter(d=>d.food.y+Qt(d.food).y>Ve.rimY+.12).sort((d,f)=>f.food.y+Qt(f.food).y-(d.food.y+Qt(d.food).y))[0];if(_){const d=_.food,f=d.x<-.02?-1:d.x>.02?1:d.id%2?-1:1;d.vx+=f*3.7,d.vy=Math.max(d.vy,3.1),d.vz+=2.3,d.angular+=f*4,n.ejectCooldown=.65,n.stressedFor=0}}pl(n),n.lid=Math.min(n.lid,fl(n))}function ph(n,e){if(n.phase!=="press")return;const t=Ea(n),i=n.foods.some(s=>!s.escaped&&Oc(s)&&s.y+Qt(s).y>Ve.rimY+.055);n.lid>=.978&&t.inside>0&&!i&&n.pressure<.75?n.closedFor+=e:n.closedFor=0,n.closedFor>=1&&zc(n)}function mh(n,e){n.time+=e,n.phase==="pack"&&uh(n,e);for(const t of n.foods)t.id!==n.heldId&&(t.vy-=6.6*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.angle=Fc(t.angle+t.angular*e),t.angular*=Math.exp(-e*.7),t.vx*=Math.exp(-e*.18),t.vz*=Math.exp(-e*.18));for(let t=0;t<3;t++){for(let i=0;i<n.foods.length;i++){const s=n.foods[i];if(s.id!==n.heldId)for(let r=i+1;r<n.foods.length;r++){const o=n.foods[r];o.id!==n.heldId&&hh(s,o)}}for(const i of n.foods)i.id!==n.heldId&&dh(i)}fh(n,e),Sr(n),ph(n,e)}function gh(n,e){if(!(n.phase==="result"||!Number.isFinite(e)||e<=0)){for(n.remainder+=Math.min(.06,e);n.remainder+1e-10>=Fr&&_h(n);)n.remainder-=Fr,mh(n,Fr);n.remainder=Math.max(0,n.remainder)}}function _h(n){return n.phase!=="result"}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="186",vh=0,ml=1,xh=2,or=1,kc=2,ls=3,pi=0,Vt=1,Mn=2,Fn=0,ds=1,gl=2,_l=3,vl=4,Mh=5,Oi=100,yh=101,Sh=102,bh=103,Eh=104,Th=200,wh=201,Ah=202,Ch=203,Gc=204,Hc=205,Rh=206,Ph=207,Lh=208,Ih=209,Dh=210,Nh=211,Uh=212,Fh=213,Oh=214,To=0,wo=1,Ao=2,_s=3,Co=4,Ro=5,Po=6,Lo=7,Vc=0,Bh=1,zh=2,bn=0,Wc=1,Xc=2,qc=3,wa=4,Yc=5,$c=6,Zc=7,Kc=300,mi=301,Vi=302,Br=303,zr=304,br=306,Io=1e3,Un=1001,Do=1002,Dt=1003,kh=1004,Is=1005,Ot=1006,kr=1007,li=1008,Yt=1009,Jc=1010,Qc=1011,vs=1012,Aa=1013,En=1014,un=1015,Tn=1016,Ca=1017,Ra=1018,xs=1020,jc=35902,eu=35899,tu=1021,nu=1022,hn=1023,zn=1026,ci=1027,Pa=1028,La=1029,gi=1030,Ia=1031,Da=1033,ar=33776,lr=33777,cr=33778,ur=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,ko=37496,Go=37488,Ho=37489,dr=37490,Vo=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,Zo=37813,Ko=37814,Jo=37815,Qo=37816,jo=37817,ea=37818,ta=37819,na=37820,ia=37821,sa=36492,ra=36494,oa=36495,aa=36283,la=36284,fr=36285,ca=36286,Gh=3200,ua=0,Hh=1,$n="",Gt="srgb",pr="srgb-linear",mr="linear",ft="srgb",Gr=7680,Vh=519,Wh=512,Xh=513,qh=514,Na=515,Yh=516,$h=517,Ua=518,Zh=519,Kh=35044,Jh=35048,xl="300 es",yn=2e3,Ms=2001;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jh(){const n=ys("canvas");return n.style.display="block",n}const Ml={};function yl(...n){const e="THREE."+n.shift();console.log(e,...n)}function iu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=iu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=iu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gi(...n){const e=n.join(" ");e in Ml||(Ml[e]=!0,He(...n))}function ed(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const td={[To]:wo,[Ao]:Po,[Co]:Lo,[_s]:Ro,[wo]:To,[Po]:Ao,[Lo]:Co,[Ro]:_s};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,ha=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function nd(n,e){return(n%e+e)%e}function Vr(n,e,t){return(1-t)*n+t*e}function Qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qa=class Qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qa.prototype.isVector2=!0;let ae=Qa;class Yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(p!==_||l!==u||c!==m||h!==g){let d=l*u+c*m+h*g+p*_;d<0&&(u=-u,m=-m,g=-g,_=-_,d=-d);let f=1-a;if(d<.9995){const y=Math.acos(d),T=Math.sin(y);f=Math.sin(f*y)/T,a=Math.sin(a*y)/T,l=l*f+u*a,c=c*f+m*a,h=h*f+g*a,p=p*f+_*a}else{l=l*f+u*a,c=c*f+m*a,h=h*f+g*a,p=p*f+_*a;const y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*p+l*m-c*u,e[t+1]=l*g+h*u+c*p-a*m,e[t+2]=c*g+h*m+a*u-l*p,e[t+3]=h*g-a*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),p=a(r/2),u=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ja=class ja{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*h,this.y=i+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ja.prototype.isVector3=!0;let P=ja;const Wr=new P,Sl=new Yi,el=class el{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],m=i[5],g=i[8],_=s[0],d=s[3],f=s[6],y=s[1],T=s[4],M=s[7],w=s[2],E=s[5],R=s[8];return r[0]=o*_+a*y+l*w,r[3]=o*d+a*T+l*E,r[6]=o*f+a*M+l*R,r[1]=c*_+h*y+p*w,r[4]=c*d+h*T+p*E,r[7]=c*f+h*M+p*R,r[2]=u*_+m*y+g*w,r[5]=u*d+m*T+g*E,r[8]=u*f+m*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=t*p+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};el.prototype.isMatrix3=!0;let Xe=el;const Xr=new Xe,bl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:e,whitePoint:i,transfer:mr,toXYZ:bl,fromXYZ:El,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:bl,fromXYZ:El,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const tt=id();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Si===void 0&&(Si=ys("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Si}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rd=0;class Fa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let od=0;const Yr=new P;class Bt extends xi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Un,s=Un,r=Ot,o=li,a=hn,l=Yt,c=Bt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=qi(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Kc;Bt.DEFAULT_ANISOTROPY=1;const tl=class tl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],_=l[2],d=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(m+1)/2,w=(f+1)/2,E=(h+u)/4,R=(p+_)/4,x=(g+d)/4;return T>M&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=R/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((d-g)*(d-g)+(p-_)*(p-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(p-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tl.prototype.isVector4=!0;let Mt=tl;class ad extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Bt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class su extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const yr=class yr{constructor(e,t,i,s,r,o,a,l,c,h,p,u,m,g,_,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,p,u,m,g,_,d)}set(e,t,i,s,r,o,a,l,c,h,p,u,m,g,_,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=o*h,m=o*p,g=a*h,_=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*p,g=c*h,_=c*p;t[0]=u+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*p,g=c*h,_=c*p;t[0]=u-_*a,t[4]=-o*p,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*p,g=a*h,_=a*p;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*p,t[8]=g*p+m,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*p+g,t[10]=u-_*p}else if(e.order==="XZY"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+_,t[5]=o*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=a*h,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,ud)}lookAt(e,t,i){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(i,Xt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(i,Xt)),Vn.normalize(),Ds.crossVectors(Xt,Vn),s[0]=Vn.x,s[4]=Ds.x,s[8]=Xt.x,s[1]=Vn.y,s[5]=Ds.y,s[9]=Xt.y,s[2]=Vn.z,s[6]=Ds.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],m=i[13],g=i[2],_=i[6],d=i[10],f=i[14],y=i[3],T=i[7],M=i[11],w=i[15],E=s[0],R=s[4],x=s[8],b=s[12],C=s[1],L=s[5],U=s[9],O=s[13],D=s[2],z=s[6],X=s[10],W=s[14],ie=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=o*E+a*C+l*D+c*ie,r[4]=o*R+a*L+l*z+c*q,r[8]=o*x+a*U+l*X+c*Q,r[12]=o*b+a*O+l*W+c*te,r[1]=h*E+p*C+u*D+m*ie,r[5]=h*R+p*L+u*z+m*q,r[9]=h*x+p*U+u*X+m*Q,r[13]=h*b+p*O+u*W+m*te,r[2]=g*E+_*C+d*D+f*ie,r[6]=g*R+_*L+d*z+f*q,r[10]=g*x+_*U+d*X+f*Q,r[14]=g*b+_*O+d*W+f*te,r[3]=y*E+T*C+M*D+w*ie,r[7]=y*R+T*L+M*z+w*q,r[11]=y*x+T*U+M*X+w*Q,r[15]=y*b+T*O+M*W+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],m=e[14],g=e[3],_=e[7],d=e[11],f=e[15],y=l*m-c*u,T=a*m-c*p,M=a*u-l*p,w=o*m-c*h,E=o*u-l*h,R=o*p-a*h;return t*(_*y-d*T+f*M)-i*(g*y-d*w+f*E)+s*(g*T-_*w+f*R)-r*(g*M-_*E+d*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],m=e[11],g=e[12],_=e[13],d=e[14],f=e[15],y=t*a-i*o,T=t*l-s*o,M=t*c-r*o,w=i*l-s*a,E=i*c-r*a,R=s*c-r*l,x=h*_-p*g,b=h*d-u*g,C=h*f-m*g,L=p*d-u*_,U=p*f-m*_,O=u*f-m*d,D=y*O-T*U+M*L+w*C-E*b+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(a*O-l*U+c*L)*z,e[1]=(s*U-i*O-r*L)*z,e[2]=(_*R-d*E+f*w)*z,e[3]=(u*E-p*R-m*w)*z,e[4]=(l*C-o*O-c*b)*z,e[5]=(t*O-s*C+r*b)*z,e[6]=(d*M-g*R-f*T)*z,e[7]=(h*R-u*M+m*T)*z,e[8]=(o*U-a*C+c*x)*z,e[9]=(i*C-t*U-r*x)*z,e[10]=(g*E-_*M+f*y)*z,e[11]=(p*M-h*E-m*y)*z,e[12]=(a*b-o*L-l*x)*z,e[13]=(t*L-i*b+s*x)*z,e[14]=(_*T-g*w-d*y)*z,e[15]=(h*w-p*T+u*y)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,p=a+a,u=r*c,m=r*h,g=r*p,_=o*h,d=o*p,f=a*p,y=l*c,T=l*h,M=l*p,w=i.x,E=i.y,R=i.z;return s[0]=(1-(_+f))*w,s[1]=(m+M)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(m-M)*E,s[5]=(1-(u+f))*E,s[6]=(d+y)*E,s[7]=0,s[8]=(g+T)*R,s[9]=(d-y)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),l=bi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),nn.copy(this);const c=1/o,h=1/a,p=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=p,nn.elements[9]*=p,nn.elements[10]*=p,t.setFromRotationMatrix(nn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=yn,l=!1){const c=this.elements,h=2*r/(t-e),p=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ms)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yn,l=!1){const c=this.elements,h=2/(t-e),p=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ms)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};yr.prototype.isMatrix4=!0;let ht=yr;const bi=new P,nn=new ht,cd=new P(0,0,0),ud=new P(1,1,1),Vn=new P,Ds=new P,Xt=new P,Tl=new ht,wl=new Yi;class Zn{constructor(e=0,t=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hd=0;const Al=new P,Ei=new Yi,Cn=new ht,Ns=new P,ji=new P,dd=new P,fd=new Yi,Cl=new P(1,0,0),Rl=new P(0,1,0),Pl=new P(0,0,1),Ll={type:"added"},pd={type:"removed"},Ti={type:"childadded",child:null},$r={type:"childremoved",child:null};class Lt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new P,t=new Zn,i=new Yi,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Xe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ns.copy(e):Ns.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ji,Ns,this.up):Cn.lookAt(Ns,ji,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pd),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,fd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const md={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,i),f=this._getHandJoint(c,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(md)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=nd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Kr(o,r,e+1/3),this.g=Kr(o,r,e),this.b=Kr(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=ru[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return tt.workingToColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Gt){tt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Us);const i=Vr(Wn.h,Us.h,t),s=Vr(Wn.s,Us.s,t),r=Vr(Wn.l,Us.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ke;Ke.NAMES=ru;class gd extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new P,Rn=new P,Jr=new P,Pn=new P,wi=new P,Ai=new P,Il=new P,Qr=new P,jr=new P,eo=new P,to=new Mt,no=new Mt,io=new Mt;class cn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){sn.subVectors(s,t),Rn.subVectors(i,t),Jr.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Rn),l=sn.dot(Jr),c=Rn.dot(Rn),h=Rn.dot(Jr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),io.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(to,r.x),o.addScaledVector(no,r.y),o.addScaledVector(io,r.z),o}static isFrontFacing(e,t,i,s){return sn.subVectors(i,t),Rn.subVectors(e,t),sn.cross(Rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,i),Ai.subVectors(r,i),Qr.subVectors(e,i);const l=wi.dot(Qr),c=Ai.dot(Qr);if(l<=0&&c<=0)return t.copy(i);jr.subVectors(e,s);const h=wi.dot(jr),p=Ai.dot(jr);if(h>=0&&p<=h)return t.copy(s);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(wi,o);eo.subVectors(e,r);const m=wi.dot(eo),g=Ai.dot(eo);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ai,a);const d=h*g-m*p;if(d<=0&&p-h>=0&&m-g>=0)return Il.subVectors(r,s),a=(p-h)/(p-h+(m-g)),t.copy(s).addScaledVector(Il,a);const f=1/(d+_+u);return o=_*f,a=u*f,t.copy(i).addScaledVector(wi,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Os.subVectors(this.max,es),Ci.subVectors(e.a,es),Ri.subVectors(e.b,es),Pi.subVectors(e.c,es),Xn.subVectors(Ri,Ci),qn.subVectors(Pi,Ri),ni.subVectors(Ci,Pi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ni.z,ni.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ni.z,0,-ni.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ni.y,ni.x,0];return!so(t,Ci,Ri,Pi,Os)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Ci,Ri,Pi,Os))?!1:(Bs.crossVectors(Xn,qn),t=[Bs.x,Bs.y,Bs.z],so(t,Ci,Ri,Pi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Fs=new jn,Ci=new P,Ri=new P,Pi=new P,Xn=new P,qn=new P,ni=new P,es=new P,Os=new P,Bs=new P,ii=new P;function so(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ii.fromArray(n,r);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),h=i.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wt=new P,zs=new ae;let _d=0;class fn extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class au extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const vd=new jn,ts=new P,ro=new P;class Cs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(ro)),this.expandByPoint(ts.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xd=0;const Kt=new ht,oo=new Lt,Li=new P,qt=new jn,ns=new jn,Pt=new P;class Rt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?au:ou)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(qt.min,ns.min),qt.expandByPoint(Pt),Pt.addVectors(qt.max,ns.max),qt.expandByPoint(Pt)):(qt.expandByPoint(ns.min),qt.expandByPoint(ns.max))}qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Pt.add(Li)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;const c=new P,h=new P,p=new P,u=new ae,m=new ae,g=new ae,_=new P,d=new P;function f(x,b,C){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,C),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),h.sub(c),p.sub(c),m.sub(u),g.sub(u);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),d.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),a[x].add(_),a[b].add(_),a[C].add(_),l[x].add(d),l[b].add(d),l[C].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,b=y.length;x<b;++x){const C=y[x],L=C.start,U=C.count;for(let O=L,D=L+U;O<D;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new P,M=new P,w=new P,E=new P;function R(x){w.fromBufferAttribute(s,x),E.copy(w);const b=a[x];T.copy(b),T.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(E,b);const L=M.dot(l[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,b=y.length;x<b;++x){const C=y[x],L=C.start,U=C.count;for(let O=L,D=L+U;O<D;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,p=new P;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),d=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new fn(u,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new P,Md=new P,yd=new Xe;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ao.subVectors(i,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yd.getNormalMatrix(e),s=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sd=0;class Rs extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ds,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Nn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new P,lo=new P,ks=new P,Gs=new P;class lu{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lo.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Gs.copy(this.origin).sub(lo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Gs.dot(this.direction),l=-Gs.dot(ks),c=Gs.lengthSq(),h=Math.abs(1-o*o);let p,u,m,g;if(h>0)if(p=o*l-a,u=o*a-l,g=r*h,p>=0)if(u>=-g)if(u<=g){const _=1/h;p*=_,u*=_,m=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lo).addScaledVector(ks,u),m}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=e.x-o.x,u=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,d=t.z-o.z,f=i.x-o.x,y=i.y-o.y,T=i.z-o.z,M=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let R,x,b,C,L,U,O,D,z,X,W,ie;if(M>=w&&M>=E?(b=l,U=p,z=g,ie=f,l>=0?(R=c,x=h,C=u,L=m,O=_,D=d,X=y,W=T):(R=h,x=c,C=m,L=u,O=d,D=_,X=T,W=y)):w>=E?(b=c,U=u,z=_,ie=y,c>=0?(R=h,x=l,C=m,L=p,O=d,D=g,X=T,W=f):(R=l,x=h,C=p,L=m,O=g,D=d,X=f,W=T)):(b=h,U=m,z=d,ie=T,h>=0?(R=l,x=c,C=p,L=u,O=g,D=_,X=f,W=y):(R=c,x=l,C=u,L=p,O=_,D=g,X=y,W=f)),b===0)return null;const q=R/b,Q=x/b,te=1/b,Pe=C-q*U,Te=L-Q*U,at=O-q*z,Qe=D-Q*z,rt=X-q*ie,Z=W-Q*ie,j=rt*Qe-Z*at,_e=Pe*Z-Te*rt,Oe=at*Te-Qe*Pe;if(s){if(j<0||_e<0||Oe<0)return null}else if((j<0||_e<0||Oe<0)&&(j>0||_e>0||Oe>0))return null;const Se=j+_e+Oe;if(Se===0)return null;const ze=te*(j*U+_e*z+Oe*ie);return(Se>0?ze<0:ze>0)?null:this.at(ze/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gr extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dl=new ht,si=new lu,Hs=new Cs,Nl=new P,Vs=new P,Ws=new P,Xs=new P,co=new P,qs=new P,Ul=new P,Ys=new P;class bt extends Lt{constructor(e=new Rt,t=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],p=r[l];h!==0&&(co.fromBufferAttribute(p,e),o?qs.addScaledVector(co,h):qs.addScaledVector(co.sub(t),h))}t.add(qs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Hs.containsPoint(si.origin)===!1&&(si.intersectSphere(Hs,Nl)===null||si.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),si.copy(e.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],f=o[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,w=T;M<w;M+=3){const E=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);s=$s(this,f,e,i,c,h,p,E,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const y=a.getX(d),T=a.getX(d+1),M=a.getX(d+2);s=$s(this,o,e,i,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],f=o[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,w=T;M<w;M+=3){const E=M,R=M+1,x=M+2;s=$s(this,f,e,i,c,h,p,E,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const y=d,T=d+1,M=d+2;s=$s(this,o,e,i,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function bd(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===pi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:n}}function $s(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vs),n.getVertexPosition(l,Ws),n.getVertexPosition(c,Xs);const h=bd(n,e,t,i,Vs,Ws,Xs,Ul);if(h){const p=new P;cn.getBarycoord(Ul,Vs,Ws,Xs,p),s&&(h.uv=cn.getInterpolatedAttribute(s,a,l,c,p,new ae)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,l,c,p,new ae)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,l,c,p,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Vs,Ws,Xs,u.normal),h.face=u,h.barycoord=p}return h}class cu extends Bt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Dt,h=Dt,p,u){super(null,o,a,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl extends fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new ht,Ol=new ht,Zs=[],Bl=new jn,Ed=new ht,is=new bt,ss=new Cs;class Dn extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ed)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ii),Bl.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Bl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ii),ss.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(i),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Ol.multiplyMatrices(i,Ii),is.matrixWorld=Ol,is.raycast(e,Zs);for(let o=0,a=Zs.length;o<a;o++){const l=Zs[o];l.instanceId=r,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new cu(new Float32Array(s*this.count),s,this.count,Pa,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ri=new Cs,Td=new ae(.5,.5),Ks=new P;class Ba{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],g=r[8],_=r[9],d=r[10],f=r[11],y=r[12],T=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,m-h,f-g,w-y).normalize(),s[1].setComponents(c+o,m+h,f+g,w+y).normalize(),s[2].setComponents(c+a,m+p,f+_,w+T).normalize(),s[3].setComponents(c-a,m-p,f-_,w-T).normalize(),i)s[4].setComponents(l,u,d,M).normalize(),s[5].setComponents(c-l,m-u,f-d,w-M).normalize();else if(s[4].setComponents(c-l,m-u,f-d,w-M).normalize(),t===yn)s[5].setComponents(c+l,m+u,f+d,w+M).normalize();else if(t===Ms)s[5].setComponents(l,u,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=Td.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ks.x=s.normal.x>0?e.max.x:e.min.x,Ks.y=s.normal.y>0?e.max.y:e.min.y,Ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uu extends Bt{constructor(e=[],t=mi,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ss extends Bt{constructor(e,t,i=En,s,r,o,a=Dt,l=Dt,c,h=zn,p=1){if(h!==zn&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wd extends Ss{constructor(e,t=En,i=mi,s,r,o=Dt,a=Dt,l,c=zn){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hu extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kn extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2));function g(_,d,f,y,T,M,w,E,R,x,b){const C=M/R,L=w/x,U=M/2,O=w/2,D=E/2,z=R+1,X=x+1;let W=0,ie=0;const q=new P;for(let Q=0;Q<X;Q++){const te=Q*L-O;for(let Pe=0;Pe<z;Pe++){const Te=Pe*C-U;q[_]=Te*y,q[d]=te*T,q[f]=D,c.push(q.x,q.y,q.z),q[_]=0,q[d]=0,q[f]=E>0?1:-1,h.push(q.x,q.y,q.z),p.push(Pe/R),p.push(1-Q/x),W+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<R;te++){const Pe=u+te+z*Q,Te=u+te+z*(Q+1),at=u+(te+1)+z*(Q+1),Qe=u+(te+1)+z*Q;l.push(Pe,Te,Qe),l.push(Te,at,Qe),ie+=6}a.addGroup(m,ie,b),m+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class za extends Rt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,p=Math.PI/2*e,u=t,m=2*p+u,g=i*2+r,_=s+1,d=new P,f=new P;for(let y=0;y<=g;y++){let T=0,M=0,w=0,E=0;if(y<=i){const b=y/i,C=b*Math.PI/2;M=-h-e*Math.cos(C),w=e*Math.sin(C),E=-e*Math.cos(C),T=b*p}else if(y<=i+r){const b=(y-i)/r;M=-h+b*t,w=e,E=0,T=p+b*u}else{const b=(y-i-r)/i,C=b*Math.PI/2;M=h+e*Math.sin(C),w=e*Math.cos(C),E=e*Math.sin(C),T=p+u+b*p}const R=Math.max(0,Math.min(1,T/m));let x=0;y===0?x=.5/s:y===g&&(x=-.5/s);for(let b=0;b<=s;b++){const C=b/s,L=C*Math.PI*2,U=Math.sin(L),O=Math.cos(L);f.x=-w*O,f.y=M,f.z=w*U,a.push(f.x,f.y,f.z),d.set(-w*O,E,w*U),d.normalize(),l.push(d.x,d.y,d.z),c.push(C+x,R)}if(y>0){const b=(y-1)*_;for(let C=0;C<s;C++){const L=b+C,U=b+C+1,O=y*_+C,D=y*_+C+1;o.push(L,U,O),o.push(U,D,O)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class hi extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],u=[],m=[];let g=0;const _=[],d=i/2;let f=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function y(){const M=new P,w=new P;let E=0;const R=(t-e)/i;for(let x=0;x<=r;x++){const b=[],C=x/r,L=C*(t-e)+e;for(let U=0;U<=s;U++){const O=U/s,D=O*l+a,z=Math.sin(D),X=Math.cos(D);w.x=L*z,w.y=-C*i+d,w.z=L*X,p.push(w.x,w.y,w.z),M.set(z,R,X).normalize(),u.push(M.x,M.y,M.z),m.push(O,1-C),b.push(g++)}_.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const C=_[b][x],L=_[b+1][x],U=_[b+1][x+1],O=_[b][x+1];(e>0||b!==0)&&(h.push(C,L,O),E+=3),(t>0||b!==r-1)&&(h.push(L,U,O),E+=3)}c.addGroup(f,E,0),f+=E}function T(M){const w=g,E=new ae,R=new P;let x=0;const b=M===!0?e:t,C=M===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,d*C,0),u.push(0,C,0),m.push(.5,.5),g++;const L=g;for(let U=0;U<=s;U++){const D=U/s*l+a,z=Math.cos(D),X=Math.sin(D);R.x=b*X,R.y=d*C,R.z=b*z,p.push(R.x,R.y,R.z),u.push(0,C,0),E.x=z*.5+.5,E.y=X*.5*C+.5,m.push(E.x,E.y),g++}for(let U=0;U<s;U++){const O=w+U,D=L+U;M===!0?h.push(D,D+1,O):h.push(D+1,D,O),x+=3}c.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ka extends hi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ga extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new P,M=new P,w=new P;for(let E=0;E<t.length;E+=3)m(t[E+0],T),m(t[E+1],M),m(t[E+2],w),l(T,M,w,y)}function l(y,T,M,w){const E=w+1,R=[];for(let x=0;x<=E;x++){R[x]=[];const b=y.clone().lerp(M,x/E),C=T.clone().lerp(M,x/E),L=E-x;for(let U=0;U<=L;U++)U===0&&x===E?R[x][U]=b:R[x][U]=b.clone().lerp(C,U/L)}for(let x=0;x<E;x++)for(let b=0;b<2*(E-x)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[x][C+1]),u(R[x+1][C]),u(R[x][C])):(u(R[x][C+1]),u(R[x+1][C+1]),u(R[x+1][C]))}}function c(y){const T=new P;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){const y=new P;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const M=d(y)/2/Math.PI+.5,w=f(y)/Math.PI+.5;o.push(M,1-w)}g(),p()}function p(){for(let y=0;y<o.length;y+=6){const T=o[y+0],M=o[y+2],w=o[y+4],E=Math.max(T,M,w),R=Math.min(T,M,w);E>.9&&R<.1&&(T<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function m(y,T){const M=y*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const y=new P,T=new P,M=new P,w=new P,E=new ae,R=new ae,x=new ae;for(let b=0,C=0;b<r.length;b+=9,C+=6){y.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),E.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),w.copy(y).add(T).add(M).divideScalar(3);const L=d(w);_(E,C+0,y,L),_(R,C+2,T,L),_(x,C+4,M,L)}}function _(y,T,M,w){w<0&&y.x===1&&(o[T]=y.x-1),M.x===0&&M.z===0&&(o[T]=w/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.vertices,e.indices,e.radius,e.detail)}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,s=[],r=[],o=[],a=new P,l=new ht;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Je(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ha extends An{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ad extends Ha{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+p)+(l-a)/p;u*=h,m*=h,s(o,a,u,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const zl=new P,kl=new P,uo=new Va,ho=new Va,fo=new Va;class _r extends An{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(kl.subVectors(s[0],s[1]).add(s[0]),c=kl);const p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(u),m),d=Math.pow(u.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),uo.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,_,d),ho.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,_,d),fo.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),ho.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),fo.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(uo.calc(l),ho.calc(l),fo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gl(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Cd(n,e){const t=1-n;return t*t*e}function Rd(n,e){return 2*(1-n)*n*e}function Pd(n,e){return n*n*e}function fs(n,e,t,i){return Cd(n,e)+Rd(n,t)+Pd(n,i)}function Ld(n,e){const t=1-n;return t*t*t*e}function Id(n,e){const t=1-n;return 3*t*t*n*e}function Dd(n,e){return 3*(1-n)*n*n*e}function Nd(n,e){return n*n*n*e}function ps(n,e,t,i,s){return Ld(n,e)+Id(n,t)+Dd(n,i)+Nd(n,s)}class du extends An{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ud extends An{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y),ps(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fu extends An{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fd extends An{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends An{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends An{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y),fs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return i.set(Gl(a,l.x,c.x,h.x,p.x),Gl(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var vr=Object.freeze({__proto__:null,ArcCurve:Ad,CatmullRomCurve3:_r,CubicBezierCurve:du,CubicBezierCurve3:Ud,EllipseCurve:Ha,LineCurve:fu,LineCurve3:Fd,QuadraticBezierCurve:pu,QuadraticBezierCurve3:mu,SplineCurve:gu});class Od extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new vr[s.type]().fromJSON(s))}return this}}class da extends Od{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fu(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new pu(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new du(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Ha(e,t,i,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xr extends da{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new da().fromJSON(s))}return this}}function Bd(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=_u(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vd(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,p=l;for(let u=t;u<s;u+=t){const m=n[u],g=n[u+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return bs(r,o,t,a,l,c,0),o}function _u(n,e,t,i,s){let r;if(s===ef(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Hl(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Hl(o/i|0,n[o],n[o+1],r);return r&&Wi(r,r.next)&&(Ts(r),r=r.next),r}function _i(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wi(t,t.next)||yt(t.prev,t,t.next)===0)){if(Ts(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function bs(n,e,t,i,s,r,o){if(!n)return;!o&&r&&$d(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?kd(n,i,s,r):zd(n)){e.push(l.i,n.i,c.i),Ts(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Gd(_i(n),e),bs(n,e,t,i,s,r,2)):o===2&&Hd(n,e,t,i,s,r):bs(_i(n),e,t,i,s,r,1);break}}}function zd(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),p=Math.min(a,l,c),u=Math.max(s,r,o),m=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=m&&cs(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kd(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,u=o.y,m=Math.min(a,l,c),g=Math.min(h,p,u),_=Math.max(a,l,c),d=Math.max(h,p,u),f=fa(m,g,e,t,i),y=fa(_,d,e,t,i);let T=n.prevZ,M=n.nextZ;for(;T&&T.z>=f&&M&&M.z<=y;){if(T.x>=m&&T.x<=_&&T.y>=g&&T.y<=d&&T!==s&&T!==o&&cs(a,h,l,p,c,u,T.x,T.y)&&yt(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&cs(a,h,l,p,c,u,M.x,M.y)&&yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=f;){if(T.x>=m&&T.x<=_&&T.y>=g&&T.y<=d&&T!==s&&T!==o&&cs(a,h,l,p,c,u,T.x,T.y)&&yt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&cs(a,h,l,p,c,u,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Gd(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Wi(i,s)&&xu(i,t,t.next,s)&&Es(i,s)&&Es(s,i)&&(e.push(i.i,t.i,s.i),Ts(t),Ts(t.next),t=n=s),t=t.next}while(t!==n);return _i(t)}function Hd(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jd(o,a)){let l=Mu(o,a);o=_i(o,o.next),l=_i(l,l.next),bs(o,e,t,i,s,r,0),bs(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Vd(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=_u(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Kd(c))}s.sort(Wd);for(let r=0;r<s.length;r++)t=Xd(s[r],t);return t}function Wd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Xd(n,e){const t=qd(n,e);if(!t)return e;const i=Mu(t,n);return _i(i,i.next),_i(t,t.next)}function qd(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Wi(n,t))return t;do{if(Wi(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&vu(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const p=Math.abs(s-t.y)/(i-t.x);Es(t,n)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&Yd(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function Yd(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function $d(n,e,t,i){let s=n;do s.z===0&&(s.z=fa(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zd(s)}function Zd(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fa(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Kd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function cs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&vu(n,e,t,i,s,r,o,a)}function Jd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Qd(n,e)&&(Es(n,e)&&Es(e,n)&&jd(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Wi(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wi(n,e){return n.x===e.x&&n.y===e.y}function xu(n,e,t,i){const s=Qs(yt(n,e,t)),r=Qs(yt(n,e,i)),o=Qs(yt(t,i,n)),a=Qs(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&Js(n,t,e)||r===0&&Js(n,i,e)||o===0&&Js(t,n,i)||a===0&&Js(t,e,i))}function Js(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qs(n){return n>0?1:n<0?-1:0}function Qd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Es(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function jd(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mu(n,e){const t=pa(n.i,n.x,n.y),i=pa(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Hl(n,e,t,i){const s=pa(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ts(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pa(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ef(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class tf{static triangulate(e,t,i=2){return Bd(e,t,i)}}class zi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Vl(e),Wl(i,e);let o=e.length;t.forEach(Vl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wl(i,t[l]);const a=tf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Vl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Wl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ws extends Rt{constructor(e=new xr([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:nf;let T,M=!1,w,E,R,x;if(f){T=f.getSpacedPoints(h),M=!0,u=!1;const ee=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(h,ee),E=new P,R=new P,x=new P}u||(d=0,m=0,g=0,_=0);const b=a.extractPoints(c);let C=b.shape;const L=b.holes;if(!zi.isClockWise(C)){C=C.reverse();for(let ee=0,se=L.length;ee<se;ee++){const re=L[ee];zi.isClockWise(re)&&(L[ee]=re.reverse())}}function O(ee){const re=10000000000000001e-36;let oe=ee[0];for(let ue=1;ue<=ee.length;ue++){const Ue=ue%ee.length,Ne=ee[Ue],ke=Ne.x-oe.x,We=Ne.y-oe.y,I=ke*ke+We*We,lt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(oe.x),Math.abs(oe.y)),je=re*lt*lt;if(I<=je){ee.splice(Ue,1),ue--;continue}oe=Ne}}O(C),L.forEach(O);const D=L.length,z=C;for(let ee=0;ee<D;ee++){const se=L[ee];C=C.concat(se)}function X(ee,se,re){return se||it("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,re)}const W=C.length;function ie(ee,se,re){let oe,ue,Ue;const Ne=ee.x-se.x,ke=ee.y-se.y,We=re.x-ee.x,I=re.y-ee.y,lt=Ne*Ne+ke*ke,je=Ne*I-ke*We;if(Math.abs(je)>Number.EPSILON){const A=Math.sqrt(lt),v=Math.sqrt(We*We+I*I),B=se.x-ke/A,H=se.y+Ne/A,Y=re.x-I/v,le=re.y+We/v,ce=((Y-B)*I-(le-H)*We)/(Ne*I-ke*We);oe=B+Ne*ce-ee.x,ue=H+ke*ce-ee.y;const $=oe*oe+ue*ue;if($<=2)return new ae(oe,ue);Ue=Math.sqrt($/2)}else{let A=!1;Ne>Number.EPSILON?We>Number.EPSILON&&(A=!0):Ne<-Number.EPSILON?We<-Number.EPSILON&&(A=!0):Math.sign(ke)===Math.sign(I)&&(A=!0),A?(oe=-ke,ue=Ne,Ue=Math.sqrt(lt)):(oe=Ne,ue=ke,Ue=Math.sqrt(lt/2))}return new ae(oe/Ue,ue/Ue)}const q=[];for(let ee=0,se=z.length,re=se-1,oe=ee+1;ee<se;ee++,re++,oe++)re===se&&(re=0),oe===se&&(oe=0),q[ee]=ie(z[ee],z[re],z[oe]);const Q=[];let te,Pe=q.concat();for(let ee=0,se=D;ee<se;ee++){const re=L[ee];te=[];for(let oe=0,ue=re.length,Ue=ue-1,Ne=oe+1;oe<ue;oe++,Ue++,Ne++)Ue===ue&&(Ue=0),Ne===ue&&(Ne=0),te[oe]=ie(re[oe],re[Ue],re[Ne]);Q.push(te),Pe=Pe.concat(te)}let Te;if(d===0)Te=zi.triangulateShape(z,L);else{const ee=[],se=[];for(let re=0;re<d;re++){const oe=re/d,ue=m*Math.cos(oe*Math.PI/2),Ue=g*Math.sin(oe*Math.PI/2)+_;for(let Ne=0,ke=z.length;Ne<ke;Ne++){const We=X(z[Ne],q[Ne],Ue);_e(We.x,We.y,-ue),oe===0&&ee.push(We)}for(let Ne=0,ke=D;Ne<ke;Ne++){const We=L[Ne];te=Q[Ne];const I=[];for(let lt=0,je=We.length;lt<je;lt++){const A=X(We[lt],te[lt],Ue);_e(A.x,A.y,-ue),oe===0&&I.push(A)}oe===0&&se.push(I)}}Te=zi.triangulateShape(ee,se)}const at=Te.length,Qe=g+_;for(let ee=0;ee<W;ee++){const se=u?X(C[ee],Pe[ee],Qe):C[ee];M?(R.copy(w.normals[0]).multiplyScalar(se.x),E.copy(w.binormals[0]).multiplyScalar(se.y),x.copy(T[0]).add(R).add(E),_e(x.x,x.y,x.z)):_e(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<W;se++){const re=u?X(C[se],Pe[se],Qe):C[se];M?(R.copy(w.normals[ee]).multiplyScalar(re.x),E.copy(w.binormals[ee]).multiplyScalar(re.y),x.copy(T[ee]).add(R).add(E),_e(x.x,x.y,x.z)):_e(re.x,re.y,p/h*ee)}for(let ee=d-1;ee>=0;ee--){const se=ee/d,re=m*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+_;for(let ue=0,Ue=z.length;ue<Ue;ue++){const Ne=X(z[ue],q[ue],oe);_e(Ne.x,Ne.y,p+re)}for(let ue=0,Ue=L.length;ue<Ue;ue++){const Ne=L[ue];te=Q[ue];for(let ke=0,We=Ne.length;ke<We;ke++){const I=X(Ne[ke],te[ke],oe);M?_e(I.x,I.y+T[h-1].y,T[h-1].x+re):_e(I.x,I.y,p+re)}}}rt(),Z();function rt(){const ee=s.length/3;if(u){let se=0,re=W*se;for(let oe=0;oe<at;oe++){const ue=Te[oe];Oe(ue[2]+re,ue[1]+re,ue[0]+re)}se=h+d*2,re=W*se;for(let oe=0;oe<at;oe++){const ue=Te[oe];Oe(ue[0]+re,ue[1]+re,ue[2]+re)}}else{for(let se=0;se<at;se++){const re=Te[se];Oe(re[2],re[1],re[0])}for(let se=0;se<at;se++){const re=Te[se];Oe(re[0]+W*h,re[1]+W*h,re[2]+W*h)}}i.addGroup(ee,s.length/3-ee,0)}function Z(){const ee=s.length/3;let se=0;j(z,se),se+=z.length;for(let re=0,oe=L.length;re<oe;re++){const ue=L[re];j(ue,se),se+=ue.length}i.addGroup(ee,s.length/3-ee,1)}function j(ee,se){let re=ee.length;for(;--re>=0;){const oe=re;let ue=re-1;ue<0&&(ue=ee.length-1);for(let Ue=0,Ne=h+d*2;Ue<Ne;Ue++){const ke=W*Ue,We=W*(Ue+1),I=se+oe+ke,lt=se+ue+ke,je=se+ue+We,A=se+oe+We;Se(I,lt,je,A)}}}function _e(ee,se,re){l.push(ee),l.push(se),l.push(re)}function Oe(ee,se,re){ze(ee),ze(se),ze(re);const oe=s.length/3,ue=y.generateTopUV(i,s,oe-3,oe-2,oe-1);dt(ue[0]),dt(ue[1]),dt(ue[2])}function Se(ee,se,re,oe){ze(ee),ze(se),ze(oe),ze(se),ze(re),ze(oe);const ue=s.length/3,Ue=y.generateSideWallUV(i,s,ue-6,ue-3,ue-2,ue-1);dt(Ue[0]),dt(Ue[1]),dt(Ue[3]),dt(Ue[1]),dt(Ue[2]),dt(Ue[3])}function ze(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function dt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sf(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vr[s.type]().fromJSON(s)),new ws(i,e.options)}}const nf={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],p=e[i*3+2],u=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],d=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-p),new ae(u,1-g),new ae(_,1-f)]:[new ae(a,1-l),new ae(h,1-p),new ae(m,1-g),new ae(d,1-f)]}};function sf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ms extends Ga{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class Wa extends Rt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,p=new P,u=new ae,m=new P,g=new P,_=new P;let d=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:d=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,m.x=f*1,m.y=-d,m.z=f*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:d=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=t;y++){const T=i+y*h*s,M=Math.sin(T),w=Math.cos(T);for(let E=0;E<=e.length-1;E++){p.x=e[E].x*M,p.y=e[E].y,p.z=e[E].x*w,o.push(p.x,p.y,p.z),u.x=y/t,u.y=E/(e.length-1),a.push(u.x,u.y);const R=l[3*E+0]*M,x=l[3*E+1],b=l[3*E+0]*w;c.push(R,x,b)}}for(let y=0;y<t;y++)for(let T=0;T<e.length-1;T++){const M=T+y*e.length,w=M,E=M+e.length,R=M+e.length+1,x=M+1;r.push(w,E,x),r.push(R,x,E)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.points,e.segments,e.phiStart,e.phiLength)}}class Er extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,p=e/a,u=t/l,m=[],g=[],_=[],d=[];for(let f=0;f<h;f++){const y=f*u-o;for(let T=0;T<c;T++){const M=T*p-r;g.push(M,-y,0),_.push(0,0,1),d.push(T/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const T=y+c*f,M=y+c*(f+1),w=y+1+c*(f+1),E=y+1+c*f;m.push(T,M,E),m.push(M,w,E)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xa extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let p=e;const u=(t-e)/s,m=new P,g=new ae;for(let _=0;_<=s;_++){for(let d=0;d<=i;d++){const f=r+d/i*o;m.x=p*Math.cos(f),m.y=p*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}p+=u}for(let _=0;_<s;_++){const d=_*(i+1);for(let f=0;f<i;f++){const y=f+d,T=y,M=y+i+1,w=y+i+2,E=y+1;a.push(T,M,E),a.push(M,w,E)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ui extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new P,u=new P,m=[],g=[],_=[],d=[];for(let f=0;f<=i;f++){const y=[],T=f/i,M=o+T*a,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w);let R=0;f===0&&o===0?R=.5/t:f===i&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const b=x/t,C=s+b*r;p.x=-E*Math.cos(C),p.y=w,p.z=E*Math.sin(C),g.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),d.push(b+R,1-T),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){const T=h[f][y+1],M=h[f][y],w=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&m.push(T,M,E),(f!==i-1||l<Math.PI)&&m.push(M,w,E)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],p=[],u=new P,m=new P,g=new P;for(let _=0;_<=i;_++){const d=o+_/i*a;for(let f=0;f<=s;f++){const y=f/s*r;m.x=(e+t*Math.cos(d))*Math.cos(y),m.y=(e+t*Math.cos(d))*Math.sin(y),m.z=t*Math.sin(d),c.push(m.x,m.y,m.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(m,u).normalize(),h.push(g.x,g.y,g.z),p.push(f/s),p.push(_/i)}}for(let _=1;_<=i;_++)for(let d=1;d<=s;d++){const f=(s+1)*_+d-1,y=(s+1)*(_-1)+d-1,T=(s+1)*(_-1)+d,M=(s+1)*_+d;l.push(f,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class As extends Rt{constructor(e=new mu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ae;let h=new P;const p=[],u=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function _(){for(let T=0;T<t;T++)d(T);d(r===!1?t:0),y(),f()}function d(T){h=e.getPointAt(T/t,h);const M=o.normals[T],w=o.binormals[T];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,x=Math.sin(R),b=-Math.cos(R);l.x=b*M.x+x*w.x,l.y=b*M.y+x*w.y,l.z=b*M.z+x*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let T=1;T<=t;T++)for(let M=1;M<=s;M++){const w=(s+1)*(T-1)+(M-1),E=(s+1)*T+(M-1),R=(s+1)*T+M,x=(s+1)*(T-1)+M;g.push(w,E,x),g.push(E,R,x)}}function y(){for(let T=0;T<=t;T++)for(let M=0;M<=s;M++)c.x=T/t,c.y=M/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new As(new vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Xl(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Xl(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const s in i)e[s]=i[s]}return e}function Xl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function rf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const of={clone:Xi,merge:kt};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cf extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ma extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uf extends ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hf extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class df extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const po={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ql(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ql(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ql(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ff{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){const m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pf=new ff;class qa{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di=new WeakMap;class mf extends qa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=po.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=Di.get(o);p===void 0&&(p=[],Di.set(o,p)),p.push({onLoad:t,onError:s})}return o}const a=ys("img");function l(){h(),t&&t(this);const p=Di.get(this)||[];for(let u=0;u<p.length;u++){const m=p[u];m.onLoad&&m.onLoad(this)}Di.delete(this),r.manager.itemEnd(e)}function c(p){h(),s&&s(p),po.remove(`image:${e}`);const u=Di.get(this)||[];for(let m=0;m<u.length;m++){const g=u[m];g.onError&&g.onError(p)}Di.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),po.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Yl extends qa{constructor(e){super(e)}load(e,t,i,s){const r=new Bt,o=new mf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Su extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class gf extends Su{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mo=new ht,$l=new P,Zl=new P;class _f{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ms||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const js=new P,er=new Yi,gn=new P;class bu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(js,er,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,er,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(js,er,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,er,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new P,Kl=new ae,Jl=new ae;class ln extends bu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,Jl),t.subVectors(Jl,Kl)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wr extends bu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vf extends _f{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ql extends Su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ni=-90,Ui=1;class xf extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ni,Ui,e,t);s.layers=this.layers,this.add(s);const r=new ln(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const o=new ln(Ni,Ui,e,t);o.layers=this.layers,this.add(o);const a=new ln(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const l=new ln(Ni,Ui,e,t);l.layers=this.layers,this.add(l);const c=new ln(Ni,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mf extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jl=new ht;class yf{constructor(e,t,i=0,s=1/0){this.ray=new lu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(e,t=!0,i=[]){return ga(e,this,i,t),i.sort(ec),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ga(e[s],this,i,t);return i.sort(ec),i}}function ec(n,e){return n.distance-e.distance}function ga(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ga(r[o],e,t,!0)}}const nl=class nl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};nl.prototype.isMatrix2=!0;let tc=nl;function nc(n,e,t,i){const s=Sf(i);switch(t){case tu:return n*e;case Pa:return n*e/s.components*s.byteLength;case La:return n*e/s.components*s.byteLength;case gi:return n*e*2/s.components*s.byteLength;case Ia:return n*e*2/s.components*s.byteLength;case nu:return n*e*3/s.components*s.byteLength;case hn:return n*e*4/s.components*s.byteLength;case Da:return n*e*4/s.components*s.byteLength;case ar:case lr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cr:case ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(n,16)*Math.max(e,8)/4;case No:case Fo:return Math.max(n,8)*Math.max(e,8)/2;case Bo:case zo:case Go:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case dr:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sa:case ra:case oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case aa:case la:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fr:case ca:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(n){switch(n){case Yt:case Jc:return{byteLength:1,components:1};case vs:case Qc:case Tn:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case En:case Aa:case un:return{byteLength:4,components:1};case jc:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eu(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bf(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,p[u]=_)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const _=p[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,Bf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,Sp=`uniform sampler2D dfgLUT;
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
}`,bp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:wf,alphamap_pars_fragment:Af,alphatest_fragment:Cf,alphatest_pars_fragment:Rf,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:If,batching_vertex:Df,begin_vertex:Nf,beginnormal_vertex:Uf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Hf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Kf,displacementmap_vertex:Jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:jf,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:op,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:up,gradientmap_pars_fragment:hp,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:vp,lights_phong_fragment:xp,lights_phong_pars_fragment:Mp,lights_physical_fragment:yp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Tp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Ip,map_particle_fragment:Dp,map_particle_pars_fragment:Np,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Gp,normal_fragment_begin:Hp,normal_fragment_maps:Vp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,opaque_fragment:Qp,packing:jp,premultiplied_alpha_fragment:em,project_vertex:tm,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:Mm,uv_pars_vertex:ym,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Em,background_frag:Tm,backgroundCube_vert:wm,backgroundCube_frag:Am,cube_vert:Cm,cube_frag:Rm,depth_vert:Pm,depth_frag:Lm,distance_vert:Im,distance_frag:Dm,equirect_vert:Nm,equirect_frag:Um,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Gm,meshmatcap_vert:Hm,meshmatcap_frag:Vm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:$m,meshphysical_frag:Zm,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:Qm,points_frag:jm,shadow_vert:e0,shadow_frag:t0,sprite_vert:n0,sprite_frag:i0},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},xn={basic:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:kt([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:kt([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:kt([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:kt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:kt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};xn.physical={uniforms:kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const tr={r:0,b:0,g:0},s0=new ht,Tu=new Xe;Tu.set(-1,0,0,0,1,0,0,0,1);function r0(n,e,t,i,s,r){const o=new Ke(0);let a=s===!0?0:1,l,c,h=null,p=0,u=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(y){let T=!1;const M=m(y);M===null?d(o,a):M&&M.isColor&&(d(M,1),T=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,T){const M=m(T);M&&(M.isCubeTexture||M.mapping===br)?(c===void 0&&(c=new bt(new Kn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Xi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tu),c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ft,(h!==M||p!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new Er(2,2),new wn({name:"BackgroundMaterial",uniforms:Xi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,T){y.getRGB(tr,yu(n)),t.buffers.color.setClear(tr.r,tr.g,tr.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,d(o,a)},render:g,addToRenderList:_,dispose:f}}function o0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(L,U,O,D,z){let X=!1;const W=p(L,D,O,U);r!==W&&(r=W,c(r.object)),X=m(L,D,O,z),X&&g(L,D,O,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(L,U,O,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function p(L,U,O,D){const z=D.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const W=L.isInstancedMesh===!0?L.id:0;let ie=X[W];ie===void 0&&(ie={},X[W]=ie);let q=ie[O.id];q===void 0&&(q={},ie[O.id]=q);let Q=q[z];return Q===void 0&&(Q=u(l()),q[z]=Q),Q}function u(L){const U=[],O=[],D=[];for(let z=0;z<t;z++)U[z]=0,O[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function m(L,U,O,D){const z=r.attributes,X=U.attributes;let W=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){const te=z[q];let Pe=X[q];if(Pe===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),te===void 0||te.attribute!==Pe||Pe&&te.data!==Pe.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(L,U,O,D){const z={},X=U.attributes;let W=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){let te=X[q];te===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Pe={};Pe.attribute=te,te&&te.data&&(Pe.data=te.data),z[q]=Pe,W++}r.attributes=z,r.attributesNum=W,r.index=D}function _(){const L=r.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function d(L){f(L,0)}function f(L,U){const O=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;O[L]=1,D[L]===0&&(n.enableVertexAttribArray(L),D[L]=1),z[L]!==U&&(n.vertexAttribDivisor(L,U),z[L]=U)}function y(){const L=r.newAttributes,U=r.enabledAttributes;for(let O=0,D=U.length;O<D;O++)U[O]!==L[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function T(L,U,O,D,z,X,W){W===!0?n.vertexAttribIPointer(L,U,O,z,X):n.vertexAttribPointer(L,U,O,D,z,X)}function M(L,U,O,D){_();const z=D.attributes,X=O.getAttributes(),W=U.defaultAttributeValues;for(const ie in X){const q=X[ie];if(q.location>=0){let Q=z[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,Pe=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const at=Te.buffer,Qe=Te.type,rt=Te.bytesPerElement,Z=Qe===n.INT||Qe===n.UNSIGNED_INT||Q.gpuType===Aa;if(Q.isInterleavedBufferAttribute){const j=Q.data,_e=j.stride,Oe=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)f(q.location+Se,j.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<q.locationSize;Se++)d(q.location+Se);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Se=0;Se<q.locationSize;Se++)T(q.location+Se,Pe/q.locationSize,Qe,te,_e*rt,(Oe+Pe/q.locationSize*Se)*rt,Z)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)f(q.location+j,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<q.locationSize;j++)d(q.location+j);n.bindBuffer(n.ARRAY_BUFFER,at);for(let j=0;j<q.locationSize;j++)T(q.location+j,Pe/q.locationSize,Qe,te,Pe*rt,Pe/q.locationSize*j*rt,Z)}}else if(W!==void 0){const te=W[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(q.location,te);break;case 3:n.vertexAttrib3fv(q.location,te);break;case 4:n.vertexAttrib4fv(q.location,te);break;default:n.vertexAttrib1fv(q.location,te)}}}}y()}function w(){b();for(const L in i){const U=i[L];for(const O in U){const D=U[O];for(const z in D){const X=D[z];for(const W in X)h(X[W].object),delete X[W];delete D[z]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const O in U){const D=U[O];for(const z in D){const X=D[z];for(const W in X)h(X[W].object),delete X[W];delete D[z]}}delete i[L.id]}function R(L){for(const U in i){const O=i[U];for(const D in O){const z=O[D];if(z[L.id]===void 0)continue;const X=z[L.id];for(const W in X)h(X[W].object),delete X[W];delete z[L.id]}}}function x(L){for(const U in i){const O=i[U],D=L.isInstancedMesh===!0?L.id:0,z=O[D];if(z!==void 0){for(const X in z){const W=z[X];for(const ie in W)h(W[ie].object),delete W[ie];delete z[X]}delete O[D],Object.keys(O).length===0&&delete i[U]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function a0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function l0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&R!==un&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:E}}function c0(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Nn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||s;return s=u,i=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,f=n.get(p);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{const y=r?0:i,T=y*4;let M=f.clippingState||null;l.value=M,M=h(g,u,T,m);for(let w=0;w!==T;++w)M[w]=t[w];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,m,g){const _=p!==null?p.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const f=m+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<f)&&(d=new Float32Array(f));for(let T=0,M=m;T!==_;++T,M+=4)o.copy(p[T]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}const ki=4,u0=6,h0=20,d0=256,rs=new wr,ic=new Ke;let go=null,_o=0,vo=0,xo=!1;const f0=new P,oi=new P;class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=f0}=r;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=xo,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Tn,format:hn,colorSpace:pr,depthBuffer:!1},s=rc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=p0(r)),this._blurMaterial=g0(r,e,t),this._ggxMaterial=m0(r,e,t)}return s}_compileMaterial(e){const t=new bt(new Rt,e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,i,s,r){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(ic),p.toneMapping=bn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Kn,new gr({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,d=_.material;let f=!1;const y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,f=!0):(d.color.copy(ic),f=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;Fi(s,M*w,T>2?w:0,w,w),p.setRenderTarget(s),f&&p.render(_,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Fi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:g}=this,_=this._sizeLods[i],d=3*_*(i>g-ki?i-g+ki:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Fi(r,d,f,3*_,2*_),s.setRenderTarget(r),s.render(a,rs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Fi(e,d,f,3*_,2*_),s.setRenderTarget(e),s.render(a,rs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],p=3*h*(s>this._lodMax-ki?s-this._lodMax+ki:0),u=4*(this._cubeSize-h);Fi(t,p,u,3*h,2*h),o.setRenderTarget(t),o.render(l,rs)}}function p0(n){const e=[],t=[];let i=n;const s=n-ki+1+u0;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),_=new Float32Array(m*u*p);for(let f=0;f<p;f++){const y=f%3*2/3-1,T=f>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(M,m*u*f);for(let w=0;w<u;w++){const E=h[w*2]*2-1,R=h[w*2+1]*2-1;f===0?oi.set(1,R,E):f===1?oi.set(-E,1,-R):f===2?oi.set(-E,R,1):f===3?oi.set(-1,R,-E):f===4?oi.set(-E,-1,R):oi.set(E,R,-1),oi.toArray(_,(f*u+w)*m)}}const d=new Rt;d.setAttribute("position",new fn(g,m)),d.setAttribute("outputDirection",new fn(_,m)),t.push(new bt(d,null)),i>ki&&i--}return{lodMeshes:t,sizeLods:e}}function rc(n,e,t){const i=new dn(n,e,t);return i.texture.mapping=br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fi(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function m0(n,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function g0(n,e,t){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ac(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ar(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wu extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Fn});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Ot),new xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function _0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Br||m===zr)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new wu(g.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,g=m===Br||m===zr,_=m===mi||m===Vi;if(g||_){let d=t.get(u);const f=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new sc(n)),d=g?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),d.texture;if(d!==void 0)return d.texture;{const y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new sc(n)),d=g?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),u.addEventListener("dispose",h),d.texture):null}}}return u}function a(u,m){return m===Br?u.mapping=mi:m===zr&&(u.mapping=Vi),u}function l(u){let m=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function v0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Gi("WebGLRenderer: "+i+" extension not supported."),s}}}function x0(n,e,t,i){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,g=p.attributes.position;let _=0;if(g===void 0)return;if(m!==null){const y=m.array;_=m.version;for(let T=0,M=y.length;T<M;T+=3){const w=y[T+0],E=y[T+1],R=y[T+2];u.push(w,E,E,R,R,w)}}else{const y=g.array;_=g.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const w=T+0,E=T+1,R=T+2;u.push(w,E,E,R,R,w)}}const d=new(g.count>=65535?au:ou)(u,1);d.version=_;const f=r.get(p);f&&e.remove(f),r.set(p,d)}function h(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function M0(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,u){n.drawElements(i,u,r,p*o),t.update(u,i,1)}function c(p,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,p*o,m),t.update(u,i,m))}function h(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,m);let _=0;for(let d=0;d<m;d++)_+=u[d];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S0(n,e,t){const i=new WeakMap,s=new Mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==p){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let M=a.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*w*4*p),R=new su(E,M,w,p);R.type=un,R.needsUpdate=!0;const x=T*4;for(let C=0;C<p;C++){const L=d[C],U=f[C],O=y[C],D=M*w*4*C;for(let z=0;z<L.count;z++){const X=z*x;m===!0&&(s.fromBufferAttribute(L,z),E[D+X+0]=s.x,E[D+X+1]=s.y,E[D+X+2]=s.z,E[D+X+3]=0),g===!0&&(s.fromBufferAttribute(U,z),E[D+X+4]=s.x,E[D+X+5]=s.y,E[D+X+6]=s.z,E[D+X+7]=0),_===!0&&(s.fromBufferAttribute(O,z),E[D+X+8]=s.x,E[D+X+9]=s.y,E[D+X+10]=s.z,E[D+X+11]=O.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new ae(M,w)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function b0(n,e,t,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const E0={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function T0(n,e,t,i,s,r){const o=new dn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Rt;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));const h=new cf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new bt(c,h),u=new wr(-1,1,1,-1,0,1);let m=null,g=null,_=!1,d,f=null,y=[],T=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(M,w)}},this.setEffects=function(M){y=M,T=y.length>0&&y[0].isRenderPass===!0;const w=o.width,E=o.height;y.length>0&&a===null&&(a=new dn(w,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(w,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(w,E)}},this.begin=function(M,w){if(_||M.toneMapping===bn&&y.length===0)return!1;if(f=w,w!==null){const E=w.width,R=w.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return T===!1&&M.setRenderTarget(o),d=M.toneMapping,M.toneMapping=bn,!0},this.hasRenderPass=function(){return T},this.end=function(M,w){M.toneMapping=d,_=!0;let E=o,R=a;for(let x=0;x<y.length;x++){const b=y[x];b.enabled!==!1&&(b.render(M,R,E,w),b.needsSwap!==!1&&(E=R,R=R===a?l:a))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,h.defines={},tt.getTransfer(m)===ft&&(h.defines.SRGB_TRANSFER="");const x=E0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(f),M.render(p,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Au=new Bt,_a=new Ss(1,1),Cu=new su,Ru=new ld,Pu=new uu,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cr(n,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;dc.set(i),n.uniformMatrix2fv(this.addr,!1,dc),Ct(t,i)}}function L0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;hc.set(i),n.uniformMatrix3fv(this.addr,!1,hc),Ct(t,i)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;uc.set(i),n.uniformMatrix4fv(this.addr,!1,uc),Ct(t,i)}}function D0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function O0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function G0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_a.compareFunction=t.isReversedDepthBuffer()?Ua:Na,r=_a):r=Au,t.setTexture2D(e||r,s)}function H0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ru,s)}function V0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pu,s)}function W0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cu,s)}function X0(n){switch(n){case 5126:return w0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return N0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(n,e){n.uniform1fv(this.addr,e)}function Y0(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function $0(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J0(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q0(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j0(n,e){n.uniform1iv(this.addr,e)}function eg(n,e){n.uniform2iv(this.addr,e)}function tg(n,e){n.uniform3iv(this.addr,e)}function ng(n,e){n.uniform4iv(this.addr,e)}function ig(n,e){n.uniform1uiv(this.addr,e)}function sg(n,e){n.uniform2uiv(this.addr,e)}function rg(n,e){n.uniform3uiv(this.addr,e)}function og(n,e){n.uniform4uiv(this.addr,e)}function ag(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_a:o=Au;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function lg(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ru,r[o])}function cg(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pu,r[o])}function ug(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cu,r[o])}function hg(n){switch(n){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return Z0;case 35674:return K0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return j0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}class dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function mg(n,e,t){const i=n.name,s=i.length;for(Mo.lastIndex=0;;){const r=Mo.exec(i),o=Mo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fc(t,c===void 0?new dg(a,n,e):new fg(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new pg(a),fc(t,p)),t=p}}}class hr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gg=37297;let _g=0;function vg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mc=new Xe;function xg(n){tt._getMatrix(mc,tt.workingColorSpace,n);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case mr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vg(n.getShaderSource(e),a)}else return r}function Mg(n,e){const t=xg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yg={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[wa]:"ACESFilmic",[$c]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function Sg(n,e){const t=yg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new P;function bg(){tt.getLuminanceCoefficients(nr);const n=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Tg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function us(n){return n!==""}function _c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(Ag,Rg)}const Cg=new Map;function Rg(n,e){let t=Ze[e];if(t===void 0){const i=Cg.get(e);if(i!==void 0)t=Ze[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return va(t)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(n){return n.replace(Pg,Lg)}function Lg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Ig={[or]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function Dg(n){return Ig[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ng={[mi]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function Ug(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ng[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fg={[Vi]:"ENVMAP_MODE_REFRACTION"};function Og(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bg={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function zg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[n.combine]||"ENVMAP_BLENDING_NONE"}function kg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gg(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Dg(t),c=Ug(t),h=Og(t),p=zg(t),u=kg(t),m=Eg(t),g=Tg(r),_=s.createProgram();let d,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),f.length>0&&(f+=`
`)):(d=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),f=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==bn?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Mg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=va(o),o=_c(o,t),o=vc(o,t),a=va(a),a=_c(a,t),a=vc(a,t),o=xc(o),a=xc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+d+o,M=y+f+a,w=pc(s,s.VERTEX_SHADER,T),E=pc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,w),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(E)||"",z=U.trim(),X=O.trim(),W=D.trim();let ie=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,E);else{const Q=gc(s,w,"vertex"),te=gc(s,E,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Q+`
`+te)}else z!==""?He("WebGLProgram: Program Info Log:",z):(X===""||W==="")&&(q=!1);q&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:X,prefix:d},fragmentShader:{log:W,prefix:f}})}s.deleteShader(w),s.deleteShader(E),x=new hr(s,_),b=wg(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,gg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Hg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wg(e),t.set(e,i)),i}}class Wg{constructor(e){this.id=Hg++,this.code=e,this.usedTimes=0}}function Xg(n){return n===gi||n===dr||n===fr}function qg(n,e,t,i,s,r){const o=new Oa,a=new Vg,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,L,U,O){const D=L.fog,z=U.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||X,W),q=ie&&ie.mapping===br?ie.image.height:null,Q=m[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=te!==void 0?te.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let at,Qe,rt,Z;if(Q){const _t=xn[Q];at=_t.vertexShader,Qe=_t.fragmentShader}else{at=x.vertexShader,Qe=x.fragmentShader;const _t=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,_t,ct),rt=_t.id,Z=ct.id}const j=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,ze=!!x.map,dt=!!x.matcap,ee=!!ie,se=!!x.aoMap,re=!!x.lightMap,oe=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,Ue=!!x.displacementMap,Ne=!!x.emissiveMap,ke=!!x.metalnessMap,We=!!x.roughnessMap,I=x.anisotropy>0,lt=x.clearcoat>0,je=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,H=x.transmission>0,Y=I&&!!x.anisotropyMap,le=lt&&!!x.clearcoatMap,ce=lt&&!!x.clearcoatNormalMap,$=lt&&!!x.clearcoatRoughnessMap,J=v&&!!x.iridescenceMap,he=v&&!!x.iridescenceThicknessMap,Le=B&&!!x.sheenColorMap,me=B&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ie=!!x.specularColorMap,Fe=!!x.specularIntensityMap,qe=H&&!!x.transmissionMap,F=H&&!!x.thicknessMap,fe=!!x.gradientMap,K=!!x.alphaMap,pe=x.alphaTest>0,ye=!!x.alphaHash,ne=!!x.extensions;let De=bn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=n.toneMapping);const Ce={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:Qe,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:dt,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:re,bumpMap:oe,normalMap:ue,displacementMap:Ue,emissiveMap:Ne,normalMapObjectSpace:ue&&x.normalMapType===Hh,normalMapTangentSpace:ue&&x.normalMapType===ua,packedNormalMap:ue&&x.normalMapType===ua&&Xg(x.normalMap.format),metalnessMap:ke,roughnessMap:We,anisotropy:I,anisotropyMap:Y,clearcoat:lt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:$,dispersion:je,retroreflection:A,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:he,sheen:B,sheenColorMap:Le,sheenRoughnessMap:me,specularMap:de,specularColorMap:Ie,specularIntensityMap:Fe,transmission:H,transmissionMap:qe,thicknessMap:F,gradientMap:fe,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:pe,alphaHash:ye,combine:x.combine,mapUv:ze&&g(x.map.channel),aoMapUv:se&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:oe&&g(x.bumpMap.channel),normalMapUv:ue&&g(x.normalMap.channel),displacementMapUv:Ue&&g(x.displacementMap.channel),emissiveMapUv:Ne&&g(x.emissiveMap.channel),metalnessMapUv:ke&&g(x.metalnessMap.channel),roughnessMapUv:We&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:Ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Fe&&g(x.specularIntensityMap.channel),transmissionMapUv:qe&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||I),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ze||K),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function d(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(b,x),y(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function f(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){const b=m[x.type];let C;if(b){const L=xn[b];C=of.clone(L.uniforms)}else C=x.uniforms;return C}function M(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Gg(n,b,x,s),c.push(C),h.set(b,C)),C}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function Yg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $g(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,g,_,d,f){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:d,group:f},n[e]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=g,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=d,y.group=f),e++,y}function l(u,m,g,_,d,f,y){y.reversedDepth===!0&&(d=-d);const T=a(u,m,g,_,d,f);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(u,m,g,_,d,f){const y=a(u,m,g,_,d,f);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,m){t.length>1&&t.sort(u||$g),i.length>1&&i.sort(m||yc),s.length>1&&s.sort(m||yc)}function p(){for(let u=e,m=n.length;u<m;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Zg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sc,n.set(i,[o])):s>=r.length?(o=new Sc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Jg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qg=0;function jg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e_(n){const e=new Kg,t=Jg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new ht,o=new ht;function a(c){let h=0,p=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,_=0,d=0,f=0,y=0,T=0,M=0,w=0,E=0,R=0,x=0,b=0,C=0;c.sort(jg);for(let U=0,O=c.length;U<O;U++){const D=c[U],z=D.color,X=D.intensity,W=D.distance;let ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gi?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*X,p+=z.g*X,u+=z.b*X;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],X);C++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=te,i.sunShadowMap[g]=ie;const Pe=Q.getViewportCount();for(let Te=0;Te<Pe;Te++)i.sunShadowMatrix[_+Te]=Q.getMatrix(Te),i.sunShadowCascade[_+Te]=Q._cascadeData[Te];_+=Pe,g++}i.sun[m]=q,m++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=D.shadow.matrix,w++}i.directional[d]=q,d++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[y]=q;const Q=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[y]=Q.matrix,D.castShadow){const te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[y]=te,i.spotShadowMap[y]=ie,R++}y++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(z).multiplyScalar(X),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=q,T++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[f]=te,i.pointShadowMap[f]=ie,i.pointShadowMatrix[f]=D.shadow.matrix,E++}i.point[f]=q,f++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(X),q.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[M]=q,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const L=i.hash;(L.sunLength!==m||L.directionalLength!==d||L.pointLength!==f||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==C)&&(i.sun.length=m,i.directional.length=d,i.spot.length=y,i.rectArea.length=T,i.point.length=f,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-b,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,L.sunLength=m,L.directionalLength=d,L.pointLength=f,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=C,i.version=Qg++)}function l(c,h){let p=0,u=0,m=0,g=0,_=0,d=0;const f=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const M=c[y];if(M.isSunLight){const w=i.sun[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),p++}else if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}}}return{setup:a,setupView:l,state:i}}function bc(n){const e=new e_(n),t=[],i=[],s=[];function r(u){p.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function t_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bc(n),e.set(s,[a])):r>=o.length?(a=new bc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`,s_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],r_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ec=new ht,os=new P,yo=new P;function o_(n,e,t){let i=new Ba;const s=new ae,r=new ae,o=new Mt,a=new hf,l=new df,c={},h=t.maxTextureSize,p={[pi]:Vt,[Vt]:pi,[Mn]:Mn},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let f=this.type;this.render=function(E,R,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;this.type===kc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const b=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Fn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=f!==this.type;O&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=E.length;D<z;D++){const X=E[D],W=X.shadow;if(W===void 0){He("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ls){if(X.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new dn(s.x,s.y,{format:gi,type:Tn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Ss(s.x,s.y,un),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=zn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt}else X.isPointLight?(W.map=new wu(s.x),W.map.depthTexture=new wd(s.x,En)):(W.map=new dn(s.x,s.y),W.map.depthTexture=new Ss(s.x,s.y,En)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=zn,this.type===or?(W.map.depthTexture.compareFunction=q?Ua:Na,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,x);for(let te=0;te<Q;te++){const Pe=W.getCamera(te);if(X.isPointLight){const Te=W.camera,at=W.matrix,Qe=X.distance||Te.far;Qe!==Te.far&&(Te.far=Qe,Te.updateProjectionMatrix()),os.setFromMatrixPosition(X.matrixWorld),Te.position.copy(os),yo.copy(Te.position),yo.add(s_[te]),Te.up.copy(r_[te]),Te.lookAt(yo),Te.updateMatrixWorld(),at.makeTranslation(-os.x,-os.y,-os.z),Ec.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ec,Te.coordinateSystem,Te.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,te),n.clear();else{te===0&&(n.setRenderTarget(W.map),n.clear());const Te=W.getViewport(te);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),U.viewport(o)}i=W.getFrustum(te),M(R,x,Pe,X,this.type)}W.isPointLightShadow!==!0&&this.type===ls&&y(W,x),W.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(b,C,L)};function y(E,R){const x=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(s.x,s.y,{format:gi,type:Tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,m,_,null)}function T(E,R,x,b){let C=null;const L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,O=R.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let z=D[O];z===void 0&&(z=C.clone(),D[O]=z,R.addEventListener("dispose",w)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ls?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=x}return C}function M(E,R,x,b,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ls)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const O=e.update(E),D=E.material;if(Array.isArray(D)){const z=O.groups;for(let X=0,W=z.length;X<W;X++){const ie=z[X],q=D[ie.materialIndex];if(q&&q.visible){const Q=T(E,q,b,C);E.onBeforeShadow(n,E,R,x,O,Q,ie),n.renderBufferDirect(x,null,O,Q,E,ie),E.onAfterShadow(n,E,R,x,O,Q,ie)}}}else if(D.visible){const z=T(E,D,b,C);E.onBeforeShadow(n,E,R,x,O,z,null),n.renderBufferDirect(x,null,O,z,E,null),E.onAfterShadow(n,E,R,x,O,z,null)}}const U=E.children;for(let O=0,D=U.length;O<D;O++)M(U[O],R,x,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const x in c){const b=c[x],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function a_(n,e){function t(){let F=!1;const fe=new Mt;let K=null;const pe=new Mt(0,0,0,0);return{setMask:function(ye){K!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){F=ye},setClear:function(ye,ne,De,Ce,_t){_t===!0&&(ye*=Ce,ne*=Ce,De*=Ce),fe.set(ye,ne,De,Ce),pe.equals(fe)===!1&&(n.clearColor(ye,ne,De,Ce),pe.copy(fe))},reset:function(){F=!1,K=null,pe.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,K=null,pe=null,ye=null;return{setReversed:function(ne){if(fe!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(ne){ne?j(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ne){K!==ne&&!F&&(n.depthMask(ne),K=ne)},setFunc:function(ne){if(fe&&(ne=td[ne]),pe!==ne){switch(ne){case To:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case Ao:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Ro:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ne}},setLocked:function(ne){F=ne},setClear:function(ne){ye!==ne&&(ye=ne,fe&&(ne=1-ne),n.clearDepth(ne))},reset:function(){F=!1,K=null,pe=null,ye=null,fe=!1}}}function s(){let F=!1,fe=null,K=null,pe=null,ye=null,ne=null,De=null,Ce=null,_t=null;return{setTest:function(ct){F||(ct?j(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!F&&(n.stencilMask(ct),fe=ct)},setFunc:function(ct,tn,pn){(K!==ct||pe!==tn||ye!==pn)&&(n.stencilFunc(ct,tn,pn),K=ct,pe=tn,ye=pn)},setOp:function(ct,tn,pn){(ne!==ct||De!==tn||Ce!==pn)&&(n.stencilOp(ct,tn,pn),ne=ct,De=tn,Ce=pn)},setLocked:function(ct){F=ct},setClear:function(ct){_t!==ct&&(n.clearStencil(ct),_t=ct)},reset:function(){F=!1,fe=null,K=null,pe=null,ye=null,ne=null,De=null,Ce=null,_t=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},p={},u={},m=new WeakMap,g=[],_=null,d=!1,f=null,y=null,T=null,M=null,w=null,E=null,R=null,x=new Ke(0,0,0),b=0,C=!1,L=null,U=null,O=null,D=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ie>=2);let Q=null,te={};const Pe=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),at=new Mt().fromArray(Pe),Qe=new Mt().fromArray(Te);function rt(F,fe,K,pe){const ye=new Uint8Array(4),ne=n.createTexture();n.bindTexture(F,ne),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<K;De++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(fe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ne}const Z={};Z[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(_s),oe(!1),ue(ml),j(n.CULL_FACE),se(Fn);function j(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Oe(F,fe){return u[F]!==fe?(n.bindFramebuffer(F,fe),u[F]=fe,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(F,fe){let K=g,pe=!1;if(F){K=m.get(fe),K===void 0&&(K=[],m.set(fe,K));const ye=F.textures;if(K.length!==ye.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,De=ye.length;ne<De;ne++)K[ne]=n.COLOR_ATTACHMENT0+ne;K.length=ye.length,pe=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,pe=!0);pe&&n.drawBuffers(K)}function ze(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const dt={[Oi]:n.FUNC_ADD,[yh]:n.FUNC_SUBTRACT,[Sh]:n.FUNC_REVERSE_SUBTRACT};dt[bh]=n.MIN,dt[Eh]=n.MAX;const ee={[Th]:n.ZERO,[wh]:n.ONE,[Ah]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[Dh]:n.SRC_ALPHA_SATURATE,[Lh]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[Ch]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[Ih]:n.ONE_MINUS_DST_COLOR,[Ph]:n.ONE_MINUS_DST_ALPHA,[Nh]:n.CONSTANT_COLOR,[Uh]:n.ONE_MINUS_CONSTANT_COLOR,[Fh]:n.CONSTANT_ALPHA,[Oh]:n.ONE_MINUS_CONSTANT_ALPHA};function se(F,fe,K,pe,ye,ne,De,Ce,_t,ct){if(F===Fn){d===!0&&(_e(n.BLEND),d=!1);return}if(d===!1&&(j(n.BLEND),d=!0),F!==Mh){if(F!==f||ct!==C){if((y!==Oi||w!==Oi)&&(n.blendEquation(n.FUNC_ADD),y=Oi,w=Oi),ct)switch(F){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _l:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}T=null,M=null,E=null,R=null,x.set(0,0,0),b=0,f=F,C=ct}return}ye=ye||fe,ne=ne||K,De=De||pe,(fe!==y||ye!==w)&&(n.blendEquationSeparate(dt[fe],dt[ye]),y=fe,w=ye),(K!==T||pe!==M||ne!==E||De!==R)&&(n.blendFuncSeparate(ee[K],ee[pe],ee[ne],ee[De]),T=K,M=pe,E=ne,R=De),(Ce.equals(x)===!1||_t!==b)&&(n.blendColor(Ce.r,Ce.g,Ce.b,_t),x.copy(Ce),b=_t),f=F,C=!1}function re(F,fe){F.side===Mn?_e(n.CULL_FACE):j(n.CULL_FACE);let K=F.side===Vt;fe&&(K=!K),oe(K),F.blending===ds&&F.transparent===!1?se(Fn):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const pe=F.stencilWrite;a.setTest(pe),pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function ue(F){F!==vh?(j(n.CULL_FACE),F!==U&&(F===ml?n.cullFace(n.BACK):F===xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),U=F}function Ue(F){F!==O&&(W&&n.lineWidth(F),O=F)}function Ne(F,fe,K){F?(j(n.POLYGON_OFFSET_FILL),(D!==fe||z!==K)&&(D=fe,z=K,o.getReversed()&&(fe=-fe),n.polygonOffset(fe,K))):_e(n.POLYGON_OFFSET_FILL)}function ke(F){F?j(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function We(F){F===void 0&&(F=n.TEXTURE0+X-1),Q!==F&&(n.activeTexture(F),Q=F)}function I(F,fe,K){K===void 0&&(Q===null?K=n.TEXTURE0+X-1:K=Q);let pe=te[K];pe===void 0&&(pe={type:void 0,texture:void 0},te[K]=pe),(pe.type!==F||pe.texture!==fe)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(F,fe||Z[F]),pe.type=F,pe.texture=fe)}function lt(){const F=te[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function v(){try{n.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function B(){try{n.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function le(){try{n.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ce(){try{n.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function $(){try{n.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function J(){try{n.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function he(F){return p[F]!==void 0?p[F]:n.getParameter(F)}function Le(F,fe){p[F]!==fe&&(n.pixelStorei(F,fe),p[F]=fe)}function me(F){at.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function de(F){Qe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function Ie(F,fe){let K=c.get(fe);K===void 0&&(K=new WeakMap,c.set(fe,K));let pe=K.get(F);pe===void 0&&(pe=n.getUniformBlockIndex(fe,F.name),K.set(F,pe))}function Fe(F,fe){const pe=c.get(fe).get(F);l.get(fe)!==pe&&(n.uniformBlockBinding(fe,pe,F.__bindingPointIndex),l.set(fe,pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,te={},u={},m=new WeakMap,g=[],_=null,d=!1,f=null,y=null,T=null,M=null,w=null,E=null,R=null,x=new Ke(0,0,0),b=0,C=!1,L=null,U=null,O=null,D=null,z=null,at.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:_e,bindFramebuffer:Oe,drawBuffers:Se,useProgram:ze,setBlending:se,setMaterial:re,setFlipSided:oe,setCullFace:ue,setLineWidth:Ue,setPolygonOffset:Ne,setScissorTest:ke,activeTexture:We,bindTexture:I,unbindTexture:lt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Le,getParameter:he,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:ce,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:me,viewport:de,reset:qe}}function l_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,p=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):ys("canvas")}function d(A,v,B){let H=1;const Y=je(A);if((Y.width>B||Y.height>B)&&(H=B/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const le=Math.floor(H*Y.width),ce=Math.floor(H*Y.height);u===void 0&&(u=_(le,ce));const $=v?_(le,ce):u;return $.width=le,$.height=ce,$.getContext("2d").drawImage(A,0,0,le,ce),He("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),$}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,v,B,H,Y,le=!1){if(A!==null){if(n[A]!==void 0)return n[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8),B===n.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),B===n.SHORT&&ce&&($=ce.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),v===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8),B===n.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),B===n.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),B===n.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){const J=le?mr:tt.getTransfer(Y);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=J===ft?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),B===n.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(A,v){let B;return A?v===null||v===En||v===xs?B=n.DEPTH24_STENCIL8:v===un?B=n.DEPTH32F_STENCIL8:v===vs&&(B=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===xs?B=n.DEPTH_COMPONENT24:v===un?B=n.DEPTH_COMPONENT32F:v===vs&&(B=n.DEPTH_COMPONENT16),B}function E(A,v){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&p.delete(v)}function x(A){const v=A.target;v.removeEventListener("dispose",x),L(v)}function b(A){const v=i.get(A);if(v.__webglInit===void 0)return;const B=A.source,H=m.get(B);if(H){const Y=H[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(H).length===0&&m.delete(B)}i.remove(A)}function C(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const B=A.source,H=m.get(B);delete H[v.__cacheKey],o.memory.textures--}function L(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let Y=0;Y<v.__webglFramebuffer[H].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[H][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)n.deleteFramebuffer(v.__webglFramebuffer[H]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,Y=B.length;H<Y;H++){const le=i.get(B[H]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(B[H])}i.remove(A)}let U=0;function O(){U=0}function D(){return U}function z(A){U=A}function X(){const A=U;return A>=s.maxTextures&&He("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function W(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ie(A,v){const B=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function q(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_e(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function Q(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_e(B,A,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function te(A,v){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Oe(B,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const Pe={[Io]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[Do]:n.MIRRORED_REPEAT},Te={[Dt]:n.NEAREST,[kh]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[kr]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},at={[Wh]:n.NEVER,[Zh]:n.ALWAYS,[Xh]:n.LESS,[Na]:n.LEQUAL,[qh]:n.EQUAL,[Ua]:n.GEQUAL,[Yh]:n.GREATER,[$h]:n.NOTEQUAL};function Qe(A,v){if(v.type===un&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===kr||v.magFilter===Is||v.magFilter===li||v.minFilter===Ot||v.minFilter===kr||v.minFilter===Is||v.minFilter===li)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Pe[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Pe[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Pe[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dt||v.minFilter!==Is&&v.minFilter!==li||v.type===un&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function rt(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const H=v.source;let Y=m.get(H);Y===void 0&&(Y={},m.set(H,Y));const le=W(v);if(le!==A.__cacheKey){Y[le]===void 0&&(Y[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[le].usedTimes++;const ce=Y[A.__cacheKey];ce!==void 0&&(Y[A.__cacheKey].usedTimes--,ce.usedTimes===0&&C(v)),A.__cacheKey=le,A.__webglTexture=Y[le].texture}return B}function Z(A,v,B){return Math.floor(Math.floor(A/B)/v)}function j(A,v,B,H){const le=A.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,H,v.data);else{le.sort((Le,me)=>Le.start-me.start);let ce=0;for(let Le=1;Le<le.length;Le++){const me=le[ce],de=le[Le],Ie=me.start+me.count,Fe=Z(de.start,v.width,4),qe=Z(me.start,v.width,4);de.start<=Ie+1&&Fe===qe&&Z(de.start+de.count-1,v.width,4)===Fe?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;const $=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Le=0,me=le.length;Le<me;Le++){const de=le[Le],Ie=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),qe=Ie%v.width,F=Math.floor(Ie/v.width),fe=Fe,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,qe,F,fe,K,B,H,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function _e(A,v,B){let H=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=n.TEXTURE_3D);const Y=rt(A,v),le=v.source;t.bindTexture(H,A.__webglTexture,n.TEXTURE0+B);const ce=i.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const K=tt.getPrimaries(tt.workingColorSpace),pe=v.colorSpace===$n?null:tt.getPrimaries(v.colorSpace),ye=v.colorSpace===$n||K===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=d(v.image,!1,s.maxTextureSize);J=lt(v,J);const he=r.convert(v.format,v.colorSpace),Le=r.convert(v.type);let me=M(v.internalFormat,he,Le,v.normalized,v.colorSpace,v.isVideoTexture);Qe(H,v);let de;const Ie=v.mipmaps,Fe=v.isVideoTexture!==!0,qe=ce.__version===void 0||Y===!0,F=le.dataReady,fe=E(v,J);if(v.isDepthTexture)me=w(v.format===ci,v.type),qe&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,he,Le,null));else if(v.isDataTexture)if(Ie.length>0){Fe&&qe&&t.texStorage2D(n.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],Fe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,he,Le,de.data):t.texImage2D(n.TEXTURE_2D,K,me,de.width,de.height,0,he,Le,de.data);v.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(n.TEXTURE_2D,fe,me,J.width,J.height),F&&j(v,J,he,Le)):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,he,Le,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,Ie[0].width,Ie[0].height,J.depth);for(let K=0,pe=Ie.length;K<pe;K++)if(de=Ie[K],v.format!==hn)if(he!==null)if(Fe){if(F)if(v.layerUpdates.size>0){const ye=nc(de.width,de.height,v.format,v.type);for(const ne of v.layerUpdates){const De=de.data.subarray(ne*ye/de.data.BYTES_PER_ELEMENT,(ne+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ne,de.width,de.height,1,he,De)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,he,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,me,de.width,de.height,J.depth,0,de.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,he,Le,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,me,de.width,de.height,J.depth,0,he,Le,de.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Fe&&qe&&t.texStorage2D(n.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],v.format!==hn?he!==null?Fe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(n.TEXTURE_2D,K,me,de.width,de.height,0,de.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,he,Le,de.data):t.texImage2D(n.TEXTURE_2D,K,me,de.width,de.height,0,he,Le,de.data)}else if(v.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,J.width,J.height,J.depth),F)if(v.layerUpdates.size>0){const K=nc(J.width,J.height,v.format,v.type);for(const pe of v.layerUpdates){const ye=J.data.subarray(pe*K/J.data.BYTES_PER_ELEMENT,(pe+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,J.width,J.height,1,he,Le,ye)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,Le,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,he,Le,J.data);else if(v.isData3DTexture)Fe?(qe&&t.texStorage3D(n.TEXTURE_3D,fe,me,J.width,J.height,J.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,Le,J.data)):t.texImage3D(n.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,he,Le,J.data);else if(v.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(n.TEXTURE_2D,fe,me,J.width,J.height);else{let K=J.width,pe=J.height;for(let ye=0;ye<fe;ye++)t.texImage2D(n.TEXTURE_2D,ye,me,K,pe,0,he,Le,null),K>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),p.add(v),K.onpaint=pe=>{const ye=pe.changedElements;for(const ne of p)ye.includes(ne.image)&&(ne.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const ye=n.RGBA,ne=n.RGBA,De=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,ne,De,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&qe){const K=je(Ie[0]);t.texStorage2D(n.TEXTURE_2D,fe,me,K.width,K.height)}for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],Fe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,he,Le,de):t.texImage2D(n.TEXTURE_2D,K,me,he,Le,de);v.generateMipmaps=!1}else if(Fe){if(qe){const K=je(J);t.texStorage2D(n.TEXTURE_2D,fe,me,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Le,J)}else t.texImage2D(n.TEXTURE_2D,0,me,he,Le,J);f(v)&&y(H),ce.__version=le.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Oe(A,v,B){if(v.image.length!==6)return;const H=rt(A,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const le=i.get(Y);if(Y.version!==le.__version||H===!0){t.activeTexture(n.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),$=v.colorSpace===$n?null:tt.getPrimaries(v.colorSpace),J=v.colorSpace===$n||ce===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,Le=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!he&&!Le?me[ne]=d(v.image[ne],!0,s.maxCubemapSize):me[ne]=Le?v.image[ne].image:v.image[ne],me[ne]=lt(v,me[ne]);const de=me[0],Ie=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),qe=M(v.internalFormat,Ie,Fe,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,fe=le.__version===void 0||H===!0,K=Y.dataReady;let pe=E(v,de);Qe(n.TEXTURE_CUBE_MAP,v);let ye;if(he){F&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,de.width,de.height);for(let ne=0;ne<6;ne++){ye=me[ne].mipmaps;for(let De=0;De<ye.length;De++){const Ce=ye[De];v.format!==hn?Ie!==null?F?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,qe,Ce.width,Ce.height,0,Ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ce.width,Ce.height,Ie,Fe,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,qe,Ce.width,Ce.height,0,Ie,Fe,Ce.data)}}}else{if(ye=v.mipmaps,F&&fe){ye.length>0&&pe++;const ne=je(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Le){F?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Ie,Fe,me[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,me[ne].width,me[ne].height,0,Ie,Fe,me[ne].data);for(let De=0;De<ye.length;De++){const _t=ye[De].image[ne].image;F?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,_t.width,_t.height,Ie,Fe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,qe,_t.width,_t.height,0,Ie,Fe,_t.data)}}else{F?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Fe,me[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ie,Fe,me[ne]);for(let De=0;De<ye.length;De++){const Ce=ye[De];F?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Ie,Fe,Ce.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,qe,Ie,Fe,Ce.image[ne])}}}f(v)&&y(n.TEXTURE_CUBE_MAP),le.__version=Y.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Se(A,v,B,H,Y,le){const ce=r.convert(B.format,B.colorSpace),$=r.convert(B.type),J=M(B.internalFormat,ce,$,B.normalized,B.colorSpace),he=i.get(v),Le=i.get(B);if(Le.__renderTarget=v,!he.__hasExternalTextures){const me=Math.max(1,v.width>>le),de=Math.max(1,v.height>>le);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,J,me,de,v.depth,0,ce,$,null):t.texImage2D(Y,le,J,me,de,0,ce,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),We(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Y,Le.__webglTexture,0,ke(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Y,Le.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const H=v.depthTexture,Y=H&&H.isDepthTexture?H.type:null,le=w(v.stencilBuffer,Y),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;We(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke(v),le,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke(v),le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,A)}else{const H=v.textures;for(let Y=0;Y<H.length;Y++){const le=H[Y],ce=r.convert(le.format,le.colorSpace),$=r.convert(le.type),J=M(le.internalFormat,ce,$,le.normalized,le.colorSpace);We(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke(v),J,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(A,v,B){const H=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,v.depthTexture);const he=r.convert(v.depthTexture.format),Le=r.convert(v.depthTexture.type);let me;v.depthTexture.format===zn?me=n.DEPTH_COMPONENT24:v.depthTexture.format===ci&&(me=n.DEPTH24_STENCIL8);for(let de=0;de<6;de++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,v.width,v.height,0,he,Le,null)}}else ie(v.depthTexture,0);const le=Y.__webglTexture,ce=ke(v),$=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,J=v.depthTexture.format===ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===zn)We(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,le,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,le,0);else if(v.depthTexture.format===ci)We(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,le,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(A){const v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=H}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)dt(v.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?dt(v.__webglFramebuffer[0],A,0):dt(v.__webglFramebuffer,A,0)}else if(B){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=n.createRenderbuffer(),ze(v.__webglDepthbuffer[H],A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,le)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ze(v.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(A,v,B){const H=i.get(A);v!==void 0&&Se(H.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ee(A)}function re(A){const v=A.texture,B=i.get(A),H=i.get(v);A.addEventListener("dispose",x);const Y=A.textures,le=A.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,o.memory.textures++),le){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[$][J]=n.createFramebuffer()}else B.__webglFramebuffer[$]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[$]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)for(let $=0,J=Y.length;$<J;$++){const he=i.get(Y[$]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){const J=Y[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const he=r.convert(J.format,J.colorSpace),Le=r.convert(J.type),me=M(J.internalFormat,he,Le,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),de=ke(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Se(B.__webglFramebuffer[$][J],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Se(B.__webglFramebuffer[$],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(v)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,J=Y.length;$<J;$++){const he=Y[$],Le=i.get(he);let me=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Le.__webglTexture),Qe(me,he),Se(B.__webglFramebuffer,A,he,n.COLOR_ATTACHMENT0+$,me,0),f(he)&&y(me)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Qe($,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Se(B.__webglFramebuffer[J],A,v,n.COLOR_ATTACHMENT0,$,J);else Se(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,$,0);f(v)&&y($),t.unbindTexture()}A.depthBuffer&&ee(A)}function oe(A){const v=A.textures;for(let B=0,H=v.length;B<H;B++){const Y=v[B];if(f(Y)){const le=T(A),ce=i.get(Y).__webglTexture;t.bindTexture(le,ce),y(le),t.unbindTexture()}}}const ue=[],Ue=[];function Ne(A){if(A.samples>0){if(We(A)===!1){const v=A.textures,B=A.width,H=A.height;let Y=n.COLOR_BUFFER_BIT;const le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(A),$=v.length>1;if($)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Le=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,B,H,0,0,B,H,Y,n.NEAREST),l===!0&&(ue.length=0,Ue.length=0,ue.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ue.push(le),Ue.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Le=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ke(A){return Math.min(s.maxSamples,A.samples)}function We(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function lt(A,v){const B=A.colorSpace,H=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==pr&&B!==$n&&(tt.getTransfer(B)===ft?(H!==hn||Y!==Yt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",B)),v}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c_(n,e){function t(i,s=$n){let r;const o=tt.getTransfer(s);if(i===Yt)return n.UNSIGNED_BYTE;if(i===Ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return n.BYTE;if(i===Qc)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===Aa)return n.INT;if(i===En)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===nu)return n.RGB;if(i===hn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===ci)return n.DEPTH_STENCIL;if(i===Pa)return n.RED;if(i===La)return n.RED_INTEGER;if(i===gi)return n.RG;if(i===Ia)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===ar||i===lr||i===cr||i===ur)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===No||i===Uo||i===Fo||i===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bo||i===zo||i===ko||i===Go||i===Ho||i===dr||i===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bo||i===zo)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Go)return r.COMPRESSED_R11_EAC;if(i===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dr)return r.COMPRESSED_RG11_EAC;if(i===Vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===Ko||i===Jo||i===Qo||i===jo||i===ea||i===ta||i===na||i===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===ra||i===oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sa)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aa||i===la||i===fr||i===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`;class d_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:u_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f_ extends xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",d=new d_,f={},y=t.getContextAttributes();let T=null,M=null;const w=[],E=[],R=new ae;let x=null,b=null;const C=new ln;C.viewport=new Mt;const L=new ln;L.viewport=new Mt;const U=[C,L],O=new Mf;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getHandSpace()};function X(Z){const j=E.indexOf(Z.inputSource);if(j===-1)return;const _e=w[j];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){const j=E[Z];j!==null&&(E[Z]=null,w[Z].disconnect(j))}D=null,z=null,d.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(T),m=null,u=null,p=null,s=null,M=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),b!==null){const Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?ci:zn,Oe=y.stencil?xs:En);const ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new dn(u.textureWidth,u.textureHeight,{format:hn,type:Yt,depthTexture:new Ss(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new dn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const _e=Z.removed[j],Oe=E.indexOf(_e);Oe>=0&&(E[Oe]=null,w[Oe].disconnect(_e))}for(let j=0;j<Z.added.length;j++){const _e=Z.added[j];let Oe=E.indexOf(_e);if(Oe===-1){for(let ze=0;ze<w.length;ze++)if(ze>=E.length){E.push(_e),Oe=ze;break}else if(E[ze]===null){E[ze]=_e,Oe=ze;break}if(Oe===-1)break}const Se=w[Oe];Se&&Se.connect(_e)}}const q=new P,Q=new P;function te(Z,j,_e){q.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Oe=q.distanceTo(Q),Se=j.projectionMatrix.elements,ze=_e.projectionMatrix.elements,dt=Se[14]/(Se[10]-1),ee=Se[14]/(Se[10]+1),se=(Se[9]+1)/Se[5],re=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],ue=(ze[8]+1)/ze[0],Ue=dt*oe,Ne=dt*ue,ke=Oe/(-oe+ue),We=ke*-oe;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=dt+ke,lt=ee+ke,je=Ue-We,A=Ne+(Oe-We),v=se*ee/lt*I,B=re*ee/lt*I;Z.projectionMatrix.makePerspective(je,A,v,B,I,lt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Pe(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,_e=Z.far;d.texture!==null&&(d.depthNear>0&&(j=d.depthNear),d.depthFar>0&&(_e=d.depthFar)),O.near=L.near=C.near=j,O.far=L.far=C.far=_e,(D!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,z=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Oe=Z.parent,Se=O.cameras;Pe(O,Oe);for(let ze=0;ze<Se.length;ze++)Pe(Se[ze],Oe);Se.length===2?te(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,O,Oe)};function Te(Z,j,_e){_e===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ha*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(O)},this.getCameraTexture=function(Z){return f[Z]};let at=null;function Qe(Z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const _e=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Oe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let ee=0;ee<_e.length;ee++){const se=_e[ee];let re=null;if(m!==null)re=m.getViewport(se);else{const ue=p.getViewSubImage(u,se);re=ue.viewport,ee===0&&(e.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(M))}let oe=U[ee];oe===void 0&&(oe=new ln,oe.layers.enable(ee),oe.viewport=new Mt,U[ee]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(O.matrix.copy(oe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(oe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=i.getBinding();const ee=p.getDepthInformation(_e[0]);ee&&ee.isValid&&ee.texture&&d.init(ee,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let ee=0;ee<_e.length;ee++){const se=_e[ee].camera;if(se){let re=f[se];re||(re=new hu,f[se]=re);const oe=p.getCameraImage(se);re.sourceTexture=oe}}}}for(let _e=0;_e<w.length;_e++){const Oe=E[_e],Se=w[_e];Oe!==null&&Se!==void 0&&Se.update(Oe,j,c||o)}at&&at(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const rt=new Eu;rt.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const p_=new ht,Lu=new Xe;Lu.set(-1,0,0,0,1,0,0,0,1);function m_(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,yu(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,y,T,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(d,f):f.isMeshLambertMaterial?(r(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(d,f),p(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(d,f),u(d,f),f.isMeshPhysicalMaterial&&m(d,f,M)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),_(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,y,T):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Vt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Vt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,M=y.envMapRotation;T&&(d.envMap.value=T,d.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Lu),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,y,T){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*y,d.scale.value=T*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function u(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,y){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.retroreflectivity>0&&(d.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){const y=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g_(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const E=w.program;i.uniformBlockBinding(M,E)}function c(M,w){let E=s[M.id];E===void 0&&(d(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",y));const R=w.program;i.updateUBOMapping(M,R);const x=e.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){const w=p();M.__bindingPointIndex=w;const E=n.createBuffer(),R=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const w=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,b=E.length;x<b;x++){const C=E[x];if(Array.isArray(C))for(let L=0,U=C.length;L<U;L++)m(C[L],x,L,R);else m(C,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,w,E,R){if(_(M,w,E,R)===!0){const x=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const U=b[L],O=f(U);g(U,M.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function _(M,w,E,R){const x=M.value,b=w+"_"+E;if(R[b]===void 0)return typeof x=="number"||typeof x=="boolean"?R[b]=x:ArrayBuffer.isView(x)?R[b]=x.slice():R[b]=x.clone(),!0;{const C=R[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function d(M){const w=M.uniforms;let E=0;const R=16;for(let b=0,C=w.length;b<C;b++){const L=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,O=L.length;U<O;U++){const D=L[U],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,W=z.length;X<W;X++){const ie=z[X],q=f(ie),Q=E%R,te=Q%q.boundary,Pe=Q+te;E+=te,Pe!==0&&R-Pe<q.storage&&(E+=R-Pe),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=q.storage}}}const x=E%R;return x>0&&(E+=R-x),M.__size=E,M.__cache={},this}function f(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){const w=M.target;w.removeEventListener("dispose",y);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}const __=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function v_(){return _n===null&&(_n=new cu(__,16,16,gi,Tn),_n.name="DFG_LUT",_n.minFilter=Ot,_n.magFilter=Ot,_n.wrapS=Un,_n.wrapT=Un,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class x_{constructor(e={}){const{canvas:t=jh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Yt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=m,d=new Set([Da,Ia,La]),f=new Set([Yt,En,vs,xs,Ca,Ra]),y=new Uint32Array(4),T=new Int32Array(4),M=new P;let w=null,E=null;const R=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,O=null,D=null,z=null;this._outputColorSpace=Gt;let X=0,W=0,ie=null,q=-1,Q=null;const te=new Mt,Pe=new Mt;let Te=null;const at=new Ke(0);let Qe=0,rt=t.width,Z=t.height,j=1,_e=null,Oe=null;const Se=new Mt(0,0,rt,Z),ze=new Mt(0,0,rt,Z);let dt=!1;const ee=new Ba;let se=!1,re=!1;const oe=new ht,ue=new P,Ue=new Mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function We(){return ie===null?j:1}let I=i;function lt(S,N){return t.getContext(S,N)}let je,A,v,B,H,Y,le,ce,$,J,he,Le,me,de,Ie,Fe,qe,F,fe,K,pe,ye,ne;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",tn,!1),I===null){const N="webgl2";if(I=lt(N,S),I===null)throw lt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(S){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),it("WebGLRenderer: "+S.message),S}function De(){je=new v0(I),je.init(),pe=new c_(I,je),A=new l0(I,je,e,pe),v=new a_(I,je),A.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=I.createFramebuffer(),D=I.createFramebuffer(),z=I.createFramebuffer(),B=new y0(I),H=new Yg,Y=new l_(I,je,v,H,A,pe,B),le=new _0(C),ce=new bf(I),ye=new o0(I,ce),$=new x0(I,ce,B,ye),J=new b0(I,$,ce,ye,B),F=new S0(I,A,Y),Ie=new c0(H),he=new qg(C,le,je,A,ye,Ie),Le=new m_(C,H),me=new Zg,de=new t_(je),qe=new r0(C,le,v,J,g,l),Fe=new o_(C,J,A),ne=new g_(I,B,A,v),fe=new a0(I,je,B),K=new M0(I,je,B),B.programs=he.programs,C.capabilities=A,C.extensions=je,C.properties=H,C.renderLists=me,C.shadowMap=Fe,C.state=v,C.info=B}_!==Yt&&(b=new T0(_,t.width,t.height,a,s,r));const Ce=new f_(C,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(rt,Z,!1))},this.getSize=function(S){return S.set(rt,Z)},this.setSize=function(S,N,V=!0){if(Ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=S,Z=N,t.width=Math.floor(S*j),t.height=Math.floor(N*j),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(rt*j,Z*j).floor()},this.setDrawingBufferSize=function(S,N,V){rt=S,Z=N,j=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===Yt){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,N,V,k){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,N,V,k),v.viewport(te.copy(Se).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,N,V,k){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,N,V,k),v.scissor(Pe.copy(ze).multiplyScalar(j).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(S){v.setScissorTest(dt=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let k=0;if(S){let G=!1;if(ie!==null){const Me=ie.texture.format;G=d.has(Me)}if(G){const Me=ie.texture.type,Ee=f.has(Me),ve=qe.getClearColor(),we=qe.getClearAlpha(),Re=ve.r,$e=ve.g,et=ve.b;Ee?(y[0]=Re,y[1]=$e,y[2]=et,y[3]=we,I.clearBufferuiv(I.COLOR,0,y)):(T[0]=Re,T[1]=$e,T[2]=et,T[3]=we,I.clearBufferiv(I.COLOR,0,T))}else k|=I.COLOR_BUFFER_BIT}N&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),qe.dispose(),me.dispose(),de.dispose(),H.dispose(),le.dispose(),J.dispose(),ye.dispose(),ne.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",sl),Ce.removeEventListener("sessionend",rl),ti.stop()};function _t(S){S.preventDefault(),yl("WebGLRenderer: Context Lost."),L=!0}function ct(){yl("WebGLRenderer: Context Restored."),L=!1;const S=B.autoReset,N=Fe.enabled,V=Fe.autoUpdate,k=Fe.needsUpdate,G=Fe.type;De(),B.autoReset=S,Fe.enabled=N,Fe.autoUpdate=V,Fe.needsUpdate=k,Fe.type=G}function tn(S){it("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pn(S){const N=S.target;N.removeEventListener("dispose",pn),Yu(N)}function Yu(S){$u(S),H.remove(S)}function $u(S){const N=H.get(S).programs;N!==void 0&&(N.forEach(function(V){he.releaseProgram(V)}),S.isShaderMaterial&&he.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,k,G,Me){N===null&&(N=Ne);const Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Ju(S,N,V,k,G);v.setMaterial(k,Ee);let we=V.index,Re=1;if(k.wireframe===!0){if(we=$.getWireframeAttribute(V),we===void 0)return;Re=2}const $e=V.drawRange,et=V.attributes.position;let Ae=$e.start*Re,ut=($e.start+$e.count)*Re;Me!==null&&(Ae=Math.max(Ae,Me.start*Re),ut=Math.min(ut,(Me.start+Me.count)*Re)),we!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,we.count)):et!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,et.count));const Tt=ut-Ae;if(Tt<0||Tt===1/0)return;ye.setup(G,k,ve,V,we);let xt,gt=fe;if(we!==null&&(xt=ce.get(we),gt=K,gt.setIndex(xt)),G.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*We()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(G.isLine){let Nt=k.linewidth;Nt===void 0&&(Nt=1),v.setLineWidth(Nt*We()),G.isLineSegments?gt.setMode(I.LINES):G.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else G.isPoints?gt.setMode(I.POINTS):G.isSprite&&gt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,be=G._multiDrawCounts,zt=G._multiDrawCount,ot=we?ce.get(we).bytesPerElement:1,Zt=H.get(k).currentProgram.getUniforms();for(let mn=0;mn<zt;mn++)Zt.setValue(I,"_gl_DrawID",mn),gt.render(Nt[mn]/ot,be[mn])}else if(G.isInstancedMesh)gt.renderInstances(Ae,Tt,G.count);else if(V.isInstancedBufferGeometry){const Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,Nt);gt.renderInstances(Ae,Tt,be)}else gt.render(Ae,Tt)};function il(S,N,V,k){U!==null&&S.isNodeMaterial&&U.setObject(k,S),se===!0&&Ie.setState(S,V,!1),S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Ls(S,N,k),S.side=pi,S.needsUpdate=!0,Ls(S,N,k),S.side=Mn):Ls(S,N,k)}this.compile=function(S,N,V=null){V===null&&(V=S),U!==null&&U.renderStart(S,N,V),E=de.get(V),E.init(N),x.push(E),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),se===!0&&Ie.setGlobalState(this.clippingPlanes,N),U!==null&&Fe.render(E.state.shadowsArray,V,N);const k=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const ve=Me[Ee];il(ve,V,N,G),k.add(ve)}else il(Me,V,N,G),k.add(Me)}),E=x.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(S,N,V=null){const k=this.compile(S,N,V);return new Promise(G=>{function Me(){if(k.forEach(function(Ee){const we=H.get(Ee).currentProgram;(we===void 0||we.isReady())&&k.delete(Ee)}),k.size===0){G(S);return}setTimeout(Me,10)}je.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Nr=null;function Zu(S){Nr&&Nr(S)}function sl(){ti.stop()}function rl(){ti.start()}const ti=new Eu;ti.setAnimationLoop(Zu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(S){Nr=S,Ce.setAnimationLoop(S),S===null?ti.stop():ti.start()},Ce.addEventListener("sessionstart",sl),Ce.addEventListener("sessionend",rl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(S,N);const V=Ce.enabled===!0&&Ce.isPresenting===!0,k=b!==null&&(ie===null||V)&&b.begin(C,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(N),N=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,ie),E=de.get(S,x.length),E.init(N),E.state.textureUnits=Y.getTextureUnits(),x.push(E),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(oe,yn,N.reversedDepth),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),w=me.get(S,R.length),w.init(),R.push(w),Ce.enabled===!0&&Ce.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Ur(Ee,N,-1/0,C.sortObjects)}Ur(S,N,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(_e,Oe),ke=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ke&&qe.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();const G=E.state.shadowsArray;if(Fe.render(G,S,N),se===!0&&Ie.endShadows(),(k&&b.hasRenderPass())===!1){const Ee=w.opaque,ve=w.transmissive;if(E.setupLights(),N.isArrayCamera){const we=N.cameras;if(ve.length>0)for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re];al(Ee,ve,S,et)}ke&&qe.render(S);for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re];ol(w,S,et,et.viewport)}}else ve.length>0&&al(Ee,ve,S,N),ke&&qe.render(S),ol(w,S,N)}ie!==null&&W===0&&(Y.updateMultisampleRenderTarget(ie),Y.updateRenderTargetMipmap(ie)),k&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ye.resetDefaultState(),q=-1,Q=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),se===!0&&Ie.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function Ur(S,N,V,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const Ee=J.update(S),ve=S.material;ve.visible&&w.push(S,Ee,ve,V,Ue.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){const Ee=J.update(S),ve=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(ve)){const we=Ee.groups;for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re],Ae=ve[et.materialIndex];Ae&&Ae.visible&&w.push(S,Ee,Ae,V,Ue.z,et,N)}}else ve.visible&&w.push(S,Ee,ve,V,Ue.z,null,N)}}const Me=S.children;for(let Ee=0,ve=Me.length;Ee<ve;Ee++)Ur(Me[Ee],N,V,k)}function ol(S,N,V,k){const{opaque:G,transmissive:Me,transparent:Ee}=S;E.setupLightsView(V),se===!0&&Ie.setGlobalState(C.clippingPlanes,V),k&&v.viewport(te.copy(k)),G.length>0&&Ps(G,N,V),Me.length>0&&Ps(Me,N,V),Ee.length>0&&Ps(Ee,N,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function al(S,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Ae=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new dn(1,1,{generateMipmaps:!0,type:Ae?Tn:Yt,minFilter:li,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Me=E.state.transmissionRenderTarget[k.id],Ee=k.viewport||te;Me.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const ve=C.getRenderTarget(),we=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(at),Qe=C.getClearAlpha(),Qe<1&&C.setClearColor(16777215,.5),C.clear(),ke&&qe.render(V);const $e=C.toneMapping;C.toneMapping=bn;const et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),se===!0&&Ie.setGlobalState(C.clippingPlanes,k),Ps(S,V,k),Y.updateMultisampleRenderTarget(Me),Y.updateRenderTargetMipmap(Me),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,Tt=N.length;ut<Tt;ut++){const xt=N[ut],{object:gt,geometry:Nt,material:be,group:zt}=xt;if(be.side===Mn&&gt.layers.test(k.layers)){const ot=be.side;be.side=Vt,be.needsUpdate=!0,ll(gt,V,k,Nt,be,zt),be.side=ot,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(Me),Y.updateRenderTargetMipmap(Me))}C.setRenderTarget(ve,we,Re),C.setClearColor(at,Qe),et!==void 0&&(k.viewport=et),C.toneMapping=$e}function Ps(S,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Me=S.length;G<Me;G++){const Ee=S[G],{object:ve,geometry:we,group:Re}=Ee;let $e=Ee.material;$e.allowOverride===!0&&k!==null&&($e=k),ve.layers.test(V.layers)&&ll(ve,N,V,we,$e,Re)}}function ll(S,N,V,k,G,Me){U!==null&&G.isNodeMaterial&&U.setObject(S,G),S.onBeforeRender(C,N,V,k,G,Me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,N,V,k,S,Me),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,S,Me),G.side=pi,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,S,Me),G.side=Mn):C.renderBufferDirect(V,N,k,G,S,Me),S.onAfterRender(C,N,V,k,G,Me)}function Ls(S,N,V){N.isScene!==!0&&(N=Ne);const k=H.get(S),G=E.state.lights,Me=E.state.shadowsArray,Ee=G.state.version,ve=he.getParameters(S,G.state,Me,N,V,E.state.lightProbeGridArray),we=he.getProgramCacheKey(ve);let Re=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const $e=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=le.get(S.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",pn),Re=new Map,k.programs=Re);let et=Re.get(we);if(et!==void 0){if(k.currentProgram===et&&k.lightsStateVersion===Ee)return ul(S,ve),et}else ve.uniforms=he.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,V,ve),S.onBeforeCompile(ve,C),et=he.acquireProgram(ve,we),Re.set(we,et),k.uniforms=ve.uniforms;const Ae=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),ul(S,ve),k.needsLights=ju(S),k.lightsStateVersion=Ee,k.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=et,k.uniformsList=null,et}function cl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=hr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ul(S,N){const V=H.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ku(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let V=0,k=S.length;V<k;V++){const G=S[V];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function Ju(S,N,V,k,G){N.isScene!==!0&&(N=Ne),Y.resetTextureUnits();const Me=N.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,ve=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tt.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=le.get(k.envMap||Ee,we),$e=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Tt=!!V.morphAttributes.color;let xt=bn;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xt=C.toneMapping);const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=gt!==void 0?gt.length:0,be=H.get(k),zt=E.state.lights;if(se===!0&&(re===!0||S!==Q)){const vt=S===Q&&k.id===q;Ie.setState(k,S,vt)}let ot=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==zt.state.version||be.outputColorSpace!==ve||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Re||k.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==$e||be.vertexTangents!==et||be.morphTargets!==Ae||be.morphNormals!==ut||be.morphColors!==Tt||be.toneMapping!==xt||be.morphTargetsCount!==Nt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,be.__version=k.version);let Zt=be.currentProgram;ot===!0&&(Zt=Ls(k,N,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Zt,be));let mn=!1,kn=!1,Mi=!1;const pt=Zt.getUniforms(),St=be.uniforms;if(v.useProgram(Zt.program)&&(mn=!0,kn=!0,Mi=!0),k.id!==q&&(q=k.id,kn=!0),be.needsLights){const vt=Ku(E.state.lightProbeGridArray,G);be.lightProbeGrid!==vt&&(be.lightProbeGrid=vt,kn=!0)}if(mn||Q!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(I,"projectionMatrix",S.projectionMatrix),pt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Hn=pt.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,ue.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,kn=!0,Mi=!0)}if(be.needsLights&&(zt.state.sunShadowMap.length>0&&pt.setValue(I,"sunShadowMap",zt.state.sunShadowMap,Y),zt.state.directionalShadowMap.length>0&&pt.setValue(I,"directionalShadowMap",zt.state.directionalShadowMap,Y),zt.state.spotShadowMap.length>0&&pt.setValue(I,"spotShadowMap",zt.state.spotShadowMap,Y),zt.state.pointShadowMap.length>0&&pt.setValue(I,"pointShadowMap",zt.state.pointShadowMap,Y)),G.isSkinnedMesh){pt.setOptional(I,G,"bindMatrix"),pt.setOptional(I,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(I,"boneTexture",vt.boneTexture,Y))}G.isBatchedMesh&&(pt.setOptional(I,G,"batchingTexture"),pt.setValue(I,"batchingTexture",G._matricesTexture,Y),pt.setOptional(I,G,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",G._indirectTexture,Y),pt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",G._colorsTexture,Y));const Gn=V.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&F.update(G,V,Zt),(kn||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,pt.setValue(I,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=v_()),kn){if(pt.setValue(I,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&Qu(St,Mi),Me&&k.fog===!0&&Le.refreshFogUniforms(St,Me),Le.refreshMaterialUniforms(St,k,j,Z,E.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){const vt=be.lightProbeGrid;St.probesSH.value=vt.texture,St.probesMin.value.copy(vt.boundingBox.min),St.probesMax.value.copy(vt.boundingBox.max),St.probesResolution.value.copy(vt.resolution)}hr.upload(I,cl(be),St,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hr.upload(I,cl(be),St,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(I,"center",G.center),pt.setValue(I,"modelViewMatrix",G.modelViewMatrix),pt.setValue(I,"normalMatrix",G.normalMatrix),pt.setValue(I,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const vt=k.uniformsGroups;for(let Hn=0,yi=vt.length;Hn<yi;Hn++){const dl=vt[Hn];ne.update(dl,Zt),ne.bind(dl,Zt)}}return Zt}function Qu(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,N,V){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=H.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){ie=S,X=N,W=V;let k=null,G=!1,Me=!1;if(S){const ve=H.get(S);if(ve.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(S.viewport),Pe.copy(S.scissor),Te=S.scissorTest,v.viewport(te),v.scissor(Pe),v.setScissorTest(Te),q=-1;return}else if(ve.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ve.__hasExternalTextures)Y.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const $e=S.depthTexture;if(ve.__boundDepthTexture!==$e){if($e!==null&&H.has($e)&&(S.width!==$e.image.width||S.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Re=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?k=Re[N][V]:k=Re[N],G=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[V]:k=Re,te.copy(S.viewport),Pe.copy(S.scissor),Te=S.scissorTest}else te.copy(Se).multiplyScalar(j).floor(),Pe.copy(ze).multiplyScalar(j).floor(),Te=dt;if(V!==0&&(k=O),v.bindFramebuffer(I.FRAMEBUFFER,k)&&v.drawBuffers(S,k),v.viewport(te),v.scissor(Pe),v.setScissorTest(Te),G){const ve=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,V)}else if(Me){const ve=N;for(let we=0;we<S.textures.length;we++){const Re=H.get(S.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Re.__webglTexture,V,ve)}}else if(S!==null&&V!==0){const ve=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,V)}q=-1};function hl(S){const N=H.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,V,k,G,Me,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){v.bindFramebuffer(I.FRAMEBUFFER,we);try{const Re=S.textures[ve],$e=Re.format,et=Re.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);const Ae=hl(Re);if(Ae.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G&&I.readPixels(N,V,k,G,pe.convert($e),pe.convert(et),Me)}finally{const Re=ie!==null?H.get(ie).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,k,G,Me,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G){v.bindFramebuffer(I.FRAMEBUFFER,we);const Re=S.textures[ve],$e=Re.format,et=Re.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);const Ae=hl(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),I.readPixels(N,V,k,G,pe.convert($e),pe.convert(et),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Tt=ie!==null?H.get(ie).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Tt);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ed(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ut),I.deleteSync(xt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const k=Math.pow(2,-V),G=Math.floor(S.image.width*k),Me=Math.floor(S.image.height*k),Ee=N!==null?N.x:0,ve=N!==null?N.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Ee,ve,G,Me),v.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,k=null,G=0,Me=0){let Ee,ve,we,Re,$e,et,Ae,ut,Tt;const xt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(V!==null)Ee=V.max.x-V.min.x,ve=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,$e=V.min.y,et=V.isBox3?V.min.z:0;else{const St=Math.pow(2,-G);Ee=Math.floor(xt.width*St),ve=Math.floor(xt.height*St),S.isDataArrayTexture?we=xt.depth:S.isData3DTexture?we=Math.floor(xt.depth*St):we=1,Re=0,$e=0,et=0}k!==null?(Ae=k.x,ut=k.y,Tt=k.z):(Ae=0,ut=0,Tt=0);const gt=pe.convert(N.format),Nt=pe.convert(N.type);let be;N.isData3DTexture?(Y.setTexture3D(N,0),be=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),be=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),be=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=v.getParameter(I.UNPACK_ROW_LENGTH),ot=v.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=v.getParameter(I.UNPACK_SKIP_PIXELS),mn=v.getParameter(I.UNPACK_SKIP_ROWS),kn=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(I.UNPACK_SKIP_ROWS,$e),v.pixelStorei(I.UNPACK_SKIP_IMAGES,et);const Mi=S.isDataArrayTexture||S.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const St=H.get(S),Gn=H.get(N),vt=H.get(St.__renderTarget),Hn=H.get(Gn.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,vt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let yi=0;yi<we;yi++)Mi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(S).__webglTexture,G,et+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(N).__webglTexture,Me,Tt+yi)),I.blitFramebuffer(Re,$e,Ee,ve,Ae,ut,Ee,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||H.has(S)){const St=H.get(S),Gn=H.get(N);v.bindFramebuffer(I.READ_FRAMEBUFFER,D),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let vt=0;vt<we;vt++)Mi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,G,et+vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,G),pt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gn.__webglTexture,Me,Tt+vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gn.__webglTexture,Me),G!==0?I.blitFramebuffer(Re,$e,Ee,ve,Ae,ut,Ee,ve,I.COLOR_BUFFER_BIT,I.NEAREST):pt?I.copyTexSubImage3D(be,Me,Ae,ut,Tt+vt,Re,$e,Ee,ve):I.copyTexSubImage2D(be,Me,Ae,ut,Re,$e,Ee,ve);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,Me,Ae,ut,Tt,Ee,ve,we,gt,Nt,xt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(be,Me,Ae,ut,Tt,Ee,ve,we,gt,xt.data):I.texSubImage3D(be,Me,Ae,ut,Tt,Ee,ve,we,gt,Nt,xt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,Ae,ut,Ee,ve,gt,Nt,xt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,Ae,ut,xt.width,xt.height,gt,xt.data):I.texSubImage2D(I.TEXTURE_2D,Me,Ae,ut,Ee,ve,gt,Nt,xt);v.pixelStorei(I.UNPACK_ROW_LENGTH,zt),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),v.pixelStorei(I.UNPACK_SKIP_ROWS,mn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,kn),Me===0&&N.generateMipmaps&&I.generateMipmap(be),v.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){X=0,W=0,ie=null,v.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const as=new P;function Jt(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;as.copy(e),as[i]=0,as.normalize();const c=.5*o/(o+a),h=1-as.angleTo(n)/l;return Math.sign(as[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Rr extends Kn{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,u=this.attributes.normal.array,m=this.attributes.uv.array,g=p.length/6,_=new P,d=.5/o;for(let f=0,y=0;f<p.length;f+=3,y+=2)switch(l.fromArray(p,f),c.copy(l),c.x-=Math.sign(c.x)*d,c.y-=Math.sign(c.y)*d,c.z-=Math.sign(c.z)*d,c.normalize(),p[f+0]=h.x*Math.sign(l.x)+c.x*r,p[f+1]=h.y*Math.sign(l.y)+c.y*r,p[f+2]=h.z*Math.sign(l.z)+c.z*r,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),m[y+0]=Jt(_,c,"z","y",r,i),m[y+1]=1-Jt(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),m[y+0]=1-Jt(_,c,"z","y",r,i),m[y+1]=1-Jt(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),m[y+0]=1-Jt(_,c,"x","z",r,e),m[y+1]=Jt(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),m[y+0]=1-Jt(_,c,"x","z",r,e),m[y+1]=1-Jt(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),m[y+0]=1-Jt(_,c,"x","y",r,e),m[y+1]=1-Jt(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),m[y+0]=Jt(_,c,"x","y",r,e),m[y+1]=1-Jt(_,c,"y","x",r,t);break}}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.segments,e.radius)}}function Iu(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Rt;let c=0;for(let h=0;h<n.length;++h){const p=n[h];let u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0;const p=[];for(let u=0;u<n.length;++u){const m=n[u].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(p)}for(const h in r){const p=Tc(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(const h in o){const p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){const m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][u]);const g=Tc(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Tc(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new fn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const p=l/t;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);a.setComponent(u+p,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const M_=["boot","toilet","alarmClock","battery","controller","trophy","trafficCone","rubberDuck","cactus","dumbbell","kettle","bowlingPin","handheld","rocket","luckyCat","miniFan","trafficLight","puzzleCube","lightBulb","deskBell"],y_=n=>M_.includes(n);class S_{constructor(e){this.library=e,this.group=new Sn}part(e,t,i=[0,0,0],s=[1,1,1],r=[0,0,0]){const o=new bt(e,t);return o.position.set(...i),o.scale.set(...s),o.rotation.set(...r),this.group.add(o),o}box(e,t,i=[0,0,0],s=.07,r=[0,0,0]){return this.part(this.library.box(e,s),t,i,[1,1,1],r)}ball(e,t,i=[0,0,0],s=[0,0,0]){return this.part(this.library.sphere(),t,i,e,s)}cylinder(e,t,i,s,r=[0,0,0],o=[0,0,0]){return this.part(this.library.cylinder(e,t,i),s,r,[1,1,1],o)}ring(e,t,i,s=[0,0,0],r=[0,0,0],o=[1,1,1]){return this.part(this.library.ring(e,t),i,s,o,r)}tube(e,t,i,s=!1){const r=new _r(e.map(o=>new P(...o)),s);return this.part(this.library.own(new As(r,Math.max(12,e.length*5),t,6,s)),i)}lathe(e,t,i=[0,0,0],s=[1,1,1]){return this.part(this.library.own(new Wa(e.map(r=>new ae(...r)),24)),t,i,s)}shape(e,t,i,s=[0,0,0],r=[0,0,0]){const o=new xr(e.map(l=>new ae(...l))),a=new ws(o,{depth:t,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,steps:1});return a.translate(0,0,-t/2),this.part(this.library.own(a),i,s,[1,1,1],r)}finish(){this.group.updateMatrixWorld(!0);const e=new jn().setFromObject(this.group),t=e.getCenter(new P),i=e.getSize(new P),s=new ht().makeScale(2/Math.max(.01,i.x),2/Math.max(.01,i.y),2/Math.max(.01,i.z));s.multiply(new ht().makeTranslation(-t.x,-t.y,-t.z));const r=new Map;this.group.traverse(a=>{if(!(a instanceof bt))return;const l=a.material,c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(new ht().multiplyMatrices(s,a.matrixWorld));const h=r.get(l)??[];h.push(c),r.set(l,h)});const o=new Sn;for(const[a,l]of r){const c=Iu(l,!1);for(const p of l)p.dispose();if(!c)continue;c.computeBoundingSphere();const h=new bt(this.library.own(c),a);h.castShadow=!0,h.receiveShadow=!0,o.add(h)}return o}}class b_{constructor(e){this.assets=e,this.geometry=new Map}own(e){return this.assets.geometry(e)}cached(e,t){let i=this.geometry.get(e);return i||(i=this.own(t()),this.geometry.set(e,i)),i}sphere(){return this.cached("sphere",()=>new ui(1,18,12))}box(e,t){const i=Math.min(t,...e.map(s=>s/2-.001));return this.cached(`box:${e.join(",")}:${i}`,()=>new Rr(...e,2,i))}cylinder(e,t,i){return this.cached(`cylinder:${e},${t},${i}`,()=>new hi(e,t,i,24))}ring(e,t){return this.cached(`ring:${e},${t}`,()=>new Tr(e,t,6,28))}create(e){const t=new S_(this),i=this.assets.material,s=(g,_=.43)=>i("rubber",g,_,.015),r=(g,_=.28)=>i("metal",g,_,.68),o=(g,_=.27)=>i("ceramic",g,_,.02),a=(g,_=.5,d=1)=>i("plain",g,_,0,d),l=o(16775143),c=s(2238261),h=s(3752010),p=r(15117621),u=[Math.PI/2,0,0],m=[0,0,Math.PI/2];if(e==="mystery"){const g=s(15316013,.29),_=o(16768114);t.box([1.84,1.84,1.84],g,[0,0,0],.15);for(const f of[-1,1])for(const y of[-1,1])t.box([.035,1.57,.035],_,[f*.87,0,y*.87],.015),t.box([1.57,.035,.035],_,[0,f*.87,y*.87],.015),t.box([.035,.035,1.57],_,[f*.87,y*.87,0],.015);const d=[[-.3,.31,.94],[-.3,.49,.94],[-.08,.62,.94],[.22,.56,.94],[.31,.36,.94],[.2,.17,.94],[.02,.03,.94],[.02,-.18,.94]];for(let f=0;f<3;f++){const y=T=>f===0?T:f===1?[T[2],T[1],-T[0]]:[T[0],T[2],-T[1]];t.tube(d.map(y),.085,l),t.ball([.095,.095,.055],l,y([.02,-.49,.94]),f===1?[0,Math.PI/2,0]:f===2?[-Math.PI/2,0,0]:[0,0,0])}}else if(e==="boot"){const g=s(3234723,.25),_=s(15318863,.38);t.box([.95,.6,1.83],g,[0,-.57,.12],.22),t.box([.82,1.28,.83],g,[0,.15,-.4],.13),t.box([1.04,.2,2],_,[0,-.91,.11],.09),t.ball([.35,.05,.34],c,[0,.81,-.4]),t.ring(.39,.075,_,[0,.8,-.4],u,[1,.88,1]),t.box([.16,.29,.1],g,[0,.9,-.81],.04),t.box([.29,.74,.035],s(4026040),[0,.19,.032],.035);for(let d=0;d<5;d++)t.box([.15,.045,1.62],h,[-.37+d*.185,-1.02,.11],.012);t.tube([[-.22,.56,.039],[-.24,-.2,.039],[-.31,-.4,.48],[-.3,-.4,.73]],.022,_),t.tube([[.22,.56,.039],[.24,-.2,.039],[.31,-.4,.48],[.3,-.4,.73]],.022,_)}else if(e==="toilet"){const g=o(15919836),_=a(7259859,.17);t.box([1.14,1.12,.46],l,[0,.36,-.72],.13),t.box([1.23,.12,.54],g,[0,.96,-.72],.06),t.box([.72,.18,1.15],l,[0,-.9,-.04],.08),t.box([.61,.72,.66],l,[0,-.48,-.12],.17),t.lathe([[.12,-.5],[.47,-.41],[.65,-.16],[.73,.16],[.71,.29],[.57,.29],[.49,.05],[.21,-.24],[.12,-.29]],l,[0,-.04,.17],[1,1,1.14]),t.ring(.65,.09,g,[0,.27,.17],u,[1,1.12,1]),t.ball([.49,.045,.54],_,[0,-.05,.19]),t.ball([.66,.65,.065],g,[0,.72,-.48],[-.12,0,0]),t.ball([.55,.55,.07],l,[0,.72,-.39],[-.12,0,0]),t.box([.26,.08,.06],r(13029073),[.38,.55,-.455],.03,[0,0,.16])}else if(e==="alarmClock"){const g=r(6658973),_=a(16773583);t.ball([.79,.79,.38],g),t.cylinder(.67,.67,.065,_,[0,0,.36],u),t.ring(.7,.052,p,[0,0,.4]);for(let d=0;d<12;d++){const f=d/12*Math.PI*2;t.box([.035,d%3===0?.14:.08,.027],c,[Math.sin(f)*.55,Math.cos(f)*.55,.408],.008,[0,0,-f])}t.box([.065,.46,.04],c,[-.105,.16,.44],.02,[0,0,.55]),t.box([.047,.6,.035],c,[.2,.1,.45],.015,[0,0,-1.02]),t.ball([.075,.075,.045],p,[0,0,.49]);for(const d of[-1,1])t.ball([.4,.19,.32],g,[d*.57,.72,0],[0,0,-d*.35]),t.cylinder(.045,.065,.26,p,[d*.48,.57,0],[0,0,-d*.35]),t.box([.15,.31,.19],p,[d*.47,-.77,0],.04,[0,0,-d*.27]);t.tube([[-.33,.78,-.03],[-.3,.99,-.03],[.3,.99,-.03],[.33,.78,-.03]],.05,p),t.cylinder(.09,.09,.09,p,[0,.91,0])}else if(e==="battery")t.cylinder(.57,.57,1.35,c,[0,-.15,0]),t.cylinder(.57,.57,.43,r(13206606),[0,.74,0]),t.cylinder(.24,.24,.13,r(14475486),[0,1.02,0]),t.ring(.55,.033,r(10988716),[0,-.83,0],u),t.box([.4,.085,.04],l,[0,.25,.568],.01),t.box([.085,.4,.04],l,[0,.25,.568],.01),t.box([.26,.05,.04],l,[0,-.6,.568],.01),t.box([.09,.51,.035],s(13206606),[.31,-.17,.485],.018,[0,0,-.25]);else if(e==="controller"){const g=s(14538958,.29);t.box([1.54,.68,.54],g,[0,.16,0],.22);for(const d of[-1,1])t.box([.64,1.03,.62],g,[d*.68,-.2,-.015],.25,[0,0,d*.23]),t.box([.48,.14,.35],h,[d*.57,.54,-.08],.06);t.box([.46,.13,.065],h,[-.49,.19,.32],.025),t.box([.13,.46,.065],h,[-.49,.19,.32],.025);const _=[14113633,5874030,6000073,15186507];for(let d=0;d<4;d++){const f=d*Math.PI/2;t.cylinder(.09,.105,.075,s(_[d]),[.5+Math.cos(f)*.18,.2+Math.sin(f)*.18,.325],u)}for(const d of[-1,1])t.cylinder(.185,.185,.065,h,[d*.24,-.2,.335],u),t.cylinder(.122,.15,.1,c,[d*.24,-.2,.395],u);t.box([.12,.05,.05],h,[0,.21,.315],.02),t.ball([.035,.035,.018],s(9684396),[0,.4,.3])}else if(e==="trophy"){t.box([1.12,.28,.92],i("wood",7557434,.46),[0,-.91,0],.05),t.box([.83,.14,.68],p,[0,-.71,0],.035),t.cylinder(.12,.21,.46,p,[0,-.42,0]),t.lathe([[.12,-.21],[.3,-.08],[.52,.17],[.62,.57],[.64,.78],[.54,.78],[.51,.58],[.39,.26],[.12,.04]],p),t.ring(.6,.045,p,[0,.78,0],u);for(const _ of[-1,1])t.tube([[_*.57,.64,0],[_*.93,.67,0],[_*.94,.2,0],[_*.48,-.03,0]],.065,p);t.box([.48,.16,.025],r(15978089),[0,-.9,.476],.02);const g=[];for(let _=0;_<10;_++){const d=_*Math.PI/5+Math.PI/2,f=_%2?.09:.19;g.push([Math.cos(d)*f,Math.sin(d)*f])}t.shape(g,.05,r(16768899),[0,.35,.59])}else if(e==="trafficCone"){const g=s(15297837,.39);t.box([1.8,.18,1.65],h,[0,-.93,0],.12),t.cylinder(.08,.65,1.72,g,[0,.02,0]);for(const[_,d]of[[-.31,.23],[.3,.19]]){const f=y=>.65-(y+.84)/1.72*.57+.008;t.cylinder(f(_+d/2),f(_-d/2),d,l,[0,_,0])}t.cylinder(.066,.066,.008,c,[0,.884,0]),t.box([1.48,.04,1.32],g,[0,-.817,0],.11)}else if(e==="rubberDuck"){const g=s(16172601,.28),_=s(15697716,.32);t.ball([.85,.64,.92],g,[0,-.31,-.07]),t.ball([.53,.53,.52],g,[0,.48,.4]),t.box([.58,.14,.49],_,[0,.34,.86],.11),t.box([.49,.08,.38],_,[0,.23,.84],.035);for(const d of[-1,1])t.ball([.19,.35,.51],s(15382323,.3),[d*.73,-.25,-.06],[0,d*.2,d*.3]),t.ball([.07,.08,.06],c,[d*.36,.6,.77]),t.ball([.022,.025,.02],l,[d*.354,.62,.82]);t.cylinder(0,.29,.67,g,[0,.02,-.85],[-.65,0,0])}else if(e==="cactus"){const g=o(12151110,.64),_=s(5277285,.66),d=s(7512428,.69);t.cylinder(.55,.38,.66,g,[0,-.69,0]),t.ring(.53,.065,g,[0,-.35,0],u),t.cylinder(.48,.48,.035,i("wood",7031600,.86),[0,-.348,0]),t.ball([.3,.67,.3],_,[0,.25,0]);for(const f of[-1,1]){const y=f>0?.35:.05;t.tube([[f*.18,y-.15,0],[f*.54,y-.11,0],[f*.62,y+.11,0],[f*.62,y+.4,0]],.15,_)}for(let f=0;f<7;f++){const y=f*Math.PI*2/7;t.tube([[Math.sin(y)*.18,-.25,Math.cos(y)*.18],[Math.sin(y)*.29,.22,Math.cos(y)*.29],[Math.sin(y)*.16,.79,Math.cos(y)*.16]],.021,d)}for(let f=0;f<12;f++){const y=f*2.4,T=-.15+f%4*.23,M=Math.sin(y)*.29,w=Math.cos(y)*.29;t.tube([[M,T,w],[M*1.22,T+.04,w*1.22]],.012,l)}for(let f=0;f<5;f++){const y=f*Math.PI*2/5;t.ball([.11,.07,.13],s(14255010),[Math.cos(y)*.12,.92,Math.sin(y)*.12])}t.ball([.08,.055,.08],p,[0,.97,0])}else if(e==="dumbbell"){t.cylinder(.13,.13,1.83,r(12436680),[0,0,0],m),t.cylinder(.18,.18,.7,h,[0,0,0],m);for(const g of[-1,1])t.cylinder(.58,.58,.26,c,[g*.72,0,0],m),t.cylinder(.47,.47,.18,h,[g*.93,0,0],m),t.cylinder(.18,.18,.1,r(11844028),[g*1.07,0,0],m),t.ring(.39,.023,s(5988971),[g*1.027,0,0],[0,Math.PI/2,0]);for(let g=0;g<7;g++)t.ring(.178,.012,r(9212823,.49),[-.27+g*.09,0,0],[0,Math.PI/2,0])}else if(e==="kettle"){const g=o(8167049),_=r(12568509);t.lathe([[.1,-.76],[.56,-.72],[.7,-.4],[.72,-.1],[.61,.4],[.41,.6],[.25,.61]],g),t.cylinder(.44,.49,.08,_,[0,.62,0]),t.ball([.12,.11,.12],c,[0,.74,0]),t.ring(.55,.06,_,[0,-.68,0],u),t.tube([[-.48,.31,-.1],[-.75,.64,-.1],[-.62,1.05,-.1],[.45,1.09,-.1],[.67,.66,-.1],[.48,.33,-.1]],.095,c),t.tube([[.55,-.1,0],[.89,.08,0],[1.1,.48,0]],.15,g),t.cylinder(.125,.125,.045,c,[1.11,.5,0],[0,0,-.4]),t.cylinder(.16,.16,.035,_,[1.09,.47,0],[0,0,-.4]),t.box([.17,.09,.19],s(14123621),[-.51,-.42,.42],.03)}else if(e==="bowlingPin")t.lathe([[0,-1],[.33,-1],[.43,-.88],[.54,-.62],[.57,-.35],[.5,-.08],[.3,.25],[.2,.47],[.28,.69],[.31,.87],[.24,1.03],[0,1.1]],l),t.cylinder(.225,.263,.09,s(13129294),[0,.365,0]),t.cylinder(.227,.214,.08,s(13129294),[0,.525,0]),t.cylinder(.32,.32,.035,h,[0,-.997,0]);else if(e==="handheld"){const g=s(13947069,.36),_=a(10201459,.46);t.box([1.3,1.98,.36],g,[0,0,0],.13),t.box([1.08,.87,.08],h,[0,.42,.211],.09),t.box([.8,.62,.025],_,[.04,.44,.26],.025);for(let d=0;d<4;d++)t.box([.11,.11,.015],s(6452300),[-.23+d*.11,.32+d%2*.11,.28],.005);t.box([.4,.12,.08],c,[-.33,-.34,.23],.015),t.box([.12,.4,.08],c,[-.33,-.34,.23],.015);for(const[d,f]of[[.25,-.38],[.46,-.21]])t.cylinder(.11,.11,.08,s(10767987),[d,f,.24],u);for(const d of[-.1,.14])t.box([.17,.045,.045],h,[d,-.75,.215],.017,[0,0,.35]);for(let d=0;d<5;d++)t.box([.026,.18,.02],h,[.35+d*.055,-.75,.201],.008,[0,0,-.4]);t.ball([.025,.025,.015],s(12933974),[-.45,.64,.262])}else if(e==="rocket"){const g=s(13196621,.33),_=r(14081495,.4);t.cylinder(.43,.43,1.17,_,[0,-.12,0]),t.cylinder(0,.445,.64,g,[0,.785,0]),t.cylinder(.44,.44,.15,g,[0,-.65,0]),t.cylinder(.24,.33,.24,h,[0,-.84,0]),t.ring(.22,.048,p,[0,.18,.402]),t.ball([.182,.182,.065],o(7581628),[0,.18,.432]);for(let d=0;d<4;d++)t.shape([[.32,-.17],[.84,-.89],[.36,-.73]],.15,g,[0,0,0],[0,d*Math.PI/2,0]);t.cylinder(.18,.04,.38,s(15841870),[0,-1.09,0])}else if(e==="luckyCat"){const g=s(12998472),_=s(14723486);t.ball([.61,.68,.5],l,[0,-.34,0]),t.ball([.6,.55,.48],l,[0,.49,0]);for(const d of[-1,1]){t.shape([[-.18,0],[.18,0],[d*.1,.4]],.2,l,[d*.35,.79,-.03]),t.shape([[-.1,0],[.1,0],[d*.05,.24]],.025,_,[d*.35,.85,.09]),t.ball([.23,.17,.31],l,[d*.33,-.87,.28]),t.tube([[d*.11,.5,.463],[d*.2,.56,.476],[d*.29,.52,.455]],.023,c);for(let f=0;f<2;f++)t.tube([[d*.34,.32+f*.08,.42],[d*.53,.3+f*.1,.35]],.015,h)}t.ball([.105,.065,.045],_,[0,.37,.49]),t.tube([[0,.34,.497],[0,.25,.497],[-.08,.23,.485]],.018,c),t.tube([[0,.25,.497],[.08,.23,.485]],.018,c),t.ring(.42,.055,g,[0,.035,.035],u,[1,.95,1]),t.ball([.11,.11,.08],p,[0,-.02,.49]),t.ball([.22,.47,.22],l,[-.66,.27,.02],[0,0,-.16]),t.ball([.245,.25,.22],l,[-.72,.66,.08]);for(let d=0;d<3;d++)t.tube([[-.84+d*.09,.72,.278],[-.84+d*.09,.62,.289]],.013,_);t.ball([.22,.36,.22],l,[.57,-.28,.11],[0,0,-.25]),t.ball([.33,.44,.075],p,[.13,-.43,.48],[0,0,-.13]),t.box([.04,.46,.026],r(12420139),[.13,-.43,.558],.01,[0,0,-.13]);for(const d of[-.56,-.35])t.box([.27,.034,.026],r(12420139),[.13,d,.558],.008,[0,0,-.13])}else if(e==="miniFan"){const g=s(7446187,.35),_=r(12766411,.36);t.ball([.6,.105,.4],g,[0,-.9,0]),t.cylinder(.09,.13,.75,_,[0,-.52,-.09]),t.ball([.29,.29,.28],g,[0,.23,-.16]);for(let d=0;d<3;d++){const f=d*Math.PI*2/3;t.ball([.16,.54,.06],s(9224396,.31),[Math.sin(f)*.27,.23+Math.cos(f)*.27,.13],[0,0,-f+.24])}for(const[d,f]of[[.77,.12],[.72,.27],[.56,.35],[.34,.39]])t.ring(d,.023,_,[0,.23,f]);for(let d=0;d<12;d++){const f=d*Math.PI*2/12;t.tube([[Math.sin(f)*.12,.23+Math.cos(f)*.12,.42],[Math.sin(f)*.49,.23+Math.cos(f)*.49,.36],[Math.sin(f)*.77,.23+Math.cos(f)*.77,.12]],.014,_)}t.ball([.14,.14,.06],g,[0,.23,.43]),t.cylinder(.065,.065,.04,s(13199706),[.21,-.8,.18])}else if(e==="trafficLight"){t.box([.86,1.94,.5],c,[0,.13,0],.14);const g=[s(14312019,.21),s(15318339,.21),s(6860928,.21)];for(let _=0;_<3;_++){const d=.72-_*.59;t.cylinder(.267,.267,.065,h,[0,d,.27],u),t.ball([.215,.215,.085],g[_],[0,d,.32]),t.tube([[-.29,d+.02,.32],[-.24,d+.24,.47],[0,d+.3,.49],[.24,d+.24,.47],[.29,d+.02,.32]],.05,c)}t.cylinder(.11,.11,.44,h,[0,-1.02,-.03]),t.box([.62,.09,.52],r(9081751),[0,-1.25,-.03],.04)}else if(e==="puzzleCube"){const g=[s(13261651),s(14989111),s(6920043),s(5342393),l,s(14519107)];for(let _=-1;_<=1;_++)for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++)t.box([.625,.625,.625],c,[_*.65,d*.65,f*.65],.06),_!==0&&t.box([.035,.51,.51],g[_>0?0:3],[_*.971,d*.65,f*.65],.015),d!==0&&t.box([.51,.035,.51],g[d>0?1:4],[_*.65,d*.971,f*.65],.015),f!==0&&t.box([.51,.51,.035],g[f>0?2:5],[_*.65,d*.65,f*.971],.015)}else if(e==="lightBulb"){const g=a(16771235,.16,.28),_=r(11504465,.4);t.ball([.67,.74,.67],g,[0,.32,0]),t.cylinder(.3,.34,.48,g,[0,-.39,0]),t.cylinder(.34,.34,.55,r(12697264),[0,-.68,0]);for(let f=0;f<5;f++)t.ring(.34,.038,r(9277835,.4),[0,-.88+f*.105,0],u);t.cylinder(.2,.27,.13,c,[0,-1,0]),t.tube([[-.13,-.52,0],[-.17,.24,0],[-.28,.42,0]],.018,_),t.tube([[.13,-.52,0],[.17,.24,0],[.28,.42,0]],.018,_);const d=[];for(let f=0;f<=24;f++)d.push([-.28+f/24*.56,.42+Math.sin(f*Math.PI/2)*.043,Math.cos(f*Math.PI/2)*.043]);t.tube(d,.018,a(15050305,.3))}else e==="deskBell"&&(t.cylinder(.85,.91,.19,c,[0,-.85,0]),t.ring(.82,.035,r(12896449),[0,-.74,0],u),t.lathe([[0,-.7],[.75,-.7],[.76,-.55],[.68,-.24],[.48,.12],[.25,.29],[.13,.35]],p),t.cylinder(.075,.09,.32,r(13093311),[0,.48,0]),t.cylinder(.21,.23,.1,p,[0,.69,0]),t.ball([.2,.035,.2],p,[0,.75,0]),t.box([.36,.12,.027],r(12296562),[0,-.85,.9],.025));return e==="boot"?t.group.rotation.y=Math.PI/2:e==="battery"||e==="bowlingPin"?t.group.rotation.z=Math.PI/2:e==="controller"?t.group.rotation.x=-Math.PI/2:e==="handheld"&&t.group.rotation.set(-Math.PI/2,0,Math.PI/2),t.finish()}}const E_={rx:.36,ry:.36,rz:.36},wc=n=>n.concealed?E_:en[n.kind],T_=Math.PI*2,w_=new P(0,1,0),ir=(n,e,t)=>Math.max(e,Math.min(t,n));class A_{constructor(e){this.element=e,this.scene=new gd,this.camera=new wr(-3,3,4,-4,.1,60),this.geometry=new Set,this.materials=new Set,this.textures=new Set,this.models=new Map,this.foods=new Map,this.pickable=[],this.foodOrder=[],this.escaped=new Set,this.bento=new Sn,this.lidPivot=new Sn,this.particles=Array.from({length:32},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0})),this.particleCursor=0,this.particlesActive=!1,this.dummy=new Lt,this.ray=new yf,this.pointer=new ae,this.plane=new Nn(new P(0,1,0),-.12),this.intersection=new P,this.stickFrom=new P,this.stickTo=new P,this.stickDirection=new P,this.cameraTarget=new P(0,.66,-.04),this.oddTiles=new Map,this.oddMaterials=new Map,this.oddModels=new b_({geometry:a=>this.ownGeometry(a),material:(a,l,c,h,p)=>this.oddMaterial(a,l,c,h,p)}),this.width=1,this.height=1,this.reduced=!1,this.disposed=!1,this.previousPhase=null,this.resultStartedAt=0,this.baseCamera=new P(0,7.6,7.4),this.renderer=new x_({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kc,this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=wa,this.renderer.toneMappingExposure=1.04,this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.touchAction="none",e.append(this.renderer.domElement),this.scene.background=new Ke(15721422),this.scene.add(new gf(16775657,8414020,1.9));const t=new Ql(16773078,2.55);t.position.set(-4.5,8,5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,t.shadow.camera.near=.2,t.shadow.camera.far=22,t.shadow.normalBias=.025,t.shadow.bias=-3e-4,this.scene.add(t);const i=new Ql(15003135,.9);i.position.set(4,4,-4),this.scene.add(i),this.shellMat=this.ownMaterial(new uf({color:10958125,roughness:.27,metalness:.025,clearcoat:.65,clearcoatRoughness:.26}));const s=["chicken","shrimp","egg","broccoli","sausage","rice"];this.foodMats=Object.fromEntries(s.map(a=>[a,this.mat(en[a].color,a==="chicken"||a==="shrimp"?.86:.53)])),this.makeCounter(),this.makeBox(),this.makeLid(),this.scene.add(this.bento);const r=this.mat(10119996,.55),o=this.ownGeometry(new hi(.025,.053,1,8));this.sticks=[new bt(o,r),new bt(o,r)];for(const a of this.sticks)a.castShadow=!0,a.visible=!1,this.scene.add(a);this.landing=new bt(this.ownGeometry(new Xa(.87,.92,48)),this.ownMaterial(new gr({color:12871230,transparent:!0,opacity:.7,side:Mn,depthTest:!1}))),this.landing.rotation.x=-Math.PI/2,this.landing.renderOrder=8,this.landing.visible=!1,this.scene.add(this.landing),this.heldHalo=new bt(this.ownGeometry(new Tr(1,.025,5,48)),this.ownMaterial(new gr({color:16768896,transparent:!0,opacity:.8,depthTest:!1}))),this.heldHalo.rotation.x=-Math.PI/2,this.heldHalo.renderOrder=9,this.heldHalo.visible=!1,this.scene.add(this.heldHalo),this.specks=new Dn(this.ownGeometry(new ms(.045,0)),this.mat(16044698,.9),this.particles.length),this.specks.instanceMatrix.setUsage(Jh),this.specks.frustumCulled=!1,this.scene.add(this.specks),this.updateParticles(0),this.camera.position.copy(this.baseCamera),this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld(),this.resize()}ownGeometry(e){return this.geometry.add(e),e}ownMaterial(e){return this.materials.add(e),e}mat(e,t=.55){return this.ownMaterial(new ma({color:e,roughness:t,metalness:0}))}rounded(e,t,i,s=.1){return this.ownGeometry(new Rr(e,t,i,3,s))}mesh(e,t,i,s=0,r=0,o=0){const a=new bt(t,i);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,e.add(a),a}roundPath(e,t,i){const s=e/2,r=t/2,o=Math.min(i,s,r),a=new xr;return a.moveTo(-s+o,-r),a.lineTo(s-o,-r),a.quadraticCurveTo(s,-r,s,-r+o),a.lineTo(s,r-o),a.quadraticCurveTo(s,r,s-o,r),a.lineTo(-s+o,r),a.quadraticCurveTo(-s,r,-s,r-o),a.lineTo(-s,-r+o),a.quadraticCurveTo(-s,-r,-s+o,-r),a}ringGeometry(e,t,i,s,r,o){const a=this.roundPath(e,t,o),l=this.roundPath(i,s,Math.max(.05,o-.1));a.holes.push(new da(l.getPoints(9).reverse()));const c=new ws(a,{depth:r,bevelEnabled:!1,curveSegments:10,steps:1});return c.rotateX(-Math.PI/2),this.ownGeometry(c)}makeCounter(){const e=new bt(this.rounded(26,.28,26,.08),this.mat(14468256,.88));e.position.y=-.23,e.receiveShadow=!0,this.scene.add(e);const t=this.mat(13283465,.94),i=new Dn(this.ownGeometry(new Kn(20,.001,.012)),t,11);for(let a=0;a<11;a++)this.dummy.position.set(Math.sin(a)*.2,-.088,(a-5)*1.15),this.dummy.updateMatrix(),i.setMatrixAt(a,this.dummy.matrix);this.scene.add(i);const s=new Sn,r=this.mesh(s,this.rounded(4.8,.025,3.9,.1),this.mat(15197651,.98),-.07,-.065,.03);r.rotation.y=-.04;const o=this.mat(10135434,.95);for(let a=0;a<4;a++){const l=this.mesh(s,this.ownGeometry(new Kn(.035,.003,3.8)),o,-2.24+a*.11,-.049,.03);l.rotation.y=-.04}this.scene.add(s)}makeBox(){const e=Ve.halfX*2,t=Ve.halfZ*2,i=Ve.floorY;this.mesh(this.bento,this.rounded(e+.29,.21,t+.29,.18),this.shellMat,0,i-.105,0),this.mesh(this.bento,this.rounded(e-.025,.025,t-.025,.17),this.mat(7809056,.52),0,i-.009,0);const s=this.ringGeometry(e+.29,t+.29,e,t,Ve.rimY-i,.22);this.mesh(this.bento,s,this.shellMat,0,i,0);const r=this.ringGeometry(e+.32,t+.32,e-.005,t-.005,.055,.24);this.mesh(this.bento,r,this.mat(6496027,.3),0,Ve.rimY-.025,0);const o=this.ringGeometry(e+.04,t+.04,e-.005,t-.005,.018,.15);this.mesh(this.bento,o,this.mat(14183244,.45),0,Ve.rimY+.025,0);const a=this.mat(5776668,.65);for(const l of[-1,1])for(const c of[-1,1])this.mesh(this.bento,this.rounded(.3,.07,.3,.05),a,l*(Ve.halfX-.28),-.023,c*(Ve.halfZ-.28))}makeLid(){const e=Ve.halfZ*2+.26;this.lidPivot.position.set(0,Ve.rimY+.06,-1.3-.02);const t=this.mesh(this.lidPivot,this.rounded(Ve.halfX*2+.34,.095,e,.18),this.shellMat,0,.025,e/2);t.castShadow=!0;const i=this.mesh(this.lidPivot,this.rounded(Ve.halfX*2+.02,.012,e-.3,.15),this.mat(12995638,.38),0,.079,e/2);i.receiveShadow=!0;const s=this.ringGeometry(Ve.halfX*2+.1,e-.22,Ve.halfX*2+.055,e-.265,.009,.15);this.mesh(this.lidPivot,s,this.mat(15053164,.42),0,.088,e/2);const r=this.mesh(this.lidPivot,this.ownGeometry(new hi(.21,.21,.012,32)),this.mat(14856287,.55),0,.094,e*.49);r.scale.z=.7,this.bento.add(this.lidPivot),this.lidPivot.visible=!1}oddMaterial(e,t,i=.45,s=0,r=1){const o=`${e}:${t}:${i}:${s}:${r}`;let a=this.oddMaterials.get(o);if(!a){const l=this.ownMaterial(new ma({color:t,roughness:i,metalness:s,transparent:r<1,opacity:r,depthWrite:r>=1,map:this.oddTiles.get(e)??null}));a={surface:e,material:l},this.oddMaterials.set(o,a)}return a.material}model(e,t=!1){const i=t?"mystery":e,s=this.models.get(i);if(s)return s.clone(!0);if(t||y_(e)){const l=this.oddModels.create(t?"mystery":e);return this.models.set(i,l),l.clone(!0)}const r=new Sn,o=this.foodMats[e],a=()=>this.ownGeometry(new ui(1,14,10));if(e==="chicken"){const l=this.ownGeometry(new ms(1,3)),c=l.getAttribute("position");for(let u=0;u<c.count;u++){const m=c.getX(u),g=c.getY(u),_=c.getZ(u),d=1+Math.sin(m*7.3+g*2.8)*.085+Math.sin(_*9.1-g*5.7)*.055;c.setXYZ(u,m*d,g*d*.93,_*d)}l.computeVertexNormals(),this.mesh(r,l,o);const h=new Dn(this.ownGeometry(new ms(.075,0)),this.mat(16777215,.92),85),p=new Ke;for(let u=0;u<85;u++){const m=1-2*(u+.5)/85,g=u*2.399963,_=Math.sqrt(1-m*m);this.dummy.position.set(Math.cos(g)*_,m*.94,Math.sin(g)*_),this.dummy.rotation.set(u*.73,u*1.17,u*.47),this.dummy.scale.setScalar(.6+u*13%17/17*.75),this.dummy.updateMatrix(),h.setMatrixAt(u,this.dummy.matrix),p.setHex(u%4===0?9127195:u%3===0?15116883:12943410),h.setColorAt(u,p)}h.castShadow=!0,r.add(h)}else if(e==="shrimp"){const l=new Dn(a(),o,9),c=new Ke;for(let p=0;p<9;p++){const u=p/8,m=1-u*.4;this.dummy.position.set(-.76+u*1.28,Math.sin(u*Math.PI)*.08,Math.sin(u*1.7)*.12),this.dummy.rotation.set(0,-.13+u*.16,-.1+u*.13),this.dummy.scale.set(.18,.7*m,.83*m),this.dummy.updateMatrix(),l.setMatrixAt(p,this.dummy.matrix),c.setHex(p%2?16773319:15912067),l.setColorAt(p,c)}l.castShadow=!0,l.receiveShadow=!0,r.add(l);const h=this.mat(15300696,.48);for(const p of[-1,1]){const u=this.mesh(r,this.ownGeometry(new ka(.34,.64,3)),h,.76,-.05,p*.38);u.rotation.z=-Math.PI/2,u.rotation.x=p*.38,u.scale.set(1,.7,1)}}else if(e==="egg"){this.mesh(r,this.rounded(1.93,1.78,1.88,.24),o);const l=[];for(let h=0;h<=95;h++){const p=h/95*Math.PI*5,u=.025+p*.042;l.push(new P(Math.cos(p)*u,Math.sin(p)*u*.87,.951))}this.mesh(r,this.ownGeometry(new As(new _r(l),95,.035,5,!1)),this.mat(13142815,.55));const c=this.mesh(r,this.rounded(1.72,.07,1.68,.02),this.mat(16770955,.58),0,.8,0);c.rotation.z=-.03}else if(e==="broccoli"){const l=this.mesh(r,this.ownGeometry(new hi(.24,.32,1.3,10)),this.mat(9614948,.77),0,-.33,0);l.rotation.z=-.05;const c=new Dn(a(),o,7),h=[[0,.57,0,.47],[-.48,.29,0,.45],[.48,.29,0,.45],[-.25,.31,.43,.44],[.28,.35,.43,.44],[-.28,.32,-.43,.44],[.28,.35,-.43,.44]];h.forEach(([u,m,g,_],d)=>{this.dummy.position.set(u,m,g),this.dummy.rotation.set(0,d,0),this.dummy.scale.set(_,_,_),this.dummy.updateMatrix(),c.setMatrixAt(d,this.dummy.matrix)}),c.castShadow=!0,r.add(c);const p=new Dn(this.ownGeometry(new ui(.067,5,4)),this.mat(5669438,.88),154);for(let u=0;u<154;u++){const m=h[u%h.length],g=.2+(Math.sin(u*1.7)*.5+.5)*.8,_=u*2.4,d=Math.sqrt(1-g*g)*m[3];this.dummy.position.set(m[0]+Math.cos(_)*d,m[1]+g*m[3],m[2]+Math.sin(_)*d),this.dummy.rotation.set(0,u,0),this.dummy.scale.setScalar(.8+u%5*.08),this.dummy.updateMatrix(),p.setMatrixAt(u,this.dummy.matrix)}p.castShadow=!0,r.add(p)}else if(e==="sausage"){this.mesh(r,this.ownGeometry(new za(.58,.54,5,16)),o,0,.32,0);const l=[];for(let p=0;p<8;p++){const u=p*T_/8,m=[new P(Math.cos(u)*.18,-.1,Math.sin(u)*.18),new P(Math.cos(u)*.5,-.5,Math.sin(u)*.5),new P(Math.cos(u)*.79,-.72,Math.sin(u)*.79),new P(Math.cos(u)*.83,-.58,Math.sin(u)*.83)];l.push(new As(new _r(m),14,.13,7,!1))}const c=Iu(l);for(const p of l)p.dispose();c&&this.mesh(r,this.ownGeometry(c),o);const h=new Dn(this.ownGeometry(new ui(.1,8,6)),this.mat(3810588,.55),2);for(let p=0;p<2;p++)this.dummy.position.set(p?.21:-.21,.46,.54),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(1,1.25,.7),this.dummy.updateMatrix(),h.setMatrixAt(p,this.dummy.matrix);r.add(h)}else{const l=new xr;l.moveTo(-.7,-.88),l.quadraticCurveTo(-1.04,-.85,-.86,-.48),l.lineTo(-.23,.73),l.quadraticCurveTo(0,1.07,.23,.73),l.lineTo(.86,-.48),l.quadraticCurveTo(1.04,-.85,.7,-.88),l.closePath();const c=this.ownGeometry(new ws(l,{depth:1.46,bevelEnabled:!0,bevelSegments:3,bevelSize:.09,bevelThickness:.09,curveSegments:12,steps:1}));c.translate(0,0,-.73),this.mesh(r,c,o);const h=new Dn(this.ownGeometry(new ui(1,5,4)),this.mat(16776427,.64),125);for(let p=0;p<125;p++){const u=-.75+p*47%125/125*1.62,m=.85*(1-(u+.75)/2.1),g=Math.sin(p*7.71)*m;this.dummy.position.set(g,u,p%5===0?-.84:.84),this.dummy.rotation.set(0,0,p*.71),this.dummy.scale.set(.035,.075,.03),this.dummy.updateMatrix(),h.setMatrixAt(p,this.dummy.matrix)}h.castShadow=!0,r.add(h),this.mesh(r,this.rounded(.69,.91,.045,.03),this.mat(2703660,.74),0,-.47,.895)}return r.traverse(l=>{l instanceof bt&&(l.castShadow=!0,l.receiveShadow=!0)}),this.models.set(i,r),r.clone(!0)}async loadAtlas(e){const t=await new Yl().loadAsync(e);if(this.disposed){t.dispose();return}const i=[["chicken",0,.5],["shrimp",0,.5],["egg",.5,.5],["rice",0,0],["broccoli",.5,0]];for(const[s,r,o]of i){const a=t.clone();a.colorSpace=Gt,a.repeat.set(.5,.5),a.offset.set(r,o),a.needsUpdate=!0,this.textures.add(a);const l=this.foodMats[s];l.map=a,l.color.setHex(16777215),l.needsUpdate=!0}t.dispose()}async loadOddAtlas(e){const t=await new Yl().loadAsync(e);if(this.disposed){t.dispose();return}const i=[["wood",0,.5],["metal",.5,.5],["rubber",0,0],["ceramic",.5,0]];for(const[s,r,o]of i){const a=t.clone();a.colorSpace=Gt,a.repeat.set(.5,.5),a.offset.set(r,o),a.needsUpdate=!0,this.textures.add(a),this.oddTiles.set(s,a);for(const l of this.oddMaterials.values())l.surface===s&&(l.material.map=a,l.material.needsUpdate=!0)}t.dispose()}resize(){const e=this.element.getBoundingClientRect();if(e.width<1||e.height<1)return;this.width=e.width,this.height=e.height,this.renderer.setSize(e.width,e.height,!1);const t=e.width/e.height,i=t<1.25?4.6:Math.min(9,4.25*t);this.camera.left=-i/2,this.camera.right=i/2,this.camera.top=i/t/2,this.camera.bottom=-i/t/2,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}worldAt(e,t,i=Ve.floorY){const s=this.element.getBoundingClientRect();if(s.width<1||s.height<1)return null;this.pointer.set((e-s.left)/s.width*2-1,-(t-s.top)/s.height*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.plane.constant=-i;const r=this.ray.ray.intersectPlane(this.plane,this.intersection);return r?{x:r.x,y:r.y,z:r.z}:null}pick(e,t){const i=this.element.getBoundingClientRect();if(i.width<1||i.height<1)return null;this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let r=this.ray.intersectObjects(this.pickable,!0)[0]?.object??null;for(;r&&typeof r.userData.foodId!="number";)r=r.parent;return typeof r?.userData.foodId=="number"?r.userData.foodId:null}placeStick(e,t,i){this.stickFrom.set(i.tool.x+t*.09,i.tool.y+.11,i.tool.z-.05),this.stickTo.set(i.tool.x+.39+t*.25,i.tool.y+1.05,i.tool.z+2.35),this.stickDirection.subVectors(this.stickTo,this.stickFrom),e.position.copy(this.stickFrom).add(this.stickTo).multiplyScalar(.5),e.scale.set(1,this.stickDirection.length(),1),e.quaternion.setFromUnitVectors(w_,this.stickDirection.normalize())}burst(e,t,i,s){if(!this.reduced){this.particlesActive=!0;for(let r=0;r<8;r++){const o=this.particles[this.particleCursor++%this.particles.length],a=r*2.39996+s;o.x=e,o.y=Math.max(Ve.floorY,t),o.z=i,o.vx=Math.cos(a)*(.4+r*.055),o.vz=Math.sin(a)*(.4+r*.055),o.vy=.7+r%3*.2,o.life=.42+r%3*.07}}}updateParticles(e){if(!this.particlesActive){this.specks.visible=!1;return}const t=ir(e,0,.05);let i=!1;this.particles.forEach((s,r)=>{s.life=this.reduced?0:Math.max(0,s.life-t),s.life>0&&(i=!0,s.vy-=3.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t),this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(r,r*2,r*.4),this.dummy.scale.setScalar(Math.min(1,s.life*3)),this.dummy.updateMatrix(),this.specks.setMatrixAt(r,this.dummy.matrix)}),this.specks.instanceMatrix.needsUpdate=!0,this.particlesActive=i,this.specks.visible=i}disposeInstanceBuffers(e){e.traverse(t=>{t instanceof Dn&&t.dispose()})}syncFoodList(e){let t=e.foods.length!==this.foodOrder.length;for(let s=0;!t&&s<e.foods.length;s++){const r=e.foods[s],o=this.foodOrder[s];t=r.id!==o.id||r.kind!==o.kind||!!r.concealed!==o.concealed}if(!t)return;const i=new Set(e.foods.map(s=>s.id));for(const[s,r]of this.foods)i.has(s)||(r.removeFromParent(),this.disposeInstanceBuffers(r),this.foods.delete(s),this.escaped.delete(s));this.pickable.length=0;for(const s of e.foods){let r=this.foods.get(s.id);r&&(r.userData.kind!==s.kind||r.userData.concealed!==!!s.concealed)&&(r.userData.concealed&&!s.concealed&&this.burst(s.x,s.y,s.z,s.id),r.removeFromParent(),this.disposeInstanceBuffers(r),this.foods.delete(s.id),r=void 0),r||(r=this.model(s.kind,!!s.concealed),r.userData.foodId=s.id,r.userData.kind=s.kind,r.userData.concealed=!!s.concealed,this.foods.set(s.id,r),this.scene.add(r)),this.pickable.push(r)}this.foodOrder=e.foods.map(s=>({id:s.id,kind:s.kind,concealed:!!s.concealed}))}render(e,t,i){this.previousPhase!==e.phase&&(this.previousPhase=e.phase,e.phase==="result"&&(this.resultStartedAt=i)),this.syncFoodList(e);for(const a of e.foods){const l=this.foods.get(a.id),c=wc(a),h=a.concealed?0:ir(a.compression,0,1);l.position.set(a.x,a.y,a.z),l.rotation.set(0,a.angle,0),l.scale.set(c.rx*(1+h*.12),c.ry*(1-h*.48),c.rz*(1+h*.12)),a.escaped&&!this.escaped.has(a.id)?(this.escaped.add(a.id),this.burst(a.x,a.y,a.z,a.id)):a.escaped||this.escaped.delete(a.id)}const s=e.foods.find(a=>a.id===e.heldId),r=e.phase==="pack"&&!!s;if(this.sticks.forEach((a,l)=>{a.visible=r,r&&this.placeStick(a,l?1:-1,e)}),this.landing.visible=r,this.heldHalo.visible=r,s){const a=wc(s);this.landing.position.set(e.tool.tx,Ve.floorY+.032,e.tool.tz),this.landing.scale.set(a.rx*1.1,a.rz*1.1,1),this.landing.material.color.setHex(Math.abs(e.tool.tx)<=Ve.halfX&&Math.abs(e.tool.tz)<=Ve.halfZ?8297833:13134662),this.heldHalo.position.set(s.x,s.y-a.ry*.9,s.z),this.heldHalo.scale.set(a.rx*1.07,a.rz*1.07,1),this.heldHalo.material.opacity=this.reduced?.65:.62+Math.sin(i*.006)*.1}this.lidPivot.visible=e.phase!=="pack";let o=(1-ir(e.lid,0,1))*Math.PI/2;if(e.phase==="result"){const a=this.reduced?1:ir((i-this.resultStartedAt-550)/650,0,1),l=a*a*(3-2*a);o+=(Math.PI*.52-o)*l}if(this.lidPivot.rotation.x=-o,this.camera.position.copy(this.baseCamera),!this.reduced&&e.phase==="press"&&e.pressure>.3){const a=(e.pressure-.3)*.028;this.camera.position.x+=Math.sin(i*.047)*a,this.camera.position.y+=Math.cos(i*.041)*a*.5}this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld(),this.updateParticles(t),this.renderer.render(this.scene,this.camera)}reducedMotion(e){this.reduced=e}photo(){return this.renderer.domElement.toDataURL("image/png")}getSize(){return{width:this.width,height:this.height}}dispose(){this.disposed=!0;for(const e of this.foods.values())this.disposeInstanceBuffers(e);for(const e of this.models.values())this.disposeInstanceBuffers(e);this.specks.dispose();for(const e of this.textures)e.dispose();for(const e of this.geometry)e.dispose();for(const e of this.materials)e.dispose();this.renderer.dispose(),this.renderer.domElement.remove(),this.models.clear(),this.foods.clear()}}const C_=""+new URL("music-BMg-2Jlx.mp3",import.meta.url).href,R_=[{title:"Cozy Puzzle Title",author:"MintoDog / OpenGameArt",url:"https://opengameart.org/content/cozy-puzzle-title",license:"CC0 1.0 Universal · unmodified"}],So=n=>{try{return localStorage.getItem(`bento-box-${n}`)}catch{return null}},bo=(n,e)=>{try{localStorage.setItem(`bento-box-${n}`,e)}catch{}},Eo=n=>Number.isFinite(n)?Math.max(0,Math.min(1,n)):0;class P_{constructor(){this.music=So("music")!=="0",this.sounds=So("sounds")!=="0",this.volume=Number(So("volume")??".6"),this.paused=!1,this.ctx=null,this.musicGain=null,this.effectGain=null,this.whirrGain=null,this.toneGain=null,this.whirrTone=null,this.whirrNoise=null,this.whirrFilter=null,this.noiseBuffer=null,this.buffer=null,this.source=null,this.sourceStartedAt=0,this.musicOffset=0,this.loadAttempted=!1,this.disposed=!1,this.speed=0,this.loadingAbort=new AbortController,this.lastCue=new Map,this.activeVoices=new Set,this.onVisibility=()=>{this.apply()},Number.isFinite(this.volume)||(this.volume=.6),this.volume=Eo(this.volume),typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibility)}async unlock(){if(!(this.disposed||typeof window>"u"))try{if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t;const i=t.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=16,i.ratio.value=5,i.connect(t.destination),this.musicGain=t.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(i),this.effectGain=t.createGain(),this.effectGain.gain.value=0,this.effectGain.connect(i),this.prepareSpeedBed(t)}if(this.ctx.state!=="running"&&await this.ctx.resume(),this.disposed)return;this.apply(),this.loadAttempted||(this.loadAttempted=!0,this.loadMusic(this.ctx))}catch{}}sync(){this.volume=Number.isFinite(this.volume)?Eo(this.volume):.6,bo("music",this.music?"1":"0"),bo("sounds",this.sounds?"1":"0"),bo("volume",String(this.volume)),this.apply()}whirr(e){this.speed=Number.isFinite(e)?Math.abs(e):0,this.applySpeedBed()}cue(e){const t=this.ctx;if(!t||!this.effectGain||this.disposed||!this.audible||!this.sounds||t.state!=="running")return;const i=t.currentTime,s=e==="move"?.13:e==="pop"?.035:.045;i-(this.lastCue.get(e)??-1)<s||(this.lastCue.set(e,i),e==="finish"?[523.25,659.25,783.99,1046.5].forEach((r,o)=>this.tone(r,r*.995,.19,.1,i+o*.085,"sine")):e==="reveal"?(this.noise(.07,.03,1600,i),this.tone(390,780,.12,.07,i,"triangle"),this.tone(1046.5,1046.5,.19,.07,i+.1,"sine")):e==="press"?(this.tone(170,80,.18,.055,i,"triangle"),this.noise(.2,.035,450,i)):e==="pop"?(this.tone(570,110,.115,.13,i,"sine"),this.noise(.045,.045,2100,i)):e==="place"?(this.tone(220,130,.09,.11,i,"sine"),this.tone(510,390,.045,.025,i,"sine")):e==="undo"?this.tone(390,220,.11,.065,i,"sine"):e==="move"?this.noise(.055,.016,750,i):this.tone(650,510,.065,.055,i,"sine"))}dispose(){if(this.disposed)return;this.disposed=!0,this.loadingAbort.abort(),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibility),this.stopMusic();for(const t of this.activeVoices)try{t.stop()}catch{}this.activeVoices.clear();try{this.whirrTone?.stop(),this.whirrNoise?.stop()}catch{}const e=this.ctx;this.ctx=null,e&&e.state!=="closed"&&e.close().catch(()=>{})}get audible(){return!this.paused&&!(typeof document<"u"&&document.hidden)}async loadMusic(e){try{const t=await fetch(C_,{signal:this.loadingAbort.signal});if(!t.ok)return;const i=await t.arrayBuffer();if(this.disposed||this.ctx!==e)return;const s=await e.decodeAudioData(i);if(this.disposed||this.ctx!==e)return;this.buffer=s,this.apply()}catch{}}apply(){const e=this.ctx;if(!e||this.disposed)return;const t=this.audible;this.musicGain?.gain.setTargetAtTime(t&&this.music?this.volume*.14:0,e.currentTime,.04),this.effectGain?.gain.setTargetAtTime(t&&this.sounds?this.volume*.65:0,e.currentTime,.025),t&&this.music&&e.state==="running"?this.startMusic():this.stopMusic(),this.applySpeedBed()}startMusic(){const e=this.ctx;if(!e||!this.buffer||!this.musicGain||this.source||this.disposed)return;const t=e.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.musicGain),this.source=t,this.sourceStartedAt=e.currentTime,t.start(0,this.buffer.duration>0?this.musicOffset%this.buffer.duration:0),t.onended=()=>t.disconnect()}stopMusic(){const e=this.source;if(e){this.ctx&&this.buffer?.duration&&(this.musicOffset=(this.musicOffset+this.ctx.currentTime-this.sourceStartedAt)%this.buffer.duration),this.source=null;try{e.stop()}catch{}}}prepareSpeedBed(e){const t=e.createBuffer(1,e.sampleRate,e.sampleRate),i=t.getChannelData(0);let s=1607;for(let r=0;r<i.length;r++)s=Math.imul(s,1664525)+1013904223|0,i[r]=((s>>>0)/2147483648-1)*.75;this.noiseBuffer=t,this.whirrNoise=e.createBufferSource(),this.whirrNoise.buffer=t,this.whirrNoise.loop=!0,this.whirrFilter=e.createBiquadFilter(),this.whirrFilter.type="bandpass",this.whirrFilter.frequency.value=900,this.whirrFilter.Q.value=.65,this.whirrGain=e.createGain(),this.whirrGain.gain.value=0,this.whirrNoise.connect(this.whirrFilter),this.whirrFilter.connect(this.whirrGain),this.whirrGain.connect(this.effectGain),this.whirrNoise.start(),this.whirrTone=e.createOscillator(),this.whirrTone.type="sine",this.whirrTone.frequency.value=55,this.toneGain=e.createGain(),this.toneGain.gain.value=0,this.whirrTone.connect(this.toneGain),this.toneGain.connect(this.effectGain),this.whirrTone.start()}applySpeedBed(){const e=this.ctx;if(!e||this.disposed)return;const t=Eo(this.speed/45),i=this.audible&&this.sounds&&this.speed>.1;this.whirrGain?.gain.setTargetAtTime(i?t*.055:0,e.currentTime,.065),this.toneGain?.gain.setTargetAtTime(i?t*.028:0,e.currentTime,.065),this.whirrTone?.frequency.setTargetAtTime(48+t*138,e.currentTime,.065),this.whirrFilter?.frequency.setTargetAtTime(700+t*2100,e.currentTime,.065)}tone(e,t,i,s,r,o){const a=this.ctx;if(!a||!this.effectGain)return;const l=a.createOscillator(),c=a.createGain();l.type=o,l.frequency.setValueAtTime(e,r),l.frequency.exponentialRampToValueAtTime(Math.max(1,t),r+i),c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(s,r+.006),c.gain.exponentialRampToValueAtTime(1e-4,r+i),l.connect(c),c.connect(this.effectGain),this.activeVoices.add(l),l.onended=()=>{l.disconnect(),c.disconnect(),this.activeVoices.delete(l)},l.start(r),l.stop(r+i+.02)}noise(e,t,i,s){const r=this.ctx;if(!r||!this.effectGain||!this.noiseBuffer)return;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=this.noiseBuffer,a.type="bandpass",a.frequency.value=i,a.Q.value=.6,l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(t,s+.004),l.gain.exponentialRampToValueAtTime(1e-4,s+e),o.connect(a),a.connect(l),l.connect(this.effectGain),this.activeVoices.add(o),o.onended=()=>{o.disconnect(),a.disconnect(),l.disconnect(),this.activeVoices.delete(o)},o.start(s),o.stop(s+e+.01)}}const Du=[{id:"en",label:"English"},{id:"fr",label:"Français"},{id:"it",label:"Italiano"},{id:"de",label:"Deutsch"},{id:"es",label:"Español"},{id:"tr",label:"Türkçe"},{id:"zh-CN",label:"简体中文"},{id:"ja",label:"日本語"},{id:"ko",label:"한국어"},{id:"pt-BR",label:"Português"},{id:"ru",label:"Русский"}],on={en:{mystery:"?",mysteryLabel:"What will come out?",mysteryHint:"20 surprises. Find out when you place it.",surprise:"{item}!? In a bento!?",mysteryValue:"20 types","food.boot":"Boot","food.toilet":"Toilet","food.alarmClock":"Alarm clock","food.battery":"Battery","food.controller":"Gamepad","food.trophy":"Trophy","food.trafficCone":"Traffic cone","food.rubberDuck":"Rubber duck","food.cactus":"Cactus","food.dumbbell":"Dumbbell","food.kettle":"Kettle","food.bowlingPin":"Bowling pin","food.handheld":"Handheld console","food.rocket":"Rocket","food.luckyCat":"Lucky cat","food.miniFan":"Mini fan","food.trafficLight":"Traffic light","food.puzzleCube":"Puzzle cube","food.lightBulb":"Light bulb","food.deskBell":"Desk bell"},fr:{mystery:"?",mysteryLabel:"Que va-t-il sortir ?",mysteryHint:"20 objets. Découvre-le en le posant.",surprise:"{item} !? Dans un bento !?",mysteryValue:"20 objets","food.boot":"Botte","food.toilet":"Toilettes","food.alarmClock":"Réveil","food.battery":"Pile","food.controller":"Manette","food.trophy":"Trophée","food.trafficCone":"Cône de chantier","food.rubberDuck":"Canard de bain","food.cactus":"Cactus","food.dumbbell":"Haltère","food.kettle":"Bouilloire","food.bowlingPin":"Quille","food.handheld":"Console portable","food.rocket":"Fusée","food.luckyCat":"Chat porte-bonheur","food.miniFan":"Mini-ventilateur","food.trafficLight":"Feu tricolore","food.puzzleCube":"Cube casse-tête","food.lightBulb":"Ampoule","food.deskBell":"Sonnette de comptoir"},it:{mystery:"?",mysteryLabel:"Cosa uscirà?",mysteryHint:"20 oggetti. Scoprilo quando lo posi.",surprise:"{item}!? Nel bento!?",mysteryValue:"20 oggetti","food.boot":"Stivale","food.toilet":"WC","food.alarmClock":"Sveglia","food.battery":"Batteria","food.controller":"Controller","food.trophy":"Trofeo","food.trafficCone":"Cono stradale","food.rubberDuck":"Paperella","food.cactus":"Cactus","food.dumbbell":"Manubrio","food.kettle":"Bollitore","food.bowlingPin":"Birillo","food.handheld":"Console portatile","food.rocket":"Razzo","food.luckyCat":"Gatto portafortuna","food.miniFan":"Mini ventilatore","food.trafficLight":"Semaforo","food.puzzleCube":"Cubo rompicapo","food.lightBulb":"Lampadina","food.deskBell":"Campanello da banco"},de:{mystery:"?",mysteryLabel:"Was kommt heraus?",mysteryHint:"20 Dinge. Die Überraschung kommt beim Ablegen.",surprise:"{item}!? In der Bentobox!?",mysteryValue:"20 Dinge","food.boot":"Stiefel","food.toilet":"Toilette","food.alarmClock":"Wecker","food.battery":"Batterie","food.controller":"Gamepad","food.trophy":"Pokal","food.trafficCone":"Leitkegel","food.rubberDuck":"Badeente","food.cactus":"Kaktus","food.dumbbell":"Hantel","food.kettle":"Teekessel","food.bowlingPin":"Bowlingkegel","food.handheld":"Handheld-Konsole","food.rocket":"Rakete","food.luckyCat":"Glückskatze","food.miniFan":"Miniventilator","food.trafficLight":"Ampel","food.puzzleCube":"Zauberwürfel","food.lightBulb":"Glühbirne","food.deskBell":"Tischglocke"},es:{mystery:"?",mysteryLabel:"¿Qué saldrá?",mysteryHint:"20 objetos. Descúbrelo al colocarlo.",surprise:"¡{item}! ¿En un bento?",mysteryValue:"20 objetos","food.boot":"Bota","food.toilet":"Inodoro","food.alarmClock":"Despertador","food.battery":"Pila","food.controller":"Mando","food.trophy":"Trofeo","food.trafficCone":"Cono vial","food.rubberDuck":"Patito de goma","food.cactus":"Cactus","food.dumbbell":"Mancuerna","food.kettle":"Tetera","food.bowlingPin":"Bolo","food.handheld":"Consola portátil","food.rocket":"Cohete","food.luckyCat":"Gato de la suerte","food.miniFan":"Miniventilador","food.trafficLight":"Semáforo","food.puzzleCube":"Cubo rompecabezas","food.lightBulb":"Bombilla","food.deskBell":"Campana de mostrador"},tr:{mystery:"?",mysteryLabel:"Ne çıkacak?",mysteryHint:"20 nesne. Yerleştirince öğrenirsin.",surprise:"{item}!? Bentoda mı!?",mysteryValue:"20 nesne","food.boot":"Çizme","food.toilet":"Klozet","food.alarmClock":"Çalar saat","food.battery":"Pil","food.controller":"Oyun kolu","food.trophy":"Kupa","food.trafficCone":"Trafik konisi","food.rubberDuck":"Oyuncak ördek","food.cactus":"Kaktüs","food.dumbbell":"Dambıl","food.kettle":"Çaydanlık","food.bowlingPin":"Bowling lobutu","food.handheld":"El konsolu","food.rocket":"Roket","food.luckyCat":"Şans kedisi","food.miniFan":"Mini vantilatör","food.trafficLight":"Trafik ışığı","food.puzzleCube":"Zekâ küpü","food.lightBulb":"Ampul","food.deskBell":"Masa zili"},"zh-CN":{mystery:"？",mysteryLabel:"会出现什么？",mysteryHint:"20种物品。放下才知道是什么。",surprise:"{item}！？放便当里！？",mysteryValue:"20种","food.boot":"雨靴","food.toilet":"马桶","food.alarmClock":"闹钟","food.battery":"电池","food.controller":"游戏手柄","food.trophy":"奖杯","food.trafficCone":"路锥","food.rubberDuck":"小黄鸭","food.cactus":"仙人掌","food.dumbbell":"哑铃","food.kettle":"水壶","food.bowlingPin":"保龄球瓶","food.handheld":"掌上游戏机","food.rocket":"火箭","food.luckyCat":"招财猫","food.miniFan":"迷你风扇","food.trafficLight":"红绿灯","food.puzzleCube":"魔方","food.lightBulb":"灯泡","food.deskBell":"桌铃"},ja:{mystery:"？",mysteryLabel:"なにが出る？",mysteryHint:"20種類。何が出るかは、置いてから。",surprise:"{item}！？ 弁当に！？",mysteryValue:"20種類","food.boot":"長靴","food.toilet":"便器","food.alarmClock":"目覚まし時計","food.battery":"乾電池","food.controller":"ゲームパッド","food.trophy":"トロフィー","food.trafficCone":"カラーコーン","food.rubberDuck":"おもちゃのアヒル","food.cactus":"サボテン","food.dumbbell":"ダンベル","food.kettle":"やかん","food.bowlingPin":"ボウリングピン","food.handheld":"携帯ゲーム機","food.rocket":"ロケット","food.luckyCat":"招き猫","food.miniFan":"ミニ扇風機","food.trafficLight":"信号機","food.puzzleCube":"パズルキューブ","food.lightBulb":"電球","food.deskBell":"卓上ベル"},ko:{mystery:"？",mysteryLabel:"뭐가 나올까?",mysteryHint:"20가지 물건. 내려놓으면 알 수 있어요.",surprise:"{item}!? 도시락에!?",mysteryValue:"20종","food.boot":"장화","food.toilet":"변기","food.alarmClock":"알람시계","food.battery":"건전지","food.controller":"게임패드","food.trophy":"트로피","food.trafficCone":"안전콘","food.rubberDuck":"고무오리","food.cactus":"선인장","food.dumbbell":"아령","food.kettle":"주전자","food.bowlingPin":"볼링핀","food.handheld":"휴대용 게임기","food.rocket":"로켓","food.luckyCat":"복고양이","food.miniFan":"미니 선풍기","food.trafficLight":"신호등","food.puzzleCube":"퍼즐 큐브","food.lightBulb":"전구","food.deskBell":"탁상벨"},"pt-BR":{mystery:"?",mysteryLabel:"O que vai sair?",mysteryHint:"20 objetos. Descubra quando colocar.",surprise:"{item}!? Num bentô!?",mysteryValue:"20 tipos","food.boot":"Bota","food.toilet":"Vaso sanitário","food.alarmClock":"Despertador","food.battery":"Pilha","food.controller":"Controle","food.trophy":"Troféu","food.trafficCone":"Cone de trânsito","food.rubberDuck":"Patinho de borracha","food.cactus":"Cacto","food.dumbbell":"Halter","food.kettle":"Chaleira","food.bowlingPin":"Pino de boliche","food.handheld":"Console portátil","food.rocket":"Foguete","food.luckyCat":"Gato da sorte","food.miniFan":"Miniventilador","food.trafficLight":"Semáforo","food.puzzleCube":"Cubo mágico","food.lightBulb":"Lâmpada","food.deskBell":"Campainha de mesa"},ru:{mystery:"?",mysteryLabel:"Что выпадет?",mysteryHint:"20 предметов. Узнаешь, когда положишь.",surprise:"{item}?! В бенто?!",mysteryValue:"20 видов","food.boot":"Сапог","food.toilet":"Унитаз","food.alarmClock":"Будильник","food.battery":"Батарейка","food.controller":"Геймпад","food.trophy":"Кубок","food.trafficCone":"Дорожный конус","food.rubberDuck":"Резиновая утка","food.cactus":"Кактус","food.dumbbell":"Гантель","food.kettle":"Чайник","food.bowlingPin":"Кегля","food.handheld":"Портативная консоль","food.rocket":"Ракета","food.luckyCat":"Кот удачи","food.miniFan":"Мини-вентилятор","food.trafficLight":"Светофор","food.puzzleCube":"Кубик-головоломка","food.lightBulb":"Лампочка","food.deskBell":"Настольный звонок"}},an={pieces:"{count}/12",currency:"¥{value}"},L_={...an,...on.en,title:"Close That Bento",subtitle:"Pack it. Press it. Outside items disappear.",packHint:"Pick food, then release over the box",heldHint:"Move slowly to steady the chopsticks",pressHint:"Drag down on the lane below to press","food.chicken":"Chicken","food.shrimp":"Shrimp","food.egg":"Omelet","food.broccoli":"Broccoli","food.sausage":"Octo-sausage","food.rice":"Rice ball",undo:"Undo",rotate:"Rotate",press:"Close the lid",open:"Open & adjust",finish:"Call it done",release:"Release",value:"Feast value",fill:"Fullness",closure:"Lid closure",colors:"Variety",lost:"Escapees",score:"Points",pressure:"Force",needFood:"Add some food first",limit:"Up to 12 pieces",resultLabel:"Today’s overpacked bento",resultHint:"If the lid closes, it counts as lunch.",retry:"Repack",new:"Make another",save:"Save photo",share:"Post on X",best:"Best",settings:"Settings",language:"Language",languageName:"English",music:"Music",sounds:"Sound effects",volume:"Volume",credits:"Credits",close:"Close",mute:"Mute audio",unmute:"Enable audio",photoHint:"Press and hold the image to save",ready:"Press down",lidStuck:"Food caught in the lid!",ejected:"Outside the box. Gone!","title.master":"Lunchbox Limit Breaker","title.crusher":"Bento Compression Alchemist","title.escape":"Keeper of Runaway Lunch","title.colorful":"Artist of Overpacking","title.hungry":"Appetite Defeats the Lid","title.apprentice":"Apprentice Bento Packer",shareText:`If the lid closes, it’s a bento.
Title: {title}
Feast value ¥{value} / {score} points
{url}
#BrowserGame #gamedev #indiedev`},Nu={en:L_,fr:{...an,...on.fr,title:"Ferme ce bento !",subtitle:"Remplis. Presse. Ce qui sort disparaît.",packHint:"Choisis un aliment, puis relâche sur la boîte",heldHint:"Va doucement pour stabiliser les baguettes",pressHint:"Glisse vers le bas sur la piste pour presser","food.chicken":"Poulet","food.shrimp":"Crevette","food.egg":"Omelette","food.broccoli":"Brocoli","food.sausage":"Saucisse-poulpe","food.rice":"Onigiri",undo:"Annuler",rotate:"Tourner",press:"Fermer",open:"Rouvrir",finish:"C’est prêt",release:"Lâcher",value:"Festin",fill:"Remplissage",closure:"Fermeture",colors:"Variété",lost:"Évadés",score:"Points",pressure:"Force",needFood:"Ajoute d’abord à manger",limit:"12 morceaux maximum",resultLabel:"Le bento trop plein du jour",resultHint:"Si ça ferme, ça compte comme déjeuner.",retry:"Réorganiser",new:"Un autre bento",save:"Sauver la photo",share:"Publier sur X",best:"Record",settings:"Réglages",language:"Langue",languageName:"Français",music:"Musique",sounds:"Effets sonores",volume:"Volume",credits:"Crédits",close:"Fermer",mute:"Couper le son",unmute:"Activer le son",photoHint:"Appui long sur l’image pour l’enregistrer",ready:"Presser",lidStuck:"Un aliment bloque le couvercle !",ejected:"Hors de la boîte. Disparu !","title.master":"Briseur de limites du bento","title.crusher":"Alchimiste du bento compressé","title.escape":"Gardien du déjeuner en fuite","title.colorful":"Artiste du bento débordant","title.hungry":"L’appétit bat le couvercle","title.apprentice":"Apprenti du bento",shareText:`Si le couvercle ferme, c’est un bento.
Titre : {title}
Festin ¥{value} / {score} points
{url}
#JeuNavigateur #gamedev #indiedev`},it:{...an,...on.it,title:"Chiudi quel Bento",subtitle:"Riempi. Premi. Ciò che esce scompare.",packHint:"Scegli il cibo e rilascia sopra la scatola",heldHint:"Muoviti piano per stabilizzare le bacchette",pressHint:"Trascina in basso sulla corsia per premere","food.chicken":"Pollo","food.shrimp":"Gambero","food.egg":"Frittata","food.broccoli":"Broccolo","food.sausage":"Würstel-polpo","food.rice":"Onigiri",undo:"Annulla",rotate:"Ruota",press:"Chiudi",open:"Riapri",finish:"È pronto",release:"Lascia",value:"Ricchezza",fill:"Pienezza",closure:"Chiusura",colors:"Varietà",lost:"Fuggiti",score:"Punti",pressure:"Forza",needFood:"Aggiungi prima del cibo",limit:"Massimo 12 pezzi",resultLabel:"Il bento stracolmo del giorno",resultHint:"Se il coperchio si chiude, è un pranzo.",retry:"Risistema",new:"Un altro bento",save:"Salva foto",share:"Pubblica su X",best:"Record",settings:"Opzioni",language:"Lingua",languageName:"Italiano",music:"Musica",sounds:"Effetti sonori",volume:"Volume",credits:"Crediti",close:"Chiudi",mute:"Disattiva audio",unmute:"Attiva audio",photoHint:"Tieni premuta l’immagine per salvarla",ready:"Premi giù",lidStuck:"Cibo incastrato nel coperchio!",ejected:"Fuori dalla scatola. Sparito!","title.master":"Maestro dei limiti del bento","title.crusher":"Alchimista del bento compresso","title.escape":"Custode del pranzo in fuga","title.colorful":"Artista del bento stracolmo","title.hungry":"La fame batte il coperchio","title.apprentice":"Apprendista del bento",shareText:`Se il coperchio si chiude, è un bento.
Titolo: {title}
Ricchezza ¥{value} / {score} punti
{url}
#GiocoBrowser #gamedev #indiedev`},de:{...an,...on.de,title:"Deckel zu, Bento fertig",subtitle:"Füllen. Drücken. Was rausfällt, verschwindet.",packHint:"Essen wählen und über der Box loslassen",heldHint:"Langsam bewegen, dann zittern die Stäbchen weniger",pressHint:"Zum Drücken auf der Leiste nach unten ziehen","food.chicken":"Hähnchen","food.shrimp":"Garnele","food.egg":"Omelett","food.broccoli":"Brokkoli","food.sausage":"Oktopuswurst","food.rice":"Reisball",undo:"Zurück",rotate:"Drehen",press:"Deckel zu",open:"Öffnen",finish:"Fertig",release:"Loslassen",value:"Festwert",fill:"Füllung",closure:"Verschluss",colors:"Vielfalt",lost:"Ausreißer",score:"Punkte",pressure:"Druck",needFood:"Lege erst etwas zu essen hinein",limit:"Höchstens 12 Stück",resultLabel:"Das übervolle Bento des Tages",resultHint:"Wenn der Deckel schließt, zählt es als Mittagessen.",retry:"Umpacken",new:"Noch ein Bento",save:"Foto speichern",share:"Auf X posten",best:"Bestwert",settings:"Optionen",language:"Sprache",languageName:"Deutsch",music:"Musik",sounds:"Geräusche",volume:"Lautstärke",credits:"Mitwirkende",close:"Schließen",mute:"Ton aus",unmute:"Ton an",photoHint:"Bild zum Speichern lange drücken",ready:"Zudrücken",lidStuck:"Essen klemmt im Deckel!",ejected:"Außerhalb der Box. Weg!","title.master":"Sprenger der Bento-Grenzen","title.crusher":"Alchemist der Bento-Presse","title.escape":"Hüter des flüchtigen Mittagessens","title.colorful":"Künstler des Überpackens","title.hungry":"Appetit besiegt den Deckel","title.apprentice":"Bento-Packlehrling",shareText:`Wenn der Deckel schließt, ist es ein Bento.
Titel: {title}
Festwert ¥{value} / {score} Punkte
{url}
#Browserspiel #gamedev #indiedev`},es:{...an,...on.es,title:"Cierra ese Bento",subtitle:"Llena. Aprieta. Lo que sale desaparece.",packHint:"Elige comida y suelta sobre la caja",heldHint:"Muévete despacio para estabilizar los palillos",pressHint:"Arrastra hacia abajo en la pista para apretar","food.chicken":"Pollo","food.shrimp":"Gamba","food.egg":"Tortilla","food.broccoli":"Brócoli","food.sausage":"Salchipulpo","food.rice":"Onigiri",undo:"Deshacer",rotate:"Girar",press:"Cerrar tapa",open:"Abrir",finish:"Ya está",release:"Soltar",value:"Banquete",fill:"Llenado",closure:"Cierre",colors:"Variedad",lost:"Fugitivos",score:"Puntos",pressure:"Fuerza",needFood:"Pon algo de comida primero",limit:"Hasta 12 piezas",resultLabel:"El bento rebosante de hoy",resultHint:"Si la tapa cierra, cuenta como almuerzo.",retry:"Recolocar",new:"Otro bento",save:"Guardar foto",share:"Publicar en X",best:"Récord",settings:"Ajustes",language:"Idioma",languageName:"Español",music:"Música",sounds:"Efectos de sonido",volume:"Volumen",credits:"Créditos",close:"Cerrar",mute:"Silenciar",unmute:"Activar sonido",photoHint:"Mantén pulsada la imagen para guardarla",ready:"Apretar",lidStuck:"¡Hay comida atascada en la tapa!",ejected:"¡Fuera de la caja. Desapareció!","title.master":"Rompe límites del bento","title.crusher":"Alquimista del bento comprimido","title.escape":"Guardián del almuerzo fugitivo","title.colorful":"Artista del bento rebosante","title.hungry":"El apetito vence a la tapa","title.apprentice":"Aprendiz del bento",shareText:`Si la tapa cierra, es un bento.
Título: {title}
Banquete ¥{value} / {score} puntos
{url}
#JuegoDeNavegador #gamedev #indiedev`},tr:{...an,...on.tr,title:"Kapat Şu Bentoyu",subtitle:"Doldur. Bastır. Dışarı çıkanlar silinir.",packHint:"Yemek seç, kutunun üzerinde parmağını bırak",heldHint:"Çubukları sabitlemek için yavaş hareket et",pressHint:"Bastırmak için alttaki şeritte aşağı sürükle","food.chicken":"Tavuk","food.shrimp":"Karides","food.egg":"Omlet","food.broccoli":"Brokoli","food.sausage":"Ahtapot sosis","food.rice":"Pirinç topu",undo:"Geri al",rotate:"Döndür",press:"Kapağı kapat",open:"Aç ve düzelt",finish:"Tamamdır",release:"Bırak",value:"Ziyafet",fill:"Doluluk",closure:"Kapanma",colors:"Çeşitlilik",lost:"Kaçanlar",score:"Puan",pressure:"Kuvvet",needFood:"Önce biraz yemek ekle",limit:"En fazla 12 parça",resultLabel:"Günün tıka basa bentosu",resultHint:"Kapak kapanıyorsa öğle yemeği sayılır.",retry:"Yeniden diz",new:"Bir kutu daha",save:"Fotoğrafı kaydet",share:"X’te paylaş",best:"Rekor",settings:"Ayarlar",language:"Dil",languageName:"Türkçe",music:"Müzik",sounds:"Ses efektleri",volume:"Ses düzeyi",credits:"Katkılar",close:"Kapat",mute:"Sesi kapat",unmute:"Sesi aç",photoHint:"Kaydetmek için görsele basılı tut",ready:"Bastır",lidStuck:"Kapağa yemek sıkıştı!",ejected:"Kutunun dışında. Silindi!","title.master":"Bento Sınırlarını Aşan Usta","title.crusher":"Sıkıştırılmış Bento Simyacısı","title.escape":"Kaçak Öğle Yemeğinin Bekçisi","title.colorful":"Tıka Basa Bento Sanatçısı","title.hungry":"İştah Kapağı Yendi","title.apprentice":"Bento Doldurma Çırağı",shareText:`Kapak kapanıyorsa bentodur.
Unvan: {title}
Ziyafet ¥{value} / {score} puan
{url}
#TarayıcıOyunu #gamedev #indiedev`},"zh-CN":{...an,...on["zh-CN"],title:"盖得上就叫便当",subtitle:"装进去。压下去。掉到盒外就消失。",packHint:"选好食物，在饭盒上方松开手指",heldHint:"慢慢移动，筷子才会稳",pressHint:"在下方操作条向下拖动，压住盒盖","food.chicken":"炸鸡","food.shrimp":"虾","food.egg":"玉子烧","food.broccoli":"西兰花","food.sausage":"章鱼香肠","food.rice":"饭团",undo:"撤回",rotate:"转向",press:"盖上盒盖",open:"打开调整",finish:"就这样了",release:"松开",value:"丰盛度",fill:"装满程度",closure:"合盖程度",colors:"色彩",lost:"出逃",score:"分数",pressure:"力度",needFood:"先放点食物吧",limit:"最多放12份",resultLabel:"今日硬塞便当",resultHint:"只要盖得上，大概就算便当。",retry:"重新摆放",new:"再做一盒",save:"保存照片",share:"发布到X",best:"最高",settings:"设置",language:"语言",languageName:"简体中文",music:"音乐",sounds:"音效",volume:"音量",credits:"制作信息",close:"关闭",mute:"关闭声音",unmute:"开启声音",photoHint:"长按图片即可保存",ready:"往下压",lidStuck:"食物卡住盒盖了！",ejected:"掉到盒外，已移除！","title.master":"饭盒极限突破大师","title.crusher":"压缩便当炼金术师","title.escape":"出逃食物饲养员","title.colorful":"缤纷硬塞艺术家","title.hungry":"食欲战胜了盒盖","title.apprentice":"便当装盒学徒",shareText:`盖得上就叫便当。
称号「{title}」
丰盛度 ¥{value} / {score}分
{url}
#浏览器游戏 #gamedev #indiedev`},ja:{...an,...on.ja,title:"フタが閉まれば弁当です",subtitle:"詰めて。押して。はみ出すと消える。",packHint:"おかずを選ぶ→箱の上で指を離す",heldHint:"ゆっくり運ぶと、箸が安定する",pressHint:"下のレーンを下にドラッグして押す","food.chicken":"唐揚げ","food.shrimp":"えび","food.egg":"卵焼き","food.broccoli":"ブロッコリー","food.sausage":"タコさん","food.rice":"おにぎり",undo:"戻す",rotate:"向き",press:"フタを閉める",open:"開けて直す",finish:"これで完成",release:"はなす",value:"豪華さ",fill:"詰まり具合",closure:"閉まり具合",colors:"彩り",lost:"脱走",score:"点数",pressure:"押す力",needFood:"まずはおかずを入れよう",limit:"おかずは12個まで",resultLabel:"本日の無理やり弁当",resultHint:"フタさえ閉まれば、だいたい弁当。",retry:"詰め直す",new:"もう一箱つくる",save:"写真を保存",share:"Xに投稿",best:"最高",settings:"設定",language:"言語",languageName:"日本語",music:"音楽",sounds:"効果音",volume:"音量",credits:"クレジット",close:"閉じる",mute:"音を消す",unmute:"音を出す",photoHint:"画像を長押しして保存",ready:"押し込む",lidStuck:"おかずが挟まっている！",ejected:"箱の外に出たので削除！","title.master":"弁当箱の限界突破職人","title.crusher":"圧縮弁当の錬金術師","title.escape":"脱走おかずの飼い主","title.colorful":"彩りの詰め込み芸術家","title.hungry":"フタより食欲が勝った","title.apprentice":"弁当詰め見習い",shareText:`フタが閉まれば弁当です。
称号「{title}」
豪華さ ¥{value} / {score}点
{url}
#ブラウザゲーム #gamedev #indiedev`},ko:{...an,...on.ko,title:"뚜껑만 닫히면 도시락",subtitle:"담고. 누르고. 밖으로 나오면 사라져요.",packHint:"반찬을 고르고 상자 위에서 손가락을 떼세요",heldHint:"천천히 움직이면 젓가락이 안정돼요",pressHint:"아래 레인을 아래로 드래그해 누르세요","food.chicken":"가라아게","food.shrimp":"새우","food.egg":"달걀말이","food.broccoli":"브로콜리","food.sausage":"문어 소시지","food.rice":"주먹밥",undo:"되돌리기",rotate:"방향",press:"뚜껑 닫기",open:"열고 고치기",finish:"이대로 완성",release:"놓기",value:"푸짐함",fill:"채움 정도",closure:"닫힘 정도",colors:"색감",lost:"탈출",score:"점수",pressure:"누르는 힘",needFood:"먼저 반찬을 넣어 주세요",limit:"반찬은 최대 12개",resultLabel:"오늘의 억지 도시락",resultHint:"뚜껑만 닫히면 대충 도시락이죠.",retry:"다시 담기",new:"한 상자 더",save:"사진 저장",share:"X에 게시",best:"최고",settings:"설정",language:"언어",languageName:"한국어",music:"음악",sounds:"효과음",volume:"음량",credits:"제작 정보",close:"닫기",mute:"소리 끄기",unmute:"소리 켜기",photoHint:"이미지를 길게 눌러 저장하세요",ready:"꾹 누르기",lidStuck:"뚜껑에 반찬이 끼었어요!",ejected:"상자 밖으로 나가서 사라졌어요!","title.master":"도시락 한계 돌파 장인","title.crusher":"압축 도시락의 연금술사","title.escape":"탈출 반찬의 집사","title.colorful":"알록달록 꽉 채우기 예술가","title.hungry":"뚜껑보다 식욕이 이겼다","title.apprentice":"도시락 담기 견습생",shareText:`뚜껑만 닫히면 도시락입니다.
칭호: {title}
푸짐함 ¥{value} / {score}점
{url}
#브라우저게임 #gamedev #indiedev`},"pt-BR":{...an,...on["pt-BR"],title:"Fecha Esse Bentô",subtitle:"Encha. Aperte. O que sair desaparece.",packHint:"Escolha a comida e solte sobre a caixa",heldHint:"Mova devagar para firmar os hashis",pressHint:"Arraste para baixo na faixa para apertar","food.chicken":"Frango","food.shrimp":"Camarão","food.egg":"Omelete","food.broccoli":"Brócolis","food.sausage":"Salsicha-polvo","food.rice":"Onigiri",undo:"Desfazer",rotate:"Girar",press:"Fechar tampa",open:"Abrir e ajustar",finish:"Está pronto",release:"Soltar",value:"Fartura",fill:"Lotação",closure:"Fechamento",colors:"Variedade",lost:"Fujões",score:"Pontos",pressure:"Força",needFood:"Coloque comida primeiro",limit:"Até 12 porções",resultLabel:"O bentô superlotado do dia",resultHint:"Se a tampa fecha, já conta como almoço.",retry:"Reorganizar",new:"Outra caixa",save:"Salvar foto",share:"Postar no X",best:"Recorde",settings:"Opções",language:"Idioma",languageName:"Português",music:"Música",sounds:"Efeitos sonoros",volume:"Volume",credits:"Créditos",close:"Fechar",mute:"Desligar áudio",unmute:"Ligar áudio",photoHint:"Toque e segure a imagem para salvar",ready:"Apertar",lidStuck:"Tem comida presa na tampa!",ejected:"Fora da caixa. Sumiu!","title.master":"Mestre dos Limites do Bentô","title.crusher":"Alquimista do Bentô Comprimido","title.escape":"Guardião do Almoço Fugitivo","title.colorful":"Artista do Bentô Superlotado","title.hungry":"O Apetite Venceu a Tampa","title.apprentice":"Aprendiz de Montar Bentô",shareText:`Se a tampa fecha, é um bentô.
Título: {title}
Fartura ¥{value} / {score} pontos
{url}
#JogoDeNavegador #gamedev #indiedev`},ru:{...an,...on.ru,title:"Закрой этот бенто",subtitle:"Наполни. Надави. Всё снаружи исчезнет.",packHint:"Выбери еду и отпусти палец над коробкой",heldHint:"Двигай медленнее, чтобы палочки не дрожали",pressHint:"Для нажатия тяни вниз по дорожке внизу","food.chicken":"Курица","food.shrimp":"Креветка","food.egg":"Омлет","food.broccoli":"Брокколи","food.sausage":"Сосиска-осьминог","food.rice":"Онигири",undo:"Отмена",rotate:"Поворот",press:"Закрыть",open:"Открыть",finish:"Готово",release:"Отпустить",value:"Пир",fill:"Наполнение",closure:"Закрытие",colors:"Разнообразие",lost:"Беглецы",score:"Очки",pressure:"Сила",needFood:"Сначала положи еду",limit:"Не больше 12 кусочков",resultLabel:"Переполненный бенто дня",resultHint:"Если крышка закрылась, это уже обед.",retry:"Переложить",new:"Ещё коробку",save:"Сохранить фото",share:"Пост в X",best:"Рекорд",settings:"Настройки",language:"Язык",languageName:"Русский",music:"Музыка",sounds:"Звуковые эффекты",volume:"Громкость",credits:"Авторы",close:"Закрыть",mute:"Выключить звук",unmute:"Включить звук",photoHint:"Удерживай изображение, чтобы сохранить",ready:"Надавить",lidStuck:"Еда застряла в крышке!",ejected:"За пределами коробки. Исчезло!","title.master":"Покоритель пределов бенто","title.crusher":"Алхимик сжатого бенто","title.escape":"Хранитель сбежавшего обеда","title.colorful":"Художник переполненного бенто","title.hungry":"Аппетит победил крышку","title.apprentice":"Ученик упаковки бенто",shareText:`Если крышка закрылась, это бенто.
Звание: {title}
Пир ¥{value} / {score} очков
{url}
#БраузернаяИгра #gamedev #indiedev`}};function Bi(n){if(typeof n!="string")return;const e=n.trim().replace(/_/g,"-").toLowerCase();if(!e)return;if(e==="zh"||e.startsWith("zh-"))return"zh-CN";if(e==="pt"||e.startsWith("pt-"))return"pt-BR";const t=e.split("-")[0];return Du.find(i=>i.id.toLowerCase()===t)?.id}function I_(){try{return globalThis.localStorage?.getItem("bento-box-language")??null}catch{return null}}function Uu(){try{const e=Bi(new URLSearchParams(globalThis.location?.search??"").get("lang"));if(e)return e}catch{}const n=Bi(I_());if(n)return n;try{const e=[...globalThis.navigator?.languages??[],globalThis.navigator?.language];for(const t of e){const i=Bi(t);if(i)return i}}catch{}try{const e=Bi(Intl.DateTimeFormat().resolvedOptions().locale);if(e)return e}catch{}try{const e=Bi(globalThis.document?.documentElement.lang);if(e)return e}catch{}return"en"}let gs;function Fu(n){gs=Bi(n)??"en";try{globalThis.localStorage?.setItem("bento-box-language",gs)}catch{}try{globalThis.document&&(globalThis.document.documentElement.lang=gs)}catch{}}function Zi(){return gs??(gs=Uu()),gs}function Ou(n,e=Zi()){const t=Number.isFinite(n)?Math.max(0,Math.round(n)):0;return new Intl.NumberFormat(e,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(t)}function Pr(n,e=Zi()){return Nu[e].currency.replace(/\{value\}/g,Ou(n,e))}function Et(n,e={}){return Nu[Zi()][n].replace(/\{([a-zA-Z]+)\}/g,(t,i)=>Object.prototype.hasOwnProperty.call(e,i)?String(e[i]):t)}class D_{sdk(){const e=window.PokiSDK;if(!e)throw new Error("PokiSDK is not on the page. This build is meant to run on Poki. For local runs choose the inert signals EXPLICITLY (see createSignals).");return e}async init(){await this.sdk().init()}gameLoadingStart(){this.sdk().gameLoadingStart()}gameLoadingFinished(){this.sdk().gameLoadingFinished()}gameplayStart(){this.sdk().gameplayStart()}gameplayStop(){this.sdk().gameplayStop()}async commercialBreak(){await this.sdk().commercialBreak()}async rewardedBreak(){return this.sdk().rewardedBreak()}}class N_{constructor(){this.seen=[]}note(e){this.seen.push(e),console.warn(`[inert poki] ${e}() — this build sends NO ad or engagement signal.`)}async init(){this.note("init")}gameLoadingStart(){this.note("gameLoadingStart")}gameLoadingFinished(){this.note("gameLoadingFinished")}gameplayStart(){this.note("gameplayStart")}gameplayStop(){this.note("gameplayStop")}async commercialBreak(){this.note("commercialBreak")}async rewardedBreak(){return this.note("rewardedBreak"),!1}}function U_(n="poki"){return n==="inert"?new N_:new D_}function F_(){try{return"8990553"}catch{return"dev"}}const O_={Boot:4,Life:60,Ad:40,Game:400,Act:120,Perf:30,Err:20,Sum:60},B_=120;function z_(n){return n==null?"na":typeof n=="number"?Number.isFinite(n)?Number.isInteger(n)?String(n):String(Math.round(n*100)/100):"na":typeof n=="boolean"?n?"1":"0":String(n).replace(/\s+/g,"_").slice(0,64)}function k_(n,e,t){let i=`[${n}] t=${Math.round(e)}`;if(t)for(const s in t){const r=t[s];r!==void 0&&(i+=` ${s}=${z_(r)}`)}return i}function G_(n,e,t){const i=e-t.windowMs;let s=0,r=e;for(let o=n.length-1;o>=0;o--){const a=n[o];if(a===void 0||a<i)break;s++,r=a}return{burst:s>=t.minInputs,n:s,spanMs:Math.max(1,Math.round(e-r))}}function H_(n){const e=n.log??(b=>console.log(b)),t=n.now??(typeof performance<"u"?()=>performance.now():()=>Date.now()),i=t(),s={...O_,...n.limits??{}},r=n.maxLines??1200,o=(n.summaryEverySec??30)*1e3,a=n.burst===null?null:{windowMs:1500,minInputs:8,cooldownMs:3e3,...n.burst??{}},l={},c={},h={};let p=0,u=0,m=!1,g=!1;const _=()=>Math.round(t()-i);function d(b,C,L=!1){if(m)return;const U=l[b]??0,O=s[b]??100;if(p>=r||!L&&U>=O){u++,c[`dropped_${b}`]=(c[`dropped_${b}`]??0)+1;return}l[b]=U+1,p++;try{e(k_(b,_(),C))}catch{}}function f(b,C=1){c[b]=(c[b]??0)+C}function y(b,C){Number.isFinite(C)&&(h[b]=C)}function T(b="tick"){const C={reason:b,lines:p,dropped:u};for(const U in c)C[U]=c[U];for(const U in h)C[U]=h[U];d("Sum",C,b==="visibility_hidden"||b==="pagehide"||b==="dispose")}const M=[],w=[];let E=-1/0,R=!1;if(n.autoInstrument!==!1&&typeof window<"u"){const b=()=>{const O=t()-i;if(f("inputs"),R||(R=!0,d("Life",{stage:"first_input"})),!a)return;w.push(O),w.length>64&&w.splice(0,w.length-64);const D=G_(w,O,a);D.burst&&O-E>=a.cooldownMs&&(E=O,f("bursts"),d("Act",{kind:"burst",n:D.n,span_ms:D.spanMs,rate_per_s:D.n/D.spanMs*1e3}))};window.addEventListener("pointerdown",b,{capture:!0,passive:!0}),M.push(()=>window.removeEventListener("pointerdown",b,{capture:!0}));const C=()=>{g||(T("pagehide"),g=!0)};window.addEventListener("pagehide",C),M.push(()=>window.removeEventListener("pagehide",C));const L=O=>{f("errors"),d("Err",{kind:"error",msg:O.message,at:`${O.filename}:${O.lineno}`})};window.addEventListener("error",L),M.push(()=>window.removeEventListener("error",L));const U=O=>{f("rejections");const D=O.reason;d("Err",{kind:"rejection",msg:typeof D=="string"?D:D?.message??"unknown"})};window.addEventListener("unhandledrejection",U),M.push(()=>window.removeEventListener("unhandledrejection",U))}if(n.autoInstrument!==!1&&typeof document<"u"){const b=()=>{const C=document.hidden;f(C?"hidden":"visible"),d("Life",{stage:C?"hidden":"visible"}),C&&!g?(T("visibility_hidden"),g=!0):C||(g=!1)};document.addEventListener("visibilitychange",b),M.push(()=>document.removeEventListener("visibilitychange",b))}if(n.watchFrames!==!1&&typeof requestAnimationFrame=="function"){let b=t(),C=0;const L=()=>{if(m)return;const U=t(),O=U-b;b=U,O>=B_&&(f("long_frames"),y("worst_frame_ms",Math.max(h.worst_frame_ms??0,Math.round(O))),d("Perf",{kind:"long_frame",ms:Math.round(O)})),C=requestAnimationFrame(L)};C=requestAnimationFrame(L),M.push(()=>cancelAnimationFrame(C))}let x=null;return o>0&&typeof setInterval=="function"&&(x=setInterval(()=>T("tick"),o),M.push(()=>{x!==null&&clearInterval(x)})),d("Boot",{build:n.build,w:typeof window<"u"?window.innerWidth:void 0,h:typeof window<"u"?window.innerHeight:void 0,dpr:typeof window<"u"?window.devicePixelRatio:void 0,touch:typeof navigator<"u"?(navigator.maxTouchPoints??0)>0:void 0,lang:typeof navigator<"u"?navigator.language:void 0}),{event:d,count:f,set:y,flush:T,t:_,stats:()=>({lines:p,dropped:u,byTag:{...l},counters:{...c},gauges:{...h}}),dispose:()=>{if(!m){g||T("dispose"),m=!0;for(const b of M)try{b()}catch{}}}}}Fu(Uu());const jt=H_({build:F_()}),di=U_("inert"),V_=di.init(),st=new P_,W_=Object.keys(en),X_=["chicken","mystery","egg","broccoli","sausage","rice"],Ki=document.querySelector("#app"),Lr={get(n){try{return localStorage.getItem("bento-box-"+n)}catch{return null}},set(n,e){try{localStorage.setItem("bento-box-"+n,e)}catch{}}},ai=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ge=n=>ai(Et(n));let xe=ya(),Ya="chicken";const hs=new Set;let sr=Math.max(0,Math.min(100,Number(Lr.get("best"))||0)),Ac="",Wt=0,Cc=-1,Mr=performance.now(),Rc=0,Pc=0,xa=0,Ir=!1,Bu=0,Lc=!1,Ic=0,Dc=0,zu=0;const Ma=matchMedia("(prefers-reduced-motion: reduce)");function $a(n){parent!==window&&parent.postMessage({type:"koyotap:game",gameId:"bento-box",event:n},location.origin)}function It(n,e,t="valid"){jt.event("Act",{kind:n,target:e,outcome:t}),jt.count("action_"+n),jt.count("outcome_"+t),!Lc&&t==="valid"&&(Lc=!0,$a("first_action"))}function Jn(){Lr.set("recipe-v1",JSON.stringify(xe.foods.map(n=>({kind:n.kind,x:n.x,y:n.y,z:n.z,angle:n.angle}))))}function q_(){try{const n=Lr.get("recipe-v1");if(!n||n.length>6e3)return;const e=JSON.parse(n);if(!Array.isArray(e)||e.length>12)return;const t=ya();for(const i of e){if(!i||typeof i!="object")return;const s=i;if(typeof s.kind!="string"||!W_.includes(s.kind)||!["x","y","z","angle"].every(o=>typeof s[o]=="number"&&Number.isFinite(s[o]))||Math.abs(s.x)>4.5||Math.abs(s.z)>3.7||s.y<0||s.y>5.2)return;Sa(t,s.kind),Qn(t);const r=t.foods[t.foods.length-1];Object.assign(r,{x:s.x,y:s.y,z:s.z,angle:s.angle,vx:0,vy:0,vz:0})}xe=t}catch{}}q_();Ki.innerHTML=`<main class="workbench" data-phase="pack">
  <header class="topbar"><div class="brand"><h1>${Ge("title")}</h1><p>${Ge("subtitle")}</p></div><button class="icon-button" id="audio-toggle" aria-label="${Ge("mute")}">♪</button><button class="icon-button" id="settings-button" aria-label="${Ge("settings")}">⚙</button></header>
  <section class="stage" aria-label="${Ge("title")}"><div class="scene-hint"><p id="hint">${Ge("packHint")}</p></div><div class="stats"><div class="stat"><small>${Ge("value")}</small><strong id="value">¥0</strong></div><div class="stat fill"><small id="fill-label">${Ge("fill")}</small><strong id="fill">0%</strong><div class="meter"><i id="fill-meter" style="width:0%"></i></div></div></div></section>
  <section class="controls" id="pack-controls"><div class="foods" aria-label="${Ge("packHint")}">${X_.map((n,e)=>`<button class="food ${n==="mystery"?"food-mystery":""}" data-food="${n}" aria-label="${Ge(n==="mystery"?"mysteryLabel":"food."+n)}" aria-pressed="${n===Ya}"><i class="food-icon ${n==="mystery"?"mystery-icon":""}" style="background-position:${e*20}% center" aria-hidden="true"></i><span><span class="food-name">${Ge(n==="mystery"?"mystery":"food."+n)}</span><span class="food-value">${n==="mystery"?Ge("mysteryValue"):ai(Pr(en[n].value))}</span></span></button>`).join("")}</div><div class="tool-row"><button class="tool" id="undo" aria-label="${Ge("undo")}"><span class="symbol" aria-hidden="true">↶</span></button><button class="tool" id="rotate" aria-label="${Ge("rotate")}"><span class="symbol" aria-hidden="true">⟳</span></button><button class="tool release" id="release">${Ge("release")}</button><span class="piece-count" id="pieces">0/12</span></div><button class="primary full" id="begin-press">${Ge("press")}</button></section>
  <section class="controls press-controls" id="press-controls" hidden><p>${Ge("pressHint")}</p><div class="press-pad" id="press-pad" tabindex="0" role="button" aria-label="${Ge("ready")}"><i class="pad-fill" id="pad-fill" style="height:0%"></i><span class="arrow" aria-hidden="true">↓</span><strong>${Ge("ready")}</strong><span class="arrow" aria-hidden="true">↓</span></div><div class="pressure-readout"><span>${Ge("pressure")} <b id="pressure-value">0%</b></span><span>${Ge("closure")} <b id="closure-value">0%</b></span></div><div class="press-actions"><button class="secondary" id="reopen">${Ge("open")}</button><button class="primary" id="finish">${Ge("finish")}</button></div></section>
  <section class="result" hidden aria-label="${Ge("resultLabel")}"><div class="result-head"><div class="score"><strong id="score">0</strong><small>${Ge("score")}</small></div><div class="title-box"><p>${Ge("resultLabel")}</p><h2 id="result-title"></h2><small id="best"></small></div></div><div class="result-metrics"><div class="metric"><strong id="result-value"></strong><span>${Ge("value")}</span></div><div class="metric"><strong id="result-closure"></strong><span>${Ge("closure")}</span></div><div class="metric"><strong id="result-colors"></strong><span>${Ge("colors")}</span></div></div><div class="result-actions"><button class="primary" id="retry">${Ge("retry")}</button><button class="secondary" id="save-photo">${Ge("save")}</button><button class="secondary" id="new">${Ge("new")}</button></div><div class="result-links"><button id="share" ${location.hostname==="koyotap.com"?"":"hidden"}>${Ge("share")}</button></div></section>
  <div class="toast" aria-hidden="true" hidden></div><div class="sr-only" id="announcer" role="status" aria-live="polite"></div>
  <dialog id="settings"><div class="dialog-head"><h2>${Ge("settings")}</h2><button class="icon-button" id="close-settings" aria-label="${Ge("close")}">×</button></div><label class="settings-row"><span>${Ge("language")}</span><select id="language">${Du.map(n=>`<option value="${n.id}" ${n.id===Zi()?"selected":""}>${ai(n.label)}</option>`).join("")}</select></label><label class="settings-row"><span>${Ge("music")}</span><input id="music" type="checkbox" ${st.music?"checked":""}></label><label class="settings-row"><span>${Ge("sounds")}</span><input id="sounds" type="checkbox" ${st.sounds?"checked":""}></label><label class="settings-row"><span>${Ge("volume")}</span><input id="volume" type="range" min="0" max="1" step="0.05" value="${st.volume}"></label><div class="credits"><b>${Ge("credits")}</b>${R_.map(n=>`<p>${ai(n.title)}<br>${ai(n.author)}<br><a href="${ai(n.url)}" target="_blank" rel="noopener noreferrer">${ai(n.license)}</a></p>`).join("")}</div></dialog>
  <dialog id="photo-dialog"><div class="dialog-head"><h2>${Ge("save")}</h2><button class="icon-button" id="close-photo" aria-label="${Ge("close")}">×</button></div><img class="photo" alt="${Ge("resultLabel")}"><p class="photo-hint">${Ge("photoHint")}</p><a class="secondary photo-download" id="photo-download" download="bento-box.png">${Ge("save")}</a></dialog>
</main>`;const Be=n=>Ki.querySelector(n),Bn=Be(".stage"),$t=new A_(Bn);$t.reducedMotion(Ma.matches);Ma.addEventListener("change",()=>$t.reducedMotion(Ma.matches));new ResizeObserver(()=>{$t.resize(),Wt++,xe.phase==="result"&&ku()}).observe(Bn);const Ye={pack:Be("#pack-controls"),press:Be("#press-controls"),result:Be(".result"),hint:Be("#hint"),value:Be("#value"),fill:Be("#fill"),fillLabel:Be("#fill-label"),meter:Be("#fill-meter"),pieces:Be("#pieces"),undo:Be("#undo"),rotate:Be("#rotate"),release:Be("#release"),begin:Be("#begin-press"),pad:Be("#press-pad"),padFill:Be("#pad-fill"),pressure:Be("#pressure-value"),closure:Be("#closure-value"),settings:Be("#settings"),photo:Be("#photo-dialog")};new ResizeObserver(()=>{Ye.result.hidden||Ki.style.setProperty("--result-height",`${Math.ceil(Ye.result.getBoundingClientRect().height)}px`)}).observe(Ye.result);function Dr(n){const e=Be(".toast");e.textContent=n,Be("#announcer").textContent=n,e.hidden=!1,clearTimeout(Ic),Ic=window.setTimeout(()=>{e.hidden=!0},1700)}function Za(){Ye.undo.disabled=xe.foods.length===0,Ye.rotate.disabled=xe.heldId===null,Ye.release.disabled=xe.heldId===null,Ye.begin.disabled=xe.foods.length===0}function ku(){const n=Be("#result-value");let e=22;for(n.style.fontSize=e+"px";n.clientWidth>0&&n.scrollWidth>n.clientWidth+1&&e>12;)n.style.fontSize=--e+"px"}function Ji(){if(Gu(),Ac!==xe.phase){if(Ac=xe.phase,Be(".workbench").dataset.phase=xe.phase,Ye.pack.hidden=xe.phase!=="pack",Ye.press.hidden=xe.phase!=="press",Ye.result.hidden=xe.phase!=="result",Ye.hint.textContent=Et(xe.phase==="pack"?"packHint":xe.phase==="press"?"pressHint":"resultHint"),Ye.fillLabel.textContent=Et(xe.phase==="pack"?"fill":"closure"),xe.phase==="result"&&xe.result){zu=performance.now();const n=xe.result;sr=Math.max(sr,n.score),Lr.set("best",String(sr)),Be("#score").textContent=String(n.score),Be("#result-title").textContent=Et(n.titleKey),Be("#best").textContent=Et("best")+" "+sr,Be("#result-value").textContent=Pr(n.value),Be("#result-closure").textContent=n.closure+"%",Be("#result-colors").textContent=n.colors+"/6",requestAnimationFrame(ku),st.cue("finish"),di.gameplayStop(),jt.event("Game",{kind:"over",score:n.score,value:n.value,closure:n.closure,colors:n.colors,lost:n.lost}),jt.flush("result"),$a("round_end"),Jn()}Za(),$t.resize(),Wt++}}function Gu(){for(const n of hs)xe.foods.some(e=>e.id===n)||hs.delete(n);for(const n of xe.foods)n.concealed?hs.add(n.id):hs.delete(n.id)&&(Dr(Et("surprise",{item:Et("food."+n.kind)})),st.cue("reveal"),jt.event("Game",{kind:"mystery_reveal",item:n.kind}),Wt++)}function ei(){Gu(),Wt++,Za(),Jn()}function Y_(n){Ya=n;for(const e of Ki.querySelectorAll("[data-food]"))e.setAttribute("aria-pressed",String(e.dataset.food===n))}function Hu(n){return(n==="mystery"?ih(xe):Sa(xe,n))?(Y_(n),Ye.hint.textContent=Et(n==="mystery"?"mysteryHint":"heldHint"),st.cue("place"),It("choose",n),ei(),!0):(Dr(Et("limit")),It("choose",n,"limit"),!1)}Ki.addEventListener("pointerdown",()=>{st.unlock()},{passive:!0});for(const n of Ki.querySelectorAll("[data-food]"))n.addEventListener("click",()=>{Hu(n.dataset.food)});Ye.undo.addEventListener("click",()=>{ah(xe)&&(st.cue("undo"),It("undo","last_food"),ei())});Ye.rotate.addEventListener("click",()=>{oh(xe,Math.PI/6)&&(st.cue("move"),It("rotate","held_food"),ei())});Ye.release.addEventListener("click",()=>{Qn(xe)&&(st.cue("place"),It("drop","release_button"),Ye.hint.textContent=Et("packHint"),ei())});Ye.begin.addEventListener("click",()=>{if(!lh(xe)){Dr(Et("needFood"));return}It("press_begin","lid"),st.cue("tap"),Ji()});function Vu(){ch(xe),di.gameplayStart(),It("reopen","lid"),Ji(),ei()}Be("#reopen").addEventListener("click",Vu);Be("#retry").addEventListener("click",Vu);Be("#finish").addEventListener("click",()=>{xe.phase==="press"&&(zc(xe),It("finish","manual"),Ji())});Be("#new").addEventListener("click",()=>{xe=ya(),hs.clear(),xa=0,di.gameplayStart(),It("new","empty_box"),Ji(),ei()});let vi=null;function Ka(n){const e=$t.worldAt(n.clientX,n.clientY-(n.pointerType==="touch"?48:0),xe.tool.y);e&&rh(xe,e.x,e.z)}Bn.addEventListener("pointerdown",n=>{if(!n.target.closest("button")&&!(xe.phase!=="pack"||Ir||vi||n.button>0)){if(xe.heldId===null){const e=$t.pick(n.clientX,n.clientY);if(e!==null)sh(xe,e),It("pick","placed_food");else if(!Hu(Ya))return}vi={id:n.pointerId,touch:n.pointerType==="touch"},Bn.setPointerCapture(n.pointerId),Ka(n),Wt++}});Bn.addEventListener("pointermove",n=>{vi?.id===n.pointerId&&xe.phase==="pack"&&(Ka(n),Wt++)});Bn.addEventListener("pointerup",n=>{vi?.id===n.pointerId&&(Ka(n),vi=null,Bn.hasPointerCapture(n.pointerId)&&Bn.releasePointerCapture(n.pointerId),Qn(xe)&&(It("drop","box_canvas"),st.cue("place"),Ye.hint.textContent=Et("packHint"),ei()))});Bn.addEventListener("pointercancel",n=>{vi?.id===n.pointerId&&(vi=null,Qn(xe),It("drop","box_canvas","cancelled"),ei())});let fi=null;Ye.pad.addEventListener("pointerdown",n=>{xe.phase!=="press"||fi||n.button>0||(fi={id:n.pointerId,y:n.clientY,initial:xe.lidTarget},Ye.pad.setPointerCapture(n.pointerId),Ye.pad.classList.add("active"),st.cue("press"))});Ye.pad.addEventListener("pointermove",n=>{fi?.id===n.pointerId&&(ba(xe,fi.initial+(n.clientY-fi.y)/65),Wt++)});function Wu(n,e=!1){fi?.id===n.pointerId&&(fi=null,Ye.pad.classList.remove("active"),Ye.pad.hasPointerCapture(n.pointerId)&&Ye.pad.releasePointerCapture(n.pointerId),e&&ba(xe,xe.lid),It("push_lid","pressure_lane",e?"cancelled":"valid"),Jn())}Ye.pad.addEventListener("pointerup",n=>Wu(n));Ye.pad.addEventListener("pointercancel",n=>Wu(n,!0));Ye.pad.addEventListener("keydown",n=>{["ArrowDown","ArrowUp","Enter"," "].includes(n.key)&&(n.preventDefault(),st.unlock(),ba(xe,n.key==="ArrowUp"?xe.lidTarget-.15:xe.lidTarget+.15),It("push_lid","keyboard"),st.cue("press"))});function Ja(){st.sync(),Be("#audio-toggle").textContent=st.music||st.sounds?"♪":"×",Be("#audio-toggle").setAttribute("aria-label",Et(st.music||st.sounds?"mute":"unmute"))}Be("#audio-toggle").addEventListener("click",()=>{const n=st.music||st.sounds;st.music=!n,st.sounds=!n,Be("#music").checked=!n,Be("#sounds").checked=!n,Ja(),It("audio","toggle")});Be("#settings-button").addEventListener("click",()=>{Ir=!0,st.paused=!0,st.sync(),Ye.settings.showModal(),It("settings","open")});function Xu(){Ir=!1,st.paused=!1,st.sync(),Mr=performance.now(),Wt++}Be("#close-settings").addEventListener("click",()=>{Ye.settings.close(),Xu()});Ye.settings.addEventListener("cancel",Xu);Be("#language").addEventListener("change",n=>{Jn(),Fu(n.target.value);const e=new URL(location.href);e.searchParams.set("lang",Zi()),location.replace(e.href)});for(const n of["music","sounds"])Be("#"+n).addEventListener("change",e=>{st[n]=e.target.checked,Ja()});Be("#volume").addEventListener("input",n=>{st.volume=Number(n.target.value),st.sync()});Be("#close-photo").addEventListener("click",()=>Ye.photo.close());Be("#save-photo").addEventListener("click",()=>{$_()});Be("#share").addEventListener("click",()=>{if(location.hostname!=="koyotap.com"||!xe.result)return;const n=new URL(location.href);n.search="?lang="+Zi();const e=Et("shareText",{title:Et(xe.result.titleKey),value:Ou(xe.result.value),score:xe.result.score,url:n.href});window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e),"_blank","noopener,noreferrer"),It("share","x_intent")});async function $_(){if(!xe.result)return;const n=new Image;n.src=$t.photo();try{await n.decode()}catch{return}const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");if(!t)return;t.fillStyle="#fff8e8",t.fillRect(0,0,900,1200);const i=$t.getSize(),s=Math.max(900/i.width,740/i.height),r=i.width*s,o=i.height*s;t.save(),t.beginPath(),t.rect(0,0,900,740),t.clip(),t.drawImage(n,(900-r)/2,(740-o)/2,r,o),t.restore(),t.textAlign="center",t.fillStyle="#81734b",t.font="bold 27px system-ui",t.fillText(Et("resultLabel"),450,785);const a=Et(xe.result.titleKey);let l=54;do{if(t.font=`bold ${l}px system-ui`,t.measureText(a).width<810)break;l--}while(l>27);t.fillStyle="#493721",t.fillText(a,450,858),t.fillStyle="#c46c48",t.font="bold 110px system-ui",t.fillText(String(xe.result.score),450,1e3),t.font="27px system-ui",t.fillStyle="#7d7856",t.fillText(Pr(xe.result.value)+"   /   "+Et("closure")+" "+xe.result.closure+"%",450,1070),t.font="23px system-ui",t.fillText(Et("title"),450,1147);const c=e.toDataURL("image/png");Be(".photo").src=c,Be("#photo-download").href=c,Ye.photo.showModal(),It("photo","preview")}document.addEventListener("visibilitychange",()=>{Mr=performance.now(),Wt++,document.hidden&&(Jn(),jt.flush("hidden"))});window.addEventListener("pagehide",Jn);function qu(n){Bu=requestAnimationFrame(qu);const e=Math.max(0,Math.min(.04,(n-Mr)/1e3));if(Mr=n,document.hidden||Ir)return;gh(xe,e),Ji();const t=Ea(xe);if(xe.ejections>xa&&(Dr(Et("ejected")),st.cue("pop"),jt.event("Game",{kind:"discard",count:xe.discarded}),xa=xe.ejections,Wt++,Jn()),st.whirr(xe.phase==="press"?xe.pressure*40:0),n-Pc>90){Ye.value.textContent=Pr(t.value);const s=xe.phase==="pack"?t.fill:t.closure;Ye.fill.textContent=s+"%",Ye.meter.style.width=s+"%",Ye.pieces.textContent=Et("pieces",{count:xe.foods.length}),Ye.padFill.style.height=xe.lid*100+"%",Ye.pressure.textContent=Math.round(xe.pressure*100)+"%",Ye.closure.textContent=t.closure+"%",Za(),Pc=n}(xe.heldId!==null||xe.phase==="press"||xe.foods.some(s=>Math.abs(s.vx)+Math.abs(s.vy)+Math.abs(s.vz)>.04)||xe.phase==="result"&&n-zu<1500||Wt!==Cc||n-Rc>220)&&($t.render(xe,e,n),Cc=Wt,Rc=n),n-Dc>3500&&xe.foods.length>0&&(Jn(),Dc=n)}Ja();Ji();$t.render(xe,0,performance.now());requestAnimationFrame(qu);V_.then(()=>{di.gameLoadingStart(),di.gameLoadingFinished(),di.gameplayStart(),$a("ready"),jt.event("Life",{stage:"gameplay_start"})});$t.loadAtlas(eh).then(()=>{Wt++}).catch(()=>{jt.event("Err",{kind:"food_texture_load"})});$t.loadOddAtlas(th).then(()=>{Wt++}).catch(()=>{jt.event("Err",{kind:"odd_texture_load"})});window.addEventListener("beforeunload",()=>{cancelAnimationFrame(Bu),$t.dispose(),st.dispose(),jt.dispose()});
