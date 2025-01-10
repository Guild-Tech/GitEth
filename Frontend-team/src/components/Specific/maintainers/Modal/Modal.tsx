import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  step: number;
  totalSteps: number;
}

export function Modal({ isOpen, onClose, children, step, totalSteps }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#F8F9FC] w-[640px] mx-auto container p-4 rounded-[26px] relative max-h-[70vh] overflow-y-auto scrollbar-none">
        <div className="p-6 ">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:border-purple-500"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="text-base mb-1 text-gray-700">
            {step}/{totalSteps}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}