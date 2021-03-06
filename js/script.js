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
        otherJobRoleField.style.display = 'block'; 
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
            color[3].removeAttribute('selected'); 
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
            color[0].removeAttribute('selected'); 
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
const activitiesLegend = document.querySelector ('.activities > legend');
totalCostElement.style.color = 'firebrick';  
activitiesLegend.appendChild(totalCostElement); 
let totalCost = 0; 

selectActivity.addEventListener('change', (event) => { 
    
    const clicked = event.target; 

    // Calculating the total cost of the selected activities 
    
    if (clicked.checked) {
        totalCost += +clicked.getAttribute('data-cost'); // add the cost of the selected activity
    } else {
        totalCost -= +clicked.getAttribute('data-cost'); // subtract the cost of the selected activity 
    }  
        
    totalCostElement.innerHTML = `<p>TOTAL: ${totalCost}$</p>`; // display the total cose dynamically  
    
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
            cardNumberTip.style.display = 'none';
            creditcard.style.display = 'none'; 
            paypal.style.display = ''; 
            bitcoin.style.display = 'none'; 
        }
        if (paymentOption[3].selected) {
            cardNumberTip.style.display = 'none';
            creditcard.style.display = 'none'; 
            paypal.style.display = 'none'; 
            bitcoin.style.display = ''; 
        }  
    }
});

// A tip which appears dynamically until a user enters a name

const nameTip = document.createElement('p'); // create tip element
const nameLabel = document.querySelector ('[for="name"]');
nameLabel.appendChild (nameTip); 
nameTip.style.color = 'firebrick'; 
nameTip.textContent = 'PLEASE ENTER YOUR NAME';
nameTip.style.display = 'none'; // hide tip by default

// A function that checks if the name field is not blank 

const nameValidator = () => { 
    if (name.value.length > 0) {
        nameTip.style.display = 'none'; 
        name.style.borderColor = 'rgba(189, 195, 199, 0.5)'; 
        name.style.backgroundColor = 'rgb(232, 240, 254)';
        return true; 
    } else {
        name.style.borderColor = 'firebrick'; 
        name.style.backgroundColor = 'white';
        nameTip.style.display = 'block'; 
        return false; 
    }
}

// A tip which appears dynamically until a user enters a valid email address

const emailTip = document.createElement('p'); // create tip element
const emailLabel = document.querySelector ('[for="mail"]');
emailLabel.appendChild (emailTip); 
emailTip.style.color = 'firebrick'; 
emailTip.textContent = 'PLEASE ENTER A VALID EMAIL ADDRESS';
emailTip.style.display = 'none'; // hide tip by default

// A function that checks if the email address is validly formatted 

const emailValidator = () => {
    if (/^\w*@\w*\.\w*$/.test(email.value)) {
        email.style.borderColor = 'rgba(189, 195, 199, 0.5)'; 
        email.style.backgroundColor = 'rgba(232, 240, 254)';
        emailTip.style.display = 'none'; 
        return true;
    } else {
        emailTip.style.display = 'block'; 
        email.style.borderColor = 'firebrick'; 
        email.style.backgroundColor = 'white';; 
        return false; 
    }
}

// A tip which appears if no activities are selected before submission 

const activitiesTip = document.createElement('p');
activitiesLegend.appendChild (activitiesTip);  
activitiesTip.textContent = 'AT LEAST ONE ACTIVITY MUST BE SELECTED'; 
activitiesTip.style.color = 'firebrick'; 
activitiesTip.style.fontSize = '.9em';
activitiesTip.style.display = 'none'; 

// A function that checks if at least one activity is chosen  

const activityValidator = () => {
    for (let i = 0; i < activities.length; i ++) {
        if (activities[i].checked > 0) { 
            activitiesTip.style.display = 'none'; 
            return true;
        }
    }
    activitiesTip.style.display = 'block';
    return false;  
} 

// A tip which appears to help a user to provide a credit card number

