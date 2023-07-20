import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private bookService: BookService){}

  onAddBookHandler(formData: NgForm) {
    const bookData = formData.value;

    this.bookService.createBook(bookData);
  }
}
