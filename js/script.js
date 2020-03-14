// The Third Techdegree Project

// Variables for validation 

const form = document.querySelector('form');
const name = document.querySelector('#name'); 
const email = document.querySelector('#mail'); 
const selectActivity = document.querySelector('.activities'); // a fieldset for activities 
const activities = document.querySelectorAll('.activities input'); // all activities  
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip'); 
const cvv = document.querySelector('#cvv');

// A function for giving focus to the first text field when the page has been loaded

window.onload = function () {
    this.document.querySelector('input, #name').focus();
};

// Select a 'secelt element' for job roles and the 'other option' in this list  

const selectJob = document.querySelector('#title'); 
const otherJobRole = document.querySelectorAll('#title > option')[5];

// Select a text field for entering the job role and hide it on the page by default 

const otherJobRoleField = document.querySelector('#other-title');
otherJobRoleField.style.display = 'none'; 

// Make the text field for the job role visible if 'other' option is selected 

selectJob.addEventListener('change', () => {
    if (otherJobRole.selected) {
        otherJobRoleField.style.display = ''; 
    } else {
        otherJobRoleField.style.display = 'none'; 
    } 
});

// Select the color label, color select menu and colors and hide them all by default  

const selectColor = document.querySelector('#color'); // color select menu 
const selectColorLabel = document.querySelector('#colors-js-puns label'); // color label
selectColor.style.display = 'none';
selectColorLabel.style.display = 'none'; 
const colors = document.querySelectorAll('#color option'); 
for (let i = 0; i < colors.length; i ++) {
    colors[i].style.display = 'none'; 
}  

// Update the 'color' field to read 'please select a T-shirt theme' 
 
const selectThemeOption = document.createElement('option'); // create 'select theme' option  
selectThemeOption.textContent = 'Please select a T-shirt theme'; 
selectThemeOption.setAttribute('selected', true); // update the 'color' field  
selectColor.appendChild(selectThemeOption); // append new option to the select element 
selectThemeOption.style.display = 'none'; // make 'select theme' option invisible

// Hide the 'select theme' option element in the 'design' menu 

const designs = document.querySelectorAll('#design option'); // select all design options 
designs[0].style.display = 'none'; // hide the first one

// Select the select element for the 'design' menu and set event listener on it

document.querySelector('#design').addEventListener('change', (event) => {
    for (i = 0; i < designs.length; i ++) {
        let designOption = event.target.value;  
        if (designOption === 'js puns') { // if 'js puns' is selected, hide 'heart js' options
            selectColor.style.display = ''; // show color select menu
            selectColorLabel.style.display = ''; // show color label 
            selectThemeOption.removeAttribute('selected'); 
            colors[0].setAttribute('selected', true); // update the 'color' field
            for (let i = 0; i < 3; i ++) { 
                colors[i].style.display = ''; 
            }
            for (let i = 3; i <= 5; i ++) {
                colors[i].style.display = 'none'; 
            } 
        } else if (designOption === 'heart js') { // if 'heart js' is selected, hide 'js puns' options
            selectColor.style.display = ''; // show color select menu
            selectColorLabel.style.display = ''; // show color label 
            selectThemeOption.removeAttribute('selected'); 
            colors[3].setAttribute('selected', true); // update the 'color' field 
            for (let i = 0; i < 3; i ++) { 
                colors[i].style.display = 'none'; 
            }
            for (let i = 3; i <= 5; i ++) {
                colors[i].style.display = ''; 
            } 
        }
    }
});

// Creating an element for the 'total cost' and appending it to the 'activity fieldset' 

const totalCostElement = document.createElement('p'); 
selectActivity.appendChild(totalCostElement); 
let totalCost = 0; 

selectActivity.addEventListener('change', (event) => { 
    
    const clicked = event.target; 

    // Calculating the total cost of the selected activities 
    
    if (clicked.checked) {
        totalCost += +clicked.getAttribute('data-cost'); // add the cost of the selected activity
    } else {
        totalCost -= +clicked.getAttribute('data-cost'); // subtract the cost of the selected activity 
    }  
        
    totalCostElement.innerHTML = `<p>Total: ${totalCost}$</p>`; // display the total cose dynamically  
    
    // Making it not possible to select the activities which are planned for the same time 

    const clickedDate = clicked.getAttribute('data-day-and-time'); // get the date of the selected activity
    for (let i = 0; i < activities.length; i ++) {
        const activity = activities[i]; 
        const activityDate = activity.getAttribute('data-day-and-time'); // get the date of each activity in the array
        
        // Disable activities which are planned for the same date and time but not the selected one

        if (clickedDate === activityDate && clicked !== activity) { 
            if (clicked.checked) { 
                activity.disabled = true; 
            } else { 
                activity.disabled = false; 
            }
        }
    }
});

// Select 'payment options' in the select menu and hide 'select payment method' 

const paymentOption = document.querySelectorAll('#payment option'); 
paymentOption[0].style.display = 'none'; 
paymentOption[1].setAttribute('selected', true); // select credit card payment option by default 

