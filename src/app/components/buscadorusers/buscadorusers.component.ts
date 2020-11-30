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

  constructor(private _service:UserService, private dialog:MatDialog) { 
    this.users=[];
  }



  getUsers(){
    this._service.getUsers().subscribe(data=>{
        this.users = data;
        console.log(this.users);
    });
}

openDialog(){
  const dialogConfig = new MatDialogConfig();
  // dialogConfig.position={
  //   'top':'10',
  //   'left':'10'
  // }
  
  dialogConfig.data= {  };

  this.dialog.open(DetallesComponent,dialogConfig);
}

  ngOnInit(): void {
    this.getUsers();
  }

}
