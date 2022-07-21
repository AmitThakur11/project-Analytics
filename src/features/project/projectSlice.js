import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  value: [
    {
      id: 1,
      name: "Project 01",
      budget: 5000,
      endDate: "03/07/2022, 02:39:00",
    },
    {
      id: 2,
      name: "Project 02",
      budget: 4000,
      endDate: "03/07/2022, 02:39:00",
    },
    {
      id: 3,
      name: "Project 03",
      budget: 1000,
      endDate: "03/07/2022, 02:39:00",
    },
    {
      id: 4,
      name: "Project 04",
      budget: 8000,
      endDate: "03/07/2022, 02:39:00",
    },
  ],
  input: {
    id: "",
    name: "",
    budget: 0,
    endDate: "",
  },
  toggle: {
    addProjectForm: false,
    editProjectForm: false,
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getInput: (state, action) => {
      const { name, value } = action.payload;
      state.input[name] = value;
    },
    addProject: (state, action) => {
      let { budget, endDate } = state.input;
      endDate = new Date(endDate);
      endDate = endDate.toLocaleString();
      state.value.push({
        id: uuidv4(),
        ...state.input,
        budget: parseInt(budget),
        endDate: endDate,
      });
    },
    deleteProject: (state, action) => {
      let filteredData = state.value.filter(({ id }) => id !== action.payload);
      state.value = filteredData;
    },
    copyProject: (state, action) => {
      state.value.push({...action.payload ,id: uuidv4()});
    },
    editProject: (state) => {
        
      const index = state.value.findIndex((el) => el.id === state.input.id);
      state.value[index] = state.input;
      state.input = initialState.input;
    },
    toggleAddProjectForm: (state) => {
      state.input = initialState.input;
      state.toggle.addProjectForm = !state.toggle.addProjectForm;
    },
    toggleEditProjectForm: (state, action) => {
      state.input = action.payload;
      state.toggle.editProjectForm = !state.toggle.editProjectForm;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getInput,
  addProject,
  toggleAddProjectForm,
  deleteProject,
  copyProject,
  editProject,
  toggleEditProjectForm,
} = projectSlice.actions;
export default projectSlice.reducer;
