import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpalPageRoutingModule } from './newpal-routing.module';

import { NewpalPage } from './newpal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpalPageRoutingModule
  ],
  declarations: [NewpalPage]
})
export class NewpalPageModule {}
