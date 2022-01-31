import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value= "this is test value"

  date =new Date()
  mynumber:number=0.178456789;

  nameArr =[
    'alisha ',
    'monika ',
    'hardik patel',
    'geetabai morai',
    'alphina makvana',
    'hardik patel',
    'geetabai morai',
    'alphina makvana',  
  ]

  

}
