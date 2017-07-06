import template from './scorecard.html';
import './scorecard.scss';
import 'lodash';
import * as firebase from 'firebase';

class ScorecardController {

  constructor(CoreConstants, $log, $firebaseObject, $firebaseArray, AuthService, GetScoresService) {
    'ngInject';
    // let ref = firebase.database().ref();
    // let root = ref.child('scores');
    //
    // // var obj = $firebaseObject(ref);
    // // debugger;
    // // // to take an action after the data loads, use the $loaded() promise
    // // obj.$loaded().then(function() {
    // //   console.log(obj.scores);
    // //   // To iterate the key/value pairs of the object, use angular.forEach()
    // //   angular.forEach(obj, function(value, key) {
    // //     console.log(key, value);
    // //   });
    // // });
    //
    // this.testing = $firebaseArray(root);
    this.CoreConstants = CoreConstants;
    this.$log = $log;
    this.GetScoresService = GetScoresService;
  }

  $onInit() {
    if (this.isBestHoleCard()) {
      this.courseInformation = this.GetScoresService.getCourseInformation(this.selectedCourse);
      this.scores = this.GetScoresService.getBestHoleScores(this.selectedCourse);
      this.courseInformation.course_holes.map((hole, index) => {
        Object.assign(hole, this.scores[index]);
      });
    }

    if (this.isBestRoundCard()) {
      this.courseInformation = this.GetScoresService.getCourseInformation(this.selectedCourse);
      this.scores = this.GetScoresService.getBestRoundScore(this.selectedCourse);
      this.courseInformation.course_holes.map((hole, index) => {
        Object.assign(hole, this.scores[index]);
      });
    }
  }

  addToDatabase() {
    this.testing.$add({
      value: [1, 2, 3, 4, 5]
    });
  }

  isBestHoleCard() {
    return this.scoreType === "hole";
  }

  isBestRoundCard() {
    return this.scoreType === "round";
  }

  getRoundTypeClass() {
    if (this.isBestHoleCard()) return 'isBestHoleCard';
    if (this.isBestRoundCard()) return 'isBestRoundCard';
  }

  getTotalScore(isMidScore, courseScores, type) {
    let range = {min: 0, max: 8};

    if (!isMidScore) {
      range = {min: 9, max: 17};
    }

    switch (type) {
      case 'yards':
        return courseScores.map((round, index) => {
          return index <= range.max && index >= range.min ? round.holeYards : 0;
        })
          .reduce((total, holeYards) => {
            return total + holeYards;
          });
        break;
      case 'par':
        return courseScores.map((round, index) => {
          return index <= range.max && index >= range.min ? round.holePar : 0;
        })
          .reduce((total, holePar) => {
            return total + holePar;
          });
        break;
      case 'score':
        return courseScores.map((round, index) => {
          return index <= range.max && index >= range.min ? round.score : 0;
        })
          .reduce((total, score) => {
            return total + score;
          });
        break;
      default:
        return 'Error';
    }


  }

  getPlayerNames(players) {
    let playerNames = "";
    if(players.length > 1) {
      for(let player of players) {
        if(players[players.length - 1] === player) {
          playerNames += ` & ${player}`;
        } else if(player !== players[0]) {
          playerNames += `, ${player}`;
        } else {
          playerNames = player;
        }
      }
    } else {
      playerNames = players[0];
    }
    return playerNames;
  };
  // scoreCategory(hole) {
  //   if (this.scoreType === 'hole') {
  //     switch(hole.bestScore.score - hole.par) {
  //       case 1:
  //         return 'bogey';
  //         break;
  //       case 2:
  //         return 'doubleBogey';
  //         break;
  //       case 3:
  //         return 'tripleBogey';
  //         break;
  //       case -1:
  //         return 'birdie';
  //         break;
  //       case -2:
  //         return 'eagle';
  //         break;
  //       default:
  //         return 'default';
  //     }
  //
  //   } else {
  //     switch(hole.bestScore - hole.par) {
  //       case 1:
  //         return 'bogey';
  //         break;
  //       case 2:
  //         return 'doubleBogey';
  //         break;
  //       case 3:
  //         return 'tripleBogey';
  //         break;
  //       case -1:
  //         return 'birdie';
  //         break;
  //       case -2:
  //         return 'eagle';
  //         break;
  //       default:
  //         return 'default';
  //     }
  //   }
  //
  // }

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
