import {Router} from 'express';
import agencyController from '../controllers/agencyController';

const router=Router();

router.post('/create',agencyController.create)
router.get('/get/:id',agencyController.retrieve)
router.get('/get-all',agencyController.retrieveAll)
router.patch('/update',agencyController.update)
router.delete('/delete/:id',agencyController.delete)

export default router;