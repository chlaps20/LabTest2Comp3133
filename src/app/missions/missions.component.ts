import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  launchYears = ['2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033',]
  missions = [];

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.appService.getAllLaunches()
    .subscribe((response: any) => {
      console.log(response)
      this.missions = response;
    }, err => {
      console.log(err)
    })
  }

}
