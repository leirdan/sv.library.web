import { Component, Input, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
	pageTitle!: string;

	constructor(private router: Router) {
		this.router.events.subscribe((e) => {
			if (e instanceof NavigationEnd) {
				let aux: string = e.urlAfterRedirects.replace("/", "").replace(/([A-Z])/g, " $1");

				this.pageTitle = aux;
			}
		});
	}

	ngOnInit(): void {}
}
