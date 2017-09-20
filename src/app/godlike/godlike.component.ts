import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from "../auth.service";
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-godlike',
  templateUrl: './godlike.component.html',
  styleUrls: ['./godlike.component.css']
})

export class GodlikeComponent implements OnInit {
  
  fireUID:string;
  dreams: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) 
  {
  }

  ngOnInit() 
  {
    this.dreams = this.db.list('/items')
    //this.dreams.$ref.on('child_added', () =>)
    //console.log(this.dreams)
  }

    //const promise = db.list('/items')
    //const mynew = this.items.push({"posts":"Yeah"})
    //console.log(mynew.key)
}