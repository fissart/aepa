db.users.updateMany({
  dni: {
    $in:
      [
        "73462147",
        "40651545",
        "70239353",
        "46869371",
        "70573511",
        "74456983",
        "73424709",
        "71863638",
        "45364107",
        "25807458",
        "72352505",
        "74200216",
        "70077258",
        "76328969",
        "78291082",
        "70433634",
        "70205888",
        "63384518",
        "44342503",
        "71301068",
        "70506064",
        "47638330",
        "72917632",
        "42768000",
        "71942328",
        "44154555",
        "71888973",
        "70565837",
        "76573686",
        "73877063",
        "70020574",
        "70809465",
        "74401645",
        "72014705",
        "70415470",
        "76549784",
        "77681122",
        "70426947",
        "75559995",
        "70397668",
            ]
  }
}, { "$set": { "mencion": "ED", "ciclo": "VII" } })














///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "73462147", ciclo: "VII", mencion: "ED", name: "ALVAREZ SULCA, Antuane Esmeralda" },
    { dni: "40651545", ciclo: "VII", mencion: "ED", name: "ATAURIMA MAÑUICO, Raul" },
    { dni: "70239353", ciclo: "VII", mencion: "ED", name: "BENDEZU PONSECA, Roy Kevin " },
    { dni: "46869371", ciclo: "VII", mencion: "ED", name: "BORDA HUAMAN, Jhondisney" },
    { dni: "70573511", ciclo: "VII", mencion: "ED", name: "CAHUANA OCHANTE, Juan Carlos" },
    { dni: "74456983", ciclo: "VII", mencion: "ED", name: "CASTELLARES GUILLEN, Anet Yaquelin" },
    { dni: "73424709", ciclo: "VII", mencion: "ED", name: "CASTILLO FLORES, Brayan Esmith" },
    { dni: "71863638", ciclo: "VII", mencion: "ED", name: "CASTILLO TORRES, Dino" },
    { dni: "45364107", ciclo: "VII", mencion: "ED", name: "CCORISONCCO PINCO, Josue" },
    { dni: "25807458", ciclo: "VII", mencion: "ED", name: "CESPEDES MOREIRA, Hector" },
    { dni: "72352505", ciclo: "VII", mencion: "ED", name: "CONDORI PEREZ, Maria Angela" },
    { dni: "74200216", ciclo: "VII", mencion: "ED", name: "CRISANTE CUBA, Oscar Alvaro" },
    { dni: "70077258", ciclo: "VII", mencion: "ED", name: "CURI VILA, Elmer Miguel " },
    { dni: "76328969", ciclo: "VII", mencion: "ED", name: "CURI VILLANUEVA, Omar Gonzalo" },
    { dni: "78291082", ciclo: "VII", mencion: "ED", name: "DURAND DELGADO, Camila Raquel" },
    { dni: "70433634", ciclo: "VII", mencion: "ED", name: "ENCISO RAMOS, Paul Pablo" },
    { dni: "70205888", ciclo: "VII", mencion: "ED", name: "GOMEZ PATIÑO, Pilar Monica" },
    { dni: "63384518", ciclo: "VII", mencion: "ED", name: "GUILLEN CRISOSTOMO, Cristhian Jose" },
    { dni: "44342503", ciclo: "VII", mencion: "ED", name: "GUTIERREZ BRIGADA, Mayco Max" },
    { dni: "71301068", ciclo: "VII", mencion: "ED", name: "GUTIERREZ ORTIZ, Elmer David" },
    { dni: "70506064", ciclo: "VII", mencion: "ED", name: "HUAMAN HUALLANCA, Mirian Lisbeth" },
    { dni: "47638330", ciclo: "VII", mencion: "ED", name: "LLALLIRE YUPANQUI, Juan Ronal" },
    { dni: "72917632", ciclo: "VII", mencion: "ED", name: "MAURICIO HUARACA, Jhanela Neira" },
    { dni: "42768000", ciclo: "VII", mencion: "ED", name: "MEDINA BENDEZU, Jhonathan" },
    { dni: "71942328", ciclo: "VII", mencion: "ED", name: "MEDRANO SANCHEZ, Maycol Oscar" },
    { dni: "44154555", ciclo: "VII", mencion: "ED", name: "MENDOZA ROJAS, Juan German" },
    { dni: "71888973", ciclo: "VII", mencion: "ED", name: "PACHECO VALDEZ, Felicer" },
    { dni: "70565837", ciclo: "VII", mencion: "ED", name: "PAQUIYAURI QUISPE, Elizabeth Thalia" },
    { dni: "76573686", ciclo: "VII", mencion: "ED", name: "PEREZ PALOMINO, Fritsa Yasmina" },
    { dni: "73877063", ciclo: "VII", mencion: "ED", name: "PILLACA MEDINA, Klinsman Teofilo" },
    { dni: "70020574", ciclo: "VII", mencion: "ED", name: "POMASONCCO PRETELL, Antonio" },
    { dni: "70809465", ciclo: "VII", mencion: "ED", name: "POZO ZAMORA, Waldir" },
    { dni: "74401645", ciclo: "VII", mencion: "ED", name: "QUISPE ORE, Aida Camila" },
    { dni: "72014705", ciclo: "VII", mencion: "ED", name: "QUISPE PARIONA, Melisa" },
    { dni: "70415470", ciclo: "VII", mencion: "ED", name: "SUAREZ QUISPE, Maria Clara" },
    { dni: "76549784", ciclo: "VII", mencion: "ED", name: "TORRES MORALES, Fiorela" },
    { dni: "77681122", ciclo: "VII", mencion: "ED", name: "TORRES MUÑOZ, Daniel Anthony" },
    { dni: "70426947", ciclo: "VII", mencion: "ED", name: "TUMBALOBOS ROJAS, Karen Danae" },
    { dni: "75559995", ciclo: "VII", mencion: "ED", name: "VARGAS BOCANEGRA, Yolanda Alexandra" },
    { dni: "70397668", ciclo: "VII", mencion: "ED", name: "YUPARI GUTIERREZ, Susan Luz" },
  ])


  4(40)
  

db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "VII" },
        { mencion: "ED" }
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
