"use strict";
// If name and phone exist, then proceeds with the pizza maker
// Reset button to start again the process
// Select pizza and update the billing order with previous and new data

const HTML_ITEMS = [
    document.createElement('h2'),
    document.createElement('h3'),
    document.createElement('h4'),
    document.createElement('p'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p')
]

function billing(reviewName, reviewTel, pizzaType, pizzaCost) {
    document.getElementById('pm-ticket').appendChild(HTML_ITEMS[2]).textContent = "Billing:"
    document.getElementById('pm-ticket').appendChild(HTML_ITEMS[0]).textContent = reviewName
    document.getElementById('pm-ticket').appendChild(HTML_ITEMS[1]).textContent = reviewTel
    document.getElementById('pm-ticket').appendChild(HTML_ITEMS[3]).textContent = pizzaType
    document.getElementById('pm-ticket').appendChild(HTML_ITEMS[6]).textContent = pizzaCost
}

function selectedPizza(pizzaType, reviewName, reviewTel) {
    console.log('Stage #3 ->', 'Username:', reviewName, '/ Contact:', reviewTel, '/ Pizza:', pizzaType)

    // Pizzas HTML
    let pizzaMenu = { // Values `typeof` are Number && Properties `typeof` are Boolean
        cheese: 21.50,
        italian: 25.99,
        mexican: 22.99,
        pepperoni: 25.99
    }

    // Hide & Display
    document.querySelector('.pizza-options').style.display = 'none'
    document.querySelector('.pizza-toppings').style.display = 'block'

    // Conditionals to pass data
    if (pizzaType === pizzaMenu[pizzaType]) {
        billing(reviewName, reviewTel, pizzaType, pizzaMenu[pizzaType])
        console.log('Stage #3 ->', 'Username:', reviewName, '/ Contact:', reviewTel, '/ Pizza:', pizzaType, '/ Cost:', pizzaMenu[pizzaType])
    }
}

function pizzaMenu(reviewName, reviewTel) {
    console.log('Stage #2 ->', 'Username:', reviewName, '/ Contact:', reviewTel)

    // Hide & Display
    document.getElementById('pizza-form').style.display = 'none'
    document.getElementById('pm-validate').style.display = 'none'
    document.getElementById('pm-menu').style.display = 'block'
    document.querySelector('.btn-wrapper').style.display = 'block'

    // Pass Data
    billing(reviewName, reviewTel)
    document.querySelectorAll('.btn-bookmark').onclick = () => selectedPizza(reviewName, reviewTel)
}

function checkUsername(reviewName, reviewTel) {
    console.log('Stage #1 ->', 'Username:', reviewName, '/ Contact:', reviewTel)

    // Display Object
    document.getElementById('pm-validate').style.display = 'block'

    // Append Objects
    document.getElementById('pm-validate').children[0].appendChild(HTML_ITEMS[1]).textContent = reviewName
    document.getElementById('pm-validate').children[0].appendChild(HTML_ITEMS[2]).textContent = reviewTel
    document.getElementById('pm-validate').children[0].appendChild(HTML_ITEMS[3]).textContent = "Ready to proceed with the menu?"
    document.getElementById('pm-validate').children[0].appendChild(HTML_ITEMS[4]).textContent = "Cancel"
    document.getElementById('pm-validate').children[0].appendChild(HTML_ITEMS[5]).textContent = "Continue"

    // On Click
    Object.assign(HTML_ITEMS[4], {
        className: 'cancel',
        onclick: function() {location.reload()},
        type: 'reset'
    })
    Object.assign(HTML_ITEMS[5], {
        className: 'continue',
        onclick: () => pizzaMenu(reviewName, reviewTel),
        type: 'button'
    })
}

function pizzaCustomer() {
    // Retrieve Input Data
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    if (nameSubmit === "" || phoneSubmit === "" /*|| nameSubmit !== /[a-zA-Z]/ || phoneSubmit !== /[0-9]/*/ ) {
        alert('Please enter your name and phone number')
        location.reload()
    } else {
        checkUsername(nameSubmit, phoneSubmit);
    }
}