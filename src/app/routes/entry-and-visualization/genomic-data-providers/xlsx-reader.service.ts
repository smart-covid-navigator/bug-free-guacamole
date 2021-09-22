import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClinicalTrial, Condition, Tissue } from "../condition-info";
import { Observable } from "rxjs/Observable";
import * as XLSX from 'xlsx';


@Injectable()
export class XLSXReader {
    constructor(private http: HttpClient) {}
    tissueArray: Tissue[] = [
        
        new Tissue("Bladder/Urinary tract", 3),
        new Tissue("Bone and soft tissue", 1),
        new Tissue("Bowel", 3),
        new Tissue("Bowel, Esophagus/Stomach", 2),
        new Tissue("Brain/CNS", 3),
        new Tissue("Breast", 3),
        new Tissue("Cervix", 1),
        new Tissue("Esophagus/Stomach", 2),
        new Tissue("Genitourinary", 1),
        new Tissue("Gynecological", 1),
        new Tissue("Head and neck", 3),
        new Tissue("Hematologic not specified", 1),
        new Tissue("Kidney", 3),
        new Tissue("Liver", 3),
        new Tissue("Lung", 3),
        new Tissue("Lymphoid", 3),
        new Tissue("Lymphoid, Myeloid", 2),
        new Tissue("Myeloid", 3),
        new Tissue("Not specified", 3),
        new Tissue("Ovary/Fallopian tube", 3),
        new Tissue("Pancreas", 2),
        new Tissue("Pleura", 1),
        new Tissue("Prostate", 3),
        new Tissue("Sarcoma", 2),
        new Tissue("Skin", 3),
        new Tissue("Soft tissue", 2),
        new Tissue("Testis", 2),
        new Tissue("Thoracic", 1),
        new Tissue("Thymus", 3),
        new Tissue("Thyroid", 2)
    ]
    readPatientXLSX(fileName: string) {
        return this.http.get("assets/20201015_rebootrx_covid19_covidcancer_download.xlsx", { responseType: "blob" } ).map(data => {
            const reader: FileReader = new FileReader();
            reader.readAsBinaryString(data);
            reader.onload = (e: any) => {
                /* create workbook */
                const binarystr: string = e.target.result;
                const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: "binary" });
                
                /* selected the first sheet */
                const wsname: string = wb.SheetNames[0];
                const ws: XLSX.WorkSheet = wb.Sheets[wsname];
                
                /* save data */
                const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
                console.log(data); // Data will be logged in array format containing objects
                localStorage.setItem("covidData", JSON.stringify(data));
                // console.log(localStorage.getItem("covidData"));
                return data;
            }
            
            // return "HELLO"
        });
    }

    readDrugsXLSX(fileName: string) {
        return this.http.get("assets/20201015_rebootrx_covid19_drugcancer_download.xlsx", { responseType: "blob" } ).map(data => {
            const reader: FileReader = new FileReader();
            reader.readAsBinaryString(data);
            reader.onload = (e: any) => {
                /* create workbook */
                const binarystr: string = e.target.result;
                const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: "binary" });
                
                /* selected the first sheet */
                const wsname: string = wb.SheetNames[0];
                const ws: XLSX.WorkSheet = wb.Sheets[wsname];
                
                /* save data */
                const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
                console.log(data); // Data will be logged in array format containing objects
                localStorage.setItem("drugData", JSON.stringify(data));
                // console.log(localStorage.getItem("covidData"));
                return data;
            }
            
            // return "HELLO"
        });
    }



    // loadFile() {
    //     /* wire up file reader */
    //     this.http.get(‘assets/houses.xlsx’, { responseType: ‘blob’ }).subscribe(data => {
    //     const reader: FileReader = new FileReader();
    //     reader.readAsBinaryString(data);
    //     reader.onload = (e: any) => {
    //     /* create workbook */
    //     const binarystr: string = e.target.result;
    //     const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: ‘binary’ });
        
    //     /* selected the first sheet */
    //     const wsname: string = wb.SheetNames[0];
    //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        
    //     /* save data */
    //     const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
    //     console.log(data); // Data will be logged in array format containing objects
    //     };
    //     },
    //     error => {
    //     console.log(error);
    //     })
    //     }

// https://stackblitz.com/edit/angular-excel-read-table?file=src%2Fapp%2Fsheet.component.ts
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

    

    // search(searchTerm: string) {
    //     var possibilities: Condition[] = [];
    //     searchTerm = searchTerm.toLowerCase();
    //     console.log(searchTerm);

    //     for (var i = 0; i < this.conditionArray.length; i++) {
    //         var condition = this.conditionArray[i];
    //         var lowerCase = this.conditionArray[i].name.toLowerCase()
    //         if (lowerCase.includes(searchTerm)) {
    //             possibilities.push(condition);
    //         }
    //     } 
    //     return Observable.of(possibilities);
    // }
}