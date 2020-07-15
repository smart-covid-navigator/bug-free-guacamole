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
        <span *ngFor="let condition of conditionList">
            <button (click)="showModal(condition)" id="normal" [ngStyle]="{'background-color':condition.color === 1 ? '#05e32a' : '#dedede'}">{{condition.name}}</button>
        </span>
    `,
    styles: [`
        #normal {
            margin: 12px;
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
    
    ngOnInit() {
        this.conditionList = this.csvReader.conditionArray;
        
        if (localStorage.getItem("vaUser") == "in") {
            console.log("localStorage condition visualization")
            var currentUser = this.vaService.getLocalStorageToken();
            this.vaService.accessToken = currentUser['access_token'];
            this.getVA(currentUser['patient']);
        }
    }

    getVA(patientId: string) {
        this.vaService.conditionInfo(patientId).subscribe(patient => {
            
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
                console.log("is this working please");
                if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                    var condition = new PatientCondition(code, display, "VA");
                    conditionsArray.push(condition);
                    codesInArray.push(code);
                    console.log(condition);
                    for (var j = 0; j < this.conditionList.length; j++) {
                        var conditionHere = this.conditionList[j];
                        var codesForCondition = conditionHere.codes;
                        if (codesForCondition.includes(code)) {
                            this.conditionList[j].color = 1;
                            console.log(this.conditionList[j]);
                            console.log(code);
                        }
                    }
                } 
                console.log(code);
                
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