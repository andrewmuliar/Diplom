import { Component, OnInit } from '@angular/core';

import { DreamService } from '../services/dream/dream.service';
import { FriendsService} from '../services/friends/friends.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private dream: DreamService, 
              private Auth:AuthService, 
              private db: AngularFireDatabase,
              private fr:FriendsService
             ) {}
  
  private fireUID:string = '';
  private dreams: FirebaseListObservable<any[]>;
  private groups: any;
  private friendData:any;
  private members:Array<any> = []

  ngOnInit() 
  {
   this.dreams = this.db.list('/items')
   this.Auth.currentUserObservable
   .subscribe(data => this.dream.getGroups(data.uid)
              .subscribe(groups => this.groups = JSON.parse(groups.text())))
   this.fr.getFriends(localStorage.getItem("userUID"))
          .subscribe( data => 
                      {
                       this.friendData = JSON.parse(data.text()); 
                       console.log(JSON.parse(data.text()))
                      })
  } 

firePost(dream)
{
  if(this.fireUID == "")
  {
   this.fireUID = this.dreams.push({"posts":dream.target.value}).key
  }
  else
   this.dreams.update(this.fireUID,{"posts":dream.target.value})
}

checkFriend($e)
{
 if($e.checked == true)
  {
   this.members.push({"username":$e.source.id, "uid":$e.source.value})
  }
}

submit(data, members)
  {
   //console.log(data.value, members)
   let fullData = []
   fullData.push(data.value)
   fullData.push(members)
   console.log("sumbit= "+fullData)
   this.dream.createDream(data, this.Auth.currentUserId).subscribe( data => console.log(data))
  }
}
