import {Router} from 'express';
import movementController from '../controllers/movementController';

const router=Router();

router.post('/create',movementController.create)
router.get('/get/:id',movementController.retrieve)
router.patch('/update',movementController.update)
router.delete('/delete/:id',movementController.delete)

export default router;