document.addEventListener('DOMContentLoaded', function () {
    const questionForm = document.getElementById('questionForm');
    const resultSection = document.getElementById('result');
    const outputDueDate = document.getElementById('dueDateResult');
    const outputExpectedChildren = document.getElementById('expectedChildrenResult');
    const outputLeavePayPercentage = document.getElementById('leavePayPercentageResult');
    const outputPermStart = document.getElementById('permStartResult');
    const outputPermEnd = document.getElementById('permEndResult');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function () {
        const selectedDueDate = document.getElementById('dueDate').value;
        const selectedExpectedChildren = parseInt(document.getElementById('expectedChildren').value);
        const selectedLeavePayPercentage = parseInt(document.getElementById('leavePayPercentage').value);
        const calculatedPermStart = calculateTotalPermStart(selectedDueDate);
        const calculatedPermEnd = calculateTotalPermEnd(calculatedPermStart, selectedExpectedChildren, selectedLeavePayPercentage);

        outputDueDate.textContent = `Due date: ${selectedDueDate}`;
        outputExpectedChildren.textContent = `Expected Children: ${selectedExpectedChildren}`;
        outputLeavePayPercentage.textContent = `Leave pay percentage: ${selectedLeavePayPercentage}`;
        outputPermStart.textContent = `Permisjonen starter: ${calculatedPermStart}`;
        outputPermEnd.textContent = `Permisjonen slutter: ${calculatedPermEnd}`;

        resultSection.classList.remove('hidden');
    });
});

function calculateTotalPermStart(inputDate) {
    const calculatedStartDate = new Date(inputDate);
    calculatedStartDate.setDate(calculatedStartDate.getDate() - 21); // Subtract 3 weeks (3 * 7 days)
    return calculatedStartDate.toLocaleDateString()
}

function calculateTotalPermEnd(startDate, expectedChildren, leavePayPercentage) {
    var totalWeeksOfLeave = 0;

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

    const calculatedPermEnd = new Date(startDate);
    calculatedPermEnd.setDate(calculatedPermEnd.getDate() + totalWeeksOfLeave * 7)
    return calculatedPermEnd.toLocaleDateString();
}