import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.page.html',
  styleUrls: ['./forgotpw.page.scss'],
})
export class ForgotpwPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async recoverPassword() {
    const alert = await this.alertController.create({
      header: 'Check Your Email',
      message: 'We have sent a recovery link to your email',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
