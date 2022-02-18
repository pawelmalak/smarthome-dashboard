import { Request, Response, NextFunction } from 'express';

export const getAllDevices = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ devices: [{ id: 1, name: 'test' }] });
};
