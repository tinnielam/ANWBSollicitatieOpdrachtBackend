const VerkeersinformatieRadars = require('../model/verkeersinformatieRadars');

module.exports = function updateAndInsertAnwbJsonDataRadars() {
  anwbJsonData.roads.map(roads =>
    roads.segments
      .filter(segments => typeof segments.radars !== "undefined")
      .map(segments =>
        VerkeersinformatieRadars.bulkWrite(
          segments.radars.map(radars => ({
            updateOne: {
              filter: {
                "segments.radars.id": radars.id
              },
              update: {
                $set: { 
                  segments: {
                    start: segments.start,
                    end: segments.end,
                    radars: {
                      id: radars.id,
                      road: radars.road,
                      category: radars.category,
                      label: radars.label,
                      incidentType: radars.incidentType,
                      from: radars.from,
                      to: radars.to,
                      fromLoc: radars.fromLoc,
                      toLoc: radars.toLoc,
                      loc: radars.loc,
                      bounds: radars.bounds,
                      events: radars.events,
                      reason: radars.reason,
                      HM: radars.HM
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