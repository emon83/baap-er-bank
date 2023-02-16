/* 
step-01: add click event handler with the submit button
step-02: get the email address inside the email input field
step-2.5:get email into input field
step-03: get password into password input field
step-3.5: get password into input field
//step-04: verify email and password ( DANGER: Do not verify email password on the client side)
*/

document.getElementById('btn__submit').addEventListener('click', function () {
    const emailField = document.getElementById('user__email');
    const email = emailField.value; 
    //console.log(email); //check

    const passwordField = document.getElementById('user__password');
    const password = passwordField.value; //get password into input field

    if (email === 'sontan@baap.com' && password === 'secret') {
        //console.log('valid user'); //for check
        window.location.href = 'bank.html'; //set url path
    } else {
        alert('invalid user please try again');
    }
})