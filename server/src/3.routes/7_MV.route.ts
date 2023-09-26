﻿import { Router } from 'express'
const router = Router();
import upload from '../libs/img_collection'
import { getsController, getsContttroller, createController, createControllerurl, deleteController, updateController, getupdateController } from '../2.controllers/7_MV.controller'
//C
router.route('/')
    .post(upload.single('image'), createController)
router.route('/Url')
    .post(upload.single('image'), createControllerurl)
router.route('/controller/:type')
    .get(getsController);

router.route('/contttroller/:type/:expo')
    .get(getsContttroller);

//RUD
router.route('/:id')
    .delete(deleteController)
    .get(getupdateController)
    .put(upload.single('image'), updateController);
export default router;
