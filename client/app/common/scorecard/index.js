import ScorecardComponent from './scorecard.component';

const module = angular
  .module('app.common.banner', [])
  .component('scorecard', ScorecardComponent);

export default module.name;
