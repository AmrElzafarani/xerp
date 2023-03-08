import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


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
        { name: "Dashboard", route: "/dashboard", },
        {
          name: "Recruitment",
          secondChild: [
            { name: "Short List", route: "/Short-List" },
            { name: "Open Vacancies", route: "/Open-Vacancies" },
            { name: "Job Post", route: "/Job-Post" },
            {
              name: "Applicants",
              thirdChild: [
                { name: "Application Form", route: "/Application-Form" },
                { name: "Personal Info", route: "/Personal-Info" },
                { name: "Educational Info", route: "/Educational-Info" },
                { name: "Trainings", route: "/Trainings" },
                { name: "Work Experiences", route: "/Work-Experiences" },
                { name: "Medical History", route: "/Medical History" },
              ]
            },
            {
              name: "Interviews",
              thirdChild: [
                { name: "HR Evaluations", route: "/HR-Evaluations" },
                { name: "Technical Evaluations", route: "/Technical-Evaluations" },
                { name: "Decisions", route: "/Decisions" },
                { name: "Job Offers", route: "/Job Offers" },
                { name: "Medical Examinations", route: "/Medical-Examinations" },
                { name: "Contracts", route: "/Contracts" },

              ]
            }
          ]
        },
        {
          name: "Personal",
          secondChild: [
            { name: "Employment Info", route: "/Employment-Info" },
            { name: "Documentation", route: "/Documentation" },
            { name: "Employee List", route: "/Employee-List" },
            { name: "Financial Info", route: "/Financial-Info" },

          ]
        },
        {
          name: "Payroll",
          secondChild: [
            { name: "Attendance Sheet", route: "/Attendance-Sheet" },
          ]
        }
      ]
    },
    {
      name: "Administrations",
      icon: "fa fa-people-roof",
      firstChild: [
        {
          name: "Users",
          route: "/users",
        },
        {
          name: "Roles",
          route: "/roles",
        }
      ]
    },
    {
      name: "Finance",
      icon: "icon"
    },
    {
      name: "Legal Affairs",
      icon: "icon"
    },
    {
      name: "Project Managment",
      icon: "icon"
    },
    {
      name: "Technical Office",
      icon: "icon"
    },
    {
      name: "Concrete",
      icon: "icon"
    },
    {
      name: "Asphalt",
      icon: "icon"
    },
    {
      name: "Laboratories",
      icon: "icon"
    },
    {
      name: "information Technology",
      icon: "icon"
    }


  ];

}
