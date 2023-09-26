db.users.updateMany({
  dni: {
    $in:
      [
        "41590526",
        "40659190",
        "46217738",
        "77326883",
        "71391729",
        "42222528",
        "71564350",
        "70539186",
        "70412211",
        "60862035",
        "71240007",
        "70824673",
        "71902611",
        "60687184",
        "71742775",
        "76209213",
        "10067729",
        "75207561",
        "71791200",
        "73807130",
        "76409091",
        "45602566",
        "07128242",
        "75756864",
        "45410183",
        "47654761",
        "71786450",
        "74094966",
        "73652225",
        "75246142",
        "70410733",
        "73976945",
        "74466183",
        "42894168",
        "70462520",
            ]
  }
}, { "$set": { "mencion": "ED", "ciclo": "I" } })


db.users.updateMany({ rol: "3" }, { "$set": { "mencion": "N", "ciclo": "N" } })


///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "41590526", ciclo: "I", mencion: "ED", name: "ARANDA ESCALANTE, Gary" },
    { dni: "40659190", ciclo: "I", mencion: "ED", name: "ARANDA ESCALANTE, Michael" },
    { dni: "46217738", ciclo: "I", mencion: "ED", name: "ARANGO ORE, Alfredo" },
    { dni: "77326883", ciclo: "I", mencion: "ED", name: "BAUTISTA CAÑAHUIRI, Rumi Yoerly" },
    { dni: "71391729", ciclo: "I", mencion: "ED", name: "CARDENAS CERDA, Cesar Froilan" },
    { dni: "42222528", ciclo: "I", mencion: "ED", name: "CASTILLO RAMOS, Edwin" },
    { dni: "71564350", ciclo: "I", mencion: "ED", name: "CHOQUECAHUA MEZAHUAMAN, Bryan Anthony" },
    { dni: "70539186", ciclo: "I", mencion: "ED", name: "CONDE MENESES, Christian German " },
    { dni: "70412211", ciclo: "I", mencion: "ED", name: "CORAS CARRERA, Cielo Dayana" },
    { dni: "60862035", ciclo: "I", mencion: "ED", name: "CORONADO QUISPE, Rosario Lizet " },
    { dni: "71240007", ciclo: "I", mencion: "ED", name: "CUTTI HUINCHO, Yuver" },
    { dni: "70824673", ciclo: "I", mencion: "ED", name: "FLORES GUTIERREZ, Yohn Enoc" },
    { dni: "71902611", ciclo: "I", mencion: "ED", name: "FLORES YARANGA, Nathaly Karen" },
    { dni: "60687184", ciclo: "I", mencion: "ED", name: "GARCIA JANAMPA, Omar Jhonatan" },
    { dni: "71742775", ciclo: "I", mencion: "ED", name: "GOMEZ GUILLEN, Luis Rony" },
    { dni: "76209213", ciclo: "I", mencion: "ED", name: "HUAMAN ALTAMIRANO, Paola Zaraly" },
    { dni: "10067729", ciclo: "I", mencion: "ED", name: "HUAYTALLA LOPEZ, Oscar" },
    { dni: "75207561", ciclo: "I", mencion: "ED", name: "HUAYTALLA POMAHUACRE, Amelia Marion" },
    { dni: "71791200", ciclo: "I", mencion: "ED", name: "LOPEZ PALOMINO, Emerson Antony" },
    { dni: "73807130", ciclo: "I", mencion: "ED", name: "MEDINA MUJICA, Dhara Mishell" },
    { dni: "76409091", ciclo: "I", mencion: "ED", name: "MEDINA POCRA, Eliana Mayra" },
    { dni: "45602566", ciclo: "I", mencion: "ED", name: "MENDOZA JANAMPA, Quendel" },
    { dni: "07128242", ciclo: "I", mencion: "ED", name: "MORALES REZZA, Jesus " },
    { dni: "75756864", ciclo: "I", mencion: "ED", name: "MUNAYLLA MARTINEZ, Roger Paulino" },
    { dni: "45410183", ciclo: "I", mencion: "ED", name: "PALOMINO GUIZADO, Elizabet" },
    { dni: "47654761", ciclo: "I", mencion: "ED", name: "PALOMINO RAMOS, Dalmiro" },
    { dni: "71786450", ciclo: "I", mencion: "ED", name: "PEÑA HUAMAN, Roberto Guillermo" },
    { dni: "74094966", ciclo: "I", mencion: "ED", name: "PERLACIOS CHIPANA, Anyeli Yesebel" },
    { dni: "73652225", ciclo: "I", mencion: "ED", name: "PILLPE ARZAPALO, Lady Angela" },
    { dni: "75246142", ciclo: "I", mencion: "ED", name: "QUICHCA CANDIOTTI, Ani Yuliana" },
    { dni: "70410733", ciclo: "I", mencion: "ED", name: "SAIRE PALOMINO, Jherson Del Piero" },
    { dni: "73976945", ciclo: "I", mencion: "ED", name: "VARGAS MENDIS, Melissa Angelly" },
    { dni: "74466183", ciclo: "I", mencion: "ED", name: "VELASQUEZ CISNEROS, Luciana Fernanda" },
    { dni: "42894168", ciclo: "I", mencion: "ED", name: "VELASQUEZ PIÑAS, Miluska Mayra" },
    { dni: "70462520", ciclo: "I", mencion: "ED", name: "VILCHEZ AGUILAR, Maciel Mirella" },
  ])


  1(35)
  

