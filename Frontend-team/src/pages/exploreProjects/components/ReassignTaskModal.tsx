import React from 'react';

interface ReassignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReassignTaskModal: React.FC<ReassignTaskModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
        >
          X
        </button>
        <h3 className="text-xl mb-4">Reassign Task</h3>
        {/* Add your form or logic for reassigning tasks */}
        <form>
          <input type="text" placeholder="New Assignee" className="mb-4 p-2 w-full border rounded" />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Reassign</button>
        </form>
      </div>
    </div>
  );
};

export default ReassignTaskModal;
