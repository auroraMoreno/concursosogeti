import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { UserService } from 'src/services/users.service';
import {User} from './../../../models/user';

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent implements OnInit {
    // user: string;
    // password: string;
    filterpost = '';

    public users:Array<User>;
    @ViewChild("cajaUser") cajaUser:ElementRef;
    @ViewChild("cajaPassword") cajaPassword:ElementRef;
    public user:string;
    public password: string;
    public token:string;

    constructor(public _service:UserService) {
        this.users=[]
        this.user = this.cajaUser.nativeElement.value;
        this.password = this.cajaPassword.nativeElement.value;
        this.token = "";
    }


    login(){
        console.log(this.cajaUser.nativeElement.value);
        console.log(this.cajaPassword.nativeElement.value);
        var user = this.cajaUser.nativeElement.value;
        var password = this.cajaPassword.nativeElement.value;
        //const user = {user:this.user, password:this.password};
        // this._service.login(this.password,this.user).subscribe(data =>{
        //     console.log(data);
        // }, error=>{
        //     console.log(error);
        // });
    }

    comprobarUserPassword(){
       this.user;
       this.password;
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