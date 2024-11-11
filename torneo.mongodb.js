// Desarrollar el modelo de una base de datos MongoDb que permita la gestión de los participantes a un torneo deportivo, (deportistas, entrenadores, árbitros, encuentros deportivos, resultados y tabla de posiciones). Ustedes escogen el tipo de evento deportivo que deseen trabajar, el cual debe ser real y tener disponible los resultados y detalles del torneo deportivo.

//Crear la base de datos
use("tejo_tournament");

//Crear las colecciones
db.createCollection("players");
db.createCollection("coaches");
db.createCollection("teams");
db.createCollection("matches");
db.createCollection("standing_table");

//Insertar datos

//region Jugadores
db.getCollection("players").insertMany([
  {
    _id: "player001",
    name: "Diego Castro",
    age: 21,
    matches_played: 2,
    team_id: "team001",
  },
  {
    _id: "player002",
    name: "Fernando Rozo",
    age: 60,
    matches_played: 40,
    team_id: "team001",
  },
  {
    _id: "player003",
    name: "Juan Garcia",
    age: 32,
    team_id: "team001",
  },
  {
    _id: "player004",
    name: "Enzo Rodriguez",
    age: 25,
    matches_played: 5,
    team_id: "team005",
  },
  {
    _id: "player005",
    name: "Piero Martinez",
    age: 28,
    matches_played: 60,
    team_id: "team002",
  },
  {
    _id: "player006",
    name: "Paul Castiblanco",
    age: 24,
    matches_played: 23,
    team_id: "team003",
  },
  {
    _id: "player007",
    name: "Jake Orjuela",
    age: 35,
    team_id: "team004",
  },
  {
    _id: "player008",
    name: "Diacomo Perez",
    age: 46,
    matches_played: 10,
    team_id: "team005",
  },
  {
    _id: "player009",
    name: "Alex Urbina",
    age: 39,
    matches_played: 6,
    team_id: "team005",
  },
  {
    _id: "player010",
    name: "Helen Caceres",
    age: 29,
    team_id: "team004",
  },
  {
    _id: "player011",
    name: "Dennis Parada",
    age: 23,
    team_id: "team003",
  },
  {
    _id: "player012",
    name: "Smith Hernandez",
    age: 56,
    matches_played: 30,
    team_id: "team002",
  },
  {
    _id: "player013",
    name: "Harper Murillo",
    age: 33,
    matches_played: 4,
    team_id: "team004",
  },
  {
    _id: "player014",
    name: "George Gonzales",
    age: 47,
    matches_played: 3,
    team_id: "team003",
  },
  {
    _id: "player015",
    name: "Tomas Pinilla",
    age: 34,
    matches_played: 2,
    team_id: "team002",
  },
  {
    _id: "player016",
    name: "David Soto",
    age: 27,
    matches_played: 13,
    team_id: "team006",
  },
  {
    _id: "player017",
    name: "Blake Garzon",
    age: 37,
    team_id: "team006",
  },
  {
    _id: "player018",
    name: "Michael Suarez",
    age: 57,
    matches_played: 6,
    team_id: "team006",
  },
  {
    _id: "player019",
    name: "Joe Diaz",
    age: 31,
    matches_played: 9,
    team_id: "team007",
  },
  {
    _id: "player020",
    name: "Charlie Gutierrez",
    age: 29,
    team_id: "team008",
  },
  {
    _id: "player021",
    name: "Steven Bachiller",
    age: 22,
    team_id: "team007",
  },
  {
    _id: "player022",
    name: "Finn Gomez",
    age: 34,
    matches_played: 36,
    team_id: "team008",
  },
  {
    _id: "player023",
    name: "Annabelle Posada",
    age: 25,
    team_id: "team008",
  },
  {
    _id: "player024",
    name: "Brian Escobar",
    age: 26,
    matches_played: 32,
    team_id: "team007",
  },
]);

//region Entrenadores
db.getCollection("coaches").insertMany([
  {
    _id: "coach001",
    name: "Peter Montaño",
    experience: "10 años",
    tournaments_won: 4,
    team_id: "team001",
  },
  {
    _id: "coach002",
    name: "Robert Obando",
    experience: "5 años",
    team_id: "team002",
  },
  {
    _id: "coach003",
    name: "Peige Garnica",
    experience: "2 años",
    team_id: "team003",
  },
  {
    _id: "coach004",
    name: "Jim Lara",
    experience: "6 años",
    team_id: "team004",
  },
  {
    _id: "coach005",
    name: "Dwight Cardenas",
    experience: "8 años",
    tournaments_won: 3,
    team_id: "team005",
  },
  {
    _id: "coach006",
    name: "Creed Maldonado",
    experience: "4 años",
    team_id: "team006",
  },
  {
    _id: "coach007",
    name: "Jeffrey Sandoval",
    experience: "7 años",
    tournaments_won: 6,
    team_id: "team007",
  },
  {
    _id: "coach008",
    name: "Matthew Moreno",
    experience: "6 años",
    tournaments_won: 3,
    team_id: "team008",
  },
]);

