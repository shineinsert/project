// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.model';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../../../../store/app.state';

@Component({
    selector: 'kt-user-profile2',
    templateUrl: './user-profile2.component.html',
})
export class UserProfile2Component implements OnInit {
    // Public properties
    @Select(AppState.getCurrentUser) user$: Observable<User>;

    @Input() avatar = true;
    @Input() greeting = true;
    @Input() badge: boolean;
    @Input() icon: boolean;

    /**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
    constructor(private store: Store) {
    }

    /**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

    /**
	 * On init
	 */
    ngOnInit(): void {
    }

    /**
	 * Log out
	 */
    logout() {
    }
}
