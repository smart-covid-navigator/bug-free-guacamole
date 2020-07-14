/*
Storage for patient information
Contains two classes:
    Patient class: stores information like name, age, where they live
    Condition class: each one is a separate condition that the patient has. The patient will have a list
        of conditions within its own object. A condition consists of a code, the actual written diagnosis,
        and the source of the information (either VA or CMS). The display is for ease of writing in the HTML.
*/

// The Patient class described at the top of the file
export class Patient {
    firstName: string;
    lastName: string;
    zipCode: string;
    gender: string;
    age: number;
    conditions: PatientCondition[] = [];
    alreadyContainedCodes: string[] = [];

    constructor(
        firstName: string,
        lastName: string,
        zipCode: string,
        gender: string,
        age: number,
        conditions: PatientCondition[],
        alreadyContainedCodes: string[]
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.gender = gender;
        this.age = age;
        this.conditions = conditions;
        this.alreadyContainedCodes = alreadyContainedCodes;
    }
    
}

// Condition class as described at the top of the file
export class PatientCondition {
    code: string;
    name: string;
    source: string;
    display: string;
    constructor(
        code: string,
        name: string,
        source: string
    ) {
        this.code = code;
        this.name = name;
        this.display = source + ": " + code + " " + name;
    }
}