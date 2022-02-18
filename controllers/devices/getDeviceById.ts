import { Request, Response } from 'express';
import { DataTool } from '../../utils';
import { SmartDevice } from '../../typescript/interfaces';

interface Params {
  id: string;
}

export const getDeviceById = (req: Request<Params>, res: Response) => {
  const deviceId = req.params.id;

  const dataTool = new DataTool<SmartDevice>();

  const data = dataTool.getById(deviceId);

  if (!data) {
    res
      .status(404)
      .json({ msg: `Device with id of ${deviceId} was not found` });
    return;
  }

  res.json(data);
};
