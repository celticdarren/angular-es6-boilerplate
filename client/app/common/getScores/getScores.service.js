export default function (CoreConstants) {
  'ngInject';

  return {

    players: CoreConstants.players,
    scores: CoreConstants.scores,

    getBestHoleScores(course) {

      const courseScores = this.scores.filter((score) => score.course_id === course);
      let scorecard = [];
      for (let i = 0; i < 18; i++) {
        scorecard.push({
          "player_id": [],
          "score": 11
        });
      }

      if (courseScores.length > 0) {
        courseScores.map((scoreEntry) => {
          let player_id = scoreEntry.player_id;
          scoreEntry.score.map((score, index) => {

            let thisScorecardHole = scorecard[index].score;

            if (score === thisScorecardHole) {

              if (scorecard[index].player_id.indexOf(player_id) < 0) {
                scorecard[index].player_id.push(player_id);
              }

            } else if (score < thisScorecardHole) {
              scorecard[index].score = score;
              scorecard[index].player_id = [player_id];
            }

          });
        })
      }

      return scorecard;
    },

    getCourseInformation(selectedCourse) {
      return CoreConstants.courses.find((course) => course.course_id === selectedCourse);
    },
  }
}
