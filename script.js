import { Felleskvote } from './felleskvote.js';
import { Foreldre, Mor } from './foreldre.js';

var rettighetsKlasse = 1;
var terminDato = new Date();
var antallBarn = 1;
var andelPenger = 100;
let felleskvote = new Felleskvote();


const today = new Date('2023-10-10');
let mor1 = new Mor(today, 1, 1);
let mor2 = new Mor(today, 1, 1);

const resultatData = [mor1, mor2]; 

const radioButtons = document.querySelectorAll('input[type="radio"][name="radioOption"]');


const resultatTabellInnhold = document.querySelector("#data-table tbody");


document.addEventListener('DOMContentLoaded', function () {

    const calculateButton = document.getElementById('calculateButton');

    // Add a click event listener to each radio button
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            handleRadioChange(radioButton);
        });
    });

    //Oppgi dagens dato pluss en måned som termin
    setInitialDueDate();

    //Lytt etter endringer i termindato og oppdater termindato ved endringer
    const terminDatoFelt = document.getElementById('dueDate');
    terminDatoFelt.addEventListener('input', function() {
        oppdaterValgtTerminDato(terminDatoFelt.value)
    });

    // Lytt etter endringer til andel foreldrepenger og oppdater variabel ved endringer
    const andelPengerFelt = document.getElementById('andelPengerValg');
    andelPengerFelt.addEventListener('input', function () {
        handleAndelPengerChange(andelPengerFelt.value);
    });

    // Lytt etter click på 'kalkuler resultat' knappen
    calculateButton.addEventListener('click', function () {
        populateTable();
    });

    // Slider indicator
    const slider = document.getElementById('felleskvoteUkerSlider');
    const output = document.getElementById('sliderValue');
    output.innerHTML = slider.value; // Display the default value
    slider.addEventListener('input', function() {
        output.innerHTML = this.value;
    });
});

function setInitialDueDate() {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setMonth(futureDate.getMonth() + 1);
    const formattedDate = futureDate.toISOString().split('T')[0];
    document.getElementById('dueDate').value = formattedDate;
    terminDato = futureDate;
}

function oppdaterValgtTerminDato(valgtTerminDato) {
    const inputDate = valgtTerminDato
    const validDate = new Date(inputDate);
    // Sjekk og oppdater termindato
    if (!isNaN(validDate)) {
        terminDato = validDate;
        console.log('Termindato ble oppdatert til ' + terminDato.toISOString().split('T')[0]);
    } else {
        console.log('Ugyldig datoformat.');
    }
}

// Function to handle radio button changes
function handleRadioChange(radioButton) {
    const value = parseInt(radioButton.value, 10);
    console.log("Rettighetsklasse " + value + " ble valgt av brukeren");
    rettighetsKlasse = value;

    // Update the Felleskvote instance based on the selected value
    felleskvote.setRettighetsKlasse(rettighetsKlasse);

    // Uncheck all other radio buttons with the same name
    radioButtons.forEach((otherRadioButton) => {
        if (otherRadioButton !== radioButton) {
            otherRadioButton.checked = false;
        }
    });
}

function handleAndelPengerChange(value) {
    console.log('Andel foreldrepenger ble oppdatert til ' + value);
    andelPenger = parseInt(value, 10);
    felleskvote.setAndelPenger(andelPenger);
}

function populateTable() {
    // Clear the existing table content before repopulating
    resultatTabellInnhold.innerHTML = '';

    resultatData.forEach((mor) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mor.navn}</td>
            <td>${mor.navn}</td>
            <td>${mor.navn}</td>
        `;
        resultatTabellInnhold.appendChild(row);
    });
}



