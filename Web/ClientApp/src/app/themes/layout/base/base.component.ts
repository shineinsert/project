// Angular
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
// RxJS
import { Observable, Subscription } from 'rxjs';
// Object-Path
import * as objectPath from 'object-path';
import { HtmlClassService } from '../html-class.service';
// User permissions
import { NgxPermissionsService } from 'ngx-permissions';
import { select, Store } from '@ngrx/store';
import { AppSettingsService } from '../../../services/appSettingsService';

@Component({
    selector: 'kt-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit, OnDestroy {
    // Public variables
    selfLayout: string;
    asideDisplay: boolean;
    asideSecondary: boolean;
    subheaderDisplay: boolean;
    fluid: boolean;

    // Private properties
    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/


    /**
	 * Component constructor
	 *
	 * @param htmlClassService: HtmlClassService
	 * @param store
	 * @param permissionsService
	 */
    constructor(
        private htmlClassService: HtmlClassService,
  private permissionsService: NgxPermissionsService,
  private appSettingsService: AppSettingsService
        ) {

        // setup element classes
        this.htmlClassService.setConfig(this.appSettingsService.getAllLayoutConfig());
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit(): void {
        const config = this.appSettingsService.getAllLayoutConfig();
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideDisplay = objectPath.get(config, 'aside.self.display');
        this.asideSecondary = objectPath.get(config, 'aside-secondary.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        this.fluid = objectPath.get(config, 'content.width') === 'fluid';
    }

    /**
	 * On destroy
	 */
    ngOnDestroy(): void {
        this.unsubscribe.forEach(sb => sb.unsubscribe());
    }

}
