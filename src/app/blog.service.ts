import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

// declare a dummy blog variable here
public allBlogs = [
  {
    "blogId": "1",
    "lastModified":"2017-10-20T12:20:47.854Z",
    "created":"2017-10-20T12:20:47.854Z",
    "tags": ["humour","standup comedy"],
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
    "lastModified":"2017-10-21T21:47:51.678Z",
    "created":"2017-10-21T21:47:51.678Z",
    "tags": ["humour","standup comedy"],
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
    "lastModified":"2017-11-14T14:15:54.407Z",
    "created":"2017-11-14T14:15:54.407Z",
    "tags": ["humour","standup comedy"],
    "author": "Admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "this is the blog body. this is the blog body",
    "description": "this is the third blog description",
    "title": "this is the third blog"
  }
]

public currentBlog;


constructor() { 

  console.log("service constructor is called");

}


// method to return all blogs
public getAllBlogs(): any{

  return this.allBlogs;
}

// method to get a particular blog
public getSingleBlogInformation(currentBlogId): any {
  // using a for of loop here from type script
  // https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
  for (let blog of this.allBlogs) {
    if (blog.blogId == currentBlogId) {

      this.currentBlog = blog;
    }

  }
  console.log(this.currentBlog);
  return this.currentBlog;
}

}
