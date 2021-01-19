let callbackForm = document.querySelector('.call-me-form');
callbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let number = document.querySelector('input').value;
    fetch('http://localhost:3000/callback-requests', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number: number

        })
    }).then((response) => response.text())
        .then(() => alert('we will call you asap'));
});