
let callbackBlock = document.querySelector('#v-pills-callbackRequests');
callbackBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/callback-requests/' + id, {
            method: 'DELETE'
        }).then((response) => (response))
            .then((data) => window.history.go())
    }
})
