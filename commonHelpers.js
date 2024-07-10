import{i as u}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(o){return fetch(`https://pixabay.com/api/?key=44868701-a6c2bf036a020cab1604664f3&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const l=c.hits;function a(o){return o.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:t,comments:s,downloads:p})=>`
    <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${n}"
            width="360"
            height="200"
          />
        </a>
    `).join("")}const f=document.querySelector(".pictures");f.insertAdjacentHTML("afterbegin",a(l));const m=document.querySelector(".search-form");m.addEventListener("submit",d);function d(o){o.preventDefault();const r=o.currentTarget,i=r.elements.text.value.toLowerCase();c(i).then(a).catch(h).finally(r.reset())}function h(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
