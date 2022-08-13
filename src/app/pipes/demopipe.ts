import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {
  transform(n: string) {
    const arr = n.split(" ");

    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1).toLowerCase();
    }

    const new_arr = arr.join(" ");
    return new_arr;
  }
}
