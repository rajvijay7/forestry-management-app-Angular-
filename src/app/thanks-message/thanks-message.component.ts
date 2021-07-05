import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks-message',
  templateUrl: './thanks-message.component.html',
  styleUrls: ['./thanks-message.component.css']
})
export class ThanksMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemImageUrl = '../assets/2.jpg';

}
