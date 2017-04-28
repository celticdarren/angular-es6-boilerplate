import template from './<%= name %>.html';
import './<%= name %>.scss';

class <%= upCaseName %>Controller {

  constructor() {
    'ngInject';
  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: <%= upCaseName %>Controller,
  controllerAs: 'vm'
};
