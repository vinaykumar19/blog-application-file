
//this is a by default statement 
import { Component, OnInit } from '@angular/core';


//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class

export class HomeComponent implements OnInit {

// declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This big text</h1> <p>small text</p>",
      "description": "This is the description of the example blog and this is edited",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blog body. this is the blog body",
      "description": "this is the third blog description",
      "title": "this is the third blog"
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
