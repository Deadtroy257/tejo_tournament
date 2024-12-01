use("tejo_tournament");
db.getCollection("players").find({age: {$gt: 40}});
db.getCollection("players").find({age: {$lt: 30}});
db.getCollection("players").find({
                                $or: [{age: {$gt: 45}},{ matches_played: {$gt: 10}} ]
                                });

const cursor = db.getCollection("matches").find({'result.winner': 'team001'});

cursor.forEach((e) => {
    console.log(e.location);
});


//Equipo ganador del torneo
use("tejo_tournament");
db.standing_table.find({ position: 1 });

//Todos los encientros jugados por un equipo
use("tejo_tournament");
db.matches.find({
    $or: [
      { team1_id: "team001" },
      { team2_id: "team001" }
    ]
  });

//Obtener los detalles de un equipo (entrnador y jugadorres)
use("tejo_tournament");
db.teams.aggregate([
    {
      $match: { _id: "team001" }
    },
    {
      $lookup: {
        from: "coaches",
        localField: "coach_id",
        foreignField: "_id",
        as: "coach"
      }
    },
    {
      $lookup: {
        from: "players",
        localField: "players",
        foreignField: "_id",
        as: "players"
      }
    }
  ]);

  //Obtener los 3 equipos con mayor diferencia de puntos
  use("tejo_tournament");
  db.standing_table.aggregate([
    {
      $project: {
        team_id: 1,
        points_scored: 1,
        points_against: 1,
        difference: { $subtract: ["$points_scored", "$points_against"] }
      }
    },
    { $sort: { difference: -1 } },
    { $limit: 3 }
  ]);


//Actualizar
use("tejo_tournament");
db.players.updateOne({ name: "Diego Castro" }, { $set: { age: 26 } });


//Eliminar
use("tejo_tournament");
db.players.deleteOne({ name: "Diego Castro" });


