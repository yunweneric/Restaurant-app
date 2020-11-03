import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';

const routes: Routes = [
  {path:"/", component:AppComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"list", component:RestoListComponent},
  {path:"update", component:RestoUpdateComponent},
  {path:"home", component:AppComponent},
  {path:"**", component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
