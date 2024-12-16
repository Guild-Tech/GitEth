/**
 * MetricsContext and MetricsProvider
 *
 * This file defines the MetricsContext and the MetricsProvider, which are used to manage 
 * and provide the metrics data throughout the application. Metrics include performance 
 * data, contributor details, financial information, and application statistics.
 *
 * Key Features:
 * - `MetricsContext`: A React Context that provides access to metrics data and its setter.
 * - `MetricsProvider`: A Context Provider that wraps components, allowing them to access 
 *   and update metrics data.
 * - Predefined demo values for metrics to simulate realistic data.
 *
 * Components using this context can access or modify metrics data seamlessly.
 */

import React, { createContext, useState, ReactNode, FC } from "react";
import img1 from "@/assets/images/Ellipse 5 (1).png";
import img2 from "@/assets/images/Ellipse 4.png";

// Define the types for each metric data structure

// Payment information for contributors
interface Payment {
  image: string; // Contributor profile image
  contributor: string; // Contributor name
  amount: number; // Payment amount
  status: string; // Payment status (e.g., "Pending", "Complete")
  date: string; // Date of payment
}

// Detailed contributor information
interface Contributor {
  id: string; // Unique identifier for the contributor
  name: string; // Contributor name
  tasksCompleted: number; // Number of tasks completed
  joinedDate: string; // Join date of the contributor
  status: "active" | "churned" | "new" | "struggling"; // Contributor status
  repository: string; // Repository assigned to the contributor
  strugglingOn: string; // Task or issue the contributor is struggling with
  reason: string; // Reason for struggling or churned status
  currentTask: string; // Current task assigned to the contributor
}

// Active contributor metrics
interface ActiveContributor {
  contributor: string; // Name of the contributor
  closedPRs: string; // Number of closed pull requests
  completedIssues: string; // Number of completed issues
  codeReviews: string; // Number of code reviews completed
}

// Define the overall Metrics type
interface Metrics {
  tasksCompleted: string; // Ratio of tasks completed
  pullRequestsApproved: string; // Ratio of approved pull requests
  avgTaskCompletionTime: string; // Average time to complete tasks
  availableFunds: string; // Available funds
  pendingPayments: string; // Pending payment details
  payments: Payment[]; // List of payments
  newContributors: Contributor[]; // List of new contributors
  churnedContributors: Contributor[]; // List of churned contributors
  activeContributors: ActiveContributor[]; // List of active contributors
  strugglingContributors: Contributor[]; // List of struggling contributors
  pendingApplications: number; // Count of pending applications
  approvedApplications: number; // Count of approved applications
  rejectedApplications: number; // Count of rejected applications
  applications: {
    contributor: string; // Contributor name
    task: string; // Task name
    date: string; // Application date
    status: string; // Application status (e.g., "Pending", "Complete", "Rejected")
    actions: string; // Available actions for the application
  }[]; // List of applications
}

// Define the context type with metrics and its setter
interface MetricsContextType {
  metrics: Metrics; // Metrics data
  setMetrics: React.Dispatch<React.SetStateAction<Metrics>>; // Setter for metrics
}

// Create the context
export const MetricsContext = createContext<MetricsContextType | undefined>(
  undefined
);

// Props type for the provider
interface MetricsProviderProps {
  children: ReactNode; // Components wrapped by the provider
}

// Provider component
export const MetricsProvider: FC<MetricsProviderProps> = ({ children }) => {
  // Initialize metrics state with demo values
  const [metrics, setMetrics] = useState<Metrics>({
    tasksCompleted: "45/60",
    pullRequestsApproved: "20/25",
    avgTaskCompletionTime: "4 ",
    availableFunds: "30000 ",
    pendingPayments: "2000 USDT 2 5 Contributors",
    payments: [
      {
        image: img1,
        contributor: "Noyi_24_7",
        amount: 1500,
        status: "Pending",
        date: "2024-12-05",
      },
      {
        image: img2,
        contributor: "Vhee",
        amount: 1000,
        status: "Complete",
        date: "2024-12-06",
      },
    ],
    newContributors: [
      {
        id: "1",
        name: "Noyi_24_7",
        tasksCompleted: 5,
        joinedDate: "Nov 15",
        status: "new",
        repository: "Repo1",
        strugglingOn: "",
        reason: "",
        currentTask: "UI testing",
      },
      {
        id: "2",
        name: "Noyi_24_7",
        tasksCompleted: 3,
        joinedDate: "Nov 15",
        status: "new",
        repository: "Repo2",
        strugglingOn: "",
        reason: "",
        currentTask: "DAO Voting Contract",
      },
    ],
    churnedContributors: [
      {
        id: "3",
        name: "Aj",
        tasksCompleted: 2,
        joinedDate: "Nov 15",
        status: "churned",
        repository: "Repo3",
        strugglingOn: "Issue #10",
        reason: "Lack of time commitment",
        currentTask: "UI testing",
      },
    ],
    activeContributors: [
      {
        contributor: "John_Smith",
        closedPRs: "5",
        completedIssues: "4",
        codeReviews: "0",
      },
      {
        contributor: "Jane Doe",
        closedPRs: "2",
        completedIssues: "2",
        codeReviews: "1",
      },
    ],
    strugglingContributors: [
      {
        id: "4",
        contributor: "John_Smith",
        tasksCompleted: 1,
        joinedDate: "2024-09-01",
        status: "struggling",
        repository: "Repo",
        strugglingOn: "Wireshape Platform dApp Section",
        reason: "0",
      },
      {
        id: "5",
        contributor: "Jane Doe",
        tasksCompleted: 2,
        joinedDate: "2024-08-20",
        status: "struggling",
        repository: "2",
        strugglingOn: "2",
        reason: "1",
      },
    ],
    pendingApplications: 12,
    approvedApplications: 5,
    rejectedApplications: 3,
    applications: [
      {
        contributor: "Noyi_24_7",
        task: "Write Unit Tests",
        date: "Nov 18",
        status: "Pending",
        actions: "Review",
      },
      {
        contributor: "Vhee",
        task: "Create UI Components",
        date: "Nov 17",
        status: "Complete",
        actions: "View Details",
      },
      {
        contributor: "Aj",
        task: "Fix API Integration",
        date: "Nov 18",
        status: "Rejected",
        actions: "View Feedback",
      },
      {
        contributor: "Fufu",
        task: "Write Unit Tests",
        date: "Nov 15",
        status: "Pending",
        actions: "Review",
      },
    ],
  });

  return (
    // Provide metrics and its setter to all wrapped components
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
};
