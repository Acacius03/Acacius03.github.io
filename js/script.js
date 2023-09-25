import { blogPostData } from './blogPostData.js';
import { HomePage, AboutPage, BlogPage } from './Layout.js';
import { BlogPost } from './components/BlogPost.js';
import { FeaturedPost } from './components/FeaturedPost.js';

const navButtons = document.querySelectorAll('[data-nav]');
const pageLoader = document.querySelector('#app');
let FeaturedblogsArea, OtherblogsArea, favBtns;

function createBlogPage(id) {
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
		Home();
	} else {
		pageLoader.innerHTML = AboutPage;
	}
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
function generatePost() {
	blogPostData.forEach((post, index) => {
		if (index < 6) {
			FeaturedblogsArea.appendChild(FeaturedPost(post));
		} else {
			OtherblogsArea.appendChild(BlogPost(post));
		}
	});
}
function Home() {
	pageLoader.innerHTML = HomePage;
	FeaturedblogsArea = document.querySelector(
		'#featured-blogs .blogs-container'
	);
	OtherblogsArea = document.querySelector('#other-blogs .blogs-container');
	generatePost();
	document.querySelectorAll('[data-blog-id]').forEach(btn => {
		btn.addEventListener('click', e => {
			createBlogPage(e.target.getAttribute('data-blog-id'));
		});
	});
	favBtns = document.querySelectorAll('[data-blog-favorite]');
	favBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const icon = btn.querySelector('i');
			icon.classList.toggle('fa-regular');
			icon.classList.toggle('fa-solid');
			const state =
				btn.getAttribute('data-blog-favorite') === 'false'
					? 'true'
					: 'false';
			btn.setAttribute('data-blog-favorite', state);
			console.log(state);
		});
	});
}

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
Home();
