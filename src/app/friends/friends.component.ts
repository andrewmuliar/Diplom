import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../services/friends/friends.service';
import { FriendsPipe } from '../Pipes/FriendsPipe.pipe';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  providers: [FriendsService],
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  
  friends:any;
  searchList:any;
  showSearch:boolean = false
  constructor(private Friends:FriendsService, private route:ActivatedRoute){}

   ngOnInit() 
   {
    this.route.paramMap.subscribe(
        params => 
        {
         if(params.get('uid') == null)
         {
          this.Friends.getFriends(localStorage.getItem("userUID"))
              .subscribe(list =>
               {
                this.friends = JSON.parse(list.text())
                console.log(list)
               })
         }
         else
          {
           this.Friends.getFriends(params.get('uid'))
               .subscribe(list =>
               {
                this.friends = JSON.parse(list.text())
                console.log(list)                
               })
          }
        }
    )
   }
  
   search(value)
   {
    this.Friends.searchFriend(value)
                .subscribe(items => this.searchList = JSON.parse(items.text()))
   }

   addToFriend(id)
   {
    this.Friends.addFriend(id)
                .subscribe(data => console.log(data))
   }

}
