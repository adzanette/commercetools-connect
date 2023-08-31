import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info(req.body);
  res.status(200);
  res.send();
});

export default serviceRouter;
