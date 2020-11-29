import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Global} from './global';


@Injectable({providedIn:'root'})
export class UserService{
    private url:string;
    constructor(private http:HttpClient) {
        this.url=Global.url;
    }

    login(user,password):Observable<any>{
        const headers = new HttpHeaders();
        headers.append("password",password);
        headers.append("user",user);
        return this.http.post("http://13.93.70.220:30120/S2VAPI/authenticate", {headers:headers});
    }

    getUsers():Observable<any>{
        return this.http.get(this.url);
    }

    buscadorUser(identifier):Observable<any>{
        var request = this.url + "/" + identifier;
        return this.http.get(request);
    }

}