db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "I" },
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














db.users.insertMany(
  [
    { dni: "70462520", password: "70462520", foto: "uploads/user/70462520.jpg", email: "macielvilchez@esfapa.edu.pe", rol: "3", "name": "VILCHEZ AGUILAR, Maciel Mirella", ciclo: "I", sexo: "F" },
    { dni: "41590526", password: "41590526", foto: "uploads/user/41590526.jpg", email: "garyaranda@esfapa.edu.pe", rol: "3", "name": "ARANDA ESCALANTE, Gary", ciclo: "I", sexo: "M" },
    { dni: "40659190", password: "40659190", foto: "uploads/user/40659190.jpg", email: "michaelaranda@esfapa.edu.pe", rol: "3", "name": "ARANDA ESCALANTE, Michael", ciclo: "I", sexo: "M" },
    { dni: "46217738", password: "46217738", foto: "uploads/user/46217738.jpg", email: "alfredoarango@esfapa.edu.pe", rol: "3", "name": "ARANGO ORE, Alfredo", ciclo: "I", sexo: "M" },
    { dni: "77326883", password: "77326883", foto: "uploads/user/77326883.jpg", email: "rumibautista@esfapa.edu.pe", rol: "3", "name": "BAUTISTA CAÑAHUIRI, Rumi Yoerly", ciclo: "I", sexo: "M" },
    { dni: "71391729", password: "71391729", foto: "uploads/user/71391729.jpg", email: "cesarcardenas@esfapa.edu.pe", rol: "3", "name": "CARDENAS CERDA, Cesar Froilan", ciclo: "I", sexo: "M" },
    { dni: "42222528", password: "42222528", foto: "uploads/user/42222528.jpg", email: "edwincastillo@esfapa.edu.pe", rol: "3", "name": "CASTILLO RAMOS, Edwin", ciclo: "I", sexo: "M" },
    { dni: "71564350", password: "71564350", foto: "uploads/user/71564350.jpg", email: "bryanchoquecahua@esfapa.edu.pe", rol: "3", "name": "CHOQUECAHUA MEZAHUAMAN, Bryan Anthony", ciclo: "I", sexo: "M" },
    { dni: "70539186", password: "70539186", foto: "uploads/user/70539186.jpg", email: "christianconde@esfapa.edu.pe", rol: "3", "name": "CONDE MENESES, Christian German ", ciclo: "I", sexo: "M" },
    { dni: "71240007", password: "71240007", foto: "uploads/user/71240007.jpg", email: "yuvercutti@esfapa.edu.pe", rol: "3", "name": "CUTTI HUINCHO, Yuver", ciclo: "I", sexo: "M" },
    { dni: "70824673", password: "70824673", foto: "uploads/user/70824673.jpg", email: "yohnflores@esfapa.edu.pe", rol: "3", "name": "FLORES GUTIERREZ, Yohn Enoc", ciclo: "I", sexo: "M" },
    { dni: "71902611", password: "71902611", foto: "uploads/user/71902611.jpg", email: "nathalyflores@esfapa.edu.pe", rol: "3", "name": "FLORES YARANGA, Nathaly Karen", ciclo: "I", sexo: "F" },
    { dni: "60687184", password: "60687184", foto: "uploads/user/60687184.jpg", email: "omargarcia@esfapa.edu.pe", rol: "3", "name": "GARCIA JANAMPA, Omar Jhonatan", ciclo: "I", sexo: "M" },
    { dni: "71742775", password: "71742775", foto: "uploads/user/71742775.jpg", email: "luisgomez@esfapa.edu.pe", rol: "3", "name": "GOMEZ GUILLEN, Luis Rony", ciclo: "I", sexo: "M" },
    { dni: "76209213", password: "76209213", foto: "uploads/user/76209213.jpg", email: "paolahuaman@esfapa.edu.pe", rol: "3", "name": "HUAMAN ALTAMIRANO, Paola Zaraly", ciclo: "I", sexo: "F" },
    { dni: "10067729", password: "10067729", foto: "uploads/user/10067729.jpg", email: "oscarhuaytalla@esfapa.edu.pe", rol: "3", "name": "HUAYTALLA LOPEZ, Oscar", ciclo: "I", sexo: "M" },
    { dni: "75207561", password: "75207561", foto: "uploads/user/75207561.jpg", email: "ameliahuaytalla@esfapa.edu.pe", rol: "3", "name": "HUAYTALLA POMAHUACRE, Amelia Marion", ciclo: "I", sexo: "F" },
    { dni: "71791200", password: "71791200", foto: "uploads/user/71791200.jpg", email: "emersonlopez@esfapa.edu.pe", rol: "3", "name": "LOPEZ PALOMINO, Emerson Antony", ciclo: "I", sexo: "M" },
    { dni: "73807130", password: "73807130", foto: "uploads/user/73807130.jpg", email: "dharamedina@esfapa.edu.pe", rol: "3", "name": "MEDINA MUJICA, Dhara Mishell", ciclo: "I", sexo: "F" },
    { dni: "76409091", password: "76409091", foto: "uploads/user/76409091.jpg", email: "elianamedina@esfapa.edu.pe", rol: "3", "name": "MEDINA POCRA, Eliana Mayra", ciclo: "I", sexo: "F" },
    { dni: "45602566", password: "45602566", foto: "uploads/user/45602566.jpg", email: "quendelmendoza@esfapa.edu.pe", rol: "3", "name": "MENDOZA JANAMPA, Quendel", ciclo: "I", sexo: "M" },
    { dni: "07128242", password: "07128242", foto: "uploads/user/07128242.jpg", email: "jesusmorales@esfapa.edu.pe", rol: "3", "name": "MORALES REZZA, Jesus ", ciclo: "I", sexo: "M" },
    { dni: "45410183", password: "45410183", foto: "uploads/user/45410183.jpg", email: "elizabetpalomino@esfapa.edu.pe", rol: "3", "name": "PALOMINO GUIZADO, Elizabet", ciclo: "I", sexo: "F" },
    { dni: "47654761", password: "47654761", foto: "uploads/user/47654761.jpg", email: "dalmiropalomino@esfapa.edu.pe", rol: "3", "name": "PALOMINO RAMOS, Dalmiro", ciclo: "I", sexo: "M" },
    { dni: "71786450", password: "71786450", foto: "uploads/user/71786450.jpg", email: "robertopeña@esfapa.edu.pe", rol: "3", "name": "PEÑA HUAMAN, Roberto Guillermo", ciclo: "I", sexo: "M" },
    { dni: "74094966", password: "74094966", foto: "uploads/user/74094966.jpg", email: "anyeliperlacios@esfapa.edu.pe", rol: "3", "name": "PERLACIOS CHIPANA, Anyeli Yesebel", ciclo: "I", sexo: "F" },
    { dni: "73976945", password: "73976945", foto: "uploads/user/73976945.jpg", email: "melissavargas@esfapa.edu.pe", rol: "3", "name": "VARGAS MENDIS, Melissa Angelly", ciclo: "I", sexo: "F" },
    { dni: "74466183", password: "74466183", foto: "uploads/user/74466183.jpg", email: "lucianavelasquez@esfapa.edu.pe", rol: "3", "name": "VELASQUEZ CISNEROS, Luciana Fernanda", ciclo: "I", sexo: "F" },
    { dni: "42894168", password: "42894168", foto: "uploads/user/42894168.jpg", email: "miluskavelasquez@esfapa.edu.pe", rol: "3", "name": "VELASQUEZ PIÑAS, Miluska Mayra", ciclo: "I", sexo: "F" },
  ])
  db.users.insertMany(
    [

  { dni: "70418890", password: "70418890", ciclo: "I", mencion: "P", name: "GAMBOA CONTRERAS, Jean Carlinho", email: "jeangamboa@esfapa.edu.pe",rol:"3",foto:"uploads/user/70418890.jpg" },
    ])