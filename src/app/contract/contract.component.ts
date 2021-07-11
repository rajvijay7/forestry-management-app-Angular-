import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {


  contracts: Contract []=[];
  searchContract: string ="";
  constructor(private contractService: ContractService,private router: Router) { }

  ngOnInit(): void {
    this.getContracts();
  }


  getContracts(){
    this.contractService.getContractList().subscribe(data => { this.contracts = data, console.log(data) });
  }

  alert() {
    alert("one Contract added");
  }

  updateContract(id: number) {
    this.router.navigate(['/update-contract', id]);
  }

  deleteContract(id: number) {
    this.contractService.deleteContract(id).subscribe(data => {
      console.log(data),
        alert("Delete this Contract?");
      this.getContracts();
    }, error => console.log(console.error))
  }

}
