let blockArticle = document.querySelector('.articles');
blockArticle.addEventListener('click', function (e) {
    id = e.target.parentNode.parentNode.querySelector('.id').value;
    if (e.target.classList.contains('btn-remove')) {
        fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text())
            .then(() => window.history.go())
    }
})