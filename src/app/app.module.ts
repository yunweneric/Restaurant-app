import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestoAddComponent } from './resto-add/resto-add.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestoAddComponent,
    RestoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
