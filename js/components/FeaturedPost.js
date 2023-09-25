export const FeaturedPost = post => {
	let blogPost = document.createElement('article');
	blogPost.classList.add('featured-post');
	blogPost.innerHTML = `
		<figure class="blog-cover">
			<img src="${post.photo_url}" alt="${post.title}">
			<figcaption class="blog-header">
				<h2 class="blog-title primary truncate" data-blog-id=${post.blog_id}>${post.title}</h2>
				<small class="blog-post-date truncate">${post.created_at}</small>
			</figcaption>
		</figure>
		<section class="blog-context">
			<div class="blog-tool flex-between-center">
				<button class="blog-category blog-btn">${post.category}</button>
				<button class="blog-btn" data-blog-favorite="false">
					<i class="fa-regular fa-heart"></i>
				</button>
			</div>
			<summary class="truncate" data-blog-id=${post.blog_id}>${post.description}</summary>
		</section>
		<button class="call-to-action read-more" data-blog-id=${post.blog_id}>READ MORE</button>`;
	return blogPost;
};
