import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  bookData: IBook = {
    title: '',
    author: '',
    genre: '',
    imageUrl: '',
    description: '',
    pages: 0,
    publicationDate: new Date(),
  };
  bookIdInDb!: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onEditBookHandler(form: NgForm) {
    const bookId: string = this.route.snapshot.params['bookId'];
    this.bookService
      .editBook(this.bookIdInDb, form.value)
      .subscribe((response) => {
        this.router.navigate([`/books/details/${bookId}`]);
      });
  }

  ngOnInit(): void {
    const bookId: string = this.route.snapshot.params['bookId'];

    this.bookService.getBookById(bookId).subscribe(
      (data) => {
        this.bookData = Object.values(data)[0];
        this.bookIdInDb = Object.keys(data)[0];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
