import { Component } from '@angular/core';
import { todos } from './models/todos';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'trainingWeb';
  dataInfo: todos[];

  constructor(private _user : UserService){}

  ngOnInit(){
    this._user.getTodos().subscribe(data =>{
      this.dataInfo=data;
    });
  }
}
