import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BeerConnectionService {

  private count:number = 0;

  constructor(private http:HttpClient) { }

  public getPage():Observable<any>{
    console.log('getPage')
    return this.http.post('/beers',{page:1, per_page:10});
  }
}