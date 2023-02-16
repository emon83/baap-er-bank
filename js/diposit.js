/* 
step-01: add event listener to the deposit btn
step-02: get the deposit amount from the input field
step-07: clear deposit field
validation if user deposit give a string or not A number
step-03: get the current deposit total
step-04: calculation and update total deposit amount
step-05.get ballance current total
step-06: calculate current total value
*/

document.getElementById('btn__deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit__field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const depositTotalElement = document.getElementById('total__deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    depositTotalElement.innerText = newDepositAmount; // set the deposit total

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal; //set total deposit

    const balanceTotalElement = document.getElementById('balance__total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal; //set total balance
})