System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main(http) {
                    this.http = http;
                }
                Main.prototype.logIn = function (username, password) {
                    console.log("Username : " + username.value);
                    console.log("Password : " + password.value);
                };
                //Now creating Log In with http request.
                Main.prototype.LogIn = function (username, password) {
                    var headers = new http_1.Headers();
                    headers.append("content-type", "application/json");
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    var obj = { username: username.value, password: password.value };
                    //Posting Data.
                    this.http.post('http://localhost:3000/api/login', JSON.stringify(obj), options).
                        subscribe(function (resp) {
                        console.log(resp);
                    });
                };
                Main = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "./app/component/main/main.html"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map