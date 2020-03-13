import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router)
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let username:string = localStorage.getItem('userName');
      console.log('can activate',username);
      if(username && username.length>0){
        return true;
      }else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
  }
}
