import {Component, OnDestroy, OnInit} from '@angular/core';
import {Products} from "../products";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  imageWidth: number = 50;
  showImage: boolean = true;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Products[] = [];
  products: Products[] = [];

  constructor(private productService: ProductService) {
  }

  performFilter(filterBy: string): Products[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: Products) =>
      products.productName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
