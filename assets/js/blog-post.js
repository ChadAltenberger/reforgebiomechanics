!function(){"use strict";function e(e,l){return t`
        <li class="small mb-3">
            <a class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover" href="../${e.link}">
                <img class="img-fluid opacity-85-hover" src="${l}${e.thumbnail}" alt="${e.thumbnailAlt}" />
                ${e.title}
            </a>
        </li>
    `}const t=String.raw,l=undefined,a=({data:e,template:t,target:l})=>{e.forEach((e=>{const a="function"==typeof l?l(e):l,i=document.querySelector(a);i&&i.insertAdjacentHTML("beforeend",t(e))}))},i=[{featured:!0,id:"wrangling-calf-muscle",date:"April 10, 2026",title:"Wrangling the Calf Muscle",previewText:"The blind spot a lot of folks have about what the calf muscle really does and how it ties into the knee is an oversight...",thumbnail:"assets/media/pages/blog/calf-thumbnail.webp",thumbnailAlt:"Man in squat position with barbell in hands",link:"wrangling-calf-muscle/index.html"},{id:"scapula-101",date:"March 2, 2026",title:"Scapula 101: The Hidden Key to Shoulder Health",thumbnail:"assets/media/pages/blog/scapula-thumbnail.webp",thumbnailAlt:"",link:"scapula-101/index.html"}],n=(()=>document.querySelector("body").getAttribute("id"))(),s=i.filter((e=>e.id!==n)).slice(0,3);console.log(s),a({data:s,template:l=>t`<div class="col">${e(l,"../../")}</div>`,target:"#recent-articles"})}();