
/*
// Listen for changes in the due date
dueDate.addEventListener('change', function () {
    const selectedDate = new Date(dueDate.value);
    if (!isNaN(selectedDate.getTime())) {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 21); // Subtract 3 weeks (3 * 7 days)

        permStarterCelle.textContent = `${newDate.toLocaleDateString()}`;
    } else {
        updateText.value = 'Invalid date format. Please use YYYY-MM-DD.';
    }
});


// Listen for changes in the expected number of children
expectedChildren.addEventListener('change', function () {
    const selectedExpectedChildren = parseInt(expectedChildren.value);
    const selectedDate = new Date(dueDate.value);
    if (!isNaN(selectedDate.getTime())) {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 322); // add 46 weeks (46 * 7 days)

        permSlutterCelle.textContent = `${newDate.toLocaleDateString()}`;
    }
});*/

// Get references to input elements and the text field
const dueDate = document.getElementById('dueDate');
const expectedChildren = document.getElementById('expectedChildren');
const leavePayPercentage = document.getElementById('leavePayPercentage');
const commonPeriodeMother = document.getElementById('commonPeriodeMother');
const vacationMomWeeks= document.getElementById('vacationMomWeeks');
const vacationMomDate = document.getElementById('vacationMomDate');
const vacationDadWeeks = document.getElementById('vacationDadWeeks');
const vacationDadDate = document.getElementById('vacationDadDate');
const vacationSharedWeeks = document.getElementById('vacationSharedWeeks');
const vacationSharedDate = document.getElementById('vacationSharedDate');

const updateText = document.getElementById('update-text');
const permStarterCelle = document.getElementById('permStarterCelle');
const permSlutterCelle = document.getElementById('permSlutterCelle');

// Listen for press of calculate button
document.addEventListener('DOMContentLoaded', function () {
    // Function fires when calculate button is pressed
    calculateButton.addEventListener('click', function () {
        const selectedDueDate = new Date(dueDate.value);
        const selectedExpectedChildren = parseInt(expectedChildren.value);


        if (!isNaN(selectedDate.getTime())) {
            const newDate = new Date(selectedDate);
            newDate.setDate(newDate.getDate() - 21); // Subtract 3 weeks (3 * 7 days)
            newDate.setDate(newDate.getDate() + weeks * 7); // Add the selected number of weeks

            result.textContent = `Original Date: ${selectedDate.toLocaleDateString()} - New Date: ${newDate.toLocaleDateString()}`;
        } else {
            result.textContent = 'Invalid date format. Please use YYYY-MM-DD.';
        }
    });
});

// Listen for changes in the expected number of children
expectedChildren.addEventListener('change', function () {
    const expectedChildrenNumber = convertExpectedChildernToNumber(expectedChildren.value)

    permStarterCelle.textContent = expectedChildrenNumber;

});

function convertExpectedChildernToNumber(inputString) {
    // Convert the inputString to lowercase to handle case-insensitivity
    const lowercaseString = inputString.toLowerCase();

    // Use a switch statement to handle the three specific values
    switch (lowercaseString) {
        case 'ett barn':
            return 1;
        case 'tvillinger':
            return 2;
        case 'trillinger eller flere':
            return 3;
        case '':
            // Handle the case where the string is empty
            return 0;
        default:
            // Handle any other input
            return 'Invalid input';
    }
}








