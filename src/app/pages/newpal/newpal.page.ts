import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newpal',
  templateUrl: './newpal.page.html',
  styleUrls: ['./newpal.page.scss'],
})
export class NewpalPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async takePalRequest() {
    const alert = await this.alertController.create({
      header: 'Request taken',
      message: 'We will find you a new pal within 24 hours',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
