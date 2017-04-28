import template from './searchCustomer.html';
import './searchCustomer.scss';

class SearchCustomerController {

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
  controller: SearchCustomerController,
  controllerAs: 'vm'
};
