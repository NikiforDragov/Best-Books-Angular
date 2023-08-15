import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  booksList: IBook[] = [];
  isLoading: boolean = false;

  constructor(private bookService: BookService) {}

  onSearchHandler(form: NgForm) {
    this.booksList = [];

    const { searchTitle } = form.value;

    this.bookService.getAllBooks().subscribe(
      (response) => {
        Object.values(response).map((x) => {
          if (x.title.toLowerCase().includes(searchTitle.toLowerCase())) {
            this.booksList.push(x);
          }
        });
      },
      (error) => {
        window.alert(error.error.errorMessage);
      }
    );
  }
}
