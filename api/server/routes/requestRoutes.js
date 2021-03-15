import {Router} from 'express';
import requestController from '../controllers/requestController';

const router=Router();

router.post('/create',requestController.create)
router.get('/get/:id',requestController.retrieve)
router.patch('/update',requestController.update)
router.delet('/delete/:id',requestController.delete)

export default router;