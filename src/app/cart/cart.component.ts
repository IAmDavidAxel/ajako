import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Products} from "../model/Products";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private  cartService: CartService,
              private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    let items = this.cartService.getItems();
  }

}
