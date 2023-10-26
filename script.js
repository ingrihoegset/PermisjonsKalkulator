import { Felleskvote } from './felleskvote.js';
import { Mor, FarMedmor, Far1, Far2 } from './foreldre.js';

// Defaultrettigheter og valg
var rettighetsKlasse = 1;
var terminDato = new Date();
setInitialDueDate()
var antallBarn = 1;
var andelPenger = 100;

let felleskvote = new Felleskvote();
let mor = new Mor(terminDato, antallBarn, 1);
let farMedmor = new FarMedmor(terminDato, antallBarn, 1, mor);
let far1 = new Far1(terminDato, antallBarn, 1);
let far2 = new Far2(terminDato, antallBarn, 1, far1);
const resultatData = [mor, farMedmor, far1, far2]; 

const radioButtons = document.querySelectorAll('input[type="radio"][name="radioOption"]');
const resultatTabellInnhold = document.querySelector("#data-table tbody");

// Relatert til felleskvoteslider
const slider = document.getElementById('felleskvoteUkerSlider');
const output = document.getElementById('sliderValue');

document.addEventListener('DOMContentLoaded', function () {

    // Add a click event listener to each radio button
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            handleRadioChange(radioButton);
            beregnResultater();
        });
    });

    //Oppgi dagens dato pluss en måned som termin
    setInitialDueDate();

    //Lytt etter endringer i termindato og oppdater termindato ved endringer
    const terminDatoFelt = document.getElementById('dueDate');
    terminDatoFelt.addEventListener('input', function() {
        oppdaterValgtTerminDato(terminDatoFelt.value);
        beregnResultater();
    });

    // Lytt etter endringer til andel foreldrepenger og oppdater variabel ved endringer
    const andelPengerFelt = document.getElementById('andelPengerValg');
    andelPengerFelt.addEventListener('input', function () {
        handleAndelPengerChange(andelPengerFelt.value);
        beregnResultater();
    });

    // Slider indicator

    output.innerHTML = slider.value; // Display the default value
    slider.addEventListener('input', function() {
        console.log('Heared change in slidervalue, slider value is ' + slider.value);
        const selectedSliderValue = parseInt(slider.value);
        output.innerHTML = selectedSliderValue;
        beregnResultater();
    });

    //Beregne
    beregnResultater();
});

function beregnResultater() {
    oppdaterAndelerAvFelleskvote(slider.value);
    populateTable();
    oppdaterBarneHageRett(terminDato);
    oppdaterUkerPermGap(terminDato, resultatData);
}

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
        // Oppdater termin i foreldre
        mor.setNyTermin(validDate);
        farMedmor.setNyTermin(validDate);
        far1.setNyTermin(validDate);
        far2.setNyTermin(validDate);
        console.log('Mors termindato ble oppdatert til ' + mor._termin.toISOString().split('T')[0]);
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

    // Oppdater valgt Rettighetsklasse i foreldre
    mor.setRettighetsKlasse(value);
    farMedmor.setRettighetsKlasse(value);
    far1.setRettighetsKlasse(value);
    far2.setRettighetsKlasse(value);

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
    // Oppdater andel foreldrepenger i foreldre
    mor.setAndelPenger(andelPenger);
    farMedmor.setAndelPenger(andelPenger);
    far1.setAndelPenger(andelPenger);
    far2.setAndelPenger(andelPenger);
}

function oppdaterAndelerAvFelleskvote(oppgittAndelAvKvote) {
    mor.setDelAvFellesKvote(oppgittAndelAvKvote);
    far1.setDelAvFellesKvote(oppgittAndelAvKvote);
    console.log('Valgt andel felleskvote til mor/far1: ' + oppgittAndelAvKvote);
    const andelKvoteIgjenTilFarMedmor = felleskvote._fellesKvoteVarighet - oppgittAndelAvKvote;
    console.log('Felleskvote max: '+felleskvote._fellesKvoteVarighet+ ' felleskvote til far/medmor / far2: ' +andelKvoteIgjenTilFarMedmor);
    farMedmor.setDelAvFellesKvote(andelKvoteIgjenTilFarMedmor);
    far2.setDelAvFellesKvote(andelKvoteIgjenTilFarMedmor);
}

