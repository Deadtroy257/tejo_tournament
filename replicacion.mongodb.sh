
####Nodo Primario####
#Inicializar el servidor en el nodo primario
mongod --port 27017 --dbpath "C:\data\db" --replSet "rs0"

#Inicializar el servidor en el primer nodo secundario
mongod --replSet "rs0" --port 27018 --dbpath "C:\data\db1" --bind_ip localhost --logpath "C:\data\db1\log.log"

#Inicializar el servidor en el segundo nodo secundario
mongod --replSet "rs0" --port 27019 --dbpath "C:\data\db2" --bind_ip localhost --logpath "C:\data\db2\log.log"


#inicializar una instancia en el nodo primario
mongosh --port 27017

#Cambiar la  base de datos
use tejo_tournament

#inicializar la replicación
rs.initiate()

#Añadir el primer nodo secundario
rs.add("localhost:27018")

#Añadir el segundo nodo secundario
rs.add("localhost:27019")

#Validar el estado
rs.status()

#Validar la configuración
rs.conf()

#Insertar un registro en el nodo primario
db.players.insertOne({_id:"player111",name:"Juan Perez",age:25})

#consultar el diccionario creado
db.players.find({_id:"player111"})

####Nodo Secundario####
#inicializar una instancia en el nodo secundario
mongosh --port 27019

#Cambiar la base de datos
use tejo_tournament

#Habilitar las consultas desde el nodo secundario
rs.slaveOk

#Consultar el registro creado desde el nodo primario
db.players.find({_id:"player111"})


