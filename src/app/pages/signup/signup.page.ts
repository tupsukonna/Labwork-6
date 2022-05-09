import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async signUpAlert() {
    const alert = await this.alertController.create({
      header: 'Process Done',
      subHeader: 'We have received your request',
      message: 'Please check your email for final steps',
      buttons: ['OK'],
    });

    await alert.present();
  }
}


