import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DreamService {

private url = 'http://localhost/Diplom'
constructor(private _http:Http) { }

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

/*Отримання списку груп користувача */
getGroups(uid)
{
  let fullUrl = this.url+"/go.php?GroupList="+uid;
  return this._http.get(fullUrl)
}
createDream(data, user)
{
 let fullUrl = this.url+'/go.php'
 let toSend: Object
 toSend = {
            "header":data.value.header,
            "post":data.value.dream,
            "comment":data.value.comment,
            "forever":data.value.forever,
            "day":data.value.day,
            "vision":data.value.vision,
            "user":user
          }
 console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, toSend, {headers:headers})
}

}