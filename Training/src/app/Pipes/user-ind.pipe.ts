import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userInd'
})
export class UserIndPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price;
  }

}
