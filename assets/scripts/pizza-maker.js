"use strict";
// If name and phone exist, then proceeds with the pizza maker
// Reset button to start again the process

function pizzaMenu() {

}

function checkUsername(reviewName, reviewTel) {
    let node1 = document.createElement('h3')
    let node2 = document.createElement('h4')
    let node3 = document.createElement('p')
    let node4 = document.createElement('button')
    let node5 = document.createElement('button')

    document.getElementById('pm-output').style.display = 'block'
    document.getElementById('pm-output').appendChild(node1).textContent = reviewName
    document.getElementById('pm-output').appendChild(node2).textContent = reviewTel
    document.getElementById('pm-output').appendChild(node3).textContent = "Do you want to proceed?"
    document.getElementById('pm-output').appendChild(node4).setAttribute('type','reset')
    document.getElementById('pm-output').appendChild(node5).setAttribute('type','button')

    document.querySelector('button[type="reset"]').onclick = function(){location.reload();}
    document.querySelector('button[type="submit"]').onclick = pizzaMenu()
}

function pizzaCustomer() {
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    checkUsername(nameSubmit, phoneSubmit);
}