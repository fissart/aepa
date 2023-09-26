db.users.updateMany({
  dni: {
    $in:
      [
        "62111521",
        "76596114",
        "70208591",
        "70673941",
        "73861140",
        "70109782",
        "73986159",
        "70471532",
        "71438866",
        "75667996",
        "70151272",
        "72284509",
        "72487499",
        "74529804",
        "72651187",
        "74385932",
        "76987341",
        "60201270",
        "71328357",
        "70337806",
        "70802402",
        "74150819",
        "71390643",
        "71416364",
        "72259277",
        "75235875",
        "74347661",
        "77476369",
        "76336161",
        "70099069",
        "75957795",
        "75527815",
        "44843901",
        "72676845",
        "70045706",
        "08442050",
        "72377502",
        "70437200",
        "71392757",
            ]
  }
}, { "$set": { "mencion": "ED", "ciclo": "III" } })











///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "62111521", ciclo: "III", mencion: "ED", name: "ACHA  GONZALES, Gimena" },
    { dni: "76596114", ciclo: "III", mencion: "ED", name: "AGUILAR SULCA, Elida Gabriela" },
    { dni: "70208591", ciclo: "III", mencion: "ED", name: "ARCE TRUJILLO, Flor Elizabeth" },
    { dni: "70673941", ciclo: "III", mencion: "ED", name: "BARRIOS QUISPE, Nicolas Saul" },
    { dni: "73861140", ciclo: "III", mencion: "ED", name: "BERROCAL VILCA, Lia Esthefany" },
    { dni: "70109782", ciclo: "III", mencion: "ED", name: "BULEJE BORDA, Lizbeth" },
    { dni: "73986159", ciclo: "III", mencion: "ED", name: "CALDERON PARIONA, Javier Rolando" },
    { dni: "70471532", ciclo: "III", mencion: "ED", name: "CANGANA MITMA, Juan Daniel" },
    { dni: "71438866", ciclo: "III", mencion: "ED", name: "CAPCHA VILCA, Daybe Daniel" },
    { dni: "75667996", ciclo: "III", mencion: "ED", name: "CARRASCO CURIS, Rocio" },
    { dni: "70151272", ciclo: "III", mencion: "ED", name: "CARRASCO CURIS, Yanet." },
    { dni: "72284509", ciclo: "III", mencion: "ED", name: "CCAICURI HUAMANI, Liz Alexandra" },
    { dni: "72487499", ciclo: "III", mencion: "ED", name: "CHAUPEZ AYALA, Wyllians Bryton" },
    { dni: "74529804", ciclo: "III", mencion: "ED", name: "CORDOVA VILCHEZ, Handre Brahanny" },
    { dni: "72651187", ciclo: "III", mencion: "ED", name: "ECHEGARAY HUAMAN, Milagros Elvira" },
    { dni: "74385932", ciclo: "III", mencion: "ED", name: "FERNANDEZ CHUMPITAZ, Cesar Gabriel" },
    { dni: "76987341", ciclo: "III", mencion: "ED", name: "FLORES ARAUJO, Virma Charmely" },
    { dni: "60201270", ciclo: "III", mencion: "ED", name: "FLORES ATAUCUSI, David Andres" },
    { dni: "71328357", ciclo: "III", mencion: "ED", name: "HUAMAN AUQUI, Yumyra Briyith" },
    { dni: "70337806", ciclo: "III", mencion: "ED", name: "HUAYHUA HUARACA, Carlos" },
    { dni: "70802402", ciclo: "III", mencion: "ED", name: "LAURENTE PIANTO, Roy Rusveth" },
    { dni: "74150819", ciclo: "III", mencion: "ED", name: "LECHE SANCHEZ, Yandira Antuaneth" },
    { dni: "71390643", ciclo: "III", mencion: "ED", name: "LOAYZA CHUCHON, Elvia " },
    { dni: "71416364", ciclo: "III", mencion: "ED", name: "MAGALLANES JUNCO, Erikson Aldair" },
    { dni: "72259277", ciclo: "III", mencion: "ED", name: "MARTINEZ NOA, Sarai Lucia" },
    { dni: "75235875", ciclo: "III", mencion: "ED", name: "MOREYRA RIMACHE, Marleny" },
    { dni: "74347661", ciclo: "III", mencion: "ED", name: "MUCHA MORALES, Kenne Lisset" },
    { dni: "77476369", ciclo: "III", mencion: "ED", name: "OCHOA HUAMAN Geydy Aurelia" },
    { dni: "76336161", ciclo: "III", mencion: "ED", name: "PARIONA JAYO, Florabel" },
    { dni: "70099069", ciclo: "III", mencion: "ED", name: "PILLPE ARZAPALO, Diana Marisela" },
    { dni: "75957795", ciclo: "III", mencion: "ED", name: "POMASONCCO SOSA, Jhon Smith" },
    { dni: "75527815", ciclo: "III", mencion: "ED", name: "QUISPE CHACCERI, Gerson Chalo" },
    { dni: "44843901", ciclo: "III", mencion: "ED", name: "SANTIAGO FALCON, Joseph" },
    { dni: "72676845", ciclo: "III", mencion: "ED", name: "SICOS VARGAS, Norah Gloria" },
    { dni: "70045706", ciclo: "III", mencion: "ED", name: "TORRES ARCE, Angie Paola" },
    { dni: "08442050", ciclo: "III", mencion: "ED", name: "TREJO CASTILLO, Julio Humberto" },
    { dni: "72377502", ciclo: "III", mencion: "ED", name: "VEGA CONGA, Yusara Blanca" },
    { dni: "70437200", ciclo: "III", mencion: "ED", name: "ZAMORA DIPAZ, Esther Xiomara" },
    { dni: "71392757", ciclo: "III", mencion: "ED", name: "ZAMORA SALVADOR, Daysi Haydee." },
  ])


  2(39)
  
  
db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "III" },
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
