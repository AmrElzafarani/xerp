import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { ShortListComponent } from './recruitment/short-list/short-list.component';


@NgModule({
  declarations: [
    ShortListComponent
  ],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  
})
export class HumanResourcesModule { }
