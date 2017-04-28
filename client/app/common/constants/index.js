import CoreConstants from './constants.constant';

const module = angular
  .module('app.common.constants', [])
  .constant('CoreConstants', CoreConstants);

export default module.name;
