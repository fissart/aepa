db.users.updateMany({
  dni: {
    $in:
      [
        "28291886",
        "70905181",
        "75022730",
        "71545379",
        "71557117",
        "47256219",
        "73809669",
        "71328176",
        "46554932",
        "41350273",
        "46176325",
        "40391011",
        "72865347",
        "10102485",
        "74244547",
        "60819617",
        "70568887",
        "74771611",
        "75619499",
        "72904756",
        "76334816",
        "75382395",
        "74874196",
        "70665120",
        "70896746",
        "70416603",
        "70449235",
        "77687002",
            ]
  }
}, { "$set": { "mencion": "P", "ciclo": "I" } })

db.users.updateMany({
  dni: {
    $in:
      [
        "71131509",
        "74050222",
        "60818870",
        "78012632",
        "78717710",
        "73557397",
        "60455404",
        "74217930",
        "71550084",
        "70396821",
        "60741318",
        "76046118",
        "74042472",
        "76243610",
        "60862020",
        "73131315",
        "62369728",
        "60414274",
        "77218598",
        "75272474",
        "60888064",
        "74594421",
        "73358833",
      ]
  }
}, { "$set": { "mencion": "G", "ciclo": "I" } })


db.users.updateMany({
  dni: {
    $in:
      [
        "74569901",
        "71135791",
        "47919344",
        "71853780",
        "70656125",
        "71990224",
        "70417774",
        "70417815",
        "60998112",
        "75888532",
        "75550374",
        "71298730",
        "60998243",
        "77797166",
        "73772879",
        "76046038",
        "71423020",
        "76067519",
            ]
  }
}, { "$set": { "mencion": "E", "ciclo": "I" } })


