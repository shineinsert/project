// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
import { AppSettingsService } from '../../../../services/appSettingsService';

@Injectable()
export class MenuAsideService {
    // Public properties
    menuList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    /**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
    constructor(private appSettingsService: AppSettingsService) {
        this.loadMenu();
    }

    /**
	 * Load menu list
	 */
    loadMenu() {
        // get menu list
        const menuItems: any[] = this.appSettingsService.getMenuConfig('aside.items');
        this.menuList$.next(menuItems);
    }
}
