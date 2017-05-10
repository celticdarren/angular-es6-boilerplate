import HeadingComponent from './heading.component';

const module = angular
  .module('app.common.heading', [])
  .component('heading', HeadingComponent);

export default module.name;
