import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../shared/environments/environment';
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
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
    return this.http.post<IUser>(url, {
      email,
      username,
      password,
      returnSecureToken: true,
    });
  }

  login(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`;
    return this.http.post(url, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
