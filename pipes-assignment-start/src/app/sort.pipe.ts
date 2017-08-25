import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any) {
    if(value.length === 0){
      return value;
    }
    value.sort(function(a, b){
      let nameA=a.name, nameB=b.name;
      if (nameA < nameB){
        return -1
      } //sort string ascending

      if (nameA > nameB){
        return 1
      }
      return 0 //default return value (no sorting)
    });

    return value;
  }

}