///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "28291886", ciclo: "I", mencion: "P", name: "ALARCON GUERRERO, Karina" },
    { dni: "70905181", ciclo: "I", mencion: "P", name: "APARICIO TAQUIRI, Carlos Sebastian" },
    { dni: "75022730", ciclo: "I", mencion: "P", name: "AVILES MAYHUA, Luis Angel" },
    { dni: "71545379", ciclo: "I", mencion: "P", name: "CARDENAS LOPEZ, Carmen Daniela" },
    { dni: "71557117", ciclo: "I", mencion: "P", name: "CHOQUECAHUA ATAUPILLCO, Yeferson" },
    { dni: "47256219", ciclo: "I", mencion: "P", name: "CUBA SULCA, Clever" },
    { dni: "73809669", ciclo: "I", mencion: "P", name: "CUCHUÑAUPA VALLEJO, Gilmer Omar" },
    { dni: "71328176", ciclo: "I", mencion: "P", name: "DE LA CRUZ MARMOLEJO, Liz Nataly" },
    { dni: "46554932", ciclo: "I", mencion: "P", name: "GALLARDO RAMOS, Cindy " },
    { dni: "41350273", ciclo: "I", mencion: "P", name: "LUQUE DIAZ, Mario Orlando" },
    { dni: "46176325", ciclo: "I", mencion: "P", name: "MEDINA GOMEZ, Yordano" },
    { dni: "40391011", ciclo: "I", mencion: "P", name: "MUÑOZ VALENZUELA, Magaly Betsie" },
    { dni: "72865347", ciclo: "I", mencion: "P", name: "PALOMINO MENDOZA, Edgar Mark Anthony" },
    { dni: "10102485", ciclo: "I", mencion: "P", name: "PAULA CORRENTI, Ana" },
    { dni: "74244547", ciclo: "I", mencion: "P", name: "PLATAS RODRIGUEZ, Jean Carlo" },
    { dni: "60819617", ciclo: "I", mencion: "P", name: "PURISACA HUAMAN, Pilar Mayce" },
    { dni: "70568887", ciclo: "I", mencion: "P", name: "QUISPE QUISPE, Eliazar" },
    { dni: "74771611", ciclo: "I", mencion: "P", name: "QUISPE RIVERA, Deysi Juliani" },
    { dni: "75619499", ciclo: "I", mencion: "P", name: "RODRIGUEZ AYALA, Marita Joaquina" },
    { dni: "72904756", ciclo: "I", mencion: "P", name: "SANTA CRUZ MEDINA, Belen de los Angeles" },
    { dni: "76334816", ciclo: "I", mencion: "P", name: "SICHA POMA, Jochma Bren" },
    { dni: "75382395", ciclo: "I", mencion: "P", name: "SIMON MENDOZA, Luis Fernando" },
    { dni: "74874196", ciclo: "I", mencion: "P", name: "SULCA ORE, Mayumi" },
    { dni: "70665120", ciclo: "I", mencion: "P", name: "TUMBALOBOS CABANA, Luz Maria" },
    { dni: "70896746", ciclo: "I", mencion: "P", name: "VEGA MORENO, Keyla Yeni" },
    { dni: "70416603", ciclo: "I", mencion: "P", name: "VENTURA VENTURA, Grace Celeste" },
    { dni: "70449235", ciclo: "I", mencion: "P", name: "VILCA BLAS, Henrry Alvaro" },
    { dni: "77687002", ciclo: "I", mencion: "P", name: "VILLAVICENCIO LAZO, Danuska Ashley" },
    { dni: "71131509", ciclo: "I", mencion: "G", name: "ALLCCA BORDA, Mercedes" },
    { dni: "74050222", ciclo: "I", mencion: "G", name: "CAPCHA RODRIGUEZ, Luz Gabriela" },
    { dni: "60818870", ciclo: "I", mencion: "G", name: "CORNEJO GUTIERREZ, Maximo Ismael" },
    { dni: "78012632", ciclo: "I", mencion: "G", name: "DEL PINO CCENTA, Anel Natalia" },
    { dni: "78717710", ciclo: "I", mencion: "G", name: "DEL PINO CCENTA, Nicole" },
    { dni: "73557397", ciclo: "I", mencion: "G", name: "DIAZ LUZA, Joseph Gabriel" },
    { dni: "60455404", ciclo: "I", mencion: "G", name: "FERNANDEZ VAZQUEZ, Deyner" },
    { dni: "74217930", ciclo: "I", mencion: "G", name: "FIGUEROA ROMANI, Joseph Benjamin" },
    { dni: "71550084", ciclo: "I", mencion: "G", name: "HINOSTROZA CURI, Mariel Fernanda" },
    { dni: "70396821", ciclo: "I", mencion: "G", name: "HUAYHUA MIGUEL, Yuri Rafael" },
    { dni: "60741318", ciclo: "I", mencion: "G", name: "HUERTAS GARAMENDI, Leonardo Danilo" },
    { dni: "76046118", ciclo: "I", mencion: "G", name: "ORE ZAPATA, Kenyi Santiago" },
    { dni: "74042472", ciclo: "I", mencion: "G", name: "QUINTANA ARANGO, Ximena Susana" },
    { dni: "76243610", ciclo: "I", mencion: "G", name: "RAMOS LOAYZA, Xina Maribel" },
    { dni: "60862020", ciclo: "I", mencion: "G", name: "RAMOS ROCA, Elizabet Treyci Nadia" },
    { dni: "73131315", ciclo: "I", mencion: "G", name: "RIVAS VILCHEZ, Sebastian Jose" },
    { dni: "62369728", ciclo: "I", mencion: "G", name: "RIVERA FERNANDEZ, Sharit Lucero" },
    { dni: "60414274", ciclo: "I", mencion: "G", name: "SANTIAGO PEREZ, Jhims Kevin" },
    { dni: "77218598", ciclo: "I", mencion: "G", name: "SEDANO ROMERO, Kely" },
    { dni: "75272474", ciclo: "I", mencion: "G", name: "TELLO ROCA, Darwin Lin" },
    { dni: "60888064", ciclo: "I", mencion: "G", name: "TINCO QUISPE, Diego Kevin" },
    { dni: "74594421", ciclo: "I", mencion: "G", name: "TORRES CHUMBE, Nicole Alejandra" },
    { dni: "73358833", ciclo: "I", mencion: "G", name: "VALENZUELA CHAVIGURI, Dominique Elijah" },
    { dni: "74569901", ciclo: "I", mencion: "E", name: "ACASIO BERROCAL, Cristian Ronald" },
    { dni: "71135791", ciclo: "I", mencion: "E", name: "CAYLLAHUA MUNARIS, Dafne Nicole" },
    { dni: "47919344", ciclo: "I", mencion: "E", name: "DE LA CRUZ DE LA CRUZ, Ronald" },
    { dni: "71853780", ciclo: "I", mencion: "E", name: "DE LA CRUZ SAAVEDRA, Jose Maximo" },
    { dni: "70656125", ciclo: "I", mencion: "E", name: "DIPAZ AYALA, Nicolhe Dayhane" },
    { dni: "71990224", ciclo: "I", mencion: "E", name: "GASTELU SAUÑE, Erick Nilton" },
    { dni: "70417774", ciclo: "I", mencion: "E", name: "HUAMAN CCARHUAYPIÑA, Elizabeth" },
    { dni: "70417815", ciclo: "I", mencion: "E", name: "HUAYLLAHUAMAN HUICHO, Jaime" },
    { dni: "60998112", ciclo: "I", mencion: "E", name: "JAIME TACAS, Yeremy Jose" },
    { dni: "75888532", ciclo: "I", mencion: "E", name: "JAYO FERNANDEZ, Angelo Andree" },
    { dni: "75550374", ciclo: "I", mencion: "E", name: "LUJAN HUAMANI, Mayli Yasuri" },
    { dni: "71298730", ciclo: "I", mencion: "E", name: "MEJIA BORDA, Emelyn Yulisa" },
    { dni: "60998243", ciclo: "I", mencion: "E", name: "MIO SOSA, Nahir Monserrat" },
    { dni: "77797166", ciclo: "I", mencion: "E", name: "PONCE EVANAN, Flor de Maria" },
    { dni: "73772879", ciclo: "I", mencion: "E", name: "SALVATIERRA ROA, Nataly Sayury" },
    { dni: "76046038", ciclo: "I", mencion: "E", name: "SUAREZ DUEÑAS, Manases" },
    { dni: "71423020", ciclo: "I", mencion: "E", name: "TAIPE CRESPO, Leidy" },
    { dni: "76067519", ciclo: "I", mencion: "E", name: "VENERO MALLQUI, Qori Aileen" },
  ])


  1(28 23 18)
  

db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "I" },
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
