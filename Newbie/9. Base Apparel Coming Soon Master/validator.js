const email = document.getElementById("email")
const form = document.getElementById("form")
const warning = document.getElementById("warning")
const warningImg = document.querySelector(".input__error")
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(regexEmail.test(email.value)){
        warning.textContent = "email sent successfully";
        warning.style.color = "#38c071"
        warningImg.classList.add("dp-none")
        form.style.border = "2px solid var(--red-lowOpacity)"
        email.value = ""
    }
    else{
        warningImg.classList.remove("dp-none")
        warning.textContent = "Please provide a valid email"
        warning.style.color = "#f96262";
        form.style.border = "2px solid #f96262"
    }
    warning.classList.remove("dp-none")
})