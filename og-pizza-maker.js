"use strict";
// Pizza Maker
// Give options to create a custom pizza
// Create a new value with the new pizza
// Calculate the total cost in dollars

const DELIVERY_TIP = .12

function checkoutOrder(pizzaInput) {
    let total = pizzaInput + (pizzaInput * DELIVERY_TIP)
    console.log("Total USD $", total.toFixed(2))
}

function selectIngredients(pizzaInput) {
    let ingredients = {
        mozzarella: 4,
        mushrooms: 3,
        olives: 3
    }
    while (true) {
        let toppings = prompt("only Mozzarella, Mushrooms, Olives, or enter DONE to checkout.").toLowerCase();
        if (toppings === "done") {
            console.log("No more extra ingredients")
            checkoutOrder(pizzaInput)
            break
        } else if (ingredients.hasOwnProperty(toppings)) {      // The method looks for properties instead of using equality operators
            console.log(`Extra ${toppings} (x1): Yes`)
            pizzaInput = pizzaInput + ingredients[toppings]
        } else if (!ingredients.hasOwnProperty(toppings)) {
            console.log("Ingredient unavailable.")
        }
    }
}

function checkoutReview(pizzaInput) {
    let customize = prompt(`Enter YES to add extra ingredients or NO to proceed with checkout.`)
    if (customize.toUpperCase() === "YES" || customize.toUpperCase() === "Y") {
        console.log("Extra Ingredients: Yes")
        selectIngredients(pizzaInput)
    } else {
        console.log("Extra Ingredients: No")
        checkoutOrder(pizzaInput)
    }
}

function pizzaName(pizzaInput) {
    let types_of_pizza = {
        cheese: 21.50,
        italian: 25.99,
        mexican: 22.99
    }
    while (true) {
        if (!types_of_pizza.hasOwnProperty(pizzaInput.toLowerCase())) {
            console.log(`${pizzaInput.toUpperCase()} pizza is unavailable.`)
            break
        }
        console.log(`You've selected ${pizzaInput} pizza.`)
        pizzaInput = types_of_pizza[pizzaInput.toLowerCase()];
        checkoutReview(pizzaInput)
    }
}

let selection = prompt("Enter Cheese, Italian, or Mexican to select your pizza.")
pizzaName(selection)