import { createAsyncThunk } from '@reduxjs/toolkit'

const API_BASE = 'https://recruitment01.vercel.app/api'

export const fetchProject = createAsyncThunk('project/fetchProject', async (projectId?: string) => {
  if (!projectId) {
    const response = await fetch(`${API_BASE}/init`)
    if (!response.ok) {
      throw new Error('Failed to fetch project.')
    }
    const data = await response.json()
    projectId = data.id
  }

  const response = await fetch(`${API_BASE}/project/${projectId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch project.')
  }
  const data = await response.json()
  return data.project
})