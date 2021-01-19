let mailBlock = document.querySelector('#v-pills-mails');
mailBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/mails/' + id, {
            method: 'DELETE'
        }).then((response) => response.text())
            .then((data) => {
                alert(data);
                window.history.go();
            });

    }
})