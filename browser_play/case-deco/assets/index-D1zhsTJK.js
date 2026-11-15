(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ft=1.8,Xt=3.5,Lr=.24,ft=Object.freeze({x:-.43,y:1.18,width:.72,height:.84,radius:.17}),mh=Object.freeze(["gem","heartGem","emerald","pearl","pearlCluster","star","moon","crown"]),gh=Object.freeze(["bow","laceBow","daisy","rose","tulip","butterfly","shell","leaf"]),Nu=Object.freeze(["eye","bear","heart","lightning","cat","bunny","paw","planet"]),_h=Object.freeze(["cherry","egg","dumpling","donut","strawberry","macaron","onigiri","pudding"]),Bs=Object.freeze([Object.freeze({id:"jewelry",kinds:mh}),Object.freeze({id:"botanical",kinds:gh}),Object.freeze({id:"cute",kinds:Nu}),Object.freeze({id:"food",kinds:_h})]),na=Object.freeze(Bs.flatMap(i=>i.kinds)),el=Object.freeze({gem:Object.freeze({width:.43,height:.55,depth:.16}),pearl:Object.freeze({width:.3,height:.3,depth:.22}),heart:Object.freeze({width:.54,height:.52,depth:.16}),star:Object.freeze({width:.58,height:.58,depth:.12}),daisy:Object.freeze({width:.65,height:.65,depth:.16}),bow:Object.freeze({width:.88,height:.5,depth:.22}),eye:Object.freeze({width:.6,height:.38,depth:.2}),cherry:Object.freeze({width:.65,height:.75,depth:.24}),egg:Object.freeze({width:.7,height:.6,depth:.16}),dumpling:Object.freeze({width:.62,height:.36,depth:.26}),bear:Object.freeze({width:.6,height:.62,depth:.22}),lightning:Object.freeze({width:.4,height:.7,depth:.12}),heartGem:Object.freeze({width:.54,height:.52,depth:.19}),emerald:Object.freeze({width:.43,height:.6,depth:.18}),pearlCluster:Object.freeze({width:.62,height:.34,depth:.2}),moon:Object.freeze({width:.48,height:.65,depth:.13}),crown:Object.freeze({width:.78,height:.52,depth:.22}),laceBow:Object.freeze({width:.88,height:.58,depth:.2}),rose:Object.freeze({width:.58,height:.58,depth:.29}),tulip:Object.freeze({width:.42,height:.78,depth:.21}),butterfly:Object.freeze({width:.78,height:.58,depth:.17}),shell:Object.freeze({width:.63,height:.6,depth:.17}),leaf:Object.freeze({width:.42,height:.72,depth:.11}),cat:Object.freeze({width:.62,height:.66,depth:.22}),bunny:Object.freeze({width:.5,height:.8,depth:.24}),paw:Object.freeze({width:.58,height:.6,depth:.18}),planet:Object.freeze({width:.84,height:.62,depth:.28}),donut:Object.freeze({width:.63,height:.63,depth:.24}),strawberry:Object.freeze({width:.5,height:.68,depth:.24}),macaron:Object.freeze({width:.66,height:.44,depth:.27}),onigiri:Object.freeze({width:.65,height:.63,depth:.23}),pudding:Object.freeze({width:.65,height:.58,depth:.29})}),Fu=["gloss","matte","glitter"],no=300,io=160,Hl=512,xh=1e9,zr=1.4,Vr=2.2,da=Math.PI*2,Dn=90,rs=175,ji=Ft/Dn,es=Xt/rs,mn=(i,e,t)=>Math.max(e,Math.min(t,i)),Yn=i=>typeof i=="number"&&Number.isFinite(i),ts=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),Gr=i=>typeof i=="number"&&Number.isSafeInteger(i)&&i>0&&i<xh;function vh(i){return typeof i!="string"?null:/^#[0-9a-f]{6}$/i.test(i)?i.toLowerCase():/^#[0-9a-f]{3}$/i.test(i)?`#${i.slice(1).split("").map(e=>e+e).join("")}`.toLowerCase():null}function Mh(i,e,t,n){const s=Math.abs(i.x),r=Math.abs(i.y),a=e/2,o=t/2;if(s>a||r>o)return!1;const l=Math.max(0,s-a+n),c=Math.max(0,r-o+n);return l*l+c*c<=n*n+1e-12}function ia(i){return Yn(i.x)&&Yn(i.y)&&Mh(i,Ft,Xt,Lr)}function zs(i){return ia(i)&&!Mh({x:i.x-ft.x,y:i.y-ft.y},ft.width,ft.height,ft.radius)}function di(){return{strokes:[],decorations:[],nextId:1}}function Ou(i){if(!Array.isArray(i)||i.length===0||i.length>65536)return[];const e=[],t=Math.max(1,(i.length-1)/(Hl-1));for(let n=0;n<Math.min(i.length,Hl);n++){const s=i[Math.round(n*t)];if(!ts(s)||!Yn(s.x)||!Yn(s.y))return[];const r={x:mn(s.x,-zr,zr),y:mn(s.y,-Vr,Vr)},a=e[e.length-1];(!a||a.x!==r.x||a.y!==r.y)&&e.push(r)}return e}function Sh(i,e){if(!ts(i)||!Yn(i.size)||!Fu.includes(i.finish))return null;const t=vh(i.color),n=Ou(i.points);return!t||n.length===0?null:{id:e,color:t,size:mn(i.size,.015,.4),finish:i.finish,points:n}}function tl(i,e){if(!ts(i)||!na.includes(i.kind)||!Yn(i.x)||!Yn(i.y)||!Yn(i.size)||!Yn(i.angle))return null;const t=vh(i.color);if(!t)return null;const n=(i.angle%da+da)%da;return{id:e,kind:i.kind,x:mn(i.x,-zr,zr),y:mn(i.y,-Vr,Vr),size:mn(i.size,.12,1.9),angle:n===0?0:n,color:t}}function yh(i,e,t){const n=t.x-e.x,s=t.y-e.y,r=n*n+s*s,a=r===0?0:mn(((i.x-e.x)*n+(i.y-e.y)*s)/r,0,1),o=i.x-e.x-n*a,l=i.y-e.y-s*a;return o*o+l*l}const bh=new Uint8Array(Dn*rs);let so=0;for(let i=0;i<rs;i++)for(let e=0;e<Dn;e++)zs({x:(e+.5)*ji-Ft/2,y:(i+.5)*es-Xt/2})&&(bh[i*Dn+e]=1,so++);function Ah(i,e){const t=i.size/2;for(let n=0;n<i.points.length;n++){const s=i.points[n===0?0:n-1],r=i.points[n],a=mn(Math.floor((Math.min(s.x,r.x)-t+Ft/2)/ji),0,Dn-1),o=mn(Math.ceil((Math.max(s.x,r.x)+t+Ft/2)/ji),0,Dn-1),l=mn(Math.floor((Math.min(s.y,r.y)-t+Xt/2)/es),0,rs-1),c=mn(Math.ceil((Math.max(s.y,r.y)+t+Xt/2)/es),0,rs-1);for(let h=l;h<=c;h++)for(let f=a;f<=o;f++){const u=h*Dn+f;bh[u]&&yh({x:(f+.5)*ji-Ft/2,y:(h+.5)*es-Xt/2},s,r)<=t*t&&e(u)}}}function Eh(i){let e=!1;if(Ah(i,()=>{e=!0}),!e)for(let t=0;t<i.points.length;t++){const n=i.points[t===0?0:t-1],s=i.points[t],r=Math.max(1,Math.ceil(Math.hypot(s.x-n.x,s.y-n.y)/.01));for(let a=0;a<=r;a++)if(zs({x:n.x+(s.x-n.x)*a/r,y:n.y+(s.y-n.y)*a/r}))return!0}return e}function Bu(i,e){if(i.strokes.length>=no||!Gr(i.nextId))return i;const t=Sh(e,i.nextId);return!t||!Eh(t)?i:{...i,strokes:[...i.strokes,t],nextId:i.nextId+1}}function zu(i,e){if(i.decorations.length>=io||!Gr(i.nextId))return i;const t=tl(e,i.nextId);return t?{...i,decorations:[...i.decorations,t],nextId:i.nextId+1}:i}function Qs(i,e,t){const n=i.decorations.find(r=>r.id===e);if(!n)return i;const s=tl({...n,...t},e);return!s||Object.keys(s).every(r=>s[r]===n[r])?i:{...i,decorations:i.decorations.map(r=>r.id===e?s:r)}}function wh(i,e){return i.decorations.some(t=>t.id===e)?{...i,decorations:i.decorations.filter(t=>t.id!==e)}:i}function kl(i,e){const t=el[i.kind],n=e.x-i.x,s=e.y-i.y,r=Math.cos(i.angle),a=Math.sin(i.angle),o=(n*r+s*a)/(t.width*i.size/2),l=(-n*a+s*r)/(t.height*i.size/2);return o*o+l*l<=1}function Vu(i,e,t,n,s){const r=i.decorations.length;if(r===0&&i.strokes.length===0)return"blank";const a=l=>i.decorations.filter(c=>l.includes(c.kind)).length,o=a(_h);return r>=18||s>=100?"maximal":o>=1||r>=3&&n>=25?"chaos":a([...gh,"heart","bear","cat","bunny","paw"])>=Math.max(2,Math.ceil(r/2))?"sweet":a(mh)>=Math.max(2,Math.ceil(r/2))?"jewelry":e>=5||e>=3&&t>=20?"colorful":"minimal"}function nl(i){const e=new Uint16Array(Dn*rs),t=new Map,n=m=>(t.has(m)||t.set(m,t.size+1),t.get(m));for(const m of i.strokes){const M=n(m.color);Ah(m,g=>{e[g]=M})}let s=0,r=0,a=0,o=0;for(const m of e)m>0&&s++;const l=new Set;for(const m of i.decorations){const M=el[m.kind],g=Math.PI*M.width*M.height/4*m.size*m.size;r+=g,o=Math.max(o,M.depth*m.size),l.add(m.color);let p=0,T=0;const w=Math.cos(m.angle),y=Math.sin(m.angle);for(let x=0;x<21;x++)for(let v=0;v<21;v++){const b=(v+.5)/21*2-1,_=(x+.5)/21*2-1;if(b*b+_*_>1)continue;const E=b*M.width*m.size/2,C=_*M.height*m.size/2,P={x:m.x+E*w-C*y,y:m.y+E*y+C*w};ia(P)?p++:T++}a+=g*T/Math.max(1,p+T)}const c=[...t.keys()];for(let m=0;m<e.length;m++){if(e[m]===0)continue;const M={x:(m%Dn+.5)*ji-Ft/2,y:(Math.floor(m/Dn)+.5)*es-Xt/2};i.decorations.some(g=>kl(g,M))||l.add(c[e[m]-1])}for(let m=0;m<i.strokes.length;m++){const M=i.strokes[m];if(l.has(M.color))continue;M.points.some(p=>zs(p)&&!i.decorations.some(T=>kl(T,p))&&!i.strokes.slice(m+1).some(T=>T.points.some((w,y)=>yh(p,T.points[y===0?0:y-1],w)<=(T.size/2)**2)))&&l.add(M.color)}const h=Math.round(s/so*100),f=r===0?0:Math.round(a/r*100),u=Math.round(r/(so*ji*es)*100),d=l.size;return{paintedPercent:h,colorCount:d,partCount:i.decorations.length,overhangPercent:f,maxHeight:Math.round(o*1e3)/1e3,decorationLevel:u,style:Vu(i,d,h,f,u)}}function ro(i){return JSON.stringify({version:1,strokes:i.strokes,decorations:i.decorations,nextId:i.nextId})}function Gu(i){let e=i;if(typeof i=="string"){if(i.length>12e6)return di();try{e=JSON.parse(i)}catch{return di()}}if(!ts(e)||e.version!==void 0&&e.version!==1||!Array.isArray(e.strokes)||!Array.isArray(e.decorations))return di();const t=di(),n=new Set;let s=1;const r=a=>{let o=Gr(a)&&!n.has(a)?a:s;for(;n.has(o);)o++;return n.add(o),s=Math.max(s,o+1),o};for(const a of e.strokes.slice(0,no)){const o=Sh(a,0);!o||!Eh(o)||(o.id=r(ts(a)?a.id:void 0),t.strokes.push(o))}for(const a of e.decorations.slice(0,io)){const o=tl(a,0);o&&(o.id=r(ts(a)?a.id:void 0),t.decorations.push(o))}if(t.nextId=Gr(e.nextId)&&e.nextId>=s?e.nextId:s,t.nextId>=xh-no-io-1){let a=1;for(const o of[...t.strokes,...t.decorations])o.id=a++;t.nextId=a}return t}class Hu{constructor(e=di()){this.past=[],this.future=[],this.state=e}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}commit(e){return e===this.state||ro(e)===ro(this.state)?!1:(this.past.push(this.state),this.past.length>35&&this.past.shift(),this.state=e,this.future=[],!0)}undo(){const e=this.past.pop();return e?(this.future.push(this.state),this.state=e,!0):!1}redo(){const e=this.future.pop();return e?(this.past.push(this.state),this.state=e,!0):!1}clear(){this.past=[],this.future=[],this.state=di()}}const Th="koyotap-case-deco-v1";function ku(){try{return Gu(localStorage.getItem(Th))}catch{return di()}}function Wu(i){try{return localStorage.setItem(Th,ro(i)),!0}catch{return!1}}const Xu=["en","ja","zh-CN","ko","es","fr","de","it","pt-BR","ru","tr"],Ch={title:"CASE OVERLOAD",subtitle:"Your case. Your chaos.",paint:"Paint",parts:"Charms",color:"Color",size:"Size",finish:"Finish",gloss:"Gloss",matte:"Matte",glitter:"Glitter",undo:"Undo",redo:"Redo",done:"Finish",back:"Keep decorating",save:"Save photo",share:"Share on X",newDesign:"New case",close:"Close",remove:"Remove",rotate:"Rotate",left:"Left",right:"Right",loading:"Opening your studio…",unavailable:"This browser cannot open the 3D studio.",paintHint:"Drag on the case to paint.",partHint:"Choose a charm, then tap the case.",selectedHint:"Drag to move. Drag outside to remove.",finishedHint:"Your case is complete. Save a photo of your creation.",saved:"Photo ready",saveFail:"Could not save. Try again.",shareFail:"Could not open X. Try again.",artwork:"Your creation",painted:"Painted",colors:"Colors",pieces:"Charms",overhang:"Overhang",level:"Deco level",style_blank:"A fresh canvas",style_minimal:"Less, but yours",style_jewelry:"Pocket treasure",style_sweet:"Sweet little chaos",style_chaos:"What even is this?",style_maximal:"No room for subtle",style_colorful:"All the colors, please",sound:"Audio",music:"Music",sfx:"Sounds",on:"On",off:"Off",exporting:"Taking your photo…",emptyHint:"A blank case is a beginning. Add your first mark.",restoreHint:"Your case is right where you left it.",gem:"Gem",pearl:"Pearl",heart:"Heart",star:"Star",daisy:"Daisy",bow:"Bow",eye:"Eye",cherry:"Cherries",egg:"Fried egg",dumpling:"Dumpling",bear:"Bear",lightning:"Lightning",shareText:`“{style}” — I put {parts} charms on my phone case. Can you still hold it?
{url}
#gamedev #indiegame`,heartGem:"Heart gem",emerald:"Emerald cut",pearlCluster:"Pearl cluster",moon:"Moon",crown:"Crown",laceBow:"Lace bow",rose:"Rose",tulip:"Tulip",butterfly:"Butterfly",shell:"Shell",leaf:"Leaf",cat:"Cat",bunny:"Bunny",paw:"Paw",planet:"Planet",donut:"Donut",strawberry:"Strawberry",macaron:"Macaron",onigiri:"Rice ball",pudding:"Pudding",category_jewelry:"Jewels",category_botanical:"Florals",category_cute:"Cute",category_food:"Food",confirmNew:"Start a new case?",newConfirm:"Start new",newCancel:"Keep this one"},qu={en:Ch,ja:{title:"スマホケース、デコりすぎ。",subtitle:"好きなだけ、盛っちゃおう。",paint:"塗る",parts:"パーツ",color:"色",size:"サイズ",finish:"質感",gloss:"つや",matte:"マット",glitter:"ラメ",undo:"戻す",redo:"やり直す",done:"完成",back:"デコに戻る",save:"写真を保存",share:"Xに投稿",newDesign:"新しいケース",close:"閉じる",remove:"削除",rotate:"回転",left:"左",right:"右",loading:"アトリエを準備中…",unavailable:"このブラウザでは3Dアトリエを開けません。",paintHint:"ケースをなぞって塗ろう。",partHint:"パーツを選んで、ケースをタップ。",selectedHint:"ドラッグで移動。外に出すと削除。",finishedHint:"ケースが完成。自分だけの作品を写真に残そう。",saved:"写真ができました",saveFail:"保存できませんでした。もう一度お試しください。",shareFail:"Xを開けませんでした。もう一度お試しください。",artwork:"あなたの作品",painted:"塗った面積",colors:"色",pieces:"パーツ",overhang:"はみ出し",level:"デコ度",style_blank:"まっさらな可能性",style_minimal:"引き算のこだわり",style_jewelry:"ポケットの宝物",style_sweet:"あまい大渋滞",style_chaos:"これ、何なん？",style_maximal:"余白、お断り",style_colorful:"色、全部ください",sound:"音",music:"音楽",sfx:"効果音",on:"オン",off:"オフ",exporting:"作品を撮影中…",emptyHint:"まずはひと塗り、ひと飾り。",restoreHint:"前のケースをそのまま開きました。",gem:"宝石",pearl:"パール",heart:"ハート",star:"星",daisy:"花",bow:"リボン",eye:"目玉",cherry:"さくらんぼ",egg:"目玉焼き",dumpling:"ぎょうざ",bear:"くま",lightning:"いなずま",shareText:`「{style}」なスマホケースができた。パーツ{parts}個。これ、どこ持つん？
{url}
#gamedev #indiegame`,heartGem:"ハート石",emerald:"角カット",pearlCluster:"連パール",moon:"三日月",crown:"王冠",laceBow:"レース",rose:"バラ",tulip:"チューリップ",butterfly:"ちょう",shell:"貝がら",leaf:"葉っぱ",cat:"ねこ",bunny:"うさぎ",paw:"肉球",planet:"惑星",donut:"ドーナツ",strawberry:"いちご",macaron:"マカロン",onigiri:"おにぎり",pudding:"プリン",category_jewelry:"宝石",category_botanical:"花・リボン",category_cute:"かわいい",category_food:"食べ物",confirmNew:"新しいケースを作りますか？",newConfirm:"新しく作る",newCancel:"このまま続ける"},"zh-CN":{title:"手机壳，贴过头了。",subtitle:"喜欢什么，就往上加。",paint:"涂色",parts:"饰品",color:"颜色",size:"大小",finish:"质感",gloss:"亮面",matte:"哑光",glitter:"闪粉",undo:"撤销",redo:"重做",done:"完成",back:"继续装饰",save:"保存照片",share:"分享到X",newDesign:"新手机壳",close:"关闭",remove:"删除",rotate:"旋转",left:"左",right:"右",loading:"正在准备工作室…",unavailable:"此浏览器无法打开3D工作室。",paintHint:"在手机壳上拖动即可涂色。",partHint:"选择饰品，再点一下手机壳。",selectedHint:"拖动来移动，拖到外面来删除。",finishedHint:"手机壳完成了！把自己的作品保存成照片吧。",saved:"照片已就绪",saveFail:"保存失败，请重试。",shareFail:"无法打开X，请重试。",artwork:"你的作品",painted:"涂色面积",colors:"颜色",pieces:"饰品",overhang:"超出边缘",level:"装饰指数",style_blank:"一切皆有可能",style_minimal:"留白也有态度",style_jewelry:"口袋里的宝藏",style_sweet:"甜蜜大塞车",style_chaos:"这到底是啥？",style_maximal:"不留一点空白",style_colorful:"所有颜色都要",sound:"声音",music:"音乐",sfx:"音效",on:"开",off:"关",exporting:"正在拍摄作品…",emptyHint:"先涂一笔，或加一个饰品。",restoreHint:"已恢复上次的手机壳。",gem:"宝石",pearl:"珍珠",heart:"爱心",star:"星星",daisy:"雏菊",bow:"蝴蝶结",eye:"眼睛",cherry:"樱桃",egg:"煎蛋",dumpling:"饺子",bear:"小熊",lightning:"闪电",shareText:`我的手机壳风格是「{style}」，贴了{parts}个饰品。这还能拿稳吗？
{url}
#gamedev #indiegame`,heartGem:"心形宝石",emerald:"祖母绿切割",pearlCluster:"珍珠串",moon:"月牙",crown:"皇冠",laceBow:"蕾丝结",rose:"玫瑰",tulip:"郁金香",butterfly:"蝴蝶",shell:"贝壳",leaf:"叶子",cat:"猫咪",bunny:"兔子",paw:"肉垫",planet:"行星",donut:"甜甜圈",strawberry:"草莓",macaron:"马卡龙",onigiri:"饭团",pudding:"布丁",category_jewelry:"珠宝",category_botanical:"花与丝带",category_cute:"可爱",category_food:"食物",confirmNew:"开始制作新的手机壳？",newConfirm:"重新开始",newCancel:"继续这个"},tr:{title:"KILIFTA SINIR YOK",subtitle:"Senin kılıfın. Senin karmaşan.",paint:"Boya",parts:"Süsler",color:"Renk",size:"Boyut",finish:"Yüzey",gloss:"Parlak",matte:"Mat",glitter:"Simli",undo:"Geri al",redo:"Yinele",done:"Bitir",back:"Süslemeye devam et",save:"Fotoğrafı kaydet",share:"X’te paylaş",newDesign:"Yeni kılıf",close:"Kapat",remove:"Sil",rotate:"Döndür",left:"Sol",right:"Sağ",loading:"Atölyen açılıyor…",unavailable:"Bu tarayıcı 3D atölyeyi açamıyor.",paintHint:"Boyamak için kılıfın üzerinde sürükle.",partHint:"Bir süs seç, ardından kılıfa dokun.",selectedHint:"Taşımak için sürükle. Silmek için dışarı çıkar.",finishedHint:"Kılıfın hazır. Eserinin fotoğrafını kaydet.",saved:"Fotoğraf hazır",saveFail:"Kaydedilemedi. Tekrar dene.",shareFail:"X açılamadı. Tekrar dene.",artwork:"Senin eserin",painted:"Boyanan alan",colors:"Renkler",pieces:"Süsler",overhang:"Taşma",level:"Süs seviyesi",style_blank:"Her şey mümkün",style_minimal:"Az ama sana özel",style_jewelry:"Cep hazinesi",style_sweet:"Tatlı bir karmaşa",style_chaos:"Bu da ne böyle?",style_maximal:"Sadeliğe yer yok",style_colorful:"Bütün renkler, lütfen",sound:"Ses",music:"Müzik",sfx:"Efektler",on:"Açık",off:"Kapalı",exporting:"Eserin fotoğraflanıyor…",emptyHint:"Bir fırça darbesi ya da süsle başla.",restoreHint:"Kılıfın bıraktığın gibi duruyor.",gem:"Mücevher",pearl:"İnci",heart:"Kalp",star:"Yıldız",daisy:"Papatya",bow:"Fiyonk",eye:"Göz",cherry:"Kiraz",egg:"Sahanda yumurta",dumpling:"Mantı",bear:"Ayıcık",lightning:"Şimşek",shareText:`“{style}”: telefon kılıfıma {parts} süs koydum. Bunu hâlâ tutabilir miyim?
{url}
#gamedev #indiegame`,heartGem:"Kalp taş",emerald:"Zümrüt kesim",pearlCluster:"İnci demeti",moon:"Ay",crown:"Taç",laceBow:"Dantel fiyonk",rose:"Gül",tulip:"Lale",butterfly:"Kelebek",shell:"Deniz kabuğu",leaf:"Yaprak",cat:"Kedi",bunny:"Tavşan",paw:"Pati",planet:"Gezegen",donut:"Donut",strawberry:"Çilek",macaron:"Makaron",onigiri:"Pirinç topu",pudding:"Puding",category_jewelry:"Taşlar",category_botanical:"Çiçekler",category_cute:"Sevimli",category_food:"Yiyecek",confirmNew:"Yeni bir kılıfa başlansın mı?",newConfirm:"Yeniden başla",newCancel:"Buna devam et"},ko:{title:"폰케이스, 너무 꾸몄다.",subtitle:"좋아하는 건 전부 붙여요.",paint:"칠하기",parts:"장식",color:"색상",size:"크기",finish:"질감",gloss:"유광",matte:"무광",glitter:"글리터",undo:"실행 취소",redo:"다시 실행",done:"완성",back:"더 꾸미기",save:"사진 저장",share:"X에 공유",newDesign:"새 케이스",close:"닫기",remove:"삭제",rotate:"회전",left:"왼쪽",right:"오른쪽",loading:"작업실을 준비하는 중…",unavailable:"이 브라우저에서는 3D 작업실을 열 수 없어요.",paintHint:"케이스 위를 드래그해서 칠하세요.",partHint:"장식을 고르고 케이스를 누르세요.",selectedHint:"드래그해서 이동해요. 밖으로 빼면 삭제돼요.",finishedHint:"케이스 완성! 나만의 작품을 사진으로 남겨 보세요.",saved:"사진이 준비됐어요",saveFail:"저장하지 못했어요. 다시 시도해 주세요.",shareFail:"X를 열지 못했어요. 다시 시도해 주세요.",artwork:"나의 작품",painted:"칠한 면적",colors:"색상",pieces:"장식",overhang:"튀어나온 정도",level:"꾸밈 지수",style_blank:"무한한 가능성",style_minimal:"덜어낸 취향",style_jewelry:"주머니 속 보물",style_sweet:"달콤한 대혼잡",style_chaos:"이게 대체 뭐야?",style_maximal:"빈틈은 사양할게",style_colorful:"모든 색을 주세요",sound:"오디오",music:"음악",sfx:"효과음",on:"켜짐",off:"꺼짐",exporting:"작품을 촬영하는 중…",emptyHint:"한 번 칠하거나 장식을 붙여 보세요.",restoreHint:"이전에 꾸미던 케이스를 불러왔어요.",gem:"보석",pearl:"진주",heart:"하트",star:"별",daisy:"데이지",bow:"리본",eye:"눈알",cherry:"체리",egg:"달걀프라이",dumpling:"만두",bear:"곰",lightning:"번개",shareText:`「{style}」 폰케이스 완성! 장식이 {parts}개. 이거 들 수는 있겠죠?
{url}
#gamedev #indiegame`,heartGem:"하트 보석",emerald:"에메랄드 컷",pearlCluster:"진주 송이",moon:"초승달",crown:"왕관",laceBow:"레이스 리본",rose:"장미",tulip:"튤립",butterfly:"나비",shell:"조개",leaf:"나뭇잎",cat:"고양이",bunny:"토끼",paw:"발바닥",planet:"행성",donut:"도넛",strawberry:"딸기",macaron:"마카롱",onigiri:"주먹밥",pudding:"푸딩",category_jewelry:"보석",category_botanical:"꽃·리본",category_cute:"귀여움",category_food:"음식",confirmNew:"새 케이스를 만들까요?",newConfirm:"새로 만들기",newCancel:"이어서 꾸미기"},es:{title:"FUNDA SIN LÍMITES",subtitle:"Tu funda. Tu caos.",paint:"Pintar",parts:"Adornos",color:"Color",size:"Tamaño",finish:"Acabado",gloss:"Brillo",matte:"Mate",glitter:"Purpurina",undo:"Deshacer",redo:"Rehacer",done:"Terminar",back:"Seguir decorando",save:"Guardar foto",share:"Compartir en X",newDesign:"Nueva funda",close:"Cerrar",remove:"Quitar",rotate:"Girar",left:"Izquierda",right:"Derecha",loading:"Abriendo tu taller…",unavailable:"Este navegador no puede abrir el taller 3D.",paintHint:"Arrastra sobre la funda para pintar.",partHint:"Elige un adorno y toca la funda.",selectedHint:"Arrastra para mover. Sácalo de la funda para quitarlo.",finishedHint:"Tu funda está lista. Guarda una foto de tu creación.",saved:"Foto lista",saveFail:"No se pudo guardar. Inténtalo de nuevo.",shareFail:"No se pudo abrir X. Inténtalo de nuevo.",artwork:"Tu creación",painted:"Pintado",colors:"Colores",pieces:"Adornos",overhang:"Fuera del borde",level:"Nivel de adorno",style_blank:"Todo por crear",style_minimal:"Menos, pero a tu manera",style_jewelry:"Tesoro de bolsillo",style_sweet:"Dulce caos",style_chaos:"¿Pero qué es esto?",style_maximal:"Aquí no cabe la sutileza",style_colorful:"Todos los colores, por favor",sound:"Audio",music:"Música",sfx:"Efectos",on:"Sí",off:"No",exporting:"Fotografiando tu obra…",emptyHint:"Empieza con una pincelada o un adorno.",restoreHint:"Tu funda sigue tal como la dejaste.",gem:"Gema",pearl:"Perla",heart:"Corazón",star:"Estrella",daisy:"Margarita",bow:"Lazo",eye:"Ojo",cherry:"Cerezas",egg:"Huevo frito",dumpling:"Empanadilla",bear:"Osito",lightning:"Rayo",shareText:`«{style}»: puse {parts} adornos en mi funda. ¿Se podrá sujetar todavía?
{url}
#gamedev #indiegame`,heartGem:"Gema corazón",emerald:"Corte esmeralda",pearlCluster:"Racimo de perlas",moon:"Luna",crown:"Corona",laceBow:"Lazo de encaje",rose:"Rosa",tulip:"Tulipán",butterfly:"Mariposa",shell:"Concha",leaf:"Hoja",cat:"Gato",bunny:"Conejo",paw:"Patita",planet:"Planeta",donut:"Dona",strawberry:"Fresa",macaron:"Macaron",onigiri:"Bola de arroz",pudding:"Flan",category_jewelry:"Joyas",category_botanical:"Flores",category_cute:"Adorables",category_food:"Comida",confirmNew:"¿Empezar una funda nueva?",newConfirm:"Empezar de nuevo",newCancel:"Seguir con esta"},fr:{title:"COQUE SANS LIMITES",subtitle:"Ta coque. Ton petit chaos.",paint:"Peindre",parts:"Breloques",color:"Couleur",size:"Taille",finish:"Finition",gloss:"Brillant",matte:"Mat",glitter:"Paillettes",undo:"Annuler",redo:"Rétablir",done:"Terminer",back:"Continuer à décorer",save:"Enregistrer la photo",share:"Partager sur X",newDesign:"Nouvelle coque",close:"Fermer",remove:"Retirer",rotate:"Tourner",left:"Gauche",right:"Droite",loading:"Ouverture de ton atelier…",unavailable:"Ce navigateur ne peut pas ouvrir l’atelier 3D.",paintHint:"Glisse sur la coque pour peindre.",partHint:"Choisis une breloque, puis touche la coque.",selectedHint:"Fais glisser pour déplacer. Sors-la de la coque pour la retirer.",finishedHint:"Ta coque est prête. Garde une photo de ta création.",saved:"Photo prête",saveFail:"Enregistrement impossible. Réessaie.",shareFail:"Impossible d’ouvrir X. Réessaie.",artwork:"Ta création",painted:"Surface peinte",colors:"Couleurs",pieces:"Breloques",overhang:"Débordement",level:"Niveau déco",style_blank:"Tout reste à créer",style_minimal:"Peu, mais à ta façon",style_jewelry:"Trésor de poche",style_sweet:"Un joyeux bazar sucré",style_chaos:"Mais c’est quoi, ça ?",style_maximal:"La discrétion attendra",style_colorful:"Toutes les couleurs, merci",sound:"Audio",music:"Musique",sfx:"Effets",on:"Oui",off:"Non",exporting:"Ta création prend la pose…",emptyHint:"Commence par une touche de couleur ou une breloque.",restoreHint:"Ta coque est comme tu l’avais laissée.",gem:"Gemme",pearl:"Perle",heart:"Cœur",star:"Étoile",daisy:"Marguerite",bow:"Nœud",eye:"Œil",cherry:"Cerises",egg:"Œuf au plat",dumpling:"Ravioli",bear:"Ourson",lightning:"Éclair",shareText:`« {style} » : j’ai mis {parts} breloques sur ma coque. On peut encore la tenir ?
{url}
#gamedev #indiegame`,heartGem:"Gemme cœur",emerald:"Taille émeraude",pearlCluster:"Bouquet de perles",moon:"Lune",crown:"Couronne",laceBow:"Nœud dentelle",rose:"Rose",tulip:"Tulipe",butterfly:"Papillon",shell:"Coquillage",leaf:"Feuille",cat:"Chat",bunny:"Lapin",paw:"Patte",planet:"Planète",donut:"Donut",strawberry:"Fraise",macaron:"Macaron",onigiri:"Boule de riz",pudding:"Flan",category_jewelry:"Bijoux",category_botanical:"Fleurs",category_cute:"Mignon",category_food:"Cuisine",confirmNew:"Commencer une nouvelle coque ?",newConfirm:"Recommencer",newCancel:"Garder celle-ci"},de:{title:"HÜLLE IM ÜBERFLUSS",subtitle:"Deine Hülle. Dein Chaos.",paint:"Malen",parts:"Deko",color:"Farbe",size:"Größe",finish:"Oberfläche",gloss:"Glanz",matte:"Matt",glitter:"Glitzer",undo:"Zurück",redo:"Wiederholen",done:"Fertig",back:"Weiter dekorieren",save:"Foto speichern",share:"Auf X teilen",newDesign:"Neue Hülle",close:"Schließen",remove:"Entfernen",rotate:"Drehen",left:"Links",right:"Rechts",loading:"Dein Atelier öffnet…",unavailable:"Dieser Browser kann das 3D-Atelier nicht öffnen.",paintHint:"Zum Malen über die Hülle ziehen.",partHint:"Deko wählen, dann auf die Hülle tippen.",selectedHint:"Zum Verschieben ziehen. Zum Entfernen aus der Hülle ziehen.",finishedHint:"Deine Hülle ist fertig. Speichere ein Foto deines Werks.",saved:"Foto ist fertig",saveFail:"Speichern fehlgeschlagen. Versuch es erneut.",shareFail:"X konnte nicht geöffnet werden. Versuch es erneut.",artwork:"Dein Werk",painted:"Bemalt",colors:"Farben",pieces:"Deko",overhang:"Überstand",level:"Deko-Level",style_blank:"Alles ist noch möglich",style_minimal:"Weniger, aber ganz du",style_jewelry:"Taschenschatz",style_sweet:"Süßes Durcheinander",style_chaos:"Was ist das denn?",style_maximal:"Dezent war gestern",style_colorful:"Einmal alle Farben, bitte",sound:"Audio",music:"Musik",sfx:"Effekte",on:"An",off:"Aus",exporting:"Dein Werk wird fotografiert…",emptyHint:"Beginne mit einem Pinselstrich oder etwas Deko.",restoreHint:"Deine Hülle ist noch genau wie zuvor.",gem:"Edelstein",pearl:"Perle",heart:"Herz",star:"Stern",daisy:"Blume",bow:"Schleife",eye:"Auge",cherry:"Kirschen",egg:"Spiegelei",dumpling:"Teigtasche",bear:"Bär",lightning:"Blitz",shareText:`„{style}“ – meine Handyhülle hat jetzt {parts} Deko-Teile. Kann man die noch halten?
{url}
#gamedev #indiegame`,heartGem:"Herzstein",emerald:"Smaragdschliff",pearlCluster:"Perlenbund",moon:"Mond",crown:"Krone",laceBow:"Spitzenschleife",rose:"Rose",tulip:"Tulpe",butterfly:"Schmetterling",shell:"Muschel",leaf:"Blatt",cat:"Katze",bunny:"Häschen",paw:"Pfote",planet:"Planet",donut:"Donut",strawberry:"Erdbeere",macaron:"Macaron",onigiri:"Reisball",pudding:"Pudding",category_jewelry:"Schmuck",category_botanical:"Blüten",category_cute:"Niedlich",category_food:"Essen",confirmNew:"Eine neue Hülle anfangen?",newConfirm:"Neu anfangen",newCancel:"Diese behalten"},it:{title:"COVER SENZA LIMITI",subtitle:"La tua cover. Il tuo caos.",paint:"Dipingi",parts:"Ciondoli",color:"Colore",size:"Dimensione",finish:"Finitura",gloss:"Lucida",matte:"Opaca",glitter:"Glitter",undo:"Annulla",redo:"Ripeti",done:"Finito",back:"Continua a decorare",save:"Salva foto",share:"Condividi su X",newDesign:"Nuova cover",close:"Chiudi",remove:"Rimuovi",rotate:"Ruota",left:"Sinistra",right:"Destra",loading:"Apertura del tuo atelier…",unavailable:"Questo browser non può aprire l’atelier 3D.",paintHint:"Trascina sulla cover per dipingere.",partHint:"Scegli un ciondolo, poi tocca la cover.",selectedHint:"Trascina per spostare. Portalo fuori dalla cover per rimuoverlo.",finishedHint:"La tua cover è pronta. Salva una foto della tua creazione.",saved:"Foto pronta",saveFail:"Impossibile salvare. Riprova.",shareFail:"Impossibile aprire X. Riprova.",artwork:"La tua creazione",painted:"Area dipinta",colors:"Colori",pieces:"Ciondoli",overhang:"Fuori bordo",level:"Livello déco",style_blank:"Tutto da inventare",style_minimal:"Poco, ma tuo",style_jewelry:"Tesoro tascabile",style_sweet:"Dolce confusione",style_chaos:"Ma che cos’è?",style_maximal:"La sobrietà può aspettare",style_colorful:"Tutti i colori, grazie",sound:"Audio",music:"Musica",sfx:"Effetti",on:"Sì",off:"No",exporting:"La tua creazione si mette in posa…",emptyHint:"Inizia con una pennellata o un ciondolo.",restoreHint:"La tua cover è come l’avevi lasciata.",gem:"Gemma",pearl:"Perla",heart:"Cuore",star:"Stella",daisy:"Margherita",bow:"Fiocco",eye:"Occhio",cherry:"Ciliegie",egg:"Uovo al tegamino",dumpling:"Raviolo",bear:"Orsetto",lightning:"Fulmine",shareText:`«{style}»: ho messo {parts} ciondoli sulla mia cover. Si riesce ancora a tenerla?
{url}
#gamedev #indiegame`,heartGem:"Gemma cuore",emerald:"Taglio smeraldo",pearlCluster:"Perle a grappolo",moon:"Luna",crown:"Corona",laceBow:"Fiocco di pizzo",rose:"Rosa",tulip:"Tulipano",butterfly:"Farfalla",shell:"Conchiglia",leaf:"Foglia",cat:"Gatto",bunny:"Coniglio",paw:"Zampetta",planet:"Pianeta",donut:"Ciambella",strawberry:"Fragola",macaron:"Macaron",onigiri:"Polpetta di riso",pudding:"Budino",category_jewelry:"Gioielli",category_botanical:"Fiori",category_cute:"Carini",category_food:"Cibo",confirmNew:"Iniziare una nuova cover?",newConfirm:"Ricomincia",newCancel:"Continua questa"},"pt-BR":{title:"CAPINHA SEM LIMITES",subtitle:"Sua capinha. Seu caos.",paint:"Pintar",parts:"Enfeites",color:"Cor",size:"Tamanho",finish:"Acabamento",gloss:"Brilho",matte:"Fosco",glitter:"Glitter",undo:"Desfazer",redo:"Refazer",done:"Concluir",back:"Continuar decorando",save:"Salvar foto",share:"Compartilhar no X",newDesign:"Nova capinha",close:"Fechar",remove:"Remover",rotate:"Girar",left:"Esquerda",right:"Direita",loading:"Abrindo seu ateliê…",unavailable:"Este navegador não consegue abrir o ateliê 3D.",paintHint:"Arraste sobre a capinha para pintar.",partHint:"Escolha um enfeite e toque na capinha.",selectedHint:"Arraste para mover. Tire da capinha para remover.",finishedHint:"Sua capinha está pronta. Salve uma foto da sua criação.",saved:"Foto pronta",saveFail:"Não foi possível salvar. Tente de novo.",shareFail:"Não foi possível abrir o X. Tente de novo.",artwork:"Sua criação",painted:"Área pintada",colors:"Cores",pieces:"Enfeites",overhang:"Fora da borda",level:"Nível de decoração",style_blank:"Tudo por criar",style_minimal:"Pouco, mas do seu jeito",style_jewelry:"Tesouro de bolso",style_sweet:"Doce bagunça",style_chaos:"Mas o que é isso?",style_maximal:"Discrição fica para depois",style_colorful:"Todas as cores, por favor",sound:"Áudio",music:"Música",sfx:"Efeitos",on:"Ligado",off:"Desligado",exporting:"Fotografando sua criação…",emptyHint:"Comece com uma pincelada ou um enfeite.",restoreHint:"Sua capinha está como você a deixou.",gem:"Pedra",pearl:"Pérola",heart:"Coração",star:"Estrela",daisy:"Margarida",bow:"Laço",eye:"Olho",cherry:"Cerejas",egg:"Ovo frito",dumpling:"Guioza",bear:"Ursinho",lightning:"Raio",shareText:`“{style}”: coloquei {parts} enfeites na minha capinha. Ainda dá para segurar?
{url}
#gamedev #indiegame`,heartGem:"Gema coração",emerald:"Corte esmeralda",pearlCluster:"Cacho de pérolas",moon:"Lua",crown:"Coroa",laceBow:"Laço de renda",rose:"Rosa",tulip:"Tulipa",butterfly:"Borboleta",shell:"Concha",leaf:"Folha",cat:"Gato",bunny:"Coelho",paw:"Patinha",planet:"Planeta",donut:"Donut",strawberry:"Morango",macaron:"Macaron",onigiri:"Bolinho de arroz",pudding:"Pudim",category_jewelry:"Joias",category_botanical:"Flores",category_cute:"Fofos",category_food:"Comida",confirmNew:"Começar uma nova capinha?",newConfirm:"Recomeçar",newCancel:"Continuar esta"},ru:{title:"ЧЕХОЛ БЕЗ ГРАНИЦ",subtitle:"Твой чехол. Твой хаос.",paint:"Рисовать",parts:"Украшения",color:"Цвет",size:"Размер",finish:"Покрытие",gloss:"Глянец",matte:"Матовое",glitter:"Блёстки",undo:"Отменить",redo:"Повторить",done:"Готово",back:"Украшать дальше",save:"Сохранить фото",share:"Поделиться в X",newDesign:"Новый чехол",close:"Закрыть",remove:"Удалить",rotate:"Повернуть",left:"Влево",right:"Вправо",loading:"Открываем твою мастерскую…",unavailable:"Этот браузер не может открыть 3D-мастерскую.",paintHint:"Проведи по чехлу, чтобы нарисовать.",partHint:"Выбери украшение и коснись чехла.",selectedHint:"Перетаскивай для перемещения. Убери за край, чтобы удалить.",finishedHint:"Чехол готов. Сохрани фото своей работы.",saved:"Фото готово",saveFail:"Не удалось сохранить. Попробуй ещё раз.",shareFail:"Не удалось открыть X. Попробуй ещё раз.",artwork:"Твоё творение",painted:"Закрашено",colors:"Цвета",pieces:"Украшения",overhang:"За краем",level:"Уровень декора",style_blank:"Всё ещё впереди",style_minimal:"Меньше, но по-твоему",style_jewelry:"Карманное сокровище",style_sweet:"Сладкий беспорядок",style_chaos:"Это вообще что?",style_maximal:"Скромность подождёт",style_colorful:"Все цвета, пожалуйста",sound:"Звук",music:"Музыка",sfx:"Эффекты",on:"Вкл.",off:"Выкл.",exporting:"Фотографируем твою работу…",emptyHint:"Начни с мазка или первого украшения.",restoreHint:"Твой чехол там, где ты его оставил.",gem:"Самоцвет",pearl:"Жемчуг",heart:"Сердце",star:"Звезда",daisy:"Ромашка",bow:"Бант",eye:"Глаз",cherry:"Вишни",egg:"Яичница",dumpling:"Пельмень",bear:"Мишка",lightning:"Молния",shareText:`«{style}»: на моём чехле {parts} украшений. Его ещё можно держать?
{url}
#gamedev #indiegame`,heartGem:"Сердце-камень",emerald:"Изумрудная огранка",pearlCluster:"Связка жемчуга",moon:"Месяц",crown:"Корона",laceBow:"Кружевной бант",rose:"Роза",tulip:"Тюльпан",butterfly:"Бабочка",shell:"Ракушка",leaf:"Лист",cat:"Кошка",bunny:"Зайчик",paw:"Лапка",planet:"Планета",donut:"Пончик",strawberry:"Клубника",macaron:"Макарон",onigiri:"Рисовый шар",pudding:"Пудинг",category_jewelry:"Украшения",category_botanical:"Цветы",category_cute:"Милое",category_food:"Еда",confirmNew:"Начать новый чехол?",newConfirm:"Начать заново",newCancel:"Продолжить этот"}};function Wl(i){if(!i)return;const e=i.trim().replace(/_/g,"-").toLowerCase();if(e==="zh"||e.startsWith("zh-"))return"zh-CN";if(e==="pt"||e.startsWith("pt-"))return"pt-BR";const t=e.split("-")[0];return Xu.find(n=>n.toLowerCase()===t)}function Yu(i){const e=typeof location>"u"?"":location.search,t=Wl(new URLSearchParams(e).get("lang"));if(t)return t;if(typeof navigator<"u")for(const n of navigator.languages??[navigator.language]){const s=Wl(n);if(s)return s}return"en"}function Ku(i){return{locale:i,t(e,t={}){const n=e;return(qu[i]?.[n]??Ch[n]??e).replace(/\{(\w+)\}/g,(r,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):r)}}}const Ju=""+new URL("music-BMg-2Jlx.mp3",import.meta.url).href,Zu="data:audio/mpeg;base64,//uUxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAKAAAMSAAICAgICAgICAgRERERERERERERHx8fHx8fHx8fH0JCQkJCQkJCQkJSUlJSUlJSUlJSfn5+fn5+fn5+fp6enp6enp6enp7KysrKysrKysrK9/f39/f39/f39/////////////8AAAA5TEFNRTMuMTAwAqUAAAAALigAABRGJAX9ggAARgAADEi/gddFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sUxAADwAABpAAAACAAADSAAAAEd3AwN3OO8CAAAIOYPg+sP+UBAEATB8PlwfBA5lz/8oCAIHOD4CGikkmTgPSYJgeYCgeYIBk6lph+BhUCxv+HVvj92zVIsTlFg1rL//sUxCWDwAABpAAAACAAADSAAAAEh4DguSEDNQF1SlE+bGoGq86oG58kIGUgKeovueA0dmFA07j5AxVAw7U3vAxzipAxng9AODQBhNBiBiNBH926oGCYBgGBkCIGGUG4//s0xEsABIwg+BQxgANfQKKLO2AACAcAYQAKAiDhfrX18BQEwGDACwGEgBwGAcA4jgLcBYzV99VCpgMCIAQBgXhb4RUQaJ2CygCQCPq+r6lxcYzAnQslcrkMHYSxNe3t/7/FwDIJlwuIl8k0Tcrol///////////83WbqqwyGg2IxEqzWMlku1WzCAo2DgTv//uUxAoAHI1jc7m9kBm6mytfnrADL7vukIaINGjGDEnWLjLlM3WzCEBm6iSoWvmRPhgC6YSGjIC5zumSrRi9UaA1jQWYMAKefKkh8xs6OJJDIjGWRpuT8UUrA22CSgKEocNJiwYrt54nLIzTWqs0Z+fioEkQmcrkwIFtTMPxO3G7VNvmXgY2EQCVQsLAzY2UJP09uHKTmGGV3L612dVmL5N7G24tKelweZ552MOdpcst5U1NtjDpy29cqVqVwXawwp6e3Y/8MMcf/9ZZbxxs6+zbw1nrLev5nblljn4czz7S/kFP5kgAAEuS0vgCqHSF6RgimoJEJsK6TlcCTAOSOeoTQbTpJWHktbulJIMgahQ9ZqxI9JqamqLr/+Pqac7bqtiEjY85zfhzmpJHWqy1t9XPnai5e67c57UbaYq/3AoL+vhHQgo5z62UMcz/Q99NMb3/BQDAkCCCkGm6I3ICw6hJhfCHGUiISFGKYyNO94vO6xISgTLyHt4Ydjd0k95z//tExBYACkR3U6w8waGrkWgatMAAa2+fUb+3mukkVYMYXDLZUUCjyz1papN9TtORvs0lkXVck5dleVUIAACrMqxO2ODhBiQShUNl/WopmoT0qGQszbhed9xH/LJJOVAyVMs4Yrz5tWvXqqVhqd3gRV1nmP3Nyk9NnMWW5ZEsahcDoMBVwMHhdczQ4iE0D1HyRwY2YRxKxBs1MurXUlKqnKQaOuflawAA//ukxAEAGpFtNzmsAAOOLS13M4ACIAAAIENKQDeeg5AfiWYQ23FS45o4wkAHPQSSMcMM4ZCKwQJHTSZBjiIUPmYZbMF1Figb6XRdonChYbwJAMFRsCMF+3vWNQOSwZa69ErJS5tR1pa/1uzGYlLlXRuPSGnWa9iun0hM1I34oKGplR08N4QO0+/GqKrqlsT8Wsd3d5JrdPY1jemcIAsSqX09LZzqynGe7Wp88ZfF6nL3O1K9y/btz9Nbs53Zmnu3tZU1izlhMY91T///reu58/+91j+Hcv/v6/LPfe3EAgy7//ijf/9JBkICApFItqJMioxGI1EUDN+0ZPQzUpgc0QSs4LAtafZh51xh0bQ2orCvyYBF8HVIpK6fyPp8F9wcZvmava+lo8jBXHcRuZWIEzc/cTAOKUL3cfgaQtFeaPLhK2wB2UwXAcLTQLSIaI5tlaI11uLkMNkfc+UWlBgUxEuGVdl6IwvB/592ZbRxSg5W1nZmYcV2zxKwMO/7jq8o6GCnuiW6ktp6tP2nv4dVXTXYJYz5/sPaflD1NGqlbtXWX75vv593ncc9WxgjwPJD7qY4NfiTTPrd3rk1jldy3Zt2K9sNnP/////oAFkJ/4IWbG9GByYwhcwAFSktSCgy//uExAqAleGBSj2ngAo7pieiurABp2GvymkyrbIWCnNcIaEhENOU3jqUUF1aC1PoUN98sLDq1wKwmR0nSy1Li4wa6qpRXQlJxbVqtVrEzX1uEhzTFtCYlcX4gxenz57W/+dfVn0LLKwoahqtfWq9VpyiShglxZo1awYNa1t61r/9/Fv6wXrCnjmOpmjb1WLbe9Q5IquYpsRo29+sG1t4v8Y+fXHtn1/+tf/2tGCnxQERSKYEAwcljcYxgAYZhMEAOVQGSjUWKgEF/Wwqct+wOIw+vp/HASWQAbrDtDyWnV0SStZm41iTYzOsaBKgifJ5IH6+kZRQAdD8botlJCGLJJFhaSz66bUDVrLtdu1sOqUzc3Lz77a1rbPpy+q5/54dO2v4c7de+mf8Oc2Z1R2onTC9Y3agpRil+/5//8MvAAUAkwg0lEhD7SQSUjdYBNPI//ukxAkAHK1xSfmsAAOOsCXTO5AABg44UUwJ82mEzPogRmDNAI+VjDAizHoDFmniJB5nyIc6ZIXdNpw/CCeECMDBlhSQqURneLHBSBkqjqo10tAcBSa5H4WFUBKVoTlxMCetUDoNYljfqZua/Ccy4G9q8ppdD2e5NDdWnnWwwe7DF39dKX5ZUjdWcRyMQ/G5+9FWbKwRuBeulEFhmktdYZAtLjqkt3Hojd/cs5NupZry6Zu7wq8+rZtdrTcvs4SzCks83+GENWexXOQ1sv////7//r//////+/+FzV7nLexAGZ7////+WUACkASSAAAZg4uYcEKc+t4ZagSd0I8EBYYLAOYeiEBihMDgCAwlmB4GmLQNioGmA4HAEBkBqEJjlBeAHMhYIlTKFTbOCozS2JO1BbdIiy4EHBzJyqWoaZPBTtUY4aOAk0BqrQ1BMZklM3CGpZTz0NKtM5sEKgIwSTMUBtZXQO1De0gn+sRO1WGBS7sfeWWP7N7j1Wt2tlE35/C5j1TGhf2zji3Klrb1Wy33fP5Y7z/mX5wpmZTrAmXX313zL/1vf//8////5O1o0ubm31iUulWF2K6/nP/f73l38ec//////+rVpQBICQSGw0HA2EwAAAADQ3MAgBsN//ukxAoAHJoDO7m6gBN9MCebN7AAMTCJrxqaQQDBWMiYkCFvgwoNYUpWlq4TMjTEAFIAzYgEKQHOAzgYgMtE4L4hs4rUPcJg+Bi4AAZiMAGXiYLARQiQxhOkHAKJgGhjABhQRksZn0Rdi0E6OMiwuUDIYbAxaDQ/AmQAgwGriDG5EBRUw7BwgFArhhwGAOFoggwc8AIEFUiDkwaHECSHEQ01Ismag2DA3wMuBYQHSBcGMt//4gAOYTI4w+QdiYlD///FyEQTJQcCeYGn////Jw6mQci5uaFMrk4g3//////////5fNwBAAAAAIADSSc5UfXmYsS786pBMCEgcShcG/wIomoVZhYIx7/MzKjNjdOVwP81yxMPUjHEdYz1AkE//OShTAlM3LPMLEEtTDiX/8UwjhUogIxCAhQFM0QaZVZMJaO9//gJlCwgrkkCxJAQtbWs+0aQylP///67jBBMLgCMSxVTAUCf1/a1r8e////+YiKs2LWxB41MWWyZaNaGoeq0tm5/////roIQMqAZh4UgBjLfPxpu9NXmX9sfVxyy//////+TZxV/tZSSAX9uUt7mWONXWWX4467/////////9lUWTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVV//sUxA2DwAABpBwAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",Rh="case-deco-",Xl=i=>{try{return localStorage.getItem(Rh+i)}catch{return null}},ql=(i,e)=>{try{localStorage.setItem(Rh+i,e?"1":"0")}catch{}};class $u{constructor(){this.music=Xl("music")==="1",this.sounds=Xl("sounds")!=="0",this.ctx=null,this.musicGain=null,this.sfxGain=null,this.musicBuffer=null,this.tapBuffer=null,this.musicLoading=null,this.tapLoading=null,this.musicSource=null,this.musicStartedAt=0,this.musicOffset=0,this.disposed=!1,this.abort=new AbortController,this.voices=new Set,this.pendingCue=null,this.lastCueAt=-1/0,this.onVisibility=()=>{this.apply()},typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibility)}async unlock(){if(!(this.disposed||typeof window>"u"))try{if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const n=new t;this.ctx=n,this.musicGain=n.createGain(),this.musicGain.gain.value=.11,this.musicGain.connect(n.destination),this.sfxGain=n.createGain(),this.sfxGain.gain.value=.18,this.sfxGain.connect(n.destination)}if(this.ctx.state==="suspended"&&await this.ctx.resume(),this.disposed)return;this.apply();const e=[];this.sounds&&e.push(this.loadTap()),this.music&&e.push(this.loadMusic()),await Promise.all(e),this.disposed||this.apply()}catch{}}sync(){ql("music",this.music),ql("sounds",this.sounds),this.sounds||(this.pendingCue=null),this.apply(),this.ctx?.state==="running"&&(this.music&&this.loadMusic(),this.sounds&&this.loadTap())}cue(e){if(this.disposed||!this.sounds||this.hidden())return;const t=performance.now();if(t-this.lastCueAt<55)return;if(!this.ctx||this.ctx.state!=="running"||!this.tapBuffer||!this.sfxGain){this.pendingCue={kind:e,at:t};return}this.lastCueAt=t;const n=this.ctx.createBufferSource();n.buffer=this.tapBuffer;const s=this.ctx.createGain();if(s.gain.value={tap:.46,place:.85,undo:.52,finish:1}[e],n.connect(s),s.connect(this.sfxGain),this.voices.add(n),n.onended=()=>{this.voices.delete(n),n.disconnect(),s.disconnect()},this.voices.size>6){const r=this.voices.values().next().value;if(r)try{r.stop()}catch{}}n.start()}dispose(){this.disposed||(this.disposed=!0,this.abort.abort(),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibility),this.pendingCue=null,this.stopMusic(),this.stopVoices(),this.musicGain?.disconnect(),this.sfxGain?.disconnect(),this.ctx&&this.ctx.close().catch(()=>{}),this.ctx=null)}hidden(){return typeof document<"u"&&document.hidden}apply(){if(!this.ctx||this.disposed)return;const e=!this.hidden();this.musicGain&&(this.musicGain.gain.value=e&&this.music?.11:0),this.sfxGain&&(this.sfxGain.gain.value=e&&this.sounds?.18:0),(!e||!this.sounds)&&this.stopVoices(),!e||!this.music?this.stopMusic():this.startMusic()}async decode(e){const t=this.ctx;if(!t||this.disposed)return null;try{const n=await fetch(e,{signal:this.abort.signal});if(!n.ok)return null;const s=await n.arrayBuffer();if(this.disposed)return null;const r=await t.decodeAudioData(s);return this.disposed?null:r}catch{return null}}loadTap(){return this.tapLoading||(this.tapLoading=this.decode(Zu).then(e=>{this.tapBuffer=e;const t=this.pendingCue;this.pendingCue=null,e&&t&&performance.now()-t.at<350&&this.cue(t.kind)})),this.tapLoading}loadMusic(){return this.musicLoading||(this.musicLoading=this.decode(Ju).then(e=>{this.musicBuffer=e,this.apply()})),this.musicLoading}startMusic(){const e=this.ctx,t=this.musicBuffer;if(!e||e.state!=="running"||!t||!this.musicGain||this.musicSource)return;const n=e.createBufferSource();n.buffer=t,n.loop=!0,n.connect(this.musicGain);const s=this.musicOffset%t.duration;this.musicStartedAt=e.currentTime-s,this.musicSource=n,n.onended=()=>{n.disconnect()},n.start(0,s)}stopMusic(){const e=this.musicSource;if(e){this.ctx&&this.musicBuffer&&(this.musicOffset=Math.max(0,this.ctx.currentTime-this.musicStartedAt)%this.musicBuffer.duration),this.musicSource=null;try{e.stop()}catch{}}}stopVoices(){for(const e of this.voices)try{e.stop()}catch{}this.voices.clear()}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="186",Qu=0,Yl=1,ju=2,Is=1,ed=2,Rs=3,Ai=0,Zt=1,tn=2,Zn=0,Ds=1,Kl=2,Jl=3,Zl=4,td=5,Ji=100,nd=101,id=102,sd=103,rd=104,ad=200,od=201,ld=202,cd=203,Ph=204,Lh=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,_d=213,xd=214,ao=0,oo=1,lo=2,Vs=3,co=4,ho=5,uo=6,fo=7,sl=0,vd=1,Md=2,Un=0,Ih=1,Dh=2,Uh=3,rl=4,Nh=5,Fh=6,Oh=7,Bh=300,Ei=301,as=302,fa=303,pa=304,sa=306,Hr=1e3,Kn=1001,po=1002,Ot=1003,Sd=1004,sr=1005,qt=1006,ma=1007,Mi=1008,nn=1009,zh=1010,Vh=1011,Gs=1012,al=1013,Nn=1014,gn=1015,Fn=1016,ol=1017,ll=1018,Hs=1020,Gh=35902,Hh=35899,kh=1021,Wh=1022,_n=1023,Qn=1026,Si=1027,cl=1028,hl=1029,wi=1030,ul=1031,dl=1033,Ir=33776,Dr=33777,Ur=33778,Nr=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,So=37496,yo=37488,bo=37489,kr=37490,Ao=37491,Eo=37808,wo=37809,To=37810,Co=37811,Ro=37812,Po=37813,Lo=37814,Io=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,Vo=36494,Go=36495,Ho=36283,ko=36284,Wr=36285,Wo=36286,yd=3200,Xr=0,bd=1,ci="",Jt="srgb",qr="srgb-linear",Yr="linear",ut="srgb",ga=7680,Ad=519,Ed=512,wd=513,Td=514,fl=515,Cd=516,Rd=517,pl=518,Pd=519,Ld=35044,$l="300 es",In=2e3,ks=2001;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){const i=Ws("canvas");return i.style.display="block",i}const Ql={};function jl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Xh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=Xh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ns(...i){const e=i.join(" ");e in Ql||(Ql[e]=!0,Ve(...i))}function Ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Nd={[ao]:oo,[lo]:uo,[co]:fo,[Vs]:ho,[oo]:ao,[uo]:lo,[fo]:co,[ho]:Vs};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,Xo=180/Math.PI;function us(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Fd(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function gs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tl=class Tl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;let ae=Tl;class ds{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*M;g<0&&(u=-u,d=-d,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){const T=Math.acos(g),w=Math.sin(T);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+M*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+M*o;const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cl=class Cl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cl.prototype.isVector3=!0;let L=Cl;const va=new L,ec=new ds,Rl=class Rl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],M=s[0],g=s[3],p=s[6],T=s[1],w=s[4],y=s[7],x=s[2],v=s[5],b=s[8];return r[0]=a*M+o*T+l*x,r[3]=a*g+o*w+l*v,r[6]=a*p+o*y+l*b,r[1]=c*M+h*T+f*x,r[4]=c*g+h*w+f*v,r[7]=c*p+h*y+f*b,r[2]=u*M+d*T+m*x,r[5]=u*g+d*w+m*v,r[8]=u*p+d*y+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;let We=Rl;const Ma=new We,tc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){const i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const nt=Od();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class Bd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Ws("canvas")),Di.width=e.width,Di.height=e.height;const s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class ml{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Vd=0;const ya=new L;class zt extends Ri{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Kn,s=Kn,r=qt,a=Mi,o=_n,l=nn,c=zt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=us(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Bh;zt.DEFAULT_ANISOTROPY=1;const Pl=class Pl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(d+1)/2,x=(p+1)/2,v=(h+u)/4,b=(f+M)/4,_=(m+g)/4;return w>y&&w>x?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=v/n,r=b/n):y>x?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=_/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=b/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(f-M)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;let At=Pl;class Gd extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qh extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ta=class ta{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,M,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u+M*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=M-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-M*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Wd)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),si.crossVectors(n,Qt),si.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),si.crossVectors(n,Qt)),si.normalize(),rr.crossVectors(Qt,si),s[0]=si.x,s[4]=rr.x,s[8]=Qt.x,s[1]=si.y,s[5]=rr.y,s[9]=Qt.y,s[2]=si.z,s[6]=rr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],M=n[6],g=n[10],p=n[14],T=n[3],w=n[7],y=n[11],x=n[15],v=s[0],b=s[4],_=s[8],E=s[12],C=s[1],P=s[5],F=s[9],z=s[13],D=s[2],O=s[6],q=s[10],k=s[14],ne=s[3],X=s[7],$=s[11],j=s[15];return r[0]=a*v+o*C+l*D+c*ne,r[4]=a*b+o*P+l*O+c*X,r[8]=a*_+o*F+l*q+c*$,r[12]=a*E+o*z+l*k+c*j,r[1]=h*v+f*C+u*D+d*ne,r[5]=h*b+f*P+u*O+d*X,r[9]=h*_+f*F+u*q+d*$,r[13]=h*E+f*z+u*k+d*j,r[2]=m*v+M*C+g*D+p*ne,r[6]=m*b+M*P+g*O+p*X,r[10]=m*_+M*F+g*q+p*$,r[14]=m*E+M*z+g*k+p*j,r[3]=T*v+w*C+y*D+x*ne,r[7]=T*b+w*P+y*O+x*X,r[11]=T*_+w*F+y*q+x*$,r[15]=T*E+w*z+y*k+x*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],M=e[7],g=e[11],p=e[15],T=l*d-c*u,w=o*d-c*f,y=o*u-l*f,x=a*d-c*h,v=a*u-l*h,b=a*f-o*h;return t*(M*T-g*w+p*y)-n*(m*T-g*x+p*v)+s*(m*w-M*x+p*b)-r*(m*y-M*v+g*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],M=e[13],g=e[14],p=e[15],T=t*o-n*a,w=t*l-s*a,y=t*c-r*a,x=n*l-s*o,v=n*c-r*o,b=s*c-r*l,_=h*M-f*m,E=h*g-u*m,C=h*p-d*m,P=f*g-u*M,F=f*p-d*M,z=u*p-d*g,D=T*z-w*F+y*P+x*C-v*E+b*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=(o*z-l*F+c*P)*O,e[1]=(s*F-n*z-r*P)*O,e[2]=(M*b-g*v+p*x)*O,e[3]=(u*v-f*b-d*x)*O,e[4]=(l*C-a*z-c*E)*O,e[5]=(t*z-s*C+r*E)*O,e[6]=(g*y-m*b-p*w)*O,e[7]=(h*b-u*y+d*w)*O,e[8]=(a*F-o*C+c*_)*O,e[9]=(n*C-t*F-r*_)*O,e[10]=(m*v-M*y+p*T)*O,e[11]=(f*y-h*v-d*T)*O,e[12]=(o*E-a*P-l*_)*O,e[13]=(t*P-n*E+s*_)*O,e[14]=(M*w-m*x-g*T)*O,e[15]=(h*x-f*w+u*T)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,M=a*h,g=a*f,p=o*f,T=l*c,w=l*h,y=l*f,x=n.x,v=n.y,b=n.z;return s[0]=(1-(M+p))*x,s[1]=(d+y)*x,s[2]=(m-w)*x,s[3]=0,s[4]=(d-y)*v,s[5]=(1-(u+p))*v,s[6]=(g+T)*v,s[7]=0,s[8]=(m+w)*b,s[9]=(g-T)*b,s[10]=(1-(u+M))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const c=1/a,h=1/o,f=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=In,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===In)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ks)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=In,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===In)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===ks)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ta.prototype.isMatrix4=!0;let pt=ta;const Ui=new L,un=new pt,kd=new L(0,0,0),Wd=new L(1,1,1),si=new L,rr=new L,Qt=new L,ic=new pt,sc=new ds;class jn{constructor(e=0,t=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const rc=new L,Ni=new ds,zn=new pt,ar=new L,_s=new L,qd=new L,Yd=new ds,ac=new L(1,0,0),oc=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},Kd={type:"removed"},Fi={type:"childadded",child:null},ba={type:"childremoved",child:null};class It extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new L,t=new jn,n=new ds,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(_s,ar,this.up):zn.lookAt(ar,_s,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(zn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},or={h:0,s:0,l:0};function Ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Fd(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ea(a,r,e+1/3),this.g=Ea(a,r,e),this.b=Ea(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return nt.workingToColorSpace(Ht.copy(this),e),Math.round(Qe(Ht.r*255,0,255))*65536+Math.round(Qe(Ht.g*255,0,255))*256+Math.round(Qe(Ht.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Jt){nt.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(or);const n=xa(ri.h,or.h,t),s=xa(ri.s,or.s,t),r=xa(ri.l,or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ge;Ge.NAMES=Yh;class qo extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new L,Vn=new L,wa=new L,Gn=new L,Oi=new L,Bi=new L,hc=new L,Ta=new L,Ca=new L,Ra=new L,Pa=new At,La=new At,Ia=new At;class pn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Vn.subVectors(n,t),wa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Vn),l=dn.dot(wa),c=Vn.dot(Vn),h=Vn.dot(wa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Pa.setScalar(0),La.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Vn.subVectors(e,t),dn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),Ta.subVectors(e,n);const l=Oi.dot(Ta),c=Bi.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,s);const h=Oi.dot(Ca),f=Bi.dot(Ca);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Oi,a);Ra.subVectors(e,r);const d=Oi.dot(Ra),m=Bi.dot(Ra);if(m>=0&&d<=m)return t.copy(r);const M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Bi,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return hc.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(hc,o);const p=1/(g+M+u);return a=M*p,o=u*p,t.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),cr.subVectors(this.max,xs),zi.subVectors(e.a,xs),Vi.subVectors(e.b,xs),Gi.subVectors(e.c,xs),ai.subVectors(Vi,zi),oi.subVectors(Gi,Vi),mi.subVectors(zi,Gi);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-mi.z,mi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,mi.z,0,-mi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-mi.y,mi.x,0];return!Da(t,zi,Vi,Gi,cr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,zi,Vi,Gi,cr))?!1:(hr.crossVectors(ai,oi),t=[hr.x,hr.y,hr.z],Da(t,zi,Vi,Gi,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,lr=new sn,zi=new L,Vi=new L,Gi=new L,ai=new L,oi=new L,mi=new L,xs=new L,cr=new L,hr=new L,gi=new L;function Da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pt=new L,ur=new ae;let Zd=0;class Mn extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kh extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class He extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const $d=new sn,vs=new L,Ua=new L;class fs{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ua)),this.expandByPoint(vs.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qd=0;const on=new pt,Na=new It,Hi=new L,jt=new sn,Ms=new sn,Nt=new L;class vt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Jh:Kh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(jt.min,Ms.min),jt.expandByPoint(Nt),Nt.addVectors(jt.max,Ms.max),jt.expandByPoint(Nt)):(jt.expandByPoint(Ms.min),jt.expandByPoint(Ms.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Nt.add(Hi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,f=new L,u=new ae,d=new ae,m=new ae,M=new L,g=new L;function p(_,E,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(M.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[_].add(M),o[E].add(M),o[C].add(M),l[_].add(g),l[E].add(g),l[C].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,E=T.length;_<E;++_){const C=T[_],P=C.start,F=C.count;for(let z=P,D=P+F;z<D;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new L,y=new L,x=new L,v=new L;function b(_){x.fromBufferAttribute(s,_),v.copy(x);const E=o[_];w.copy(E),w.sub(x.multiplyScalar(x.dot(E))).normalize(),y.crossVectors(v,E);const P=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,E=T.length;_<E;++_){const C=T[_],P=C.start,F=C.count;for(let z=P,D=P+F;z<D;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Mn(u,h,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new L,jd=new L,ef=new We;class qn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fa.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Fa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let tf=0;class Pi extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ds,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new L,Oa=new L,dr=new L,fr=new L;class _l{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oa.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=fr.dot(this.direction),l=-fr.dot(dr),c=fr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oa).addScaledVector(dr,u),d}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,M=t.y-a.y,g=t.z-a.z,p=n.x-a.x,T=n.y-a.y,w=n.z-a.z,y=Math.abs(l),x=Math.abs(c),v=Math.abs(h);let b,_,E,C,P,F,z,D,O,q,k,ne;if(y>=x&&y>=v?(E=l,F=f,O=m,ne=p,l>=0?(b=c,_=h,C=u,P=d,z=M,D=g,q=T,k=w):(b=h,_=c,C=d,P=u,z=g,D=M,q=w,k=T)):x>=v?(E=c,F=u,O=M,ne=T,c>=0?(b=h,_=l,C=d,P=f,z=g,D=m,q=w,k=p):(b=l,_=h,C=f,P=d,z=m,D=g,q=p,k=w)):(E=h,F=d,O=g,ne=w,h>=0?(b=l,_=c,C=f,P=u,z=m,D=M,q=p,k=T):(b=c,_=l,C=u,P=f,z=M,D=m,q=T,k=p)),E===0)return null;const X=b/E,$=_/E,j=1/E,Te=C-X*F,Ae=P-$*F,at=z-X*O,je=D-$*O,st=q-X*ne,J=k-$*ne,ee=st*je-J*at,_e=Te*J-Ae*st,Oe=at*Ae-je*Te;if(s){if(ee<0||_e<0||Oe<0)return null}else if((ee<0||_e<0||Oe<0)&&(ee>0||_e>0||Oe>0))return null;const Se=ee+_e+Oe;if(Se===0)return null;const Be=j*(ee*F+_e*O+Oe*ne);return(Se>0?Be<0:Be>0)?null:this.at(Be/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kr extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uc=new pt,_i=new _l,pr=new fs,dc=new L,mr=new L,gr=new L,_r=new L,Ba=new L,xr=new L,fc=new L,vr=new L;class $e extends It{constructor(e=new vt,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Ba.fromBufferAttribute(f,e),a?xr.addScaledVector(Ba,h):xr.addScaledVector(Ba.sub(t),h))}t.add(xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(pr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(pr,dc)===null||_i.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(uc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=T,x=w;y<x;y+=3){const v=o.getX(y),b=o.getX(y+1),_=o.getX(y+2);s=Mr(this,p,e,n,c,h,f,v,b,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const T=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=Mr(this,a,e,n,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=T,x=w;y<x;y+=3){const v=y,b=y+1,_=y+2;s=Mr(this,p,e,n,c,h,f,v,b,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const T=g,w=g+1,y=g+2;s=Mr(this,a,e,n,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function nf(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function Mr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,_r);const h=nf(i,e,t,n,mr,gr,_r,fc);if(h){const f=new L;pn.getBarycoord(fc,mr,gr,_r,f),s&&(h.uv=pn.getInterpolatedAttribute(s,o,l,c,f,new ae)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};pn.getNormal(mr,gr,_r,u.normal),h.face=u,h.barycoord=f}return h}class Zh extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,h=Ot,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends Mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new pt,mc=new pt,Sr=[],gc=new sn,sf=new pt,Ss=new $e,ys=new fs;class rf extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),gc.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),ys.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),mc.multiplyMatrices(n,ki),Ss.matrixWorld=mc,Ss.raycast(e,Sr);for(let a=0,o=Sr.length;a<o;a++){const l=Sr[a];l.instanceId=r,l.object=this,t.push(l)}Sr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zh(new Float32Array(s*this.count),s,this.count,cl,gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xi=new fs,af=new ae(.5,.5),yr=new L;class xl{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],g=r[10],p=r[11],T=r[12],w=r[13],y=r[14],x=r[15];if(s[0].setComponents(c-a,d-h,p-m,x-T).normalize(),s[1].setComponents(c+a,d+h,p+m,x+T).normalize(),s[2].setComponents(c+o,d+f,p+M,x+w).normalize(),s[3].setComponents(c-o,d-f,p-M,x-w).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,x-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,x-y).normalize(),t===In)s[5].setComponents(c+l,d+u,p+g,x+y).normalize();else if(t===ks)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=af.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $h extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new L,Zr=new L,_c=new pt,bs=new _l,br=new fs,za=new L,xc=new L;class Qh extends It{constructor(e=new vt,t=new $h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jr.fromBufferAttribute(t,s-1),Zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Zr);e.setAttribute("lineDistance",new He(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;_c.copy(s).invert(),bs.copy(e.ray).applyMatrix4(_c);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=c){const p=h.getX(M),T=h.getX(M+1),w=Ar(this,e,bs,l,p,T,M);w&&t.push(w)}if(this.isLineLoop){const M=h.getX(m-1),g=h.getX(d),p=Ar(this,e,bs,l,M,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=c){const p=Ar(this,e,bs,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=Ar(this,e,bs,l,m-1,d,m-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ar(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Jr.fromBufferAttribute(o,s),Zr.fromBufferAttribute(o,r),t.distanceSqToSegment(Jr,Zr,za,xc)>n)return;za.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(za);if(!(c<e.near||c>e.far))return{distance:c,point:xc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class of extends Qh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jh extends zt{constructor(e=[],t=Ei,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vc extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends zt{constructor(e,t,n=Nn,s,r,a,o=Ot,l=Ot,c,h=Qn,f=1){if(h!==Qn&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class lf extends Xs{constructor(e,t=Nn,n=Ei,s,r,a=Ot,o=Ot,l,c=Qn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eu extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ei extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2));function m(M,g,p,T,w,y,x,v,b,_,E){const C=y/b,P=x/_,F=y/2,z=x/2,D=v/2,O=b+1,q=_+1;let k=0,ne=0;const X=new L;for(let $=0;$<q;$++){const j=$*P-z;for(let Te=0;Te<O;Te++){const Ae=Te*C-F;X[M]=Ae*T,X[g]=j*w,X[p]=D,c.push(X.x,X.y,X.z),X[M]=0,X[g]=0,X[p]=v>0?1:-1,h.push(X.x,X.y,X.z),f.push(Te/b),f.push(1-$/_),k+=1}}for(let $=0;$<_;$++)for(let j=0;j<b;j++){const Te=u+j+O*$,Ae=u+j+O*($+1),at=u+(j+1)+O*($+1),je=u+(j+1)+O*$;l.push(Te,Ae,je),l.push(Ae,at,je),ne+=6}o.addGroup(d,ne,E),d+=ne,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vl extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,m=n*2+r,M=s+1,g=new L,p=new L;for(let T=0;T<=m;T++){let w=0,y=0,x=0,v=0;if(T<=n){const E=T/n,C=E*Math.PI/2;y=-h-e*Math.cos(C),x=e*Math.sin(C),v=-e*Math.cos(C),w=E*f}else if(T<=n+r){const E=(T-n)/r;y=-h+E*t,x=e,v=0,w=f+E*u}else{const E=(T-n-r)/n,C=E*Math.PI/2;y=h+e*Math.sin(C),x=e*Math.cos(C),v=e*Math.sin(C),w=f+u+E*f}const b=Math.max(0,Math.min(1,w/d));let _=0;T===0?_=.5/s:T===m&&(_=-.5/s);for(let E=0;E<=s;E++){const C=E/s,P=C*Math.PI*2,F=Math.sin(P),z=Math.cos(P);p.x=-x*z,p.y=y,p.z=x*F,o.push(p.x,p.y,p.z),g.set(-x*z,v,x*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,b)}if(T>0){const E=(T-1)*M;for(let C=0;C<s;C++){const P=E+C,F=E+C+1,z=T*M+C,D=T*M+C+1;a.push(P,F,z),a.push(F,D,z)}}}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new L,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qs extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const M=[],g=n/2;let p=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function T(){const y=new L,x=new L;let v=0;const b=(t-e)/n;for(let _=0;_<=r;_++){const E=[],C=_/r,P=C*(t-e)+e;for(let F=0;F<=s;F++){const z=F/s,D=z*l+o,O=Math.sin(D),q=Math.cos(D);x.x=P*O,x.y=-C*n+g,x.z=P*q,f.push(x.x,x.y,x.z),y.set(O,b,q).normalize(),u.push(y.x,y.y,y.z),d.push(z,1-C),E.push(m++)}M.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const C=M[E][_],P=M[E+1][_],F=M[E+1][_+1],z=M[E][_+1];(e>0||E!==0)&&(h.push(C,P,z),v+=3),(t>0||E!==r-1)&&(h.push(P,F,z),v+=3)}c.addGroup(p,v,0),p+=v}function w(y){const x=m,v=new ae,b=new L;let _=0;const E=y===!0?e:t,C=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*C,0),u.push(0,C,0),d.push(.5,.5),m++;const P=m;for(let F=0;F<=s;F++){const D=F/s*l+o,O=Math.cos(D),q=Math.sin(D);b.x=E*q,b.y=g*C,b.z=E*O,f.push(b.x,b.y,b.z),u.push(0,C,0),v.x=O*.5+.5,v.y=q*.5*C+.5,d.push(v.x,v.y),m++}for(let F=0;F<s;F++){const z=x+F,D=P+F;y===!0?h.push(D,D+1,z):h.push(D+1,D,z),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new pt;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ml extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cf extends Ml{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Mc=new L,Sc=new L,Va=new Sl,Ga=new Sl,Ha=new Sl;class yl extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sc.subVectors(s[0],s[1]).add(s[0]),c=Sc);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),Va.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,M,g),Ga.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,M,g),Ha.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,M,g)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ga.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ha.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Ha.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function hf(i,e){const t=1-i;return t*t*e}function uf(i,e){return 2*(1-i)*i*e}function df(i,e){return i*i*e}function Us(i,e,t,n){return hf(i,e)+uf(i,t)+df(i,n)}function ff(i,e){const t=1-i;return t*t*t*e}function pf(i,e){const t=1-i;return 3*t*t*i*e}function mf(i,e){return 3*(1-i)*i*i*e}function gf(i,e){return i*i*i*e}function Ns(i,e,t,n,s){return ff(i,e)+pf(i,t)+mf(i,n)+gf(i,s)}class tu extends Bn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,s.x,r.x,a.x,o.x),Ns(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _f extends Bn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,s.x,r.x,a.x,o.x),Ns(e,s.y,r.y,a.y,o.y),Ns(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nu extends Bn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xf extends Bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iu extends Bn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Us(e,s.x,r.x,a.x),Us(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends Bn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Us(e,s.x,r.x,a.x),Us(e,s.y,r.y,a.y),Us(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(yc(o,l.x,c.x,h.x,f.x),yc(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var $r=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:yl,CubicBezierCurve:tu,CubicBezierCurve3:_f,EllipseCurve:Ml,LineCurve:nu,LineCurve3:xf,QuadraticBezierCurve:iu,QuadraticBezierCurve3:su,SplineCurve:ru});class vf extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $r[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new $r[s.type]().fromJSON(s))}return this}}class bc extends vf{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nu(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new iu(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new tu(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ru(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Ml(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tt extends bc{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new bc().fromJSON(s))}return this}}function Mf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=au(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ef(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){const d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ys(r,a,t,o,l,c,0),a}function au(i,e,t,n,s){let r;if(s===Ff(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ac(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ac(a/n|0,i[a],i[a+1],r);return r&&os(r,r.next)&&(Js(r),r=r.next),r}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(os(t,t.next)||Et(t.prev,t,t.next)===0)){if(Js(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?yf(i,n,s,r):Sf(i)){e.push(l.i,i.i,c.i),Js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bf(Ti(i),e),Ys(i,e,t,n,s,r,2)):a===2&&Af(i,e,t,n,s,r):Ys(Ti(i),e,t,n,s,r,1);break}}}function Sf(i){const e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ps(s,o,r,l,a,c,m.x,m.y)&&Et(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Et(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),M=Math.max(o,l,c),g=Math.max(h,f,u),p=Yo(d,m,e,t,n),T=Yo(M,g,e,t,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=p&&y&&y.z<=T;){if(w.x>=d&&w.x<=M&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&Ps(o,h,l,f,c,u,w.x,w.y)&&Et(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ps(o,h,l,f,c,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=M&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&Ps(o,h,l,f,c,u,w.x,w.y)&&Et(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=T;){if(y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ps(o,h,l,f,c,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!os(n,s)&&lu(n,t,t.next,s)&&Ks(n,s)&&Ks(s,n)&&(e.push(n.i,t.i,s.i),Js(t),Js(t.next),t=i=s),t=t.next}while(t!==i);return Ti(t)}function Af(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Df(a,o)){let l=cu(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Ys(a,e,t,n,s,r,0),Ys(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ef(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=au(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(If(c))}s.sort(wf);for(let r=0;r<s.length;r++)t=Tf(s[r],t);return t}function wf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Tf(i,e){const t=Cf(i,e);if(!t)return e;const n=cu(t,i);return Ti(n,n.next),Ti(t,t.next)}function Cf(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(os(i,t))return t;do{if(os(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ou(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Ks(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Rf(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Rf(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function Pf(i,e,t,n){let s=i;do s.z===0&&(s.z=Yo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lf(s)}function Lf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Yo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function If(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ou(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ps(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ou(i,e,t,n,s,r,a,o)}function Df(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Uf(i,e)&&(Ks(i,e)&&Ks(e,i)&&Nf(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||os(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function os(i,e){return i.x===e.x&&i.y===e.y}function lu(i,e,t,n){const s=wr(Et(i,e,t)),r=wr(Et(i,e,n)),a=wr(Et(t,n,i)),o=wr(Et(t,n,e));return!!(s!==r&&a!==o||s===0&&Er(i,t,e)||r===0&&Er(i,n,e)||a===0&&Er(t,i,n)||o===0&&Er(t,e,n))}function Er(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wr(i){return i>0?1:i<0?-1:0}function Uf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Nf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cu(i,e){const t=Ko(i.i,i.x,i.y),n=Ko(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ac(i,e,t,n){const s=Ko(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ko(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ff(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Of{static triangulate(e,t,n=2){return Mf(e,t,n)}}class Jn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Jn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ec(e),wc(n,e);let a=e.length;t.forEach(Ec);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wc(n,t[l]);const o=Of.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ec(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Zs extends vt{constructor(e=new Tt([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Bf;let w,y=!1,x,v,b,_;if(p){w=p.getSpacedPoints(h),y=!0,u=!1;const te=p.isCatmullRomCurve3?p.closed:!1;x=p.computeFrenetFrames(h,te),v=new L,b=new L,_=new L}u||(g=0,d=0,m=0,M=0);const E=o.extractPoints(c);let C=E.shape;const P=E.holes;if(!Jn.isClockWise(C)){C=C.reverse();for(let te=0,se=P.length;te<se;te++){const re=P[te];Jn.isClockWise(re)&&(P[te]=re.reverse())}}function z(te){const re=10000000000000001e-36;let oe=te[0];for(let he=1;he<=te.length;he++){const Ue=he%te.length,De=te[Ue],ze=De.x-oe.x,ke=De.y-oe.y,I=ze*ze+ke*ke,ot=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(oe.x),Math.abs(oe.y)),et=re*ot*ot;if(I<=et){te.splice(Ue,1),he--;continue}oe=De}}z(C),P.forEach(z);const D=P.length,O=C;for(let te=0;te<D;te++){const se=P[te];C=C.concat(se)}function q(te,se,re){return se||it("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(se,re)}const k=C.length;function ne(te,se,re){let oe,he,Ue;const De=te.x-se.x,ze=te.y-se.y,ke=re.x-te.x,I=re.y-te.y,ot=De*De+ze*ze,et=De*I-ze*ke;if(Math.abs(et)>Number.EPSILON){const R=Math.sqrt(ot),S=Math.sqrt(ke*ke+I*I),B=se.x-ze/R,H=se.y+De/R,Y=re.x-I/S,le=re.y+ke/S,ce=((Y-B)*I-(le-H)*ke)/(De*I-ze*ke);oe=B+De*ce-te.x,he=H+ze*ce-te.y;const K=oe*oe+he*he;if(K<=2)return new ae(oe,he);Ue=Math.sqrt(K/2)}else{let R=!1;De>Number.EPSILON?ke>Number.EPSILON&&(R=!0):De<-Number.EPSILON?ke<-Number.EPSILON&&(R=!0):Math.sign(ze)===Math.sign(I)&&(R=!0),R?(oe=-ze,he=De,Ue=Math.sqrt(ot)):(oe=De,he=ze,Ue=Math.sqrt(ot/2))}return new ae(oe/Ue,he/Ue)}const X=[];for(let te=0,se=O.length,re=se-1,oe=te+1;te<se;te++,re++,oe++)re===se&&(re=0),oe===se&&(oe=0),X[te]=ne(O[te],O[re],O[oe]);const $=[];let j,Te=X.concat();for(let te=0,se=D;te<se;te++){const re=P[te];j=[];for(let oe=0,he=re.length,Ue=he-1,De=oe+1;oe<he;oe++,Ue++,De++)Ue===he&&(Ue=0),De===he&&(De=0),j[oe]=ne(re[oe],re[Ue],re[De]);$.push(j),Te=Te.concat(j)}let Ae;if(g===0)Ae=Jn.triangulateShape(O,P);else{const te=[],se=[];for(let re=0;re<g;re++){const oe=re/g,he=d*Math.cos(oe*Math.PI/2),Ue=m*Math.sin(oe*Math.PI/2)+M;for(let De=0,ze=O.length;De<ze;De++){const ke=q(O[De],X[De],Ue);_e(ke.x,ke.y,-he),oe===0&&te.push(ke)}for(let De=0,ze=D;De<ze;De++){const ke=P[De];j=$[De];const I=[];for(let ot=0,et=ke.length;ot<et;ot++){const R=q(ke[ot],j[ot],Ue);_e(R.x,R.y,-he),oe===0&&I.push(R)}oe===0&&se.push(I)}}Ae=Jn.triangulateShape(te,se)}const at=Ae.length,je=m+M;for(let te=0;te<k;te++){const se=u?q(C[te],Te[te],je):C[te];y?(b.copy(x.normals[0]).multiplyScalar(se.x),v.copy(x.binormals[0]).multiplyScalar(se.y),_.copy(w[0]).add(b).add(v),_e(_.x,_.y,_.z)):_e(se.x,se.y,0)}for(let te=1;te<=h;te++)for(let se=0;se<k;se++){const re=u?q(C[se],Te[se],je):C[se];y?(b.copy(x.normals[te]).multiplyScalar(re.x),v.copy(x.binormals[te]).multiplyScalar(re.y),_.copy(w[te]).add(b).add(v),_e(_.x,_.y,_.z)):_e(re.x,re.y,f/h*te)}for(let te=g-1;te>=0;te--){const se=te/g,re=d*Math.cos(se*Math.PI/2),oe=m*Math.sin(se*Math.PI/2)+M;for(let he=0,Ue=O.length;he<Ue;he++){const De=q(O[he],X[he],oe);_e(De.x,De.y,f+re)}for(let he=0,Ue=P.length;he<Ue;he++){const De=P[he];j=$[he];for(let ze=0,ke=De.length;ze<ke;ze++){const I=q(De[ze],j[ze],oe);y?_e(I.x,I.y+w[h-1].y,w[h-1].x+re):_e(I.x,I.y,f+re)}}}st(),J();function st(){const te=s.length/3;if(u){let se=0,re=k*se;for(let oe=0;oe<at;oe++){const he=Ae[oe];Oe(he[2]+re,he[1]+re,he[0]+re)}se=h+g*2,re=k*se;for(let oe=0;oe<at;oe++){const he=Ae[oe];Oe(he[0]+re,he[1]+re,he[2]+re)}}else{for(let se=0;se<at;se++){const re=Ae[se];Oe(re[2],re[1],re[0])}for(let se=0;se<at;se++){const re=Ae[se];Oe(re[0]+k*h,re[1]+k*h,re[2]+k*h)}}n.addGroup(te,s.length/3-te,0)}function J(){const te=s.length/3;let se=0;ee(O,se),se+=O.length;for(let re=0,oe=P.length;re<oe;re++){const he=P[re];ee(he,se),se+=he.length}n.addGroup(te,s.length/3-te,1)}function ee(te,se){let re=te.length;for(;--re>=0;){const oe=re;let he=re-1;he<0&&(he=te.length-1);for(let Ue=0,De=h+g*2;Ue<De;Ue++){const ze=k*Ue,ke=k*(Ue+1),I=se+oe+ze,ot=se+he+ze,et=se+he+ke,R=se+oe+ke;Se(I,ot,et,R)}}}function _e(te,se,re){l.push(te),l.push(se),l.push(re)}function Oe(te,se,re){Be(te),Be(se),Be(re);const oe=s.length/3,he=T.generateTopUV(n,s,oe-3,oe-2,oe-1);ht(he[0]),ht(he[1]),ht(he[2])}function Se(te,se,re,oe){Be(te),Be(se),Be(oe),Be(se),Be(re),Be(oe);const he=s.length/3,Ue=T.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);ht(Ue[0]),ht(Ue[1]),ht(Ue[3]),ht(Ue[1]),ht(Ue[2]),ht(Ue[3])}function Be(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function ht(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zf(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $r[s.type]().fromJSON(s)),new Zs(n,e.options)}}const Bf={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],M=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-f),new ae(u,1-m),new ae(M,1-p)]:[new ae(o,1-l),new ae(h,1-f),new ae(d,1-m),new ae(g,1-p)]}};function zf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class js extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],M=[],g=[];for(let p=0;p<h;p++){const T=p*u-a;for(let w=0;w<c;w++){const y=w*f-r;m.push(y,-T,0),M.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const w=T+c*p,y=T+c*(p+1),x=T+1+c*(p+1),v=T+1+c*p;d.push(w,y,v),d.push(y,x,v)}this.setIndex(d),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}class ra extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new L,m=new ae;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let M=0;M<s;M++){const g=M*(n+1);for(let p=0;p<n;p++){const T=p+g,w=T,y=T+n+1,x=T+n+2,v=T+1;o.push(w,y,v),o.push(y,x,v)}}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bl extends vt{constructor(e=new Tt([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(a,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const m=u.holes;Jn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const T=m[g];Jn.isClockWise(T)===!0&&(m[g]=T.reverse())}const M=Jn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const T=m[g];d=d.concat(T)}for(let g=0,p=d.length;g<p;g++){const T=d[g];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let g=0,p=M.length;g<p;g++){const T=M[g],w=T[0]+f,y=T[1]+f,x=T[2]+f;n.push(w,y,x),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Vf(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new bl(n,e.curveSegments)}}function Vf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class fi extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],m=[],M=[],g=[];for(let p=0;p<=n;p++){const T=[],w=p/n,y=a+w*o,x=e*Math.cos(y),v=Math.sqrt(e*e-x*x);let b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){const E=_/t,C=s+E*r;f.x=-v*Math.cos(C),f.y=x,f.z=v*Math.sin(C),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),g.push(E+b,1-w),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=h[p][T+1],y=h[p][T],x=h[p+1][T],v=h[p+1][T+1];(p!==0||a>0)&&d.push(w,y,v),(p!==n-1||l<Math.PI)&&d.push(y,x,v)}this.setIndex(d),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ci extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new L,d=new L,m=new L;for(let M=0;M<=n;M++){const g=a+M/n*o;for(let p=0;p<=s;p++){const T=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(T),d.y=(e+t*Math.cos(g))*Math.sin(T),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(T),u.y=e*Math.sin(T),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){const p=(s+1)*M+g-1,T=(s+1)*(M-1)+g-1,w=(s+1)*(M-1)+g,y=(s+1)*M+g;l.push(p,T,y),l.push(T,w,y)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class aa extends vt{constructor(e=new su(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new ae;let h=new L;const f=[],u=[],d=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function M(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),T(),p()}function g(w){h=e.getPointAt(w/t,h);const y=a.normals[w],x=a.binormals[w];for(let v=0;v<=s;v++){const b=v/s*Math.PI*2,_=Math.sin(b),E=-Math.cos(b);l.x=E*y.x+_*x.x,l.y=E*y.y+_*x.y,l.z=E*y.z+_*x.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){const x=(s+1)*(w-1)+(y-1),v=(s+1)*w+(y-1),b=(s+1)*w+y,_=(s+1)*(w-1)+y;m.push(x,v,_),m.push(v,b,_)}}function T(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)c.x=w/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new aa(new $r[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Tc(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ls(i[t]);for(const s in n)e[s]=n[s]}return e}function Tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Hf={clone:ls,merge:Kt};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xf extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tn extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qf extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yf extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kf extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Cc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Cc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zf=new Jf;class Al{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Al.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi=new WeakMap;class $f extends Al{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ka.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Wi.get(a);f===void 0&&(f=[],Wi.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Ws("img");function l(){h(),t&&t(this);const f=Wi.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),ka.remove(`image:${e}`);const u=Wi.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ka.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Qf extends Al{constructor(e){super(e)}load(e,t,n,s){const r=new zt,a=new $f(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class El extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Rc extends El{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wa=new pt,Pc=new L,Lc=new L;class uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tr=new L,Cr=new ds,An=new L;class du extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tr,Cr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Cr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Tr,Cr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Cr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new L,Ic=new ae,Dc=new ae;class cn extends du{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Dc),t.subVectors(Dc,Ic)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jf extends uu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class ep extends El{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ss extends du{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tp extends uu{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xa extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new tp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xi=-90,qi=1;class np extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Xi,qi,e,t);s.layers=this.layers,this.add(s);const r=new cn(Xi,qi,e,t);r.layers=this.layers,this.add(r);const a=new cn(Xi,qi,e,t);a.layers=this.layers,this.add(a);const o=new cn(Xi,qi,e,t);o.layers=this.layers,this.add(o);const l=new cn(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new cn(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ip extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc=new pt;class sp{constructor(e,t,n=0,s=1/0){this.ray=new _l(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(Nc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jo(e[s],this,n,t);return n.sort(Nc),n}}function Nc(i,e){return i.distance-e.distance}function Jo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Jo(r[a],e,t,!0)}}const Ll=class Ll{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ll.prototype.isMatrix2=!0;let Fc=Ll;const Oc=new ae;class rp{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Bc(i,e,t,n){const s=ap(n);switch(t){case kh:return i*e;case cl:return i*e/s.components*s.byteLength;case hl:return i*e/s.components*s.byteLength;case wi:return i*e*2/s.components*s.byteLength;case ul:return i*e*2/s.components*s.byteLength;case Wh:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case Ir:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case vo:case Mo:case yo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case kr:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zo:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ho:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wr:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(i){switch(i){case nn:case zh:return{byteLength:1,components:1};case Gs:case Vh:case Fn:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case Nn:case al:case gn:return{byteLength:4,components:1};case Gh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function op(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,am=`uniform sampler2D dfgLUT;
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
}`,om=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:vp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:yp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:wp,color_fragment:Tp,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Hp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Zp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Qp,lights_pars_begin:jp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,lightprobes_pars_fragment:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:Sm,morphcolor_vertex:ym,morphnormal_vertex:bm,morphtarget_pars_vertex:Am,morphtarget_vertex:Em,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Cm,normal_pars_vertex:Rm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Km,skinning_pars_vertex:Jm,skinning_vertex:Zm,skinnormal_vertex:$m,specularmap_fragment:Qm,specularmap_pars_fragment:jm,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:_0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:y0,meshbasic_frag:b0,meshlambert_vert:A0,meshlambert_frag:E0,meshmatcap_vert:w0,meshmatcap_frag:T0,meshnormal_vert:C0,meshnormal_frag:R0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:I0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:V0,sprite_frag:G0},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Cn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:Kt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Rr={r:0,b:0,g:0},H0=new pt,pu=new We;pu.set(-1,0,0,0,1,0,0,0,1);function k0(i,e,t,n,s,r){const a=new Ge(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const y=T.backgroundBlurriness>0;w=e.get(w,y)}return w}function m(T){let w=!1;const y=d(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,w){const y=d(w);y&&(y.isCubeTexture||y.mapping===sa)?(c===void 0&&(c=new $e(new ei(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pu),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $e(new js(2,2),new On({name:"BackgroundMaterial",uniforms:ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,w){T.getRGB(Rr,hu(i)),t.buffers.color.setClear(Rr.r,Rr.g,Rr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:m,addToRenderList:M,dispose:p}}function W0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(P,F,z,D,O){let q=!1;const k=f(P,D,z,F);r!==k&&(r=k,c(r.object)),q=d(P,D,z,O),q&&m(P,D,z,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(P,F,z,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,F,z,D){const O=D.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const k=P.isInstancedMesh===!0?P.id:0;let ne=q[k];ne===void 0&&(ne={},q[k]=ne);let X=ne[z.id];X===void 0&&(X={},ne[z.id]=X);let $=X[O];return $===void 0&&($=u(l()),X[O]=$),$}function u(P){const F=[],z=[],D=[];for(let O=0;O<t;O++)F[O]=0,z[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,F,z,D){const O=r.attributes,q=F.attributes;let k=0;const ne=z.getAttributes();for(const X in ne)if(ne[X].location>=0){const j=O[X];let Te=q[X];if(Te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),j===void 0||j.attribute!==Te||Te&&j.data!==Te.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function m(P,F,z,D){const O={},q=F.attributes;let k=0;const ne=z.getAttributes();for(const X in ne)if(ne[X].location>=0){let j=q[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const Te={};Te.attribute=j,j&&j.data&&(Te.data=j.data),O[X]=Te,k++}r.attributes=O,r.attributesNum=k,r.index=D}function M(){const P=r.newAttributes;for(let F=0,z=P.length;F<z;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){const z=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;z[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),O[P]!==F&&(i.vertexAttribDivisor(P,F),O[P]=F)}function T(){const P=r.newAttributes,F=r.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==P[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function w(P,F,z,D,O,q,k){k===!0?i.vertexAttribIPointer(P,F,z,O,q):i.vertexAttribPointer(P,F,z,D,O,q)}function y(P,F,z,D){M();const O=D.attributes,q=z.getAttributes(),k=F.defaultAttributeValues;for(const ne in q){const X=q[ne];if(X.location>=0){let $=O[ne];if($===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const j=$.normalized,Te=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;const at=Ae.buffer,je=Ae.type,st=Ae.bytesPerElement,J=je===i.INT||je===i.UNSIGNED_INT||$.gpuType===al;if($.isInterleavedBufferAttribute){const ee=$.data,_e=ee.stride,Oe=$.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<X.locationSize;Se++)p(X.location+Se,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<X.locationSize;Se++)g(X.location+Se);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Se=0;Se<X.locationSize;Se++)w(X.location+Se,Te/X.locationSize,je,j,_e*st,(Oe+Te/X.locationSize*Se)*st,J)}else{if($.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee,$.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ee=0;ee<X.locationSize;ee++)g(X.location+ee);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ee=0;ee<X.locationSize;ee++)w(X.location+ee,Te/X.locationSize,je,j,Te*st,Te/X.locationSize*ee*st,J)}}else if(k!==void 0){const j=k[ne];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}T()}function x(){E();for(const P in n){const F=n[P];for(const z in F){const D=F[z];for(const O in D){const q=D[O];for(const k in q)h(q[k].object),delete q[k];delete D[O]}}delete n[P]}}function v(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const z in F){const D=F[z];for(const O in D){const q=D[O];for(const k in q)h(q[k].object),delete q[k];delete D[O]}}delete n[P.id]}function b(P){for(const F in n){const z=n[F];for(const D in z){const O=z[D];if(O[P.id]===void 0)continue;const q=O[P.id];for(const k in q)h(q[k].object),delete q[k];delete O[P.id]}}}function _(P){for(const F in n){const z=n[F],D=P.isInstancedMesh===!0?P.id:0,O=z[D];if(O!==void 0){for(const q in O){const k=O[q];for(const ne in k)h(k[ne].object),delete k[ne];delete O[q]}delete z[D],Object.keys(z).length===0&&delete n[F]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function X0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==_n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==nn&&b!==gn&&!_&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,maxSamples:x,samples:v}}function Y0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const T=r?0:n,w=T*4;let y=p.clippingState||null;l.value=y,y=h(m,u,w,d);for(let x=0;x!==w;++x)y[x]=t[x];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const p=d+M*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=d;w!==M;++w,y+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Qi=4,K0=6,J0=20,Z0=256,As=new ss,zc=new Ge;let qa=null,Ya=0,Ka=0,Ja=!1;const $0=new L,vi=new L;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=$0}=r;qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,Ka),this._renderer.xr.enabled=Ja,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Fn,format:_n,colorSpace:qr,depthBuffer:!1},s=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q0(r)),this._blurMaterial=eg(r,e,t),this._ggxMaterial=j0(r,e,t)}return s}_compileMaterial(e){const t=new $e(new vt,e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,s,r){const l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(zc),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new ei,new Kr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(zc),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const x=this._cubeSize;Yi(s,y*x,w>2?x:0,x,x),f.setRenderTarget(s),p&&f.render(M,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ei||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,M=this._sizeLods[n],g=3*M*(n>m-Qi?n-m+Qi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Yi(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(o,As),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Yi(e,g,p,3*M,2*M),s.setRenderTarget(e),s.render(o,As)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Qi?s-this._lodMax+Qi:0),u=4*(this._cubeSize-h);Yi(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,As)}}function Q0(i){const e=[],t=[];let n=i;const s=i-Qi+1+K0;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),M=new Float32Array(d*u*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,w=p>2?0:-1,y=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];m.set(y,d*u*p);for(let x=0;x<u;x++){const v=h[x*2]*2-1,b=h[x*2+1]*2-1;p===0?vi.set(1,b,v):p===1?vi.set(-v,1,-b):p===2?vi.set(-v,b,1):p===3?vi.set(-1,b,-v):p===4?vi.set(-v,-1,b):vi.set(v,b,-1),vi.toArray(M,(p*u+x)*d)}}const g=new vt;g.setAttribute("position",new Mn(m,d)),g.setAttribute("outputDirection",new Mn(M,d)),t.push(new $e(g,null)),n>Qi&&n--}return{lodMeshes:t,sizeLods:e}}function Vc(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function j0(i,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function eg(i,e,t){return new On({name:"SphericalGaussianBlur",defines:{SAMPLES:J0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Gc(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Hc(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mu extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new $e(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=qt),new np(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function tg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===fa||d===pa)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new mu(m.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===fa||d===pa,M=d===Ei||d===as;if(m||M){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Zo(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const T=u.image;return m&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new Zo(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===fa?u.mapping=Ei:d===pa&&(u.mapping=as),u}function l(u){let d=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ng(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let M=0;if(m===void 0)return;if(d!==null){const T=d.array;M=d.version;for(let w=0,y=T.length;w<y;w+=3){const x=T[w+0],v=T[w+1],b=T[w+2];u.push(x,v,v,b,b,x)}}else{const T=m.array;M=m.version;for(let w=0,y=T.length/3-1;w<y;w+=3){const x=w+0,v=w+1,b=w+2;u.push(x,v,v,b,b,x)}}const g=new(m.count>=65535?Jh:Kh)(u,1);g.version=M;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function sg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,e,t){const n=new WeakMap,s=new At;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let E=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),m===!0&&(w=2),M===!0&&(w=3);let y=o.attributes.position.count*w,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const v=new Float32Array(y*x*4*f),b=new qh(v,y,x,f);b.type=gn,b.needsUpdate=!0;const _=w*4;for(let C=0;C<f;C++){const P=g[C],F=p[C],z=T[C],D=y*x*4*C;for(let O=0;O<P.count;O++){const q=O*_;d===!0&&(s.fromBufferAttribute(P,O),v[D+q+0]=s.x,v[D+q+1]=s.y,v[D+q+2]=s.z,v[D+q+3]=0),m===!0&&(s.fromBufferAttribute(F,O),v[D+q+4]=s.x,v[D+q+5]=s.y,v[D+q+6]=s.z,v[D+q+7]=0),M===!0&&(s.fromBufferAttribute(z,O),v[D+q+8]=s.x,v[D+q+9]=s.y,v[D+q+10]=s.z,v[D+q+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:b,size:new ae(y,x)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function og(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const lg={[Ih]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[rl]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function cg(i,e,t,n,s,r){const a=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new vt;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));const h=new Xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new $e(c,h),u=new ss(-1,1,1,-1,0,1);let d=null,m=null,M=!1,g,p=null,T=[],w=!1;this.setSize=function(y,x){a.setSize(y,x),o!==null&&o.setSize(y,x),l!==null&&l.setSize(y,x);for(let v=0;v<T.length;v++){const b=T[v];b.setSize&&b.setSize(y,x)}},this.setEffects=function(y){T=y,w=T.length>0&&T[0].isRenderPass===!0;const x=a.width,v=a.height;T.length>0&&o===null&&(o=new vn(x,v,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(x,v,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<T.length;b++){const _=T[b];_.setSize&&_.setSize(x,v)}},this.begin=function(y,x){if(M||y.toneMapping===Un&&T.length===0)return!1;if(p=x,x!==null){const v=x.width,b=x.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return w},this.end=function(y,x){y.toneMapping=g,M=!0;let v=a,b=o;for(let _=0;_<T.length;_++){const E=T[_];E.enabled!==!1&&(E.render(y,b,v,x),E.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,h.defines={},nt.getTransfer(d)===ut&&(h.defines.SRGB_TRANSFER="");const _=lg[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(f,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const gu=new zt,$o=new Xs(1,1),_u=new qh,xu=new Hd,vu=new jh,kc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),Ut(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),Ut(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),Ut(t,n)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($o.compareFunction=t.isReversedDepthBuffer()?pl:fl,r=$o):r=gu,t.setTexture2D(e||r,s)}function wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function Tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vu,s)}function Cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return yg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Lg(i,e){const t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function Ig(i,e){const t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Ug(i,e){const t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ng(i,e){const t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fg(i,e){const t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function Bg(i,e){i.uniform2iv(this.addr,e)}function zg(i,e){i.uniform3iv(this.addr,e)}function Vg(i,e){i.uniform4iv(this.addr,e)}function Gg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function kg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$o:a=gu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function Yg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vu,r[a])}function Kg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_u,r[a])}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Hg;case 36295:return kg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Kg}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class Qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kc(t,c===void 0?new Zg(o,i,e):new $g(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Qg(o),Kc(t,f)),t=f}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Jc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const e_=37297;let t_=0;function n_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zc=new We;function i_(i){nt._getMatrix(Zc,nt.workingColorSpace,i);const e=`mat3( ${Zc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $c(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+n_(i.getShaderSource(e),o)}else return r}function s_(i,e){const t=i_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const r_={[Ih]:"Linear",[Dh]:"Reinhard",[Uh]:"Cineon",[rl]:"ACESFilmic",[Fh]:"AgX",[Oh]:"Neutral",[Nh]:"Custom"};function a_(i,e){const t=r_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new L;function o_(){nt.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function c_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function Qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(i){return i.replace(u_,f_)}const d_=new Map;function f_(i,e){let t=Ze[e];if(t===void 0){const n=d_.get(e);if(n!==void 0)t=Ze[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qo(t)}const p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(p_,m_)}function m_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const g_={[Is]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function __(i){return g_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x_={[Ei]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function v_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const M_={[as]:"ENVMAP_MODE_REFRACTION"};function S_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":M_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y_={[sl]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[Md]:"ENVMAP_BLENDING_ADD"};function b_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=__(t),c=v_(t),h=S_(t),f=b_(t),u=A_(t),d=l_(t),m=c_(r),M=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(g=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Un?a_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),o_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Qo(a),a=Qc(a,t),a=jc(a,t),o=Qo(o),o=Qc(o,t),o=jc(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+g+a,y=T+p+o,x=Jc(s,s.VERTEX_SHADER,w),v=Jc(s,s.FRAGMENT_SHADER,y);s.attachShader(M,x),s.attachShader(M,v),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function b(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(x)||"",D=s.getShaderInfoLog(v)||"",O=F.trim(),q=z.trim(),k=D.trim();let ne=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,x,v);else{const $=$c(s,x,"vertex"),j=$c(s,v,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+$+`
`+j)}else O!==""?Ve("WebGLProgram: Program Info Log:",O):(q===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:ne,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(x),s.deleteShader(v),_=new Fr(s,M),E=h_(s,M)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,e_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=x,this.fragmentShader=v,this}let w_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C_(e),t.set(e,n)),n}}class C_{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}}function R_(i){return i===wi||i===kr||i===Wr}function P_(i,e,t,n,s,r){const a=new gl,o=new T_,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,E,C,P,F,z){const D=P.fog,O=F.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||q,k),X=ne&&ne.mapping===sa?ne.image.height:null,$=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Te=j!==void 0?j.length:0;let Ae=0;O.morphAttributes.position!==void 0&&(Ae=1),O.morphAttributes.normal!==void 0&&(Ae=2),O.morphAttributes.color!==void 0&&(Ae=3);let at,je,st,J;if($){const gt=Cn[$];at=gt.vertexShader,je=gt.fragmentShader}else{at=_.vertexShader,je=_.fragmentShader;const gt=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,gt,lt),st=gt.id,J=lt.id}const ee=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Be=!!_.map,ht=!!_.matcap,te=!!ne,se=!!_.aoMap,re=!!_.lightMap,oe=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,Ue=!!_.displacementMap,De=!!_.emissiveMap,ze=!!_.metalnessMap,ke=!!_.roughnessMap,I=_.anisotropy>0,ot=_.clearcoat>0,et=_.dispersion>0,R=_.retroreflectivity>0,S=_.iridescence>0,B=_.sheen>0,H=_.transmission>0,Y=I&&!!_.anisotropyMap,le=ot&&!!_.clearcoatMap,ce=ot&&!!_.clearcoatNormalMap,K=ot&&!!_.clearcoatRoughnessMap,Q=S&&!!_.iridescenceMap,ue=S&&!!_.iridescenceThicknessMap,Pe=B&&!!_.sheenColorMap,me=B&&!!_.sheenRoughnessMap,de=!!_.specularMap,Le=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Xe=H&&!!_.transmissionMap,N=H&&!!_.thicknessMap,fe=!!_.gradientMap,Z=!!_.alphaMap,pe=_.alphaTest>0,Me=!!_.alphaHash,ie=!!_.extensions;let Ie=Un;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Ce={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:je,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:ht,envMap:te,envMapMode:te&&ne.mapping,envMapCubeUVHeight:X,aoMap:se,lightMap:re,bumpMap:oe,normalMap:he,displacementMap:Ue,emissiveMap:De,normalMapObjectSpace:he&&_.normalMapType===bd,normalMapTangentSpace:he&&_.normalMapType===Xr,packedNormalMap:he&&_.normalMapType===Xr&&R_(_.normalMap.format),metalnessMap:ze,roughnessMap:ke,anisotropy:I,anisotropyMap:Y,clearcoat:ot,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:K,dispersion:et,retroreflection:R,iridescence:S,iridescenceMap:Q,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:de,specularColorMap:Le,specularIntensityMap:Ne,transmission:H,transmissionMap:Xe,thicknessMap:N,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:pe,alphaHash:Me,combine:_.combine,mapUv:Be&&m(_.map.channel),aoMapUv:se&&m(_.aoMap.channel),lightMapUv:re&&m(_.lightMap.channel),bumpMapUv:oe&&m(_.bumpMap.channel),normalMapUv:he&&m(_.normalMap.channel),displacementMapUv:Ue&&m(_.displacementMap.channel),emissiveMapUv:De&&m(_.emissiveMap.channel),metalnessMapUv:ze&&m(_.metalnessMap.channel),roughnessMapUv:ke&&m(_.roughnessMap.channel),anisotropyMapUv:Y&&m(_.anisotropyMap.channel),clearcoatMapUv:le&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(_.sheenRoughnessMap.channel),specularMapUv:de&&m(_.specularMap.channel),specularColorMapUv:Le&&m(_.specularColorMap.channel),specularIntensityMapUv:Ne&&m(_.specularIntensityMap.channel),transmissionMapUv:Xe&&m(_.transmissionMap.channel),thicknessMapUv:N&&m(_.thicknessMap.channel),alphaMapUv:Z&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||I),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Be||Z),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),T(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function T(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const E=d[_.type];let C;if(E){const P=Cn[E];C=Hf.clone(P.uniforms)}else C=_.uniforms;return C}function y(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new E_(i,E,_,s),c.push(C),h.set(E,C)),C}function x(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function b(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:x,releaseShaderCache:v,programs:c,dispose:b}}function L_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,g,p){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},i[e]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=m,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=g,T.group=p),e++,T}function l(u,d,m,M,g,p,T){T.reversedDepth===!0&&(g=-g);const w=o(u,d,m,M,g,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(u,d,m,M,g,p){const T=o(u,d,m,M,g,p);m.transmission>0?n.unshift(T):m.transparent===!0?s.unshift(T):t.unshift(T)}function h(u,d){t.length>1&&t.sort(u||I_),n.length>1&&n.sort(d||nh),s.length>1&&s.sort(d||nh)}function f(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function D_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ih,i.set(n,[a])):s>=r.length?(a=new ih,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function U_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let F_=0;function O_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B_(i){const e=new U_,t=N_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new pt,a=new pt;function o(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,T=0,w=0,y=0,x=0,v=0,b=0,_=0,E=0,C=0;c.sort(O_);for(let F=0,z=c.length;F<z;F++){const D=c[F],O=D.color,q=D.intensity,k=D.distance;let ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*q,f+=O.g*q,u+=O.b*q;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],q);C++}else if(D.isSunLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,j=t.get(D);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=ne;const Te=$.getViewportCount();for(let Ae=0;Ae<Te;Ae++)n.sunShadowMatrix[M+Ae]=$.getMatrix(Ae),n.sunShadowCascade[M+Ae]=$._cascadeData[Ae];M+=Te,m++}n.sun[d]=X,d++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,j=t.get(D);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=D.shadow.matrix,x++}n.directional[g]=X,g++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(q),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[T]=X;const $=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,$.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[T]=$.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=ne,b++}T++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(O).multiplyScalar(q),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=X,w++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,j=t.get(D);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=D.shadow.matrix,v++}n.point[p]=X,p++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(q),X.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[y]=X,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==T||P.rectAreaLength!==w||P.hemiLength!==y||P.numSunShadows!==m||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=T,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=T,P.rectAreaLength=w,P.hemiLength=y,P.numSunShadows=m,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=_,P.numLightProbes=C,n.version=F_++)}function l(c,h){let f=0,u=0,d=0,m=0,M=0,g=0;const p=h.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){const y=c[T];if(y.isSunLight){const x=n.sun[f];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),f++}else if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=n.rectArea[M];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function sh(i){const e=new B_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function z_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sh(i),e.set(s,[o])):r>=a.length?(o=new sh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`,H_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],k_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rh=new pt,Es=new L,$a=new L;function W_(i,e,t){let n=new xl;const s=new ae,r=new ae,a=new At,o=new Yf,l=new Kf,c={},h=t.maxTextureSize,f={[Ai]:Zt,[Zt]:Ai,[tn]:tn},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:V_,fragmentShader:G_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new vt;m.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $e(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let p=this.type;this.render=function(v,b,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===ed&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&b.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=v.length;D<O;D++){const q=v[D],k=q.shadow;if(k===void 0){Ve("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Rs){if(q.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new vn(s.x,s.y,{format:wi,type:Fn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new Xs(s.x,s.y,gn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Qn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot}else q.isPointLight?(k.map=new mu(s.x),k.map.depthTexture=new lf(s.x,Nn)):(k.map=new vn(s.x,s.y),k.map.depthTexture=new Xs(s.x,s.y,Nn)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Qn,this.type===Is?(k.map.depthTexture.compareFunction=X?pl:fl,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const $=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,_);for(let j=0;j<$;j++){const Te=k.getCamera(j);if(q.isPointLight){const Ae=k.camera,at=k.matrix,je=q.distance||Ae.far;je!==Ae.far&&(Ae.far=je,Ae.updateProjectionMatrix()),Es.setFromMatrixPosition(q.matrixWorld),Ae.position.copy(Es),$a.copy(Ae.position),$a.add(H_[j]),Ae.up.copy(k_[j]),Ae.lookAt($a),Ae.updateMatrixWorld(),at.makeTranslation(-Es.x,-Es.y,-Es.z),rh.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),k._frustum.setFromProjectionMatrix(rh,Ae.coordinateSystem,Ae.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,j),i.clear();else{j===0&&(i.setRenderTarget(k.map),i.clear());const Ae=k.getViewport(j);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),F.viewport(a)}n=k.getFrustum(j),y(b,_,Te,q,this.type)}k.isPointLightShadow!==!0&&this.type===Rs&&T(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,P)};function T(v,b){const _=e.update(M);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new vn(s.x,s.y,{format:wi,type:Fn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(b,null,_,u,M,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(b,null,_,d,M,null)}function w(v,b,_,E){let C=null;const P=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=C.uuid,z=b.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let O=D[z];O===void 0&&(O=C.clone(),D[z]=O,b.addEventListener("dispose",x)),C=O}if(C.visible=b.visible,C.wireframe=b.wireframe,E===Rs?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=_}return C}function y(v,b,_,E,C){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===Rs)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);const z=e.update(v),D=v.material;if(Array.isArray(D)){const O=z.groups;for(let q=0,k=O.length;q<k;q++){const ne=O[q],X=D[ne.materialIndex];if(X&&X.visible){const $=w(v,X,E,C);v.onBeforeShadow(i,v,b,_,z,$,ne),i.renderBufferDirect(_,null,z,$,v,ne),v.onAfterShadow(i,v,b,_,z,$,ne)}}}else if(D.visible){const O=w(v,D,E,C);v.onBeforeShadow(i,v,b,_,z,O,null),i.renderBufferDirect(_,null,z,O,v,null),v.onAfterShadow(i,v,b,_,z,O,null)}}const F=v.children;for(let z=0,D=F.length;z<D;z++)y(F[z],b,_,E,C)}function x(v){v.target.removeEventListener("dispose",x);for(const _ in c){const E=c[_],C=v.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function X_(i,e){function t(){let N=!1;const fe=new At;let Z=null;const pe=new At(0,0,0,0);return{setMask:function(Me){Z!==Me&&!N&&(i.colorMask(Me,Me,Me,Me),Z=Me)},setLocked:function(Me){N=Me},setClear:function(Me,ie,Ie,Ce,gt){gt===!0&&(Me*=Ce,ie*=Ce,Ie*=Ce),fe.set(Me,ie,Ie,Ce),pe.equals(fe)===!1&&(i.clearColor(Me,ie,Ie,Ce),pe.copy(fe))},reset:function(){N=!1,Z=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,Z=null,pe=null,Me=null;return{setReversed:function(ie){if(fe!==ie){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(ie){ie?ee(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ie){Z!==ie&&!N&&(i.depthMask(ie),Z=ie)},setFunc:function(ie){if(fe&&(ie=Nd[ie]),pe!==ie){switch(ie){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){Me!==ie&&(Me=ie,fe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){N=!1,Z=null,pe=null,Me=null,fe=!1}}}function s(){let N=!1,fe=null,Z=null,pe=null,Me=null,ie=null,Ie=null,Ce=null,gt=null;return{setTest:function(lt){N||(lt?ee(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!N&&(i.stencilMask(lt),fe=lt)},setFunc:function(lt,hn,yn){(Z!==lt||pe!==hn||Me!==yn)&&(i.stencilFunc(lt,hn,yn),Z=lt,pe=hn,Me=yn)},setOp:function(lt,hn,yn){(ie!==lt||Ie!==hn||Ce!==yn)&&(i.stencilOp(lt,hn,yn),ie=lt,Ie=hn,Ce=yn)},setLocked:function(lt){N=lt},setClear:function(lt){gt!==lt&&(i.clearStencil(lt),gt=lt)},reset:function(){N=!1,fe=null,Z=null,pe=null,Me=null,ie=null,Ie=null,Ce=null,gt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],M=null,g=!1,p=null,T=null,w=null,y=null,x=null,v=null,b=null,_=new Ge(0,0,0),E=0,C=!1,P=null,F=null,z=null,D=null,O=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ne>=2);let $=null,j={};const Te=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),at=new At().fromArray(Te),je=new At().fromArray(Ae);function st(N,fe,Z,pe){const Me=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Z;Ie++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(fe+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ie}const J={};J[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Vs),oe(!1),he(Yl),ee(i.CULL_FACE),se(Zn);function ee(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Oe(N,fe){return u[N]!==fe?(i.bindFramebuffer(N,fe),u[N]=fe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(N,fe){let Z=m,pe=!1;if(N){Z=d.get(fe),Z===void 0&&(Z=[],d.set(fe,Z));const Me=N.textures;if(Z.length!==Me.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ie=Me.length;ie<Ie;ie++)Z[ie]=i.COLOR_ATTACHMENT0+ie;Z.length=Me.length,pe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Z)}function Be(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const ht={[Ji]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};ht[sd]=i.MIN,ht[rd]=i.MAX;const te={[ad]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Lh]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[_d]:i.CONSTANT_ALPHA,[xd]:i.ONE_MINUS_CONSTANT_ALPHA};function se(N,fe,Z,pe,Me,ie,Ie,Ce,gt,lt){if(N===Zn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),N!==td){if(N!==p||lt!==C){if((T!==Ji||x!==Ji)&&(i.blendEquation(i.FUNC_ADD),T=Ji,x=Ji),lt)switch(N){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",N);break}w=null,y=null,v=null,b=null,_.set(0,0,0),E=0,p=N,C=lt}return}Me=Me||fe,ie=ie||Z,Ie=Ie||pe,(fe!==T||Me!==x)&&(i.blendEquationSeparate(ht[fe],ht[Me]),T=fe,x=Me),(Z!==w||pe!==y||ie!==v||Ie!==b)&&(i.blendFuncSeparate(te[Z],te[pe],te[ie],te[Ie]),w=Z,y=pe,v=ie,b=Ie),(Ce.equals(_)===!1||gt!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,gt),_.copy(Ce),E=gt),p=N,C=!1}function re(N,fe){N.side===tn?_e(i.CULL_FACE):ee(i.CULL_FACE);let Z=N.side===Zt;fe&&(Z=!Z),oe(Z),N.blending===Ds&&N.transparent===!1?se(Zn):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),De(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function he(N){N!==Qu?(ee(i.CULL_FACE),N!==F&&(N===Yl?i.cullFace(i.BACK):N===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),F=N}function Ue(N){N!==z&&(k&&i.lineWidth(N),z=N)}function De(N,fe,Z){N?(ee(i.POLYGON_OFFSET_FILL),(D!==fe||O!==Z)&&(D=fe,O=Z,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,Z))):_e(i.POLYGON_OFFSET_FILL)}function ze(N){N?ee(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ke(N){N===void 0&&(N=i.TEXTURE0+q-1),$!==N&&(i.activeTexture(N),$=N)}function I(N,fe,Z){Z===void 0&&($===null?Z=i.TEXTURE0+q-1:Z=$);let pe=j[Z];pe===void 0&&(pe={type:void 0,texture:void 0},j[Z]=pe),(pe.type!==N||pe.texture!==fe)&&($!==Z&&(i.activeTexture(Z),$=Z),i.bindTexture(N,fe||J[N]),pe.type=N,pe.texture=fe)}function ot(){const N=j[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function S(){try{i.texSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ce(){try{i.texStorage3D(...arguments)}catch(N){it("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function ue(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Pe(N,fe){f[N]!==fe&&(i.pixelStorei(N,fe),f[N]=fe)}function me(N){at.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),at.copy(N))}function de(N){je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function Le(N,fe){let Z=c.get(fe);Z===void 0&&(Z=new WeakMap,c.set(fe,Z));let pe=Z.get(N);pe===void 0&&(pe=i.getUniformBlockIndex(fe,N.name),Z.set(N,pe))}function Ne(N,fe){const pe=c.get(fe).get(N);l.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,N.__bindingPointIndex),l.set(fe,pe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,j={},u={},d=new WeakMap,m=[],M=null,g=!1,p=null,T=null,w=null,y=null,x=null,v=null,b=null,_=new Ge(0,0,0),E=0,C=!1,P=null,F=null,z=null,D=null,O=null,at.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Oe,drawBuffers:Se,useProgram:Be,setBlending:se,setMaterial:re,setFlipSided:oe,setCullFace:he,setLineWidth:Ue,setPolygonOffset:De,setScissorTest:ze,activeTexture:ke,bindTexture:I,unbindTexture:ot,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:Pe,getParameter:ue,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:le,texStorage3D:ce,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:me,viewport:de,reset:Xe}}function q_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,S){return m?new OffscreenCanvas(R,S):Ws("canvas")}function g(R,S,B){let H=1;const Y=et(R);if((Y.width>B||Y.height>B)&&(H=B/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(H*Y.width),ce=Math.floor(H*Y.height);u===void 0&&(u=M(le,ce));const K=S?M(le,ce):u;return K.width=le,K.height=ce,K.getContext("2d").drawImage(R,0,0,le,ce),Ve("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),K}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function p(R){return R.generateMipmaps}function T(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,B,H,Y,le=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),B===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),S===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),B===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),B===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),S===i.RGBA){const Q=le?Yr:nt.getTransfer(Y);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Q===ut?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),B===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(R,S){let B;return R?S===null||S===Nn||S===Hs?B=i.DEPTH24_STENCIL8:S===gn?B=i.DEPTH32F_STENCIL8:S===Gs&&(B=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Nn||S===Hs?B=i.DEPTH_COMPONENT24:S===gn?B=i.DEPTH_COMPONENT32F:S===Gs&&(B=i.DEPTH_COMPONENT16),B}function v(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),E(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function _(R){const S=R.target;S.removeEventListener("dispose",_),P(S)}function E(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,H=d.get(B);if(H){const Y=H[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(R),Object.keys(H).length===0&&d.delete(B)}n.remove(R)}function C(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const B=R.source,H=d.get(B);delete H[S.__cacheKey],a.memory.textures--}function P(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let Y=0;Y<S.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)i.deleteFramebuffer(S.__webglFramebuffer[H]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let H=0,Y=B.length;H<Y;H++){const le=n.get(B[H]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(R)}let F=0;function z(){F=0}function D(){return F}function O(R){F=R}function q(){const R=F;return R>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ne(R,S){const B=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const H=R.image;if(H===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,R,S);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function X(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_e(B,R,S);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function $(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_e(B,R,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function j(R,S){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Oe(B,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const Te={[Hr]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},Ae={[Ot]:i.NEAREST,[Sd]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},at={[Ed]:i.NEVER,[Pd]:i.ALWAYS,[wd]:i.LESS,[fl]:i.LEQUAL,[Td]:i.EQUAL,[pl]:i.GEQUAL,[Cd]:i.GREATER,[Rd]:i.NOTEQUAL};function je(R,S){if(S.type===gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===ma||S.magFilter===sr||S.magFilter===Mi||S.minFilter===qt||S.minFilter===ma||S.minFilter===sr||S.minFilter===Mi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Te[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Te[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Te[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ae[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==sr&&S.minFilter!==Mi||S.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const H=S.source;let Y=d.get(H);Y===void 0&&(Y={},d.set(H,Y));const le=k(S);if(le!==R.__cacheKey){Y[le]===void 0&&(Y[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[le].usedTimes++;const ce=Y[R.__cacheKey];ce!==void 0&&(Y[R.__cacheKey].usedTimes--,ce.usedTimes===0&&C(S)),R.__cacheKey=le,R.__webglTexture=Y[le].texture}return B}function J(R,S,B){return Math.floor(Math.floor(R/B)/S)}function ee(R,S,B,H){const le=R.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,H,S.data);else{le.sort((Pe,me)=>Pe.start-me.start);let ce=0;for(let Pe=1;Pe<le.length;Pe++){const me=le[ce],de=le[Pe],Le=me.start+me.count,Ne=J(de.start,S.width,4),Xe=J(me.start,S.width,4);de.start<=Le+1&&Ne===Xe&&J(de.start+de.count-1,S.width,4)===Ne?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Pe=0,me=le.length;Pe<me;Pe++){const de=le[Pe],Le=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Xe=Le%S.width,N=Math.floor(Le/S.width),fe=Ne,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Xe,N,fe,Z,B,H,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function _e(R,S,B){let H=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=i.TEXTURE_3D);const Y=st(R,S),le=S.source;t.bindTexture(H,R.__webglTexture,i.TEXTURE0+B);const ce=n.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Z=nt.getPrimaries(nt.workingColorSpace),pe=S.colorSpace===ci?null:nt.getPrimaries(S.colorSpace),Me=S.colorSpace===ci||Z===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=g(S.image,!1,s.maxTextureSize);Q=ot(S,Q);const ue=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type);let me=y(S.internalFormat,ue,Pe,S.normalized,S.colorSpace,S.isVideoTexture);je(H,S);let de;const Le=S.mipmaps,Ne=S.isVideoTexture!==!0,Xe=ce.__version===void 0||Y===!0,N=le.dataReady,fe=v(S,Q);if(S.isDepthTexture)me=x(S.format===Si,S.type),Xe&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,null));else if(S.isDataTexture)if(Le.length>0){Ne&&Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Le[0].width,Le[0].height);for(let Z=0,pe=Le.length;Z<pe;Z++)de=Le[Z],Ne?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,Z,me,de.width,de.height,0,ue,Pe,de.data);S.generateMipmaps=!1}else Ne?(Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height),N&&ee(S,Q,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Le[0].width,Le[0].height,Q.depth);for(let Z=0,pe=Le.length;Z<pe;Z++)if(de=Le[Z],S.format!==_n)if(ue!==null)if(Ne){if(N)if(S.layerUpdates.size>0){const Me=Bc(de.width,de.height,S.format,S.type);for(const ie of S.layerUpdates){const Ie=de.data.subarray(ie*Me/de.data.BYTES_PER_ELEMENT,(ie+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ie,de.width,de.height,1,ue,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,Q.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,me,de.width,de.height,Q.depth,0,de.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,Q.depth,ue,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,me,de.width,de.height,Q.depth,0,ue,Pe,de.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ne&&Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Le[0].width,Le[0].height);for(let Z=0,pe=Le.length;Z<pe;Z++)de=Le[Z],S.format!==_n?ue!==null?Ne?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,me,de.width,de.height,0,de.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,Z,me,de.width,de.height,0,ue,Pe,de.data)}else if(S.isDataArrayTexture)if(Ne){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Q.width,Q.height,Q.depth),N)if(S.layerUpdates.size>0){const Z=Bc(Q.width,Q.height,S.format,S.type);for(const pe of S.layerUpdates){const Me=Q.data.subarray(pe*Z/Q.data.BYTES_PER_ELEMENT,(pe+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,ue,Pe,Me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(S.isData3DTexture)Ne?(Xe&&t.texStorage3D(i.TEXTURE_3D,fe,me,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(S.isFramebufferTexture){if(Xe)if(Ne)t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height);else{let Z=Q.width,pe=Q.height;for(let Me=0;Me<fe;Me++)t.texImage2D(i.TEXTURE_2D,Me,me,Z,pe,0,ue,Pe,null),Z>>=1,pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),f.add(S),Z.onpaint=pe=>{const Me=pe.changedElements;for(const ie of f)Me.includes(ie.image)&&(ie.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const Me=i.RGBA,ie=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ie,Ie,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Xe){const Z=et(Le[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,Z.width,Z.height)}for(let Z=0,pe=Le.length;Z<pe;Z++)de=Le[Z],Ne?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ue,Pe,de):t.texImage2D(i.TEXTURE_2D,Z,me,ue,Pe,de);S.generateMipmaps=!1}else if(Ne){if(Xe){const Z=et(Q);t.texStorage2D(i.TEXTURE_2D,fe,me,Z.width,Z.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Pe,Q);p(S)&&T(H),ce.__version=le.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Oe(R,S,B){if(S.image.length!==6)return;const H=st(R,S),Y=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const le=n.get(Y);if(Y.version!==le.__version||H===!0){t.activeTexture(i.TEXTURE0+B);const ce=nt.getPrimaries(nt.workingColorSpace),K=S.colorSpace===ci?null:nt.getPrimaries(S.colorSpace),Q=S.colorSpace===ci||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,Pe=S.image[0]&&S.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ue&&!Pe?me[ie]=g(S.image[ie],!0,s.maxCubemapSize):me[ie]=Pe?S.image[ie].image:S.image[ie],me[ie]=ot(S,me[ie]);const de=me[0],Le=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Xe=y(S.internalFormat,Le,Ne,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,fe=le.__version===void 0||H===!0,Z=Y.dataReady;let pe=v(S,de);je(i.TEXTURE_CUBE_MAP,S);let Me;if(ue){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,de.width,de.height);for(let ie=0;ie<6;ie++){Me=me[ie].mipmaps;for(let Ie=0;Ie<Me.length;Ie++){const Ce=Me[Ie];S.format!==_n?Le!==null?N?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ce.width,Ce.height,Le,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Xe,Ce.width,Ce.height,0,Ce.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ce.width,Ce.height,Le,Ne,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Xe,Ce.width,Ce.height,0,Le,Ne,Ce.data)}}}else{if(Me=S.mipmaps,N&&fe){Me.length>0&&pe++;const ie=et(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Le,Ne,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,me[ie].width,me[ie].height,0,Le,Ne,me[ie].data);for(let Ie=0;Ie<Me.length;Ie++){const gt=Me[Ie].image[ie].image;N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,gt.width,gt.height,Le,Ne,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Xe,gt.width,gt.height,0,Le,Ne,gt.data)}}else{N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ne,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,Le,Ne,me[ie]);for(let Ie=0;Ie<Me.length;Ie++){const Ce=Me[Ie];N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Le,Ne,Ce.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Xe,Le,Ne,Ce.image[ie])}}}p(S)&&T(i.TEXTURE_CUBE_MAP),le.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Se(R,S,B,H,Y,le){const ce=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Q=y(B.internalFormat,ce,K,B.normalized,B.colorSpace),ue=n.get(S),Pe=n.get(B);if(Pe.__renderTarget=S,!ue.__hasExternalTextures){const me=Math.max(1,S.width>>le),de=Math.max(1,S.height>>le);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,Q,me,de,S.depth,0,ce,K,null):t.texImage2D(Y,le,Q,me,de,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,Pe.__webglTexture,0,ze(S)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,Pe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(R,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const H=S.depthTexture,Y=H&&H.isDepthTexture?H.type:null,le=x(S.stencilBuffer,Y),ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ke(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(S),le,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(S),le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,le,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,R)}else{const H=S.textures;for(let Y=0;Y<H.length;Y++){const le=H[Y],ce=r.convert(le.format,le.colorSpace),K=r.convert(le.type),Q=y(le.internalFormat,ce,K,le.normalized,le.colorSpace);ke(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(S),Q,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(S),Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,S,B){const H=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(S.depthTexture);if(Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),je(i.TEXTURE_CUBE_MAP,S.depthTexture);const ue=r.convert(S.depthTexture.format),Pe=r.convert(S.depthTexture.type);let me;S.depthTexture.format===Qn?me=i.DEPTH_COMPONENT24:S.depthTexture.format===Si&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,S.width,S.height,0,ue,Pe,null)}}else ne(S.depthTexture,0);const le=Y.__webglTexture,ce=ze(S),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=S.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qn)ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,le,0);else if(S.depthTexture.format===Si)ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const Y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),S.__depthDisposeCallback=Y}S.__boundDepthTexture=H}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)ht(S.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?ht(S.__webglFramebuffer[0],R,0):ht(S.__webglFramebuffer,R,0)}else if(B){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=i.createRenderbuffer(),Be(S.__webglDepthbuffer[H],R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Be(S.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(R,S,B){const H=n.get(R);S!==void 0&&Se(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&te(R)}function re(R){const S=R.texture,B=n.get(R),H=n.get(S);R.addEventListener("dispose",_);const Y=R.textures,le=R.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=S.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<S.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,Q=Y.length;K<Q;K++){const ue=n.get(Y[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ke(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const Q=Y[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ue=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),me=y(Q.internalFormat,ue,Pe,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),de=ze(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),je(i.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Se(B.__webglFramebuffer[K][Q],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Se(B.__webglFramebuffer[K],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(S)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,Q=Y.length;K<Q;K++){const ue=Y[K],Pe=n.get(ue);let me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Pe.__webglTexture),je(me,ue),Se(B.__webglFramebuffer,R,ue,i.COLOR_ATTACHMENT0+K,me,0),p(ue)&&T(me)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),je(K,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Se(B.__webglFramebuffer[Q],R,S,i.COLOR_ATTACHMENT0,K,Q);else Se(B.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,K,0);p(S)&&T(K),t.unbindTexture()}R.depthBuffer&&te(R)}function oe(R){const S=R.textures;for(let B=0,H=S.length;B<H;B++){const Y=S[B];if(p(Y)){const le=w(R),ce=n.get(Y).__webglTexture;t.bindTexture(le,ce),T(le),t.unbindTexture()}}}const he=[],Ue=[];function De(R){if(R.samples>0){if(ke(R)===!1){const S=R.textures,B=R.width,H=R.height;let Y=i.COLOR_BUFFER_BIT;const le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(R),K=S.length>1;if(K)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Pe=n.get(S[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,Y,i.NEAREST),l===!0&&(he.length=0,Ue.length=0,he.push(i.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(he.push(le),Ue.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Pe=n.get(S[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ze(R){return Math.min(s.maxSamples,R.samples)}function ke(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function I(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ot(R,S){const B=R.colorSpace,H=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==qr&&B!==ci&&(nt.getTransfer(B)===ut?(H!==_n||Y!==nn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",B)),S}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y_(i,e){function t(n,s=ci){let r;const a=nt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===_n)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===Ir||n===Dr||n===Ur||n===Nr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===yo||n===bo||n===kr||n===Ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===wo||n===To||n===Co||n===Ro||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Vo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===ko||n===Wr||n===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $_ extends Ri{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",g=new Z_,p={},T=t.getContextAttributes();let w=null,y=null;const x=[],v=[],b=new ae;let _=null,E=null;const C=new cn;C.viewport=new At;const P=new cn;P.viewport=new At;const F=[C,P],z=new ip;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=x[J];return ee===void 0&&(ee=new Aa,x[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=x[J];return ee===void 0&&(ee=new Aa,x[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=x[J];return ee===void 0&&(ee=new Aa,x[J]=ee),ee.getHandSpace()};function q(J){const ee=v.indexOf(J.inputSource);if(ee===-1)return;const _e=x[ee];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<x.length;J++){const ee=v[J];ee!==null&&(v[J]=null,x[J].disconnect(ee))}D=null,O=null,g.reset();for(const J in p)delete p[J];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,y=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),E!==null){const J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Si:Qn,Oe=T.stencil?Hs:Nn);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new vn(u.textureWidth,u.textureHeight,{format:_n,type:nn,depthTexture:new Xs(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new vn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(J){for(let ee=0;ee<J.removed.length;ee++){const _e=J.removed[ee],Oe=v.indexOf(_e);Oe>=0&&(v[Oe]=null,x[Oe].disconnect(_e))}for(let ee=0;ee<J.added.length;ee++){const _e=J.added[ee];let Oe=v.indexOf(_e);if(Oe===-1){for(let Be=0;Be<x.length;Be++)if(Be>=v.length){v.push(_e),Oe=Be;break}else if(v[Be]===null){v[Be]=_e,Oe=Be;break}if(Oe===-1)break}const Se=x[Oe];Se&&Se.connect(_e)}}const X=new L,$=new L;function j(J,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const Oe=X.distanceTo($),Se=ee.projectionMatrix.elements,Be=_e.projectionMatrix.elements,ht=Se[14]/(Se[10]-1),te=Se[14]/(Se[10]+1),se=(Se[9]+1)/Se[5],re=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],he=(Be[8]+1)/Be[0],Ue=ht*oe,De=ht*he,ze=Oe/(-oe+he),ke=ze*-oe;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ke),J.translateZ(ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const I=ht+ze,ot=te+ze,et=Ue-ke,R=De+(Oe-ke),S=se*te/ot*I,B=re*te/ot*I;J.projectionMatrix.makePerspective(et,R,S,B,I,ot),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Te(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),z.near=P.near=C.near=ee,z.far=P.far=C.far=_e,(D!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,O=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Oe=J.parent,Se=z.cameras;Te(z,Oe);for(let Be=0;Be<Se.length;Be++)Te(Se[Be],Oe);Se.length===2?j(z,C,P):z.projectionMatrix.copy(C.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),Ae(J,z,Oe)};function Ae(J,ee,_e){_e===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let at=null;function je(J,ee){if(h=ee.getViewerPose(c||a),m=ee,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let te=0;te<_e.length;te++){const se=_e[te];let re=null;if(d!==null)re=d.getViewport(se);else{const he=f.getViewSubImage(u,se);re=he.viewport,te===0&&(e.setRenderTargetTextures(y,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(y))}let oe=F[te];oe===void 0&&(oe=new cn,oe.layers.enable(te),oe.viewport=new At,F[te]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),te===0&&(z.matrix.copy(oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(oe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const te=f.getDepthInformation(_e[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if(Se&&Se.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let te=0;te<_e.length;te++){const se=_e[te].camera;if(se){let re=p[se];re||(re=new eu,p[se]=re);const oe=f.getCameraImage(se);re.sourceTexture=oe}}}}for(let _e=0;_e<x.length;_e++){const Oe=v[_e],Se=x[_e];Oe!==null&&Se!==void 0&&Se.update(Oe,ee,c||a)}at&&at(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const st=new fu;st.setAnimationLoop(je),this.setAnimationLoop=function(J){at=J},this.dispose=function(){}}}const Q_=new pt,Mu=new We;Mu.set(-1,0,0,0,1,0,0,0,1);function j_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,hu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,y=T.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Mu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",T));const b=x.program;n.updateUBOMapping(y,b);const _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){const x=f();y.__bindingPointIndex=x;const v=i.createBuffer(),b=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=s[y.id],v=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let _=0,E=v.length;_<E;_++){const C=v[_];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)d(C[P],_,P,b);else d(C,_,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,v,b){if(M(y,x,v,b)===!0){const _=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){const F=E[P],z=p(F);m(F,y.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,x,v){typeof y=="number"||typeof y=="boolean"?x[0]=y:y.isMatrix3?(x[0]=y.elements[0],x[1]=y.elements[1],x[2]=y.elements[2],x[3]=0,x[4]=y.elements[3],x[5]=y.elements[4],x[6]=y.elements[5],x[7]=0,x[8]=y.elements[6],x[9]=y.elements[7],x[10]=y.elements[8],x[11]=0):ArrayBuffer.isView(y)?x.set(new y.constructor(y.buffer,y.byteOffset,x.length)):y.toArray(x,v)}function M(y,x,v,b){const _=y.value,E=x+"_"+v;if(b[E]===void 0)return typeof _=="number"||typeof _=="boolean"?b[E]=_:ArrayBuffer.isView(_)?b[E]=_.slice():b[E]=_.clone(),!0;{const C=b[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return b[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const b=16;for(let E=0,C=x.length;E<C;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let F=0,z=P.length;F<z;F++){const D=P[F],O=Array.isArray(D.value)?D.value:[D.value];for(let q=0,k=O.length;q<k;q++){const ne=O[q],X=p(ne),$=v%b,j=$%X.boundary,Te=$+j;v+=j,Te!==0&&b-Te<X.storage&&(v+=b-Te),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=X.storage}}}const _=v%b;return _>0&&(v+=b-_),y.__size=v,y.__cache={},this}function p(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",y),x}function T(y){const x=y.target;x.removeEventListener("dispose",T);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function w(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function nx(){return En===null&&(En=new Zh(tx,16,16,wi,Fn),En.name="DFG_LUT",En.minFilter=qt,En.magFilter=qt,En.wrapS=Kn,En.wrapT=Kn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class ix{constructor(e={}){const{canvas:t=Dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=d,g=new Set([dl,ul,hl]),p=new Set([nn,Nn,Gs,Hs,ol,ll]),T=new Uint32Array(4),w=new Int32Array(4),y=new L;let x=null,v=null;const b=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,F=null,z=null,D=null,O=null;this._outputColorSpace=Jt;let q=0,k=0,ne=null,X=-1,$=null;const j=new At,Te=new At;let Ae=null;const at=new Ge(0);let je=0,st=t.width,J=t.height,ee=1,_e=null,Oe=null;const Se=new At(0,0,st,J),Be=new At(0,0,st,J);let ht=!1;const te=new xl;let se=!1,re=!1;const oe=new pt,he=new L,Ue=new At,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ke(){return ne===null?ee:1}let I=n;function ot(A,U){return t.getContext(A,U)}let et,R,S,B,H,Y,le,ce,K,Q,ue,Pe,me,de,Le,Ne,Xe,N,fe,Z,pe,Me,ie;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",hn,!1),I===null){const U="webgl2";if(I=ot(U,A),I===null)throw ot(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(A){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),it("WebGLRenderer: "+A.message),A}function Ie(){et=new ng(I),et.init(),pe=new Y_(I,et),R=new q0(I,et,e,pe),S=new X_(I,et),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),z=I.createFramebuffer(),D=I.createFramebuffer(),O=I.createFramebuffer(),B=new rg(I),H=new L_,Y=new q_(I,et,S,H,R,pe,B),le=new tg(C),ce=new op(I),Me=new W0(I,ce),K=new ig(I,ce,B,Me),Q=new og(I,K,ce,Me,B),N=new ag(I,R,Y),Le=new Y0(H),ue=new P_(C,le,et,R,Me,Le),Pe=new j_(C,H),me=new D_,de=new z_(et),Xe=new k0(C,le,S,Q,m,l),Ne=new W_(C,Q,R),ie=new ex(I,B,R,S),fe=new X0(I,et,B),Z=new sg(I,et,B),B.programs=ue.programs,C.capabilities=R,C.extensions=et,C.properties=H,C.renderLists=me,C.shadowMap=Ne,C.state=S,C.info=B}M!==nn&&(E=new cg(M,t.width,t.height,o,s,r));const Ce=new $_(C,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(st,J,!1))},this.getSize=function(A){return A.set(st,J)},this.setSize=function(A,U,W=!0){if(Ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,J=U,t.width=Math.floor(A*ee),t.height=Math.floor(U*ee),W===!0&&(t.style.width=A+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(st*ee,J*ee).floor()},this.setDrawingBufferSize=function(A,U,W){st=A,J=U,ee=W,t.width=Math.floor(A*W),t.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(M===nn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,U,W,V){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,U,W,V),S.viewport(j.copy(Se).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,U,W,V){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,U,W,V),S.scissor(Te.copy(Be).multiplyScalar(ee).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){S.setScissorTest(ht=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Oe=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,W=!0){let V=0;if(A){let G=!1;if(ne!==null){const ve=ne.texture.format;G=g.has(ve)}if(G){const ve=ne.texture.type,be=p.has(ve),xe=Xe.getClearColor(),Ee=Xe.getClearAlpha(),Re=xe.r,Je=xe.g,tt=xe.b;be?(T[0]=Re,T[1]=Je,T[2]=tt,T[3]=Ee,I.clearBufferuiv(I.COLOR,0,T)):(w[0]=Re,w[1]=Je,w[2]=tt,w[3]=Ee,I.clearBufferiv(I.COLOR,0,w))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),Xe.dispose(),me.dispose(),de.dispose(),H.dispose(),le.dispose(),Q.dispose(),Me.dispose(),ie.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Dl),Ce.removeEventListener("sessionend",Ul),pi.stop()};function gt(A){A.preventDefault(),jl("WebGLRenderer: Context Lost."),P=!0}function lt(){jl("WebGLRenderer: Context Restored."),P=!1;const A=B.autoReset,U=Ne.enabled,W=Ne.autoUpdate,V=Ne.needsUpdate,G=Ne.type;Ie(),B.autoReset=A,Ne.enabled=U,Ne.autoUpdate=W,Ne.needsUpdate=V,Ne.type=G}function hn(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yn(A){const U=A.target;U.removeEventListener("dispose",yn),Cu(U)}function Cu(A){Ru(A),H.remove(A)}function Ru(A){const U=H.get(A).programs;U!==void 0&&(U.forEach(function(W){ue.releaseProgram(W)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,V,G,ve){U===null&&(U=De);const be=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=Iu(A,U,W,V,G);S.setMaterial(V,be);let Ee=W.index,Re=1;if(V.wireframe===!0){if(Ee=K.getWireframeAttribute(W),Ee===void 0)return;Re=2}const Je=W.drawRange,tt=W.attributes.position;let we=Je.start*Re,ct=(Je.start+Je.count)*Re;ve!==null&&(we=Math.max(we,ve.start*Re),ct=Math.min(ct,(ve.start+ve.count)*Re)),Ee!==null?(we=Math.max(we,0),ct=Math.min(ct,Ee.count)):tt!=null&&(we=Math.max(we,0),ct=Math.min(ct,tt.count));const Rt=ct-we;if(Rt<0||Rt===1/0)return;Me.setup(G,V,xe,W,Ee);let Mt,mt=fe;if(Ee!==null&&(Mt=ce.get(Ee),mt=Z,mt.setIndex(Mt)),G.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*ke()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(G.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),S.setLineWidth(Vt*ke()),G.isLineSegments?mt.setMode(I.LINES):G.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else G.isPoints?mt.setMode(I.POINTS):G.isSprite&&mt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(et.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,ye=G._multiDrawCounts,Yt=G._multiDrawCount,rt=Ee?ce.get(Ee).bytesPerElement:1,an=H.get(V).currentProgram.getUniforms();for(let bn=0;bn<Yt;bn++)an.setValue(I,"_gl_DrawID",bn),mt.render(Vt[bn]/rt,ye[bn])}else if(G.isInstancedMesh)mt.renderInstances(we,Rt,G.count);else if(W.isInstancedBufferGeometry){const Vt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Vt);mt.renderInstances(we,Rt,ye)}else mt.render(we,Rt)};function Il(A,U,W,V){F!==null&&A.isNodeMaterial&&F.setObject(V,A),se===!0&&Le.setState(A,W,!1),A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,ir(A,U,V),A.side=Ai,A.needsUpdate=!0,ir(A,U,V),A.side=tn):ir(A,U,V)}this.compile=function(A,U,W=null){W===null&&(W=A),F!==null&&F.renderStart(A,U,W),v=de.get(W),v.init(U),_.push(v),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights(),F!==null&&F.updateLights(v.state.lightsArray),re=this.localClippingEnabled,se=Le.init(this.clippingPlanes,re),se===!0&&Le.setGlobalState(this.clippingPlanes,U),F!==null&&Ne.render(v.state.shadowsArray,W,U);const V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const xe=ve[be];Il(xe,W,U,G),V.add(xe)}else Il(ve,W,U,G),V.add(ve)}),v=_.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(A,U,W=null){const V=this.compile(A,U,W);return new Promise(G=>{function ve(){if(V.forEach(function(be){const Ee=H.get(be).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(be)}),V.size===0){G(A);return}setTimeout(ve,10)}et.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ha=null;function Pu(A){ha&&ha(A)}function Dl(){pi.stop()}function Ul(){pi.start()}const pi=new fu;pi.setAnimationLoop(Pu),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){ha=A,Ce.setAnimationLoop(A),A===null?pi.stop():pi.start()},Ce.addEventListener("sessionstart",Dl),Ce.addEventListener("sessionend",Ul),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(A,U);const W=Ce.enabled===!0&&Ce.isPresenting===!0,V=E!==null&&(ne===null||W)&&E.begin(C,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,U,ne),v=de.get(A,_.length),v.init(U),v.state.textureUnits=Y.getTextureUnits(),_.push(v),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(oe,In,U.reversedDepth),re=this.localClippingEnabled,se=Le.init(this.clippingPlanes,re),x=me.get(A,b.length),x.init(),b.push(x),Ce.enabled===!0&&Ce.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&ua(be,U,-1/0,C.sortObjects)}ua(A,U,0,C.sortObjects),x.finish(),F!==null&&F.updateLights(v.state.lightsArray),C.sortObjects===!0&&x.sort(_e,Oe),ze=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ze&&Xe.addToRenderList(x,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Le.beginShadows();const G=v.state.shadowsArray;if(Ne.render(G,A,U),se===!0&&Le.endShadows(),(V&&E.hasRenderPass())===!1){const be=x.opaque,xe=x.transmissive;if(v.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(xe.length>0)for(let Re=0,Je=Ee.length;Re<Je;Re++){const tt=Ee[Re];Fl(be,xe,A,tt)}ze&&Xe.render(A);for(let Re=0,Je=Ee.length;Re<Je;Re++){const tt=Ee[Re];Nl(x,A,tt,tt.viewport)}}else xe.length>0&&Fl(be,xe,A,U),ze&&Xe.render(A),Nl(x,A,U)}ne!==null&&k===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),V&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,U),Me.resetDefaultState(),X=-1,$=null,_.pop(),_.length>0?(v=_[_.length-1],Y.setTextureUnits(v.state.textureUnits),se===!0&&Le.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?x=b[b.length-1]:x=null,F!==null&&F.renderEnd()};function ua(A,U,W,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(te)){V&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const be=Q.update(A),xe=A.material;xe.visible&&x.push(A,be,xe,W,Ue.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(te))){const be=Q.update(A),xe=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(xe)){const Ee=be.groups;for(let Re=0,Je=Ee.length;Re<Je;Re++){const tt=Ee[Re],we=xe[tt.materialIndex];we&&we.visible&&x.push(A,be,we,W,Ue.z,tt,U)}}else xe.visible&&x.push(A,be,xe,W,Ue.z,null,U)}}const ve=A.children;for(let be=0,xe=ve.length;be<xe;be++)ua(ve[be],U,W,V)}function Nl(A,U,W,V){const{opaque:G,transmissive:ve,transparent:be}=A;v.setupLightsView(W),se===!0&&Le.setGlobalState(C.clippingPlanes,W),V&&S.viewport(j.copy(V)),G.length>0&&nr(G,U,W),ve.length>0&&nr(ve,U,W),be.length>0&&nr(be,U,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Fl(A,U,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[V.id]===void 0){const we=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[V.id]=new vn(1,1,{generateMipmaps:!0,type:we?Fn:nn,minFilter:Mi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ve=v.state.transmissionRenderTarget[V.id],be=V.viewport||j;ve.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(at),je=C.getClearAlpha(),je<1&&C.setClearColor(16777215,.5),C.clear(),ze&&Xe.render(W);const Je=C.toneMapping;C.toneMapping=Un;const tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),v.setupLightsView(V),se===!0&&Le.setGlobalState(C.clippingPlanes,V),nr(A,W,V),Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve),et.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ct=0,Rt=U.length;ct<Rt;ct++){const Mt=U[ct],{object:mt,geometry:Vt,material:ye,group:Yt}=Mt;if(ye.side===tn&&mt.layers.test(V.layers)){const rt=ye.side;ye.side=Zt,ye.needsUpdate=!0,Ol(mt,W,V,Vt,ye,Yt),ye.side=rt,ye.needsUpdate=!0,we=!0}}we===!0&&(Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve))}C.setRenderTarget(xe,Ee,Re),C.setClearColor(at,je),tt!==void 0&&(V.viewport=tt),C.toneMapping=Je}function nr(A,U,W){const V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ve=A.length;G<ve;G++){const be=A[G],{object:xe,geometry:Ee,group:Re}=be;let Je=be.material;Je.allowOverride===!0&&V!==null&&(Je=V),xe.layers.test(W.layers)&&Ol(xe,U,W,Ee,Je,Re)}}function Ol(A,U,W,V,G,ve){F!==null&&G.isNodeMaterial&&F.setObject(A,G),A.onBeforeRender(C,U,W,V,G,ve),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,U,W,V,A,ve),G.transparent===!0&&G.side===tn&&G.forceSinglePass===!1?(G.side=Zt,G.needsUpdate=!0,C.renderBufferDirect(W,U,V,G,A,ve),G.side=Ai,G.needsUpdate=!0,C.renderBufferDirect(W,U,V,G,A,ve),G.side=tn):C.renderBufferDirect(W,U,V,G,A,ve),A.onAfterRender(C,U,W,V,G,ve)}function ir(A,U,W){U.isScene!==!0&&(U=De);const V=H.get(A),G=v.state.lights,ve=v.state.shadowsArray,be=G.state.version,xe=ue.getParameters(A,G.state,ve,U,W,v.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(xe);let Re=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=le.get(A.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",yn),Re=new Map,V.programs=Re);let tt=Re.get(Ee);if(tt!==void 0){if(V.currentProgram===tt&&V.lightsStateVersion===be)return zl(A,xe),tt}else xe.uniforms=ue.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,W,xe),A.onBeforeCompile(xe,C),tt=ue.acquireProgram(xe,Ee),Re.set(Ee,tt),V.uniforms=xe.uniforms;const we=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=Le.uniform),zl(A,xe),V.needsLights=Uu(A),V.lightsStateVersion=be,V.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.sunLights.value=G.state.sun,we.sunLightShadows.value=G.state.sunShadow,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.sunShadowMatrix.value=G.state.sunShadowMatrix,we.sunShadowCascade.value=G.state.sunShadowCascade,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=v.state.lightProbeGridArray.length>0,V.currentProgram=tt,V.uniformsList=null,tt}function Bl(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Fr.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function zl(A,U){const W=H.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Lu(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let W=0,V=A.length;W<V;W++){const G=A[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Iu(A,U,W,V,G){U.isScene!==!0&&(U=De),Y.resetTextureUnits();const ve=U.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,xe=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=le.get(V.envMap||be,Ee),Je=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,tt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let Mt=Un;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Vt=mt!==void 0?mt.length:0,ye=H.get(V),Yt=v.state.lights;if(se===!0&&(re===!0||A!==$)){const _t=A===$&&V.id===X;Le.setState(V,A,_t)}let rt=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Yt.state.version||ye.outputColorSpace!==xe||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Re||V.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Le.numPlanes||ye.numIntersection!==Le.numIntersection)||ye.vertexAlphas!==Je||ye.vertexTangents!==tt||ye.morphTargets!==we||ye.morphNormals!==ct||ye.morphColors!==Rt||ye.toneMapping!==Mt||ye.morphTargetsCount!==Vt||!!ye.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,ye.__version=V.version);let an=ye.currentProgram;rt===!0&&(an=ir(V,U,G),F&&V.isNodeMaterial&&F.onUpdateProgram(V,an,ye));let bn=!1,ti=!1,Li=!1;const dt=an.getUniforms(),wt=ye.uniforms;if(S.useProgram(an.program)&&(bn=!0,ti=!0,Li=!0),V.id!==X&&(X=V.id,ti=!0),ye.needsLights){const _t=Lu(v.state.lightProbeGridArray,G);ye.lightProbeGrid!==_t&&(ye.lightProbeGrid=_t,ti=!0)}if(bn||$!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",A.projectionMatrix),dt.setValue(I,"viewMatrix",A.matrixWorldInverse);const ii=dt.map.cameraPosition;ii!==void 0&&ii.setValue(I,he.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,ti=!0,Li=!0)}if(ye.needsLights&&(Yt.state.sunShadowMap.length>0&&dt.setValue(I,"sunShadowMap",Yt.state.sunShadowMap,Y),Yt.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",Yt.state.directionalShadowMap,Y),Yt.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",Yt.state.spotShadowMap,Y),Yt.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",Yt.state.pointShadowMap,Y)),G.isSkinnedMesh){dt.setOptional(I,G,"bindMatrix"),dt.setOptional(I,G,"bindMatrixInverse");const _t=G.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),dt.setValue(I,"boneTexture",_t.boneTexture,Y))}G.isBatchedMesh&&(dt.setOptional(I,G,"batchingTexture"),dt.setValue(I,"batchingTexture",G._matricesTexture,Y),dt.setOptional(I,G,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",G._indirectTexture,Y),dt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",G._colorsTexture,Y));const ni=W.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&N.update(G,W,an),(ti||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,dt.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(wt.envMapIntensity.value=U.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=nx()),ti){if(dt.setValue(I,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&Du(wt,Li),ve&&V.fog===!0&&Pe.refreshFogUniforms(wt,ve),Pe.refreshMaterialUniforms(wt,V,ee,J,v.state.transmissionRenderTarget[A.id]),ye.needsLights&&ye.lightProbeGrid){const _t=ye.lightProbeGrid;wt.probesSH.value=_t.texture,wt.probesMin.value.copy(_t.boundingBox.min),wt.probesMax.value.copy(_t.boundingBox.max),wt.probesResolution.value.copy(_t.resolution)}Fr.upload(I,Bl(ye),wt,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fr.upload(I,Bl(ye),wt,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(I,"center",G.center),dt.setValue(I,"modelViewMatrix",G.modelViewMatrix),dt.setValue(I,"normalMatrix",G.normalMatrix),dt.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const _t=V.uniformsGroups;for(let ii=0,Ii=_t.length;ii<Ii;ii++){const Gl=_t[ii];ie.update(Gl,an),ie.bind(Gl,an)}}return an}function Du(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Uu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,U,W){const V=H.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(A.texture).__webglTexture=U,H.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const W=H.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){ne=A,q=U,k=W;let V=null,G=!1,ve=!1;if(A){const xe=H.get(A);if(xe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),j.copy(A.viewport),Te.copy(A.scissor),Ae=A.scissorTest,S.viewport(j),S.scissor(Te),S.setScissorTest(Ae),X=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(A);else if(xe.__hasExternalTextures)Y.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(xe.__boundDepthTexture!==Je){if(Je!==null&&H.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Re=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?V=Re[U][W]:V=Re[U],G=!0):A.samples>0&&Y.useMultisampledRTT(A)===!1?V=H.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[W]:V=Re,j.copy(A.viewport),Te.copy(A.scissor),Ae=A.scissorTest}else j.copy(Se).multiplyScalar(ee).floor(),Te.copy(Be).multiplyScalar(ee).floor(),Ae=ht;if(W!==0&&(V=z),S.bindFramebuffer(I.FRAMEBUFFER,V)&&S.drawBuffers(A,V),S.viewport(j),S.scissor(Te),S.setScissorTest(Ae),G){const xe=H.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,W)}else if(ve){const xe=U;for(let Ee=0;Ee<A.textures.length;Ee++){const Re=H.get(A.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,W,xe)}}else if(A!==null&&W!==0){const xe=H.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,W)}X=-1};function Vl(A){const U=H.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=R.textureFormatReadable(A.format),U.__typeReadable=R.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,W,V,G,ve,be,xe=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){S.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Re=A.textures[xe],Je=Re.format,tt=Re.type;A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const we=Vl(Re);if(we.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&W>=0&&W<=A.height-G&&I.readPixels(U,W,V,G,pe.convert(Je),pe.convert(tt),ve)}finally{const Re=ne!==null?H.get(ne).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,U,W,V,G,ve,be,xe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee)if(U>=0&&U<=A.width-V&&W>=0&&W<=A.height-G){S.bindFramebuffer(I.FRAMEBUFFER,Ee);const Re=A.textures[xe],Je=Re.format,tt=Re.type;A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const we=Vl(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(U,W,V,G,pe.convert(Je),pe.convert(tt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Rt=ne!==null?H.get(ne).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Rt);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ud(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ct),I.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,W=0){const V=Math.pow(2,-W),G=Math.floor(A.image.width*V),ve=Math.floor(A.image.height*V),be=U!==null?U.x:0,xe=U!==null?U.y:0;Y.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,be,xe,G,ve),S.unbindTexture()},this.copyTextureToTexture=function(A,U,W=null,V=null,G=0,ve=0){let be,xe,Ee,Re,Je,tt,we,ct,Rt;const Mt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(W!==null)be=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,Je=W.min.y,tt=W.isBox3?W.min.z:0;else{const wt=Math.pow(2,-G);be=Math.floor(Mt.width*wt),xe=Math.floor(Mt.height*wt),A.isDataArrayTexture?Ee=Mt.depth:A.isData3DTexture?Ee=Math.floor(Mt.depth*wt):Ee=1,Re=0,Je=0,tt=0}V!==null?(we=V.x,ct=V.y,Rt=V.z):(we=0,ct=0,Rt=0);const mt=pe.convert(U.format),Vt=pe.convert(U.type);let ye;U.isData3DTexture?(Y.setTexture3D(U,0),ye=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),ye=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),ye=I.TEXTURE_2D),S.activeTexture(I.TEXTURE0),S.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),S.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),S.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=S.getParameter(I.UNPACK_ROW_LENGTH),rt=S.getParameter(I.UNPACK_IMAGE_HEIGHT),an=S.getParameter(I.UNPACK_SKIP_PIXELS),bn=S.getParameter(I.UNPACK_SKIP_ROWS),ti=S.getParameter(I.UNPACK_SKIP_IMAGES);S.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),S.pixelStorei(I.UNPACK_SKIP_ROWS,Je),S.pixelStorei(I.UNPACK_SKIP_IMAGES,tt);const Li=A.isDataArrayTexture||A.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const wt=H.get(A),ni=H.get(U),_t=H.get(wt.__renderTarget),ii=H.get(ni.__renderTarget);S.bindFramebuffer(I.READ_FRAMEBUFFER,_t.__webglFramebuffer),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Ii=0;Ii<Ee;Ii++)Li&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(A).__webglTexture,G,tt+Ii),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(U).__webglTexture,ve,Rt+Ii)),I.blitFramebuffer(Re,Je,be,xe,we,ct,be,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||H.has(A)){const wt=H.get(A),ni=H.get(U);S.bindFramebuffer(I.READ_FRAMEBUFFER,D),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let _t=0;_t<Ee;_t++)Li?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,G,tt+_t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,G),dt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ni.__webglTexture,ve,Rt+_t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ni.__webglTexture,ve),G!==0?I.blitFramebuffer(Re,Je,be,xe,we,ct,be,xe,I.COLOR_BUFFER_BIT,I.NEAREST):dt?I.copyTexSubImage3D(ye,ve,we,ct,Rt+_t,Re,Je,be,xe):I.copyTexSubImage2D(ye,ve,we,ct,Re,Je,be,xe);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ye,ve,we,ct,Rt,be,xe,Ee,mt,Vt,Mt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ve,we,ct,Rt,be,xe,Ee,mt,Mt.data):I.texSubImage3D(ye,ve,we,ct,Rt,be,xe,Ee,mt,Vt,Mt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,we,ct,be,xe,mt,Vt,Mt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,we,ct,Mt.width,Mt.height,mt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,ve,we,ct,be,xe,mt,Vt,Mt);S.pixelStorei(I.UNPACK_ROW_LENGTH,Yt),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),S.pixelStorei(I.UNPACK_SKIP_PIXELS,an),S.pixelStorei(I.UNPACK_SKIP_ROWS,bn),S.pixelStorei(I.UNPACK_SKIP_IMAGES,ti),ve===0&&U.generateMipmaps&&I.generateMipmap(ye),S.unbindTexture()},this.initRenderTarget=function(A){H.get(A).__webglFramebuffer===void 0&&Y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Y.setTextureCube(A,0):A.isData3DTexture?Y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Y.setTexture2DArray(A,0):Y.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){q=0,k=0,ne=null,S.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class sx extends qo{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ei;e.deleteAttribute("uv");const t=new yi({side:Zt}),n=new yi,s=new ep(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new rf(e,n,6),o=new It;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new $e(e,Ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new $e(e,Ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new $e(e,Ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new $e(e,Ki(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new $e(e,Ki(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new $e(e,Ki(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ki(i){return new qf({color:0,emissive:16777215,emissiveIntensity:i})}function rx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new vt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=ah(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let M=0;M<a[h].length;++M)d.push(a[h][M][u]);const m=ah(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function ah(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Mn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){const M=h.getComponent(u,m);o.setComponent(u+f,m,M)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function wl(i){const e=new xn,t=(u,d=.32,m=0)=>new Tn({color:u,roughness:d,metalness:m,clearcoat:.7,clearcoatRoughness:.16}),n=t(i),s=t("#c6a05b",.22,.8),r=t("#fff3df",.35),a=t("#392b32",.4),o=(u,d=n,m=0,M=0,g=0)=>{const p=new $e(u,d);return p.position.set(m,M,g),p.castShadow=!0,p.receiveShadow=!0,e.add(p),p};return{group:e,material:t,primary:n,gold:s,white:r,dark:a,add:o,orb:(u,d,m,M,g=n,p=[1,1,1])=>{const T=o(new fi(M,24,16),g,u,d,m);return T.scale.set(...p),T},extrude:(u,d=.16,m=n,M=.045)=>o(new Zs(u,{depth:d,bevelEnabled:!0,bevelSize:M,bevelThickness:M,bevelSegments:3,curveSegments:24,steps:1}),m,0,0,M),tube:(u,d=.035,m=s)=>o(new aa(new yl(u),32,d,8,!1),m),polygon:u=>{const d=new Tt;for(const[m,M]of u.entries())m?d.lineTo(M[0],M[1]):d.moveTo(M[0],M[1]);return d.closePath(),d}}}const ax=new Set(["gem","heartGem","emerald","pearl","pearlCluster","star","moon","crown","butterfly","shell","leaf","planet"]),qe=(i,e,t)=>new L(i,e,t);function ox(i,e){let t=0;for(let c=0;c<i.length;c++){const h=i[c],f=i[(c+1)%i.length];t+=h[0]*f[1]-f[0]*h[1]}t<0&&(i=[...i].reverse());const n=[],s=[],r=(c,h,f)=>{for(const u of[c,h,f])n.push(u.x,u.y,u.z),s.push(u.x*.5+.5,u.y*.5+.5)},a=(c,h)=>qe(i[c%i.length][0]*h[0],i[c%i.length][1]*h[0],h[1]);for(let c=0;c<e.length-1;c++)for(let h=0;h<i.length;h++){const f=a(h,e[c]),u=a(h+1,e[c]),d=a(h,e[c+1]),m=a(h+1,e[c+1]);r(f,u,d),r(u,m,d)}const o=e[e.length-1];for(let c=0;c<i.length;c++)r(qe(0,0,o[1]),a(c,o),a(c+1,o));const l=new vt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.computeVertexNormals(),l}function oh(i,e=28,t=12){const n=[],s=[],r=[];for(let o=0;o<=t;o++)for(let l=0;l<=e;l++){const c=i(l/e,o/t);n.push(c.x,c.y,c.z),s.push(l/e,o/t)}for(let o=0;o<t;o++)for(let l=0;l<e;l++){const c=o*(e+1)+l,h=c+e+1;r.push(c,c+1,h,c+1,h+1,h)}const a=new vt;return a.setAttribute("position",new He(n,3)),a.setAttribute("uv",new He(s,2)),a.setIndex(r),a.computeVertexNormals(),a}function lx(i,e){if(!ax.has(i))return null;const{group:t,material:n,primary:s,gold:r,white:a,add:o,orb:l,extrude:c,tube:h,polygon:f}=wl(e),u=new fi(1,10,7);let d=!1;const m=(x,v,b,_,E=r)=>{d=!0;const C=o(u,E,x,v,b);return C.scale.setScalar(_),C},M=(x=16,v=.78,b=1)=>Array.from({length:x},(_,E)=>{const C=E/x*Math.PI*2;return[Math.cos(C)*v,Math.sin(C)*b]}),g=(x=1)=>f(Array.from({length:10},(v,b)=>{const _=Math.PI/2+b*Math.PI/5,E=b%2?x*.43:x;return[Math.cos(_)*E,Math.sin(_)*E]})),p=new Tn({color:e,roughness:.085,metalness:.12,clearcoat:1,clearcoatRoughness:.045,ior:1.78,reflectivity:.92,envMapIntensity:1.7,iridescence:.12});let T=!1;const w=(x,v,b=0,_=0,E=0,C=1)=>{T=!0;const P=o(ox(x,v),p,b,_,E);return P.scale.setScalar(C),P},y=(x,v=!1)=>{const b=new Tt;x.forEach((E,C)=>C?b.lineTo(E[0],E[1]):b.moveTo(E[0],E[1])),b.closePath(),c(b,.11,r,.035).scale.set(1.055,1.055,1),w(x,v?[[.88,.12],[1,.2],[.88,.28],[.72,.36],[.59,.43]]:[[.24,.04],[1,.16],[.94,.235],[.58,.46]]);for(let E=0;E<x.length;E++){const C=x[E];m(C[0]*1.055,C[1]*1.055,.19,.044)}for(const E of[0,Math.floor(x.length/4),Math.floor(x.length/2),Math.floor(x.length*3/4)]){const C=x[E];h([qe(C[0]*1.04,C[1]*1.04,.1),qe(C[0]*1.02,C[1]*1.02,.26),qe(C[0]*.86,C[1]*.86,.31)],.04,r)}};if(i==="gem")y(M(20,.78,1));else if(i==="heartGem"){const x=new Tt;x.moveTo(0,-1),x.bezierCurveTo(-.25,-.74,-1,.06,-.91,.57),x.bezierCurveTo(-.82,1.15,-.18,1.1,0,.58),x.bezierCurveTo(.18,1.1,.82,1.15,.91,.57),x.bezierCurveTo(1,.06,.25,-.74,0,-1);const v=x.getSpacedPoints(28);v.pop(),y(v.map(b=>[b.x,b.y]))}else if(i==="emerald"){y([[-.63,-1],[.63,-1],[.86,-.77],[.86,.77],[.63,1],[-.63,1],[-.86,.77],[-.86,-.77]],!0);for(const x of[-1,1]){const v=o(new ei(.075,1.23,.055),r,x*.96,0,.17);v.rotation.z=x*.018}}else if(i==="pearl"||i==="pearlCluster"){const x=new Tn({color:e,roughness:.18,metalness:.08,clearcoat:1,clearcoatRoughness:.11,iridescence:.68,iridescenceIOR:1.36,envMapIntensity:1.4}),v=(b,_,E,C)=>{const P=o(new Ci(E*.76,.035,8,28),r,b,_,.09);P.scale.z=.68;const F=o(new fi(E,20,14),x,b,_,C);F.scale.z=.84};if(i==="pearl")v(0,0,.72,.62);else{for(let b=0;b<5;b++){const _=b/5*Math.PI*2;v(Math.cos(_)*.53,Math.sin(_)*.53,.35,.35)}v(0,0,.42,.5);for(let b=0;b<5;b++){const _=(b+.5)/5*Math.PI*2;m(Math.cos(_)*.79,Math.sin(_)*.79,.22,.065)}}}else if(i==="star"){const x=c(g(),.12,r,.055);x.position.z=.02;const v=c(g(.82),.09,s,.04);v.position.z=.13;for(let b=0;b<5;b++){const _=Math.PI/2+b*Math.PI*2/5;h([qe(Math.cos(_)*.18,Math.sin(_)*.18,.32),qe(Math.cos(_)*.48,Math.sin(_)*.48,.3),qe(Math.cos(_)*.76,Math.sin(_)*.76,.28)],.018,r)}w(M(10),[[1,.02],[.56,.19]],0,0,.25,.19)}else if(i==="moon"){const x=new Tt;x.moveTo(.48,.98),x.bezierCurveTo(-.59,1.28,-1.14,.38,-.83,-.43),x.bezierCurveTo(-.53,-1.23,.43,-1.28,.88,-.57),x.bezierCurveTo(.2,-.96,-.47,-.46,-.42,.18),x.bezierCurveTo(-.39,.66,-.03,.89,.48,.98),x.closePath(),c(x,.13,r,.055);const v=c(x,.075,s,.035);v.scale.set(.89,.89,1),v.position.z=.15;for(const[b,_,E]of[[.45,.48,.19],[.77,.1,.12],[.12,-.17,.09]])c(g(E),.05,r,.018).position.set(b,_,.16);for(let b=0;b<7;b++){const _=Math.PI*.6+b*Math.PI*.13;m(Math.cos(_)*.7,Math.sin(_)*.85,.31,.036,a)}}else if(i==="crown"){for(const v of[-.47,-.28])h([qe(-1,v+.08,.1),qe(-.55,v-.04,.22),qe(0,v-.1,.29),qe(.55,v-.04,.22),qe(1,v+.08,.1)],.065,r);const x=[[-.9,.23],[-.48,.56],[0,.91],[.48,.56],[.9,.23]];for(const[v,b]of x)h([qe(v*.9,-.38,.18),qe(v*1.2,(b-.35)/2,.14),qe(v,b,.21)],.054,r),m(v,b,.24,.11,a),v!==0&&h([qe(v,b-.03,.2),qe(v*.6,b-.23,.28),qe(0,-.36,.3)],.03,r);w(M(12,.7,1),[[1,.02],[.62,.22]],0,.38,.31,.28);for(const v of[-.67,-.33,.33,.67])m(v,-.35,.32,.07,p);T=!0}else if(i==="butterfly"){s.sheen=.7,s.sheenColor=new Ge("#fff1d6"),s.sheenRoughness=.45;const x=n(`#${new Ge(e).lerp(new Ge("#fff2e3"),.45).getHexString()}`,.25),v=(b,_)=>.14+.22*Math.abs(b)+.06*_*_;for(const b of[-1,1]){const _=new Tt;_.moveTo(0,.04),_.bezierCurveTo(b*.27,.59,b*1.02,1.13,b*1.04,.62),_.bezierCurveTo(b*1.06,.12,b*.49,-.08,0,.04),_.closePath();const E=new Tt;E.moveTo(0,-.04),E.bezierCurveTo(b*.5,-.02,b*.91,-.39,b*.58,-.83),E.bezierCurveTo(b*.3,-1,b*.02,-.45,0,-.04),E.closePath();for(const[C,P]of[[_,s],[E,x]]){const F=c(C,.035,P,.025),z=F.geometry.getAttribute("position");for(let O=0;O<z.count;O++)z.setZ(O,z.getZ(O)+v(z.getX(O),z.getY(O)));z.needsUpdate=!0,F.geometry.computeVertexNormals();const D=C.getSpacedPoints(42).map(O=>qe(O.x,O.y,v(O.x,O.y)+.095));h(D,.022,r)}for(const[C,P]of[[.72,.62],[.78,.31],[.47,-.43]])h([qe(b*.08,0,.26),qe(b*C*.55,P*.55,.31),qe(b*C,P,v(C,P)+.11)],.016,r),m(b*C,P,v(C,P)+.13,.055,a);h([qe(b*.035,.18,.31),qe(b*.11,.58,.35),qe(b*.24,.65,.34)],.027,r),m(b*.24,.65,.35,.052,r)}l(0,-.05,.3,.18,r,[.48,2,.65]),l(0,.27,.32,.115,r)}else if(i==="shell"){s.iridescence=.5,s.iridescenceIOR=1.34,s.roughness=.23,s.side=tn;const x=(b,_)=>{const E=Math.PI*(.14+.72*b),C=.16+_*(1.55+.045*Math.cos(b*Math.PI*20));return qe(Math.cos(E)*C,-.77+Math.sin(E)*C,.13+.2*Math.sin(_*Math.PI)+.037*Math.cos(b*Math.PI*20)*_)};o(oh(x,60,16)),h(Array.from({length:57},(b,_)=>x(_/56,1).add(qe(0,0,.025))),.035,r);for(let b=0;b<11;b++){const _=b/10;h(Array.from({length:14},(E,C)=>x(_,C/13).add(qe(0,0,.02))),.014,r)}const v=l(0,-.7,.2,.25,a,[1,.6,.55]);v.rotation.z=.05,h([qe(-.4,-.56,.18),qe(0,-.85,.14),qe(.4,-.56,.18)],.045,r)}else if(i==="leaf"){s.side=tn,s.roughness=.24;const x=(v,b)=>{const _=-1+v*2,E=Math.pow(Math.sin(v*Math.PI),.85)*.62,C=(b*2-1)*E;return qe(C+.12*Math.sin(v*Math.PI),_,.14+.17*Math.sin(v*Math.PI)+.08*(1-Math.abs(b*2-1)))};o(oh(x,32,12));for(const v of[0,1])h(Array.from({length:25},(b,_)=>x(_/24,v).add(qe(0,0,.017))),.025,r);h([qe(-.1,-1.17,.13),qe(0,-.6,.29),qe(.12,0,.4),qe(.06,.58,.32),qe(0,1,.23)],.027,r);for(const v of[-1,1])for(let b=1;b<5;b++){const _=.15+b*.145,E=x(_,.5),C=x(Math.min(.94,_+.17),v<0?0:1);h([E.add(qe(0,0,.022)),E.clone().lerp(C,.55).add(qe(0,0,.025)),C.add(qe(0,0,.02))],.015,r)}}else if(i==="planet"){const x=l(0,0,.66,.65,s);x.rotation.z=.28;const v=n(`#${new Ge(e).lerp(new Ge("#fff2e1"),.33).getHexString()}`,.32);for(const C of[.73,1.25,1.8,2.17]){const P=o(new fi(.655,28,3,0,Math.PI*2,C,.095),v,0,0,.66);P.rotation.z=.28}const b=n("#d5b576",.24,.73);b.side=tn;const _=o(new ra(.83,1.14,64),b,0,0,.66);_.rotation.set(.73,.22,-.22),_.castShadow=!0;for(const C of[.83,1.14])o(new Ci(C,.024,7,64),r,0,0,.66).rotation.copy(_.rotation);const E=c(g(.14),.04,r,.017);E.position.set(.93,.81,.2),E.rotation.z=.3}return d||u.dispose(),T||p.dispose(),t}const cx=["cherry","egg","dumpling","donut","strawberry","macaron","onigiri","pudding","eye","bear","heart","lightning","cat","bunny","paw","daisy","rose","tulip"],Wn=Math.PI*2,Fe=(i,e,t)=>new L(i,e,t);function hx(i,e){let t=i.getPoints(64);t[0].distanceTo(t[t.length-1])<1e-6&&(t=t.slice(0,-1));let n=0;for(let f=0;f<t.length;f++){const u=t[f],d=t[(f+1)%t.length];n+=u.x*d.y-d.x*u.y}n<0&&t.reverse();const s=new rp().setFromPoints(t).getCenter(new ae),r=[[0,0],[.91,0],[1,.17],[.95,.52],[.65,.86],[0,1]],a=t.length,o=[],l=[],c=[];for(const[f,u]of r)for(const d of t)o.push(s.x+(d.x-s.x)*f,s.y+(d.y-s.y)*f,u*e),c.push(d.x*.5+.5,d.y*.5+.5);for(let f=0;f<r.length-1;f++)for(let u=0;u<a;u++){const d=(u+1)%a,m=f*a+u,M=f*a+d,g=(f+1)*a+u,p=(f+1)*a+d;l.push(m,M,g,M,p,g)}const h=new vt;return h.setAttribute("position",new He(o,3)),h.setAttribute("uv",new He(c,2)),h.setIndex(l),h.computeVertexNormals(),h}function Or(i,e=14,t=8,n=.025){const s=[],r=[],a=[],o=t+1,l=(e+1)*o,c=i(.501,.5).sub(i(.499,.5)),h=i(.5,.501).sub(i(.5,.499)),f=c.cross(h).z<0;for(let m=0;m<2;m++)for(let M=0;M<=e;M++)for(let g=0;g<=t;g++){const p=i(M/e,g/t);s.push(p.x,p.y,p.z-m*n),r.push(M/e,g/t)}for(let m=0;m<e;m++)for(let M=0;M<t;M++){const g=m*o+M,p=g+o,T=g+1,w=p+1;f?a.push(g,T,p,p,T,w,l+g,l+p,l+T,l+p,l+w,l+T):a.push(g,p,T,p,w,T,l+g,l+T,l+p,l+p,l+T,l+w)}const u=(m,M,g)=>{g?a.push(m,l+m,M,M,l+m,l+M):a.push(m,M,l+m,M,l+M,l+m)};for(let m=0;m<e;m++)for(const M of[0,t])u(m*o+M,(m+1)*o+M,M===0!==f);for(let m=0;m<t;m++)for(const M of[0,e])u(M*o+m,M*o+m+1,M===e!==f);const d=new vt;return d.setAttribute("position",new He(s,3)),d.setAttribute("uv",new He(r,2)),d.setIndex(a),d.computeVertexNormals(),d}function ws(i,e,t=.18){return Or((n,s)=>Fe((s-.5)*e*Math.sin(Math.PI*n),n*i,.045+t*Math.sin(Math.PI*n)+.055*Math.sin(Math.PI*s)*Math.sin(Math.PI*n)),14,8,.023)}function lh(){const i=new Tt;return i.moveTo(0,-.91),i.bezierCurveTo(-.35,-.67,-1,.03,-.9,.56),i.bezierCurveTo(-.78,1.08,-.12,1.04,0,.56),i.bezierCurveTo(.12,1.04,.78,1.08,.9,.56),i.bezierCurveTo(1,.03,.35,-.67,0,-.91),i}function ux(i,e){if(!cx.includes(i))return null;const t=wl(e),{group:n,primary:s,gold:r,white:a,dark:o,add:l,orb:c,extrude:h,polygon:f}=t,u=new Set([s,r,a,o]),d=(w,y=.32,x=0)=>{const v=t.material(w,y,x);return u.add(v),v},m=w=>`#${new Ge(e).multiplyScalar(w).getHexString()}`,M=(w,y,x,v,b=s,_=[1,1,1])=>{const E=l(new fi(v,10,7),b,w,y,x);return E.scale.set(..._),E},g=(w,y=.022,x=o,v=14)=>l(new aa(new yl(w),v,y,5,!1),x),p=(w,y,x=s,v=0,b=0,_=0)=>l(hx(w,y),x,v,b,_);if(i==="cherry"){s.roughness=.13,s.clearcoat=1,s.clearcoatRoughness=.06;const w=d("#486649",.52),y=d(m(.55),.3);c(-.39,-.31,.32,.48,s,[1,.97,.84]),c(.39,-.28,.32,.49,s,[1,.97,.84]),M(-.39,.08,.57,.075,y,[1,.55,.22]),M(.39,.12,.57,.075,y,[1,.55,.22]),g([Fe(-.38,.05,.57),Fe(-.28,.56,.36),Fe(.05,.94,.18)],.039,w),g([Fe(.39,.1,.59),Fe(.39,.58,.35),Fe(.05,.94,.18)],.038,w);const x=l(ws(.55,.4,.13),w,.09,.52,.18);x.rotation.z=-.85,g([Fe(.12,.59,.26),Fe(.31,.76,.29),Fe(.48,.81,.21)],.012,d("#81935e",.65),8)}else if(i==="egg"){const w=d("#c99a64",.7),y=d("#ffe198",.17);s.roughness=.16,s.clearcoat=1;const x=Array.from({length:48},(_,E)=>{const C=E/48*Wn,P=.82+.11*Math.sin(C*3)+.055*Math.cos(C*7);return[Math.cos(C)*P,Math.sin(C)*P*.81]});p(f(x),.13,w).scale.set(1.035,1.035,1);const b=p(f(x),.16,a,0,0,.035);b.receiveShadow=!0,a.roughness=.38,c(.1,.02,.21,.39,s,[1,1,.72]),M(-.01,.16,.48,.075,y,[1.1,.62,.12]);for(let _=0;_<14;_++){const E=_/14*Wn+.12,C=.72+.055*Math.sin(_*2.3);M(Math.cos(E)*C,Math.sin(E)*C*.77,.12,.025,w,[1.4,.7,.25])}}else if(i==="dumpling"){s.roughness=.56,s.clearcoat=.16;const w=d("#ac6a36",.77),y=d("#edd0a0",.63),x=new Tt;x.moveTo(-.94,-.22),x.bezierCurveTo(-1.03,.74,.93,.93,.98,-.18),x.bezierCurveTo(.65,-.55,-.57,-.55,-.94,-.22),p(x,.55);for(let b=0;b<10;b++){const _=.16+b*.3,E=Math.cos(_)*.82,C=Math.sin(_)*.57;g([Fe(E*.74,C*.7,.42),Fe(E,C,.42),Fe(E*.96,C-.12,.26)],.041,y,10)}const v=new Tt;v.moveTo(-.68,-.2),v.bezierCurveTo(-.3,-.1,.3,-.11,.72,-.2),v.bezierCurveTo(.4,-.38,-.35,-.4,-.68,-.2),p(v,.035,w,0,0,.49);for(let b=0;b<9;b++){const _=-.52+b*.13;M(_,-.24+.035*Math.sin(b*2),.53,.025,w,[1,.65,.16])}}else if(i==="donut"){const w=d("#cc914f",.7);w.clearcoat=.08,s.roughness=.22,s.clearcoat=1,l(new Ci(.55,.285,12,48),w,0,0,.09),l(Or((x,v)=>{const b=x*Wn,_=-.08+v*(Math.PI+.16),E=(1-Math.min(1,v/.12))*.075*Math.max(0,Math.sin(b*5)+.42*Math.cos(b*9)),C=.55+.263*Math.cos(_)+E;return Fe(Math.cos(b)*C,Math.sin(b)*C,.12+.277*Math.sin(_))},48,12,.035));const y=[a,d("#ecc766",.32),d("#93b8b0",.32)];for(let x=0;x<27;x++){const v=x*2.39996,b=.4+.28*(x*7%19/18),_=.14+Math.sqrt(Math.max(.001,.277**2-(b-.55)**2)),E=l(new qs(.016,.016,.086,6),y[x%3],Math.cos(v)*b,Math.sin(v)*b,_+.026);E.rotation.z=v+.4*(x%4),E.rotation.x=.08*Math.sin(x)}}else if(i==="strawberry"){s.roughness=.31,s.clearcoat=.9;const w=d("#4e794d",.5),y=new Tt;y.moveTo(0,-.97),y.bezierCurveTo(-.18,-.76,-.91,.04,-.8,.48),y.bezierCurveTo(-.7,.9,-.25,.94,0,.75),y.bezierCurveTo(.25,.94,.7,.9,.8,.48),y.bezierCurveTo(.91,.04,.18,-.76,0,-.97),p(y,.64);for(let x=0;x<6;x++){const v=-.6+x*.235,b=.63*Math.sqrt(Math.max(.1,1-(v/.95)**2));for(let _=0;_<5;_++){const E=(_-2)*.24+(x%2?.09:0);if(Math.abs(E)>b)continue;const C=.08+.57*Math.sqrt(Math.max(.04,1-(E/.88)**2-(v/1.08)**2)),P=M(E,v,C,.025,r,[.62,1.35,.36]);P.rotation.z=.16*Math.sin(x+_)}}for(let x=0;x<5;x++){const v=l(ws(.44,.27,.08),w,0,.62,.22);v.rotation.z=(x-2)*.56}g([Fe(0,.65,.27),Fe(.03,.93,.27),Fe(.12,1,.23)],.036,w,9)}else if(i==="macaron"){s.roughness=.66,s.clearcoat=.14;const w=a;w.roughness=.58,w.clearcoat=.2,c(0,.36,.24,.74,s,[1,.4,.51]),c(0,-.36,.24,.74,s,[1,.4,.51]);const y=l(new vl(.13,1.12,4,16),w,0,-.005,.22);y.rotation.z=Math.PI/2,y.scale.z=.86;const x=d(m(.88),.76);for(let v=0;v<2;v++)for(let b=0;b<24;b++){const _=b/24*Wn;M(Math.cos(_)*.66,(v?-.16:.16)+Math.sin(_)*.055,.29+Math.sin(_)*.13,.039,x,[1,.65,.68])}g(Array.from({length:17},(v,b)=>Fe(-.58+b*.0725,.012+.017*Math.sin(b*2.2),.38+.014*Math.cos(b*1.9))),.035,w,26)}else if(i==="onigiri"){s.roughness=.78,s.clearcoat=.1;const w=d("#263c30",.82),y=d("#fff9e9",.77),x=new Tt;x.moveTo(-.72,-.66),x.quadraticCurveTo(-1,-.62,-.87,-.29),x.lineTo(-.18,.83),x.quadraticCurveTo(0,1.09,.19,.83),x.lineTo(.88,-.29),x.quadraticCurveTo(1,-.62,.72,-.66),x.closePath(),p(x,.51);const v=new Tt;v.moveTo(-.3,-.67),v.lineTo(-.29,.04),v.quadraticCurveTo(0,.15,.29,.04),v.lineTo(.3,-.67),v.closePath(),p(v,.09,w,0,0,.39);for(let _=0;_<25;_++){const E=_*2.39996,C=.28+.38*(_*11%23/22),P=Math.cos(E)*C,F=Math.sin(E)*C+.03;if(F<.04&&Math.abs(P)<.31)continue;const z=M(P,F,.48-.07*C,.039,y,[.6,1.3,.3]);z.rotation.z=E}const b=d("#3a4b36",.84);for(let _=0;_<5;_++)g([Fe(-.22+_*.11,-.58,.487),Fe(-.21+_*.11,-.26,.493),Fe(-.22+_*.11,-.02,.49)],.006,b,5)}else if(i==="pudding"){s.roughness=.26,s.clearcoat=.8;const w=d("#9c5430",.21),y=d("#ba3c4e",.14),x=d("#59724b",.5),v=new Tt;v.moveTo(-.69,-.6),v.quadraticCurveTo(-.83,-.59,-.77,-.35),v.lineTo(-.51,.62),v.quadraticCurveTo(0,.81,.51,.62),v.lineTo(.77,-.35),v.quadraticCurveTo(.83,-.59,.69,-.6),v.closePath(),p(v,.54);const b=new Tt;b.moveTo(-.51,.62),b.quadraticCurveTo(0,.84,.51,.62),b.lineTo(.56,.39),b.bezierCurveTo(.39,.29,.38,.52,.26,.4),b.bezierCurveTo(.12,.15,.02,.42,-.06,.38),b.bezierCurveTo(-.19,.29,-.23,.46,-.34,.41),b.quadraticCurveTo(-.52,.35,-.56,.43),b.closePath(),p(b,.09,w,0,0,.42);for(let _=0;_<5;_++){const E=_/5*Wn;c(Math.cos(E)*.13,.68+Math.sin(E)*.06,.55,.13,a,[1,.83,.8])}c(0,.86,.62,.135,y,[1,1,.9]),g([Fe(.01,.96,.67),Fe(.08,1.08,.61),Fe(.19,1.08,.58)],.018,x,8)}else if(i==="eye"){a.roughness=.18,a.clearcoat=1,s.roughness=.11,s.clearcoat=1;const w=d(m(.54),.27),y=d("#18202a",.09);c(0,0,.25,.8,a,[1,.62,.44]),c(.045,.005,.56,.315,s,[1,1,.16]);for(let x=0;x<36;x++){const v=x/36*Wn,b=.145+.02*Math.sin(x*3.1),_=.292;g([Fe(.045+Math.cos(v)*b,Math.sin(v)*b,.612),Fe(.045+Math.cos(v+.035)*.23,Math.sin(v+.035)*.23,.608),Fe(.045+Math.cos(v)*_,Math.sin(v)*_,.598)],.008,w,6)}c(.045,.005,.617,.145,y,[1,1,.1]),M(-.035,.108,.655,.063,a,[1,.8,.14]),M(.14,-.062,.646,.025,a,[1,1,.15]),g([Fe(-.71,.02,.4),Fe(0,.49,.45),Fe(.71,.02,.4)],.022,d("#b99b8d",.48),20)}else if(i==="bear"||i==="cat"||i==="bunny"){s.roughness=.3,s.clearcoat=.85;const w=d("#e1a1a3",.37);if(i==="bear"&&(c(-.56,.57,.22,.32,s,[1,1,.66]),c(.56,.57,.22,.32,s,[1,1,.66]),M(-.56,.57,.43,.18,w,[1,1,.32]),M(.56,.57,.43,.18,w,[1,1,.32])),i==="bunny")for(const x of[-.31,.31]){const v=c(x,.78,.21,.29,s,[.75,1.9,.65]);v.rotation.z=x>0?-.13:.13;const b=c(x,.8,.38,.21,w,[.55,1.8,.22]);b.rotation.z=x>0?-.13:.13}if(i==="cat")for(const x of[-1,1]){const v=p(f([[x*.25,.49],[x*.75,.99],[x*.77,.17]]),.26);v.position.z=.08;const b=p(f([[x*.43,.5],[x*.67,.78],[x*.68,.35]]),.06,w);b.position.z=.3}c(0,-.03,.26,.75,s,[1,.88,.55]);const y=c(0,-.24,.63,.32,a,[1,.73,.23]);y.receiveShadow=!0;for(const x of[-1,1])M(x*.27,.08,.65,.069,o,[1,1,.55]),M(x*.28-.018,.105,.69,.019,a,[1,1,.3]),M(x*.43,-.21,.62,.09,w,[1,.45,.2]);M(0,-.15,.735,i==="bunny"?.065:.086,o,[1.12,.75,.35]);for(const x of[-1,1])g([Fe(0,-.2,.743),Fe(x*.04,-.3,.73),Fe(x*.13,-.28,.714)],.014,o,9);if(i==="cat")for(const x of[-1,1])for(let v=0;v<3;v++)g([Fe(x*.38,-.19+(v-1)*.08,.633),Fe(x*.57,-.19+(v-1)*.11,.57),Fe(x*.74,-.17+(v-1)*.14,.44)],.013,o,7)}else if(i==="heart"){s.roughness=.17,s.clearcoat=1,s.clearcoatRoughness=.075,p(lh(),.58);const w=p(lh(),.065,r);w.scale.set(1.035,1.035,1),w.position.z=-.025;const y=d(m(.77),.4);g([Fe(-.58,.57,.36),Fe(-.67,.33,.4),Fe(-.59,.06,.42)],.012,y,10)}else if(i==="lightning"){const w=f([[-.08,1],[-.76,-.09],[-.11,-.09],[-.3,-1],[.79,.26],[.12,.26]]);h(w,.11,r,.038);const y=h(w,.12,s,.045);y.scale.set(.82,.87,1),y.position.z=.115,s.roughness=.21,s.clearcoat=1,g([Fe(-.1,.72,.29),Fe(-.39,.05,.29),Fe(-.12,.05,.29)],.013,a,8)}else if(i==="paw"){const w=new Tt;w.moveTo(0,-.79),w.bezierCurveTo(-.56,-.91,-.85,-.46,-.69,-.05),w.bezierCurveTo(-.93,.28,-.65,.72,-.35,.61),w.bezierCurveTo(-.18,1.04,.21,1.04,.35,.61),w.bezierCurveTo(.7,.75,.92,.3,.68,-.05),w.bezierCurveTo(.85,-.46,.55,-.91,0,-.79),p(w,.2,a),s.roughness=.25,s.clearcoat=.9;for(const[x,v,b]of[[-.49,.19,.2],[-.19,.57,.21],[.21,.57,.21],[.49,.19,.2]])c(x,v,.23,b,s,[.85,1,.62]);const y=new Tt;y.moveTo(-.41,-.38),y.bezierCurveTo(-.5,-.12,-.18,.15,0,.13),y.bezierCurveTo(.18,.15,.5,-.12,.41,-.38),y.bezierCurveTo(.17,-.61,-.17,-.61,-.41,-.38),p(y,.35,s,0,0,.1)}else if(i==="daisy"){const w=d("#d9a63e",.59),y=d("#f2cc6b",.52);s.roughness=.39,s.clearcoat=.52;for(let x=0;x<11;x++){const v=x/11*Wn,b=l(ws(.91,.46,.15),s);b.rotation.z=v}c(0,0,.24,.27,w,[1,1,.62]);for(let x=0;x<25;x++){const v=x*2.39996,b=.225*Math.sqrt((x+.5)/25);M(Math.cos(v)*b,Math.sin(v)*b,.3+.075*Math.sqrt(1-(b/.27)**2),.027,y,[1,1,.5])}}else if(i==="rose"){const w=d("#5d784b",.57),y=d(m(.84),.4);s.roughness=.38,s.clearcoat=.48;for(const x of[-1,1]){const v=l(ws(.75,.48,.14),w,x*.1,-.18,0);v.rotation.z=x*1+Math.PI}for(const x of[{n:5,inner:.07,length:.81,width:1.05,z:.07,turn:.11},{n:4,inner:.045,length:.61,width:.84,z:.26,turn:.68},{n:3,inner:.025,length:.37,width:.57,z:.45,turn:1.28}])for(let v=0;v<x.n;v++){const b=v+x.z*23,_=v/x.n*Wn+x.turn+.17*Math.sin(b*1.73),E=x.length*(1+.1*Math.sin(b*2.31)),C=x.width*(1+.1*Math.cos(b*.87)),P=.037*Math.sin(b*1.43),F=.031*Math.cos(b*2.17),z=Math.cos(_),D=Math.sin(_);l(Or((O,q)=>{const k=q*2-1,ne=Math.sin(k*Math.PI/2)*C*.5*Math.sqrt(Math.max(0,Math.sin(Math.PI*.86*O))),X=x.inner+E*O*(1-.2*k*k),$=.105*Math.exp(-(((O-.9)/.17)**2))*(1-.28*k*k),j=.1*Math.sin(Math.PI*O)*(1-.76*k*k),Te=.038*k*Math.sin(b+O*2.1);return Fe(X*z-ne*D+P,X*D+ne*z+F,x.z+.15*O+j+$+Te)},16,10,.024),v%3===0?y:s)}l(Or((x,v)=>{const b=.47+x*Wn*1.55,_=.025+.205*x+(v-.5)*(.045+.055*x);return Fe(Math.cos(b)*_+.012,Math.sin(b)*_-.018,.78-.2*x+.045*Math.sin(v*Math.PI))},44,6,.025),s)}else if(i==="tulip"){const w=d("#66834f",.5);s.roughness=.33,s.clearcoat=.56,g([Fe(0,-1.05,.08),Fe(.035,-.53,.13),Fe(0,.1,.15)],.049,w,12);for(const x of[-1,1]){const v=l(ws(.91,.32,.12),w,0,-.95,.06);v.rotation.z=x*-.58}for(const x of[-1,1]){const v=new Tt;v.moveTo(0,-.08),v.bezierCurveTo(x*.58,-.05,x*.76,.64,x*.5,.91),v.quadraticCurveTo(x*.19,.67,0,.42),v.closePath(),p(v,.42,s,0,.06,.04)}const y=new Tt;y.moveTo(0,-.06),y.bezierCurveTo(-.42,.09,-.44,.62,0,.94),y.bezierCurveTo(.44,.62,.42,.09,0,-.06),p(y,.46,s,0,.04,.12),g([Fe(0,.1,.59),Fe(-.025,.42,.61),Fe(0,.76,.45)],.012,d(m(.8),.4),12)}const T=new Set;n.traverse(w=>{if(w instanceof $e)for(const y of Array.isArray(w.material)?w.material:[w.material])T.add(y)});for(const w of u)T.has(w)||w.dispose();return n}const ca={gem:"#cf85ae",heartGem:"#bf5475",emerald:"#679c8c",pearl:"#fff2db",pearlCluster:"#fff0dd",star:"#d5ab59",moon:"#d7b776",crown:"#d2a250",bow:"#c77c99",laceBow:"#dabacb",daisy:"#fff2df",rose:"#ca7891",tulip:"#dd92ac",butterfly:"#b69cc8",shell:"#e3baa8",leaf:"#90a793",eye:"#7786ad",bear:"#bd8a68",heart:"#d56b8c",lightning:"#dfb648",cat:"#c6a393",bunny:"#f4d9d5",paw:"#d794a4",planet:"#9c9cc4",cherry:"#b83b57",egg:"#ecad3c",dumpling:"#d8a56c",donut:"#d78da8",strawberry:"#c84c60",macaron:"#a4b996",onigiri:"#f5efe1",pudding:"#e6bc68"};function ch(i,e=56){const n=[],s=[],r=[],o=(e+1)*9;for(let c=0;c<2;c++)for(let h=0;h<=e;h++)for(let f=0;f<=8;f++){const u=h/e,d=f/8,m=i(u,d);n.push(m.x,m.y,m.z-(c?.026:0)),s.push(u,d)}for(let c=0;c<e;c++)for(let h=0;h<8;h++){const f=c*9+h,u=f+9,d=f+1,m=u+1;r.push(f,u,d,u,m,d,o+f,o+d,o+u,o+u,o+d,o+m)}for(let c=0;c<e;c++)for(const h of[0,8]){const f=c*9+h,u=f+9;h===0?r.push(f,o+f,u,u,o+f,o+u):r.push(f,u,o+f,u,o+u,o+f)}for(let c=0;c<8;c++)for(const h of[0,e]){const f=h*9+c,u=f+1;h===0?r.push(f,u,o+f,u,o+u,o+f):r.push(f,o+f,u,u,o+f,o+u)}const l=new vt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setIndex(r),l.computeVertexNormals(),l}function dx(i,e){const{group:t,primary:n,white:s,material:r,add:a,orb:o,tube:l}=wl(e);n.roughness=.38,n.clearcoat=.24,n.sheen=.55,n.sheenColor.set(e),n.sheenRoughness=.6;const c=(u,d,m)=>{const M=Math.PI*d,g=u*(.075+.84*Math.sin(M)),p=.36*Math.sin(M*2),T=.14+.25*Math.sin(M),w=u*.84*Math.PI*Math.cos(M),y=.72*Math.PI*Math.cos(M*2),x=Math.hypot(w,y),v=.27+.16*Math.sin(M),b=(m-.5)*v;return new L(g-y/x*b,p+w/x*b,T+.019*Math.sin(Math.PI*m))};for(const u of[-1,1])if(a(ch((d,m)=>c(u,d,m))),a(ch((d,m)=>{const M=u*(.48+.16*Math.PI*2*Math.cos(d*Math.PI*2)),g=-.75,p=Math.hypot(M,g),T=.23+.15*d,w=(m-.5)*T,y=.105*(1-Math.abs(m*2-1))*Math.max(0,(d-.84)/.16);return new L(u*(.065+.48*d+.16*Math.sin(d*Math.PI*2))-g/p*w,-.075-.75*d+M/p*w+y,.095+.12*Math.sin(Math.PI*d)+.019*Math.sin(Math.PI*m))},40)),i==="laceBow")for(const d of[0,1]){const m=Array.from({length:44},(M,g)=>{const p=c(u,g/43,d);return p.z+=.018,p});l(m,.012,s);for(let M=2;M<18;M++){const g=M/20,p=c(u,g,d),T=a(new Ci(.043,.011,6,12),s,p.x,p.y,p.z+.012);T.scale.set(1,.7,1),T.rotation.z=u*g*Math.PI}}const h=o(0,-.012,.29,.245,n,[.7,1.06,.82]);h.rotation.z=.06;const f=r(`#${new Ge(e).multiplyScalar(.73).getHexString()}`,.43);for(const u of[-1,1])l([new L(u*.09,.19,.41),new L(u*.125,.02,.493),new L(u*.09,-.2,.41)],.009,f);if(i==="laceBow"){o(0,0,.5,.055,s,[1,1,.65]);for(const u of[0,1,2,3,4])o(Math.cos(u*Math.PI*2/5)*.08,Math.sin(u*Math.PI*2/5)*.08,.49,.038,s,[1,1,.5])}return t}function fx(i,e){i.updateMatrixWorld(!0);const t=new sn().setFromObject(i,!0),n=t.getSize(new L),s=t.getCenter(new L),r=el[e];if(![n.x,n.y,n.z].every(h=>Number.isFinite(h)&&h>0))throw Error(`Invalid charm geometry: ${e}`);const a=new xn;for(;i.children.length;)a.add(i.children[0]);a.position.set(-s.x,-s.y,-t.min.z);const o=new xn;o.add(a),o.scale.set(r.width/n.x,r.height/n.y,r.depth/n.z),i.add(o),i.updateMatrixWorld(!0);const l=new Map,c=new Set;i.traverse(h=>{if(!(h instanceof $e))return;c.add(h.geometry);const f=(h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone()).applyMatrix4(h.matrixWorld),u=h.material,d=l.get(u)??[];d.push(f),l.set(u,d)}),i.clear();for(const[h,f]of l){const u=rx(f,!1);if(u){const d=new $e(u,h);d.castShadow=!0,d.receiveShadow=!0,i.add(d)}for(const d of f)d.dispose()}for(const h of c)h.dispose();return i}function hh(i,e){const t=i==="bow"||i==="laceBow"?dx(i,e):lx(i,e)??ux(i,e);if(!t)throw Error(`Unsupported charm: ${i}`);return fx(t,i)}function Qa(i){const e=new Set,t=new Set;i.traverse(n=>{if(n instanceof $e){e.add(n.geometry);for(const s of Array.isArray(n.material)?n.material:[n.material])t.add(s)}});for(const n of e)n.dispose();for(const n of t)n.dispose();i.removeFromParent()}const px=""+new URL("linen-Cklb8zYc.png",import.meta.url).href,en=.164,Xn=512,Zi=Math.round(Xn*Xt/Ft),Ts=(i,e,t)=>Math.max(e,Math.min(t,i));function uh(i,e,t,n,s,r){i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.quadraticCurveTo(e+n,t,e+n,t+r),i.lineTo(e+n,t+s-r),i.quadraticCurveTo(e+n,t+s,e+n-r,t+s),i.lineTo(e+r,t+s),i.quadraticCurveTo(e,t+s,e,t+s-r),i.lineTo(e,t+r),i.quadraticCurveTo(e,t,e+r,t),i.closePath()}function ja(i,e,t){const n=new Tt,s=-i/2,r=-e/2,a=t;return n.moveTo(s+a,r),n.lineTo(s+i-a,r),n.quadraticCurveTo(s+i,r,s+i,r+a),n.lineTo(s+i,r+e-a),n.quadraticCurveTo(s+i,r+e,s+i-a,r+e),n.lineTo(s+a,r+e),n.quadraticCurveTo(s,r+e,s,r+e-a),n.lineTo(s,r+a),n.quadraticCurveTo(s,r,s+a,r),n.closePath(),n}function mx(i){const e=i.getAttribute("position"),t=i.getAttribute("uv");for(let n=0;n<e.count;n++)t.setXY(n,(e.getX(n)+Ft/2)/Ft,(e.getY(n)+Xt/2)/Xt);t.needsUpdate=!0}function eo(i){return[(i.x/Ft+.5)*Xn,(.5-i.y/Xt)*Zi]}class gx{constructor(e){this.scene=new qo,this.camera=new ss(-2,2,2.2,-2.2,.1,40),this.artifact=new xn,this.shell=new xn,this.charms=new xn,this.helpers=new xn,this.raycaster=new sp,this.pointer=new ae,this.paintCanvas=document.createElement("canvas"),this.roughCanvas=document.createElement("canvas"),this.committedPaint=document.createElement("canvas"),this.committedRough=document.createElement("canvas"),this.partMeshes=new Map,this.toDispose=[],this.state=di(),this.lastStrokes=null,this.preview=null,this.frame=0,this.disposed=!1,this.zoomValue=1,this.environment=null,this.cachedPreviews=null,this.container=e,this.renderer=new ix({antialias:!0,alpha:!0,powerPreference:"low-power"}),this.canvas=this.renderer.domElement,this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=rl,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Is,e.append(this.canvas);for(const o of[this.paintCanvas,this.roughCanvas,this.committedPaint,this.committedRough])o.width=Xn,o.height=Zi;this.paintTexture=new vc(this.paintCanvas),this.paintTexture.colorSpace=Jt,this.paintTexture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.roughTexture=new vc(this.roughCanvas),this.toDispose.push(this.paintTexture,this.roughTexture),this.scene.add(new Rc("#fff4e4","#806048",.75));const t=new Xa("#fff1da",2.1);t.position.set(-3,4.5,7),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-3.5,right:3.5,top:4,bottom:-4,near:.1,far:16}),t.shadow.normalBias=.003,t.shadow.bias=-8e-5,t.shadow.radius=2.5,this.scene.add(t);const n=new Xa("#eee8df",.35);n.position.set(4,-1,4),this.scene.add(n);const s=new Zo(this.renderer),r=new sx;this.environment=s.fromScene(r,.045),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.55,r.dispose(),s.dispose(),this.artifact.add(this.shell,this.charms,this.helpers),this.scene.add(this.artifact),this.buildShell(),this.brushRing=new $e(new ra(.92,1,56),new Kr({color:"#7c1c32",depthTest:!1,transparent:!0,opacity:.9,side:tn})),this.brushRing.position.z=en+.04,this.brushRing.renderOrder=8,this.brushRing.visible=!1,this.helpers.add(this.brushRing);const a=new vt().setFromPoints(Array.from({length:65},(o,l)=>new L(Math.cos(l/64*Math.PI*2),Math.sin(l/64*Math.PI*2),0)));this.selection=new of(a,new $h({color:"#7c1c32",depthTest:!1,transparent:!0,opacity:.72})),this.selection.visible=!1,this.selection.renderOrder=7,this.helpers.add(this.selection),this.camera.position.set(.4,-.55,8),this.camera.lookAt(0,0,.05),this.artifact.rotation.z=-.055,this.updateSupport(),this.drawPaint(null,!0),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.ready=this.loadMaterial()}buildShell(){const e=new Tn({color:"#e5cfb3",roughness:.39,clearcoat:.5,clearcoatRoughness:.24}),t=new Tn({map:this.paintTexture,roughnessMap:this.roughTexture,roughness:1,clearcoat:.34,clearcoatRoughness:.25}),n=new Zs(ja(Ft-.045,Xt-.045,Lr-.023),{depth:.125,bevelEnabled:!0,bevelSize:.0225,bevelThickness:.025,bevelSegments:5,curveSegments:32,steps:1}),s=new $e(n,e);s.castShadow=!0,s.receiveShadow=!0,this.shell.add(s);const r=new bl(ja(Ft-.043,Xt-.043,Lr-.022),32);mx(r);const a=new $e(r,t);a.position.z=en,a.receiveShadow=!0,this.shell.add(a);const o=new Zs(ja(ft.width-.034,ft.height-.034,ft.radius-.017),{depth:.035,bevelEnabled:!0,bevelSize:.017,bevelThickness:.017,bevelSegments:4,curveSegments:20}),l=new $e(o,new Tn({color:"#dac4a9",roughness:.36,clearcoat:.5}));l.position.set(ft.x,ft.y,en+.008),l.castShadow=!0,l.receiveShadow=!0,this.shell.add(l);const c=new Tn({color:"#958675",metalness:.86,roughness:.24,clearcoat:.6}),h=new Tn({color:"#111520",roughness:.11,metalness:.15,clearcoat:1,clearcoatRoughness:.06});for(const m of[ft.y+.19,ft.y-.19]){const M=new $e(new Ci(.142,.022,12,48),c);M.position.set(ft.x-.095,m,en+.086),M.castShadow=!0,this.shell.add(M);const g=new $e(new qs(.133,.133,.018,48),h);g.rotation.x=Math.PI/2,g.position.set(ft.x-.095,m,en+.083),this.shell.add(g);const p=new $e(new $i(.057,32),new Tn({color:"#24374a",metalness:.5,roughness:.12,clearcoat:1}));p.position.set(ft.x-.095,m,en+.096),this.shell.add(p);const T=new $e(new $i(.035,24),h);T.position.set(ft.x-.095,m,en+.098),this.shell.add(T);const w=new $e(new $i(.016,16),new Kr({color:"#a8c5e7",transparent:!0,opacity:.52}));w.position.set(ft.x-.113,m+.026,en+.101),this.shell.add(w)}const f=new $e(new fi(.057,20,12),new Tn({color:"#fff4d7",roughness:.22,metalness:.12,clearcoat:1}));f.scale.z=.3,f.position.set(ft.x+.19,ft.y+.16,en+.07),this.shell.add(f);const u=new $e(new $i(.019,16),new yi({color:"#887f73"}));u.position.set(ft.x+.19,ft.y-.16,en+.063),this.shell.add(u);for(const m of[.5,.08]){const M=new $e(new ei(.026,.24,.07),e);M.position.set(Ft/2-.002,m,.065),M.castShadow=!0,this.shell.add(M)}const d=new $e(new ei(.22,.016,.046),new yi({color:"#5b5044",roughness:.75}));d.position.set(0,-Xt/2-.001,.063),this.shell.add(d);for(const m of[-.55,-.46,-.37,.37,.46,.55]){const M=new $e(new qs(.018,.018,.013,12),new yi({color:"#756652",roughness:.7}));M.rotation.z=Math.PI/2,M.rotation.x=Math.PI/2,M.position.set(m,-Xt/2-.004,.062),this.shell.add(M)}}async loadMaterial(){let e;try{e=await new Qf().loadAsync(px)}catch{this.requestRender();return}if(this.disposed){e.dispose();return}e.colorSpace=Jt,e.wrapS=e.wrapT=Hr,e.repeat.set(5,5),e.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.toDispose.push(e);const t=new $e(new js(16,16),new yi({map:e,color:"#dbc3a8",roughness:1,bumpMap:e,bumpScale:.006}));t.position.z=-.065,t.receiveShadow=!0,this.scene.add(t),this.requestRender()}paintMask(e){const t=Xn/Ft;e.beginPath(),uh(e,0,0,Xn,Zi,Lr*t),uh(e,(ft.x-ft.width/2+Ft/2)*t,(Xt/2-ft.y-ft.height/2)*t,ft.width*t,ft.height*t,ft.radius*t),e.clip("evenodd")}paintStroke(e,t,n=!1){if(!t.points.length)return;e.lineCap="round",e.lineJoin="round",e.lineWidth=t.size/Ft*Xn,e.strokeStyle=n?t.finish==="matte"?"#ededed":t.finish==="glitter"?"#858585":"#777777":t.color,e.fillStyle=e.strokeStyle;const s=eo(t.points[0]);if(e.beginPath(),e.moveTo(s[0],s[1]),t.points.length===1)e.arc(s[0],s[1],e.lineWidth/2,0,Math.PI*2),e.fill();else{for(let r=1;r<t.points.length;r++){const a=eo(t.points[r]);e.lineTo(a[0],a[1])}e.stroke()}if(!n&&t.finish==="glitter"){e.save(),e.globalAlpha=.5,e.fillStyle="#fff7cf";let r=t.id*2654435761>>>0;const a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);for(let o=0;o<t.points.length;o++){const l=eo(t.points[o]),c=a()*Math.PI*2,h=a()*e.lineWidth*.37;e.beginPath(),e.arc(l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h,Math.max(.55,e.lineWidth*.018),0,Math.PI*2),e.fill()}e.restore()}}drawPaint(e,t){if(t){const r=this.committedPaint.getContext("2d"),a=this.committedRough.getContext("2d");r.clearRect(0,0,Xn,Zi),r.fillStyle="#f4e7d3",r.fillRect(0,0,Xn,Zi),a.fillStyle="#b3b3b3",a.fillRect(0,0,Xn,Zi);for(const o of[r,a])o.save(),this.paintMask(o);for(const o of this.state.strokes)this.paintStroke(r,o),this.paintStroke(a,o,!0);r.restore(),a.restore()}const n=this.paintCanvas.getContext("2d"),s=this.roughCanvas.getContext("2d");n.drawImage(this.committedPaint,0,0),s.drawImage(this.committedRough,0,0);for(const r of[n,s])r.save(),this.paintMask(r);e&&(this.paintStroke(n,e),this.paintStroke(s,e,!0)),n.restore(),s.restore(),this.paintTexture.needsUpdate=!0,this.roughTexture.needsUpdate=!0}update(e,t,n=null){if(this.disposed)return;this.state=e,(this.lastStrokes!==e.strokes||this.preview!==n||n!==null)&&(this.drawPaint(n,this.lastStrokes!==e.strokes),this.lastStrokes=e.strokes,this.preview=n);const s=new Set(e.decorations.map(r=>r.id));for(const[r,a]of this.partMeshes)s.has(r)||(Qa(a.mesh),this.partMeshes.delete(r));for(const r of e.decorations){let a=this.partMeshes.get(r.id);if(!a||a.kind!==r.kind||a.color!==r.color){a&&Qa(a.mesh);const o=hh(r.kind,r.color);o.traverse(l=>{l.userData.partId=r.id}),this.charms.add(o),a={mesh:o,kind:r.kind,color:r.color},this.partMeshes.set(r.id,a)}a.mesh.position.set(r.x,r.y,en+.007),a.mesh.rotation.z=r.angle,a.mesh.scale.setScalar(r.size)}this.positionSelection(e.decorations.find(r=>r.id===t)??null),this.requestRender()}positionSelection(e){if(this.selection.visible=e!==null,!e)return;const t=this.partMeshes.get(e.id);if(!t)return;t.mesh.updateMatrixWorld(!0);const n=new sn().setFromObject(t.mesh),s=n.getSize(new L);this.selection.position.set(e.x,e.y,en+.035),this.selection.scale.set(Math.max(.09,s.x/2+.055),Math.max(.09,s.y/2+.055),1),this.selection.rotation.z=0}pick(e,t){const n=this.canvas.getBoundingClientRect();if(!n.width||!n.height)return{point:null,partId:null,onCase:!1};this.pointer.set((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.artifact.updateMatrixWorld(!0),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.pointer,this.camera);const s=new qn(new L(0,0,1),-en).applyMatrix4(this.artifact.matrixWorld),r=this.raycaster.ray.intersectPlane(s,new L);let a=null;if(r){const l=this.artifact.worldToLocal(r);a={x:l.x,y:l.y}}let o=null;for(const l of this.raycaster.intersectObjects(this.charms.children,!0)){const c=l.object.userData.partId;if(typeof c=="number"){o=c;break}}return{point:a,partId:o,onCase:a!==null&&ia(a)}}setBrushPreview(e,t,n){this.brushRing.visible=e!==null,e&&(this.brushRing.position.x=e.x,this.brushRing.position.y=e.y,this.brushRing.scale.setScalar(Math.max(.018,t/2)),this.brushRing.material.color.set(n)),this.requestRender()}updateSupport(){this.artifact.position.z=0,this.artifact.updateMatrixWorld(!0);const e=new sn().setFromObject(this.shell).min.z;this.artifact.position.z=-.062-e,this.artifact.updateMatrixWorld(!0)}orbit(e,t){this.artifact.rotation.y=Ts(this.artifact.rotation.y+e*.0025,-.28,.28),this.artifact.rotation.x=Ts(this.artifact.rotation.x-t*.002,-.22,.22),this.updateSupport(),this.requestRender()}resetView(){this.artifact.rotation.set(0,0,-.055),this.zoomValue=1,this.updateSupport(),this.resize()}zoom(e){Number.isFinite(e)&&e>0&&(this.zoomValue=Ts(this.zoomValue*e,.76,1.4),this.resize())}resize(){if(this.disposed)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight),n=e/t;this.renderer.setSize(e,t,!1);const s=Math.max(4.25,2.62/n)/this.zoomValue,r=s*n;this.camera.left=-r/2,this.camera.right=r/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.requestRender()}requestRender(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.disposed||this.renderer.render(this.scene,this.camera)}))}captureArtwork(e=1080,t=1350){e=Math.round(Ts(e,320,1800)),t=Math.round(Ts(t,320,2400));const n=this.helpers.visible,s=this.artifact.rotation.clone(),r=this.artifact.position.z,a=this.renderer.getPixelRatio(),o=this.renderer.getSize(new ae),l=document.createElement("canvas");l.width=e,l.height=t;try{this.helpers.visible=!1,this.artifact.rotation.set(-.035,.075,-.065),this.updateSupport(),this.artifact.updateMatrixWorld(!0);const c=new sn().setFromObject(this.shell).union(new sn().setFromObject(this.charms)),h=c.getSize(new L),f=c.getCenter(new L),u=e/t,d=Math.max(4.22,h.y*1.2,h.x*1.28/u),m=d*u,M=new ss(-m/2,m/2,d/2,-d/2,.1,40);M.position.set(f.x+.2,f.y-.4,9),M.lookAt(f.x,f.y,0),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.renderer.render(this.scene,M),l.getContext("2d").drawImage(this.canvas,0,0,e,t)}finally{this.helpers.visible=n,this.artifact.rotation.copy(s),this.artifact.position.z=r,this.renderer.setPixelRatio(a),this.renderer.setSize(o.x,o.y,!1),this.renderer.render(this.scene,this.camera)}return l}previews(){if(this.cachedPreviews)return this.cachedPreviews;const e=new qo;e.environment=this.scene.environment,e.environmentIntensity=.65,e.add(new Rc("#fff4e4","#806048",.9));const t=new Xa("#fff1df",2.2);t.position.set(-2,3,5),e.add(t);const n=new ss(-.58,.58,.58,-.58,.1,10);n.position.set(.15,.12,4),n.lookAt(0,0,.1);const s={},r=this.renderer.getPixelRatio(),a=this.renderer.getSize(new ae),o=this.renderer.getClearColor(new Ge),l=this.renderer.getClearAlpha();try{this.renderer.setPixelRatio(1),this.renderer.setSize(96,96,!1),this.renderer.setClearColor("#fff4e5",0);for(const c of na){const h=hh(c,ca[c]);e.add(h);const f=new sn().setFromObject(h),u=f.getCenter(new L);h.position.sub(u),this.renderer.render(e,n),s[c]=this.canvas.toDataURL("image/png"),Qa(h)}}finally{this.renderer.setClearColor(o,l),this.renderer.setPixelRatio(r),this.renderer.setSize(a.x,a.y,!1),this.renderer.render(this.scene,this.camera)}return this.cachedPreviews=s,s}dispose(){if(!this.disposed){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.scene.traverse(e=>{if(e instanceof $e||e instanceof Qh){e.geometry.dispose();for(const t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}});for(const e of this.toDispose)e.dispose();this.environment?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove(),this.partMeshes.clear()}}}const{locale:Su,t:Ye}=Ku(Yu());document.documentElement.lang=Su;document.title=Ye("title");new URLSearchParams(location.search).get("motion")==="reduce"&&(document.documentElement.dataset.motion="reduce");const Bt=new Hu(ku()),Ct=new $u,_x=["#f3e6d0","#efaeb5","#db7396","#ab3e5a","#751e38","#b3a0c4","#839c91","#e8bb5b"],yt=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ln=(i,e,t="")=>`<button class="${t}" data-action="${i}" aria-label="${yt(Ye(i))}" title="${yt(Ye(i))}">${e??yt(Ye(i))}</button>`;document.body.innerHTML=`<main class="studio" aria-label="${yt(Ye("title"))}">
 <header class="topbar"><div class="brand"><span>CASE OVERLOAD</span><h1>${yt(Ye("title"))}</h1></div><div class="top-actions">${ln("undo","↶","icon")}${ln("sound","♫","icon")}${ln("done",void 0,"primary")}</div></header>
 <section class="workbench"><div id="stage"></div><p id="hint" class="hint">${yt(Ye("loading"))}</p><div id="selection" class="selection" hidden>${ln("left","↶","icon")}${ln("right","↷","icon")}${ln("remove","×","icon danger")}</div><div id="loading" class="loading"><span class="spinner"></span></div></section>
 <section class="dock"><div class="tabs"><button data-mode="paint" class="active" aria-pressed="true">${yt(Ye("paint"))}</button><button data-mode="parts" aria-pressed="false">${yt(Ye("parts"))}</button></div>
 <div id="categories" class="category-row" role="group" aria-label="${yt(Ye("parts"))}" hidden>${Bs.map(i=>`<button data-category="${i.id}" aria-pressed="false">${yt(Ye(`category_${i.id}`))}</button>`).join("")}</div>
 <div id="parts" class="part-grid" hidden>${na.map(i=>`<button class="part" data-kind="${i}" aria-label="${yt(Ye(i))}" aria-pressed="false"><img alt="" width="48" height="48"><span>${yt(Ye(i))}</span></button>`).join("")}</div>
 <div class="palette" role="group" aria-label="${yt(Ye("color"))}">${_x.map(i=>`<button class="swatch" style="--swatch:${i}" data-color="${i}" aria-label="${yt(Ye("color"))} ${i}" aria-pressed="false"></button>`).join("")}<label class="custom-color"><input id="color" type="color" value="#db7396" aria-label="${yt(Ye("color"))}"><span>＋</span></label></div>
 <div class="size-row"><label for="size">${yt(Ye("size"))}</label><span class="size-dot small"></span><input id="size" type="range" min="0" max="100" value="44" aria-label="${yt(Ye("size"))}"><span class="size-dot big"></span></div>
 <div id="finishes" class="finish-row">${["gloss","matte","glitter"].map(i=>`<button data-finish="${i}" aria-pressed="${i==="gloss"}" class="${i==="gloss"?"active":""}">${yt(Ye(i))}</button>`).join("")}</div></section>
 <aside id="audio-panel" class="audio-panel" hidden><h2>${yt(Ye("sound"))}</h2><label>${yt(Ye("music"))}<input type="checkbox" id="music" role="switch"></label><label>${yt(Ye("sfx"))}<input type="checkbox" id="sounds" role="switch" checked></label><small>Music: MintoDog · SE: NearTheAtmoshphere · CC0</small>${ln("close")}</aside>
 <div id="toast" class="toast" role="status" aria-live="polite"></div>
 <div id="result" class="modal" hidden role="dialog" aria-modal="true" aria-labelledby="result-title"><article class="result-card"><p class="eyebrow">CASE OVERLOAD</p><h2 id="result-title"></h2><img id="result-image" alt="${yt(Ye("artwork"))}"><div id="metrics" class="metrics"></div><div class="result-actions">${ln("save",void 0,"primary")}${ln("share",void 0,"secondary")}${ln("back",void 0,"quiet wide")}</div><button data-action="newDesign" class="new-design">${yt(Ye("newDesign"))}</button></article></div>
 <div id="confirm" class="modal" hidden role="dialog" aria-modal="true" aria-labelledby="confirm-title"><article class="confirm-card"><h2 id="confirm-title">${yt(Ye("confirmNew"))}</h2>${ln("newConfirm",void 0,"primary")}${ln("newCancel",void 0,"quiet")}</article></div></main>`;const Ke=i=>document.querySelector(i),xx=Ke("#stage"),yu=Ke("#hint"),Qr=Ke("#size"),jr=Ke("#color");let bt,er=!1,Wt="paint",Rn="#db7396",cs=ca.bow,Pn=.09,$s=1,ea="gloss",hs="bow",xt=null,Fs="botanical",Sn=null,kt=null,Os=null,bi=null,dh=0;const fh=new Map,Ln=()=>Sn??Bt.state,hi=()=>Ln().decorations.find(i=>i.id===xt);function jo(i){Ke("#toast").textContent=i,Ke("#toast").classList.add("show"),clearTimeout(dh),dh=window.setTimeout(()=>Ke("#toast").classList.remove("show"),2600)}function tr(){Wu(Bt.state)}function ms(i){Sn=null,Bt.commit(i)&&tr(),Lt()}function rn(){Sn&&ms(Sn)}function Lt(){if(!er)return;xt!==null&&!Ln().decorations.some(t=>t.id===xt)&&(xt=null),bt.update(Ln(),xt,kt),Ke('[data-action="undo"]').disabled=!Bt.canUndo,Ke("#selection").hidden=Wt!=="parts"||xt===null,yu.textContent=Ye(Wt==="paint"?"paintHint":xt===null?"partHint":"selectedHint"),Ke("#parts").hidden=Wt!=="parts",Ke("#categories").hidden=Wt!=="parts",Ke("#finishes").hidden=Wt!=="paint";for(const t of document.querySelectorAll("[data-mode]")){const n=t.dataset.mode===Wt;t.classList.toggle("active",n),t.setAttribute("aria-pressed",String(n))}const i=Wt==="paint"?Rn:hi()?.color??cs;jr.value=i;for(const t of document.querySelectorAll("[data-color]"))t.setAttribute("aria-pressed",String(t.dataset.color===i));if(hi()){const t=Bs.find(n=>n.kinds.includes(hi().kind));t&&(Fs=t.id)}const e=Bs.find(t=>t.id===Fs).kinds;for(const t of document.querySelectorAll("[data-kind]"))t.hidden=!e.includes(t.dataset.kind),t.setAttribute("aria-pressed",String(Wt==="parts"&&t.dataset.kind===(hi()?.kind??hs)));for(const t of document.querySelectorAll("[data-category]"))t.setAttribute("aria-pressed",String(t.dataset.category===Fs));for(const t of document.querySelectorAll("[data-finish]"))t.classList.toggle("active",t.dataset.finish===ea),t.setAttribute("aria-pressed",String(t.dataset.finish===ea));Qr.value=String(Math.round(Wt==="paint"?Math.sqrt((Pn-.015)/.385)*100:((hi()?.size??$s)-.12)/1.78*100))}function bu(i,e=!0){if(Wt==="paint"){Rn=i,Lt();return}cs=i,xt!==null?(Sn=Qs(Ln(),xt,{color:i}),e?ms(Sn):Lt()):Lt()}function Au(i){rn(),Wt=i,xt=null,kt=null,bt.setBrushPreview(null,Pn,Rn),Lt(),Ct.cue("tap")}document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>Au(i.dataset.mode));document.querySelectorAll("[data-color]").forEach(i=>i.onclick=()=>{rn(),bu(i.dataset.color),Ct.cue("tap")});document.querySelectorAll("[data-kind]").forEach(i=>i.onclick=()=>{rn(),xt=null,hs=i.dataset.kind,cs=ca[hs],Lt(),Ct.cue("tap"),bt.canvas.focus({preventScroll:!0})});document.querySelectorAll("[data-category]").forEach(i=>i.onclick=()=>{rn(),xt=null,Fs=i.dataset.category,hs=Bs.find(e=>e.id===Fs).kinds[0],cs=ca[hs],Lt(),Ct.cue("tap")});document.querySelectorAll("[data-finish]").forEach(i=>i.onclick=()=>{ea=i.dataset.finish,Lt(),Ct.cue("tap")});jr.oninput=()=>bu(jr.value,!1);jr.onchange=()=>rn();Qr.oninput=()=>{const i=Number(Qr.value)/100;if(Wt==="paint"){Pn=.015+.385*i*i;return}$s=.12+1.78*i,xt!==null&&(Sn=Qs(Ln(),xt,{size:$s}),Lt())};Qr.onchange=()=>rn();let St=null;const wn=new Map;let Cs=0;function to(i,e=!0){return bt.pick(i.clientX,i.clientY-(e&&i.pointerType==="touch"?34:0))}function Br(){Sn=null,kt=null,St=null,bt.setBrushPreview(null,Pn,Rn),Lt()}function vx(){const i=bt.canvas;i.tabIndex=0,i.setAttribute("aria-label",`${Ye("artwork")}. ${Ye("paintHint")} ${Ye("partHint")}`),i.addEventListener("pointerdown",t=>{if(!er||!Ke("#result").hidden)return;if(Ct.unlock(),rn(),i.focus({preventScroll:!0}),wn.set(t.pointerId,{x:t.clientX,y:t.clientY}),i.setPointerCapture(t.pointerId),wn.size>1){Br();const l=[...wn.values()];Cs=Math.hypot(l[0].x-l[1].x,l[0].y-l[1].y);return}const n=to(t),s=to(t,!1),r=n.point,a={x:t.clientX,y:t.clientY},o={pointer:t.pointerId,start:a,last:a,offset:{x:0,y:0},original:Bt.state,id:null};if(Wt==="paint"&&r&&zs(r))xt=null,kt={id:0,color:Rn,size:Pn,finish:ea,points:[r]},St={...o,kind:"paint"},Lt(),bt.setBrushPreview(r,Pn,Rn);else if(Wt==="parts"&&s.partId!==null){xt=s.partId;const l=hi();$s=l.size,cs=l.color;const c=s.point??{x:l.x,y:l.y};St={...o,kind:"move",id:l.id,offset:{x:l.x-c.x,y:l.y-c.y}},Lt()}else if(Wt==="parts"&&r&&n.onCase){const l=zu(Bt.state,{kind:hs,x:r.x,y:r.y,size:$s,angle:0,color:cs}),c=l.decorations[l.decorations.length-1];l!==Bt.state&&c&&(xt=c.id,Sn=l,St={...o,kind:"move",id:c.id},Lt(),Ct.cue("place"))}else St={...o,kind:"orbit"}}),i.addEventListener("pointermove",t=>{if(wn.has(t.pointerId)&&wn.set(t.pointerId,{x:t.clientX,y:t.clientY}),wn.size>1){const s=[...wn.values()],r=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);Cs>0&&bt.zoom(r/Cs),Cs=r;return}const n=to(t).point;if(!St){Wt==="paint"&&t.pointerType!=="touch"&&bt.setBrushPreview(n&&zs(n)?n:null,Pn,Rn);return}if(St.pointer===t.pointerId){if(St.kind==="paint"&&kt&&n){const s=kt.points[kt.points.length-1];Math.hypot(s.x-n.x,s.y-n.y)>.006&&(kt.points.push(n),kt.points.length>2048&&(kt.points=kt.points.filter((r,a)=>a%2===0||a===kt.points.length-1)),bt.update(Ln(),null,kt),bt.setBrushPreview(n,Pn,Rn))}else if(St.kind==="move"&&St.id!==null){const s=St.original.decorations.some(a=>a.id===St.id),r=bt.pick(t.clientX,t.clientY-(!s&&t.pointerType==="touch"?34:0));r.point&&(Sn=Qs(Ln(),St.id,{x:r.point.x+St.offset.x,y:r.point.y+St.offset.y}),bt.update(Ln(),xt))}else St.kind==="orbit"&&bt.orbit(t.clientX-St.last.x,t.clientY-St.last.y);St.last={x:t.clientX,y:t.clientY}}});const e=(t,n=!1)=>{if(wn.delete(t.pointerId),wn.size===0&&(Cs=0),!St||St.pointer!==t.pointerId)return;if(n){Br();return}const s=St;if(St=null,s.kind==="paint"&&kt){const r=kt;kt=null,ms(Bu(Bt.state,r)),Ct.cue("tap")}else if(s.kind==="move"&&s.id!==null){const r=i.getBoundingClientRect(),a=Ln().decorations.find(c=>c.id===s.id),o=t.clientX<r.left+4||t.clientX>r.right-4||t.clientY<r.top+4||t.clientY>r.bottom-4;Math.hypot(t.clientX-s.start.x,t.clientY-s.start.y)>18&&(o||a&&!ia(a))&&(Sn=wh(Ln(),s.id),xt=null),rn(),Lt()}bt.setBrushPreview(null,Pn,Rn)};i.addEventListener("pointerup",t=>e(t)),i.addEventListener("pointercancel",t=>e(t,!0)),i.addEventListener("lostpointercapture",t=>{wn.delete(t.pointerId),St?.pointer===t.pointerId&&Br()}),i.addEventListener("pointerleave",()=>{St||bt.setBrushPreview(null,Pn,Rn)}),i.addEventListener("wheel",t=>{t.preventDefault(),bt.zoom(Math.exp(-t.deltaY*.001))},{passive:!1}),i.addEventListener("dblclick",()=>bt.resetView())}function ph(i){rn();const e=hi();e&&(ms(Qs(Bt.state,e.id,{angle:e.angle+i*Math.PI/12})),Ct.cue("tap"))}function Eu(){rn(),xt!==null&&(ms(wh(Bt.state,xt)),xt=null,Lt(),Ct.cue("undo"))}function wu(){rn(),Bt.undo()&&(xt=null,tr(),Lt(),Ct.cue("undo"))}function Tu(){rn(),Bt.redo()&&(tr(),Lt(),Ct.cue("tap"))}function ui(i,e){const t=Ke(i);t.hidden=!e,e?(fh.set(i,document.activeElement),t.querySelector("button:not(:disabled)")?.focus({preventScroll:!0})):fh.get(i)?.focus({preventScroll:!0})}function Mx(i,e){const t=document.createElement("canvas");t.width=1080,t.height=1440;const n=t.getContext("2d");n.fillStyle="#f8eddf",n.fillRect(0,0,1080,1440),n.drawImage(i,0,105,1080,1135),n.textAlign="center",n.fillStyle="#74283c",n.font="500 30px Georgia,serif",n.fillText("CASE OVERLOAD",540,63);let s=46;for(n.font=`600 ${s}px system-ui,sans-serif`;n.measureText(e).width>980&&s>30;)n.font=`600 ${--s}px system-ui,sans-serif`;n.fillText(e,540,1280);const r=nl(Bt.state);return n.fillStyle="#846f66",n.font="500 28px system-ui,sans-serif",n.fillText([`${r.partCount} ${Ye("pieces")}`,`${r.colorCount} ${Ye("colors")}`,`${r.paintedPercent}% ${Ye("painted")}`].join("   ·   "),540,1342),n.font="24px system-ui,sans-serif",n.fillText("koyotap.com/browser_play/case-deco",540,1400),t}async function Sx(){if(!er)return;rn(),Br(),bt.resetView();const i=nl(Bt.state),e=Ye(`style_${i.style}`);Ke("#result-title").textContent=e,Ke("#metrics").innerHTML=[["pieces",String(i.partCount)],["colors",String(i.colorCount)],["painted",`${i.paintedPercent}%`]].map(([t,n])=>`<div><strong>${n}</strong><span>${yt(Ye(t))}</span></div>`).join(""),Ke('[data-action="save"]').disabled=!0,Ke('[data-action="share"]').disabled=!0,ui("#result",!0),Ct.cue("finish");try{const t=Mx(bt.captureArtwork(1080,1135),e);if(Ke("#result-image").src=t.toDataURL("image/png"),Os=await new Promise(n=>t.toBlob(n,"image/png")),!Os)throw Error("No image");bi&&URL.revokeObjectURL(bi),bi=URL.createObjectURL(Os),Ke('[data-action="save"]').disabled=!1,Ke('[data-action="share"]').disabled=!1}catch{jo(Ye("saveFail"))}}async function yx(){if(!Os||!bi)return;const i=new File([Os],"case-overload.png",{type:"image/png"});try{if(navigator.canShare?.({files:[i]})&&navigator.share&&matchMedia("(pointer:coarse)").matches){await navigator.share({files:[i],title:Ye("title")});return}const e=document.createElement("a");e.href=bi,e.download="case-overload.png",e.click(),jo(Ye("saved"))}catch(e){e instanceof DOMException&&e.name==="AbortError"||jo(Ye("saveFail"))}}function bx(){const i=nl(Bt.state),e=`https://koyotap.com/browser_play/case-deco/?lang=${encodeURIComponent(Su)}`,t=Ye("shareText",{style:Ye(`style_${i.style}`),parts:i.partCount,url:e});window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(t)}`,"_blank","noopener,noreferrer")}const Ax={undo:wu,redo:Tu,left:()=>ph(-1),right:()=>ph(1),remove:Eu,done:()=>{Sx()},back:()=>{ui("#result",!1),Lt()},save:()=>{yx()},share:bx,sound:()=>{Ke("#audio-panel").hidden=!Ke("#audio-panel").hidden},close:()=>{Ke("#audio-panel").hidden=!0},newDesign:()=>ui("#confirm",!0),newCancel:()=>ui("#confirm",!1),newConfirm:()=>{ui("#confirm",!1),ui("#result",!1),Bt.clear(),tr(),xt=null,bt.resetView(),Au("paint")}};document.querySelectorAll("[data-action]").forEach(i=>i.onclick=()=>{Ct.unlock(),er&&Ax[i.dataset.action]?.()});Ke("#music").checked=Ct.music;Ke("#sounds").checked=Ct.sounds;for(const i of["music","sounds"])Ke(`#${i}`).onchange=()=>{Ct.unlock(),Ct[i]=Ke(`#${i}`).checked,Ct.sync()};document.addEventListener("pointerdown",()=>{Ct.unlock()},{once:!0});document.addEventListener("keydown",i=>{if(i.key==="Tab"){const t=Ke("#confirm").hidden?Ke("#result").hidden?null:Ke("#result"):Ke("#confirm");if(t){const n=[...t.querySelectorAll("button:not(:disabled)")],s=n[0],r=n[n.length-1];i.shiftKey&&document.activeElement===s?(i.preventDefault(),r?.focus()):!i.shiftKey&&document.activeElement===r&&(i.preventDefault(),s?.focus())}}if(i.key==="Escape"){Ke("#confirm").hidden?Ke("#result").hidden?(xt=null,Ke("#audio-panel").hidden=!0,Lt()):ui("#result",!1):ui("#confirm",!1);return}if(!Ke("#result").hidden||!Ke("#confirm").hidden||i.target instanceof HTMLInputElement||((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),i.shiftKey?Tu():wu()),!Ke("#result").hidden))return;(i.key==="Delete"||i.key==="Backspace")&&xt!==null&&(i.preventDefault(),Eu());const e=hi();e&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)&&(i.preventDefault(),ms(Qs(Bt.state,e.id,{x:e.x+(i.key==="ArrowRight"?.03:i.key==="ArrowLeft"?-.03:0),y:e.y+(i.key==="ArrowUp"?.03:i.key==="ArrowDown"?-.03:0)})))});window.addEventListener("pagehide",i=>{tr(),i.persisted||(Ct.dispose(),bt?.dispose(),bi&&URL.revokeObjectURL(bi))});async function Ex(){try{bt=new gx(xx),await bt.ready,er=!0,Ke("#loading").hidden=!0,vx();const i=bt.previews();for(const e of na)Ke(`[data-kind="${e}"] img`).src=i[e];Lt()}catch(i){Ke("#loading").hidden=!0,yu.textContent=Ye("unavailable"),console.error("Case studio could not start",i)}}Ex();
