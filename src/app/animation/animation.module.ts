import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
  declarations: [
    AnimationComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    MatCheckboxModule,
    MatProgressBarModule,


  ]
})
export class AnimationModule { }
