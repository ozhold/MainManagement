import { Routes } from '@angular/router';
import { ProductComponent } from './platform/products/products.component';
import { ProductCreateComponent } from './platform/products/product-create/product-create.component';
import { ProductViewComponent } from './platform/products/product-view/product-view.component';
import { ProductUpdateComponent } from './platform/products/product-update/product-update.component';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'platform/products', component: ProductComponent },
    { path: 'platform/products/create', component: ProductCreateComponent },
    { path: 'platform/products/edit/:id', component: ProductUpdateComponent },
    { path: 'platform/products/:id', component: ProductViewComponent },
];
