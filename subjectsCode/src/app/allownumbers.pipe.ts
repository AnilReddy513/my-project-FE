import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allownumbers'
})
export class AllownumbersPipe implements PipeTransform {

  transform(value:string): string {
    return value.replace(/[^0-9]/g, " ");
  }

}
