import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  
    let arr = value.split('|');
    var btnarr = [];
    for(var i=0; i<arr.length;i++){
      btnarr.push("&nbsp;<span class='label label-info'>" + arr[i] + "</span>");
    }
    return btnarr.join('');
  }

}
