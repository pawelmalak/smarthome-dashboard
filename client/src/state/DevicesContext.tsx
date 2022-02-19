import { createContext, useState } from 'react';
import axios from 'axios';

import { SmartDevice } from '../typescript/interfaces';

interface Context {
  devices: SmartDevice[];
  getAllDevices: () => void;
}

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
