import { Pipe, PipeTransform } from '@angular/core';


/**
 * PIPES servem para receber Algo e TRANSFORMAR em outra Coisa
 */
@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'frontend' : return 'monitor';
      case 'language' : return 'code';
      case 'java' : return 'keyboard';
      case 'devops' : return 'all_inbox';
    }
    return 'cancel';
  }

}
