import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyblogsPage } from './myblogs.page';

const routes: Routes = [
  {
    path: '',
    component: MyblogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyblogsPageRoutingModule {}
