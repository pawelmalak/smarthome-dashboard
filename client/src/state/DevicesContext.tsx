import { createContext, useState, useEffect } from 'react';
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
  selectDevice: (id: string) => {},
  clearDevice: () => {}
});

export const DevicesContextProvider = ({ children }: Props): JSX.Element => {
  const [devices, setDevices] = useState<SmartDevice[]>([]);
  const [activeDevice, setActiveDevice] = useState<SmartDevice | null>(null);

  const apiBaseUrl = '/api/v1/devices';
  const axiosInstance = axios.create({ baseURL: apiBaseUrl });

  // listen for device updates
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:5000${apiBaseUrl}/refresh`);

    socket.addEventListener('message', e => {
      const data = JSON.parse(e.data) as SmartDevice[];

      setDevices(data);
    });

    return () => socket.close();
  }, []);

  // check if active device was updated
  useEffect(() => {
    if (activeDevice) {
      const device = devices.find(d => d.id === activeDevice.id) as SmartDevice;
      setActiveDevice(device);
    }
  }, [devices]);

  const getAllDevices = async (): Promise<void> => {
    const res = await axiosInstance.get<{ devices: SmartDevice[] }>('/');
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

  const clearDevice = (): void => {
    setActiveDevice(null);
  };

  const context: Context = {
    devices,
    activeDevice,
    getAllDevices,
    selectDevice,
    clearDevice
  };

  return (
    <DevicesContext.Provider value={context}>
      {children}
    </DevicesContext.Provider>
  );
};
