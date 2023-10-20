class Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse) {
        this._termin = termin;
        this._antallBarn = antallBarn;
        this._rettighetsKlasse = rettighetsKlasse;
    }

    // Getter for termin
    get termin() {
        return this._termin;
    }

    // Setter for termin
    set termin(nyTermin) {
        if (nyTermin instanceof Date) {
            this._termin = nyTermin;
        } else {
            console.error('Invalid input for termin. Please provide a date.');
        }
    }

    // Getter for antallBarn
    get antallBarn() {
        return this._antallBarn;
    }

    // Setter for antallBarn
    set antallBarn(nyttAntallBarn) {
        if (Number.isInteger(nyttAntallBarn)) {
            this._antallBarn = nyttAntallBarn;
        } else {
            console.error('Invalid input for antall barn. Please provide an Integer.');
        }
    }

    // Getter for rettighetsklasse
    get rettighetsKlasse() {
        return this._rettighetsKlasse;
    }

    // Setter for rettighetsklasse
    set rettighetsKlasse(nyKlasse) {
        if (Number.isInteger(nyKlasse)) {
            this._rettighetsKlasse = nyKlasse;
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }
}


// Class Mor

class Mor extends Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse) {
        super(termin, antallBarn, rettighetsKlasse)

        this._navn = "Mor"
        this._harRettigheter = true; // Om mor har rettigheter gitt inputene
        this._andelPenger = 100;
        this._ukerFellesKvote = 0; // Hvor mange uker er felleskvote
        this._ukerMorKvote = 0; // Hvor mange uker er mammakvoten
        this._ukerForFodsel = 0; // Uker perm før fødsel
        this._startDatoPerm;
        this._sluttDatoPerm;
    }

    // Oppdater termin og oppdater rettigheter
    setNyTermin(nyTermin) {
        if (!isNaN(nyTermin)) {
            this._termin = nyTermin;
            console.log('Termindato for mor ble oppdatert til ' + this._termin.toISOString().split('T')[0]);
            this.oppdaterRettigheter();
        } else {
            console.log('Ugyldig datoformat for ny termin.');
        }
    }

    // Oppdater andel foreldrepenger og oppdater rettigheter
    setAndelPenger(oppgittAndel) {
        if (Number.isInteger(oppgittAndel)) {
            this._andelPenger = oppgittAndel;
            this.oppdaterRettigheter();
        } else {
            console.error('Invalid input for andel foreldrepenger. Please provide an Integer.');
        }
    }

    // Oppdater rettighetsklasse og oppdater rettigheter
    setRettighetsKlasse(nyKlasse) {
        if (Number.isInteger(nyKlasse)) {
            this._rettighetsKlasse = nyKlasse;
            console.log('Rettighetsklasse for Mor oppdatert til ' + nyKlasse);
            this.oppdaterRettigheter();
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    oppdaterRettigheter() {
        console.log('Oppdaterer rettigheter for Mor med termin: ' + this._termin + ' Rettighetsklasse: ' + this._rettighetsKlasse + ' Andel penger: ' + this._andelPenger);

        if (this._andelPenger === 100) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 15;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 5;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 46;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 46;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 0;
                this._harRettigheter = true;
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 0;
                this._ukerMorKvote = 0;
                this._harRettigheter = false;
            }
        }
        else if (this._andelPenger === 80) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 19;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 5;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 56;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 56;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 0;
                this._harRettigheter = true;
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 0;
                this._ukerMorKvote = 0;
                this._harRettigheter = false;
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }

        // Beregn permisjon
        beregnPermisjon()
    }

    beregnPermisjon() {
        console.log('Beregner permisjon med rettighetene: har rettigheter ' + this._harRettigheter + ' Uker etter fødsel til mor: ' + this._ukerMorKvote + ' Uker før fødsel til mor: ' + this._ukerForFodsel);
    }
}


export { Foreldre, Mor };