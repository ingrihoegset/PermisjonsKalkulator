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
        this._ukerAvFellesKvote = 0; // Hvor mange uker av felleskvote går til mor
        this._ukerMorKvote = 15; // Hvor mange uker er mammakvoten
        this._ukerForFodsel = 3; // Uker perm før fødsel
        this._startDatoPerm;
        this._sluttDatoPerm;

        this.oppdaterRettigheter();
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

    // For at andre objekter kan hente sluttdatoen for m
    get sluttDatoPerm() {
        return this._sluttDatoPerm;
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
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 46;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 46;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 0;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
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
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 56;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 56;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 3;
                this._ukerMorKvote = 0;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerForFodsel = 0;
                this._ukerMorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }

        // Beregn permisjon
        this.beregnPermisjon()
    }

    // Oppdater mors andel av felleskvote og oppdater permisjonsberegninger
    setDelAvFellesKvote(oppgittAndelAvKvote) {
        this._ukerAvFellesKvote = oppgittAndelAvKvote
        console.log("Setter uker felleskvote for mor til" + oppgittAndelAvKvote);
        this.beregnPermisjon()
    }

    beregnPermisjon() {
        console.log('Beregner permisjon med rettighetene: har rettigheter ' + this._harRettigheter + ' Uker etter fødsel til mor: ' + this._ukerMorKvote + ' Uker før fødsel til mor: ' + this._ukerForFodsel + ' Termin: ' + this._termin + ' Mors del av felleskvote: ' + this._ukerAvFellesKvote);
        // Set start of perm
        this._startDatoPerm = new Date(this._termin);
        this._startDatoPerm.setDate(this._termin.getDate() - (this._ukerForFodsel * 7));

        // Set end of perm
        this._sluttDatoPerm = new Date(this._termin);
        this._sluttDatoPerm.setDate(this._termin.getDate() + (this._ukerMorKvote * 7) - 1 +(this._ukerAvFellesKvote * 7) );
        console.log('Mors perm start: ' +this._startDatoPerm+ ' Mors perm slutt: ' +this._sluttDatoPerm);
    }
}

// Class Far/Medmor

class FarMedmor extends Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse, mor) {
        super(termin, antallBarn, rettighetsKlasse)

        this._navn = "Far/Medmor"
        this._mor = mor;
        this._harRettigheter = true; // Om far/medmor har rettigheter gitt inputene
        this._andelPenger = 100;
        this._ukerAvFellesKvote = 16; // Hvor mange uker av felleskvote er til far
        this._ukerFarMedmorKvote = 15;
        this._startDatoPerm;
        this._sluttDatoPerm;

        this.oppdaterRettigheter();
    }

    // Oppdater termin og oppdater rettigheter
    setNyTermin(nyTermin) {
        if (!isNaN(nyTermin)) {
            this._termin = nyTermin;
            console.log('Termindato for far/medmor ble oppdatert til ' + this._termin.toISOString().split('T')[0]);
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
            console.log('Rettighetsklasse for Far/medmor oppdatert til ' + nyKlasse);
            this.oppdaterRettigheter();
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    oppdaterRettigheter() {
        console.log('Oppdaterer rettigheter for Far/Medmor med termin: ' + this._termin + ' Rettighetsklasse: ' + this._rettighetsKlasse + ' Andel penger: ' + this._andelPenger);

        if (this._andelPenger === 100) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 15;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 32;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 46;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
        }
        else if (this._andelPenger === 80) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 19;
                this._harRettigheter = true;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 42;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 56;
                this._harRettigheter = true;
                this._ukerAvFellesKvote = 0; 
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFarMedmorKvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }

        // Beregn permisjon
        this.beregnPermisjon()
    }

    // Oppdater fars andel av felleskvote og oppdater permisjonsberegninger
    setDelAvFellesKvote(oppgittAndelAvKvote) {
        this._ukerAvFellesKvote = oppgittAndelAvKvote
        console.log("Setter uker felleskvote for far til" + oppgittAndelAvKvote);
        this.beregnPermisjon()
    }

    beregnPermisjon() {
        console.log('Beregner permisjon for far/medmor med rettighetene: har rettigheter ' + this._harRettigheter + ' Fars/Medmors del av felleskvote ' + this._ukerAvFellesKvote + ' Uker av kvote til Far/mormor ' + this._ukerFarMedmorKvote + ' Termin: ' + this._termin);
        const morsPermSlutt = this._mor._sluttDatoPerm;
        
        // Set start of perm
        this._startDatoPerm = new Date(morsPermSlutt);
        this._startDatoPerm.setDate(morsPermSlutt.getDate() + 1); 

        // Set end of perm
        this._sluttDatoPerm = new Date(this._startDatoPerm);
        this._sluttDatoPerm.setDate(this._sluttDatoPerm.getDate() + this._ukerAvFellesKvote * 7 + (this._ukerFarMedmorKvote * 7) - 1);
        console.log('Startdato perm far/medmor: ' + this._startDatoPerm);
        console.log('Sluttdato perm far/medmor: ' + this._sluttDatoPerm);
        console.log('Startdato Perm Far/medmor: ' +this._startDatoPerm+ ' Uker av felleskvote til far/medmor: ' +this._ukerAvFellesKvote+ ' Uker kvote til far: ' +this._ukerFarMedmorKvote);
    }
}


