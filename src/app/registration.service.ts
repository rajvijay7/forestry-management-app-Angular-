import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:8083/registration/';

  public loginUserFromRemote(login: Login): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8083/registration/login", login)
  }


  //List All  Customers in admin dashBoard
  getCustomerList(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8083/registration/getAll");
  }


  getCustomerById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}` + `/getById/${id}`);
  }




  public registerUser(user: User): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8083/registration/registration", user)
  }


  getByEmailId(emailId: String): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8083/registration/user/${emailId}`);
  }


  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8083/registration/delete/${id}`)
  }





}
