import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string) {
    if(value !== ''){
      let valueArray=value.split('');
      let reverseArray=valueArray.reverse();
      let reverseString = reverseArray.join('');
      return reverseString;
    }
  }

}
