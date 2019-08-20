import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

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




  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log("constructor is called");

  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    // getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    // calling the function to get the blog with this blogId out of the overall array
    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop here from type script
    // https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {

        this.currentBlog = blog;
      }

    }
    console.log(this.currentBlog);

  }// end get blog information function

}
