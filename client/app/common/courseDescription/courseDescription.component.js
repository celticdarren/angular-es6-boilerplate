import template from './courseDescription.html';
import './courseDescription.scss';

class CourseDescriptionController {

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
  controller: CourseDescriptionController,
  controllerAs: 'vm'
};
