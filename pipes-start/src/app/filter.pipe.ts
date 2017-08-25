import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.length == 0){
      return value;
    }
    let resultArray=[];
    for(const item of value){
      if(item.status.indexOf(filterString) !== -1){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
