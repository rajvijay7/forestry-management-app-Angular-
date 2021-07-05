import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  name: string="";
  products: Product = new Product();
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    this.productService.getProductByName(this.name).subscribe(data => {
      this.products = data; console.log(data);
    },
    );
  }


  alert(){
    alert("one product added to cart");
}



}
