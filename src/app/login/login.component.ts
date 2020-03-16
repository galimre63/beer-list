import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public userName:string = 'username';

  constructor(private route:Router) {}

  ngOnInit() {
  }

  public login():void {
    localStorage.setItem('userName',this.userName);
      if(this.userName && this.userName.length>0){
        console.log('navigate main');
        this.route.navigate(['main']);
      }
  }
}