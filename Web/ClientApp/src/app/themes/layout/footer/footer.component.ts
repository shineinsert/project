// Angular
import { Component, OnInit } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
import { AppSettingsService } from '../../../services/appSettingsService';

@Component({
    selector: 'kt-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
    // Public properties
    today: number = Date.now();
    fluid: boolean;

    /**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayouConfigService
	 */
    constructor(private appSettingsService: AppSettingsService) {
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit(): void {
        const config = this.appSettingsService.getAllLayoutConfig();

        // footer width fluid
        this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
    }
}
