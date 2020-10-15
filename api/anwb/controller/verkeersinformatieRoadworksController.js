const VerkeersinformatieRoadworks = require("../model/verkeersinformatieRoadworks");

module.exports = function updateAndInsertAnwbJsonDataRoadworks() {
  anwbJsonData.roads.map(roads =>
    roads.segments
      .filter(segments => typeof segments.roadworks !== "undefined")
      .map(segments =>
        VerkeersinformatieRoadworks.bulkWrite(
          segments.roadworks.map(roadworks => ({
            updateOne: {
              filter: {
                "segments.roadworks.id": roadworks.id
              },
              update: {
                $set: {
                  segments: {
                    start: segments.start,
                    end: segments.end,
                    roadworks: {
                      id: roadworks.id,
                      road: roadworks.road,
                      type: roadworks.type,
                      category: roadworks.category,
                      label: roadworks.label,
                      incidentType: roadworks.incidentType,
                      from: roadworks.from,
                      to: roadworks.to,
                      fromLoc: roadworks.fromLoc,
                      toLoc: roadworks.toLoc,
                      polyline: roadworks.polyline,
                      bounds: roadworks.bounds,
                      events: roadworks.events,
                      start: roadworks.start,
                      stop: roadworks.stop,
                      reason: roadworks.reason
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