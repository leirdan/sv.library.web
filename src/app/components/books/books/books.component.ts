import { Component, OnInit } from "@angular/core";
import { CardBookComponent, IBook } from "../card-book/card-book.component";

@Component({
	selector: "app-books",
	templateUrl: "./books.component.html",
	styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
	public books: Array<IBook> = [
		{
			review: "nota5",
			title: "Senhor dos Anéis",
			publisher: "Martins Fontes",
			year: 2009,
			ISBN: "9788533613379",
			author: "J.R.R Tolkien",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
