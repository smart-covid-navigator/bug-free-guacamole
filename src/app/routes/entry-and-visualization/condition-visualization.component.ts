import { Component, OnInit } from "@angular/core";
import { CSVReader } from "./genomic-data-providers/csv-reader.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrialModalComponent } from "./clinical-trial-modal.component"
import { ClinicalTrial, Condition } from "../entry-and-visualization/condition-info";
import { VariantEntryAndVisualizationComponent } from "./variant-entry-and-visualization.component"
import { Patient, PatientCondition} from "./patient"
import { VAService } from "../login-services/va.service"

@Component({
    selector: "condition-visualization",
    template: `
        <div class="textBlock">
            <h3>Conditions</h3>
            <span *ngFor="let condition of conditionList">
                <button (click)="showModal(condition)" id="normal" [ngStyle]="{'background-color':condition.color === 1 ? '#ff9100' : '#dedede'}">{{condition.name}}</button>
            </span>
        </div>

        <div class="textBlock">
            <h3>Legend</h3>
            <p>
                These are conditions that have been shown to possibly be linked to increased severity and mortality rates for COVID-19 patients.
                <br>
                Click each condition to see information on recent studies conducted involving each of these risk factors.
                <br>
                If you are logged into the VA server, some conditions might highlight as <span style="color: #ff9100">orange</span> above. This signifies that the condition (or some form of it) is present in your profile. 
            </p>
        </div>
    `,
    styles: [`
        #normal {
            margin: 12px;
            font-size: 20px;
        }
        .textBlock {
            padding: 15px;
            margin-top: 2%;
            margin-left: 4%;
            margin-right: 4%;
            background-color: white;
        }
        p {
            font-size: 20px;
        }
    `]
})
export class ConditionVisualizationComponent implements OnInit {
    constructor(
        private csvReader: CSVReader,
        private modalService: NgbModal,
        private vaService: VAService
        ) {}
    
    conditionList: Condition[] = [];
    patientConditions: string[] = [];
    loggedIn: boolean = false;
    
    ngOnInit() {
        this.conditionList = this.csvReader.conditionArray;
        
        if (localStorage.getItem("vaUser") == "in") {
            this.loggedIn = true;
            var currentUser = this.vaService.getLocalStorageToken();
            this.vaService.accessToken = currentUser['access_token'];
            this.getVA(currentUser['patient']);
        }
    }

    getVA(patientId: string) {
        this.vaService.conditionInfo(patientId).subscribe(patient => {
            var age = Number(localStorage.getItem("age"));
            console.log(localStorage.getItem("age"));
            // if (age != null && age > 60) {
                this.conditionList[0].color = 1;
            // }
            var stringified = JSON.stringify(patient);
            var entry = JSON.parse(stringified).entry;
            var conditionsArray: PatientCondition[] = [];
            var codesInArray: string[] = [];
            for (var i = 0; i < entry.length; i++) {
                var thisIndex = JSON.stringify(entry[i]);
                var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                var codeOutside = JSON.stringify(JSON.parse(resource).code);
                var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                var code = JSON.parse(coding).code;
                var display = JSON.parse(coding).display;
                if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                    var condition = new PatientCondition(code, display, "VA");
                    conditionsArray.push(condition);
                    codesInArray.push(code);
                    for (var j = 0; j < this.conditionList.length; j++) {
                        var conditionHere = this.conditionList[j];
                        var codesForCondition = conditionHere.codes;
                        if (codesForCondition.includes(code)) {
                            this.conditionList[j].color = 1;
                        }
                    }
                } 
                
            }
            
          });
    }

    getCMS() {

    }

    showModal(condition: string) {
        
        const modalRef = this.modalService.open(ClinicalTrialModalComponent, {size: "lg"});
        modalRef.componentInstance.conditionName = condition;
    }

}