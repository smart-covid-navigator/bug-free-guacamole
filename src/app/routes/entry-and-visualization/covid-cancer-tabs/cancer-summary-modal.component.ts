import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrial, Condition } from "../condition-info";

@Component({
    selector: "cancer-summary-modal",
    template: `
    <div class="modal-header">
        <h4 class="modal-title">Summary</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        
        <!-- A bit of info about the studies -->
        <table class="table table-bordered table-striped" *ngIf="tissueTypes !== undefined">
            <thead>
            </thead>
            <tbody>
                <ng-container *ngIf="tissueTypes !== undefined && tissueTypes.length > 0">
                    <tr>
                        <td style="font-weight: bold;">Tissue Type</td>
                        <td style="font-weight: bold;"># Patients</td>
                        <td style="font-weight: bold;"># Deaths</td>
                        <td style="font-weight: bold;">% Fatality</td>
                    </tr>
                    <tr *ngFor="let tissue of tissueTypes">
                        <td>{{tissue.name}}</td>
                        <td>{{tissue.totalCovidCases}}</td>
                        <td>{{tissue.totalDeaths}}</td>
                        <td>{{tissue.percentFatality}}</td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
        <br>
    </div>
    `
})
export class CancerSummaryModalComponent implements OnInit{
    constructor (
        public activeModal: NgbActiveModal) {}

    tissueTypes: TissueTypeSummary[] = [
        new TissueTypeSummary("Bladder/Urinary tract"),
        new TissueTypeSummary("Bone and soft tissue"),
        new TissueTypeSummary("Bowel"),
        new TissueTypeSummary("Brain/CNS"),
        new TissueTypeSummary("Breast"),
        new TissueTypeSummary("Cervix"),
        new TissueTypeSummary("Genitourinary"),
        new TissueTypeSummary("Gynecological"),
        new TissueTypeSummary("Head and neck"),
        new TissueTypeSummary("Hematologic not specified"),
        new TissueTypeSummary("Kidney"),
        new TissueTypeSummary("Liver"),
        new TissueTypeSummary("Lung"),
        new TissueTypeSummary("Lymphoid"),
        new TissueTypeSummary("Myeloid"),
        new TissueTypeSummary("Not specified"),
        new TissueTypeSummary("Ovary/Fallopian tube"),
        new TissueTypeSummary("Pleura"),
        new TissueTypeSummary("Prostate"),
        new TissueTypeSummary("Skin"),
        new TissueTypeSummary("Thoracic"),
        new TissueTypeSummary("Thymus")
    ];

    ngOnInit() {
        var patientData = JSON.parse(localStorage.getItem("covidData"));
        console.log(patientData.length * this.tissueTypes.length);

        for (var i = 1; i < patientData.length; i++) {
            var study = patientData[i];
            var tissueName = study["Tissue type"];
            var cancerCovid = study["Number of cancer patients with COVID-19"];
            var deaths = study["Number of patient deaths"];
            if (cancerCovid != 0 && deaths != "Not applicable") {
                
                for (var j = 0; j < this.tissueTypes.length; j++) {
                    console.log("hello")
                    if (this.tissueTypes[j].name == tissueName) {
                        // console.log("bye")
                        this.tissueTypes[j].totalCovidCases += cancerCovid;
                        this.tissueTypes[j].totalDeaths += deaths;
                    }
                }

            }
        }

        for (var j = 0; j < this.tissueTypes.length; j++) {
            this.tissueTypes[j].percentFatality = Math.round(this.tissueTypes[j].totalDeaths / this.tissueTypes[j].totalCovidCases * 100) 
        }

    }


}

export class TissueTypeSummary {
    name: string;
    totalCovidCases: number;
    totalDeaths: number;
    percentFatality: number;

    constructor(name: string) {
        this.name = name;
        this.totalCovidCases = 0;
        this.totalDeaths = 0;
        this.percentFatality = 0;
    }


}