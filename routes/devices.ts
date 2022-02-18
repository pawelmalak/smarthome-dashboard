import { Router } from 'express';

import { getAllDevices, getDeviceById } from '../controllers';

export const devicesRouter = Router();

devicesRouter.route('/').get(getAllDevices);

devicesRouter.route('/:id').get(getDeviceById);
