document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.getElementById('result');
    const calculateButton = document.getElementById('calculateButton');

    const outputRettTilForeldrePenger = document.querySelector('input[type="radio"][name="radioOption"]:checked');
    const outputDueDate = document.getElementById('dueDateResult');
    const outputExpectedChildren = document.getElementById('expectedChildrenResult');
    const outputLeavePayPercentage = document.getElementById('leavePayPercentageResult');
    const outputWeeksVacationMother = document.getElementById('weeksVacationMother');
    const outputWeeksVacationFather = document.getElementById('weeksVacationFather');
    const outputWeeksVacationTogether = document.getElementById('weeksVacationTogether');
    const outputTotalWeeksOfVacation = document.getElementById('totalWeeksOfVacation');
    const outputFellesKvoteTilMor = document.getElementById('felleskvoteMor');

    // Main results
    const outputPermStart = document.getElementById('permStartResult');
    const outputPermEnd = document.getElementById('permEndResult');
    const outputPermMorStart = document.getElementById('morsPermStartResult');
    const outputPermMorSlutt = document.getElementById('morsPermEndResult');
    const outputPermFarStart = document.getElementById('farsPermStartResult');
    const outputPermFarSlutt = document.getElementById('farsPermEndResult');


    calculateButton.addEventListener('click', function () {

        console.log('Button clicked!'); 
        const selectedRettTilForeldrepenger = getSelectedRettTilForeldrepenger();
        console.log('Selected value: ' + selectedRettTilForeldrepenger); 

        resultSection.classList.remove('hidden');
    });


    // Add a click event listener to each radio button
    const radioButtons = document.querySelectorAll('input[type="radio"][name="radioOption"]');

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            // Uncheck all other radio buttons with the same name
            radioButtons.forEach((otherRadioButton) => {
                if (otherRadioButton !== radioButton) {
                    otherRadioButton.checked = false;
                }
            });
        });
    });


    // Slider indicator
    const slider = document.getElementById('felleskvoteUkerMor');
    const output = document.getElementById('sliderValue');

    output.innerHTML = slider.value; // Display the default value

    slider.addEventListener('input', function() {
        output.innerHTML = this.value;
    });
});

function getSelectedRettTilForeldrepenger() {
    const selectedRadio = document.querySelector('input[type="radio"][name="radioOption"]:checked');
    // Check if a radio button is selected
    if (selectedRadio) {
        return selectedValue = selectedRadio.value;
    } else {
        prompt('Obs! Du må oppgi hvem som har rett til foreldrepenger før du går videre');
    }
}

function getDueDate(inputDate) {
    const dueDate = new Date(inputDate);
    dueDate.setDate(dueDate.getDate())
    return dueDate;
}

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
        totalWeeksOfVacation = weeksOfVacation;
    } else {
        totalWeeksOfVacation = 0;
    }

    const calculatedPermEnd = new Date(startDate);
    // Add weeks of paid leave
    calculatedPermEnd.setDate(calculatedPermEnd.getDate() + totalWeeksOfLeave * 7)
    // Add weeks of vacation
    calculatedPermEnd.setDate(calculatedPermEnd.getDate() + totalWeeksOfVacation * 7)
    return calculatedPermEnd;
}

function calculateVacationWeeks(vacationMother, vacationFather, vacationTogether) {
    return vacationMother + vacationFather + vacationTogether;
}

function calculatePermEndMor(terminDato, fellesKvoteUkerMor) {
    // Hent startdato for perm
    const calculatedPermEndMor = new Date(terminDato);
    // Legg til mammakvoten på 15 uker
    calculatedPermEndMor.setDate(calculatedPermEndMor.getDate() + 15 * 7)
    // Legg til mors andel av felleskvoten
    calculatedPermEndMor.setDate(calculatedPermEndMor.getDate() + fellesKvoteUkerMor * 7)
    return calculatedPermEndMor;
}

function calculatePermStartFar(permEndMor) {
    // Hent startdato for perm
    const calculatedPermStartFar = new Date(permEndMor);
    // Legg til en dag
    calculatedPermStartFar.setDate(calculatedPermStartFar.getDate() + 1)
    return calculatedPermStartFar;
}




/*    calculateButton.addEventListener('click', function () {
        const selectedRettTilForeldrepenger = getSelectedRettTilForeldrepenger();
        const selectedDueDate = getDueDate(document.getElementById('dueDate').value);
        const selectedExpectedChildren = parseInt(document.getElementById('expectedChildren').value);
        const selectedLeavePayPercentage = parseInt(document.getElementById('leavePayPercentage').value);
        const selctedVacationMother = parseInt(document.getElementById('vacationMother').value);
        const selctedVacationFather = parseInt(document.getElementById('vacationFather').value);
        const selctedVacationTogether = parseInt(document.getElementById('vacationTogether').value);
        const selectedFellesKvoteMor = parseInt(document.getElementById('felleskvoteUkerMor').value);
        const calculatedPermStart = calculateTotalPermStart(selectedDueDate);
        const calculatedVacationWeeks = calculateVacationWeeks(selctedVacationMother, selctedVacationFather, selctedVacationTogether);
        const calculatedPermEnd = calculateTotalPermEnd(calculatedPermStart, selectedExpectedChildren, selectedLeavePayPercentage, calculatedVacationWeeks);
        const calculatedPermEndMor = calculatePermEndMor(selectedDueDate, selectedFellesKvoteMor);
        const calculatedPermStartFar = calculatePermStartFar(calculatedPermEndMor);


        outputRettTilForeldrePenger.textContent = `Rett til foreldrepenger: ${selectedRettTilForeldrepenger}`;
        outputDueDate.textContent = `Termin: ${selectedDueDate.toLocaleDateString()}`;
        outputExpectedChildren.textContent = `Antall barn: ${selectedExpectedChildren}`;
        outputLeavePayPercentage.textContent = `Andel foreldrepenger: ${selectedLeavePayPercentage}`;
        outputFellesKvoteTilMor.textContent =`Felleskvote uker til mor: ${selectedFellesKvoteMor}`;
        outputWeeksVacationMother.textContent = `Ferie bare mor: ${selctedVacationMother}`;
        outputWeeksVacationFather.textContent = `Ferie bare far / medmor: ${selctedVacationFather}`;
        outputWeeksVacationTogether.textContent =`Ferie sammen: ${selctedVacationTogether}`;
        outputTotalWeeksOfVacation.textContent =`Totalt antall ferieuker: ${calculatedVacationWeeks}`;
        outputPermStart.textContent = `Permisjonen starter: ${calculatedPermStart.toLocaleDateString()}`;
        outputPermEnd.textContent = `Permisjonen slutter: ${calculatedPermEnd.toLocaleDateString()}`;
        outputPermMorStart.textContent = `Mors permisjon starter: ${calculatedPermStart.toLocaleDateString()}`;
        outputPermMorSlutt.textContent = `Mors permisjon slutter: ${calculatedPermEndMor.toLocaleDateString()}`;
        outputPermFarStart.textContent = `Fars/Medmors permisjon starter: ${calculatedPermStartFar.toLocaleDateString()}`;
        outputPermFarSlutt.textContent = `Fars/Medmors permisjon slutter: ${calculatedPermEnd.toLocaleDateString()}`;

        resultSection.classList.remove('hidden');
    });
    
*/