import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  itemImageUrl = '../assets/orders.jpg';
  itemImageUrl1 = '../assets/contracts.jpg';
}
