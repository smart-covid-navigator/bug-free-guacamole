import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrial, Condition } from "./condition-info";
import { CSVReader } from "./genomic-data-providers/csv-reader.service"

@Component({
    selector: "clinical-trial-modal",
    template: `
    <div class="modal-header">
        <h4 class="modal-title">{{conditionName.name}}</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>Number of papers: {{totalPapers}}</p>
        <p>Proportion of significant findings for severity: {{severeProportion}}% <span style="color:red" *ngIf="severeProportion >= 50">The proportion is above 50%</span></p>
        <p>Proportion of significant findings for fatality: {{fatalityProportion}}% <span style="color:red" *ngIf="severeProportion >= 50">The proportion is above 50%</span></p>
        <!-- A bit of info about the studies -->
        <table class="table table-bordered table-striped" *ngIf="clinicalTrials !== undefined">
            <thead>
            </thead>
            <tbody>
                <ng-container *ngIf="clinicalTrials !== undefined && clinicalTrials.length > 0">
                    <tr>
                        <td style="font-weight: bold;">Study Name</td>
                        <td style="font-weight: bold;">Date</td>
                        <td style="font-weight: bold;">Severity Significance</td>
                        <td style="font-weight: bold;">Fatality Significance</td>
                    </tr>
                    <tr *ngFor="let trial of clinicalTrials">
                        <td><a href="{{trial.link}}">{{trial.name}}</a></td>
                        <td>{{trial.date}}</td>
                        <td>{{trial.severeSignificant}}</td>
                        <td>{{trial.fatalSignificant}}</td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
        <br>
    </div>
    `
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
        this.csvReader.readCSV(this.conditionName.name).subscribe(data => {
            this.clinicalTrials = data;
            this.analyzeStudies();
        });
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