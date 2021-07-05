import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8083/customers/';

  constructor(private httpClient: HttpClient) { }

  //List Customer records to admin
  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}` + 'getAll');
  }

  //add new Customer (in Admin dashboard - customer records)
  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'save', customer);
  }
  //view Customer records (in Admin dashboard - customer records)

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}` + `/getById/${id}`);
  }
  //view Customer records (in Admin dashboard - customer records)

  viewCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}` + `/getById/${id}`);
  }
}
