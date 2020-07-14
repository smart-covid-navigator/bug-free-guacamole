import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClinicalTrial, Condition } from "../condition-info";
import { Observable } from "rxjs/Observable";


@Injectable()
export class CSVReader {
    constructor(private http: HttpClient) {}

    conditionArray: Condition[] = [
        new Condition("Age", []),
        new Condition("Asthma", []),
        new Condition("Autoimmune disorders", []),
        new Condition("Cancer", []),
        new Condition("Cardio- and cerebrovascular disease", []),
        new Condition("Cerebrovascular disease", []),
        new Condition("Chronic digestive disorders", []),
        new Condition("Chronic kidney disease", []),
        new Condition("Chronic liver disease", []),
        new Condition("Chronic respiratory diseases", []),
        new Condition("COPD", []),
        new Condition("Dementia", []),
        new Condition("Diabetes", []),
        new Condition("Drinking", []),
        new Condition("Endocrine diseases", []),
        new Condition("Ethnicity_ Hispanic vs. non-Hispanic", []),
        new Condition("Heart Disease", []),
        new Condition("Heart Failure", []),
        new Condition("Hypertension", ["38341003"]),
        new Condition("Immune system disorders", []),
        new Condition("Male gender", []),
        new Condition("Neurological disorders", []),
        new Condition("Overweight or obese", []),
        new Condition("Race_ Asian vs. White", []),
        new Condition("Race_ Black vs. White", []),
        new Condition("Race_ Other vs. White", []),
        new Condition("Respiratory system diseases", []),
        new Condition("Smoking Status", [])
    ];

    readCSV(fileName: string) {
        var trialArray: ClinicalTrial[] = [];
        
        return this.http.get("/assets/risk-factors/" + fileName + ".csv", {responseType: 'text'}).map(data => {
            var csvToRows = data.split("\n");
            for (var i = 1; i < csvToRows.length; i++) {
                var row = csvToRows[i];
                var rowSplit = [];
                var currentWord = "";
                if (row.length == 0) continue;
                for (var j = 0; j < row.length; j++) {
                    if (row[j] == ',') {
                        if (rowSplit.length == 2) {
                            if (row.substring(j+1, j+5) == 'http' || row.substring(j+1, j+8) == 'doi.org') {
                                rowSplit.push(currentWord);
                                currentWord = "";
                            }
                        }
                        else {
                            rowSplit.push(currentWord);
                            currentWord = "";
                        }
                    }
                    else if (row[j] != '"'){
                        currentWord = currentWord + row[j];
                    }
                }
                var clinicalTrial = new ClinicalTrial(rowSplit[2], rowSplit[1], rowSplit[3], rowSplit[9], rowSplit[16]);
                trialArray.push(clinicalTrial);
            }
            return trialArray;
        })
    }

    

    search(searchTerm: string) {
        var possibilities: Condition[] = [];
        searchTerm = searchTerm.toLowerCase();
        console.log(searchTerm);

        for (var i = 0; i < this.conditionArray.length; i++) {
            var condition = this.conditionArray[i];
            var lowerCase = this.conditionArray[i].name.toLowerCase()
            if (lowerCase.includes(searchTerm)) {
                possibilities.push(condition);
            }
        } 
        return Observable.of(possibilities);
    }
}