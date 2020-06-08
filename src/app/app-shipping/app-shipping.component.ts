import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-app-shipping',
  templateUrl: './app-shipping.component.html',
  styleUrls: ['./app-shipping.component.css']
})
export class AppShippingComponent implements OnInit {
  shippingCosts
  constructor(
  private cartService:CartService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices;
  }

}