document.addEventListener('DOMContentLoaded', function () {
    const questionForm = document.getElementById('questionForm');
    const resultSection = document.getElementById('result');
    const outputDueDate = document.getElementById('dueDateResult');
    const outputExpectedChildren = document.getElementById('expectedChildrenResult');
    const outputLeavePayPercentage = document.getElementById('leavePayPercentageResult');
    const outputWeeksVacationMother = document.getElementById('weeksVacationMother');
    const outputWeeksVacationFather = document.getElementById('weeksVacationFather');
    const outputWeeksVacationTogether = document.getElementById('weeksVacationTogether');
    const outputTotalWeeksOfVacation = document.getElementById('totalWeeksOfVacation');
    const outputPermStart = document.getElementById('permStartResult');
    const outputPermEnd = document.getElementById('permEndResult');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function () {
        const selectedDueDate = document.getElementById('dueDate').value;
        const selectedExpectedChildren = parseInt(document.getElementById('expectedChildren').value);
        const selectedLeavePayPercentage = parseInt(document.getElementById('leavePayPercentage').value);
        const selctedVacationMother = parseInt(document.getElementById('vacationMother').value);
        const selctedVacationFather = parseInt(document.getElementById('vacationFather').value);
        const selctedVacationTogether = parseInt(document.getElementById('vacationTogether').value);
        const calculatedPermStart = calculateTotalPermStart(selectedDueDate);
        const calculatedVacationWeeks = calculateVacationWeeks(selctedVacationMother, selctedVacationFather, selctedVacationTogether)
        const calculatedPermEnd = calculateTotalPermEnd(calculatedPermStart, selectedExpectedChildren, selectedLeavePayPercentage, calculatedVacationWeeks);

        outputDueDate.textContent = `Termin: ${selectedDueDate}`;
        outputExpectedChildren.textContent = `Antall barn: ${selectedExpectedChildren}`;
        outputLeavePayPercentage.textContent = `Andel foreldrepenger: ${selectedLeavePayPercentage}`;
        outputWeeksVacationMother.textContent = `Ferie bare mor: ${selctedVacationMother}`;
        outputWeeksVacationFather.textContent = `Ferie bare far / medmor: ${selctedVacationFather}`;
        outputWeeksVacationTogether.textContent =`Ferie sammen: ${selctedVacationTogether}`;
        outputTotalWeeksOfVacation.textContent =`Totalt antall ferieuker: ${calculatedVacationWeeks}`;
        outputPermStart.textContent = `Permisjonen starter: ${calculatedPermStart.toLocaleDateString()}`;
        outputPermEnd.textContent = `Permisjonen slutter: ${calculatedPermEnd.toLocaleDateString()}`;

        resultSection.classList.remove('hidden');
    });


});



function calculateTotalPermStart(inputDate) {
    const calculatedStartDate = new Date(inputDate);
    calculatedStartDate.setDate(calculatedStartDate.getDate() - 21); // Subtract 3 weeks (3 * 7 days)
    return calculatedStartDate;
}

function calculateTotalPermEnd(startDate, expectedChildren, leavePayPercentage, weeksOfVacation) {
    var totalWeeksOfLeave = 0;
    var totalWeeksOfVacation = 0;

    // Case where leave pay percentage is selected to be 100%
    if (leavePayPercentage === 100) {
        if (expectedChildren === 1) {
            totalWeeksOfLeave = 49;
        }
        else if (expectedChildren === 2) {
            totalWeeksOfLeave = 66;
        }
        else {
            totalWeeksOfLeave = 95;
        }
    }
    // Case where leave pay percentage is selected to be 80%
    else {
        if (expectedChildren === 1) {
            totalWeeksOfLeave = 59;
        }
        else if (expectedChildren === 2) {
            totalWeeksOfLeave = 80;
        }
        else {
            totalWeeksOfLeave = 115;
        }
    }

    //Check if vacation weeks is calculated
    if (!isNaN(weeksOfVacation)) {
        totalWeeksOfVacation = weeksOfVacation
    } else {
        totalWeeksOfVacation = 0
    }

    const calculatedPermEnd = new Date(startDate);
    // Add weeks of paid leave
    calculatedPermEnd.setDate(calculatedPermEnd.getDate() + totalWeeksOfLeave * 7)
    // Add weeks of vacation
    calculatedPermEnd.setDate(calculatedPermEnd.getDate() + totalWeeksOfVacation * 7)
    return calculatedPermEnd;
}

function calculateVacationWeeks(vacationMother, vacationFather, vacationTogether) {
    return vacationMother + vacationFather + vacationTogether
}


// Slider indicator
const slider = document.getElementById('myRange');
const output = document.getElementById('sliderValue');

output.innerHTML = slider.value; // Display the default value

slider.addEventListener('input', function() {
    output.innerHTML = this.value;
});

