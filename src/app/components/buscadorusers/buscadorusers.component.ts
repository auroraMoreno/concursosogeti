import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {User} from './../../../models/user';
import {UserService} from './../../../services/users.service';

@Component({
  selector: 'app-buscadorusers',
  templateUrl: './buscadorusers.component.html',
  styleUrls: ['./buscadorusers.component.css']
})
export class BuscadorusersComponent implements OnInit {

  public users:Array<User>;
  filterpost = '';

  constructor(private _service:UserService) { 
    this.users=[];
  }

  getUsers(){
    this._service.getUsers().subscribe(data=>{
        this.users = data;
        console.log(this.users);
    });
}

  ngOnInit(): void {
    this.getUsers();
  }

}
