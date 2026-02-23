import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from './product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div *ngIf="products.length === 0">
      <p>No products in this category.</p>
    </div>

    <div *ngFor="let product of products">
      <app-product-item 
        [product]="product"
        (delete)="onDelete($event)">
      </app-product-item>
    </div>
  `
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<Product>();

  onDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
