// Angular
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
// Angular in memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Env
import { environment } from '../environments/environment';
// Hammer JS
import 'hammerjs';
// NGX Permissions
import { NgxPermissionsModule } from 'ngx-permissions';
// Copmponents
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// Partials
import { PartialsModule } from './partials/partials.module';
// Layout Services
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
    DataTableService,
    KtDialogService,
    LayoutRefService,
    MenuAsideService,
    MenuHorizontalService,
    SplashScreenService,
    SubheaderService
} from './core/_base/layout';

import { ThemeModule } from './themes/layout/theme.module';
// CRUD
import { HttpUtilsService, LayoutUtilsService, TypesUtilsService } from './core/_base/crud';
// Highlight JS
import { HIGHLIGHT_OPTIONS, HighlightLanguage } from 'ngx-highlightjs';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as scss from 'highlight.js/lib/languages/scss';
import * as xml from 'highlight.js/lib/languages/xml';
import * as json from 'highlight.js/lib/languages/json';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
// NGXS
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppSettingsService } from './services/appSettingsService';
import { AppState } from './store/app.state';

// controls
import { TreeviewModule } from 'ngx-treeview';

// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelSpeed: 0.5,
    swipeEasing: true,
    minScrollbarLength: 40,
    maxScrollbarLength: 300,
};


export function hljsLanguages(): HighlightLanguage[] {
    return [
        { name: 'typescript', func: typescript },
        { name: 'scss', func: scss },
        { name: 'xml', func: xml },
        { name: 'json', func: json }
    ];
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule.forRoot(),
        PartialsModule,
        CoreModule,
        OverlayModule,
        TranslateModule.forRoot(),
        MatProgressSpinnerModule,
        InlineSVGModule.forRoot(),
        ThemeModule,

        // NGXS
        NgxsModule.forRoot([
            AppState
        ]),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot({
            // should turn off in production
            disabled: true
        }),

        // controls
		TreeviewModule.forRoot(),
		NgbModule.forRoot(),

    ],
    exports: [],
    providers: [
        LayoutRefService,
        KtDialogService,
        DataTableService,
        AppSettingsService,
        SplashScreenService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: GestureConfig
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: { languages: hljsLanguages }
        },
        // template services
        SubheaderService,
        MenuHorizontalService,
        MenuAsideService,
        HttpUtilsService,
        TypesUtilsService,
        LayoutUtilsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
