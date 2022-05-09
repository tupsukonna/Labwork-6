import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async saveSettings() {
    const alert = await this.alertController.create({
      header: 'Settings Saved',
      message: 'It may take 2-6 hours for changes to take place',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
