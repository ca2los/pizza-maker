// If name and phone exist, then proceeds with the pizza maker
// Reset button to start again the process

function checkName(reviewName) {
    console.log(reviewName);
    alert(reviewName)
}
function checkTel(reviewTel) {
    console.log(reviewTel);
    alert(reviewTel);
}

function pizzaCustomer() {
    let nameSubmit = document.getElementById("pm-name").value;
    let phoneSubmit = document.getElementById("pm-tel").value;
    checkName(nameSubmit)
    checkTel(phoneSubmit);
}

