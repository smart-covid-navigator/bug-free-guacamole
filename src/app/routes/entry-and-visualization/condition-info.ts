/*
Various classes to store information about conditions.
Each is described in more detail below.
*/


export class Condition {
    name: string;
    codes: string[]; // all possible SNOMED codes for this condition
    color: number; // 0 if the patient does not have this condition, 1 if the patient does have this condition
    constructor(
        name: string,
        codes: string[]
    ) {
        this.name = name;
        this.codes = codes;
        this.color = 0;
    }
}

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

export class CancerClinicalTrial {
    name: string;
    cancerType: string;
    numberPatients: number;
    numberDeaths: number;
    fatalityRate: number;

    constructor(
        name: string,
        cancerType: string,
        numberPatients: number,
        numberDeaths: number,
        fatalityRate: number,
        
    ) {
        this.name = name;
        this.numberPatients = numberPatients;
        this.numberDeaths = numberDeaths;
        this.fatalityRate = fatalityRate;
        this.cancerType = cancerType;
    }
}

export class CancerDrugClinicalTrial {
    name: string;
    cancerType: string;
    drug: string;
    benefit: string;

    constructor(
        name: string,
        cancerType: string,
        drug: string,
        benefit: string
    ) {
        this.name = name;
        this.cancerType = cancerType;
        this.drug = drug;
        this.benefit = benefit;
    }


}


export class Tissue {
    name: string;
    files: number; // 1 means just in patient, 2 means just in drugs, 3 means in both

    constructor(
        name: string,
        files: number
    ) {
        this.name = name;
        this.files = files;
    }
}