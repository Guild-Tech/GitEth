/**
 * This React component, `Analytics`, displays analytics for contributors in various categories:
 * 
 * 1. **New Contributors**: Shows recently added contributors, their tasks, and join dates. If no contributors are present, a fallback message is displayed.
 * 2. **Churned Contributors**: Displays contributors who have left or stopped contributing, along with their details.
 * 3. **Most Active Contributors**: Shows a table of contributors actively involved in tasks, including their closed PRs, completed issues, and code reviews.
 * 4. **Struggling Contributors**: Lists contributors facing challenges, along with the repository they are struggling with, the task, and the reason.
 * 
 * The component uses the `MetricsContext` to retrieve analytics data such as contributors and their metrics. 
 * If the context is not available, an error is thrown.
 * 
 * It utilizes Tailwind CSS for styling, creating a responsive and visually appealing interface.
 * Images/icons are used to represent contributors and their tasks. Fallback messages are shown in each section when there are no contributors in a specific category.
 */

import React, { useContext } from "react";
import { MetricsContext } from "../../../store/context/MetricsContext"; // Importing the MetricsContext for state management.
import profilePic from "@/assets/images/Ellipse 5 (3).png"; // Placeholder image for profile pictures.
import profilePic1 from "@/assets/images/Ellipse 4.png"; // Placeholder image for another profile picture.
import arrow from "@/assets/images/arrow5.png"; // Image for the "Assign Task" button arrow.
import date from "@/assets/icons/Frame (15).png"; // Icon for displaying join date.
import task from "@/assets/icons/Frame.png"; // Icon for displaying the current task.

