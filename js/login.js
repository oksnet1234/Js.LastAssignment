
const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const h1text = document.querySelector("#login_name");

function paintingname(a) {
    h1text.innerText = `hello ${a} !!`;
    h1text.classList.remove("hidden");
} 

function myfunction(tomato) {
    tomato.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username", loginInput.value);
    paintingname(loginInput.value);
}

const savedUsername = localStorage.getItem("username");


if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", myfunction);
}
else {
    paintingname(savedUsername);
}

