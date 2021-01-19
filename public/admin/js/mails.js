
async function getmails() {
    return await fetch('http://localhost:3000/mails')
        .then((response) => response.json())
        .then((data) => data);
}