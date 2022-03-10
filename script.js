let number = document.getElementById("number");
let btn = document.getElementById("number-btn");

// console.log(btn);

btn.addEventListener("click", () => {

    let randomNumber = Math.ceil( Math.random() * 100); 
    number.innerText = randomNumber;
    
})