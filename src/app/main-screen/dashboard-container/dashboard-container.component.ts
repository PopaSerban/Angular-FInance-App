import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  public welcomeText:string = 'Please update you"r personal information before continuing, by pressing the below button or by going to profile icon, edit tab'
  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.router.navigate(['/editProfile']);
  }
}
