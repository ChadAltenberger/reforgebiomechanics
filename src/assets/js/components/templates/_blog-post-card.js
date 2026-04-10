import { html } from "../../base/_utils";

export default function blogPostCard(blogPost, path) {
    return html`
        <div class="card">
            <img class="card-img-top" src="${path}${blogPost.thumbnail}" alt="${blogPost.thumbnailAlt}" />
            <div class="card-body ps-0">
                <small class="opacity-80">${blogPost.date}</small>
                <h2 class="h6">${blogPost.title}</h2>
                <a class="btn btn-sm btn-primary" href="./${blogPost.link}">
                    <div>View Article</div>
                </a>
            </div>
        </div>
    `;
}
