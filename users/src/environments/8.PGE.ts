db.users.updateMany({
  dni: {
    $in:
      [
        "76543837",
        "71196495",
        "75872705",
        "43331415",
        "77689738",
        "73435031",
        "74023708",
        "70917435",
        "70865901",
        "72502560",
        "77435275",
        "70453970",
        "70422825",
        "70423853",
        "46223703",
        "72709837",
        "61484038",
        "71390682",
        "70396851",
        "74027789",
        "70473316",
        "46563821",
        "48103931",
        "70099888",
            ]
  }
}, { "$set": { "mencion": "P", "ciclo": "V" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "73591927",
        "73883606",
        "73866657",
        "74830525",
        "73814575",
        "42636691",
        "70213015",
        "76006113",
        "71286353",
        "70654608",
            ]
  }
}, { "$set": { "mencion": "G", "ciclo": "V" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "72023529",
        "46921913",
        "72220586",
      ]
  }
}, { "$set": { "mencion": "E", "ciclo": "V" } })





///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "76543837", ciclo: "V", mencion: "P", name: "ALVAREZ COLLANA, Judith Milagros" },
    { dni: "71196495", ciclo: "V", mencion: "P", name: "BARZOLA CISNEROS, Britney Joshelin" },
    { dni: "75872705", ciclo: "V", mencion: "P", name: "BAUTISTA ORE, Eddy" },
    { dni: "43331415", ciclo: "V", mencion: "P", name: "BERROCAL LLOCCLLA, Raquel" },
    { dni: "77689738", ciclo: "V", mencion: "P", name: "BORDA DIAZ, Luis Anthony" },
    { dni: "73435031", ciclo: "V", mencion: "P", name: "CHAUCA QUISPE, James Ryan" },
    { dni: "74023708", ciclo: "V", mencion: "P", name: "CHUMBE TAYPE, Nahir Aixa Judy" },
    { dni: "70917435", ciclo: "V", mencion: "P", name: "GUTIERREZ TORRES, Junior" },
    { dni: "70865901", ciclo: "V", mencion: "P", name: "HUAYTALLA HUAMAN, Maricielo Rosa" },
    { dni: "72502560", ciclo: "V", mencion: "P", name: "LOAYZA VALENZUELA, Anali" },
    { dni: "77435275", ciclo: "V", mencion: "P", name: "MENDOZA PUCLLA, Jose Luis" },
    { dni: "70453970", ciclo: "V", mencion: "P", name: "MENDOZA ROJAS, Mary Cruz" },
    { dni: "70422825", ciclo: "V", mencion: "P", name: "MOLINA ATAO, Yovana Luzmery" },
    { dni: "70423853", ciclo: "V", mencion: "P", name: "OCHANTE RUA, Roy Ramiro" },
    { dni: "46223703", ciclo: "V", mencion: "P", name: "ORELLANO JAIME, Miriam Edith" },
    { dni: "72709837", ciclo: "V", mencion: "P", name: "PACOTAIPE HUARHUACHI, Ronel Aldo" },
    { dni: "61484038", ciclo: "V", mencion: "P", name: "PINEDA CRUZ, Romario" },
    { dni: "71390682", ciclo: "V", mencion: "P", name: "POZO SALVATIERRA, Susybel Miriam" },
    { dni: "70396851", ciclo: "V", mencion: "P", name: "QUISPE FLORES, Ivan Albino" },
    { dni: "74027789", ciclo: "V", mencion: "P", name: "QUISPE MUÑOZ, Jose Angel" },
    { dni: "70473316", ciclo: "V", mencion: "P", name: "QUISPE QUISPE, Oscar Daniel" },
    { dni: "46563821", ciclo: "V", mencion: "P", name: "ROJAS GARCIA, Luis Victor   " },
    { dni: "48103931", ciclo: "V", mencion: "P", name: "ROJAS LOZANO, Paulin Jover" },
    { dni: "70099888", ciclo: "V", mencion: "P", name: "VALDEZ GALVEZ, Marco Antonio" },
    { dni: "73591927", ciclo: "V", mencion: "G", name: "CUSI PACSI, Iam Gamaliel" },
    { dni: "73883606", ciclo: "V", mencion: "G", name: "DELGADO  GUERRA, Luz Sanay" },
    { dni: "73866657", ciclo: "V", mencion: "G", name: "DIAZ PEÑA, Valeria Stefany" },
    { dni: "74830525", ciclo: "V", mencion: "G", name: "FLORES SULCA, Jhonatan Junior" },
    { dni: "73814575", ciclo: "V", mencion: "G", name: "HUACHACA OBANDO, Jenifer" },
    { dni: "42636691", ciclo: "V", mencion: "G", name: "LOZANO HUAMAN, Eva luz" },
    { dni: "70213015", ciclo: "V", mencion: "G", name: "MISAJEL QUISPE, Yeltsin Ruben" },
    { dni: "76006113", ciclo: "V", mencion: "G", name: "QUISPE ARAUJO, Diego Alberto" },
    { dni: "71286353", ciclo: "V", mencion: "G", name: "SULCA QUISPE, Zulma Naysi" },
    { dni: "70654608", ciclo: "V", mencion: "G", name: "YUPA HUAMANI, Franz Fray" },
    { dni: "72023529", ciclo: "V", mencion: "E", name: "HUACHO LLACCTAHUAMAN, Cristian Anderson" },
    { dni: "46921913", ciclo: "V", mencion: "E", name: "TANTA PEREZ, Benni Edoms" },
    { dni: "72220586", ciclo: "V", mencion: "E", name: "TREJO ROJAS, Edwin Leonel" },
  ])


  3(24 10 3)
  
db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "V" },
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
