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
        <!-- A bit of info about the drug -->
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

    ngOnInit() {
        this.csvReader.readCSV(this.conditionName.name).subscribe(data => {
            this.clinicalTrials = data;
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
}