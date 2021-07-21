import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AccessProviders } from '../providers/access-providers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  memberId: '';
  password: '';

  disabledbutton;

  constructor(
    private router: Router,
    private toasctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private navctrl: NavController
  ) {
  }
  ngOnInit(){
  }
  ionViewDidEnter(){
    this.disabledbutton=false;
  }
  async tryLogin(){
    this.router.navigateByUrl('dashboard');
    // if(this.memberId===''){
    //   this.presentToast('Enter Your member Id');
    // }else if(this.password===''){
    //   this.presentToast('Enter Your Password');
    // }
    // else{
    //   this.disabledbutton=true;
    //   const loading = await this.loadingctrl.create({
    //     message: 'Wait a moment...',
    //   });
    //   await loading.present();
    //   return new Promise(resolve=>{
    //     const body = {
    //       action: 'login_progress',
    //       memberId: this.memberId,
    //       password: this.password
    //     };
    //     this.accessproviders.postData(body,'ionic-api/api.php').subscribe((res: any)=>{
    //       if(res.success===true){
    //         loading.dismiss();
    //         this.disabledbutton=false;
    //         this.presentToast('loading Successful');
    //         this.router.navigateByUrl('dashboard');
    //         //this.storage.set('storage_session',res.result);
    //         //this.navctrl.navigateRoot(['dashboard']);
    //       }else{
    //         loading.dismiss();
    //         this.disabledbutton=false;
    //         this.presentToast('Member Id or Password is wrong');
    //       }
    //     },
    //     (err)=>{
    //       loading.dismiss();
    //       this.disabledbutton=true;
    //       this.presentAlertConfirm('Timeout',);
    //     }
    //     );
    //   });
    // }
  }
  async presentToast(a){
    const toast=await this.toasctrl.create({
      message: a,
      duration: 2000
    });
    toast.present();
  }

    async presentAlertConfirm(a){
      const alert=await this.alertctrl.create({
        header: a,
        backdropDismiss: false,
        buttons: [
          {
            text:'Cancel',
            handler: (blah)=>{
              console.log('confirm cancle: blah');
            }
          },{
            text: 'Try Again',
            handler: ()=>{
              this.tryLogin();
            }
          }
        ]
      });
      await alert.present();
    }
}


