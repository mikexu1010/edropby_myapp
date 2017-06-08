import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashstate: String;
  formstate: String;

  startpoint: String;
  destination: String;

  constructor() { }

  ngOnInit() {
    this.dashstate = '1';
    this.formstate = '1';
  }

  dashchange(pram){
    
    switch(pram){
      case 1:
      this.dashstate = "1";
      break;

      case 2:
      this.dashstate = "2";
      break;

      case 3:
      this.dashstate = "3";
      break;

      default:
      console.log("err...");
      break;
    }
  }

  goTo(pram){
    switch(pram){
      case 1:
      this.formstate = "1";
      break;

      case 2:
      this.formstate = "2";
      break;

      case 3:
      this.formstate = "3";
      break;

      case 4:
      this.formstate = "4";
      break;

      default:
      console.log("err...");
    }
  }

}
