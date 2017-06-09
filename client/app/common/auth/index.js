import AuthService from './auth.service';

const module = angular
  .module('app.common.auth', [])
  .service('AuthService', AuthService);

export default module.name;
