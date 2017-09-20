import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRoomsService {

constructor(private http:Http) { }
getData()
{
 let body = {"userID":5};
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8');
 return this.http.post('http://localhost/Diplom/go.php',body, {headers:headers})
}

}