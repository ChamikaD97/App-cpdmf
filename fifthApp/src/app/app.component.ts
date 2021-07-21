import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any[]=[];
  constructor(
    private plateform: Platform,
    public router: Router
  )
  {
    this.initializeApp();
    this.sideMenu();
  }
  initializeApp(){
    this.plateform.ready().then(()=>{
      this.router.navigateByUrl('splash');
    });
  }
  sideMenu(){
    this.navigate=[{
      pagename: 'Dashboard',
      icon: 'grid-outline',
      url: 'dashboard'
     },
     {
        pagename: 'cpdrecords',
        icon: 'trophy-outline',
        url: '/cpdrecords'
       },
       {
        pagename: 'courses',
        icon: 'school-outline',
        url: '/courses'
       },
       {
        pagename: 'workshop',
        icon: 'bar-chart-outline',
        url: '/workshop'
       },
       {
        pagename: 'blogs',
        icon: 'newspaper-outline',
        url: '/blogs'
       },
       {
        pagename: 'forum',
        icon: 'chatbubbles-outline',
        url: '/forum'
       },
       {
        pagename: 'reports',
        icon: 'reader-outline',
        url: '/reports'
       },
       {
        pagename: 'payments',
        icon: 'pricetag-outline',
        url: '/payments'
       },
       {
        pagename: 'jobs',
        icon: 'accessibility-outline',
        url: '/jobs'
       }];
  }
  // goto(){
  //   this.router.navigateByUrl('./pages/cpdrecords');
  // }
}
