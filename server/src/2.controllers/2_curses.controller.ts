import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'



// Models
import Cursesource, { ICursesource } from '../1.models/sourcecurse';
import User, { IUser } from '../1.models/1_User';
import Task, { ITask } from '../1.models/5_Task';
import Curse, { ICurse } from '../1.models/2_Curse';
import Theme, { ITheme } from '../1.models/4_Theme';
import Filecurse, { IFilecurse } from '../1.models/Filecurse';
import Integer, { IInteger } from '../1.models/6_Integer';
import Section, { ISection } from '../1.models/3_Section';


//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getcursesources(req: Request, res: Response): Promise<Response> {
      const Curses = await Cursesource.find({ciclo:{$in: ['II', 'IV', 'VI', 'VIII', 'X']}});
      return res.json(Curses);
};

//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    const Curses = await User.aggregate([
      {
          $match: {
              _id: user,
          },
      },
      {
            $lookup: {
                from: "curses",
                let: { www: "$_id" },
                pipeline: [

                    {$match: { $expr: { $and: [{ $eq: ["$user", "$$www"] }, { $eq: ["$show",  "true"] },] } }},

                    {
                        $lookup: {
                            from: "integers",
                            let: { curse: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$curse", "$$curse"] } } }
                            ],
                            as: "integers",
                        },

                    },
                ],
                as: "curses",
            },
      },
    ]);

    //const Curses = await Curse.find();
    return res.json(Curses);
};


//getsControllerUser/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsControllerUser(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const curso = ObjectId(id);
    const Curses = await Curse.aggregate([
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } }
                ],
                as: "user",
            },

        },{
            $lookup: {
                from: "integers",
                let: { curse: "$_id" },
                pipeline: [
                    { $match: { $expr: {$and: [
                        { $eq: ["$curse", "$$curse"] },
                        {
                          $eq: ["$user", curso ],
                        },
                      ],} } }
                ],
                as: "integer",
            },

        },
        {
            $lookup: {
                from: "integers",
                let: { curse: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$curse", "$$curse"] } } },
                ],
                as: "integers",
            },

        },
    ]);
    //console.log(Curses)
    //const Curses = await Curse.find();
    return res.json(Curses);
};

//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
  const { ObjectId } = require("mongodb");
    const { id } = req.params;
    const curso = ObjectId(req.params.id)
    //const www = await Curse.findById(id);
    const curses = await Curse.aggregate([
      {
          $match: {
              _id: curso,
          },
      },
      {
          $lookup: {
              from: "filecurses",
              let: { www: "$_id" },
              pipeline: [
                  { $match: { $expr: { $eq: ["$curse", "$$www"] } } },
              ],
              as: "archivos",
          },
      },
    ]);
//console.log(ww);

    return res.json(curses);
}

//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function   createController(req: Request, res: Response): Promise<Response> {
    const { title, description, user, especialidad, mension, credito, ciclo, codigo, requisito, year} = req.body;
    const usser= await Curse.findOne({user:user, codigo:codigo, mension:mension})
    //console.log(usser);
const newCurse = { title, description, user, especialidad, mension, credito, ciclo, codigo, requisito, year, img: "imagen", show: "true" };
const Cursew = new Curse(newCurse);

      if(usser){
      return res.json({
        usser: { "msg": "Ya agregó el curso" }
      });
      }

      if(!usser){
      await Cursew.save();
      }

    return res.json({
      usser: { "msg": "ok" }
    });
};



