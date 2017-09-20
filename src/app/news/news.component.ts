import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  providers: [NewsService],
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: any;
  constructor(private post:NewsService) { }

  ngOnInit() 
  {
   let uid = localStorage.getItem('userUID')
   this.post.getPosts(uid).subscribe(data => this.news = JSON.parse(data.text()))
  }  

}