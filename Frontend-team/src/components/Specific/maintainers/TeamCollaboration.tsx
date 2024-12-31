import React, { useContext } from "react";
// import { MetricsContext } from "../../../store/context/MetricsContext"; // Importing the MetricsContext for state management.
import profilePic from "@/assets/images/Ellipse 5 (3).png"; // Placeholder image for profile pictures.
import { MetricsContext } from "@/store/context/MetricsContext";

const TeamCollaboration: React.FC = () => {
  // Access the context data from MetricsContext.
  const context = useContext(MetricsContext);

  // If MetricsContext is not used within its provider, throw an error.
  if (!context) {
    throw new Error("TeamCollaboration must be used within MetricsProvider");
  }

  const { metrics } = context; // Destructure metrics data from context.

  // Ensure the required data exists in metrics.
  const projectLeads = metrics?.projectLeads || [];
  const contributors = metrics?.contributors || [];

  return (
    <div className="text-white font-kern space-y-10">
      {/* Project Leads Section */}
      <div>
        <h2 className="text-xl font-light mb-4">Project Leads</h2>
        <div className="flex space-x-4">
          {projectLeads.length > 0 ? (
            projectLeads.map((lead, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:mr-4 font-kern rounded-full border border-customBorder w-fit p-2 bg-[#0D0F1C]"
              >
                <img
                  src={profilePic}
                  alt={lead.name || "Lead"}
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-white font-light">{lead.name || "Unknown Lead"}</h3>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-xl text-center bg-[#293056]">
              <p className="text-white text-lg font-medium">No leads available.</p>
            </div>
          )}
        </div>
      </div>

      {/* Contributors Section */}
      <div>
        <h2 className="text-xl font-light mb-4">Contributors</h2>
        <div className="bg-[#293056] p-6 rounded-xl border border-customBorder overflow-x-auto">
          <table className="w-full rounded-lg border border-customBorder text-sm">
            <thead>
              <tr className="text-left font-thin text-white bg-[#0D0F1C]">
                <th className="py-4 px-4">Contributor</th>
                <th className="py-4 px-4">Role</th>
                <th className="py-4 px-4">Tasks Assigned</th>
                <th className="py-4 px-4">Progress</th>
                <th className="py-4 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contributors.length > 0 ? (
                contributors.map((contributor, index) => (
                  <tr
                    key={index}
                    className="bg-[#101323] text-white h-6 border border-b-[#293056]"
                  >
                    <td className="py-2 rounded-full bg-[#0D0F1C] border w-fit m-2 border-customBorder px-2 flex items-center space-x-3">
                      <img
                        src={profilePic}
                        alt={contributor.name || "Contributor"}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{contributor.name || "Unknown Contributor"}</span>
                    </td>
                    <td className="py-4 px-4">{contributor.role || "-"}</td>
                    <td className="py-4 px-4">{contributor.tasksAssigned || "-"} Assigned</td>
                    <td className="py-4 px-4">{contributor.progress || "0%"}</td>
                    <td className="py-4 px-4">
                      <button className="text-white px-4 py-2">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-[#101323] text-gray-400 h-6">
                  <td className="py-4 px-4" colSpan={5}>
                    No contributors available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamCollaboration;