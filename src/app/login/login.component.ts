import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

import { LeftmenuComponent } from '../leftmenu/leftmenu.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./login.component.css'],
  templateUrl:'./login.component.html'
})
export class LoginComponent {

 constructor(public auth:AuthService, private router:Router){}
 loginIn():void
 {
  this.auth.loginIn()
 }
}