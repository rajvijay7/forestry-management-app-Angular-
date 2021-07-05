import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : Order[] | undefined;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.orderService.listOrders().subscribe(data => { this.orders = data, console.log(data) });
  }


}
