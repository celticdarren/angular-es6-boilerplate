import ConstantsModule from './constants';
import ScorecardModule from './scorecard';
import HeadingModule from './heading';
import NavbarModule from './navbar';
import AuthModule from './auth';
import GetScoresModule from './getScores';
import CourseDescriptionModule from './courseDescription';

const module = angular
  .module('app.common', [
    ConstantsModule,
    ScorecardModule,
    HeadingModule,
    NavbarModule,
    AuthModule,
    GetScoresModule,
    CourseDescriptionModule
  ]);

export default module.name;
