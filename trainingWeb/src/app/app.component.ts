import { Component } from '@angular/core';
import { post } from './models/post';
import { todos } from './models/todos';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'trainingWeb';
  lstTodos: todos[] =[];
  lstTodosParameters: todos[] =[];
  lstPost: post[] =[];

  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];

  constructor(private _user : UserService){}

  ngOnInit(){
    this._user.getTodos().subscribe(data =>{
      this.lstTodos=data;
    });

    this._user.getTodosByParameters().subscribe(data =>{
      this.lstTodosParameters=data;
    });
    const dataSource = this.lstTodos;
  }
}
