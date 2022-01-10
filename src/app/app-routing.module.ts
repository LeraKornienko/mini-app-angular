import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'mycv', loadChildren: () => import('./mycv/mycv.module').then(m => m.MycvModule) }, { path: 'animation', loadChildren: () => import('./animation/animation.module').then(m => m.AnimationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
