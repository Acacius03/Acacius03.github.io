import { HomePage, AboutPage, BlogPage } from './Layout.js';
import { blogPostData } from './blogPostData.js';
import { FeaturedPost } from './components/FeaturedPost.js';
import { BlogPost } from './components/BlogPost.js';
// Variable Declaration
const heartBtnClickAudio = new Audio('../click_audio.mp3');
heartBtnClickAudio.volume = 0.5;
const navbar = document.querySelector('#main-nav');
let navButtons = document.querySelectorAll('[data-nav]');
const pageLoader = document.querySelector('#app');
const categories = [];
let blogFilters = [];
let Featured, Other;
let scrollVal = 0;
let current_page;
let home_page_html;
// Function Declaration
function createBlogPage(id) {
	blogPostData.forEach(post => {
		if (post.blog_id == id) {
			switchPage('blog_page', BlogPage(post));
		}
	});
}
function navBtnAddAction() {
	navButtons = document.querySelectorAll('[data-nav]');
	navButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			document.getElementById('toggle-nav').checked = false;
			switchPage(e.target.getAttribute('data-nav'));
			navButtons.forEach(btn => {
				btn.classList.remove('nav-active');
				if (
					btn.getAttribute('data-nav') ===
					e.target.getAttribute('data-nav')
				) {
					btn.classList.add('nav-active');
				}
			});
		});
	});
}
function switchPage(page, blogPage) {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
	if (current_page === page) {
		return;
	}
	current_page = page;
	if (page === 'blog_page' && blogPage !== '') {
		pageLoader.innerHTML = blogPage;
		navButtons.forEach(btn => {
			btn.classList.remove('nav-active');
		});
	} else if (page == 'home') {
		Home();
	} else {
		pageLoader.innerHTML = AboutPage;
	}
	navBtnAddAction();
}
function generatePost() {
	blogPostData.forEach((post, index) => {
		if (!categories.includes(post.category)) {
			categories.push(post.category);
		}
		if (index < 6) {
			Featured.appendChild(FeaturedPost(post));
		} else {
			Other.appendChild(BlogPost(post));
		}
	});
	categories.sort().forEach(tag => {
		document.querySelector('#blog-topics .wrapper').innerHTML += `
		<button class="blog-category corner-pill" data-blog-filter="false">${tag}</button>
		`;
	});
	document.querySelector('#blog-topics .wrapper').innerHTML += `
		<button id="blog-category-clear" class="blog-category corner-pill fa-solid fa-close" data-blog-filter></button>
		`;
}
function Home() {
	if (Featured && Other) {
		pageLoader.innerHTML = home_page_html;
	} else {
		pageLoader.innerHTML = HomePage;
		Featured = document.querySelector('#featured-blogs .blogs-container');
		Other = document.querySelector('#other-blogs .blogs-container');
		generatePost();
		home_page_html = pageLoader.innerHTML;
	}
	// Blog Page Loader
	document.querySelectorAll('[data-blog-id]').forEach(btn => {
		btn.addEventListener('click', e => {
			createBlogPage(e.target.getAttribute('data-blog-id'));
		});
	});
	// Blog Filter
	const filterBtns = document.querySelectorAll('[data-blog-filter]');
	filterBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			if (btn.innerText === '') {
				blogFilters = [];
				filterBlogs(blogFilters);
				filterBtns.forEach(btn => {
					btn.setAttribute('data-blog-filter', 'false');
				});
				return;
			}
			const state =
				btn.getAttribute('data-blog-filter') === 'false'
					? 'true'
					: 'false';
			btn.setAttribute('data-blog-filter', state);
			if (state === 'true') {
				blogFilters.push(btn.innerText);
			} else {
				const arr = blogFilters;
				blogFilters = [];
				arr.forEach(a => {
					if (a !== btn.innerText) {
						blogFilters.push(a);
					}
				});
			}
			filterBlogs(blogFilters);
		});
	});
	document.querySelectorAll('[data-blog-tag]').forEach(btn => {
		btn.addEventListener('click', () => {
			filterBtns.forEach(filter => {
				if (
					btn.innerText === filter.innerText &&
					!blogFilters.includes(btn.innerText)
				) {
					filter.setAttribute('data-blog-filter', 'true');
					blogFilters.push(filter.innerText);
					filterBlogs(blogFilters);
				}
			});
		});
	});
	// Heart Button
	document.querySelectorAll('[data-blog-favorite]').forEach(btn => {
		btn.addEventListener('click', () => {
			const icon = btn.querySelector('i');
			icon.classList.toggle('fa-regular');
			icon.classList.toggle('fa-solid');
			const state =
				btn.getAttribute('data-blog-favorite') === 'false'
					? 'true'
					: 'false';
			heartBtnClickAudio.currentTime = 0;
			heartBtnClickAudio.play();
			btn.setAttribute('data-blog-favorite', state);
		});
	});
}
function filterBlogs(filter) {
	Other.querySelectorAll('article').forEach(blog => {
		if (
			filter.includes(blog.querySelector('[data-blog-tag]').innerText) ||
			filter.length === 0
		) {
			blog.style.display = 'flex';
		} else {
			blog.style.display = 'none';
		}
	});
}
window.addEventListener('resize', () => {
	document.getElementById('toggle-nav').checked = false;
});
window.addEventListener('scroll', () => {
	document.getElementById('toggle-nav').checked = false;
	if (window.scrollY > 0) {
		navbar.classList.add('not_transparent');
	} else {
		navbar.classList.remove('not_transparent');
	}
	if (window.scrollY > scrollVal && window.scrollY > 100) {
		navbar.classList.add('hide');
	} else {
		navbar.classList.remove('hide');
	}
	scrollVal = window.scrollY;
});
switchPage('home');
