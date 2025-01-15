let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm")

form.addEventListener('submit', (e) => {
    if(email.value == '' && password.value == '') {
        textForm.textContent = 'Você precisar preencher todos os campos!'
    } else {
    console.log(email.value);
    console.log(password.value);
    }
    e.preventDefault()
})

function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}