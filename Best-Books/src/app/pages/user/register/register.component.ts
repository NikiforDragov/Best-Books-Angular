import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  errorMsg!: string;

  onRegister(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email,password } = form.value;

    this.userService.register(email,password)
  }
}
