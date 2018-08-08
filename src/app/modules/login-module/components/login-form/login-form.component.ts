import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = null;
  @Output ()
  change: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor(private auth: AuthService) { }
  
  loginWithGoogle() {
    this.auth.loginWithGoogle().then(user=>{
      this.change.emit({email:user.user.email})
    });
    
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }
  ngOnInit() {
    this.auth.getAuthState().subscribe(user=>{this.user = user});
    
  }

}
