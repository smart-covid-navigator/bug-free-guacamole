/**
* The landing page for the app, which tells the user what the app does, what the purpose of the appis, and why
*/
import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { Router } from "@angular/router";
import { environment } from 'environments/environment';

@Component({
    selector: "home",
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class LandingPageComponent {
    constructor (private router: Router) {
    }

    navigateToVisualization() {
        this.router.navigate(["/app"]);
    }

    ngOnInit() {
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
    }
}
