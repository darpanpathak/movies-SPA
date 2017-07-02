import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-app',
  templateUrl: './route-app.component.html',
  styleUrls: ['./route-app.component.css']
})
export class RouteAppComponent implements OnInit {

  username : String;
  constructor(public router: Router) { }

  ngOnInit() {
    this.username = "Darpan Pathak";
  }


}
