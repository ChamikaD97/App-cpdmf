import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyblogsPageRoutingModule } from './myblogs-routing.module';

import { MyblogsPage } from './myblogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyblogsPageRoutingModule
  ],
  declarations: [MyblogsPage]
})
export class MyblogsPageModule {}
