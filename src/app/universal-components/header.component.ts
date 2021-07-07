import {Component, Output, EventEmitter} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import { environment } from '../../environments/environment';


@Component({
  selector: "header",
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class HeaderComponent {
  constructor (private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.urlAfterRedirects;
      }
    });
  }

  currentRoute: string = "/app";

  leaveChange() {
      environment.language = document.getElementById("lang-switch").nodeValue;
  }

  routeTo(routeLoc: string) {
    this.router.navigate([routeLoc]);
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
