import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './user/profile/profile.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooksListComponent,
    AddBookComponent,
    ProfileComponent,
    BookDetailsComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule, RouterModule , FormsModule, HttpClientModule
  ]
})
export class PagesModule { }
