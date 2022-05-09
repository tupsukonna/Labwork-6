import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pal2PageRoutingModule } from './pal2-routing.module';

import { Pal2Page } from './pal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pal2PageRoutingModule
  ],
  declarations: [Pal2Page]
})
export class Pal2PageModule {}
