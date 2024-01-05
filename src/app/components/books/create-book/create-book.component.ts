import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book = {
    title: "",
    author: "",
    year: 0,
    publisher: ""
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  addBook(): void {
      alert("livro criado!")
  }

}
