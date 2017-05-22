import angular from 'angular';
import * as firebase from 'firebase';
import FirebaseModule from 'angularfire';
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
    FirebaseModule
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
  .config(function(){
    let config = {
      apiKey: "AIzaSyCbyB-5b3JkX0aVtVOvpefB-Up9-f4iZ4o",
      authDomain: "makethecut-ed60d.firebaseapp.com",
      databaseURL: "https://makethecut-ed60d.firebaseio.com",
      projectId: "makethecut-ed60d",
      storageBucket: "makethecut-ed60d.appspot.com",
      messagingSenderId: "601191005002"
    };

    firebase.initializeApp(config);
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
