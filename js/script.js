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



