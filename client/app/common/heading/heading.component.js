import template from './heading.html';
import './heading.scss';

class HeadingController {

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
  controller: HeadingController,
  controllerAs: 'vm'
};
