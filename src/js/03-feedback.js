import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state"
const formData = {};

const form = document.querySelector(".feedback-form");
checkTheContentsInput ();
form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData)
}, 1000))
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
}

function checkTheContentsInput () {
    
    if ( localStorage.getItem(STORAGE_KEY)) {
        const savedContents = localStorage.getItem(STORAGE_KEY);
        const parsedContents = JSON.parse(savedContents);
        form.email.value = parsedContents.email
        form.message.value = parsedContents.message
        console.log(parsedContents);
            }
}
