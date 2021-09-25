import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreMainComponent } from "./store-main/store-main.component";
import { StoreIntroComponent } from "./store-intro/store-intro.component";
import { StoreComponent } from "./store.component";
import { ProductCardComponent } from "src/app/shared/product-card/product-card.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchPipe } from "../pipes/product-search.pipe";

const routes: Routes = [
  {
    path: "",
    component: StoreComponent,
    children: [
      { path: "", component: StoreIntroComponent },
      { path: "products", component: StoreMainComponent },
      { path: "product/:id", component: ProductDetailComponent}
    ]
  }
];
@NgModule({
  declarations: [
    StoreComponent,
    StoreMainComponent,
    StoreIntroComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductSearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class StoreModule {}
