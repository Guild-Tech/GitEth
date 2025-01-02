/**
 * Applications Component
 *
 * This component renders an overview of application statistics and a detailed table of application records.
 * It displays key metrics like pending, approved, and rejected applications using a MetricsContext to access the data.
 * The table lists individual applications with details like the contributor's name, the task applied for, 
 * application date, status, and actions available for each application. 
 * If no application data is present, a fallback message is displayed.
 *
 * Dependencies:
 * - React for rendering the UI.
 * - MetricsContext for accessing application data and metrics.
 * - CSS classes for styling are based on a Tailwind-like utility-first CSS framework.
 */

import React, { useContext } from "react";
// import { MetricsContext } from "../../../store/context/MetricsContext"; // Import the MetricsContext to access application data.
import profilePic from "@/assets/images/Ellipse 5 (3).png"; // Placeholder image for contributor profile pictures.
import { MetricsContext } from "@/store/context/MetricsContext";

const Applications: React.FC = () => {
  const context = useContext(MetricsContext); // Access the context data.

  // Throw an error if the context is not provided properly.
  if (!context) {
    throw new Error("Applications must be used within MetricsProvider");
  }

  const { metrics } = context; // Destructure the metrics object from context.

  return (
    <div className="text-white font-kern p-4 md:p-6 space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* Card: Pending Applications */}
        <div className=" p-4 md:p-6 rounded-xl border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 flex flex-col items-start space-y-2">
          <p className="text-3xl md:text-4xl font-light">
            {metrics.pendingApplications || 0} {/* Number of pending applications */}
          </p>
          <p className="text-sm md:text-base font-thin">Pending Applications</p>
        </div>

        {/* Card: Approved Applications */}
        <div className=" p-4 md:p-6 rounded-xl border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 flex flex-col items-start space-y-2">
          <p className="text-3xl md:text-4xl font-light">
            {metrics.approvedApplications || 0} {/* Number of approved applications */}
          </p>
          <p className="text-sm md:text-base font-thin">Approved Applications</p>
        </div>

        {/* Card: Rejected Applications */}
        <div className=" p-4 md:p-6 rounded-xl border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 flex flex-col items-start space-y-2">
          <p className="text-3xl md:text-4xl font-light">
            {metrics.rejectedApplications || 0} {/* Number of rejected applications */}
          </p>
          <p className="text-sm md:text-base font-thin">Rejected Applications</p>
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-x-auto">
        <div className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 p-4 md:p-6 rounded-3xl ">
          <div className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 rounded-3xl overflow-auto">

          <table className="w-full rounded-lg border font-thin border-customBorder">
            <thead>
              <tr className="text-left font-thin text-white bg-[#0D0F1C]">
                <th className="py-3 px-4 whitespace-nowrap">Contributors</th>
                <th className="py-3 px-4 whitespace-nowrap">Task Applied For</th>
                <th className="py-3 px-4 whitespace-nowrap">Application Date</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render application rows if data exists */}
              {metrics.applications.length > 0 ? (
                metrics.applications.map((application, index) => (
                  <tr
                    key={index}
                    className="text-white h-6 border border-b-[#293056] bg-[#101323]"
                  >
                    {/* Contributor Information */}
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full w-fit p-1 bg-[#0D0F1C]">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                          {/* Profile Picture */}
                          <img src={profilePic} alt="Profile" />
                        </div>
                        <div>
                          <h3 className="text-white pr-2 font-light">
                            {application.contributor || "Unknown"}
                          </h3>
                        </div>
                      </div>
                    </td>

                    {/* Task Applied For */}
                    <td className="py-4 px-4">{application.task}</td>

                    {/* Application Date */}
                    <td className="py-4 px-4">{application.date}</td>

                    {/* Application Status */}
                    <td className="py-4 px-4">{application.status}</td>

                    {/* Actions (e.g., buttons for approving/rejecting) */}
                    <td className="py-4 px-4">
                      <button className="bg-white text-black text-sm px-3 py-1 rounded-full">
                        {application.actions}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // Fallback message when no application data is available.
                <tr className="text-gray-400 h-6 bg-[#101323]">
                  <td className="py-4 px-4 text-center" colSpan={5}>
                    No application records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Applications; // Export the Applications component.