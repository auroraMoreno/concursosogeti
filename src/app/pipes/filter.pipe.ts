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


// transform(users:any, strBusqueda : string){
//     if(!users) return [];
//     if(!strBusqueda) return users;
//     strBusqueda = strBusqueda.toLowerCase();
//     return users.filter( user => {
//      return user.identity.name.toLowerCase().includes(strBusqueda)  || user.identity.firstname.toLowerCase().includes(strBusqueda) ;
//   });

//   }

}
