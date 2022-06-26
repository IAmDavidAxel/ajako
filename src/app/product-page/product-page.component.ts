import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  ReviewForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    review: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
