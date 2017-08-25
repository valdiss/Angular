import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name:'shorten'
})

export class ShortenPipe implements PipeTransform {
  transform(value:any, charNumber:number){
    if(value.length > charNumber){
      return value.substr(0, charNumber) + ' ...';
    }
    return value;
  }
}
