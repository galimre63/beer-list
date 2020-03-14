import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerConnectionService } from '../beer-connection.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public beerList: any[];

  constructor(private router:Router, private beerConnection:BeerConnectionService) { }

  ngOnInit() {
    this.beerConnection.getPage().subscribe(result => {
      console.log('result:',result);
    });
  }

  public logout():void {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}