import {Router} from 'express';
import agentController from '../controllers/agentController';

const router=Router();

router.post('/create',agentController.create)
router.get('/get/:id',agentController.retrieve)
router.get('/get-all',agentController.retrieveAll)
router.patch('/update',agentController.update)
router.delete('/delete/:id',agentController.delete)

export default router;