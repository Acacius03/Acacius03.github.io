export const HomePage = `
<header id="hero">
    <img src="https://picsum.photos/1440/700" alt="personal blog" width="400px" height="300px">
    <hgroup>
        <h1>code:life</h1>
        <p>Indulging lifelong pursuance to success</p>
    </hgroup>
</header>
<section id="featured-blogs">
    <div class="container">
        <h2 class="section-title">Featured Blogs</h2>
        <div class="wrapper blogs-container"></div>
    </div>
</section>
<div class="container two-col">
    <aside id="blog-topics">
        <h2>Pick a topic</h2>
        <div class="wrapper">
        </div>
        <footer id="main-footer">
            <p>&copy; 2023 Acacius03 | All Rights Reserved.</p>
        </footer>
    </aside>
    <section id="other-blogs">
        <h2 class="section-title">Other Blogs</h2>
        <div class="blogs-container"></div>
    </section>
</div>
`;

export const AboutPage = `
<header id="hero">
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
        <h3 class="prevent-select">Subscribe to my Newsletter</h3>
        <form>
            <input type="email" placeholder="Enter Email...">
            <button type="submit" class="cta">Subscribe</button>
        </form>
    </div>
</section>
<footer id="main-footer">
    <div class="container">
        <div id="footer_nav">
            <nav>
                <button data-nav="home">Home</button>
                <button data-nav="about">About</button>
            </nav>
            <nav class="my_social_media_accounts">
                <h3>Contact Us!</h3>
                <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube fa-linkedin-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
            </nav>
        </div>
    </div>
    <p id="address">Acacius03 &#9679; 4043 N Ravenswood Ave, Suite 316, Chicago, II, 60613 &#9679; <a href="#">Map</a> &#9679; Main (773) 348,4581 &#9679; Support (773) 353,8314</p>
    <nav class="other">
        <a href="#">Privacy</a>|
        <a href="#">Sitemap</a>|
        <a href="#">Terms & Conditions</a>|
        <p>&copy; 2023 Acacius03</p>
    </nav>
</footer>
`;

export const BlogPage = post => `
<Article id="blog">
    <figure id="hero">
        <img src="${post.photo_url}" alt="${post.title}" width="400px" height="300px">
    </figure>
    <div class="container light corner-round">
        <header id="blog-header">
            <h1>${post.title}</h1>
            <p>${post.description}</p>
            <small>${post.created_at}</small>
        </header>
        <section id="blog-context">${post.content_html}</section>
    <footer id="main-footer">
        <div class="container">
            <div id="footer_nav">
                <nav>
                    <button data-nav="home">Home</button>
                    <button data-nav="about">About</button>
                </nav>
                <nav class="my_social_media_accounts">
                    <h3>Contact Us!</h3>
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube fa-linkedin-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                </nav>
            </div>
        </div>
        <p id="address">Acacius03 &#9679; 4043 N Ravenswood Ave, Suite 316, Chicago, II, 60613 &#9679; <a href="#">Map</a> &#9679; Main (773) 348,4581 &#9679; Support (773) 353,8314</p>
        <nav class="other">
            <a href="#">Privacy</a>|
            <a href="#">Sitemap</a>|
            <a href="#">Terms & Conditions</a>|
            <p>&copy; 2023 Acacius03</p>
        </nav>
    </footer>
</Article>
`;
