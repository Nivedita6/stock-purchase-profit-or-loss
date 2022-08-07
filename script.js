var intialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputStock = document.querySelector("#output");

function calculateProfitAndLoss(intialPrice, currentPrice){
    if(intialPrice < currentPrice){
        console.log("Yay profit");
    }
}



submitBtn.addEventListener("click", calculateProfitAndLoss);

console.log(calculateProfitAndLoss(20,30));