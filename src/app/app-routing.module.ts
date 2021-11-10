import { invalid } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './layouts/home/home.component';
import { InvalidUrlExceptionComponent } from './layouts/invalid-url-exception/invalid-url-exception.component';
import { UsersComponent } from './layouts/users/users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'users', component: UsersComponent},
  {path:'**', component: InvalidUrlExceptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
