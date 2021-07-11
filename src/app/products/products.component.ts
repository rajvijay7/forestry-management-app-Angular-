import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  // product: Product = new Product();
  cart: Cart = new Cart();
  quantity: any = [];
  // name: string = "";
  searchProduct: string = "";
  // message = '';
  errorMessage: Product = new Product;


  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  logout() {
    this.router.navigate(['/logoutcomponent']);
  }

  getProducts() {
    this.productService.getProductList().subscribe(data => {                                               //this method getProductList will return observable object
      this.products = data,
        console.log(data)
    }, error => {
      console.log(error);
    }
    );
  }

  alert() {
    alert("one product added to cart");
  }



  addToCart(i: any) {
    console.log(this.products[i])

    this.cart.cart_item = this.products[i].name;

    this.cart.price = this.products[i].price;

    this.cart.quantity = "1";

    console.log(this.cart)

    this.cartService.addToCart(this.cart).subscribe(data => {
      console.log(data);
      alert("one product added to cart");
      // this.updateQuantity(i, this.product.quantity[i]);
    })
  }


  // updateQuantity(i: any ,quantity: any){
  //   this.product = this.products[i];
  //   this.product.quantity = quantity;
  //   this.product.quantity=  parseInt(this.product.quantity) - 1;
  //   this.productService.UpdateProduct(this.product).subscribe(data => {
  //   }, error => console.log(error));
  // }






}





///////filter




// viewCustomerById(id: number) {
//   this.customerService.getCustomerById(id).subscribe(data => {
//     console.log(data), this.getCustomers();
//     this.router.navigate(['/customer-details', id]);
//   },)

// }
