import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  booksList: IBook[] = [];
  ownerId: string = this.userService.userId;

  isLoading:boolean = false;

  constructor(private userService: UserService, private bookService: BookService){}

  ngOnInit(): void {
    this.loadBooks()    
  }

  loadBooks(): void {
    this.isLoading = true;

    this.bookService.getAllBooksByOwnerId(this.ownerId).subscribe(
      (response) => {
        this.booksList = Object.values(response);        
      },
      (error) => {
        window.alert(error.error.errorMessage)
      }
    )
  }
}
