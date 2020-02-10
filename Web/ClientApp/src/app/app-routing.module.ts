// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './themes/layout/base/base.component';
import { ErrorPageComponent } from './themes/layout/content/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
        data: {
            horizonalMenuName: 'home'
        }
    },
    // ถ้าอยากได้ layout มากกว่า 1 ให้เพิ่มอีก object และให้ path เป็น '' ได้
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                data: {
                    horizonalMenuName: 'default'
                }
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
                data: {
                    horizonalMenuName: 'home'
                }
            },
        ]
    },
    {
        path: '**',
        component: ErrorPageComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
