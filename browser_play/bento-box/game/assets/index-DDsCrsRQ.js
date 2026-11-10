(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const eh=""+new URL("food-materials-CxPyToPk.jpg",import.meta.url).href,th=""+new URL("odd-materials-DBdrs3_l.jpg",import.meta.url).href,ya=["boot","toilet","alarmClock","battery","controller","goldBar","trafficCone","rubberDuck","cactus","dumbbell","diamondRing","bowlingPin","handheld","cashBundle","luxuryWatch","miniFan","kingCrab","puzzleCube","lightBulb","violin"],nh=["trophy","kettle","rocket","luckyCat","trafficLight","deskBell"],jt={chicken:{rx:.5,ry:.36,rz:.42,mass:1.2,value:160,color:12087352},shrimp:{rx:.9,ry:.22,rz:.28,mass:.7,value:220,color:15899510},egg:{rx:.5,ry:.25,rz:.34,mass:.9,value:100,color:15780432},broccoli:{rx:.4,ry:.5,rz:.4,mass:.45,value:90,color:5213008},sausage:{rx:.3,ry:.45,rz:.3,mass:.65,value:120,color:14050640},rice:{rx:.45,ry:.4,rz:.4,mass:1,value:70,color:16314585},boot:{rx:.57,ry:.32,rz:.31,mass:.9,value:2980,color:8412487,softness:.3},toilet:{rx:.43,ry:.39,rz:.55,mass:1.8,value:38e3,color:15855333,softness:.02},alarmClock:{rx:.36,ry:.31,rz:.23,mass:.65,value:2480,color:14380375,softness:.04},battery:{rx:.43,ry:.18,rz:.18,mass:1.2,value:150,color:5134688,softness:.015},controller:{rx:.6,ry:.18,rz:.34,mass:.6,value:6980,color:8622768,softness:.06},goldBar:{rx:.36,ry:.12,rz:.23,mass:1.8,value:23e5,color:15120696,softness:.005},trafficCone:{rx:.33,ry:.34,rz:.33,mass:.45,value:1500,color:15829837,softness:.2},rubberDuck:{rx:.39,ry:.28,rz:.35,mass:.35,value:500,color:15781453,softness:.68},cactus:{rx:.31,ry:.34,rz:.28,mass:.6,value:980,color:7181661,softness:.24},dumbbell:{rx:.69,ry:.24,rz:.25,mass:2,value:3980,color:6383984,softness:.005},diamondRing:{rx:.3,ry:.23,rz:.25,mass:.25,value:1e6,color:14280942,softness:.01},bowlingPin:{rx:.61,ry:.22,rz:.23,mass:.9,value:3800,color:15854044,softness:.035},handheld:{rx:.44,ry:.16,rz:.31,mass:.6,value:39800,color:11705529,softness:.04},cashBundle:{rx:.4,ry:.14,rz:.22,mass:.6,value:1e6,color:14603699,softness:.18},luxuryWatch:{rx:.28,ry:.12,rz:.48,mass:.4,value:15e5,color:14792282,softness:.03},miniFan:{rx:.34,ry:.34,rz:.25,mass:.7,value:1980,color:9088692,softness:.06},kingCrab:{rx:.61,ry:.24,rz:.43,mass:1.1,value:25e3,color:14247234,softness:.08},puzzleCube:{rx:.29,ry:.29,rz:.29,mass:.55,value:1500,color:14787406,softness:.015},lightBulb:{rx:.25,ry:.32,rz:.25,mass:.4,value:600,color:15784839,softness:.02},violin:{rx:.28,ry:.16,rz:.7,mass:.7,value:8e5,color:10178598,softness:.02},trophy:{rx:.3,ry:.35,rz:.27,mass:.8,value:3980,color:14068303,softness:.03},kettle:{rx:.45,ry:.33,rz:.36,mass:1.1,value:3980,color:9549482,softness:.04},rocket:{rx:.28,ry:.45,rz:.28,mass:1.3,value:2480,color:14186340,softness:.025},luckyCat:{rx:.31,ry:.34,rz:.28,mass:.75,value:1980,color:16115918,softness:.035},trafficLight:{rx:.22,ry:.42,rz:.22,mass:.95,value:3980,color:5595228,softness:.025},deskBell:{rx:.38,ry:.22,rz:.38,mass:.65,value:1500,color:12040361,softness:.03}},Ve={halfX:1.8,halfZ:1.3,floorY:.12,rimY:.82},Fr=1/120,Or=Math.PI*2,rr=.018,mt=(i,e,t)=>Math.max(e,Math.min(t,i)),xn=(i,e=0)=>Number.isFinite(i)?i:e,Uc=i=>(xn(i)%Or+Or)%Or;function Sa(){return{phase:"pack",foods:[],heldId:null,tool:{x:0,y:1.65,z:.25,tx:0,tz:.25,vx:0,vz:0},lid:0,lidTarget:0,pressure:0,ejections:0,discarded:0,result:null,nextId:1,time:0,closedFor:0,remainder:0,stressedFor:0,ejectCooldown:0,mysteryBag:[]}}function cn(i){const e=jt[i.kind],t=Math.cos(i.angle),n=Math.sin(i.angle),s=mt(i.compression,0,1);return{x:Math.hypot(e.rx*t,e.rz*n)*(1+s*.12),y:e.ry*(1-s*.48),z:Math.hypot(e.rx*n,e.rz*t)*(1+s*.12)}}function Fc(i){const e=cn(i);return Math.abs(i.x)<=Ve.halfX-e.x*.22&&Math.abs(i.z)<=Ve.halfZ-e.z*.22}function Oc(i){const e=cn(i);return Math.abs(i.x)>Ve.halfX+e.x*.18||Math.abs(i.z)>Ve.halfZ+e.z*.18}function Sr(i){let e=0;for(let t=i.foods.length-1;t>=0;t--){const n=i.foods[t];n.id===i.heldId||!n.escaped&&!Oc(n)||(i.foods.splice(t,1),e++)}return i.discarded=Math.max(0,xn(i.discarded))+e,i.ejections=Math.max(0,xn(i.ejections))+e,e}function Bc(i,e){if(i.phase!=="pack"||!Object.prototype.hasOwnProperty.call(jt,e))return!1;xi(i);const t={id:i.nextId++,kind:e,x:i.tool.x,y:Math.max(1.55,i.tool.y),z:i.tool.z,angle:0,vx:0,vy:0,vz:0,angular:0,compression:0,escaped:!1};return i.foods.push(t),i.heldId=t.id,!0}function ih(i){const e=[...ya];for(let t=e.length-1;t>0;t--){let n=.5;try{n=i()}catch{}const s=Number.isFinite(n)?mt(n,0,1-Number.EPSILON):.5,r=Math.floor(s*(t+1)),o=e[t];e[t]=e[r],e[r]=o}return e}function sh(i,e=Math.random){if(i.phase!=="pack")return!1;(!Array.isArray(i.mysteryBag)||i.mysteryBag.length===0)&&(i.mysteryBag=ih(e));const t=i.mysteryBag[i.mysteryBag.length-1];if(!t||!ya.includes(t)||!Bc(i,t))return!1;i.mysteryBag.pop();const n=i.foods[i.foods.length-1];return n.concealed=!0,!0}function rh(i,e){if(i.phase!=="pack")return!1;const t=i.foods.find(n=>n.id===e);return t?(i.heldId!==e&&xi(i),i.heldId=e,i.tool.x=t.x,i.tool.z=t.z,i.tool.y=Math.max(.9,t.y),i.tool.tx=t.x,i.tool.tz=t.z,i.tool.vx=0,i.tool.vz=0,t.vx=0,t.vy=0,t.vz=0,t.angular=0,!0):!1}function oh(i,e,t){i.phase!=="pack"||!Number.isFinite(e)||!Number.isFinite(t)||(i.tool.tx=mt(e,-2.65,2.65),i.tool.tz=mt(t,-2.1,2.1))}function xi(i){if(i.phase!=="pack"||i.heldId===null)return!1;const e=i.foods.find(t=>t.id===i.heldId);return i.heldId=null,e?(e.concealed&&(e.concealed=!1),e.vx=mt(i.tool.vx*.52,-4.2,4.2),e.vz=mt(i.tool.vz*.52,-4.2,4.2),e.vy=-.1,e.angular=mt((i.tool.vx-i.tool.vz)*.36,-3,3),Sr(i),!0):!1}function ah(i,e){if(i.phase!=="pack"||i.heldId===null||!Number.isFinite(e))return!1;const t=i.foods.find(n=>n.id===i.heldId);return t?(t.angle=Uc(t.angle+e),!0):!1}function lh(i){if(i.phase!=="pack"||i.foods.length===0)return!1;const e=i.foods.pop();return i.heldId===e.id&&(i.heldId=null),!0}function ch(i){return i.phase!=="pack"||i.foods.length===0||(xi(i),Sr(i),i.foods.length===0)?!1:(i.phase="press",i.lidTarget=i.lid,i.closedFor=0,i.stressedFor=0,!0)}function ba(i,e){i.phase!=="press"||!Number.isFinite(e)||(i.lidTarget=mt(e,0,1))}function uh(i){i.phase!=="pack"&&(i.phase="pack",i.result=null,i.lidTarget=0,i.closedFor=0,i.stressedFor=0,i.heldId=null,i.pressure=0,i.remainder=0)}function pl(i){let e=1;for(const t of i.foods){if(t.id===i.heldId)continue;const n=cn(t);if(Math.abs(t.x)-n.x>=Ve.halfX||t.z-n.z>=Ve.halfZ||t.z+n.z<=-1.3)continue;const s=t.y-Ve.rimY-rr;if(s+n.y<=0)continue;const r=t.z+Ve.halfZ;if(r<=n.z+1e-7){e=0;continue}const o=r*r-n.z*n.z,a=Math.max(0,(r*s+Math.sqrt(n.z*n.z*s*s+o*n.y*n.y))/o),l=1-Math.atan(a)*2/Math.PI;e=Math.min(e,mt(xn(l),0,1))}return e}function Ea(i){const e=i.foods.filter(r=>r.id!==i.heldId&&Fc(r)),t=e.reduce((r,o)=>r+jt[o.kind].value,0),n=e.reduce((r,o)=>{const a=jt[o.kind];return r+4/3*Math.PI*a.rx*a.ry*a.rz},0),s=Ve.halfX*2*Ve.halfZ*2*(Ve.rimY-Ve.floorY);return{value:t,inside:e.length,fill:Math.round(mt(n/s*100,0,100)),colors:Math.min(6,new Set(e.map(r=>r.kind)).size),closure:Math.round(mt(i.lid*100,0,100))}}function zc(i){i.phase==="pack"&&xi(i);const e=Sr(i);if(i.result&&i.phase==="result"&&e===0)return i.result;const t=Ea(i),n=i.discarded+i.foods.length-t.inside,s=i.foods.reduce((l,c)=>l+c.compression,0)/Math.max(1,i.foods.length),r=mt(Math.log1p(Math.max(0,t.value)/1e3)/Math.log1p(5e6/1e3),0,1)*34,o=t.inside===0?0:Math.round(mt(r+t.closure*.32+t.colors/6*26+t.fill*.08-n*5-s*8,0,100));let a="title.apprentice";return t.inside===0||t.value<250?a="title.hungry":n>=2?a="title.escape":s>.32?a="title.crusher":o>=85&&t.closure>=97?a="title.master":t.colors>=5&&(a="title.colorful"),i.result={score:o,value:t.value,closure:t.closure,colors:t.colors,inside:t.inside,lost:n,titleKey:a},i.phase="result",i.pressure=0,i.heldId=null,i.remainder=0,i.result}function hh(i,e){const t=i.tool,n=i.foods.find(l=>l.id===i.heldId),r=48/(1+(n?n.concealed?1:jt[n.kind].mass:.6)*.25),o=8.6;t.vx+=((t.tx-t.x)*r-t.vx*o)*e,t.vz+=((t.tz-t.z)*r-t.vz*o)*e,t.vx=mt(t.vx,-7,7),t.vz=mt(t.vz,-7,7),t.x=mt(t.x+t.vx*e,-2.8,2.8),t.z=mt(t.z+t.vz*e,-2.25,2.25);const a=Math.min(.1,Math.hypot(t.vx,t.vz)*.022)*Math.sin(i.time*8.5);t.y+=(1.65+a-t.y)*Math.min(1,e*8),n&&(n.x=t.x,n.y=t.y,n.z=t.z,n.vx=t.vx,n.vy=0,n.vz=t.vz,n.compression*=Math.exp(-e*5))}function dh(i,e,t,n){const s=t.x+n.x,r=t.y+n.y,o=t.z+n.z,a=e.x-i.x,l=e.y-i.y,c=e.z-i.z;if(Math.abs(a)>=s||Math.abs(l)>=r||Math.abs(c)>=o)return;const f=Math.sqrt((a/s)**2+(l/r)**2+(c/o)**2);if(f>=1)return;let p=a/(s*s),u=l/(r*r),m=c/(o*o);const g=Math.hypot(p,u,m);g<1e-8?(p=0,u=1,m=0):(p/=g,u/=g,m/=g);const _=Math.sqrt((p/s)**2+(u/r)**2+(m/o)**2),d=Math.min(.35,Math.max(0,(1-f)/Math.max(.01,_)))*.72,h=1/jt[i.kind].mass,M=1/jt[e.kind].mass,E=h+M;i.x-=p*d*h/E,i.y-=u*d*h/E,i.z-=m*d*h/E,e.x+=p*d*M/E,e.y+=u*d*M/E,e.z+=m*d*M/E;const y=(e.vx-i.vx)*p+(e.vy-i.vy)*u+(e.vz-i.vz)*m;if(y<0){const w=-y*1.12/E;i.vx-=p*w*h,i.vy-=u*w*h,i.vz-=m*w*h,e.vx+=p*w*M,e.vy+=u*w*M,e.vz+=m*w*M,i.angular+=(m*a-p*c)*.07,e.angular-=(m*a-p*c)*.07}Math.abs(u)>.45&&(i.vx*=.96,i.vz*=.96,e.vx*=.96,e.vz*=.96)}function fh(i){const e=cn(i),t=Math.abs(i.x)<Ve.halfX&&Math.abs(i.z)<Ve.halfZ,n=(t?Ve.floorY:.015)+e.y;if(i.y<n&&(i.y=n,i.vy=i.vy<-.5?-i.vy*.12:0,i.vx*=.93,i.vz*=.93,i.angular*=.94),i.y-e.y<Ve.rimY&&!i.escaped&&t){const s=Ve.halfX-e.x,r=Ve.halfZ-e.z;i.x>s&&(i.x=s,i.vx>0&&(i.vx*=-.24)),i.x<-s&&(i.x=-s,i.vx<0&&(i.vx*=-.24)),i.z>r&&(i.z=r,i.vz>0&&(i.vz*=-.24)),i.z<-r&&(i.z=-r,i.vz<0&&(i.vz*=-.24))}Oc(i)&&(i.escaped=!0),i.x=mt(xn(i.x),-4.3,4.3),i.y=mt(xn(i.y,n),.01,5),i.z=mt(xn(i.z),-3.5,3.5),i.vx=mt(xn(i.vx),-8,8),i.vy=mt(xn(i.vy),-9,8),i.vz=mt(xn(i.vz),-8,8)}function ml(i){for(const e of i.foods){const t=cn(e);if(e.id===i.heldId||e.y+t.y<=Ve.rimY||Math.abs(e.x)-t.x>=Ve.halfX)continue;const n=e.z+Ve.halfZ;Math.abs(n)>=t.z+rr||(n>=0?(e.z=-1.3+t.z+rr,e.vz=Math.max(.1,e.vz)):(e.z=-1.3-t.z-rr,e.vz=Math.min(-.1,e.vz)))}}function ph(i,e){if(i.phase!=="press"){i.lid+=(0-i.lid)*Math.min(1,e*5),i.lid<.001&&(i.lid=0),i.pressure*=Math.exp(-e*6);for(const _ of i.foods)_.compression*=Math.exp(-e*3.4);return}ml(i);const t=(i.lidTarget-i.lid)*Math.min(1,e*4.7),n=mt(i.lid+t,0,1),s=[];let r=0;const o=(1-n)*Math.PI/2,a=Math.cos(o),l=Math.sin(o);for(const _ of i.foods){const d=cn(_);if(Math.abs(_.x)-d.x>=Ve.halfX||_.z-d.z>=Ve.halfZ||_.z+d.z<=-1.3){_.compression*=Math.exp(-e*3);continue}const h=(_.y-Ve.rimY)*a-(_.z+Ve.halfZ)*l+Math.hypot(d.y*a,d.z*l),M=Math.max(0,h/Math.max(.18,a));M>0?(s.push({food:_,overlap:M}),r+=M):_.compression*=Math.exp(-e*1.8)}const c=r*3.1,f=pl(i),p=i.lid+(t>0?t/(1+c):t);i.lid=mt(Math.min(p,f),0,1);const u=Math.max(0,i.lidTarget-i.lid),m=i.lidTarget>f+.001,g=mt(r*.85+u*(s.length>0||m?1.5:0)+(m?.18:0),0,1);i.pressure+=(g-i.pressure)*Math.min(1,e*9);for(const _ of s){const d=_.food,h=jt[d.kind],M=mt(h.softness??(d.kind==="rice"?.88:d.kind==="broccoli"?.75:d.kind==="chicken"?.44:.62),0,1),E=mt(d.compression+_.overlap/Math.max(.03,h.ry*.96)*.85,0,M);d.compression+=(E-d.compression)*Math.min(1,e*7);const y=Math.min(14,_.overlap*24+u*5)/Math.max(.5,h.mass);d.vy-=y*e,d.vz+=y*e*(.9+.2*(1-i.lid)),d.vx+=(d.x===0?d.id%2?-1:1:Math.sign(d.x))*y*e*.3}if(i.stressedFor=i.pressure>.62&&i.lidTarget>.94?i.stressedFor+e:Math.max(0,i.stressedFor-e*2),i.ejectCooldown=Math.max(0,i.ejectCooldown-e),i.stressedFor>.2&&i.ejectCooldown===0){const _=s.filter(d=>d.food.y+cn(d.food).y>Ve.rimY+.12).sort((d,h)=>h.food.y+cn(h.food).y-(d.food.y+cn(d.food).y))[0];if(_){const d=_.food,h=d.x<-.02?-1:d.x>.02?1:d.id%2?-1:1;d.vx+=h*3.7,d.vy=Math.max(d.vy,3.1),d.vz+=2.3,d.angular+=h*4,i.ejectCooldown=.65,i.stressedFor=0}}ml(i),i.lid=Math.min(i.lid,pl(i))}function mh(i,e){if(i.phase!=="press")return;const t=Ea(i),n=i.foods.some(s=>!s.escaped&&Fc(s)&&s.y+cn(s).y>Ve.rimY+.055);i.lid>=.978&&t.inside>0&&!n&&i.pressure<.75?i.closedFor+=e:i.closedFor=0,i.closedFor>=1&&zc(i)}function gh(i,e){i.time+=e,i.phase==="pack"&&hh(i,e);for(const n of i.foods)n.id!==i.heldId&&(n.vy-=6.6*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.angle=Uc(n.angle+n.angular*e),n.angular*=Math.exp(-e*.7),n.vx*=Math.exp(-e*.18),n.vz*=Math.exp(-e*.18));const t=i.foods.map(cn);for(let n=0;n<3;n++){for(let s=0;s<i.foods.length;s++){const r=i.foods[s];if(r.id!==i.heldId)for(let o=s+1;o<i.foods.length;o++){const a=i.foods[o];a.id!==i.heldId&&dh(r,a,t[s],t[o])}}for(const s of i.foods)s.id!==i.heldId&&fh(s)}ph(i,e),Sr(i),mh(i,e)}function _h(i,e){if(!(i.phase==="result"||!Number.isFinite(e)||e<=0)){for(i.remainder+=Math.min(.06,e);i.remainder+1e-10>=Fr&&xh(i);)i.remainder-=Fr,gh(i,Fr);i.remainder=Math.max(0,i.remainder)}}function xh(i){return i.phase!=="result"}function vh(i){return JSON.stringify(i.foods.map(({kind:e,x:t,y:n,z:s,angle:r})=>({kind:e,x:t,y:n,z:s,angle:r})))}function Mh(i){if(!i)return null;try{const e=JSON.parse(i);if(!Array.isArray(e))return null;const t=Sa();for(const n of e){if(!n||typeof n!="object")return null;const s=n;if(typeof s.kind!="string"||!Object.prototype.hasOwnProperty.call(jt,s.kind)||!["x","y","z","angle"].every(c=>typeof s[c]=="number"&&Number.isFinite(s[c])&&Math.abs(s[c])<=Number.MAX_SAFE_INTEGER))return null;const r=s.x,o=s.y,a=s.z,l=s.angle;if(Math.abs(r)>4.5||Math.abs(a)>3.7||o<0)return null;t.foods.push({id:t.nextId++,kind:s.kind,x:r,y:o,z:a,angle:l,vx:0,vy:0,vz:0,angular:0,compression:0,escaped:!1})}return t}catch{return null}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="186",yh=0,gl=1,Sh=2,or=1,kc=2,ls=3,fi=0,Vt=1,Mn=2,Fn=0,ds=1,_l=2,xl=3,vl=4,bh=5,Oi=100,Eh=101,Th=102,wh=103,Ah=104,Ch=200,Rh=201,Ph=202,Lh=203,Gc=204,Hc=205,Ih=206,Dh=207,Nh=208,Uh=209,Fh=210,Oh=211,Bh=212,zh=213,kh=214,To=0,wo=1,Ao=2,_s=3,Co=4,Ro=5,Po=6,Lo=7,Vc=0,Gh=1,Hh=2,bn=0,Wc=1,Xc=2,qc=3,wa=4,Yc=5,$c=6,Zc=7,Kc=300,pi=301,Vi=302,Br=303,zr=304,br=306,Io=1e3,Un=1001,Do=1002,Dt=1003,Vh=1004,Is=1005,Ot=1006,kr=1007,li=1008,Yt=1009,Jc=1010,Qc=1011,xs=1012,Aa=1013,En=1014,un=1015,Tn=1016,Ca=1017,Ra=1018,vs=1020,jc=35902,eu=35899,tu=1021,nu=1022,hn=1023,kn=1026,ci=1027,Pa=1028,La=1029,mi=1030,Ia=1031,Da=1033,ar=33776,lr=33777,cr=33778,ur=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,ko=37496,Go=37488,Ho=37489,dr=37490,Vo=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,Zo=37813,Ko=37814,Jo=37815,Qo=37816,jo=37817,ea=37818,ta=37819,na=37820,ia=37821,sa=36492,ra=36494,oa=36495,aa=36283,la=36284,fr=36285,ca=36286,Wh=3200,ua=0,Xh=1,Kn="",Gt="srgb",pr="srgb-linear",mr="linear",ft="srgb",Gr=7680,qh=519,Yh=512,$h=513,Zh=514,Na=515,Kh=516,Jh=517,Ua=518,Qh=519,jh=35044,ed=35048,Ml="300 es",yn=2e3,Ms=2001;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){const i=ys("canvas");return i.style.display="block",i}const yl={};function Sl(...i){const e="THREE."+i.shift();console.log(e,...i)}function iu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=iu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=iu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gi(...i){const e=i.join(" ");e in yl||(yl[e]=!0,He(...i))}function id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sd={[To]:wo,[Ao]:Po,[Co]:Lo,[_s]:Ro,[wo]:To,[Po]:Ao,[Lo]:Co,[Ro]:_s};class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,ha=180/Math.PI;function qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function rd(i,e){return(i%e+e)%e}function Vr(i,e,t){return(1-t)*i+t*e}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ja=class ja{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ja.prototype.isVector2=!0;let ae=ja;class Yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],p=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(p!==_||l!==u||c!==m||f!==g){let d=l*u+c*m+f*g+p*_;d<0&&(u=-u,m=-m,g=-g,_=-_,d=-d);let h=1-a;if(d<.9995){const M=Math.acos(d),E=Math.sin(M);h=Math.sin(h*M)/E,a=Math.sin(a*M)/E,l=l*h+u*a,c=c*h+m*a,f=f*h+g*a,p=p*h+_*a}else{l=l*h+u*a,c=c*h+m*a,f=f*h+g*a,p=p*h+_*a;const M=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=M,c*=M,f*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],p=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+f*p+l*m-c*u,e[t+1]=l*g+f*u+c*p-a*m,e[t+2]=c*g+f*m+a*u-l*p,e[t+3]=f*g-a*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),p=a(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*f*p+c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p-u*m*g;break;case"YXZ":this._x=u*f*p+c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p+u*m*g;break;case"ZXY":this._x=u*f*p-c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p-u*m*g;break;case"ZYX":this._x=u*f*p-c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p+u*m*g;break;case"YZX":this._x=u*f*p+c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p-u*m*g;break;case"XZY":this._x=u*f*p-c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p+u*m*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],p=t[10],u=n+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const el=class el{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),f=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+l*c+o*p-a*f,this.y=n+l*f+a*c-r*p,this.z=s+l*p+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};el.prototype.isVector3=!0;let P=el;const Wr=new P,bl=new Yi,tl=class tl{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],p=n[7],u=n[2],m=n[5],g=n[8],_=s[0],d=s[3],h=s[6],M=s[1],E=s[4],y=s[7],w=s[2],T=s[5],R=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*d+a*E+l*T,r[6]=o*h+a*y+l*R,r[1]=c*_+f*M+p*w,r[4]=c*d+f*E+p*T,r[7]=c*h+f*y+p*R,r[2]=u*_+m*M+g*w,r[5]=u*d+m*E+g*T,r[8]=u*h+m*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,u=a*l-f*r,m=c*r-o*l,g=t*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(s*c-f*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(f*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tl.prototype.isMatrix3=!0;let Xe=tl;const Xr=new Xe,El=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const tt=od();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class ad{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=ys("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class Fa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let cd=0;const Yr=new P;class Bt extends vi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Un,s=Un,r=Ot,o=li,a=hn,l=Yt,c=Bt.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=qi(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Kc;Bt.DEFAULT_ANISOTROPY=1;const nl=class nl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],f=l[4],p=l[8],u=l[1],m=l[5],g=l[9],_=l[2],d=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,w=(h+1)/2,T=(f+u)/4,R=(p+_)/4,v=(g+d)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=R/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((d-g)*(d-g)+(p-_)*(p-_)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(p-_)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nl.prototype.isVector4=!0;let Mt=nl;class ud extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Bt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class su extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const yr=class yr{constructor(e,t,n,s,r,o,a,l,c,f,p,u,m,g,_,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,f,p,u,m,g,_,d)}set(e,t,n,s,r,o,a,l,c,f,p,u,m,g,_,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=m,h[7]=g,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=o*f,m=o*p,g=a*f,_=a*p;t[0]=l*f,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*p,g=c*f,_=c*p;t[0]=u+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=m*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*p,g=c*f,_=c*p;t[0]=u-_*a,t[4]=-o*p,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*f,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*p,g=a*f,_=a*p;t[0]=l*f,t[4]=g*c-m,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=_-u*p,t[8]=g*p+m,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*p+g,t[10]=u-_*p}else if(e.order==="XZY"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=-p,t[8]=c*f,t[1]=u*p+_,t[5]=o*f,t[9]=m*p-g,t[2]=g*p-m,t[6]=a*f,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,fd)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Wn.crossVectors(n,Xt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Wn.crossVectors(n,Xt)),Wn.normalize(),Ds.crossVectors(Xt,Wn),s[0]=Wn.x,s[4]=Ds.x,s[8]=Xt.x,s[1]=Wn.y,s[5]=Ds.y,s[9]=Xt.y,s[2]=Wn.z,s[6]=Ds.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],p=n[5],u=n[9],m=n[13],g=n[2],_=n[6],d=n[10],h=n[14],M=n[3],E=n[7],y=n[11],w=n[15],T=s[0],R=s[4],v=s[8],b=s[12],C=s[1],L=s[5],U=s[9],O=s[13],D=s[2],z=s[6],X=s[10],W=s[14],ie=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=o*T+a*C+l*D+c*ie,r[4]=o*R+a*L+l*z+c*q,r[8]=o*v+a*U+l*X+c*Q,r[12]=o*b+a*O+l*W+c*te,r[1]=f*T+p*C+u*D+m*ie,r[5]=f*R+p*L+u*z+m*q,r[9]=f*v+p*U+u*X+m*Q,r[13]=f*b+p*O+u*W+m*te,r[2]=g*T+_*C+d*D+h*ie,r[6]=g*R+_*L+d*z+h*q,r[10]=g*v+_*U+d*X+h*Q,r[14]=g*b+_*O+d*W+h*te,r[3]=M*T+E*C+y*D+w*ie,r[7]=M*R+E*L+y*z+w*q,r[11]=M*v+E*U+y*X+w*Q,r[15]=M*b+E*O+y*W+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],u=e[10],m=e[14],g=e[3],_=e[7],d=e[11],h=e[15],M=l*m-c*u,E=a*m-c*p,y=a*u-l*p,w=o*m-c*f,T=o*u-l*f,R=o*p-a*f;return t*(_*M-d*E+h*y)-n*(g*M-d*w+h*T)+s*(g*E-_*w+h*R)-r*(g*y-_*T+d*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return t*(o*f-a*c)-n*(r*f-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],u=e[10],m=e[11],g=e[12],_=e[13],d=e[14],h=e[15],M=t*a-n*o,E=t*l-s*o,y=t*c-r*o,w=n*l-s*a,T=n*c-r*a,R=s*c-r*l,v=f*_-p*g,b=f*d-u*g,C=f*h-m*g,L=p*d-u*_,U=p*h-m*_,O=u*h-m*d,D=M*O-E*U+y*L+w*C-T*b+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(a*O-l*U+c*L)*z,e[1]=(s*U-n*O-r*L)*z,e[2]=(_*R-d*T+h*w)*z,e[3]=(u*T-p*R-m*w)*z,e[4]=(l*C-o*O-c*b)*z,e[5]=(t*O-s*C+r*b)*z,e[6]=(d*y-g*R-h*E)*z,e[7]=(f*R-u*y+m*E)*z,e[8]=(o*U-a*C+c*v)*z,e[9]=(n*C-t*U-r*v)*z,e[10]=(g*T-_*y+h*M)*z,e[11]=(p*y-f*T-m*M)*z,e[12]=(a*b-o*L-l*v)*z,e[13]=(t*L-n*b+s*v)*z,e[14]=(_*E-g*w-d*M)*z,e[15]=(f*w-p*E+u*M)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,f=o+o,p=a+a,u=r*c,m=r*f,g=r*p,_=o*f,d=o*p,h=a*p,M=l*c,E=l*f,y=l*p,w=n.x,T=n.y,R=n.z;return s[0]=(1-(_+h))*w,s[1]=(m+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(m-y)*T,s[5]=(1-(u+h))*T,s[6]=(d+M)*T,s[7]=0,s[8]=(g+E)*R,s[9]=(d-M)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),l=bi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),tn.copy(this);const c=1/o,f=1/a,p=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=p,tn.elements[9]*=p,tn.elements[10]*=p,t.setFromRotationMatrix(tn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=yn,l=!1){const c=this.elements,f=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ms)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=yn,l=!1){const c=this.elements,f=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ms)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yr.prototype.isMatrix4=!0;let ht=yr;const bi=new P,tn=new ht,dd=new P(0,0,0),fd=new P(1,1,1),Wn=new P,Ds=new P,Xt=new P,wl=new ht,Al=new Yi;class Jn{constructor(e=0,t=0,n=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pd=0;const Cl=new P,Ei=new Yi,Cn=new ht,Ns=new P,ji=new P,md=new P,gd=new Yi,Rl=new P(1,0,0),Pl=new P(0,1,0),Ll=new P(0,0,1),Il={type:"added"},_d={type:"removed"},Ti={type:"childadded",child:null},$r={type:"childremoved",child:null};class Lt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new P,t=new Jn,n=new Yi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Xe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ji,Ns,this.up):Cn.lookAt(Ns,ji,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xd={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),h=this._getHandJoint(c,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=rd(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kr(o,r,e+1/3),this.g=Kr(o,r,e),this.b=Kr(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return tt.workingToColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Gt){tt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Us);const n=Vr(Xn.h,Us.h,t),s=Vr(Xn.s,Us.s,t),r=Vr(Xn.l,Us.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ke;Ke.NAMES=ru;class vd extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new P,Rn=new P,Jr=new P,Pn=new P,wi=new P,Ai=new P,Dl=new P,Qr=new P,jr=new P,eo=new P,to=new Mt,no=new Mt,io=new Mt;class ln{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),Rn.subVectors(n,t),Jr.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Rn),l=nn.dot(Jr),c=Rn.dot(Rn),f=Rn.dot(Jr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(c*l-a*f)*u,g=(o*f-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(to,r.x),o.addScaledVector(no,r.y),o.addScaledVector(io,r.z),o}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),Rn.subVectors(e,t),nn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),nn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,n),Ai.subVectors(r,n),Qr.subVectors(e,n);const l=wi.dot(Qr),c=Ai.dot(Qr);if(l<=0&&c<=0)return t.copy(n);jr.subVectors(e,s);const f=wi.dot(jr),p=Ai.dot(jr);if(f>=0&&p<=f)return t.copy(s);const u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(wi,o);eo.subVectors(e,r);const m=wi.dot(eo),g=Ai.dot(eo);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ai,a);const d=f*g-m*p;if(d<=0&&p-f>=0&&m-g>=0)return Dl.subVectors(r,s),a=(p-f)/(p-f+(m-g)),t.copy(s).addScaledVector(Dl,a);const h=1/(d+_+u);return o=_*h,a=u*h,t.copy(n).addScaledVector(wi,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Os.subVectors(this.max,es),Ci.subVectors(e.a,es),Ri.subVectors(e.b,es),Pi.subVectors(e.c,es),qn.subVectors(Ri,Ci),Yn.subVectors(Pi,Ri),ii.subVectors(Ci,Pi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ii.z,ii.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ii.z,0,-ii.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ii.y,ii.x,0];return!so(t,Ci,Ri,Pi,Os)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Ci,Ri,Pi,Os))?!1:(Bs.crossVectors(qn,Yn),t=[Bs.x,Bs.y,Bs.z],so(t,Ci,Ri,Pi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new P,new P,new P,new P,new P,new P,new P,new P],sn=new P,Fs=new ei,Ci=new P,Ri=new P,Pi=new P,qn=new P,Yn=new P,ii=new P,es=new P,Os=new P,Bs=new P,si=new P;function so(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);const a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),f=n.dot(si);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const wt=new P,zs=new ae;let Md=0;class fn extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class au extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const yd=new ei,ts=new P,ro=new P;class Cs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(ro)),this.expandByPoint(ts.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sd=0;const Kt=new ht,oo=new Lt,Li=new P,qt=new ei,ns=new ei,Pt=new P;class Rt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?au:ou)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(qt.min,ns.min),qt.expandByPoint(Pt),Pt.addVectors(qt.max,ns.max),qt.expandByPoint(Pt)):(qt.expandByPoint(ns.min),qt.expandByPoint(ns.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Pt.add(Li)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new P,l[v]=new P;const c=new P,f=new P,p=new P,u=new ae,m=new ae,g=new ae,_=new P,d=new P;function h(v,b,C){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,b),p.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),f.sub(c),p.sub(c),m.sub(u),g.sub(u);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),d.copy(p).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(L),a[v].add(_),a[b].add(_),a[C].add(_),l[v].add(d),l[b].add(d),l[C].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,b=M.length;v<b;++v){const C=M[v],L=C.start,U=C.count;for(let O=L,D=L+U;O<D;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new P,y=new P,w=new P,T=new P;function R(v){w.fromBufferAttribute(s,v),T.copy(w);const b=a[v];E.copy(b),E.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(T,b);const L=y.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,L)}for(let v=0,b=M.length;v<b;++v){const C=M[v],L=C.start,U=C.count;for(let O=L,D=L+U;O<D;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,f=new P,p=new P;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),d=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),f.subVectors(o,r),p.subVectors(s,r),f.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,r),p.subVectors(s,r),f.cross(p),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,u=new c.constructor(l.length*f);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*f;for(let h=0;h<f;h++)u[g++]=c[m++]}return new fn(u,f,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,p=c.length;f<p;f++){const u=c[f],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],p=r[c];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new P,bd=new P,Ed=new Xe;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ao.subVectors(n,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ed.getNormalMatrix(e),s=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Td=0;class Rs extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ds,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new P,lo=new P,ks=new P,Gs=new P;class lu{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lo.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Gs.copy(this.origin).sub(lo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Gs.dot(this.direction),l=-Gs.dot(ks),c=Gs.lengthSq(),f=Math.abs(1-o*o);let p,u,m,g;if(f>0)if(p=o*l-a,u=o*a-l,g=r*f,p>=0)if(u>=-g)if(u<=g){const _=1/f;p*=_,u*=_,m=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lo).addScaledVector(ks,u),m}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,p=e.x-o.x,u=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,d=t.z-o.z,h=n.x-o.x,M=n.y-o.y,E=n.z-o.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(f);let R,v,b,C,L,U,O,D,z,X,W,ie;if(y>=w&&y>=T?(b=l,U=p,z=g,ie=h,l>=0?(R=c,v=f,C=u,L=m,O=_,D=d,X=M,W=E):(R=f,v=c,C=m,L=u,O=d,D=_,X=E,W=M)):w>=T?(b=c,U=u,z=_,ie=M,c>=0?(R=f,v=l,C=m,L=p,O=d,D=g,X=E,W=h):(R=l,v=f,C=p,L=m,O=g,D=d,X=h,W=E)):(b=f,U=m,z=d,ie=E,f>=0?(R=l,v=c,C=p,L=u,O=g,D=_,X=h,W=M):(R=c,v=l,C=u,L=p,O=_,D=g,X=M,W=h)),b===0)return null;const q=R/b,Q=v/b,te=1/b,Pe=C-q*U,Te=L-Q*U,at=O-q*z,Qe=D-Q*z,rt=X-q*ie,Z=W-Q*ie,j=rt*Qe-Z*at,_e=Pe*Z-Te*rt,Oe=at*Te-Qe*Pe;if(s){if(j<0||_e<0||Oe<0)return null}else if((j<0||_e<0||Oe<0)&&(j>0||_e>0||Oe>0))return null;const Se=j+_e+Oe;if(Se===0)return null;const ze=te*(j*U+_e*z+Oe*ie);return(Se>0?ze<0:ze>0)?null:this.at(ze/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gr extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nl=new ht,ri=new lu,Hs=new Cs,Ul=new P,Vs=new P,Ws=new P,Xs=new P,co=new P,qs=new P,Fl=new P,Ys=new P;class bt extends Lt{constructor(e=new Rt,t=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],p=r[l];f!==0&&(co.fromBufferAttribute(p,e),o?qs.addScaledVector(co,f):qs.addScaledVector(co.sub(t),f))}t.add(qs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Hs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Hs,Ul)===null||ri.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Nl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],h=o[d.materialIndex],M=Math.max(d.start,m.start),E=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let y=M,w=E;y<w;y+=3){const T=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=$s(this,h,e,n,c,f,p,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const M=a.getX(d),E=a.getX(d+1),y=a.getX(d+2);s=$s(this,o,e,n,c,f,p,M,E,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],h=o[d.materialIndex],M=Math.max(d.start,m.start),E=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let y=M,w=E;y<w;y+=3){const T=y,R=y+1,v=y+2;s=$s(this,h,e,n,c,f,p,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const M=d,E=d+1,y=d+2;s=$s(this,o,e,n,c,f,p,M,E,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function wd(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:i}}function $s(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);const f=wd(i,e,t,n,Vs,Ws,Xs,Fl);if(f){const p=new P;ln.getBarycoord(Fl,Vs,Ws,Xs,p),s&&(f.uv=ln.getInterpolatedAttribute(s,a,l,c,p,new ae)),r&&(f.uv1=ln.getInterpolatedAttribute(r,a,l,c,p,new ae)),o&&(f.normal=ln.getInterpolatedAttribute(o,a,l,c,p,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};ln.getNormal(Vs,Ws,Xs,u.normal),f.face=u,f.barycoord=p}return f}class cu extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,f=Dt,p,u){super(null,o,a,l,c,f,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends fn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new ht,Bl=new ht,Zs=[],zl=new ei,Ad=new ht,is=new bt,ss=new Cs;class Dn extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),zl.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),ss.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Bl.multiplyMatrices(n,Ii),is.matrixWorld=Bl,is.raycast(e,Zs);for(let o=0,a=Zs.length;o<a;o++){const l=Zs[o];l.instanceId=r,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cu(new Float32Array(s*this.count),s,this.count,Pa,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oi=new Cs,Cd=new ae(.5,.5),Ks=new P;class Ba{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],p=r[5],u=r[6],m=r[7],g=r[8],_=r[9],d=r[10],h=r[11],M=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,m-f,h-g,w-M).normalize(),s[1].setComponents(c+o,m+f,h+g,w+M).normalize(),s[2].setComponents(c+a,m+p,h+_,w+E).normalize(),s[3].setComponents(c-a,m-p,h-_,w-E).normalize(),n)s[4].setComponents(l,u,d,y).normalize(),s[5].setComponents(c-l,m-u,h-d,w-y).normalize();else if(s[4].setComponents(c-l,m-u,h-d,w-y).normalize(),t===yn)s[5].setComponents(c+l,m+u,h+d,w+y).normalize();else if(t===Ms)s[5].setComponents(l,u,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Cd.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ks.x=s.normal.x>0?e.max.x:e.min.x,Ks.y=s.normal.y>0?e.max.y:e.min.y,Ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uu extends Bt{constructor(e=[],t=pi,n,s,r,o,a,l,c,f){super(e,t,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ss extends Bt{constructor(e,t,n=En,s,r,o,a=Dt,l=Dt,c,f=kn,p=1){if(f!==kn&&f!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rd extends Ss{constructor(e,t=En,n=pi,s,r,o=Dt,a=Dt,l,c=kn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hu extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qn extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function g(_,d,h,M,E,y,w,T,R,v,b){const C=y/R,L=w/v,U=y/2,O=w/2,D=T/2,z=R+1,X=v+1;let W=0,ie=0;const q=new P;for(let Q=0;Q<X;Q++){const te=Q*L-O;for(let Pe=0;Pe<z;Pe++){const Te=Pe*C-U;q[_]=Te*M,q[d]=te*E,q[h]=D,c.push(q.x,q.y,q.z),q[_]=0,q[d]=0,q[h]=T>0?1:-1,f.push(q.x,q.y,q.z),p.push(Pe/R),p.push(1-Q/v),W+=1}}for(let Q=0;Q<v;Q++)for(let te=0;te<R;te++){const Pe=u+te+z*Q,Te=u+te+z*(Q+1),at=u+(te+1)+z*(Q+1),Qe=u+(te+1)+z*Q;l.push(Pe,Te,Qe),l.push(Te,at,Qe),ie+=6}a.addGroup(m,ie,b),m+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class za extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],f=t/2,p=Math.PI/2*e,u=t,m=2*p+u,g=n*2+r,_=s+1,d=new P,h=new P;for(let M=0;M<=g;M++){let E=0,y=0,w=0,T=0;if(M<=n){const b=M/n,C=b*Math.PI/2;y=-f-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),E=b*p}else if(M<=n+r){const b=(M-n)/r;y=-f+b*t,w=e,T=0,E=p+b*u}else{const b=(M-n-r)/n,C=b*Math.PI/2;y=f+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),E=p+u+b*p}const R=Math.max(0,Math.min(1,E/m));let v=0;M===0?v=.5/s:M===g&&(v=-.5/s);for(let b=0;b<=s;b++){const C=b/s,L=C*Math.PI*2,U=Math.sin(L),O=Math.cos(L);h.x=-w*O,h.y=y,h.z=w*U,a.push(h.x,h.y,h.z),d.set(-w*O,T,w*U),d.normalize(),l.push(d.x,d.y,d.z),c.push(C+v,R)}if(M>0){const b=(M-1)*_;for(let C=0;C<s;C++){const L=b+C,U=b+C+1,O=M*_+C,D=M*_+C+1;o.push(L,U,O),o.push(U,D,O)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Bn extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],p=[],u=[],m=[];let g=0;const _=[],d=n/2;let h=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function M(){const y=new P,w=new P;let T=0;const R=(t-e)/n;for(let v=0;v<=r;v++){const b=[],C=v/r,L=C*(t-e)+e;for(let U=0;U<=s;U++){const O=U/s,D=O*l+a,z=Math.sin(D),X=Math.cos(D);w.x=L*z,w.y=-C*n+d,w.z=L*X,p.push(w.x,w.y,w.z),y.set(z,R,X).normalize(),u.push(y.x,y.y,y.z),m.push(O,1-C),b.push(g++)}_.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){const C=_[b][v],L=_[b+1][v],U=_[b+1][v+1],O=_[b][v+1];(e>0||b!==0)&&(f.push(C,L,O),T+=3),(t>0||b!==r-1)&&(f.push(L,U,O),T+=3)}c.addGroup(h,T,0),h+=T}function E(y){const w=g,T=new ae,R=new P;let v=0;const b=y===!0?e:t,C=y===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,d*C,0),u.push(0,C,0),m.push(.5,.5),g++;const L=g;for(let U=0;U<=s;U++){const D=U/s*l+a,z=Math.cos(D),X=Math.sin(D);R.x=b*X,R.y=d*C,R.z=b*z,p.push(R.x,R.y,R.z),u.push(0,C,0),T.x=z*.5+.5,T.y=X*.5*C+.5,m.push(T.x,T.y),g++}for(let U=0;U<s;U++){const O=w+U,D=L+U;y===!0?f.push(D,D+1,O):f.push(D+1,D,O),v+=3}c.addGroup(h,v,y===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ka extends Bn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new P,y=new P,w=new P;for(let T=0;T<t.length;T+=3)m(t[T+0],E),m(t[T+1],y),m(t[T+2],w),l(E,y,w,M)}function l(M,E,y,w){const T=w+1,R=[];for(let v=0;v<=T;v++){R[v]=[];const b=M.clone().lerp(y,v/T),C=E.clone().lerp(y,v/T),L=T-v;for(let U=0;U<=L;U++)U===0&&v===T?R[v][U]=b:R[v][U]=b.clone().lerp(C,U/L)}for(let v=0;v<T;v++)for(let b=0;b<2*(T-v)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[v][C+1]),u(R[v+1][C]),u(R[v][C])):(u(R[v][C+1]),u(R[v+1][C+1]),u(R[v+1][C]))}}function c(M){const E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(M),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function f(){const M=new P;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const y=d(M)/2/Math.PI+.5,w=h(M)/Math.PI+.5;o.push(y,1-w)}g(),p()}function p(){for(let M=0;M<o.length;M+=6){const E=o[M+0],y=o[M+2],w=o[M+4],T=Math.max(E,y,w),R=Math.min(E,y,w);T>.9&&R<.1&&(E<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,E){const y=M*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){const M=new P,E=new P,y=new P,w=new P,T=new ae,R=new ae,v=new ae;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),v.set(o[C+4],o[C+5]),w.copy(M).add(E).add(y).divideScalar(3);const L=d(w);_(T,C+0,M,L),_(R,C+2,E,L),_(v,C+4,y,L)}}function _(M,E,y,w){w<0&&M.x===1&&(o[E]=M.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.vertices,e.indices,e.radius,e.detail)}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const f=n[s],u=n[s+1]-f,m=(o-f)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new ht;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Je(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ga extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*f-m*p+this.aX,c=u*p+m*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pd extends Ga{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ha(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,p){let u=(o-r)/c-(a-r)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+p)+(l-a)/p;u*=f,m*=f,s(o,a,u,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const kl=new P,Gl=new P,uo=new Ha,ho=new Ha,fo=new Ha;class _r extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Gl.subVectors(s[0],s[1]).add(s[0]),c=Gl);const p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(kl.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=kl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(u),m),d=Math.pow(u.distanceToSquared(f),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),uo.initNonuniformCatmullRom(c.x,p.x,u.x,f.x,g,_,d),ho.initNonuniformCatmullRom(c.y,p.y,u.y,f.y,g,_,d),fo.initNonuniformCatmullRom(c.z,p.z,u.z,f.z,g,_,d)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,p.x,u.x,f.x,this.tension),ho.initCatmullRom(c.y,p.y,u.y,f.y,this.tension),fo.initCatmullRom(c.z,p.z,u.z,f.z,this.tension));return n.set(uo.calc(l),ho.calc(l),fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ld(i,e){const t=1-i;return t*t*e}function Id(i,e){return 2*(1-i)*i*e}function Dd(i,e){return i*i*e}function fs(i,e,t,n){return Ld(i,e)+Id(i,t)+Dd(i,n)}function Nd(i,e){const t=1-i;return t*t*t*e}function Ud(i,e){const t=1-i;return 3*t*t*i*e}function Fd(i,e){return 3*(1-i)*i*i*e}function Od(i,e){return i*i*i*e}function ps(i,e,t,n,s){return Nd(i,e)+Ud(i,t)+Fd(i,n)+Od(i,s)}class du extends An{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bd extends An{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y),ps(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fu extends An{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends An{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends An{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends An{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y),fs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Hl(a,l.x,c.x,f.x,p.x),Hl(a,l.y,c.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var xr=Object.freeze({__proto__:null,ArcCurve:Pd,CatmullRomCurve3:_r,CubicBezierCurve:du,CubicBezierCurve3:Bd,EllipseCurve:Ga,LineCurve:fu,LineCurve3:zd,QuadraticBezierCurve:pu,QuadraticBezierCurve3:mu,SplineCurve:gu});class kd extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new xr[s.type]().fromJSON(s))}return this}}class da extends kd{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fu(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new pu(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new du(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Ga(e,t,n,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vr extends da{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new da().fromJSON(s))}return this}}function Gd(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=_u(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=qd(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let f=a,p=l;for(let u=t;u<s;u+=t){const m=i[u],g=i[u+1];m<a&&(a=m),g<l&&(l=g),m>f&&(f=m),g>p&&(p=g)}c=Math.max(f-a,p-l),c=c!==0?32767/c:0}return bs(r,o,t,a,l,c,0),o}function _u(i,e,t,n,s){let r;if(s===sf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Vl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Vl(o/n|0,i[o],i[o+1],r);return r&&Wi(r,r.next)&&(Ts(r),r=r.next),r}function gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wi(t,t.next)||yt(t.prev,t,t.next)===0)){if(Ts(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Vd(i,n,s,r):Hd(i)){e.push(l.i,i.i,c.i),Ts(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wd(gi(i),e),bs(i,e,t,n,s,r,2)):o===2&&Xd(i,e,t,n,s,r):bs(gi(i),e,t,n,s,r,1);break}}}function Hd(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,f=Math.min(s,r,o),p=Math.min(a,l,c),u=Math.max(s,r,o),m=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=f&&g.x<=u&&g.y>=p&&g.y<=m&&cs(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vd(i,e,t,n){const s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,f=s.y,p=r.y,u=o.y,m=Math.min(a,l,c),g=Math.min(f,p,u),_=Math.max(a,l,c),d=Math.max(f,p,u),h=fa(m,g,e,t,n),M=fa(_,d,e,t,n);let E=i.prevZ,y=i.nextZ;for(;E&&E.z>=h&&y&&y.z<=M;){if(E.x>=m&&E.x<=_&&E.y>=g&&E.y<=d&&E!==s&&E!==o&&cs(a,f,l,p,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=m&&y.x<=_&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&cs(a,f,l,p,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=h;){if(E.x>=m&&E.x<=_&&E.y>=g&&E.y<=d&&E!==s&&E!==o&&cs(a,f,l,p,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=M;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&cs(a,f,l,p,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Wi(n,s)&&vu(n,t,t.next,s)&&Es(n,s)&&Es(s,n)&&(e.push(n.i,t.i,s.i),Ts(t),Ts(t.next),t=i=s),t=t.next}while(t!==i);return gi(t)}function Xd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ef(o,a)){let l=Mu(o,a);o=gi(o,o.next),l=gi(l,l.next),bs(o,e,t,n,s,r,0),bs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qd(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=_u(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(jd(c))}s.sort(Yd);for(let r=0;r<s.length;r++)t=$d(s[r],t);return t}function Yd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $d(i,e){const t=Zd(i,e);if(!t)return e;const n=Mu(t,i);return gi(n,n.next),gi(t,t.next)}function Zd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Wi(i,t))return t;do{if(Wi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&xu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const p=Math.abs(s-t.y)/(n-t.x);Es(t,i)&&(p<f||p===f&&(t.x>o.x||t.x===o.x&&Kd(o,t)))&&(o=t,f=p)}t=t.next}while(t!==a);return o}function Kd(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Jd(i,e,t,n){let s=i;do s.z===0&&(s.z=fa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qd(s)}function Qd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function fa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function cs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&xu(i,e,t,n,s,r,o,a)}function ef(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tf(i,e)&&(Es(i,e)&&Es(e,i)&&nf(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Wi(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wi(i,e){return i.x===e.x&&i.y===e.y}function vu(i,e,t,n){const s=Qs(yt(i,e,t)),r=Qs(yt(i,e,n)),o=Qs(yt(t,n,i)),a=Qs(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Js(i,t,e)||r===0&&Js(i,n,e)||o===0&&Js(t,i,n)||a===0&&Js(t,e,n))}function Js(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qs(i){return i>0?1:i<0?-1:0}function tf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Es(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function nf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mu(i,e){const t=pa(i.i,i.x,i.y),n=pa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vl(i,e,t,n){const s=pa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class rf{static triangulate(e,t,n=2){return Gd(e,t,n)}}class zi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wl(e),Xl(n,e);let o=e.length;t.forEach(Wl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Xl(n,t[l]);const a=rf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ws extends Rt{constructor(e=new vr([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:of;let E,y=!1,w,T,R,v;if(h){E=h.getSpacedPoints(f),y=!0,u=!1;const ee=h.isCatmullRomCurve3?h.closed:!1;w=h.computeFrenetFrames(f,ee),T=new P,R=new P,v=new P}u||(d=0,m=0,g=0,_=0);const b=a.extractPoints(c);let C=b.shape;const L=b.holes;if(!zi.isClockWise(C)){C=C.reverse();for(let ee=0,se=L.length;ee<se;ee++){const re=L[ee];zi.isClockWise(re)&&(L[ee]=re.reverse())}}function O(ee){const re=10000000000000001e-36;let oe=ee[0];for(let ue=1;ue<=ee.length;ue++){const Ue=ue%ee.length,Ne=ee[Ue],ke=Ne.x-oe.x,We=Ne.y-oe.y,I=ke*ke+We*We,lt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(oe.x),Math.abs(oe.y)),je=re*lt*lt;if(I<=je){ee.splice(Ue,1),ue--;continue}oe=Ne}}O(C),L.forEach(O);const D=L.length,z=C;for(let ee=0;ee<D;ee++){const se=L[ee];C=C.concat(se)}function X(ee,se,re){return se||it("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,re)}const W=C.length;function ie(ee,se,re){let oe,ue,Ue;const Ne=ee.x-se.x,ke=ee.y-se.y,We=re.x-ee.x,I=re.y-ee.y,lt=Ne*Ne+ke*ke,je=Ne*I-ke*We;if(Math.abs(je)>Number.EPSILON){const A=Math.sqrt(lt),x=Math.sqrt(We*We+I*I),B=se.x-ke/A,H=se.y+Ne/A,Y=re.x-I/x,le=re.y+We/x,ce=((Y-B)*I-(le-H)*We)/(Ne*I-ke*We);oe=B+Ne*ce-ee.x,ue=H+ke*ce-ee.y;const $=oe*oe+ue*ue;if($<=2)return new ae(oe,ue);Ue=Math.sqrt($/2)}else{let A=!1;Ne>Number.EPSILON?We>Number.EPSILON&&(A=!0):Ne<-Number.EPSILON?We<-Number.EPSILON&&(A=!0):Math.sign(ke)===Math.sign(I)&&(A=!0),A?(oe=-ke,ue=Ne,Ue=Math.sqrt(lt)):(oe=Ne,ue=ke,Ue=Math.sqrt(lt/2))}return new ae(oe/Ue,ue/Ue)}const q=[];for(let ee=0,se=z.length,re=se-1,oe=ee+1;ee<se;ee++,re++,oe++)re===se&&(re=0),oe===se&&(oe=0),q[ee]=ie(z[ee],z[re],z[oe]);const Q=[];let te,Pe=q.concat();for(let ee=0,se=D;ee<se;ee++){const re=L[ee];te=[];for(let oe=0,ue=re.length,Ue=ue-1,Ne=oe+1;oe<ue;oe++,Ue++,Ne++)Ue===ue&&(Ue=0),Ne===ue&&(Ne=0),te[oe]=ie(re[oe],re[Ue],re[Ne]);Q.push(te),Pe=Pe.concat(te)}let Te;if(d===0)Te=zi.triangulateShape(z,L);else{const ee=[],se=[];for(let re=0;re<d;re++){const oe=re/d,ue=m*Math.cos(oe*Math.PI/2),Ue=g*Math.sin(oe*Math.PI/2)+_;for(let Ne=0,ke=z.length;Ne<ke;Ne++){const We=X(z[Ne],q[Ne],Ue);_e(We.x,We.y,-ue),oe===0&&ee.push(We)}for(let Ne=0,ke=D;Ne<ke;Ne++){const We=L[Ne];te=Q[Ne];const I=[];for(let lt=0,je=We.length;lt<je;lt++){const A=X(We[lt],te[lt],Ue);_e(A.x,A.y,-ue),oe===0&&I.push(A)}oe===0&&se.push(I)}}Te=zi.triangulateShape(ee,se)}const at=Te.length,Qe=g+_;for(let ee=0;ee<W;ee++){const se=u?X(C[ee],Pe[ee],Qe):C[ee];y?(R.copy(w.normals[0]).multiplyScalar(se.x),T.copy(w.binormals[0]).multiplyScalar(se.y),v.copy(E[0]).add(R).add(T),_e(v.x,v.y,v.z)):_e(se.x,se.y,0)}for(let ee=1;ee<=f;ee++)for(let se=0;se<W;se++){const re=u?X(C[se],Pe[se],Qe):C[se];y?(R.copy(w.normals[ee]).multiplyScalar(re.x),T.copy(w.binormals[ee]).multiplyScalar(re.y),v.copy(E[ee]).add(R).add(T),_e(v.x,v.y,v.z)):_e(re.x,re.y,p/f*ee)}for(let ee=d-1;ee>=0;ee--){const se=ee/d,re=m*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+_;for(let ue=0,Ue=z.length;ue<Ue;ue++){const Ne=X(z[ue],q[ue],oe);_e(Ne.x,Ne.y,p+re)}for(let ue=0,Ue=L.length;ue<Ue;ue++){const Ne=L[ue];te=Q[ue];for(let ke=0,We=Ne.length;ke<We;ke++){const I=X(Ne[ke],te[ke],oe);y?_e(I.x,I.y+E[f-1].y,E[f-1].x+re):_e(I.x,I.y,p+re)}}}rt(),Z();function rt(){const ee=s.length/3;if(u){let se=0,re=W*se;for(let oe=0;oe<at;oe++){const ue=Te[oe];Oe(ue[2]+re,ue[1]+re,ue[0]+re)}se=f+d*2,re=W*se;for(let oe=0;oe<at;oe++){const ue=Te[oe];Oe(ue[0]+re,ue[1]+re,ue[2]+re)}}else{for(let se=0;se<at;se++){const re=Te[se];Oe(re[2],re[1],re[0])}for(let se=0;se<at;se++){const re=Te[se];Oe(re[0]+W*f,re[1]+W*f,re[2]+W*f)}}n.addGroup(ee,s.length/3-ee,0)}function Z(){const ee=s.length/3;let se=0;j(z,se),se+=z.length;for(let re=0,oe=L.length;re<oe;re++){const ue=L[re];j(ue,se),se+=ue.length}n.addGroup(ee,s.length/3-ee,1)}function j(ee,se){let re=ee.length;for(;--re>=0;){const oe=re;let ue=re-1;ue<0&&(ue=ee.length-1);for(let Ue=0,Ne=f+d*2;Ue<Ne;Ue++){const ke=W*Ue,We=W*(Ue+1),I=se+oe+ke,lt=se+ue+ke,je=se+ue+We,A=se+oe+We;Se(I,lt,je,A)}}}function _e(ee,se,re){l.push(ee),l.push(se),l.push(re)}function Oe(ee,se,re){ze(ee),ze(se),ze(re);const oe=s.length/3,ue=M.generateTopUV(n,s,oe-3,oe-2,oe-1);dt(ue[0]),dt(ue[1]),dt(ue[2])}function Se(ee,se,re,oe){ze(ee),ze(se),ze(oe),ze(se),ze(re),ze(oe);const ue=s.length/3,Ue=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);dt(Ue[0]),dt(Ue[1]),dt(Ue[3]),dt(Ue[1]),dt(Ue[2]),dt(Ue[3])}function ze(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function dt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return af(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xr[s.type]().fromJSON(s)),new ws(n,e.options)}}const of={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],f=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,f)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],p=e[n*3+2],u=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],d=e[r*3+1],h=e[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-p),new ae(u,1-g),new ae(_,1-h)]:[new ae(a,1-l),new ae(f,1-p),new ae(m,1-g),new ae(d,1-h)]}};function af(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ms extends Er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class Va extends Rt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],f=1/t,p=new P,u=new ae,m=new P,g=new P,_=new P;let d=0,h=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:d=e[M+1].x-e[M].x,h=e[M+1].y-e[M].y,m.x=h*1,m.y=-d,m.z=h*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:d=e[M+1].x-e[M].x,h=e[M+1].y-e[M].y,m.x=h*1,m.y=-d,m.z=h*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=t;M++){const E=n+M*f*s,y=Math.sin(E),w=Math.cos(E);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*y,p.y=e[T].y,p.z=e[T].x*w,o.push(p.x,p.y,p.z),u.x=M/t,u.y=T/(e.length-1),a.push(u.x,u.y);const R=l[3*T+0]*y,v=l[3*T+1],b=l[3*T+0]*w;c.push(R,v,b)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){const y=E+M*e.length,w=y,T=y+e.length,R=y+e.length+1,v=y+1;r.push(w,T,v),r.push(R,v,T)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.points,e.segments,e.phiStart,e.phiLength)}}class Wa extends Er{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wa(e.radius,e.detail)}}class Tr extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,p=e/a,u=t/l,m=[],g=[],_=[],d=[];for(let h=0;h<f;h++){const M=h*u-o;for(let E=0;E<c;E++){const y=E*p-r;g.push(y,-M,0),_.push(0,0,1),d.push(E/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const E=M+c*h,y=M+c*(h+1),w=M+1+c*(h+1),T=M+1+c*h;m.push(E,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xa extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],f=[];let p=e;const u=(t-e)/s,m=new P,g=new ae;for(let _=0;_<=s;_++){for(let d=0;d<=n;d++){const h=r+d/n*o;m.x=p*Math.cos(h),m.y=p*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,f.push(g.x,g.y)}p+=u}for(let _=0;_<s;_++){const d=_*(n+1);for(let h=0;h<n;h++){const M=h+d,E=M,y=M+n+1,w=M+n+2,T=M+1;a.push(E,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ui extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new P,u=new P,m=[],g=[],_=[],d=[];for(let h=0;h<=n;h++){const M=[],E=h/n,y=o+E*a,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w);let R=0;h===0&&o===0?R=.5/t:h===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const b=v/t,C=s+b*r;p.x=-T*Math.cos(C),p.y=w,p.z=T*Math.sin(C),g.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),d.push(b+R,1-E),M.push(c++)}f.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const E=f[h][M+1],y=f[h][M],w=f[h+1][M],T=f[h+1][M+1];(h!==0||o>0)&&m.push(E,y,T),(h!==n-1||l<Math.PI)&&m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wr extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],f=[],p=[],u=new P,m=new P,g=new P;for(let _=0;_<=n;_++){const d=o+_/n*a;for(let h=0;h<=s;h++){const M=h/s*r;m.x=(e+t*Math.cos(d))*Math.cos(M),m.y=(e+t*Math.cos(d))*Math.sin(M),m.z=t*Math.sin(d),c.push(m.x,m.y,m.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(m,u).normalize(),f.push(g.x,g.y,g.z),p.push(h/s),p.push(_/n)}}for(let _=1;_<=n;_++)for(let d=1;d<=s;d++){const h=(s+1)*_+d-1,M=(s+1)*(_-1)+d-1,E=(s+1)*(_-1)+d,y=(s+1)*_+d;l.push(h,M,y),l.push(M,E,y)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class As extends Rt{constructor(e=new mu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ae;let f=new P;const p=[],u=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function _(){for(let E=0;E<t;E++)d(E);d(r===!1?t:0),M(),h()}function d(E){f=e.getPointAt(E/t,f);const y=o.normals[E],w=o.binormals[E];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,v=Math.sin(R),b=-Math.cos(R);l.x=b*y.x+v*w.x,l.y=b*y.y+v*w.y,l.z=b*y.z+v*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=f.x+n*l.x,a.y=f.y+n*l.y,a.z=f.z+n*l.z,p.push(a.x,a.y,a.z)}}function h(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){const w=(s+1)*(E-1)+(y-1),T=(s+1)*E+(y-1),R=(s+1)*E+y,v=(s+1)*(E-1)+y;g.push(w,T,v),g.push(T,R,v)}}function M(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new As(new xr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(ql(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ql(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Xi(i[t]);for(const s in n)e[s]=n[s]}return e}function ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const cf={clone:Xi,merge:kt};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class df extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ma extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ff extends ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pf extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mf extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const po={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gf{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){const p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){const m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _f=new gf;class qa{constructor(e){this.manager=e!==void 0?e:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di=new WeakMap;class xf extends qa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=po.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=Di.get(o);p===void 0&&(p=[],Di.set(o,p)),p.push({onLoad:t,onError:s})}return o}const a=ys("img");function l(){f(),t&&t(this);const p=Di.get(this)||[];for(let u=0;u<p.length;u++){const m=p[u];m.onLoad&&m.onLoad(this)}Di.delete(this),r.manager.itemEnd(e)}function c(p){f(),s&&s(p),po.remove(`image:${e}`);const u=Di.get(this)||[];for(let m=0;m<u.length;m++){const g=u[m];g.onError&&g.onError(p)}Di.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),po.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class $l extends qa{constructor(e){super(e)}load(e,t,n,s){const r=new Bt,o=new xf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Su extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class vf extends Su{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mo=new ht,Zl=new P,Kl=new P;class Mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ms||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const js=new P,er=new Yi,gn=new P;class bu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(js,er,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,er,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(js,er,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,er,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new P,Jl=new ae,Ql=new ae;class an extends bu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ar extends bu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yf extends Mf{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jl extends Su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new yf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ni=-90,Ui=1;class Sf extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ni,Ui,e,t);s.layers=this.layers,this.add(s);const r=new an(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const o=new an(Ni,Ui,e,t);o.layers=this.layers,this.add(o);const a=new an(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const l=new an(Ni,Ui,e,t);l.layers=this.layers,this.add(l);const c=new an(Ni,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bf extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ec=new ht;class Ef{constructor(e,t,n=0,s=1/0){this.ray=new lu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ec.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ec),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(tc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ga(e[s],this,n,t);return n.sort(tc),n}}function tc(i,e){return i.distance-e.distance}function ga(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ga(r[o],e,t,!0)}}const il=class il{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};il.prototype.isMatrix2=!0;let nc=il;function ic(i,e,t,n){const s=Tf(n);switch(t){case tu:return i*e;case Pa:return i*e/s.components*s.byteLength;case La:return i*e/s.components*s.byteLength;case mi:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case nu:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Da:return i*e*4/s.components*s.byteLength;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(i,16)*Math.max(e,8)/4;case No:case Fo:return Math.max(i,8)*Math.max(e,8)/2;case Bo:case zo:case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case dr:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sa:case ra:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case aa:case la:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fr:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tf(i){switch(i){case Yt:case Jc:return{byteLength:1,components:1};case xs:case Qc:case Tn:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case En:case Aa:case un:return{byteLength:4,components:1};case jc:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wf(i){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const f=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,f);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,p[u]=_)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const _=p[m];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,Tp=`uniform sampler2D dfgLUT;
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
}`,wp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,em=`#define TOON
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
}`,tm=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,rm=`uniform float rotation;
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
}`,om=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Af,alphahash_pars_fragment:Cf,alphamap_fragment:Rf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:If,aomap_fragment:Df,aomap_pars_fragment:Nf,batching_pars_vertex:Uf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:Zf,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:jf,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:up,fog_pars_vertex:hp,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:xp,lights_toon_fragment:Mp,lights_toon_pars_fragment:yp,lights_phong_fragment:Sp,lights_phong_pars_fragment:bp,lights_physical_fragment:Ep,lights_physical_pars_fragment:Tp,lights_fragment_begin:wp,lights_fragment_maps:Ap,lights_fragment_end:Cp,lightprobes_pars_fragment:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Dp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:kp,morphcolor_vertex:Gp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:$p,normal_vertex:Zp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:y0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:T0,worldpos_vertex:w0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:I0,depth_vert:D0,depth_frag:N0,distance_vert:U0,distance_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:G0,meshbasic_frag:H0,meshlambert_vert:V0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:K0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:rm,sprite_frag:om},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},vn={basic:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:kt([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:kt([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:kt([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:kt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:kt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};vn.physical={uniforms:kt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const tr={r:0,b:0,g:0},am=new ht,Tu=new Xe;Tu.set(-1,0,0,0,1,0,0,0,1);function lm(i,e,t,n,s,r){const o=new Ke(0);let a=s===!0?0:1,l,c,f=null,p=0,u=null;function m(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(M){let E=!1;const y=m(M);y===null?d(o,a):y&&y.isColor&&(d(y,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){const y=m(E);y&&(y.isCubeTexture||y.mapping===br)?(c===void 0&&(c=new bt(new Qn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Xi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tu),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ft,(f!==y||p!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bt(new Tr(2,2),new wn({name:"BackgroundMaterial",uniforms:Xi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,E){M.getRGB(tr,yu(i)),t.buffers.color.setClear(tr.r,tr.g,tr.b,E,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,d(o,a)},render:g,addToRenderList:_,dispose:h}}function cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(L,U,O,D,z){let X=!1;const W=p(L,D,O,U);r!==W&&(r=W,c(r.object)),X=m(L,D,O,z),X&&g(L,D,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(L,U,O,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function f(L){return i.deleteVertexArray(L)}function p(L,U,O,D){const z=D.wireframe===!0;let X=n[U.id];X===void 0&&(X={},n[U.id]=X);const W=L.isInstancedMesh===!0?L.id:0;let ie=X[W];ie===void 0&&(ie={},X[W]=ie);let q=ie[O.id];q===void 0&&(q={},ie[O.id]=q);let Q=q[z];return Q===void 0&&(Q=u(l()),q[z]=Q),Q}function u(L){const U=[],O=[],D=[];for(let z=0;z<t;z++)U[z]=0,O[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function m(L,U,O,D){const z=r.attributes,X=U.attributes;let W=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){const te=z[q];let Pe=X[q];if(Pe===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),te===void 0||te.attribute!==Pe||Pe&&te.data!==Pe.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(L,U,O,D){const z={},X=U.attributes;let W=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){let te=X[q];te===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Pe={};Pe.attribute=te,te&&te.data&&(Pe.data=te.data),z[q]=Pe,W++}r.attributes=z,r.attributesNum=W,r.index=D}function _(){const L=r.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function d(L){h(L,0)}function h(L,U){const O=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;O[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),z[L]!==U&&(i.vertexAttribDivisor(L,U),z[L]=U)}function M(){const L=r.newAttributes,U=r.enabledAttributes;for(let O=0,D=U.length;O<D;O++)U[O]!==L[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function E(L,U,O,D,z,X,W){W===!0?i.vertexAttribIPointer(L,U,O,z,X):i.vertexAttribPointer(L,U,O,D,z,X)}function y(L,U,O,D){_();const z=D.attributes,X=O.getAttributes(),W=U.defaultAttributeValues;for(const ie in X){const q=X[ie];if(q.location>=0){let Q=z[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,Pe=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const at=Te.buffer,Qe=Te.type,rt=Te.bytesPerElement,Z=Qe===i.INT||Qe===i.UNSIGNED_INT||Q.gpuType===Aa;if(Q.isInterleavedBufferAttribute){const j=Q.data,_e=j.stride,Oe=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)h(q.location+Se,j.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<q.locationSize;Se++)d(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Se=0;Se<q.locationSize;Se++)E(q.location+Se,Pe/q.locationSize,Qe,te,_e*rt,(Oe+Pe/q.locationSize*Se)*rt,Z)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)h(q.location+j,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<q.locationSize;j++)d(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,at);for(let j=0;j<q.locationSize;j++)E(q.location+j,Pe/q.locationSize,Qe,te,Pe*rt,Pe/q.locationSize*j*rt,Z)}}else if(W!==void 0){const te=W[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}M()}function w(){b();for(const L in n){const U=n[L];for(const O in U){const D=U[O];for(const z in D){const X=D[z];for(const W in X)f(X[W].object),delete X[W];delete D[z]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const O in U){const D=U[O];for(const z in D){const X=D[z];for(const W in X)f(X[W].object),delete X[W];delete D[z]}}delete n[L.id]}function R(L){for(const U in n){const O=n[U];for(const D in O){const z=O[D];if(z[L.id]===void 0)continue;const X=z[L.id];for(const W in X)f(X[W].object),delete X[W];delete z[L.id]}}}function v(L){for(const U in n){const O=n[U],D=L.isInstancedMesh===!0?L.id:0,z=O[D];if(z!==void 0){for(const X in z){const W=z[X];for(const ie in W)f(W[ie].object),delete W[ie];delete z[X]}delete O[D],Object.keys(O).length===0&&delete n[U]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function um(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&R!==un&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(He("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function dm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Nn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=f(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,h=i.get(p);if(!s||g===null||g.length===0||r&&!d)r?f(null):c();else{const M=r?0:n,E=M*4;let y=h.clippingState||null;l.value=y,y=f(g,u,E,m);for(let w=0;w!==E;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,u,m,g){const _=p!==null?p.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const h=m+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<h)&&(d=new Float32Array(h));for(let E=0,y=m;E!==_;++E,y+=4)o.copy(p[E]).applyMatrix4(M,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}const ki=4,fm=6,pm=20,mm=256,rs=new Ar,sc=new Ke;let go=null,_o=0,xo=0,vo=!1;const gm=new P,ai=new P;class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=gm}=r;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=vo,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Tn,format:hn,colorSpace:pr,depthBuffer:!1},s=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_m(r)),this._blurMaterial=vm(r,e,t),this._ggxMaterial=xm(r,e,t)}return s}_compileMaterial(e){const t=new bt(new Rt,e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,s,r){const l=new an(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(sc),p.toneMapping=bn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Qn,new gr({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,d=_.material;let h=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,h=!0):(d.color.copy(sc),h=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[E]));const w=this._cubeSize;Fi(s,y*w,E>2?w:0,w,w),p.setRenderTarget(s),h&&p.render(_,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===pi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Fi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,m=p*u,{_lodMax:g}=this,_=this._sizeLods[n],d=3*_*(n>g-ki?n-g+ki:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Fi(r,d,h,3*_,2*_),s.setRenderTarget(r),s.render(a,rs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Fi(e,d,h,3*_,2*_),s.setRenderTarget(e),s.render(a,rs)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[s],p=3*f*(s>this._lodMax-ki?s-this._lodMax+ki:0),u=4*(this._cubeSize-f);Fi(t,p,u,3*f,2*f),o.setRenderTarget(t),o.render(l,rs)}}function _m(i){const e=[],t=[];let n=i;const s=i-ki+1+fm;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),_=new Float32Array(m*u*p);for(let h=0;h<p;h++){const M=h%3*2/3-1,E=h>2?0:-1,y=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(y,m*u*h);for(let w=0;w<u;w++){const T=f[w*2]*2-1,R=f[w*2+1]*2-1;h===0?ai.set(1,R,T):h===1?ai.set(-T,1,-R):h===2?ai.set(-T,R,1):h===3?ai.set(-1,R,-T):h===4?ai.set(-T,-1,R):ai.set(T,R,-1),ai.toArray(_,(h*u+w)*m)}}const d=new Rt;d.setAttribute("position",new fn(g,m)),d.setAttribute("outputDirection",new fn(_,m)),t.push(new bt(d,null)),n>ki&&n--}return{lodMeshes:t,sizeLods:e}}function oc(i,e,t){const n=new dn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xm(i,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function vm(i,e,t){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:pm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ac(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function lc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Cr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wu extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Fn});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Ot),new Sf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function Mm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Br||m===zr)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new wu(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,g=m===Br||m===zr,_=m===pi||m===Vi;if(g||_){let d=t.get(u);const h=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new rc(i)),d=g?n.fromEquirectangular(u,d):n.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),d.texture;if(d!==void 0)return d.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new rc(i)),d=g?n.fromEquirectangular(u):n.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),u.addEventListener("dispose",f),d.texture):null}}}return u}function a(u,m){return m===Br?u.mapping=pi:m===zr&&(u.mapping=Vi),u}function l(u){let m=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function ym(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Gi("WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,e,t,n){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,g=p.attributes.position;let _=0;if(g===void 0)return;if(m!==null){const M=m.array;_=m.version;for(let E=0,y=M.length;E<y;E+=3){const w=M[E+0],T=M[E+1],R=M[E+2];u.push(w,T,T,R,R,w)}}else{const M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const w=E+0,T=E+1,R=E+2;u.push(w,T,T,R,R,w)}}const d=new(g.count>=65535?au:ou)(u,1);d.version=_;const h=r.get(p);h&&e.remove(h),r.set(p,d)}function f(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function bm(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*o),t.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*o,m),t.update(u,n,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let _=0;for(let d=0;d<m;d++)_+=u[d];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tm(i,e,t){const n=new WeakMap,s=new Mt;function r(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let u=n.get(a);if(u===void 0||u.count!==p){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*w*4*p),R=new su(T,y,w,p);R.type=un,R.needsUpdate=!0;const v=E*4;for(let C=0;C<p;C++){const L=d[C],U=h[C],O=M[C],D=y*w*4*C;for(let z=0;z<L.count;z++){const X=z*v;m===!0&&(s.fromBufferAttribute(L,z),T[D+X+0]=s.x,T[D+X+1]=s.y,T[D+X+2]=s.z,T[D+X+3]=0),g===!0&&(s.fromBufferAttribute(U,z),T[D+X+4]=s.x,T[D+X+5]=s.y,T[D+X+6]=s.z,T[D+X+7]=0),_===!0&&(s.fromBufferAttribute(O,z),T[D+X+8]=s.x,T[D+X+9]=s.y,T[D+X+10]=s.z,T[D+X+11]=O.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new ae(y,w)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function wm(i,e,t,n,s){let r=new WeakMap;function o(c){const f=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return u}function a(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}const Am={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function Cm(i,e,t,n,s,r){const o=new dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Rt;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));const f=new df({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new bt(c,f),u=new Ar(-1,1,1,-1,0,1);let m=null,g=null,_=!1,d,h=null,M=[],E=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let T=0;T<M.length;T++){const R=M[T];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){M=y,E=M.length>0&&M[0].isRenderPass===!0;const w=o.width,T=o.height;M.length>0&&a===null&&(a=new dn(w,T,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(w,T,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const v=M[R];v.setSize&&v.setSize(w,T)}},this.begin=function(y,w){if(_||y.toneMapping===bn&&M.length===0)return!1;if(h=w,w!==null){const T=w.width,R=w.height;(o.width!==T||o.height!==R)&&this.setSize(T,R)}return E===!1&&y.setRenderTarget(o),d=y.toneMapping,y.toneMapping=bn,!0},this.hasRenderPass=function(){return E},this.end=function(y,w){y.toneMapping=d,_=!0;let T=o,R=a;for(let v=0;v<M.length;v++){const b=M[v];b.enabled!==!1&&(b.render(y,R,T,w),b.needsSwap!==!1&&(T=R,R=R===a?l:a))}if(m!==y.outputColorSpace||g!==y.toneMapping){m=y.outputColorSpace,g=y.toneMapping,f.defines={},tt.getTransfer(m)===ft&&(f.defines.SRGB_TRANSFER="");const v=Am[g];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(h),y.render(p,u),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const Au=new Bt,_a=new Ss(1,1),Cu=new su,Ru=new hd,Pu=new uu,cc=[],uc=[],hc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),Ct(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),Ct(t,n)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),Ct(t,n)}}function Fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_a.compareFunction=t.isReversedDepthBuffer()?Ua:Na,r=_a):r=Au,t.setTexture2D(e||r,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ru,s)}function qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pu,s)}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cu,s)}function $m(i){switch(i){case 5126:return Rm;case 35664:return Pm;case 35665:return Lm;case 35666:return Im;case 35674:return Dm;case 35675:return Nm;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Gm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Zm(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function jm(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function og(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function ug(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_a:o=Au;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function hg(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ru,r[o])}function dg(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pu,r[o])}function fg(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cu,r[o])}function pg(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return jm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}class mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}}class _g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function pc(i,e){i.seq.push(e),i.map[e.id]=e}function xg(i,e,t){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),o=Mo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pc(t,c===void 0?new mg(a,i,e):new gg(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new _g(a),pc(t,p)),t=p}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vg=37297;let Mg=0;function yg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gc=new Xe;function Sg(i){tt._getMatrix(gc,tt.workingColorSpace,i);const e=`mat3( ${gc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _c(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(e),a)}else return r}function bg(i,e){const t=Sg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Eg={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[wa]:"ACESFilmic",[$c]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function Tg(i,e){const t=Eg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new P;function wg(){tt.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Cg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function us(i){return i!==""}function xc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(Pg,Ig)}const Lg=new Map;function Ig(i,e){let t=Ze[e];if(t===void 0){const n=Lg.get(e);if(n!==void 0)t=Ze[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xa(t)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(i){return i.replace(Dg,Ng)}function Ng(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Ug={[or]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function Fg(i){return Ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Og={[pi]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function Bg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const zg={[Vi]:"ENVMAP_MODE_REFRACTION"};function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gg={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function Hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gg[i.combine]||"ENVMAP_BLENDING_NONE"}function Vg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fg(t),c=Bg(t),f=kg(t),p=Hg(t),u=Vg(t),m=Ag(t),g=Cg(r),_=s.createProgram();let d,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),h.length>0&&(h+=`
`)):(d=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),h=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==bn?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=xa(o),o=xc(o,t),o=vc(o,t),a=xa(a),a=xc(a,t),a=vc(a,t),o=Mc(o),a=Mc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=M+d+o,y=M+h+a,w=mc(s,s.VERTEX_SHADER,E),T=mc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(T)||"",z=U.trim(),X=O.trim(),W=D.trim();let ie=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const Q=_c(s,w,"vertex"),te=_c(s,T,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Q+`
`+te)}else z!==""?He("WebGLProgram: Program Info Log:",z):(X===""||W==="")&&(q=!1);q&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:X,prefix:d},fragmentShader:{log:W,prefix:h}})}s.deleteShader(w),s.deleteShader(T),v=new hr(s,_),b=Rg(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,vg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let Xg=0;class qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yg(e),t.set(e,n)),n}}class Yg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function $g(i){return i===mi||i===dr||i===fr}function Zg(i,e,t,n,s,r){const o=new Oa,a=new qg,l=new Set,c=[],f=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,C,L,U,O){const D=L.fog,z=U.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||X,W),q=ie&&ie.mapping===br?ie.image.height:null,Q=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=te!==void 0?te.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let at,Qe,rt,Z;if(Q){const _t=vn[Q];at=_t.vertexShader,Qe=_t.fragmentShader}else{at=v.vertexShader,Qe=v.fragmentShader;const _t=a.getVertexShaderStage(v),ct=a.getFragmentShaderStage(v);a.update(v,_t,ct),rt=_t.id,Z=ct.id}const j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,ze=!!v.map,dt=!!v.matcap,ee=!!ie,se=!!v.aoMap,re=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Ue=!!v.displacementMap,Ne=!!v.emissiveMap,ke=!!v.metalnessMap,We=!!v.roughnessMap,I=v.anisotropy>0,lt=v.clearcoat>0,je=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,H=v.transmission>0,Y=I&&!!v.anisotropyMap,le=lt&&!!v.clearcoatMap,ce=lt&&!!v.clearcoatNormalMap,$=lt&&!!v.clearcoatRoughnessMap,J=x&&!!v.iridescenceMap,he=x&&!!v.iridescenceThicknessMap,Le=B&&!!v.sheenColorMap,me=B&&!!v.sheenRoughnessMap,de=!!v.specularMap,Ie=!!v.specularColorMap,Fe=!!v.specularIntensityMap,qe=H&&!!v.transmissionMap,F=H&&!!v.thicknessMap,fe=!!v.gradientMap,K=!!v.alphaMap,pe=v.alphaTest>0,ye=!!v.alphaHash,ne=!!v.extensions;let De=bn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=i.toneMapping);const Ce={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:Qe,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:dt,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:re,bumpMap:oe,normalMap:ue,displacementMap:Ue,emissiveMap:Ne,normalMapObjectSpace:ue&&v.normalMapType===Xh,normalMapTangentSpace:ue&&v.normalMapType===ua,packedNormalMap:ue&&v.normalMapType===ua&&$g(v.normalMap.format),metalnessMap:ke,roughnessMap:We,anisotropy:I,anisotropyMap:Y,clearcoat:lt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:$,dispersion:je,retroreflection:A,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:he,sheen:B,sheenColorMap:Le,sheenRoughnessMap:me,specularMap:de,specularColorMap:Ie,specularIntensityMap:Fe,transmission:H,transmissionMap:qe,thicknessMap:F,gradientMap:fe,opaque:v.transparent===!1&&v.blending===ds&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:pe,alphaHash:ye,combine:v.combine,mapUv:ze&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:re&&g(v.lightMap.channel),bumpMapUv:oe&&g(v.bumpMap.channel),normalMapUv:ue&&g(v.normalMap.channel),displacementMapUv:Ue&&g(v.displacementMap.channel),emissiveMapUv:Ne&&g(v.emissiveMap.channel),metalnessMapUv:ke&&g(v.metalnessMap.channel),roughnessMapUv:We&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:le&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(v.sheenRoughnessMap.channel),specularMapUv:de&&g(v.specularMap.channel),specularColorMapUv:Ie&&g(v.specularColorMap.channel),specularIntensityMapUv:Fe&&g(v.specularIntensityMap.channel),transmissionMapUv:qe&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:K&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||I),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ze||K),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function d(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(h(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function h(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const b=m[v.type];let C;if(b){const L=vn[b];C=cf.clone(L.uniforms)}else C=v.uniforms;return C}function y(v,b){let C=f.get(b);return C!==void 0?++C.usedTimes:(C=new Wg(i,b,v,s),c.push(C),f.set(b,C)),C}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function Kg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,g,_,d,h){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:d,group:h},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=g,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=d,M.group=h),e++,M}function l(u,m,g,_,d,h,M){M.reversedDepth===!0&&(d=-d);const E=a(u,m,g,_,d,h);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,m,g,_,d,h){const M=a(u,m,g,_,d,h);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function f(u,m){t.length>1&&t.sort(u||Jg),n.length>1&&n.sort(m||Sc),s.length>1&&s.sort(m||Sc)}function p(){for(let u=e,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:f}}function Qg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bc,i.set(n,[o])):s>=r.length?(o=new bc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new jg,t=e_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ht,o=new ht;function a(c){let f=0,p=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,_=0,d=0,h=0,M=0,E=0,y=0,w=0,T=0,R=0,v=0,b=0,C=0;c.sort(n_);for(let U=0,O=c.length;U<O;U++){const D=c[U],z=D.color,X=D.intensity,W=D.distance;let ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===mi?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=z.r*X,p+=z.g*X,u+=z.b*X;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],X);C++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ie;const Pe=Q.getViewportCount();for(let Te=0;Te<Pe;Te++)n.sunShadowMatrix[_+Te]=Q.getMatrix(Te),n.sunShadowCascade[_+Te]=Q._cascadeData[Te];_+=Pe,g++}n.sun[m]=q,m++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[d]=te,n.directionalShadowMap[d]=ie,n.directionalShadowMatrix[d]=D.shadow.matrix,w++}n.directional[d]=q,d++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[M]=q;const Q=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,Q.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[M]=Q.matrix,D.castShadow){const te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ie,R++}M++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(z).multiplyScalar(X),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=q,E++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[h]=te,n.pointShadowMap[h]=ie,n.pointShadowMatrix[h]=D.shadow.matrix,T++}n.point[h]=q,h++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(X),q.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=u;const L=n.hash;(L.sunLength!==m||L.directionalLength!==d||L.pointLength!==h||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=d,n.spot.length=M,n.rectArea.length=E,n.point.length=h,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=m,L.directionalLength=d,L.pointLength=h,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=C,n.version=t_++)}function l(c,f){let p=0,u=0,m=0,g=0,_=0,d=0;const h=f.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const y=c[M];if(y.isSunLight){const w=n.sun[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),p++}else if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),u++}else if(y.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),o.identity(),r.copy(y.matrixWorld),r.premultiply(h),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const w=n.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),d++}}}return{setup:a,setupView:l,state:n}}function Ec(i){const e=new i_(i),t=[],n=[],s=[];function r(u){p.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function s_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ec(i),e.set(s,[a])):r>=o.length?(a=new Ec(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,a_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],l_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Tc=new ht,os=new P,yo=new P;function c_(i,e,t){let n=new Ba;const s=new ae,r=new ae,o=new Mt,a=new pf,l=new mf,c={},f=t.maxTextureSize,p={[fi]:Vt,[Vt]:fi,[Mn]:Mn},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let h=this.type;this.render=function(T,R,v){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===kc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Fn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=h!==this.type;O&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=T.length;D<z;D++){const X=T[D],W=X.shadow;if(W===void 0){He("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ls){if(X.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new dn(s.x,s.y,{format:mi,type:Tn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Ss(s.x,s.y,un),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=kn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt}else X.isPointLight?(W.map=new wu(s.x),W.map.depthTexture=new Rd(s.x,En)):(W.map=new dn(s.x,s.y),W.map.depthTexture=new Ss(s.x,s.y,En)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=kn,this.type===or?(W.map.depthTexture.compareFunction=q?Ua:Na,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,v);for(let te=0;te<Q;te++){const Pe=W.getCamera(te);if(X.isPointLight){const Te=W.camera,at=W.matrix,Qe=X.distance||Te.far;Qe!==Te.far&&(Te.far=Qe,Te.updateProjectionMatrix()),os.setFromMatrixPosition(X.matrixWorld),Te.position.copy(os),yo.copy(Te.position),yo.add(a_[te]),Te.up.copy(l_[te]),Te.lookAt(yo),Te.updateMatrixWorld(),at.makeTranslation(-os.x,-os.y,-os.z),Tc.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Tc,Te.coordinateSystem,Te.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,te),i.clear();else{te===0&&(i.setRenderTarget(W.map),i.clear());const Te=W.getViewport(te);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),U.viewport(o)}n=W.getFrustum(te),y(R,v,Pe,X,this.type)}W.isPointLightShadow!==!0&&this.type===ls&&M(W,v),W.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(b,C,L)};function M(T,R){const v=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new dn(s.x,s.y,{format:mi,type:Tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,v,m,_,null)}function E(T,R,v,b){let C=null;const L=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,O=R.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let z=D[O];z===void 0&&(z=C.clone(),D[O]=z,R.addEventListener("dispose",w)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ls?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=v}return C}function y(T,R,v,b,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ls)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const O=e.update(T),D=T.material;if(Array.isArray(D)){const z=O.groups;for(let X=0,W=z.length;X<W;X++){const ie=z[X],q=D[ie.materialIndex];if(q&&q.visible){const Q=E(T,q,b,C);T.onBeforeShadow(i,T,R,v,O,Q,ie),i.renderBufferDirect(v,null,O,Q,T,ie),T.onAfterShadow(i,T,R,v,O,Q,ie)}}}else if(D.visible){const z=E(T,D,b,C);T.onBeforeShadow(i,T,R,v,O,z,null),i.renderBufferDirect(v,null,O,z,T,null),T.onAfterShadow(i,T,R,v,O,z,null)}}const U=T.children;for(let O=0,D=U.length;O<D;O++)y(U[O],R,v,b,C)}function w(T){T.target.removeEventListener("dispose",w);for(const v in c){const b=c[v],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function u_(i,e){function t(){let F=!1;const fe=new Mt;let K=null;const pe=new Mt(0,0,0,0);return{setMask:function(ye){K!==ye&&!F&&(i.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){F=ye},setClear:function(ye,ne,De,Ce,_t){_t===!0&&(ye*=Ce,ne*=Ce,De*=Ce),fe.set(ye,ne,De,Ce),pe.equals(fe)===!1&&(i.clearColor(ye,ne,De,Ce),pe.copy(fe))},reset:function(){F=!1,K=null,pe.set(-1,0,0,0)}}}function n(){let F=!1,fe=!1,K=null,pe=null,ye=null;return{setReversed:function(ne){if(fe!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(ne){ne?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ne){K!==ne&&!F&&(i.depthMask(ne),K=ne)},setFunc:function(ne){if(fe&&(ne=sd[ne]),pe!==ne){switch(ne){case To:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ne}},setLocked:function(ne){F=ne},setClear:function(ne){ye!==ne&&(ye=ne,fe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){F=!1,K=null,pe=null,ye=null,fe=!1}}}function s(){let F=!1,fe=null,K=null,pe=null,ye=null,ne=null,De=null,Ce=null,_t=null;return{setTest:function(ct){F||(ct?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!F&&(i.stencilMask(ct),fe=ct)},setFunc:function(ct,en,pn){(K!==ct||pe!==en||ye!==pn)&&(i.stencilFunc(ct,en,pn),K=ct,pe=en,ye=pn)},setOp:function(ct,en,pn){(ne!==ct||De!==en||Ce!==pn)&&(i.stencilOp(ct,en,pn),ne=ct,De=en,Ce=pn)},setLocked:function(ct){F=ct},setClear:function(ct){_t!==ct&&(i.clearStencil(ct),_t=ct)},reset:function(){F=!1,fe=null,K=null,pe=null,ye=null,ne=null,De=null,Ce=null,_t=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let f={},p={},u={},m=new WeakMap,g=[],_=null,d=!1,h=null,M=null,E=null,y=null,w=null,T=null,R=null,v=new Ke(0,0,0),b=0,C=!1,L=null,U=null,O=null,D=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ie>=2);let Q=null,te={};const Pe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),at=new Mt().fromArray(Pe),Qe=new Mt().fromArray(Te);function rt(F,fe,K,pe){const ye=new Uint8Array(4),ne=i.createTexture();i.bindTexture(F,ne),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<K;De++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(fe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ne}const Z={};Z[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(_s),oe(!1),ue(gl),j(i.CULL_FACE),se(Fn);function j(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function _e(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Oe(F,fe){return u[F]!==fe?(i.bindFramebuffer(F,fe),u[F]=fe,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(F,fe){let K=g,pe=!1;if(F){K=m.get(fe),K===void 0&&(K=[],m.set(fe,K));const ye=F.textures;if(K.length!==ye.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,De=ye.length;ne<De;ne++)K[ne]=i.COLOR_ATTACHMENT0+ne;K.length=ye.length,pe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,pe=!0);pe&&i.drawBuffers(K)}function ze(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const dt={[Oi]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};dt[wh]=i.MIN,dt[Ah]=i.MAX;const ee={[Ch]:i.ZERO,[Rh]:i.ONE,[Ph]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[zh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function se(F,fe,K,pe,ye,ne,De,Ce,_t,ct){if(F===Fn){d===!0&&(_e(i.BLEND),d=!1);return}if(d===!1&&(j(i.BLEND),d=!0),F!==bh){if(F!==h||ct!==C){if((M!==Oi||w!==Oi)&&(i.blendEquation(i.FUNC_ADD),M=Oi,w=Oi),ct)switch(F){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}E=null,y=null,T=null,R=null,v.set(0,0,0),b=0,h=F,C=ct}return}ye=ye||fe,ne=ne||K,De=De||pe,(fe!==M||ye!==w)&&(i.blendEquationSeparate(dt[fe],dt[ye]),M=fe,w=ye),(K!==E||pe!==y||ne!==T||De!==R)&&(i.blendFuncSeparate(ee[K],ee[pe],ee[ne],ee[De]),E=K,y=pe,T=ne,R=De),(Ce.equals(v)===!1||_t!==b)&&(i.blendColor(Ce.r,Ce.g,Ce.b,_t),v.copy(Ce),b=_t),h=F,C=!1}function re(F,fe){F.side===Mn?_e(i.CULL_FACE):j(i.CULL_FACE);let K=F.side===Vt;fe&&(K=!K),oe(K),F.blending===ds&&F.transparent===!1?se(Fn):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const pe=F.stencilWrite;a.setTest(pe),pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function ue(F){F!==yh?(j(i.CULL_FACE),F!==U&&(F===gl?i.cullFace(i.BACK):F===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),U=F}function Ue(F){F!==O&&(W&&i.lineWidth(F),O=F)}function Ne(F,fe,K){F?(j(i.POLYGON_OFFSET_FILL),(D!==fe||z!==K)&&(D=fe,z=K,o.getReversed()&&(fe=-fe),i.polygonOffset(fe,K))):_e(i.POLYGON_OFFSET_FILL)}function ke(F){F?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function We(F){F===void 0&&(F=i.TEXTURE0+X-1),Q!==F&&(i.activeTexture(F),Q=F)}function I(F,fe,K){K===void 0&&(Q===null?K=i.TEXTURE0+X-1:K=Q);let pe=te[K];pe===void 0&&(pe={type:void 0,texture:void 0},te[K]=pe),(pe.type!==F||pe.texture!==fe)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(F,fe||Z[F]),pe.type=F,pe.texture=fe)}function lt(){const F=te[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function le(){try{i.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ce(){try{i.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function J(){try{i.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function he(F){return p[F]!==void 0?p[F]:i.getParameter(F)}function Le(F,fe){p[F]!==fe&&(i.pixelStorei(F,fe),p[F]=fe)}function me(F){at.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function de(F){Qe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function Ie(F,fe){let K=c.get(fe);K===void 0&&(K=new WeakMap,c.set(fe,K));let pe=K.get(F);pe===void 0&&(pe=i.getUniformBlockIndex(fe,F.name),K.set(F,pe))}function Fe(F,fe){const pe=c.get(fe).get(F);l.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,F.__bindingPointIndex),l.set(fe,pe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},Q=null,te={},u={},m=new WeakMap,g=[],_=null,d=!1,h=null,M=null,E=null,y=null,w=null,T=null,R=null,v=new Ke(0,0,0),b=0,C=!1,L=null,U=null,O=null,D=null,z=null,at.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:_e,bindFramebuffer:Oe,drawBuffers:Se,useProgram:ze,setBlending:se,setMaterial:re,setFlipSided:oe,setCullFace:ue,setLineWidth:Ue,setPolygonOffset:Ne,setScissorTest:ke,activeTexture:We,bindTexture:I,unbindTexture:lt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Le,getParameter:he,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:ce,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:me,viewport:de,reset:qe}}function h_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,f=new WeakMap,p=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return g?new OffscreenCanvas(A,x):ys("canvas")}function d(A,x,B){let H=1;const Y=je(A);if((Y.width>B||Y.height>B)&&(H=B/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const le=Math.floor(H*Y.width),ce=Math.floor(H*Y.height);u===void 0&&(u=_(le,ce));const $=x?_(le,ce):u;return $.width=le,$.height=ce,$.getContext("2d").drawImage(A,0,0,le,ce),He("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),$}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function h(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,B,H,Y,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),B===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),B===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),B===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){const J=le?mr:tt.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=J===ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),B===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(A,x){let B;return A?x===null||x===En||x===vs?B=i.DEPTH24_STENCIL8:x===un?B=i.DEPTH32F_STENCIL8:x===xs&&(B=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===En||x===vs?B=i.DEPTH_COMPONENT24:x===un?B=i.DEPTH_COMPONENT32F:x===xs&&(B=i.DEPTH_COMPONENT16),B}function T(A,x){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&p.delete(x)}function v(A){const x=A.target;x.removeEventListener("dispose",v),L(x)}function b(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,H=m.get(B);if(H){const Y=H[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(H).length===0&&m.delete(B)}n.remove(A)}function C(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const B=A.source,H=m.get(B);delete H[x.__cacheKey],o.memory.textures--}function L(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let Y=0;Y<x.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,Y=B.length;H<Y;H++){const le=n.get(B[H]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(B[H])}n.remove(A)}let U=0;function O(){U=0}function D(){return U}function z(A){U=A}function X(){const A=U;return A>=s.maxTextures&&He("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ie(A,x){const B=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function q(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_e(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Q(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_e(B,A,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function te(A,x){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Oe(B,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Pe={[Io]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},Te={[Dt]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},at={[Yh]:i.NEVER,[Qh]:i.ALWAYS,[$h]:i.LESS,[Na]:i.LEQUAL,[Zh]:i.EQUAL,[Ua]:i.GEQUAL,[Kh]:i.GREATER,[Jh]:i.NOTEQUAL};function Qe(A,x){if(x.type===un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ot||x.magFilter===kr||x.magFilter===Is||x.magFilter===li||x.minFilter===Ot||x.minFilter===kr||x.minFilter===Is||x.minFilter===li)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Pe[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Pe[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Pe[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Te[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dt||x.minFilter!==Is&&x.minFilter!==li||x.type===un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function rt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let Y=m.get(H);Y===void 0&&(Y={},m.set(H,Y));const le=W(x);if(le!==A.__cacheKey){Y[le]===void 0&&(Y[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[le].usedTimes++;const ce=Y[A.__cacheKey];ce!==void 0&&(Y[A.__cacheKey].usedTimes--,ce.usedTimes===0&&C(x)),A.__cacheKey=le,A.__webglTexture=Y[le].texture}return B}function Z(A,x,B){return Math.floor(Math.floor(A/B)/x)}function j(A,x,B,H){const le=A.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,H,x.data);else{le.sort((Le,me)=>Le.start-me.start);let ce=0;for(let Le=1;Le<le.length;Le++){const me=le[ce],de=le[Le],Ie=me.start+me.count,Fe=Z(de.start,x.width,4),qe=Z(me.start,x.width,4);de.start<=Ie+1&&Fe===qe&&Z(de.start+de.count-1,x.width,4)===Fe?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Le=0,me=le.length;Le<me;Le++){const de=le[Le],Ie=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),qe=Ie%x.width,F=Math.floor(Ie/x.width),fe=Fe,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,qe,F,fe,K,B,H,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function _e(A,x,B){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);const Y=rt(A,x),le=x.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+B);const ce=n.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=tt.getPrimaries(tt.workingColorSpace),pe=x.colorSpace===Kn?null:tt.getPrimaries(x.colorSpace),ye=x.colorSpace===Kn||K===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=d(x.image,!1,s.maxTextureSize);J=lt(x,J);const he=r.convert(x.format,x.colorSpace),Le=r.convert(x.type);let me=y(x.internalFormat,he,Le,x.normalized,x.colorSpace,x.isVideoTexture);Qe(H,x);let de;const Ie=x.mipmaps,Fe=x.isVideoTexture!==!0,qe=ce.__version===void 0||Y===!0,F=le.dataReady,fe=T(x,J);if(x.isDepthTexture)me=w(x.format===ci,x.type),qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,me,J.width,J.height,0,he,Le,null));else if(x.isDataTexture)if(Ie.length>0){Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],Fe?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,he,Le,de.data):t.texImage2D(i.TEXTURE_2D,K,me,de.width,de.height,0,he,Le,de.data);x.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(i.TEXTURE_2D,fe,me,J.width,J.height),F&&j(x,J,he,Le)):t.texImage2D(i.TEXTURE_2D,0,me,J.width,J.height,0,he,Le,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Ie[0].width,Ie[0].height,J.depth);for(let K=0,pe=Ie.length;K<pe;K++)if(de=Ie[K],x.format!==hn)if(he!==null)if(Fe){if(F)if(x.layerUpdates.size>0){const ye=ic(de.width,de.height,x.format,x.type);for(const ne of x.layerUpdates){const De=de.data.subarray(ne*ye/de.data.BYTES_PER_ELEMENT,(ne+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ne,de.width,de.height,1,he,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,me,de.width,de.height,J.depth,0,de.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,he,Le,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,me,de.width,de.height,J.depth,0,he,Le,de.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],x.format!==hn?he!==null?Fe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,K,me,de.width,de.height,0,de.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,he,Le,de.data):t.texImage2D(i.TEXTURE_2D,K,me,de.width,de.height,0,he,Le,de.data)}else if(x.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,J.width,J.height,J.depth),F)if(x.layerUpdates.size>0){const K=ic(J.width,J.height,x.format,x.type);for(const pe of x.layerUpdates){const ye=J.data.subarray(pe*K/J.data.BYTES_PER_ELEMENT,(pe+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,J.width,J.height,1,he,Le,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,Le,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,he,Le,J.data);else if(x.isData3DTexture)Fe?(qe&&t.texStorage3D(i.TEXTURE_3D,fe,me,J.width,J.height,J.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,Le,J.data)):t.texImage3D(i.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,he,Le,J.data);else if(x.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,fe,me,J.width,J.height);else{let K=J.width,pe=J.height;for(let ye=0;ye<fe;ye++)t.texImage2D(i.TEXTURE_2D,ye,me,K,pe,0,he,Le,null),K>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),p.add(x),K.onpaint=pe=>{const ye=pe.changedElements;for(const ne of p)ye.includes(ne.image)&&(ne.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const ye=i.RGBA,ne=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ne,De,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&qe){const K=je(Ie[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,K.width,K.height)}for(let K=0,pe=Ie.length;K<pe;K++)de=Ie[K],Fe?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,he,Le,de):t.texImage2D(i.TEXTURE_2D,K,me,he,Le,de);x.generateMipmaps=!1}else if(Fe){if(qe){const K=je(J);t.texStorage2D(i.TEXTURE_2D,fe,me,K.width,K.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Le,J)}else t.texImage2D(i.TEXTURE_2D,0,me,he,Le,J);h(x)&&M(H),ce.__version=le.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Oe(A,x,B){if(x.image.length!==6)return;const H=rt(A,x),Y=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const le=n.get(Y);if(Y.version!==le.__version||H===!0){t.activeTexture(i.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),$=x.colorSpace===Kn?null:tt.getPrimaries(x.colorSpace),J=x.colorSpace===Kn||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!he&&!Le?me[ne]=d(x.image[ne],!0,s.maxCubemapSize):me[ne]=Le?x.image[ne].image:x.image[ne],me[ne]=lt(x,me[ne]);const de=me[0],Ie=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),qe=y(x.internalFormat,Ie,Fe,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,fe=le.__version===void 0||H===!0,K=Y.dataReady;let pe=T(x,de);Qe(i.TEXTURE_CUBE_MAP,x);let ye;if(he){F&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,de.width,de.height);for(let ne=0;ne<6;ne++){ye=me[ne].mipmaps;for(let De=0;De<ye.length;De++){const Ce=ye[De];x.format!==hn?Ie!==null?F?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,qe,Ce.width,Ce.height,0,Ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ce.width,Ce.height,Ie,Fe,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,qe,Ce.width,Ce.height,0,Ie,Fe,Ce.data)}}}else{if(ye=x.mipmaps,F&&fe){ye.length>0&&pe++;const ne=je(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Le){F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Ie,Fe,me[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,me[ne].width,me[ne].height,0,Ie,Fe,me[ne].data);for(let De=0;De<ye.length;De++){const _t=ye[De].image[ne].image;F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,_t.width,_t.height,Ie,Fe,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,qe,_t.width,_t.height,0,Ie,Fe,_t.data)}}else{F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Fe,me[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ie,Fe,me[ne]);for(let De=0;De<ye.length;De++){const Ce=ye[De];F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Ie,Fe,Ce.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,qe,Ie,Fe,Ce.image[ne])}}}h(x)&&M(i.TEXTURE_CUBE_MAP),le.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Se(A,x,B,H,Y,le){const ce=r.convert(B.format,B.colorSpace),$=r.convert(B.type),J=y(B.internalFormat,ce,$,B.normalized,B.colorSpace),he=n.get(x),Le=n.get(B);if(Le.__renderTarget=x,!he.__hasExternalTextures){const me=Math.max(1,x.width>>le),de=Math.max(1,x.height>>le);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,J,me,de,x.depth,0,ce,$,null):t.texImage2D(Y,le,J,me,de,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,Le.__webglTexture,0,ke(x)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,Le.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const H=x.depthTexture,Y=H&&H.isDepthTexture?H.type:null,le=w(x.stencilBuffer,Y),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),le,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{const H=x.textures;for(let Y=0;Y<H.length;Y++){const le=H[Y],ce=r.convert(le.format,le.colorSpace),$=r.convert(le.type),J=y(le.internalFormat,ce,$,le.normalized,le.colorSpace);We(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,x,B){const H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x.depthTexture);const he=r.convert(x.depthTexture.format),Le=r.convert(x.depthTexture.type);let me;x.depthTexture.format===kn?me=i.DEPTH_COMPONENT24:x.depthTexture.format===ci&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,x.width,x.height,0,he,Le,null)}}else ie(x.depthTexture,0);const le=Y.__webglTexture,ce=ke(x),$=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,J=x.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,le,0);else if(x.depthTexture.format===ci)We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)dt(x.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?dt(x.__webglFramebuffer[0],A,0):dt(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[H],A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,x,B){const H=n.get(A);x!==void 0&&Se(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ee(A)}function re(A){const x=A.texture,B=n.get(A),H=n.get(x);A.addEventListener("dispose",v);const Y=A.textures,le=A.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,o.memory.textures++),le){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[$][J]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,J=Y.length;$<J;$++){const he=n.get(Y[$]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){const J=Y[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const he=r.convert(J.format,J.colorSpace),Le=r.convert(J.type),me=y(J.internalFormat,he,Le,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),de=ke(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Se(B.__webglFramebuffer[$][J],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Se(B.__webglFramebuffer[$],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,J=Y.length;$<J;$++){const he=Y[$],Le=n.get(he);let me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Le.__webglTexture),Qe(me,he),Se(B.__webglFramebuffer,A,he,i.COLOR_ATTACHMENT0+$,me,0),h(he)&&M(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Qe($,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Se(B.__webglFramebuffer[J],A,x,i.COLOR_ATTACHMENT0,$,J);else Se(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,$,0);h(x)&&M($),t.unbindTexture()}A.depthBuffer&&ee(A)}function oe(A){const x=A.textures;for(let B=0,H=x.length;B<H;B++){const Y=x[B];if(h(Y)){const le=E(A),ce=n.get(Y).__webglTexture;t.bindTexture(le,ce),M(le),t.unbindTexture()}}}const ue=[],Ue=[];function Ne(A){if(A.samples>0){if(We(A)===!1){const x=A.textures,B=A.width,H=A.height;let Y=i.COLOR_BUFFER_BIT;const le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),$=x.length>1;if($)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Le=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,Y,i.NEAREST),l===!0&&(ue.length=0,Ue.length=0,ue.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ue.push(le),Ue.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Le=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ke(A){return Math.min(s.maxSamples,A.samples)}function We(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){const x=o.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function lt(A,x){const B=A.colorSpace,H=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==pr&&B!==Kn&&(tt.getTransfer(B)===ft?(H!==hn||Y!==Yt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",B)),x}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d_(i,e){function t(n,s=Kn){let r;const o=tt.getTransfer(s);if(n===Yt)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===tu)return i.ALPHA;if(n===nu)return i.RGB;if(n===hn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===La)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===ur)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===ko||n===Go||n===Ho||n===dr||n===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===zo)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return r.COMPRESSED_RG11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===Qo||n===jo||n===ea||n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===ra||n===oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===la||n===fr||n===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends vi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,u=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",d=new m_,h={},M=t.getContextAttributes();let E=null,y=null;const w=[],T=[],R=new ae;let v=null,b=null;const C=new an;C.viewport=new Mt;const L=new an;L.viewport=new Mt;const U=[C,L],O=new bf;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new Zr,w[Z]=j),j.getHandSpace()};function X(Z){const j=T.indexOf(Z.inputSource);if(j===-1)return;const _e=w[j];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){const j=T[Z];j!==null&&(T[Z]=null,w[Z].disconnect(j))}D=null,z=null,d.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(E),m=null,u=null,p=null,s=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),b!==null){const Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?ci:kn,Oe=M.stencil?vs:En);const ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new dn(u.textureWidth,u.textureHeight,{format:hn,type:Yt,depthTexture:new Ss(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new dn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const _e=Z.removed[j],Oe=T.indexOf(_e);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(_e))}for(let j=0;j<Z.added.length;j++){const _e=Z.added[j];let Oe=T.indexOf(_e);if(Oe===-1){for(let ze=0;ze<w.length;ze++)if(ze>=T.length){T.push(_e),Oe=ze;break}else if(T[ze]===null){T[ze]=_e,Oe=ze;break}if(Oe===-1)break}const Se=w[Oe];Se&&Se.connect(_e)}}const q=new P,Q=new P;function te(Z,j,_e){q.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Oe=q.distanceTo(Q),Se=j.projectionMatrix.elements,ze=_e.projectionMatrix.elements,dt=Se[14]/(Se[10]-1),ee=Se[14]/(Se[10]+1),se=(Se[9]+1)/Se[5],re=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],ue=(ze[8]+1)/ze[0],Ue=dt*oe,Ne=dt*ue,ke=Oe/(-oe+ue),We=ke*-oe;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=dt+ke,lt=ee+ke,je=Ue-We,A=Ne+(Oe-We),x=se*ee/lt*I,B=re*ee/lt*I;Z.projectionMatrix.makePerspective(je,A,x,B,I,lt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Pe(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,_e=Z.far;d.texture!==null&&(d.depthNear>0&&(j=d.depthNear),d.depthFar>0&&(_e=d.depthFar)),O.near=L.near=C.near=j,O.far=L.far=C.far=_e,(D!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,z=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Oe=Z.parent,Se=O.cameras;Pe(O,Oe);for(let ze=0;ze<Se.length;ze++)Pe(Se[ze],Oe);Se.length===2?te(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,O,Oe)};function Te(Z,j,_e){_e===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ha*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let at=null;function Qe(Z,j){if(f=j.getViewerPose(c||o),g=j,f!==null){const _e=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let ee=0;ee<_e.length;ee++){const se=_e[ee];let re=null;if(m!==null)re=m.getViewport(se);else{const ue=p.getViewSubImage(u,se);re=ue.viewport,ee===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let oe=U[ee];oe===void 0&&(oe=new an,oe.layers.enable(ee),oe.viewport=new Mt,U[ee]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(O.matrix.copy(oe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(oe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();const ee=p.getDepthInformation(_e[0]);ee&&ee.isValid&&ee.texture&&d.init(ee,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let ee=0;ee<_e.length;ee++){const se=_e[ee].camera;if(se){let re=h[se];re||(re=new hu,h[se]=re);const oe=p.getCameraImage(se);re.sourceTexture=oe}}}}for(let _e=0;_e<w.length;_e++){const Oe=T[_e],Se=w[_e];Oe!==null&&Se!==void 0&&Se.update(Oe,j,c||o)}at&&at(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const rt=new Eu;rt.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const __=new ht,Lu=new Xe;Lu.set(-1,0,0,0,1,0,0,0,1);function x_(i,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,yu(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,M,E,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(d,h):h.isMeshLambertMaterial?(r(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(d,h),p(d,h)):h.isMeshPhongMaterial?(r(d,h),f(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(d,h),u(d,h),h.isMeshPhysicalMaterial&&m(d,h,y)):h.isMeshMatcapMaterial?(r(d,h),g(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),_(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,M,E):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Vt&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Vt&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const M=e.get(h),E=M.envMap,y=M.envMapRotation;E&&(d.envMap.value=E,d.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Lu),d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,M,E){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*M,d.scale.value=E*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function f(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function p(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function u(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,M){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.retroreflectivity>0&&(d.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){const M=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const T=w.program;n.uniformBlockBinding(y,T)}function c(y,w){let T=s[y.id];T===void 0&&(d(y),T=f(y),s[y.id]=T,y.addEventListener("dispose",M));const R=w.program;n.updateUBOMapping(y,R);const v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function f(y){const w=p();y.__bindingPointIndex=w;const T=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,b=T.length;v<b;v++){const C=T[v];if(Array.isArray(C))for(let L=0,U=C.length;L<U;L++)m(C[L],v,L,R);else m(C,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,w,T,R){if(_(y,w,T,R)===!0){const v=y.__offset,b=y.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const U=b[L],O=h(U);g(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function _(y,w,T,R){const v=y.value,b=w+"_"+T;if(R[b]===void 0)return typeof v=="number"||typeof v=="boolean"?R[b]=v:ArrayBuffer.isView(v)?R[b]=v.slice():R[b]=v.clone(),!0;{const C=R[b];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function d(y){const w=y.uniforms;let T=0;const R=16;for(let b=0,C=w.length;b<C;b++){const L=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,O=L.length;U<O;U++){const D=L[U],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,W=z.length;X<W;X++){const ie=z[X],q=h(ie),Q=T%R,te=Q%q.boundary,Pe=Q+te;T+=te,Pe!==0&&R-Pe<q.storage&&(T+=R-Pe),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=q.storage}}}const v=T%R;return v>0&&(T+=R-v),y.__size=T,y.__cache={},this}function h(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){const w=y.target;w.removeEventListener("dispose",M);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function y_(){return _n===null&&(_n=new cu(M_,16,16,mi,Tn),_n.name="DFG_LUT",_n.minFilter=Ot,_n.magFilter=Ot,_n.wrapS=Un,_n.wrapT=Un,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class S_{constructor(e={}){const{canvas:t=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Yt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=m,d=new Set([Da,Ia,La]),h=new Set([Yt,En,xs,vs,Ca,Ra]),M=new Uint32Array(4),E=new Int32Array(4),y=new P;let w=null,T=null;const R=[],v=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,O=null,D=null,z=null;this._outputColorSpace=Gt;let X=0,W=0,ie=null,q=-1,Q=null;const te=new Mt,Pe=new Mt;let Te=null;const at=new Ke(0);let Qe=0,rt=t.width,Z=t.height,j=1,_e=null,Oe=null;const Se=new Mt(0,0,rt,Z),ze=new Mt(0,0,rt,Z);let dt=!1;const ee=new Ba;let se=!1,re=!1;const oe=new ht,ue=new P,Ue=new Mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function We(){return ie===null?j:1}let I=n;function lt(S,N){return t.getContext(S,N)}let je,A,x,B,H,Y,le,ce,$,J,he,Le,me,de,Ie,Fe,qe,F,fe,K,pe,ye,ne;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",en,!1),I===null){const N="webgl2";if(I=lt(N,S),I===null)throw lt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(S){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",en,!1),it("WebGLRenderer: "+S.message),S}function De(){je=new ym(I),je.init(),pe=new d_(I,je),A=new hm(I,je,e,pe),x=new u_(I,je),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=I.createFramebuffer(),D=I.createFramebuffer(),z=I.createFramebuffer(),B=new Em(I),H=new Kg,Y=new h_(I,je,x,H,A,pe,B),le=new Mm(C),ce=new wf(I),ye=new cm(I,ce),$=new Sm(I,ce,B,ye),J=new wm(I,$,ce,ye,B),F=new Tm(I,A,Y),Ie=new dm(H),he=new Zg(C,le,je,A,ye,Ie),Le=new x_(C,H),me=new Qg,de=new s_(je),qe=new lm(C,le,x,J,g,l),Fe=new c_(C,J,A),ne=new v_(I,B,A,x),fe=new um(I,je,B),K=new bm(I,je,B),B.programs=he.programs,C.capabilities=A,C.extensions=je,C.properties=H,C.renderLists=me,C.shadowMap=Fe,C.state=x,C.info=B}_!==Yt&&(b=new Cm(_,t.width,t.height,a,s,r));const Ce=new g_(C,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(rt,Z,!1))},this.getSize=function(S){return S.set(rt,Z)},this.setSize=function(S,N,V=!0){if(Ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=S,Z=N,t.width=Math.floor(S*j),t.height=Math.floor(N*j),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(rt*j,Z*j).floor()},this.setDrawingBufferSize=function(S,N,V){rt=S,Z=N,j=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===Yt){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,N,V,k){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,N,V,k),x.viewport(te.copy(Se).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,N,V,k){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,N,V,k),x.scissor(Pe.copy(ze).multiplyScalar(j).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(S){x.setScissorTest(dt=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let k=0;if(S){let G=!1;if(ie!==null){const Me=ie.texture.format;G=d.has(Me)}if(G){const Me=ie.texture.type,Ee=h.has(Me),xe=qe.getClearColor(),we=qe.getClearAlpha(),Re=xe.r,$e=xe.g,et=xe.b;Ee?(M[0]=Re,M[1]=$e,M[2]=et,M[3]=we,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Re,E[1]=$e,E[2]=et,E[3]=we,I.clearBufferiv(I.COLOR,0,E))}else k|=I.COLOR_BUFFER_BIT}N&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",en,!1),qe.dispose(),me.dispose(),de.dispose(),H.dispose(),le.dispose(),J.dispose(),ye.dispose(),ne.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",rl),Ce.removeEventListener("sessionend",ol),ni.stop()};function _t(S){S.preventDefault(),Sl("WebGLRenderer: Context Lost."),L=!0}function ct(){Sl("WebGLRenderer: Context Restored."),L=!1;const S=B.autoReset,N=Fe.enabled,V=Fe.autoUpdate,k=Fe.needsUpdate,G=Fe.type;De(),B.autoReset=S,Fe.enabled=N,Fe.autoUpdate=V,Fe.needsUpdate=k,Fe.type=G}function en(S){it("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pn(S){const N=S.target;N.removeEventListener("dispose",pn),Yu(N)}function Yu(S){$u(S),H.remove(S)}function $u(S){const N=H.get(S).programs;N!==void 0&&(N.forEach(function(V){he.releaseProgram(V)}),S.isShaderMaterial&&he.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,k,G,Me){N===null&&(N=Ne);const Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=Ju(S,N,V,k,G);x.setMaterial(k,Ee);let we=V.index,Re=1;if(k.wireframe===!0){if(we=$.getWireframeAttribute(V),we===void 0)return;Re=2}const $e=V.drawRange,et=V.attributes.position;let Ae=$e.start*Re,ut=($e.start+$e.count)*Re;Me!==null&&(Ae=Math.max(Ae,Me.start*Re),ut=Math.min(ut,(Me.start+Me.count)*Re)),we!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,we.count)):et!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,et.count));const Tt=ut-Ae;if(Tt<0||Tt===1/0)return;ye.setup(G,k,xe,V,we);let vt,gt=fe;if(we!==null&&(vt=ce.get(we),gt=K,gt.setIndex(vt)),G.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*We()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(G.isLine){let Nt=k.linewidth;Nt===void 0&&(Nt=1),x.setLineWidth(Nt*We()),G.isLineSegments?gt.setMode(I.LINES):G.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else G.isPoints?gt.setMode(I.POINTS):G.isSprite&&gt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,be=G._multiDrawCounts,zt=G._multiDrawCount,ot=we?ce.get(we).bytesPerElement:1,Zt=H.get(k).currentProgram.getUniforms();for(let mn=0;mn<zt;mn++)Zt.setValue(I,"_gl_DrawID",mn),gt.render(Nt[mn]/ot,be[mn])}else if(G.isInstancedMesh)gt.renderInstances(Ae,Tt,G.count);else if(V.isInstancedBufferGeometry){const Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,Nt);gt.renderInstances(Ae,Tt,be)}else gt.render(Ae,Tt)};function sl(S,N,V,k){U!==null&&S.isNodeMaterial&&U.setObject(k,S),se===!0&&Ie.setState(S,V,!1),S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Ls(S,N,k),S.side=fi,S.needsUpdate=!0,Ls(S,N,k),S.side=Mn):Ls(S,N,k)}this.compile=function(S,N,V=null){V===null&&(V=S),U!==null&&U.renderStart(S,N,V),T=de.get(V),T.init(N),v.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),se===!0&&Ie.setGlobalState(this.clippingPlanes,N),U!==null&&Fe.render(T.state.shadowsArray,V,N);const k=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const xe=Me[Ee];sl(xe,V,N,G),k.add(xe)}else sl(Me,V,N,G),k.add(Me)}),T=v.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(S,N,V=null){const k=this.compile(S,N,V);return new Promise(G=>{function Me(){if(k.forEach(function(Ee){const we=H.get(Ee).currentProgram;(we===void 0||we.isReady())&&k.delete(Ee)}),k.size===0){G(S);return}setTimeout(Me,10)}je.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Nr=null;function Zu(S){Nr&&Nr(S)}function rl(){ni.stop()}function ol(){ni.start()}const ni=new Eu;ni.setAnimationLoop(Zu),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(S){Nr=S,Ce.setAnimationLoop(S),S===null?ni.stop():ni.start()},Ce.addEventListener("sessionstart",rl),Ce.addEventListener("sessionend",ol),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(S,N);const V=Ce.enabled===!0&&Ce.isPresenting===!0,k=b!==null&&(ie===null||V)&&b.begin(C,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(N),N=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,ie),T=de.get(S,v.length),T.init(N),T.state.textureUnits=Y.getTextureUnits(),v.push(T),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(oe,yn,N.reversedDepth),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),w=me.get(S,R.length),w.init(),R.push(w),Ce.enabled===!0&&Ce.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Ur(Ee,N,-1/0,C.sortObjects)}Ur(S,N,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(_e,Oe),ke=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ke&&qe.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();const G=T.state.shadowsArray;if(Fe.render(G,S,N),se===!0&&Ie.endShadows(),(k&&b.hasRenderPass())===!1){const Ee=w.opaque,xe=w.transmissive;if(T.setupLights(),N.isArrayCamera){const we=N.cameras;if(xe.length>0)for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re];ll(Ee,xe,S,et)}ke&&qe.render(S);for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re];al(w,S,et,et.viewport)}}else xe.length>0&&ll(Ee,xe,S,N),ke&&qe.render(S),al(w,S,N)}ie!==null&&W===0&&(Y.updateMultisampleRenderTarget(ie),Y.updateRenderTargetMipmap(ie)),k&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ye.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),se===!0&&Ie.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function Ur(S,N,V,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const Ee=J.update(S),xe=S.material;xe.visible&&w.push(S,Ee,xe,V,Ue.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){const Ee=J.update(S),xe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(xe)){const we=Ee.groups;for(let Re=0,$e=we.length;Re<$e;Re++){const et=we[Re],Ae=xe[et.materialIndex];Ae&&Ae.visible&&w.push(S,Ee,Ae,V,Ue.z,et,N)}}else xe.visible&&w.push(S,Ee,xe,V,Ue.z,null,N)}}const Me=S.children;for(let Ee=0,xe=Me.length;Ee<xe;Ee++)Ur(Me[Ee],N,V,k)}function al(S,N,V,k){const{opaque:G,transmissive:Me,transparent:Ee}=S;T.setupLightsView(V),se===!0&&Ie.setGlobalState(C.clippingPlanes,V),k&&x.viewport(te.copy(k)),G.length>0&&Ps(G,N,V),Me.length>0&&Ps(Me,N,V),Ee.length>0&&Ps(Ee,N,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ll(S,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Ae=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new dn(1,1,{generateMipmaps:!0,type:Ae?Tn:Yt,minFilter:li,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Me=T.state.transmissionRenderTarget[k.id],Ee=k.viewport||te;Me.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),we=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(at),Qe=C.getClearAlpha(),Qe<1&&C.setClearColor(16777215,.5),C.clear(),ke&&qe.render(V);const $e=C.toneMapping;C.toneMapping=bn;const et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),se===!0&&Ie.setGlobalState(C.clippingPlanes,k),Ps(S,V,k),Y.updateMultisampleRenderTarget(Me),Y.updateRenderTargetMipmap(Me),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,Tt=N.length;ut<Tt;ut++){const vt=N[ut],{object:gt,geometry:Nt,material:be,group:zt}=vt;if(be.side===Mn&&gt.layers.test(k.layers)){const ot=be.side;be.side=Vt,be.needsUpdate=!0,cl(gt,V,k,Nt,be,zt),be.side=ot,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(Me),Y.updateRenderTargetMipmap(Me))}C.setRenderTarget(xe,we,Re),C.setClearColor(at,Qe),et!==void 0&&(k.viewport=et),C.toneMapping=$e}function Ps(S,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Me=S.length;G<Me;G++){const Ee=S[G],{object:xe,geometry:we,group:Re}=Ee;let $e=Ee.material;$e.allowOverride===!0&&k!==null&&($e=k),xe.layers.test(V.layers)&&cl(xe,N,V,we,$e,Re)}}function cl(S,N,V,k,G,Me){U!==null&&G.isNodeMaterial&&U.setObject(S,G),S.onBeforeRender(C,N,V,k,G,Me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,N,V,k,S,Me),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,S,Me),G.side=fi,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,S,Me),G.side=Mn):C.renderBufferDirect(V,N,k,G,S,Me),S.onAfterRender(C,N,V,k,G,Me)}function Ls(S,N,V){N.isScene!==!0&&(N=Ne);const k=H.get(S),G=T.state.lights,Me=T.state.shadowsArray,Ee=G.state.version,xe=he.getParameters(S,G.state,Me,N,V,T.state.lightProbeGridArray),we=he.getProgramCacheKey(xe);let Re=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const $e=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=le.get(S.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",pn),Re=new Map,k.programs=Re);let et=Re.get(we);if(et!==void 0){if(k.currentProgram===et&&k.lightsStateVersion===Ee)return hl(S,xe),et}else xe.uniforms=he.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,V,xe),S.onBeforeCompile(xe,C),et=he.acquireProgram(xe,we),Re.set(we,et),k.uniforms=xe.uniforms;const Ae=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),hl(S,xe),k.needsLights=ju(S),k.lightsStateVersion=Ee,k.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=et,k.uniformsList=null,et}function ul(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=hr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function hl(S,N){const V=H.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ku(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let V=0,k=S.length;V<k;V++){const G=S[V];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Ju(S,N,V,k,G){N.isScene!==!0&&(N=Ne),Y.resetTextureUnits();const Me=N.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,xe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tt.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=le.get(k.envMap||Ee,we),$e=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Tt=!!V.morphAttributes.color;let vt=bn;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(vt=C.toneMapping);const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=gt!==void 0?gt.length:0,be=H.get(k),zt=T.state.lights;if(se===!0&&(re===!0||S!==Q)){const xt=S===Q&&k.id===q;Ie.setState(k,S,xt)}let ot=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==zt.state.version||be.outputColorSpace!==xe||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Re||k.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==$e||be.vertexTangents!==et||be.morphTargets!==Ae||be.morphNormals!==ut||be.morphColors!==Tt||be.toneMapping!==vt||be.morphTargetsCount!==Nt||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,be.__version=k.version);let Zt=be.currentProgram;ot===!0&&(Zt=Ls(k,N,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Zt,be));let mn=!1,Gn=!1,Mi=!1;const pt=Zt.getUniforms(),St=be.uniforms;if(x.useProgram(Zt.program)&&(mn=!0,Gn=!0,Mi=!0),k.id!==q&&(q=k.id,Gn=!0),be.needsLights){const xt=Ku(T.state.lightProbeGridArray,G);be.lightProbeGrid!==xt&&(be.lightProbeGrid=xt,Gn=!0)}if(mn||Q!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(I,"projectionMatrix",S.projectionMatrix),pt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Vn=pt.map.cameraPosition;Vn!==void 0&&Vn.setValue(I,ue.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Gn=!0,Mi=!0)}if(be.needsLights&&(zt.state.sunShadowMap.length>0&&pt.setValue(I,"sunShadowMap",zt.state.sunShadowMap,Y),zt.state.directionalShadowMap.length>0&&pt.setValue(I,"directionalShadowMap",zt.state.directionalShadowMap,Y),zt.state.spotShadowMap.length>0&&pt.setValue(I,"spotShadowMap",zt.state.spotShadowMap,Y),zt.state.pointShadowMap.length>0&&pt.setValue(I,"pointShadowMap",zt.state.pointShadowMap,Y)),G.isSkinnedMesh){pt.setOptional(I,G,"bindMatrix"),pt.setOptional(I,G,"bindMatrixInverse");const xt=G.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(I,"boneTexture",xt.boneTexture,Y))}G.isBatchedMesh&&(pt.setOptional(I,G,"batchingTexture"),pt.setValue(I,"batchingTexture",G._matricesTexture,Y),pt.setOptional(I,G,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",G._indirectTexture,Y),pt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",G._colorsTexture,Y));const Hn=V.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&F.update(G,V,Zt),(Gn||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,pt.setValue(I,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=y_()),Gn){if(pt.setValue(I,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&Qu(St,Mi),Me&&k.fog===!0&&Le.refreshFogUniforms(St,Me),Le.refreshMaterialUniforms(St,k,j,Z,T.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){const xt=be.lightProbeGrid;St.probesSH.value=xt.texture,St.probesMin.value.copy(xt.boundingBox.min),St.probesMax.value.copy(xt.boundingBox.max),St.probesResolution.value.copy(xt.resolution)}hr.upload(I,ul(be),St,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hr.upload(I,ul(be),St,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(I,"center",G.center),pt.setValue(I,"modelViewMatrix",G.modelViewMatrix),pt.setValue(I,"normalMatrix",G.normalMatrix),pt.setValue(I,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const xt=k.uniformsGroups;for(let Vn=0,yi=xt.length;Vn<yi;Vn++){const fl=xt[Vn];ne.update(fl,Zt),ne.bind(fl,Zt)}}return Zt}function Qu(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,N,V){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=H.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){ie=S,X=N,W=V;let k=null,G=!1,Me=!1;if(S){const xe=H.get(S);if(xe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(S.viewport),Pe.copy(S.scissor),Te=S.scissorTest,x.viewport(te),x.scissor(Pe),x.setScissorTest(Te),q=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(xe.__hasExternalTextures)Y.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const $e=S.depthTexture;if(xe.__boundDepthTexture!==$e){if($e!==null&&H.has($e)&&(S.width!==$e.image.width||S.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Re=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?k=Re[N][V]:k=Re[N],G=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[V]:k=Re,te.copy(S.viewport),Pe.copy(S.scissor),Te=S.scissorTest}else te.copy(Se).multiplyScalar(j).floor(),Pe.copy(ze).multiplyScalar(j).floor(),Te=dt;if(V!==0&&(k=O),x.bindFramebuffer(I.FRAMEBUFFER,k)&&x.drawBuffers(S,k),x.viewport(te),x.scissor(Pe),x.setScissorTest(Te),G){const xe=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,V)}else if(Me){const xe=N;for(let we=0;we<S.textures.length;we++){const Re=H.get(S.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Re.__webglTexture,V,xe)}}else if(S!==null&&V!==0){const xe=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,V)}q=-1};function dl(S){const N=H.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,V,k,G,Me,Ee,xe=0){if(!(S&&S.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){x.bindFramebuffer(I.FRAMEBUFFER,we);try{const Re=S.textures[xe],$e=Re.format,et=Re.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const Ae=dl(Re);if(Ae.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G&&I.readPixels(N,V,k,G,pe.convert($e),pe.convert(et),Me)}finally{const Re=ie!==null?H.get(ie).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,k,G,Me,Ee,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G){x.bindFramebuffer(I.FRAMEBUFFER,we);const Re=S.textures[xe],$e=Re.format,et=Re.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const Ae=dl(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),I.readPixels(N,V,k,G,pe.convert($e),pe.convert(et),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Tt=ie!==null?H.get(ie).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Tt);const vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await id(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ut),I.deleteSync(vt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const k=Math.pow(2,-V),G=Math.floor(S.image.width*k),Me=Math.floor(S.image.height*k),Ee=N!==null?N.x:0,xe=N!==null?N.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Ee,xe,G,Me),x.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,k=null,G=0,Me=0){let Ee,xe,we,Re,$e,et,Ae,ut,Tt;const vt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(V!==null)Ee=V.max.x-V.min.x,xe=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,$e=V.min.y,et=V.isBox3?V.min.z:0;else{const St=Math.pow(2,-G);Ee=Math.floor(vt.width*St),xe=Math.floor(vt.height*St),S.isDataArrayTexture?we=vt.depth:S.isData3DTexture?we=Math.floor(vt.depth*St):we=1,Re=0,$e=0,et=0}k!==null?(Ae=k.x,ut=k.y,Tt=k.z):(Ae=0,ut=0,Tt=0);const gt=pe.convert(N.format),Nt=pe.convert(N.type);let be;N.isData3DTexture?(Y.setTexture3D(N,0),be=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),be=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),be=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=x.getParameter(I.UNPACK_ROW_LENGTH),ot=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=x.getParameter(I.UNPACK_SKIP_PIXELS),mn=x.getParameter(I.UNPACK_SKIP_ROWS),Gn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(I.UNPACK_SKIP_ROWS,$e),x.pixelStorei(I.UNPACK_SKIP_IMAGES,et);const Mi=S.isDataArrayTexture||S.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const St=H.get(S),Hn=H.get(N),xt=H.get(St.__renderTarget),Vn=H.get(Hn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,xt.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let yi=0;yi<we;yi++)Mi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(S).__webglTexture,G,et+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(N).__webglTexture,Me,Tt+yi)),I.blitFramebuffer(Re,$e,Ee,xe,Ae,ut,Ee,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||H.has(S)){const St=H.get(S),Hn=H.get(N);x.bindFramebuffer(I.READ_FRAMEBUFFER,D),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let xt=0;xt<we;xt++)Mi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,G,et+xt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,G),pt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Hn.__webglTexture,Me,Tt+xt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Hn.__webglTexture,Me),G!==0?I.blitFramebuffer(Re,$e,Ee,xe,Ae,ut,Ee,xe,I.COLOR_BUFFER_BIT,I.NEAREST):pt?I.copyTexSubImage3D(be,Me,Ae,ut,Tt+xt,Re,$e,Ee,xe):I.copyTexSubImage2D(be,Me,Ae,ut,Re,$e,Ee,xe);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,Me,Ae,ut,Tt,Ee,xe,we,gt,Nt,vt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(be,Me,Ae,ut,Tt,Ee,xe,we,gt,vt.data):I.texSubImage3D(be,Me,Ae,ut,Tt,Ee,xe,we,gt,Nt,vt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,Ae,ut,Ee,xe,gt,Nt,vt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,Ae,ut,vt.width,vt.height,gt,vt.data):I.texSubImage2D(I.TEXTURE_2D,Me,Ae,ut,Ee,xe,gt,Nt,vt);x.pixelStorei(I.UNPACK_ROW_LENGTH,zt),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),x.pixelStorei(I.UNPACK_SKIP_ROWS,mn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Gn),Me===0&&N.generateMipmaps&&I.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){X=0,W=0,ie=null,x.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const as=new P;function Jt(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;as.copy(e),as[n]=0,as.normalize();const c=.5*o/(o+a),f=1-as.angleTo(i)/l;return Math.sign(as[t])===1?f*c:a/(o+a)+c+c*(1-f)}class Pr extends Qn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new P,c=new P,f=new P(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,u=this.attributes.normal.array,m=this.attributes.uv.array,g=p.length/6,_=new P,d=.5/o;for(let h=0,M=0;h<p.length;h+=3,M+=2)switch(l.fromArray(p,h),c.copy(l),c.x-=Math.sign(c.x)*d,c.y-=Math.sign(c.y)*d,c.z-=Math.sign(c.z)*d,c.normalize(),p[h+0]=f.x*Math.sign(l.x)+c.x*r,p[h+1]=f.y*Math.sign(l.y)+c.y*r,p[h+2]=f.z*Math.sign(l.z)+c.z*r,u[h+0]=c.x,u[h+1]=c.y,u[h+2]=c.z,Math.floor(h/g)){case 0:_.set(1,0,0),m[M+0]=Jt(_,c,"z","y",r,n),m[M+1]=1-Jt(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),m[M+0]=1-Jt(_,c,"z","y",r,n),m[M+1]=1-Jt(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),m[M+0]=1-Jt(_,c,"x","z",r,e),m[M+1]=Jt(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),m[M+0]=1-Jt(_,c,"x","z",r,e),m[M+1]=1-Jt(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),m[M+0]=1-Jt(_,c,"x","y",r,e),m[M+1]=1-Jt(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),m[M+0]=Jt(_,c,"x","y",r,e),m[M+1]=1-Jt(_,c,"y","x",r,t);break}}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.segments,e.radius)}}function Iu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Rt;let c=0;for(let f=0;f<i.length;++f){const p=i[f];let u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,f),c+=m}}if(t){let f=0;const p=[];for(let u=0;u<i.length;++u){const m=i[u].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+f);f+=i[u].attributes.position.count}l.setIndex(p)}for(const f in r){const p=wc(r[f]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,p)}for(const f in o){const p=o[f][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<p;++u){const m=[];for(let _=0;_<o[f].length;++_)m.push(o[f][_][u]);const g=wc(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}}return l}function wc(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const o=new e(r),a=new fn(o,t,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const p=l/t;for(let u=0,m=f.count;u<m;u++)for(let g=0;g<t;g++){const _=f.getComponent(u,g);a.setComponent(u+p,g,_)}}else o.set(f.array,l);l+=f.count*t}return s!==void 0&&(a.gpuType=s),a}const b_=[...ya,...nh],E_=i=>b_.includes(i);class T_{constructor(e){this.library=e,this.group=new Sn}part(e,t,n=[0,0,0],s=[1,1,1],r=[0,0,0]){const o=new bt(e,t);return o.position.set(...n),o.scale.set(...s),o.rotation.set(...r),this.group.add(o),o}box(e,t,n=[0,0,0],s=.07,r=[0,0,0]){return this.part(this.library.box(e,s),t,n,[1,1,1],r)}ball(e,t,n=[0,0,0],s=[0,0,0]){return this.part(this.library.sphere(),t,n,e,s)}cylinder(e,t,n,s,r=[0,0,0],o=[0,0,0]){return this.part(this.library.cylinder(e,t,n),s,r,[1,1,1],o)}ring(e,t,n,s=[0,0,0],r=[0,0,0],o=[1,1,1]){return this.part(this.library.ring(e,t),n,s,o,r)}tube(e,t,n,s=!1){const r=new _r(e.map(o=>new P(...o)),s);return this.part(this.library.own(new As(r,Math.max(12,e.length*5),t,6,s)),n)}lathe(e,t,n=[0,0,0],s=[1,1,1]){return this.part(this.library.own(new Va(e.map(r=>new ae(...r)),24)),t,n,s)}shape(e,t,n,s=[0,0,0],r=[0,0,0]){const o=new vr(e.map(l=>new ae(...l))),a=new ws(o,{depth:t,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,steps:1});return a.translate(0,0,-t/2),this.part(this.library.own(a),n,s,[1,1,1],r)}finish(){this.group.updateMatrixWorld(!0);const e=new ei().setFromObject(this.group),t=e.getCenter(new P),n=e.getSize(new P),s=new ht().makeScale(2/Math.max(.01,n.x),2/Math.max(.01,n.y),2/Math.max(.01,n.z));s.multiply(new ht().makeTranslation(-t.x,-t.y,-t.z));const r=new Map;this.group.traverse(a=>{if(!(a instanceof bt))return;const l=a.material,c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(new ht().multiplyMatrices(s,a.matrixWorld));const f=r.get(l)??[];f.push(c),r.set(l,f)});const o=new Sn;for(const[a,l]of r){const c=Iu(l,!1);for(const p of l)p.dispose();if(!c)continue;c.computeBoundingSphere();const f=new bt(this.library.own(c),a);f.castShadow=!0,f.receiveShadow=!0,o.add(f)}return o}}class w_{constructor(e){this.assets=e,this.geometry=new Map}own(e){return this.assets.geometry(e)}cached(e,t){let n=this.geometry.get(e);return n||(n=this.own(t()),this.geometry.set(e,n)),n}sphere(){return this.cached("sphere",()=>new ui(1,18,12))}box(e,t){const n=Math.min(t,...e.map(s=>s/2-.001));return this.cached(`box:${e.join(",")}:${n}`,()=>new Pr(...e,2,n))}cylinder(e,t,n){return this.cached(`cylinder:${e},${t},${n}`,()=>new Bn(e,t,n,24))}ring(e,t){return this.cached(`ring:${e},${t}`,()=>new wr(e,t,6,28))}create(e){const t=new T_(this),n=this.assets.material,s=(g,_=.43)=>n("rubber",g,_,.015),r=(g,_=.28)=>n("metal",g,_,.68),o=(g,_=.27)=>n("ceramic",g,_,.02),a=(g,_=.5,d=1)=>n("plain",g,_,0,d),l=o(16775143),c=s(2238261),f=s(3752010),p=r(15117621),u=[Math.PI/2,0,0],m=[0,0,Math.PI/2];if(e==="goldBar"){const g=n("metal",16764493,.19,.28),_=r(9986335,.3);t.part(this.own(new Bn(1,1.15,.65,4)),g,[0,0,0],[1.38,1,.78],[0,Math.PI/4,0]),t.box([.65,.018,.42],g,[0,.334,0],.035);for(const d of[-.23,0,.23])t.box([.13,.015,.028],_,[d,.35,-.15],.006),t.box([.13,.015,.028],_,[d,.35,-.015],.006),t.box([.026,.015,.16],_,[d-.052,.35,-.082],.006),t.box([.026,.015,.3],_,[d+.052,.35,-.015],.006);t.ring(.13,.016,_,[0,.35,.22],u,[1.65,1,1])}else if(e==="diamondRing"){const g=r(14476773,.14),_=n("plain",8900592,.13,.12);t.ring(.58,.105,g,[0,-.2,0]),t.ring(.58,.026,p,[0,-.2,.085]),t.part(this.own(new Wa(.61,0)),_,[0,.53,0],[1,.73,.9],[0,Math.PI/4,0]),t.part(this.own(new Bn(.43,.2,.23,8)),_,[0,.56,0]);for(const d of[-1,1])t.tube([[d*.43,.1,0],[d*.46,.45,0],[d*.34,.68,0]],.038,g),t.ball([.07,.07,.07],l,[d*.33,.71,.06])}else if(e==="cashBundle"){const g=n("plain",15788755,.8),_=a(6718837),d=a(15323359);t.box([1.8,.34,.86],g,[0,0,0],.035);for(let h=0;h<11;h++)t.box([1.76,.007,.008],_,[0,-.145+h*.028,.433],.002),t.box([.008,.007,.82],_,[.903,-.145+h*.028,0],.002);t.box([1.67,.012,.7],a(13096637),[0,.179,0],.035),t.ring(.22,.026,_,[-.48,.191,0],u,[1,1.25,1]),t.box([.31,.39,.91],d,[0,0,0],.018),t.box([.06,.012,.82],a(10314631),[0,.202,0],.006);for(const h of[-.15,-.035,.08])t.box([.27,.014,.015],_,[.53,.195,h],.004)}else if(e==="luxuryWatch"){const g=o(16381148),_=r(15251277,.18),d=a(1587015,.32);for(const h of[-1,1])for(let M=0;M<4;M++)t.box([.47,.11,.16],_,[0,0,h*(.42+M*.155)],.035),t.box([.17,.025,.135],r(16767866,.22),[0,.07,h*(.42+M*.155)],.02);t.cylinder(.44,.44,.17,_),t.cylinder(.37,.37,.022,g,[0,.104,0]),t.ring(.403,.026,_,[0,.13,0],u);for(let h=0;h<12;h++){const M=h*Math.PI/6;t.box([.024,.015,h%3?.044:.075],d,[Math.sin(M)*.308,.125,Math.cos(M)*.308],.005,[0,M,0])}t.box([.031,.015,.25],d,[0,.145,-.1],.008),t.box([.2,.017,.03],d,[.07,.162,.045],.008,[0,-.5,0]),t.ball([.035,.015,.035],_,[0,.175,0]),t.cylinder(.07,.07,.1,_,[.47,0,0],m)}else if(e==="kingCrab"){const g=s(14966322,.39),_=o(16242090),d=s(15973259);t.ball([.65,.23,.5],g),t.ball([.54,.12,.42],d,[0,-.17,.02]);for(const h of[-1,1]){for(let M=0;M<3;M++){const E=-.22+M*.25;t.tube([[h*.45,-.04,E],[h*.91,.08,E+.15],[h*1.22,-.12,E+.44]],.065,g),t.ball([.085,.085,.085],_,[h*.91,.08,E+.15])}t.tube([[h*.4,0,-.32],[h*.79,.13,-.62],[h*.82,.1,-.94]],.09,g),t.ball([.19,.13,.23],g,[h*.82,.11,-1.02]),t.tube([[h*.94,.12,-1.1],[h*.94,.13,-1.31],[h*.82,.13,-1.39]],.056,_),t.tube([[h*.7,.12,-1.1],[h*.7,.13,-1.29],[h*.78,.13,-1.35]],.05,_),t.ball([.06,.09,.06],c,[h*.22,.18,-.43])}for(let h=0;h<8;h++){const M=h*2.4;t.cylinder(0,.04,.11,_,[Math.sin(M)*.45,.19,Math.cos(M)*.31])}}else if(e==="violin"){const g=n("wood",10242342,.31),_=n("wood",13931337,.37),d=r(14735281,.36),h=[[0,-.85],[-.4,-.77],[-.51,-.5],[-.44,-.21],[-.25,-.06],[-.31,.15],[-.48,.33],[-.43,.6],[-.26,.77],[0,.8],[.26,.77],[.43,.6],[.48,.33],[.31,.15],[.25,-.06],[.44,-.21],[.51,-.5],[.4,-.77]];t.shape(h,.22,_,[0,-.04,.24],[-Math.PI/2,0,0]),t.shape(h.map(([M,E])=>[M*.96,E*.96]),.045,g,[0,.092,.24],[-Math.PI/2,0,0]),t.box([.14,.11,1],f,[0,.15,-.79],.025),t.ball([.12,.11,.15],g,[0,.15,-1.35]);for(const M of[-1.23,-1.13,-1.03,-.93])t.cylinder(.045,.045,.29,c,[0,.15,M],m);t.box([.2,.06,.3],c,[0,.15,.79],.045),t.box([.31,.12,.045],_,[0,.17,.38],.012);for(let M=0;M<4;M++)t.tube([[-.051+M*.034,.213,-1.26],[-.051+M*.034,.24,.39],[-.051+M*.034,.19,.84]],.007,d);for(const M of[-1,1])t.tube([[M*.29,.134,.52],[M*.2,.136,.39],[M*.23,.136,.18],[M*.3,.134,.1]],.021,c)}else if(e==="mystery"){const g=s(15316013,.29),_=o(16768114);t.box([1.84,1.84,1.84],g,[0,0,0],.15);for(const h of[-1,1])for(const M of[-1,1])t.box([.035,1.57,.035],_,[h*.87,0,M*.87],.015),t.box([1.57,.035,.035],_,[0,h*.87,M*.87],.015),t.box([.035,.035,1.57],_,[h*.87,M*.87,0],.015);const d=[[-.3,.31,.94],[-.3,.49,.94],[-.08,.62,.94],[.22,.56,.94],[.31,.36,.94],[.2,.17,.94],[.02,.03,.94],[.02,-.18,.94]];for(let h=0;h<3;h++){const M=E=>h===0?E:h===1?[E[2],E[1],-E[0]]:[E[0],E[2],-E[1]];t.tube(d.map(M),.085,l),t.ball([.095,.095,.055],l,M([.02,-.49,.94]),h===1?[0,Math.PI/2,0]:h===2?[-Math.PI/2,0,0]:[0,0,0])}}else if(e==="boot"){const g=s(3234723,.25),_=s(15318863,.38);t.box([.95,.6,1.83],g,[0,-.57,.12],.22),t.box([.82,1.28,.83],g,[0,.15,-.4],.13),t.box([1.04,.2,2],_,[0,-.91,.11],.09),t.ball([.35,.05,.34],c,[0,.81,-.4]),t.ring(.39,.075,_,[0,.8,-.4],u,[1,.88,1]),t.box([.16,.29,.1],g,[0,.9,-.81],.04),t.box([.29,.74,.035],s(4026040),[0,.19,.032],.035);for(let d=0;d<5;d++)t.box([.15,.045,1.62],f,[-.37+d*.185,-1.02,.11],.012);t.tube([[-.22,.56,.039],[-.24,-.2,.039],[-.31,-.4,.48],[-.3,-.4,.73]],.022,_),t.tube([[.22,.56,.039],[.24,-.2,.039],[.31,-.4,.48],[.3,-.4,.73]],.022,_)}else if(e==="toilet"){const g=o(15919836),_=a(7259859,.17);t.box([1.14,1.12,.46],l,[0,.36,-.72],.13),t.box([1.23,.12,.54],g,[0,.96,-.72],.06),t.box([.72,.18,1.15],l,[0,-.9,-.04],.08),t.box([.61,.72,.66],l,[0,-.48,-.12],.17),t.lathe([[.12,-.5],[.47,-.41],[.65,-.16],[.73,.16],[.71,.29],[.57,.29],[.49,.05],[.21,-.24],[.12,-.29]],l,[0,-.04,.17],[1,1,1.14]),t.ring(.65,.09,g,[0,.27,.17],u,[1,1.12,1]),t.ball([.49,.045,.54],_,[0,-.05,.19]),t.ball([.66,.65,.065],g,[0,.72,-.48],[-.12,0,0]),t.ball([.55,.55,.07],l,[0,.72,-.39],[-.12,0,0]),t.box([.26,.08,.06],r(13029073),[.38,.55,-.455],.03,[0,0,.16])}else if(e==="alarmClock"){const g=r(6658973),_=a(16773583);t.ball([.79,.79,.38],g),t.cylinder(.67,.67,.065,_,[0,0,.36],u),t.ring(.7,.052,p,[0,0,.4]);for(let d=0;d<12;d++){const h=d/12*Math.PI*2;t.box([.035,d%3===0?.14:.08,.027],c,[Math.sin(h)*.55,Math.cos(h)*.55,.408],.008,[0,0,-h])}t.box([.065,.46,.04],c,[-.105,.16,.44],.02,[0,0,.55]),t.box([.047,.6,.035],c,[.2,.1,.45],.015,[0,0,-1.02]),t.ball([.075,.075,.045],p,[0,0,.49]);for(const d of[-1,1])t.ball([.4,.19,.32],g,[d*.57,.72,0],[0,0,-d*.35]),t.cylinder(.045,.065,.26,p,[d*.48,.57,0],[0,0,-d*.35]),t.box([.15,.31,.19],p,[d*.47,-.77,0],.04,[0,0,-d*.27]);t.tube([[-.33,.78,-.03],[-.3,.99,-.03],[.3,.99,-.03],[.33,.78,-.03]],.05,p),t.cylinder(.09,.09,.09,p,[0,.91,0])}else if(e==="battery")t.cylinder(.57,.57,1.35,c,[0,-.15,0]),t.cylinder(.57,.57,.43,r(13206606),[0,.74,0]),t.cylinder(.24,.24,.13,r(14475486),[0,1.02,0]),t.ring(.55,.033,r(10988716),[0,-.83,0],u),t.box([.4,.085,.04],l,[0,.25,.568],.01),t.box([.085,.4,.04],l,[0,.25,.568],.01),t.box([.26,.05,.04],l,[0,-.6,.568],.01),t.box([.09,.51,.035],s(13206606),[.31,-.17,.485],.018,[0,0,-.25]);else if(e==="controller"){const g=s(14538958,.29);t.box([1.54,.68,.54],g,[0,.16,0],.22);for(const d of[-1,1])t.box([.64,1.03,.62],g,[d*.68,-.2,-.015],.25,[0,0,d*.23]),t.box([.48,.14,.35],f,[d*.57,.54,-.08],.06);t.box([.46,.13,.065],f,[-.49,.19,.32],.025),t.box([.13,.46,.065],f,[-.49,.19,.32],.025);const _=[14113633,5874030,6000073,15186507];for(let d=0;d<4;d++){const h=d*Math.PI/2;t.cylinder(.09,.105,.075,s(_[d]),[.5+Math.cos(h)*.18,.2+Math.sin(h)*.18,.325],u)}for(const d of[-1,1])t.cylinder(.185,.185,.065,f,[d*.24,-.2,.335],u),t.cylinder(.122,.15,.1,c,[d*.24,-.2,.395],u);t.box([.12,.05,.05],f,[0,.21,.315],.02),t.ball([.035,.035,.018],s(9684396),[0,.4,.3])}else if(e==="trophy"){t.box([1.12,.28,.92],n("wood",7557434,.46),[0,-.91,0],.05),t.box([.83,.14,.68],p,[0,-.71,0],.035),t.cylinder(.12,.21,.46,p,[0,-.42,0]),t.lathe([[.12,-.21],[.3,-.08],[.52,.17],[.62,.57],[.64,.78],[.54,.78],[.51,.58],[.39,.26],[.12,.04]],p),t.ring(.6,.045,p,[0,.78,0],u);for(const _ of[-1,1])t.tube([[_*.57,.64,0],[_*.93,.67,0],[_*.94,.2,0],[_*.48,-.03,0]],.065,p);t.box([.48,.16,.025],r(15978089),[0,-.9,.476],.02);const g=[];for(let _=0;_<10;_++){const d=_*Math.PI/5+Math.PI/2,h=_%2?.09:.19;g.push([Math.cos(d)*h,Math.sin(d)*h])}t.shape(g,.05,r(16768899),[0,.35,.59])}else if(e==="trafficCone"){const g=s(15297837,.39);t.box([1.8,.18,1.65],f,[0,-.93,0],.12),t.cylinder(.08,.65,1.72,g,[0,.02,0]);for(const[_,d]of[[-.31,.23],[.3,.19]]){const h=M=>.65-(M+.84)/1.72*.57+.008;t.cylinder(h(_+d/2),h(_-d/2),d,l,[0,_,0])}t.cylinder(.066,.066,.008,c,[0,.884,0]),t.box([1.48,.04,1.32],g,[0,-.817,0],.11)}else if(e==="rubberDuck"){const g=s(16172601,.28),_=s(15697716,.32);t.ball([.85,.64,.92],g,[0,-.31,-.07]),t.ball([.53,.53,.52],g,[0,.48,.4]),t.box([.58,.14,.49],_,[0,.34,.86],.11),t.box([.49,.08,.38],_,[0,.23,.84],.035);for(const d of[-1,1])t.ball([.19,.35,.51],s(15382323,.3),[d*.73,-.25,-.06],[0,d*.2,d*.3]),t.ball([.07,.08,.06],c,[d*.36,.6,.77]),t.ball([.022,.025,.02],l,[d*.354,.62,.82]);t.cylinder(0,.29,.67,g,[0,.02,-.85],[-.65,0,0])}else if(e==="cactus"){const g=o(12151110,.64),_=s(5277285,.66),d=s(7512428,.69);t.cylinder(.55,.38,.66,g,[0,-.69,0]),t.ring(.53,.065,g,[0,-.35,0],u),t.cylinder(.48,.48,.035,n("wood",7031600,.86),[0,-.348,0]),t.ball([.3,.67,.3],_,[0,.25,0]);for(const h of[-1,1]){const M=h>0?.35:.05;t.tube([[h*.18,M-.15,0],[h*.54,M-.11,0],[h*.62,M+.11,0],[h*.62,M+.4,0]],.15,_)}for(let h=0;h<7;h++){const M=h*Math.PI*2/7;t.tube([[Math.sin(M)*.18,-.25,Math.cos(M)*.18],[Math.sin(M)*.29,.22,Math.cos(M)*.29],[Math.sin(M)*.16,.79,Math.cos(M)*.16]],.021,d)}for(let h=0;h<12;h++){const M=h*2.4,E=-.15+h%4*.23,y=Math.sin(M)*.29,w=Math.cos(M)*.29;t.tube([[y,E,w],[y*1.22,E+.04,w*1.22]],.012,l)}for(let h=0;h<5;h++){const M=h*Math.PI*2/5;t.ball([.11,.07,.13],s(14255010),[Math.cos(M)*.12,.92,Math.sin(M)*.12])}t.ball([.08,.055,.08],p,[0,.97,0])}else if(e==="dumbbell"){t.cylinder(.13,.13,1.83,r(12436680),[0,0,0],m),t.cylinder(.18,.18,.7,f,[0,0,0],m);for(const g of[-1,1])t.cylinder(.58,.58,.26,c,[g*.72,0,0],m),t.cylinder(.47,.47,.18,f,[g*.93,0,0],m),t.cylinder(.18,.18,.1,r(11844028),[g*1.07,0,0],m),t.ring(.39,.023,s(5988971),[g*1.027,0,0],[0,Math.PI/2,0]);for(let g=0;g<7;g++)t.ring(.178,.012,r(9212823,.49),[-.27+g*.09,0,0],[0,Math.PI/2,0])}else if(e==="kettle"){const g=o(8167049),_=r(12568509);t.lathe([[.1,-.76],[.56,-.72],[.7,-.4],[.72,-.1],[.61,.4],[.41,.6],[.25,.61]],g),t.cylinder(.44,.49,.08,_,[0,.62,0]),t.ball([.12,.11,.12],c,[0,.74,0]),t.ring(.55,.06,_,[0,-.68,0],u),t.tube([[-.48,.31,-.1],[-.75,.64,-.1],[-.62,1.05,-.1],[.45,1.09,-.1],[.67,.66,-.1],[.48,.33,-.1]],.095,c),t.tube([[.55,-.1,0],[.89,.08,0],[1.1,.48,0]],.15,g),t.cylinder(.125,.125,.045,c,[1.11,.5,0],[0,0,-.4]),t.cylinder(.16,.16,.035,_,[1.09,.47,0],[0,0,-.4]),t.box([.17,.09,.19],s(14123621),[-.51,-.42,.42],.03)}else if(e==="bowlingPin")t.lathe([[0,-1],[.33,-1],[.43,-.88],[.54,-.62],[.57,-.35],[.5,-.08],[.3,.25],[.2,.47],[.28,.69],[.31,.87],[.24,1.03],[0,1.1]],l),t.cylinder(.225,.263,.09,s(13129294),[0,.365,0]),t.cylinder(.227,.214,.08,s(13129294),[0,.525,0]),t.cylinder(.32,.32,.035,f,[0,-.997,0]);else if(e==="handheld"){const g=s(13947069,.36),_=a(10201459,.46);t.box([1.3,1.98,.36],g,[0,0,0],.13),t.box([1.08,.87,.08],f,[0,.42,.211],.09),t.box([.8,.62,.025],_,[.04,.44,.26],.025);for(let d=0;d<4;d++)t.box([.11,.11,.015],s(6452300),[-.23+d*.11,.32+d%2*.11,.28],.005);t.box([.4,.12,.08],c,[-.33,-.34,.23],.015),t.box([.12,.4,.08],c,[-.33,-.34,.23],.015);for(const[d,h]of[[.25,-.38],[.46,-.21]])t.cylinder(.11,.11,.08,s(10767987),[d,h,.24],u);for(const d of[-.1,.14])t.box([.17,.045,.045],f,[d,-.75,.215],.017,[0,0,.35]);for(let d=0;d<5;d++)t.box([.026,.18,.02],f,[.35+d*.055,-.75,.201],.008,[0,0,-.4]);t.ball([.025,.025,.015],s(12933974),[-.45,.64,.262])}else if(e==="rocket"){const g=s(13196621,.33),_=r(14081495,.4);t.cylinder(.43,.43,1.17,_,[0,-.12,0]),t.cylinder(0,.445,.64,g,[0,.785,0]),t.cylinder(.44,.44,.15,g,[0,-.65,0]),t.cylinder(.24,.33,.24,f,[0,-.84,0]),t.ring(.22,.048,p,[0,.18,.402]),t.ball([.182,.182,.065],o(7581628),[0,.18,.432]);for(let d=0;d<4;d++)t.shape([[.32,-.17],[.84,-.89],[.36,-.73]],.15,g,[0,0,0],[0,d*Math.PI/2,0]);t.cylinder(.18,.04,.38,s(15841870),[0,-1.09,0])}else if(e==="luckyCat"){const g=s(12998472),_=s(14723486);t.ball([.61,.68,.5],l,[0,-.34,0]),t.ball([.6,.55,.48],l,[0,.49,0]);for(const d of[-1,1]){t.shape([[-.18,0],[.18,0],[d*.1,.4]],.2,l,[d*.35,.79,-.03]),t.shape([[-.1,0],[.1,0],[d*.05,.24]],.025,_,[d*.35,.85,.09]),t.ball([.23,.17,.31],l,[d*.33,-.87,.28]),t.tube([[d*.11,.5,.463],[d*.2,.56,.476],[d*.29,.52,.455]],.023,c);for(let h=0;h<2;h++)t.tube([[d*.34,.32+h*.08,.42],[d*.53,.3+h*.1,.35]],.015,f)}t.ball([.105,.065,.045],_,[0,.37,.49]),t.tube([[0,.34,.497],[0,.25,.497],[-.08,.23,.485]],.018,c),t.tube([[0,.25,.497],[.08,.23,.485]],.018,c),t.ring(.42,.055,g,[0,.035,.035],u,[1,.95,1]),t.ball([.11,.11,.08],p,[0,-.02,.49]),t.ball([.22,.47,.22],l,[-.66,.27,.02],[0,0,-.16]),t.ball([.245,.25,.22],l,[-.72,.66,.08]);for(let d=0;d<3;d++)t.tube([[-.84+d*.09,.72,.278],[-.84+d*.09,.62,.289]],.013,_);t.ball([.22,.36,.22],l,[.57,-.28,.11],[0,0,-.25]),t.ball([.33,.44,.075],p,[.13,-.43,.48],[0,0,-.13]),t.box([.04,.46,.026],r(12420139),[.13,-.43,.558],.01,[0,0,-.13]);for(const d of[-.56,-.35])t.box([.27,.034,.026],r(12420139),[.13,d,.558],.008,[0,0,-.13])}else if(e==="miniFan"){const g=s(7446187,.35),_=r(12766411,.36);t.ball([.6,.105,.4],g,[0,-.9,0]),t.cylinder(.09,.13,.75,_,[0,-.52,-.09]),t.ball([.29,.29,.28],g,[0,.23,-.16]);for(let d=0;d<3;d++){const h=d*Math.PI*2/3;t.ball([.16,.54,.06],s(9224396,.31),[Math.sin(h)*.27,.23+Math.cos(h)*.27,.13],[0,0,-h+.24])}for(const[d,h]of[[.77,.12],[.72,.27],[.56,.35],[.34,.39]])t.ring(d,.023,_,[0,.23,h]);for(let d=0;d<12;d++){const h=d*Math.PI*2/12;t.tube([[Math.sin(h)*.12,.23+Math.cos(h)*.12,.42],[Math.sin(h)*.49,.23+Math.cos(h)*.49,.36],[Math.sin(h)*.77,.23+Math.cos(h)*.77,.12]],.014,_)}t.ball([.14,.14,.06],g,[0,.23,.43]),t.cylinder(.065,.065,.04,s(13199706),[.21,-.8,.18])}else if(e==="trafficLight"){t.box([.86,1.94,.5],c,[0,.13,0],.14);const g=[s(14312019,.21),s(15318339,.21),s(6860928,.21)];for(let _=0;_<3;_++){const d=.72-_*.59;t.cylinder(.267,.267,.065,f,[0,d,.27],u),t.ball([.215,.215,.085],g[_],[0,d,.32]),t.tube([[-.29,d+.02,.32],[-.24,d+.24,.47],[0,d+.3,.49],[.24,d+.24,.47],[.29,d+.02,.32]],.05,c)}t.cylinder(.11,.11,.44,f,[0,-1.02,-.03]),t.box([.62,.09,.52],r(9081751),[0,-1.25,-.03],.04)}else if(e==="puzzleCube"){const g=[s(13261651),s(14989111),s(6920043),s(5342393),l,s(14519107)];for(let _=-1;_<=1;_++)for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++)t.box([.625,.625,.625],c,[_*.65,d*.65,h*.65],.06),_!==0&&t.box([.035,.51,.51],g[_>0?0:3],[_*.971,d*.65,h*.65],.015),d!==0&&t.box([.51,.035,.51],g[d>0?1:4],[_*.65,d*.971,h*.65],.015),h!==0&&t.box([.51,.51,.035],g[h>0?2:5],[_*.65,d*.65,h*.971],.015)}else if(e==="lightBulb"){const g=a(16771235,.16,.28),_=r(11504465,.4);t.ball([.67,.74,.67],g,[0,.32,0]),t.cylinder(.3,.34,.48,g,[0,-.39,0]),t.cylinder(.34,.34,.55,r(12697264),[0,-.68,0]);for(let h=0;h<5;h++)t.ring(.34,.038,r(9277835,.4),[0,-.88+h*.105,0],u);t.cylinder(.2,.27,.13,c,[0,-1,0]),t.tube([[-.13,-.52,0],[-.17,.24,0],[-.28,.42,0]],.018,_),t.tube([[.13,-.52,0],[.17,.24,0],[.28,.42,0]],.018,_);const d=[];for(let h=0;h<=24;h++)d.push([-.28+h/24*.56,.42+Math.sin(h*Math.PI/2)*.043,Math.cos(h*Math.PI/2)*.043]);t.tube(d,.018,a(15050305,.3))}else e==="deskBell"&&(t.cylinder(.85,.91,.19,c,[0,-.85,0]),t.ring(.82,.035,r(12896449),[0,-.74,0],u),t.lathe([[0,-.7],[.75,-.7],[.76,-.55],[.68,-.24],[.48,.12],[.25,.29],[.13,.35]],p),t.cylinder(.075,.09,.32,r(13093311),[0,.48,0]),t.cylinder(.21,.23,.1,p,[0,.69,0]),t.ball([.2,.035,.2],p,[0,.75,0]),t.box([.36,.12,.027],r(12296562),[0,-.85,.9],.025));return e==="boot"?t.group.rotation.y=Math.PI/2:e==="battery"||e==="bowlingPin"?t.group.rotation.z=Math.PI/2:e==="controller"?t.group.rotation.x=-Math.PI/2:e==="handheld"&&t.group.rotation.set(-Math.PI/2,0,Math.PI/2),t.finish()}}const A_={rx:.36,ry:.36,rz:.36},Ac=i=>i.concealed?A_:jt[i.kind],C_=Math.PI*2,R_=new P(0,1,0),ir=(i,e,t)=>Math.max(e,Math.min(t,i));class P_{constructor(e){this.element=e,this.scene=new vd,this.camera=new Ar(-3,3,4,-4,.1,60),this.geometry=new Set,this.materials=new Set,this.textures=new Set,this.models=new Map,this.foods=new Map,this.pickable=[],this.foodOrder=[],this.escaped=new Set,this.bento=new Sn,this.lidPivot=new Sn,this.particles=Array.from({length:32},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0})),this.particleCursor=0,this.particlesActive=!1,this.dummy=new Lt,this.ray=new Ef,this.pointer=new ae,this.plane=new Nn(new P(0,1,0),-.12),this.intersection=new P,this.stickFrom=new P,this.stickTo=new P,this.stickDirection=new P,this.cameraTarget=new P(0,.66,-.04),this.oddTiles=new Map,this.oddMaterials=new Map,this.oddModels=new w_({geometry:a=>this.ownGeometry(a),material:(a,l,c,f,p)=>this.oddMaterial(a,l,c,f,p)}),this.width=1,this.height=1,this.reduced=!1,this.disposed=!1,this.previousPhase=null,this.resultStartedAt=0,this.baseCamera=new P(0,7.6,7.4),this.renderer=new S_({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kc,this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=wa,this.renderer.toneMappingExposure=1.04,this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.touchAction="none",e.append(this.renderer.domElement),this.scene.background=new Ke(15721422),this.scene.add(new vf(16775657,8414020,1.9));const t=new jl(16773078,2.55);t.position.set(-4.5,8,5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,t.shadow.camera.near=.2,t.shadow.camera.far=22,t.shadow.normalBias=.025,t.shadow.bias=-3e-4,this.scene.add(t);const n=new jl(15003135,.9);n.position.set(4,4,-4),this.scene.add(n),this.shellMat=this.ownMaterial(new ff({color:10958125,roughness:.27,metalness:.025,clearcoat:.65,clearcoatRoughness:.26}));const s=["chicken","shrimp","egg","broccoli","sausage","rice"];this.foodMats=Object.fromEntries(s.map(a=>[a,this.mat(jt[a].color,a==="chicken"||a==="shrimp"?.86:.53)])),this.makeCounter(),this.makeBox(),this.makeLid(),this.scene.add(this.bento);const r=this.mat(10119996,.55),o=this.ownGeometry(new Bn(.025,.053,1,8));this.sticks=[new bt(o,r),new bt(o,r)];for(const a of this.sticks)a.castShadow=!0,a.visible=!1,this.scene.add(a);this.landing=new bt(this.ownGeometry(new Xa(.87,.92,48)),this.ownMaterial(new gr({color:12871230,transparent:!0,opacity:.7,side:Mn,depthTest:!1}))),this.landing.rotation.x=-Math.PI/2,this.landing.renderOrder=8,this.landing.visible=!1,this.scene.add(this.landing),this.heldHalo=new bt(this.ownGeometry(new wr(1,.025,5,48)),this.ownMaterial(new gr({color:16768896,transparent:!0,opacity:.8,depthTest:!1}))),this.heldHalo.rotation.x=-Math.PI/2,this.heldHalo.renderOrder=9,this.heldHalo.visible=!1,this.scene.add(this.heldHalo),this.specks=new Dn(this.ownGeometry(new ms(.045,0)),this.mat(16044698,.9),this.particles.length),this.specks.instanceMatrix.setUsage(ed),this.specks.frustumCulled=!1,this.scene.add(this.specks),this.updateParticles(0),this.camera.position.copy(this.baseCamera),this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld(),this.resize()}ownGeometry(e){return this.geometry.add(e),e}ownMaterial(e){return this.materials.add(e),e}mat(e,t=.55){return this.ownMaterial(new ma({color:e,roughness:t,metalness:0}))}rounded(e,t,n,s=.1){return this.ownGeometry(new Pr(e,t,n,3,s))}mesh(e,t,n,s=0,r=0,o=0){const a=new bt(t,n);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,e.add(a),a}roundPath(e,t,n){const s=e/2,r=t/2,o=Math.min(n,s,r),a=new vr;return a.moveTo(-s+o,-r),a.lineTo(s-o,-r),a.quadraticCurveTo(s,-r,s,-r+o),a.lineTo(s,r-o),a.quadraticCurveTo(s,r,s-o,r),a.lineTo(-s+o,r),a.quadraticCurveTo(-s,r,-s,r-o),a.lineTo(-s,-r+o),a.quadraticCurveTo(-s,-r,-s+o,-r),a}ringGeometry(e,t,n,s,r,o){const a=this.roundPath(e,t,o),l=this.roundPath(n,s,Math.max(.05,o-.1));a.holes.push(new da(l.getPoints(9).reverse()));const c=new ws(a,{depth:r,bevelEnabled:!1,curveSegments:10,steps:1});return c.rotateX(-Math.PI/2),this.ownGeometry(c)}makeCounter(){const e=new bt(this.rounded(26,.28,26,.08),this.mat(14468256,.88));e.position.y=-.23,e.receiveShadow=!0,this.scene.add(e);const t=this.mat(13283465,.94),n=new Dn(this.ownGeometry(new Qn(20,.001,.012)),t,11);for(let a=0;a<11;a++)this.dummy.position.set(Math.sin(a)*.2,-.088,(a-5)*1.15),this.dummy.updateMatrix(),n.setMatrixAt(a,this.dummy.matrix);this.scene.add(n);const s=new Sn,r=this.mesh(s,this.rounded(4.8,.025,3.9,.1),this.mat(15197651,.98),-.07,-.065,.03);r.rotation.y=-.04;const o=this.mat(10135434,.95);for(let a=0;a<4;a++){const l=this.mesh(s,this.ownGeometry(new Qn(.035,.003,3.8)),o,-2.24+a*.11,-.049,.03);l.rotation.y=-.04}this.scene.add(s)}makeBox(){const e=Ve.halfX*2,t=Ve.halfZ*2,n=Ve.floorY;this.mesh(this.bento,this.rounded(e+.29,.21,t+.29,.18),this.shellMat,0,n-.105,0),this.mesh(this.bento,this.rounded(e-.025,.025,t-.025,.17),this.mat(7809056,.52),0,n-.009,0);const s=this.ringGeometry(e+.29,t+.29,e,t,Ve.rimY-n,.22);this.mesh(this.bento,s,this.shellMat,0,n,0);const r=this.ringGeometry(e+.32,t+.32,e-.005,t-.005,.055,.24);this.mesh(this.bento,r,this.mat(6496027,.3),0,Ve.rimY-.025,0);const o=this.ringGeometry(e+.04,t+.04,e-.005,t-.005,.018,.15);this.mesh(this.bento,o,this.mat(14183244,.45),0,Ve.rimY+.025,0);const a=this.mat(5776668,.65);for(const l of[-1,1])for(const c of[-1,1])this.mesh(this.bento,this.rounded(.3,.07,.3,.05),a,l*(Ve.halfX-.28),-.023,c*(Ve.halfZ-.28))}makeLid(){const e=Ve.halfZ*2+.26;this.lidPivot.position.set(0,Ve.rimY+.06,-1.3-.02);const t=this.mesh(this.lidPivot,this.rounded(Ve.halfX*2+.34,.095,e,.18),this.shellMat,0,.025,e/2);t.castShadow=!0;const n=this.mesh(this.lidPivot,this.rounded(Ve.halfX*2+.02,.012,e-.3,.15),this.mat(12995638,.38),0,.079,e/2);n.receiveShadow=!0;const s=this.ringGeometry(Ve.halfX*2+.1,e-.22,Ve.halfX*2+.055,e-.265,.009,.15);this.mesh(this.lidPivot,s,this.mat(15053164,.42),0,.088,e/2);const r=this.mesh(this.lidPivot,this.ownGeometry(new Bn(.21,.21,.012,32)),this.mat(14856287,.55),0,.094,e*.49);r.scale.z=.7,this.bento.add(this.lidPivot),this.lidPivot.visible=!1}oddMaterial(e,t,n=.45,s=0,r=1){const o=`${e}:${t}:${n}:${s}:${r}`;let a=this.oddMaterials.get(o);if(!a){const l=this.ownMaterial(new ma({color:t,roughness:n,metalness:s,transparent:r<1,opacity:r,depthWrite:r>=1,map:this.oddTiles.get(e)??null}));a={surface:e,material:l},this.oddMaterials.set(o,a)}return a.material}model(e,t=!1){const n=t?"mystery":e,s=this.models.get(n);if(s)return s.clone(!0);if(t||E_(e)){const l=this.oddModels.create(t?"mystery":e);return this.models.set(n,l),l.clone(!0)}const r=new Sn,o=this.foodMats[e],a=()=>this.ownGeometry(new ui(1,14,10));if(e==="chicken"){const l=this.ownGeometry(new ms(1,3)),c=l.getAttribute("position");for(let u=0;u<c.count;u++){const m=c.getX(u),g=c.getY(u),_=c.getZ(u),d=1+Math.sin(m*7.3+g*2.8)*.085+Math.sin(_*9.1-g*5.7)*.055;c.setXYZ(u,m*d,g*d*.93,_*d)}l.computeVertexNormals(),this.mesh(r,l,o);const f=new Dn(this.ownGeometry(new ms(.075,0)),this.mat(16777215,.92),85),p=new Ke;for(let u=0;u<85;u++){const m=1-2*(u+.5)/85,g=u*2.399963,_=Math.sqrt(1-m*m);this.dummy.position.set(Math.cos(g)*_,m*.94,Math.sin(g)*_),this.dummy.rotation.set(u*.73,u*1.17,u*.47),this.dummy.scale.setScalar(.6+u*13%17/17*.75),this.dummy.updateMatrix(),f.setMatrixAt(u,this.dummy.matrix),p.setHex(u%4===0?9127195:u%3===0?15116883:12943410),f.setColorAt(u,p)}f.castShadow=!0,r.add(f)}else if(e==="shrimp"){const l=new Dn(a(),o,9),c=new Ke;for(let p=0;p<9;p++){const u=p/8,m=1-u*.4;this.dummy.position.set(-.76+u*1.28,Math.sin(u*Math.PI)*.08,Math.sin(u*1.7)*.12),this.dummy.rotation.set(0,-.13+u*.16,-.1+u*.13),this.dummy.scale.set(.18,.7*m,.83*m),this.dummy.updateMatrix(),l.setMatrixAt(p,this.dummy.matrix),c.setHex(p%2?16773319:15912067),l.setColorAt(p,c)}l.castShadow=!0,l.receiveShadow=!0,r.add(l);const f=this.mat(15300696,.48);for(const p of[-1,1]){const u=this.mesh(r,this.ownGeometry(new ka(.34,.64,3)),f,.76,-.05,p*.38);u.rotation.z=-Math.PI/2,u.rotation.x=p*.38,u.scale.set(1,.7,1)}}else if(e==="egg"){this.mesh(r,this.rounded(1.93,1.78,1.88,.24),o);const l=[];for(let f=0;f<=95;f++){const p=f/95*Math.PI*5,u=.025+p*.042;l.push(new P(Math.cos(p)*u,Math.sin(p)*u*.87,.951))}this.mesh(r,this.ownGeometry(new As(new _r(l),95,.035,5,!1)),this.mat(13142815,.55));const c=this.mesh(r,this.rounded(1.72,.07,1.68,.02),this.mat(16770955,.58),0,.8,0);c.rotation.z=-.03}else if(e==="broccoli"){const l=this.mesh(r,this.ownGeometry(new Bn(.24,.32,1.3,10)),this.mat(9614948,.77),0,-.33,0);l.rotation.z=-.05;const c=new Dn(a(),o,7),f=[[0,.57,0,.47],[-.48,.29,0,.45],[.48,.29,0,.45],[-.25,.31,.43,.44],[.28,.35,.43,.44],[-.28,.32,-.43,.44],[.28,.35,-.43,.44]];f.forEach(([u,m,g,_],d)=>{this.dummy.position.set(u,m,g),this.dummy.rotation.set(0,d,0),this.dummy.scale.set(_,_,_),this.dummy.updateMatrix(),c.setMatrixAt(d,this.dummy.matrix)}),c.castShadow=!0,r.add(c);const p=new Dn(this.ownGeometry(new ui(.067,5,4)),this.mat(5669438,.88),154);for(let u=0;u<154;u++){const m=f[u%f.length],g=.2+(Math.sin(u*1.7)*.5+.5)*.8,_=u*2.4,d=Math.sqrt(1-g*g)*m[3];this.dummy.position.set(m[0]+Math.cos(_)*d,m[1]+g*m[3],m[2]+Math.sin(_)*d),this.dummy.rotation.set(0,u,0),this.dummy.scale.setScalar(.8+u%5*.08),this.dummy.updateMatrix(),p.setMatrixAt(u,this.dummy.matrix)}p.castShadow=!0,r.add(p)}else if(e==="sausage"){this.mesh(r,this.ownGeometry(new za(.58,.54,5,16)),o,0,.32,0);const l=[];for(let p=0;p<8;p++){const u=p*C_/8,m=[new P(Math.cos(u)*.18,-.1,Math.sin(u)*.18),new P(Math.cos(u)*.5,-.5,Math.sin(u)*.5),new P(Math.cos(u)*.79,-.72,Math.sin(u)*.79),new P(Math.cos(u)*.83,-.58,Math.sin(u)*.83)];l.push(new As(new _r(m),14,.13,7,!1))}const c=Iu(l);for(const p of l)p.dispose();c&&this.mesh(r,this.ownGeometry(c),o);const f=new Dn(this.ownGeometry(new ui(.1,8,6)),this.mat(3810588,.55),2);for(let p=0;p<2;p++)this.dummy.position.set(p?.21:-.21,.46,.54),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(1,1.25,.7),this.dummy.updateMatrix(),f.setMatrixAt(p,this.dummy.matrix);r.add(f)}else{const l=new vr;l.moveTo(-.7,-.88),l.quadraticCurveTo(-1.04,-.85,-.86,-.48),l.lineTo(-.23,.73),l.quadraticCurveTo(0,1.07,.23,.73),l.lineTo(.86,-.48),l.quadraticCurveTo(1.04,-.85,.7,-.88),l.closePath();const c=this.ownGeometry(new ws(l,{depth:1.46,bevelEnabled:!0,bevelSegments:3,bevelSize:.09,bevelThickness:.09,curveSegments:12,steps:1}));c.translate(0,0,-.73),this.mesh(r,c,o);const f=new Dn(this.ownGeometry(new ui(1,5,4)),this.mat(16776427,.64),125);for(let p=0;p<125;p++){const u=-.75+p*47%125/125*1.62,m=.85*(1-(u+.75)/2.1),g=Math.sin(p*7.71)*m;this.dummy.position.set(g,u,p%5===0?-.84:.84),this.dummy.rotation.set(0,0,p*.71),this.dummy.scale.set(.035,.075,.03),this.dummy.updateMatrix(),f.setMatrixAt(p,this.dummy.matrix)}f.castShadow=!0,r.add(f),this.mesh(r,this.rounded(.69,.91,.045,.03),this.mat(2703660,.74),0,-.47,.895)}return r.traverse(l=>{l instanceof bt&&(l.castShadow=!0,l.receiveShadow=!0)}),this.models.set(n,r),r.clone(!0)}async loadAtlas(e){const t=await new $l().loadAsync(e);if(this.disposed){t.dispose();return}const n=[["chicken",0,.5],["shrimp",0,.5],["egg",.5,.5],["rice",0,0],["broccoli",.5,0]];for(const[s,r,o]of n){const a=t.clone();a.colorSpace=Gt,a.repeat.set(.5,.5),a.offset.set(r,o),a.needsUpdate=!0,this.textures.add(a);const l=this.foodMats[s];l.map=a,l.color.setHex(16777215),l.needsUpdate=!0}t.dispose()}async loadOddAtlas(e){const t=await new $l().loadAsync(e);if(this.disposed){t.dispose();return}const n=[["wood",0,.5],["metal",.5,.5],["rubber",0,0],["ceramic",.5,0]];for(const[s,r,o]of n){const a=t.clone();a.colorSpace=Gt,a.repeat.set(.5,.5),a.offset.set(r,o),a.needsUpdate=!0,this.textures.add(a),this.oddTiles.set(s,a);for(const l of this.oddMaterials.values())l.surface===s&&(l.material.map=a,l.material.needsUpdate=!0)}t.dispose()}resize(){const e=this.element.getBoundingClientRect();if(e.width<1||e.height<1)return;this.width=e.width,this.height=e.height,this.renderer.setSize(e.width,e.height,!1);const t=e.width/e.height,n=t<1.25?4.6:Math.min(9,4.25*t);this.camera.left=-n/2,this.camera.right=n/2,this.camera.top=n/t/2,this.camera.bottom=-n/t/2,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}worldAt(e,t,n=Ve.floorY){const s=this.element.getBoundingClientRect();if(s.width<1||s.height<1)return null;this.pointer.set((e-s.left)/s.width*2-1,-(t-s.top)/s.height*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.plane.constant=-n;const r=this.ray.ray.intersectPlane(this.plane,this.intersection);return r?{x:r.x,y:r.y,z:r.z}:null}pick(e,t){const n=this.element.getBoundingClientRect();if(n.width<1||n.height<1)return null;this.pointer.set((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let r=this.ray.intersectObjects(this.pickable,!0)[0]?.object??null;for(;r&&typeof r.userData.foodId!="number";)r=r.parent;return typeof r?.userData.foodId=="number"?r.userData.foodId:null}placeStick(e,t,n){this.stickFrom.set(n.tool.x+t*.09,n.tool.y+.11,n.tool.z-.05),this.stickTo.set(n.tool.x+.39+t*.25,n.tool.y+1.05,n.tool.z+2.35),this.stickDirection.subVectors(this.stickTo,this.stickFrom),e.position.copy(this.stickFrom).add(this.stickTo).multiplyScalar(.5),e.scale.set(1,this.stickDirection.length(),1),e.quaternion.setFromUnitVectors(R_,this.stickDirection.normalize())}burst(e,t,n,s){if(!this.reduced){this.particlesActive=!0;for(let r=0;r<8;r++){const o=this.particles[this.particleCursor++%this.particles.length],a=r*2.39996+s;o.x=e,o.y=Math.max(Ve.floorY,t),o.z=n,o.vx=Math.cos(a)*(.4+r*.055),o.vz=Math.sin(a)*(.4+r*.055),o.vy=.7+r%3*.2,o.life=.42+r%3*.07}}}updateParticles(e){if(!this.particlesActive){this.specks.visible=!1;return}const t=ir(e,0,.05);let n=!1;this.particles.forEach((s,r)=>{s.life=this.reduced?0:Math.max(0,s.life-t),s.life>0&&(n=!0,s.vy-=3.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t),this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(r,r*2,r*.4),this.dummy.scale.setScalar(Math.min(1,s.life*3)),this.dummy.updateMatrix(),this.specks.setMatrixAt(r,this.dummy.matrix)}),this.specks.instanceMatrix.needsUpdate=!0,this.particlesActive=n,this.specks.visible=n}disposeInstanceBuffers(e){e.traverse(t=>{t instanceof Dn&&t.dispose()})}syncFoodList(e){let t=e.foods.length!==this.foodOrder.length;for(let s=0;!t&&s<e.foods.length;s++){const r=e.foods[s],o=this.foodOrder[s];t=r.id!==o.id||r.kind!==o.kind||!!r.concealed!==o.concealed}if(!t)return;const n=new Set(e.foods.map(s=>s.id));for(const[s,r]of this.foods)n.has(s)||(r.removeFromParent(),this.disposeInstanceBuffers(r),this.foods.delete(s),this.escaped.delete(s));this.pickable.length=0;for(const s of e.foods){let r=this.foods.get(s.id);r&&(r.userData.kind!==s.kind||r.userData.concealed!==!!s.concealed)&&(r.userData.concealed&&!s.concealed&&this.burst(s.x,s.y,s.z,s.id),r.removeFromParent(),this.disposeInstanceBuffers(r),this.foods.delete(s.id),r=void 0),r||(r=this.model(s.kind,!!s.concealed),r.userData.foodId=s.id,r.userData.kind=s.kind,r.userData.concealed=!!s.concealed,this.foods.set(s.id,r),this.scene.add(r)),this.pickable.push(r)}this.foodOrder=e.foods.map(s=>({id:s.id,kind:s.kind,concealed:!!s.concealed}))}render(e,t,n){this.previousPhase!==e.phase&&(this.previousPhase=e.phase,e.phase==="result"&&(this.resultStartedAt=n)),this.syncFoodList(e);for(const a of e.foods){const l=this.foods.get(a.id),c=Ac(a),f=a.concealed?0:ir(a.compression,0,1);l.position.set(a.x,a.y,a.z),l.rotation.set(0,a.angle,0),l.scale.set(c.rx*(1+f*.12),c.ry*(1-f*.48),c.rz*(1+f*.12)),a.escaped&&!this.escaped.has(a.id)?(this.escaped.add(a.id),this.burst(a.x,a.y,a.z,a.id)):a.escaped||this.escaped.delete(a.id)}const s=e.foods.find(a=>a.id===e.heldId),r=e.phase==="pack"&&!!s;if(this.sticks.forEach((a,l)=>{a.visible=r,r&&this.placeStick(a,l?1:-1,e)}),this.landing.visible=r,this.heldHalo.visible=r,s){const a=Ac(s);this.landing.position.set(e.tool.tx,Ve.floorY+.032,e.tool.tz),this.landing.scale.set(a.rx*1.1,a.rz*1.1,1),this.landing.material.color.setHex(Math.abs(e.tool.tx)<=Ve.halfX&&Math.abs(e.tool.tz)<=Ve.halfZ?8297833:13134662),this.heldHalo.position.set(s.x,s.y-a.ry*.9,s.z),this.heldHalo.scale.set(a.rx*1.07,a.rz*1.07,1),this.heldHalo.material.opacity=this.reduced?.65:.62+Math.sin(n*.006)*.1}this.lidPivot.visible=e.phase!=="pack";let o=(1-ir(e.lid,0,1))*Math.PI/2;if(e.phase==="result"){const a=this.reduced?1:ir((n-this.resultStartedAt-550)/650,0,1),l=a*a*(3-2*a);o+=(Math.PI*.52-o)*l}if(this.lidPivot.rotation.x=-o,this.camera.position.copy(this.baseCamera),!this.reduced&&e.phase==="press"&&e.pressure>.3){const a=(e.pressure-.3)*.028;this.camera.position.x+=Math.sin(n*.047)*a,this.camera.position.y+=Math.cos(n*.041)*a*.5}this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld(),this.updateParticles(t),this.renderer.render(this.scene,this.camera)}reducedMotion(e){this.reduced=e}photo(){return this.renderer.domElement.toDataURL("image/png")}getSize(){return{width:this.width,height:this.height}}dispose(){this.disposed=!0;for(const e of this.foods.values())this.disposeInstanceBuffers(e);for(const e of this.models.values())this.disposeInstanceBuffers(e);this.specks.dispose();for(const e of this.textures)e.dispose();for(const e of this.geometry)e.dispose();for(const e of this.materials)e.dispose();this.renderer.dispose(),this.renderer.domElement.remove(),this.models.clear(),this.foods.clear()}}const L_=""+new URL("music-BMg-2Jlx.mp3",import.meta.url).href,I_=[{title:"Cozy Puzzle Title",author:"MintoDog / OpenGameArt",url:"https://opengameart.org/content/cozy-puzzle-title",license:"CC0 1.0 Universal · unmodified"}],So=i=>{try{return localStorage.getItem(`bento-box-${i}`)}catch{return null}},bo=(i,e)=>{try{localStorage.setItem(`bento-box-${i}`,e)}catch{}},Eo=i=>Number.isFinite(i)?Math.max(0,Math.min(1,i)):0;class D_{constructor(){this.music=So("music")!=="0",this.sounds=So("sounds")!=="0",this.volume=Number(So("volume")??".6"),this.paused=!1,this.ctx=null,this.musicGain=null,this.effectGain=null,this.whirrGain=null,this.toneGain=null,this.whirrTone=null,this.whirrNoise=null,this.whirrFilter=null,this.noiseBuffer=null,this.buffer=null,this.source=null,this.sourceStartedAt=0,this.musicOffset=0,this.loadAttempted=!1,this.disposed=!1,this.speed=0,this.loadingAbort=new AbortController,this.lastCue=new Map,this.activeVoices=new Set,this.onVisibility=()=>{this.apply()},Number.isFinite(this.volume)||(this.volume=.6),this.volume=Eo(this.volume),typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibility)}async unlock(){if(!(this.disposed||typeof window>"u"))try{if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t;const n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=16,n.ratio.value=5,n.connect(t.destination),this.musicGain=t.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(n),this.effectGain=t.createGain(),this.effectGain.gain.value=0,this.effectGain.connect(n),this.prepareSpeedBed(t)}if(this.ctx.state!=="running"&&await this.ctx.resume(),this.disposed)return;this.apply(),this.loadAttempted||(this.loadAttempted=!0,this.loadMusic(this.ctx))}catch{}}sync(){this.volume=Number.isFinite(this.volume)?Eo(this.volume):.6,bo("music",this.music?"1":"0"),bo("sounds",this.sounds?"1":"0"),bo("volume",String(this.volume)),this.apply()}whirr(e){this.speed=Number.isFinite(e)?Math.abs(e):0,this.applySpeedBed()}cue(e){const t=this.ctx;if(!t||!this.effectGain||this.disposed||!this.audible||!this.sounds||t.state!=="running")return;const n=t.currentTime,s=e==="move"?.13:e==="pop"?.035:.045;n-(this.lastCue.get(e)??-1)<s||(this.lastCue.set(e,n),e==="finish"?[523.25,659.25,783.99,1046.5].forEach((r,o)=>this.tone(r,r*.995,.19,.1,n+o*.085,"sine")):e==="reveal"?(this.noise(.07,.03,1600,n),this.tone(390,780,.12,.07,n,"triangle"),this.tone(1046.5,1046.5,.19,.07,n+.1,"sine")):e==="press"?(this.tone(170,80,.18,.055,n,"triangle"),this.noise(.2,.035,450,n)):e==="pop"?(this.tone(570,110,.115,.13,n,"sine"),this.noise(.045,.045,2100,n)):e==="place"?(this.tone(220,130,.09,.11,n,"sine"),this.tone(510,390,.045,.025,n,"sine")):e==="undo"?this.tone(390,220,.11,.065,n,"sine"):e==="move"?this.noise(.055,.016,750,n):this.tone(650,510,.065,.055,n,"sine"))}dispose(){if(this.disposed)return;this.disposed=!0,this.loadingAbort.abort(),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibility),this.stopMusic();for(const t of this.activeVoices)try{t.stop()}catch{}this.activeVoices.clear();try{this.whirrTone?.stop(),this.whirrNoise?.stop()}catch{}const e=this.ctx;this.ctx=null,e&&e.state!=="closed"&&e.close().catch(()=>{})}get audible(){return!this.paused&&!(typeof document<"u"&&document.hidden)}async loadMusic(e){try{const t=await fetch(L_,{signal:this.loadingAbort.signal});if(!t.ok)return;const n=await t.arrayBuffer();if(this.disposed||this.ctx!==e)return;const s=await e.decodeAudioData(n);if(this.disposed||this.ctx!==e)return;this.buffer=s,this.apply()}catch{}}apply(){const e=this.ctx;if(!e||this.disposed)return;const t=this.audible;this.musicGain?.gain.setTargetAtTime(t&&this.music?this.volume*.14:0,e.currentTime,.04),this.effectGain?.gain.setTargetAtTime(t&&this.sounds?this.volume*.65:0,e.currentTime,.025),t&&this.music&&e.state==="running"?this.startMusic():this.stopMusic(),this.applySpeedBed()}startMusic(){const e=this.ctx;if(!e||!this.buffer||!this.musicGain||this.source||this.disposed)return;const t=e.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.musicGain),this.source=t,this.sourceStartedAt=e.currentTime,t.start(0,this.buffer.duration>0?this.musicOffset%this.buffer.duration:0),t.onended=()=>t.disconnect()}stopMusic(){const e=this.source;if(e){this.ctx&&this.buffer?.duration&&(this.musicOffset=(this.musicOffset+this.ctx.currentTime-this.sourceStartedAt)%this.buffer.duration),this.source=null;try{e.stop()}catch{}}}prepareSpeedBed(e){const t=e.createBuffer(1,e.sampleRate,e.sampleRate),n=t.getChannelData(0);let s=1607;for(let r=0;r<n.length;r++)s=Math.imul(s,1664525)+1013904223|0,n[r]=((s>>>0)/2147483648-1)*.75;this.noiseBuffer=t,this.whirrNoise=e.createBufferSource(),this.whirrNoise.buffer=t,this.whirrNoise.loop=!0,this.whirrFilter=e.createBiquadFilter(),this.whirrFilter.type="bandpass",this.whirrFilter.frequency.value=900,this.whirrFilter.Q.value=.65,this.whirrGain=e.createGain(),this.whirrGain.gain.value=0,this.whirrNoise.connect(this.whirrFilter),this.whirrFilter.connect(this.whirrGain),this.whirrGain.connect(this.effectGain),this.whirrNoise.start(),this.whirrTone=e.createOscillator(),this.whirrTone.type="sine",this.whirrTone.frequency.value=55,this.toneGain=e.createGain(),this.toneGain.gain.value=0,this.whirrTone.connect(this.toneGain),this.toneGain.connect(this.effectGain),this.whirrTone.start()}applySpeedBed(){const e=this.ctx;if(!e||this.disposed)return;const t=Eo(this.speed/45),n=this.audible&&this.sounds&&this.speed>.1;this.whirrGain?.gain.setTargetAtTime(n?t*.055:0,e.currentTime,.065),this.toneGain?.gain.setTargetAtTime(n?t*.028:0,e.currentTime,.065),this.whirrTone?.frequency.setTargetAtTime(48+t*138,e.currentTime,.065),this.whirrFilter?.frequency.setTargetAtTime(700+t*2100,e.currentTime,.065)}tone(e,t,n,s,r,o){const a=this.ctx;if(!a||!this.effectGain)return;const l=a.createOscillator(),c=a.createGain();l.type=o,l.frequency.setValueAtTime(e,r),l.frequency.exponentialRampToValueAtTime(Math.max(1,t),r+n),c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(s,r+.006),c.gain.exponentialRampToValueAtTime(1e-4,r+n),l.connect(c),c.connect(this.effectGain),this.activeVoices.add(l),l.onended=()=>{l.disconnect(),c.disconnect(),this.activeVoices.delete(l)},l.start(r),l.stop(r+n+.02)}noise(e,t,n,s){const r=this.ctx;if(!r||!this.effectGain||!this.noiseBuffer)return;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=this.noiseBuffer,a.type="bandpass",a.frequency.value=n,a.Q.value=.6,l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(t,s+.004),l.gain.exponentialRampToValueAtTime(1e-4,s+e),o.connect(a),a.connect(l),l.connect(this.effectGain),this.activeVoices.add(o),o.onended=()=>{o.disconnect(),a.disconnect(),l.disconnect(),this.activeVoices.delete(o)},o.start(s),o.stop(s+e+.01)}}const Du=[{id:"en",label:"English"},{id:"fr",label:"Français"},{id:"it",label:"Italiano"},{id:"de",label:"Deutsch"},{id:"es",label:"Español"},{id:"tr",label:"Türkçe"},{id:"zh-CN",label:"简体中文"},{id:"ja",label:"日本語"},{id:"ko",label:"한국어"},{id:"pt-BR",label:"Português"},{id:"ru",label:"Русский"}],rn={en:{mystery:"?",mysteryLabel:"What will come out?",mysteryHint:"20 surprises. Find out when you place it.",surprise:"{item}!? In a bento!?",mysteryValue:"20 types","food.boot":"Boot","food.toilet":"Toilet","food.alarmClock":"Alarm clock","food.battery":"Battery","food.controller":"Gamepad","food.trophy":"Trophy","food.trafficCone":"Traffic cone","food.rubberDuck":"Rubber duck","food.cactus":"Cactus","food.dumbbell":"Dumbbell","food.kettle":"Kettle","food.bowlingPin":"Bowling pin","food.handheld":"Handheld console","food.rocket":"Toy rocket","food.luckyCat":"Lucky cat","food.miniFan":"Mini fan","food.trafficLight":"Toy traffic light","food.puzzleCube":"Puzzle cube","food.lightBulb":"Light bulb","food.deskBell":"Desk bell","food.goldBar":"Gold bar (100 g)","food.diamondRing":"Diamond ring","food.cashBundle":"¥1 million cash","food.luxuryWatch":"Luxury watch","food.kingCrab":"Whole king crab","food.violin":"Fine violin"},fr:{mystery:"?",mysteryLabel:"Que va-t-il sortir ?",mysteryHint:"20 objets. Découvre-le en le posant.",surprise:"{item} !? Dans un bento !?",mysteryValue:"20 objets","food.boot":"Botte","food.toilet":"Toilettes","food.alarmClock":"Réveil","food.battery":"Pile","food.controller":"Manette","food.trophy":"Trophée","food.trafficCone":"Cône de chantier","food.rubberDuck":"Canard de bain","food.cactus":"Cactus","food.dumbbell":"Haltère","food.kettle":"Bouilloire","food.bowlingPin":"Quille","food.handheld":"Console portable","food.rocket":"Fusée jouet","food.luckyCat":"Chat porte-bonheur","food.miniFan":"Mini-ventilateur","food.trafficLight":"Feu tricolore jouet","food.puzzleCube":"Cube casse-tête","food.lightBulb":"Ampoule","food.deskBell":"Sonnette de comptoir","food.goldBar":"Lingot d’or (100 g)","food.diamondRing":"Bague en diamant","food.cashBundle":"Liasse de 1 million de yens","food.luxuryWatch":"Montre de luxe","food.kingCrab":"Crabe royal entier","food.violin":"Violon de prestige"},it:{mystery:"?",mysteryLabel:"Cosa uscirà?",mysteryHint:"20 oggetti. Scoprilo quando lo posi.",surprise:"{item}!? Nel bento!?",mysteryValue:"20 oggetti","food.boot":"Stivale","food.toilet":"WC","food.alarmClock":"Sveglia","food.battery":"Batteria","food.controller":"Controller","food.trophy":"Trofeo","food.trafficCone":"Cono stradale","food.rubberDuck":"Paperella","food.cactus":"Cactus","food.dumbbell":"Manubrio","food.kettle":"Bollitore","food.bowlingPin":"Birillo","food.handheld":"Console portatile","food.rocket":"Razzo giocattolo","food.luckyCat":"Gatto portafortuna","food.miniFan":"Mini ventilatore","food.trafficLight":"Semaforo giocattolo","food.puzzleCube":"Cubo rompicapo","food.lightBulb":"Lampadina","food.deskBell":"Campanello da banco","food.goldBar":"Lingotto d’oro (100 g)","food.diamondRing":"Anello con diamante","food.cashBundle":"Mazzetta da 1 milione di yen","food.luxuryWatch":"Orologio di lusso","food.kingCrab":"Granchio reale intero","food.violin":"Violino di pregio"},de:{mystery:"?",mysteryLabel:"Was kommt heraus?",mysteryHint:"20 Dinge. Die Überraschung kommt beim Ablegen.",surprise:"{item}!? In der Bentobox!?",mysteryValue:"20 Dinge","food.boot":"Stiefel","food.toilet":"Toilette","food.alarmClock":"Wecker","food.battery":"Batterie","food.controller":"Gamepad","food.trophy":"Pokal","food.trafficCone":"Leitkegel","food.rubberDuck":"Badeente","food.cactus":"Kaktus","food.dumbbell":"Hantel","food.kettle":"Teekessel","food.bowlingPin":"Bowlingkegel","food.handheld":"Handheld-Konsole","food.rocket":"Spielzeugrakete","food.luckyCat":"Glückskatze","food.miniFan":"Miniventilator","food.trafficLight":"Spielzeugampel","food.puzzleCube":"Zauberwürfel","food.lightBulb":"Glühbirne","food.deskBell":"Tischglocke","food.goldBar":"Goldbarren (100 g)","food.diamondRing":"Diamantring","food.cashBundle":"1 Million Yen in bar","food.luxuryWatch":"Luxusuhr","food.kingCrab":"Ganze Königskrabbe","food.violin":"Edle Violine"},es:{mystery:"?",mysteryLabel:"¿Qué saldrá?",mysteryHint:"20 objetos. Descúbrelo al colocarlo.",surprise:"¡{item}! ¿En un bento?",mysteryValue:"20 objetos","food.boot":"Bota","food.toilet":"Inodoro","food.alarmClock":"Despertador","food.battery":"Pila","food.controller":"Mando","food.trophy":"Trofeo","food.trafficCone":"Cono vial","food.rubberDuck":"Patito de goma","food.cactus":"Cactus","food.dumbbell":"Mancuerna","food.kettle":"Tetera","food.bowlingPin":"Bolo","food.handheld":"Consola portátil","food.rocket":"Cohete de juguete","food.luckyCat":"Gato de la suerte","food.miniFan":"Miniventilador","food.trafficLight":"Semáforo de juguete","food.puzzleCube":"Cubo rompecabezas","food.lightBulb":"Bombilla","food.deskBell":"Campana de mostrador","food.goldBar":"Lingote de oro (100 g)","food.diamondRing":"Anillo de diamante","food.cashBundle":"Fajo de un millón de yenes","food.luxuryWatch":"Reloj de lujo","food.kingCrab":"Cangrejo real entero","food.violin":"Violín de alta gama"},tr:{mystery:"?",mysteryLabel:"Ne çıkacak?",mysteryHint:"20 nesne. Yerleştirince öğrenirsin.",surprise:"{item}!? Bentoda mı!?",mysteryValue:"20 nesne","food.boot":"Çizme","food.toilet":"Klozet","food.alarmClock":"Çalar saat","food.battery":"Pil","food.controller":"Oyun kolu","food.trophy":"Kupa","food.trafficCone":"Trafik konisi","food.rubberDuck":"Oyuncak ördek","food.cactus":"Kaktüs","food.dumbbell":"Dambıl","food.kettle":"Çaydanlık","food.bowlingPin":"Bowling lobutu","food.handheld":"El konsolu","food.rocket":"Oyuncak roket","food.luckyCat":"Şans kedisi","food.miniFan":"Mini vantilatör","food.trafficLight":"Oyuncak trafik ışığı","food.puzzleCube":"Zekâ küpü","food.lightBulb":"Ampul","food.deskBell":"Masa zili","food.goldBar":"Altın külçesi (100 g)","food.diamondRing":"Pırlanta yüzük","food.cashBundle":"1 milyon yenlik deste","food.luxuryWatch":"Lüks saat","food.kingCrab":"Bütün kral yengeci","food.violin":"Üst sınıf keman"},"zh-CN":{mystery:"？",mysteryLabel:"会出现什么？",mysteryHint:"20种物品。放下才知道是什么。",surprise:"{item}！？放便当里！？",mysteryValue:"20种","food.boot":"雨靴","food.toilet":"马桶","food.alarmClock":"闹钟","food.battery":"电池","food.controller":"游戏手柄","food.trophy":"奖杯","food.trafficCone":"路锥","food.rubberDuck":"小黄鸭","food.cactus":"仙人掌","food.dumbbell":"哑铃","food.kettle":"水壶","food.bowlingPin":"保龄球瓶","food.handheld":"掌上游戏机","food.rocket":"玩具火箭","food.luckyCat":"招财猫","food.miniFan":"迷你风扇","food.trafficLight":"玩具红绿灯","food.puzzleCube":"魔方","food.lightBulb":"灯泡","food.deskBell":"桌铃","food.goldBar":"100克金条","food.diamondRing":"钻石戒指","food.cashBundle":"100万日元钞票","food.luxuryWatch":"名贵腕表","food.kingCrab":"整只帝王蟹","food.violin":"名贵小提琴"},ja:{mystery:"？",mysteryLabel:"なにが出る？",mysteryHint:"20種類。何が出るかは、置いてから。",surprise:"{item}！？ 弁当に！？",mysteryValue:"20種類","food.boot":"長靴","food.toilet":"便器","food.alarmClock":"目覚まし時計","food.battery":"乾電池","food.controller":"ゲームパッド","food.trophy":"トロフィー","food.trafficCone":"カラーコーン","food.rubberDuck":"おもちゃのアヒル","food.cactus":"サボテン","food.dumbbell":"ダンベル","food.kettle":"やかん","food.bowlingPin":"ボウリングピン","food.handheld":"携帯ゲーム機","food.rocket":"おもちゃのロケット","food.luckyCat":"招き猫","food.miniFan":"ミニ扇風機","food.trafficLight":"おもちゃの信号機","food.puzzleCube":"パズルキューブ","food.lightBulb":"電球","food.deskBell":"卓上ベル","food.goldBar":"金の延べ棒（100g）","food.diamondRing":"ダイヤの指輪","food.cashBundle":"100万円の札束","food.luxuryWatch":"高級腕時計","food.kingCrab":"丸ごとタラバガニ","food.violin":"高級バイオリン"},ko:{mystery:"？",mysteryLabel:"뭐가 나올까?",mysteryHint:"20가지 물건. 내려놓으면 알 수 있어요.",surprise:"{item}!? 도시락에!?",mysteryValue:"20종","food.boot":"장화","food.toilet":"변기","food.alarmClock":"알람시계","food.battery":"건전지","food.controller":"게임패드","food.trophy":"트로피","food.trafficCone":"안전콘","food.rubberDuck":"고무오리","food.cactus":"선인장","food.dumbbell":"아령","food.kettle":"주전자","food.bowlingPin":"볼링핀","food.handheld":"휴대용 게임기","food.rocket":"장난감 로켓","food.luckyCat":"복고양이","food.miniFan":"미니 선풍기","food.trafficLight":"장난감 신호등","food.puzzleCube":"퍼즐 큐브","food.lightBulb":"전구","food.deskBell":"탁상벨","food.goldBar":"금괴 (100g)","food.diamondRing":"다이아 반지","food.cashBundle":"100만 엔 돈다발","food.luxuryWatch":"고급 손목시계","food.kingCrab":"통 킹크랩","food.violin":"고급 바이올린"},"pt-BR":{mystery:"?",mysteryLabel:"O que vai sair?",mysteryHint:"20 objetos. Descubra quando colocar.",surprise:"{item}!? Num bentô!?",mysteryValue:"20 tipos","food.boot":"Bota","food.toilet":"Vaso sanitário","food.alarmClock":"Despertador","food.battery":"Pilha","food.controller":"Controle","food.trophy":"Troféu","food.trafficCone":"Cone de trânsito","food.rubberDuck":"Patinho de borracha","food.cactus":"Cacto","food.dumbbell":"Halter","food.kettle":"Chaleira","food.bowlingPin":"Pino de boliche","food.handheld":"Console portátil","food.rocket":"Foguete de brinquedo","food.luckyCat":"Gato da sorte","food.miniFan":"Miniventilador","food.trafficLight":"Semáforo de brinquedo","food.puzzleCube":"Cubo mágico","food.lightBulb":"Lâmpada","food.deskBell":"Campainha de mesa","food.goldBar":"Barra de ouro (100 g)","food.diamondRing":"Anel de diamante","food.cashBundle":"Maço de 1 milhão de ienes","food.luxuryWatch":"Relógio de luxo","food.kingCrab":"Caranguejo-real inteiro","food.violin":"Violino de luxo"},ru:{mystery:"?",mysteryLabel:"Что выпадет?",mysteryHint:"20 предметов. Узнаешь, когда положишь.",surprise:"{item}?! В бенто?!",mysteryValue:"20 видов","food.boot":"Сапог","food.toilet":"Унитаз","food.alarmClock":"Будильник","food.battery":"Батарейка","food.controller":"Геймпад","food.trophy":"Кубок","food.trafficCone":"Дорожный конус","food.rubberDuck":"Резиновая утка","food.cactus":"Кактус","food.dumbbell":"Гантель","food.kettle":"Чайник","food.bowlingPin":"Кегля","food.handheld":"Портативная консоль","food.rocket":"Игрушечная ракета","food.luckyCat":"Кот удачи","food.miniFan":"Мини-вентилятор","food.trafficLight":"Игрушечный светофор","food.puzzleCube":"Кубик-головоломка","food.lightBulb":"Лампочка","food.deskBell":"Настольный звонок","food.goldBar":"Золотой слиток (100 г)","food.diamondRing":"Бриллиантовое кольцо","food.cashBundle":"Пачка в 1 миллион иен","food.luxuryWatch":"Роскошные часы","food.kingCrab":"Целый камчатский краб","food.violin":"Дорогая скрипка"}},on={currency:"¥{value}"},N_={...on,...rn.en,title:"Close That Bento",subtitle:"Pack it. Press it. Outside items disappear.",packHint:"Pick food, then release over the box",heldHint:"Move slowly to steady the chopsticks",pressHint:"Drag down on the lane below to press","food.chicken":"Chicken","food.shrimp":"Shrimp","food.egg":"Omelet","food.broccoli":"Broccoli","food.sausage":"Octo-sausage","food.rice":"Rice ball",undo:"Undo",rotate:"Rotate",press:"Close the lid",open:"Open & adjust",finish:"Call it done",release:"Release",value:"Feast value",fill:"Fullness",closure:"Lid closure",colors:"Variety",lost:"Escapees",score:"Points",pressure:"Force",needFood:"Add some food first",pieces:"{count} items",resultLabel:"Today’s overpacked bento",resultHint:"If the lid closes, it counts as lunch.",retry:"Repack",new:"Make another",save:"Save photo",share:"Post on X",best:"Best",settings:"Settings",language:"Language",languageName:"English",music:"Music",sounds:"Sound effects",volume:"Volume",credits:"Credits",close:"Close",mute:"Mute audio",unmute:"Enable audio",photoHint:"Press and hold the image to save",ready:"Press down",lidStuck:"Food caught in the lid!",ejected:"Outside the box. Gone!","title.master":"Lunchbox Limit Breaker","title.crusher":"Bento Compression Alchemist","title.escape":"Keeper of Runaway Lunch","title.colorful":"Artist of Overpacking","title.hungry":"Appetite Defeats the Lid","title.apprentice":"Apprentice Bento Packer",shareText:`If the lid closes, it’s a bento.
Title: {title}
Feast value ¥{value} / {score} points
{url}
#BrowserGame #gamedev #indiedev`},Nu={en:N_,fr:{...on,...rn.fr,title:"Ferme ce bento !",subtitle:"Remplis. Presse. Ce qui sort disparaît.",packHint:"Choisis un aliment, puis relâche sur la boîte",heldHint:"Va doucement pour stabiliser les baguettes",pressHint:"Glisse vers le bas sur la piste pour presser","food.chicken":"Poulet","food.shrimp":"Crevette","food.egg":"Omelette","food.broccoli":"Brocoli","food.sausage":"Saucisse-poulpe","food.rice":"Onigiri",undo:"Annuler",rotate:"Tourner",press:"Fermer",open:"Rouvrir",finish:"C’est prêt",release:"Lâcher",value:"Festin",fill:"Remplissage",closure:"Fermeture",colors:"Variété",lost:"Évadés",score:"Points",pressure:"Force",needFood:"Ajoute d’abord à manger",pieces:"{count} objets",resultLabel:"Le bento trop plein du jour",resultHint:"Si ça ferme, ça compte comme déjeuner.",retry:"Réorganiser",new:"Un autre bento",save:"Sauver la photo",share:"Publier sur X",best:"Record",settings:"Réglages",language:"Langue",languageName:"Français",music:"Musique",sounds:"Effets sonores",volume:"Volume",credits:"Crédits",close:"Fermer",mute:"Couper le son",unmute:"Activer le son",photoHint:"Appui long sur l’image pour l’enregistrer",ready:"Presser",lidStuck:"Un aliment bloque le couvercle !",ejected:"Hors de la boîte. Disparu !","title.master":"Briseur de limites du bento","title.crusher":"Alchimiste du bento compressé","title.escape":"Gardien du déjeuner en fuite","title.colorful":"Artiste du bento débordant","title.hungry":"L’appétit bat le couvercle","title.apprentice":"Apprenti du bento",shareText:`Si le couvercle ferme, c’est un bento.
Titre : {title}
Festin ¥{value} / {score} points
{url}
#JeuNavigateur #gamedev #indiedev`},it:{...on,...rn.it,title:"Chiudi quel Bento",subtitle:"Riempi. Premi. Ciò che esce scompare.",packHint:"Scegli il cibo e rilascia sopra la scatola",heldHint:"Muoviti piano per stabilizzare le bacchette",pressHint:"Trascina in basso sulla corsia per premere","food.chicken":"Pollo","food.shrimp":"Gambero","food.egg":"Frittata","food.broccoli":"Broccolo","food.sausage":"Würstel-polpo","food.rice":"Onigiri",undo:"Annulla",rotate:"Ruota",press:"Chiudi",open:"Riapri",finish:"È pronto",release:"Lascia",value:"Ricchezza",fill:"Pienezza",closure:"Chiusura",colors:"Varietà",lost:"Fuggiti",score:"Punti",pressure:"Forza",needFood:"Aggiungi prima del cibo",pieces:"{count} pezzi",resultLabel:"Il bento stracolmo del giorno",resultHint:"Se il coperchio si chiude, è un pranzo.",retry:"Risistema",new:"Un altro bento",save:"Salva foto",share:"Pubblica su X",best:"Record",settings:"Opzioni",language:"Lingua",languageName:"Italiano",music:"Musica",sounds:"Effetti sonori",volume:"Volume",credits:"Crediti",close:"Chiudi",mute:"Disattiva audio",unmute:"Attiva audio",photoHint:"Tieni premuta l’immagine per salvarla",ready:"Premi giù",lidStuck:"Cibo incastrato nel coperchio!",ejected:"Fuori dalla scatola. Sparito!","title.master":"Maestro dei limiti del bento","title.crusher":"Alchimista del bento compresso","title.escape":"Custode del pranzo in fuga","title.colorful":"Artista del bento stracolmo","title.hungry":"La fame batte il coperchio","title.apprentice":"Apprendista del bento",shareText:`Se il coperchio si chiude, è un bento.
Titolo: {title}
Ricchezza ¥{value} / {score} punti
{url}
#GiocoBrowser #gamedev #indiedev`},de:{...on,...rn.de,title:"Deckel zu, Bento fertig",subtitle:"Füllen. Drücken. Was rausfällt, verschwindet.",packHint:"Essen wählen und über der Box loslassen",heldHint:"Langsam bewegen, dann zittern die Stäbchen weniger",pressHint:"Zum Drücken auf der Leiste nach unten ziehen","food.chicken":"Hähnchen","food.shrimp":"Garnele","food.egg":"Omelett","food.broccoli":"Brokkoli","food.sausage":"Oktopuswurst","food.rice":"Reisball",undo:"Zurück",rotate:"Drehen",press:"Deckel zu",open:"Öffnen",finish:"Fertig",release:"Loslassen",value:"Festwert",fill:"Füllung",closure:"Verschluss",colors:"Vielfalt",lost:"Ausreißer",score:"Punkte",pressure:"Druck",needFood:"Lege erst etwas zu essen hinein",pieces:"{count} Stück",resultLabel:"Das übervolle Bento des Tages",resultHint:"Wenn der Deckel schließt, zählt es als Mittagessen.",retry:"Umpacken",new:"Noch ein Bento",save:"Foto speichern",share:"Auf X posten",best:"Bestwert",settings:"Optionen",language:"Sprache",languageName:"Deutsch",music:"Musik",sounds:"Geräusche",volume:"Lautstärke",credits:"Mitwirkende",close:"Schließen",mute:"Ton aus",unmute:"Ton an",photoHint:"Bild zum Speichern lange drücken",ready:"Zudrücken",lidStuck:"Essen klemmt im Deckel!",ejected:"Außerhalb der Box. Weg!","title.master":"Sprenger der Bento-Grenzen","title.crusher":"Alchemist der Bento-Presse","title.escape":"Hüter des flüchtigen Mittagessens","title.colorful":"Künstler des Überpackens","title.hungry":"Appetit besiegt den Deckel","title.apprentice":"Bento-Packlehrling",shareText:`Wenn der Deckel schließt, ist es ein Bento.
Titel: {title}
Festwert ¥{value} / {score} Punkte
{url}
#Browserspiel #gamedev #indiedev`},es:{...on,...rn.es,title:"Cierra ese Bento",subtitle:"Llena. Aprieta. Lo que sale desaparece.",packHint:"Elige comida y suelta sobre la caja",heldHint:"Muévete despacio para estabilizar los palillos",pressHint:"Arrastra hacia abajo en la pista para apretar","food.chicken":"Pollo","food.shrimp":"Gamba","food.egg":"Tortilla","food.broccoli":"Brócoli","food.sausage":"Salchipulpo","food.rice":"Onigiri",undo:"Deshacer",rotate:"Girar",press:"Cerrar tapa",open:"Abrir",finish:"Ya está",release:"Soltar",value:"Banquete",fill:"Llenado",closure:"Cierre",colors:"Variedad",lost:"Fugitivos",score:"Puntos",pressure:"Fuerza",needFood:"Pon algo de comida primero",pieces:"{count} objetos",resultLabel:"El bento rebosante de hoy",resultHint:"Si la tapa cierra, cuenta como almuerzo.",retry:"Recolocar",new:"Otro bento",save:"Guardar foto",share:"Publicar en X",best:"Récord",settings:"Ajustes",language:"Idioma",languageName:"Español",music:"Música",sounds:"Efectos de sonido",volume:"Volumen",credits:"Créditos",close:"Cerrar",mute:"Silenciar",unmute:"Activar sonido",photoHint:"Mantén pulsada la imagen para guardarla",ready:"Apretar",lidStuck:"¡Hay comida atascada en la tapa!",ejected:"¡Fuera de la caja. Desapareció!","title.master":"Rompe límites del bento","title.crusher":"Alquimista del bento comprimido","title.escape":"Guardián del almuerzo fugitivo","title.colorful":"Artista del bento rebosante","title.hungry":"El apetito vence a la tapa","title.apprentice":"Aprendiz del bento",shareText:`Si la tapa cierra, es un bento.
Título: {title}
Banquete ¥{value} / {score} puntos
{url}
#JuegoDeNavegador #gamedev #indiedev`},tr:{...on,...rn.tr,title:"Kapat Şu Bentoyu",subtitle:"Doldur. Bastır. Dışarı çıkanlar silinir.",packHint:"Yemek seç, kutunun üzerinde parmağını bırak",heldHint:"Çubukları sabitlemek için yavaş hareket et",pressHint:"Bastırmak için alttaki şeritte aşağı sürükle","food.chicken":"Tavuk","food.shrimp":"Karides","food.egg":"Omlet","food.broccoli":"Brokoli","food.sausage":"Ahtapot sosis","food.rice":"Pirinç topu",undo:"Geri al",rotate:"Döndür",press:"Kapağı kapat",open:"Aç ve düzelt",finish:"Tamamdır",release:"Bırak",value:"Ziyafet",fill:"Doluluk",closure:"Kapanma",colors:"Çeşitlilik",lost:"Kaçanlar",score:"Puan",pressure:"Kuvvet",needFood:"Önce biraz yemek ekle",pieces:"{count} adet",resultLabel:"Günün tıka basa bentosu",resultHint:"Kapak kapanıyorsa öğle yemeği sayılır.",retry:"Yeniden diz",new:"Bir kutu daha",save:"Fotoğrafı kaydet",share:"X’te paylaş",best:"Rekor",settings:"Ayarlar",language:"Dil",languageName:"Türkçe",music:"Müzik",sounds:"Ses efektleri",volume:"Ses düzeyi",credits:"Katkılar",close:"Kapat",mute:"Sesi kapat",unmute:"Sesi aç",photoHint:"Kaydetmek için görsele basılı tut",ready:"Bastır",lidStuck:"Kapağa yemek sıkıştı!",ejected:"Kutunun dışında. Silindi!","title.master":"Bento Sınırlarını Aşan Usta","title.crusher":"Sıkıştırılmış Bento Simyacısı","title.escape":"Kaçak Öğle Yemeğinin Bekçisi","title.colorful":"Tıka Basa Bento Sanatçısı","title.hungry":"İştah Kapağı Yendi","title.apprentice":"Bento Doldurma Çırağı",shareText:`Kapak kapanıyorsa bentodur.
Unvan: {title}
Ziyafet ¥{value} / {score} puan
{url}
#TarayıcıOyunu #gamedev #indiedev`},"zh-CN":{...on,...rn["zh-CN"],title:"盖得上就叫便当",subtitle:"装进去。压下去。掉到盒外就消失。",packHint:"选好食物，在饭盒上方松开手指",heldHint:"慢慢移动，筷子才会稳",pressHint:"在下方操作条向下拖动，压住盒盖","food.chicken":"炸鸡","food.shrimp":"虾","food.egg":"玉子烧","food.broccoli":"西兰花","food.sausage":"章鱼香肠","food.rice":"饭团",undo:"撤回",rotate:"转向",press:"盖上盒盖",open:"打开调整",finish:"就这样了",release:"松开",value:"丰盛度",fill:"装满程度",closure:"合盖程度",colors:"色彩",lost:"出逃",score:"分数",pressure:"力度",needFood:"先放点食物吧",pieces:"{count}份",resultLabel:"今日硬塞便当",resultHint:"只要盖得上，大概就算便当。",retry:"重新摆放",new:"再做一盒",save:"保存照片",share:"发布到X",best:"最高",settings:"设置",language:"语言",languageName:"简体中文",music:"音乐",sounds:"音效",volume:"音量",credits:"制作信息",close:"关闭",mute:"关闭声音",unmute:"开启声音",photoHint:"长按图片即可保存",ready:"往下压",lidStuck:"食物卡住盒盖了！",ejected:"掉到盒外，已移除！","title.master":"饭盒极限突破大师","title.crusher":"压缩便当炼金术师","title.escape":"出逃食物饲养员","title.colorful":"缤纷硬塞艺术家","title.hungry":"食欲战胜了盒盖","title.apprentice":"便当装盒学徒",shareText:`盖得上就叫便当。
称号「{title}」
丰盛度 ¥{value} / {score}分
{url}
#浏览器游戏 #gamedev #indiedev`},ja:{...on,...rn.ja,title:"フタが閉まれば弁当です",subtitle:"詰めて。押して。はみ出すと消える。",packHint:"おかずを選ぶ→箱の上で指を離す",heldHint:"ゆっくり運ぶと、箸が安定する",pressHint:"下のレーンを下にドラッグして押す","food.chicken":"唐揚げ","food.shrimp":"えび","food.egg":"卵焼き","food.broccoli":"ブロッコリー","food.sausage":"タコさん","food.rice":"おにぎり",undo:"戻す",rotate:"向き",press:"フタを閉める",open:"開けて直す",finish:"これで完成",release:"はなす",value:"豪華さ",fill:"詰まり具合",closure:"閉まり具合",colors:"彩り",lost:"脱走",score:"点数",pressure:"押す力",needFood:"まずはおかずを入れよう",pieces:"{count}個",resultLabel:"本日の無理やり弁当",resultHint:"フタさえ閉まれば、だいたい弁当。",retry:"詰め直す",new:"もう一箱つくる",save:"写真を保存",share:"Xに投稿",best:"最高",settings:"設定",language:"言語",languageName:"日本語",music:"音楽",sounds:"効果音",volume:"音量",credits:"クレジット",close:"閉じる",mute:"音を消す",unmute:"音を出す",photoHint:"画像を長押しして保存",ready:"押し込む",lidStuck:"おかずが挟まっている！",ejected:"箱の外に出たので削除！","title.master":"弁当箱の限界突破職人","title.crusher":"圧縮弁当の錬金術師","title.escape":"脱走おかずの飼い主","title.colorful":"彩りの詰め込み芸術家","title.hungry":"フタより食欲が勝った","title.apprentice":"弁当詰め見習い",shareText:`フタが閉まれば弁当です。
称号「{title}」
豪華さ ¥{value} / {score}点
{url}
#ブラウザゲーム #gamedev #indiedev`},ko:{...on,...rn.ko,title:"뚜껑만 닫히면 도시락",subtitle:"담고. 누르고. 밖으로 나오면 사라져요.",packHint:"반찬을 고르고 상자 위에서 손가락을 떼세요",heldHint:"천천히 움직이면 젓가락이 안정돼요",pressHint:"아래 레인을 아래로 드래그해 누르세요","food.chicken":"가라아게","food.shrimp":"새우","food.egg":"달걀말이","food.broccoli":"브로콜리","food.sausage":"문어 소시지","food.rice":"주먹밥",undo:"되돌리기",rotate:"방향",press:"뚜껑 닫기",open:"열고 고치기",finish:"이대로 완성",release:"놓기",value:"푸짐함",fill:"채움 정도",closure:"닫힘 정도",colors:"색감",lost:"탈출",score:"점수",pressure:"누르는 힘",needFood:"먼저 반찬을 넣어 주세요",pieces:"{count}개",resultLabel:"오늘의 억지 도시락",resultHint:"뚜껑만 닫히면 대충 도시락이죠.",retry:"다시 담기",new:"한 상자 더",save:"사진 저장",share:"X에 게시",best:"최고",settings:"설정",language:"언어",languageName:"한국어",music:"음악",sounds:"효과음",volume:"음량",credits:"제작 정보",close:"닫기",mute:"소리 끄기",unmute:"소리 켜기",photoHint:"이미지를 길게 눌러 저장하세요",ready:"꾹 누르기",lidStuck:"뚜껑에 반찬이 끼었어요!",ejected:"상자 밖으로 나가서 사라졌어요!","title.master":"도시락 한계 돌파 장인","title.crusher":"압축 도시락의 연금술사","title.escape":"탈출 반찬의 집사","title.colorful":"알록달록 꽉 채우기 예술가","title.hungry":"뚜껑보다 식욕이 이겼다","title.apprentice":"도시락 담기 견습생",shareText:`뚜껑만 닫히면 도시락입니다.
칭호: {title}
푸짐함 ¥{value} / {score}점
{url}
#브라우저게임 #gamedev #indiedev`},"pt-BR":{...on,...rn["pt-BR"],title:"Fecha Esse Bentô",subtitle:"Encha. Aperte. O que sair desaparece.",packHint:"Escolha a comida e solte sobre a caixa",heldHint:"Mova devagar para firmar os hashis",pressHint:"Arraste para baixo na faixa para apertar","food.chicken":"Frango","food.shrimp":"Camarão","food.egg":"Omelete","food.broccoli":"Brócolis","food.sausage":"Salsicha-polvo","food.rice":"Onigiri",undo:"Desfazer",rotate:"Girar",press:"Fechar tampa",open:"Abrir e ajustar",finish:"Está pronto",release:"Soltar",value:"Fartura",fill:"Lotação",closure:"Fechamento",colors:"Variedade",lost:"Fujões",score:"Pontos",pressure:"Força",needFood:"Coloque comida primeiro",pieces:"{count} itens",resultLabel:"O bentô superlotado do dia",resultHint:"Se a tampa fecha, já conta como almoço.",retry:"Reorganizar",new:"Outra caixa",save:"Salvar foto",share:"Postar no X",best:"Recorde",settings:"Opções",language:"Idioma",languageName:"Português",music:"Música",sounds:"Efeitos sonoros",volume:"Volume",credits:"Créditos",close:"Fechar",mute:"Desligar áudio",unmute:"Ligar áudio",photoHint:"Toque e segure a imagem para salvar",ready:"Apertar",lidStuck:"Tem comida presa na tampa!",ejected:"Fora da caixa. Sumiu!","title.master":"Mestre dos Limites do Bentô","title.crusher":"Alquimista do Bentô Comprimido","title.escape":"Guardião do Almoço Fugitivo","title.colorful":"Artista do Bentô Superlotado","title.hungry":"O Apetite Venceu a Tampa","title.apprentice":"Aprendiz de Montar Bentô",shareText:`Se a tampa fecha, é um bentô.
Título: {title}
Fartura ¥{value} / {score} pontos
{url}
#JogoDeNavegador #gamedev #indiedev`},ru:{...on,...rn.ru,title:"Закрой этот бенто",subtitle:"Наполни. Надави. Всё снаружи исчезнет.",packHint:"Выбери еду и отпусти палец над коробкой",heldHint:"Двигай медленнее, чтобы палочки не дрожали",pressHint:"Для нажатия тяни вниз по дорожке внизу","food.chicken":"Курица","food.shrimp":"Креветка","food.egg":"Омлет","food.broccoli":"Брокколи","food.sausage":"Сосиска-осьминог","food.rice":"Онигири",undo:"Отмена",rotate:"Поворот",press:"Закрыть",open:"Открыть",finish:"Готово",release:"Отпустить",value:"Пир",fill:"Наполнение",closure:"Закрытие",colors:"Разнообразие",lost:"Беглецы",score:"Очки",pressure:"Сила",needFood:"Сначала положи еду",pieces:"{count} шт.",resultLabel:"Переполненный бенто дня",resultHint:"Если крышка закрылась, это уже обед.",retry:"Переложить",new:"Ещё коробку",save:"Сохранить фото",share:"Пост в X",best:"Рекорд",settings:"Настройки",language:"Язык",languageName:"Русский",music:"Музыка",sounds:"Звуковые эффекты",volume:"Громкость",credits:"Авторы",close:"Закрыть",mute:"Выключить звук",unmute:"Включить звук",photoHint:"Удерживай изображение, чтобы сохранить",ready:"Надавить",lidStuck:"Еда застряла в крышке!",ejected:"За пределами коробки. Исчезло!","title.master":"Покоритель пределов бенто","title.crusher":"Алхимик сжатого бенто","title.escape":"Хранитель сбежавшего обеда","title.colorful":"Художник переполненного бенто","title.hungry":"Аппетит победил крышку","title.apprentice":"Ученик упаковки бенто",shareText:`Если крышка закрылась, это бенто.
Звание: {title}
Пир ¥{value} / {score} очков
{url}
#БраузернаяИгра #gamedev #indiedev`}};function Bi(i){if(typeof i!="string")return;const e=i.trim().replace(/_/g,"-").toLowerCase();if(!e)return;if(e==="zh"||e.startsWith("zh-"))return"zh-CN";if(e==="pt"||e.startsWith("pt-"))return"pt-BR";const t=e.split("-")[0];return Du.find(n=>n.id.toLowerCase()===t)?.id}function U_(){try{return globalThis.localStorage?.getItem("bento-box-language")??null}catch{return null}}function Uu(){try{const e=Bi(new URLSearchParams(globalThis.location?.search??"").get("lang"));if(e)return e}catch{}const i=Bi(U_());if(i)return i;try{const e=[...globalThis.navigator?.languages??[],globalThis.navigator?.language];for(const t of e){const n=Bi(t);if(n)return n}}catch{}try{const e=Bi(Intl.DateTimeFormat().resolvedOptions().locale);if(e)return e}catch{}try{const e=Bi(globalThis.document?.documentElement.lang);if(e)return e}catch{}return"en"}let gs;function Fu(i){gs=Bi(i)??"en";try{globalThis.localStorage?.setItem("bento-box-language",gs)}catch{}try{globalThis.document&&(globalThis.document.documentElement.lang=gs)}catch{}}function Zi(){return gs??(gs=Uu()),gs}function Ou(i,e=Zi()){const t=Number.isFinite(i)?Math.max(0,Math.round(i)):0;return new Intl.NumberFormat(e,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(t)}function Lr(i,e=Zi()){return Nu[e].currency.replace(/\{value\}/g,Ou(i,e))}function Et(i,e={}){return Nu[Zi()][i].replace(/\{([a-zA-Z]+)\}/g,(t,n)=>Object.prototype.hasOwnProperty.call(e,n)?String(e[n]):t)}class F_{sdk(){const e=window.PokiSDK;if(!e)throw new Error("PokiSDK is not on the page. This build is meant to run on Poki. For local runs choose the inert signals EXPLICITLY (see createSignals).");return e}async init(){await this.sdk().init()}gameLoadingStart(){this.sdk().gameLoadingStart()}gameLoadingFinished(){this.sdk().gameLoadingFinished()}gameplayStart(){this.sdk().gameplayStart()}gameplayStop(){this.sdk().gameplayStop()}async commercialBreak(){await this.sdk().commercialBreak()}async rewardedBreak(){return this.sdk().rewardedBreak()}}class O_{constructor(){this.seen=[]}note(e){this.seen.push(e),console.warn(`[inert poki] ${e}() — this build sends NO ad or engagement signal.`)}async init(){this.note("init")}gameLoadingStart(){this.note("gameLoadingStart")}gameLoadingFinished(){this.note("gameLoadingFinished")}gameplayStart(){this.note("gameplayStart")}gameplayStop(){this.note("gameplayStop")}async commercialBreak(){this.note("commercialBreak")}async rewardedBreak(){return this.note("rewardedBreak"),!1}}function B_(i="poki"){return i==="inert"?new O_:new F_}function z_(){try{return"b8e07bf"}catch{return"dev"}}const k_={Boot:4,Life:60,Ad:40,Game:400,Act:120,Perf:30,Err:20,Sum:60},G_=120;function H_(i){return i==null?"na":typeof i=="number"?Number.isFinite(i)?Number.isInteger(i)?String(i):String(Math.round(i*100)/100):"na":typeof i=="boolean"?i?"1":"0":String(i).replace(/\s+/g,"_").slice(0,64)}function V_(i,e,t){let n=`[${i}] t=${Math.round(e)}`;if(t)for(const s in t){const r=t[s];r!==void 0&&(n+=` ${s}=${H_(r)}`)}return n}function W_(i,e,t){const n=e-t.windowMs;let s=0,r=e;for(let o=i.length-1;o>=0;o--){const a=i[o];if(a===void 0||a<n)break;s++,r=a}return{burst:s>=t.minInputs,n:s,spanMs:Math.max(1,Math.round(e-r))}}function X_(i){const e=i.log??(b=>console.log(b)),t=i.now??(typeof performance<"u"?()=>performance.now():()=>Date.now()),n=t(),s={...k_,...i.limits??{}},r=i.maxLines??1200,o=(i.summaryEverySec??30)*1e3,a=i.burst===null?null:{windowMs:1500,minInputs:8,cooldownMs:3e3,...i.burst??{}},l={},c={},f={};let p=0,u=0,m=!1,g=!1;const _=()=>Math.round(t()-n);function d(b,C,L=!1){if(m)return;const U=l[b]??0,O=s[b]??100;if(p>=r||!L&&U>=O){u++,c[`dropped_${b}`]=(c[`dropped_${b}`]??0)+1;return}l[b]=U+1,p++;try{e(V_(b,_(),C))}catch{}}function h(b,C=1){c[b]=(c[b]??0)+C}function M(b,C){Number.isFinite(C)&&(f[b]=C)}function E(b="tick"){const C={reason:b,lines:p,dropped:u};for(const U in c)C[U]=c[U];for(const U in f)C[U]=f[U];d("Sum",C,b==="visibility_hidden"||b==="pagehide"||b==="dispose")}const y=[],w=[];let T=-1/0,R=!1;if(i.autoInstrument!==!1&&typeof window<"u"){const b=()=>{const O=t()-n;if(h("inputs"),R||(R=!0,d("Life",{stage:"first_input"})),!a)return;w.push(O),w.length>64&&w.splice(0,w.length-64);const D=W_(w,O,a);D.burst&&O-T>=a.cooldownMs&&(T=O,h("bursts"),d("Act",{kind:"burst",n:D.n,span_ms:D.spanMs,rate_per_s:D.n/D.spanMs*1e3}))};window.addEventListener("pointerdown",b,{capture:!0,passive:!0}),y.push(()=>window.removeEventListener("pointerdown",b,{capture:!0}));const C=()=>{g||(E("pagehide"),g=!0)};window.addEventListener("pagehide",C),y.push(()=>window.removeEventListener("pagehide",C));const L=O=>{h("errors"),d("Err",{kind:"error",msg:O.message,at:`${O.filename}:${O.lineno}`})};window.addEventListener("error",L),y.push(()=>window.removeEventListener("error",L));const U=O=>{h("rejections");const D=O.reason;d("Err",{kind:"rejection",msg:typeof D=="string"?D:D?.message??"unknown"})};window.addEventListener("unhandledrejection",U),y.push(()=>window.removeEventListener("unhandledrejection",U))}if(i.autoInstrument!==!1&&typeof document<"u"){const b=()=>{const C=document.hidden;h(C?"hidden":"visible"),d("Life",{stage:C?"hidden":"visible"}),C&&!g?(E("visibility_hidden"),g=!0):C||(g=!1)};document.addEventListener("visibilitychange",b),y.push(()=>document.removeEventListener("visibilitychange",b))}if(i.watchFrames!==!1&&typeof requestAnimationFrame=="function"){let b=t(),C=0;const L=()=>{if(m)return;const U=t(),O=U-b;b=U,O>=G_&&(h("long_frames"),M("worst_frame_ms",Math.max(f.worst_frame_ms??0,Math.round(O))),d("Perf",{kind:"long_frame",ms:Math.round(O)})),C=requestAnimationFrame(L)};C=requestAnimationFrame(L),y.push(()=>cancelAnimationFrame(C))}let v=null;return o>0&&typeof setInterval=="function"&&(v=setInterval(()=>E("tick"),o),y.push(()=>{v!==null&&clearInterval(v)})),d("Boot",{build:i.build,w:typeof window<"u"?window.innerWidth:void 0,h:typeof window<"u"?window.innerHeight:void 0,dpr:typeof window<"u"?window.devicePixelRatio:void 0,touch:typeof navigator<"u"?(navigator.maxTouchPoints??0)>0:void 0,lang:typeof navigator<"u"?navigator.language:void 0}),{event:d,count:h,set:M,flush:E,t:_,stats:()=>({lines:p,dropped:u,byTag:{...l},counters:{...c},gauges:{...f}}),dispose:()=>{if(!m){g||E("dispose"),m=!0;for(const b of y)try{b()}catch{}}}}}Fu(Uu());const Qt=X_({build:z_()}),hi=B_("inert"),q_=hi.init(),st=new D_,Y_=["chicken","mystery","egg","broccoli","sausage","rice"],Ki=document.querySelector("#app"),Ir={get(i){try{return localStorage.getItem("bento-box-"+i)}catch{return null}},set(i,e){try{localStorage.setItem("bento-box-"+i,e)}catch{}}},Zn=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ge=i=>Zn(Et(i));let ve=Sa(),Ya="chicken";const hs=new Set;let sr=Math.max(0,Math.min(100,Number(Ir.get("best"))||0)),Cc="",Wt=0,Rc=-1,Mr=performance.now(),Pc=0,Lc=0,va=0,Dr=!1,Bu=0,Ic=!1,Dc=0,Nc=0,zu=0;const Ma=matchMedia("(prefers-reduced-motion: reduce)");function $a(i){parent!==window&&parent.postMessage({type:"koyotap:game",gameId:"bento-box",event:i},location.origin)}function It(i,e,t="valid"){Qt.event("Act",{kind:i,target:e,outcome:t}),Qt.count("action_"+i),Qt.count("outcome_"+t),!Ic&&t==="valid"&&(Ic=!0,$a("first_action"))}function jn(){Ir.set("recipe-v1",vh(ve))}function $_(){const i=Mh(Ir.get("recipe-v1"));i&&(ve=i)}$_();Ki.innerHTML=`<main class="workbench" data-phase="pack">
  <header class="topbar"><div class="brand"><h1>${Ge("title")}</h1><p>${Ge("subtitle")}</p></div><button class="icon-button" id="audio-toggle" aria-label="${Ge("mute")}">♪</button><button class="icon-button" id="settings-button" aria-label="${Ge("settings")}">⚙</button></header>
  <section class="stage" aria-label="${Ge("title")}"><div class="scene-hint"><p id="hint">${Ge("packHint")}</p></div><div class="stats"><div class="stat"><small>${Ge("value")}</small><strong id="value">¥0</strong></div><div class="stat fill"><small id="fill-label">${Ge("fill")}</small><strong id="fill">0%</strong><div class="meter"><i id="fill-meter" style="width:0%"></i></div></div></div></section>
  <section class="controls" id="pack-controls"><div class="foods" aria-label="${Ge("packHint")}">${Y_.map((i,e)=>`<button class="food ${i==="mystery"?"food-mystery":""}" data-food="${i}" aria-label="${Ge(i==="mystery"?"mysteryLabel":"food."+i)}" aria-pressed="${i===Ya}"><i class="food-icon ${i==="mystery"?"mystery-icon":""}" style="background-position:${e*20}% center" aria-hidden="true"></i><span><span class="food-name">${Ge(i==="mystery"?"mystery":"food."+i)}</span><span class="food-value">${i==="mystery"?Ge("mysteryValue"):Zn(Lr(jt[i].value))}</span></span></button>`).join("")}</div><div class="tool-row"><button class="tool" id="undo" aria-label="${Ge("undo")}"><span class="symbol" aria-hidden="true">↶</span></button><button class="tool" id="rotate" aria-label="${Ge("rotate")}"><span class="symbol" aria-hidden="true">⟳</span></button><button class="tool release" id="release">${Ge("release")}</button><span class="piece-count" id="pieces">${Zn(Et("pieces",{count:0}))}</span></div><button class="primary full" id="begin-press">${Ge("press")}</button></section>
  <section class="controls press-controls" id="press-controls" hidden><p>${Ge("pressHint")}</p><div class="press-pad" id="press-pad" tabindex="0" role="button" aria-label="${Ge("ready")}"><i class="pad-fill" id="pad-fill" style="height:0%"></i><span class="arrow" aria-hidden="true">↓</span><strong>${Ge("ready")}</strong><span class="arrow" aria-hidden="true">↓</span></div><div class="pressure-readout"><span>${Ge("pressure")} <b id="pressure-value">0%</b></span><span>${Ge("closure")} <b id="closure-value">0%</b></span></div><div class="press-actions"><button class="secondary" id="reopen">${Ge("open")}</button><button class="primary" id="finish">${Ge("finish")}</button></div></section>
  <section class="result" hidden aria-label="${Ge("resultLabel")}"><div class="result-head"><div class="score"><strong id="score">0</strong><small>${Ge("score")}</small></div><div class="title-box"><p>${Ge("resultLabel")}</p><h2 id="result-title"></h2><small id="best"></small></div></div><div class="result-metrics"><div class="metric"><strong id="result-value"></strong><span>${Ge("value")}</span></div><div class="metric"><strong id="result-closure"></strong><span>${Ge("closure")}</span></div><div class="metric"><strong id="result-colors"></strong><span>${Ge("colors")}</span></div></div><div class="result-actions"><button class="primary" id="retry">${Ge("retry")}</button><button class="secondary" id="save-photo">${Ge("save")}</button><button class="secondary" id="new">${Ge("new")}</button></div><div class="result-links"><button id="share" ${location.hostname==="koyotap.com"?"":"hidden"}>${Ge("share")}</button></div></section>
  <div class="toast" aria-hidden="true" hidden></div><div class="sr-only" id="announcer" role="status" aria-live="polite"></div>
  <dialog id="settings"><div class="dialog-head"><h2>${Ge("settings")}</h2><button class="icon-button" id="close-settings" aria-label="${Ge("close")}">×</button></div><label class="settings-row"><span>${Ge("language")}</span><select id="language">${Du.map(i=>`<option value="${i.id}" ${i.id===Zi()?"selected":""}>${Zn(i.label)}</option>`).join("")}</select></label><label class="settings-row"><span>${Ge("music")}</span><input id="music" type="checkbox" ${st.music?"checked":""}></label><label class="settings-row"><span>${Ge("sounds")}</span><input id="sounds" type="checkbox" ${st.sounds?"checked":""}></label><label class="settings-row"><span>${Ge("volume")}</span><input id="volume" type="range" min="0" max="1" step="0.05" value="${st.volume}"></label><div class="credits"><b>${Ge("credits")}</b>${I_.map(i=>`<p>${Zn(i.title)}<br>${Zn(i.author)}<br><a href="${Zn(i.url)}" target="_blank" rel="noopener noreferrer">${Zn(i.license)}</a></p>`).join("")}</div></dialog>
  <dialog id="photo-dialog"><div class="dialog-head"><h2>${Ge("save")}</h2><button class="icon-button" id="close-photo" aria-label="${Ge("close")}">×</button></div><img class="photo" alt="${Ge("resultLabel")}"><p class="photo-hint">${Ge("photoHint")}</p><a class="secondary photo-download" id="photo-download" download="bento-box.png">${Ge("save")}</a></dialog>
</main>`;const Be=i=>Ki.querySelector(i),zn=Be(".stage"),$t=new P_(zn);$t.reducedMotion(Ma.matches);Ma.addEventListener("change",()=>$t.reducedMotion(Ma.matches));new ResizeObserver(()=>{$t.resize(),Wt++,ve.phase==="result"&&ku()}).observe(zn);const Ye={pack:Be("#pack-controls"),press:Be("#press-controls"),result:Be(".result"),hint:Be("#hint"),value:Be("#value"),fill:Be("#fill"),fillLabel:Be("#fill-label"),meter:Be("#fill-meter"),pieces:Be("#pieces"),undo:Be("#undo"),rotate:Be("#rotate"),release:Be("#release"),begin:Be("#begin-press"),pad:Be("#press-pad"),padFill:Be("#pad-fill"),pressure:Be("#pressure-value"),closure:Be("#closure-value"),settings:Be("#settings"),photo:Be("#photo-dialog")};new ResizeObserver(()=>{Ye.result.hidden||Ki.style.setProperty("--result-height",`${Math.ceil(Ye.result.getBoundingClientRect().height)}px`)}).observe(Ye.result);function Za(i){const e=Be(".toast");e.textContent=i,Be("#announcer").textContent=i,e.hidden=!1,clearTimeout(Dc),Dc=window.setTimeout(()=>{e.hidden=!0},1700)}function Ka(){Ye.undo.disabled=ve.foods.length===0,Ye.rotate.disabled=ve.heldId===null,Ye.release.disabled=ve.heldId===null,Ye.begin.disabled=ve.foods.length===0}function ku(){const i=Be("#result-value");let e=22;for(i.style.fontSize=e+"px";i.clientWidth>0&&i.scrollWidth>i.clientWidth+1&&e>12;)i.style.fontSize=--e+"px"}function Ji(){if(Gu(),Cc!==ve.phase){if(Cc=ve.phase,Be(".workbench").dataset.phase=ve.phase,Ye.pack.hidden=ve.phase!=="pack",Ye.press.hidden=ve.phase!=="press",Ye.result.hidden=ve.phase!=="result",Ye.hint.textContent=Et(ve.phase==="pack"?"packHint":ve.phase==="press"?"pressHint":"resultHint"),Ye.fillLabel.textContent=Et(ve.phase==="pack"?"fill":"closure"),ve.phase==="result"&&ve.result){zu=performance.now();const i=ve.result;sr=Math.max(sr,i.score),Ir.set("best",String(sr)),Be("#score").textContent=String(i.score),Be("#result-title").textContent=Et(i.titleKey),Be("#best").textContent=Et("best")+" "+sr,Be("#result-value").textContent=Lr(i.value),Be("#result-closure").textContent=i.closure+"%",Be("#result-colors").textContent=i.colors+"/6",requestAnimationFrame(ku),st.cue("finish"),hi.gameplayStop(),Qt.event("Game",{kind:"over",score:i.score,value:i.value,closure:i.closure,colors:i.colors,lost:i.lost}),Qt.flush("result"),$a("round_end"),jn()}Ka(),$t.resize(),Wt++}}function Gu(){for(const i of hs)ve.foods.some(e=>e.id===i)||hs.delete(i);for(const i of ve.foods)i.concealed?hs.add(i.id):hs.delete(i.id)&&(Za(Et("surprise",{item:Et("food."+i.kind)})),st.cue("reveal"),Qt.event("Game",{kind:"mystery_reveal",item:i.kind}),Wt++)}function ti(){Gu(),Wt++,Ka(),jn()}function Z_(i){Ya=i;for(const e of Ki.querySelectorAll("[data-food]"))e.setAttribute("aria-pressed",String(e.dataset.food===i))}function Hu(i){return(i==="mystery"?sh(ve):Bc(ve,i))?(Z_(i),Ye.hint.textContent=Et(i==="mystery"?"mysteryHint":"heldHint"),st.cue("place"),It("choose",i),ti(),!0):(It("choose",i,"unavailable"),!1)}Ki.addEventListener("pointerdown",()=>{st.unlock()},{passive:!0});for(const i of Ki.querySelectorAll("[data-food]"))i.addEventListener("click",()=>{Hu(i.dataset.food)});Ye.undo.addEventListener("click",()=>{lh(ve)&&(st.cue("undo"),It("undo","last_food"),ti())});Ye.rotate.addEventListener("click",()=>{ah(ve,Math.PI/6)&&(st.cue("move"),It("rotate","held_food"),ti())});Ye.release.addEventListener("click",()=>{xi(ve)&&(st.cue("place"),It("drop","release_button"),Ye.hint.textContent=Et("packHint"),ti())});Ye.begin.addEventListener("click",()=>{if(!ch(ve)){Za(Et("needFood"));return}It("press_begin","lid"),st.cue("tap"),Ji()});function Vu(){uh(ve),hi.gameplayStart(),It("reopen","lid"),Ji(),ti()}Be("#reopen").addEventListener("click",Vu);Be("#retry").addEventListener("click",Vu);Be("#finish").addEventListener("click",()=>{ve.phase==="press"&&(zc(ve),It("finish","manual"),Ji())});Be("#new").addEventListener("click",()=>{ve=Sa(),hs.clear(),va=0,hi.gameplayStart(),It("new","empty_box"),Ji(),ti()});let _i=null;function Ja(i){const e=$t.worldAt(i.clientX,i.clientY-(i.pointerType==="touch"?48:0),ve.tool.y);e&&oh(ve,e.x,e.z)}zn.addEventListener("pointerdown",i=>{if(!i.target.closest("button")&&!(ve.phase!=="pack"||Dr||_i||i.button>0)){if(ve.heldId===null){const e=$t.pick(i.clientX,i.clientY);if(e!==null)rh(ve,e),It("pick","placed_food");else if(!Hu(Ya))return}_i={id:i.pointerId,touch:i.pointerType==="touch"},zn.setPointerCapture(i.pointerId),Ja(i),Wt++}});zn.addEventListener("pointermove",i=>{_i?.id===i.pointerId&&ve.phase==="pack"&&(Ja(i),Wt++)});zn.addEventListener("pointerup",i=>{_i?.id===i.pointerId&&(Ja(i),_i=null,zn.hasPointerCapture(i.pointerId)&&zn.releasePointerCapture(i.pointerId),xi(ve)&&(It("drop","box_canvas"),st.cue("place"),Ye.hint.textContent=Et("packHint"),ti()))});zn.addEventListener("pointercancel",i=>{_i?.id===i.pointerId&&(_i=null,xi(ve),It("drop","box_canvas","cancelled"),ti())});let di=null;Ye.pad.addEventListener("pointerdown",i=>{ve.phase!=="press"||di||i.button>0||(di={id:i.pointerId,y:i.clientY,initial:ve.lidTarget},Ye.pad.setPointerCapture(i.pointerId),Ye.pad.classList.add("active"),st.cue("press"))});Ye.pad.addEventListener("pointermove",i=>{di?.id===i.pointerId&&(ba(ve,di.initial+(i.clientY-di.y)/65),Wt++)});function Wu(i,e=!1){di?.id===i.pointerId&&(di=null,Ye.pad.classList.remove("active"),Ye.pad.hasPointerCapture(i.pointerId)&&Ye.pad.releasePointerCapture(i.pointerId),e&&ba(ve,ve.lid),It("push_lid","pressure_lane",e?"cancelled":"valid"),jn())}Ye.pad.addEventListener("pointerup",i=>Wu(i));Ye.pad.addEventListener("pointercancel",i=>Wu(i,!0));Ye.pad.addEventListener("keydown",i=>{["ArrowDown","ArrowUp","Enter"," "].includes(i.key)&&(i.preventDefault(),st.unlock(),ba(ve,i.key==="ArrowUp"?ve.lidTarget-.15:ve.lidTarget+.15),It("push_lid","keyboard"),st.cue("press"))});function Qa(){st.sync(),Be("#audio-toggle").textContent=st.music||st.sounds?"♪":"×",Be("#audio-toggle").setAttribute("aria-label",Et(st.music||st.sounds?"mute":"unmute"))}Be("#audio-toggle").addEventListener("click",()=>{const i=st.music||st.sounds;st.music=!i,st.sounds=!i,Be("#music").checked=!i,Be("#sounds").checked=!i,Qa(),It("audio","toggle")});Be("#settings-button").addEventListener("click",()=>{Dr=!0,st.paused=!0,st.sync(),Ye.settings.showModal(),It("settings","open")});function Xu(){Dr=!1,st.paused=!1,st.sync(),Mr=performance.now(),Wt++}Be("#close-settings").addEventListener("click",()=>{Ye.settings.close(),Xu()});Ye.settings.addEventListener("cancel",Xu);Be("#language").addEventListener("change",i=>{jn(),Fu(i.target.value);const e=new URL(location.href);e.searchParams.set("lang",Zi()),location.replace(e.href)});for(const i of["music","sounds"])Be("#"+i).addEventListener("change",e=>{st[i]=e.target.checked,Qa()});Be("#volume").addEventListener("input",i=>{st.volume=Number(i.target.value),st.sync()});Be("#close-photo").addEventListener("click",()=>Ye.photo.close());Be("#save-photo").addEventListener("click",()=>{K_()});Be("#share").addEventListener("click",()=>{if(location.hostname!=="koyotap.com"||!ve.result)return;const i=new URL(location.href);i.search="?lang="+Zi();const e=Et("shareText",{title:Et(ve.result.titleKey),value:Ou(ve.result.value),score:ve.result.score,url:i.href});window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e),"_blank","noopener,noreferrer"),It("share","x_intent")});async function K_(){if(!ve.result)return;const i=new Image;i.src=$t.photo();try{await i.decode()}catch{return}const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");if(!t)return;t.fillStyle="#fff8e8",t.fillRect(0,0,900,1200);const n=$t.getSize(),s=Math.max(900/n.width,740/n.height),r=n.width*s,o=n.height*s;t.save(),t.beginPath(),t.rect(0,0,900,740),t.clip(),t.drawImage(i,(900-r)/2,(740-o)/2,r,o),t.restore(),t.textAlign="center",t.fillStyle="#81734b",t.font="bold 27px system-ui",t.fillText(Et("resultLabel"),450,785);const a=Et(ve.result.titleKey);let l=54;do{if(t.font=`bold ${l}px system-ui`,t.measureText(a).width<810)break;l--}while(l>27);t.fillStyle="#493721",t.fillText(a,450,858),t.fillStyle="#c46c48",t.font="bold 110px system-ui",t.fillText(String(ve.result.score),450,1e3),t.font="27px system-ui",t.fillStyle="#7d7856",t.fillText(Lr(ve.result.value)+"   /   "+Et("closure")+" "+ve.result.closure+"%",450,1070),t.font="23px system-ui",t.fillText(Et("title"),450,1147);const c=e.toDataURL("image/png");Be(".photo").src=c,Be("#photo-download").href=c,Ye.photo.showModal(),It("photo","preview")}document.addEventListener("visibilitychange",()=>{Mr=performance.now(),Wt++,document.hidden&&(jn(),Qt.flush("hidden"))});window.addEventListener("pagehide",jn);function qu(i){Bu=requestAnimationFrame(qu);const e=Math.max(0,Math.min(.04,(i-Mr)/1e3));if(Mr=i,document.hidden||Dr)return;_h(ve,e),Ji();const t=Ea(ve);if(ve.ejections>va&&(Za(Et("ejected")),st.cue("pop"),Qt.event("Game",{kind:"discard",count:ve.discarded}),va=ve.ejections,Wt++,jn()),st.whirr(ve.phase==="press"?ve.pressure*40:0),i-Lc>90){Ye.value.textContent=Lr(t.value);const s=ve.phase==="pack"?t.fill:t.closure;Ye.fill.textContent=s+"%",Ye.meter.style.width=s+"%",Ye.pieces.textContent=Et("pieces",{count:ve.foods.length}),Ye.padFill.style.height=ve.lid*100+"%",Ye.pressure.textContent=Math.round(ve.pressure*100)+"%",Ye.closure.textContent=t.closure+"%",Ka(),Lc=i}(ve.heldId!==null||ve.phase==="press"||ve.foods.some(s=>Math.abs(s.vx)+Math.abs(s.vy)+Math.abs(s.vz)>.04)||ve.phase==="result"&&i-zu<1500||Wt!==Rc||i-Pc>220)&&($t.render(ve,e,i),Rc=Wt,Pc=i),i-Nc>3500&&ve.foods.length>0&&(jn(),Nc=i)}Qa();Ji();$t.render(ve,0,performance.now());requestAnimationFrame(qu);q_.then(()=>{hi.gameLoadingStart(),hi.gameLoadingFinished(),hi.gameplayStart(),$a("ready"),Qt.event("Life",{stage:"gameplay_start"})});$t.loadAtlas(eh).then(()=>{Wt++}).catch(()=>{Qt.event("Err",{kind:"food_texture_load"})});$t.loadOddAtlas(th).then(()=>{Wt++}).catch(()=>{Qt.event("Err",{kind:"odd_texture_load"})});window.addEventListener("beforeunload",()=>{cancelAnimationFrame(Bu),$t.dispose(),st.dispose(),Qt.dispose()});
