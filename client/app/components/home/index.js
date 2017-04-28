import HomeComponent from './home.component';

const module = angular
  .module('app.components.home', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.home', {
      url: '/',
      views: {
        'content@app': {
          component: 'home'
        }
      }
    });
  })

  // Components
  .component('home', HomeComponent);

export default module.name;
