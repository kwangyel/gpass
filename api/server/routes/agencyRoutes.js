import {Router} from 'express';
import agencyController from '../controllers/agencyController';

const router=Router();

router.post('/create',agencyController.create)
router.get('/get/:id',agencyController.retrieve)
router.patch('/update',agencyController.patch)
router.delet('/delete/:id',agencyController.delete)

export default router;