//region Equipos
db.getCollection("teams").insertMany([
  {
    _id: "team001",
    name: "Los Tinteros",
    coach_id: "coach005",
    players: ["player001", "player002", "player003"],
  },
  {
    _id: "team002",
    name: "Los Tinteros",
    coach_id: "coach003",
    players: ["player015", "player012", "player005"],
  },
  {
    _id: "team003",
    name: "Los Tinteros",
    coach_id: "coach004",
    players: ["player014", "player011", "player006"],
  },
  {
    _id: "team004",
    name: "Los Tinteros",
    coach_id: "coach001",
    players: ["player013", "player010", "player007"],
  },
  {
    _id: "team005",
    name: "Los Tinteros",
    coach_id: "coach002",
    players: ["player009", "player008", "player004"],
  },
  {
    _id: "team006",
    name: "Los Tinteros",
    coach_id: "coach006",
    players: ["player018", "player016", "player017"],
  },
  {
    _id: "team007",
    name: "Los Tinteros",
    coach_id: "coach007",
    players: ["player024", "player019", "player021"],
  },
  {
    _id: "team008",
    name: "Los Tinteros",
    coach_id: "coach008",
    players: ["player020", "player022", "player023"],
  },
]);

//region Encuentros
db.getCollection("matches").insertMany([
  {
    _id: "match001",
    date: new Date("2024-11-11T13:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team001",
    team2_id: "team008",
    referee: {
      name: "Tony Chaparro",
      experience: "15 años",
      matches_officiated: 20,
    },
    result: {
      winner: "team001",
      score_team1: 15,
      score_team2: 12,
    },
  },
  {
    _id: "match002",
    date: new Date("2024-11-11T13:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team002",
    team2_id: "team007",
    referee: {
      name: "Andy Cubillos",
      experience: "10 años",
      matches_officiated: 12,
    },
    result: {
      winner: "team007",
      score_team1: 10,
      score_team2: 18,
    },
  },
  {
    _id: "match003",
    date: new Date("2024-11-11T15:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team003",
    team2_id: "team006",
    referee: {
      name: "Tony Chaparro",
      experience: "15 años",
      matches_officiated: 20,
    },
    result: {
      winner: "team003",
      score_team1: 16,
      score_team2: 12,
    },
  },
  {
    _id: "match004",
    date: new Date("2024-11-11T15:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team004",
    team2_id: "team005",
    referee: {
      name: "Andy Cubillos",
      experience: "10 años",
      matches_officiated: 12,
    },
    result: {
      winner: "team005",
      score_team1: 11,
      score_team2: 16,
    },
  },
  {
    _id: "match005",
    date: new Date("2024-11-11T18:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team001",
    team2_id: "team007",
    referee: {
      name: "Tony Chaparro",
      experience: "15 años",
      matches_officiated: 20,
    },
    result: {
      winner: "team001",
      score_team1: 22,
      score_team2: 17,
    },
  },
  {
    _id: "match006",
    date: new Date("2024-11-11T18:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team003",
    team2_id: "team005",
    referee: {
      name: "Andy Cubillos",
      experience: "10 años",
      matches_officiated: 12,
    },
    result: {
      winner: "team005",
      score_team1: 15,
      score_team2: 18,
    },
  },
  {
    _id: "match007",
    date: new Date("2024-11-11T20:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team001",
    team2_id: "team005",
    referee: {
      name: "Tony Chaparro",
      experience: "15 años",
      matches_officiated: 20,
    },
    result: {
      winner: "team001",
      score_team1: 19,
      score_team2: 15,
    },
  },
  {
    _id: "match008",
    date: new Date("2024-11-12T17:00:00"),
    location: "Campo Municipal de Tejo",
    team1_id: "team003",
    team2_id: "team007",
    referee: {
      name: "Andy Cubillos",
      experience: "10 años",
      matches_officiated: 12,
    },
    result: {
      winner: "team003",
      score_team1: 15,
      score_team2: 12,
    },
  },
]);

//region Tabla de posiciones
db.getCollection("standing_table").insertMany([
  {
    team_id: "team001",
    matches_played: 5,
    matches_won: 4,
    matches_lost: 1,
    points_scored: 87,
    points_against: 72,
    position: 1,
  },
  {
    team_id: "team005",
    matches_played: 5,
    matches_won: 3,
    matches_lost: 2,
    points_scored: 71,
    points_against: 74,
    position: 2,
  },
  {
    team_id: "team003",
    matches_played: 5,
    matches_won: 3,
    matches_lost: 2,
    points_scored: 61,
    points_against: 56,
    position: 3,
  },
  {
    team_id: "team007",
    matches_played: 5,
    matches_won: 2,
    matches_lost: 3,
    points_scored: 50,
    points_against: 63,
    position: 4,
  },
  {
    team_id: "team008",
    matches_played: 3,
    matches_won: 1,
    matches_lost: 2,
    points_scored: 40,
    points_against: 45,
    position: 5,
  },
  {
    team_id: "team002",
    matches_played: 3,
    matches_won: 1,
    matches_lost: 2,
    points_scored: 35,
    points_against: 50,
    position: 6,
  },
  {
    team_id: "team004",
    matches_played: 3,
    matches_won: 1,
    matches_lost: 2,
    points_scored: 30,
    points_against: 55,
    position: 7,
  },
  {
    team_id: "team006",
    matches_played: 3,
    matches_won: 0,
    matches_lost: 3,
    points_scored: 25,
    points_against: 65,
    position: 8,
  },
]);
