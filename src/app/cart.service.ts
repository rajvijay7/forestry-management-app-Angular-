import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseURL = 'http://localhost:8083/cart/';


  constructor(private httpClient: HttpClient) { }


   //add to cart
   addToCart(cart: Cart): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'save', cart);
  }


  //list the cart items
   //List Products to Customers and admin
   listCartItems(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseURL}` + 'getAll');
  }


   //delete a product
   deleteCartItem(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }


  //Update a product(in admin- grocery management)
  UpdateCart(cart: Cart): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + `/update`, cart);
  }


}
