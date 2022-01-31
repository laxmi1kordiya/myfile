import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'newpipe'
})
export class newpipe implements PipeTransform{
      transform(value: any) {
       console.log (value)  
      }
}