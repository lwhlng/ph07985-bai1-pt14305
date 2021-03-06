import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product) {
    this.selected = product;
  }
  getProducts() {
    this.products = this.productService.getProducts();
  }
}
