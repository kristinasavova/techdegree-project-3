// The Third Techdegree Project

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

// Select and hide colors in the 'color' drop down menu   

const colors = document.querySelectorAll('#color option'); 
for (let i = 0; i < colors.length; i ++) {
    colors[i].style.display = 'none'; 
}  

// Update the 'color' field to read 'please select a T-shirt theme' 

const selectColor = document.querySelector('#color'); // select the parent node 
const selectThemeOption = document.createElement('option'); // create 'select theme' option  
selectThemeOption.textContent = 'Please select a T-shirt theme'; 
selectThemeOption.setAttribute('selected', true); // update the 'color' field  
selectColor.appendChild(selectThemeOption); // append new option to the select element 
selectThemeOption.style.display = 'none'; // make 'select theme' option invisible

// Hide the 'select theme' option element in the 'design' menu 

const designs = document.querySelectorAll('#design option'); // select all design options 
designs[0].style.display = 'none'; // hide the first one

// Select the select element for the 'design' menu and set event listener on it

const selectDesign = document.querySelector('#design');

selectDesign.addEventListener('change', (event) => {
    for (i = 0; i < designs.length; i ++) {
        let designOption = event.target.value;  
        if (designOption === 'js puns') { // if 'js puns' is selected, hide 'heart js' options
            selectThemeOption.removeAttribute('selected'); 
            colors[0].setAttribute('selected', true); // update the 'color' field
            for (let i = 0; i < 3; i ++) { 
                colors[i].style.display = ''; 
            }
            for (let i = 3; i <= 5; i ++) {
                colors[i].style.display = 'none'; 
            } 
        } else if (designOption === 'heart js') { // if 'heart js' is selected, hide 'js puns' options
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

