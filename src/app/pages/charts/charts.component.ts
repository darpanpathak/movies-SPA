import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../providers/app-service.service';
import { IMovies } from '../../models/IMovies';
import 'd3';
import 'nvd3';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  options;
  data;

  constructor(private appservice: AppService) { }

  ngOnInit() {

    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 650,
        width: 100,
        margin: {
          top: 20,
          right: 20,
          bottom: 250,
          left: 145
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Movie Name',
          rotateLabels : -45
        },
        yAxis: {
          axisLabel: 'Budget',
          axisLabelDistance:40
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "A",
            "value": -29.765957771107
          }
        ]
      }
    ];

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
              self.updateGraphData(event.target.result);
            };

          }
          else {

            self.appservice.getAllMovies().subscribe((movies: IMovies[]) => {
              self.updateGraphData(movies);
            });

          }
        }

      }
      else {
        tempobj = resolve["target"];
        self.appservice.setdb(resolve["target"].result);

        self.appservice.getAllMovies().subscribe((movies: IMovies[]) => {
          self.updateGraphData(movies);
        });

      }

    }, function (reject) {
      console.log(reject);
    });

  }

  updateGraphData(data) {
    let tempdata = data;
    let datavalues = tempdata.map(function (a) {
      return {
        "label": a.movie_title,
        "value": a.budget
      };
    })

    this.data = [{
      key: "Movies vs budget",
      values: datavalues
    }];

    this.options.chart.width = datavalues.length * 100;
    let chart = this.options.chart;

  }

}
