import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductServices {
  public baseUrl = environment.apiURL;
  constructor(private http: HttpClient) {}

  //To fetch Product list//
  fetchProducts() {
    return this.http.get(this.baseUrl);
  }
}
