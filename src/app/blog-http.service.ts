import { Injectable } from '@angular/core';
// importing http client to make the requests
import { HttpClient , HttpErrorResponse } from '@angular/common/http';

// import observable related code
 import { Observable } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUr1='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'YjFmMzg2YTA4Mzk1NzU1ODY4NDg3NWFlMDBlYzNjNzY5NTI4M2QxMGI4ZTNiOTNlYzUyNWFkMTgxNjIwNDUyMzlmZjczOGZjNDQ5ZjBiMmEwMjQxODFkNDY5NDhjZDU1MzUwMjAxNjhhMGI2Y2I3YjQ3MjBhYzYwNTQzNjg0ZjAxZQ=='

  constructor(private _http :HttpClient) { 
    console.log("blog-http service was called");
  }


  // exception handler
  private handlerError(err:HttpErrorResponse){

console.log("Handle error Http Calls")
console.log(err.message);

return Observable.throw(err.message)

  }


// method to return all blogs
public getAllBlogs(): any{

  let myResponse = this. _http.get(this.baseUr1+'/all?authToken='+this.authToken);
  console.log(myResponse);
  return myResponse;
}

// method to get a particular blog

public getSingleBlogInformation(currentBlogId): any{

let myResponse = this._http.get(this.baseUr1+'/view'+'/'+currentBlogId+'?authToken='+this.authToken)

return myResponse;
}// end get blog information function

public createBlog(blogData):any{
  let myResponse = this._http.post(this.baseUr1+'/create'+'?authToken=' + this.authToken, blogData)

return myResponse;
}//end create blog

public deleteBlog(blogId):any{
 
  let data={}
let myResponse = this._http.post(this.baseUr1+'/'+blogId+'/delete'+'?authToken='+this.authToken,data)

return myResponse;
}// end delete blog

public editBlog(blogId,blogData):any{

  let myResponse = this._http.put(this.baseUr1+'/'+blogId+'/edit'+'?authToken='+this.authToken, blogData)

  return myResponse;
}// end delete blog

}
