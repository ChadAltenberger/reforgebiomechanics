!function(){"use strict";function a(a,t){return l`
        <div class="card bg-primary accent-container text-white shadow">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 col-xl-7">
                        <img class="img-fluid h-100 object-fit-cover" src="${t}${a.thumbnail}" alt="${a.thumbnailAlt}" />
                    </div>
                    <div class="col-lg-6 col-xl-5">
                        <div class="h-100 p-4 align-content-center">
                            <small class="opacity-80">${a.date}</small>
                            <h2 class="text-white">${a.title}</h2>
                            <p class="small pe-1">${a.previewText}</p>
                            <a class="btn btn-sm btn-secondary" href="./${a.link}">
                                <div>View Article</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}function t(a,t){return l`
        <div class="card">
            <img class="card-img-top" src="${t}${a.thumbnail}" alt="${a.thumbnailAlt}" />
            <div class="card-body ps-0">
                <small class="opacity-80">${a.date}</small>
                <h2 class="h6">${a.title}</h2>
                <a class="btn btn-sm btn-primary" href="./${a.link}">
                    <div>View Article</div>
                </a>
            </div>
        </div>
    `}const l=String.raw,e=undefined,i=undefined;(({data:a,template:t,target:l})=>{a.forEach((a=>{const e="function"==typeof l?l(a):l,i=document.querySelector(e);i&&i.insertAdjacentHTML("beforeend",t(a))}))})({data:[{featured:!0,id:"wrangling-calf-muscle",date:"April 10, 2026",title:"Wrangling the Calf Muscle",previewText:"The blind spot a lot of folks have about what the calf muscle really does and how it ties into the knee is an oversight...",thumbnail:"assets/media/pages/blog/calf-thumbnail.webp",thumbnailAlt:"Man in squat position with barbell in hands",link:"wrangling-calf-muscle/index.html"},{id:"scapula-101",date:"March 2, 2026",title:"Scapula 101: The Hidden Key to Shoulder Health",thumbnail:"assets/media/pages/blog/scapula-thumbnail.webp",thumbnailAlt:"",link:"scapula-101/index.html"}],template:e=>e.featured?l`<div class="col">${a(e,"../")}</div>`:l`<div class="col">${t(e,"../")}</div>`,target:a=>a.featured?"#featured-post":"#older-posts"})}();