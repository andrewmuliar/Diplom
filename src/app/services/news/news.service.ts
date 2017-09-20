import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

private url = 'http://localhost/Diplom'

constructor(private _http:Http) { }

 getPosts(user) // user -- номер юзера для перегляду
 {
  let fullUrl = this.url+"/news.php?getPosts="+user;
  return this._http.get(fullUrl);
 }
}

// firePost(value)
// {
//  if(value.substr(value.length-1, 1) == " ")
//  {
//   console.log("empty")
//   if(this.fireUID == "")
//   {
//    this.fireUID = this.dreams.push({"posts":value}).key
//   }
//   else
//    this.dreams.update(this.fireUID,{"posts":value})
//  }
// }