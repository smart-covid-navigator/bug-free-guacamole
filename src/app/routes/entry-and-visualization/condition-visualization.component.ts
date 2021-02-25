import { Component, OnInit } from "@angular/core";
import { CSVReader } from "./genomic-data-providers/csv-reader.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrialModalComponent } from "./clinical-trial-modal.component"
import { ClinicalTrial, Condition } from "../entry-and-visualization/condition-info";
import { VariantEntryAndVisualizationComponent } from "./variant-entry-and-visualization.component"
import { Patient, PatientCondition} from "./patient"
import { VAService } from "../login-services/va.service"
import { environment } from 'environments/environment';

@Component({
    selector: "condition-visualization",
    templateUrl: './condition-visualization.html',
    styleUrls: ['./condition-visualization.css']
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

        for (var i = 0; i < this.conditionList.length; i++) {
            if (environment.language == "english"){
                this.conditionList[i].name = this.conditionList[i].name_english;
            }
            if (environment.language == "spanish"){
                this.conditionList[i].name = this.conditionList[i].name_spanish;
            }
            if (environment.language == "chinese"){
                this.conditionList[i].name = this.conditionList[i].name_chinese;
            }
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
