import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreMainComponent } from "./store-main/store-main.component";
import { StoreIntroComponent } from "./store-intro/store-intro.component";
import { StoreComponent } from "./store.component";
import { ProductCardComponent } from "src/app/shared/product-card/product-card.component";
const routes: Routes = [
  {
    path: "",
    component: StoreComponent,
    children: [
      { path: "", component: StoreIntroComponent },
      { path: "products", component: StoreMainComponent }
    ]
  }
];
@NgModule({
  declarations: [
    StoreComponent,
    StoreMainComponent,
    StoreIntroComponent,
    ProductCardComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class StoreModule {}