// Class Far1

class Far1 extends Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse, navn) {
        super(termin, antallBarn, rettighetsKlasse)

        this._navn = "Far1";
        this._harRettigheter = false; // Om far1 har rettigheter gitt inputene
        this._andelPenger = 100;
        this._ukerAvFellesKvote = 0; // Hvor mange uker av felleskvote er til far
        this._ukerFar1Kvote = 15;
        this._startDatoPerm;
        this._sluttDatoPerm;

        this.oppdaterRettigheter();
    }

    // Oppdater termin og oppdater rettigheter
    setNyTermin(nyTermin) {
        if (!isNaN(nyTermin)) {
            this._termin = nyTermin;
            console.log('Termindato for Far1 ble oppdatert til ' + this._termin.toISOString().split('T')[0]);
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
            console.log('Rettighetsklasse for Far1 oppdatert til ' + nyKlasse);
            this.oppdaterRettigheter();
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    oppdaterRettigheter() {
        console.log('Oppdaterer rettigheter for Far1 med termin: ' + this._termin + ' Rettighetsklasse: ' + this._rettighetsKlasse + ' Andel penger: ' + this._andelPenger);

        if (this._andelPenger === 100) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 15;
                this._harRettigheter = true;
            }
        }
        else if (this._andelPenger === 80) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 0;
                this._harRettigheter = false;
                this._ukerAvFellesKvote = 0; 
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar1Kvote = 19;
                this._harRettigheter = true;
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }

        // Beregn permisjon
        this.beregnPermisjon()
    }

    // Oppdater fars andel av felleskvote og oppdater permisjonsberegninger
    setDelAvFellesKvote(oppgittAndelAvKvote) {
        this._ukerAvFellesKvote = oppgittAndelAvKvote
        console.log("Setter uker felleskvote for far1 til" + oppgittAndelAvKvote);
        this.beregnPermisjon()
    }

    beregnPermisjon() {
        console.log('Beregner permisjon for far1 med rettighetene: har rettigheter ' + this._harRettigheter + ' Fars/Medmors del av felleskvote ' + this._ukerAvFellesKvote + ' Uker av kvote til Far/mormor ' + this._ukerFar1Kvote + ' Termin: ' + this._termin);
        
        // Set start of perm
        this._startDatoPerm = new Date(this._termin);
        this._startDatoPerm.setDate(this._termin.getDate()); 

        // Set end of perm
        this._sluttDatoPerm = new Date(this._startDatoPerm);
        this._sluttDatoPerm.setDate(this._sluttDatoPerm.getDate() + (this._ukerAvFellesKvote * 7) + (this._ukerFar1Kvote * 7) - 1);
        console.log('Startdato perm far1: ' + this._startDatoPerm);
        console.log('Sluttdato perm far1: ' + this._sluttDatoPerm);
        console.log('Startdato Perm far1: ' + this._startDatoPerm+ ' Uker av felleskvote til far1: ' +this._ukerAvFellesKvote+ ' Uker kvote til far1: ' +this._ukerFar1Kvote);
    }
}


