import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pal1PageRoutingModule } from './pal1-routing.module';

import { Pal1Page } from './pal1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pal1PageRoutingModule
  ],
  declarations: [Pal1Page]
})
export class Pal1PageModule {}
