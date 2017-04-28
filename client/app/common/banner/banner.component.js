import template from './banner.html';
import './banner.scss';

class BannerController {

  constructor($rootScope, $log, $filter, CoreConstants) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$log = $log;
    this.$filter = $filter;
    this.CoreConstants = CoreConstants;

  }

  $onInit() {

  }


}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: BannerController,
  controllerAs: 'vm'
};
