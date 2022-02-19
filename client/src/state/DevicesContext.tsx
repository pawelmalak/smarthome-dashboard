import { createContext, useState } from 'react';
import {
  DevicesContext as Context,
  SmartDevice
} from '../typescript/interfaces';
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}

export const DevicesContext = createContext<Context>({
  devices: [],
  getAllDevices: () => {}
});

export const DevicesContextProvider = ({ children }: Props): JSX.Element => {
  const [devices, setDevices] = useState<SmartDevice[]>([]);

  const axiosInstance = axios.create({ baseURL: '/api/v1' });

  const getAllDevices = async (): Promise<void> => {
    const res = await axiosInstance.get<{ devices: SmartDevice[] }>('/devices');
    setDevices(res.data.devices);
  };

  const context = {
    devices,
    getAllDevices
  };

  return (
    <DevicesContext.Provider value={context}>
      {children}
    </DevicesContext.Provider>
  );
};
