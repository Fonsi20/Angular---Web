import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'trainingWeb';
  dataInfo: any;

  constructor(private _user : UserService){
    this._user.getData().subscribe(data =>{
      this.dataInfo=data;
    });
  }
}
