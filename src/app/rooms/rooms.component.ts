import { Component, OnInit } from '@angular/core';
import { GetRoomsService } from '../getRooms.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [GetRoomsService]
})
export class RoomsComponent implements OnInit {
  Mydata:any;
  constructor(private myServ:GetRoomsService) { }
  ngOnInit() {
   this.myServ.getData().subscribe(
     data => {
       this.Mydata = JSON.parse(data.text())
     },
     error => console.log(error) )
  } 
}