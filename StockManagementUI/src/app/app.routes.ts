import { Routes } from '@angular/router';
import { ProductComponent } from './platform/products/products.component';
import { ProductCreateComponent } from './platform/products/product-create/product-create.component';
import { ProductViewComponent } from './platform/products/product-view/product-view.component';
import { ProductUpdateComponent } from './platform/products/product-update/product-update.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './core/authGaurd';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './platform/dashboard/dashboard.component';
import { RegisterComponent } from './authentication/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'platform',
        canActivate: [AuthGuard],
        component: PlatformComponent,
        children: [
            {
                path: 'products', children: [
                    { path: '', component: ProductComponent },
                    { path: 'create', component: ProductCreateComponent },
                    { path: 'edit/:id', component: ProductUpdateComponent },
                    { path: ':id', component: ProductViewComponent }
                ]
            },
            { path: 'dashboard', component: DashboardComponent}
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } // Of een mooie 404 pagina hier toevoegen
];
