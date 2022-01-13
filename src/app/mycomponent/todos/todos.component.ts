import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  public loginform : FormGroup;
  constructor(private fb: FormBuilder) { 
    this.loginform = this.fb.group({
      name: [''],
      subject: ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      mark: ['', [Validators.required, Validators.maxLength(2)]],
      skills: this.fb.array([this.newaddskills()]),
      
    });
  }
  ngOnInit() {
    
  }
  get mark(){
    return this.loginform.get("mark")
  }
  get subject(){
    return this.loginform.get("subject")
  }


  get skills() {
    return this.loginform.get('skills') as FormArray;
  }
  newaddskills() {
    return this.fb.group({
      sub: '',
      marks: ''
    });
  }
  addskill() {
    this.skills.push(this.newaddskills());
  }



  deleteskills(i: number) {
    this.skills.removeAt(i);
  }
  loginUser() {
    console.warn(this.loginform.value);
    //  console.log(this.loginform.value);
    
  }
  get diagnostic() {
    return JSON.stringify(this.loginform.value);

  }
}