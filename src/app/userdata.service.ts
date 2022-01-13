import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  

  constructor() { }
  getData() {
    return {
      name: 'laxmi',
      age: '30',
      mobile: 2233895033,
    }
  }
}
