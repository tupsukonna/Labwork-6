import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pal2Page } from './pal2.page';

const routes: Routes = [
  {
    path: '',
    component: Pal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pal2PageRoutingModule {}
