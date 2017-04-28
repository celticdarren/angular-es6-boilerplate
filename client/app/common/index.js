import BannerModule from './banner';
import ConstantsModule from './constants';

const module = angular
  .module('app.common', [
    BannerModule,
    ConstantsModule
  ]);

export default module.name;
