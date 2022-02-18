import { Router } from 'express';

import { getAllDevices } from '../controllers';

export const devicesRouter = Router();

devicesRouter.route('/').get(getAllDevices);
