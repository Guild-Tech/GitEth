import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Project, ProjectsState } from "../types";
// import { ProjectsState, FilterState, Project } from "./types";
import projectdummy from "../../utils/dummyProject.json"
const initialState: ProjectsState = {
  projects: projectdummy as any,
  filters: {
    skills: [],
    difficulty: null,
    rewards: null,
    tags: [],
    status: null,
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

  return projects.filter((project) => {
    const { skills, difficulty, rewards, tags, status } = filters;

    return (
      (!skills.length || skills.every((skill) => project.skills.includes(skill))) &&
      (!difficulty || project.difficulty === difficulty) &&
      (!rewards || project.reward >= rewards) &&
      (!tags.length || tags.every((tag) => project.tags.includes(tag))) &&
      (!status || project.status === status)
    );
  });
};

export default projectsSlice.reducer;
