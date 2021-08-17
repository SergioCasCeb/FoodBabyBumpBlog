//Control animation an parameters of type.js
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
    backDelay: 1500,
    startDelay: 500
});


//Control for the log in

const logInIcon = document.querySelector('#open-log-in');
const closeBtn = document.querySelector('#close-log-in');
const logInBtn = document.querySelector('#log-in-btn');
const logInScreen = document.querySelector('#section-log-in');
const body = document.querySelector('body');

let username = "secc180699";
let password = "14022020";

function validateForm() {

    let user = document.forms["loginForm"]["username"].value;
    let pass = document.forms["loginForm"]["password"].value;
    if (user == username && pass == password) {

    } else {
        alert("validation has failed");
        return false;
    }
}

function confimationNews() {
    alert("Thank you for signing up for our weekly newsletter!");
}

//Listeners
logInIcon.addEventListener('click', () => {
    logInScreen.classList.add("open-login");
    body.classList.add("no-scroll");

});

closeBtn.addEventListener('click', () => {
    logInScreen.classList.remove("open-login");
    body.classList.remove("no-scroll");

});