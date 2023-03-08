import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './personal/documentation/documentation.component';
import { EmployeeListComponent } from './personal/employee-list/employee-list.component';
import { EmploymentInfoComponent } from './personal/employment-info/employment-info.component';
import { FinancialInfoComponent } from './personal/financial-info/financial-info.component';
import { JobPostComponent } from './recruitment/job-post/job-post.component';
import { OpenVacanciesComponent } from './recruitment/open-vacancies/open-vacancies.component';
import { ShortListComponent } from './recruitment/short-list/short-list.component';

const routes: Routes = [
  {
    path: "recruitment/short-list",
    component: ShortListComponent
  },
  {
    path: "recruitment/open-vacancies",
    component: OpenVacanciesComponent
  },
  {
    path: "recruitment/job-post",
    component: JobPostComponent
  },
  {
    path: "personal/documentation",
    component: DocumentationComponent
  },
  {
    path: "personal/employee-list",
    component: EmployeeListComponent
  },
  {
    path: "personal/employment-info",
    component: EmploymentInfoComponent
  },
  {
    path: "personal/financial-info",
    component: FinancialInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
