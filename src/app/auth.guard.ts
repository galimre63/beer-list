import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private route:Router)
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let username:string = localStorage.getItem('userName');
      console.log('can activate',username);
      if(username && username.length>0){
        this.route.navigate(['main']);
        return false;
      }else{
        this.route.navigate(['login']);
        return true;
      }
  }
}
