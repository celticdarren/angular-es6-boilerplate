import ConstantsModule from './constants';
import ScorecardModule from './scorecard';
import HeadingModule from './heading';
import NavbarModule from './navbar';

const module = angular
  .module('app.common', [
    ConstantsModule,
    ScorecardModule,
    HeadingModule,
    NavbarModule
  ]);

export default module.name;
