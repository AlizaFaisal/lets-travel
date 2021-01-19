let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let loginEmail = document.getElementById('login-email').value;
    let loginPassword = document.getElementById('login-password').value;
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: loginEmail,
            password: loginPassword
        })
    }).then((resp) => {
        if (resp.status === 400) {
            throw new Error();
        }
        return resp.json();
    })
        .then((data) => {
            window.location.href = data.redirectURL
        }).catch(() => alert('Wrong Password or email address'));

});
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let registerEmail = document.getElementById('register-email').value;
    let registerPassword = document.getElementById('register-password').value;
    let registerRePassword = document.getElementById('register-repassword').value;
    if (registerPassword !== registerRePassword) {
        return;
    }
    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: registerEmail,
            password: registerPassword
        })
    }).then((resp) => resp.text())
        .then((data) => alert(data));

})