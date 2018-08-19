import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  returnUrl: string;
  user = null;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService,
              ) {}
  
  loginWithGoogle() {
    this.auth.loginWithGoogle().then(
      res => {
        console.log("Good!")
        this.router.navigate(['/home'])
      },
      rej => {
        console.log("Bad!")
      }
    )
  }
  
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }

  ngOnInit() {

      this.auth.logout();

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   

  }
  

}
