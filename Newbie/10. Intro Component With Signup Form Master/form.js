const form = document.getElementById("form")
const inputs = document.querySelectorAll(".input")

const regExp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,20}$/, // 6 a 20 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const values = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
}

const stylesInputs = (regExpName, inputPos, inputName, inputValue) => {
    if(regExpName.test(inputs[inputPos].value)){
        document.getElementById(`${inputName}`).classList.add("input-box--valid")
        document.getElementById(`${inputName}`).classList.remove("input-box--invalid")
        document.querySelector(`#${inputName} .input__icon`).classList.remove("input__icon--active")
        document.querySelector(`#${inputName}__group .warning`).classList.remove("warning--active")
        inputValue = true
        return inputValue
    } else {
        document.getElementById(`${inputName}`).classList.remove("input-box--valid")
        document.getElementById(`${inputName}`).classList.add("input-box--invalid")
        document.querySelector(`#${inputName} .input__icon`).classList.add("input__icon--active")
        document.querySelector(`#${inputName}__group .warning`).classList.add("warning--active")
        inputValue = false
        return inputValue
    }
}

inputs.forEach( (input) => {
    if(input.name === "first-name") {
        input.addEventListener("keyup", () => {
            values.firstName = stylesInputs(regExp.name, 0, "first-name", values.firstName)
        })
        input.addEventListener("blur", () => {
            values.firstName = stylesInputs(regExp.name, 0, "first-name", values.firstName)
        })
    }
    if(input.name === "last-name") {
        input.addEventListener("keyup", () => {
            values.lastName = stylesInputs(regExp.name, 1, "last-name", values.lastName)
        })
        input.addEventListener("blur", () => {
            values.lastName = stylesInputs(regExp.name, 1, "last-name", values.lastName)
        })
    }
    if(input.name === "email") {
        input.addEventListener("keyup", () => {
            values.email = stylesInputs(regExp.email, 2, "email", values.email)
        })
        input.addEventListener("blur", () => {
            values.email = stylesInputs(regExp.email, 2, "email", values.email)
        })
    }
    if(input.name === "password") {
        input.addEventListener("keyup", () => {
            values.password = stylesInputs(regExp.password, 3, "password", values.password)
        })
        input.addEventListener("blur", () => {
            values.password = stylesInputs(regExp.password, 3, "password", values.password)
        })
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(values.firstName && values.lastName && values.email && values.password){
        form.reset()
        document.querySelector(".warning__submit").classList.add("warning__submit--success")
        document.querySelector(".warning__submit").classList.remove("warning__submit--invalid")
        document.querySelector(".warning__submit").innerText = "form submitted successfully"
    }
    else{
        document.querySelector(".warning__submit").classList.add("warning__submit--invalid")
        document.querySelector(".warning__submit").classList.remove("warning__submit--success")
        document.querySelector(".warning__submit").innerText = "must complete all fields"
    }
})