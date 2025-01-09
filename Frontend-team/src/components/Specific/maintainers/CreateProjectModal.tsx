import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

const CreateProjectModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    type: "",
    rewards: "",
    experienceLevel: "",
    skillsRequired: "",
    projectImage: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // onSubmit("")
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormValues({ ...formValues, projectImage: e.target.files[0] });
    }
  };

  // console.log(formValues)

  const handleSubmit = () => {
    const formData = new FormData();
    // Object.entries(formValues).forEach(([key, value]) => {
    //   if (value) formData.append(key, value as any);
    // });
    // onSubmit(formValues as any);
    console.log(formData)
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
        <div className="space-y-4 text-black">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formValues.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formValues.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formValues.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="rewards"
            placeholder="Rewards"
            value={formValues.rewards}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="experienceLevel"
            placeholder="Experience Level"
            value={formValues.experienceLevel}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="skillsRequired"
            placeholder="Skills Required"
            value={formValues.skillsRequired}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            name="projectImage"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
