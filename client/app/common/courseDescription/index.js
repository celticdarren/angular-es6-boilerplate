import CourseDescriptionComponent from './courseDescription.component';

const module = angular
  .module('app.common.courseDescription', [])
  .component('courseDescription', CourseDescriptionComponent);

export default module.name;
