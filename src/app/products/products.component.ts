import { switchMap } from 'rxjs/operators';
import { CategoryService } from './../category.service';
import { Product } from './../models/products';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories$;
  category: string;
  filteredProducts: Product[] = [];
  // subscription: Subscription;

  constructor(productService: ProductService, categoryService: CategoryService, route: ActivatedRoute) {

    productService
      .getAll().pipe(
      switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    }))
      .subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    });

    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }
}
