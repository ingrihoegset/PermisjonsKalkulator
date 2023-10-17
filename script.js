document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.getElementById('result');
    const calculateButton = document.getElementById('calculateButton');
    const gaaVidereKnappDel1 = document.getElementById('gaaVidereDel1');
    const gaaVidereKnappDel2 = document.getElementById('gaaVidereDel2');

    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    var rettighetsKlasse;
    var terminDato;
    var antallBarn;


    //Listening for button selection after part 1
    gaaVidereKnappDel1.addEventListener('click', function () {
        rettighetsKlasse = getSelectedRettTilForeldrepenger()
        terminDato = getDueDate()
        antallBarn = 1
        console.log('Rettighetsklasse ' + rettighetsKlasse,'Termindato ' + terminDato,'Antall Barn ' + antallBarn)
        console.log('Neste knapp fra del 1 trykket'); 
        section2.style.display = "block";
    });

    //Listening for button selection after part 2
    gaaVidereKnappDel2.addEventListener('click', function () {
        console.log('Neste knapp fra del 2 trykket'); 
        section3.style.display = "block";
    });


    calculateButton.addEventListener('click', function () {
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
        const selectedValue = selectedRadio.value;
        console.log('Selected Value: ' + selectedValue);
        return selectedValue
    } else {
        console.log('No radio button is selected.');
    }
}

function getDueDate(inputDate) {
    const dueDate = new Date(inputDate);
    dueDate.setDate(dueDate.getDate())
    return dueDate;
}





