function calculateTip(){
    //get input values
    const billAmount = parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);

    //calculate tip
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = tipAmount + billAmount;
    
    //display tip
    document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = '$' + totalAmount.toFixed(2);

}