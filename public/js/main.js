document.addEventListener('DOMContentLoaded', async function () {
    let posts = await getposts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <div class="col-4">
        <div class="card">
            <div class="card-img-top"><img src="${post.image}" alt="${post.name}"></div>
            <div class="card-body">
                <h4 class="card-title">${post.name}</h4>
                <p class="card-text">${post.description}.</p>
                <a href="/sight?id=${post.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`
        articles.insertAdjacentHTML('afterbegin', postHTML)
    })
})