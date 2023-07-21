import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FIREBASE_URL } from '../shared/environments/constants';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(
    email: string,
    username: string,
    password: string
  ): Observable<IUser> {
    const url = `${FIREBASE_URL}/users.json`;
    return this.http.post<IUser>(url, { email, username, password });
  }
}
