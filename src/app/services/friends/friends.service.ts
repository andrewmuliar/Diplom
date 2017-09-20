import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FriendsService
{

 private url = "http://localhost/Diplom/";
 constructor(private _http:Http) { }

 getFriends(uid:string)
 {
  let getUrl = this.url+'/friends.php'
  return this._http.get(getUrl+'?getFriends='+uid)
 }

 searchFriend(userName:string)
 {
  return this._http.get(this.url+"friends.php?search="+userName)
 }

 addFriend(id)
 {
  let data = {"addFriend":id,"userUID":localStorage.getItem("userUID")}
  let headers = new Headers();
  let fullUrl = this.url+"friends.php"
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, data, {headers:headers})     
 }

}