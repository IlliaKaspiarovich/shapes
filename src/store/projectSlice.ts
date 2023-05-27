import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ProjectState {
  project: Project | null
  status: string
  error?: string
}

const initialState: ProjectState = {
  project: null,
  status: 'idle',
  error: undefined,
}

export const fetchProject = createAsyncThunk('project/fetchProject', async (projectId?: string) => {
  if (!projectId) {
    const response = await fetch('https://recruitment01.vercel.app/api/init')
    if (!response.ok) {
      throw new Error('Failed to fetch project.')
    }
    const data = await response.json()
    projectId = data.id
  }

  const response = await fetch(`https://recruitment01.vercel.app/api/project/${projectId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch project.')
  }
  const data = await response.json()
  return data.project
});

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