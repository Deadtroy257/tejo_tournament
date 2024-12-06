# Paso 1: Crear Directorios de Datos
# Estos directorios son necesarios para almacenar los datos de cada shard y configuración.
mkdir C:\data\shard1
mkdir C:\data\shard2
mkdir C:\data\shard3
mkdir C:\data\config1
mkdir C:\data\config2
mkdir C:\data\config3

# CMD 1: Iniciar Nodo Principal del Shard 1
mongod --shardsvr --replSet shard1_replset --port 26017 --dbpath C:\data\shard1 --bind_ip localhost

# CMD 2: Iniciar Nodo Principal del Shard 2
mongod --shardsvr --replSet shard2_replset --port 27017 --dbpath C:\data\shard2 --bind_ip localhost


# CMD 3: Iniciar Nodo Principal del Shard 3
mongod --shardsvr --replSet shard3_replset --port 28017 --dbpath C:\data\shard3 --bind_ip localhost


# CMD 4: Inicializar Réplica del Shard 1
# Conectarse a Shard 1
mongosh --port 26017
# Inicializar
rs.initiate({
    _id: "shard1_replset",
    members: [
        { _id: 0, host: "localhost:26017" }
    ]
});
exit;

# CMD 5: Inicializar Réplica del Shard 2
# Conectarse a Shard 2
mongosh --port 27017
# Inicializar
rs.initiate({
    _id: "shard2_replset",
    members: [
        { _id: 0, host: "localhost:27017" }
    ]
});
exit;

# CMD 6: Inicializar Réplica del Shard 3
# Conectarse a Shard 3
mongosh --port 28017
# Inicializar
rs.initiate({
    _id: "shard3_replset",
    members: [
        { _id: 0, host: "localhost:28017" }
    ]
});
exit;

# CMD 7: Iniciar el Nodo del Config Server
mongod --configsvr --replSet configReplSet --port 47017 --dbpath C:\data\config1 --bind_ip localhost


# CMD 8: Inicializar Réplica del Config Server
# Conectarse al Config Server
mongosh --port 47017
# Inicializar
rs.initiate({
    _id: "configReplSet",
    configsvr: true,
    members: [
        { _id: 0, host: "localhost:47017" }
    ]
});
exit;

# CMD 9: Iniciar Mongos
mongos --configdb configReplSet/localhost:47017 --bind_ip localhost --port 27018


# CMD 10: Conectarse al Enrutador y Configurar el Clúster
mongosh --port 27018

# Agregar los Shards
sh.addShard("shard1_replset/localhost:26017");
sh.addShard("shard2_replset/localhost:27017");
sh.addShard("shard3_replset/localhost:28017");

# Habilitar Sharding en la Base de Datos
sh.enableSharding("tejo_tournament");

# Crear Índices en las Colecciones para Fragmentarlas
use tejo_tournament;
db.players.createIndex({ team_id: "hashed" });
db.matches.createIndex({ _id: "hashed" });

# Fragmentar las Colecciones
sh.shardCollection("tejo_tournament.players", { team_id: "hashed" });
sh.shardCollection("tejo_tournament.matches", { _id: "hashed" });

# Verificar la Configuración del Clúster
sh.status();

# Insertar Datos de Prueba en la Colección Fragmentada
for (let i = 0; i < 1000; i++) {
    db.players.insertOne({ team_id: i, name: "Player " + i });
}

# Consultar los Datos Insertados
db.players.find().count();

# Verificar Distribución de Datos
# Los datos deben estar distribuidos entre los shards.
sh.status();

db.players.find({ team_id: 10 });

mongosh --port 26017
mongosh --port 27017
mongosh --port 28017


# Nodo primario: 27017
# Nodo secundario 1: 27018
# Nodo secundario 2: 27019