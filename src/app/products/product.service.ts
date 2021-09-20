import {Injectable} from "@angular/core";
import {Products} from "../products";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products.products.json';

  constructor(private http:HttpClient){}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productUrl);
  }

}
