let mailForm = document.querySelector('.mail-form');
mailForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    let username = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let text = document.querySelector('#message').value;
    await fetch('http://localhost:3000/mails', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            text: text
        })
    }).then((response) => response.text())
        .then((data) => {
            alert(data + ' , Your message is sent')
            window.history.go();
        }
        );

})