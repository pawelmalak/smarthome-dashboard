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
  activeDevice: null,
  getAllDevices: () => {},
  selectDevice: (id: string) => {}
});

export const DevicesContextProvider = ({ children }: Props): JSX.Element => {
  const [devices, setDevices] = useState<SmartDevice[]>([]);
  const [activeDevice, setActiveDevice] = useState<SmartDevice | null>(null);

  const axiosInstance = axios.create({ baseURL: '/api/v1' });

  const getAllDevices = async (): Promise<void> => {
    const res = await axiosInstance.get<{ devices: SmartDevice[] }>('/devices');
    setDevices(res.data.devices);
  };

  const selectDevice = (id: string): void => {
    const device = devices.find(d => d.id === id);

    if (device) {
      setActiveDevice(device);
    } else {
      setActiveDevice(null);
    }
  };

  const context = {
    devices,
    activeDevice,
    getAllDevices,
    selectDevice
  };

  return (
    <DevicesContext.Provider value={context}>
      {children}
    </DevicesContext.Provider>
  );
};
