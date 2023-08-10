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

  getAllBooksByOwnerId(ownerId: string): Observable<IBook> {
    return this.http.get<IBook>(`${FIREBASE_URL}/books.json?print=pretty`, {
      params: new HttpParams()
        .set('orderBy', '"ownerId"')
        .set('equalTo', `"${ownerId}"`),
    });
  }

  getBookById(bookId: string): Observable<IBook> {
    return this.http.get<IBook>(`${FIREBASE_URL}/books.json?print=pretty`, {
      params: new HttpParams()
        .set('orderBy', '"_id"')
        .set('equalTo', `"${bookId}"`),
    });
  }

  createBook(bookData: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${FIREBASE_URL}/books.json`, bookData);
  }

  editBook(bookId: string, bookData: IBook): Observable<IBook> {
    return this.http.patch<IBook>(
      `${FIREBASE_URL}/books/${bookId}.json`,
      bookData
    );
  }

  deleteBook(bookId: string) {
    return this.http.delete<IBook>(`${FIREBASE_URL}/books/${bookId}.json`);
  }
}
