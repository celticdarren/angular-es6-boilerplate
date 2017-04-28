import angular from 'angular';
import CommonModule from './common';
import ComponentsModule from './components';
import AppComponent from './app.component';
import AngularSanitize from 'angular-sanitize';
import AngularUiRouter from 'angular-ui-router';
import 'angular-foundation-6';
import 'angular-touch';

angular
  .module('app', [
    'mm.foundation',
    AngularSanitize,
    AngularUiRouter,
    CommonModule,
    ComponentsModule,
  ])

  // Application config
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'root@': {
            component: 'app'
          }
        }
      });
  })

  .run(($transitions, $location, $window) => {
    'ngInject';

    $transitions.onSuccess({}, (transition) => {
      const name = transition.targetState().name();
      const page = "/" + name.replace(/\./g, '/');
    });
  })

  // Components
  .component('app', AppComponent);

angular.bootstrap(document, ["app"], {strictDi: true});
