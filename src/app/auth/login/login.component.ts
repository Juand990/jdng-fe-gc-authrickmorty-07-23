import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;
  
  //Contructor del UserService, Router y creacion formLogin
  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  //Login con cuenta no de google
  login() {
    this.userService
      .login(this.formLogin.value)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }
  //Login usando cuenta de google
  logGoogle() {
    this.userService
      .loginWithGoogle()
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }
}
