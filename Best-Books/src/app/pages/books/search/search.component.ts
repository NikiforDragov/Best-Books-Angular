import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  booksList: IBook[] = [];
  isLoading:boolean = false;

  constructor(private bookService: BookService){}

  onSearchHandler(form:NgForm) {
    const {searchTitle} = form.value;
    
    this.bookService.getAllBooksByTitle(searchTitle).subscribe(
      (response) => {
        this.booksList = Object.values(response);
        console.log(response);
        
      }
    )
  }
}
