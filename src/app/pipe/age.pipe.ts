import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flags?: number): string {
    
    if(!dob){
      return '';
    }

    //Date Must be YYYY-MM-DD
    const date1 = new Date(dob);
    const diff = Date.now() - date1.getTime();
    const date2 = new Date(diff);

    const year = date2.getFullYear() - 1970;
    const month = date2.getMonth();
    const day = date2.getDay();

    let output = '';

    switch(flags){
      case 1:
        output = `${year} Years`;
        break;
      case 2:
        output = `${year} Years ${month} Months`;
        break;
      case 3:
        output = `${year} Years ${month} Months ${day} Days`;
        break;
      default:
        output = `${year} Years`;
    }

    return output;
  }

}
