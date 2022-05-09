import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pal1Page } from './pal1.page';

const routes: Routes = [
  {
    path: '',
    component: Pal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pal1PageRoutingModule {}
