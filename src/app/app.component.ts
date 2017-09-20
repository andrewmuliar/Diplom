import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private userState:any;
  constructor(private auth:AuthService) {}

  ngOnInit()
  {
   this.auth.currentUserObservable.subscribe(
     data =>{
        this.userState = data; 
        console.log(this.userState)
      }
   )
    // if(localStorage.getItem("userUID")!= null)
    //  this.userState.subscribe() = true
    // else this.userState = false
  }
}