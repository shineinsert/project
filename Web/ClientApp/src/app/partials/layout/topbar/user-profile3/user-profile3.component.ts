// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { User } from '../../../../models/user.model';
import { AppState } from '../../../../store/app.state';
import { Select, Store } from '@ngxs/store';

@Component({
    selector: 'kt-user-profile3',
    templateUrl: './user-profile3.component.html',
})
export class UserProfile3Component implements OnInit {
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
