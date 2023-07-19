import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router,private app :AppComponent) {} 
  //Cerrar sesion de la cuenta
  logOut() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
      this.app.esUsuario(); //cambiar el navbar segun si existe el Auth
  }
}
