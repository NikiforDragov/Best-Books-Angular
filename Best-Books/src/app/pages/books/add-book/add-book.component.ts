import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  constructor(private bookService: BookService, private router: Router) {}


  onAddBookHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { ...bookData } = form.value;
    bookData._id = uuidv4();

    this.bookService.createBook(bookData).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (err) => window.alert(err.error.error.message),
    });
  }
}
