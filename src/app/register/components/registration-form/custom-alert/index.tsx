'use client';

import { X, AlertCircle } from 'lucide-react';
import { alertStyles } from './styles';

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

export function CustomAlert({ message, onClose }: CustomAlertProps) {
  return (
    <div className={alertStyles.overlay}>
      <div className={alertStyles.container}>
        <div className={alertStyles.header}>
          <AlertCircle className={alertStyles.icon} />
          <span className={alertStyles.title}>Perhatian</span>
          <button
            onClick={onClose}
            className={alertStyles.closeButton}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={alertStyles.content}>
          <p className={alertStyles.message}>{message}</p>
        </div>
        <div className={alertStyles.footer}>
          <button
            onClick={onClose}
            className={alertStyles.button}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
