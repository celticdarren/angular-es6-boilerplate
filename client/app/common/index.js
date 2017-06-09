import ConstantsModule from './constants';
import ScorecardModule from './scorecard';
import HeadingModule from './heading';
import NavbarModule from './navbar';
import AuthModule from './auth';
import GetScoresModule from './getScores';

const module = angular
  .module('app.common', [
    ConstantsModule,
    ScorecardModule,
    HeadingModule,
    NavbarModule,
    AuthModule,
    GetScoresModule
  ]);

export default module.name;
