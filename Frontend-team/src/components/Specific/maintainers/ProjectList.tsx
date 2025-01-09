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
// import { MetricsContext } from "../../../store/context/MetricsContext"; // Importing the MetricsContext for state management.
// import profilePic from "@/assets/images/Ellipse 5 (3).png"; // Placeholder image for profile pictures.
import profilePic1 from "@/assets/images/Ellipse 4.png"; // Placeholder image for another profile picture.
// import arrow from "@/assets/images/arrow5.png"; // Image for the "Assign Task" button arrow.
// import date from "@/assets/icons/Frame (15).png"; // Icon for displaying join date.
// import task from "@/assets/icons/Frame.png"; // Icon for displaying the current task.
import { MetricsContext } from "@/store/context/MetricsContext";

const ProjectList: React.FC = () => {
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
        

</div>
      {/* Section: Struggling Contributors */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Struggling Contributors</h2>
        <div className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 p-6 rounded-3xl  overflow-x-auto">
          {/* Table for struggling contributors */}
          <div className="border-border border-opacity-35 backdrop-blur-md border-[1px] bg-white bg-opacity-5 rounded-3xl overflow-auto">

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
                            {
                            // contributor?.contributor || 
                            "Unknown"}
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
    </div>
  );
};

export default ProjectList; // Exporting the ProjectList component.