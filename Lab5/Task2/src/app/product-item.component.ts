import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display:flex; border:1px solid #ccc; padding:10px; margin-bottom:10px; gap:10px; align-items:center;">
      
      <img [src]="product.image" alt="{{ product.name }}" width="120" height="120" *ngIf="product.image; else noImage">

      <ng-template #noImage>
        <div style="width:120px; height:120px; background:#eee; display:flex; align-items:center; justify-content:center;">
          No Image
        </div>
      </ng-template>

      <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }} KZT</p>
        <p>Likes: {{ product.likes }}</p>
        <button (click)="like()">Like 👍</button>
        <button (click)="deleteProductItem()">Delete 🗑️</button>
       <a [href]="'https://wa.me/?text=' + encodeUrl(product.link)" target="_blank">Share WhatsApp</a>
       <a [href]="'https://t.me/share/url?url=' + encodeUrl(product.link)" target="_blank">Share Telegram</a>

      </div>

    </div>
  `
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<Product>();

  like() {
    this.product.likes++;
  }
  encodeUrl(url: string): string {
    return encodeURIComponent(url);
  }
  

  deleteProductItem() {
    this.delete.emit(this.product);
  }
}
