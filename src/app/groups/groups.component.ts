import { Component, OnInit } from '@angular/core';

import { FriendsService } from '../services/friends/friends.service';
import { GroupsService } from '../services/groups/groups.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  providers: [FriendsService, GroupsService],  
  styleUrls: ['./groups.component.css']
})
export class groupsComponent implements OnInit {

  groups:any;
  private newGroup:Object = {groupCreate:'', values:[{},{}]};
  users:Array<any> = [];

  constructor(private Friends:FriendsService,
              private Groups:GroupsService) { }

  ngOnInit()    
  {
   this.Groups.getGroups(localStorage.getItem("userUID"))
                  .subscribe(list => 
                    {
                      this.groups = JSON.parse(list.text())
                      console.log(this.groups)
                    })
  }

  showUsers(el)
  {
   el.members.map( item => this.users.push(item) )
   console.log(this.users)
   
  }

  addTo(id)
  {
   this.users.push(id)   
  }

  createGroup(groupName)
  {
   this.newGroup['values'] = this.users
   this.newGroup['groupCreate'] = groupName
   this.Groups.createGroup(localStorage.getItem("userUID"), this.newGroup)
                  .subscribe( data => console.log(data.text()))
  }

}
