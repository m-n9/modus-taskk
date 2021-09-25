import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ProductListDataService } from "src/app/services/products-list.service";

@Component({
  selector: "app-store-main",
  templateUrl: "./store-main.component.html",
  styleUrls: ["./store-main.component.scss"]
})
export class StoreMainComponent implements OnInit {
  productList: Product;
  constructor(public productData: ProductListDataService) {}
  ngOnInit() {
    this.productList = this.productData.productsList;
    console.log("ProductList", this.productList);
  }
}
