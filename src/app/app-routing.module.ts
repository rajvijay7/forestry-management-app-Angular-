import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ContractService } from './contract.service';
import { ContractComponent } from './contract/contract.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaintainProductsComponent } from './maintain-products/maintain-products.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ThanksMessageComponent } from './thanks-message/thanks-message.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'customer-info', component: CustomerInfoComponent},
  { path: 'thanks-message', component: ThanksMessageComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'maintain-products', component: MaintainProductsComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'scheduler', component: SchedulerComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'land', component: LandComponent},
  { path: 'cart', component: CartComponent},
  { path: 'customer-list', component: CustomerListComponent},
  { path: 'add-customer', component: AddCustomerComponent},
  { path: 'view-customer/:id', component: ViewCustomerComponent},
  { path: 'orders', component: OrderComponent},
  { path:'',component: LoginComponent},
  { path: 'products/:emailId',component:ProductsComponent},
  { path: 'registration',component:RegistrationComponent},
  { path: 'logoutcomponent',component:LogoutComponent},
  { path: 'contracts',component:ContractComponent},
  { path: 'add-contract',component:AddContractComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
