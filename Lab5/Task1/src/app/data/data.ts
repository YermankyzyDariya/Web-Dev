import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const products: Product[] = [
// Smartphones
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy S25',
    price: 650000,
    description: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: ' Apple iPhone 14',
    price: 520000,
    description: 'Смартфон Apple iPhone 14 128Gb черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'iPhone 17 Pro Max ',
    price: 280000,
    description: 'Смартфон Apple iPhone 17 Pro Max 256Gb Dual eSim серебристый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pbf/p65/74063487.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-dual-esim-serebristyi-148425910/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Samsung Galaxy A54',
    price: 210000,
    description: 'Mid-range Samsung smartphone',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'Poco X7 Pro ',
    price: 470000,
    description: 'Смартфон Poco X7 Pro 12 ГБ/512 ГБ черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000',
    likes: 0,
    categoryId: 1
  },
//   Laptops
  {
    id: 6,
    name: 'Apple MacBook Air 13 ',
    price: 750000,
    description: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: ' ELERON SmartBook 15.6',
    price: 480000,
    description: 'Gaming laptop',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p2e/77613207.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/eleron-smartbook-15-6-8-gb-m-2-256-gb-win-11-s-pf01r-03t-148407823/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'HP Pavilion 15',
    price: 320000,
    description: 'HP everyday laptop',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Lenovo IdeaPad 3',
    price: 290000,
    description: 'Affordable Lenovo laptop',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'HYDRA Home H20 15.6',
    price: 310000,
    description: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
    likes: 0,
    categoryId: 2
  },
    
// Headphones
  {
    id: 11,
    name: ' GERLAX GH-34',
    price: 150000,
    description: 'Наушники GERLAX GH-34 черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'HYDRA Home Minor ',
    price: 210000,
    description: 'Наушники HYDRA Home Minor бежевый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: ' Apple AirPods 4',
    price: 120000,
    description: 'Наушники Apple AirPods 4 белый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'JASPER JS70 ',
    price: 45000,
    description: 'Наушники JASPER JS70 бежевый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Apple AirPods Pro ',
    price: 95000,
    description: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    likes: 0,
    categoryId: 3
  },


// Tablets
  {
    id: 16,
    name: ' Apple iPad A16',
    price: 330000,
    description: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Xiaomi Redmi Pad 2',
    price: 420000,
    description: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб серый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: ' Huawei MatePad SE ',
    price: 210000,
    description: 'Планшет Huawei MatePad SE AGS6-W09 11 дюйм 4 Гб/128 Гб серый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-4-gb-128-gb-seryi-122142602/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: ' Apple iPad Air 11',
    price: 150000,
    description: 'Планшет Apple iPad Air 11 2025 Wi-Fi 11 дюйм 8 Гб/128 Гб фиолетовый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Teclast P50 2025',
    price: 260000,
    description: 'Планшет Teclast P50 2025 11 дюйм 8 Гб/128 Гб голубой + подарок',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p84/44446056.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/teclast-p50-2025-11-djuim-8-gb-128-gb-goluboi-podarok-140264375/?c=750000000',
    likes: 0,
    categoryId: 4
  }
    
];
    