import {Component} from "@angular/core";
import { UserService } from 'src/services/users.service';

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent {
    user: string;
    password: string;

    constructor(public service:UserService) {}

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
}