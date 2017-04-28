import BannerComponent from './banner.component';

const module = angular
  .module('app.common.banner', [])
  .component('banner', BannerComponent);

export default module.name;
