export const BlogPage = post => `
    <Article id="blog">
        <section id="hero">
            <img src="${post.photo_url}" alt="${post.title}" width="400px" height="300px">
        </section>
        <div class="container light corner-round">
            <header id="blog-header">
                <h1>${post.title}</h1>
                <small>${post.created_at}</small>
                <p>${post.description}</p>
            </header>
            <section id="blog-context">${post.content_html}</section>
        </div>
    </Article>`;
