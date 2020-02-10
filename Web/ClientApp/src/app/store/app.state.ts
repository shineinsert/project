import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AppStateModel } from '../models/app.model';
import { User } from '../models/user.model';

export class SetApplicationLangauge {
    static readonly type = '[App] SetApplicationLangauge';

    constructor(public language: string) { }
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        currentLanguage: 'th',
        currentUser: new User({
            id: 1,
            username: 'admin',
            email: 'admin@demo.com',
            fullname: 'ชัยวัฒน์ สุขใจ',
            pic: './assets/media/users/300_25.jpg'
        })
    }
})
export class AppState {
    @Selector() static getCurrentLanguage(state: AppStateModel) {
        return state.currentLanguage;
    }

    @Selector() static getCurrentUser(state: AppStateModel) {
        return state.currentUser;
    }

    @Action(SetApplicationLangauge)
    setApplicationLangauge(context: StateContext<AppStateModel>, action: SetApplicationLangauge) {
        const state = context.getState();
        context.patchState({
            currentLanguage: action.language
        });
    }
}
