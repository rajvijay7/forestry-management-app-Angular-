import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addForm!: NgForm;
  registerUserData = new User();
  message = '';
  errorMessage: User = new User;

  isSuccessful = false;
  isSignUpFailed = false;

hide=true;
  constructor(private registerService: RegistrationService, private router: Router) { }


  ngOnInit(): void {
    this.saveCustomer;
  }


  saveCustomer() {
    this.registerService.registerUser(this.registerUserData).subscribe(data => { console.log(data);
      console.log(this.registerUserData);
        //  this.message="Registration successfull";
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      alert("one new customer added");
if(this.isSuccessful){
      this.navigateToCustomers();
}

    },
     (error: HttpErrorResponse) => { console.log(error); alert(error.message);
      console.log("error exist");
      console.log(this.registerUserData)
      this.errorMessage = error.error;
      this.isSignUpFailed = true;})

  }


  navigateToCustomers() {
    this.router.navigate(['/customer-list']);
  }


}
