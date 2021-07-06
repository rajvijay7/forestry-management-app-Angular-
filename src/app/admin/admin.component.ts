import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }


  itemImageUrl = '../assets/1.jfif';
  itemImageUrl1 = '../assets/4.jpg';
  itemImageUrl2 = '../assets/2.jfif';
  ngOnInit(): void {
  }

}
