export default function (CoreConstants) {
  'ngInject';

  return {

    players: CoreConstants.players,

    getBestHoleScores(course) {
      const scorecard = [];

      return scorecard;
    },

    getCourseInformation(selectedCourse) {
      return CoreConstants.courses.find((course) => course.course_id === selectedCourse);
    },
  }
}
