const VerkeersinformatieJams = require('../model/verkeersinformatieJams');

module.exports = function updateAndInsertAnwbJsonDataJams() {
  anwbJsonData.roads.map(roads =>
    roads.segments
      .filter(segments => typeof segments.jams !== "undefined")
      .map(segments =>
        VerkeersinformatieJams.bulkWrite(
          segments.jams.map(jams => ({
            updateOne: {
              filter: {
                "segments.jams.id": jams.id
              },
              update: {
                $set: {
                  segments: {
                    start: segments.start,
                    end: segments.end,
                    jams: {
                      id: jams.id,
                      road: jams.road,
                      category: jams.category,
                      label: jams.label,
                      incidentType: jams.incidentType,
                      from: jams.from,
                      to: jams.to,
                      fromLoc: jams.fromLoc,
                      toLoc: jams.toLoc,
                      polyline: jams.polyline,
                      bounds: jams.bounds,
                      events: jams.events,
                      start: jams.start,
                      stop: jams.stop,
                      reason: jams.reason,
                      distance: jams.distance,
                      delay: jams.delay
                    }
                  }
                }
              },
              upsert: true
            }
          })),
          function(err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        )
      )
  );
};