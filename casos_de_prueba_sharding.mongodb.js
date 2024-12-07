//Caso de Prueba 1 (CP-001): Verificar Distribución Uniforme de Datos

//Insertar 1000 Documentos en la Colección players

//mongosh --port 27018
//use tejo_tournament;
for (let i = 0; i < 1000; i++) {
    db.players.insertOne({ team_id: i, name: "Player " + i });
}

//Verificar la Distribución de Datos
sh.status();


//Caso de Prueba 2 (CP-002): Validar Consultas Simples
//Realizar una Consulta Simple a la Colección players
db.players.find({ team_id: 10 });

//Validar desde un Nodo Secundario
//mongosh --port 27017

//Permite lecturas en el nodo secundario
rs.slaveOk();
//use tejo_tournament;
db.players.find({ team_id: 10 });


//Caso de Prueba 3 (CP-003): Evaluar Tiempos de Respuesta con 1000 Consultas Concurrentes
use('tejo_tournament');
let totalTime = 0;
for (let i = 0; i < 1000; i++) {  
    const start = new Date();
    const jugador =  db.players.findOne({ team_id: i, });
    print(jugador)
    const end = new Date();   
    totalTime += end - start; 
}
const avgTime = `Latencia promedio: ${totalTime / 1000} ms`;
print(avgTime)
