// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'Local Environment Heading',
  //apiURL: 'http://localhost:8000'
  //apiURL:  'https://nancyviza.tk:8000'
  apiURL:  'http://169.197.183.212:8000'
};
/*


       
db.users.updateMany({}, {"$set": {"filosophy": filosophy}})

db.curses.updateMany({}, {"$set": {"show": "false"}});
db.integers.updateMany({}, {"$set": {"show": "false"}});
db.curses.updateMany({},{"$unset":{"show":1}});
//db.integers.deleteMany({user:ObjectId('62cf3499f1443acd8c3dc41e')})//teacher amanda as std

//Cambiar contenido de campos
db.averages.updateMany({nota:"00"}, {"$set": {"nota": "0"}})
db.averages.updateMany({nota:"0"}, {"$set": {"nota": "-0"}})
db.averages.updateMany({nota:"-0"}, {"$set": {"nota": "0"}})
//


db.averages.find({nota: ''}).count()
db.averages.find({nota:'R'}).count()
db.averages.find({nota:'L'}).count()


db.averages.find({nota:{$in: ['L', 'R', '']}}).count()
db.averages.find({nota:{$nin: ['', 'R', 'L'], $lt:'10.5'}}).count()

db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:{$in: ['00', '-0', '0']}}).count()
db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:'0'}).count()
db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:'-0'}).count()
db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:'00'}).count()

db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:{$nin: ['', 'R', 'L'], $gt:'10.5'}}).count()
db.averages.find({year: '2022', especialidad:'P', ciclo:'I', nota:{$nin: ['', 'R', 'L'], $lt:'10.5'}}).count()

sin nota 8
retirados 425
licencia 97
desaprobados 93
aprobados 2275
total 2898


db.averages.aggregate([
    {$group : {_id:"$user", count:{$sum:1}}},
    {$sort:{"count":1}}
])

db.averages.aggregate([
    {
        $match: {
          $and: [
               {ciclo: "I"},
               {especialidad: "ED"}
           ]
        },
    },
    {$group : {
      _id:{user:"$user"}, cursos:{$sum:1},
      Puntaje: { $sum: { $multiply: [ 3, {$toInt:'$nota'} ] } },
    }},
    {$lookup: {from: "users", localField: "_id.user", foreignField: "_id", as: "www"}},
    {$sort:{"Puntaje":-1}}
]).pretty()


db.users.aggregate([
    {$group : {
      _id:{rol:"$rol"}, total:{$sum:1},
    }},
    {
          $lookup: {
            from: "users",
            let: { www: "$_id.rol" },
            pipeline: [
               { $match: { $expr: { $eq: ["$rol", "$$www"] } } },
               {$group : {
               _id:{mencion:"$mencion"}, total:{$sum:1},
               }
              },
              {
                     $lookup: {
                       from: "users",
                       let: { www: "$_id.mencion" },
                       pipeline: [
                          { $match: { $expr: { $eq: ["$mencion", "$$www"] }}},
                       ],
                       as: "cursew",
                     },
               },
            ],
            as: "cursew",
          },
    }
]).pretty()


$multiply:['$quantity',{$toInt:'$product.prize'}]

{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }


Ecosistema
Fundamentos Visuales III
Comunicación Visual I
Historia del Arte II
Dibujo III
Geometria Descriptiva
Psicologia del Arte
Taller Principal III - Grabado y Diseño Gráfico

db.example.insertMany(
[
{ "_id" : 1, "city" : "Berkeley, CA", "qty" : 648 },
{ "_id" : 2, "city" : "Bend, OR", "qty" : 491 },
{ "_id" : 3, "city" : "Kensington, CA", "qty" : 233 },
{ "_id" : 4, "city" : "Eugene, OR", "qty" : 842 },
{ "_id" : 5, "city" : "Reno, NV", "qty" : 655 },
{ "_id" : 6, "city" : "Portland, OR", "qty" : 408 },
{ "_id" : 7, "city" : "Sacramento, CA", "qty" : 574 },
)]

db.roles.insertMany(
  [
    {rol:"1"},
    {rol:"2"},
    {rol:"3"},
    {rol:"4"},
    {rol:"5"},
    {rol:""},
  ]
)


db.ciclos.insertMany(
  [
    {rol:"I"},
    {rol:"II"},
    {rol:"III"},
    {rol:"IV"},
    {rol:"V"},
    {rol:"VI"},
    {rol:"VII"},
    {rol:"VIII"},
    {rol:"IX"},
    {rol:"X"},
  ]
)



db.example.aggregate([
  { $project : { city_state : { $split: ["$city", ", "] }, qty : 1 } },
  { $unwind : "$city_state" },
  { $group : { _id: { "state" : "$city_state" }, total_qty : { "$sum" : "$qty" } } },
  { $match : { city_state : /[A-Z]{2}/ } },
  { $sort : { total_qty : -1 } }
]);

db.example.aggregate([
  { $project : { city_state : { $split: ["$city", ", "] }, qty : 1 } },
  { $unwind : "$city_state" },
  { $match : { city_state : /[A-Z]{2}/ } },
  { $group : { _id: { "state" : "$city_state" }, total_qty : { "$sum" : "$qty" } } },
]);


//1
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO" }, {$set:{'mension':'G'}} );
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /PINTURA" }, {$set:{'mension':'P'}} );
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /ESCULTURA" }, {$set:{'mension':'E'}} );
db.users.updateMany( {"carreramension" : "EDUCACIÓN ARTÍSTICA"}, {$set:{'mension':'ED'}} )
//2
db.users.updateMany( {"ciclo" : "I CICLO" }, {$set:{'ciclo':'I'}});
db.users.updateMany( {"ciclo" : "III CICLO" }, {$set:{'ciclo':'III'}});
db.users.updateMany( {"ciclo" : "V CICLO" }, {$set:{'ciclo':'V'}});
db.users.updateMany( {"ciclo" : "VII CICLO" }, {$set:{'ciclo':'VII'}});
db.users.updateMany( {"ciclo" : "IX CICLO" }, {$set:{'ciclo':'IX'}});
...5

//4
db.averages.updateMany( {"title" : "Ecosistema" }, {$set:{'title':'Ecosistema	'}} );
db.averages.updateMany( {"title" : "Fundamentos Visuales III" }, {$set:{'title':'Fundamentos Visuales III	'}} );
db.averages.updateMany( {"title" : "Comunicación Visual I" }, {$set:{'title':'Comunicación Visual	'}} );
db.averages.updateMany( {"title" : "Historia del Arte II" }, {$set:{'title':'Historia del Arte II	'}} );
db.averages.updateMany( {"title" : "Psicologia del Arte" }, {$set:{'title':'Psicología del Arte'}} );
db.averages.updateMany( {"title" : "Geometria Descriptiva" }, {$set:{'title':'Geometría Descriptiva I	'}} );
db.averages.updateMany( {"title" : "Taller Principal III - Grabado y Diseño Gráfico" }, {$set:{'title':'Taller Principal III (PEG)	'}} );
db.averages.updateMany( {"title" : "Dibujo III" }, {$set:{'title':'Dibujo III'}} );
...


db.averages.updateMany( {"title" : 'Metodos Estudios Superiores' }, {$set:{'title':'Métodos de Estudios Superiores'}} );
db.averages.updateMany( {"title" : 'Tecnologia de los Materiales' }, {$set:{'title':'Tecnología de los Materiales'}} );
db.averages.updateMany( {"title" : 'Morfologia Visual I' }, {$set:{'title':'Morfología Visual I'}} );
db.averages.updateMany( {"title" : '' }, {$set:{'title':''}} );
db.averages.updateMany( {"title" : '' }, {$set:{'title':''}} );
db.averages.updateMany( {"title" : '' }, {$set:{'title':''}} );


Ecosistema
Fundamentos Visuales III
Comunicación Visual
Historia del Arte II
Psicología del Arte
Geometría Descriptiva I
Taller Principal III (PEG)
Dibujo III

Ecosistema
Fundamentos Visuales III
Comunicación Visual I
Historia del Arte II
Psicología del Arte
Geometria Descriptiva
Taller Principal III - Grabado y Diseño Gráfico
Dibujo III





//3
db.cursesources.insertMany(
[
{ciclo:"I", mension:"AP", codigo:"FGCOM101", title:"Comunicación I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"FGMAA103", title:"Matemática Aplicada al Arte", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"FGMES105", title:"Métodos de Estudios Superiores", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"CATMA107", title:"Tecnología de los Materiales I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"CAFVI109", title:"Fundamentos Visuales I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"CAMVI111", title:"Morfología Visual I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"FETAP113", title:"Taller Principal I (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "No tiene"},
{ciclo:"I", mension:"AP", codigo:"FEDIB115", title:"Dibujo I", teoria:"2", practica:"6", credito:"5", requisito: "No tiene"},
{ciclo:"II", mension:"AP", codigo:"FGCOM102", title:"Comunicación II", teoria:"2", practica:"0", credito:"2", requisito: "Comunicación I"},
{ciclo:"II", mension:"AP", codigo:"FGAIN104", title:"Arte e Interculturalidad", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"II", mension:"AP", codigo:"CATMA108", title:"Tecnología de los Materiales II", teoria:"2", practica:"0", credito:"2", requisito: "Tecnolo. de los Materi. I"},
{ciclo:"II", mension:"AP", codigo:"CAFVI110", title:"Fundamentos Visuales II", teoria:"2", practica:"0", credito:"2", requisito: "Fundamentos Visuales I"},
{ciclo:"II", mension:"AP", codigo:"CAMVI112", title:"Morfología Visual II", teoria:"2", practica:"0", credito:"2", requisito: "Morfología Visual I"},
{ciclo:"II", mension:"AP", codigo:"CAHAR114", title:"Historia del Arte I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"II", mension:"AP", codigo:"FETAP114", title:"Taller Principal II (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal I (PEG)"},
{ciclo:"II", mension:"AP", codigo:"FEDIB116", title:"Dibujo II", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo I"},
{ciclo:"III", mension:"AP", codigo:"FMECO201", title:"Ecosistema", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"III", mension:"AP", codigo:"CAFVI203", title:"Fundamentos Visuales III", teoria:"2", practica:"0", credito:"2", requisito: "Fundamentos Visuales II"},
{ciclo:"III", mension:"AP", codigo:"CACVI205", title:"Comunicación Visual", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"III", mension:"AP", codigo:"CAHAR207", title:"Historia del Arte II", teoria:"2", practica:"0", credito:"2", requisito: "Historia del Arte I"},
{ciclo:"III", mension:"AP", codigo:"CAPÀR209", title:"Psicología del Arte", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"III", mension:"AP", codigo:"CAGDE211", title:"Geometría Descriptiva I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"III", mension:"AP", codigo:"FETAP213", title:"Taller Principal III (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal II (PEG)"},
{ciclo:"III", mension:"AP", codigo:"FEDIB215", title:"Dibujo III", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo II"},
{ciclo:"IV", mension:"AP", codigo:"CAFVI204", title:"Fundamentos Visuales IV", teoria:"2", practica:"0", credito:"2", requisito: "Fundamentos Visuales III"},
{ciclo:"IV", mension:"AP", codigo:"CAAAR206", title:"Anatomía Artística I", teoria:"2", practica:"0", credito:"2", requisito: "Morfología Visual II"},
{ciclo:"IV", mension:"AP", codigo:"CAHAR208", title:"Historia del Arte III", teoria:"2", practica:"0", credito:"2", requisito: "Historia del Arte II"},
{ciclo:"IV", mension:"AP", codigo:"CAEAR210", title:"Estética del Arte", teoria:"2", practica:"0", credito:"2", requisito: "Psicología del Arte"},
{ciclo:"IV", mension:"AP", codigo:"CAGDE212", title:"Geometría Descriptiva II", teoria:"2", practica:"0", credito:"2", requisito: "Geometría Descriptiva I"},
{ciclo:"IV", mension:"AP", codigo:"FETAP214", title:"Taller Principal IV (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal III (PEG)"},
{ciclo:"IV", mension:"AP", codigo:"FEDIB216", title:"Dibujo IV", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo III"},
{ciclo:"IV", mension:"AP", codigo:"FEDIA218", title:"Diseño Artístico", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"V", mension:"AP", codigo:"CASAR301", title:"Semiótica del Arte", teoria:"2", practica:"0", credito:"2", requisito: "Comunicación Visual"},
{ciclo:"V", mension:"AP", codigo:"CAAAR303", title:"Anatomía Artística II", teoria:"2", practica:"0", credito:"2", requisito: "Anatomía Artística I"},
{ciclo:"V", mension:"AP", codigo:"CAHAR305", title:"Historia del Arte IV", teoria:"2", practica:"0", credito:"2", requisito: "Historia del Arte III"},
{ciclo:"V", mension:"AP", codigo:"CAFAR307", title:"Filosofía del Arte", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"V", mension:"AP", codigo:"CAFOR309", title:"Fotografía Artística I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"V", mension:"AP", codigo:"FETAP311", title:"Taller Principal V (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal IV (PEG)"},
{ciclo:"V", mension:"AP", codigo:"FEDIB313", title:"Dibujo V", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo IV"},
{ciclo:"V", mension:"AP", codigo:"FEDAD315", title:"Diseño Artístico Digital I", teoria:"2", practica:"0", credito:"2", requisito: "Diseño Artístico"},
{ciclo:"VI", mension:"AP", codigo:"CAHAR306", title:"Historia del Arte V", teoria:"2", practica:"0", credito:"2", requisito: "Historia del Arte IV"},
{ciclo:"VI", mension:"AP", codigo:"CASAR308", title:"Sociología del Arte", teoria:"2", practica:"0", credito:"2", requisito: "Filosofía del Arte"},
{ciclo:"VI", mension:"AP", codigo:"CAFOR310", title:"Fotografía Artística II", teoria:"2", practica:"0", credito:"2", requisito: "Fotografía Artística I"},
{ciclo:"VI", mension:"AP", codigo:"FETAP312", title:"Taller Principal VI (PEG)", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal V (PEG)"},
{ciclo:"VI", mension:"AP", codigo:"FEDIB314", title:"Dibujo VI", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo V"},
{ciclo:"VI", mension:"AP", codigo:"FEDAD316", title:"Diseño Artístico Digital II", teoria:"2", practica:"0", credito:"2", requisito: "Diseño Artístico Digital I"},
{ciclo:"VI", mension:"AP", codigo:"FECER318", title:"Cerámica I", teoria:"4", practica:"0", credito:"4", requisito: "No tiene"},
{ciclo:"VII", mension:"AP", codigo:"CAHAR401", title:"Historia del Arte VI", teoria:"2", practica:"0", credito:"2", requisito: "Historia del Arte V"},
{ciclo:"VII", mension:"AP", codigo:"CACRA403", title:"Crítica del Arte", teoria:"2", practica:"0", credito:"2", requisito: "Estética del Arte"},
{ciclo:"VII", mension:"AP", codigo:"FETAP405", title:"Taller Principal VII", teoria:"2", practica:"8", credito:"6", requisito: "Taller Principal VI (PEG)"},
{ciclo:"VII", mension:"AP", codigo:"FEDIB407", title:"Dibujo VII", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo VI"},
{ciclo:"VII", mension:"AP", codigo:"FEAVI409", title:"Arte Virtual", teoria:"2", practica:"0", credito:"2", requisito: "Diseño Artístico Digital II"},
{ciclo:"VII", mension:"AP", codigo:"FEINA411", title:"Investigación Artística I", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"VII", mension:"AP", codigo:"FECER413", title:"Cerámica II", teoria:"2", practica:"2", credito:"3", requisito: "Cerámica I"},
{ciclo:"VIII", mension:"AP", codigo:"CAGEM404", title:"Gestión Empresarial", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"VIII", mension:"AP", codigo:"FETAP406", title:"Taller Principal VIII (PEG)", teoria:"2", practica:"10", credito:"7", requisito: "Taller Principal VII (PEG)"},
{ciclo:"VIII", mension:"AP", codigo:"FEDIB408", title:"Dibujo VIII", teoria:"2", practica:"6", credito:"5", requisito: "Dibujo VII"},
{ciclo:"VIII", mension:"AP", codigo:"FESAD410", title:"Seminario Artístico Digital I", teoria:"4", practica:"0", credito:"4", requisito: "Arte Virtual"},
{ciclo:"VIII", mension:"AP", codigo:"FEINA412", title:"Investigación Artística II", teoria:"2", practica:"0", credito:"2", requisito: "Investigación Artística I"},
{ciclo:"VIII", mension:"AP", codigo:"FETCR416", title:"Taller de Conservación y RestauraciónI", teoria:"2", practica:"0", credito:"2", requisito: "No tiene"},
{ciclo:"IX", mension:"AP", codigo:"CAPAC501", title:"Proyectos Artísticos Culturales", teoria:"2", practica:"0", credito:"2", requisito: "Gestión Empresarial"},
{ciclo:"IX", mension:"AP", codigo:"FETAP503", title:"Taller Principal IX (PEG)", teoria:"0", practica:"14", credito:"7", requisito: "Taller Principal VIII (PEG)"},
{ciclo:"IX", mension:"AP", codigo:"FESAD505", title:"Seminario Artístico Digital II", teoria:"4", practica:"0", credito:"4", requisito: "Seminario Artístico Digital I"},
{ciclo:"IX", mension:"AP", codigo:"FEINA507", title:"Investigación Artística III", teoria:"2", practica:"2", credito:"3", requisito: "Investigación Artística II"},
{ciclo:"IX", mension:"AP", codigo:"FETCR509", title:"Taller de Conservación y Restauración II", teoria:"0", practica:"2", credito:"1", requisito: "Taller de Conservación y Restauración I"},
{ciclo:"IX", mension:"AP", codigo:"FEPPP511", title:"Práctica Pre Profesional I", teoria:"2", practica:"2", credito:"3", requisito: "No tiene"},
{ciclo:"X", mension:"AP", codigo:"FETAP504", title:"Taller Principal X (PEG)", teoria:"0", practica:"14", credito:"7", requisito: "Taller Principal IX (PEG)"},
{ciclo:"X", mension:"AP", codigo:"FESAD506", title:"Seminario Artístico Digital III", teoria:"0", practica:"4", credito:"2", requisito: "Seminario Artístico Digital II"},
{ciclo:"X", mension:"AP", codigo:"FEINA508", title:"Investigación Artística IV", teoria:"4", practica:"0", credito:"4", requisito: "Investigación Artística III"},
{ciclo:"X", mension:"AP", codigo:"FETIA514", title:"Taller de Integración Artística", teoria:"2", practica:"2", credito:"3", requisito: "Cerámica II"},
{ciclo:"X", mension:"AP", codigo:"FEPPP512", title:"Práctica Pre Profesional II", teoria:"0", practica:"4", credito:"2", requisito: "Práctica Pre Profesional I"},
{ciclo:"I", mension:"EA", codigo :"ABCOM101", title:"Comunicación I", teoria:"4", practica:"0", credito:"4", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"ABMES103", title:"Métodos de Estudios Superiores", teoria:"4", practica:"0", credito:"4", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPDI107", title:"Dibujo I", teoria:"2", practica:"2", credito:"3", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPPI109", title:"Pintura I", teoria:"2", practica:"4", credito:"4", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPES111", title:"Escultura I", teoria:"2", practica:"4", credito:"4", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPPE113", title:"Perspectiva", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPEE115", title:"Elementos Estéticos I", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"I", mension:"EA", codigo :"AFPMV117", title:"Morfología Visual", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"II", mension:"EA", codigo :"ABCOM102", title:"Comunicación II", teoria:"2", practica:"2", credito:"3", requisito:"Comunicación I"},
{ciclo:"II", mension:"EA", codigo :"ABMEV104", title:"Métodos de Estudio Virtual", teoria:"2", practica:"0", credito:"2", requisito:"Mét. de Estu. Superiores"},
{ciclo:"II", mension:"EA", codigo :"AEDIA106", title:"Didáctica de las Artes I", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"II", mension:"EA", codigo :"AFPDI108", title:"Dibujo II", teoria:"2", practica:"2", credito:"3", requisito:"Dibujo I"},
{ciclo:"II", mension:"EA", codigo :"AFPPI110", title:"Pintura II", teoria:"2", practica:"4", credito:"4", requisito:"Pintura I"},
{ciclo:"II", mension:"EA", codigo :"AFPES112", title:"Escultura II", teoria:"2", practica:"4", credito:"4", requisito:"Escultura I"},
{ciclo:"II", mension:"EA", codigo :"AFPEE116", title:"Elementos Estéticos II", teoria:"4", practica:"0", credito:"4", requisito:"Elementos Estéticos I"},
{ciclo:"II", mension:"EA", codigo :"AFPAA118", title:"Anatomía Artística", teoria:"2", practica:"0", credito:"2", requisito:"Morfología Visual"},
{ciclo:"III", mension:"EA", codigo :"ABMAT201", title:"Matemática I", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"III", mension:"EA", codigo :"ABSOC203", title:"Sociedad I", teoria:"3", practica:"0", credito:"3", requisito:"No tiene"},
{ciclo:"III", mension:"EA", codigo :"AEDIA205", title:"Didáctica de las Artes II", teoria:"2", practica:"0", credito:"2", requisito:"Didáctica de las Artes I"},
{ciclo:"III", mension:"EA", codigo :"AFPDI211", title:"Dibujo III", teoria:"2", practica:"2", credito:"3", requisito:"Dibujo II"},
{ciclo:"III", mension:"EA", codigo :"AFPPI213", title:"Pintura III", teoria:"2", practica:"4", credito:"4", requisito:"Pintura II"},
{ciclo:"III", mension:"EA", codigo :"AFPES215", title:"Escultura III", teoria:"2", practica:"4", credito:"4", requisito:"Escultura II"},
{ciclo:"III", mension:"EA", codigo :"AFPHA217", title:"Historia del Arte I", teoria:"3", practica:"0", credito:"3", requisito:"No tiene"},
{ciclo:"III", mension:"EA", codigo :"AFPDA219", title:"Diseño Artístico", teoria:"4", practica:"0", credito:"4", requisito:"Elementos Estéticos II"},
{ciclo:"IV", mension:"EA", codigo :"ABSOC204", title:"Sociedad II", teoria:"2", practica:"0", credito:"2", requisito:"Sociedad I"},
{ciclo:"IV", mension:"EA", codigo :"AEDIA206", title:"Didáctica de las Artes III", teoria:"2", practica:"0", credito:"2", requisito:"Didáctica de las Artes II"},
{ciclo:"IV", mension:"EA", codigo :"AETED208", title:"Teoría de la Educación I", teoria:"6", practica:"0", credito:"6", requisito:"No tiene"},
{ciclo:"IV", mension:"EA", codigo :"AEPSI210", title:"Psicología I", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"IV", mension:"EA", codigo :"AFPDI212", title:"Dibujo IV", teoria:"2", practica:"2", credito:"3", requisito:"Dibujo III"},
{ciclo:"IV", mension:"EA", codigo :"AFPPI214", title:"Pintura IV", teoria:"0", practica:"6", credito:"3", requisito:"Pintura III"},
{ciclo:"IV", mension:"EA", codigo :"AFPES216", title:"Escultura IV", teoria:"0", practica:"6", credito:"3", requisito:"Escultura III"},
{ciclo:"IV", mension:"EA", codigo :"AFPHA218", title:"Historia del Arte II", teoria:"2", practica:"0", credito:"2", requisito:"Historia del Arte I"},
{ciclo:"V", mension:"EA", codigo :"AEDIA307", title:"Didáctica de las Artes IV", teoria:"2", practica:"0", credito:"2", requisito:"Didáctica de las Artes III"},
{ciclo:"V", mension:"EA", codigo :"AETED309", title:"Teoría de la Educación II", teoria:"4", practica:"2", credito:"5", requisito:"Teoría de la Educación I"},
{ciclo:"V", mension:"EA", codigo :"AEPSI311", title:"Psicología II", teoria:"4", practica:"0", credito:"4", requisito:"Psicología I"},
{ciclo:"V", mension:"EA", codigo :"AFPDI313", title:"Dibujo V", teoria:"2", practica:"2", credito:"3", requisito:"Dibujo IV"},
{ciclo:"V", mension:"EA", codigo :"AFPTR315", title:"Taller Regional I", teoria:"0", practica:"6", credito:"3", requisito:"Pintura IV"},
{ciclo:"V", mension:"EA", codigo :"AFPGR317", title:"Grabado I", teoria:"0", practica:"6", credito:"3", requisito:"Escultura IV"},
{ciclo:"V", mension:"EA", codigo :"AFPHA319", title:"Historia del Arte III", teoria:"2", practica:"0", credito:"2", requisito:"Historia del Arte II"},
{ciclo:"VI", mension:"EA", codigo :"ABQUE302", title:"Quechua", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"VI", mension:"EA", codigo :"ABEIA304", title:"Educación Intercultural Artístico", teoria:"2", practica:"0", credito:"2", requisito:"Sociedad II"},
{ciclo:"VI", mension:"EA", codigo :"ABFIL306", title:"Filosofía I", teoria:"2", practica:"0", credito:"2", requisito:"No tiene"},
{ciclo:"VI", mension:"EA", codigo :"AECTG308", title:"Currículo Tecnología y Gestión I", teoria:"4", practica:"0", credito:"4", requisito:"No tiene"},
{ciclo:"VI", mension:"EA", codigo :"AFPDI314", title:"Dibujo VI", teoria:"0", practica:"4", credito:"2", requisito:"Dibujo V"},
{ciclo:"VI", mension:"EA", codigo :"AFPTR316", title:"Taller Regional II", teoria:"0", practica:"6", credito:"3", requisito:"Taller Regional I"},
{ciclo:"VI", mension:"EA", codigo :"AFPGR318", title:"Grabado II", teoria:"0", practica:"6", credito:"3", requisito:"Grabado I"},
{ciclo:"VI", mension:"EA", codigo :"AFPMU322", title:"Música I", teoria:"4", practica:"0", credito:"4", requisito:"No tiene"},
{ciclo:"VII", mension:"EA", codigo :"ABFIL403", title:"Filosofía II", teoria:"4", practica:"0", credito:"4", requisito:"Filosofía I"},
{ciclo:"VII", mension:"EA", codigo :"AECTG405", title:"Currículo Tecnología y Gestión II", teoria:"4", practica:"0", credito:"4", requisito:"Curríc. Tecn. y Gestión I"},
{ciclo:"VII", mension:"EA", codigo :"AFPRE409", title:"Retrato I", teoria:"0", practica:"2", credito:"1", requisito:"Taller Regional II"},
{ciclo:"VII", mension:"EA", codigo :"AFPGR411", title:"Grabado III", teoria:"0", practica:"6", credito:"3", requisito:"Grabado II"},
{ciclo:"VII", mension:"EA", codigo :"AFPCE413", title:"Cerámica I", teoria:"0", practica:"2", credito:"1", requisito:"No tiene"},
{ciclo:"VII", mension:"EA", codigo :"AFPMU415", title:"Música II", teoria:"0", practica:"4", credito:"2", requisito:"Música I"},
{ciclo:"VII", mension:"EA", codigo :"AFPTE417", title:"Teatro I", teoria:"0", practica:"4", credito:"2", requisito:"No tiene"},
{ciclo:"VII", mension:"EA", codigo :"AFPPP419", title:"Tutoría y Práctica Pedagógica I", teoria:"4", practica:"0", credito:"4", requisito:"No tiene"},
{ciclo:"VIII", mension:"EA", codigo :"ABEST402", title:"Estadística", teoria:"2", practica:"0", credito:"2", requisito:"Matemática"},
{ciclo:"VIII", mension:"EA", codigo :"AECTG406", title:"Currículo Tecnología y Gestión III", teoria:"4", practica:"0", credito:"4", requisito:"Curríc. Tecn. y Gestión II"},
{ciclo:"VIII", mension:"EA", codigo :"AEINV408", title:"Investigación I", teoria:"4", practica:"0", credito:"4", requisito:"Mét. de Estudio Virtual"},
{ciclo:"VIII", mension:"EA", codigo :"AFPRE410", title:"Retrato II", teoria:"0", practica:"2", credito:"1", requisito:"Retrato I"},
{ciclo:"VIII", mension:"EA", codigo :"AFPIA412", title:"Integración Artística I", teoria:"0", practica:"4", credito:"2", requisito:"Grabado III"},
{ciclo:"VIII", mension:"EA", codigo :"AFPCE414", title:"Cerámica II", teoria:"0", practica:"4", credito:"2", requisito:"Cerámica I"},
{ciclo:"VIII", mension:"EA", codigo :"AFPTE418", title:"Teatro II", teoria:"0", practica:"4", credito:"2", requisito:"Teatro I"},
{ciclo:"VIII", mension:"EA", codigo :"AFPPP420", title:"Tutoría y Práctica Pedagógica II", teoria:"0", practica:"6", credito:"3", requisito:"Tuto. y Práct. Pedagóg. I"},
{ciclo:"IX", mension:"EA", codigo :"AECTG501", title:"Currículo Tecnología y Gestión IV", teoria:"4", practica:"0", credito:"4", requisito:"Curríc. Tecn. y Gesti. III"},
{ciclo:"IX", mension:"EA", codigo :"AEINV503", title:"Investigación II", teoria:"6", practica:"0", credito:"6", requisito:"Investigación I"},
{ciclo:"IX", mension:"EA", codigo :"AFPIA412", title:"Integración Artística II", teoria:"0", practica:"4", credito:"2", requisito:"Integración Artística I"},
{ciclo:"IX", mension:"EA", codigo :"AFPDA507", title:"Danza I", teoria:"0", practica:"4", credito:"2", requisito:"Teatro II"},
{ciclo:"IX", mension:"EA", codigo :"AFPPP509", title:"Tutoría y Práctica Pedagógica III", teoria:"0", practica:"12", credito:"6", requisito:"Tuto. y Práct. Pedagóg. II"},
{ciclo:"X", mension:"EA", codigo :"AEINV504", title:"Investigación III", teoria:"6", practica:"0", credito:"6", requisito:"Investigación II"},
{ciclo:"X", mension:"EA", codigo :"AFPOA506", title:"Obra Artística", teoria:"0", practica:"4", credito:"2", requisito:"Integración Artística II"},
{ciclo:"X", mension:"EA", codigo :"AFPDA508", title:"Danza II", teoria:"0", practica:"4", credito:"2", requisito:"Danza I"},
{ciclo:"X", mension:"EA", codigo :"AFPPP510", title:"Tutoría y Práctica Pedagógica IV", teoria:"0", practica:"16", credito:"8", requisito:"Tuto. y Práct. Pedag. III"},
]);



{
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           count: { $sum: 1 }
         }
     }

     { "_id" : { "day" : 46, "year" : 2014 }, "totalAmount" : 150, "count" : 2 }
     { "_id" : { "day" : 34, "year" : 2014 }, "totalAmount" : 45, "count" : 2 }
     { "_id" : { "day" : 1, "year" : 2014 }, "totalAmount" : 20, "count" : 1 }
     db.wwws.insertMany(
[
  {name:"75869653",email: "75869653@w",  size: { h: 14, w: 21, uom: "cm" }, password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
  {name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")}])
-//Actualizar e ingresar documentos nested
db.users.update( {_id: ObjectId('623cd42f0ad9cfb39677310e')}, { '$set': {"size.h" : 'www'} });
//Actualizar e ingresar documentos nuevos
db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, {$set:{'role':'New MongoDB Tutorial', 'rolewww':'New MongoDB Tutorial'}} )

//Actualizar y agregar documentos nuevos a toda la collección
db.curses.updateMany( { }, {$set:{'ciclo':'V', 'credito':'3', 'especialidad':'G'}} )
db.averages.updateMany( { }, {$set:{'year':'2022' }})
//borrar un campo de todo los documentos
db.averages.updateMany( { }, { $unset: { year: "" } })
---------------------
//Actualizar y aumentar campos
db.curses.update( { '_id':ObjectId('62dfeb1e3715ea8dcc8fcddf') }, {$set:{'name':'Comunicación I', 'number':'39', 'ciclo':'I', especialidad:"ED", credito:"4"}})

//insertar nuevo campo a toda la colleccion con dato en particular
db.averages.updateMany({}, {"$set": {"filosophy": "wwwwwwwwwwwwwwwww"}})

//insertar nuevo campo a algunos datos de la colleccion con un dato en particular
db.users.update( { 'carreramension':'EDUCACIÓN ARTÍSTICA' }, {$set:{'mension':'ED'}} )

//rename field
db.users.updateMany({}, {$rename:{"identificacion_nacional":"dni"}}, false, true)

//eliminar un campo. Only one with ID
db.averages.updateMany({},{"$unset":{"year":1}});
db.averages.updateMany({},{"$unset":{"filosophy":1}});

db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, { $unset: { type: "" } } )

//All with field "type"
db.wwws.updateMany( { }, { $unset: { type: "" } } )

//Remover collection
db.users.deletemany( {'rol':3} )


mongodump --out w1.json --db fismart --host localhost  //descargar
mongodump --out ww.json --db fgpa --host localhost  //descargar
mongorestore --db fismart ww.json/fismart  //subir
mongorestore --db fgpa ww.json/fgpa//subir

mongodump --out w1.json --db fismart --collection wwws --host localhost
mongorestore --db namedatabase --collection namecollectionqueenviar w1.json/fisart //restaurar coleccion.



db.averages.updateMany({codigo:"ABCOM101", ciclo:"I", year:"2023",mencion:"E"},{$set:{codigo:"FGCOM101"}})
db.averages.updateMany({codigo:"AFPDI107", ciclo:"I", year:"2023",mencion:"E"},{$set:{codigo:"FEDIB115"}})
db.averages.updateMany({codigo:"ABMES103", ciclo:"I", year:"2023",mencion:"E"},{$set:{codigo:"FGMES105"}})
db.averages.updateMany({codigo:"AFPDI211", ciclo:"III", year:"2023",mencion:"E"},{$set:{codigo:"FEDIB215"}})
db.averages.updateMany({codigo:"CAHAR401", ciclo:"V", year:"2023",mencion:"E"},{$set:{codigo:"CAHAR305"}})
db.averages.updateMany({codigo:"AFPDI313", ciclo:"V", year:"2023",mencion:"E"},{$set:{codigo:"FEDIB313"}})

db.averages.updateMany({codigo:"CAHAR401", ciclo:"V", year:"2023",mencion:"G"},{$set:{codigo:"CAHAR305"}})
db.averages.updateMany({codigo:"AFPDI313", ciclo:"V", year:"2023",mencion:"G"},{$set:{codigo:"FEDIB313"}})
db.averages.updateMany({codigo:"AFPDI211", ciclo:"III", year:"2023",mencion:"G"},{$set:{codigo:"FEDIB215"}})
db.averages.updateMany({codigo:"ABCOM101", ciclo:"I", year:"2023",mencion:"G"},{$set:{codigo:"FGCOM101"}})
db.averages.updateMany({codigo:"ABMES103", ciclo:"I", year:"2023",mencion:"G"},{$set:{codigo:"FGMES105"}})
db.averages.updateMany({codigo:"AFPDI107", ciclo:"I", year:"2023",mencion:"G"},{$set:{codigo:"FEDIB115"}})


db.averages.updateMany({codigo:"ABCOM101", ciclo:"I", year:"2023",mencion:"P"},{$set:{codigo:"FGCOM101"}})
db.averages.updateMany({codigo:"ABMES103", ciclo:"I", year:"2023",mencion:"P"},{$set:{codigo:"FGMES105"}})
db.averages.updateMany({codigo:"AFPDI107", ciclo:"I", year:"2023",mencion:"P"},{$set:{codigo:"FEDIB115"}})
db.averages.updateMany({codigo:"AFPDI211", ciclo:"III", year:"2023",mencion:"P"},{$set:{codigo:"FEDIB215"}})
db.averages.updateMany({codigo:"CAHAR401", ciclo:"V", year:"2023",mencion:"P"},{$set:{codigo:"CAHAR305"}})
db.averages.updateMany({codigo:"AFPDI313", ciclo:"V", year:"2023",mencion:"P"},{$set:{codigo:"FEDIB313"}})


*/


