import { Router } from 'express';

import { logger } from '../utils/logger.utils';

const eventRouter: Router = Router();

eventRouter.post('/', async (req, res) => {
  logger.info(JSON.stringify(req.body));
  res.status(200);
  res.send();
});

export default eventRouter;
