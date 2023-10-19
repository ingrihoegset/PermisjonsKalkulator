var rettighetsKlasse = 1;
var terminDato = new Date();
var antallBarn = 1;
var andelPenger = 100;
let felleskvote = new Felleskvote();

document.addEventListener('DOMContentLoaded', function () {
    const gaaVidereKnappDel1 = document.getElementById('gaaVidereDel1');
    const section2 = document.getElementById('section2');
    const gaaVidereKnappDel2 = document.getElementById('gaaVidereDel2');
    const section3 = document.getElementById('section3');
    const calculateButton = document.getElementById('calculateButton');
    const resultSection = document.getElementById('result');

    // Add a click event listener to each radio button
    const radioButtons = document.querySelectorAll('input[type="radio"][name="radioOption"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            handleRadioChange(radioButton);
        });
    });

    /*
    //Oppgi dagens dato som termin
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setMonth(futureDate.getMonth() + 1);
    const formattedDate = futureDate.toISOString().split('T')[0];
    document.getElementById('dueDate').value = formattedDate;
    terminDato = futureDate;*/

    //Lytt etter endringer i termindato og oppdater termindato ved endringer
    const terminDatoFelt = document.getElementById('dueDate');
    terminDatoFelt.addEventListener('input', function() {
        const inputDate = terminDatoFelt.value;
        const validDate = new Date(inputDate);
        // Sjekk og oppdater termindato
        if (!isNaN(validDate)) {
            terminDato = validDate;
            console.log('Termindato ble oppdatert til ' + terminDato.toISOString().split('T')[0]);
        } else {
            console.log('Ugyldig datoformat.');
        }
    });

    // Lytt etter endringer til andel foreldrepenger og oppdater variabel ved endringer
    const andelPengerFelt = document.getElementById('andelPengerValg');
    andelPengerFelt.addEventListener('input', function () {
        handleAndelPengerChange(andelPengerFelt.value);
    });

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

    // Lytt etter click på 'kalkuler resultat' knappen
    calculateButton.addEventListener('click', function () {
        resultSection.classList.remove('hidden');
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

// Function to handle radio button changes
function handleRadioChange(radioButton) {
    const value = radioButton.value;
    console.log("Rettighetsklasse " + value + " ble valgt av brukeren");
    rettighetsKlasse = value;

    // Update the Felleskvote instance based on the selected value
    felleskvote.rettighetsKlasse(rettighetsKlasse);

    // Uncheck all other radio buttons with the same name
    radioButtons.forEach((otherRadioButton) => {
        if (otherRadioButton !== radioButton) {
            otherRadioButton.checked = false;
        }
    });
}

function handleAndelPengerChange(value) {
    console.log('Andel foreldrepenger ble oppdatert til ' + value);
    andelPenger = value;
    felleskvote.andelPenger(andelPenger);
}





