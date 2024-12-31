/**
 * Tasks Component
 * 
 * This component is responsible for rendering tasks in different categories (To-Do, In Progress, Review, Done).
 * It allows users to interact with the tasks by opening modals to assign, reassign, or review tasks depending on the task's category.
 * 
 * The component also fetches performance metrics (tasks completed, pull requests approved, average task completion time)
 * from the context and displays them in a separate section. If data is still being loaded, placeholders are shown.
 * 
 * The tasks are grouped by their current status, and the component dynamically updates the task count for each category.
 * When a task is selected, a corresponding modal (AssignTaskModal, ReassignTaskModal, or ReviewTaskModal) is shown.
 * 
 * Dependencies:
 * - React: For building the component and managing state.
 * - MetricsContext: Provides performance metrics and task data.
 * - CustomBtn: A reusable button component for various actions.
 * - AssignTaskModal: Modal for assigning tasks.
 * - ReassignTaskModal: Modal for reassigning tasks.
 * - ReviewTaskModal: Modal for reviewing tasks.
 * 
 * @component
 */

import { useContext, useEffect, useState } from "react";
// import { MetricsContext } from "../../../store/context/MetricsContext";
import CustomBtn from "@/components/CustomBtn";
import githubIcon from "@/assets/icons/githubIcon.png";
import AssignTaskModal from './AssignTaskModal';
import ReassignTaskModal from './ReassignTaskModal';
import { MetricsContext } from "@/store/context/MetricsContext";
// import ReviewTaskModal from './ReviewTaskModal';

const Tasks = () => {
  // Using the MetricsContext to access the metrics data
  const context = useContext(MetricsContext);

  if (!context) {
    throw new Error("Analytics must be used within MetricsProvider");
  }

  const { metrics } = context;

  // State variables for handling loading, error, modal, and selected task
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState(null);

  // Task categories
  const categories = [
    { id: "to-do", title: "To-Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
  ];

  /**
   * Filters tasks based on category.
   * @param {string} category - The category to filter tasks by.
   * @returns {Array} - List of tasks in the specified category.
   */
  const getTasksByCategory = (category: string) => {
    if (!metrics.tasks || !Array.isArray(metrics.tasks)) return [];
    return metrics.tasks.filter((task:any) => task.status === category);
  };

  // Placeholder component shown when data is loading
  const Placeholder = () => (
    <div className="bg-[#293056] h-44 p-4 border border-gray-600 rounded-lg text-left animate-pulse">
      <p className="text-3xl font-kern font-medium bg-gray-600 h-8 w-3/4 mb-4"></p>
      <p className="bg-gray-500 h-5 w-1/2"></p>
    </div>
  );

  // useEffect to simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Simulate loading time
      } catch (error) {
        console.error("Error fetching metrics:", error);
        setHasError(true); // Set error state if fetching fails
      }
    };

    fetchData();
  }, []);

  // Render error message if data fetching fails
  if (hasError) {
    return (
      <div className="text-center text-red-500">
        <p>Failed to load performance metrics. Please try again.</p>
      </div>
    );
  }

  /**
   * Opens the relevant modal based on category type and task.
   * @param {string} type - The modal type ("to-do", "in-progress", "review").
   * @param {object} task - The task to pass to the modal.
   */
  const handleModalOpen = (type: string, task = null) => {
    setModalType(type);
    setSelectedTask(task);
  };

  // Closes the currently open modal
  const closeModal = () => {
    setModalType(null);
    setSelectedTask(null);
  };

  /**
   * Returns the appropriate button text based on the task category.
   * @param {string} categoryId - The ID of the task category.
   * @returns {string} - The button text for the category.
   */
  const getButtonText = (categoryId: string) => {
    switch (categoryId) {
      case "to-do":
        return "Assign Task";
      case "in-progress":
        return "Reassign Task";
      case "review":
        return "Review Task";
      default:
        return "";
    }
  };

  return (
    <div className="font-sans text-white p-6 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Displaying performance metrics with loading state */}
        {isLoading ? <Placeholder /> : (
          <div className="bg-[#293056] h-44 p-4 border border-gray-600 rounded-lg text-left">
            <p className="text-3xl font-kern font-medium">{metrics.tasksCompleted || "0/0"}</p>
            <p className="text-white font-thin font-kern">Tasks Completed</p>
          </div>
        )}
        {isLoading ? <Placeholder /> : (
          <div className="bg-[#293056] h-44 p-4 border border-gray-600 rounded-lg text-left">
            <p className="text-3xl font-kern font-medium">{metrics.pullRequestsApproved || "0/0"}</p>
            <p className="text-white font-thin font-kern">Pull Requests Approved</p>
          </div>
        )}
        {isLoading ? <Placeholder /> : (
          <div className="bg-[#293056] h-44 p-4 border border-gray-600 rounded-lg text-left">
            <p className="text-3xl font-kern font-medium">{metrics.avgTaskCompletionTime || "0"} Days</p>
            <p className="text-white font-thin font-kern">Avg Task Completion Time</p>
          </div>
        )}
      </div>

      {/* Button to create new task */}
      <button className="mt-4 bg-white text-black px-4 py-2 mb-4 rounded-full flex items-center justify-center w-fit transition">
        <img src={githubIcon} className="filter invert pr-1" alt="GitHub Icon" />
        New Task
      </button>

      <div className="w-full overflow-x-auto">
        {/* Task categories and their corresponding tasks */}
        <div className="flex w-screen gap-5 h-auto">
          {categories.map((category) => (
            <div key={category.id} className="bg-[#161B22] rounded-lg p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-[#C9D1D9]">{category.title}</h3>
                <span className="bg-[#30363D] text-white rounded-full py-1 px-3 text-xs">
                  {getTasksByCategory(category.id).length}
                </span>
              </div>
              <div className="mt-2">
                {getTasksByCategory(category.id).length === 0 ? (
                  <p>No tasks available</p>
                ) : (
                  getTasksByCategory(category.id).map((task) => (
                    <div
                      key={task.id}
                      className="bg-[#1C2128] overflow-x-auto max-w-screen-md font-kern rounded-lg p-4 mb-4 shadow-md"
                    >
                      <h4 className="text-lg mb-2">{task.title}</h4>
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-2 mb-2">
                          {task.assignees?.map((assignee, index) => (
                            <img
                              key={index}
                              src={assignee.avatar}
                              alt={assignee.name}
                              className="w-8 h-8 rounded-full"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-[#8B949E] mb-2">Due by {task.dueDate}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap mb-2">
                        {task.tags?.map((tag, index) => (
                          <span key={index} className="bg-[#30363D] text-white py-1 px-3 rounded-lg text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Button for interacting with the task */}
                      <CustomBtn
                        text={getButtonText(category.id)}
                        classname=""
                        onClick={() => handleModalOpen(category.id, task as any)}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals based on task category */}
      {modalType === "to-do" && <AssignTaskModal isOpen onClose={closeModal} task={selectedTask as any} />}
      {modalType === "in-progress" && <ReassignTaskModal isOpen onClose={closeModal} />}
      {/* {modalType === "review" && <ReviewTaskModal isOpen onClose={closeModal} task={selectedTask} />} */}
    </div>
  );
};

export default Tasks;