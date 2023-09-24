function createFeaturedPost(post) {
	let blogPost = document.createElement('article');
	blogPost.classList.add('featured-post');
	blogPost.innerHTML = `
		<header class="blog-cover">
			<img src="${post.photo_url}" alt="${post.title}">
			<hgroup class="blog-header">
				<h2 class="blog-title primary truncate">${post.title}</h2>
				<small class="blog-post-date truncate">${post.created_at}</small>
			</hgroup>
		</header>
		<section class="blog-context">
			<div class="blog-tool">
				<small class="blog-category">${post.category}</small>
				<button class="fa-regular fa-heart"></button>
			</div>
			<summary class="truncate">${post.description}</summary>
		</section>
		<button class="call-to-action blog-btn" data-blog-id=${post.blog_id}>READ MORE</button>`;
	return blogPost;
}
function createBlogPost(post) {
	let blogPost = document.createElement('article');
	blogPost.classList.add('blog-post');
	blogPost.innerHTML = `
	<div class='blog-showcase-photo'>
		<img src="${post.photo_url}" alt="${post.title}">
	</div>
	<div class='blog-post-details'>
		<header class="blog-header">
			<h2 class="blog-title primary truncate">${post.title}</h2>
			<small class="blog-post-date truncate">${post.created_at}</small>
		</header>
		<section class="blog-context">
			<summary class="truncate">${post.description}</summary>
			<small class="blog-category">${post.category}</small>
			<button class="fa-regular fa-heart"></button>
		</section>
	</div>`;
	return blogPost;
}
