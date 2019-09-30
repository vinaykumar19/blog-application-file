import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService: BlogHttpService) { }

  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories =["Comedy","Drama","Action","Technology"] 
  
  public createBlog():any{

let blogData={

  title:this.blogTitle,
  blogBody:this.blogBodyHtml,
  description:this.blogDescription,
  category:this.blogCategory,

}// end blog data

console.log(blogData);

this.blogHttpService.createBlog(blogData).Subscribe(

    data=>{
      console.log("Blog Created")
      console.log(data);
    alert('Blog Posted Successfully');
    },
    
    error=>{
      console.log("some error occured");
      console.log(error.errorMessage);
      alert("some error occured");
    }

)


  }



  ngOnInit() {
  }

}
