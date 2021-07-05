import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }
  customers: Customer[] | undefined;
  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomerList().subscribe(data => { this.customers = data, console.log(data)});
  }

  viewCustomerById(id: number){
    this.customerService.getCustomerById(id).subscribe(data => {
      console.log(data),
      this.getCustomers();
      this.router.navigate(['/view-customer',id]);

  },)
  }

}
