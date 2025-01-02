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

function pizzaMenu() {
    // Hide & Display
    document.getElementById('pizza-form').style.display = 'none'
    document.getElementById('pm-menu').style.display = 'block'
    // Append Objects
    document.getElementById('pm-menu').appendChild(HTML_ITEMS[0]).textContent = "Select your pizza"
}

function checkUsername(reviewName, reviewTel) {
    // Display Object
    document.getElementById('pm-output').style.display = 'block'
    // Append Objects
    document.getElementById('pm-output').appendChild(HTML_ITEMS[1]).textContent = reviewName
    document.getElementById('pm-output').appendChild(HTML_ITEMS[2]).textContent = reviewTel
    document.getElementById('pm-output').appendChild(HTML_ITEMS[3]).textContent = "Do you want to proceed?"
    document.getElementById('pm-output').appendChild(HTML_ITEMS[4]).setAttribute('type','reset')
    document.getElementById('pm-output').appendChild(HTML_ITEMS[5]).setAttribute('type','button')
    // Listen OnClick
    document.querySelector('button[type="reset"]').onclick = function(){location.reload()}
    document.querySelector('button[type="button"]').addEventListener('click', pizzaMenu)
}

function pizzaCustomer() {
    // Retrieve Input Data
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    checkUsername(nameSubmit, phoneSubmit);
}

// ToDo
// Make pizzaMenu() work