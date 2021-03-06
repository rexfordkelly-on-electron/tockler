'use strict';

angular.module('trayApp.runtime-config', ['trayApp.config'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                default: '700',
                'hue-1': '900',
                'hue-2': '300',
                'hue-3': '50'
            })
            .accentPalette('green', {
                default: '700'
            })
            .warnPalette('red', {
                default: '500'
            });

    })
   .config(function (tmhDynamicLocaleProvider) {
       tmhDynamicLocaleProvider.localeLocationPattern('../../bower_components/angular-i18n/angular-locale_{{locale}}.js')
    });


