import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpalPage } from './newpal.page';

const routes: Routes = [
  {
    path: '',
    component: NewpalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpalPageRoutingModule {}
