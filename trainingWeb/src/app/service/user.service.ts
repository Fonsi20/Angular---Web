import {Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class UserService{
  constructor( private _http : HttpClient ){}

  getTodos(): Observable<any>{
    let url="https://jsonplaceholder.typicode.com/todos";
    return this._http.get( url );
  }

  getTodosByParameters(): Observable<any>{
    let params1 = new HttpParams().set('userId',"1");
    let url="https://jsonplaceholder.typicode.com/todos";
    return this._http.get( url, { params:params1 } );
  }

  getPost(): Observable<any>{
    let url="https://jsonplaceholder.typicode.com/post";
    return this._http.get( url );
  }
}
