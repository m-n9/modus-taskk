import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductServices } from "./products-api.service";

@Injectable({
  providedIn: "root"
})
export class ProductListDataService {
  constructor(private http: HttpClient, private productApi: ProductServices) {}
  productsList;
  fetchProductsList() {
    this.productApi.fetchProducts().subscribe(
      (data: any) => {
        this.productsList = data;
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
  }
}
