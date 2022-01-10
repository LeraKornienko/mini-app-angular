import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycvComponent } from './mycv.component';

const routes: Routes = [{ path: '', component: MycvComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycvRoutingModule { }
