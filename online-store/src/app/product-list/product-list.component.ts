import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports:[CommonModule]
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 500000,
      rating: 3.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'

    },

    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 6700000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'

    },

    {
      id: 3,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 323000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'

    },

    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 726000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'

    },

    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Современный смартфон Samsung с отличной камерой.',
      price: 66000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pd7/61291246.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p44/pd7/61291245.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000'

    },

    {
      id: 6,
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 349000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'

    },

    {
      id: 7,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 448000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'

    },

    {
      id: 8,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Современный смартфон Redmi с отличной камерой.',
      price: 49000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'

    },

    {
      id: 9,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 867000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000'

    },

    {
      id: 10,
      name: 'Смартфон Apple iPhone 16 128Gb фиолетовый',
      description: 'Современный смартфон Apple с отличной камерой.',
      price: 444000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h4f/87295472074782.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000'

    },





  ]

  roundRating(rating: number): number {
    return Math.round(rating);

  }

  getWhatsAppLink(product: Product): string {
    return `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + product.link)}`;
  }

  getTelegramLink(product: Product): string {
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
  }

}
