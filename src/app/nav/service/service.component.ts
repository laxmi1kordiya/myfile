import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  name='';
  

  constructor(private user:UserdataService) 
  {
    console.warn(this.user.getData())
    let data=this.user.getData();
    this.name=data.name
    
  }

  ngOnInit(): void {
  }

}
