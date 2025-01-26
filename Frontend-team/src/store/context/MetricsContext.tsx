/**
 * MetricsContext and MetricsProvider
 *
 * This file defines the MetricsContext and the MetricsProvider, which are used to manage 
 * and provide the metrics data throughout the application. Metrics include performance 
 * data, contributor details, financial information, and application statistics, with 
 * enhanced details to support team collaboration.
 *
 * Key Features:
 * - `MetricsContext`: A React Context that provides access to metrics data and its setter.
 * - `MetricsProvider`: A Context Provider that wraps components, allowing them to access 
 *   and update metrics data.
 * - Predefined demo values for metrics to simulate realistic team collaboration data.
 *
 * Components using this context can access or modify metrics data seamlessly.
 */

import React, { createContext, useState, ReactNode, FC } from "react";
import img1 from "@/assets/images/Ellipse 5 (1).png";
import img2 from "@/assets/images/Ellipse 4.png";


// Define the types for each metric data structure

interface Payment {
  image: string; // Contributor profile image
  contributor: string; // Contributor name
  amount: number; // Payment amount
  status: string; // Payment status (e.g., "Pending", "Complete")
  date: string; // Date of payment
}

interface Contributor {
  id: string;
  name: string;
  tasksCompleted: number;
  joinedDate: string;
  status: "active" | "churned" | "new" | "struggling";
  repository: string;
  strugglingOn: string;
  reason: string;
  currentTask: string;
}

interface ActiveContributor {
  contributor: string;
  closedPRs: string;
  completedIssues: string;
  codeReviews: string;
}

interface RepositoryCollaboration {
  repository: string;
  activeContributors: number;
  issuesResolved: number;
  pullRequestsMerged: number;
}

interface Task {
  id: string;
  title: string;
  category: "to-do" | "in-progress" | "review" | "done";
  dueDate: string;
  tags: string[];
  description: string;
  assignees: {
    name: string;
    avatar: string;
  }[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
}

interface Comment {
  author: string;
  text: string;
  timestamp: Date;
}

// Define the overall Metrics type
interface Metrics {
  tasksCompleted: string;
  pullRequestsApproved: string;
  avgTaskCompletionTime: string;
  availableFunds: string;
  pendingPayments: string;
  payments: Payment[];
  newContributors: Contributor[];
  churnedContributors: Contributor[];
  activeContributors: ActiveContributor[];
  strugglingContributors: Contributor[];
  repositoryCollaborations: RepositoryCollaboration[];
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  applications: {
    contributor: string;
    task: string;
    date: string;
    status: string;
    actions: string;
  }[];
  projectLeads: {
    name: string;
    index: number;
  }[];
  contributors: {
    name: string;
    role: string;
    tasksAssigned: number;
    progress: string;
  }[];
  tasks: Task[];
  comments: Comment[];
}

// Define the context type with metrics and its setter
interface MetricsContextType {
  metrics: Metrics;
  setMetrics: React.Dispatch<React.SetStateAction<Metrics>>;
}

// Create the context
export const MetricsContext = createContext<MetricsContextType | undefined>(
  undefined
);

// Props type for the provider
interface MetricsProviderProps {
  children: ReactNode;
}

// Provider component
export const MetricsProvider: FC<MetricsProviderProps> = ({ children }) => {
  // Initialize metrics state with demo values
  const [metrics, setMetrics] = useState<Metrics>({
    tasksCompleted: "45/60",
    pullRequestsApproved: "20/25",
    avgTaskCompletionTime: "4 days",
    availableFunds: "$30,000",
    pendingPayments: "$2,000 (5 Contributors)",
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
        joinedDate: "2024-11-15",
        status: "new",
        repository: "Repo1",
        strugglingOn: "",
        reason: "",
        currentTask: "UI testing",
      },
    ],
    churnedContributors: [
      {
        id: "2",
        name: "Aj",
        tasksCompleted: 2,
        joinedDate: "2024-11-15",
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
    ],
    strugglingContributors: [
      {
        id: "3",
        name: "Jane Doe",
        tasksCompleted: 2,
        joinedDate: "2024-08-20",
        status: "struggling",
        repository: "Repo2",
        strugglingOn: "Task #5",
        reason: "Lack of mentorship",
        currentTask: "Write Unit Tests",
      },
    ],
    repositoryCollaborations: [
      {
        repository: "Repo1",
        activeContributors: 5,
        issuesResolved: 10,
        pullRequestsMerged: 8,
      },
    ],
    pendingApplications: 12,
    approvedApplications: 5,
    rejectedApplications: 3,
    applications: [
      {
        contributor: "Noyi_24_7",
        task: "Write Unit Tests",
        date: "2024-11-18",
        status: "Pending",
        actions: "Review",
      },
    ],
    projectLeads: [
      { name: "Noyi24_7", index: 1 },
      { name: "Vhee", index: 2 },
    ],
    contributors: [
      {
        name: "Noyi24_7",
        role: "Developer",
        tasksAssigned: 3,
        progress: "1 In Progress | 2 Completed",
      },
      {
        name: "Vhee",
        role: "Developer",
        tasksAssigned: 1,
        progress: "0 In Progress | 1 Completed",
      },
      {
        name: "Aj",
        role: "Designer",
        tasksAssigned: 2,
        progress: "0 In Progress | 1 Completed",
      },
    ],
    tasks: [
      {
        id: "1",
        title: "Wireshape Platform dApp Section",
        category: "to-do",
        dueDate: "8th Nov",
        tags: ["Design", "UX"],
        assignees: [
          { name: "John Doe", avatar: img1 },
          { name: "Jane Smith", avatar: img2 },
        ],
        skillLevel: "Intermediate",
        skills: ["React", "Security", "Community", "UX Design", "Solidity", "Marketing"],
        description: "Help improve the security and scalability of a cutting-edge decentralized finance protocol.",
      },
      {
        id: "2",
        title: "Wireshape Platform dApp Section",
        category: "in-progress",
        dueDate: "8th Nov",
        tags: ["Development", "Backend"],
        assignees: [
          { name: "John Doe", avatar: img1 },
          { name: "Jane Smith", avatar: img2 },
        ],
        skillLevel: "Intermediate",
        skills: ["Backend", "API", "Node.js"],
        description: "Backend work to integrate the decentralized protocol with our platform.",
      },
    ],
    comments: [
      {
        author: "Alice",
        text: "Let's Wire and Shape our Community!",
        timestamp: new Date(),
      },
      {
        author: "Bob",
        text: "Let's Wire and Shape our Community!",
        timestamp: new Date(),
      },
      {
        author: "Charlie",
        text: "Let's Wire and Shape our Community!",
        timestamp: new Date(),
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