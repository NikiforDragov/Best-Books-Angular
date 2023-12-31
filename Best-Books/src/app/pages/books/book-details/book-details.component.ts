import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookData!: IBook;
  bookId!: string;
  bookIdInDb!: string;
  userId: string = this.userService.userId;
  isOwner: boolean = false;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
  
    this.bookService.getBookById(this.bookId).subscribe((data) => {
      this.bookData = Object.values(data)[0];
      this.bookIdInDb = Object.keys(data)[0];

      if (this.bookData.ownerId === this.userId) {
        this.isOwner = true;
      }
    });
    
  }

  onDeleteHandler() {
    this.bookService.deleteBook(this.bookIdInDb).subscribe(
      (response) => {
        this.router.navigate(['/books']);
      },
      (error) => {
        window.alert(error.error.errorMessage)
      }
    );
  }
}
