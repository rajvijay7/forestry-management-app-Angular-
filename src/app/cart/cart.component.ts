import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[] = [];

  quantity = [];

  totalPrice: number = 0;



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  private getCartItems() {
    this.cartService.listCartItems().subscribe(data => { this.carts = data, console.log(data) });
  }


  calculate(i: any) {

    this.totalPrice = parseInt(this.carts[i].price) * parseInt(this.quantity[i]);
  }







  // public getTotalAmount(): Observable<number> {
  //   return this.itemsInCartSubject.map((items: Product[]) => {
  //     return items.reduce((prev, curr: Product) => {
  //       return prev + curr.price;
  //     }, 0);
  //   });
  // }












  deleteCartItem(id: number) {
    this.cartService.deleteCartItem(id).subscribe(data => {
      console.log(data),
        alert("DO YOU WANT TO REMOVE THIS ITEM FROM CART?");
      this.getCartItems();
    }, error => console.log(console.error))
  }


  placeOrder() {


  }
}
