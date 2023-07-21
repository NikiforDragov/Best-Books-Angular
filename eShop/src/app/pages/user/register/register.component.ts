import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  onRegister(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, username, password } = form.value;

    this.userService.register(email, username, password).subscribe(
      (response) => {
        console.log(response);
        form.reset();
        this.router.navigate(['login']);
      },
      // Todo error handling
      (error) => console.log(error)
    );
  }
}
