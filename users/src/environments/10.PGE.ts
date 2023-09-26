db.users.updateMany({
  dni: {
    $in:
      [
        "74466320", 
        "62691679", 
        "72223803", 
        "73245481", 
        "70418890", 
        "70119369", 
        "75088316", 
        "76153339", 
        "75235444", 
        "70207653", 
        "45884966", 
        "70216705", 
        "48553878", 
        "00089806", 
        "70117967", 
            ]
  }
}, { "$set": { "mencion": "P", "ciclo": "IX" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "44742214",
      ]
  }
}, { "$set": { "mencion": "G", "ciclo": "IX" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "72952722",]
  }
}, { "$set": { "mencion": "E", "ciclo": "IX" } })








///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "74466320", ciclo: "IX", mencion: "P", name: "AGUILAR YUCRA, Filadelfia Ibeth" },
    { dni: "62691679", ciclo: "IX", mencion: "P", name: "ARAUJO PALOMINO, Wendy Angela" },
    { dni: "72223803", ciclo: "IX", mencion: "P", name: "BALVIN RAMOS, Celeste Marisol" },
    { dni: "73245481", ciclo: "IX", mencion: "P", name: "FERNANDEZ LICAS, Jhomar Elvis" },
    { dni: "70418890", ciclo: "IX", mencion: "P", name: "GAMBOA CONTRERAS, Jean Carlinho" },
    { dni: "70119369", ciclo: "IX", mencion: "P", name: "HUARANCCA HUAYHUA, Miguel Angel" },
    { dni: "75088316", ciclo: "IX", mencion: "P", name: "INFANTE LEVA, Diana " },
    { dni: "76153339", ciclo: "IX", mencion: "P", name: "LAPA HUARACA, Anderson Erick" },
    { dni: "75235444", ciclo: "IX", mencion: "P", name: "NIETO PALMA, Josep Steven" },
    { dni: "70207653", ciclo: "IX", mencion: "P", name: "QUISPE HINOSTROZA, Angela Marycielo" },
    { dni: "45884966", ciclo: "IX", mencion: "P", name: "QUISPE SUPÑO, Jose" },
    { dni: "70216705", ciclo: "IX", mencion: "P", name: "RAMOS PEREZ, Rony" },
    { dni: "48553878", ciclo: "IX", mencion: "P", name: "RUIZ ÑAUPA, Willd J." },
    { dni: "00089806", ciclo: "IX", mencion: "P", name: "SALDAÑA SOUSA, Castor" },
    { dni: "70117967", ciclo: "IX", mencion: "P", name: "TAPAHUASCO SULCA, Marcelo Giacomo" },
    { dni: "44742214", ciclo: "IX", mencion: "G", name: "CURI AVILES, NELSON " },
    { dni: "72952722", ciclo: "IX", mencion: "E", name: "MOLINA VEGA, Jose Luis" },
  ])


  5(15 1 1)



  
db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "IX" },
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
