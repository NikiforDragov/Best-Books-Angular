import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  ownerId: string = this.userService.userId;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) {}

  onAddBookHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { ...bookData } = form.value;
    bookData._id = uuidv4();
    bookData.ownerId = this.ownerId;

    this.bookService.createBook(bookData).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (error) => window.alert(error.error.errorMessage),
    });
  }
}
