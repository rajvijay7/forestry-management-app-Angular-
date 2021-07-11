import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks-message',
  templateUrl: './thanks-message.component.html',
  styleUrls: ['./thanks-message.component.css']
})
export class ThanksMessageComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  itemImageUrl = '../assets/2.jpg';


  logout() {
    this.router.navigate(['/logoutcomponent'])
}



}
