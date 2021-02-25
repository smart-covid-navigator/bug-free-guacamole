import { Component } from "@angular/core";
import { environment } from 'environments/environment';

@Component({
    selector: "team",
    templateUrl: './team.html',
    styleUrls: ['./team.css']
})
export class TeamComponent {
    contributors: string[] = ["Gil Alterovitz, PhD", "Jeremy Warner, MD, MS", "Varun Suraj", "Makiah Bennett", "Ishaan Prasad", "Monica Arniella", "Alicia Beeghly-Fadiel, PhD"];

    emailDisplay: string = "(Click to reveal)";
    updateEmail(): void
    {
        this.emailDisplay = "ga@alum.mit.edu";
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
            this.emailDisplay = "(Click to reveal)";
        }

        if (environment.language == "spanish") {
            spanish.style.display = "block";
            this.emailDisplay = "(Haga clic para revelar)";
        }

        if (environment.language == "chinese") {
            chinese.style.display = "block";
            this.emailDisplay = "(单击以显示)";
        }
    }
}
