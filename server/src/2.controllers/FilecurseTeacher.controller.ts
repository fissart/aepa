import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
import Responce, { IResponce } from '../1.models/8_Responce';
import Filecurse, { IFilecurse } from '../1.models/Filecurse';

//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
  const { title, type, img, curse, codigo} = req.body;
  if (req.file) {
    const newCurse = { title, type, img : req.file.path, curse, codigo };
    const userw = new Filecurse(newCurse);
    await userw.save();
  } else {
    const newCurse = { title, type, img, curse, codigo };
    const userw = new Filecurse(newCurse);
    await userw.save();
  }

  return res.json({
      message: 'Saved Successfully',
  });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const data = await Filecurse.find({type: 'RESPONCE'});
    return res.json(data);
}
//getupdateController////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await Filecurse.findById(id);
    return res.json(data);
}
//deleteController///////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const File = await Filecurse.findByIdAndRemove(id) as IFilecurse;
    return res.json({ message: 'Ok remove' });
};
//updateController///////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {  title } = req.body;
    const update = await Filecurse.findByIdAndUpdate(id, { title });
    return res.json({
        message: 'Successfully updated'
    });
}
