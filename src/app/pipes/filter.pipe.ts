import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUser = [];
    for(const user of value){
      if(user.identity.name.indexOf(arg) > -1 || user.identity.firstname.indexOf(arg) > -1 || user.identity.secondname.indexOf(arg) > -1){
         resultUser.push(user);
      }
    };
    return resultUser;
  }

}
