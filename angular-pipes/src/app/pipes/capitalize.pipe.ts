import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform{
  // transform(value: any, ...args: any[]) {
  //   throw new Error("Method not implemented.");
  // }
  transform(input: string, args: any[]): any {
    if (!input) {
        return '';
    }

    input = input.toLowerCase();
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}