import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".search-form"),m=document.querySelector(".pictures"),c=u.hits;console.log(c);function a(o){return o.map(({webformatURL:r,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:p})=>`
    <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${i}"
            width="360"
            height="200"
          />
        </a>
    `).join("")}m.insertAdjacentHTML("afterbegin",a(c));function u(o){return fetch(`https://pixabay.com/api/?key=44868701-a6c2bf036a020cab1604664f3&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}f.addEventListener("submit",h);function h(o){o.preventDefault();const r=o.currentTarget,n=r.elements.text.value.toLowerCase();u(n).then(a).catch(d).finally(r.reset())}
//# sourceMappingURL=commonHelpers.js.map
