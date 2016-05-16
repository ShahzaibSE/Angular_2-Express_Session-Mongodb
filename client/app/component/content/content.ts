import {Component,Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector:'my-app',
    templateUrl:"./app/component/content/content.html"
})
export class Content{
    
    constructor(public http:Http){
        
    }
    
    logIn(username:HTMLInputElement,password:HTMLInputElement){
        console.log(`Username : ${username.value}`);
        console.log(`Password : ${password.value}`);
    }
    
}