import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NextComponent } from './components/next/next.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'next', component: NextComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'book', component: BookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
