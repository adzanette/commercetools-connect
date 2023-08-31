import { Router } from 'express';

import { logger } from '../utils/logger.utils';

const eventRouter: Router = Router();

eventRouter.post('/', async (req, res) => {
  const decodedData = req.body?.message?.data
    ? Buffer.from(req.body?.message?.data, 'base64').toString().trim()
    : undefined;
  logger.info(JSON.stringify(decodedData));
  res.status(200);
  res.send();
});

export default eventRouter;
