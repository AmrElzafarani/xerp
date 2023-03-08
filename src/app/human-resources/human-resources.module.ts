import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { ShortListComponent } from './recruitment/short-list/short-list.component';
import { OpenVacanciesComponent } from './recruitment/open-vacancies/open-vacancies.component';
import { JobPostComponent } from './recruitment/job-post/job-post.component';
import { EmploymentInfoComponent } from './personal/employment-info/employment-info.component';
import { DocumentationComponent } from './personal/documentation/documentation.component';
import { EmployeeListComponent } from './personal/employee-list/employee-list.component';
import { FinancialInfoComponent } from './personal/financial-info/financial-info.component';


@NgModule({
  declarations: [
    ShortListComponent,
    OpenVacanciesComponent,
    JobPostComponent,
    EmploymentInfoComponent,
    DocumentationComponent,
    EmployeeListComponent,
    FinancialInfoComponent
  ],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  
})
export class HumanResourcesModule { }
