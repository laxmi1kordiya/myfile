import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Comments } from '../classes/comments';
import { FreeapiService } from '../freeapi.service';
import  posts from '../classes/posts';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private _freeApiService:FreeapiService) {

   }
   lstcomments:Comments[] | undefined;
  //  lstposts:posts[] | undefined;
  //  objposts:posts | undefined ;
   
  ngOnInit(): void {

    this._freeApiService.getcomments()
    .subscribe
    (
      data=>
     {
      this.lstcomments =data;
     }
    );


  //   this._freeApiService.getcommentsbyparameter()
  //   .subscribe
  //   (
  //     data=>
  //     {
  //     this.lstposts = data;
  //     }
  //   );

  //   var opost = new posts();

  //   opost.body ="testbody";
  //   opost.title ='testtitle';
  //   opost.userId = 5;

  //   this._freeApiService.post(opost)
  //   .subscribe
  //   (
  //     data=>
  //     {
  //     this.objposts =data;
  //     }
  //   );
  }

  }
