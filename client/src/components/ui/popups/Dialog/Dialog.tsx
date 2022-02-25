import { useEffect, useContext, useRef } from 'react';
import { InterfaceContext, DevicesContext } from '../../../../state';
import Icon from '@ailibs/feather-react-ts';
import interact from 'interactjs';
import styles from './Dialog.module.css';

interface Props {
  children: React.ReactNode;
  initialPosition?: {
    x: number;
    y: number;
  };
}

export const Dialog = ({ children, initialPosition }: Props): JSX.Element => {
  const { clearDevice } = useContext(DevicesContext);
  const { hideDeviceDetails, saveDialogPosition } =
    useContext(InterfaceContext);

  const dialogRef = useRef<HTMLDivElement>(null);

  const closeDialog = (): void => {
    hideDeviceDetails();
    clearDevice();
  };

  useEffect(() => {
    interact('.interactable')
      .draggable({
        listeners: {
          move({ target, dx, dy }) {
            const x = (parseFloat(target.dataset.x) || 0) + dx;
            const y = (parseFloat(target.dataset.y) || 0) + dy;

            target.style.transform = `translate(${x}px, ${y}px)`;

            target.dataset.x = x.toString();
            target.dataset.y = y.toString();
          },
          end({ target, dx, dy }) {
            const x = (parseFloat(target.dataset.x) || 0) + dx;
            const y = (parseFloat(target.dataset.y) || 0) + dy;

            saveDialogPosition(x, y);
          }
        }
      })
      .resizable({
        edges: { top: false, left: true, bottom: true, right: true },
        modifiers: [
          interact.modifiers.restrictSize({ min: { width: 300, height: 350 } })
        ],
        listeners: {
          move({ target, rect, deltaRect }) {
            let { x, y } = target.dataset;

            x = (parseFloat(x) || 0) + deltaRect.left;
            y = (parseFloat(y) || 0) + deltaRect.top;

            Object.assign(target.style, {
              width: `${rect.width}px`,
              height: `${rect.height}px`,
              transform: `translate(${x}px, ${y}px)`
            });

            Object.assign(target.dataset, { x, y });
          }
        }
      });
  }, []);

  useEffect(() => {
    if (initialPosition) {
      if (dialogRef.current) {
        dialogRef.current.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
      }
    }
  }, [initialPosition]);

  return (
    <div
      className={[styles.Dialog, 'interactable'].join(' ')}
      data-x={`${initialPosition ? initialPosition.x : 0}`}
      data-y={`${initialPosition ? initialPosition.y : 0}`}
      ref={dialogRef}
    >
      <div className={styles.DialogHeader}>
        <span>Device details</span>
        <Icon name='x' size={18} onClick={closeDialog} />
      </div>
      <div className={styles.DialogBody}>{children}</div>
    </div>
  );
};
