import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  imgUrl: string = "/assets/images/";
  ngOnInit() {}
}
