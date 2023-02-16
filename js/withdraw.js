/* 
step-01: add eventHandler with the withdraw button
step-02: get the withdraw amount from the withdraw amount field
step-07: clear the input field
validation if user deposit give a string or not A number
step-03:get previous withdraw total
step-05: get the previous balance total
2nd validation 
step-04: calculate total withdraw amount (for validation step we are blew this step)
step-06: calculate and set the balance total
*/

document.getElementById('btn__withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw__field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString); //convert string to number
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw__total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    const balanceTotalElement = document.getElementById('balance__total');
    const previousBalanceTotalString = balanceTotalElement.innerText; 
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('There is not so much money in the bank !!!')
        return;
    }
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})