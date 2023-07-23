import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FIREBASE_URL } from '../shared/constants';
import { IBook } from '../shared/interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(FIREBASE_URL + '/books.json');
  }

  getBookById(bookId: string) {
    return this.http.get<IBook>(`${FIREBASE_URL}/books.json?print=pretty`, {
      params: new HttpParams()
        .set('orderBy', '"_id"')
        .set('equalTo', `"${bookId}"`),
    });
  }

  createBook(bookData: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${FIREBASE_URL}/books.json`, bookData);
  }
}
