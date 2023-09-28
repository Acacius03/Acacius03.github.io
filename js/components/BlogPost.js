export const BlogPost = post => {
	let blogPost = document.createElement('article');
	blogPost.classList.add('post');
	blogPost.innerHTML = `
	<figure  data-blog-id=${post.blog_id}>
		<img src="${post.photo_url}" alt="${post.title}">
	</figure>
	<div class='blog-body'>
		<header>
			<h2 class="blog-title primary truncate" data-blog-id=${post.blog_id}>${post.title}</h2>
			<small class="blog-post-date truncate">${post.created_at}</small>
		</header>
		<summary class="truncate" data-blog-id=${post.blog_id}>${post.description}</summary>
		<div class="blog-tool flex-between-center">
			<button class="blog-category blog-btn" data-blog-tag>${post.category}</button>
			<button class="blog-btn" data-blog-favorite="false">
				<i class="fa-regular fa-heart"></i>
			</button>
		</div>
	</div>`;
	return blogPost;
};
