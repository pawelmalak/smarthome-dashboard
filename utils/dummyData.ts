import { DataTool } from '.';
import {
  SmartDevice,
  SmartOutlet,
  SmartTemperatureSensor
} from '../typescript/interfaces';
import { SmartDeviceConnectionState } from '../typescript/types';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function to generate random data for demo purposes
export const dummyData = () => {
  const dataTool = new DataTool<SmartDevice>();
  let devices = dataTool.getAll();

  const connectionStates: SmartDeviceConnectionState[] = [
    'connected',
    'disconnected',
    'poorConnection'
  ];

  devices = devices.map((d: SmartDevice) => {
    let tmpDevice: SmartDevice = { ...d };

    // random connection state
    tmpDevice = {
      ...tmpDevice,
      connectionState:
        connectionStates[Math.floor(Math.random() * connectionStates.length)]
    };

    // generate data for smart outlet
    if (d.type === 'outlet') {
      tmpDevice = {
        ...tmpDevice,
        powerConsumption: randomNumber(55, 70)
      } as SmartOutlet;
    }

    // generate data for temperature sensor
    if (d.type === 'temperatureSensor') {
      tmpDevice = {
        ...tmpDevice,
        temperature: randomNumber(20, 30)
      } as SmartTemperatureSensor;
    }

    return tmpDevice;
  });

  return devices;
};
