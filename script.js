// Selecting Necessory Elements
let number = document.getElementById("number");
let btn = document.getElementById("number-btn");

// Adding Click Event on Button
btn.addEventListener("click", () => {
    let randomNumber = Math.ceil( Math.random() * 10); 
    number.innerText = randomNumber;   
})