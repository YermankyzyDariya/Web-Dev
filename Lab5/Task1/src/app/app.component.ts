import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'; 
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  likeProduct(product: Product): void {
    this.productService.likeProduct(product);
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productService.getProductsByCategory(categoryId);
  }
}
