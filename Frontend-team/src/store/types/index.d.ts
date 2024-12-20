import {store} from ".."
// import {store} from ".."
import {store} from "../"
export interface ICounter {
    value: number;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }
  
export const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
  };

export interface UserInfo {
    firstname: string;
    lastname: string;
    biography: string;
    email: string;
    // role: enum ["contributor", "maintainer"];
    website: string;
    telegram: string;
    profession: string;
    twitter: string;
    location: string;
    company: string;
  } 

  export interface IOnboardUserState {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: "Contributor" | "Maintainer";
    photoURL: string;
    bio: string;
    location: string;
    website: string;
    profession: "Tech" | "Non-Tech";
    expertise: "Beginner" | "Intermediate" | "Expert";
    skills: string[]; // New field for skills
    goals:string[];
  }
  
export interface IOnboardingIndex {
  currentIndex: number;
}

export interface Task {
  title: string;
  status: "completed" | "in-progress" | "pending";
  progress: string; // e.g., "75%"
  dueDate: string; // ISO string format
}

export interface Project {
  id: number;
  logo: string;
  title: string;
  skills: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  contributors: number;
  companyName: string;
  tags: string[];
  productLogo: string;
  reward: number;
  status: "in-progress" | "completed" | "pending";
  applicants: number;
  duration: string;
  bugs: number;
  taskDetail: {
    description: string;
    requirements: string[];
    tasks: Task[];
  };
  timeLeft: string;
  maintainer: string;
}

export interface FilterState {
  skills: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced" | null;
  rewards: number | null;
  tags: string[];
  status: "in-progress" | "completed" | "pending" | null;
}

export interface ProjectsState {
  projects: Project[];
  filters: FilterState;
}
