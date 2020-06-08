import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.css']
})
export class AppCartComponent implements OnInit {
  items
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
   this.items = this.cartService.getItems();
  }

}