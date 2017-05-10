import template from './navbar.html';
import './navbar.scss';

class NavbarController {

  constructor(CoreConstants, $log) {
    'ngInject';
    this.CoreConstants = CoreConstants;
    this.$log = $log;
  }

  $onInit() {

  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: NavbarController,
  controllerAs: 'vm'
};
