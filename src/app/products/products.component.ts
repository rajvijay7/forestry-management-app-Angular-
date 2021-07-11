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
  cart: Cart = new Cart();                // for add to cart
  quantity: any = [];
  product: Product = new Product();
  searchProduct: string = "";             //for filter pipe
  message = '';
  errorMessage: Product = new Product;     //for validation


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



       this.updateQuantity(this.products[i].quantity,i);
    })
  }


  updateQuantity(value: any,i:any){

     this.product.quantity =  value - 1;
     this.product.name = this.products[i].name;
     this.product.description = this.products[i].description;
     this.product.price = this.products[i].price;
     this.product.id = this.products[i].id;
     console.log(this.product);

     this.productService.UpdateProduct(this.product).subscribe(data => {
     }, error => console.log(error));
   }






}
