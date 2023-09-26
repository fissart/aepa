import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
//import Responce, { IResponce } from '../1.models/8_Responce';
import Cursesource, { ICursesource } from '../1.models/sourcecurse';
import User, { IUser } from '../1.models/1_User';
import Average, { IAverage } from '../1.models/10_average';
  
//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { nota, teacher, user, curse, title, ciclo, credito, especialidad, year } = req.body;
    const newDate = { nota, teacher, user, curse, title, ciclo, credito, especialidad, year};
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
  const { ciclo, mension, year } = req.params;
  //error//const { ObjectId } = require("mongodb");
  //error//const ciclo = ObjectId(req.params.ciclo);
  //error//const year = ObjectId(req.params.year);
  console.log(ciclo, mension, year);
    var ES="";
    if(mension=="G" || mension=="P" || mension=="E"){
    var ES="AP";
    }
    if(mension=="ED"){
    var ES="EA";
    }
    console.log(ES);
  const order = await Average.aggregate([
      {
          $match: {
            $and: [
                 {ciclo: ciclo},
                 {especialidad: mension},
                 {year: year}
             ]
          },
      },
       {$group : {
        _id:{user:"$user"}, cursos:{$sum:1},
        Puntaje: { $sum: { $multiply: [ {$toInt:'$credito'}, {$toInt:'$nota'} ] } },
      }},
      {$lookup: {from: "users", localField: "_id.user", foreignField: "_id", as: "uSSer"}},
      {$sort:{"Puntaje":-1}}
  ]);

  const orderw = await User.aggregate([
      {
          $match: {
            $and: [
                 {ciclo: ciclo},
                 {mension: mension}
             ]
          },
      },
      {
            $lookup: {
              from: "cursesources",
              let: { www: "$_id"},
              pipeline: [
                 { $match: { $expr: { $and: [{ $eq: ["$mension", ES] }, { $eq: ["$ciclo",  ciclo] },] } }},
                 {
                   $lookup: {
                     from: "averages",
                     let: { ww:"$title" },
                     pipeline: [
                       { $match: { $expr: { $and: [{ $eq: ["$title", "$$ww"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$especialidad", mension] },{ $eq: ["$user", "$$www"] }] } }},

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
          let: { www:"$_id" },
          pipeline: [
            { $match: { $expr: { $and: [ { $eq: ["$ciclo", ciclo] }, { $eq: ["$especialidad", mension] },{ $eq: ["$user", "$$www"] }] } }},
            {
                $group:
                  {
                    _id: { user: "$user"},
                    Puntaje: { $sum: { $multiply: [ {$toInt:'$credito'}, {$toInt:'$nota'} ] } },
                    count: { $sum: 1 }
                  }
            }

          ],
          as: "averaggges",
        },
      },


      {$sort:{"cursse.name":1}}
  ])

  const ordercurses = await Cursesource.aggregate([
      {
          $match: {
            $and: [
                 {ciclo: ciclo},
                 {mension: ES}
             ]
          },
      }
    ])

    const ordercursescredito = await Cursesource.aggregate([
        {
            $match: {
              $and: [
                   {ciclo: ciclo},
                   {mension: ES}
               ]
            },
        },
        {
            $group:
              {
                _id: { user: "$ciclo"},
                Puntaje : { $sum: { $multiply: [ 1, {$toInt:'$credito'} ] } },
                count : { $sum: 1 }
              }
        }

      ])

      const ordercursesnative = await Average.aggregate([
          {
              $match: {
                $and: [
                     {ciclo: ciclo},
                     {especialidad: mension},
                     {year: year}
                 ]
              },
          },
           {$group : {
            _id:"$title",
            }
          },

      ]);


    const notastotal = await Average.countDocuments({year: year, especialidad:mension, ciclo:ciclo})
    const notaslicencia = await Average.countDocuments({year: year, especialidad:mension, ciclo:ciclo, nota:'-0'})
    const notasretirados = await Average.countDocuments({year: year, especialidad:mension, ciclo:ciclo, nota:'0'})
    //const notasretirados = await Average.countDocuments({especialidad:mension, ciclo:ciclo, nota:'0'})

    const notasaprobadas = await Average.countDocuments({year: year, especialidad:mension, ciclo:ciclo, nota:{$nin: ['-0', '0'], $gt:'10.5'}})
    const notasdesaprobadas = await Average.countDocuments({year: year, especialidad:mension, ciclo:ciclo, nota:{$nin: ['-0', '0'], $lt:'10.5'}})

    return res.json({
      order,
      ordercursesnative,
      ordercursescredito,
      ordercurses,
      orderw,
      notastotal,
      notaslicencia,
      notasretirados,
      notasaprobadas,
      notasdesaprobadas}
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
    const {  nota } = req.body;
    const update = await Average.findByIdAndUpdate(id, { nota });
    return res.json({
        message: 'Successfully updated'
    });
}
