"use strict";
(() => {
  const storageKey = "naoi-shoot-notes-v1";
  const ui = {
    ja: {skip:"撮影案へ",title:"私服撮影ガイド",lead:"リール20本・写真30案。",description:"参考投稿を見て、撮って、チェック。<br>きれいな表情も、いつものなおいも。",outfit:"私服2パターン",priorityMeta:"優先16案",checked:"参考確認 2026.11.10",sessionLabel:"撮影の流れ",sessionOrder:"1着目：写真→動画　／　2着目：写真→動画　／　最後に小物とオフショット",beforeShoot:"撮り始める前に",shootTip:"縦動画は9:16。動きの前後を2秒ずつ長めに撮る。写真は寄り・全身・細部をセットで。光と背景を整え、本人の好きな角度を先に確認。",all:"すべて",reel:"リール",photo:"写真",priorityOnly:"優先案だけ",show:"表示",allStatus:"すべて",todo:"未撮影",done:"撮影済み",clearFilters:"絞り込みを解除",empty:"条件に合う撮影案がありません。",storageError:"この端末にはチェックを保存できません。現在の画面ではそのまま使えます。",referenceNote:"参考投稿の構図・目線・動きなど、各カードに書いた箇所を参考に撮影します。カルーセルは指定の枚数へ進んでください。",instagramNote:"元投稿はInstagramで開きます。表示にログインが必要な場合があります。",saveNote:"チェックはこの端末のブラウザに保存されます。",imageCredit:"ヘッダーイラスト：ChatGPTで生成",print:"印刷・PDF保存",progress:"撮影の進み具合",showTodo:"未撮影を見る",soundOn:"音 ON",soundOff:"音 OFF",search:"横顔・全身・鏡などで検索",steps:"撮影手順",reference:"参考にするところ",partial:"一部参考",exact:"構図参考",priority:"★ 優先",addition:"なおい用の演出",openReel:"参考リールを見る",openPhoto:"参考写真を見る",openPost:"参考投稿を見る",extra:"もう一つの参考投稿 ↗",slide:n=>`カルーセル ${n}枚目`,count:(n,r,p)=>`${n}案を表示 · リール${r} / 写真${p}`,saved:id=>`${id}を撮影済みにしました`,undone:id=>`${id}を未撮影に戻しました`,loading:"読み込み中…",loadError:"撮影案を読み込めませんでした。ページを再読み込みしてください。",source:"元投稿",referenceFallback:"リンク先の構図や動きの、記載箇所を参考に。"},
    en: {skip:"Skip to ideas",title:"Private-clothes shoot guide",lead:"20 reels. 30 photo ideas.",description:"Open a reference. Shoot. Check it off.<br>Beautiful portraits, and Naoi being herself.",outfit:"Two outfit options",priorityMeta:"16 priority ideas",checked:"References checked 10 Nov 2026",sessionLabel:"SHOOT ORDER",sessionOrder:"Outfit 1: photos → video / Outfit 2: photos → video / Details and candid shots last",beforeShoot:"Before you start",shootTip:"Film vertical video in 9:16. Leave two seconds before and after each action. Capture close-ups, full looks and details. Set the light and background, and find Naoi’s favorite angle first.",all:"All",reel:"Reels",photo:"Photos",priorityOnly:"Priority",show:"Show",allStatus:"All stages",todo:"Not shot",done:"Shot",clearFilters:"Clear filters",empty:"No ideas match these filters.",storageError:"This browser cannot save your checks. You can still use them for this session.",referenceNote:"Use the framing, eye line or movement described on each card as a reference. For carousels, swipe to the indicated image.",instagramNote:"References open on Instagram. You may need to log in to view them.",saveNote:"Checks are saved in this browser on this device.",imageCredit:"Header illustration generated with ChatGPT",print:"Print / save PDF",progress:"SHOOT PROGRESS",showTodo:"Show remaining",soundOn:"Sound ON",soundOff:"Sound OFF",search:"Search a pose, outfit or idea",steps:"SHOOT STEPS",reference:"WHAT TO LOOK AT",partial:"Partial reference",exact:"Visual reference",priority:"★ Priority",addition:"NAOI VERSION",openReel:"Open reference reel",openPhoto:"Open reference photo",openPost:"Open reference post",extra:"Another reference ↗",slide:n=>`Carousel: image ${n}`,count:(n,r,p)=>`${n} ideas · ${r} reels / ${p} photos`,saved:id=>`${id} marked as shot`,undone:id=>`${id} marked as not shot`,loading:"Loading ideas…",loadError:"Could not load the ideas. Please reload the page.",source:"Original post",referenceFallback:"Use the framing or movement indicated in the linked reference."}
  };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch (_) {}
  const state = {lang:saved.lang === "en" ? "en" : "ja", sound:saved.sound === true, done:new Set(Array.isArray(saved.done) ? saved.done : []), type:"all", priority:false, status:"all", search:""};
  let data = [], audioContext, toastTimer;
  const $ = id => document.getElementById(id);
  const text = key => ui[state.lang][key];
  function persist() { try { localStorage.setItem(storageKey, JSON.stringify({lang:state.lang,sound:state.sound,done:[...state.done]})); } catch (_) { $("storage-note").hidden = false; } }
  function element(tag, className, content) { const n = document.createElement(tag); if(className) n.className = className; if(content !== undefined) n.textContent = content; return n; }
  function safeUrl(value) { try { const u = new URL(value); return u.protocol === "https:" && ["www.instagram.com","instagram.com"].includes(u.hostname) && /\/(?:p|reel)\/[A-Za-z0-9_-]+\/?/.test(u.pathname) ? u.href : null; } catch (_) { return null; } }
  function announce(message) { clearTimeout(toastTimer); $("toast").textContent = message; $("toast").classList.add("visible"); toastTimer=setTimeout(()=>$("toast").classList.remove("visible"),1800); }
  function playCheck() {
    if(!state.sound) return;
    try { const Audio = window.AudioContext || window.webkitAudioContext; if(!Audio) return; audioContext ||= new Audio(); if(audioContext.state === "suspended") audioContext.resume(); const oscillator=audioContext.createOscillator(), gain=audioContext.createGain(), now=audioContext.currentTime; oscillator.type="sine"; oscillator.frequency.setValueAtTime(690,now); oscillator.frequency.exponentialRampToValueAtTime(920,now+.08); gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(.035,now+.012); gain.gain.exponentialRampToValueAtTime(.0001,now+.13); oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(now); oscillator.stop(now+.14); } catch (_) {}
  }
  function local(item) { return state.lang === "en" && item.en ? item.en : item; }
  function setLanguage() {
    document.documentElement.lang=state.lang;
    document.title=state.lang === "ja" ? "NAOI / SHOOT NOTES — 私服撮影ガイド" : "NAOI / SHOOT NOTES — Shoot guide";
    document.querySelectorAll("[data-i18n]").forEach(node=>{ const value=text(node.dataset.i18n); if(typeof value === "string") { if(node.dataset.i18n === "description") node.innerHTML=value; else node.textContent=value; } });
    $("language").textContent=state.lang === "ja" ? "EN" : "JP";
    $("priority").querySelector("span:nth-child(2)").textContent=state.lang === "ja" ? "優先" : text("priorityOnly");
    $("language").setAttribute("aria-label",state.lang === "ja" ? "Switch to English" : "日本語に切り替える");
    $("search").placeholder=text("search"); $("search").setAttribute("aria-label",text("search"));
    $("status").setAttribute("aria-label",state.lang === "ja" ? "撮影状態で絞り込み" : "Filter by shoot status");
    $("sound").querySelector("span:last-child").textContent=text(state.sound ? "soundOn" : "soundOff");
    $("sound").setAttribute("aria-pressed",String(state.sound));
  }
  function buildCard(item) {
    const content=local(item), reference=item.reference || {}, checked=state.done.has(item.id), card=element("article","idea-card"+(checked ? " is-done" : ""));
    card.id=item.id; card.dataset.id=item.id;
    const top=element("div","card-top");
    top.append(element("span","kind"+(item.type === "photo" ? " photo" : ""),text(item.type)),element("span","card-id",item.id));
    if(content.duration || item.duration) top.append(element("span","duration",content.duration || item.duration));
    if(item.priority) top.append(element("span","priority-badge",text("priority")));
    const heading=element("h2"), anchor=element("a","",content.title); anchor.href="#"+item.id; heading.append(anchor);
    card.append(top,heading,element("p","card-summary",content.summary));
    const steps=element("div","steps-block"), list=element("ol"); steps.append(element("span","block-label",text("steps")));
    content.steps.forEach(step=>list.append(element("li","",step))); steps.append(list); card.append(steps);
    const ref=element("div","reference-block"), refHeading=element("div","reference-heading");
    refHeading.append(element("h3","",text("reference")),element("span","match-badge",text(reference.match === "exact" ? "exact" : "partial")));
    const referencePoint=state.lang === "en" ? (reference.referencePointEn || reference.referencePoint || text("referenceFallback")) : (reference.referencePoint || text("referenceFallback"));
    ref.append(refHeading,element("p","reference-point",referencePoint));
    const meta=element("div","reference-meta"), source=element("span","",reference.creator || "Instagram"); meta.append(source);
    if(reference.slide) meta.append(element("span","reference-slide",text("slide")(reference.slide)));
    ref.append(meta);
    const addition=state.lang === "en" ? reference.originalAdditionEn : reference.originalAddition;
    if(addition) ref.append(element("p","original-addition",text("addition")+"："+addition));
    card.append(ref);
    const bottom=element("div","card-bottom"), url=safeUrl(reference.url), open=element("a","reference-link",text(reference.sourceType === "photo" || (url && url.includes("/p/")) ? "openPhoto" : "openReel"));
    if(url) { open.href=url; open.target="_blank"; open.rel="noopener noreferrer"; } else { open.removeAttribute("href"); open.setAttribute("aria-disabled","true"); }
    open.append(element("span","","↗"));
    const label=element("label","done-label"), input=document.createElement("input"); input.type="checkbox"; input.checked=checked; input.setAttribute("aria-label",item.id+" "+content.title+" — "+text("done"));
    label.append(input,element("span","",text("done")));
    input.addEventListener("change",()=>{ if(input.checked) state.done.add(item.id); else state.done.delete(item.id); persist(); if(input.checked) playCheck(); announce(text(input.checked ? "saved" : "undone")(item.id)); if(state.status !== "all") render(); else { card.classList.toggle("is-done",input.checked); updateProgress(); } });
    bottom.append(open,label); card.append(bottom);
    if(reference.secondaryUrl && safeUrl(reference.secondaryUrl)) { const extra=element("a","reference-extra",text("extra")); extra.href=safeUrl(reference.secondaryUrl); extra.target="_blank"; extra.rel="noopener noreferrer"; card.append(extra); }
    return card;
  }
  function updateProgress() { const count=data.filter(item=>state.done.has(item.id)).length; $("progress-count").replaceChildren(document.createTextNode(String(count)+" "),element("span","","/ 50")); $("progress-fill").style.width=(count/50*100)+"%"; }
  function matches(item) { const content=local(item), query=state.search.trim().toLocaleLowerCase(); return (state.type === "all" || item.type === state.type) && (!state.priority || item.priority) && (state.status === "all" || (state.status === "done") === state.done.has(item.id)) && (!query || [item.id,item.title,item.summary,...item.tags,content.title,content.summary,...(content.tags || []),item.reference?.creator,item.reference?.referencePoint].join(" ").toLocaleLowerCase().includes(query)); }
  function render() {
    const visible=data.filter(matches), fragment=document.createDocumentFragment(); visible.forEach(item=>fragment.append(buildCard(item))); $("ideas").replaceChildren(fragment);
    const reels=visible.filter(item=>item.type === "reel").length; $("results").textContent=text("count")(visible.length,reels,visible.length-reels); $("empty").hidden=visible.length > 0;
    document.querySelectorAll("[data-type]").forEach(button=>{ const active=button.dataset.type === state.type; button.classList.toggle("active",active); button.setAttribute("aria-pressed",String(active)); });
    $("priority").setAttribute("aria-pressed",String(state.priority)); $("priority").querySelector("span:first-child").textContent=state.priority ? "★" : "☆";
    $("clear").hidden=state.type === "all" && !state.priority && state.status === "all" && !state.search; $("status").value=state.status; updateProgress();
  }
  function clearFilters() { state.type="all"; state.priority=false; state.status="all"; state.search=""; $("search").value=""; render(); }
  document.querySelectorAll("[data-type]").forEach(button=>button.addEventListener("click",()=>{state.type=button.dataset.type;render();}));
  $("priority").addEventListener("click",()=>{state.priority=!state.priority;render();});
  $("status").addEventListener("change",event=>{state.status=event.target.value;render();});
  $("search").addEventListener("input",event=>{state.search=event.target.value;render();});
  $("clear").addEventListener("click",clearFilters); $("empty-clear").addEventListener("click",clearFilters);
  $("language").addEventListener("click",()=>{state.lang=state.lang === "ja" ? "en" : "ja";persist();setLanguage();render();});
  $("sound").addEventListener("click",()=>{state.sound=!state.sound;persist();setLanguage();if(state.sound)playCheck();});
  $("show-todo").addEventListener("click",()=>{state.status="todo";render();$("ideas").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",block:"start"});});
  $("print").addEventListener("click",()=>window.print());
  window.addEventListener("hashchange",()=>focusHash());
  function focusHash() { const id=location.hash.slice(1); if(!/^[RP]\d{2}$/.test(id) || !data.some(item=>item.id === id))return; const filteredOut=!document.getElementById(id); if(filteredOut)clearFilters(); const card=document.getElementById(id); card?.scrollIntoView({block:"start"}); card?.classList.add("is-highlighted"); setTimeout(()=>card?.classList.remove("is-highlighted"),1800); }
  setLanguage(); $("results").textContent=text("loading");
  fetch("data.json?v=20261110-1",{cache:"no-cache"}).then(response=>{if(!response.ok)throw Error("data");return response.json();}).then(result=>{ if(!Array.isArray(result) || result.length !== 50 || result.some(item=>!item.reference || !safeUrl(item.reference.url)))throw Error("references"); data=result; render(); focusHash(); }).catch(()=>{ $("results").textContent=text("loadError"); });
})();
