import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './auth.service';




@NgModule({
   
    imports: [
        AngularFireModule.initializeApp(environment.firebase,'spsp-dev'),
        AngularFireAuthModule,
        
       
    ],
    providers: [AuthService],
    bootstrap: [LoginFormComponent]
})

export class LoginModule {}