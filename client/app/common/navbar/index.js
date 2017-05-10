import NavbarComponent from './navbar.component';

const module = angular
  .module('app.common.navbar', [])
  .component('navbar', NavbarComponent);

export default module.name;
