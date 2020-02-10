import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ThemeModule } from '../../themes/layout/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [],
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
  ]
})
export class DashboardModule { }
