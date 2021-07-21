import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @ViewChild('barChart') barChart;
  //@ViewChild(“barCanvas”, { static: true }) barCanvas: ElementRef;
  bars: any;
  colorArray: any;
  // public columnChart1: GoogleChartInterface;
  // public columnChart2: GoogleChartInterface;
  // public barChart: GoogleChartInterface;
  constructor() {}
  // onViewDidEnter() {
  //   this.loadColumnChart();
  // }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: {
              beginAtZero: true
            }
        }
      }
    });
  }
}


  // loadColumnChart() {
  //   this.columnChart1 = {
  //     chartType: 'ColumnChart',
  //     dataTable: [
  //       ['City', '2010 Population'],
  //       ['New York City, NY', 8175000],
  //       ['Los Angeles, CA', 3792000],
  //       ['Chicago, IL', 2695000],
  //       ['Houston, TX', 2099000],
  //       ['Philadelphia, PA', 1526000]
  //     ],
  //     //opt_firstRowIsData: true,
  //     options: {
  //       title: 'Population of Largest U.S. Cities',
  //       height: 600,
  //       chartArea: { height: '400' },
  //       hAxis: {
  //         title: 'Total Population',
  //         minValue: 0
  //       },
  //       vAxis: {
  //         title: 'City'
  //       }
  //     },
  //   };
  // }


