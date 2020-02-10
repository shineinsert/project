// Angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
import { AppSettingsService } from '../../../services/appSettingsService';
import { SplashScreenService } from '../../../core/_base/layout';

@Component({
    selector: 'kt-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
    // Public proprties
    loaderLogo: string;
    loaderType: string;
    loaderMessage: string;

    @ViewChild('splashScreen', {static: true}) splashScreen: ElementRef;

    /**
	 * Component constructor
	 *
	 * @param el: ElementRef
	 * @param appSettingsService : AppSettingsService
	 * @param splashScreenService: SplachScreenService
	 */
    constructor(
        private el: ElementRef,
        private appSettingsService: AppSettingsService,
        private splashScreenService: SplashScreenService) {
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit() {
        // init splash screen, see loader option in layout.config.ts
        const loaderConfig = this.appSettingsService.getLayoutConfig('loader');
        this.loaderLogo = objectPath.get(loaderConfig, 'logo');
        this.loaderType = objectPath.get(loaderConfig, 'type');
        this.loaderMessage = objectPath.get(loaderConfig, 'message');

        this.splashScreenService.init(this.splashScreen);
    }
}