const Analytics: React.FC = () => {
  // Accessing the context data from MetricsContext.
  const context = useContext(MetricsContext);

  // If MetricsContext is not used within its provider, an error is thrown.
  if (!context) {
    throw new Error("Analytics must be used within MetricsProvider");
  }

  const { metrics } = context; // Destructuring the metrics data from context.

  return (
    <div className="text-white font-kern space-y-10">
      {/* Section: New Contributors */}
      <div>
        <h2 className="text-xl font-light mb-2">New Contributors</h2>
        <div className="flex space-x-4">
          {/* Checks if newContributors array exists and has elements */}
          {metrics?.newContributors?.length > 0 ? (
            metrics.newContributors.map((contributor, index) => (
              <div
                key={index}
                className="w-full sm:w-2/4 sm:max-w-full sm:flex flex-col justify-start items-start flex-wrap backdrop-blur border border-customBorder bg-[#293056] shadow-md rounded-lg p-4 mb-4"
              >
                {/* Contributor Info */}
                <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full border border-customBorder w-fit p-1 bg-[#0D0F1C]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                    {/* Profile Picture */}
                    <img src={profilePic}></img>
                  </div>
                  <div>
                    <h3 className="text-white pr-2 font-light">
                      {contributor.name || "Unknown"} {/* Contributor name */}
                    </h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:flex-grow space-y-4 pt-4">
                  {/* Current Task */}
                  <p className="text-white flex text-sm">
                    <span className="font-semibold flex text-gray-400 pr-2">
                      <img src={task} className="pr-1"></img>Current Task:
                    </span>
                    {contributor.currentTask || "No task assigned"}
                  </p>
                  {/* Join Date */}
                  <p className="text-white flex text-sm">
                    <span className="font-semibold flex text-gray-400 pr-2">
                      <img src={date} className="pr-1"></img>Join Date:
                    </span>
                    {contributor.joinedDate || "Unknown"}
                  </p>
                </div>
                {/* Assign Task Button */}
                <div className="flex justify-end sm:justify-start sm:ml-auto">
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-full flex items-center justify-center w-fit transition">
                    Assign Task <img src={arrow} className="filter invert pr-1"></img>
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Displayed if no new contributors are present.
            <div className="p-6 rounded-xl text-center bg-[#293056]">
              <p className="text-white text-lg font-medium">Nothing to see...</p>
              <p className="text-gray-600 text-sm">
                No new contributors have been added yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section: Churned Contributors */}
      <div>
        <h2 className="text-xl font-light mb-2">Churned Contributors</h2>
        <div className="flex space-x-4">
          {metrics?.churnedContributors?.length > 0 ? (
            metrics.churnedContributors.map((contributor, index) => (
              <div
                key={index}
                className="w-full sm:w-2/4 sm:max-w-full sm:flex flex-col justify-start items-start flex-wrap backdrop-blur border border-customBorder bg-[#293056] shadow-md rounded-lg p-4 mb-4"
              >
                {/* Same structure as New Contributors */}
                <div className="flex items-center space-x-3 sm:mr-4 font-kern rounded-full border border-customBorder w-fit p-1 bg-[#0D0F1C]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <img src={profilePic1}></img>
                  </div>
                  <div>
                    <h3 className="text-white pr-2 font-light">
                      {contributor.name || "Unknown"}
                    </h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:flex-grow space-y-4 pt-4">
                  <p className="text-white text-sm flex">
                    <span className="font-semibold text-gray-400 flex pr-2">
                      <img src={task} className="pr-1"></img>Current Task:
                    </span>
                    {contributor.currentTask || "No task assigned"}
                  </p>
                  <p className="text-white text-sm flex">
                    <span className="font-semibold text-gray-400 flex pr-2">
                      <img src={date} className="pr-1"></img>Join Date:
                    </span>
                    {contributor.joinedDate || "Unknown"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-xl text-center bg-[#293056]">
              <p className="text-white text-lg font-medium">Nothing to see...</p>
              <p className="text-gray-600 text-sm">
                No contributors have churned yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section: Most Active Contributors */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Most Active Contributors</h2>
        <div className="bg-[#293056] p-6 rounded-xl border border-customBorder overflow-x-auto">
          {/* Table to display active contributors */}
          <table className="w-full rounded-xl border border-customBorder text-sm">
            <thead>
              <tr className="text-left font-thin text-white bg-[#0D0F1C]">
                <th className="py-4 px-4">Contributor</th>
                <th className="py-4 px-4">Closed PRs</th>
                <th className="py-4 px-4">Completed Issues</th>
                <th className="py-4 px-4">Code Reviews</th>
              </tr>
            </thead>
            <tbody>
              {metrics?.activeContributors?.length > 0 ? (
                metrics.activeContributors.map((contributor, index) => (
                  <tr
                    key={index}
                    className="bg-[#101323] text-white h-6 border border-b-[#293056]"
                  >
                    {/* Displays contributor data */}
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full w-fit p-1 bg-[#0D0F1C]">
                        <img src={profilePic}></img>
                        <div>
                          <h3 className="text-white pr-2 font-light">
                            {contributor.contributor || "Unknown"}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {contributor.closedPRs || "-"}
                    </td>
                    <td className="py-4 px-4">
                      {contributor.completedIssues || "-"}
                    </td>
                    <td className="py-4 px-4">
                      {contributor.codeReviews || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                // Fallback for no active contributors.
                <tr className="bg-[#101323] text-gray-400 h-6">
                  <td className="py-4 px-4" colSpan={4}>
                    No active contributors yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section: Struggling Contributors */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Struggling Contributors</h2>
        <div className="bg-[#293056] p-6 rounded-xl border border-customBorder overflow-x-auto">
          {/* Table for struggling contributors */}
          <table className="w-full rounded-lg border border-customBorder text-sm">
            <thead>
              <tr className="text-left font-thin text-white bg-[#0D0F1C]">
                <th className="py-4 px-4">Contributor</th>
                <th className="py-4 px-4">Pending PRs</th>
                <th className="py-4 px-4">Unresolved Issues</th>
                <th className="py-4 px-4">Incomplete Reviews</th>
              </tr>
            </thead>
            <tbody>
              {metrics?.strugglingContributors?.length > 0 ? (
                metrics.strugglingContributors.map((contributor, index) => (
                  <tr
                    key={index}
                    className="bg-[#101323] text-white h-6 border border-b-[#293056]"
                  >
                    {/* Displays contributor data */}
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full w-fit p-1 bg-[#0D0F1C]">
                        <img src={profilePic1}></img>
                        <div>
                          <h3 className="text-white pr-2 font-light">
                            {contributor.contributor || "Unknown"}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {contributor.repository || "-"}
                    </td>
                    <td className="py-4 px-4">
                      {contributor.strugglingOn || "-"}
                    </td>
                    <td className="py-4 px-4">
                      {contributor.reason || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                // Fallback for no struggling contributors.
                <tr className="bg-[#101323] text-gray-400 h-6">
                  <td className="py-4 px-4" colSpan={4}>
                    No struggling contributors yet.
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

export default Analytics; // Exporting the Analytics component.
