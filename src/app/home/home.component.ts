
//this is a by default statement 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';


//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class

export class HomeComponent implements OnInit, OnDestroy{


  public allBlogs;



  constructor(public blogService:BlogService) {

    console.log("Home component constructor called")
   }

  ngOnInit() {
    console.log("Home component OnInit called");

    this.allBlogs=this.blogService.getAllBlogs();
  
    console.log(this.allBlogs);
  }
ngOnDestroy(){
 console.log("Home component destroyed")

}

}
