import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FriendsService {

constructor(private http:Http) { }
getFriends(uid)
{
 return this.http.get('http://localhost/Diplom/friends.php?getFriends='+uid)
}

}