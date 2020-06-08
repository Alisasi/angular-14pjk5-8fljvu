import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-app-product-details',
  templateUrl: './app-product-details.component.html',
  styleUrls: ['./app-product-details.component.css']
})
export class AppProductDetailsComponent implements OnInit {
  product
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}