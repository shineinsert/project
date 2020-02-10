import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../../themes/layout/theme.module';
import { HomeIndexComponent } from './home-index/home-index.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
    {
        path: '',
		redirectTo: 'customerlist',
        pathMatch: 'full'
    },
    {
		path: 'customerlist',
		component: HomeIndexComponent,
	
	},
	{
		path: 'customer/:id',
		component: CustomerDetailComponent,
	
	},
];


@NgModule({
    declarations: [
		HomeIndexComponent,
		CustomerDetailComponent
    ],
    imports: [
        ThemeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        RouterModule.forChild(routes),
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
		TranslateModule.forChild(),
		NgbModule
	],
	

})
export class HomeModule { }
