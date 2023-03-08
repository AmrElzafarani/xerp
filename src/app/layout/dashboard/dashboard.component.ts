import { Component, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  sideBarOpen = true;
  mode: any;
  showToggle!: string;

  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav!: MatSidenav;

  ngOnInit() {
    this.getScreenWidth().subscribe((width: number) => {
      if (width <= 640) {
        this.mode = 'over';
        this.sideBarOpen = false;
      }
      else if (width > 640) {
        this.mode = 'side';
        this.sideBarOpen = true;
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
