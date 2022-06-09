import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HavensComponent } from './pages/havens/havens.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterHavenComponent } from './pages/register-haven/register-haven.component';
import { UpdateHavenComponent } from './pages/update-haven/update-haven.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-haven', component: RegisterHavenComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'havens', component: HavensComponent},
  {path: 'update-haven', component: UpdateHavenComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
