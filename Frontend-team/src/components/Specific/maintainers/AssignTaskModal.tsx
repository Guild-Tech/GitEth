/**
 * This component is for displaying a modal to assign a task to an applicant.
 * It shows task details, including the task title, description, due date, and required skills. 
 * Applicants who have applied for the task are listed, and the admin can either view their proposals or assign the task directly to them. 
 * If an applicant is selected, a modal displaying the applicant's proposal and relevant experience is shown.
 *
 * The code contains two main modals: the main task assignment modal and the proposal modal.
 * The task assignment modal contains functionality for viewing the proposal of an applicant, assigning the task, 
 * and closing the modal. The proposal modal displays the proposal and background experience of a selected applicant.
 */

import React, { useState } from "react";
import profilePic from "@/assets/images/Ellipse 5 (3).png"; // Placeholder image for profile pictures.
// import exp from "constants"; // Import constants, though it's not used in the current code.

interface Applicant {
  name: string;
  proposal: string;
  experience: string;
  applicationDate: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  skills: string[];
  dueDate: string;
  assignees: Applicant[];
}

interface AssignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task; // Pass full task data directly.
}

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicant: Applicant;
}

// Modal for viewing an applicant's proposal and experience.
const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose, applicant }) => {
  if (!isOpen) return null; // If the modal is closed, return nothing.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#111827] rounded-xl p-8 w-full max-w-lg text-white relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold mb-6">Proposal</h2>

        {/* Applicant Name */}
        <p className="text-gray-400 mb-4">
          <span className="font-semibold">Applicant:</span> {applicant.name}
        </p>

        {/* Applicant's Project Approach */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">How would you approach the project?</h3>
          <textarea className="text-gray-300 bg-[#1E293B] h-3 w-full p-4 rounded-lg">
            {applicant.proposal}
          </textarea>
        </div>

        {/* Applicant's Experience */}
        <div>
          <h3 className="text-lg font-medium mb-2">Relevant Experience or Background</h3>
          <textarea className="text-gray-300 bg-[#1E293B] h-3 w-full p-4 rounded-lg">
            {applicant.experience}
          </textarea>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#4ADE80] hover:bg-[#52D68C] text-black font-medium rounded-lg px-6 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal for assigning a task and viewing applicant proposals.
const AssignTaskModal: React.FC<AssignTaskModalProps> = ({ isOpen, onClose, task }) => {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // Opens the proposal modal to view applicant details.
  const handleViewProposal = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsProposalModalOpen(true);
  };

  if (!isOpen || !task) return null; // Ensure the modal is only rendered when open and task is defined.

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#111827] rounded-lg p-6 w-full max-w-3xl text-white relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Task Title */}
          <h2 className="text-xl font-semibold mb-2">{task.title}</h2>

          {/* Skills Required for Task */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-[#242F42] text-gray-300 rounded-full px-2 py-1 text-xs">Intermediate</span>
            {task.skills?.map((skill, index) => (
              <span key={index} className="bg-[#242F42] text-gray-300 rounded-full px-2 py-1 text-xs">
                {skill}
              </span>
            ))}
          </div>

          {/* Task Description */}
          <p className="text-gray-400 text-sm mb-6">{task.description}</p>
          <p className="text-gray-400 text-sm mb-6">Due by {task.dueDate}</p>

          {/* Applicants Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Applicants</h3>
            {task.assignees && task.assignees.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {task.assignees.map((applicant, index) => (
                  <div key={index} className="bg-[#1D293F] rounded-lg p-4">
                    {/* Applicant Information */}
                    <div className="flex items-center mb-2">
                      <img src={profilePic} alt="Applicant Avatar" className="w-8 h-8 rounded-full mr-2" />
                      <span className="font-medium">{applicant.name}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">Application Date: {applicant.applicationDate}</p>

                    {/* Buttons to view proposal and assign task */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewProposal(applicant)}
                        className="bg-[#374151] hover:bg-[#4B5563] text-white rounded-lg px-3 py-1 text-sm"
                      >
                        View Proposal
                      </button>
                      <button className="bg-[#4ADE80] hover:bg-[#52D68C] text-black rounded-lg px-3 py-1 text-sm">
                        Assign Task →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No assignees have applied for this task yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Proposal Modal */}
      {selectedApplicant && (
        <ProposalModal
          isOpen={isProposalModalOpen}
          onClose={() => setIsProposalModalOpen(false)}
          applicant={selectedApplicant}
        />
      )}
    </>
  );
};

export default AssignTaskModal;