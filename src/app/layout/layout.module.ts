import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,


  ],
  exports: [
    DashboardComponent
  ]
})
export class LayoutModule { }
