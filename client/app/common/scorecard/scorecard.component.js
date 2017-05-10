import template from './scorecard.html';
import './scorecard.scss';

class ScorecardController {

  constructor(CoreConstants, $log) {
    'ngInject';
    this.CoreConstants = CoreConstants;
    this.$log = $log;
  }

  $onInit() {
    this.course = this.createScorecard(this.selectedCourse, this.scoreType);
    // TODO: Not taking 2nd round
  }

  createScorecard(course, type) {
    const scorecard = [];
    let allHoles = this.CoreConstants.courses[course];

    switch(type) {
      case 'hole':
        for(let hole in allHoles) {
          scorecard.push(this.createHoleScoreObject(hole, allHoles, course));
        }
        break;
      case 'round':
        for(let hole in allHoles) {
          scorecard.push(this.createBestScoreObject(hole, allHoles, course));
        }
    }

    return scorecard
  }

  createBestScoreObject(hole, allHoles, course) {
    let bestPlayer = this.getBestScorePlayerTotal(course);
    let yards = allHoles[hole].holeYards;
    let par = allHoles[hole].holePar;

    let bestScore = this.CoreConstants.players[bestPlayer.player].scores[course][bestPlayer.round.round][hole];


    return {
      hole: parseInt(hole) +1,
      yards: yards,
      par:par,
      bestScore: bestScore,
      bestPlayer: bestPlayer.player
    };

  }

  createHoleScoreObject(hole, allHoles, course) {
    let yards = allHoles[hole].holeYards;
    let par = allHoles[hole].holePar;
    let bestScore = this.getBestScore(course, hole);

    return {
      hole: parseInt(hole) +1,
      yards: yards,
      par:par,
      bestScore: bestScore
    };
  }

  getBestScorePlayerTotal(course) {
    let players = this.CoreConstants.players;
    let currentBest = {
      player: null,
      round: null
    };

    for(let playerName in players) {
      let playerData = players[playerName];
      let playerRound = this.getBestPlayerRound(playerData, course);

      if(currentBest.round == null) {
        currentBest.player = playerName;
        currentBest.round = playerRound;
      } else if(playerRound.score < currentBest.score) {
        currentBest.player = playerName;
        currentBest.round = playerRound.round;
      }

    }
    return currentBest;

  }

  getBestPlayerRound(playerData, course) {
    let bestRound = {
      round:null,
      score:null
    };
    let scores = playerData.scores[course];
    for(let round in scores) {
      let roundScores = scores[round];
      let score = roundScores.reduce(this.getArrayTotal);
      if(bestRound.score == null) {
        bestRound.round = round;
        bestRound.score = score;
      } else if(score < bestRound.score) {
        bestRound.round = round;
        bestRound.score = score;
      }
    }

    return bestRound;

  }

  getBestScore(course, hole) {
    let players = this.CoreConstants.players;
    let currentBest = {
      player: null,
      score: null
    };
    for(let playerName in players) {
      let playerData = players[playerName];
      let round = this.getPlayersBestHoleScore(playerData, course, hole);
      let playerScore = players[playerName].scores[course][round][hole];

      if(currentBest.score == null) {
        currentBest.player = playerName;
        currentBest.score = playerScore;
      } else if(playerScore === currentBest.score) {
        currentBest.player += ' & ' + playerName;
        currentBest.score = playerScore;
      } else if(playerScore < currentBest.score) {
        currentBest.player = playerName;
        currentBest.score = playerScore;
      }


    }
    return currentBest;
  }

  getPlayersBestHoleScore(playerData, course, hole) {
    let bestScoreRound = {
      round: null,
      score: null
    };
    for (let round in playerData.scores[course]) {
      let score = playerData.scores[course][round][hole];
      if(!bestScoreRound.score) {
        bestScoreRound.round = round;
        bestScoreRound.score = score;
      } else if (score < bestScoreRound.score) {
        bestScoreRound.round = round;
        bestScoreRound.score = score;
      }
    }

    return bestScoreRound.round;
  }

  getArrayTotal(total, num) {
    return total + num;
  }

  getYardsTotal() {
    let totalYards = 0;
    for(let hole of this.CoreConstants.courses[this.selectedCourse]) {
      totalYards += hole.holeYards;
    }
    return totalYards;
  }

  getParTotal() {
    let totalPar = 0;
    for(let hole of this.CoreConstants.courses[this.selectedCourse]) {
      totalPar += hole.holePar;
    }
    return totalPar;
  }

  getScoreTotal() {
    let totalScore = 0;
    for(let hole of this.course) {
      hole.bestScore.score ? totalScore+= hole.bestScore.score : totalScore += hole.bestScore;
    }
    return totalScore;
  }

}

export default {
  restrict: 'E',
  bindings: {
    scoreType: '@',
    selectedCourse: '@'
  },
  template,
  controller: ScorecardController,
  controllerAs: 'vm'
};
