db.users.updateMany({
  dni: {
    $in:
      [
        "71596957",
        "77434743",
        "46281909",
        "74310534",
        "70410774",
        "70425591",
        "70428120",
        "70788957",
        "72919851",
        "70157180",
        "70662911",
        "74356961",
        "70462499",
        "71290314",
        "74757733",
        "74074356",
        "28289824",
        "73665449",
        "70107902",
        "74162741",
        "72267564",
        "71749395",
        "70417748",
        "72946139",
        "70844985",
        "72947706",
        "72009675",
        "70665973",
        "75360387",
            ]
  }
}, { "$set": { "mencion": "P", "ciclo": "III" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "73745914",
        "70410731",
        "70447686",
        "70428206",
        "70784847",
        "70393417",
        "76176636",
        "76006111",
        "48669613",
        "70930761",
        "62604963",
        "77686280",
        "73421634",
        "70793029",
        "77015493",
        "71328194",
        "70416624",
            ]
  }
}, { "$set": { "mencion": "G", "ciclo": "III" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "70046352",
        "75940572",
        "70454187",
        "70214394",
            ]
  }
}, { "$set": { "mencion": "E", "ciclo": "III" } })










///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "71596957", ciclo: "III", mencion: "P", name: "ALCARRAZ QUISPE, Whiny Anghel" },
    { dni: "77434743", ciclo: "III", mencion: "P", name: "BEJAR ASTO, Claudia Nicolle" },
    { dni: "46281909", ciclo: "III", mencion: "P", name: "CAMPOS BERROCAL, David Luisin" },
    { dni: "74310534", ciclo: "III", mencion: "P", name: "CANCHO TUDELANO, Herbert Alex" },
    { dni: "70410774", ciclo: "III", mencion: "P", name: "CARRERA GALVEZ, Joshua Adoniram" },
    { dni: "70425591", ciclo: "III", mencion: "P", name: "CARRERA GALVEZ, Zurisadai Lucero" },
    { dni: "70428120", ciclo: "III", mencion: "P", name: "CHINO ROJAS, Anais Zenaida" },
    { dni: "70788957", ciclo: "III", mencion: "P", name: "CURO MARCA, Cristofer Andres" },
    { dni: "72919851", ciclo: "III", mencion: "P", name: "GOMEZ YUPANQUI, Solie Pamela" },
    { dni: "70157180", ciclo: "III", mencion: "P", name: "GUTIERREZ ALAYA, Darlin Lucero" },
    { dni: "70662911", ciclo: "III", mencion: "P", name: "GUTIERREZ GOMEZ, Nelia Luz" },
    { dni: "74356961", ciclo: "III", mencion: "P", name: "HUAMAN QUIQUIN, Julio Luis" },
    { dni: "70462499", ciclo: "III", mencion: "P", name: "HUAMANI PALOMINO, Coraima Paola" },
    { dni: "71290314", ciclo: "III", mencion: "P", name: "HUARANCCA OCHOA, Rooss Jhassmin" },
    { dni: "74757733", ciclo: "III", mencion: "P", name: "INGA YUPANQUI, Adesenia" },
    { dni: "74074356", ciclo: "III", mencion: "P", name: "LOPEZ SULCA, Carlos Junior" },
    { dni: "28289824", ciclo: "III", mencion: "P", name: "LUNA MOLERO, Hugo Roberto" },
    { dni: "73665449", ciclo: "III", mencion: "P", name: "MORALES SABOYA, Alison Jhomayra" },
    { dni: "70107902", ciclo: "III", mencion: "P", name: "PALOMINO RODRIGUEZ, Mayumy Liz" },
    { dni: "74162741", ciclo: "III", mencion: "P", name: "PEÑA CCOLLCCA, Juan Carlos" },
    { dni: "72267564", ciclo: "III", mencion: "P", name: "POMA LLACCTA, Julio Cesar" },
    { dni: "71749395", ciclo: "III", mencion: "P", name: "POZO ORTIZ, Yhenifer Mayleyny " },
    { dni: "70417748", ciclo: "III", mencion: "P", name: "QUINTO HINOSTROZA, Cristian Arius" },
    { dni: "72946139", ciclo: "III", mencion: "P", name: "RIVERA RAMIREZ, Elver Teofilo" },
    { dni: "70844985", ciclo: "III", mencion: "P", name: "VASQUEZ GONZALES, Franklin" },
    { dni: "72947706", ciclo: "III", mencion: "P", name: "VEGA VERGARA, Katherine Kirstin" },
    { dni: "72009675", ciclo: "III", mencion: "P", name: "VENTURA CAMPOS, Deysi Julia" },
    { dni: "70665973", ciclo: "III", mencion: "P", name: "VILLANUEVA HUAMANI, Rafael Ivan" },
    { dni: "75360387", ciclo: "III", mencion: "P", name: "ZAMORA MUNAYLLA, Cody Nicoll" },
    { dni: "73745914", ciclo: "III", mencion: "G", name: "AGUIRRE DIPAS, Jhonmir Jefry" },
    { dni: "70410731", ciclo: "III", mencion: "G", name: "ALVIAR ROJAS, Jhoel" },
    { dni: "70447686", ciclo: "III", mencion: "G", name: "BARRIENTOS TUEROS, Yadir Edgar" },
    { dni: "70428206", ciclo: "III", mencion: "G", name: "CANCHARI ORTIZ, Brenda Anais" },
    { dni: "70784847", ciclo: "III", mencion: "G", name: "CONDORI RIMACHI, Rosita Rosmery" },
    { dni: "70393417", ciclo: "III", mencion: "G", name: "GOMEZ ATAUCUSI, Alex Cristhian" },
    { dni: "76176636", ciclo: "III", mencion: "G", name: "GUILLEN ALMANZA, Ronald Deivi" },
    { dni: "76006111", ciclo: "III", mencion: "G", name: "MARTINEZ ARANA, Walter Willy" },
    { dni: "48669613", ciclo: "III", mencion: "G", name: "MORALES HUARACA, Kevin Percy" },
    { dni: "70930761", ciclo: "III", mencion: "G", name: "MORALES RIVERA, Juan Carlos" },
    { dni: "62604963", ciclo: "III", mencion: "G", name: "PRADO CASTILLO, Deysi Brigitte" },
    { dni: "77686280", ciclo: "III", mencion: "G", name: "RAMOS AYALA, Carlos Michel" },
    { dni: "73421634", ciclo: "III", mencion: "G", name: "RAMOS JAYO, Federico Danilo" },
    { dni: "70793029", ciclo: "III", mencion: "G", name: "ROJAS QUISPE, Celso" },
    { dni: "77015493", ciclo: "III", mencion: "G", name: "SALCEDO HUARCAYA, Ely Flor" },
    { dni: "71328194", ciclo: "III", mencion: "G", name: "SULCA LAURENTE, Ungriela " },
    { dni: "70416624", ciclo: "III", mencion: "G", name: "VILLANUEVA HUAYHUA, Luis Guillermo" },
    { dni: "70046352", ciclo: "III", mencion: "E", name: "LUJAN JANAMPA, Ana Lucero" },
    { dni: "75940572", ciclo: "III", mencion: "E", name: "PALOMINO CARDENAS, Sofia Jade" },
    { dni: "70454187", ciclo: "III", mencion: "E", name: "PARIONA ROJAS, Mequias Misael" },
    { dni: "70214394", ciclo: "III", mencion: "E", name: "TERRY PACHECO, Joaquin Augusto" },
  ])

  2(29 17 4)

db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "III" },
        { mencion: "P" }
      ]
    },
  },
  {
    $lookup: {
      from: "users",
      let: { www: "$dni" },
      pipeline: [
        { $match: { $expr: { $eq: ["$dni", "$$www"] } } },
        { $project: { _id: 1, name: 1 } }
      ],
      as: "userw",
    },
  },
  { $sort: { "userw.name": 1 } }
]).pretty();
