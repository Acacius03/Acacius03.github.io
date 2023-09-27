import { blogPostData } from './blogPostData.js';
import { HomePage, AboutPage, BlogPage } from './Layout.js';
import { BlogPost } from './components/BlogPost.js';
import { FeaturedPost } from './components/FeaturedPost.js';
// Variable Declaration
const navbar = document.querySelector('#main-nav');
const navButtons = document.querySelectorAll('[data-nav]');
const pageLoader = document.querySelector('#app');
let Featured, Other, favBtns;
let scrollVal = 0;
// Function Declaration
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
			Featured.appendChild(FeaturedPost(post));
		} else {
			Other.appendChild(BlogPost(post));
		}
	});
}
function Home() {
	pageLoader.innerHTML = HomePage;
	Featured = document.querySelector('#featured-blogs .blogs-container');
	Other = document.querySelector('#other-blogs .blogs-container');
	generatePost();
	document.querySelectorAll('[data-blog-id]').forEach(btn => {
		btn.addEventListener('click', e => {
			createBlogPage(e.target.getAttribute('data-blog-id'));
		});
	});
	document.querySelectorAll('[data-blog-filter]').forEach(btn => {
		btn.addEventListener('click', () => {
			filterBlogs(btn.innerText);
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
		});
	});
}
function filterBlogs(category) {
	Other.querySelectorAll('article').forEach(blog => {
		if (category === blog.querySelector('[data-blog-filter]').innerText) {
			blog.style.display = 'flex';
		} else {
			blog.style.display = 'none';
		}
	});
}
window.addEventListener('scroll', () => {
	if (window.scrollY > scrollVal) {
		navbar.classList.add('hide');
	} else {
		navbar.classList.remove('hide');
	}
	scrollVal = window.scrollY;
});
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
