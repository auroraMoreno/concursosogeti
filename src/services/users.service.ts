import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class UserService{
    constructor(private http:HttpClient) {}

    login(user,password):Observable<any>{
        const headers = new HttpHeaders();
        headers.append("password",password);
        headers.append("user",user);
        return this.http.post("http://13.93.70.220:30120/S2VAPI/authenticate", {headers:headers});
    }
}