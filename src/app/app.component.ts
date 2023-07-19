import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'jdng-fe-gc-rickymortyapp-07-23';

  usuario: any = null;
  user: boolean = false;

  constructor(private UserService: UserService) {}
  //Cambia navbar si hay cuenta logeada
  ngOnInit() {
    this.usuario = this.UserService.getAuth();
    if (this.usuario.currentUser!=null) {
      this.user=true;
    }
  }
  //Comprueba si hay cuenta logeada
  esUsuario() {  
    if (this.usuario.currentUser!=null) {
      this.user=true;
    }else{
      this.user=false;
    }
    return this.user;    
  }
}
