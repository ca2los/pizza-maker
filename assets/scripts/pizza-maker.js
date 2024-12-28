// If name and phone exist, then proceeds with the pizza maker.

function checkName(reviewName) {
    console.log(reviewName);
}
function checkTel(reviewTel) {
    console.log(reviewTel);
}

function pizzaCustomer() {
    let nameSubmit = document.getElementById("pm-name");
    let phoneSubmit = document.getElementById("pm-tel");
    checkName(nameSubmit)
    checkTel(phoneSubmit);
}

