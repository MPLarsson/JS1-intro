//use "*variablename*.toString" to convert tp string.

//use "parseInt or parseFloat" to convert to numbers.

/* let price = parseFloat(prompt("Enter a price:","0"));
let text;
if (price ==null || price =="") {
    text = "No price added,";
} else {
    text = `The price is $${price}`;
}
 */

let price = 0;
let reducedPrice = 0;

document.getElementById("currentPrice").innerHTML = price;
document.getElementById("currentDiscount").innerHTML = reducedPrice;

document.getElementById("pricePromptBtn").addEventListener("click",pricePrompt);

function pricePrompt () {
    let input = prompt("Enter a price:","$");
    
    if (input ==null || input =="") {
        alert("No price added")
        return;
    } 
    price = parseFloat(input.replace("$",""));

    if (isNaN(price)) {
        alert("That's not a valid price.")
        return;
    }

    let text = `The price is $${price}`;
    alert(text);
    document.getElementById("currentPrice").innerHTML = `$${price}`;
    return price;
}

document.getElementById("reducedPriceBtn").addEventListener("click",priceReduction);

function priceReduction () {
    reducedPrice = price * 0.9;
    alert(`Your discount is $${reducedPrice}!`);
    document.getElementById("currentDiscount").innerHTML = `$${reducedPrice}`;
}