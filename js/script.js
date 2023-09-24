import { HomePage } from './HomePage.js';
import { AboutPage } from './AboutPage.js';
import { BlogPage } from './BlogPage.js';
import { blogPostData } from './blogPostData.js';
const navButtons = document.querySelectorAll('[data-nav]');
navButtons.forEach(btn => {
	btn.addEventListener('click', e => {
		navButtons.forEach(btn => {
			btn.classList.remove('nav-active');
			if (
				btn.getAttribute('data-nav') ===
				e.target.getAttribute('data-nav')
			) {
				btn.classList.add('nav-active');
			}
		});
		switchPage(e.target.getAttribute('data-nav'));
	});
});
const pageLoader = document.querySelector('#app');
pageLoader.innerHTML = HomePage;
let FeaturedblogsArea = document.querySelector(
	'#featured-blogs .blogs-container'
);
let OtherblogsArea = document.querySelector('#other-blogs .blogs-container');
generatePost();
let readMoreBtn = document.querySelectorAll('[data-blog-id]');
readMoreBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		openBlogPage(e.target.getAttribute('data-blog-id'));
	});
});
function openBlogPage(id) {
	blogPostData.forEach(post => {
		if (post.blog_id == id) {
			switchPage('blog_page', BlogPage(post));
		}
	});
}
function switchPage(page, blogPage) {
	if (page === 'blog_page' && blogPage !== '') {
		pageLoader.innerHTML = blogPage;
	} else if (page == 'home') {
		pageLoader.innerHTML = HomePage;
		FeaturedblogsArea = document.querySelector(
			'#featured-blogs .blogs-container'
		);
		OtherblogsArea = document.querySelector(
			'#other-blogs .blogs-container'
		);
		generatePost();
		document.querySelectorAll('[data-blog-id]').forEach(btn => {
			btn.addEventListener('click', e => {
				openBlogPage(e.target.getAttribute('data-blog-id'));
			});
		});
	} else {
		pageLoader.innerHTML = AboutPage;
	}
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
function generatePost() {
	let i = 0;
	blogPostData.forEach(post => {
		console.l;
		if (i < 6) {
			FeaturedblogsArea.appendChild(createFeaturedPost(post));
		} else {
			OtherblogsArea.appendChild(createBlogPost(post));
		}
		i += 1;
	});
}
