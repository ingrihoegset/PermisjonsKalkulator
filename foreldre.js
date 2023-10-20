class Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse) {
        super(termin, antallBarn, rettighetsKlasse)

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

        /*
        this._harRettigheter = true; // Om mor har rettigheter gitt inputene
        this._andelPenger = 100;
        this._ukerFellesKvote = 0; // Hvor mange uker er felleskvote
        this._ukerMorKvote = 0; // Hvor mange uker er mammakvoten
        this._ukerForFodsel = 0; // Uker perm før fødsel
        this._startDatoPerm = new Date();
        this._sluttDatoPerm = new Date();*/
    }

    /*
    // Setter for andelPenger
    setAndelPenger(oppgittAndel) {
        if (Number.isInteger(oppgittAndel)) {
            this._andelPenger = oppgittAndel;

            if (this._andelPenger === 100) {
                console.log('foreldrepenger er 100 %'); 
                // Rettighetsklasse 1
                if(this._rettighetsKlasse === 1) {
                    console.log('Fant rettighetsklasse 1 for mor'); 
                    this._ukerForFodsel = 3;
                    this._ukerMorKvote = 15;
                    this._ukerFellesKvote = 16;
                }
                // Rettighetsklasse 2
                // Rettighetsklasse 3
                // Rettighetsklasse 4
                // Rettighetsklasse 5
                // Rettighetsklasse 6
            }
            else if (this._andelPenger === 80) {
                console.log('foreldrepenger er 80 %'); 
                if(this._rettighetsKlasse === 1) {
                    console.log('Fant rettighetsklasse 1 for mor'); 
                    this._ukerForFodsel = 3;
                    this._ukerMorKvote = 19;
                    this._ukerFellesKvote = 18;
                }
                // Rettighetsklasse 2
                // Rettighetsklasse 3
                // Rettighetsklasse 4
                // Rettighetsklasse 5
                // Rettighetsklasse 6
            }
            else {
                console.error('Invalid input for foreldrepenger')
            }

            
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    get startDatoPerm() {
        return this._startDatoPerm;
    }

    set startDatoPerm(nyStartDato) {
        this._startDatoPerm = nyStartDato;
    }

    get sluttDatoPerm() {
        return this._sluttDatoPerm;
    }

    set sluttDatoPerm(nySluttDato) {
        this._sluttDatoPerm = nySluttDato;
    }*/

    get navn() {
        return this._navn;
    }

    set navn(nyttNavn) {
        this._navn = nyttNavn;
    }
}


export { Foreldre, Mor };