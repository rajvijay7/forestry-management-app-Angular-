import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { ContractComponent } from '../contract/contract.component';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  contracts: Contract = new Contract;
  isSuccessful = false;
  isAddContractFailed = false;
  errorMessage:Contract = new Contract;
  addForm!: NgForm;
  constructor(private contractService: ContractService,private router: Router) { }

  ngOnInit(): void {
    this.contracts;
  }


  onSubmit() {
    console.log('inside onsubmit method..')
    this.saveContract(this.addForm);
  }


  saveContract(addForm: NgForm) {
    this.contractService.addContract(this.contracts).subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.isAddContractFailed = false;
      if(this.isSuccessful){
      this.navigateToContracts();
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
        this.errorMessage=error.error;
        this.isAddContractFailed = true;
        addForm.reset(); })

  }

  navigateToContracts(){
    this.router.navigate(['/contracts']);
  }

}
