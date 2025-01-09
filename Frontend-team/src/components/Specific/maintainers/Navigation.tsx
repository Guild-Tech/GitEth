import { useEffect, useState } from "react";
// import PaymentsFunding from "./PaymentsFunding";
import Analytics from "./Analytics";
import Applications from "./Applications";
// import Tasks from "./Tasks";
// import TeamCollaboration from "./TeamCollaboration";
// import githubIcon from "@/assets/icons/githubIcon.png";
import arrow from "@/assets/icons/Frame (2).png";
import Tasks from "./Tasks";
import TeamCollaboration from "./TeamCollaboration";
import PaymentsFunding from "./PaymentsFunding";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {Octokit} from "octokit"
/**
 * Navigation Component:
 * This component displays a sidebar with navigation buttons to switch between different sections of the application.
 * Each section is a different component (Tasks, Team Collaboration, Payments & Funding, Analytics, Applications).
 * It also includes a "New Task" button and a navigation button to collapse the sidebar (using the arrow icon).
 */
const Navigation = () => {
  // State to track the active component and the currently active button in the navigation
  const [activeComponent, setActiveComponent] = useState("Tasks");
  const [isActive, setIsActive] = useState("Tasks");
  const [repos, setRepos] = useState<any[]>();
  const [_, setSelectedRepoName] = useState<string>("");
  // const [selectedRepo, setSelectedRepo] = useState<any>();


  
  const octokit = new Octokit({
    auth: "",
  });
  // Function to handle button clicks
  const handleButtonClick = async() => {
    const response = await octokit.request("GET /user/repos")
    setRepos(response.data) 
  }
  // const handleSelectRepo = async(repo:string) => {
  //   const response = await octokit.request("GET /repos/{owner}/{repo}", {
  //     owner: "ethopensource",
  //     repo: selectedRepoName,
  //   })
  //   setSelectedRepo(response.data)
  // }
useEffect(() => {
  handleButtonClick()
}, [])
// console.log(selectedRepo)

  return (
    <div className="flex flex-col w-full text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 ">
        <div className="flex items-center gap-2 text-grayBlue ">
          <ChevronLeft size={16} /> Projects
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-grayBlue">Projects <ChevronRight size={16} /></div>
          <select onChange={(e) => setSelectedRepoName(e.target.value)} className="bg-transparent rounded-md p-2 outline-none focus:outline-none focus:border-none optional:bg-opacity-20 ">
            {repos?.map((repo) => (
              <option key={repo.id} value={repo.name}  className="bg-black">
                {repo.name}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="flex flex-col md:flex-row mt-6  w-full">
        {/* Navigation Bar */}
        <div className="w-full md:w-1/4 h-fit border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 pt-4 pb-4 rounded-2xl  md:mr-4 mb-4 md:mb-0">
          {/* Title of the sidebar with a collapsible arrow */}
          <h2 className="pl-4 pr-4 text-white font-semibold flex justify-between mb-1 text-center md:text-left text-2xl">
            Your Projects
            <img src={arrow} className="pr-1" alt="Collapse Icon" /> {/* Arrow icon to collapse sidebar */}
          </h2>

          {/* Subtitle explaining the projects section */}
          <h3 className="text-sm text-grayBlue font-thin mb-3 text-center pl-4 pr-4 md:text-left">
            View the projects you’ve created and what’s happening with them.
          </h3>

          {/* Border under the subtitle */}
          <h2 className="border-b border-gray-700"></h2>

          {/* Navigation Buttons */}
          <div className="space-y-4 p-4">
            {/* Map through the navigation buttons to render them dynamically */}
            {[
              { label: "Tasks", value: "Tasks" },
              { label: "Team Collaboration", value: "TeamCollaboration" },
              { label: "Payments & Funding", value: "PaymentsFunding" },
              { label: "Analytics", value: "Analytics" },
              { label: "Applications", value: "Applications" },
            ].map((button) => (
              <button
                key={button.value}
                className={`w-full text-left px-4 py-2 rounded-lg text-white ${isActive === button.value ? "bg-grayBlue  bg-opacity-15 backdrop-blur-lg " : ""
                  }`}
                onClick={() => {
                  // Set the active component to display the correct section
                  setActiveComponent(button.value);
                  // Set the active button to highlight the selected button
                  setIsActive(button.value);
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 p-1 sm:px-3">

          {activeComponent === "Tasks" && <Tasks />}
          <div>


            {/* Render Active Component Based on the State */}
            {activeComponent === "TeamCollaboration" && <TeamCollaboration />}
            {activeComponent === "PaymentsFunding" && <PaymentsFunding />}
            {activeComponent === "Analytics" && <Analytics />}
            {activeComponent === "Applications" && <Applications />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;