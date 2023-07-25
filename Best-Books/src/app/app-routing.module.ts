import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BooksListComponent } from './pages/books/books-list/books-list.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AddBookComponent } from './pages/books/add-book/add-book.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { EditBookComponent } from './pages/books/edit-book/edit-book.component';
import { UserActivate } from './shared/guards/user.activate';
import { GuestActivate } from './shared/guards/guest.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestActivate],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestActivate],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserActivate],
  },
  {
    path: 'books',
    component: BooksListComponent,
  },
  {
    path: 'books/details/:bookId',
    component: BookDetailsComponent,
    canActivate: [UserActivate],
  },
  {
    path: 'add',
    component: AddBookComponent,
    canActivate: [UserActivate],
  },
  {
    path: 'books/edit/:bookId',
    component: EditBookComponent,
    canActivate: [UserActivate],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
