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
            this.oppdaterRettigheter(this._termin, this._antallBarn, this._rettighetsKlasse, this._andelPenger);
        } else {
            console.log('Ugyldig datoformat for ny termin.');
        }
    }

    // Oppdater andel foreldrepenger og oppdater rettigheter
    setAndelPenger(oppgittAndel) {
        if (Number.isInteger(oppgittAndel)) {
            this._andelPenger = oppgittAndel;
            this.oppdaterRettigheter(this._termin, this._antallBarn, this._rettighetsKlasse, this._andelPenger);
        } else {
            console.error('Invalid input for andel foreldrepenger. Please provide an Integer.');
        }
    }

    // Oppdater rettighetsklasse og oppdater rettigheter
    setRettighetsKlasse(nyKlasse) {
        if (Number.isInteger(nyKlasse)) {
            this._rettighetsKlasse = nyKlasse;
            console.log('Rettighetsklasse for Mor oppdatert til ' + nyKlasse);
            this.oppdaterRettigheter(this._termin, this._antallBarn, this._rettighetsKlasse, this._andelPenger);
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }


    oppdaterRettigheter(termin, antallBarn, rettighetsKlasse, andelPenger) {
        console.log('Oppdaterer rettigheter for Mor med termin: ' + termin + ' Rettighetsklasse: ' + rettighetsKlasse + ' Andel penger: ' + andelPenger);
    }

}


export { Foreldre, Mor };