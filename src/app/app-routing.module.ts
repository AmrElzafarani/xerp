import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((_) => _.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((_) => _.LayoutModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }
