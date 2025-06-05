import { Routes } from '@angular/router';
import { ProductComponent } from './platform/products/products.component';
import { ProductCreateComponent } from './platform/products/product-create/product-create.component';
import { ProductViewComponent } from './platform/products/product-view/product-view.component';
import { ProductUpdateComponent } from './platform/products/product-update/product-update.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: 'products/create', component: ProductCreateComponent },
    { path: 'products/edit/:id', component: ProductUpdateComponent },
    { path: 'products/:id', component: ProductViewComponent },
];
