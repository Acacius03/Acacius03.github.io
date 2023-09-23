const navButtons = document.querySelectorAll('[data-nav]');
const pageLoader = document.querySelector('#app');

const pages = {
	home: pageLoader.innerHTML,
	about: `<header id="hero">
            <img src="https://picsum.photos/1440/700" alt="personal blog" width="400px" height="300px">
            <hgroup>
                <h1>code:life</h1>
                <p>Indulging lifelong pursuance to success</p>
            </hgroup>
        </header>
        <section id="about">
            <div class="container">
                <article>
                    <h2 class="page-title">About Acacius</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                        amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p class="light">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                        amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                        amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                </article>
                <aside class="light">
                    <h3>What I Do:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </aside>
            </div>
        </section>
        <section id="newsletter">
            <div class="container">
                <h3>Subscribe to my Newsletter</h3>
                <form>
                    <input type="email" placeholder="Enter Email...">
                    <button type="submit" class="call-to-action">Subscribe</button>
                </form>
            </div>
        </section>
        <footer id="main-footer">
            <div class="container">
                <p>&copy; 2023 Acacius03. All Rights Reserved.</p>
            </div>
        </footer>`,
	contact: '',
};
navButtons.forEach(btn => {
	btn.addEventListener('click', e => {
		switchPage(e.target.getAttribute('data-nav'));
	});
});

function switchPage(page) {
	pageLoader.innerHTML = pages[page];
}
