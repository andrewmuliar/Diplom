import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GroupsService {

 private url = 'http://localhost/Diplom'
 constructor(private _http:Http) { }

 getGroups(uid)
 {
  return this._http.get(this.url+'/groups.php?getGroups='+uid)
 }


 createGroup(uid:string, data)
 {
  data['user'] = uid;
  let fullUrl = this.url+'/go.php'
  let headers = new Headers();
  console.log(data)
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, data, {headers:headers}) }
}
