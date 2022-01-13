import { Component } from '@angular/core';
import {FormGroup,FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  
  loginform= new FormGroup({
    user:new FormControl('Ajay',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('12345',[Validators.required,Validators.minLength(5)]),
    age:new FormControl('23',[Validators.required,Validators.maxLength(2)]),
    phone:new FormControl('1234567890',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('Ajay@gmail.com',[Validators.required,Validators.email]),
    address:new FormControl(''),
    Gender:new FormControl(''),


})
  loginUser()
    {
    console.warn(this.loginform.value);
    
    }
    get diagnostic(){
      return JSON.stringify(this.loginform.value);
      
    }
 

    get user()
    {
      return this.loginform.get('user');
    }
  
    get password()
    {
      return this.loginform.get('password');
    }
    get age()
    {
      return this.loginform.get('age');
    }
    get phone()
    {
      return this.loginform.get('phone');
    }
    get email()
    {
      return this.loginform.get('email');
    }


  
}
