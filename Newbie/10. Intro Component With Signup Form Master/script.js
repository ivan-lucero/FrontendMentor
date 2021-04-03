const form = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const inputBox = document.querySelectorAll(".input-box")
const warning = document.querySelectorAll(".warning")
const errorImg = document.querySelectorAll(".input__error")
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/

const validInputNameOnlyText = (text) => {
    const regexName = /^[a-zA-Z]+$/
    if (regexName.test(text) && text.length > 0) return true
    else return false
}

const invalidInputStyle = (input, warning, errorImg) => {
    input.style.border = "1px solid var(--Red)"
    warning.classList.remove("dp-none")
    errorImg.classList.remove("dp-none")
}

const validInputStyle = (input, warning, errorImg) => {
    input.style.border = "1px solid hsla(246, 25%, 77%, 0.4)"
    warning.classList.add("dp-none")
    errorImg.classList.add("dp-none")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // VALIDACION DE FIRST NAME
    if(validInputNameOnlyText(firstName.value)) validInputStyle(inputBox[0], warning[0], errorImg[0])
    else invalidInputStyle(inputBox[0], warning[0], errorImg[0])

    // VALIDACION DE LAST NAME
    if(validInputNameOnlyText(lastName.value)) validInputStyle(inputBox[1], warning[1], errorImg[1])
    else invalidInputStyle(inputBox[1], warning[1], errorImg[1])
        
    // VALIDACION DE EMAIL
    if(!regexEmail.test(email.value)){
        inputBox[2].style.border = "1px solid var(--Red)"
        warning[2].classList.remove("dp-none")
        errorImg[2].classList.remove("dp-none")
        warning[2].innerText = "Looks like this is not an email"
        if(email.value.length <= 0){
            warning[2].innerText = "Email cannot be empty"
        }
    }
    else{
        inputBox[2].style.border = "1px solid hsla(246, 25%, 77%, 0.4)"
        warning[2].classList.add("dp-none")
        errorImg[2].classList.add("dp-none")
    }
    // VALIDACION DE PASSWORD{
    console.log(pass.value)
    if(regexPass.test(pass.value)){
        inputBox[3].style.border = "1px solid var(--Red)"
        warning[3].classList.remove("dp-none")
        errorImg[3].classList.remove("dp-none")
        warning[3].innerText = "Password format error"
        // if(pass.value.length < 8 || pass.value.length > 15){
        //     warning[3].innerText = "the password must be between 8 and 15 digits"
        // }
    }
    else{
        inputBox[3].style.border = "1px solid hsla(246, 25%, 77%, 0.4)"
        warning[3].classList.add("dp-none")
        errorImg[3].classList.add("dp-none")
    }
    // if(pass.value.length <= 8){

    // }
    // if(pass.value.length <= 0){
    //     inputBox[3].style.border = "1px solid var(--Red)"
    //     warning[3].classList.remove("dp-none")
    //     errorImg[3].classList.remove("dp-none")
    // }
    // else{
    //     inputBox[3].style.border = "1px solid hsla(246, 25%, 77%, 0.4)"
    //     warning[3].classList.add("dp-none")
    //     errorImg[3].classList.add("dp-none")
    // }
    
})