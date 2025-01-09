import React, { useEffect, useState } from 'react';
import type {  ProjectVisual } from '../types/project';
import { FormField } from '../Form/FormField';
import { FileUpload } from '../Form/FileUpload';
import Input from '../../onBoarding/Input';
import axios from 'axios';
const VITE_REACT_BASE_API = import.meta.env.VITE_REACT_BASE_API;
// interface ProjectDetailsStepProps {
//   onSubmit: (data: ProjectFormData) => void;
// }
// const skillOptions = [
//   "React.js",
//   "Node.js",
//   "TypeScript",
//   "Solidity",
//   "UI/UX Design",
//   "Python",
//   "Data Analysis",
//   "Blockchain Development",
// ];
// interface IContributor {
//   _id: string;
//   firstName: string;
//   lastName: string;
// };


export function ProjectDetailsStep({setIsOpen}:any) {
  const [isLoading, setIsLoading] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    description: '',
    type: 'Funded',
    rewards: 0,
    experienceLevel: '',
    skillsRequired: '',
    projectImage: '',
    projectLeads: '',
    skillsCategory: '',
    longDescription: '',
    userLinks: '',
  });


  const [visual, setVisual] = useState<ProjectVisual | null>(null);
  // const [skills, setSkills] = useState<string[]>([]);
  const [contributors, setContributors] = useState<string[]>([]);
  const handleVisualUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVisual(file);
      setProjectInfo((prev) => ({ ...prev, projectImage: file.name })); // Store file name or handle appropriately
    }
  };

  const handleInputChange = (field: keyof typeof projectInfo, value: string) => {
    setProjectInfo((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setIsLoading(true);
  //   const formData = {
  //     ...projectInfo,
  //     // projectImage: visual, // Include the uploaded file
  //   };
  //   try {

  //     const token = localStorage.getItem('authToken');
  //     // console.log(token)
  //     const res = await axios.post(`${VITE_REACT_BASE_API}/project/create-project?token=${token}`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     console.log(res);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);

  //   }
  //   // onSubmit(formData);
  // };
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate required fields
    if (!projectInfo.title || !projectInfo.description) {
      alert("Please fill in all required fields: title, description, and type.");
      return;
    }
    
    setIsLoading(true);
    // const formData = new FormData();
    //   formData.set("type", "Funded")
    //   // console.log(formData)
    //   Object.keys(projectInfo).forEach((key) => {
    //     // console.log(projectInfo[key as keyof typeof projectInfo])
    //     formData.append(key, projectInfo[key as keyof typeof projectInfo] as string);
    //   });
    // console.log(formData)
    //   if (visual) {
    //     formData.append("projectImage", visual);
    //   }

    try {
      const token = localStorage.getItem("authToken");
      // projectInfo.type = "Funded";
      // projectInfo.projectLeads = "6768a827176c10f0f0c03f9d";
      console.log(projectInfo)
      console.log(token)
      await axios.post(
        `${VITE_REACT_BASE_API}/project/create-project?token=${token}`,
        projectInfo
      ).then(() => {
        setIsOpen(false);
      })
      // console.log("Response:", res.data);
    } catch (error: any) {
      console.error("Error response:", error.response?.data);
      console.error("Error message:", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const fecthData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res:any = await axios.get(`${VITE_REACT_BASE_API}/contributor/all-contributors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContributors(res?.data?.contributors || []);
      } catch (error) {
        console.error(error);
    }
  }
  fecthData();
  }, [])
  
console.log(contributors)

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2 text-gray-900">Tell us About Your Project</h2>
      <form className="space-y-6 text" onSubmit={handleSubmitForm}>
        <Input
          title="Project Name"
          placeholder="Enter your project name"
          value={projectInfo.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('title', e.target.value)
          }
        />

        <Input
          title="Short Description"
          placeholder="Shortly describe your project"
          value={projectInfo.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('description', e.target.value)
          }
        />

        <Input
          title="Long Description"
          placeholder="Elaborate on your project"
          value={projectInfo.longDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('longDescription', e.target.value)
          }
        />

        <FormField label="Project Visual">
          <FileUpload onUpload={handleVisualUpload} visual={visual} />
        </FormField>

        <Input
          title="Links"
          placeholder="Link to your project"
          value={projectInfo.userLinks}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('userLinks', e.target.value)
          }
        />

<div className="w-full flex flex-col justify-between">
          <p className="text-sm text-[#101323] mb-1">Project Leads"</p>
          <div className="border border-border rounded-2xl p-2 w-full">
            {/* <label>Type:</label> */}
            <select
              value={projectInfo.projectLeads}
              className='bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700'
              onChange={(e) => handleInputChange("projectLeads", e.target.value)}
            >
              <option value="">Select</option>
              {
              contributors.map((contributor: any) => (
                <option value={contributor._id} key={contributor._id}>{`${contributor.firstName} ${contributor.lastName} `}</option>))
            }
            </select>
          </div>
        </div>

        {/* <SelectFields
          title="Project Leads"
          placeholder="Pick a contributor or type in GitHub handle"
          value={projectInfo.projectLeads}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('projectLeads', e.target.value)
          }
        /> */}

        {/* <DropdownFields
          selectedOptions={skills}
          setSelectedOptions={setSkills}
          options={skillOptions}
          title="Skills"
        /> */}
        <Input
          title="Choose your Preferred Skills"
          placeholder="Specify required skills"
          value={projectInfo.skillsRequired}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('skillsRequired', e.target.value)
          }
        />

        {/* <DropdownFields
          selectedOptions={skills}
          setSelectedOptions={setSkills}
          options={skillOptions}
          title="Skills"
        /> */}
        <div className="w-full flex flex-col justify-between">
          <p className="text-sm text-[#101323] mb-1">Skills Category</p>
          <div className="border border-border rounded-2xl p-2 w-full">
            {/* <label>Type:</label> */}
            <select
              value={projectInfo.skillsCategory}
              className='bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700'
              onChange={(e) => handleInputChange("skillsCategory", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Tech">Tech</option>
              <option value="Not-tech">Non-Tech</option>
            </select>
          </div>
        </div>
        {/* <SelectFields
          title="Type"
          setSelectedOptions={setProjectInfo}/> */}
        <div className="w-full flex flex-col justify-between">
          <p className="text-sm text-[#101323] mb-1">Type</p>
          <div className="border border-border rounded-2xl p-2 w-full">
            {/* <label>Type:</label> */}
            <select
              value={projectInfo.type}
              className='bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700'
              onChange={(e) => handleInputChange("type", e.target.value)}
            >

              <option value="">Select</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Funded">Funded</option>
            </select>
          </div>
        </div>

        {/* Skills Level */}
        <div className="w-full flex flex-col justify-between">
          <p className="text-sm text-[#101323] mb-1">Skill Levels"</p>
          <div className="border border-border rounded-2xl p-2 w-full">
            {/* <label>Type:</label> */}
            <select
              value={projectInfo.experienceLevel}
              className='bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700'
              onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <Input
          title="Rewards"
          placeholder="Prize"
          value={projectInfo.rewards}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('rewards', e.target.value)
          }
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors"
        >
          {isLoading ? 'Uploading...' : "Submit"}
        </button>
      </form>
    </div>
  );
}
