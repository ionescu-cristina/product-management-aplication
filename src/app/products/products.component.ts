import {Component, OnInit} from '@angular/core';
import {products, Products} from "../products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Products';
  imageWidth: number = 50;
  showImage:boolean =  false;
  listFilter: string = 'cart';
  products: Products[] = products;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
