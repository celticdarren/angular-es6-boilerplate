import template from './app.html';
import './app.scss';

class AppController {

  constructor($rootScope, $log) {
    'ngInject';

  }

}

export default {
  template,
  controller: AppController,
  controllerAs: 'vm',
  bindToController: true,
  restrict: 'E'
};
