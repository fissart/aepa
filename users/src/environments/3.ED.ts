db.users.updateMany({
  dni: {
    $in:
      [
        "75285203",
        "75911739",
        "77903668",
        "77540087",
        "70426401",
        "72658071",
        "70391357",
        "75812771",
        "74064184",
        "42670257",
        "72863952",
        "45901414",
        "44444470",
        "70852712",
        "75781948",
        "48430693",
        "70419223",
        "71275210",
        "71800732",
        "72156362",
        "47534612",
        "76582030",
        "77136451",
        "73973347",
        "46026942",
        "71450694",
        "76556280",
        "74352810",
        "70406905",
        "77090833",
        "70547814",
        "70417745",
            ]
  }
}, { "$set": { "mencion": "ED", "ciclo": "V" } })










///////////////////////////////////////////////////////////////////////////////////


  db.nomina.insertMany(
    [
      { dni: "75285203", ciclo: "V", mencion: "ED", name: "AYALA MEDINA, Neyvi Maria" },
      { dni: "75911739", ciclo: "V", mencion: "ED", name: "AYME DIAZ, Jeffry Deyvid" },
      { dni: "77903668", ciclo: "V", mencion: "ED", name: "BARRIENTOS CARDENAS, Jasiel Ccadhy " },
      { dni: "77540087", ciclo: "V", mencion: "ED", name: "BELLIDO CARRASCO, Dayana Nayele" },
      { dni: "70426401", ciclo: "V", mencion: "ED", name: "CANCHO RIVERA, Noemi Celestina" },
      { dni: "72658071", ciclo: "V", mencion: "ED", name: "CARRASCO DURAND, Jesus Maria " },
      { dni: "70391357", ciclo: "V", mencion: "ED", name: "CHIRI ORE, Nasha Liliana" },
      { dni: "75812771", ciclo: "V", mencion: "ED", name: "CUETO FLORES, Eva Maria" },
      { dni: "74064184", ciclo: "V", mencion: "ED", name: "ESPINO JANAMPA, Annye  Stefhany" },
      { dni: "42670257", ciclo: "V", mencion: "ED", name: "GUTIERREZ CABRERA, Angel Ricky" },
      { dni: "72863952", ciclo: "V", mencion: "ED", name: "HERNANDO LOZANO, Luis Enrique" },
      { dni: "45901414", ciclo: "V", mencion: "ED", name: "JANAMPA INGA, Luis" },
      { dni: "44444470", ciclo: "V", mencion: "ED", name: "JAYO CUSIPOMA, Esther" },
      { dni: "70852712", ciclo: "V", mencion: "ED", name: "JORGE RAUCANA, Luis Miguel" },
      { dni: "75781948", ciclo: "V", mencion: "ED", name: "LLANOS GUTIERREZ, Jakelin Mercedes " },
      { dni: "48430693", ciclo: "V", mencion: "ED", name: "LOPE TAYPE, Kiven Elber" },
      { dni: "70419223", ciclo: "V", mencion: "ED", name: "MARTINEZ NOA, Julio Cesar" },
      { dni: "71275210", ciclo: "V", mencion: "ED", name: "ÑAUPA CARDENAS, Ana Lourdes Lucero" },
      { dni: "71800732", ciclo: "V", mencion: "ED", name: "ÑAUPA MARTINEZ, Yoel Clemente" },
      { dni: "72156362", ciclo: "V", mencion: "ED", name: "PEREZ LEON, Teofilo Gilmer" },
      { dni: "47534612", ciclo: "V", mencion: "ED", name: "PINEDA RAMOS, Marlon Joe" },
      { dni: "76582030", ciclo: "V", mencion: "ED", name: "QUISPE CURIS, Diana Georgina" },
      { dni: "77136451", ciclo: "V", mencion: "ED", name: "QUISPE LAPA, Rosibel" },
      { dni: "73973347", ciclo: "V", mencion: "ED", name: "QUISPE SERDA, Marco Antonio" },
      { dni: "46026942", ciclo: "V", mencion: "ED", name: "QUISPE SERDA, Tania Natali" },
      { dni: "71450694", ciclo: "V", mencion: "ED", name: "QUISPERIMA ALARCON, Melissa Lucy" },
      { dni: "76556280", ciclo: "V", mencion: "ED", name: "RAFAEL PACHECO, Xiara Joselin" },
      { dni: "74352810", ciclo: "V", mencion: "ED", name: "SAHUANAY CCORISONCCO, Maricielo Korayma" },
      { dni: "70406905", ciclo: "V", mencion: "ED", name: "SAIRE PALOMINO, Zarella Angela" },
      { dni: "77090833", ciclo: "V", mencion: "ED", name: "SAUÑE GAMBOA, Luis Angel" },
      { dni: "70547814", ciclo: "V", mencion: "ED", name: "SULCA PALOMINO, Nemias" },
      { dni: "70417745", ciclo: "V", mencion: "ED", name: "VILLALOBOS HUAYHUA, Carla Antonia" },
    ])

    3(32)
    


db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "V" },
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
