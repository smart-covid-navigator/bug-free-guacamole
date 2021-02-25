import { Component, Input, OnInit} from "@angular/core";
import { CancerClinicalTrial, ClinicalTrial, Tissue } from "../condition-info"

@Component({
    selector: "covid-patient-information",
    template: `
    <br>
    <div *ngIf="tissue.files == 1 || tissue.files == 3">
        <p>Total papers: {{totalPapers}}</p>
        <p># cancer patients with COVID-19: {{totalCancerCovid}}</p>
        <p># deaths: {{totalDeaths}}</p>
        <p>% fatality: {{percentDeaths}}%</p>
        <table class="table table-bordered table-striped" *ngIf="clinicalTrials !== undefined">
            <thead>
            </thead>
            <tbody>
                <ng-container *ngIf="clinicalTrials !== undefined && clinicalTrials.length > 0">
                    <tr>
                        <td style="font-weight: bold;">Study Name</td>
                        <td style="font-weight: bold;">Cancer type</td>
                        <td style="font-weight: bold;"># cancer patients with COVID-19</td>
                        <td style="font-weight: bold;"># deaths</td>
                        <td style="font-weight: bold;">% Fatality Rate</td>
                    </tr>
                    <tr *ngFor="let trial of clinicalTrials">
                        <td>{{trial.name}}</td>
                        <td>{{trial.cancerType}}</td>
                        <td>{{trial.numberPatients}}</td>
                        <td>{{trial.numberDeaths}}</td>
                        <td>{{trial.fatalityRate}}%</td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
    </div>
    <div *ngIf="tissue.files == 2">
        <p>There are no entries regarding patient statistics for this tissue type.</p>
    </div>
    `
})
export class CovidPatientInformationComponent implements OnInit{
    @Input() tissue: Tissue;

    patientData = [];
    clinicalTrials: CancerClinicalTrial[] = [];
    totalPapers: number = 0;

    totalCancerCovid = 0;
    totalDeaths = 0;
    percentDeaths = 0.00;

    ngOnInit() {
        this.patientData = JSON.parse(localStorage.getItem("covidData"));
        this.analyzeStudies();
    }

    analyzeStudies() {
        // this.totalPapers = this.patientData.length;
        for (var i = 1; i < this.patientData.length; i++) {
            var study = this.patientData[i];
            if (study["Tissue type"] == this.tissue.name_english) {
                this.totalPapers += 1;
                var title = study["Title"];
                var cancerType = study["Cancer type"];
                var cancerCovid = study["Number of cancer patients with COVID-19"];
                var deaths = study["Number of patient deaths"];
                var fatalityRate = study["Case fatality rate (%)"]
                if (cancerCovid != 0 && deaths != "Not applicable") {
                    this.totalCancerCovid += cancerCovid;
                    this.totalDeaths += deaths;


                    this.clinicalTrials.push(new CancerClinicalTrial(title, cancerType, cancerCovid, deaths, Math.round(fatalityRate*100)));
                }
            }
        }

        console.log(this.totalCancerCovid);
        console.log(this.totalDeaths);
        this.percentDeaths = Math.round(this.totalDeaths / this.totalCancerCovid * 100);
        console.log(this.percentDeaths);

    }

}
