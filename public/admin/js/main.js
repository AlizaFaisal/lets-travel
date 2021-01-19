let logoutBtn = document.querySelector('.logout-btn');

document.addEventListener('DOMContentLoaded', async function () {
    addpostsToPage();
    addcallbackRequestsToPage();
    addMailsToPage();

});

async function addpostsToPage() {
    let posts = await getposts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    let i = 1;
    posts.forEach((post) => {
        let postHTML = `
        <article
        class="d-flex justify-content-between mt-2 align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input type="hidden" class="id" value="${post.id}">
        <div class="name w30">${post.name}</div>
        <div class="date w30">${post.dateCreated}</div>
        <div class="country w20">${post.country}</div>
        <div class="edit w10"><button class="btn btn-link btn-edit"> Edit</button></div>
        <div class="remove w5"><button class="btn btn-link btn-remove"> X</button></div>
    </article>`
        articles.insertAdjacentHTML("beforeend", postHTML);
    });
}
async function addcallbackRequestsToPage() {
    let callbackrequests = await getcallbackRequests();
    let callbackBlock = document.querySelector('#v-pills-callbackRequests');
    callbackBlock.innerHTML = '';
    let i = 1;
    callbackrequests.forEach((callbackrequest) => {
        let callbackHTML = `
        <article
        class="d-flex justify-content-between mt-2 align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input type="hidden" class="id" value="${callbackrequest.id}">
        <div class="name w30">${callbackrequest.number}</div>
        <div class="name w30">${callbackrequest.date}</div>
        <div class="remove w5"><button class="btn btn-link btn-remove"> X</button></div>
    </article>
        `
        callbackBlock.insertAdjacentHTML("beforeend", callbackHTML);
    });

}
async function addMailsToPage() {
    let mails = await getmails();
    let mailBlock = document.querySelector('#v-pills-mails');
    let i = 1;
    mailBlock.innerHTML = '';
    mails.forEach((mail) => {
        let mailHTML = `
        <article
        class="d-flex justify-content-between mt-2 align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input type="hidden" class="id" value="${mail.id}">
        <div class="name w30">${mail.username}</div>
        <div class="date w30">${mail.email}</div>
        <div class="country w20">${mail.text}</div>
        <div class="country w20">${mail.date}</div>
        <div class="remove w5"><button class="btn btn-link btn-remove"> X</button></div>
    </article>
        `
        mailBlock.insertAdjacentHTML("beforeend", mailHTML)
    })
}

logoutBtn.addEventListener('click', function () {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.href = '/';
})