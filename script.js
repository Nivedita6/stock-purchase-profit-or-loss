var intialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputStock = document.querySelector("#output");


function submitHandler(){
    var inp = intialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(inp, qty, curr);
}

function calculateProfitAndLoss(intial, quantity, current){
    if(intial < current){
        var profit = (current - intial ) * quantity;
        var profitPercentage = (profit/intial) * 100;
        showOutput("The profit is " + profit + " and profit percentage is " + profitPercentage);
    }
    else if(current < intial){
        var loss = (intial - current ) * quantity;
        var lossPercentage = (loss/intial) * 100;
        showOutput("The loss is " + loss + " and loss percentage is " + lossPercentage);
    }
    else{
        showOutput("No pain no gain");
    }

}

function showOutput(message){
    outputStock.innerHTML = message;
}


submitBtn.addEventListener("click", submitHandler);

