// Angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
} from '@angular/material';
// NgBootstrap
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Core module
import { CoreModule } from '../core/core.module';
// CRUD Partials
import {
    ActionNotificationComponent,
    AlertComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent
} from './content/crud';
// Layout partials
import { DatePickerThaiComponent } from './date-picker-thai/date-picker-thai.component';
import {
    ContextMenu2Component,
    ContextMenuComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    QuickPanelComponent,
    ScrollTopComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    SearchResultComponent,
    SplashScreenComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    Subheader4Component,
    Subheader5Component,
    SubheaderSearchComponent,
    UserProfile2Component,
    UserProfile3Component,
    UserProfileComponent,
    StickyToolbarComponent
} from './layout';
// General
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
// Errpr
import { ErrorComponent } from './content/general/error/error.component';
// Extra module
import { WidgetModule } from './content/widgets/widget.module';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
import { CartComponent } from './layout/topbar/cart/cart.component';

@NgModule({
    declarations: [
        ScrollTopComponent,
        NoticeComponent,
        ActionNotificationComponent,
        DeleteEntityDialogComponent,
        FetchEntityDialogComponent,
        UpdateStatusDialogComponent,
        AlertComponent,

        // topbar components
        ContextMenu2Component,
        ContextMenuComponent,
        QuickPanelComponent,
        ScrollTopComponent,
        SearchResultComponent,
        SplashScreenComponent,
        Subheader1Component,
        Subheader2Component,
        Subheader3Component,
        Subheader4Component,
        Subheader5Component,
        SubheaderSearchComponent,
        LanguageSelectorComponent,
        NotificationComponent,
        QuickActionComponent,
        SearchDefaultComponent,
        SearchDropdownComponent,
        UserProfileComponent,
        UserProfile2Component,
        UserProfile3Component,
        CartComponent,
		StickyToolbarComponent,
		DatePickerThaiComponent,

        ErrorComponent
    ],
    exports: [
        WidgetModule,
        PortletModule,

        ScrollTopComponent,
        NoticeComponent,
        ActionNotificationComponent,
        DeleteEntityDialogComponent,
        FetchEntityDialogComponent,
        UpdateStatusDialogComponent,
        AlertComponent,

        // topbar components
        ContextMenu2Component,
        ContextMenuComponent,
        QuickPanelComponent,
        ScrollTopComponent,
        SearchResultComponent,
        SplashScreenComponent,
        Subheader1Component,
        Subheader2Component,
        Subheader3Component,
        Subheader4Component,
        Subheader5Component,
        SubheaderSearchComponent,
        LanguageSelectorComponent,
        NotificationComponent,
        QuickActionComponent,
        SearchDefaultComponent,
        SearchDropdownComponent,
        UserProfileComponent,
        UserProfile2Component,
        UserProfile3Component,
        CartComponent,
        StickyToolbarComponent,
		DatePickerThaiComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        InlineSVGModule,
        CoreModule,
        PortletModule,
        WidgetModule,
		NgbModule,
        // angular material modules
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule,

        // ng-bootstrap modules
        NgbDropdownModule,
        NgbTabsetModule,
        NgbTooltipModule,
    ]
})
export class PartialsModule {
}
