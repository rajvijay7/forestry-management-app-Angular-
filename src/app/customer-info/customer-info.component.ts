import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer = new Customer();
  addForm!: NgForm;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customer;
  }

  onSubmit(){

    this.saveCustomer(this.addForm);

  }


  saveCustomer(addForm: NgForm) {
    this.customerService.createCustomer(this.customer).subscribe(data => { console.log(data);
      alert("one new customer added");
      // this.navigateToCustomers();
    },
     (error: HttpErrorResponse) => { console.log(error); alert(error.message);addForm.reset();})

  }

}