const cardNumberTip = document.createElement('p'); 
const paymentLegend = document.querySelector ('.payment > legend');
paymentLegend.appendChild (cardNumberTip); 
cardNumberTip.style.color = 'firebrick'; 
cardNumberTip.style.fontSize = '.9em';

// A function that checks if the card number is between 13 and 16 digits and gives tips depending on the error

const cardNumberValidator = () => {
    if (/^\d{13,16}$/.test(cardNumber.value)) {
        cardNumberTip.style.display = 'none'; 
        cardNumber.style.borderColor = 'rgba(189, 195, 199, 0.5)'; 
        cardNumber.style.backgroundColor = 'rgb(232, 240, 254)';
        return true; 
    } else { // show a tip depending on the error 
        cardNumberTip.style.display = 'block';
        if (cardNumber.value.length < 1) { // if the field is blank
            cardNumberTip.textContent = 'PLEASE ENTER A CREDIT CARD NUMBER'; 
        } else if (/[a-zA-Z]+/.test(cardNumber.value)) { // if contains any letters
            cardNumberTip.textContent = 'A CREDIT CARD NUMBER MUST CONTAIN ONLY DIGITS'; 
        } else if (cardNumber.value.length > 16) { // if more than 16 numbers
                cardNumberTip.textContent = 'A CREADIT CARD NUMBER MUST BE NOT LONGER THAN 16 DIGITS';
        } else if (cardNumber.value.length < 13) { // if less than 13 numbers
                cardNumberTip.textContent = 'A CREADIT CARD NUMBER MUST BE 13 OR MORE DIGITS LONG'; 
            }
        cardNumber.style.borderColor = 'firebrick'; 
        cardNumber.style.backgroundColor = 'white'; 
    }
}

// A function that checks if the zip code is a 5-digit number  

const zipCodeValidator = () => {
    if (/^\d{5}$/.test(zipCode.value)) {
        zipCode.style.borderColor = 'rgba(189, 195, 199, 0.5)'; 
        zipCode.style.backgroundColor = 'rgb(232, 240, 254)';
        return true;
    } else {
        zipCode.style.borderColor = 'firebrick'; 
        zipCode.style.backgroundColor = 'white';
        return false; 
    } 
}

// A function that checks if CVV is a 3-digit number 

const cvvValidator = () => {
    if (/^\d{3}$/.test(cvv.value)) {
        cvv.style.borderColor = 'rgba(189, 195, 199, 0.5)'; 
        cvv.style.backgroundColor = 'rgb(232, 240, 254)';
        return true;
    } else {
        cvv.style.borderColor = 'firebrick'; 
        cvv.style.backgroundColor = 'white';
        return false; 
    }
}

// Handlers which provide a real-time validation for name, email, credit card details and activities

name.addEventListener('keyup', nameValidator);
email.addEventListener('keyup', emailValidator);
cardNumber.addEventListener('keyup', cardNumberValidator);
zipCode.addEventListener('keyup', zipCodeValidator);
cvv.addEventListener('keyup', cvvValidator);
selectActivity.addEventListener('change', activityValidator);

// Submit if all the information has passed the validation 

form.addEventListener('submit', (event) => {
    nameValidator();
    emailValidator();
    activityValidator();

    // Prevent submission if name or email is not valid or if at least one activity is not selected

    if (!nameValidator() || !emailValidator || !activityValidator) {
        event.preventDefault();
    }
    
    // If credit card is the selected payment method, validate credit card number, zip code and CVV 

    const creditCardOption = document.querySelectorAll('#payment option')[1];

    if (creditCardOption.selected) {
        cardNumberValidator();
        zipCodeValidator();
        cvvValidator();

        // Prevent submission if credit card number, zip code or CVV is not valid

        if (!cardNumberValidator() || !zipCodeValidator() || !cvvValidator()) {
            event.preventDefault();
        } 
    }
});

