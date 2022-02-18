import { SmartDevice } from '.';

export interface SmartBulb extends SmartDevice {
  type: 'bulb';
  isTurnedOn: boolean;
  brightness: number;
  color: string;
}
