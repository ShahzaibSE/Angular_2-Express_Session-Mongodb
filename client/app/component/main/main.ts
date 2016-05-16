import {Component,Injectable} from 'angular2/core';
import {Http,RequestOptions,Headers} from 'angular2/http';

@Component({
    selector:'my-app',
    templateUrl:"./app/component/main/main.html"
})
export class Main{
    
    constructor(public http:Http){
        
    }
    
    logIn(username:HTMLInputElement,password:HTMLInputElement){
        console.log(`Username : ${username.value}`);
        console.log(`Password : ${password.value}`);
    }
    
    //Now creating Log In with http request.
    LogIn(username:HTMLInputElement,password:HTMLInputElement){
        let headers:Headers = new Headers();
        headers.append("content-type","application/json");
        
        let options:RequestOptions = new RequestOptions();
        options.headers = headers;
        
        var obj = {username:username.value,password:password.value}
        
        //Posting Data.
        
        this.http.post('http://localhost:3000/api/login',JSON.stringify(obj),options).
         subscribe((resp)=>{
             console.log(resp);
         })
        
    }
    
}