import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component'; 
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  productsInSelectedCategory: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.productsInSelectedCategory = this.productService.getProductsByCategory(cat.id);
  }

  removeProduct(product: Product) {
    this.productsInSelectedCategory = this.productsInSelectedCategory.filter(p => p.id !== product.id);
  }
}
