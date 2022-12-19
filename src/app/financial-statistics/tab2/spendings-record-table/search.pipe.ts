import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    args = args.toLowerCase();
    if(!value) return null;
    if(!args) return value;
    return value.filter((item:any)=>{
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
  }

}
