import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Variant } from 'src/app/models/variant';
import { ProductListDataService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId;
  productItem: Product;
  selectedImage;
  selectedVariantIndex: number = 0;
  selectedVariant;
  remainingQuantity: number;
  quantityValue: number = 1;
  constructor(
    private route: ActivatedRoute,
    private productData: ProductListDataService
  ) {
    this.route.params.subscribe((params) => {
      this.productId = params["id"];
    });
  }

  ngOnInit() {
    this.getProduct();
  }
  async getProduct(){
    while(this.productData.productsList == undefined){
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    this.productItem = this.productData?.productsList.find(x=>x.id == this.productId);
    this.selectedImage = this.productItem?.images[0];
    this.selectedVariant = this.productItem?.variants[0];
    this.remainingQuantity = this.selectedVariant.quantity - this.quantityValue;
  }
  selectVariant(i, variant, qv){
    this.selectedVariantIndex = i;
    this.selectedVariant = variant;
    this.processRemainingQuantity(qv);
  }

  processRemainingQuantity(event){
    this.remainingQuantity = this.selectedVariant.quantity - event;
  }

}
