﻿import { Router } from 'express'
const router = Router();
import upload from '../libs/img_collection'
import { getsController, createController, FileupdateController, deleteController, updateController, getupdateController } from './land.controller'
//C
router.route('/')
    .post(upload.single('image'), createController)
    .get(getsController);
//RUD
router.route('/:id')
    .delete(deleteController)
    .get(getupdateController)
    .put(upload.single('image'), updateController);


router.route('/update/:id')
    .put(upload.single('image'), FileupdateController);

export default router;

