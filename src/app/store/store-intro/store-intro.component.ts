import { Component, OnInit } from "@angular/core";
import { ProductListDataService } from "src/app/services/products-list.service";
import { Product } from "src/app/models/product";
@Component({
  selector: "app-store-intro",
  templateUrl: "./store-intro.component.html",
  styleUrls: ["./store-intro.component.scss"]
})
export class StoreIntroComponent implements OnInit {
  constructor(public productData: ProductListDataService) {}
  ngOnInit() {
    this.productData.fetchProductsList();
  }
}
