import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClinicalTrial, Condition, Tissue } from "../condition-info";
import { Observable } from "rxjs/Observable";
import * as XLSX from 'xlsx';


@Injectable()
export class XLSXReader {
    constructor(private http: HttpClient) {}
    tissueArray: Tissue[] = [

        new Tissue("Bladder/Urinary tract", "Vejiga / tracto urinario", "膀胱/尿路", 3),
        new Tissue("Bone and soft tissue", "Hueso y tejido blando", "骨和软组织", 1),
        new Tissue("Bowel", "Intestino", "肠", 3),
        new Tissue("Bowel, Esophagus/Stomach", "Intestino, esófago / estómago", "肠，食道/胃", 2),
        new Tissue("Brain/CNS", "Cerebro / sistema nervioso central", "脑/中枢神经系统", 3),
        new Tissue("Breast", "Pecho", "胸部", 3),
        new Tissue("Cervix","Cuello uterino","宫颈", 1),
        new Tissue("Esophagus/Stomach","Esófago / Estómago","食道/胃", 2),
        new Tissue("Genitourinary","Genitourinaria","泌尿生殖", 1),
        new Tissue("Gynecological","Ginecológico","妇科", 1),
        new Tissue("Head and neck","Cabeza y cuello","头颈", 3),
        new Tissue("Hematologic not specified","Hematológico no especificado","未指定血液学", 1),
        new Tissue("Kidney","Riñón","肾", 3),
        new Tissue("Liver","Hígado","肝脏", 3),
        new Tissue("Lung","Pulmón","肺", 3),
        new Tissue("Lymphoid","Linfoide","淋巴", 3),
        new Tissue("Lymphoid, Myeloid","Linfoide, mieloide","淋巴，骨髓", 2),
        new Tissue("Myeloid","Mieloide","髓样", 3),
        new Tissue("Not specified","No especificado","未标明", 3),
        new Tissue("Ovary/Fallopian tube","Ovario / trompa de Falopio","子房/输卵管", 3),
        new Tissue("Pancreas","Páncreas","胰腺", 2),
        new Tissue("Pleura","Pleura","胸膜", 1),
        new Tissue("Prostate","Próstata","前列腺", 3),
        new Tissue("Sarcoma","Sarcoma","肉瘤", 2),
        new Tissue("Skin","Piel","皮肤", 3),
        new Tissue("Soft tissue", "Tejido suave","软组织", 2),
        new Tissue("Testis", "Testículo", "睾丸", 2),
        new Tissue("Thoracic", "Torácica","胸椎", 1),
        new Tissue("Thymus","Timo","胸腺", 3),
        new Tissue("Thyroid","Tiroides","甲状腺", 2)
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
