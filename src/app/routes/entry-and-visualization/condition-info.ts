/*
Various classes to store information about conditions.
Each is described in more detail below.
*/

// stores information about a clinical trial for a condition being examined.
export class ClinicalTrial {
    name: string;
    date: string;
    link: string;
    severeSignificant: string;
    fatalSignificant: string;
    constructor(
        name: string,
        date: string,
        link: string,
        severeSignificant: string,
        fatalSignificant: string
    ) {
        this.name = name;
        this.date = date;
        this.link = link;
        this.severeSignificant = severeSignificant;
        this.fatalSignificant = fatalSignificant;
    }

}