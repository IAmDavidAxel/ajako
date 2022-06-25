import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductCreationForm: FormGroup = new FormGroup(
    {
      name:  new FormControl('', [Validators.required]),
      category :  new FormControl('', [Validators.required]),
      price:  new FormControl('', [Validators.required]),
      description:  new FormControl('', [Validators.required]),
      quantity:  new FormControl('', [Validators.required]),
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
