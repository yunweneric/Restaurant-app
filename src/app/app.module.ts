import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestoAddComponent } from './resto-add/resto-add.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestoAddComponent,
    RestoUpdateComponent,
    RestoListComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    ForgotpwdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
