import { Pipe, PipeTransform } from '@angular/core';
import { IMovies } from '../models/IMovies';

@Pipe({
  name: 'nameFilter'
})

export class NameFilter implements PipeTransform {

  transform(movielist: IMovies[], args: string): any {
    if (movielist)
      return movielist.filter(movie => movie.movie_title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    else
      return movielist;
  }

}
