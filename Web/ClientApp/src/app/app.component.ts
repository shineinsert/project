import { Subscription } from 'rxjs';
// Angular
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, NavigationStart, NavigationCancel } from '@angular/router';
// Layout
import { SplashScreenService, TranslationService } from './core/_base/layout';
// language list
import { locale as enLang } from './i18n/en';
import { locale as thLang } from './i18n/th';
import { AppSettingsService } from './services/appSettingsService';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'body[kt-root]',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
   // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
    // Public properties
    title = 'Metronic';
    loader: boolean;
    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     * @param layoutConfigService: LayoutCongifService
     * @param splashScreenService: SplashScreenService
     */
    constructor(private translationService: TranslationService,
                private router: Router,
                private splashScreenService: SplashScreenService,
                private appSettingsService: AppSettingsService
    ) {

        // register translations
        this.translationService.loadTranslations(enLang, thLang);
    }

    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */

    /**
     * On init
     */
    ngOnInit(): void {
        // enable/disable loader
        this.loader = this.appSettingsService.getLayoutConfig('loader.enabled');

        const routerSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // hide splash screen
                this.splashScreenService.hide();

                // scroll to top on every route change
                window.scrollTo(0, 0);

                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('kt-page--loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }

    /**
     * On Destroy
     */
    ngOnDestroy() {
        this.unsubscribe.forEach(sb => sb.unsubscribe());
    }
}
