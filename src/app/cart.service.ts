import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  providedIn: 'root'
  constructor(
    private http: HttpClient
  ) { }

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  clearItem() {
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('./assets/shipping.json')
  }
}