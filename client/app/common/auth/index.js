import AuthFactory from './auth.factory';

const module = angular
  .module('app.common.auth', [])
  .factory('auth', AuthFactory);

export default module.name;
