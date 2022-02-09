// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Brandon Lopez Mendoza" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
let tableTotalAmount = document.querySelector('#qty-total')
// Code to update name display
credit.textContent = `Created by ${yourName}`
/////////////////////////////////////////////////////////////////////////////////////
// Event listener for clicks on the "+" button for Gingerbread cookies
let gBValue = 0; 
let tableGbAmount = document.querySelector("#qty-gb");
gbPlusBtn.addEventListener('click', function() {
    gBValue++;
    tableGbAmount.textContent = gBValue;
    tableTotalAmount.textContent = addAllValues();
})
gbMinusBtn.addEventListener('click', function() {
    if(gBValue != 0)
    {
        gBValue--;
        tableGbAmount.textContent = gBValue;
        tableTotalAmount.textContent = addAllValues();
    }
})
///////////////////////////////////////////////////////////////////////////////////
let ccValue = 0;
let tableCCAmount = document.querySelector("#qty-cc")
ccPlusBtn.addEventListener('click', function() {
    ccValue++;
    tableCCAmount.textContent = ccValue;
    tableTotalAmount.textContent = addAllValues();
})
ccMinusBtn.addEventListener('click', function()  {
    if(ccValue != 0)
    {
        ccValue--;
        tableCCAmount.textContent = ccValue;
        tableTotalAmount.textContent = addAllValues();
    }
})
////////////////////////////////////////////////////////////////////////////////
let sugarValue = 0;
let tableSugarValue = document.querySelector("#qty-sugar")
sugarPlusBtn.addEventListener('click', function() {
    sugarValue++;
    tableSugarValue.textContent = sugarValue;
    tableTotalAmount.textContent = addAllValues();
})
sugarMinusBtn.addEventListener('click', function() {
    if(sugarValue != 0) 
    {
        sugarValue--;
        tableSugarValue.textContent = sugarValue;
        tableTotalAmount.textContent = addAllValues();
    }   
})

function addAllValues () {
    return gBValue + ccValue + sugarValue
}

