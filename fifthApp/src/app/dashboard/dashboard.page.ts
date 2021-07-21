import { Component, OnInit,ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
//import { GoogleChartInterface } from 'ng2-google-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{
  // @ViewChild('barChart') barChart;
  // bars: any;
  // colorArray: any;
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // public pieChart: GoogleChartInterface= {
  //   chartType: 'PieChart',
  //   dataTable: [
  //     ['Task', 'Hours per Day'],
  //     ['Work',     11],
  //     ['Eat',      2],
  //     ['Commute',  2],
  //     ['Watch TV', 2],
  //     ['Sleep',    7]
  //   ],
  //   options: {title: 'Tasks'},
  // };

  ngOnInit(){
  }
}
