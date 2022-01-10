import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycvRoutingModule } from './mycv-routing.module';
import { MycvComponent } from './mycv.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MycvComponent
  ],
  imports: [
    CommonModule,
    MycvRoutingModule,
    FlexLayoutModule
  ]
})
export class MycvModule { }
