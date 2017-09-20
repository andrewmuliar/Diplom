import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FriendsPipe'
})
export class FriendsPipe implements PipeTransform {

  transform(value: any, field:string, input: any): any {
    let counter:number = 0;
    if(input)
      {
       input = input.toLowerCase();
       if(value.filter(friend => 
        {
         return friend[field].toLowerCase().indexOf(input) > -1
        }).length == 0) 
        { 
          return [-1]
        } 
       else return value.filter(friend => 
        {
         return friend[field].toLowerCase().indexOf(input) > -1
        })
      }
    return value;
  }

}