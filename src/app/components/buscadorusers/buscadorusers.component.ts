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
  @ViewChild("cajaUser") cajaUser:ElementRef;
 

  constructor(private _service:UserService) { 
    this.users=[];
  }

  buscarUser(){
    var name=this.cajaUser.nativeElement.value;
    var locator = (u:User) => u.identity.name == name;
    console.log(locator);
    // this._service.buscadorUser(name).subscribe(response=>{
    //   console.log(response);
    // });
  }

  ngOnInit(): void {
  }

}
