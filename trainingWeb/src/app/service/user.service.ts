import {Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { todos } from '../models/todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class UserService{
  constructor( private _http : HttpClient ){}

  getTodos(): Observable<any>{
    let url="https://jsonplaceholder.typicode.com/todos";
    return this._http.get(url);
  }
}
