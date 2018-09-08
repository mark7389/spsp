import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null ;
  private isUser: Observable<Object>
  constructor(public afAuth: AngularFireAuth, public http: HttpClient, public router:Router) {
  
   }
    
    
   loginWithGoogle() {

    return new Promise((resolve, reject)=> {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        res => {
          let email = res['user']['email']+"godhelp";
          
          this.http.post('/api/authenticate/login',email).subscribe(
            data => {
              console.log("Data",data)
              var token = data['token']
              var state = data['auth']
              this.afAuth.auth.signOut().then(
                () => {
                  if(token && state){ 
                    localStorage.setItem('user',token);
                    resolve(true)
                  }
                  reject(false)
                })
            },
            error => {
              reject(false)
            }
          )
          console.log("RES",res)
        }
    )
    })


  }
  loginWithFacebook () {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
  logout (){
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
