import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products: Product[] =[];

  searchProduct: string = "";
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }


  private getProducts() {
    this.productService.getProductList().subscribe(data => {
       this.products = data,
        console.log(data) },
        error => {
          console.log(error)
        }
        );
  }


  updateProduct(id: number) {
    this.router.navigate(['/update-product', id]);
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data),
        alert("Delete this product?");
      this.getProducts();
    }, error => {console.log(error)})
  }





}
