import { Injectable } from '@angular/core';
import { categories, products } from './data/data';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return categories;
  }

  getProducts(): Product[] {
    return products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(product: Product): void {
    product.likes++;
  }
}
