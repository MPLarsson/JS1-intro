//Use "*variablename*.toString" to convert tp string.

//use "parseInt or parseFloat" to convert to numbers.

/* let price = parseFloat(prompt("Enter a price:","0"));
let text;
if (price ==null || price =="") {
    text = "No price added,";
} else {
    text = `The price is $${price}`;
}
 */

document.getElementById("pricePromptBtn").addEventListener("click",pricePrompt);

function pricePrompt () {
    let price = parseFloat(prompt("Enter a price:","0"));
    let text;
    if (price ==null || price =="") {
        text = "No price added,";
    } else {
        text = `The price is $${price}`;
    }
}