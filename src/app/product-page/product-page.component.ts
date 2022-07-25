import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {products, Products} from "../model/Products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Products | undefined;

  ReviewForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    review: new FormControl('', [Validators.required])
  });


  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Products){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
