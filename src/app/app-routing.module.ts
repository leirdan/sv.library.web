import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './components/books/create-book/create-book.component';
import { BooksComponent } from './components/books/books/books.component';

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "createBook", component: CreateBookComponent },
  { path: "books", component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
