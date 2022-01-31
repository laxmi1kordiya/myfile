import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isValid:boolean =false

  onCreatBlock(){
    this.isValid =true
  }
 

  // ngfor
  product =[
    {srno:'',image:'../../assets/meeting2.jpg',name:'laptop' , id:'pro01', price:'15000'},
    {srno:'',image:'',name:'mobile' , id:'pro02', price:'8000'},
    {srno:'',image:'',name:'tv' , id:'pro03', price:'12000'},
    {srno:'',image:'',name:'washing machine' , id:'pro04', price:'15000'}

  ];
}
