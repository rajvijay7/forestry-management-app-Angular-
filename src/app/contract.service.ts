import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseURL = 'http://localhost:8083/contracts/';

  constructor(private httpClient: HttpClient) { }

    //List Contracts to admin
    getContractList(): Observable<Contract[]> {
      return this.httpClient.get<Contract[]>(`${this.baseURL}` + 'getAll');
    }


 //add new Contract (in Admin dashboard - Contracts)
 addContract(contract: Contract): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}` + 'save', contract);
}


  //get COntract  by id (for Update a particular contract)
  getContractById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${this.baseURL}` + `/getById/${id}`);
  }


  //Update a contract(in admin Dashboard contract )
  UpdateContract(contract: Contract): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + `/update`, contract);
  }


  //delete a contract
  deleteContract(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }




}
