import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
   
    imports: [
        AngularFireModule.initializeApp(environment.firebase,'spsp-dev'),
        AngularFireAuthModule,
        HttpClientModule
       
    ],
    providers: [AuthService],
    bootstrap: [LoginFormComponent]
})

export class LoginModule {}