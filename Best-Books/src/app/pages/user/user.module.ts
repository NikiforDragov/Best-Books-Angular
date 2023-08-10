import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    RouterModule,
  ]
})
export class UserModule { }
