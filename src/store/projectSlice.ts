import { createSlice } from '@reduxjs/toolkit'
import { fetchProject } from 'api'

export interface ProjectState {
  project: Project | null
  status: string
  error?: string
}

const initialState: ProjectState = {
  project: null,
  status: 'idle',
  error: undefined
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProject.pending, (state) => {
      state.status = 'loading'
      state.error = ''
    })
    .addCase(fetchProject.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.project = action.payload
    })
    .addCase(fetchProject.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default projectSlice.reducer