﻿import { Router } from 'express'
const router = Router();
import upload from '../libs/img_collection'
import {
  getsController,
  createController,
  deleteController,
  updateController,
  getupdateController,
  getAveragesUserController,
  getFirstController
} from '../2.controllers/AVERAGE.controller'

//C
router.route('/')
    .post(createController)
    .get(getsController);
//RUD
router.route('/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(updateController);

router.route('/getAveragesUser/:id')
    .get(getAveragesUserController);

router.route('/First/:ciclo/:mencion/:year')
    .get(getFirstController);

export default router;
