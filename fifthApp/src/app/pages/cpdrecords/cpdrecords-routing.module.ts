import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPDrecordsPage } from './cpdrecords.page';

const routes: Routes = [
  {
    path: '',
    component: CPDrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPDrecordsPageRoutingModule {}
