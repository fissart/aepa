db.users.updateMany({
  dni: {
    $in:
      [
        "45142948",
            ]
  }
}, { "$set": { "mencion": "ED", "ciclo": "IX" } })



///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "46276021", ciclo: "IX", mencion: "ED", name: "ALCA ARONI, Soledad" },
    { dni: "70779425", ciclo: "IX", mencion: "ED", name: "CABRERA SOTO, Erick Kenyi" },
    { dni: "70421372", ciclo: "IX", mencion: "ED", name: "CAHUIN ALVA, Marcos Gabriel" },
    { dni: "71771557", ciclo: "IX", mencion: "ED", name: "CARDENAS QUISPE, Jose Ronaldo" },
    { dni: "70112748", ciclo: "IX", mencion: "ED", name: "COLLADO SICHA, Edgar Jhon" },
    { dni: "74451076", ciclo: "IX", mencion: "ED", name: "CRUZ PACHECO, Jose Luis" },
    { dni: "77136426", ciclo: "IX", mencion: "ED", name: "DE LA CRUZ QUISPE, Analy" },
    { dni: "43070374", ciclo: "IX", mencion: "ED", name: "DOMINGUEZ POMA, Geobana" },
    { dni: "77037041", ciclo: "IX", mencion: "ED", name: "ESCALANTE ORIHUELA, Luz keyla" },
    { dni: "48303864", ciclo: "IX", mencion: "ED", name: "ESPINO PALOMINO, Herbert Michael" },
    { dni: "28315608", ciclo: "IX", mencion: "ED", name: "GUTIERREZ BRIGADA, Avelino Luis" },
    { dni: "70454157", ciclo: "IX", mencion: "ED", name: "HUAMAN PALOMINO, Tania Ruth" },
    { dni: "70233393", ciclo: "IX", mencion: "ED", name: "HUARCAYA HUICHO, Juana Margoth" },
    { dni: "73869771", ciclo: "IX", mencion: "ED", name: "LIMAQUISPE QUISPE, Kelly Lianna" },
    { dni: "78546043", ciclo: "IX", mencion: "ED", name: "LLAUCE QUISPE, Tania Fiorella" },
    { dni: "76062955", ciclo: "IX", mencion: "ED", name: "LOPEZ JANAMPA, Eber" },
    { dni: "76409092", ciclo: "IX", mencion: "ED", name: "MEDINA POCRA, Neyla" },
    { dni: "60888219", ciclo: "IX", mencion: "ED", name: "PAREDES PACOTAYPE, Pamela Nathaly" },
    { dni: "70690489", ciclo: "IX", mencion: "ED", name: "POMA POMASONCCO, Prudencio Dionisio" },
    { dni: "44028694", ciclo: "IX", mencion: "ED", name: "QUISPE CUCHURI, Alfredo Fidel" },
    { dni: "77677644", ciclo: "IX", mencion: "ED", name: "QUISPE TUEROS, Antony Adolfo" },
    { dni: "72653818", ciclo: "IX", mencion: "ED", name: "QUISPE URBANO, Luzmerly Celeste" },
    { dni: "46188112", ciclo: "IX", mencion: "ED", name: "ROJAS CONDE, David Moises" },
    { dni: "77147405", ciclo: "IX", mencion: "ED", name: "RUIZ CHOCCE, Sandy Margot" },
    { dni: "70933269", ciclo: "IX", mencion: "ED", name: "TAIPE ROCA, Lucia Victoria" },
    { dni: "74875348", ciclo: "IX", mencion: "ED", name: "URBANO YUCRA, Hector" },
    { dni: "73907234", ciclo: "IX", mencion: "ED", name: "VASQUEZ GARCIA, Meline Liz" },
    { dni: "72377511", ciclo: "IX", mencion: "ED", name: "YARANGA LOPEZ, Ruth Yuliana" },
  ])

  5(28)
  


db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "IX" },
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
