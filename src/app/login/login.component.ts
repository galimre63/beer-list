import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public userName:string = 'user name';

  constructor() { }

  ngOnInit() {
  }

  public login():void {
    localStorage.setItem('userName',this.userName);
  }
}