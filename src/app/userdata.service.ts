import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  id:number | undefined;
  postId: number | undefined ;
  name: string | undefined;
  email: string | undefined;
  body: string | undefined
  
//   {
//     postId: number ;
//     id: number | undefined;
//     name: string | undefined;
//     email: string | undefined;
//     body: string | undefined

// }

  constructor() { }
  getData() {
    return[ {
      id:1,
      postId:'001',
      name:'laxmi',
      email:'laxmi@gmail.com',
      body:'my body is healthy too.'
    
      
      
     
    },
    {
      id:1,
      postId:'001',
      name:'laxmi',
      email:'laxmi@gmail.com',
      body:'my body is healthy too.'
     
    }
  ]
    
    
  }
}
