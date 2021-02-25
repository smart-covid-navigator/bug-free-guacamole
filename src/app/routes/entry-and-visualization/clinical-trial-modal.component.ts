import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrial, Condition } from "./condition-info";
import { CSVReader } from "./genomic-data-providers/csv-reader.service"
import { environment } from 'environments/environment';

@Component({
    selector: "clinical-trial-modal",
    templateUrl: './clinical-trial-modal.html',
})
export class ClinicalTrialModalComponent implements OnInit{
    constructor (
        public activeModal: NgbActiveModal,
        public csvReader: CSVReader) {}

    @Input() conditionName: Condition;

    clinicalTrials: ClinicalTrial[] = [];

    totalPapers: number = 0;

    studyingSeverity: number = 0;
    severeSignificant: number = 0;
    severeProportion: number = 0;

    studyingFatality: number = 0;
    fatalitySignificant: number = 0;
    fatalityProportion: number = 0;

    studyingBoth: number = 0;
    bothSignificant: number = 0;
    bothProportion: number = 0;

    ngOnInit() {
        this.csvReader.readCSV(this.conditionName.name_english).subscribe(data => {
            this.clinicalTrials = data;
            this.analyzeStudies();
            });

        this.update_lang();
    }

    update_lang() {
        var spanish = document.getElementById("spanish");
        var english = document.getElementById("english");
        var chinese = document.getElementById("chinese");
        english.style.display = "none";
        spanish.style.display = "none";
        chinese.style.display = "none";

        if (environment.language == "english") {
            english.style.display = "block";
        }

        if (environment.language == "spanish") {
            spanish.style.display = "block";
        }

        if (environment.language == "chinese") {
            chinese.style.display = "block";
        }
    }

    styleSeverity(significance: string) {
        console.log("hello")
        var result = "background-color:";
        if (significance == "Significant") result += "green";
        else if (significance == "Not Significant") result += "red";
        else result += "white";
        return result;
    }

    analyzeStudies() {
        this.totalPapers = this.clinicalTrials.length;

        for (var i = 0; i < this.clinicalTrials.length; i++) {
            var study = this.clinicalTrials[i];
            if (study.severeSignificant != "") {
                this.studyingSeverity += 1;
                if (study.severeSignificant == "Significant") {
                    this.severeSignificant += 1;
                }
            }

            if (study.fatalSignificant != "") {
                this.studyingFatality += 1;
                if (study.fatalSignificant == "Significant") {
                    this.fatalitySignificant += 1;
                }
            }

            if (study.severeSignificant != "" && study.fatalSignificant != "") {
                this.studyingBoth += 1;
                if (study.severeSignificant == "Significant" && study.fatalSignificant == "Significant") {
                    this.bothSignificant += 1;
                }
            }
        }


        this.severeProportion = this.severeSignificant / this.studyingSeverity;
        this.severeProportion *= 100;
        this.severeProportion = Math.round(this.severeProportion);

        this.fatalityProportion = this.fatalitySignificant / this.studyingFatality;
        this.fatalityProportion *= 100;
        this.fatalityProportion = Math.round(this.fatalityProportion);

        this.bothProportion = this.bothSignificant / this.studyingBoth;
        this.bothProportion *= 100;
        this.bothProportion = Math.round(this.bothProportion);

    }

}
