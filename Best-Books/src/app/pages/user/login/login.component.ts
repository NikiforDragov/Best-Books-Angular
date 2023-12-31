import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  constructor(private userService: UserService) {}

  onLoginHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password)
  }
}
