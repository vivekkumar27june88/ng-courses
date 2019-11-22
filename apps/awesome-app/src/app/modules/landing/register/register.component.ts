import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ng-courses-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public registerFormSubmitHandler(registerForm: NgForm): void {
    this.authService
      .register({
        firstName: registerForm.value.firstName,
        lastName: registerForm.value.lastName,
        email: registerForm.value.email,
        password: registerForm.value.password,
        repeatPassword: registerForm.value.repeatPassword
      })
      .subscribe(
        registerSucRes => {
          this.router.navigate(['/landing', 'login']);
        },
        registerErrRes => {
          console.error({ registerErrRes });
        }
      );
  }
}
