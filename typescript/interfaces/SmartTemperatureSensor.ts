import { SmartDevice } from '.';

export interface SmartTemperatureSensor extends SmartDevice {
  type: 'temperatureSensor';
  temperature: number;
}
