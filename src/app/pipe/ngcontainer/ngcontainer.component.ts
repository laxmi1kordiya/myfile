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

  products=[
    {name:'laptop'},
    {name:'mobile'},
    {name:'tv'},
    {name:'watch'},


  ]

}
