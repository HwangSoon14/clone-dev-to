import express from 'express';
import tagCtrl from '../controllers/tagController.js';
const router = express.Router();



router.get('/' , tagCtrl.getAllTag);

export default router;
