import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public beerList: any[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public logout():void {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}