"use strict";
// If name and phone exist, then proceeds with the pizza maker
// Reset button to start again the process

function pizzaMenu() {
    // Select Pizza
    let node1 = document.createElement('h2')
    // Hide & Display
    document.getElementById('pizza-form').style.display = 'none'
    document.getElementById('pm-menu').style.display = 'block'
    // Append Objects
    document.getElementById('pm-menu').appendChild(node1).textContent = "Select your pizza"

}

function checkUsername(reviewName, reviewTel) {
    // Create Objects
    let node1 = document.createElement('h3')
    let node2 = document.createElement('h4')
    let node3 = document.createElement('p')
    let node4 = document.createElement('button')
    let node5 = document.createElement('button')
    // Display Object
    document.getElementById('pm-output').style.display = 'block'
    // Append Objects
    document.getElementById('pm-output').appendChild(node1).textContent = reviewName
    document.getElementById('pm-output').appendChild(node2).textContent = reviewTel
    document.getElementById('pm-output').appendChild(node3).textContent = "Do you want to proceed?"
    document.getElementById('pm-output').appendChild(node4).setAttribute('type','reset')
    document.getElementById('pm-output').appendChild(node5).setAttribute('type','button')
    // Listen OnClick
    document.querySelector('button[type="reset"]').onclick = function(){location.reload();}
    document.querySelector('button[type="button"]').addEventListener('click', pizzaMenu)
}

function pizzaCustomer() {
    // Retrieve Input Data
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    checkUsername(nameSubmit, phoneSubmit);
}

// ToDo
// Append createElements into an object
// Make pizzaMenu work