
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
    // Загружаем категории из сервиса
    this.categories = this.productService.getCategories();
  }

  // Выбираем категорию
  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.productsInSelectedCategory = this.productService.getProductsByCategory(cat.id);
  }

  // Удаляем продукт из списка
  removeProduct(product: Product) {
    this.productsInSelectedCategory = this.productsInSelectedCategory.filter(p => p.id !== product.id);
  }
}
