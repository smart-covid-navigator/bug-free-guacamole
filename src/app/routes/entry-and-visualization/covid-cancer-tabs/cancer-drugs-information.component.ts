import { Component, Input, OnInit} from "@angular/core";
import { CancerClinicalTrial, Tissue, CancerDrugClinicalTrial } from "../condition-info"

@Component({
    selector: "cancer-drugs-information",
    template: `
    <br>
    <div *ngIf="tissue.files == 2 || tissue.files == 3">
        <p>Total papers: {{totalPapers}}</p>
        <table class="table table-bordered table-striped" *ngIf="clinicalTrials !== undefined">
            <thead>
            </thead>
            <tbody>
                <ng-container *ngIf="clinicalTrials !== undefined && clinicalTrials.length > 0">
                    <tr>
                        <td style="font-weight: bold;">Study Name</td>
                        <td style="font-weight: bold;">Cancer Type</td>
                        <td style="font-weight: bold;">Drug</td>
                        <td style="font-weight: bold;">Therapeutic Association</td>
                    </tr>
                    <tr *ngFor="let trial of clinicalTrials">
                        <td>{{trial.name}}</td>
                        <td>{{trial.cancerType}}</td>
                        <td>{{trial.drug}}</td>
                        <td>{{trial.benefit}}</td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
    </div>
    <div *ngIf="tissue.files == 1">
        <p>There are no entries regarding COVID/Cancer drugs for this tissue type.</p>
    </div>
    `
})
export class CancerDrugsInformationComponent implements OnInit{
    @Input() tissue: Tissue;

    patientData = [];
    clinicalTrials: CancerDrugClinicalTrial[] = [];
    totalPapers: number = 0;

    totalCancerCovid = 0;
    totalDeaths = 0;
    percentDeaths = 0.00;

    ngOnInit() {
        this.patientData = JSON.parse(localStorage.getItem("drugData"));
        this.analyzeStudies();
    }

    analyzeStudies() {
        // this.totalPapers = this.patientData.length;
        for (var i = 1; i < this.patientData.length; i++) {
            var study = this.patientData[i];
            if (study["Tissue type"] == this.tissue.name || (study["Tissue type"] == "CNS/Brain" && this.tissue.name == "Brain/CNS")) {
                this.totalPapers += 1;
                var title = study["Title"];
                var cancerType = study["Cancer type"]
                var drug = study["Drug"]
                var benefit = study["Therapeutic association"]

                this.clinicalTrials.push(new CancerDrugClinicalTrial(title, cancerType, drug, benefit));
                
            }
        }

        console.log(this.totalCancerCovid);
        console.log(this.totalDeaths);
        this.percentDeaths = Math.round(this.totalDeaths / this.totalCancerCovid * 100);
        console.log(this.percentDeaths);
        
    }

}