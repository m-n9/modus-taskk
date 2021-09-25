import { Component, OnInit } from "@angular/core";
import { ProductListDataService } from "../services/products-list.service";

@Component({
  selector: "app-store-component",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  constructor(private productData: ProductListDataService){

  }
  imgUrl: string = "/assets/images/";
  ngOnInit(){
    this.productData.fetchProductsList();
  }
}