//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const curse = ObjectId(req.params.id);
    const user = ObjectId(req.params.idw);
    //console.log(curse,user)
    const Curseuser = await Curse.aggregate([
        {
            $match: {
                _id: curse,
            },
        },
        {
            $lookup: {
                from: "sections",
                let: { www: "$codigo" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$codecurse", "$$www"] } } },
                    {
                        $lookup: {
                            from: "themes",
                            let: { www: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } },
                                {
                                $lookup: {
                                    from: "tasks",
                                    let: { www: "$_id" },
                                    pipeline: [
                                         { $match: { $expr: { $and: [
                                                { $eq: ["$theme", "$$www"] },
                                                {
                                                  $eq: ["$user", user],
                                                },
                                              ] } } }
                                    ],
                                    as: "usertask",
                                    },
                                }
                            ],
                            as: "temas",
                        },
                    },
                ],
                as: "unidades",
            },
        },
        {
            $lookup: {
                from: "filecurses",
                let: { www: "$codigo" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$codigo", "$$www"] } } },
                ],
                as: "archivos",
            },
        },
    ]);
    // console.log(Curseuser);
    return res.json(Curseuser);
}

//deleteController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);

    const curses = await Curse.findById(id) as ICurse;
    if (curses) {
      try {
        await fs.unlink(path.resolve(curses.img));
      } catch (err) {
        console.error(err);
      }
    }

    await Curse.deleteMany({ _id: id });
    await Integer.deleteMany({ curse: id });
    await Section.deleteMany({ curse: id });
    const taskss=await Task.find({ curse: id });
    const themes=await Theme.find({ curse: id });
    //const units=await Section.find({ curse: id });
    //console.log(taskss)


function deleteFilesTasks(taskss){
  for (const file of taskss) {
      if(file.img){
    //console.log(file.img) ;
    try {
    fs.unlink(path.resolve(file.img));
    } catch (err) {
        console.error(err);
    }
}
};
}
await Task.deleteMany({ curse: id });
if(taskss){
  deleteFilesTasks(taskss);
}

function deleteFilesThemes(themes){
  for (const file of themes) {
      if(file.img){
    //console.log(file.img) ;
    try {
    fs.unlink(path.resolve(file.img));
    } catch (err) {
        console.error(err);
    }
}};
}
await Theme.deleteMany({ curse: id });
if(themes){
  deleteFilesThemes(themes);
}
    return res.json({ message: 'Successfully deleted' });
};

//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, meet } = req.body;
    const updatedCurse = "";
    console.log(title, description, meet);

    if (req.file) {
        const Cursew = await Curse.findById(id) as ICurse;
        if (Cursew) {
            try {
                await fs.unlink(path.resolve(Cursew.img));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, meet, img: req.file.path });
    } else {
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, meet });
    }
    return res.json({
        message: 'Successfully updated',
        //updatedCurse
    });

}


/*
//createCurse2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createCurse2(req: Request, res: Response): Promise<Response> {
    const { title, description, user, curse } = req.body;
    console.log(req);
    const newCurse = { title, description, user, curse, imagePath: req.file.path };
    const Curse = new Curse(newCurse);
    await Curse.save();

    return res.json({
        message: 'Curse Saved Successfully',
    });
};

//updateCurse2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateCurse2(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(id)
    const { title, description } = req.body;
    const updatedCurse = "";
    if (req.file) {
        const Curse = await Curse.findById(id) as ICurse;
        if (Curse) {
            try {
                await fs.unlink(path.resolve(Curse.imagePath));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, imagePath: req.file.path });
    } else {
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description });
    }
    return res.json({
        message: 'Successfully updated',
        updatedCurse
    });

}
//createOpinion/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createOpinion(req: Request, res: Response): Promise<Response> {
    const { user, imageid, value } = req.body;
    await Opinion.deleteMany({ user, imageid });
    const opinar = { user, imageid, value };
    const opi = new Opinion(opinar);
    await opi.save();
    return res.json({
        message: 'Opinion Saved Successfully',
        opi
    });
};

//delete_Opinion/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function delete_Opinion(req: Request, res: Response): Promise<Response> {
    const { user, imageid } = req.body;
    console.log(user, imageid)
    await Opinion.deleteMany({ user, imageid });
    return res.json({ message: 'Curse Deleted' });
};
*/