// Class Far2

class Far2 extends Foreldre {

    constructor(termin, antallBarn, rettighetsKlasse, far1) {
        super(termin, antallBarn, rettighetsKlasse)

        this._navn = "Far2";
        this._far1 = far1;
        this._harRettigheter = false; // Om far2 har rettigheter gitt inputene
        this._andelPenger = 100;
        this._ukerAvFellesKvote = 16; // Hvor mange uker av felleskvote er til far
        this._ukerFar2Kvote = 15;
        this._startDatoPerm;
        this._sluttDatoPerm;

        this.oppdaterRettigheter();
    }

    // Oppdater termin og oppdater rettigheter
    setNyTermin(nyTermin) {
        if (!isNaN(nyTermin)) {
            this._termin = nyTermin;
            console.log('Termindato for Far2 ble oppdatert til ' + this._termin.toISOString().split('T')[0]);
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
            console.log('Rettighetsklasse for Far2 oppdatert til ' + nyKlasse);
            this.oppdaterRettigheter();
        } else {
            console.error('Invalid input for rettighetsklasse. Please provide an Integer.');
        }
    }

    oppdaterRettigheter() {
        console.log('Oppdaterer rettigheter for Far2 med termin: ' + this._termin + ' Rettighetsklasse: ' + this._rettighetsKlasse + ' Andel penger: ' + this._andelPenger);

        if (this._andelPenger === 100) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 15;
                this._harRettigheter = true;
            }
        }
        else if (this._andelPenger === 80) {
            console.log('foreldrepenger er ' + this._andelPenger + ' %'); 
            // Rettighetsklasse 1
            if(this._rettighetsKlasse === 1) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 2) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 3) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 4) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else if(this._rettighetsKlasse === 5) {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 0;
                this._harRettigheter = false;
            }
            else {
                console.log('Fant rettighetsklasse ' + this._rettighetsKlasse); 
                this._ukerFar2Kvote = 19;
                this._harRettigheter = true;
            }
        }
        else {
            console.error('Invalid input for foreldrepenger')
        }

        // Beregn permisjon
        this.beregnPermisjon()
    }

    // Oppdater fars andel av felleskvote og oppdater permisjonsberegninger
    setDelAvFellesKvote(oppgittAndelAvKvote) {
        this._ukerAvFellesKvote = oppgittAndelAvKvote
        console.log("Setter uker felleskvote for far2 til" + oppgittAndelAvKvote);
        this.beregnPermisjon()
    }

    beregnPermisjon() {
        console.log('Beregner permisjon for far2 med rettighetene: har rettigheter ' + this._harRettigheter + ' Far2 del av felleskvote ' + this._ukerAvFellesKvote + ' Uker av kvote til Far2 ' + this._ukerFar2Kvote + ' Termin: ' + this._termin);
        const far1PermSlutt = this._far1._sluttDatoPerm;
        
        // Set start of perm
        this._startDatoPerm = new Date(far1PermSlutt);
        this._startDatoPerm.setDate(far1PermSlutt.getDate() + 1); 

        // Set end of perm
        this._sluttDatoPerm = new Date(this._startDatoPerm);
        this._sluttDatoPerm.setDate(this._sluttDatoPerm.getDate() + (this._ukerAvFellesKvote * 7) + (this._ukerFar2Kvote * 7) - 1);
        console.log('Startdato perm far2: ' + this._startDatoPerm);
        console.log('Sluttdato perm far2: ' + this._sluttDatoPerm);
        console.log('Startdato Perm far2: ' +this._startDatoPerm+ ' Uker av felleskvote til far/medmor: ' +this._ukerAvFellesKvote+ ' Uker kvote til far: ' +this._ukerFar2Kvote);
    }
}


export { Foreldre, Mor, FarMedmor, Far1, Far2 };