//Populates resulttable with calculated results
function populateTable() {
    // Clear the existing table content before repopulating
    resultatTabellInnhold.innerHTML = '';

    resultatData.forEach((forelder) => {

        if(forelder._harRettigheter === true) {
            console.log(forelder._navn + ' ' + forelder._startDatoPerm + ' ' + forelder._sluttDatoPerm + ' ' +forelder._harRettigheter);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${forelder._navn || ''}</td>
                <td>${forelder._startDatoPerm ? formatDate(forelder._startDatoPerm) : ''}</td>
                <td>${forelder._sluttDatoPerm ? formatDate(forelder._sluttDatoPerm) : ''}</td>
            `;
            resultatTabellInnhold.appendChild(row);
        }
    });
}

// Function to format a Date object as DD.MM.YYYY
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Oppdaterer resultatvisningen for når man har rett på barnehageplass
function oppdaterBarneHageRett(oppgittTermin) {
    const inputDate = oppgittTermin;
    const validDate = new Date(inputDate);
    // Sjekk termindato
    if (!isNaN(validDate)) {
        const terminDato = validDate;
        // Hent ut år og måned for termin
        const year = terminDato.getFullYear(); // Get the year
        const monthIndex = terminDato.getMonth(); // Get the month (zero-based index)
        const monthNames = [
            "Januar", "Februar", "Mars", "April",
            "Mai", "Juni", "Juli", "August",
            "September", "Oktober", "November", "Desember"];
        const barnehageplass = document.getElementById('barnehageplass');

        // Beregn rett på barnehage
        if(monthIndex <=7) {
            barnehageplass.textContent = monthNames[7] + " " + (year + 1);
        } 
        else if (monthIndex <=10) {
            barnehageplass.textContent = monthNames[monthIndex] + " " + (year + 1);
        }
        else {
            barnehageplass.textContent = monthNames[7] + " " + (year + 2);
        }
    }
    else {
        console.log("Didn't find a valid date to update barnehagerettigheter.")
    }
}

function beregnBarneHagerettDato(oppgittTermin) {
    const inputDate = oppgittTermin;
    const validDate = new Date(inputDate);
    // Sjekk termindato
    if (!isNaN(validDate)) {
        const terminDato = validDate;
        // Hent ut år og måned for termin
        const year = terminDato.getFullYear(); // Get the year
        const monthIndex = terminDato.getMonth(); // Get the month (zero-based index)

        // Beregn rett på barnehage
        if(monthIndex <=7) {
            const rettighetsDato = new Date((year + 1), 7, 1)
            return rettighetsDato
        } 
        else if (monthIndex <=10) {
            const rettighetsDato = new Date((year + 1), monthIndex, 1)
            return rettighetsDato
        }
        else {
            const rettighetsDato = new Date((year + 2), 7, 1)
            return rettighetsDato
        }
    }
}

function oppdaterUkerPermGap(oppgittTermin, rettighetshavere) {
    const rettighetsDato = beregnBarneHagerettDato(oppgittTermin);

    let foreldreMedRettigheter = rettighetshavere.filter(forelder => forelder._harRettigheter);

    if (foreldreMedRettigheter.length > 0) {
        // Sort the filtered array by permslutt in descending order
        foreldreMedRettigheter.sort((a, b) => b._sluttDatoPerm - a._sluttDatoPerm);
        // The first element in the sorted array will have the latest permslutt date
        const senestePermSlutt = foreldreMedRettigheter[0]._sluttDatoPerm;


        // Calculate the time difference in milliseconds
        const timeDifference = rettighetsDato - senestePermSlutt;

        // Calculate the number of milliseconds in a week (7 days)
        const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;

        // Calculate the number of weeks, rounded up to the nearest whole number
        const ukesGap = Math.ceil(timeDifference / millisecondsInWeek);

        const ukesGapTittel = document.getElementById('ukesGapTittel');
        const ukesGapVerdi = document.getElementById('ukerGap');
        const resultatUkesGap = document.getElementById('result2');

        if (ukesGap <=0) {
            ukesGapTittel.innerHTML = "Permisjonen din strekker seg<br>forbi barnehagestart med";
            ukesGapVerdi.textContent = -ukesGap + " uker";
            resultatUkesGap.style.backgroundColor = '#6b9c6a70';
        }
        else {
            ukesGapTittel.innerHTML = "Tid fra permisjonsslutt<br>til barnehagestart er";
            ukesGapVerdi.textContent = ukesGap + " uker";
            resultatUkesGap.style.backgroundColor = '#f8537670';
        }
        console.log('Latest permslutt date among foreldre with harrettigheter: ' + senestePermSlutt);
    } else {
        console.log('No foreldre with harrettigheter found.');
    }
}


