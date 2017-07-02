import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app-service.service';
import { IMovies } from '../../models/IMovies';
import { NameFilter } from '../../pipes/name-filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  public movielist: IMovies[];
  public movie_title: string = "";
  public self: any;

  constructor(public appservice: AppService) { }

  ngOnInit() {

    let self = this;

    this.appservice.indexeddbpromise.then(function (resolve) {
      debugger;
      let tempobj;
      if (resolve["event"] != undefined) {
        tempobj = resolve["event"].target;

        self.appservice.setdb(resolve["request"].result);
        tempobj.result.transaction(["DB_Movies"]).objectStore("DB_Movies").count().onsuccess = function (event1) {
          let count = event1.target.result;
          if (count > 0) {

            self.appservice.getallmovie().onsuccess = function (event) {
              self.movielist = event.target.result;
            };

          }
          else {

            self.appservice.getAllMovies().subscribe((movies: IMovies[]) => {
              self.movielist = movies;
            });

          }
        }

      }
      else {
        tempobj = resolve["target"];
        self.appservice.setdb(resolve["target"].result);

        self.appservice.getAllMovies().subscribe((movies: IMovies[]) => {
          self.movielist = movies;
        });

      }

    }, function (reject) {
      console.log(reject);
    });
  }



}
