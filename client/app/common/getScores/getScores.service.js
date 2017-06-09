export default function (CoreConstants) {
  'ngInject';

  return {
    getBestHoleScorecard(course, type) {
      const scorecard = [];
      let allHoles = CoreConstants.courses[course];

      switch (type) {
        case 'hole':
          for (let hole in allHoles) {
            scorecard.push(this.createHoleScoreObject(hole, allHoles, course));
          }
          break;
        case 'round':
          for (let hole in allHoles) {
            scorecard.push(this.createBestScoreObject(hole, allHoles, course));
          }
      }

      return scorecard;
    },

    getCourseInformation(course) {
      return CoreConstants.courses[course];
    }
  }
}
