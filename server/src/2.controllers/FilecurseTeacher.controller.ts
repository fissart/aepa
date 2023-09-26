import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
import Responce, { IResponce } from '../1.models/8_Responce';
import Filecurse, { IFilecurse } from '../1.models/Filecurse';

//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    //console.log(req);

    const { title, type, img, curse, codigo, description } = req.body;
    if (req.file) {
        const newCurse = { title, type, img: req.file.path, curse, codigo, description };
        const userw = new Filecurse(newCurse);
        await userw.save();
    } else {
        const newCurse = { title, type, img, curse, codigo, description };
        const userw = new Filecurse(newCurse);
        await userw.save();
    }

    return res.json({
        message: 'Saved Successfully',
    });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const data = await Filecurse.find();
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
    const { blogspot, youtube, instagram, whatsapp, facebook, title, description } = req.body;
    const update = await Filecurse.findByIdAndUpdate(id, { blogspot, youtube, instagram, whatsapp, facebook, title, description });
    return res.json({
        message: 'Successfully updated'
    });
}
//updateController///////////////////////////////////////////////////////////////////////
export async function FileupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    //console.log(id);
    const update = '';
    if (req.file) {
        const File = await Filecurse.findById(id) as IFilecurse;
        if (File) {
            try {
                await fs.unlink(path.resolve(File.img));
            } catch (err) {
                console.error(err);
            }
        }
        const update = await Filecurse.findByIdAndUpdate(id, { img: req.file.path });
    } else {
        const update = await Filecurse.findByIdAndUpdate(id, {});
    }
    return res.json({
        message: 'Successfully updated'
    });
}
