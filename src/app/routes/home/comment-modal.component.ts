/**
 * A part of the result visualization component, which displays the drugs that will be effective against genes
 * or variants.
 */

 import { Component, Input } from "@angular/core";
 import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
 
 @Component({
   selector: "comment-modal-modal",
   template: `
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0_aiT6mcBhg-Xji5I37gNyFDbldz-CxSxjt0VN_UTbGwGzA/viewform?embedded=true" width="800" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
   `,
   styles: [`
   `]
 })
 export class CommentModalComponent {
   constructor (public activeModal: NgbActiveModal) {}

 }
 