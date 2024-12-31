import { useState } from "react";
import PaymentsFunding from "./PaymentsFunding";
import Analytics from "./Analytics";
import Applications from "./Applications";
import Tasks from "./Tasks";
import TeamCollaboration from "./TeamCollaboration";
import githubIcon from "@/assets/icons/githubIcon.png";
import arrow from "@/assets/icons/Frame (2).png";

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

  return (
    <div className="flex flex-col w-full text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <select className="bg-[#293056] text-white p-2 rounded-lg border border-gray-600">
          <option>Decentralized Voting Platform</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row mt-6 mx-4 w-full">
        {/* Navigation Bar */}
        <div className="w-full md:w-1/4 h-fit bg-[#1F253D] pt-4 pb-4 rounded-lg border border-gray-700 md:mr-4 mb-4 md:mb-0">
          {/* Title of the sidebar with a collapsible arrow */}
          <h2 className="text-xl pl-4 pr-4 text-white font-semibold flex justify-between mb-1 text-center md:text-left">
            Your Projects
            <img src={arrow} className="pr-1" alt="Collapse Icon" /> {/* Arrow icon to collapse sidebar */}
          </h2>

          {/* Subtitle explaining the projects section */}
          <h3 className="text-sm text-gray-300 font-thin mb-3 text-center pl-4 pr-4 md:text-left">
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
                className={`w-full text-left px-4 py-2 rounded-lg text-white ${
                  isActive === button.value ? "bg-[#293056] border border-gray-700" : ""
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
        <div className="w-full md:w-3/4 p-4 md:p-6">
        
        {activeComponent === "Tasks" && <Tasks />}
        <div>
          {/* "New Task" Button */}
          <button className="mt-4 bg-white text-black px-4 py-2 mb-4 rounded-full flex items-center justify-center w-fit transition">
            <img src={githubIcon} className="filter invert pr-1" alt="GitHub Icon" />
            New Task
          </button>

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
