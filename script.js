var intialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputStock = document.querySelector("#output");


function submitHandler(){
    var inp = intialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;

    if(inp === '' | qty === '' | curr === ''){
        alert("Please fill out all Fields");
    }
    else{
        calculateProfitAndLoss(inp, qty, curr);
    }

}

function calculateProfitAndLoss(intial, quantity, current){
    if(intial < current){
        var profit = (current - intial ) * quantity;
        var limitProfit = profit.toFixed(2);
        var profitPercentage = (profit/(intial * quantity)) * 100;
        outputStock.style.color = 'green';
        showOutput("The profit is " + limitProfit + " and profit percentage is " + profitPercentage);
    }
    else if(current < intial){
        var loss = (intial - current ) * quantity;
        var limitLoss = loss.toFixed(2);
        var lossPercentage = (loss/(intial * quantity)) * 100;
        outputStock.style.color = 'red';
        showOutput("The loss is " + limitLoss + " and loss percentage is " + lossPercentage);
    }
    else{
        showOutput("No pain no gain");
    }

}

function showOutput(message){
    outputStock.innerHTML = message;
}


submitBtn.addEventListener("click", submitHandler);

