import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Project, ProjectsState } from "../types";
import projectdummy from "../../utils/dummyProject.json";

const initialState: ProjectsState = {
  projects: projectdummy as any,
  filters: {
    skills: [],
    difficulty: null,
    rewards: null, // Rewards filter: "Lowest" or "Highest"
    tags: [],
    status: null,
    fundingType: null,
    sortBy: null, // Sorting filter: "mostActive", "trending", "mostRecent", "reward"
  },
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<FilterState>>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, resetFilters } = projectsSlice.actions;

export const selectFilteredProjects = (state: { projects: ProjectsState }): Project[] => {
  const { projects, filters } = state.projects;

  // Apply all the filters
  const filteredProjects = projects.filter((project) => {
    const { skills, difficulty, rewards, tags, status, fundingType } = filters;

    return (
      (!skills.length || skills.every((skill) => project.skills.includes(skill))) &&
      (!difficulty || project.difficulty === difficulty) &&
      (!rewards || (rewards == 500 ? project.reward <= 500 : project.reward >= 500)) && // Apply reward filter
      (!tags.length || tags.every((tag) => project.tags.includes(tag))) &&
      (!status || project.status === status) &&
      (!fundingType || project.fundingType === fundingType)  // Apply fundingType filter
    );
  });

  // Apply sorting if any filter is selected
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "mostActive":
        return filteredProjects.sort((a, b) => b.activeIssues - a.activeIssues);
      case "trending":
        return filteredProjects.sort((a, b) => (b.trend ? 1 : 0) - (a.trend ? 1 : 0));
      case "mostRecent":
        return filteredProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "reward":
        return filteredProjects.sort((a, b) => b.reward - a.reward);  // Highest rewards first
      case "rewardLowToHigh":
        return filteredProjects.sort((a, b) => a.reward - b.reward);  // Lowest rewards first
      default:
        return filteredProjects;
    }
  }

  return filteredProjects;
};

export default projectsSlice.reducer;