// Select divs with different payment options and hide paypal and bitcoin information by default 

const creditcard = document.querySelector('#credit-card'); 
const paypal = document.querySelector('#paypal'); 
paypal.style.display = 'none'; 
const bitcoin = document.querySelector('#bitcoin');
bitcoin.style.display = 'none'; 

// Display paypal or bitcoin information when a user select respectively paypal or bitcoin payment option  

document.querySelector('#payment').addEventListener('change', () => {
    for (let i = 0; i < paymentOption.length; i ++) {
        if (paymentOption[1].selected) {
            creditcard.style.display = ''; 
            paypal.style.display = 'none'; 
            bitcoin.style.display = 'none'; 
        }
        if (paymentOption[2].selected) {
            creditcard.style.display = 'none'; 
            paypal.style.display = ''; 
            bitcoin.style.display = 'none'; 
        }
        if (paymentOption[3].selected) {
            creditcard.style.display = 'none'; 
            paypal.style.display = 'none'; 
            bitcoin.style.display = ''; 
        }  
    }
});

// A function that checks if the name field is not blank 

const nameValidator = () => { 
    if (name.value.length > 0) {
        name.style.borderColor = '#228b22'; 
        return true; 
    } else {
        name.style.borderColor = 'red'; 
        return false; 
    }
}

// A function that checks if the email address is validly formatted 

const emailValidator = () => {
    if (/^\w*@\w*\.\w*$/.test(email.value)) {
        email.style.borderColor = '#228b22';
        return true;
    } else {
        email.style.borderColor = 'red'; 
        return false; 
    }
}

// A tip which appears if no activities are selected before submission 

const activityTip = document.createElement('span');
activityTip.innerHTML = `<span>At least one activity must be selected</span>`; 
activityTip.style.color = 'red'; 
selectActivity.appendChild(activityTip); 
activityTip.style.display = 'none'; 

// A function that checks if at least one activity is chosen  

const activityValidator = () => {
    for (let i = 0; i < activities.length; i ++) {
        if (activities[i].checked > 0) { 
            return true;
        }
    }
    activityTip.style.display = '';
    return false;  
} 

// A tip which appears to help a user to provide a credit card number

const cardNumberTip = document.createElement('span'); 
const cardNumberDiv = document.querySelector('.col-6'); 
cardNumberTip.style.color = 'red'; 
cardNumberDiv.appendChild(cardNumberTip);

// A function that checks if the credit card number is a number between 13 and 16 digits

const cardNumberValidator = () => {
    if (/^\d{13}((\d{3})|(\d{2})|(\d{1}))?$/.test(cardNumber.value)) {
        cardNumber.style.borderColor = '#228b22';
        return true; 
    } else { // show a tip depending on the error 
        if (cardNumber.value.length < 1) { 
           cardNumberTip.innerHTML = `<span>Please enter a credit card number</span>`; 
        } else if (cardNumber.value.length < 13 || cardNumber.value.length > 16) {
            cardNumberTip.innerHTML = `<span>Please enter a number that is between 13 and 16 digits long</span>`;
        }
        cardNumber.style.borderColor = 'red';
        return false; 
    }
}

// A function that checks if the zip code is a 5-digit number  

const zipCodeValidator = () => {
    if (/^\d{5}$/.test(zipCode.value)) {
        zipCode.style.borderColor = '#228b22';
        return true;
    } else {
        zipCode.style.borderColor = 'red';
        return false; 
    } 
}

// A function that checks if CVV is a 3-digit number 

const cvvValidator = () => {
    if (/^\d{3}$/.test(cvv.value)) {
        cvv.style.borderColor = '#228b22';
        return true;
    } else {
        cvv.style.borderColor = 'red'; 
        return false; 
    }
}

// Submit if all the information has passed the validation 

form.addEventListener('submit', (event) => {
    nameValidator();
    emailValidator();
    activityValidator();

    if (!nameValidator()) {
        event.preventDefault();
        console.log(`Name Validator prevented Submission`);
    }
    if (!emailValidator()) {
        event.preventDefault();
        console.log(`Email Validator prevented Submission`); 
    }
    if (!activityValidator()) {
        event.preventDefault();
        console.log(`Activity Validator prevented Submission`);
    }

    // If credit card is the selected payment method, validate credit card number, zip code and CVV 

    const creditCardOption = document.querySelectorAll('#payment option')[1];

    if (creditCardOption.selected) {
        cardNumberValidator();
        zipCodeValidator();
        cvvValidator();

        if (!cardNumberValidator()) {
            event.preventDefault();
            console.log(`Card Number Validator prevented Submission`);
        }
        if (!zipCodeValidator()) {
            event.preventDefault();
            console.log(`Zip Code Validator prevented Submission`);
        }
        if (!cvvValidator()) {
            event.preventDefault();
            console.log(`CVV Validator prevented Submission`); 
        }   
    } 
});

