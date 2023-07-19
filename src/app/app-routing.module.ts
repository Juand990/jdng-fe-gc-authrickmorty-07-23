import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './home/about/about.component';
import { CharactersComponent } from './home/characters/characters.component';
import { DetalleComponent } from './home/characters/detalle/detalle.component';
import { HomeComponent } from './home/home/home.component';
import { FormanadirComponent } from './formanadir/formanadir.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  { path: 'detalle', component: DetalleComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},  
  { path: 'anadirnuevo', component: FormanadirComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  { path: '', pathMatch:'full',redirectTo:'/home'},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
