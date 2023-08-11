import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';

import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    BooksListComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule, BooksRoutingModule],
})
export class BooksModule {}
