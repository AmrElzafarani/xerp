import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent {

  items = [
    {
      name: "Human Resources",
      icon: "fa fa-users",
      firstChild: [
        { name: "Dashboard", path: "/dashboard", },
        {
          name: "Recruitment",
          secondChild: [
            { name: "Short List", path: "/HR/recruitment/short-list" },
            { name: "Open Vacancies", path: "/HR/recruitment/open-vacancies" },
            { name: "Job Post", path: "/HR/recruitment/job-post" },
            {
              name: "Applicants",
              thirdChild: [
                { name: "Application Form", path: "/HR/applicants/application-form" },
                { name: "Personal Info", path: "/HR/applicants/personal-info" },
                { name: "Educational Info", path: "/HR/applicants/educational-info" },
                { name: "Trainings", path: "/HR/applicants/trainings" },
                { name: "Work Experiences", path: "/HR/applicants/work-experiences" },
                { name: "Medical History", path: "/HR/applicants/medical-history" },
              ]
            },
            {
              name: "Interviews",
              thirdChild: [
                { name: "HR Evaluations", path: "/HR/interviews/hr-evaluations" },
                { name: "Technical Evaluations", path: "/HR/interviews/technical-tvaluations" },
                { name: "Job Offers", path: "/HR/interviews/job-offers" },
                { name: "Medical Examinations", path: "/HR/interviews/medical-examinations" },
                { name: "Decisions", path: "/HR/interviews/decisions" },

              ]
            },
            { name: "Hiring", path: "/HR/interviews/hiring" },

          ]
        },
        {
          name: "Personal",
          secondChild: [
            { name: "Employment Info", path: "/HR/personal/employment-info" },
            { name: "Documentation", path: "/HR/personal/documentation" },
            { name: "Employee List", path: "/HR/personal/employee-list" },
            { name: "Financial Info", path: "/HR/personal/financial-info" },
          ]
        },
        {
          name: "Payroll",
          secondChild: [
            { name: "Attendance Sheet", path: "/HR/payroll/attendance-sheet" },
          ]
        }
      ]
    },
    {
      name: "Administrations",
      icon: "fa fa-people-roof",
      firstChild: [
        { name: "Users", path: "/users" },
        { name: "Roles", path: "/roles" }
      ]
    },
    { name: "Finance", icon: "icon" },
    { name: "Legal Affairs", icon: "icon" },
    { name: "Project Managment", icon: "icon" },
    { name: "Technical Office", icon: "icon" },
    { name: "Concrete", icon: "icon" },
    { name: "Asphalt", icon: "icon" },
    { name: "Laboratories", icon: "icon" },
    { name: "information Technology", icon: "icon" }
  ];

}
