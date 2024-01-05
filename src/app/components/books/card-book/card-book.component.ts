import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-card-book",
	templateUrl: "./card-book.component.html",
	styleUrls: ["./card-book.component.css"],
})
export class CardBookComponent implements OnInit {
	@Input() book!: IBook;

	constructor() {}

	ngOnInit(): void {}
}

export interface IBook {
	title: string;
	review: string;
	publisher: string;
	year: number;
	ISBN: string;
	author: string;
}
