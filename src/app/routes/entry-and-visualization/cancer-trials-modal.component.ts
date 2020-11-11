import { Component, Input, forwardRef  } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ClinicalTrial, Condition, Tissue } from "./condition-info";
import { CSVReader } from "./genomic-data-providers/csv-reader.service"
import { XLSXReader } from "./genomic-data-providers/xlsx-reader.service"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const VISUALIZATION_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CancerTrialsModalComponent),
    multi: true
  };

@Component({
    selector: "clinical-trial-modal",
    template: `
    <div class="modal-header">
        <h4 class="modal-title">{{tissue.name}}</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <ngb-tabset>
            <ngb-tab title="Patient Data">
                <ng-template ngbTabContent>
                    <covid-patient-information [tissue]="tissue"></covid-patient-information>
                </ng-template>
            </ngb-tab>

            <ngb-tab title="COVID/Cancer Drugs">
                <ng-template ngbTabContent>
                    <cancer-drugs-information [tissue]="tissue"></cancer-drugs-information>
                </ng-template>
            </ngb-tab>
        </ngb-tabset>
    </div>
    `,
    providers: [VISUALIZATION_CONTROL_VALUE_ACCESSOR]
})
export class CancerTrialsModalComponent {
    constructor (
        public activeModal: NgbActiveModal,
        public xlsxReader: XLSXReader) {}

    @Input() tissue: Tissue;
    

}