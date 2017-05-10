import template from './home.html';
import './home.scss';

class HomeController {

  constructor($log, $filter, CoreConstants) {
    'ngInject';

    this.$log = $log;
    this.$filter = $filter;
    this.CoreConstants = CoreConstants;

  }

}

export default  {
  restrict: 'E',
  bindings: {
  },
  template,
  controller: HomeController,
  controllerAs: 'vm'
};
