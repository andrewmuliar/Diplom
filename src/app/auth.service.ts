import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private authState:any;

  constructor(private afAuth: AngularFireAuth, private http:Http,
              private router:Router) {
              this.afAuth.authState.subscribe((auth) => {
              if(auth !== null) 
              {
               localStorage.setItem("userUID",auth.uid)
               localStorage.setItem("userName",auth.displayName)
               localStorage.setItem("photoUrl",auth.photoURL)
               this.router.navigate(['/news'])               
              }
              else 
              {
               this.authState = auth
               this.router.navigate(['/login'])
              }
            });
          }
  //Якщо користувач новий, то записати його дані з google 
//   Returns true if user is logged in
checkForNew(UID, userName, photoUrl)
{
 return this.http.get('http://localhost/Diplom/go.php?uid='+UID+'&username='+userName+'&url='+photoUrl)
 .subscribe(data => console.log(data))
}
  get authenticated(): boolean 
  {
    return this.authState;
  }

//   // Returns current user data
//   get currentUser(): any {
//     return this.authenticated ? this.authState : null;
//   }

//   // Returns
   get currentUserObservable(): any 
   {
    return this.afAuth.authState
   }

//    Returns current user UID
   get currentUserId(): string 
    {
     return this.afAuth.auth.currentUser.uid
    }

   get userImage():string
   {
    return this.afAuth.auth.currentUser.photoURL
   }

   get userName():string
   {
    return this.afAuth.auth.currentUser.displayName
   }

  loginIn():void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(function()
   {
    localStorage.setItem("userUID",this.afAuth.auth.uid)
    localStorage.setItem("userName",this.afAuth.auth.displayName)
    localStorage.setItem("photoUrl",this.afAuth.auth.photoURL)
   //Перевіряємо чи користувач новий
    this.checkForNew(this.afAuth.auth.currentUser.uid, 
                    this.afAuth.auth.currentUser.displayName, 
                    this.afAuth.auth.currentUser.photoURL)    
   })            
  }

  logOut(): void 
  {
    this.afAuth.auth.signOut().then(
      function()
      {
       localStorage.clear()
       this.router.navigate(['/login'])       
      });
  }
}