let articleBlock = document.querySelector('.articles');
let updatePostForm = document.querySelector('.update-post-form');
let updataName = document.querySelector('#update-name');
let updateText = document.querySelector('#update-text');
let id;
articleBlock.addEventListener('click', async function (e) {
    id = e.target.parentNode.parentNode.querySelector('.id').value;
    if (e.target.classList.contains('btn-edit')) {
        let postInfo = await fetch('http://localhost:3000/posts/' + id)
            .then((resp) => resp.json())
            .then((data) => data)

        updataName.value = postInfo.name;

        updateText.value = postInfo.text;

        articleDiv = document.querySelector('#v-pills-articles');
        articleDiv.classList.remove('active');
        articleDiv.classList.remove('show');
        updateDiv = document.querySelector('#v-pills-update-post');
        updateDiv.classList.add('active');
        updateDiv.classList.add('show');


    }

});
updatePostForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch('http://localhost:3000/posts/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: updataName.value,
            text: updateText.value,
            description: updateText.value.substring(0, updateText.value.indexOf('.') + 1)
        })
    }).then((resp) => resp.text())
        .then(() => window.history.go())

});