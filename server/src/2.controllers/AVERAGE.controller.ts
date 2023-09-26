import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
//import Responce, { IResponce } from '../1.models/8_Responce';
import Cursesource, { ICursesource } from '../1.models/sourcecurse';
import User, { IUser } from '../1.models/1_User';
import Average, { IAverage } from '../1.models/10_average';

//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
  const { nota, codigo, teacher, user, curse, title, ciclo, credito, mencion, year } = req.body;
  const newDate = { nota, codigo, teacher, user, curse, title, ciclo, credito, mencion, year };
  //console.log(newDate)
  const data = new Average(newDate);
  await data.save();
  return res.json({ message: 'Ok create' });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
  const data = await Average.find();
  return res.json(data);
}


//getsController/////////////////////////////////////////////////////////////////////////
export async function getFirstController(req: Request, res: Response): Promise<Response> {
  const { ciclo, mencion, year } = req.params;
  //error//const { ObjectId } = require("mongodb");
  //error//const ciclo = ObjectId(req.params.ciclo);
  //error//const year = ObjectId(req.params.year);
  console.log(ciclo, mencion, year, "wwwwwwwwwwwwwwwwwwwnew");
  var ES = "";
  if (mencion == "G" || mencion == "P" || mencion == "E") {
    var ES = "AP";
  }
  if (mencion == "ED") {
    var ES = "EA";
  }
  //console.log(ES);
  const order = await Average.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion },
          { year: year }
        ]
      },
    },
    {
      $group: {
        _id: "$user",
        mencion: { $first: '$mencion' },
        cursos: { $sum: 1 },
        Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
      }
    },
    {
      $lookup: {
        from: "users", localField: "_id", foreignField: "_id", as: "uSSer"
      }
    },
    {
      $lookup: {
        from: "cursesources",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$mencion", mencion] }, { $eq: ["$ciclo", ciclo] },] } } },
          {
            $lookup: {
              from: "averages",
              let: { ww: "$codigo" },
              pipeline: [
                { $match: { $expr: { $and: [{ $eq: ["$codigo", "$$ww"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }, { $eq: ["$user", "$$www"] }] } } },
              ],
              as: "averagges",
            },
          },
        ],
        as: "cursse",
      },
    },
    { $sort: { "Puntaje": -1 } }
  ]);
  /////////////////////////////////////////////////////////////////////////////////////
//console.log(order)

  const orderw = await Average.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion },
          { year: year }
        ]
      },
    },
    {
      $group: {
        _id: "$user",
        year: { $first: '$year' },
        mencion: { $first: '$mencion' },
        cursos: { $sum: 1 },
        Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
      }
    },
    {
      $lookup: {
        from: "averages",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$user", "$$www"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }] } } },
        ],
        as: "avgs",
      },
    },
    {
      $lookup: {
        from: "users", localField: "_id", foreignField: "_id", as: "uSSer"
      }
    },
    {
      $lookup: {
        from: "cursesources",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$mencion", mencion] }, { $eq: ["$ciclo", ciclo] },] } } },
          {
            $lookup: {
              from: "averages",
              let: { ww: "$codigo" },
              pipeline: [
                { $match: { $expr: { $and: [{ $eq: ["$codigo", "$$ww"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }, { $eq: ["$user", "$$www"] }] } } },
                {
                  $lookup: {
                    from: "users",
                    let: { www: "$teacher" },
                    pipeline: [
                      { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                    ],
                    as: "teacher",
                  },
                },
              ],
              as: "averagges",
            },
          },
        ],
        as: "cursse",
      },
    },
    {
      $lookup: {
        from: "averages",
        let: { wwwww: "$_id" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }, { $eq: ["$user", "$$wwwww"] }] } } },
          {
            $group:
            {
              _id: { user: "$user" },
              Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
              count: { $sum: 1 }
            }
          }

        ],
        as: "averaggges",
      },
    },
  ]).collation( { locale: 'es'} ).sort( {"uSSer.name": 1 } )

  
  ///////////////////////////////////////////////////////////////////////////

  const orderTEACHER = await Average.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion },
          { year: year }
        ]
      },
    },
    {
      $group: {
        _id: "$teacher",
        mencion: { $first: '$mencion' },
        rol: { $first: '$uSSer.rol' },
        cursos: { $sum: 1 },
        Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
      }
    },
    {
      $lookup: {
        from: "users",
        let: { id: "$_id" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$_id", "$$id"] }] } }, },
          { $project : { _id:1, name:1, dni:1, rol:1  } }
        ],
        as: "uSSer"
      }
    },
    { $sort: { "uSSer.name": 1 } }
  ]);


 

  ///////////////////////////////////////////////////////////////////////////
  const ordercurses = await Cursesource.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion }
        ]
      }
    }
  ])

  //////////////////////////////////////////////////////////////////////////////////
  const ordercursescredito = await Cursesource.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion }
        ]
      },
    },
    {
      $group:
      {
        _id: { user: "$ciclo" },
        Puntaje: { $sum: { $multiply: [1, { $toInt: '$credito' }] } },
        count: { $sum: 1 }
      }
    }
  ])

  ///////////////////////////////////////////////////////////////////////////////////////////////
  const ordercursesnative = await Average.aggregate([
    {
      $match: {
        $and: [
          { ciclo: ciclo },
          { mencion: mencion },
          { year: year }
        ]
      },
    },
    {
      $group: {
        _id: "$title",
      }
    },

  ]);


  const notastotal = await Average.countDocuments({ year: year, mencion: mencion, ciclo: ciclo })
  const notaslicencia = await Average.countDocuments({ year: year, mencion: mencion, ciclo: ciclo, nota: '-0' })
  const notasretirados = await Average.countDocuments({ year: year, mencion: mencion, ciclo: ciclo, nota: '0' })
  //const notasretirados = await Average.countDocuments({mencion:mencion, ciclo:ciclo, nota:'0'})

  const notasaprobadas = await Average.countDocuments({ year: year, mencion: mencion, ciclo: ciclo, nota: { $nin: ['-0', '0'], $gt: '10.5' } })
  const notasdesaprobadas = await Average.countDocuments({ year: year, mencion: mencion, ciclo: ciclo, nota: { $nin: ['-0', '0'], $lt: '10.5' } })

  return res.json({
    order,
    ordercursesnative,
    ordercursescredito,
    ordercurses,
    orderw,
    orderTEACHER,
    notastotal,
    notaslicencia,
    notasretirados,
    notasaprobadas,
    notasdesaprobadas
  }
  );
}
//getaveragesUserController
//getaveragesUserController/////////////////////////////////////////////////////////////////////////
export async function getAveragesUserController(req: Request, res: Response): Promise<Response> {
  const { ObjectId } = require("mongodb");
  const user = ObjectId(req.params.id);
  const data = await Average.aggregate([
    {
      $match: {
        user: user,
      },
    },
  ]);

  return res.json(data);
}

//getupdateController////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const data = await Average.findById(id);
  return res.json(data);
}
//deleteController///////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
  const { ObjectId } = require("mongodb");
  const id = ObjectId(req.params.id);
  const File = await Average.findByIdAndRemove(id) as IAverage;
  return res.json({ message: 'Ok remove' });
};

//updateController///////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { nota } = req.body;
  const update = await Average.findByIdAndUpdate(id, { nota });
  return res.json({
    message: 'Successfully updated'
  });
}
