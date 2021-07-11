import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private registerationService: RegistrationService, private router: Router) { }

  users: User[] | undefined;
  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.registerationService.getCustomerList().subscribe(data => { this.users = data, console.log(data)});
  }

  viewCustomerById(id: number){
    this.registerationService.getCustomerById(id).subscribe(data => {
      console.log(data),
      this.getCustomers();
      this.router.navigate(['/view-customer',id]);
  },)
  }



}
