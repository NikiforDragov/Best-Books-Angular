import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FIREBASE_URL } from '../shared/environments/constants';
import { Book } from '../shared/types/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  createBook(bookData: Book) {
    this.http
      .post(`${FIREBASE_URL}/books.json`, bookData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
