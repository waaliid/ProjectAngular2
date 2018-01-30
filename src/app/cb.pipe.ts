import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cb'
})
export class CbPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
