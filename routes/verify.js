/** @format */

import express from 'express';
import { secure } from './../middleware/secure.js';
import { finalController } from '../controller/finalController.js';

const verify = express.Router();

verify.route('/:token').get(secure, finalController);

export default verify;
