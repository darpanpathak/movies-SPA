import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IMovies } from '../models/IMovies';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { AngularIndexedDB } from 'angular2-indexeddb';

@Injectable()
export class AppService {

  public db: any;
  public indexeddbpromise = new Promise(
    function (resolve, reject) {

      var request = window.indexedDB.open("MovieDatabase", 1);
      let self = this;
      request.onerror = function (event) {
        reject(event);
      };

      request.onsuccess = function (event) {
        debugger;
        resolve({ event, request });
      };

      request.onupgradeneeded = function (event) {
        let dd = event.target["result"];

        let objectStore = dd.createObjectStore(
          'DB_Movies', { keyPath: "id", autoIncrement: true });

        objectStore.createIndex("movie_title", "movie_title", { unique: false });
        objectStore.createIndex("director_name", "director_name", { unique: false });
        objectStore.createIndex("actor_1_name", "actor_1_name", { unique: false });
        objectStore.createIndex("actor_2_name", "actor_2_name", { unique: false });
        objectStore.createIndex("genres", "genres", { unique: false });
        objectStore.createIndex("language", "language", { unique: false });
        objectStore.createIndex("country", "country", { unique: false });
        objectStore.createIndex("content_rating", "content_rating", { unique: false });
        objectStore.createIndex("budget", "budget", { unique: false });
        objectStore.createIndex("title_year", "title_year", { unique: false });
        objectStore.createIndex("plot_keywords", "plot_keywords", { unique: false });
        objectStore.createIndex("movie_imdb_link", "movie_imdb_link", { unique: false });


        resolve(event);
      }

    });


  constructor(public http: Http) {

  }

  getAllMovies(): Observable<IMovies[]> {

    debugger;

    return this.http.get(environment.allmoviesurl, { headers: this.appheaders() })
      .map(res => {
        this.createDatabase(res.json());
        return res.json();
      });

  }

  setdb(value) {
    this.db = value;
  }

  createDatabase(data) {

    debugger;
    data.forEach(element => {
      this.addMovie(element);
    });

  }

  addMovie(obj: IMovies) {
    let temp = this.db.transaction(["DB_Movies"], "readwrite").objectStore("DB_Movies").add(obj);
  }

  getallmovie() {
    debugger;
    let tesst = this.db.transaction(["DB_Movies"]).objectStore("DB_Movies").getAll();
    return tesst;

  }

  appheaders() {
    var contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return contentHeaders;
  }
}
