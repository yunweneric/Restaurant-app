import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { RestoAddComponent } from './resto-add/resto-add.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"", redirectTo :"/home", pathMatch: "full"},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"list", component:RestoListComponent},
  {path:"update/:{{item.id}}", component:RestoUpdateComponent},
  {path:"home", component:HomeComponent},
  {path:"add", component:RestoAddComponent},
  {path:"sidebar", component:SidebarComponent},
  {path:"forgotpwd", component:ForgotpwdComponent},
  {path:"**", component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
