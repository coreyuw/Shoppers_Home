import { Product } from './../models/products';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-example',
  templateUrl: './admin-example.component.html',
  styleUrls: ['./admin-example.component.css']
})
export class AdminExampleComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }
}
