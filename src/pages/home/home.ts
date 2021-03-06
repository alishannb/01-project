import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  is_toast_shown: boolean;
  name : string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private storage: Storage) {
      for (let index = 0; index < 20; index++) {
        
        this.items.push(this.items.length);

        // set a key/value 
        storage.set('name', 'Ali Shan'); 

        // Or to get a key/value pair
        storage.get('name').then((val) => {
          this.name = val;
        });
        
      }
  } 

  doInfinite(infiniteScroll) { 

    setTimeout(() => {

      if (this.items.length > 40){
        this.FinishInfinite(infiniteScroll);
      }else {
        for (let i = 0; i <= 10; i++) {

          if (this.items.length > 40){
            this.FinishInfinite(infiniteScroll);
          } 
          this.items.push( this.items.length );
        } 
        infiniteScroll.complete();
      } 
       
     
    }, 500);
  }

  FinishInfinite(infiniteScroll){
    infiniteScroll.complete();
    this.ListFinishToast();
    this.is_toast_shown = true;
  }

  ListFinishToast() {

    if (this.is_toast_shown)
      return;

    let toast = this.toastCtrl.create({
      message: 'No more data.',
      duration: 5000
    });
    toast.present();
  }


}
