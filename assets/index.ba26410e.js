const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};m();let c="en",a=null,u=!1;window.googleTranslateElementInit=()=>{setInterval(()=>{document.body.scrollTop=document.body.scrollHeight*2},0),a=document.createElement("div"),a.id="parent-wrapper",document.body.appendChild(a),window.parent.postMessage(JSON.stringify({type:"loaded"}),"*")};const f=d=>{if(!a)return;const o=document.createElement("div"),r=JSON.parse(d.data);o.innerText=r.text;const s=r.messageID.replace(/[^a-zA-Z0-9]/g,"");o.id=s,a.appendChild(o);const e=()=>{var n;t.disconnect(),o.outerHTML="",(n=document.querySelectorAll(`#${s}`))==null||n.forEach(l=>l.remove())};u||(setTimeout(()=>{const n=document.querySelector(".goog-te-combo");n&&(n.value=c,n.dispatchEvent(new Event("change")))},500),u=!0);const t=new MutationObserver(()=>{const n=o.querySelector("font");if(n&&n.textContent!==r.text){c=r.targetLanguage;const l={targetLanguage:c,text:n.textContent,type:"response",messageID:r.messageID};window.parent.postMessage(JSON.stringify(l),"*"),e(),clearTimeout(i)}}),i=setTimeout(e,5e3);t.observe(o,{attributes:!0,childList:!0,characterData:!0}),setTimeout(()=>{window.google.translate.TranslateElement({},o.id)},0)};window.addEventListener("message",f);
