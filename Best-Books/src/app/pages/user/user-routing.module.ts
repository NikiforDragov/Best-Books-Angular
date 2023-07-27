import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestActivate } from 'src/app/shared/guards/guest.activate';
import { UserActivate } from 'src/app/shared/guards/user.activate';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', canActivate: [GuestActivate], component: LoginComponent},
  {path:'register', canActivate: [GuestActivate], component: RegisterComponent},
  {path:'profile', canActivate: [UserActivate], component: ProfileComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
