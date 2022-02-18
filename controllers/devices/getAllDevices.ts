import { Request, Response } from 'express';
import { DataTool } from '../../utils';
import { SmartDevice } from '../../typescript/interfaces';

export const getAllDevices = (req: Request, res: Response) => {
  const dataTool = new DataTool<SmartDevice>();

  const data = dataTool.getAll();

  res.json({ devices: data });
};
