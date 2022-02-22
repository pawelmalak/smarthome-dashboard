import { SmartDeviceConnectionState } from '../../../typescript/types';
import styles from './DeviceStatus.module.css';

interface Props {
  status: SmartDeviceConnectionState;
  verbose?: boolean;
}

export const DeviceStatus = ({
  status,
  verbose = false
}: Props): JSX.Element => {
  let elementColor = 'var(--color-grey-dark)';

  if (status === 'connected') {
    elementColor = 'var(--color-green)';
  } else if (status === 'poorConnection') {
    elementColor = 'var(--color-orange)';
  }

  return (
    <div className={styles.Status} style={{ color: elementColor }}>
      <div
        className={[styles.VisualStatus, verbose && styles.WithText].join(' ')}
        style={{ backgroundColor: elementColor }}
      ></div>
      {verbose && <p>{status}</p>}
    </div>
  );
};
