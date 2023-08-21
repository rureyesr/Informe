import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnoPage } from './ano.page';

const routes: Routes = [
  {
    path: '',
    component: AnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnoPageRoutingModule {}
