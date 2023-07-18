import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BooksListComponent]
})
export class BooksModule { }
