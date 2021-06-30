import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  addForm!: NgForm;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product;
  }

  onSubmit() {
    console.log('inside onsubmit method..')
    this.saveProduct(this.addForm);
  }


  saveProduct(addForm: NgForm) {
    this.productService.createProduct(this.product).subscribe(data => { console.log(data);
      alert("one new product added");
      this.navigateToProducts(); },
     (error: HttpErrorResponse) => { console.log(error); alert(error.message);addForm.reset();})

  }


  navigateToProducts() {
    this.router.navigate(['/maintain-products']);
  }


}
