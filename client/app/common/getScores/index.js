import GetScoresService from './getScores.service';

const module = angular
  .module('app.common.getScores', [])
  .service('GetScoresService', GetScoresService);

export default module.name;
