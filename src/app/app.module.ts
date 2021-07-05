import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ThanksMessageComponent } from './thanks-message/thanks-message.component';
import { MaintainProductsComponent } from './maintain-products/maintain-products.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LandComponent } from './land/land.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AdminComponent,
    CustomerInfoComponent,
    ThanksMessageComponent,
    MaintainProductsComponent,
    SchedulerComponent,
    AddProductComponent,
    UpdateProductComponent,
    LandComponent,
    SearchBarComponent,
    CustomerListComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  exports: [
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
