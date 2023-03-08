import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortListComponent } from './recruitment/short-list/short-list.component';

const routes: Routes = [
  {
    path: "short-list",
    component: ShortListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
