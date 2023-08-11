import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivate } from 'src/app/shared/guards/user.activate';

import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: 'details/:bookId',
    canActivate: [UserActivate],
    component: BookDetailsComponent,
  },
  {
    path: 'edit/:bookId',
    canActivate: [UserActivate],
    component: EditBookComponent,
  },
  {
    path: 'add',
    canActivate: [UserActivate],
    component: AddBookComponent,
  },
  {
    path: 'search',
    canActivate: [UserActivate],
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
