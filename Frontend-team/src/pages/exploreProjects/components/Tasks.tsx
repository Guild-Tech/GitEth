/**
 * PerformanceMetrics Component
 *
 * This component displays performance-related metrics such as tasks completed, pull requests approved, 
 * and the average task completion time. It includes placeholders during loading and error handling for failures.
 *
 * Key Features:
 * - Dynamically displays metrics retrieved from the MetricsContext.
 * - Simulates a loading state with placeholders for visual feedback.
 * - Handles potential errors gracefully and informs the user.
 *
 * Dependencies:
 * - React for rendering the UI and managing state with hooks.
 * - MetricsContext for accessing application metrics.
 * - Tailwind CSS (or a similar utility-first CSS framework) for styling.
 */

import React, { useContext, useEffect, useState } from "react";
import { MetricsContext } from "../../../store/context/MetricsContext";

// Placeholder Component for Loading State
const Placeholder: React.FC = () => (
  <div className="bg-[#293056] h-44 p-4 border border-customBorder rounded-lg text-left animate-pulse">
    {/* Simulated title placeholder */}
    <p className="text-3xl font-kern font-medium bg-gray-600 h-8 w-3/4 mb-4"></p>
    {/* Simulated description placeholder */}
    <p className="bg-gray-500 h-5 w-1/2"></p>
  </div>
);

const Tasks: React.FC = () => {
  const context = useContext(MetricsContext); // Access MetricsContext.
  const [isLoading, setIsLoading] = useState(true); // Loading state for metrics.
  const [hasError, setHasError] = useState(false); // Error state for metrics.

  // Ensure the context is provided; throw an error otherwise.
  if (!context) {
    throw new Error("PerformanceMetrics must be used within MetricsProvider");
  }

  const { metrics } = context; // Extract metrics from context.

  // Simulate data fetching and handle potential errors.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a loading delay for better user experience.
        setTimeout(() => {
          setIsLoading(false); // End loading state after the delay.
        }, 1000); // Adjust delay duration as needed.
      } catch (error) {
        console.error("Error fetching metrics:", error); // Log error to console.
        setHasError(true); // Set error state to true on failure.
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once.

  // Error message if fetching metrics fails.
  if (hasError) {
    return (
      <div className="text-center text-red-500">
        <p>Failed to load performance metrics. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="text-white rounded-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Tasks Completed */}
        {isLoading ? (
          <Placeholder /> // Render placeholder during loading.
        ) : (
          <div
            className="bg-[#293056] h-44 p-4 border border-customBorder rounded-lg text-left"
            title="Tasks completed by contributors" // Tooltip for additional context.
          >
            <p className="text-3xl font-kern font-medium">
              {metrics.tasksCompleted || "N/A"} {/* Render tasks completed or fallback. */}
            </p>
            <p className="text-white font-thin font-kern">Tasks Completed</p>
          </div>
        )}

        {/* Pull Requests Approved */}
        {isLoading ? (
          <Placeholder /> // Render placeholder during loading.
        ) : (
          <div
            className="bg-[#293056] h-44 p-4 border border-customBorder rounded-lg text-left"
            title="Pull requests approved by maintainers" // Tooltip for additional context.
          >
            <p className="text-3xl font-kern font-medium">
              {metrics.pullRequestsApproved || "N/A"} {/* Render pull requests approved or fallback. */}
            </p>
            <p className="text-white font-thin font-kern">
              Pull Requests Approved
            </p>
          </div>
        )}

        {/* Average Task Completion Time */}
        {isLoading ? (
          <Placeholder /> // Render placeholder during loading.
        ) : (
          <div
            className="bg-[#293056] h-44 p-4 border border-customBorder rounded-lg text-left"
            title="Average time taken to complete tasks" // Tooltip for additional context.
          >
            <p className="text-3xl font-kern font-medium">
              {metrics.avgTaskCompletionTime || "N/A"} Days {/* Render average time or fallback. */}
            </p>
            <p className="text-white font-thin font-kern">
              Avg Task Completion Time
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks; // Export the component for use in other parts of the app.
