import { Component, OnInit } from '@angular/core';

import { DreamService } from '../services/dream/dream.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

import { DialogComponent } from '../dialog/dialog.component';
import { MdDialog } from '@angular/material';

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
              private dialog:MdDialog) {}
  
  private fireUID:string = '';
  private dreams: FirebaseListObservable<any[]>;
  private groups: any;

  ngOnInit() 
  {
   this.dreams = this.db.list('/items')
   this.Auth.currentUserObservable
   .subscribe(data => this.dream.getGroups(data.uid)
              .subscribe(groups => this.groups = JSON.parse(groups.text())))
  } 

firePost(dream)
{
  if(this.fireUID == "")
  {
   this.fireUID = this.dreams.push({"posts":dream.value}).key
  }
  else
   this.dreams.update(this.fireUID,{"posts":dream.value})
}


submit(data)
  {
   console.log(data)
  // this.dream.createDream(data,this.Auth.currentUserId).subscribe( data => console.log(data))
  }

 OpenDialog()
 {
  this.dialog.open(DialogComponent, {width:'400px', height:'450px', data:{course:232}})
 }
}
