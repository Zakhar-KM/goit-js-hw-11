import{a as c,S as d}from"./assets/vendor-D-qyWpIA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="50872380-a1850de8631dfd470b651c05b",f="https://pixabay.com/api/";function p(s,o=1,n=9){const t={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n};return c.get(f,{params:t}).then(e=>e.data)}let a=null;function m(s){const o=document.getElementById("gallery"),n=s.map(t=>`
      <a class="gallery__item" href="${t.largeImageURL}">
        <div class="photo-card">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </div>
      </a>
    `).join("");o.innerHTML=n,a?a.refresh():a=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){document.getElementById("gallery").innerHTML=""}function y(){document.querySelector(".loader-container").classList.remove("hidden")}function g(){document.querySelector(".loader-container").classList.add("hidden")}function b(){iziToast.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}const l=document.getElementById("search-form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();o&&(h(),y(),p(o,1).then(n=>{if(n.hits.length===0){b();return}m(n.hits),l.reset()}).catch(n=>{console.log("Помилка при завантаженні:",n)}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
