// Angular
import { Component, OnInit } from '@angular/core';
// Layout
import {  ToggleOptions } from '../../../../core/_base/layout';
import { AppSettingsService } from '../../../../services/appSettingsService';

@Component({
    selector: 'kt-header-mobile',
    templateUrl: './header-mobile.component.html',
    styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
    // Public properties
    headerLogo: string;
    asideDisplay: boolean;

    toggleOptions: ToggleOptions = {
        target: 'body',
        targetState: 'kt-header__topbar--mobile-on',
        togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
    };

    /**
	 * Component constructor
	 *
	 * @param appSettingsService : AppSettingsService
	 */
    constructor(private appSettingsService: AppSettingsService) {
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit() {
        this.headerLogo = this.appSettingsService.getLayoutConfig('self.logo');
        this.asideDisplay = this.appSettingsService.getLayoutConfig('aside.self.display');
    }
}
