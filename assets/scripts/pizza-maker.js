"use strict";
// If name and phone exist, then proceeds with the pizza maker
// Reset button to start again the process

const HTML_ITEMS = [
    document.createElement('h2'),
    document.createElement('h3'),
    document.createElement('h4'),
    document.createElement('p'),
    document.createElement('button'),
    document.createElement('button')
]

function checkout(reviewName, reviewTel) {
    console.log(reviewName, reviewTel)
}

function pizzaMenu() {
    // Hide & Display
    document.getElementById('pizza-form').style.display = 'none'
    document.getElementById('pm-validate').style.display = 'none'
    document.getElementById('pm-menu').style.display = 'block'
}

function checkUsername(reviewName, reviewTel) {
    // Display Object
    document.getElementById('pm-validate').style.display = 'block'
    // Append Objects
    document.getElementById('pm-validate').appendChild(HTML_ITEMS[1]).textContent = reviewName
    document.getElementById('pm-validate').appendChild(HTML_ITEMS[2]).textContent = reviewTel
    document.getElementById('pm-validate').appendChild(HTML_ITEMS[3]).textContent = "Ready to proceed with the menu?"
    document.getElementById('pm-validate').appendChild(HTML_ITEMS[4]).textContent = "Cancel"
    document.getElementById('pm-validate').appendChild(HTML_ITEMS[5]).textContent = "Continue"
    // On Click
    Object.assign(HTML_ITEMS[4], {
        className: 'cancel',
        onclick: function () {location.reload()},
        type: 'reset'
    })
    Object.assign(HTML_ITEMS[5], {
        className: 'continue',
        onclick: pizzaMenu,
        type: 'button'
    })
    checkout(reviewName, reviewTel)
}

function pizzaCustomer() {
    // Retrieve Input Data
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    checkUsername(nameSubmit, phoneSubmit);
}

// ToDo
// Create the pizza menu HTML modules
// Think of an alternative for hiding modules
// Build a guide to JS DOM API commands