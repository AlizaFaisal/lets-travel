let addPostBtn = document.querySelector('.add-post-btn');
let createPostForm = document.querySelector('.create-post-form');
addPostBtn.addEventListener('click', function () {
    articlesDiv = document.getElementById('v-pills-articles');
    articlesDiv.classList.remove('show');
    articlesDiv.classList.remove('active');
    createPostDiv = document.getElementById('v-pills-add-post');
    createPostDiv.classList.add('show');
    createPostDiv.classList.add('active');

});
let title = document.getElementById('name');
let country = document.getElementById('country');
let imageurl = document.getElementById('imageurl');
let text = document.getElementById('text');
let imageFile = document.getElementById('imageFile');
//option 2 with image file
createPostForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = new FormData();
    data.append('title', title.value);
    data.append('country', country.value);
    data.append('imageurl', imageurl.value);
    data.append('text', text.value);
    data.append('description', text.value.substring(0, text.value.indexOf('.') + 1));
    data.append('imageFile', imageFile.files[0])

    fetch('http://localhost:3000/posts', {
        method: 'Post',
        body: data
    }).then((response) => response.text()).then((data) => { window.history.go(); })
})

//option 1 with image url

// createPostForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     fetch('http://localhost:3000/posts', {
//         method: 'Post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             title: title.value,
//             country: country.value,
//             text: text.value,
//             description: text.value.substring(0, text.value.indexOf('.') + 1),
//             image: imageurl.value
//         })
//     }).then((response) => response.text()).then((data) => { window.history.go(); })
// })
function disableInput(input1, input2) {
    if (input1.value) {
        input2.disabled = true;
    } else {
        input2.disabled = false;
    }
}
imageurl.addEventListener('change', function () {
    disableInput(this, imageFile)
});
imageFile.addEventListener('change', function () {
    disableInput(this, imageurl)
})