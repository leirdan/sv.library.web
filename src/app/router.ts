import { Routes } from "@angular/router";
import { BooksComponent } from "./components/books/books/books.component";
import { CreateBookComponent } from "./components/books/create-book/create-book.component";

export const routes: Routes = [
	{ path: "", redirectTo: "Livros", pathMatch: "full" },
	{ path: "AdicionarLivro", component: CreateBookComponent },
	{ path: "Livros", component: BooksComponent },
];
