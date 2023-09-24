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
        </div>
    </Article>`;
