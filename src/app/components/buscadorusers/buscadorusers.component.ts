import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {User} from './../../../models/user';
import {UserService} from './../../../services/users.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-buscadorusers',
  templateUrl: './buscadorusers.component.html',
  styleUrls: ['./buscadorusers.component.css']
})
export class BuscadorusersComponent implements OnInit {

  public users:Array<User>;
  filterpost = '';
  //public user:User;

  constructor(private _service:UserService, private dialog:MatDialog) { 
    this.users=[];
  }



  getUsers(){
    this._service.getUsers().subscribe(data=>{
        this.users = data;
        console.log(this.users);
    });
}

openDialog(user:User){
  this.dialog.open(DetallesComponent,{
    data: user.identity.name
  })
}

  ngOnInit(): void {
    this.getUsers();
  }

}
