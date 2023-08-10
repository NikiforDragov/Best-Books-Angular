import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: any;

  constructor(
    private fbAuth: AngularFireAuth,
    private router: Router
  ) {
    this.fbAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }
  
  get userId(): string {
    const user = JSON.parse(localStorage.getItem('user')!);
    const userId = user.uid
    return userId
  }

  async register(email: string, password: string) {
    return this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async login(email: string, password: string) {
    await this.fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/']);
      });
  }

  async logout() {
    return this.fbAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/user/login']);
    });
  }
}
