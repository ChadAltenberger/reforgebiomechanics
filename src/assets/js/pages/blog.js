import { html, utl_renderObjects } from "../base/_utils";
import { blogPosts } from "../data/_blog-posts";
import featuredBlogPostCard from "../components/templates/_featured-blog-post-card";
import blogPostCard from "../components/templates/_blog-post-card";

utl_renderObjects({
    data: blogPosts,
    template: (blogPost) => (blogPost.featured ? html`<div class="col">${featuredBlogPostCard(blogPost, "../")}</div>` : html`<div class="col">${blogPostCard(blogPost, "../")}</div>`),
    target: (blogPost) => (blogPost.featured ? "#featured-post" : "#older-posts"),
});
