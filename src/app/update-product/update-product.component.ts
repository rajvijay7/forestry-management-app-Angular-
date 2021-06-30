import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data; console.log(data);
    },
      error => console.log(error));

  }

  onSubmit() {
    this.productService.UpdateProduct(this.product).subscribe(data => {
      this.navigateToProducts();
    }, error => console.log(error));
    alert("Sucessfully updated the Product Detail");
  }


  navigateToProducts() {
    this.router.navigate(['/maintain-products']);
  }
}
