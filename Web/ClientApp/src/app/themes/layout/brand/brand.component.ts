// Angular
import { AfterViewInit, Component, OnInit } from '@angular/core';
// Layout
import { ToggleOptions } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';
import { AppSettingsService } from '../../../services/appSettingsService';

@Component({
    selector: 'kt-brand',
    templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit, AfterViewInit {
    // Public properties
    headerLogo: string;
    headerStickyLogo: string;

    toggleOptions: ToggleOptions = {
        target: 'body',
        targetState: 'kt-aside--minimize',
        togglerState: 'kt-aside__brand-aside-toggler--active'
    };

    /**
	 * Component constructor
	 *
	 * @param appSettingsService : AppSettingsService
	 * @param htmlClassService: HtmlClassService
	 */
    constructor(private appSettingsService: AppSettingsService, public htmlClassService: HtmlClassService) {
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit(): void {
        this.headerLogo = this.appSettingsService.getLayoutConfig('self.logo');
        this.headerStickyLogo = this.appSettingsService.getLayoutConfig('self.logo');
    }

    /**
	 * On after view init
	 */
    ngAfterViewInit(): void {
    }
}
