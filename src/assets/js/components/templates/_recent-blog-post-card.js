import { html } from "../../base/_utils";

export default function recentBlogPostCard(blogPost, path) {
    return html`
        <li class="small mb-3">
            <a class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover" href="../${blogPost.link}">
                <img class="img-fluid opacity-85-hover" src="${path}${blogPost.thumbnail}" alt="${blogPost.thumbnailAlt}" />
                ${blogPost.title}
            </a>
        </li>
    `;
}
