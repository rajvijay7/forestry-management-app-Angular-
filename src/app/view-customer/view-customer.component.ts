import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})

export class ViewCustomerComponent implements OnInit {

  id: number = 0;
  user: User = new User();
  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) { }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.registrationService.getCustomerById(this.id).subscribe(data => {
      this.user = data; console.log(data);
    },
    );
  }
  itemImageUrl = '../assets/5.jpg';


}
