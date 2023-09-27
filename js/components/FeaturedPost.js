export const FeaturedPost = post => {
	let blogPost = document.createElement('article');
	blogPost.classList.add('post');
	blogPost.innerHTML = `
		<figure class="blog-cover" data-blog-id=${post.blog_id}>
			<img src="${post.photo_url}" alt="${post.title}">
			<figcaption class="blog-header">
				<h2 class="blog-title primary truncate" data-blog-id=${post.blog_id}>${post.title}</h2>
				<small class="blog-post-date truncate">${post.created_at}</small>
			</figcaption>
		</figure>
		<section>
			<div class="blog-tool flex-between-center">
				<button class="blog-category blog-btn" data-blog-tag>${post.category}</button>
				<button class="blog-btn" data-blog-favorite="false">
					<i class="fa-regular fa-heart"></i>
				</button>
			</div>
			<summary class="truncate">${post.description}</summary>
		</section>
		<button class="cta read-more" data-blog-id=${post.blog_id}>READ MORE</button>`;
	return blogPost;
};
