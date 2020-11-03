import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestoAddComponent } from './resto-add/resto-add.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';
import { RestoListComponent } from './resto-list/resto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestoAddComponent,
    RestoUpdateComponent,
    RestoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
