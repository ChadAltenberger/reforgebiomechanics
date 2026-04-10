import { html } from "../../base/_utils";

export default function featuredBlogPostCard(blogPost, path) {
    return html`
        <div class="card bg-primary accent-container text-white shadow">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 col-xl-7">
                        <img class="img-fluid h-100 object-fit-cover" src="${path}${blogPost.thumbnail}" alt="${blogPost.thumbnailAlt}" />
                    </div>
                    <div class="col-lg-6 col-xl-5">
                        <div class="h-100 p-4 align-content-center">
                            <small class="opacity-80">${blogPost.date}</small>
                            <h2 class="text-white">${blogPost.title}</h2>
                            <p class="small pe-1">${blogPost.previewText}</p>
                            <a class="btn btn-sm btn-secondary" href="./${blogPost.link}">
                                <div>View Article</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
