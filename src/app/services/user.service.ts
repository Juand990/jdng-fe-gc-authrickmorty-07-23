import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private auth: Auth) {}
  //Registro de cuenta nueva para poder usar la App
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  //Login de la cuenta para usar la App
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  //Login de la cuenta usando cuenta de Google para la App
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  //Cerrar sesion de la cuenta
  logout() {
    return signOut(this.auth);
  }
  //Comprobar si existe Auth, para diferente navbar
  getAuth(){
    return this.auth;
  }
}
