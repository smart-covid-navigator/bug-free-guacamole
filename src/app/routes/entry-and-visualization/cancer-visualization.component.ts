import { Component, OnInit } from "@angular/core";
import { XLSXReader } from "./genomic-data-providers/xlsx-reader.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrialModalComponent } from "./clinical-trial-modal.component"
import { CancerTrialsModalComponent } from "./cancer-trials-modal.component"
import { CancerSummaryModalComponent } from "./covid-cancer-tabs/cancer-summary-modal.component"
import { Tissue } from "./condition-info"
import { environment } from '../../../environments/environment';

@Component({
    selector: "cancer-visualization",
    templateUrl: './cancer-visualization.html',
    styleUrls: ['./cancer-visualization.css']
})
export class CancerVisualizationComponent implements OnInit {
    constructor(
        private xlsxReader: XLSXReader,
        private modalService: NgbModal
    ) {}

    tissueList: Tissue[] = [];
    patientConditions: string[] = [];
    loggedIn: boolean = false;

    ngOnInit() {
        this.tissueList = this.xlsxReader.tissueArray;

        this.xlsxReader.readPatientXLSX("hello").subscribe(data => {
            // just to get the localStorage into the system
        })
        this.xlsxReader.readDrugsXLSX("hello").subscribe(data => {
            // just to get the localStorage into the system
        })

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
            english.style.display = "inline-block";
        }

        if (environment.language == "spanish") {
            spanish.style.display = "inline-block";
        }

        if (environment.language == "chinese") {
            chinese.style.display = "inline-block";
        }

        for (var i = 0; i < this.tissueList.length; i++) {
            if (environment.language == "english"){
                this.tissueList[i].name = this.tissueList[i].name_english;
            }
            if (environment.language == "spanish"){
                this.tissueList[i].name = this.tissueList[i].name_spanish;
            }
            if (environment.language == "chinese"){
                this.tissueList[i].name = this.tissueList[i].name_chinese;
            }
        }
    }

    showModal(tissue: Tissue) {

        const modalRef = this.modalService.open(CancerTrialsModalComponent, {size: "lg"});
        modalRef.componentInstance.tissue = tissue;
    }

    summaryModal() {
        const modalRef = this.modalService.open(CancerSummaryModalComponent, {size: "lg"});
    }

}
