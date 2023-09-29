import { blogPostData } from './blogPostData.js';
import { HomePage, AboutPage, BlogPage } from './Layout.js';
import { BlogPost } from './components/BlogPost.js';
import { FeaturedPost } from './components/FeaturedPost.js';
// Variable Declaration
const audio = new Audio('../click_audio.mp3');
audio.volume = 0.5;
const navbar = document.querySelector('#main-nav');
const navButtons = document.querySelectorAll('[data-nav]');
const pageLoader = document.querySelector('#app');
const categories = [];
let blogFilters = [];
let Featured, Other, favBtns, filterBtns;
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
	pageLoader.innerHTML = HomePage;
	Featured = document.querySelector('#featured-blogs .blogs-container');
	Other = document.querySelector('#other-blogs .blogs-container');
	generatePost();
	document.querySelectorAll('[data-blog-id]').forEach(btn => {
		btn.addEventListener('click', e => {
			createBlogPage(e.target.getAttribute('data-blog-id'));
		});
	});
	filterBtns = document.querySelectorAll('[data-blog-filter]');
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
			audio.currentTime = 0;
			audio.play();
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
window.addEventListener('scroll', () => {
	document.getElementById('toggle-nav').checked = false;
	if (window.scrollY > 0) {
		navbar.style.backgroundColor = 'black';
		navbar.style.boxShadow = '0 0 1px 0 var(--color-grey)';
	} else {
		navbar.style.backgroundColor = 'rgba(0,0,0,0)';
		navbar.style.boxShadow = 'unset';
	}
	if (window.scrollY > scrollVal && window.scrollY > 100) {
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

window.addEventListener('resize', () => {
	document.getElementById('toggle-nav').checked = false;
});
