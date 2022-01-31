import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.css']
})
export class NgcontainerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  statusOnline:boolean =true;

  products=[
    {name:'laptop'},
    {name:'mobile'},
    {name:'tv'},
    {name:'waching machine'}

  ]
  mypro:boolean =true;
  mystyle:string="15px"

  isActive:boolean=false;


  mltclasses ={
    class1:true,
    class2:false,
    class3:true
  }
  mltstyle ={
    'background':'red'
  }
}
