import { Component, OnInit } from '@angular/core';
import studentData  from '../students.json';

interface Student{
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  students:Student[]=studentData;



}
