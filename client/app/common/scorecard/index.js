import ScorecardComponent from './scorecard.component';

const module = angular
  .module('app.common.scorecard', [])
  .component('scorecard', ScorecardComponent);

export default module.name;
