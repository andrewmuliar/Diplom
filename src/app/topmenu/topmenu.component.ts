import { Component } from '@angular/core';

import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent
{
  public img:string;
  public username:string;
  constructor(public auth:AuthService, private router:Router) 
  {
   this.img      = localStorage.getItem("photoUrl")
   this.username = localStorage.getItem("userName")
  }
  LogOut()
  {
    this.auth.logOut()
  }

}
