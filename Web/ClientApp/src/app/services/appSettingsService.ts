import { Injectable } from '@angular/core';
import { LanguageFlag } from '../partials/layout/topbar/language-selector/language-selector.component';
import * as objectPath from 'object-path';

@Injectable()
export class AppSettingsService {

    getLanguageList(): LanguageFlag[] {
        return [
            {
                lang: 'en',
                name: 'English',
                flag: './assets/media/flags/012-uk.svg'
            },
            {
                lang: 'th',
                name: 'Thai',
                flag: './assets/media/flags/thai.png'
            }
        ];
    }

    getApplicationName(): string {
        return 'Exam';
    }

    getLogo(): string {
        return this.getLayoutConfig('self.logo');
    }
    getLayoutConfig(path: string): any {
        return objectPath.get(this.getAllLayoutConfig(), path);
    }
    getAllLayoutConfig(): any {
        return {
            demo: 'demo6',
            // == Base Layout
            self: {
                layout: 'fluid', // fluid|boxed
                body: {
                    'background-image': './assets/media/misc/bg-1.jpg',
                },
				logo: './assets/media/logos/logo-6.png'
            },
            // == Page Splash Screen loading
            loader: {
                enabled: true,
                type: 'spinner-logo',
				logo: './assets/media/logos/logo-3.png',
                message: 'Please wait...'
            },
            // == Colors for javascript
            colors: {
                state: {
                    brand: '#d81313',
                    light: '#ffffff',
                    dark: '#282a3c',
                    primary: '#5867dd',
                    success: '#34bfa3',
                    info: '#36a3f7',
                    warning: '#ffb822',
                    danger: '#fd3995'
                },
                base: {
                    label: [
                        '#c5cbe3',
                        '#a1a8c3',
                        '#3d4465',
                        '#3e4466'
                    ],
                    shape: [
                        '#f0f3ff',
                        '#d9dffa',
                        '#afb4d4',
                        '#646c9a'
                    ]
                }
            },
            header: {
                self: {
                    skin: 'light',
                    fixed: {
                        desktop: true,
                        mobile: true
                    }
                },
                menu: {
                    self: {
                        display: true,
                        'root-arrow': true,
                        layout: 'default',
                    },
                    desktop: {
                        arrow: true,
                        toggle: 'click',
                        submenu: {
                            skin: 'light',
                            arrow: true
                        }
                    },
                    mobile: {
                        submenu: {
                            skin: 'dark',
                            accordion: true
                        }
                    }
                }
            },
            subheader: {
                display: true,
                fixed: false,
                width: 'fluid',
                layout: 'subheader-search',
                style: 'solid'
            },
            content: {
                width: 'fluid'
            },
            brand: {
                self: {
                    skin: 'navy'
                }
            },
            aside: {
                self: {
                    display: true,
                    fixed: true,
                    minimize: {
                        toggle: false,
                        default: true
                    }
                },
                footer: {
                    self: {
                        display: true
                    }
                },
                menu: {
                    dropdown: false,
                    scroll: false,
                    submenu: {
                        accordion: false,
                        dropdown: {
                            arrow: true,
                            'hover-timeout': 500
                        }
                    }
                }
            },
            footer: {
                self: {
                    width: 'fluid',
                    fixed: false
                }
            }
        };
    }
    getMenuConfig(path: string): any {
        return objectPath.get(this.getAllMenuConfig(), path);
    }
    getAllMenuConfig(): any {
        return {
            header: {
                self: {},
                items: {
                    default: [
                    ],
                }
            },
            aside: {
                self: {},
                items: [
                    {
                        title: 'ข้อมูลผู้ประกอบการ',
                        root: true,
                        icon: 'fa fa-home',
                        alignment: 'left',
                        page: '/home',
                    }
                
                ]
            },
        };
    }
}
