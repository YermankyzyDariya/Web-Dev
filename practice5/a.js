import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})




export class ProductCardComponent {
    // @Input() product: any;
    // @Output() delete = new EventEmitter<number>();
    //Output() likes = new EventEmitter<number>();

    likes = 0;

    Likes(){
        likes++;
        this.likes.emit(this.product.id)
    }

    Ondelete(){
        this.delete.emit(this.product.id);
    }
}