import { html, utl_renderObjects, utl_pageId } from "../base/_utils";
import { blogPosts } from "../data/_blog-posts";
import recentBlogPostCard from "../components/templates/_recent-blog-post-card";

const pageId = utl_pageId();

const recentPosts = blogPosts
    .filter((post) => post.id !== pageId) // remove current post
    .slice(0, 3); // take first 3

console.log(recentPosts);

utl_renderObjects({
    data: recentPosts,
    template: (blogPost) => html`<div class="col">${recentBlogPostCard(blogPost, "../../")}</div>`,
    target: "#recent-articles",
});
