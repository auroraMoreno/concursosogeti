import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { UserService } from 'src/services/users.service';
import {User} from './../../../models/user';
import{Router} from '@angular/router';

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
    // public user:string;
    // public password: string;
    public token:string;

    constructor(public _service:UserService, public _router:Router) {
        this.users=[]
        this.token = "";
    }


    login(){
        console.log(this.cajaUser.nativeElement.value);
        console.log(this.cajaPassword.nativeElement.value);
        var user = this.cajaUser.nativeElement.value;
        var password = this.cajaPassword.nativeElement.value
        // var user = this.cajaUser.nativeElement.value;
        // var password = this.cajaPassword.nativeElement.value;

        // if(user === "S2VTournament" && password === "sogetispain"){
        //     this._router.navigate(["/buscador"]);
        // }else{
        //     alert("user o password incorrectos");
        // }

        this._service.login(password,user).subscribe(res =>{
            console.log(this.token=res);
           
        }, error=>{
            console.log(error);
        });
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