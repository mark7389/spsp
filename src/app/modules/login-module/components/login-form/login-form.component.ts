import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = null;
  constructor(private auth: AuthService) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }
  ngOnInit() {
    this.auth.getAuthState().subscribe(user=>this.user = user);
  }

}
