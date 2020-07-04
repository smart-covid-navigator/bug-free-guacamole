import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClinicalTrial } from "../condition-info"
import { ViewChild } from '@angular/core';

@Injectable()
export class CSVReader {
    constructor(private http: HttpClient) {}
    // @ViewChild('/assets/risk-factors/Asthma.csv', ) fileImportInput: any;
    readCSV(): void {
        var trialArray: ClinicalTrial[] = [];
    
        this.http.get("/assets/risk-factors/Diabetes.csv", {responseType: 'text'}).subscribe(data => {
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
            console.log(trialArray);
        })
        
    }
}