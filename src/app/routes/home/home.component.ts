/**
 * The landing page for the app, which tells the user what the app does, what the purpose of the appis, and why
 */
import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CommentModalComponent} from "./comment-modal.component"

@Component({
  selector: "home",
  template: `
    <div class="infoCard">
      <div class="cardContent">
        <div>
          <h1 class="thick">SMART COVID Navigator</h1>
          <hr>
          <p class="regular">
          The SMART COVID Navigator connects patient information from multiple EHR servers to an AI- powered knowledge map of COVID-19 research. This will allow clinicians to access the latest data-driven research based on a particular patient’s risk factors. The Navigator builds on the framework developed by the SMART Cancer Navigator, which offered clinical decision support by connecting patient EHR information to cancerous gene-variants. The Navigator is a further step in creating FHIR-protocol based tools to support personalized medicine.
          The web-based app was built by researchers at the Biomedical Cybernetics Laboratory in Harvard Medical School. It was created using an Angular and bootstrap front-end framework.</p>
          <p class="regular">
              If you would like to submit a comment, <a href="javascript:void(0);" (click)="showCommentModal()">click here</a>.
          </p>
        </div>
        <!--
        <div>
          <h1 class="thick">SMART COVID Navigator's Approach</h1>
          <hr>
          <p class="regular">The SMART Cancer Navigator app securely links patient-specific data from EHRs and genomics laboratories to multiple knowledge bases for interpretation and validation. Through the built-in feedback functionality, meaningful responses regarding the usability and efficacy of the app are conveyed to the designers.
          </p>
          
        </div>
        -->
        
      </div>
      <div class="cardImage" style="min-width: 300px;">
        <div>
          <img src="/assets/landing-page/not-logged-in.png">
          <img src="/assets/landing-page/logged-in.png">
          <img src="/assets/landing-page/modal-display.png">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .infoCard {
      margin: 10px 5px;
      overflow: hidden;
    }

    .cardContent {
      float: left;
      width: 70%;
    }

    .cardImage {
      float: left;
      width: 30%;
      min-width: 150px;
      max-width: 100%;
    }

    .cardImage>div, .cardContent>div {
      float: left;
      background-color: white;
      box-shadow: 1px 3px #d5d5d5;
      border: 1px solid #d1d1d1;
      padding: 15px;
      margin: 7px 3px;
    }
    
    .cardImage img {
      width: 100%;
      height: auto;
    }
  `],
  animations: [
  ]
})
export class LandingPageComponent {
  constructor (private router: Router,
    private modalService: NgbModal) {}

  navigateToVisualization() {
    this.router.navigate(["/app"]);
  }
  showCommentModal() {
    const modalRef = this.modalService.open(CommentModalComponent, {size: "lg"});
  }
}
