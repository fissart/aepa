db.users.updateMany({
  dni: {
    $in:
      [
        "60804642", 
        "70107922", 
        "70049580", 
        "70046382", 
        "70557651", 
        "71017664", 
        "70574296", 
        "76538530", 
        "70121373", 
        "71552551", 
        "73757477", 
        "74942873", 
        "72275796", 
        "70665090", 
        "76640212", 
        "60253867", 
        "73984445", 
        "76670060", 
        "72646288", 
        "73997977", 
        "71544540", 
        "71286342", 
        "46107262", 
        "70654287", 
        "74143482", 
        "76543149", 
            ]
  }
}, { "$set": { "mencion": "P", "ciclo": "VII" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "73681986",
        "71902513",
        "70207680",
        "75416648",
        "72260316",
        "74626657",
        "74471081",
        "74030914",
        "73952880",
        "70217936",
            ]
  }
}, { "$set": { "mencion": "G", "ciclo": "VII" } })


db.users.updateMany({
  dni: {
    $in:
      [
      ]
  }
}, { "$set": { "mencion": "E", "ciclo": "VII" } })












///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "60804642", ciclo: "VII", mencion: "P", name: "ACOSTA QUISPE, Kevin " },
    { dni: "70107922", ciclo: "VII", mencion: "P", name: "ALLCCA QUISPE, Jose Luis" },
    { dni: "70049580", ciclo: "VII", mencion: "P", name: "ARANGO GUTIERREZ, Meryl Madeleiny Eleny" },
    { dni: "70046382", ciclo: "VII", mencion: "P", name: "BELLIDO ARAMBURU, Jimena Luz" },
    { dni: "70557651", ciclo: "VII", mencion: "P", name: "CASTAÑEDA BAUTISTA, Edinson" },
    { dni: "71017664", ciclo: "VII", mencion: "P", name: "CHAVEZ UNTIVEROS, Angel" },
    { dni: "70574296", ciclo: "VII", mencion: "P", name: "CHOÑOCCA PARIONA, Victor Antonio" },
    { dni: "76538530", ciclo: "VII", mencion: "P", name: "CHOQUECAHUA RAMIREZ, Gabriel Francisco" },
    { dni: "70121373", ciclo: "VII", mencion: "P", name: "CHUQUITAYPE ARAUJO, Jersson" },
    { dni: "71552551", ciclo: "VII", mencion: "P", name: "CONTRERAS CONDOR, Jean Henry" },
    { dni: "73757477", ciclo: "VII", mencion: "P", name: "ESPEZA ENRIQUEZ, Eliseo" },
    { dni: "74942873", ciclo: "VII", mencion: "P", name: "HUAMAN ALLENDE, Angel Gabriel" },
    { dni: "72275796", ciclo: "VII", mencion: "P", name: "HUINCHO CHOCCE, Fernando Jose" },
    { dni: "70665090", ciclo: "VII", mencion: "P", name: "HUAMANTOMA PUMALLIHUA, Alexander" },
    { dni: "76640212", ciclo: "VII", mencion: "P", name: "HUINCHO CLEMENTE, Cristhian Antony" },
    { dni: "60253867", ciclo: "VII", mencion: "P", name: "LA SERNA PARIONA, Jackelin Nelly" },
    { dni: "73984445", ciclo: "VII", mencion: "P", name: "MEDINA ANDIA, Disney" },
    { dni: "76670060", ciclo: "VII", mencion: "P", name: "MEDRANO YARANGA, Mayumi Taquiri  " },
    { dni: "72646288", ciclo: "VII", mencion: "P", name: "NAVARRO MELLISHO, Luis  Angel" },
    { dni: "73997977", ciclo: "VII", mencion: "P", name: "ORE VALLEJOS, Ely  Dayme" },
    { dni: "71544540", ciclo: "VII", mencion: "P", name: "QUISPE HUAMACCTO, Ronal Tiberio" },
    { dni: "71286342", ciclo: "VII", mencion: "P", name: "SULCA QUISPE, Jeny Melisa" },
    { dni: "46107262", ciclo: "VII", mencion: "P", name: "URBAY TRUJILLANO, Carlos" },
    { dni: "70654287", ciclo: "VII", mencion: "P", name: "VELAPATIÑO PINILLOS, Gabriela" },
    { dni: "74143482", ciclo: "VII", mencion: "P", name: "YUPANQUI CCONOJHUILLCA, Diego Ricardo " },
    { dni: "76543149", ciclo: "VII", mencion: "P", name: "ZAMAÑEZ MEJIA, Jhon" },
    { dni: "73681986", ciclo: "VII", mencion: "G", name: "ARIAS MELGAR, Evelyn Lizzeth" },
    { dni: "71902513", ciclo: "VII", mencion: "G", name: "CURI GAMBOA, Ivan Cruz" },
    { dni: "70207680", ciclo: "VII", mencion: "G", name: "DIAZ ALFARO, Aldy Roship" },
    { dni: "75416648", ciclo: "VII", mencion: "G", name: "FLORES AUCACIO, Jairol Ramiro" },
    { dni: "72260316", ciclo: "VII", mencion: "G", name: "GARCIA MEJIA, Camila Sthefany" },
    { dni: "74626657", ciclo: "VII", mencion: "G", name: "JIMENEZ HUAMAN, Leonardo Jose" },
    { dni: "74471081", ciclo: "VII", mencion: "G", name: "LOPEZ GUARDAMINO, Frank Josue" },
    { dni: "74030914", ciclo: "VII", mencion: "G", name: "LUJAN MENDOZA, Jussbe Luii" },
    { dni: "73952880", ciclo: "VII", mencion: "G", name: "TUDELANO VICAÑA, Lisseth" },
    { dni: "70217936", ciclo: "VII", mencion: "G", name: "YARANGA HUAMAN, Zanya Angelina" },
  ])

  4(26 10 0)


db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "VII" },
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
