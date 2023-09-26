import { Router } from 'express'
const router = Router();

import upload from '../libs/img_curse'

import {
    createController,
    getupdateController,
    getController,
    updateController,
    deleteController,
} from '../2.controllers/4_themes.controller'

router.route('/Controller')
    .post(upload.single('image'), createController);

router.route('/ControllerThemeUser/:id/:curssse')
    .get(getupdateController)

router.route('/Controller/:id')
    .delete(deleteController)
    .put(upload.single('image'), updateController);

router.route('/ControllerAll/:id')
    .get(getController)

export default router;
