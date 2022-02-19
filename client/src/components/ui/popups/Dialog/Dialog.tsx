import { useEffect, useContext, useRef, useState } from 'react';
import { InterfaceContext } from '../../../../state';
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
  const { hideDeviceDetails, saveDialogPosition } =
    useContext(InterfaceContext);

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interact('.draggable').draggable({
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
      className={[styles.Dialog, 'draggable'].join(' ')}
      data-x='0'
      data-y='0'
      ref={dialogRef}
    >
      <div className={styles.DialogHeader}>
        <span>Device details</span>
        <Icon name='x' size={18} onClick={hideDeviceDetails} />
      </div>
      <div className={styles.DialogBody}>{children}</div>
    </div>
  );
};
