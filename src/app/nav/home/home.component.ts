import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data=[];
  constructor(private user:UsersService) 
  { 
   
    this.user.getData().subscribe(data =>{

      console.warn(data)
      // this.data =data
    })
  }
   
  ngOnInit(): void {
  }
  

 }
