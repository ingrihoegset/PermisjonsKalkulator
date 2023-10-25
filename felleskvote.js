// Brukes til å beregne lengden på felleskvote med utgangspunkt i innsatsene som brukeren oppgir
class Felleskvote {

    // Bare rettighetsklasse og andelpenger påvirker felleskvoten, så objektene må oppdateres ved endringer i disse
    // Ved annen andledning kanskje jeg vi programmere for å håndtere mer enn 1 barn.
    constructor() {
        this._antallBarn = 1;
        this._rettighetsKlasse = 1;
        this._andelPenger = 100;
        this._harFellesKvote = true;
        this._fellesKvoteStart = 0;
        this._fellesKvoteVarighet = 16;
        this._rettighetshaver = "mor"
    }

    // Setter for rettighetsklasse
    setRettighetsKlasse(nyKlasse) {
        if (Number.isInteger(nyKlasse)) {
            this._rettighetsKlasse = nyKlasse;
            this.setFelleskvoteBetingelser();
            console.log('Rettighetsklasse for felleskvote oppdatert til ' + nyKlasse)
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    // Setter for rettighetsklasse
    setAndelPenger(oppgittAndel) {
        if (Number.isInteger(oppgittAndel)) {
            this._andelPenger = oppgittAndel;
            this.setFelleskvoteBetingelser();
            console.log('Andel foreldrepenger for felleskvote oppdatert til ' + oppgittAndel)
        } else {
            console.error('Invalid input for andel foreldrepenger. Please provide an Integer.');
        }
    }

    // Hent har felleskvote
    getHarFellesKvote() {
        return this._harFellesKvote;
    }

    // Hent kvotevarighet
    getKvoteVarighet() {
        return this._fellesKvoteVarighet;
    }

    // Hent rettighetshaver
    getRettighetshaver() {
        return this._rettighetshaver;
    }

    //Beregn og oppdater felleskvotebetingelser
    setFelleskvoteBetingelser() {
        // Case med 100 % foreldrepenger
        if (this._andelPenger === 100) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = true;
                this._fellesKvoteVarighet = 16;
                this._rettighetshaver = "mor";
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 2
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 3
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 4
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 5
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 6
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = true;
                this._fellesKvoteVarighet = 16;
                this._rettighetshaver = "far 1"
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            
        }
        else if (this._andelPenger === 80) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = true;
                this._fellesKvoteVarighet = 18;
                this._rettighetshaver = "mor";
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 2
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 3
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 4
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 5
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = false;
                this._fellesKvoteVarighet = 0;
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
            // Rettighetsklasse 6
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._harFellesKvote = true;
                this._fellesKvoteVarighet = 18;
                this._rettighetshaver = "far 1"
                console.log('Har felleskvote: ' + this._harFellesKvote + ' Varighet: ' + this._fellesKvoteVarighet + ' uker.'); 
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }
        const sliderSlutt = document.getElementById('sliderSlutt');
        sliderSlutt.innerHTML = this._fellesKvoteVarighet;
        const felleskvoteSlider = document.getElementById('felleskvoteUkerSlider');
        felleskvoteSlider.max = this._fellesKvoteVarighet;
        const felleskvoteTittel = document.getElementById('felleskvoteLabel');
        felleskvoteTittel.textContent = 'Hvor mange uker av felleskvote skal gå til ' + this._rettighetshaver + '?';
        
        //Pass på at valgt sliderverdi ikke er større en rangen
        let sliderAndelValgt = document.getElementById('felleskvoteUkerSlider').value;
        if (sliderAndelValgt > this._fellesKvoteVarighet) {
            sliderAndelValgt = this._fellesKvoteVarighet;
        }
        
        //Vurderer om slider skal skjules eller vises
        this.skjulFelleskvoteSlider()
    }

    // Vis / skjul fellekvote slider
    skjulFelleskvoteSlider() {
        const sliderSection = document.getElementById('sliderSection');
        const output = document.getElementById('sliderValue'); // The label beneath the slider
        let sliderValue = document.getElementById('felleskvoteUkerSlider').value;
        if (this._harFellesKvote === false) {
            sliderSection.style.display = 'none';
            sliderSection.style.visibility = 'hidden';
            console.log("Setting slider to 0")
            sliderValue = 0;
            output.innerHTML = 0;
        }
        else {
            sliderSection.style.display = 'block';
            sliderSection.style.visibility = 'visible';
        }

    }

}



export { Felleskvote };