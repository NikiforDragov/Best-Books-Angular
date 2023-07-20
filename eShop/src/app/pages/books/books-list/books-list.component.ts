import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  booksList: IBook[] = [];

  isLoading: boolean = false;

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.loadAllBooks()
  }

  loadAllBooks(): void {
    this.isLoading = true;
    this.bookService.getAllBooks().subscribe(
      (response) => {
        console.log(Object.values(response));
        this.booksList = Object.values(response)
      },
      (error) => {
        console.error('Request failed!');
        this.isLoading = false;
      }
    );
  }
}
