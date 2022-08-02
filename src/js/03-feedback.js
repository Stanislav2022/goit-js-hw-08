const form = document.querySelector(".feedback-form");
console.log(form)

form.addEventListener('input', onTextareaInput);
function onTextareaInput (e) {
    const message = e.target.value;
    console.log(message)
}


const LOCALSTORAGE_KEY = "feedback-form-state"

