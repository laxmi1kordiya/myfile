import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url:"\web devlopment\todo-list\src\app\students.Json";
        return this.http.get('url');
  }
}
