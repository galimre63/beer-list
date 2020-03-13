import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  constructor(){
      let username:string = localStorage.getItem('userName');
      console.log('main constructor:\'',username,'\'');
  }
}
