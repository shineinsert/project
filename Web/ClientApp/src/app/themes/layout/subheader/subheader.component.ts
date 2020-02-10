// Angular
import { Component, OnInit } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
import { AppSettingsService } from '../../../services/appSettingsService';

@Component({
    selector: 'kt-subheader',
    templateUrl: './subheader.component.html',
})
export class SubheaderComponent implements OnInit {
    // Public properties
    // subheader layout
    layout: string;
    fluid: boolean;
    clear: boolean;

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
    ngOnInit(): void {
        const config = this.appSettingsService.getAllLayoutConfig();

        this.layout = objectPath.get(config, 'subheader.layout');
        this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
        this.clear = objectPath.get(config, 'subheader.clear');
    }
}
