import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPDrecordsPageRoutingModule } from './cpdrecords-routing.module';

import { CPDrecordsPage } from './cpdrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPDrecordsPageRoutingModule
  ],
  declarations: [CPDrecordsPage]
})
export class CPDrecordsPageModule {}
