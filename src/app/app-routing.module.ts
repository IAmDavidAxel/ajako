import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProfileComponent} from "./profile/profile.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login/signUp', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add-Product',component: AddProductComponent},
  {path: 'shop/product-description', component: ProductPageComponent},
  {path: 'shop/product-description/checkout', component: CheckoutComponent},
  {path: 'home/product-description', component: ProductPageComponent},
  {path: 'home/product-description/checkout', component: CheckoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
