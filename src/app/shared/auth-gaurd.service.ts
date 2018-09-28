import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(route.url.toString().indexOf('coordinator') > -1){
          if(localStorage.getItem('role') === "coordinator"){
             return true;
          }
    }else{
      if(localStorage.getItem('user')){
        return true;
      }
    }
    
   
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
