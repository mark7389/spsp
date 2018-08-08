import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './modules/login-module/components/login-form/login-form.component';
import { LoginModule } from './modules/login-module/login.module';
import { MyMaterialModule } from './modules/material-module/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
