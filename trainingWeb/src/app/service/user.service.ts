import {Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class UserService{
  constructor( private _http : HttpClient ){}

  getData(){
    let url="https://jsonplaceholder.typicode.com/todos";
    return this._http.get(url);
  }
}
