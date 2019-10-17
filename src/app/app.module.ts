import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NextComponent } from './components/next/next.component';
import { NavComponent } from './components/nav/nav.component';
import { TestService } from './test.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    CartComponent,
    ShopComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
