import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BooksListComponent } from './pages/books/books-list/books-list.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AddBookComponent } from './pages/books/add-book/add-book.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'books',
    component: BooksListComponent,
  },
  {
    path: 'books/details/:bookId',
    component: BookDetailsComponent,
  },
  {
    path: 'add',
    component: AddBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
