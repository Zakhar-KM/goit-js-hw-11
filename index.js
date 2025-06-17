import{a as d,S as u,i as f}from"./assets/vendor-67BWzQEt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="50872380-a1850de8631dfd470b651c05b",m="https://pixabay.com/api/";function h(n,o=1,s=9){const t={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s};return d.get(m,{params:t}).then(e=>e.data)}let a=null;function y(n){const o=document.getElementById("gallery"),s=n.map(t=>`
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
    `).join("");o.innerHTML=s,a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){document.getElementById("gallery").innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}const c=document.getElementById("search-form");c.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements.searchQuery.value.trim();o&&(g(),b(),h(o,1).then(s=>{if(l(),s.hits.length===0){L();return}y(s.hits),c.reset()}).catch(s=>{l(),console.log("Ошибка при загрузке картинок:",s)}))});function L(){f.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}
//# sourceMappingURL=index.js.map
