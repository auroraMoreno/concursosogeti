import {Component, OnInit} from "@angular/core";
import { UserService } from 'src/services/users.service';
import {User} from './../../../models/user';

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent implements OnInit {
    user: string;
    password: string;

    public users:Array<User>;

    constructor(public service:UserService) {
        this.users=[]
    }

    login(){
        console.log(this.user);
        console.log(this.password);
        //const user = {user:this.user, password:this.password};
        this.service.login(this.password,this.user).subscribe(data =>{
            console.log(data);
        }, error=>{
            console.log(error);
        });
    }

    getUsers(){
        this.service.getUsers().subscribe(data=>{
            this.users = data;
            console.log(this.users);
        });
    }


    ngOnInit(): void {
        this.getUsers();
      }
}