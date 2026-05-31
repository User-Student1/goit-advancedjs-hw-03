import{a as u,S as d,i}from"./assets/vendor-B0XWlCgv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="56089833-df6fa8cd94c036835afda3ed5";function g(a){return u.get("https://pixabay.com/api/",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(({webformatURL:r,largeImageURL:n,tags:e,likes:s,views:o,comments:p,downloads:f})=>`<li class="gallery-item">
            <a href="${n}">
                <img
                class="gallery-img"
                src="${r}"
                alt="${e}"
                loading="lazy"
                />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <span class="info-label">Likes</span>
                    <span class="info-value">${s}</span>
                </p>
                <p class="gallery-info-item">
                    <span class="info-label">Views</span>
                    <span class="info-value">${o}</span>
                </p>
                <p class="gallery-info-item">
                    <span class="info-label">Comments</span>
                    <span class="info-value">${p}</span>
                </p>
                <p class="gallery-info-item">
                    <span class="info-label">Downloads</span>
                    <span class="info-value">${f}</span>
                </p>
            </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function b(){c.innerHTML=""}function L(){document.getElementById("loader").classList.add("is-visible")}function l(){document.getElementById("loader").classList.remove("is-visible")}const v=document.querySelector(".form");v.addEventListener("submit",a=>{a.preventDefault();const t=a.target["search-text"].value.trim();t&&(b(),L(),g(t).then(r=>{if(l(),r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconColor:"#FAFAFB",progressBarColor:"#B51B1B",close:!0,theme:"dark"});return}h(r.hits)}).catch(r=>{l(),i.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}))});
//# sourceMappingURL=index.js.map
