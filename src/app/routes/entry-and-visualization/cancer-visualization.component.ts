import { Component, OnInit } from "@angular/core";
import { XLSXReader } from "./genomic-data-providers/xlsx-reader.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrialModalComponent } from "./clinical-trial-modal.component"
import { CancerTrialsModalComponent } from "./cancer-trials-modal.component"
import { Tissue } from "./condition-info"

@Component({
    selector: "cancer-visualization",
    template: `
        <div class="textBlock">
            <h3>Cancer </h3>
            <span *ngFor="let tissue of tissueList">
                <button (click)="showModal(tissue)" id="normal" >{{tissue.name}}</button>
            </span>
        </div>

        <div class="textBlock">
            <h3>Legend</h3>
            <p>
                Listed above are cancer tissue types. Select one to see more information.
                <br>
                The first tab shows outcome statistics for patients with a certain type of cancer and COVID-19. Specifically, it shows the fatality rate for these individuals.
                <br>
                The second tab shows clinical studies testing the effectiveness of certain drugs on cancer outcomes. These are drugs that are currently being tested for their effectiveness in treating COVID-19, but could also be useful for cancer treatment.
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
    }

    
    showModal(tissue: Tissue) {
        
        const modalRef = this.modalService.open(CancerTrialsModalComponent, {size: "lg"});
        modalRef.componentInstance.tissue = tissue;
    }

}