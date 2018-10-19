import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './modules/login-module/components/login-form/login-form.component';
import { LoginModule } from './modules/login-module/login.module';
import { MyMaterialModule } from './modules/material-module/material.module';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './modules/menu-module/components/menu/menu.component';
import { MenuModule } from './modules/menu-module/menu.module';
import { HomeClassComponent } from './modules/home-class-module/components/home-class/home-class.component';
import { AuthGaurdService } from './shared/auth-gaurd.service';
import { ClasslistComponent } from './modules/class-module/components/classlist/classlist.component';
import { ClassmainComponent } from './modules/class-module/components/classmain/classmain.component';
import { AttendeeProfileComponent } from './modules/profiles-module/components/attendee-profile/attendee-profile.component';
import { UserProfileComponent } from './modules/profiles-module/components/user-profile/user-profile.component';
import { AttendeeformComponent } from './modules/forms-module/components/attendeeform/attendeeform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardianformComponent } from './modules/forms-module/components/guardianform/guardianform.component';
import { NoteformComponent } from './modules/forms-module/components/noteform/noteform.component';
import { ImageuploadComponent } from './modules/profiles-module/components/imageupload/imageupload.component';
import { MultipleguardianComponent } from './modules/forms-module/components/multipleguardian/multipleguardian.component';
import { CoorHomeComponent } from './modules/coordinator-home/components/coor-home/coor-home.component';
import { ClassAssignComponent } from './modules/forms-module/components/class-assign/class-assign.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginFormComponent},
  // {path: 'attendance/:id', component: ClasslistComponent, canActivate:[AuthGaurdService]},
  {path: 'class/:id', component: ClassmainComponent, canActivate:[AuthGaurdService]},
  {path: 'attendee/:class_id/:id', component: AttendeeProfileComponent, canActivate:[AuthGaurdService]},
  {path:'servant', component: HomeComponent, canActivate:[AuthGaurdService]},
  {path:'classes', component: HomeComponent, canActivate:[AuthGaurdService]},
  {path:'coordinator', component: CoorHomeComponent, canActivate:[AuthGaurdService]},
  {path:"**", redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    MenuComponent,
    HomeClassComponent,
    ClasslistComponent,
    ClassmainComponent,
    AttendeeProfileComponent,
    UserProfileComponent,
    AttendeeformComponent,
    GuardianformComponent,
    NoteformComponent,
    ImageuploadComponent,
    MultipleguardianComponent,
    CoorHomeComponent,
    ClassAssignComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    LoginModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  entryComponents:[
    AttendeeformComponent,GuardianformComponent,NoteformComponent,ImageuploadComponent,ClassAssignComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
