import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProductListComponent} from './app/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
.catch((err: any) => console.error(err));



